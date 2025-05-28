__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 57,
  "end": 1114,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 57,
      "end": 120,
      "id": {
        "type": "Identifier",
        "start": 74,
        "end": 79,
        "decorators": [],
        "name": "test1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 79,
        "end": 82,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 80,
            "end": 81,
            "name": {
              "type": "Identifier",
              "start": 80,
              "end": 81,
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
      "params": [
        {
          "type": "Identifier",
          "start": 83,
          "end": 115,
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 86,
            "end": 115,
            "typeAnnotation": {
              "type": "TSMappedType",
              "start": 88,
              "end": 115,
              "key": {
                "type": "Identifier",
                "start": 93,
                "end": 94,
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": {
                "type": "TSTypeOperator",
                "start": 98,
                "end": 105,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 104,
                  "end": 105,
                  "typeName": {
                    "type": "Identifier",
                    "start": 104,
                    "end": 105,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "start": 108,
                "end": 112,
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 108,
                  "end": 109,
                  "typeName": {
                    "type": "Identifier",
                    "start": 108,
                    "end": 109,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 110,
                  "end": 111,
                  "typeName": {
                    "type": "Identifier",
                    "start": 110,
                    "end": 111,
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              },
              "optional": false,
              "readonly": null
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 116,
        "end": 119,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 118,
          "end": 119,
          "typeName": {
            "type": "Identifier",
            "start": 118,
            "end": 119,
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
      "start": 121,
      "end": 156,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 127,
          "end": 155,
          "id": {
            "type": "Identifier",
            "start": 127,
            "end": 134,
            "decorators": [],
            "name": "result1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 137,
            "end": 155,
            "callee": {
              "type": "Identifier",
              "start": 137,
              "end": 142,
              "decorators": [],
              "name": "test1",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "start": 143,
                "end": 154,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 144,
                    "end": 149,
                    "value": "foo",
                    "raw": "\"foo\""
                  },
                  {
                    "type": "Literal",
                    "start": 151,
                    "end": 153,
                    "value": 42,
                    "raw": "42"
                  }
                ]
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
      "type": "TSDeclareFunction",
      "start": 158,
      "end": 248,
      "id": {
        "type": "Identifier",
        "start": 175,
        "end": 180,
        "decorators": [],
        "name": "test2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 180,
        "end": 210,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 181,
            "end": 209,
            "name": {
              "type": "Identifier",
              "start": 181,
              "end": 182,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 191,
              "end": 209,
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 200,
                "end": 209,
                "elementType": {
                  "type": "TSUnknownKeyword",
                  "start": 200,
                  "end": 207
                }
              }
            },
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
          "start": 211,
          "end": 243,
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 214,
            "end": 243,
            "typeAnnotation": {
              "type": "TSMappedType",
              "start": 216,
              "end": 243,
              "key": {
                "type": "Identifier",
                "start": 221,
                "end": 222,
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": {
                "type": "TSTypeOperator",
                "start": 226,
                "end": 233,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 232,
                  "end": 233,
                  "typeName": {
                    "type": "Identifier",
                    "start": 232,
                    "end": 233,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "start": 236,
                "end": 240,
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 236,
                  "end": 237,
                  "typeName": {
                    "type": "Identifier",
                    "start": 236,
                    "end": 237,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 238,
                  "end": 239,
                  "typeName": {
                    "type": "Identifier",
                    "start": 238,
                    "end": 239,
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              },
              "optional": false,
              "readonly": null
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 244,
        "end": 247,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 246,
          "end": 247,
          "typeName": {
            "type": "Identifier",
            "start": 246,
            "end": 247,
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
      "start": 249,
      "end": 284,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 255,
          "end": 283,
          "id": {
            "type": "Identifier",
            "start": 255,
            "end": 262,
            "decorators": [],
            "name": "result2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 265,
            "end": 283,
            "callee": {
              "type": "Identifier",
              "start": 265,
              "end": 270,
              "decorators": [],
              "name": "test2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "start": 271,
                "end": 282,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 272,
                    "end": 277,
                    "value": "foo",
                    "raw": "\"foo\""
                  },
                  {
                    "type": "Literal",
                    "start": 279,
                    "end": 281,
                    "value": 42,
                    "raw": "42"
                  }
                ]
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
      "type": "TSTypeAliasDeclaration",
      "start": 286,
      "end": 345,
      "id": {
        "type": "Identifier",
        "start": 291,
        "end": 297,
        "decorators": [],
        "name": "Schema",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 300,
        "end": 344,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 300,
            "end": 323,
            "typeName": {
              "type": "Identifier",
              "start": 300,
              "end": 306,
              "decorators": [],
              "name": "Record",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 306,
              "end": 323,
              "params": [
                {
                  "type": "TSStringKeyword",
                  "start": 307,
                  "end": 313
                },
                {
                  "type": "TSUnknownKeyword",
                  "start": 315,
                  "end": 322
                }
              ]
            }
          },
          {
            "type": "TSTypeOperator",
            "start": 326,
            "end": 344,
            "operator": "readonly",
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 335,
              "end": 344,
              "elementType": {
                "type": "TSUnknownKeyword",
                "start": 335,
                "end": 342
              }
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 346,
      "end": 422,
      "id": {
        "type": "Identifier",
        "start": 351,
        "end": 361,
        "decorators": [],
        "name": "Definition",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 361,
        "end": 364,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 362,
            "end": 363,
            "name": {
              "type": "Identifier",
              "start": 362,
              "end": 363,
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
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 367,
        "end": 421,
        "key": {
          "type": "Identifier",
          "start": 372,
          "end": 373,
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null
        },
        "constraint": {
          "type": "TSTypeOperator",
          "start": 377,
          "end": 384,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 383,
            "end": 384,
            "typeName": {
              "type": "Identifier",
              "start": 383,
              "end": 384,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSUnionType",
          "start": 387,
          "end": 418,
          "types": [
            {
              "type": "TSFunctionType",
              "start": 388,
              "end": 398,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 391,
                "end": 398,
                "typeAnnotation": {
                  "type": "TSIndexedAccessType",
                  "start": 394,
                  "end": 398,
                  "objectType": {
                    "type": "TSTypeReference",
                    "start": 394,
                    "end": 395,
                    "typeName": {
                      "type": "Identifier",
                      "start": 394,
                      "end": 395,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "start": 396,
                    "end": 397,
                    "typeName": {
                      "type": "Identifier",
                      "start": 396,
                      "end": 397,
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
            {
              "type": "TSTypeReference",
              "start": 402,
              "end": 418,
              "typeName": {
                "type": "Identifier",
                "start": 402,
                "end": 412,
                "decorators": [],
                "name": "Definition",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 412,
                "end": 418,
                "params": [
                  {
                    "type": "TSIndexedAccessType",
                    "start": 413,
                    "end": 417,
                    "objectType": {
                      "type": "TSTypeReference",
                      "start": 413,
                      "end": 414,
                      "typeName": {
                        "type": "Identifier",
                        "start": 413,
                        "end": 414,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    },
                    "indexType": {
                      "type": "TSTypeReference",
                      "start": 415,
                      "end": 416,
                      "typeName": {
                        "type": "Identifier",
                        "start": 415,
                        "end": 416,
                        "decorators": [],
                        "name": "K",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                ]
              }
            }
          ]
        },
        "optional": false,
        "readonly": null
      },
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 423,
      "end": 495,
      "id": {
        "type": "Identifier",
        "start": 440,
        "end": 446,
        "decorators": [],
        "name": "create",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 446,
        "end": 464,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 447,
            "end": 463,
            "name": {
              "type": "Identifier",
              "start": 447,
              "end": 448,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 457,
              "end": 463,
              "typeName": {
                "type": "Identifier",
                "start": 457,
                "end": 463,
                "decorators": [],
                "name": "Schema",
                "optional": false,
                "typeAnnotation": null
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
      "params": [
        {
          "type": "Identifier",
          "start": 465,
          "end": 490,
          "decorators": [],
          "name": "definition",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 475,
            "end": 490,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 477,
              "end": 490,
              "typeName": {
                "type": "Identifier",
                "start": 477,
                "end": 487,
                "decorators": [],
                "name": "Definition",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 487,
                "end": 490,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 488,
                    "end": 489,
                    "typeName": {
                      "type": "Identifier",
                      "start": 488,
                      "end": 489,
                      "decorators": [],
                      "name": "T",
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
        "start": 491,
        "end": 494,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 493,
          "end": 494,
          "typeName": {
            "type": "Identifier",
            "start": 493,
            "end": 494,
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
      "start": 496,
      "end": 543,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 502,
          "end": 542,
          "id": {
            "type": "Identifier",
            "start": 502,
            "end": 510,
            "decorators": [],
            "name": "created1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 513,
            "end": 542,
            "callee": {
              "type": "Identifier",
              "start": 513,
              "end": 519,
              "decorators": [],
              "name": "create",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "start": 520,
                "end": 541,
                "elements": [
                  {
                    "type": "ArrowFunctionExpression",
                    "start": 521,
                    "end": 528,
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "Literal",
                      "start": 527,
                      "end": 528,
                      "value": 1,
                      "raw": "1"
                    },
                    "id": null,
                    "generator": false
                  },
                  {
                    "type": "ArrayExpression",
                    "start": 530,
                    "end": 540,
                    "elements": [
                      {
                        "type": "ArrowFunctionExpression",
                        "start": 531,
                        "end": 539,
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "Literal",
                          "start": 537,
                          "end": 539,
                          "value": "",
                          "raw": "\"\""
                        },
                        "id": null,
                        "generator": false
                      }
                    ]
                  }
                ]
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
      "start": 544,
      "end": 604,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 550,
          "end": 603,
          "id": {
            "type": "Identifier",
            "start": 550,
            "end": 558,
            "decorators": [],
            "name": "created2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 561,
            "end": 603,
            "callee": {
              "type": "Identifier",
              "start": 561,
              "end": 567,
              "decorators": [],
              "name": "create",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 568,
                "end": 602,
                "properties": [
                  {
                    "type": "Property",
                    "start": 572,
                    "end": 582,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 572,
                      "end": 573,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "start": 575,
                      "end": 582,
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "Literal",
                        "start": 581,
                        "end": 582,
                        "value": 1,
                        "raw": "1"
                      },
                      "id": null,
                      "generator": false
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 586,
                    "end": 599,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 586,
                      "end": 587,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "ArrayExpression",
                      "start": 589,
                      "end": 599,
                      "elements": [
                        {
                          "type": "ArrowFunctionExpression",
                          "start": 590,
                          "end": 598,
                          "expression": true,
                          "async": false,
                          "typeParameters": null,
                          "params": [],
                          "returnType": null,
                          "body": {
                            "type": "Literal",
                            "start": 596,
                            "end": 598,
                            "value": "",
                            "raw": "\"\""
                          },
                          "id": null,
                          "generator": false
                        }
                      ]
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
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 606,
      "end": 726,
      "id": {
        "type": "Identifier",
        "start": 616,
        "end": 631,
        "decorators": [],
        "name": "CompilerOptions",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 632,
        "end": 726,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 636,
            "end": 667,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 636,
              "end": 656,
              "decorators": [],
              "name": "allowUnreachableCode",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 657,
              "end": 666,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 659,
                "end": 666
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 670,
            "end": 698,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 670,
              "end": 687,
              "decorators": [],
              "name": "allowUnusedLabels",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 688,
              "end": 697,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 690,
                "end": 697
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 701,
            "end": 724,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 701,
              "end": 713,
              "decorators": [],
              "name": "alwaysStrict",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 714,
              "end": 723,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 716,
                "end": 723
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
      "start": 727,
      "end": 801,
      "id": {
        "type": "Identifier",
        "start": 732,
        "end": 750,
        "decorators": [],
        "name": "KeepLiteralStrings",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 750,
        "end": 770,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 751,
            "end": 769,
            "name": {
              "type": "Identifier",
              "start": 751,
              "end": 752,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSArrayType",
              "start": 761,
              "end": 769,
              "elementType": {
                "type": "TSStringKeyword",
                "start": 761,
                "end": 767
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 773,
        "end": 800,
        "key": {
          "type": "Identifier",
          "start": 778,
          "end": 779,
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null
        },
        "constraint": {
          "type": "TSTypeOperator",
          "start": 783,
          "end": 790,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 789,
            "end": 790,
            "typeName": {
              "type": "Identifier",
              "start": 789,
              "end": 790,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "start": 793,
          "end": 797,
          "objectType": {
            "type": "TSTypeReference",
            "start": 793,
            "end": 794,
            "typeName": {
              "type": "Identifier",
              "start": 793,
              "end": 794,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          "indexType": {
            "type": "TSTypeReference",
            "start": 795,
            "end": 796,
            "typeName": {
              "type": "Identifier",
              "start": 795,
              "end": 796,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        },
        "optional": false,
        "readonly": null
      },
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 802,
      "end": 967,
      "id": {
        "type": "Identifier",
        "start": 819,
        "end": 824,
        "decorators": [],
        "name": "test4",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 824,
        "end": 860,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 825,
            "end": 859,
            "name": {
              "type": "Identifier",
              "start": 825,
              "end": 826,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 835,
              "end": 859,
              "typeName": {
                "type": "Identifier",
                "start": 835,
                "end": 841,
                "decorators": [],
                "name": "Record",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 841,
                "end": 859,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 842,
                    "end": 848
                  },
                  {
                    "type": "TSArrayType",
                    "start": 850,
                    "end": 858,
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 850,
                      "end": 856
                    }
                  }
                ]
              }
            },
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
          "start": 861,
          "end": 962,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 864,
            "end": 962,
            "typeAnnotation": {
              "type": "TSMappedType",
              "start": 866,
              "end": 962,
              "key": {
                "type": "Identifier",
                "start": 871,
                "end": 872,
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": {
                "type": "TSIntersectionType",
                "start": 876,
                "end": 907,
                "types": [
                  {
                    "type": "TSTypeOperator",
                    "start": 876,
                    "end": 883,
                    "operator": "keyof",
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
                  {
                    "type": "TSTypeOperator",
                    "start": 886,
                    "end": 907,
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 892,
                      "end": 907,
                      "typeName": {
                        "type": "Identifier",
                        "start": 892,
                        "end": 907,
                        "decorators": [],
                        "name": "CompilerOptions",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                ]
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 910,
                "end": 959,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 916,
                    "end": 955,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 916,
                      "end": 928,
                      "decorators": [],
                      "name": "dependencies",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 928,
                      "end": 954,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 930,
                        "end": 954,
                        "typeName": {
                          "type": "Identifier",
                          "start": 930,
                          "end": 948,
                          "decorators": [],
                          "name": "KeepLiteralStrings",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 948,
                          "end": 954,
                          "params": [
                            {
                              "type": "TSIndexedAccessType",
                              "start": 949,
                              "end": 953,
                              "objectType": {
                                "type": "TSTypeReference",
                                "start": 949,
                                "end": 950,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 949,
                                  "end": 950,
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              },
                              "indexType": {
                                "type": "TSTypeReference",
                                "start": 951,
                                "end": 952,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 951,
                                  "end": 952,
                                  "decorators": [],
                                  "name": "K",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
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
              "optional": false,
              "readonly": null
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 963,
        "end": 966,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 965,
          "end": 966,
          "typeName": {
            "type": "Identifier",
            "start": 965,
            "end": 966,
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
      "start": 968,
      "end": 1114,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 974,
          "end": 1113,
          "id": {
            "type": "Identifier",
            "start": 974,
            "end": 981,
            "decorators": [],
            "name": "result4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 984,
            "end": 1113,
            "callee": {
              "type": "Identifier",
              "start": 984,
              "end": 989,
              "decorators": [],
              "name": "test4",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 990,
                "end": 1112,
                "properties": [
                  {
                    "type": "Property",
                    "start": 994,
                    "end": 1047,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 994,
                      "end": 1006,
                      "decorators": [],
                      "name": "alwaysStrict",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "ObjectExpression",
                      "start": 1008,
                      "end": 1047,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 1014,
                          "end": 1042,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 1014,
                            "end": 1026,
                            "decorators": [],
                            "name": "dependencies",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "ArrayExpression",
                            "start": 1028,
                            "end": 1042,
                            "elements": [
                              {
                                "type": "Literal",
                                "start": 1029,
                                "end": 1034,
                                "value": "foo",
                                "raw": "\"foo\""
                              },
                              {
                                "type": "Literal",
                                "start": 1036,
                                "end": 1041,
                                "value": "bar",
                                "raw": "\"bar\""
                              }
                            ]
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false
                        }
                      ]
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 1051,
                    "end": 1109,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 1051,
                      "end": 1068,
                      "decorators": [],
                      "name": "allowUnusedLabels",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "ObjectExpression",
                      "start": 1070,
                      "end": 1109,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 1076,
                          "end": 1104,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 1076,
                            "end": 1088,
                            "decorators": [],
                            "name": "dependencies",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "ArrayExpression",
                            "start": 1090,
                            "end": 1104,
                            "elements": [
                              {
                                "type": "Literal",
                                "start": 1091,
                                "end": 1096,
                                "value": "baz",
                                "raw": "\"baz\""
                              },
                              {
                                "type": "Literal",
                                "start": 1098,
                                "end": 1103,
                                "value": "qwe",
                                "raw": "\"qwe\""
                              }
                            ]
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false
                        }
                      ]
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
