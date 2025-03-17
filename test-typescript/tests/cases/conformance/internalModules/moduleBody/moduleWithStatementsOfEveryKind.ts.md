__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1232,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 569,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 569,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 15,
            "end": 36,
            "id": {
              "type": "Identifier",
              "start": 21,
              "end": 22,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 23,
              "end": 36,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 25,
                  "end": 34,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 25,
                    "end": 26,
                    "name": "s",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": null,
                  "decorators": [],
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 26,
                    "end": 34,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 28,
                      "end": 34
                    }
                  },
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
            "start": 41,
            "end": 61,
            "id": {
              "type": "Identifier",
              "start": 47,
              "end": 49,
              "name": "AA",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 53,
              "end": 61,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 55,
                  "end": 59,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 55,
                    "end": 56,
                    "name": "s",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": null,
                  "decorators": [],
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 56,
                    "end": 59,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 58,
                      "end": 59,
                      "typeName": {
                        "type": "Identifier",
                        "start": 58,
                        "end": 59,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "accessibility": null
                }
              ]
            },
            "decorators": [],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 49,
              "end": 52,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 50,
                  "end": 51,
                  "name": {
                    "type": "Identifier",
                    "start": 50,
                    "end": 51,
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
            "start": 66,
            "end": 92,
            "id": {
              "type": "Identifier",
              "start": 76,
              "end": 77,
              "name": "I",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 78,
              "end": 92,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 80,
                  "end": 90,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 80,
                    "end": 82,
                    "name": "id",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 82,
                    "end": 90,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 84,
                      "end": 90
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
            "type": "ClassDeclaration",
            "start": 98,
            "end": 152,
            "id": {
              "type": "Identifier",
              "start": 104,
              "end": 105,
              "name": "B",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": {
              "type": "Identifier",
              "start": 114,
              "end": 116,
              "name": "AA",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "ClassBody",
              "start": 138,
              "end": 152,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 140,
                  "end": 150,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 140,
                    "end": 142,
                    "name": "id",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": null,
                  "decorators": [],
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 142,
                    "end": 150,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 144,
                      "end": 150
                    }
                  },
                  "accessibility": null
                }
              ]
            },
            "decorators": [],
            "typeParameters": null,
            "implements": [
              {
                "type": "TSClassImplements",
                "start": 136,
                "end": 137,
                "expression": {
                  "type": "Identifier",
                  "start": 136,
                  "end": 137,
                  "name": "I",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ],
            "abstract": false,
            "declare": false,
            "superTypeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 116,
              "end": 124,
              "params": [
                {
                  "type": "TSStringKeyword",
                  "start": 117,
                  "end": 123
                }
              ]
            }
          },
          {
            "type": "ClassDeclaration",
            "start": 157,
            "end": 206,
            "id": {
              "type": "Identifier",
              "start": 163,
              "end": 165,
              "name": "BB",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": {
              "type": "Identifier",
              "start": 177,
              "end": 178,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "ClassBody",
              "start": 179,
              "end": 206,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 189,
                  "end": 200,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 189,
                    "end": 191,
                    "name": "id",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": null,
                  "decorators": [],
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 191,
                    "end": 199,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 193,
                      "end": 199
                    }
                  },
                  "accessibility": null
                }
              ]
            },
            "decorators": [],
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
            "implements": [],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
          },
          {
            "type": "TSModuleDeclaration",
            "start": 212,
            "end": 263,
            "id": {
              "type": "Identifier",
              "start": 219,
              "end": 225,
              "name": "Module",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "TSModuleBlock",
              "start": 226,
              "end": 263,
              "body": [
                {
                  "type": "ClassDeclaration",
                  "start": 236,
                  "end": 257,
                  "id": {
                    "type": "Identifier",
                    "start": 242,
                    "end": 243,
                    "name": "A",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "superClass": null,
                  "body": {
                    "type": "ClassBody",
                    "start": 244,
                    "end": 257,
                    "body": [
                      {
                        "type": "PropertyDefinition",
                        "start": 246,
                        "end": 255,
                        "static": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 246,
                          "end": 247,
                          "name": "s",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": null,
                        "decorators": [],
                        "declare": false,
                        "override": false,
                        "optional": false,
                        "definite": false,
                        "readonly": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 247,
                          "end": 255,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 249,
                            "end": 255
                          }
                        },
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
                }
              ]
            },
            "kind": "module",
            "declare": false,
            "global": false
          },
          {
            "type": "TSEnumDeclaration",
            "start": 268,
            "end": 292,
            "id": {
              "type": "Identifier",
              "start": 273,
              "end": 278,
              "name": "Color",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "members": [
              {
                "type": "TSEnumMember",
                "start": 281,
                "end": 285,
                "id": {
                  "type": "Identifier",
                  "start": 281,
                  "end": 285,
                  "name": "Blue",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "initializer": null,
                "computed": false
              },
              {
                "type": "TSEnumMember",
                "start": 287,
                "end": 290,
                "id": {
                  "type": "Identifier",
                  "start": 287,
                  "end": 290,
                  "name": "Red",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "initializer": null,
                "computed": false
              }
            ],
            "const": false,
            "declare": false,
            "body": {
              "type": "TSEnumBody",
              "start": 279,
              "end": 292,
              "members": [
                {
                  "type": "TSEnumMember",
                  "start": 281,
                  "end": 285,
                  "id": {
                    "type": "Identifier",
                    "start": 281,
                    "end": 285,
                    "name": "Blue",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": null,
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 287,
                  "end": 290,
                  "id": {
                    "type": "Identifier",
                    "start": 287,
                    "end": 290,
                    "name": "Red",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": null,
                  "computed": false
                }
              ]
            }
          },
          {
            "type": "VariableDeclaration",
            "start": 297,
            "end": 308,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 301,
                "end": 307,
                "id": {
                  "type": "Identifier",
                  "start": 301,
                  "end": 302,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 305,
                  "end": 307,
                  "value": 12,
                  "raw": "12"
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "FunctionDeclaration",
            "start": 313,
            "end": 368,
            "id": {
              "type": "Identifier",
              "start": 322,
              "end": 323,
              "name": "F",
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
                "start": 324,
                "end": 333,
                "name": "s",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 325,
                  "end": 333,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 327,
                    "end": 333
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "BlockStatement",
              "start": 343,
              "end": 368,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 353,
                  "end": 362,
                  "argument": {
                    "type": "Literal",
                    "start": 360,
                    "end": 361,
                    "value": 2,
                    "raw": "2"
                  }
                }
              ]
            },
            "declare": false,
            "typeParameters": null,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 334,
              "end": 342,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 336,
                "end": 342
              }
            }
          },
          {
            "type": "VariableDeclaration",
            "start": 373,
            "end": 395,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 377,
                "end": 394,
                "id": {
                  "type": "Identifier",
                  "start": 377,
                  "end": 387,
                  "name": "array",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 382,
                    "end": 387,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 384,
                      "end": 387,
                      "elementType": {
                        "type": "TSTypeReference",
                        "start": 384,
                        "end": 385,
                        "typeName": {
                          "type": "Identifier",
                          "start": 384,
                          "end": 385,
                          "name": "I",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 390,
                  "end": 394,
                  "value": null,
                  "raw": "null"
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 400,
            "end": 460,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 404,
                "end": 460,
                "id": {
                  "type": "Identifier",
                  "start": 404,
                  "end": 406,
                  "name": "fn",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "start": 409,
                  "end": 460,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 410,
                      "end": 419,
                      "name": "s",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 411,
                        "end": 419,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 413,
                          "end": 419
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "BlockStatement",
                    "start": 424,
                    "end": 460,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 434,
                        "end": 454,
                        "argument": {
                          "type": "BinaryExpression",
                          "start": 441,
                          "end": 453,
                          "left": {
                            "type": "Literal",
                            "start": 441,
                            "end": 449,
                            "value": "hello ",
                            "raw": "'hello '"
                          },
                          "operator": "+",
                          "right": {
                            "type": "Identifier",
                            "start": 452,
                            "end": 453,
                            "name": "s",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        }
                      }
                    ]
                  },
                  "typeParameters": null,
                  "returnType": null
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 465,
            "end": 511,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 469,
                "end": 510,
                "id": {
                  "type": "Identifier",
                  "start": 469,
                  "end": 471,
                  "name": "ol",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 474,
                  "end": 510,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 476,
                      "end": 486,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 476,
                        "end": 477,
                        "name": "s",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 479,
                        "end": 486,
                        "value": "hello",
                        "raw": "'hello'"
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 488,
                      "end": 493,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 488,
                        "end": 490,
                        "name": "id",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 492,
                        "end": 493,
                        "value": 2,
                        "raw": "2"
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 495,
                      "end": 508,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 495,
                        "end": 502,
                        "name": "isvalid",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 504,
                        "end": 508,
                        "value": true,
                        "raw": "true"
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "ClassDeclaration",
            "start": 517,
            "end": 567,
            "id": {
              "type": "Identifier",
              "start": 531,
              "end": 533,
              "name": "DC",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 534,
              "end": 567,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 544,
                  "end": 561,
                  "static": true,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 551,
                    "end": 552,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": null,
                  "decorators": [],
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 552,
                    "end": 560,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 554,
                      "end": 560
                    }
                  },
                  "accessibility": null
                }
              ]
            },
            "decorators": [],
            "typeParameters": null,
            "implements": [],
            "abstract": false,
            "declare": true,
            "superTypeArguments": null
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 571,
      "end": 1231,
      "id": {
        "type": "Identifier",
        "start": 578,
        "end": 579,
        "name": "Y",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 580,
        "end": 1231,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 586,
            "end": 614,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 593,
              "end": 614,
              "id": {
                "type": "Identifier",
                "start": 599,
                "end": 600,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 601,
                "end": 614,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 603,
                    "end": 612,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 603,
                      "end": 604,
                      "name": "s",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": null,
                    "decorators": [],
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 604,
                      "end": 612,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 606,
                        "end": 612
                      }
                    },
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
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 619,
            "end": 646,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 626,
              "end": 646,
              "id": {
                "type": "Identifier",
                "start": 632,
                "end": 634,
                "name": "AA",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 638,
                "end": 646,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 640,
                    "end": 644,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 640,
                      "end": 641,
                      "name": "s",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": null,
                    "decorators": [],
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 641,
                      "end": 644,
                      "typeAnnotation": {
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
                      }
                    },
                    "accessibility": null
                  }
                ]
              },
              "decorators": [],
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 634,
                "end": 637,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 635,
                    "end": 636,
                    "name": {
                      "type": "Identifier",
                      "start": 635,
                      "end": 636,
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
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 651,
            "end": 684,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 658,
              "end": 684,
              "id": {
                "type": "Identifier",
                "start": 668,
                "end": 669,
                "name": "I",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
              "typeParameters": null,
              "body": {
                "type": "TSInterfaceBody",
                "start": 670,
                "end": 684,
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "start": 672,
                    "end": 682,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 672,
                      "end": 674,
                      "name": "id",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 674,
                      "end": 682,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 676,
                        "end": 682
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              },
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "type"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 690,
            "end": 751,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 697,
              "end": 751,
              "id": {
                "type": "Identifier",
                "start": 703,
                "end": 704,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": {
                "type": "Identifier",
                "start": 713,
                "end": 715,
                "name": "AA",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "body": {
                "type": "ClassBody",
                "start": 737,
                "end": 751,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 739,
                    "end": 749,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 739,
                      "end": 741,
                      "name": "id",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": null,
                    "decorators": [],
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 741,
                      "end": 749,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 743,
                        "end": 749
                      }
                    },
                    "accessibility": null
                  }
                ]
              },
              "decorators": [],
              "typeParameters": null,
              "implements": [
                {
                  "type": "TSClassImplements",
                  "start": 735,
                  "end": 736,
                  "expression": {
                    "type": "Identifier",
                    "start": 735,
                    "end": 736,
                    "name": "I",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ],
              "abstract": false,
              "declare": false,
              "superTypeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 715,
                "end": 723,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 716,
                    "end": 722
                  }
                ]
              }
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 756,
            "end": 812,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 763,
              "end": 812,
              "id": {
                "type": "Identifier",
                "start": 769,
                "end": 771,
                "name": "BB",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": {
                "type": "Identifier",
                "start": 783,
                "end": 784,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "body": {
                "type": "ClassBody",
                "start": 785,
                "end": 812,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 795,
                    "end": 806,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 795,
                      "end": 797,
                      "name": "id",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": null,
                    "decorators": [],
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 797,
                      "end": 805,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 799,
                        "end": 805
                      }
                    },
                    "accessibility": null
                  }
                ]
              },
              "decorators": [],
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 771,
                "end": 774,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 772,
                    "end": 773,
                    "name": {
                      "type": "Identifier",
                      "start": 772,
                      "end": 773,
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
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 818,
            "end": 876,
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 825,
              "end": 876,
              "id": {
                "type": "Identifier",
                "start": 832,
                "end": 838,
                "name": "Module",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "body": {
                "type": "TSModuleBlock",
                "start": 839,
                "end": 876,
                "body": [
                  {
                    "type": "ClassDeclaration",
                    "start": 849,
                    "end": 870,
                    "id": {
                      "type": "Identifier",
                      "start": 855,
                      "end": 856,
                      "name": "A",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "superClass": null,
                    "body": {
                      "type": "ClassBody",
                      "start": 857,
                      "end": 870,
                      "body": [
                        {
                          "type": "PropertyDefinition",
                          "start": 859,
                          "end": 868,
                          "static": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 859,
                            "end": 860,
                            "name": "s",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": null,
                          "decorators": [],
                          "declare": false,
                          "override": false,
                          "optional": false,
                          "definite": false,
                          "readonly": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 860,
                            "end": 868,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 862,
                              "end": 868
                            }
                          },
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
                  }
                ]
              },
              "kind": "module",
              "declare": false,
              "global": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 881,
            "end": 912,
            "declaration": {
              "type": "TSEnumDeclaration",
              "start": 888,
              "end": 912,
              "id": {
                "type": "Identifier",
                "start": 893,
                "end": 898,
                "name": "Color",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "members": [
                {
                  "type": "TSEnumMember",
                  "start": 901,
                  "end": 905,
                  "id": {
                    "type": "Identifier",
                    "start": 901,
                    "end": 905,
                    "name": "Blue",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": null,
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 907,
                  "end": 910,
                  "id": {
                    "type": "Identifier",
                    "start": 907,
                    "end": 910,
                    "name": "Red",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": null,
                  "computed": false
                }
              ],
              "const": false,
              "declare": false,
              "body": {
                "type": "TSEnumBody",
                "start": 899,
                "end": 912,
                "members": [
                  {
                    "type": "TSEnumMember",
                    "start": 901,
                    "end": 905,
                    "id": {
                      "type": "Identifier",
                      "start": 901,
                      "end": 905,
                      "name": "Blue",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": null,
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 907,
                    "end": 910,
                    "id": {
                      "type": "Identifier",
                      "start": 907,
                      "end": 910,
                      "name": "Red",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": null,
                    "computed": false
                  }
                ]
              }
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 917,
            "end": 935,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 924,
              "end": 935,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 928,
                  "end": 934,
                  "id": {
                    "type": "Identifier",
                    "start": 928,
                    "end": 929,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 932,
                    "end": 934,
                    "value": 12,
                    "raw": "12"
                  },
                  "definite": false
                }
              ],
              "kind": "var",
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 940,
            "end": 1002,
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 947,
              "end": 1002,
              "id": {
                "type": "Identifier",
                "start": 956,
                "end": 957,
                "name": "F",
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
                  "start": 958,
                  "end": 967,
                  "name": "s",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 959,
                    "end": 967,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 961,
                      "end": 967
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 977,
                "end": 1002,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 987,
                    "end": 996,
                    "argument": {
                      "type": "Literal",
                      "start": 994,
                      "end": 995,
                      "value": 2,
                      "raw": "2"
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 968,
                "end": 976,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 970,
                  "end": 976
                }
              }
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 1007,
            "end": 1036,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 1014,
              "end": 1036,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 1018,
                  "end": 1035,
                  "id": {
                    "type": "Identifier",
                    "start": 1018,
                    "end": 1028,
                    "name": "array",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1023,
                      "end": 1028,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 1025,
                        "end": 1028,
                        "elementType": {
                          "type": "TSTypeReference",
                          "start": 1025,
                          "end": 1026,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1025,
                            "end": 1026,
                            "name": "I",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 1031,
                    "end": 1035,
                    "value": null,
                    "raw": "null"
                  },
                  "definite": false
                }
              ],
              "kind": "var",
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 1041,
            "end": 1108,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 1048,
              "end": 1108,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 1052,
                  "end": 1108,
                  "id": {
                    "type": "Identifier",
                    "start": 1052,
                    "end": 1054,
                    "name": "fn",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "ArrowFunctionExpression",
                    "start": 1057,
                    "end": 1108,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1058,
                        "end": 1067,
                        "name": "s",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1059,
                          "end": 1067,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1061,
                            "end": 1067
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "body": {
                      "type": "BlockStatement",
                      "start": 1072,
                      "end": 1108,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 1082,
                          "end": 1102,
                          "argument": {
                            "type": "BinaryExpression",
                            "start": 1089,
                            "end": 1101,
                            "left": {
                              "type": "Literal",
                              "start": 1089,
                              "end": 1097,
                              "value": "hello ",
                              "raw": "'hello '"
                            },
                            "operator": "+",
                            "right": {
                              "type": "Identifier",
                              "start": 1100,
                              "end": 1101,
                              "name": "s",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          }
                        }
                      ]
                    },
                    "typeParameters": null,
                    "returnType": null
                  },
                  "definite": false
                }
              ],
              "kind": "var",
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 1113,
            "end": 1166,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 1120,
              "end": 1166,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 1124,
                  "end": 1165,
                  "id": {
                    "type": "Identifier",
                    "start": 1124,
                    "end": 1126,
                    "name": "ol",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "ObjectExpression",
                    "start": 1129,
                    "end": 1165,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 1131,
                        "end": 1141,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 1131,
                          "end": 1132,
                          "name": "s",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Literal",
                          "start": 1134,
                          "end": 1141,
                          "value": "hello",
                          "raw": "'hello'"
                        },
                        "kind": "init",
                        "optional": false
                      },
                      {
                        "type": "Property",
                        "start": 1143,
                        "end": 1148,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 1143,
                          "end": 1145,
                          "name": "id",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Literal",
                          "start": 1147,
                          "end": 1148,
                          "value": 2,
                          "raw": "2"
                        },
                        "kind": "init",
                        "optional": false
                      },
                      {
                        "type": "Property",
                        "start": 1150,
                        "end": 1163,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 1150,
                          "end": 1157,
                          "name": "isvalid",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Literal",
                          "start": 1159,
                          "end": 1163,
                          "value": true,
                          "raw": "true"
                        },
                        "kind": "init",
                        "optional": false
                      }
                    ]
                  },
                  "definite": false
                }
              ],
              "kind": "var",
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 1172,
            "end": 1229,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 1179,
              "end": 1229,
              "id": {
                "type": "Identifier",
                "start": 1193,
                "end": 1195,
                "name": "DC",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 1196,
                "end": 1229,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 1206,
                    "end": 1223,
                    "static": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1213,
                      "end": 1214,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": null,
                    "decorators": [],
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1214,
                      "end": 1222,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1216,
                        "end": 1222
                      }
                    },
                    "accessibility": null
                  }
                ]
              },
              "decorators": [],
              "typeParameters": null,
              "implements": [],
              "abstract": false,
              "declare": true,
              "superTypeArguments": null
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "type"
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
