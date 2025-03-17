__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 6089,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 66,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 19,
        "name": "Covariant",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 19,
        "end": 22,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 20,
            "end": 21,
            "name": {
              "type": "Identifier",
              "start": 20,
              "end": 21,
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
          }
        ]
      },
      "body": {
        "type": "TSInterfaceBody",
        "start": 23,
        "end": 66,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 29,
            "end": 64,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 29,
              "end": 32,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 32,
              "end": 63,
              "typeAnnotation": {
                "type": "TSConditionalType",
                "start": 34,
                "end": 63,
                "checkType": {
                  "type": "TSTypeReference",
                  "start": 34,
                  "end": 35,
                  "typeName": {
                    "type": "Identifier",
                    "start": 34,
                    "end": 35,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                "extendsType": {
                  "type": "TSStringKeyword",
                  "start": 44,
                  "end": 50
                },
                "trueType": {
                  "type": "TSTypeReference",
                  "start": 53,
                  "end": 54,
                  "typeName": {
                    "type": "Identifier",
                    "start": 53,
                    "end": 54,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                "falseType": {
                  "type": "TSNumberKeyword",
                  "start": 57,
                  "end": 63
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
      "type": "TSInterfaceDeclaration",
      "start": 68,
      "end": 144,
      "id": {
        "type": "Identifier",
        "start": 78,
        "end": 91,
        "name": "Contravariant",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 91,
        "end": 94,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 92,
            "end": 93,
            "name": {
              "type": "Identifier",
              "start": 92,
              "end": 93,
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
          }
        ]
      },
      "body": {
        "type": "TSInterfaceBody",
        "start": 95,
        "end": 144,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 101,
            "end": 142,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 101,
              "end": 104,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 104,
              "end": 141,
              "typeAnnotation": {
                "type": "TSConditionalType",
                "start": 106,
                "end": 141,
                "checkType": {
                  "type": "TSTypeReference",
                  "start": 106,
                  "end": 107,
                  "typeName": {
                    "type": "Identifier",
                    "start": 106,
                    "end": 107,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                "extendsType": {
                  "type": "TSStringKeyword",
                  "start": 116,
                  "end": 122
                },
                "trueType": {
                  "type": "TSTypeOperator",
                  "start": 125,
                  "end": 132,
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 131,
                    "end": 132,
                    "typeName": {
                      "type": "Identifier",
                      "start": 131,
                      "end": 132,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "falseType": {
                  "type": "TSNumberKeyword",
                  "start": 135,
                  "end": 141
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
      "type": "TSInterfaceDeclaration",
      "start": 146,
      "end": 213,
      "id": {
        "type": "Identifier",
        "start": 156,
        "end": 165,
        "name": "Invariant",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 165,
        "end": 168,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 166,
            "end": 167,
            "name": {
              "type": "Identifier",
              "start": 166,
              "end": 167,
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
          }
        ]
      },
      "body": {
        "type": "TSInterfaceBody",
        "start": 169,
        "end": 213,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 175,
            "end": 211,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 175,
              "end": 178,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 178,
              "end": 210,
              "typeAnnotation": {
                "type": "TSConditionalType",
                "start": 180,
                "end": 210,
                "checkType": {
                  "type": "TSTypeReference",
                  "start": 180,
                  "end": 181,
                  "typeName": {
                    "type": "Identifier",
                    "start": 180,
                    "end": 181,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                "extendsType": {
                  "type": "TSStringKeyword",
                  "start": 190,
                  "end": 196
                },
                "trueType": {
                  "type": "TSTypeOperator",
                  "start": 199,
                  "end": 206,
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 205,
                    "end": 206,
                    "typeName": {
                      "type": "Identifier",
                      "start": 205,
                      "end": 206,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "falseType": {
                  "type": "TSTypeReference",
                  "start": 209,
                  "end": 210,
                  "typeName": {
                    "type": "Identifier",
                    "start": 209,
                    "end": 210,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
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
      "type": "FunctionDeclaration",
      "start": 215,
      "end": 312,
      "id": {
        "type": "Identifier",
        "start": 224,
        "end": 226,
        "name": "f1",
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
          "start": 243,
          "end": 258,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 244,
            "end": 258,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 246,
              "end": 258,
              "typeName": {
                "type": "Identifier",
                "start": 246,
                "end": 255,
                "name": "Covariant",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 255,
                "end": 258,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 256,
                    "end": 257,
                    "typeName": {
                      "type": "Identifier",
                      "start": 256,
                      "end": 257,
                      "name": "A",
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
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 260,
          "end": 275,
          "name": "b",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 261,
            "end": 275,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 263,
              "end": 275,
              "typeName": {
                "type": "Identifier",
                "start": 263,
                "end": 272,
                "name": "Covariant",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 272,
                "end": 275,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 273,
                    "end": 274,
                    "typeName": {
                      "type": "Identifier",
                      "start": 273,
                      "end": 274,
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
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 277,
        "end": 312,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 283,
            "end": 289,
            "expression": {
              "type": "AssignmentExpression",
              "start": 283,
              "end": 288,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 283,
                "end": 284,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 287,
                "end": 288,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 294,
            "end": 300,
            "expression": {
              "type": "AssignmentExpression",
              "start": 294,
              "end": 299,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 294,
                "end": 295,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 298,
                "end": 299,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 226,
        "end": 242,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 227,
            "end": 228,
            "name": {
              "type": "Identifier",
              "start": 227,
              "end": 228,
              "name": "A",
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
            "start": 230,
            "end": 241,
            "name": {
              "type": "Identifier",
              "start": 230,
              "end": 231,
              "name": "B",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
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
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 314,
      "end": 419,
      "id": {
        "type": "Identifier",
        "start": 323,
        "end": 325,
        "name": "f2",
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
          "start": 342,
          "end": 361,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 343,
            "end": 361,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 345,
              "end": 361,
              "typeName": {
                "type": "Identifier",
                "start": 345,
                "end": 358,
                "name": "Contravariant",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 358,
                "end": 361,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 359,
                    "end": 360,
                    "typeName": {
                      "type": "Identifier",
                      "start": 359,
                      "end": 360,
                      "name": "A",
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
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 363,
          "end": 382,
          "name": "b",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 364,
            "end": 382,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 366,
              "end": 382,
              "typeName": {
                "type": "Identifier",
                "start": 366,
                "end": 379,
                "name": "Contravariant",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 379,
                "end": 382,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 380,
                    "end": 381,
                    "typeName": {
                      "type": "Identifier",
                      "start": 380,
                      "end": 381,
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
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 384,
        "end": 419,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 390,
            "end": 396,
            "expression": {
              "type": "AssignmentExpression",
              "start": 390,
              "end": 395,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 390,
                "end": 391,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 394,
                "end": 395,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 411,
            "end": 417,
            "expression": {
              "type": "AssignmentExpression",
              "start": 411,
              "end": 416,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 411,
                "end": 412,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 415,
                "end": 416,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 325,
        "end": 341,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 326,
            "end": 327,
            "name": {
              "type": "Identifier",
              "start": 326,
              "end": 327,
              "name": "A",
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
            "start": 329,
            "end": 340,
            "name": {
              "type": "Identifier",
              "start": 329,
              "end": 330,
              "name": "B",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 339,
              "end": 340,
              "typeName": {
                "type": "Identifier",
                "start": 339,
                "end": 340,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 421,
      "end": 528,
      "id": {
        "type": "Identifier",
        "start": 430,
        "end": 432,
        "name": "f3",
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
          "start": 449,
          "end": 464,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 450,
            "end": 464,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 452,
              "end": 464,
              "typeName": {
                "type": "Identifier",
                "start": 452,
                "end": 461,
                "name": "Invariant",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 461,
                "end": 464,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 462,
                    "end": 463,
                    "typeName": {
                      "type": "Identifier",
                      "start": 462,
                      "end": 463,
                      "name": "A",
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
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 466,
          "end": 481,
          "name": "b",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 467,
            "end": 481,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 469,
              "end": 481,
              "typeName": {
                "type": "Identifier",
                "start": 469,
                "end": 478,
                "name": "Invariant",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 478,
                "end": 481,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 479,
                    "end": 480,
                    "typeName": {
                      "type": "Identifier",
                      "start": 479,
                      "end": 480,
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
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 483,
        "end": 528,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 489,
            "end": 495,
            "expression": {
              "type": "AssignmentExpression",
              "start": 489,
              "end": 494,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 489,
                "end": 490,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 493,
                "end": 494,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 510,
            "end": 516,
            "expression": {
              "type": "AssignmentExpression",
              "start": 510,
              "end": 515,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 510,
                "end": 511,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 514,
                "end": 515,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 432,
        "end": 448,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 433,
            "end": 434,
            "name": {
              "type": "Identifier",
              "start": 433,
              "end": 434,
              "name": "A",
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
            "start": 436,
            "end": 447,
            "name": {
              "type": "Identifier",
              "start": 436,
              "end": 437,
              "name": "B",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 446,
              "end": 447,
              "typeName": {
                "type": "Identifier",
                "start": 446,
                "end": 447,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 592,
      "end": 699,
      "id": {
        "type": "Identifier",
        "start": 601,
        "end": 611,
        "name": "isFunction",
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
          "start": 615,
          "end": 623,
          "name": "value",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 620,
            "end": 623,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 622,
              "end": 623,
              "typeName": {
                "type": "Identifier",
                "start": 622,
                "end": 623,
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
      "body": {
        "type": "BlockStatement",
        "start": 656,
        "end": 699,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 662,
            "end": 697,
            "argument": {
              "type": "BinaryExpression",
              "start": 669,
              "end": 696,
              "left": {
                "type": "UnaryExpression",
                "start": 669,
                "end": 681,
                "operator": "typeof",
                "prefix": true,
                "argument": {
                  "type": "Identifier",
                  "start": 676,
                  "end": 681,
                  "name": "value",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 686,
                "end": 696,
                "value": "function",
                "raw": "\"function\""
              }
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 611,
        "end": 614,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 612,
            "end": 613,
            "name": {
              "type": "Identifier",
              "start": 612,
              "end": 613,
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
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 624,
        "end": 655,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 626,
          "end": 655,
          "parameterName": {
            "type": "Identifier",
            "start": 626,
            "end": 631,
            "name": "value",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 635,
            "end": 655,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 635,
              "end": 655,
              "typeName": {
                "type": "Identifier",
                "start": 635,
                "end": 642,
                "name": "Extract",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 642,
                "end": 655,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 643,
                    "end": 644,
                    "typeName": {
                      "type": "Identifier",
                      "start": 643,
                      "end": 644,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 646,
                    "end": 654,
                    "typeName": {
                      "type": "Identifier",
                      "start": 646,
                      "end": 654,
                      "name": "Function",
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
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 701,
      "end": 815,
      "id": {
        "type": "Identifier",
        "start": 710,
        "end": 721,
        "name": "getFunction",
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
          "start": 725,
          "end": 732,
          "name": "item",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 729,
            "end": 732,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 731,
              "end": 732,
              "typeName": {
                "type": "Identifier",
                "start": 731,
                "end": 732,
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
      "body": {
        "type": "BlockStatement",
        "start": 734,
        "end": 815,
        "body": [
          {
            "type": "IfStatement",
            "start": 740,
            "end": 790,
            "test": {
              "type": "CallExpression",
              "start": 744,
              "end": 760,
              "callee": {
                "type": "Identifier",
                "start": 744,
                "end": 754,
                "name": "isFunction",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 755,
                  "end": 759,
                  "name": "item",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 762,
              "end": 790,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 772,
                  "end": 784,
                  "argument": {
                    "type": "Identifier",
                    "start": 779,
                    "end": 783,
                    "name": "item",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "ThrowStatement",
            "start": 795,
            "end": 813,
            "argument": {
              "type": "NewExpression",
              "start": 801,
              "end": 812,
              "callee": {
                "type": "Identifier",
                "start": 805,
                "end": 810,
                "name": "Error",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 721,
        "end": 724,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 722,
            "end": 723,
            "name": {
              "type": "Identifier",
              "start": 722,
              "end": 723,
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
          }
        ]
      },
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 817,
      "end": 928,
      "id": {
        "type": "Identifier",
        "start": 826,
        "end": 829,
        "name": "f10",
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
          "start": 833,
          "end": 837,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 834,
            "end": 837,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 836,
              "end": 837,
              "typeName": {
                "type": "Identifier",
                "start": 836,
                "end": 837,
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
      "body": {
        "type": "BlockStatement",
        "start": 839,
        "end": 928,
        "body": [
          {
            "type": "IfStatement",
            "start": 845,
            "end": 926,
            "test": {
              "type": "CallExpression",
              "start": 849,
              "end": 862,
              "callee": {
                "type": "Identifier",
                "start": 849,
                "end": 859,
                "name": "isFunction",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 860,
                  "end": 861,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 864,
              "end": 926,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 874,
                  "end": 896,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 880,
                      "end": 895,
                      "id": {
                        "type": "Identifier",
                        "start": 880,
                        "end": 891,
                        "name": "f",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 881,
                          "end": 891,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 883,
                            "end": 891,
                            "typeName": {
                              "type": "Identifier",
                              "start": 883,
                              "end": 891,
                              "name": "Function",
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
                        "start": 894,
                        "end": 895,
                        "name": "x",
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
                  "type": "VariableDeclaration",
                  "start": 905,
                  "end": 920,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 911,
                      "end": 919,
                      "id": {
                        "type": "Identifier",
                        "start": 911,
                        "end": 915,
                        "name": "t",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 912,
                          "end": 915,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 914,
                            "end": 915,
                            "typeName": {
                              "type": "Identifier",
                              "start": 914,
                              "end": 915,
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
                      },
                      "init": {
                        "type": "Identifier",
                        "start": 918,
                        "end": 919,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "definite": false
                    }
                  ],
                  "kind": "const",
                  "declare": false
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 829,
        "end": 832,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 830,
            "end": 831,
            "name": {
              "type": "Identifier",
              "start": 830,
              "end": 831,
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
          }
        ]
      },
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 930,
      "end": 1030,
      "id": {
        "type": "Identifier",
        "start": 939,
        "end": 942,
        "name": "f11",
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
          "start": 943,
          "end": 981,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 944,
            "end": 981,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 946,
              "end": 981,
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 946,
                  "end": 952
                },
                {
                  "type": "TSFunctionType",
                  "start": 956,
                  "end": 968,
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 959,
                    "end": 968,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 962,
                      "end": 968
                    }
                  }
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 972,
                  "end": 981
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 983,
        "end": 1030,
        "body": [
          {
            "type": "IfStatement",
            "start": 989,
            "end": 1028,
            "test": {
              "type": "CallExpression",
              "start": 993,
              "end": 1006,
              "callee": {
                "type": "Identifier",
                "start": 993,
                "end": 1003,
                "name": "isFunction",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1004,
                  "end": 1005,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 1008,
              "end": 1028,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1018,
                  "end": 1022,
                  "expression": {
                    "type": "CallExpression",
                    "start": 1018,
                    "end": 1021,
                    "callee": {
                      "type": "Identifier",
                      "start": 1018,
                      "end": 1019,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [],
                    "optional": false,
                    "typeArguments": null
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1032,
      "end": 1144,
      "id": {
        "type": "Identifier",
        "start": 1041,
        "end": 1044,
        "name": "f12",
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
          "start": 1045,
          "end": 1083,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1046,
            "end": 1083,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 1048,
              "end": 1083,
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 1048,
                  "end": 1054
                },
                {
                  "type": "TSFunctionType",
                  "start": 1058,
                  "end": 1070,
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 1061,
                    "end": 1070,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1064,
                      "end": 1070
                    }
                  }
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 1074,
                  "end": 1083
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1085,
        "end": 1144,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1091,
            "end": 1116,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1097,
                "end": 1115,
                "id": {
                  "type": "Identifier",
                  "start": 1097,
                  "end": 1098,
                  "name": "f",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 1101,
                  "end": 1115,
                  "callee": {
                    "type": "Identifier",
                    "start": 1101,
                    "end": 1112,
                    "name": "getFunction",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 1113,
                      "end": 1114,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
            "type": "ExpressionStatement",
            "start": 1138,
            "end": 1142,
            "expression": {
              "type": "CallExpression",
              "start": 1138,
              "end": 1141,
              "callee": {
                "type": "Identifier",
                "start": 1138,
                "end": 1139,
                "name": "f",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1146,
      "end": 1173,
      "id": {
        "type": "Identifier",
        "start": 1151,
        "end": 1154,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 1157,
        "end": 1172,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 1159,
            "end": 1170,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1159,
              "end": 1162,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1162,
              "end": 1170,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1164,
                "end": 1170
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
      "start": 1174,
      "end": 1201,
      "id": {
        "type": "Identifier",
        "start": 1179,
        "end": 1182,
        "name": "Bar",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 1185,
        "end": 1200,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 1187,
            "end": 1198,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1187,
              "end": 1190,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1190,
              "end": 1198,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1192,
                "end": 1198
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
      "start": 1203,
      "end": 1266,
      "id": {
        "type": "Identifier",
        "start": 1220,
        "end": 1226,
        "name": "fooBar",
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
          "start": 1227,
          "end": 1258,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1228,
            "end": 1258,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 1230,
              "end": 1258,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 1232,
                  "end": 1244,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1232,
                    "end": 1235,
                    "name": "foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1235,
                    "end": 1243,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1237,
                      "end": 1243
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 1245,
                  "end": 1256,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1245,
                    "end": 1248,
                    "name": "bar",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1248,
                    "end": 1256,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1250,
                      "end": 1256
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1259,
        "end": 1265,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 1261,
          "end": 1265
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 1267,
      "end": 1330,
      "id": {
        "type": "Identifier",
        "start": 1284,
        "end": 1290,
        "name": "fooBat",
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
          "start": 1291,
          "end": 1322,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1292,
            "end": 1322,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 1294,
              "end": 1322,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 1296,
                  "end": 1308,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1296,
                    "end": 1299,
                    "name": "foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1299,
                    "end": 1307,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1301,
                      "end": 1307
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 1309,
                  "end": 1320,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1309,
                    "end": 1312,
                    "name": "bat",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1312,
                    "end": 1320,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1314,
                      "end": 1320
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1323,
        "end": 1329,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 1325,
          "end": 1329
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1332,
      "end": 1403,
      "id": {
        "type": "Identifier",
        "start": 1337,
        "end": 1345,
        "name": "Extract2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1345,
        "end": 1354,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1346,
            "end": 1347,
            "name": {
              "type": "Identifier",
              "start": 1346,
              "end": 1347,
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
            "start": 1349,
            "end": 1350,
            "name": {
              "type": "Identifier",
              "start": 1349,
              "end": 1350,
              "name": "U",
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
            "start": 1352,
            "end": 1353,
            "name": {
              "type": "Identifier",
              "start": 1352,
              "end": 1353,
              "name": "V",
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
        "type": "TSConditionalType",
        "start": 1357,
        "end": 1402,
        "checkType": {
          "type": "TSTypeReference",
          "start": 1357,
          "end": 1358,
          "typeName": {
            "type": "Identifier",
            "start": 1357,
            "end": 1358,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSTypeReference",
          "start": 1367,
          "end": 1368,
          "typeName": {
            "type": "Identifier",
            "start": 1367,
            "end": 1368,
            "name": "U",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "trueType": {
          "type": "TSConditionalType",
          "start": 1371,
          "end": 1394,
          "checkType": {
            "type": "TSTypeReference",
            "start": 1371,
            "end": 1372,
            "typeName": {
              "type": "Identifier",
              "start": 1371,
              "end": 1372,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          "extendsType": {
            "type": "TSTypeReference",
            "start": 1381,
            "end": 1382,
            "typeName": {
              "type": "Identifier",
              "start": 1381,
              "end": 1382,
              "name": "V",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          "trueType": {
            "type": "TSTypeReference",
            "start": 1385,
            "end": 1386,
            "typeName": {
              "type": "Identifier",
              "start": 1385,
              "end": 1386,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 1389,
            "end": 1394
          }
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 1397,
          "end": 1402
        }
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1405,
      "end": 1555,
      "id": {
        "type": "Identifier",
        "start": 1414,
        "end": 1417,
        "name": "f20",
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
          "start": 1421,
          "end": 1453,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1422,
            "end": 1453,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1424,
              "end": 1453,
              "typeName": {
                "type": "Identifier",
                "start": 1424,
                "end": 1431,
                "name": "Extract",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1431,
                "end": 1453,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1432,
                    "end": 1447,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1432,
                      "end": 1439,
                      "name": "Extract",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 1439,
                      "end": 1447,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 1440,
                          "end": 1441,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1440,
                            "end": 1441,
                            "name": "T",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 1443,
                          "end": 1446,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1443,
                            "end": 1446,
                            "name": "Foo",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      ]
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 1449,
                    "end": 1452,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1449,
                      "end": 1452,
                      "name": "Bar",
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
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 1455,
          "end": 1479,
          "name": "y",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1456,
            "end": 1479,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1458,
              "end": 1479,
              "typeName": {
                "type": "Identifier",
                "start": 1458,
                "end": 1465,
                "name": "Extract",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1465,
                "end": 1479,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1466,
                    "end": 1467,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1466,
                      "end": 1467,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSIntersectionType",
                    "start": 1469,
                    "end": 1478,
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "start": 1469,
                        "end": 1472,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1469,
                          "end": 1472,
                          "name": "Foo",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      },
                      {
                        "type": "TSTypeReference",
                        "start": 1475,
                        "end": 1478,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1475,
                          "end": 1478,
                          "name": "Bar",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 1481,
          "end": 1505,
          "name": "z",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1482,
            "end": 1505,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1484,
              "end": 1505,
              "typeName": {
                "type": "Identifier",
                "start": 1484,
                "end": 1492,
                "name": "Extract2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1492,
                "end": 1505,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1493,
                    "end": 1494,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1493,
                      "end": 1494,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 1496,
                    "end": 1499,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1496,
                      "end": 1499,
                      "name": "Foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 1501,
                    "end": 1504,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1501,
                      "end": 1504,
                      "name": "Bar",
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
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1507,
        "end": 1555,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1513,
            "end": 1523,
            "expression": {
              "type": "CallExpression",
              "start": 1513,
              "end": 1522,
              "callee": {
                "type": "Identifier",
                "start": 1513,
                "end": 1519,
                "name": "fooBar",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1520,
                  "end": 1521,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1528,
            "end": 1538,
            "expression": {
              "type": "CallExpression",
              "start": 1528,
              "end": 1537,
              "callee": {
                "type": "Identifier",
                "start": 1528,
                "end": 1534,
                "name": "fooBar",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1535,
                  "end": 1536,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1543,
            "end": 1553,
            "expression": {
              "type": "CallExpression",
              "start": 1543,
              "end": 1552,
              "callee": {
                "type": "Identifier",
                "start": 1543,
                "end": 1549,
                "name": "fooBar",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1550,
                  "end": 1551,
                  "name": "z",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1417,
        "end": 1420,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1418,
            "end": 1419,
            "name": {
              "type": "Identifier",
              "start": 1418,
              "end": 1419,
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
          }
        ]
      },
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1557,
      "end": 1737,
      "id": {
        "type": "Identifier",
        "start": 1566,
        "end": 1569,
        "name": "f21",
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
          "start": 1573,
          "end": 1605,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1574,
            "end": 1605,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1576,
              "end": 1605,
              "typeName": {
                "type": "Identifier",
                "start": 1576,
                "end": 1583,
                "name": "Extract",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1583,
                "end": 1605,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1584,
                    "end": 1599,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1584,
                      "end": 1591,
                      "name": "Extract",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 1591,
                      "end": 1599,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 1592,
                          "end": 1593,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1592,
                            "end": 1593,
                            "name": "T",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 1595,
                          "end": 1598,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1595,
                            "end": 1598,
                            "name": "Foo",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      ]
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 1601,
                    "end": 1604,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1601,
                      "end": 1604,
                      "name": "Bar",
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
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 1607,
          "end": 1631,
          "name": "y",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1608,
            "end": 1631,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1610,
              "end": 1631,
              "typeName": {
                "type": "Identifier",
                "start": 1610,
                "end": 1617,
                "name": "Extract",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1617,
                "end": 1631,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1618,
                    "end": 1619,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1618,
                      "end": 1619,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSIntersectionType",
                    "start": 1621,
                    "end": 1630,
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "start": 1621,
                        "end": 1624,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1621,
                          "end": 1624,
                          "name": "Foo",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      },
                      {
                        "type": "TSTypeReference",
                        "start": 1627,
                        "end": 1630,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1627,
                          "end": 1630,
                          "name": "Bar",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 1633,
          "end": 1657,
          "name": "z",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1634,
            "end": 1657,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1636,
              "end": 1657,
              "typeName": {
                "type": "Identifier",
                "start": 1636,
                "end": 1644,
                "name": "Extract2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1644,
                "end": 1657,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1645,
                    "end": 1646,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1645,
                      "end": 1646,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 1648,
                    "end": 1651,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1648,
                      "end": 1651,
                      "name": "Foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 1653,
                    "end": 1656,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1653,
                      "end": 1656,
                      "name": "Bar",
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
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1659,
        "end": 1737,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1665,
            "end": 1675,
            "expression": {
              "type": "CallExpression",
              "start": 1665,
              "end": 1674,
              "callee": {
                "type": "Identifier",
                "start": 1665,
                "end": 1671,
                "name": "fooBat",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1672,
                  "end": 1673,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1690,
            "end": 1700,
            "expression": {
              "type": "CallExpression",
              "start": 1690,
              "end": 1699,
              "callee": {
                "type": "Identifier",
                "start": 1690,
                "end": 1696,
                "name": "fooBat",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1697,
                  "end": 1698,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1715,
            "end": 1725,
            "expression": {
              "type": "CallExpression",
              "start": 1715,
              "end": 1724,
              "callee": {
                "type": "Identifier",
                "start": 1715,
                "end": 1721,
                "name": "fooBat",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1722,
                  "end": 1723,
                  "name": "z",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1569,
        "end": 1572,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1570,
            "end": 1571,
            "name": {
              "type": "Identifier",
              "start": 1570,
              "end": 1571,
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
          }
        ]
      },
      "returnType": null
    },
    {
      "type": "ClassDeclaration",
      "start": 1762,
      "end": 1843,
      "id": {
        "type": "Identifier",
        "start": 1768,
        "end": 1771,
        "name": "Opt",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 1775,
        "end": 1843,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 1781,
            "end": 1841,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1781,
              "end": 1789,
              "name": "toVector",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 1789,
              "end": 1841,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 1803,
                "end": 1841,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 1813,
                    "end": 1835,
                    "argument": {
                      "type": "TSTypeAssertion",
                      "start": 1820,
                      "end": 1834,
                      "expression": {
                        "type": "Identifier",
                        "start": 1825,
                        "end": 1834,
                        "name": "undefined",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 1821,
                        "end": 1824
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1791,
                "end": 1802,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 1793,
                  "end": 1802,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1793,
                    "end": 1799,
                    "name": "Vector",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 1799,
                    "end": 1802,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 1800,
                        "end": 1801,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1800,
                          "end": 1801,
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
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1771,
        "end": 1774,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1772,
            "end": 1773,
            "name": {
              "type": "Identifier",
              "start": 1772,
              "end": 1773,
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
          }
        ]
      },
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1845,
      "end": 1890,
      "id": {
        "type": "Identifier",
        "start": 1855,
        "end": 1858,
        "name": "Seq",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1858,
        "end": 1861,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1859,
            "end": 1860,
            "name": {
              "type": "Identifier",
              "start": 1859,
              "end": 1860,
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
          }
        ]
      },
      "body": {
        "type": "TSInterfaceBody",
        "start": 1862,
        "end": 1890,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 1868,
            "end": 1888,
            "key": {
              "type": "Identifier",
              "start": 1868,
              "end": 1872,
              "name": "tail",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1874,
              "end": 1887,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1876,
                "end": 1887,
                "typeName": {
                  "type": "Identifier",
                  "start": 1876,
                  "end": 1879,
                  "name": "Opt",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1879,
                  "end": 1887,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 1880,
                      "end": 1886,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1880,
                        "end": 1883,
                        "name": "Seq",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 1883,
                        "end": 1886,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 1884,
                            "end": 1885,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1884,
                              "end": 1885,
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
                  ]
                }
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 1892,
      "end": 2267,
      "id": {
        "type": "Identifier",
        "start": 1898,
        "end": 1904,
        "name": "Vector",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 1926,
        "end": 2267,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 1932,
            "end": 1993,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1932,
              "end": 1936,
              "name": "tail",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 1936,
              "end": 1993,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 1955,
                "end": 1993,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 1965,
                    "end": 1987,
                    "argument": {
                      "type": "TSTypeAssertion",
                      "start": 1972,
                      "end": 1986,
                      "expression": {
                        "type": "Identifier",
                        "start": 1977,
                        "end": 1986,
                        "name": "undefined",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 1973,
                        "end": 1976
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1938,
                "end": 1954,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 1940,
                  "end": 1954,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1940,
                    "end": 1943,
                    "name": "Opt",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 1943,
                    "end": 1954,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 1944,
                        "end": 1953,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1944,
                          "end": 1950,
                          "name": "Vector",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 1950,
                          "end": 1953,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 1951,
                              "end": 1952,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1951,
                                "end": 1952,
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
                    ]
                  }
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 1998,
            "end": 2082,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1998,
              "end": 2008,
              "name": "partition2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 2008,
              "end": 2082,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 2022,
                  "end": 2045,
                  "name": "predicate",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2031,
                    "end": 2045,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 2032,
                      "end": 2045,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 2033,
                          "end": 2036,
                          "name": "v",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 2034,
                            "end": 2036,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 2035,
                              "end": 2036,
                              "typeName": {
                                "type": "Identifier",
                                "start": 2035,
                                "end": 2036,
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
                        "start": 2037,
                        "end": 2045,
                        "typeAnnotation": {
                          "type": "TSTypePredicate",
                          "start": 2039,
                          "end": 2045,
                          "parameterName": {
                            "type": "Identifier",
                            "start": 2039,
                            "end": 2040,
                            "name": "v",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "asserts": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 2044,
                            "end": 2045,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 2044,
                              "end": 2045,
                              "typeName": {
                                "type": "Identifier",
                                "start": 2044,
                                "end": 2045,
                                "name": "U",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          }
                        }
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": null,
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 2008,
                "end": 2021,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 2009,
                    "end": 2020,
                    "name": {
                      "type": "Identifier",
                      "start": 2009,
                      "end": 2010,
                      "name": "U",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 2019,
                      "end": 2020,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2019,
                        "end": 2020,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
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
                "start": 2046,
                "end": 2081,
                "typeAnnotation": {
                  "type": "TSTupleType",
                  "start": 2048,
                  "end": 2081,
                  "elementTypes": [
                    {
                      "type": "TSTypeReference",
                      "start": 2049,
                      "end": 2058,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2049,
                        "end": 2055,
                        "name": "Vector",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 2055,
                        "end": 2058,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 2056,
                            "end": 2057,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2056,
                              "end": 2057,
                              "name": "U",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 2059,
                      "end": 2080,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2059,
                        "end": 2065,
                        "name": "Vector",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 2065,
                        "end": 2080,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 2066,
                            "end": 2079,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2066,
                              "end": 2073,
                              "name": "Exclude",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 2073,
                              "end": 2079,
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "start": 2074,
                                  "end": 2075,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 2074,
                                    "end": 2075,
                                    "name": "T",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                },
                                {
                                  "type": "TSTypeReference",
                                  "start": 2077,
                                  "end": 2078,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 2077,
                                    "end": 2078,
                                    "name": "U",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                }
                              ]
                            }
                          }
                        ]
                      }
                    }
                  ]
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 2087,
            "end": 2147,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2087,
              "end": 2097,
              "name": "partition2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 2097,
              "end": 2147,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 2098,
                  "end": 2122,
                  "name": "predicate",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2107,
                    "end": 2122,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 2108,
                      "end": 2122,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 2109,
                          "end": 2112,
                          "name": "x",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 2110,
                            "end": 2112,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 2111,
                              "end": 2112,
                              "typeName": {
                                "type": "Identifier",
                                "start": 2111,
                                "end": 2112,
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
                        "start": 2113,
                        "end": 2122,
                        "typeAnnotation": {
                          "type": "TSBooleanKeyword",
                          "start": 2115,
                          "end": 2122
                        }
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
                "start": 2123,
                "end": 2146,
                "typeAnnotation": {
                  "type": "TSTupleType",
                  "start": 2125,
                  "end": 2146,
                  "elementTypes": [
                    {
                      "type": "TSTypeReference",
                      "start": 2126,
                      "end": 2135,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2126,
                        "end": 2132,
                        "name": "Vector",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 2132,
                        "end": 2135,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 2133,
                            "end": 2134,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2133,
                              "end": 2134,
                              "name": "T",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 2136,
                      "end": 2145,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2136,
                        "end": 2142,
                        "name": "Vector",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 2142,
                        "end": 2145,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 2143,
                            "end": 2144,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2143,
                              "end": 2144,
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
                  ]
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 2152,
            "end": 2265,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2152,
              "end": 2162,
              "name": "partition2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 2162,
              "end": 2265,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 2176,
                  "end": 2200,
                  "name": "predicate",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2185,
                    "end": 2200,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 2186,
                      "end": 2200,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 2187,
                          "end": 2190,
                          "name": "v",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 2188,
                            "end": 2190,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 2189,
                              "end": 2190,
                              "typeName": {
                                "type": "Identifier",
                                "start": 2189,
                                "end": 2190,
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
                        "start": 2191,
                        "end": 2200,
                        "typeAnnotation": {
                          "type": "TSBooleanKeyword",
                          "start": 2193,
                          "end": 2200
                        }
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 2227,
                "end": 2265,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 2237,
                    "end": 2259,
                    "argument": {
                      "type": "TSTypeAssertion",
                      "start": 2244,
                      "end": 2258,
                      "expression": {
                        "type": "Identifier",
                        "start": 2249,
                        "end": 2258,
                        "name": "undefined",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 2245,
                        "end": 2248
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 2162,
                "end": 2175,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 2163,
                    "end": 2174,
                    "name": {
                      "type": "Identifier",
                      "start": 2163,
                      "end": 2164,
                      "name": "U",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 2173,
                      "end": 2174,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2173,
                        "end": 2174,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
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
                "start": 2201,
                "end": 2226,
                "typeAnnotation": {
                  "type": "TSTupleType",
                  "start": 2203,
                  "end": 2226,
                  "elementTypes": [
                    {
                      "type": "TSTypeReference",
                      "start": 2204,
                      "end": 2213,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2204,
                        "end": 2210,
                        "name": "Vector",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 2210,
                        "end": 2213,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 2211,
                            "end": 2212,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2211,
                              "end": 2212,
                              "name": "U",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 2214,
                      "end": 2225,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2214,
                        "end": 2220,
                        "name": "Vector",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 2220,
                        "end": 2225,
                        "params": [
                          {
                            "type": "TSAnyKeyword",
                            "start": 2221,
                            "end": 2224
                          }
                        ]
                      }
                    }
                  ]
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1904,
        "end": 1907,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1905,
            "end": 1906,
            "name": {
              "type": "Identifier",
              "start": 1905,
              "end": 1906,
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
          }
        ]
      },
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 1919,
          "end": 1925,
          "expression": {
            "type": "Identifier",
            "start": 1919,
            "end": 1922,
            "name": "Seq",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 1922,
            "end": 1925,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 1923,
                "end": 1924,
                "typeName": {
                  "type": "Identifier",
                  "start": 1923,
                  "end": 1924,
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
      ],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 2269,
      "end": 2308,
      "id": {
        "type": "Identifier",
        "start": 2279,
        "end": 2281,
        "name": "A1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2281,
        "end": 2284,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2282,
            "end": 2283,
            "name": {
              "type": "Identifier",
              "start": 2282,
              "end": 2283,
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
          }
        ]
      },
      "body": {
        "type": "TSInterfaceBody",
        "start": 2285,
        "end": 2308,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 2291,
            "end": 2306,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 2291,
              "end": 2294,
              "name": "bat",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2294,
              "end": 2305,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2296,
                "end": 2305,
                "typeName": {
                  "type": "Identifier",
                  "start": 2296,
                  "end": 2298,
                  "name": "B1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 2298,
                  "end": 2305,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 2299,
                      "end": 2304,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2299,
                        "end": 2301,
                        "name": "A1",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 2301,
                        "end": 2304,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 2302,
                            "end": 2303,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2302,
                              "end": 2303,
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
                  ]
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
      "type": "TSInterfaceDeclaration",
      "start": 2310,
      "end": 2401,
      "id": {
        "type": "Identifier",
        "start": 2320,
        "end": 2322,
        "name": "B1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 2334,
          "end": 2339,
          "expression": {
            "type": "Identifier",
            "start": 2334,
            "end": 2336,
            "name": "A1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 2336,
            "end": 2339,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 2337,
                "end": 2338,
                "typeName": {
                  "type": "Identifier",
                  "start": 2337,
                  "end": 2338,
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
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2322,
        "end": 2325,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2323,
            "end": 2324,
            "name": {
              "type": "Identifier",
              "start": 2323,
              "end": 2324,
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
          }
        ]
      },
      "body": {
        "type": "TSInterfaceBody",
        "start": 2340,
        "end": 2401,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 2346,
            "end": 2361,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 2346,
              "end": 2349,
              "name": "bat",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2349,
              "end": 2360,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2351,
                "end": 2360,
                "typeName": {
                  "type": "Identifier",
                  "start": 2351,
                  "end": 2353,
                  "name": "B1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 2353,
                  "end": 2360,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 2354,
                      "end": 2359,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2354,
                        "end": 2356,
                        "name": "B1",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 2356,
                        "end": 2359,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 2357,
                            "end": 2358,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2357,
                              "end": 2358,
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
                  ]
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 2366,
            "end": 2399,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 2366,
              "end": 2370,
              "name": "boom",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2370,
              "end": 2399,
              "typeAnnotation": {
                "type": "TSConditionalType",
                "start": 2372,
                "end": 2399,
                "checkType": {
                  "type": "TSTypeReference",
                  "start": 2372,
                  "end": 2373,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2372,
                    "end": 2373,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                "extendsType": {
                  "type": "TSAnyKeyword",
                  "start": 2382,
                  "end": 2385
                },
                "trueType": {
                  "type": "TSLiteralType",
                  "start": 2388,
                  "end": 2392,
                  "literal": {
                    "type": "Literal",
                    "start": 2388,
                    "end": 2392,
                    "value": true,
                    "raw": "true"
                  }
                },
                "falseType": {
                  "type": "TSLiteralType",
                  "start": 2395,
                  "end": 2399,
                  "literal": {
                    "type": "Literal",
                    "start": 2395,
                    "end": 2399,
                    "value": true,
                    "raw": "true"
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
      "type": "TSDeclareFunction",
      "start": 2425,
      "end": 2487,
      "id": {
        "type": "Identifier",
        "start": 2442,
        "end": 2451,
        "name": "toString1",
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
          "start": 2452,
          "end": 2476,
          "name": "value",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2457,
            "end": 2476,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 2459,
              "end": 2476,
              "types": [
                {
                  "type": "TSObjectKeyword",
                  "start": 2459,
                  "end": 2465
                },
                {
                  "type": "TSTypeReference",
                  "start": 2468,
                  "end": 2476,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2468,
                    "end": 2476,
                    "name": "Function",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2477,
        "end": 2485,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 2479,
          "end": 2485
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 2488,
      "end": 2541,
      "id": {
        "type": "Identifier",
        "start": 2505,
        "end": 2514,
        "name": "toString2",
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
          "start": 2515,
          "end": 2530,
          "name": "value",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2520,
            "end": 2530,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2522,
              "end": 2530,
              "typeName": {
                "type": "Identifier",
                "start": 2522,
                "end": 2530,
                "name": "Function",
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
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2531,
        "end": 2539,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 2533,
          "end": 2539
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 2543,
      "end": 2659,
      "id": {
        "type": "Identifier",
        "start": 2552,
        "end": 2555,
        "name": "foo",
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
          "start": 2559,
          "end": 2567,
          "name": "value",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2564,
            "end": 2567,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2566,
              "end": 2567,
              "typeName": {
                "type": "Identifier",
                "start": 2566,
                "end": 2567,
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
      "body": {
        "type": "BlockStatement",
        "start": 2569,
        "end": 2659,
        "body": [
          {
            "type": "IfStatement",
            "start": 2575,
            "end": 2657,
            "test": {
              "type": "CallExpression",
              "start": 2579,
              "end": 2596,
              "callee": {
                "type": "Identifier",
                "start": 2579,
                "end": 2589,
                "name": "isFunction",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 2590,
                  "end": 2595,
                  "name": "value",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 2598,
              "end": 2657,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 2608,
                  "end": 2625,
                  "expression": {
                    "type": "CallExpression",
                    "start": 2608,
                    "end": 2624,
                    "callee": {
                      "type": "Identifier",
                      "start": 2608,
                      "end": 2617,
                      "name": "toString1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 2618,
                        "end": 2623,
                        "name": "value",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 2634,
                  "end": 2651,
                  "expression": {
                    "type": "CallExpression",
                    "start": 2634,
                    "end": 2650,
                    "callee": {
                      "type": "Identifier",
                      "start": 2634,
                      "end": 2643,
                      "name": "toString2",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 2644,
                        "end": 2649,
                        "name": "value",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2555,
        "end": 2558,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2556,
            "end": 2557,
            "name": {
              "type": "Identifier",
              "start": 2556,
              "end": 2557,
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
          }
        ]
      },
      "returnType": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2683,
      "end": 2836,
      "id": {
        "type": "Identifier",
        "start": 2688,
        "end": 2689,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2689,
        "end": 2698,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2690,
            "end": 2691,
            "name": {
              "type": "Identifier",
              "start": 2690,
              "end": 2691,
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
            "start": 2693,
            "end": 2694,
            "name": {
              "type": "Identifier",
              "start": 2693,
              "end": 2694,
              "name": "V",
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
            "start": 2696,
            "end": 2697,
            "name": {
              "type": "Identifier",
              "start": 2696,
              "end": 2697,
              "name": "E",
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
        "type": "TSConditionalType",
        "start": 2703,
        "end": 2835,
        "checkType": {
          "type": "TSTypeReference",
          "start": 2703,
          "end": 2704,
          "typeName": {
            "type": "Identifier",
            "start": 2703,
            "end": 2704,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSObjectKeyword",
          "start": 2713,
          "end": 2719
        },
        "trueType": {
          "type": "TSMappedType",
          "start": 2726,
          "end": 2805,
          "typeParameter": {
            "type": "TSTypeParameter",
            "start": 2729,
            "end": 2786,
            "name": {
              "type": "Identifier",
              "start": 2729,
              "end": 2730,
              "name": "Q",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSIndexedAccessType",
              "start": 2734,
              "end": 2786,
              "objectType": {
                "type": "TSMappedType",
                "start": 2734,
                "end": 2777,
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "start": 2737,
                  "end": 2749,
                  "name": {
                    "type": "Identifier",
                    "start": 2737,
                    "end": 2738,
                    "name": "P",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSTypeOperator",
                    "start": 2742,
                    "end": 2749,
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 2748,
                      "end": 2749,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2748,
                        "end": 2749,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                },
                "nameType": null,
                "typeAnnotation": {
                  "type": "TSConditionalType",
                  "start": 2752,
                  "end": 2774,
                  "checkType": {
                    "type": "TSIndexedAccessType",
                    "start": 2752,
                    "end": 2756,
                    "objectType": {
                      "type": "TSTypeReference",
                      "start": 2752,
                      "end": 2753,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2752,
                        "end": 2753,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    "indexType": {
                      "type": "TSTypeReference",
                      "start": 2754,
                      "end": 2755,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2754,
                        "end": 2755,
                        "name": "P",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "extendsType": {
                    "type": "TSTypeReference",
                    "start": 2765,
                    "end": 2766,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2765,
                      "end": 2766,
                      "name": "V",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  "trueType": {
                    "type": "TSTypeReference",
                    "start": 2769,
                    "end": 2770,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2769,
                      "end": 2770,
                      "name": "P",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  "falseType": {
                    "type": "TSTypeReference",
                    "start": 2773,
                    "end": 2774,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2773,
                      "end": 2774,
                      "name": "P",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "optional": null,
                "readonly": null,
                "constraint": {
                  "type": "TSTypeOperator",
                  "start": 2742,
                  "end": 2749,
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 2748,
                    "end": 2749,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2748,
                      "end": 2749,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "key": {
                  "type": "Identifier",
                  "start": 2737,
                  "end": 2738,
                  "name": "P",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "indexType": {
                "type": "TSTypeOperator",
                "start": 2778,
                "end": 2785,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 2784,
                  "end": 2785,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2784,
                    "end": 2785,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          "nameType": null,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 2789,
            "end": 2802,
            "typeName": {
              "type": "Identifier",
              "start": 2789,
              "end": 2790,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 2790,
              "end": 2802,
              "params": [
                {
                  "type": "TSIndexedAccessType",
                  "start": 2791,
                  "end": 2795,
                  "objectType": {
                    "type": "TSTypeReference",
                    "start": 2791,
                    "end": 2792,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2791,
                      "end": 2792,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "start": 2793,
                    "end": 2794,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2793,
                      "end": 2794,
                      "name": "Q",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 2797,
                  "end": 2798,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2797,
                    "end": 2798,
                    "name": "V",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 2800,
                  "end": 2801,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2800,
                    "end": 2801,
                    "name": "E",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ]
            }
          },
          "optional": null,
          "readonly": null,
          "constraint": {
            "type": "TSIndexedAccessType",
            "start": 2734,
            "end": 2786,
            "objectType": {
              "type": "TSMappedType",
              "start": 2734,
              "end": 2777,
              "typeParameter": {
                "type": "TSTypeParameter",
                "start": 2737,
                "end": 2749,
                "name": {
                  "type": "Identifier",
                  "start": 2737,
                  "end": 2738,
                  "name": "P",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "constraint": {
                  "type": "TSTypeOperator",
                  "start": 2742,
                  "end": 2749,
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 2748,
                    "end": 2749,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2748,
                      "end": 2749,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "default": null,
                "in": false,
                "out": false,
                "const": false
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSConditionalType",
                "start": 2752,
                "end": 2774,
                "checkType": {
                  "type": "TSIndexedAccessType",
                  "start": 2752,
                  "end": 2756,
                  "objectType": {
                    "type": "TSTypeReference",
                    "start": 2752,
                    "end": 2753,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2752,
                      "end": 2753,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "start": 2754,
                    "end": 2755,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2754,
                      "end": 2755,
                      "name": "P",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "extendsType": {
                  "type": "TSTypeReference",
                  "start": 2765,
                  "end": 2766,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2765,
                    "end": 2766,
                    "name": "V",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                "trueType": {
                  "type": "TSTypeReference",
                  "start": 2769,
                  "end": 2770,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2769,
                    "end": 2770,
                    "name": "P",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                "falseType": {
                  "type": "TSTypeReference",
                  "start": 2773,
                  "end": 2774,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2773,
                    "end": 2774,
                    "name": "P",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              },
              "optional": null,
              "readonly": null,
              "constraint": {
                "type": "TSTypeOperator",
                "start": 2742,
                "end": 2749,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 2748,
                  "end": 2749,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2748,
                    "end": 2749,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              },
              "key": {
                "type": "Identifier",
                "start": 2737,
                "end": 2738,
                "name": "P",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "indexType": {
              "type": "TSTypeOperator",
              "start": 2778,
              "end": 2785,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2784,
                "end": 2785,
                "typeName": {
                  "type": "Identifier",
                  "start": 2784,
                  "end": 2785,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          },
          "key": {
            "type": "Identifier",
            "start": 2729,
            "end": 2730,
            "name": "Q",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "falseType": {
          "type": "TSConditionalType",
          "start": 2812,
          "end": 2835,
          "checkType": {
            "type": "TSTypeReference",
            "start": 2812,
            "end": 2813,
            "typeName": {
              "type": "Identifier",
              "start": 2812,
              "end": 2813,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          "extendsType": {
            "type": "TSTypeReference",
            "start": 2822,
            "end": 2823,
            "typeName": {
              "type": "Identifier",
              "start": 2822,
              "end": 2823,
              "name": "V",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          "trueType": {
            "type": "TSTypeReference",
            "start": 2826,
            "end": 2827,
            "typeName": {
              "type": "Identifier",
              "start": 2826,
              "end": 2827,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 2830,
            "end": 2835
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2838,
      "end": 2985,
      "id": {
        "type": "Identifier",
        "start": 2843,
        "end": 2844,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2844,
        "end": 2850,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2845,
            "end": 2846,
            "name": {
              "type": "Identifier",
              "start": 2845,
              "end": 2846,
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
            "start": 2848,
            "end": 2849,
            "name": {
              "type": "Identifier",
              "start": 2848,
              "end": 2849,
              "name": "V",
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
        "type": "TSConditionalType",
        "start": 2855,
        "end": 2984,
        "checkType": {
          "type": "TSTypeReference",
          "start": 2855,
          "end": 2856,
          "typeName": {
            "type": "Identifier",
            "start": 2855,
            "end": 2856,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSObjectKeyword",
          "start": 2865,
          "end": 2871
        },
        "trueType": {
          "type": "TSMappedType",
          "start": 2878,
          "end": 2954,
          "typeParameter": {
            "type": "TSTypeParameter",
            "start": 2881,
            "end": 2938,
            "name": {
              "type": "Identifier",
              "start": 2881,
              "end": 2882,
              "name": "Q",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSIndexedAccessType",
              "start": 2886,
              "end": 2938,
              "objectType": {
                "type": "TSMappedType",
                "start": 2886,
                "end": 2929,
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "start": 2889,
                  "end": 2901,
                  "name": {
                    "type": "Identifier",
                    "start": 2889,
                    "end": 2890,
                    "name": "P",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSTypeOperator",
                    "start": 2894,
                    "end": 2901,
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 2900,
                      "end": 2901,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2900,
                        "end": 2901,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                },
                "nameType": null,
                "typeAnnotation": {
                  "type": "TSConditionalType",
                  "start": 2904,
                  "end": 2926,
                  "checkType": {
                    "type": "TSIndexedAccessType",
                    "start": 2904,
                    "end": 2908,
                    "objectType": {
                      "type": "TSTypeReference",
                      "start": 2904,
                      "end": 2905,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2904,
                        "end": 2905,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    "indexType": {
                      "type": "TSTypeReference",
                      "start": 2906,
                      "end": 2907,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2906,
                        "end": 2907,
                        "name": "P",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "extendsType": {
                    "type": "TSTypeReference",
                    "start": 2917,
                    "end": 2918,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2917,
                      "end": 2918,
                      "name": "V",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  "trueType": {
                    "type": "TSTypeReference",
                    "start": 2921,
                    "end": 2922,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2921,
                      "end": 2922,
                      "name": "P",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  "falseType": {
                    "type": "TSTypeReference",
                    "start": 2925,
                    "end": 2926,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2925,
                      "end": 2926,
                      "name": "P",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "optional": null,
                "readonly": null,
                "constraint": {
                  "type": "TSTypeOperator",
                  "start": 2894,
                  "end": 2901,
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 2900,
                    "end": 2901,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2900,
                      "end": 2901,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "key": {
                  "type": "Identifier",
                  "start": 2889,
                  "end": 2890,
                  "name": "P",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "indexType": {
                "type": "TSTypeOperator",
                "start": 2930,
                "end": 2937,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 2936,
                  "end": 2937,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2936,
                    "end": 2937,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          "nameType": null,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 2941,
            "end": 2951,
            "typeName": {
              "type": "Identifier",
              "start": 2941,
              "end": 2942,
              "name": "B",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 2942,
              "end": 2951,
              "params": [
                {
                  "type": "TSIndexedAccessType",
                  "start": 2943,
                  "end": 2947,
                  "objectType": {
                    "type": "TSTypeReference",
                    "start": 2943,
                    "end": 2944,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2943,
                      "end": 2944,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "start": 2945,
                    "end": 2946,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2945,
                      "end": 2946,
                      "name": "Q",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 2949,
                  "end": 2950,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2949,
                    "end": 2950,
                    "name": "V",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ]
            }
          },
          "optional": null,
          "readonly": null,
          "constraint": {
            "type": "TSIndexedAccessType",
            "start": 2886,
            "end": 2938,
            "objectType": {
              "type": "TSMappedType",
              "start": 2886,
              "end": 2929,
              "typeParameter": {
                "type": "TSTypeParameter",
                "start": 2889,
                "end": 2901,
                "name": {
                  "type": "Identifier",
                  "start": 2889,
                  "end": 2890,
                  "name": "P",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "constraint": {
                  "type": "TSTypeOperator",
                  "start": 2894,
                  "end": 2901,
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 2900,
                    "end": 2901,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2900,
                      "end": 2901,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "default": null,
                "in": false,
                "out": false,
                "const": false
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSConditionalType",
                "start": 2904,
                "end": 2926,
                "checkType": {
                  "type": "TSIndexedAccessType",
                  "start": 2904,
                  "end": 2908,
                  "objectType": {
                    "type": "TSTypeReference",
                    "start": 2904,
                    "end": 2905,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2904,
                      "end": 2905,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "start": 2906,
                    "end": 2907,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2906,
                      "end": 2907,
                      "name": "P",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "extendsType": {
                  "type": "TSTypeReference",
                  "start": 2917,
                  "end": 2918,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2917,
                    "end": 2918,
                    "name": "V",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                "trueType": {
                  "type": "TSTypeReference",
                  "start": 2921,
                  "end": 2922,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2921,
                    "end": 2922,
                    "name": "P",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                "falseType": {
                  "type": "TSTypeReference",
                  "start": 2925,
                  "end": 2926,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2925,
                    "end": 2926,
                    "name": "P",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              },
              "optional": null,
              "readonly": null,
              "constraint": {
                "type": "TSTypeOperator",
                "start": 2894,
                "end": 2901,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 2900,
                  "end": 2901,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2900,
                    "end": 2901,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              },
              "key": {
                "type": "Identifier",
                "start": 2889,
                "end": 2890,
                "name": "P",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "indexType": {
              "type": "TSTypeOperator",
              "start": 2930,
              "end": 2937,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2936,
                "end": 2937,
                "typeName": {
                  "type": "Identifier",
                  "start": 2936,
                  "end": 2937,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          },
          "key": {
            "type": "Identifier",
            "start": 2881,
            "end": 2882,
            "name": "Q",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "falseType": {
          "type": "TSConditionalType",
          "start": 2961,
          "end": 2984,
          "checkType": {
            "type": "TSTypeReference",
            "start": 2961,
            "end": 2962,
            "typeName": {
              "type": "Identifier",
              "start": 2961,
              "end": 2962,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          "extendsType": {
            "type": "TSTypeReference",
            "start": 2971,
            "end": 2972,
            "typeName": {
              "type": "Identifier",
              "start": 2971,
              "end": 2972,
              "name": "V",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          "trueType": {
            "type": "TSTypeReference",
            "start": 2975,
            "end": 2976,
            "typeName": {
              "type": "Identifier",
              "start": 2975,
              "end": 2976,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 2979,
            "end": 2984
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2987,
      "end": 3087,
      "id": {
        "type": "Identifier",
        "start": 2992,
        "end": 2993,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2993,
        "end": 3002,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2994,
            "end": 2995,
            "name": {
              "type": "Identifier",
              "start": 2994,
              "end": 2995,
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
            "start": 2997,
            "end": 2998,
            "name": {
              "type": "Identifier",
              "start": 2997,
              "end": 2998,
              "name": "V",
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
            "start": 3000,
            "end": 3001,
            "name": {
              "type": "Identifier",
              "start": 3000,
              "end": 3001,
              "name": "E",
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
        "type": "TSMappedType",
        "start": 3007,
        "end": 3086,
        "typeParameter": {
          "type": "TSTypeParameter",
          "start": 3010,
          "end": 3067,
          "name": {
            "type": "Identifier",
            "start": 3010,
            "end": 3011,
            "name": "Q",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "constraint": {
            "type": "TSIndexedAccessType",
            "start": 3015,
            "end": 3067,
            "objectType": {
              "type": "TSMappedType",
              "start": 3015,
              "end": 3058,
              "typeParameter": {
                "type": "TSTypeParameter",
                "start": 3018,
                "end": 3030,
                "name": {
                  "type": "Identifier",
                  "start": 3018,
                  "end": 3019,
                  "name": "P",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "constraint": {
                  "type": "TSTypeOperator",
                  "start": 3023,
                  "end": 3030,
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 3029,
                    "end": 3030,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3029,
                      "end": 3030,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "default": null,
                "in": false,
                "out": false,
                "const": false
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSConditionalType",
                "start": 3033,
                "end": 3055,
                "checkType": {
                  "type": "TSIndexedAccessType",
                  "start": 3033,
                  "end": 3037,
                  "objectType": {
                    "type": "TSTypeReference",
                    "start": 3033,
                    "end": 3034,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3033,
                      "end": 3034,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "start": 3035,
                    "end": 3036,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3035,
                      "end": 3036,
                      "name": "P",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "extendsType": {
                  "type": "TSTypeReference",
                  "start": 3046,
                  "end": 3047,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3046,
                    "end": 3047,
                    "name": "V",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                "trueType": {
                  "type": "TSTypeReference",
                  "start": 3050,
                  "end": 3051,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3050,
                    "end": 3051,
                    "name": "P",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                "falseType": {
                  "type": "TSTypeReference",
                  "start": 3054,
                  "end": 3055,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3054,
                    "end": 3055,
                    "name": "P",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              },
              "optional": null,
              "readonly": null,
              "constraint": {
                "type": "TSTypeOperator",
                "start": 3023,
                "end": 3030,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 3029,
                  "end": 3030,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3029,
                    "end": 3030,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              },
              "key": {
                "type": "Identifier",
                "start": 3018,
                "end": 3019,
                "name": "P",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "indexType": {
              "type": "TSTypeOperator",
              "start": 3059,
              "end": 3066,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3065,
                "end": 3066,
                "typeName": {
                  "type": "Identifier",
                  "start": 3065,
                  "end": 3066,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          },
          "default": null,
          "in": false,
          "out": false,
          "const": false
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 3070,
          "end": 3083,
          "typeName": {
            "type": "Identifier",
            "start": 3070,
            "end": 3071,
            "name": "C",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 3071,
            "end": 3083,
            "params": [
              {
                "type": "TSIndexedAccessType",
                "start": 3072,
                "end": 3076,
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 3072,
                  "end": 3073,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3072,
                    "end": 3073,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 3074,
                  "end": 3075,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3074,
                    "end": 3075,
                    "name": "Q",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              },
              {
                "type": "TSTypeReference",
                "start": 3078,
                "end": 3079,
                "typeName": {
                  "type": "Identifier",
                  "start": 3078,
                  "end": 3079,
                  "name": "V",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              {
                "type": "TSTypeReference",
                "start": 3081,
                "end": 3082,
                "typeName": {
                  "type": "Identifier",
                  "start": 3081,
                  "end": 3082,
                  "name": "E",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ]
          }
        },
        "optional": null,
        "readonly": null,
        "constraint": {
          "type": "TSIndexedAccessType",
          "start": 3015,
          "end": 3067,
          "objectType": {
            "type": "TSMappedType",
            "start": 3015,
            "end": 3058,
            "typeParameter": {
              "type": "TSTypeParameter",
              "start": 3018,
              "end": 3030,
              "name": {
                "type": "Identifier",
                "start": 3018,
                "end": 3019,
                "name": "P",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": {
                "type": "TSTypeOperator",
                "start": 3023,
                "end": 3030,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 3029,
                  "end": 3030,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3029,
                    "end": 3030,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false
            },
            "nameType": null,
            "typeAnnotation": {
              "type": "TSConditionalType",
              "start": 3033,
              "end": 3055,
              "checkType": {
                "type": "TSIndexedAccessType",
                "start": 3033,
                "end": 3037,
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 3033,
                  "end": 3034,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3033,
                    "end": 3034,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 3035,
                  "end": 3036,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3035,
                    "end": 3036,
                    "name": "P",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              },
              "extendsType": {
                "type": "TSTypeReference",
                "start": 3046,
                "end": 3047,
                "typeName": {
                  "type": "Identifier",
                  "start": 3046,
                  "end": 3047,
                  "name": "V",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              "trueType": {
                "type": "TSTypeReference",
                "start": 3050,
                "end": 3051,
                "typeName": {
                  "type": "Identifier",
                  "start": 3050,
                  "end": 3051,
                  "name": "P",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              "falseType": {
                "type": "TSTypeReference",
                "start": 3054,
                "end": 3055,
                "typeName": {
                  "type": "Identifier",
                  "start": 3054,
                  "end": 3055,
                  "name": "P",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "optional": null,
            "readonly": null,
            "constraint": {
              "type": "TSTypeOperator",
              "start": 3023,
              "end": 3030,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3029,
                "end": 3030,
                "typeName": {
                  "type": "Identifier",
                  "start": 3029,
                  "end": 3030,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "key": {
              "type": "Identifier",
              "start": 3018,
              "end": 3019,
              "name": "P",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "indexType": {
            "type": "TSTypeOperator",
            "start": 3059,
            "end": 3066,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 3065,
              "end": 3066,
              "typeName": {
                "type": "Identifier",
                "start": 3065,
                "end": 3066,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          }
        },
        "key": {
          "type": "Identifier",
          "start": 3010,
          "end": 3011,
          "name": "Q",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 3111,
      "end": 3215,
      "id": {
        "type": "Identifier",
        "start": 3116,
        "end": 3118,
        "name": "A2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3118,
        "end": 3127,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3119,
            "end": 3120,
            "name": {
              "type": "Identifier",
              "start": 3119,
              "end": 3120,
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
            "start": 3122,
            "end": 3123,
            "name": {
              "type": "Identifier",
              "start": 3122,
              "end": 3123,
              "name": "V",
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
            "start": 3125,
            "end": 3126,
            "name": {
              "type": "Identifier",
              "start": 3125,
              "end": 3126,
              "name": "E",
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
        "type": "TSConditionalType",
        "start": 3134,
        "end": 3214,
        "checkType": {
          "type": "TSTypeReference",
          "start": 3134,
          "end": 3135,
          "typeName": {
            "type": "Identifier",
            "start": 3134,
            "end": 3135,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSObjectKeyword",
          "start": 3144,
          "end": 3150
        },
        "trueType": {
          "type": "TSConditionalType",
          "start": 3153,
          "end": 3210,
          "checkType": {
            "type": "TSTypeReference",
            "start": 3153,
            "end": 3154,
            "typeName": {
              "type": "Identifier",
              "start": 3153,
              "end": 3154,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          "extendsType": {
            "type": "TSArrayType",
            "start": 3163,
            "end": 3168,
            "elementType": {
              "type": "TSAnyKeyword",
              "start": 3163,
              "end": 3166
            }
          },
          "trueType": {
            "type": "TSTypeReference",
            "start": 3171,
            "end": 3172,
            "typeName": {
              "type": "Identifier",
              "start": 3171,
              "end": 3172,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          "falseType": {
            "type": "TSMappedType",
            "start": 3175,
            "end": 3210,
            "typeParameter": {
              "type": "TSTypeParameter",
              "start": 3178,
              "end": 3190,
              "name": {
                "type": "Identifier",
                "start": 3178,
                "end": 3179,
                "name": "Q",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": {
                "type": "TSTypeOperator",
                "start": 3183,
                "end": 3190,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 3189,
                  "end": 3190,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3189,
                    "end": 3190,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false
            },
            "nameType": null,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 3193,
              "end": 3207,
              "typeName": {
                "type": "Identifier",
                "start": 3193,
                "end": 3195,
                "name": "A2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 3195,
                "end": 3207,
                "params": [
                  {
                    "type": "TSIndexedAccessType",
                    "start": 3196,
                    "end": 3200,
                    "objectType": {
                      "type": "TSTypeReference",
                      "start": 3196,
                      "end": 3197,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3196,
                        "end": 3197,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    "indexType": {
                      "type": "TSTypeReference",
                      "start": 3198,
                      "end": 3199,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3198,
                        "end": 3199,
                        "name": "Q",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 3202,
                    "end": 3203,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3202,
                      "end": 3203,
                      "name": "V",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 3205,
                    "end": 3206,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3205,
                      "end": 3206,
                      "name": "E",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
            "optional": null,
            "readonly": null,
            "constraint": {
              "type": "TSTypeOperator",
              "start": 3183,
              "end": 3190,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3189,
                "end": 3190,
                "typeName": {
                  "type": "Identifier",
                  "start": 3189,
                  "end": 3190,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "key": {
              "type": "Identifier",
              "start": 3178,
              "end": 3179,
              "name": "Q",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        },
        "falseType": {
          "type": "TSTypeReference",
          "start": 3213,
          "end": 3214,
          "typeName": {
            "type": "Identifier",
            "start": 3213,
            "end": 3214,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 3217,
      "end": 3315,
      "id": {
        "type": "Identifier",
        "start": 3222,
        "end": 3224,
        "name": "B2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3224,
        "end": 3230,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3225,
            "end": 3226,
            "name": {
              "type": "Identifier",
              "start": 3225,
              "end": 3226,
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
            "start": 3228,
            "end": 3229,
            "name": {
              "type": "Identifier",
              "start": 3228,
              "end": 3229,
              "name": "V",
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
        "type": "TSConditionalType",
        "start": 3237,
        "end": 3314,
        "checkType": {
          "type": "TSTypeReference",
          "start": 3237,
          "end": 3238,
          "typeName": {
            "type": "Identifier",
            "start": 3237,
            "end": 3238,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSObjectKeyword",
          "start": 3247,
          "end": 3253
        },
        "trueType": {
          "type": "TSConditionalType",
          "start": 3256,
          "end": 3310,
          "checkType": {
            "type": "TSTypeReference",
            "start": 3256,
            "end": 3257,
            "typeName": {
              "type": "Identifier",
              "start": 3256,
              "end": 3257,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          "extendsType": {
            "type": "TSArrayType",
            "start": 3266,
            "end": 3271,
            "elementType": {
              "type": "TSAnyKeyword",
              "start": 3266,
              "end": 3269
            }
          },
          "trueType": {
            "type": "TSTypeReference",
            "start": 3274,
            "end": 3275,
            "typeName": {
              "type": "Identifier",
              "start": 3274,
              "end": 3275,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          "falseType": {
            "type": "TSMappedType",
            "start": 3278,
            "end": 3310,
            "typeParameter": {
              "type": "TSTypeParameter",
              "start": 3281,
              "end": 3293,
              "name": {
                "type": "Identifier",
                "start": 3281,
                "end": 3282,
                "name": "Q",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": {
                "type": "TSTypeOperator",
                "start": 3286,
                "end": 3293,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 3292,
                  "end": 3293,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3292,
                    "end": 3293,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false
            },
            "nameType": null,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 3296,
              "end": 3307,
              "typeName": {
                "type": "Identifier",
                "start": 3296,
                "end": 3298,
                "name": "B2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 3298,
                "end": 3307,
                "params": [
                  {
                    "type": "TSIndexedAccessType",
                    "start": 3299,
                    "end": 3303,
                    "objectType": {
                      "type": "TSTypeReference",
                      "start": 3299,
                      "end": 3300,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3299,
                        "end": 3300,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    "indexType": {
                      "type": "TSTypeReference",
                      "start": 3301,
                      "end": 3302,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3301,
                        "end": 3302,
                        "name": "Q",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 3305,
                    "end": 3306,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3305,
                      "end": 3306,
                      "name": "V",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
            "optional": null,
            "readonly": null,
            "constraint": {
              "type": "TSTypeOperator",
              "start": 3286,
              "end": 3293,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3292,
                "end": 3293,
                "typeName": {
                  "type": "Identifier",
                  "start": 3292,
                  "end": 3293,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "key": {
              "type": "Identifier",
              "start": 3281,
              "end": 3282,
              "name": "Q",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        },
        "falseType": {
          "type": "TSTypeReference",
          "start": 3313,
          "end": 3314,
          "typeName": {
            "type": "Identifier",
            "start": 3313,
            "end": 3314,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 3317,
      "end": 3399,
      "id": {
        "type": "Identifier",
        "start": 3322,
        "end": 3324,
        "name": "C2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3324,
        "end": 3333,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3325,
            "end": 3326,
            "name": {
              "type": "Identifier",
              "start": 3325,
              "end": 3326,
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
            "start": 3328,
            "end": 3329,
            "name": {
              "type": "Identifier",
              "start": 3328,
              "end": 3329,
              "name": "V",
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
            "start": 3331,
            "end": 3332,
            "name": {
              "type": "Identifier",
              "start": 3331,
              "end": 3332,
              "name": "E",
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
        "type": "TSConditionalType",
        "start": 3340,
        "end": 3398,
        "checkType": {
          "type": "TSTypeReference",
          "start": 3340,
          "end": 3341,
          "typeName": {
            "type": "Identifier",
            "start": 3340,
            "end": 3341,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSObjectKeyword",
          "start": 3350,
          "end": 3356
        },
        "trueType": {
          "type": "TSMappedType",
          "start": 3359,
          "end": 3394,
          "typeParameter": {
            "type": "TSTypeParameter",
            "start": 3362,
            "end": 3374,
            "name": {
              "type": "Identifier",
              "start": 3362,
              "end": 3363,
              "name": "Q",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 3367,
              "end": 3374,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3373,
                "end": 3374,
                "typeName": {
                  "type": "Identifier",
                  "start": 3373,
                  "end": 3374,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          "nameType": null,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 3377,
            "end": 3391,
            "typeName": {
              "type": "Identifier",
              "start": 3377,
              "end": 3379,
              "name": "C2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 3379,
              "end": 3391,
              "params": [
                {
                  "type": "TSIndexedAccessType",
                  "start": 3380,
                  "end": 3384,
                  "objectType": {
                    "type": "TSTypeReference",
                    "start": 3380,
                    "end": 3381,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3380,
                      "end": 3381,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "start": 3382,
                    "end": 3383,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3382,
                      "end": 3383,
                      "name": "Q",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 3386,
                  "end": 3387,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3386,
                    "end": 3387,
                    "name": "V",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 3389,
                  "end": 3390,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3389,
                    "end": 3390,
                    "name": "E",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ]
            }
          },
          "optional": null,
          "readonly": null,
          "constraint": {
            "type": "TSTypeOperator",
            "start": 3367,
            "end": 3374,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 3373,
              "end": 3374,
              "typeName": {
                "type": "Identifier",
                "start": 3373,
                "end": 3374,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "key": {
            "type": "Identifier",
            "start": 3362,
            "end": 3363,
            "name": "Q",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "falseType": {
          "type": "TSTypeReference",
          "start": 3397,
          "end": 3398,
          "typeName": {
            "type": "Identifier",
            "start": 3397,
            "end": 3398,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 3423,
      "end": 3501,
      "id": {
        "type": "Identifier",
        "start": 3428,
        "end": 3437,
        "name": "MaybeTrue",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3437,
        "end": 3463,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3438,
            "end": 3462,
            "name": {
              "type": "Identifier",
              "start": 3438,
              "end": 3439,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 3448,
              "end": 3462,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 3450,
                  "end": 3460,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 3450,
                    "end": 3451,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3451,
                    "end": 3460,
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 3453,
                      "end": 3460
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 3466,
        "end": 3500,
        "checkType": {
          "type": "TSLiteralType",
          "start": 3466,
          "end": 3470,
          "literal": {
            "type": "Literal",
            "start": 3466,
            "end": 3470,
            "value": true,
            "raw": "true"
          }
        },
        "extendsType": {
          "type": "TSIndexedAccessType",
          "start": 3479,
          "end": 3485,
          "objectType": {
            "type": "TSTypeReference",
            "start": 3479,
            "end": 3480,
            "typeName": {
              "type": "Identifier",
              "start": 3479,
              "end": 3480,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          "indexType": {
            "type": "TSLiteralType",
            "start": 3481,
            "end": 3484,
            "literal": {
              "type": "Literal",
              "start": 3481,
              "end": 3484,
              "value": "b",
              "raw": "\"b\""
            }
          }
        },
        "trueType": {
          "type": "TSLiteralType",
          "start": 3488,
          "end": 3493,
          "literal": {
            "type": "Literal",
            "start": 3488,
            "end": 3493,
            "value": "yes",
            "raw": "\"yes\""
          }
        },
        "falseType": {
          "type": "TSLiteralType",
          "start": 3496,
          "end": 3500,
          "literal": {
            "type": "Literal",
            "start": 3496,
            "end": 3500,
            "value": "no",
            "raw": "\"no\""
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 3503,
      "end": 3536,
      "id": {
        "type": "Identifier",
        "start": 3508,
        "end": 3510,
        "name": "T0",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 3513,
        "end": 3536,
        "typeName": {
          "type": "Identifier",
          "start": 3513,
          "end": 3522,
          "name": "MaybeTrue",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 3522,
          "end": 3536,
          "params": [
            {
              "type": "TSTypeLiteral",
              "start": 3523,
              "end": 3535,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 3525,
                  "end": 3533,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 3525,
                    "end": 3526,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3526,
                    "end": 3533,
                    "typeAnnotation": {
                      "type": "TSNeverKeyword",
                      "start": 3528,
                      "end": 3533
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 3549,
      "end": 3583,
      "id": {
        "type": "Identifier",
        "start": 3554,
        "end": 3556,
        "name": "T1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 3559,
        "end": 3582,
        "typeName": {
          "type": "Identifier",
          "start": 3559,
          "end": 3568,
          "name": "MaybeTrue",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 3568,
          "end": 3582,
          "params": [
            {
              "type": "TSTypeLiteral",
              "start": 3569,
              "end": 3581,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 3571,
                  "end": 3579,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 3571,
                    "end": 3572,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3572,
                    "end": 3579,
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "start": 3574,
                      "end": 3579,
                      "literal": {
                        "type": "Literal",
                        "start": 3574,
                        "end": 3579,
                        "value": false,
                        "raw": "false"
                      }
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 3595,
      "end": 3628,
      "id": {
        "type": "Identifier",
        "start": 3600,
        "end": 3602,
        "name": "T2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 3605,
        "end": 3627,
        "typeName": {
          "type": "Identifier",
          "start": 3605,
          "end": 3614,
          "name": "MaybeTrue",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 3614,
          "end": 3627,
          "params": [
            {
              "type": "TSTypeLiteral",
              "start": 3615,
              "end": 3626,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 3617,
                  "end": 3624,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 3617,
                    "end": 3618,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3618,
                    "end": 3624,
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "start": 3620,
                      "end": 3624,
                      "literal": {
                        "type": "Literal",
                        "start": 3620,
                        "end": 3624,
                        "value": true,
                        "raw": "true"
                      }
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 3642,
      "end": 3678,
      "id": {
        "type": "Identifier",
        "start": 3647,
        "end": 3649,
        "name": "T3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 3652,
        "end": 3677,
        "typeName": {
          "type": "Identifier",
          "start": 3652,
          "end": 3661,
          "name": "MaybeTrue",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 3661,
          "end": 3677,
          "params": [
            {
              "type": "TSTypeLiteral",
              "start": 3662,
              "end": 3676,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 3664,
                  "end": 3674,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 3664,
                    "end": 3665,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3665,
                    "end": 3674,
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 3667,
                      "end": 3674
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 3712,
      "end": 3735,
      "id": {
        "type": "Identifier",
        "start": 3717,
        "end": 3722,
        "name": "Union",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 3725,
        "end": 3734,
        "types": [
          {
            "type": "TSLiteralType",
            "start": 3725,
            "end": 3728,
            "literal": {
              "type": "Literal",
              "start": 3725,
              "end": 3728,
              "value": "a",
              "raw": "'a'"
            }
          },
          {
            "type": "TSLiteralType",
            "start": 3731,
            "end": 3734,
            "literal": {
              "type": "Literal",
              "start": 3731,
              "end": 3734,
              "value": "b",
              "raw": "'b'"
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 3736,
      "end": 3787,
      "id": {
        "type": "Identifier",
        "start": 3741,
        "end": 3748,
        "name": "Product",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3748,
        "end": 3768,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3749,
            "end": 3764,
            "name": {
              "type": "Identifier",
              "start": 3749,
              "end": 3750,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 3759,
              "end": 3764,
              "typeName": {
                "type": "Identifier",
                "start": 3759,
                "end": 3764,
                "name": "Union",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 3766,
            "end": 3767,
            "name": {
              "type": "Identifier",
              "start": 3766,
              "end": 3767,
              "name": "B",
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
        "type": "TSTypeLiteral",
        "start": 3771,
        "end": 3786,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 3773,
            "end": 3779,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 3773,
              "end": 3775,
              "name": "f1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3775,
              "end": 3778,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3777,
                "end": 3778,
                "typeName": {
                  "type": "Identifier",
                  "start": 3777,
                  "end": 3778,
                  "name": "A",
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
            "start": 3780,
            "end": 3785,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 3780,
              "end": 3782,
              "name": "f2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3782,
              "end": 3785,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3784,
                "end": 3785,
                "typeName": {
                  "type": "Identifier",
                  "start": 3784,
                  "end": 3785,
                  "name": "B",
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
      "type": "TSTypeAliasDeclaration",
      "start": 3788,
      "end": 3842,
      "id": {
        "type": "Identifier",
        "start": 3793,
        "end": 3805,
        "name": "ProductUnion",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 3808,
        "end": 3841,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 3808,
            "end": 3823,
            "typeName": {
              "type": "Identifier",
              "start": 3808,
              "end": 3815,
              "name": "Product",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 3815,
              "end": 3823,
              "params": [
                {
                  "type": "TSLiteralType",
                  "start": 3816,
                  "end": 3819,
                  "literal": {
                    "type": "Literal",
                    "start": 3816,
                    "end": 3819,
                    "value": "a",
                    "raw": "'a'"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 3821,
                  "end": 3822,
                  "literal": {
                    "type": "Literal",
                    "start": 3821,
                    "end": 3822,
                    "value": 0,
                    "raw": "0"
                  }
                }
              ]
            }
          },
          {
            "type": "TSTypeReference",
            "start": 3826,
            "end": 3841,
            "typeName": {
              "type": "Identifier",
              "start": 3826,
              "end": 3833,
              "name": "Product",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 3833,
              "end": 3841,
              "params": [
                {
                  "type": "TSLiteralType",
                  "start": 3834,
                  "end": 3837,
                  "literal": {
                    "type": "Literal",
                    "start": 3834,
                    "end": 3837,
                    "value": "b",
                    "raw": "'b'"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 3839,
                  "end": 3840,
                  "literal": {
                    "type": "Literal",
                    "start": 3839,
                    "end": 3840,
                    "value": 1,
                    "raw": "1"
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 3864,
      "end": 3925,
      "id": {
        "type": "Identifier",
        "start": 3869,
        "end": 3884,
        "name": "UnionComplement",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 3887,
        "end": 3924,
        "typeParameter": {
          "type": "TSTypeParameter",
          "start": 3892,
          "end": 3902,
          "name": {
            "type": "Identifier",
            "start": 3892,
            "end": 3893,
            "name": "K",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "constraint": {
            "type": "TSTypeReference",
            "start": 3897,
            "end": 3902,
            "typeName": {
              "type": "Identifier",
              "start": 3897,
              "end": 3902,
              "name": "Union",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          "default": null,
          "in": false,
          "out": false,
          "const": false
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 3905,
          "end": 3922,
          "typeName": {
            "type": "Identifier",
            "start": 3905,
            "end": 3912,
            "name": "Exclude",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 3912,
            "end": 3922,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 3913,
                "end": 3918,
                "typeName": {
                  "type": "Identifier",
                  "start": 3913,
                  "end": 3918,
                  "name": "Union",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              {
                "type": "TSTypeReference",
                "start": 3920,
                "end": 3921,
                "typeName": {
                  "type": "Identifier",
                  "start": 3920,
                  "end": 3921,
                  "name": "K",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ]
          }
        },
        "optional": null,
        "readonly": null,
        "constraint": {
          "type": "TSTypeReference",
          "start": 3897,
          "end": 3902,
          "typeName": {
            "type": "Identifier",
            "start": 3897,
            "end": 3902,
            "name": "Union",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "key": {
          "type": "Identifier",
          "start": 3892,
          "end": 3893,
          "name": "K",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 3926,
      "end": 3958,
      "id": {
        "type": "Identifier",
        "start": 3931,
        "end": 3934,
        "name": "UCA",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "start": 3937,
        "end": 3957,
        "objectType": {
          "type": "TSTypeReference",
          "start": 3937,
          "end": 3952,
          "typeName": {
            "type": "Identifier",
            "start": 3937,
            "end": 3952,
            "name": "UnionComplement",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "indexType": {
          "type": "TSLiteralType",
          "start": 3953,
          "end": 3956,
          "literal": {
            "type": "Literal",
            "start": 3953,
            "end": 3956,
            "value": "a",
            "raw": "'a'"
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 3959,
      "end": 3991,
      "id": {
        "type": "Identifier",
        "start": 3964,
        "end": 3967,
        "name": "UCB",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "start": 3970,
        "end": 3990,
        "objectType": {
          "type": "TSTypeReference",
          "start": 3970,
          "end": 3985,
          "typeName": {
            "type": "Identifier",
            "start": 3970,
            "end": 3985,
            "name": "UnionComplement",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "indexType": {
          "type": "TSLiteralType",
          "start": 3986,
          "end": 3989,
          "literal": {
            "type": "Literal",
            "start": 3986,
            "end": 3989,
            "value": "b",
            "raw": "'b'"
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 4013,
      "end": 4100,
      "id": {
        "type": "Identifier",
        "start": 4018,
        "end": 4043,
        "name": "UnionComplementComplement",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 4046,
        "end": 4099,
        "typeParameter": {
          "type": "TSTypeParameter",
          "start": 4051,
          "end": 4061,
          "name": {
            "type": "Identifier",
            "start": 4051,
            "end": 4052,
            "name": "K",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "constraint": {
            "type": "TSTypeReference",
            "start": 4056,
            "end": 4061,
            "typeName": {
              "type": "Identifier",
              "start": 4056,
              "end": 4061,
              "name": "Union",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          "default": null,
          "in": false,
          "out": false,
          "const": false
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 4064,
          "end": 4097,
          "typeName": {
            "type": "Identifier",
            "start": 4064,
            "end": 4071,
            "name": "Exclude",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 4071,
            "end": 4097,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 4072,
                "end": 4077,
                "typeName": {
                  "type": "Identifier",
                  "start": 4072,
                  "end": 4077,
                  "name": "Union",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              {
                "type": "TSTypeReference",
                "start": 4079,
                "end": 4096,
                "typeName": {
                  "type": "Identifier",
                  "start": 4079,
                  "end": 4086,
                  "name": "Exclude",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 4086,
                  "end": 4096,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 4087,
                      "end": 4092,
                      "typeName": {
                        "type": "Identifier",
                        "start": 4087,
                        "end": 4092,
                        "name": "Union",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 4094,
                      "end": 4095,
                      "typeName": {
                        "type": "Identifier",
                        "start": 4094,
                        "end": 4095,
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
            ]
          }
        },
        "optional": null,
        "readonly": null,
        "constraint": {
          "type": "TSTypeReference",
          "start": 4056,
          "end": 4061,
          "typeName": {
            "type": "Identifier",
            "start": 4056,
            "end": 4061,
            "name": "Union",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "key": {
          "type": "Identifier",
          "start": 4051,
          "end": 4052,
          "name": "K",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 4101,
      "end": 4144,
      "id": {
        "type": "Identifier",
        "start": 4106,
        "end": 4110,
        "name": "UCCA",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "start": 4113,
        "end": 4143,
        "objectType": {
          "type": "TSTypeReference",
          "start": 4113,
          "end": 4138,
          "typeName": {
            "type": "Identifier",
            "start": 4113,
            "end": 4138,
            "name": "UnionComplementComplement",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "indexType": {
          "type": "TSLiteralType",
          "start": 4139,
          "end": 4142,
          "literal": {
            "type": "Literal",
            "start": 4139,
            "end": 4142,
            "value": "a",
            "raw": "'a'"
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 4145,
      "end": 4188,
      "id": {
        "type": "Identifier",
        "start": 4150,
        "end": 4154,
        "name": "UCCB",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "start": 4157,
        "end": 4187,
        "objectType": {
          "type": "TSTypeReference",
          "start": 4157,
          "end": 4182,
          "typeName": {
            "type": "Identifier",
            "start": 4157,
            "end": 4182,
            "name": "UnionComplementComplement",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "indexType": {
          "type": "TSLiteralType",
          "start": 4183,
          "end": 4186,
          "literal": {
            "type": "Literal",
            "start": 4183,
            "end": 4186,
            "value": "b",
            "raw": "'b'"
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 4234,
      "end": 4312,
      "id": {
        "type": "Identifier",
        "start": 4239,
        "end": 4256,
        "name": "ProductComplement",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 4259,
        "end": 4311,
        "typeParameter": {
          "type": "TSTypeParameter",
          "start": 4264,
          "end": 4274,
          "name": {
            "type": "Identifier",
            "start": 4264,
            "end": 4265,
            "name": "K",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "constraint": {
            "type": "TSTypeReference",
            "start": 4269,
            "end": 4274,
            "typeName": {
              "type": "Identifier",
              "start": 4269,
              "end": 4274,
              "name": "Union",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          "default": null,
          "in": false,
          "out": false,
          "const": false
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 4277,
          "end": 4309,
          "typeName": {
            "type": "Identifier",
            "start": 4277,
            "end": 4284,
            "name": "Exclude",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 4284,
            "end": 4309,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 4285,
                "end": 4297,
                "typeName": {
                  "type": "Identifier",
                  "start": 4285,
                  "end": 4297,
                  "name": "ProductUnion",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              {
                "type": "TSTypeLiteral",
                "start": 4299,
                "end": 4308,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 4301,
                    "end": 4306,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 4301,
                      "end": 4303,
                      "name": "f1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 4303,
                      "end": 4306,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 4305,
                        "end": 4306,
                        "typeName": {
                          "type": "Identifier",
                          "start": 4305,
                          "end": 4306,
                          "name": "K",
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
            ]
          }
        },
        "optional": null,
        "readonly": null,
        "constraint": {
          "type": "TSTypeReference",
          "start": 4269,
          "end": 4274,
          "typeName": {
            "type": "Identifier",
            "start": 4269,
            "end": 4274,
            "name": "Union",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "key": {
          "type": "Identifier",
          "start": 4264,
          "end": 4265,
          "name": "K",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 4313,
      "end": 4347,
      "id": {
        "type": "Identifier",
        "start": 4318,
        "end": 4321,
        "name": "PCA",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "start": 4324,
        "end": 4346,
        "objectType": {
          "type": "TSTypeReference",
          "start": 4324,
          "end": 4341,
          "typeName": {
            "type": "Identifier",
            "start": 4324,
            "end": 4341,
            "name": "ProductComplement",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "indexType": {
          "type": "TSLiteralType",
          "start": 4342,
          "end": 4345,
          "literal": {
            "type": "Literal",
            "start": 4342,
            "end": 4345,
            "value": "a",
            "raw": "'a'"
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 4348,
      "end": 4382,
      "id": {
        "type": "Identifier",
        "start": 4353,
        "end": 4356,
        "name": "PCB",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "start": 4359,
        "end": 4381,
        "objectType": {
          "type": "TSTypeReference",
          "start": 4359,
          "end": 4376,
          "typeName": {
            "type": "Identifier",
            "start": 4359,
            "end": 4376,
            "name": "ProductComplement",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "indexType": {
          "type": "TSLiteralType",
          "start": 4377,
          "end": 4380,
          "literal": {
            "type": "Literal",
            "start": 4377,
            "end": 4380,
            "value": "b",
            "raw": "'b'"
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 4428,
      "end": 4539,
      "id": {
        "type": "Identifier",
        "start": 4433,
        "end": 4460,
        "name": "ProductComplementComplement",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 4463,
        "end": 4538,
        "typeParameter": {
          "type": "TSTypeParameter",
          "start": 4468,
          "end": 4478,
          "name": {
            "type": "Identifier",
            "start": 4468,
            "end": 4469,
            "name": "K",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "constraint": {
            "type": "TSTypeReference",
            "start": 4473,
            "end": 4478,
            "typeName": {
              "type": "Identifier",
              "start": 4473,
              "end": 4478,
              "name": "Union",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          "default": null,
          "in": false,
          "out": false,
          "const": false
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 4481,
          "end": 4536,
          "typeName": {
            "type": "Identifier",
            "start": 4481,
            "end": 4488,
            "name": "Exclude",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 4488,
            "end": 4536,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 4489,
                "end": 4501,
                "typeName": {
                  "type": "Identifier",
                  "start": 4489,
                  "end": 4501,
                  "name": "ProductUnion",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              {
                "type": "TSTypeReference",
                "start": 4503,
                "end": 4535,
                "typeName": {
                  "type": "Identifier",
                  "start": 4503,
                  "end": 4510,
                  "name": "Exclude",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 4510,
                  "end": 4535,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 4511,
                      "end": 4523,
                      "typeName": {
                        "type": "Identifier",
                        "start": 4511,
                        "end": 4523,
                        "name": "ProductUnion",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    {
                      "type": "TSTypeLiteral",
                      "start": 4525,
                      "end": 4534,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 4527,
                          "end": 4532,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 4527,
                            "end": 4529,
                            "name": "f1",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 4529,
                            "end": 4532,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 4531,
                              "end": 4532,
                              "typeName": {
                                "type": "Identifier",
                                "start": 4531,
                                "end": 4532,
                                "name": "K",
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
                  ]
                }
              }
            ]
          }
        },
        "optional": null,
        "readonly": null,
        "constraint": {
          "type": "TSTypeReference",
          "start": 4473,
          "end": 4478,
          "typeName": {
            "type": "Identifier",
            "start": 4473,
            "end": 4478,
            "name": "Union",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "key": {
          "type": "Identifier",
          "start": 4468,
          "end": 4469,
          "name": "K",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 4540,
      "end": 4585,
      "id": {
        "type": "Identifier",
        "start": 4545,
        "end": 4549,
        "name": "PCCA",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "start": 4552,
        "end": 4584,
        "objectType": {
          "type": "TSTypeReference",
          "start": 4552,
          "end": 4579,
          "typeName": {
            "type": "Identifier",
            "start": 4552,
            "end": 4579,
            "name": "ProductComplementComplement",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "indexType": {
          "type": "TSLiteralType",
          "start": 4580,
          "end": 4583,
          "literal": {
            "type": "Literal",
            "start": 4580,
            "end": 4583,
            "value": "a",
            "raw": "'a'"
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 4586,
      "end": 4631,
      "id": {
        "type": "Identifier",
        "start": 4591,
        "end": 4595,
        "name": "PCCB",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "start": 4598,
        "end": 4630,
        "objectType": {
          "type": "TSTypeReference",
          "start": 4598,
          "end": 4625,
          "typeName": {
            "type": "Identifier",
            "start": 4598,
            "end": 4625,
            "name": "ProductComplementComplement",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "indexType": {
          "type": "TSLiteralType",
          "start": 4626,
          "end": 4629,
          "literal": {
            "type": "Literal",
            "start": 4626,
            "end": 4629,
            "value": "b",
            "raw": "'b'"
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 4655,
      "end": 4731,
      "id": {
        "type": "Identifier",
        "start": 4660,
        "end": 4663,
        "name": "Hmm",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 4663,
        "end": 4679,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 4664,
            "end": 4665,
            "name": {
              "type": "Identifier",
              "start": 4664,
              "end": 4665,
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
            "start": 4667,
            "end": 4678,
            "name": {
              "type": "Identifier",
              "start": 4667,
              "end": 4668,
              "name": "U",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 4677,
              "end": 4678,
              "typeName": {
                "type": "Identifier",
                "start": 4677,
                "end": 4678,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 4682,
        "end": 4730,
        "checkType": {
          "type": "TSTypeReference",
          "start": 4682,
          "end": 4683,
          "typeName": {
            "type": "Identifier",
            "start": 4682,
            "end": 4683,
            "name": "U",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSTypeReference",
          "start": 4692,
          "end": 4693,
          "typeName": {
            "type": "Identifier",
            "start": 4692,
            "end": 4693,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "trueType": {
          "type": "TSMappedType",
          "start": 4696,
          "end": 4722,
          "typeParameter": {
            "type": "TSTypeParameter",
            "start": 4699,
            "end": 4711,
            "name": {
              "type": "Identifier",
              "start": 4699,
              "end": 4700,
              "name": "K",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 4704,
              "end": 4711,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 4710,
                "end": 4711,
                "typeName": {
                  "type": "Identifier",
                  "start": 4710,
                  "end": 4711,
                  "name": "U",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          "nameType": null,
          "typeAnnotation": {
            "type": "TSNumberKeyword",
            "start": 4714,
            "end": 4720
          },
          "optional": null,
          "readonly": null,
          "constraint": {
            "type": "TSTypeOperator",
            "start": 4704,
            "end": 4711,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 4710,
              "end": 4711,
              "typeName": {
                "type": "Identifier",
                "start": 4710,
                "end": 4711,
                "name": "U",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "key": {
            "type": "Identifier",
            "start": 4699,
            "end": 4700,
            "name": "K",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 4725,
          "end": 4730
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 4732,
      "end": 4766,
      "id": {
        "type": "Identifier",
        "start": 4737,
        "end": 4741,
        "name": "What",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 4744,
        "end": 4766,
        "typeName": {
          "type": "Identifier",
          "start": 4744,
          "end": 4747,
          "name": "Hmm",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 4747,
          "end": 4766,
          "params": [
            {
              "type": "TSTypeLiteral",
              "start": 4748,
              "end": 4750,
              "members": []
            },
            {
              "type": "TSTypeLiteral",
              "start": 4752,
              "end": 4765,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 4754,
                  "end": 4763,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 4754,
                    "end": 4755,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 4755,
                    "end": 4763,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 4757,
                      "end": 4763
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 4767,
      "end": 4792,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4773,
          "end": 4791,
          "id": {
            "type": "Identifier",
            "start": 4773,
            "end": 4780,
            "name": "w",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 4774,
              "end": 4780,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 4776,
                "end": 4780,
                "typeName": {
                  "type": "Identifier",
                  "start": 4776,
                  "end": 4780,
                  "name": "What",
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
            "start": 4783,
            "end": 4791,
            "properties": [
              {
                "type": "Property",
                "start": 4785,
                "end": 4789,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 4785,
                  "end": 4786,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 4788,
                  "end": 4789,
                  "value": 4,
                  "raw": "4"
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 4816,
      "end": 4878,
      "id": {
        "type": "Identifier",
        "start": 4833,
        "end": 4837,
        "name": "save",
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
          "start": 4838,
          "end": 4870,
          "name": "_response",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 4847,
            "end": 4870,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 4849,
              "end": 4870,
              "typeName": {
                "type": "Identifier",
                "start": 4849,
                "end": 4862,
                "name": "IRootResponse",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 4862,
                "end": 4870,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 4863,
                    "end": 4869
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 4871,
        "end": 4877,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 4873,
          "end": 4877
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 4880,
      "end": 4900,
      "expression": {
        "type": "CallExpression",
        "start": 4880,
        "end": 4899,
        "callee": {
          "type": "Identifier",
          "start": 4880,
          "end": 4893,
          "name": "exportCommand",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 4894,
            "end": 4898,
            "name": "save",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 4902,
      "end": 4994,
      "id": {
        "type": "Identifier",
        "start": 4919,
        "end": 4932,
        "name": "exportCommand",
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
          "start": 4944,
          "end": 4986,
          "name": "functionToCall",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 4958,
            "end": 4986,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 4960,
              "end": 4986,
              "typeName": {
                "type": "Identifier",
                "start": 4960,
                "end": 4975,
                "name": "IExportCallback",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 4975,
                "end": 4986,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 4976,
                    "end": 4985,
                    "typeName": {
                      "type": "Identifier",
                      "start": 4976,
                      "end": 4985,
                      "name": "TResponse",
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
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 4932,
        "end": 4943,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 4933,
            "end": 4942,
            "name": {
              "type": "Identifier",
              "start": 4933,
              "end": 4942,
              "name": "TResponse",
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
        "start": 4987,
        "end": 4993,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 4989,
          "end": 4993
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 4996,
      "end": 5081,
      "id": {
        "type": "Identifier",
        "start": 5006,
        "end": 5021,
        "name": "IExportCallback",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 5021,
        "end": 5032,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 5022,
            "end": 5031,
            "name": {
              "type": "Identifier",
              "start": 5022,
              "end": 5031,
              "name": "TResponse",
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
        "start": 5033,
        "end": 5081,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 5036,
            "end": 5079,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 5037,
                "end": 5071,
                "name": "response",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 5045,
                  "end": 5071,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 5047,
                    "end": 5071,
                    "typeName": {
                      "type": "Identifier",
                      "start": 5047,
                      "end": 5060,
                      "name": "IRootResponse",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 5060,
                      "end": 5071,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 5061,
                          "end": 5070,
                          "typeName": {
                            "type": "Identifier",
                            "start": 5061,
                            "end": 5070,
                            "name": "TResponse",
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
                "optional": false
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 5072,
              "end": 5078,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 5074,
                "end": 5078
              }
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 5083,
      "end": 5194,
      "id": {
        "type": "Identifier",
        "start": 5088,
        "end": 5101,
        "name": "IRootResponse",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 5101,
        "end": 5112,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 5102,
            "end": 5111,
            "name": {
              "type": "Identifier",
              "start": 5102,
              "end": 5111,
              "name": "TResponse",
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
        "type": "TSConditionalType",
        "start": 5116,
        "end": 5193,
        "checkType": {
          "type": "TSTypeReference",
          "start": 5116,
          "end": 5125,
          "typeName": {
            "type": "Identifier",
            "start": 5116,
            "end": 5125,
            "name": "TResponse",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSTypeReference",
          "start": 5134,
          "end": 5141,
          "typeName": {
            "type": "Identifier",
            "start": 5134,
            "end": 5141,
            "name": "IRecord",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 5144,
          "end": 5170,
          "typeName": {
            "type": "Identifier",
            "start": 5144,
            "end": 5159,
            "name": "IRecordResponse",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 5159,
            "end": 5170,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 5160,
                "end": 5169,
                "typeName": {
                  "type": "Identifier",
                  "start": 5160,
                  "end": 5169,
                  "name": "TResponse",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ]
          }
        },
        "falseType": {
          "type": "TSTypeReference",
          "start": 5173,
          "end": 5193,
          "typeName": {
            "type": "Identifier",
            "start": 5173,
            "end": 5182,
            "name": "IResponse",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 5182,
            "end": 5193,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 5183,
                "end": 5192,
                "typeName": {
                  "type": "Identifier",
                  "start": 5183,
                  "end": 5192,
                  "name": "TResponse",
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
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 5196,
      "end": 5239,
      "id": {
        "type": "Identifier",
        "start": 5206,
        "end": 5213,
        "name": "IRecord",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 5214,
        "end": 5239,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 5217,
            "end": 5237,
            "computed": false,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "start": 5226,
              "end": 5228,
              "name": "Id",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5228,
              "end": 5236,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 5230,
                "end": 5236
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
      "start": 5241,
      "end": 5331,
      "id": {
        "type": "Identifier",
        "start": 5254,
        "end": 5269,
        "name": "IRecordResponse",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 5269,
        "end": 5288,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 5270,
            "end": 5287,
            "name": {
              "type": "Identifier",
              "start": 5270,
              "end": 5271,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 5280,
              "end": 5287,
              "typeName": {
                "type": "Identifier",
                "start": 5280,
                "end": 5287,
                "name": "IRecord",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 5291,
        "end": 5330,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 5291,
            "end": 5303,
            "typeName": {
              "type": "Identifier",
              "start": 5291,
              "end": 5300,
              "name": "IResponse",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 5300,
              "end": 5303,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 5301,
                  "end": 5302,
                  "typeName": {
                    "type": "Identifier",
                    "start": 5301,
                    "end": 5302,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ]
            }
          },
          {
            "type": "TSTypeLiteral",
            "start": 5306,
            "end": 5330,
            "members": [
              {
                "type": "TSMethodSignature",
                "start": 5309,
                "end": 5328,
                "key": {
                  "type": "Identifier",
                  "start": 5309,
                  "end": 5319,
                  "name": "sendRecord",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false,
                "kind": "method",
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 5321,
                  "end": 5327,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 5323,
                    "end": 5327
                  }
                },
                "accessibility": null,
                "readonly": false,
                "static": false
              }
            ]
          }
        ]
      },
      "declare": true
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 5333,
      "end": 5430,
      "id": {
        "type": "Identifier",
        "start": 5346,
        "end": 5355,
        "name": "IResponse",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 5355,
        "end": 5358,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 5356,
            "end": 5357,
            "name": {
              "type": "Identifier",
              "start": 5356,
              "end": 5357,
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
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 5361,
        "end": 5429,
        "members": [
          {
            "type": "TSMethodSignature",
            "start": 5364,
            "end": 5427,
            "key": {
              "type": "Identifier",
              "start": 5364,
              "end": 5373,
              "name": "sendValue",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 5374,
                "end": 5419,
                "name": "name",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 5378,
                  "end": 5419,
                  "typeAnnotation": {
                    "type": "TSTypeOperator",
                    "start": 5380,
                    "end": 5419,
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 5386,
                      "end": 5419,
                      "typeName": {
                        "type": "Identifier",
                        "start": 5386,
                        "end": 5408,
                        "name": "GetAllPropertiesOfType",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 5408,
                        "end": 5419,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 5409,
                            "end": 5410,
                            "typeName": {
                              "type": "Identifier",
                              "start": 5409,
                              "end": 5410,
                              "name": "T",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          },
                          {
                            "type": "TSStringKeyword",
                            "start": 5412,
                            "end": 5418
                          }
                        ]
                      }
                    }
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 5420,
              "end": 5426,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 5422,
                "end": 5426
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": true
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 5432,
      "end": 5626,
      "id": {
        "type": "Identifier",
        "start": 5445,
        "end": 5467,
        "name": "GetPropertyNamesOfType",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 5467,
        "end": 5486,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 5468,
            "end": 5469,
            "name": {
              "type": "Identifier",
              "start": 5468,
              "end": 5469,
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
            "start": 5471,
            "end": 5485,
            "name": {
              "type": "Identifier",
              "start": 5471,
              "end": 5485,
              "name": "RestrictToType",
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
        "type": "TSIndexedAccessType",
        "start": 5489,
        "end": 5625,
        "objectType": {
          "type": "TSMappedType",
          "start": 5489,
          "end": 5599,
          "typeParameter": {
            "type": "TSTypeParameter",
            "start": 5493,
            "end": 5533,
            "name": {
              "type": "Identifier",
              "start": 5493,
              "end": 5505,
              "name": "PropertyName",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 5509,
              "end": 5533,
              "typeName": {
                "type": "Identifier",
                "start": 5509,
                "end": 5516,
                "name": "Extract",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 5516,
                "end": 5533,
                "params": [
                  {
                    "type": "TSTypeOperator",
                    "start": 5517,
                    "end": 5524,
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 5523,
                      "end": 5524,
                      "typeName": {
                        "type": "Identifier",
                        "start": 5523,
                        "end": 5524,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 5526,
                    "end": 5532
                  }
                ]
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          "nameType": null,
          "typeAnnotation": {
            "type": "TSConditionalType",
            "start": 5536,
            "end": 5597,
            "checkType": {
              "type": "TSIndexedAccessType",
              "start": 5536,
              "end": 5551,
              "objectType": {
                "type": "TSTypeReference",
                "start": 5536,
                "end": 5537,
                "typeName": {
                  "type": "Identifier",
                  "start": 5536,
                  "end": 5537,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              "indexType": {
                "type": "TSTypeReference",
                "start": 5538,
                "end": 5550,
                "typeName": {
                  "type": "Identifier",
                  "start": 5538,
                  "end": 5550,
                  "name": "PropertyName",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "extendsType": {
              "type": "TSTypeReference",
              "start": 5560,
              "end": 5574,
              "typeName": {
                "type": "Identifier",
                "start": 5560,
                "end": 5574,
                "name": "RestrictToType",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "trueType": {
              "type": "TSTypeReference",
              "start": 5577,
              "end": 5589,
              "typeName": {
                "type": "Identifier",
                "start": 5577,
                "end": 5589,
                "name": "PropertyName",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "falseType": {
              "type": "TSNeverKeyword",
              "start": 5592,
              "end": 5597
            }
          },
          "optional": null,
          "readonly": null,
          "constraint": {
            "type": "TSTypeReference",
            "start": 5509,
            "end": 5533,
            "typeName": {
              "type": "Identifier",
              "start": 5509,
              "end": 5516,
              "name": "Extract",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 5516,
              "end": 5533,
              "params": [
                {
                  "type": "TSTypeOperator",
                  "start": 5517,
                  "end": 5524,
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 5523,
                    "end": 5524,
                    "typeName": {
                      "type": "Identifier",
                      "start": 5523,
                      "end": 5524,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                {
                  "type": "TSStringKeyword",
                  "start": 5526,
                  "end": 5532
                }
              ]
            }
          },
          "key": {
            "type": "Identifier",
            "start": 5493,
            "end": 5505,
            "name": "PropertyName",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "indexType": {
          "type": "TSTypeReference",
          "start": 5600,
          "end": 5624,
          "typeName": {
            "type": "Identifier",
            "start": 5600,
            "end": 5607,
            "name": "Extract",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 5607,
            "end": 5624,
            "params": [
              {
                "type": "TSTypeOperator",
                "start": 5608,
                "end": 5615,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 5614,
                  "end": 5615,
                  "typeName": {
                    "type": "Identifier",
                    "start": 5614,
                    "end": 5615,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              },
              {
                "type": "TSStringKeyword",
                "start": 5617,
                "end": 5623
              }
            ]
          }
        }
      },
      "declare": true
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 5628,
      "end": 5750,
      "id": {
        "type": "Identifier",
        "start": 5641,
        "end": 5663,
        "name": "GetAllPropertiesOfType",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 5663,
        "end": 5682,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 5664,
            "end": 5665,
            "name": {
              "type": "Identifier",
              "start": 5664,
              "end": 5665,
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
            "start": 5667,
            "end": 5681,
            "name": {
              "type": "Identifier",
              "start": 5667,
              "end": 5681,
              "name": "RestrictToType",
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
        "type": "TSTypeReference",
        "start": 5685,
        "end": 5749,
        "typeName": {
          "type": "Identifier",
          "start": 5685,
          "end": 5689,
          "name": "Pick",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 5689,
          "end": 5749,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 5692,
              "end": 5693,
              "typeName": {
                "type": "Identifier",
                "start": 5692,
                "end": 5693,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            {
              "type": "TSTypeReference",
              "start": 5696,
              "end": 5747,
              "typeName": {
                "type": "Identifier",
                "start": 5696,
                "end": 5718,
                "name": "GetPropertyNamesOfType",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 5718,
                "end": 5747,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 5719,
                    "end": 5730,
                    "typeName": {
                      "type": "Identifier",
                      "start": 5719,
                      "end": 5727,
                      "name": "Required",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 5727,
                      "end": 5730,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 5728,
                          "end": 5729,
                          "typeName": {
                            "type": "Identifier",
                            "start": 5728,
                            "end": 5729,
                            "name": "T",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      ]
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 5732,
                    "end": 5746,
                    "typeName": {
                      "type": "Identifier",
                      "start": 5732,
                      "end": 5746,
                      "name": "RestrictToType",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          ]
        }
      },
      "declare": true
    },
    {
      "type": "TSDeclareFunction",
      "start": 5774,
      "end": 5817,
      "id": {
        "type": "Identifier",
        "start": 5791,
        "end": 5793,
        "name": "ff",
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
          "start": 5794,
          "end": 5809,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 5795,
            "end": 5809,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 5797,
              "end": 5809,
              "typeName": {
                "type": "Identifier",
                "start": 5797,
                "end": 5801,
                "name": "Foo3",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 5801,
                "end": 5809,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 5802,
                    "end": 5808
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 5810,
        "end": 5816,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 5812,
          "end": 5816
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 5818,
      "end": 5872,
      "id": {
        "type": "Identifier",
        "start": 5835,
        "end": 5837,
        "name": "gg",
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
          "start": 5841,
          "end": 5864,
          "name": "f",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 5842,
            "end": 5864,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 5844,
              "end": 5864,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 5845,
                  "end": 5855,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 5846,
                    "end": 5855,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 5848,
                      "end": 5855,
                      "typeName": {
                        "type": "Identifier",
                        "start": 5848,
                        "end": 5852,
                        "name": "Foo3",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 5852,
                        "end": 5855,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 5853,
                            "end": 5854,
                            "typeName": {
                              "type": "Identifier",
                              "start": 5853,
                              "end": 5854,
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
                  "decorators": [],
                  "optional": false
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 5857,
                "end": 5864,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 5860,
                  "end": 5864
                }
              }
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
        "start": 5837,
        "end": 5840,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 5838,
            "end": 5839,
            "name": {
              "type": "Identifier",
              "start": 5838,
              "end": 5839,
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
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 5865,
        "end": 5871,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 5867,
          "end": 5871
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 5873,
      "end": 5927,
      "id": {
        "type": "Identifier",
        "start": 5878,
        "end": 5882,
        "name": "Foo3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 5882,
        "end": 5885,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 5883,
            "end": 5884,
            "name": {
              "type": "Identifier",
              "start": 5883,
              "end": 5884,
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
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 5888,
        "end": 5926,
        "checkType": {
          "type": "TSTypeReference",
          "start": 5888,
          "end": 5889,
          "typeName": {
            "type": "Identifier",
            "start": 5888,
            "end": 5889,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSNumberKeyword",
          "start": 5898,
          "end": 5904
        },
        "trueType": {
          "type": "TSTypeLiteral",
          "start": 5907,
          "end": 5915,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 5909,
              "end": 5913,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 5909,
                "end": 5910,
                "name": "n",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 5910,
                "end": 5913,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 5912,
                  "end": 5913,
                  "typeName": {
                    "type": "Identifier",
                    "start": 5912,
                    "end": 5913,
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
        },
        "falseType": {
          "type": "TSTypeLiteral",
          "start": 5918,
          "end": 5926,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 5920,
              "end": 5924,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 5920,
                "end": 5921,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 5921,
                "end": 5924,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 5923,
                  "end": 5924,
                  "typeName": {
                    "type": "Identifier",
                    "start": 5923,
                    "end": 5924,
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
      },
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 5928,
      "end": 5935,
      "expression": {
        "type": "CallExpression",
        "start": 5928,
        "end": 5934,
        "callee": {
          "type": "Identifier",
          "start": 5928,
          "end": 5930,
          "name": "gg",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 5931,
            "end": 5933,
            "name": "ff",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 5959,
      "end": 6056,
      "id": {
        "type": "Identifier",
        "start": 5964,
        "end": 5967,
        "name": "Wat",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 5967,
        "end": 5985,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 5968,
            "end": 5984,
            "name": {
              "type": "Identifier",
              "start": 5968,
              "end": 5969,
              "name": "K",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 5978,
              "end": 5984
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 5988,
        "end": 6055,
        "checkType": {
          "type": "TSTypeLiteral",
          "start": 5988,
          "end": 6009,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 5990,
              "end": 6007,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 5990,
                "end": 5991,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 5991,
                "end": 6007,
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "start": 5993,
                  "end": 6007,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 5995,
                      "end": 6000,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 5995,
                        "end": 5996,
                        "name": "y",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 5996,
                        "end": 5999,
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "start": 5998,
                          "end": 5999,
                          "literal": {
                            "type": "Literal",
                            "start": 5998,
                            "end": 5999,
                            "value": 0,
                            "raw": "0"
                          }
                        }
                      },
                      "accessibility": null,
                      "static": false
                    },
                    {
                      "type": "TSPropertySignature",
                      "start": 6001,
                      "end": 6005,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 6001,
                        "end": 6002,
                        "name": "z",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 6002,
                        "end": 6005,
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "start": 6004,
                          "end": 6005,
                          "literal": {
                            "type": "Literal",
                            "start": 6004,
                            "end": 6005,
                            "value": 1,
                            "raw": "1"
                          }
                        }
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
                }
              },
              "accessibility": null,
              "static": false
            }
          ]
        },
        "extendsType": {
          "type": "TSTypeLiteral",
          "start": 6018,
          "end": 6040,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 6020,
              "end": 6038,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 6020,
                "end": 6021,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 6021,
                "end": 6038,
                "typeAnnotation": {
                  "type": "TSMappedType",
                  "start": 6023,
                  "end": 6038,
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "start": 6026,
                    "end": 6032,
                    "name": {
                      "type": "Identifier",
                      "start": 6026,
                      "end": 6027,
                      "name": "P",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 6031,
                      "end": 6032,
                      "typeName": {
                        "type": "Identifier",
                        "start": 6031,
                        "end": 6032,
                        "name": "K",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  },
                  "nameType": null,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 6035,
                    "end": 6036,
                    "literal": {
                      "type": "Literal",
                      "start": 6035,
                      "end": 6036,
                      "value": 0,
                      "raw": "0"
                    }
                  },
                  "optional": null,
                  "readonly": null,
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 6031,
                    "end": 6032,
                    "typeName": {
                      "type": "Identifier",
                      "start": 6031,
                      "end": 6032,
                      "name": "K",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  "key": {
                    "type": "Identifier",
                    "start": 6026,
                    "end": 6027,
                    "name": "P",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              },
              "accessibility": null,
              "static": false
            }
          ]
        },
        "trueType": {
          "type": "TSLiteralType",
          "start": 6043,
          "end": 6047,
          "literal": {
            "type": "Literal",
            "start": 6043,
            "end": 6047,
            "value": true,
            "raw": "true"
          }
        },
        "falseType": {
          "type": "TSLiteralType",
          "start": 6050,
          "end": 6055,
          "literal": {
            "type": "Literal",
            "start": 6050,
            "end": 6055,
            "value": false,
            "raw": "false"
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 6059,
      "end": 6079,
      "id": {
        "type": "Identifier",
        "start": 6064,
        "end": 6067,
        "name": "Huh",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 6070,
        "end": 6078,
        "typeName": {
          "type": "Identifier",
          "start": 6070,
          "end": 6073,
          "name": "Wat",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 6073,
          "end": 6078,
          "params": [
            {
              "type": "TSLiteralType",
              "start": 6074,
              "end": 6077,
              "literal": {
                "type": "Literal",
                "start": 6074,
                "end": 6077,
                "value": "y",
                "raw": "\"y\""
              }
            }
          ]
        }
      },
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
