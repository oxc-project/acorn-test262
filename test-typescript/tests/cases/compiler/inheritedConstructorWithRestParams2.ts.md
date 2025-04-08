__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 677,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 51,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 15,
        "name": "IBaseBase",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 22,
        "end": 51,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 28,
            "end": 49,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 28,
              "end": 39,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 39,
              "end": 49,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 40,
                  "end": 44,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 41,
                    "end": 44,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 43,
                      "end": 44,
                      "typeName": {
                        "type": "Identifier",
                        "start": 43,
                        "end": 44,
                        "name": "U",
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
                "start": 46,
                "end": 49,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
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
        "start": 15,
        "end": 21,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 16,
            "end": 17,
            "name": {
              "type": "Identifier",
              "start": 16,
              "end": 17,
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
            "start": 19,
            "end": 20,
            "name": {
              "type": "Identifier",
              "start": 19,
              "end": 20,
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
      "start": 53,
      "end": 102,
      "id": {
        "type": "Identifier",
        "start": 63,
        "end": 68,
        "name": "IBase",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 83,
          "end": 98,
          "expression": {
            "type": "Identifier",
            "start": 83,
            "end": 92,
            "name": "IBaseBase",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 92,
            "end": 98,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 93,
                "end": 94,
                "typeName": {
                  "type": "Identifier",
                  "start": 93,
                  "end": 94,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              {
                "type": "TSTypeReference",
                "start": 96,
                "end": 97,
                "typeName": {
                  "type": "Identifier",
                  "start": 96,
                  "end": 97,
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
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 68,
        "end": 74,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 69,
            "end": 70,
            "name": {
              "type": "Identifier",
              "start": 69,
              "end": 70,
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
            "start": 72,
            "end": 73,
            "name": {
              "type": "Identifier",
              "start": 72,
              "end": 73,
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
          }
        ]
      },
      "body": {
        "type": "TSInterfaceBody",
        "start": 99,
        "end": 102,
        "body": []
      },
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 104,
      "end": 154,
      "id": {
        "type": "Identifier",
        "start": 110,
        "end": 119,
        "name": "BaseBase2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 120,
        "end": 154,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 126,
            "end": 152,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 126,
              "end": 137,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 137,
              "end": 152,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 138,
                  "end": 147,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 139,
                    "end": 147,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 141,
                      "end": 147
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 149,
                "end": 152,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 156,
      "end": 342,
      "id": {
        "type": "Identifier",
        "start": 170,
        "end": 178,
        "name": "BaseBase",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 193,
        "end": 202,
        "name": "BaseBase2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 226,
        "end": 342,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 232,
            "end": 261,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 232,
              "end": 243,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 243,
              "end": 261,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 244,
                  "end": 248,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 245,
                    "end": 248,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 247,
                      "end": 248,
                      "typeName": {
                        "type": "Identifier",
                        "start": 247,
                        "end": 248,
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
                {
                  "type": "RestElement",
                  "start": 250,
                  "end": 259,
                  "argument": {
                    "type": "Identifier",
                    "start": 253,
                    "end": 254,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 254,
                    "end": 259,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 256,
                      "end": 259,
                      "elementType": {
                        "type": "TSTypeReference",
                        "start": 256,
                        "end": 257,
                        "typeName": {
                          "type": "Identifier",
                          "start": 256,
                          "end": 257,
                          "name": "U",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  "value": null
                }
              ],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 266,
            "end": 303,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 266,
              "end": 277,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 277,
              "end": 303,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 278,
                  "end": 283,
                  "name": "x1",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 280,
                    "end": 283,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 282,
                      "end": 283,
                      "typeName": {
                        "type": "Identifier",
                        "start": 282,
                        "end": 283,
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
                {
                  "type": "Identifier",
                  "start": 285,
                  "end": 290,
                  "name": "x2",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 287,
                    "end": 290,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 289,
                      "end": 290,
                      "typeName": {
                        "type": "Identifier",
                        "start": 289,
                        "end": 290,
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
                {
                  "type": "RestElement",
                  "start": 292,
                  "end": 301,
                  "argument": {
                    "type": "Identifier",
                    "start": 295,
                    "end": 296,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 296,
                    "end": 301,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 298,
                      "end": 301,
                      "elementType": {
                        "type": "TSTypeReference",
                        "start": 298,
                        "end": 299,
                        "typeName": {
                          "type": "Identifier",
                          "start": 298,
                          "end": 299,
                          "name": "U",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  "value": null
                }
              ],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 308,
            "end": 340,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 308,
              "end": 319,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 319,
              "end": 340,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 320,
                  "end": 325,
                  "name": "x1",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 322,
                    "end": 325,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 324,
                      "end": 325,
                      "typeName": {
                        "type": "Identifier",
                        "start": 324,
                        "end": 325,
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
                {
                  "type": "Identifier",
                  "start": 327,
                  "end": 332,
                  "name": "x2",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 329,
                    "end": 332,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 331,
                      "end": 332,
                      "typeName": {
                        "type": "Identifier",
                        "start": 331,
                        "end": 332,
                        "name": "U",
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
                  "end": 338,
                  "name": "y",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 335,
                    "end": 338,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 337,
                      "end": 338,
                      "typeName": {
                        "type": "Identifier",
                        "start": 337,
                        "end": 338,
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
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": null
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
        "start": 178,
        "end": 184,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 179,
            "end": 180,
            "name": {
              "type": "Identifier",
              "start": 179,
              "end": 180,
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
            "start": 182,
            "end": 183,
            "name": {
              "type": "Identifier",
              "start": 182,
              "end": 183,
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
          }
        ]
      },
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 214,
          "end": 225,
          "expression": {
            "type": "Identifier",
            "start": 214,
            "end": 219,
            "name": "IBase",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 219,
            "end": 225,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 220,
                "end": 221,
                "typeName": {
                  "type": "Identifier",
                  "start": 220,
                  "end": 221,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              {
                "type": "TSTypeReference",
                "start": 223,
                "end": 224,
                "typeName": {
                  "type": "Identifier",
                  "start": 223,
                  "end": 224,
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
      ],
      "abstract": false,
      "declare": true,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 344,
      "end": 391,
      "id": {
        "type": "Identifier",
        "start": 350,
        "end": 354,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 363,
        "end": 371,
        "name": "BaseBase",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 388,
        "end": 391,
        "body": []
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 371,
        "end": 387,
        "params": [
          {
            "type": "TSStringKeyword",
            "start": 372,
            "end": 378
          },
          {
            "type": "TSNumberKeyword",
            "start": 380,
            "end": 386
          }
        ]
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 393,
      "end": 423,
      "id": {
        "type": "Identifier",
        "start": 399,
        "end": 406,
        "name": "Derived",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 415,
        "end": 419,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 420,
        "end": 423,
        "body": []
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ExpressionStatement",
      "start": 431,
      "end": 451,
      "expression": {
        "type": "NewExpression",
        "start": 431,
        "end": 450,
        "callee": {
          "type": "Identifier",
          "start": 435,
          "end": 442,
          "name": "Derived",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 443,
            "end": 445,
            "value": "",
            "raw": "\"\""
          },
          {
            "type": "Literal",
            "start": 447,
            "end": 449,
            "value": "",
            "raw": "\"\""
          }
        ],
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 452,
      "end": 471,
      "expression": {
        "type": "NewExpression",
        "start": 452,
        "end": 470,
        "callee": {
          "type": "Identifier",
          "start": 456,
          "end": 463,
          "name": "Derived",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 464,
            "end": 466,
            "value": "",
            "raw": "\"\""
          },
          {
            "type": "Literal",
            "start": 468,
            "end": 469,
            "value": 3,
            "raw": "3"
          }
        ],
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 472,
      "end": 494,
      "expression": {
        "type": "NewExpression",
        "start": 472,
        "end": 493,
        "callee": {
          "type": "Identifier",
          "start": 476,
          "end": 483,
          "name": "Derived",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 484,
            "end": 486,
            "value": "",
            "raw": "\"\""
          },
          {
            "type": "Literal",
            "start": 488,
            "end": 489,
            "value": 3,
            "raw": "3"
          },
          {
            "type": "Literal",
            "start": 491,
            "end": 492,
            "value": 3,
            "raw": "3"
          }
        ],
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 495,
      "end": 520,
      "expression": {
        "type": "NewExpression",
        "start": 495,
        "end": 519,
        "callee": {
          "type": "Identifier",
          "start": 499,
          "end": 506,
          "name": "Derived",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 507,
            "end": 509,
            "value": "",
            "raw": "\"\""
          },
          {
            "type": "Literal",
            "start": 511,
            "end": 512,
            "value": 3,
            "raw": "3"
          },
          {
            "type": "Literal",
            "start": 514,
            "end": 515,
            "value": 3,
            "raw": "3"
          },
          {
            "type": "Literal",
            "start": 517,
            "end": 518,
            "value": 3,
            "raw": "3"
          }
        ],
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 521,
      "end": 544,
      "expression": {
        "type": "NewExpression",
        "start": 521,
        "end": 543,
        "callee": {
          "type": "Identifier",
          "start": 525,
          "end": 532,
          "name": "Derived",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 533,
            "end": 535,
            "value": "",
            "raw": "\"\""
          },
          {
            "type": "Literal",
            "start": 537,
            "end": 538,
            "value": 3,
            "raw": "3"
          },
          {
            "type": "Literal",
            "start": 540,
            "end": 542,
            "value": "",
            "raw": "\"\""
          }
        ],
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 545,
      "end": 568,
      "expression": {
        "type": "NewExpression",
        "start": 545,
        "end": 567,
        "callee": {
          "type": "Identifier",
          "start": 549,
          "end": 556,
          "name": "Derived",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 557,
            "end": 559,
            "value": "",
            "raw": "\"\""
          },
          {
            "type": "Literal",
            "start": 561,
            "end": 563,
            "value": "",
            "raw": "\"\""
          },
          {
            "type": "Literal",
            "start": 565,
            "end": 566,
            "value": 3,
            "raw": "3"
          }
        ],
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 569,
      "end": 595,
      "expression": {
        "type": "NewExpression",
        "start": 569,
        "end": 594,
        "callee": {
          "type": "Identifier",
          "start": 573,
          "end": 580,
          "name": "Derived",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 581,
            "end": 583,
            "value": "",
            "raw": "\"\""
          },
          {
            "type": "Literal",
            "start": 585,
            "end": 587,
            "value": "",
            "raw": "\"\""
          },
          {
            "type": "Literal",
            "start": 589,
            "end": 590,
            "value": 3,
            "raw": "3"
          },
          {
            "type": "Literal",
            "start": 592,
            "end": 593,
            "value": 3,
            "raw": "3"
          }
        ],
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 607,
      "end": 622,
      "expression": {
        "type": "NewExpression",
        "start": 607,
        "end": 621,
        "callee": {
          "type": "Identifier",
          "start": 611,
          "end": 618,
          "name": "Derived",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 619,
            "end": 620,
            "value": 3,
            "raw": "3"
          }
        ],
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 623,
      "end": 649,
      "expression": {
        "type": "NewExpression",
        "start": 623,
        "end": 648,
        "callee": {
          "type": "Identifier",
          "start": 627,
          "end": 634,
          "name": "Derived",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 635,
            "end": 637,
            "value": "",
            "raw": "\"\""
          },
          {
            "type": "Literal",
            "start": 639,
            "end": 640,
            "value": 3,
            "raw": "3"
          },
          {
            "type": "Literal",
            "start": 642,
            "end": 644,
            "value": "",
            "raw": "\"\""
          },
          {
            "type": "Literal",
            "start": 646,
            "end": 647,
            "value": 3,
            "raw": "3"
          }
        ],
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 650,
      "end": 677,
      "expression": {
        "type": "NewExpression",
        "start": 650,
        "end": 676,
        "callee": {
          "type": "Identifier",
          "start": 654,
          "end": 661,
          "name": "Derived",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 662,
            "end": 664,
            "value": "",
            "raw": "\"\""
          },
          {
            "type": "Literal",
            "start": 666,
            "end": 667,
            "value": 3,
            "raw": "3"
          },
          {
            "type": "Literal",
            "start": 669,
            "end": 671,
            "value": "",
            "raw": "\"\""
          },
          {
            "type": "Literal",
            "start": 673,
            "end": 675,
            "value": "",
            "raw": "\"\""
          }
        ],
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
