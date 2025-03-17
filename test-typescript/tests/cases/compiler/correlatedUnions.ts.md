__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 31,
  "end": 7096,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 31,
      "end": 85,
      "id": {
        "type": "Identifier",
        "start": 36,
        "end": 45,
        "name": "RecordMap",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 48,
        "end": 84,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 50,
            "end": 60,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 50,
              "end": 51,
              "name": "n",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 51,
              "end": 59,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 53,
                "end": 59
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 61,
            "end": 71,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 61,
              "end": 62,
              "name": "s",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 62,
              "end": 70,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 64,
                "end": 70
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 72,
            "end": 82,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 72,
              "end": 73,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 73,
              "end": 82,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 75,
                "end": 82
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
      "start": 86,
      "end": 237,
      "id": {
        "type": "Identifier",
        "start": 91,
        "end": 102,
        "name": "UnionRecord",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 102,
        "end": 147,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 103,
            "end": 146,
            "name": {
              "type": "Identifier",
              "start": 103,
              "end": 104,
              "name": "K",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 113,
              "end": 128,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 119,
                "end": 128,
                "typeName": {
                  "type": "Identifier",
                  "start": 119,
                  "end": 128,
                  "name": "RecordMap",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "default": {
              "type": "TSTypeOperator",
              "start": 131,
              "end": 146,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 137,
                "end": 146,
                "typeName": {
                  "type": "Identifier",
                  "start": 137,
                  "end": 146,
                  "name": "RecordMap",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "start": 150,
        "end": 236,
        "objectType": {
          "type": "TSMappedType",
          "start": 150,
          "end": 233,
          "typeParameter": {
            "type": "TSTypeParameter",
            "start": 153,
            "end": 159,
            "name": {
              "type": "Identifier",
              "start": 153,
              "end": 154,
              "name": "P",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 158,
              "end": 159,
              "typeName": {
                "type": "Identifier",
                "start": 158,
                "end": 159,
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
            "type": "TSTypeLiteral",
            "start": 162,
            "end": 232,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 168,
                "end": 176,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 168,
                  "end": 172,
                  "name": "kind",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 172,
                  "end": 175,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 174,
                    "end": 175,
                    "typeName": {
                      "type": "Identifier",
                      "start": 174,
                      "end": 175,
                      "name": "P",
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
                "start": 181,
                "end": 197,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 181,
                  "end": 182,
                  "name": "v",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 182,
                  "end": 196,
                  "typeAnnotation": {
                    "type": "TSIndexedAccessType",
                    "start": 184,
                    "end": 196,
                    "objectType": {
                      "type": "TSTypeReference",
                      "start": 184,
                      "end": 193,
                      "typeName": {
                        "type": "Identifier",
                        "start": 184,
                        "end": 193,
                        "name": "RecordMap",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    "indexType": {
                      "type": "TSTypeReference",
                      "start": 194,
                      "end": 195,
                      "typeName": {
                        "type": "Identifier",
                        "start": 194,
                        "end": 195,
                        "name": "P",
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
              },
              {
                "type": "TSPropertySignature",
                "start": 202,
                "end": 230,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 202,
                  "end": 203,
                  "name": "f",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 203,
                  "end": 230,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 205,
                    "end": 230,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 206,
                        "end": 221,
                        "name": "v",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 207,
                          "end": 221,
                          "typeAnnotation": {
                            "type": "TSIndexedAccessType",
                            "start": 209,
                            "end": 221,
                            "objectType": {
                              "type": "TSTypeReference",
                              "start": 209,
                              "end": 218,
                              "typeName": {
                                "type": "Identifier",
                                "start": 209,
                                "end": 218,
                                "name": "RecordMap",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            },
                            "indexType": {
                              "type": "TSTypeReference",
                              "start": 219,
                              "end": 220,
                              "typeName": {
                                "type": "Identifier",
                                "start": 219,
                                "end": 220,
                                "name": "P",
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
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 223,
                      "end": 230,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 226,
                        "end": 230
                      }
                    }
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          },
          "optional": null,
          "readonly": null,
          "constraint": {
            "type": "TSTypeReference",
            "start": 158,
            "end": 159,
            "typeName": {
              "type": "Identifier",
              "start": 158,
              "end": 159,
              "name": "K",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          "key": {
            "type": "Identifier",
            "start": 153,
            "end": 154,
            "name": "P",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "indexType": {
          "type": "TSTypeReference",
          "start": 234,
          "end": 235,
          "typeName": {
            "type": "Identifier",
            "start": 234,
            "end": 235,
            "name": "K",
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
      "type": "FunctionDeclaration",
      "start": 239,
      "end": 331,
      "id": {
        "type": "Identifier",
        "start": 248,
        "end": 261,
        "name": "processRecord",
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
          "start": 289,
          "end": 308,
          "name": "rec",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 292,
            "end": 308,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 294,
              "end": 308,
              "typeName": {
                "type": "Identifier",
                "start": 294,
                "end": 305,
                "name": "UnionRecord",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 305,
                "end": 308,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 306,
                    "end": 307,
                    "typeName": {
                      "type": "Identifier",
                      "start": 306,
                      "end": 307,
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
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 310,
        "end": 331,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 316,
            "end": 329,
            "expression": {
              "type": "CallExpression",
              "start": 316,
              "end": 328,
              "callee": {
                "type": "MemberExpression",
                "start": 316,
                "end": 321,
                "object": {
                  "type": "Identifier",
                  "start": 316,
                  "end": 319,
                  "name": "rec",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 320,
                  "end": 321,
                  "name": "f",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [
                {
                  "type": "MemberExpression",
                  "start": 322,
                  "end": 327,
                  "object": {
                    "type": "Identifier",
                    "start": 322,
                    "end": 325,
                    "name": "rec",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 326,
                    "end": 327,
                    "name": "v",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
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
        "start": 261,
        "end": 288,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 262,
            "end": 287,
            "name": {
              "type": "Identifier",
              "start": 262,
              "end": 263,
              "name": "K",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 272,
              "end": 287,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 278,
                "end": 287,
                "typeName": {
                  "type": "Identifier",
                  "start": 278,
                  "end": 287,
                  "name": "RecordMap",
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
          }
        ]
      },
      "returnType": null
    },
    {
      "type": "VariableDeclaration",
      "start": 333,
      "end": 368,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 347,
          "end": 367,
          "id": {
            "type": "Identifier",
            "start": 347,
            "end": 367,
            "name": "r1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 349,
              "end": 367,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 351,
                "end": 367,
                "typeName": {
                  "type": "Identifier",
                  "start": 351,
                  "end": 362,
                  "name": "UnionRecord",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 362,
                  "end": 367,
                  "params": [
                    {
                      "type": "TSLiteralType",
                      "start": 363,
                      "end": 366,
                      "literal": {
                        "type": "Literal",
                        "start": 363,
                        "end": 366,
                        "value": "n",
                        "raw": "'n'"
                      }
                    }
                  ]
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 422,
      "end": 452,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 436,
          "end": 451,
          "id": {
            "type": "Identifier",
            "start": 436,
            "end": 451,
            "name": "r2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 438,
              "end": 451,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 440,
                "end": 451,
                "typeName": {
                  "type": "Identifier",
                  "start": 440,
                  "end": 451,
                  "name": "UnionRecord",
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
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "ExpressionStatement",
      "start": 519,
      "end": 537,
      "expression": {
        "type": "CallExpression",
        "start": 519,
        "end": 536,
        "callee": {
          "type": "Identifier",
          "start": 519,
          "end": 532,
          "name": "processRecord",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 533,
            "end": 535,
            "name": "r1",
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
      "start": 538,
      "end": 556,
      "expression": {
        "type": "CallExpression",
        "start": 538,
        "end": 555,
        "callee": {
          "type": "Identifier",
          "start": 538,
          "end": 551,
          "name": "processRecord",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 552,
            "end": 554,
            "name": "r2",
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
      "start": 557,
      "end": 620,
      "expression": {
        "type": "CallExpression",
        "start": 557,
        "end": 619,
        "callee": {
          "type": "Identifier",
          "start": 557,
          "end": 570,
          "name": "processRecord",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 571,
            "end": 618,
            "properties": [
              {
                "type": "Property",
                "start": 573,
                "end": 582,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 573,
                  "end": 577,
                  "name": "kind",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 579,
                  "end": 582,
                  "value": "n",
                  "raw": "'n'"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 584,
                "end": 589,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 584,
                  "end": 585,
                  "name": "v",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 587,
                  "end": 589,
                  "value": 42,
                  "raw": "42"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 591,
                "end": 616,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 591,
                  "end": 592,
                  "name": "f",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 594,
                  "end": 616,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 594,
                      "end": 595,
                      "name": "v",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "CallExpression",
                    "start": 599,
                    "end": 616,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 599,
                      "end": 614,
                      "object": {
                        "type": "Identifier",
                        "start": 599,
                        "end": 600,
                        "name": "v",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 601,
                        "end": 614,
                        "name": "toExponential",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "arguments": [],
                    "optional": false,
                    "typeArguments": null
                  },
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "init",
                "optional": false
              }
            ]
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 635,
      "end": 673,
      "id": {
        "type": "Identifier",
        "start": 640,
        "end": 653,
        "name": "TextFieldData",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 656,
        "end": 673,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 658,
            "end": 671,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 658,
              "end": 663,
              "name": "value",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 663,
              "end": 671,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 665,
                "end": 671
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
      "start": 674,
      "end": 741,
      "id": {
        "type": "Identifier",
        "start": 679,
        "end": 694,
        "name": "SelectFieldData",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 697,
        "end": 741,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 699,
            "end": 717,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 699,
              "end": 706,
              "name": "options",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 706,
              "end": 716,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 708,
                "end": 716,
                "elementType": {
                  "type": "TSStringKeyword",
                  "start": 708,
                  "end": 714
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 718,
            "end": 739,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 718,
              "end": 731,
              "name": "selectedValue",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 731,
              "end": 739,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 733,
                "end": 739
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
      "start": 743,
      "end": 816,
      "id": {
        "type": "Identifier",
        "start": 748,
        "end": 756,
        "name": "FieldMap",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 759,
        "end": 816,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 765,
            "end": 785,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 765,
              "end": 769,
              "name": "text",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 769,
              "end": 784,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 771,
                "end": 784,
                "typeName": {
                  "type": "Identifier",
                  "start": 771,
                  "end": 784,
                  "name": "TextFieldData",
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
            "start": 790,
            "end": 814,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 790,
              "end": 796,
              "name": "select",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 796,
              "end": 813,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 798,
                "end": 813,
                "typeName": {
                  "type": "Identifier",
                  "start": 798,
                  "end": 813,
                  "name": "SelectFieldData",
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
      "start": 818,
      "end": 892,
      "id": {
        "type": "Identifier",
        "start": 823,
        "end": 832,
        "name": "FormField",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 832,
        "end": 858,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 833,
            "end": 857,
            "name": {
              "type": "Identifier",
              "start": 833,
              "end": 834,
              "name": "K",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 843,
              "end": 857,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 849,
                "end": 857,
                "typeName": {
                  "type": "Identifier",
                  "start": 849,
                  "end": 857,
                  "name": "FieldMap",
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
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 861,
        "end": 891,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 863,
            "end": 871,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 863,
              "end": 867,
              "name": "type",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 867,
              "end": 870,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 869,
                "end": 870,
                "typeName": {
                  "type": "Identifier",
                  "start": 869,
                  "end": 870,
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
          },
          {
            "type": "TSPropertySignature",
            "start": 872,
            "end": 889,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 872,
              "end": 876,
              "name": "data",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 876,
              "end": 889,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "start": 878,
                "end": 889,
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 878,
                  "end": 886,
                  "typeName": {
                    "type": "Identifier",
                    "start": 878,
                    "end": 886,
                    "name": "FieldMap",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 887,
                  "end": 888,
                  "typeName": {
                    "type": "Identifier",
                    "start": 887,
                    "end": 888,
                    "name": "K",
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
      "type": "TSTypeAliasDeclaration",
      "start": 894,
      "end": 967,
      "id": {
        "type": "Identifier",
        "start": 899,
        "end": 909,
        "name": "RenderFunc",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 909,
        "end": 935,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 910,
            "end": 934,
            "name": {
              "type": "Identifier",
              "start": 910,
              "end": 911,
              "name": "K",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 920,
              "end": 934,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 926,
                "end": 934,
                "typeName": {
                  "type": "Identifier",
                  "start": 926,
                  "end": 934,
                  "name": "FieldMap",
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
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 938,
        "end": 966,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "start": 939,
            "end": 957,
            "name": "props",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 944,
              "end": 957,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "start": 946,
                "end": 957,
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 946,
                  "end": 954,
                  "typeName": {
                    "type": "Identifier",
                    "start": 946,
                    "end": 954,
                    "name": "FieldMap",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 955,
                  "end": 956,
                  "typeName": {
                    "type": "Identifier",
                    "start": 955,
                    "end": 956,
                    "name": "K",
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
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 959,
          "end": 966,
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 962,
            "end": 966
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 968,
      "end": 1030,
      "id": {
        "type": "Identifier",
        "start": 973,
        "end": 986,
        "name": "RenderFuncMap",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 989,
        "end": 1029,
        "typeParameter": {
          "type": "TSTypeParameter",
          "start": 992,
          "end": 1011,
          "name": {
            "type": "Identifier",
            "start": 992,
            "end": 993,
            "name": "K",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "constraint": {
            "type": "TSTypeOperator",
            "start": 997,
            "end": 1011,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1003,
              "end": 1011,
              "typeName": {
                "type": "Identifier",
                "start": 1003,
                "end": 1011,
                "name": "FieldMap",
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
          "start": 1014,
          "end": 1027,
          "typeName": {
            "type": "Identifier",
            "start": 1014,
            "end": 1024,
            "name": "RenderFunc",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 1024,
            "end": 1027,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 1025,
                "end": 1026,
                "typeName": {
                  "type": "Identifier",
                  "start": 1025,
                  "end": 1026,
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
          "type": "TSTypeOperator",
          "start": 997,
          "end": 1011,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 1003,
            "end": 1011,
            "typeName": {
              "type": "Identifier",
              "start": 1003,
              "end": 1011,
              "name": "FieldMap",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        },
        "key": {
          "type": "Identifier",
          "start": 992,
          "end": 993,
          "name": "K",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1032,
      "end": 1081,
      "id": {
        "type": "Identifier",
        "start": 1041,
        "end": 1056,
        "name": "renderTextField",
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
          "start": 1057,
          "end": 1077,
          "name": "props",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1062,
            "end": 1077,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1064,
              "end": 1077,
              "typeName": {
                "type": "Identifier",
                "start": 1064,
                "end": 1077,
                "name": "TextFieldData",
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
        "start": 1079,
        "end": 1081,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1082,
      "end": 1135,
      "id": {
        "type": "Identifier",
        "start": 1091,
        "end": 1108,
        "name": "renderSelectField",
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
          "start": 1109,
          "end": 1131,
          "name": "props",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1114,
            "end": 1131,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1116,
              "end": 1131,
              "typeName": {
                "type": "Identifier",
                "start": 1116,
                "end": 1131,
                "name": "SelectFieldData",
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
        "start": 1133,
        "end": 1135,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "VariableDeclaration",
      "start": 1137,
      "end": 1234,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1143,
          "end": 1233,
          "id": {
            "type": "Identifier",
            "start": 1143,
            "end": 1169,
            "name": "renderFuncs",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1154,
              "end": 1169,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1156,
                "end": 1169,
                "typeName": {
                  "type": "Identifier",
                  "start": 1156,
                  "end": 1169,
                  "name": "RenderFuncMap",
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
            "start": 1172,
            "end": 1233,
            "properties": [
              {
                "type": "Property",
                "start": 1178,
                "end": 1199,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1178,
                  "end": 1182,
                  "name": "text",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 1184,
                  "end": 1199,
                  "name": "renderTextField",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 1205,
                "end": 1230,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1205,
                  "end": 1211,
                  "name": "select",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 1213,
                  "end": 1230,
                  "name": "renderSelectField",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
      "type": "FunctionDeclaration",
      "start": 1236,
      "end": 1379,
      "id": {
        "type": "Identifier",
        "start": 1245,
        "end": 1256,
        "name": "renderField",
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
          "start": 1283,
          "end": 1302,
          "name": "field",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1288,
            "end": 1302,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1290,
              "end": 1302,
              "typeName": {
                "type": "Identifier",
                "start": 1290,
                "end": 1299,
                "name": "FormField",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1299,
                "end": 1302,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1300,
                    "end": 1301,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1300,
                      "end": 1301,
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
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1304,
        "end": 1379,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1310,
            "end": 1351,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1316,
                "end": 1350,
                "id": {
                  "type": "Identifier",
                  "start": 1316,
                  "end": 1324,
                  "name": "renderFn",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 1327,
                  "end": 1350,
                  "object": {
                    "type": "Identifier",
                    "start": 1327,
                    "end": 1338,
                    "name": "renderFuncs",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "MemberExpression",
                    "start": 1339,
                    "end": 1349,
                    "object": {
                      "type": "Identifier",
                      "start": 1339,
                      "end": 1344,
                      "name": "field",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 1345,
                      "end": 1349,
                      "name": "type",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "computed": true,
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 1356,
            "end": 1377,
            "expression": {
              "type": "CallExpression",
              "start": 1356,
              "end": 1376,
              "callee": {
                "type": "Identifier",
                "start": 1356,
                "end": 1364,
                "name": "renderFn",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "MemberExpression",
                  "start": 1365,
                  "end": 1375,
                  "object": {
                    "type": "Identifier",
                    "start": 1365,
                    "end": 1370,
                    "name": "field",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 1371,
                    "end": 1375,
                    "name": "data",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
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
        "start": 1256,
        "end": 1282,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1257,
            "end": 1281,
            "name": {
              "type": "Identifier",
              "start": 1257,
              "end": 1258,
              "name": "K",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 1267,
              "end": 1281,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1273,
                "end": 1281,
                "typeName": {
                  "type": "Identifier",
                  "start": 1273,
                  "end": 1281,
                  "name": "FieldMap",
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
          }
        ]
      },
      "returnType": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1394,
      "end": 1446,
      "id": {
        "type": "Identifier",
        "start": 1399,
        "end": 1406,
        "name": "TypeMap",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 1409,
        "end": 1445,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 1415,
            "end": 1427,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1415,
              "end": 1418,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1418,
              "end": 1426,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1420,
                "end": 1426
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 1432,
            "end": 1443,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1432,
              "end": 1435,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1435,
              "end": 1443,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1437,
                "end": 1443
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
      "start": 1448,
      "end": 1474,
      "id": {
        "type": "Identifier",
        "start": 1453,
        "end": 1457,
        "name": "Keys",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "start": 1460,
        "end": 1473,
        "operator": "keyof",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1466,
          "end": 1473,
          "typeName": {
            "type": "Identifier",
            "start": 1466,
            "end": 1473,
            "name": "TypeMap",
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
      "start": 1476,
      "end": 1535,
      "id": {
        "type": "Identifier",
        "start": 1481,
        "end": 1491,
        "name": "HandlerMap",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 1494,
        "end": 1534,
        "typeParameter": {
          "type": "TSTypeParameter",
          "start": 1497,
          "end": 1506,
          "name": {
            "type": "Identifier",
            "start": 1497,
            "end": 1498,
            "name": "P",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "constraint": {
            "type": "TSTypeReference",
            "start": 1502,
            "end": 1506,
            "typeName": {
              "type": "Identifier",
              "start": 1502,
              "end": 1506,
              "name": "Keys",
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
          "type": "TSFunctionType",
          "start": 1509,
          "end": 1532,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "start": 1510,
              "end": 1523,
              "name": "x",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 1511,
                "end": 1523,
                "typeAnnotation": {
                  "type": "TSIndexedAccessType",
                  "start": 1513,
                  "end": 1523,
                  "objectType": {
                    "type": "TSTypeReference",
                    "start": 1513,
                    "end": 1520,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1513,
                      "end": 1520,
                      "name": "TypeMap",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "start": 1521,
                    "end": 1522,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1521,
                      "end": 1522,
                      "name": "P",
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
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 1525,
            "end": 1532,
            "typeAnnotation": {
              "type": "TSVoidKeyword",
              "start": 1528,
              "end": 1532
            }
          }
        },
        "optional": null,
        "readonly": null,
        "constraint": {
          "type": "TSTypeReference",
          "start": 1502,
          "end": 1506,
          "typeName": {
            "type": "Identifier",
            "start": 1502,
            "end": 1506,
            "name": "Keys",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "key": {
          "type": "Identifier",
          "start": 1497,
          "end": 1498,
          "name": "P",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1537,
      "end": 1621,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1543,
          "end": 1620,
          "id": {
            "type": "Identifier",
            "start": 1543,
            "end": 1563,
            "name": "handlers",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1551,
              "end": 1563,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1553,
                "end": 1563,
                "typeName": {
                  "type": "Identifier",
                  "start": 1553,
                  "end": 1563,
                  "name": "HandlerMap",
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
            "start": 1566,
            "end": 1620,
            "properties": [
              {
                "type": "Property",
                "start": 1572,
                "end": 1590,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1572,
                  "end": 1575,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 1577,
                  "end": 1590,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1577,
                      "end": 1578,
                      "name": "s",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "MemberExpression",
                    "start": 1582,
                    "end": 1590,
                    "object": {
                      "type": "Identifier",
                      "start": 1582,
                      "end": 1583,
                      "name": "s",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 1584,
                      "end": 1590,
                      "name": "length",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 1596,
                "end": 1618,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1596,
                  "end": 1599,
                  "name": "bar",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 1601,
                  "end": 1618,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1601,
                      "end": 1602,
                      "name": "n",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "CallExpression",
                    "start": 1606,
                    "end": 1618,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 1606,
                      "end": 1615,
                      "object": {
                        "type": "Identifier",
                        "start": 1606,
                        "end": 1607,
                        "name": "n",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1608,
                        "end": 1615,
                        "name": "toFixed",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 1616,
                        "end": 1617,
                        "value": 2,
                        "raw": "2"
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
                  },
                  "typeParameters": null,
                  "returnType": null
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
      "type": "TSTypeAliasDeclaration",
      "start": 1623,
      "end": 1717,
      "id": {
        "type": "Identifier",
        "start": 1628,
        "end": 1637,
        "name": "DataEntry",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1637,
        "end": 1660,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1638,
            "end": 1659,
            "name": {
              "type": "Identifier",
              "start": 1638,
              "end": 1639,
              "name": "K",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 1648,
              "end": 1652,
              "typeName": {
                "type": "Identifier",
                "start": 1648,
                "end": 1652,
                "name": "Keys",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "default": {
              "type": "TSTypeReference",
              "start": 1655,
              "end": 1659,
              "typeName": {
                "type": "Identifier",
                "start": 1655,
                "end": 1659,
                "name": "Keys",
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
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "start": 1663,
        "end": 1716,
        "objectType": {
          "type": "TSMappedType",
          "start": 1663,
          "end": 1713,
          "typeParameter": {
            "type": "TSTypeParameter",
            "start": 1666,
            "end": 1672,
            "name": {
              "type": "Identifier",
              "start": 1666,
              "end": 1667,
              "name": "P",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 1671,
              "end": 1672,
              "typeName": {
                "type": "Identifier",
                "start": 1671,
                "end": 1672,
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
            "type": "TSTypeLiteral",
            "start": 1675,
            "end": 1712,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 1681,
                "end": 1689,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 1681,
                  "end": 1685,
                  "name": "type",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1685,
                  "end": 1688,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1687,
                    "end": 1688,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1687,
                      "end": 1688,
                      "name": "P",
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
                "start": 1694,
                "end": 1710,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 1694,
                  "end": 1698,
                  "name": "data",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1698,
                  "end": 1710,
                  "typeAnnotation": {
                    "type": "TSIndexedAccessType",
                    "start": 1700,
                    "end": 1710,
                    "objectType": {
                      "type": "TSTypeReference",
                      "start": 1700,
                      "end": 1707,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1700,
                        "end": 1707,
                        "name": "TypeMap",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    "indexType": {
                      "type": "TSTypeReference",
                      "start": 1708,
                      "end": 1709,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1708,
                        "end": 1709,
                        "name": "P",
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
          "optional": null,
          "readonly": null,
          "constraint": {
            "type": "TSTypeReference",
            "start": 1671,
            "end": 1672,
            "typeName": {
              "type": "Identifier",
              "start": 1671,
              "end": 1672,
              "name": "K",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          "key": {
            "type": "Identifier",
            "start": 1666,
            "end": 1667,
            "name": "P",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "indexType": {
          "type": "TSTypeReference",
          "start": 1714,
          "end": 1715,
          "typeName": {
            "type": "Identifier",
            "start": 1714,
            "end": 1715,
            "name": "K",
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
      "type": "VariableDeclaration",
      "start": 1719,
      "end": 1848,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1725,
          "end": 1847,
          "id": {
            "type": "Identifier",
            "start": 1725,
            "end": 1742,
            "name": "data",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1729,
              "end": 1742,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 1731,
                "end": 1742,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 1731,
                  "end": 1740,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1731,
                    "end": 1740,
                    "name": "DataEntry",
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
            "type": "ArrayExpression",
            "start": 1745,
            "end": 1847,
            "elements": [
              {
                "type": "ObjectExpression",
                "start": 1751,
                "end": 1779,
                "properties": [
                  {
                    "type": "Property",
                    "start": 1753,
                    "end": 1764,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1753,
                      "end": 1757,
                      "name": "type",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 1759,
                      "end": 1764,
                      "value": "foo",
                      "raw": "'foo'"
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 1766,
                    "end": 1777,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1766,
                      "end": 1770,
                      "name": "data",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 1772,
                      "end": 1777,
                      "value": "abc",
                      "raw": "'abc'"
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              },
              {
                "type": "ObjectExpression",
                "start": 1785,
                "end": 1813,
                "properties": [
                  {
                    "type": "Property",
                    "start": 1787,
                    "end": 1798,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1787,
                      "end": 1791,
                      "name": "type",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 1793,
                      "end": 1798,
                      "value": "foo",
                      "raw": "'foo'"
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 1800,
                    "end": 1811,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1800,
                      "end": 1804,
                      "name": "data",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 1806,
                      "end": 1811,
                      "value": "def",
                      "raw": "'def'"
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              },
              {
                "type": "ObjectExpression",
                "start": 1819,
                "end": 1844,
                "properties": [
                  {
                    "type": "Property",
                    "start": 1821,
                    "end": 1832,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1821,
                      "end": 1825,
                      "name": "type",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 1827,
                      "end": 1832,
                      "value": "bar",
                      "raw": "'bar'"
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 1834,
                    "end": 1842,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1834,
                      "end": 1838,
                      "name": "data",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 1840,
                      "end": 1842,
                      "value": 42,
                      "raw": "42"
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
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
      "type": "FunctionDeclaration",
      "start": 1850,
      "end": 2037,
      "id": {
        "type": "Identifier",
        "start": 1859,
        "end": 1866,
        "name": "process",
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
          "start": 1883,
          "end": 1903,
          "name": "data",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1887,
            "end": 1903,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 1889,
              "end": 1903,
              "elementType": {
                "type": "TSTypeReference",
                "start": 1889,
                "end": 1901,
                "typeName": {
                  "type": "Identifier",
                  "start": 1889,
                  "end": 1898,
                  "name": "DataEntry",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1898,
                  "end": 1901,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 1899,
                      "end": 1900,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1899,
                        "end": 1900,
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
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1905,
        "end": 2037,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1911,
            "end": 2035,
            "expression": {
              "type": "CallExpression",
              "start": 1911,
              "end": 2034,
              "callee": {
                "type": "MemberExpression",
                "start": 1911,
                "end": 1923,
                "object": {
                  "type": "Identifier",
                  "start": 1911,
                  "end": 1915,
                  "name": "data",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1916,
                  "end": 1923,
                  "name": "forEach",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "start": 1924,
                  "end": 2033,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1924,
                      "end": 1929,
                      "name": "block",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "BlockStatement",
                    "start": 1933,
                    "end": 2033,
                    "body": [
                      {
                        "type": "IfStatement",
                        "start": 1943,
                        "end": 2027,
                        "test": {
                          "type": "BinaryExpression",
                          "start": 1947,
                          "end": 1969,
                          "left": {
                            "type": "MemberExpression",
                            "start": 1947,
                            "end": 1957,
                            "object": {
                              "type": "Identifier",
                              "start": 1947,
                              "end": 1952,
                              "name": "block",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 1953,
                              "end": 1957,
                              "name": "type",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "operator": "in",
                          "right": {
                            "type": "Identifier",
                            "start": 1961,
                            "end": 1969,
                            "name": "handlers",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        },
                        "consequent": {
                          "type": "BlockStatement",
                          "start": 1971,
                          "end": 2027,
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "start": 1985,
                              "end": 2017,
                              "expression": {
                                "type": "CallExpression",
                                "start": 1985,
                                "end": 2017,
                                "callee": {
                                  "type": "MemberExpression",
                                  "start": 1985,
                                  "end": 2005,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 1985,
                                    "end": 1993,
                                    "name": "handlers",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "property": {
                                    "type": "MemberExpression",
                                    "start": 1994,
                                    "end": 2004,
                                    "object": {
                                      "type": "Identifier",
                                      "start": 1994,
                                      "end": 1999,
                                      "name": "block",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 2000,
                                      "end": 2004,
                                      "name": "type",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "computed": false,
                                    "optional": false
                                  },
                                  "computed": true,
                                  "optional": false
                                },
                                "arguments": [
                                  {
                                    "type": "MemberExpression",
                                    "start": 2006,
                                    "end": 2016,
                                    "object": {
                                      "type": "Identifier",
                                      "start": 2006,
                                      "end": 2011,
                                      "name": "block",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 2012,
                                      "end": 2016,
                                      "name": "data",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "computed": false,
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
                  "typeParameters": null,
                  "returnType": null
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
        "start": 1866,
        "end": 1882,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1867,
            "end": 1881,
            "name": {
              "type": "Identifier",
              "start": 1867,
              "end": 1868,
              "name": "K",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 1877,
              "end": 1881,
              "typeName": {
                "type": "Identifier",
                "start": 1877,
                "end": 1881,
                "name": "Keys",
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
      "type": "ExpressionStatement",
      "start": 2039,
      "end": 2053,
      "expression": {
        "type": "CallExpression",
        "start": 2039,
        "end": 2052,
        "callee": {
          "type": "Identifier",
          "start": 2039,
          "end": 2046,
          "name": "process",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 2047,
            "end": 2051,
            "name": "data",
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
      "start": 2054,
      "end": 2094,
      "expression": {
        "type": "CallExpression",
        "start": 2054,
        "end": 2093,
        "callee": {
          "type": "Identifier",
          "start": 2054,
          "end": 2061,
          "name": "process",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 2062,
            "end": 2092,
            "elements": [
              {
                "type": "ObjectExpression",
                "start": 2063,
                "end": 2091,
                "properties": [
                  {
                    "type": "Property",
                    "start": 2065,
                    "end": 2076,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 2065,
                      "end": 2069,
                      "name": "type",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 2071,
                      "end": 2076,
                      "value": "foo",
                      "raw": "'foo'"
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 2078,
                    "end": 2089,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 2078,
                      "end": 2082,
                      "name": "data",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 2084,
                      "end": 2089,
                      "value": "abc",
                      "raw": "'abc'"
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              }
            ]
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2109,
      "end": 2150,
      "id": {
        "type": "Identifier",
        "start": 2114,
        "end": 2123,
        "name": "LetterMap",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 2126,
        "end": 2150,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 2128,
            "end": 2138,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 2128,
              "end": 2129,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2129,
              "end": 2137,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 2131,
                "end": 2137
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 2139,
            "end": 2148,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 2139,
              "end": 2140,
              "name": "B",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2140,
              "end": 2148,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 2142,
                "end": 2148
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
      "start": 2151,
      "end": 2297,
      "id": {
        "type": "Identifier",
        "start": 2156,
        "end": 2168,
        "name": "LetterCaller",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2168,
        "end": 2195,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2169,
            "end": 2194,
            "name": {
              "type": "Identifier",
              "start": 2169,
              "end": 2170,
              "name": "K",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 2179,
              "end": 2194,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2185,
                "end": 2194,
                "typeName": {
                  "type": "Identifier",
                  "start": 2185,
                  "end": 2194,
                  "name": "LetterMap",
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
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "start": 2198,
        "end": 2296,
        "objectType": {
          "type": "TSMappedType",
          "start": 2198,
          "end": 2293,
          "typeParameter": {
            "type": "TSTypeParameter",
            "start": 2201,
            "end": 2207,
            "name": {
              "type": "Identifier",
              "start": 2201,
              "end": 2202,
              "name": "P",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 2206,
              "end": 2207,
              "typeName": {
                "type": "Identifier",
                "start": 2206,
                "end": 2207,
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
            "type": "TSTypeLiteral",
            "start": 2210,
            "end": 2291,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 2212,
                "end": 2244,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 2212,
                  "end": 2218,
                  "name": "letter",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2218,
                  "end": 2243,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 2220,
                    "end": 2243,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2220,
                      "end": 2226,
                      "name": "Record",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 2226,
                      "end": 2243,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 2227,
                          "end": 2228,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2227,
                            "end": 2228,
                            "name": "P",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSIndexedAccessType",
                          "start": 2230,
                          "end": 2242,
                          "objectType": {
                            "type": "TSTypeReference",
                            "start": 2230,
                            "end": 2239,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2230,
                              "end": 2239,
                              "name": "LetterMap",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          },
                          "indexType": {
                            "type": "TSTypeReference",
                            "start": 2240,
                            "end": 2241,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2240,
                              "end": 2241,
                              "name": "P",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
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
              },
              {
                "type": "TSPropertySignature",
                "start": 2245,
                "end": 2289,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 2245,
                  "end": 2251,
                  "name": "caller",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2251,
                  "end": 2289,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 2253,
                    "end": 2289,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 2254,
                        "end": 2280,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2255,
                          "end": 2280,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 2257,
                            "end": 2280,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2257,
                              "end": 2263,
                              "name": "Record",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 2263,
                              "end": 2280,
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "start": 2264,
                                  "end": 2265,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 2264,
                                    "end": 2265,
                                    "name": "P",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                },
                                {
                                  "type": "TSIndexedAccessType",
                                  "start": 2267,
                                  "end": 2279,
                                  "objectType": {
                                    "type": "TSTypeReference",
                                    "start": 2267,
                                    "end": 2276,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 2267,
                                      "end": 2276,
                                      "name": "LetterMap",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeArguments": null
                                  },
                                  "indexType": {
                                    "type": "TSTypeReference",
                                    "start": 2277,
                                    "end": 2278,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 2277,
                                      "end": 2278,
                                      "name": "P",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeArguments": null
                                  }
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
                      "start": 2282,
                      "end": 2289,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 2285,
                        "end": 2289
                      }
                    }
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          },
          "optional": null,
          "readonly": null,
          "constraint": {
            "type": "TSTypeReference",
            "start": 2206,
            "end": 2207,
            "typeName": {
              "type": "Identifier",
              "start": 2206,
              "end": 2207,
              "name": "K",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          "key": {
            "type": "Identifier",
            "start": 2201,
            "end": 2202,
            "name": "P",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "indexType": {
          "type": "TSTypeReference",
          "start": 2294,
          "end": 2295,
          "typeName": {
            "type": "Identifier",
            "start": 2294,
            "end": 2295,
            "name": "K",
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
      "type": "FunctionDeclaration",
      "start": 2299,
      "end": 2404,
      "id": {
        "type": "Identifier",
        "start": 2308,
        "end": 2312,
        "name": "call",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "ObjectPattern",
          "start": 2340,
          "end": 2375,
          "properties": [
            {
              "type": "Property",
              "start": 2342,
              "end": 2348,
              "method": false,
              "shorthand": true,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 2342,
                "end": 2348,
                "name": "letter",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "Identifier",
                "start": 2342,
                "end": 2348,
                "name": "letter",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "init",
              "optional": false
            },
            {
              "type": "Property",
              "start": 2350,
              "end": 2356,
              "method": false,
              "shorthand": true,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 2350,
                "end": 2356,
                "name": "caller",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "Identifier",
                "start": 2350,
                "end": 2356,
                "name": "caller",
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
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2358,
            "end": 2375,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2360,
              "end": 2375,
              "typeName": {
                "type": "Identifier",
                "start": 2360,
                "end": 2372,
                "name": "LetterCaller",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 2372,
                "end": 2375,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 2373,
                    "end": 2374,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2373,
                      "end": 2374,
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
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 2383,
        "end": 2404,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2387,
            "end": 2402,
            "expression": {
              "type": "CallExpression",
              "start": 2387,
              "end": 2401,
              "callee": {
                "type": "Identifier",
                "start": 2387,
                "end": 2393,
                "name": "caller",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 2394,
                  "end": 2400,
                  "name": "letter",
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
        "start": 2312,
        "end": 2339,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2313,
            "end": 2338,
            "name": {
              "type": "Identifier",
              "start": 2313,
              "end": 2314,
              "name": "K",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 2323,
              "end": 2338,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2329,
                "end": 2338,
                "typeName": {
                  "type": "Identifier",
                  "start": 2329,
                  "end": 2338,
                  "name": "LetterMap",
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
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2376,
        "end": 2382,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 2378,
          "end": 2382
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2406,
      "end": 2429,
      "id": {
        "type": "Identifier",
        "start": 2411,
        "end": 2412,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 2415,
        "end": 2428,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 2417,
            "end": 2426,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 2417,
              "end": 2418,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2418,
              "end": 2426,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 2420,
                "end": 2426
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
      "start": 2430,
      "end": 2453,
      "id": {
        "type": "Identifier",
        "start": 2435,
        "end": 2436,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 2439,
        "end": 2452,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 2441,
            "end": 2450,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 2441,
              "end": 2442,
              "name": "B",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2442,
              "end": 2450,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 2444,
                "end": 2450
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
      "start": 2454,
      "end": 2484,
      "id": {
        "type": "Identifier",
        "start": 2459,
        "end": 2466,
        "name": "ACaller",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 2469,
        "end": 2483,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "start": 2470,
            "end": 2474,
            "name": "a",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2471,
              "end": 2474,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2473,
                "end": 2474,
                "typeName": {
                  "type": "Identifier",
                  "start": 2473,
                  "end": 2474,
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
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 2476,
          "end": 2483,
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 2479,
            "end": 2483
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2485,
      "end": 2515,
      "id": {
        "type": "Identifier",
        "start": 2490,
        "end": 2497,
        "name": "BCaller",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 2500,
        "end": 2514,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "start": 2501,
            "end": 2505,
            "name": "b",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2502,
              "end": 2505,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2504,
                "end": 2505,
                "typeName": {
                  "type": "Identifier",
                  "start": 2504,
                  "end": 2505,
                  "name": "B",
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
          "start": 2507,
          "end": 2514,
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 2510,
            "end": 2514
          }
        }
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2517,
      "end": 2599,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2531,
          "end": 2598,
          "id": {
            "type": "Identifier",
            "start": 2531,
            "end": 2598,
            "name": "xx",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2533,
              "end": 2598,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 2535,
                "end": 2598,
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 2535,
                    "end": 2565,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 2537,
                        "end": 2547,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 2537,
                          "end": 2543,
                          "name": "letter",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2543,
                          "end": 2546,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 2545,
                            "end": 2546,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2545,
                              "end": 2546,
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
                        "start": 2548,
                        "end": 2563,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 2548,
                          "end": 2554,
                          "name": "caller",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2554,
                          "end": 2563,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 2556,
                            "end": 2563,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2556,
                              "end": 2563,
                              "name": "ACaller",
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
                  {
                    "type": "TSTypeLiteral",
                    "start": 2568,
                    "end": 2598,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 2570,
                        "end": 2580,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 2570,
                          "end": 2576,
                          "name": "letter",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2576,
                          "end": 2579,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 2578,
                            "end": 2579,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2578,
                              "end": 2579,
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
                      },
                      {
                        "type": "TSPropertySignature",
                        "start": 2581,
                        "end": 2596,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 2581,
                          "end": 2587,
                          "name": "caller",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2587,
                          "end": 2596,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 2589,
                            "end": 2596,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2589,
                              "end": 2596,
                              "name": "BCaller",
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
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "ExpressionStatement",
      "start": 2601,
      "end": 2610,
      "expression": {
        "type": "CallExpression",
        "start": 2601,
        "end": 2609,
        "callee": {
          "type": "Identifier",
          "start": 2601,
          "end": 2605,
          "name": "call",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 2606,
            "end": 2608,
            "name": "xx",
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
      "start": 2625,
      "end": 2798,
      "id": {
        "type": "Identifier",
        "start": 2630,
        "end": 2632,
        "name": "Ev",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2632,
        "end": 2666,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2633,
            "end": 2665,
            "name": {
              "type": "Identifier",
              "start": 2633,
              "end": 2634,
              "name": "K",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 2643,
              "end": 2665,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2649,
                "end": 2665,
                "typeName": {
                  "type": "Identifier",
                  "start": 2649,
                  "end": 2665,
                  "name": "DocumentEventMap",
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
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "start": 2669,
        "end": 2797,
        "objectType": {
          "type": "TSMappedType",
          "start": 2669,
          "end": 2794,
          "typeParameter": {
            "type": "TSTypeParameter",
            "start": 2672,
            "end": 2678,
            "name": {
              "type": "Identifier",
              "start": 2672,
              "end": 2673,
              "name": "P",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 2677,
              "end": 2678,
              "typeName": {
                "type": "Identifier",
                "start": 2677,
                "end": 2678,
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
            "type": "TSTypeLiteral",
            "start": 2681,
            "end": 2793,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 2687,
                "end": 2704,
                "computed": false,
                "optional": false,
                "readonly": true,
                "key": {
                  "type": "Identifier",
                  "start": 2696,
                  "end": 2700,
                  "name": "name",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2700,
                  "end": 2703,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 2702,
                    "end": 2703,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2702,
                      "end": 2703,
                      "name": "P",
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
                "start": 2709,
                "end": 2733,
                "computed": false,
                "optional": true,
                "readonly": true,
                "key": {
                  "type": "Identifier",
                  "start": 2718,
                  "end": 2722,
                  "name": "once",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2723,
                  "end": 2732,
                  "typeAnnotation": {
                    "type": "TSBooleanKeyword",
                    "start": 2725,
                    "end": 2732
                  }
                },
                "accessibility": null,
                "static": false
              },
              {
                "type": "TSPropertySignature",
                "start": 2738,
                "end": 2791,
                "computed": false,
                "optional": false,
                "readonly": true,
                "key": {
                  "type": "Identifier",
                  "start": 2747,
                  "end": 2755,
                  "name": "callback",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2755,
                  "end": 2790,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 2757,
                    "end": 2790,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 2758,
                        "end": 2781,
                        "name": "ev",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2760,
                          "end": 2781,
                          "typeAnnotation": {
                            "type": "TSIndexedAccessType",
                            "start": 2762,
                            "end": 2781,
                            "objectType": {
                              "type": "TSTypeReference",
                              "start": 2762,
                              "end": 2778,
                              "typeName": {
                                "type": "Identifier",
                                "start": 2762,
                                "end": 2778,
                                "name": "DocumentEventMap",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            },
                            "indexType": {
                              "type": "TSTypeReference",
                              "start": 2779,
                              "end": 2780,
                              "typeName": {
                                "type": "Identifier",
                                "start": 2779,
                                "end": 2780,
                                "name": "P",
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
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 2783,
                      "end": 2790,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 2786,
                        "end": 2790
                      }
                    }
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          },
          "optional": null,
          "readonly": null,
          "constraint": {
            "type": "TSTypeReference",
            "start": 2677,
            "end": 2678,
            "typeName": {
              "type": "Identifier",
              "start": 2677,
              "end": 2678,
              "name": "K",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          "key": {
            "type": "Identifier",
            "start": 2672,
            "end": 2673,
            "name": "P",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "indexType": {
          "type": "TSTypeReference",
          "start": 2795,
          "end": 2796,
          "typeName": {
            "type": "Identifier",
            "start": 2795,
            "end": 2796,
            "name": "K",
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
      "type": "FunctionDeclaration",
      "start": 2800,
      "end": 3014,
      "id": {
        "type": "Identifier",
        "start": 2809,
        "end": 2822,
        "name": "processEvents",
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
          "start": 2857,
          "end": 2872,
          "name": "events",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2863,
            "end": 2872,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 2865,
              "end": 2872,
              "elementType": {
                "type": "TSTypeReference",
                "start": 2865,
                "end": 2870,
                "typeName": {
                  "type": "Identifier",
                  "start": 2865,
                  "end": 2867,
                  "name": "Ev",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 2867,
                  "end": 2870,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 2868,
                      "end": 2869,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2868,
                        "end": 2869,
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
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 2874,
        "end": 3014,
        "body": [
          {
            "type": "ForOfStatement",
            "start": 2880,
            "end": 3012,
            "await": false,
            "left": {
              "type": "VariableDeclaration",
              "start": 2885,
              "end": 2896,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 2891,
                  "end": 2896,
                  "id": {
                    "type": "Identifier",
                    "start": 2891,
                    "end": 2896,
                    "name": "event",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "kind": "const",
              "declare": false
            },
            "right": {
              "type": "Identifier",
              "start": 2900,
              "end": 2906,
              "name": "events",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "BlockStatement",
              "start": 2908,
              "end": 3012,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 2918,
                  "end": 3006,
                  "expression": {
                    "type": "CallExpression",
                    "start": 2918,
                    "end": 3005,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 2918,
                      "end": 2943,
                      "object": {
                        "type": "Identifier",
                        "start": 2918,
                        "end": 2926,
                        "name": "document",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 2927,
                        "end": 2943,
                        "name": "addEventListener",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "MemberExpression",
                        "start": 2944,
                        "end": 2954,
                        "object": {
                          "type": "Identifier",
                          "start": 2944,
                          "end": 2949,
                          "name": "event",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 2950,
                          "end": 2954,
                          "name": "name",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      {
                        "type": "ArrowFunctionExpression",
                        "start": 2956,
                        "end": 2982,
                        "id": null,
                        "expression": true,
                        "generator": false,
                        "async": false,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 2957,
                            "end": 2959,
                            "name": "ev",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "body": {
                          "type": "CallExpression",
                          "start": 2964,
                          "end": 2982,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 2964,
                            "end": 2978,
                            "object": {
                              "type": "Identifier",
                              "start": 2964,
                              "end": 2969,
                              "name": "event",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 2970,
                              "end": 2978,
                              "name": "callback",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "arguments": [
                            {
                              "type": "Identifier",
                              "start": 2979,
                              "end": 2981,
                              "name": "ev",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          ],
                          "optional": false,
                          "typeArguments": null
                        },
                        "typeParameters": null,
                        "returnType": null
                      },
                      {
                        "type": "ObjectExpression",
                        "start": 2984,
                        "end": 3004,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 2986,
                            "end": 3002,
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 2986,
                              "end": 2990,
                              "name": "once",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "value": {
                              "type": "MemberExpression",
                              "start": 2992,
                              "end": 3002,
                              "object": {
                                "type": "Identifier",
                                "start": 2992,
                                "end": 2997,
                                "name": "event",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 2998,
                                "end": 3002,
                                "name": "once",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false
                            },
                            "kind": "init",
                            "optional": false
                          }
                        ]
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
                  },
                  "directive": null
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2822,
        "end": 2856,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2823,
            "end": 2855,
            "name": {
              "type": "Identifier",
              "start": 2823,
              "end": 2824,
              "name": "K",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 2833,
              "end": 2855,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2839,
                "end": 2855,
                "typeName": {
                  "type": "Identifier",
                  "start": 2839,
                  "end": 2855,
                  "name": "DocumentEventMap",
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
          }
        ]
      },
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 3016,
      "end": 3167,
      "id": {
        "type": "Identifier",
        "start": 3025,
        "end": 3044,
        "name": "createEventListener",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "ObjectPattern",
          "start": 3079,
          "end": 3118,
          "properties": [
            {
              "type": "Property",
              "start": 3081,
              "end": 3085,
              "method": false,
              "shorthand": true,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 3081,
                "end": 3085,
                "name": "name",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "Identifier",
                "start": 3081,
                "end": 3085,
                "name": "name",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "init",
              "optional": false
            },
            {
              "type": "Property",
              "start": 3087,
              "end": 3099,
              "method": false,
              "shorthand": true,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 3087,
                "end": 3091,
                "name": "once",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "AssignmentPattern",
                "start": 3087,
                "end": 3099,
                "left": {
                  "type": "Identifier",
                  "start": 3087,
                  "end": 3091,
                  "name": "once",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "Literal",
                  "start": 3094,
                  "end": 3099,
                  "value": false,
                  "raw": "false"
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "optional": false
            },
            {
              "type": "Property",
              "start": 3101,
              "end": 3109,
              "method": false,
              "shorthand": true,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 3101,
                "end": 3109,
                "name": "callback",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "Identifier",
                "start": 3101,
                "end": 3109,
                "name": "callback",
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
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3111,
            "end": 3118,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 3113,
              "end": 3118,
              "typeName": {
                "type": "Identifier",
                "start": 3113,
                "end": 3115,
                "name": "Ev",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 3115,
                "end": 3118,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 3116,
                    "end": 3117,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3116,
                      "end": 3117,
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
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 3127,
        "end": 3167,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 3133,
            "end": 3165,
            "argument": {
              "type": "ObjectExpression",
              "start": 3140,
              "end": 3164,
              "properties": [
                {
                  "type": "Property",
                  "start": 3142,
                  "end": 3146,
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 3142,
                    "end": 3146,
                    "name": "name",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 3142,
                    "end": 3146,
                    "name": "name",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 3148,
                  "end": 3152,
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 3148,
                    "end": 3152,
                    "name": "once",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 3148,
                    "end": 3152,
                    "name": "once",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 3154,
                  "end": 3162,
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 3154,
                    "end": 3162,
                    "name": "callback",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 3154,
                    "end": 3162,
                    "name": "callback",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3044,
        "end": 3078,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3045,
            "end": 3077,
            "name": {
              "type": "Identifier",
              "start": 3045,
              "end": 3046,
              "name": "K",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 3055,
              "end": 3077,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3061,
                "end": 3077,
                "typeName": {
                  "type": "Identifier",
                  "start": 3061,
                  "end": 3077,
                  "name": "DocumentEventMap",
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
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 3119,
        "end": 3126,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 3121,
          "end": 3126,
          "typeName": {
            "type": "Identifier",
            "start": 3121,
            "end": 3123,
            "name": "Ev",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 3123,
            "end": 3126,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 3124,
                "end": 3125,
                "typeName": {
                  "type": "Identifier",
                  "start": 3124,
                  "end": 3125,
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
      "start": 3169,
      "end": 3269,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3175,
          "end": 3268,
          "id": {
            "type": "Identifier",
            "start": 3175,
            "end": 3185,
            "name": "clickEvent",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 3188,
            "end": 3268,
            "callee": {
              "type": "Identifier",
              "start": 3188,
              "end": 3207,
              "name": "createEventListener",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 3208,
                "end": 3267,
                "properties": [
                  {
                    "type": "Property",
                    "start": 3214,
                    "end": 3227,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 3214,
                      "end": 3218,
                      "name": "name",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 3220,
                      "end": 3227,
                      "value": "click",
                      "raw": "\"click\""
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 3233,
                    "end": 3264,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 3233,
                      "end": 3241,
                      "name": "callback",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "start": 3243,
                      "end": 3264,
                      "id": null,
                      "expression": true,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 3243,
                          "end": 3245,
                          "name": "ev",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": {
                        "type": "CallExpression",
                        "start": 3249,
                        "end": 3264,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 3249,
                          "end": 3260,
                          "object": {
                            "type": "Identifier",
                            "start": 3249,
                            "end": 3256,
                            "name": "console",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 3257,
                            "end": 3260,
                            "name": "log",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "start": 3261,
                            "end": 3263,
                            "name": "ev",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "optional": false,
                        "typeArguments": null
                      },
                      "typeParameters": null,
                      "returnType": null
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
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
      "start": 3271,
      "end": 3373,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3277,
          "end": 3372,
          "id": {
            "type": "Identifier",
            "start": 3277,
            "end": 3288,
            "name": "scrollEvent",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 3291,
            "end": 3372,
            "callee": {
              "type": "Identifier",
              "start": 3291,
              "end": 3310,
              "name": "createEventListener",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 3311,
                "end": 3371,
                "properties": [
                  {
                    "type": "Property",
                    "start": 3317,
                    "end": 3331,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 3317,
                      "end": 3321,
                      "name": "name",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 3323,
                      "end": 3331,
                      "value": "scroll",
                      "raw": "\"scroll\""
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 3337,
                    "end": 3368,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 3337,
                      "end": 3345,
                      "name": "callback",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "start": 3347,
                      "end": 3368,
                      "id": null,
                      "expression": true,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 3347,
                          "end": 3349,
                          "name": "ev",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": {
                        "type": "CallExpression",
                        "start": 3353,
                        "end": 3368,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 3353,
                          "end": 3364,
                          "object": {
                            "type": "Identifier",
                            "start": 3353,
                            "end": 3360,
                            "name": "console",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 3361,
                            "end": 3364,
                            "name": "log",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "start": 3365,
                            "end": 3367,
                            "name": "ev",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "optional": false,
                        "typeArguments": null
                      },
                      "typeParameters": null,
                      "returnType": null
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
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
      "start": 3375,
      "end": 3416,
      "expression": {
        "type": "CallExpression",
        "start": 3375,
        "end": 3415,
        "callee": {
          "type": "Identifier",
          "start": 3375,
          "end": 3388,
          "name": "processEvents",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 3389,
            "end": 3414,
            "elements": [
              {
                "type": "Identifier",
                "start": 3390,
                "end": 3400,
                "name": "clickEvent",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 3402,
                "end": 3413,
                "name": "scrollEvent",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ]
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 3418,
      "end": 3550,
      "expression": {
        "type": "CallExpression",
        "start": 3418,
        "end": 3549,
        "callee": {
          "type": "Identifier",
          "start": 3418,
          "end": 3431,
          "name": "processEvents",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 3432,
            "end": 3548,
            "elements": [
              {
                "type": "ObjectExpression",
                "start": 3438,
                "end": 3488,
                "properties": [
                  {
                    "type": "Property",
                    "start": 3440,
                    "end": 3453,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 3440,
                      "end": 3444,
                      "name": "name",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 3446,
                      "end": 3453,
                      "value": "click",
                      "raw": "\"click\""
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 3455,
                    "end": 3486,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 3455,
                      "end": 3463,
                      "name": "callback",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "start": 3465,
                      "end": 3486,
                      "id": null,
                      "expression": true,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 3465,
                          "end": 3467,
                          "name": "ev",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": {
                        "type": "CallExpression",
                        "start": 3471,
                        "end": 3486,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 3471,
                          "end": 3482,
                          "object": {
                            "type": "Identifier",
                            "start": 3471,
                            "end": 3478,
                            "name": "console",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 3479,
                            "end": 3482,
                            "name": "log",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "start": 3483,
                            "end": 3485,
                            "name": "ev",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "optional": false,
                        "typeArguments": null
                      },
                      "typeParameters": null,
                      "returnType": null
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              },
              {
                "type": "ObjectExpression",
                "start": 3494,
                "end": 3545,
                "properties": [
                  {
                    "type": "Property",
                    "start": 3496,
                    "end": 3510,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 3496,
                      "end": 3500,
                      "name": "name",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 3502,
                      "end": 3510,
                      "value": "scroll",
                      "raw": "\"scroll\""
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 3512,
                    "end": 3543,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 3512,
                      "end": 3520,
                      "name": "callback",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "start": 3522,
                      "end": 3543,
                      "id": null,
                      "expression": true,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 3522,
                          "end": 3524,
                          "name": "ev",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": {
                        "type": "CallExpression",
                        "start": 3528,
                        "end": 3543,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 3528,
                          "end": 3539,
                          "object": {
                            "type": "Identifier",
                            "start": 3528,
                            "end": 3535,
                            "name": "console",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 3536,
                            "end": 3539,
                            "name": "log",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "start": 3540,
                            "end": 3542,
                            "name": "ev",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "optional": false,
                        "typeArguments": null
                      },
                      "typeParameters": null,
                      "returnType": null
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              }
            ]
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 3565,
      "end": 4085,
      "id": {
        "type": "Identifier",
        "start": 3574,
        "end": 3577,
        "name": "ff1",
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
        "start": 3580,
        "end": 4085,
        "body": [
          {
            "type": "TSTypeAliasDeclaration",
            "start": 3586,
            "end": 3694,
            "id": {
              "type": "Identifier",
              "start": 3591,
              "end": 3597,
              "name": "ArgMap",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 3600,
              "end": 3694,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 3610,
                  "end": 3638,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 3610,
                    "end": 3613,
                    "name": "sum",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3613,
                    "end": 3637,
                    "typeAnnotation": {
                      "type": "TSTupleType",
                      "start": 3615,
                      "end": 3637,
                      "elementTypes": [
                        {
                          "type": "TSNamedTupleMember",
                          "start": 3616,
                          "end": 3625,
                          "elementType": {
                            "type": "TSNumberKeyword",
                            "start": 3619,
                            "end": 3625
                          },
                          "label": {
                            "type": "Identifier",
                            "start": 3616,
                            "end": 3617,
                            "name": "a",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "optional": false
                        },
                        {
                          "type": "TSNamedTupleMember",
                          "start": 3627,
                          "end": 3636,
                          "elementType": {
                            "type": "TSNumberKeyword",
                            "start": 3630,
                            "end": 3636
                          },
                          "label": {
                            "type": "Identifier",
                            "start": 3627,
                            "end": 3628,
                            "name": "b",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "optional": false
                        }
                      ]
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 3647,
                  "end": 3688,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 3647,
                    "end": 3653,
                    "name": "concat",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3653,
                    "end": 3688,
                    "typeAnnotation": {
                      "type": "TSTupleType",
                      "start": 3655,
                      "end": 3688,
                      "elementTypes": [
                        {
                          "type": "TSNamedTupleMember",
                          "start": 3656,
                          "end": 3665,
                          "elementType": {
                            "type": "TSStringKeyword",
                            "start": 3659,
                            "end": 3665
                          },
                          "label": {
                            "type": "Identifier",
                            "start": 3656,
                            "end": 3657,
                            "name": "a",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "optional": false
                        },
                        {
                          "type": "TSNamedTupleMember",
                          "start": 3667,
                          "end": 3676,
                          "elementType": {
                            "type": "TSStringKeyword",
                            "start": 3670,
                            "end": 3676
                          },
                          "label": {
                            "type": "Identifier",
                            "start": 3667,
                            "end": 3668,
                            "name": "b",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "optional": false
                        },
                        {
                          "type": "TSNamedTupleMember",
                          "start": 3678,
                          "end": 3687,
                          "elementType": {
                            "type": "TSStringKeyword",
                            "start": 3681,
                            "end": 3687
                          },
                          "label": {
                            "type": "Identifier",
                            "start": 3678,
                            "end": 3679,
                            "name": "c",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "optional": false
                        }
                      ]
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
            "start": 3699,
            "end": 3724,
            "id": {
              "type": "Identifier",
              "start": 3704,
              "end": 3708,
              "name": "Keys",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "start": 3711,
              "end": 3723,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3717,
                "end": 3723,
                "typeName": {
                  "type": "Identifier",
                  "start": 3717,
                  "end": 3723,
                  "name": "ArgMap",
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
            "type": "VariableDeclaration",
            "start": 3729,
            "end": 3865,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 3735,
                "end": 3865,
                "id": {
                  "type": "Identifier",
                  "start": 3735,
                  "end": 3786,
                  "name": "funs",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3739,
                    "end": 3786,
                    "typeAnnotation": {
                      "type": "TSMappedType",
                      "start": 3741,
                      "end": 3786,
                      "typeParameter": {
                        "type": "TSTypeParameter",
                        "start": 3744,
                        "end": 3753,
                        "name": {
                          "type": "Identifier",
                          "start": 3744,
                          "end": 3745,
                          "name": "P",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "constraint": {
                          "type": "TSTypeReference",
                          "start": 3749,
                          "end": 3753,
                          "typeName": {
                            "type": "Identifier",
                            "start": 3749,
                            "end": 3753,
                            "name": "Keys",
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
                        "type": "TSFunctionType",
                        "start": 3756,
                        "end": 3784,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "RestElement",
                            "start": 3757,
                            "end": 3775,
                            "argument": {
                              "type": "Identifier",
                              "start": 3760,
                              "end": 3764,
                              "name": "args",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "decorators": [],
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 3764,
                              "end": 3775,
                              "typeAnnotation": {
                                "type": "TSIndexedAccessType",
                                "start": 3766,
                                "end": 3775,
                                "objectType": {
                                  "type": "TSTypeReference",
                                  "start": 3766,
                                  "end": 3772,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 3766,
                                    "end": 3772,
                                    "name": "ArgMap",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                },
                                "indexType": {
                                  "type": "TSTypeReference",
                                  "start": 3773,
                                  "end": 3774,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 3773,
                                    "end": 3774,
                                    "name": "P",
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
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 3777,
                          "end": 3784,
                          "typeAnnotation": {
                            "type": "TSVoidKeyword",
                            "start": 3780,
                            "end": 3784
                          }
                        }
                      },
                      "optional": null,
                      "readonly": null,
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 3749,
                        "end": 3753,
                        "typeName": {
                          "type": "Identifier",
                          "start": 3749,
                          "end": 3753,
                          "name": "Keys",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      },
                      "key": {
                        "type": "Identifier",
                        "start": 3744,
                        "end": 3745,
                        "name": "P",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 3789,
                  "end": 3865,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 3799,
                      "end": 3819,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 3799,
                        "end": 3802,
                        "name": "sum",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "ArrowFunctionExpression",
                        "start": 3804,
                        "end": 3819,
                        "id": null,
                        "expression": true,
                        "generator": false,
                        "async": false,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 3805,
                            "end": 3806,
                            "name": "a",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          {
                            "type": "Identifier",
                            "start": 3808,
                            "end": 3809,
                            "name": "b",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "body": {
                          "type": "BinaryExpression",
                          "start": 3814,
                          "end": 3819,
                          "left": {
                            "type": "Identifier",
                            "start": 3814,
                            "end": 3815,
                            "name": "a",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "operator": "+",
                          "right": {
                            "type": "Identifier",
                            "start": 3818,
                            "end": 3819,
                            "name": "b",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        },
                        "typeParameters": null,
                        "returnType": null
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 3829,
                      "end": 3859,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 3829,
                        "end": 3835,
                        "name": "concat",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "ArrowFunctionExpression",
                        "start": 3837,
                        "end": 3859,
                        "id": null,
                        "expression": true,
                        "generator": false,
                        "async": false,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 3838,
                            "end": 3839,
                            "name": "a",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          {
                            "type": "Identifier",
                            "start": 3841,
                            "end": 3842,
                            "name": "b",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          {
                            "type": "Identifier",
                            "start": 3844,
                            "end": 3845,
                            "name": "c",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "body": {
                          "type": "BinaryExpression",
                          "start": 3850,
                          "end": 3859,
                          "left": {
                            "type": "BinaryExpression",
                            "start": 3850,
                            "end": 3855,
                            "left": {
                              "type": "Identifier",
                              "start": 3850,
                              "end": 3851,
                              "name": "a",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "operator": "+",
                            "right": {
                              "type": "Identifier",
                              "start": 3854,
                              "end": 3855,
                              "name": "b",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          },
                          "operator": "+",
                          "right": {
                            "type": "Identifier",
                            "start": 3858,
                            "end": 3859,
                            "name": "c",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        },
                        "typeParameters": null,
                        "returnType": null
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
            "type": "FunctionDeclaration",
            "start": 3870,
            "end": 3993,
            "id": {
              "type": "Identifier",
              "start": 3879,
              "end": 3884,
              "name": "apply",
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
                "start": 3901,
                "end": 3910,
                "name": "funKey",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 3907,
                  "end": 3910,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 3909,
                    "end": 3910,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3909,
                      "end": 3910,
                      "name": "K",
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
                "start": 3912,
                "end": 3930,
                "argument": {
                  "type": "Identifier",
                  "start": 3915,
                  "end": 3919,
                  "name": "args",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 3919,
                  "end": 3930,
                  "typeAnnotation": {
                    "type": "TSIndexedAccessType",
                    "start": 3921,
                    "end": 3930,
                    "objectType": {
                      "type": "TSTypeReference",
                      "start": 3921,
                      "end": 3927,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3921,
                        "end": 3927,
                        "name": "ArgMap",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    "indexType": {
                      "type": "TSTypeReference",
                      "start": 3928,
                      "end": 3929,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3928,
                        "end": 3929,
                        "name": "K",
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
            "body": {
              "type": "BlockStatement",
              "start": 3932,
              "end": 3993,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 3942,
                  "end": 3966,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 3948,
                      "end": 3965,
                      "id": {
                        "type": "Identifier",
                        "start": 3948,
                        "end": 3950,
                        "name": "fn",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "MemberExpression",
                        "start": 3953,
                        "end": 3965,
                        "object": {
                          "type": "Identifier",
                          "start": 3953,
                          "end": 3957,
                          "name": "funs",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 3958,
                          "end": 3964,
                          "name": "funKey",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": true,
                        "optional": false
                      },
                      "definite": false
                    }
                  ],
                  "kind": "const",
                  "declare": false
                },
                {
                  "type": "ExpressionStatement",
                  "start": 3975,
                  "end": 3987,
                  "expression": {
                    "type": "CallExpression",
                    "start": 3975,
                    "end": 3986,
                    "callee": {
                      "type": "Identifier",
                      "start": 3975,
                      "end": 3977,
                      "name": "fn",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "SpreadElement",
                        "start": 3978,
                        "end": 3985,
                        "argument": {
                          "type": "Identifier",
                          "start": 3981,
                          "end": 3985,
                          "name": "args",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
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
              "start": 3884,
              "end": 3900,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 3885,
                  "end": 3899,
                  "name": {
                    "type": "Identifier",
                    "start": 3885,
                    "end": 3886,
                    "name": "K",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 3895,
                    "end": 3899,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3895,
                      "end": 3899,
                      "name": "Keys",
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
            "type": "VariableDeclaration",
            "start": 3998,
            "end": 4027,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 4004,
                "end": 4027,
                "id": {
                  "type": "Identifier",
                  "start": 4004,
                  "end": 4006,
                  "name": "x1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 4009,
                  "end": 4027,
                  "callee": {
                    "type": "Identifier",
                    "start": 4009,
                    "end": 4014,
                    "name": "apply",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 4015,
                      "end": 4020,
                      "value": "sum",
                      "raw": "'sum'"
                    },
                    {
                      "type": "Literal",
                      "start": 4022,
                      "end": 4023,
                      "value": 1,
                      "raw": "1"
                    },
                    {
                      "type": "Literal",
                      "start": 4025,
                      "end": 4026,
                      "value": 2,
                      "raw": "2"
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
            "start": 4032,
            "end": 4083,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 4038,
                "end": 4083,
                "id": {
                  "type": "Identifier",
                  "start": 4038,
                  "end": 4040,
                  "name": "x2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 4043,
                  "end": 4083,
                  "callee": {
                    "type": "Identifier",
                    "start": 4043,
                    "end": 4048,
                    "name": "apply",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 4049,
                      "end": 4057,
                      "value": "concat",
                      "raw": "'concat'"
                    },
                    {
                      "type": "Literal",
                      "start": 4059,
                      "end": 4065,
                      "value": "str1",
                      "raw": "'str1'"
                    },
                    {
                      "type": "Literal",
                      "start": 4067,
                      "end": 4073,
                      "value": "str2",
                      "raw": "'str2'"
                    },
                    {
                      "type": "Literal",
                      "start": 4075,
                      "end": 4081,
                      "value": "str3",
                      "raw": "'str3'"
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
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 4109,
      "end": 4148,
      "id": {
        "type": "Identifier",
        "start": 4114,
        "end": 4120,
        "name": "ArgMap",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 4123,
        "end": 4147,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 4125,
            "end": 4135,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 4125,
              "end": 4126,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 4126,
              "end": 4134,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 4128,
                "end": 4134
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 4136,
            "end": 4145,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 4136,
              "end": 4137,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 4137,
              "end": 4145,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 4139,
                "end": 4145
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
      "start": 4149,
      "end": 4208,
      "id": {
        "type": "Identifier",
        "start": 4154,
        "end": 4158,
        "name": "Func",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 4158,
        "end": 4182,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 4159,
            "end": 4181,
            "name": {
              "type": "Identifier",
              "start": 4159,
              "end": 4160,
              "name": "K",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 4169,
              "end": 4181,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 4175,
                "end": 4181,
                "typeName": {
                  "type": "Identifier",
                  "start": 4175,
                  "end": 4181,
                  "name": "ArgMap",
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
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 4185,
        "end": 4207,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "start": 4186,
            "end": 4198,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 4187,
              "end": 4198,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "start": 4189,
                "end": 4198,
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 4189,
                  "end": 4195,
                  "typeName": {
                    "type": "Identifier",
                    "start": 4189,
                    "end": 4195,
                    "name": "ArgMap",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 4196,
                  "end": 4197,
                  "typeName": {
                    "type": "Identifier",
                    "start": 4196,
                    "end": 4197,
                    "name": "K",
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
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 4200,
          "end": 4207,
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 4203,
            "end": 4207
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 4209,
      "end": 4255,
      "id": {
        "type": "Identifier",
        "start": 4214,
        "end": 4219,
        "name": "Funcs",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 4222,
        "end": 4254,
        "typeParameter": {
          "type": "TSTypeParameter",
          "start": 4225,
          "end": 4242,
          "name": {
            "type": "Identifier",
            "start": 4225,
            "end": 4226,
            "name": "K",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "constraint": {
            "type": "TSTypeOperator",
            "start": 4230,
            "end": 4242,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 4236,
              "end": 4242,
              "typeName": {
                "type": "Identifier",
                "start": 4236,
                "end": 4242,
                "name": "ArgMap",
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
          "start": 4245,
          "end": 4252,
          "typeName": {
            "type": "Identifier",
            "start": 4245,
            "end": 4249,
            "name": "Func",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 4249,
            "end": 4252,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 4250,
                "end": 4251,
                "typeName": {
                  "type": "Identifier",
                  "start": 4250,
                  "end": 4251,
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
          "type": "TSTypeOperator",
          "start": 4230,
          "end": 4242,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 4236,
            "end": 4242,
            "typeName": {
              "type": "Identifier",
              "start": 4236,
              "end": 4242,
              "name": "ArgMap",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        },
        "key": {
          "type": "Identifier",
          "start": 4225,
          "end": 4226,
          "name": "K",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 4257,
      "end": 4355,
      "id": {
        "type": "Identifier",
        "start": 4266,
        "end": 4268,
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
          "start": 4293,
          "end": 4305,
          "name": "funcs",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 4298,
            "end": 4305,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 4300,
              "end": 4305,
              "typeName": {
                "type": "Identifier",
                "start": 4300,
                "end": 4305,
                "name": "Funcs",
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
          "start": 4307,
          "end": 4313,
          "name": "key",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 4310,
            "end": 4313,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 4312,
              "end": 4313,
              "typeName": {
                "type": "Identifier",
                "start": 4312,
                "end": 4313,
                "name": "K",
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
          "start": 4315,
          "end": 4329,
          "name": "arg",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 4318,
            "end": 4329,
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "start": 4320,
              "end": 4329,
              "objectType": {
                "type": "TSTypeReference",
                "start": 4320,
                "end": 4326,
                "typeName": {
                  "type": "Identifier",
                  "start": 4320,
                  "end": 4326,
                  "name": "ArgMap",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              "indexType": {
                "type": "TSTypeReference",
                "start": 4327,
                "end": 4328,
                "typeName": {
                  "type": "Identifier",
                  "start": 4327,
                  "end": 4328,
                  "name": "K",
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
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 4331,
        "end": 4355,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 4337,
            "end": 4353,
            "expression": {
              "type": "CallExpression",
              "start": 4337,
              "end": 4352,
              "callee": {
                "type": "MemberExpression",
                "start": 4337,
                "end": 4347,
                "object": {
                  "type": "Identifier",
                  "start": 4337,
                  "end": 4342,
                  "name": "funcs",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 4343,
                  "end": 4346,
                  "name": "key",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": true,
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 4348,
                  "end": 4351,
                  "name": "arg",
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
        "start": 4268,
        "end": 4292,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 4269,
            "end": 4291,
            "name": {
              "type": "Identifier",
              "start": 4269,
              "end": 4270,
              "name": "K",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 4279,
              "end": 4291,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 4285,
                "end": 4291,
                "typeName": {
                  "type": "Identifier",
                  "start": 4285,
                  "end": 4291,
                  "name": "ArgMap",
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
          }
        ]
      },
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 4357,
      "end": 4496,
      "id": {
        "type": "Identifier",
        "start": 4366,
        "end": 4368,
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
          "start": 4393,
          "end": 4405,
          "name": "funcs",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 4398,
            "end": 4405,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 4400,
              "end": 4405,
              "typeName": {
                "type": "Identifier",
                "start": 4400,
                "end": 4405,
                "name": "Funcs",
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
          "start": 4407,
          "end": 4413,
          "name": "key",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 4410,
            "end": 4413,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 4412,
              "end": 4413,
              "typeName": {
                "type": "Identifier",
                "start": 4412,
                "end": 4413,
                "name": "K",
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
          "start": 4415,
          "end": 4429,
          "name": "arg",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 4418,
            "end": 4429,
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "start": 4420,
              "end": 4429,
              "objectType": {
                "type": "TSTypeReference",
                "start": 4420,
                "end": 4426,
                "typeName": {
                  "type": "Identifier",
                  "start": 4420,
                  "end": 4426,
                  "name": "ArgMap",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              "indexType": {
                "type": "TSTypeReference",
                "start": 4427,
                "end": 4428,
                "typeName": {
                  "type": "Identifier",
                  "start": 4427,
                  "end": 4428,
                  "name": "K",
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
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 4431,
        "end": 4496,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 4437,
            "end": 4461,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 4443,
                "end": 4460,
                "id": {
                  "type": "Identifier",
                  "start": 4443,
                  "end": 4447,
                  "name": "func",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 4450,
                  "end": 4460,
                  "object": {
                    "type": "Identifier",
                    "start": 4450,
                    "end": 4455,
                    "name": "funcs",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 4456,
                    "end": 4459,
                    "name": "key",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": true,
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 4484,
            "end": 4494,
            "expression": {
              "type": "CallExpression",
              "start": 4484,
              "end": 4493,
              "callee": {
                "type": "Identifier",
                "start": 4484,
                "end": 4488,
                "name": "func",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 4489,
                  "end": 4492,
                  "name": "arg",
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
        "start": 4368,
        "end": 4392,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 4369,
            "end": 4391,
            "name": {
              "type": "Identifier",
              "start": 4369,
              "end": 4370,
              "name": "K",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 4379,
              "end": 4391,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 4385,
                "end": 4391,
                "typeName": {
                  "type": "Identifier",
                  "start": 4385,
                  "end": 4391,
                  "name": "ArgMap",
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
          }
        ]
      },
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 4498,
      "end": 4628,
      "id": {
        "type": "Identifier",
        "start": 4507,
        "end": 4509,
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
          "start": 4534,
          "end": 4546,
          "name": "funcs",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 4539,
            "end": 4546,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 4541,
              "end": 4546,
              "typeName": {
                "type": "Identifier",
                "start": 4541,
                "end": 4546,
                "name": "Funcs",
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
          "start": 4548,
          "end": 4554,
          "name": "key",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 4551,
            "end": 4554,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 4553,
              "end": 4554,
              "typeName": {
                "type": "Identifier",
                "start": 4553,
                "end": 4554,
                "name": "K",
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
          "start": 4556,
          "end": 4570,
          "name": "arg",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 4559,
            "end": 4570,
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "start": 4561,
              "end": 4570,
              "objectType": {
                "type": "TSTypeReference",
                "start": 4561,
                "end": 4567,
                "typeName": {
                  "type": "Identifier",
                  "start": 4561,
                  "end": 4567,
                  "name": "ArgMap",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              "indexType": {
                "type": "TSTypeReference",
                "start": 4568,
                "end": 4569,
                "typeName": {
                  "type": "Identifier",
                  "start": 4568,
                  "end": 4569,
                  "name": "K",
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
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 4572,
        "end": 4628,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 4578,
            "end": 4611,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 4584,
                "end": 4610,
                "id": {
                  "type": "Identifier",
                  "start": 4584,
                  "end": 4597,
                  "name": "func",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 4588,
                    "end": 4597,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 4590,
                      "end": 4597,
                      "typeName": {
                        "type": "Identifier",
                        "start": 4590,
                        "end": 4594,
                        "name": "Func",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 4594,
                        "end": 4597,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 4595,
                            "end": 4596,
                            "typeName": {
                              "type": "Identifier",
                              "start": 4595,
                              "end": 4596,
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
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 4600,
                  "end": 4610,
                  "object": {
                    "type": "Identifier",
                    "start": 4600,
                    "end": 4605,
                    "name": "funcs",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 4606,
                    "end": 4609,
                    "name": "key",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": true,
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 4616,
            "end": 4626,
            "expression": {
              "type": "CallExpression",
              "start": 4616,
              "end": 4625,
              "callee": {
                "type": "Identifier",
                "start": 4616,
                "end": 4620,
                "name": "func",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 4621,
                  "end": 4624,
                  "name": "arg",
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
        "start": 4509,
        "end": 4533,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 4510,
            "end": 4532,
            "name": {
              "type": "Identifier",
              "start": 4510,
              "end": 4511,
              "name": "K",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 4520,
              "end": 4532,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 4526,
                "end": 4532,
                "typeName": {
                  "type": "Identifier",
                  "start": 4526,
                  "end": 4532,
                  "name": "ArgMap",
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
          }
        ]
      },
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 4630,
      "end": 4717,
      "id": {
        "type": "Identifier",
        "start": 4639,
        "end": 4641,
        "name": "f4",
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
          "start": 4666,
          "end": 4688,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 4667,
            "end": 4688,
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "start": 4669,
              "end": 4688,
              "objectType": {
                "type": "TSTypeReference",
                "start": 4669,
                "end": 4674,
                "typeName": {
                  "type": "Identifier",
                  "start": 4669,
                  "end": 4674,
                  "name": "Funcs",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              "indexType": {
                "type": "TSTypeOperator",
                "start": 4675,
                "end": 4687,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 4681,
                  "end": 4687,
                  "typeName": {
                    "type": "Identifier",
                    "start": 4681,
                    "end": 4687,
                    "name": "ArgMap",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 4690,
          "end": 4701,
          "name": "y",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 4691,
            "end": 4701,
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "start": 4693,
              "end": 4701,
              "objectType": {
                "type": "TSTypeReference",
                "start": 4693,
                "end": 4698,
                "typeName": {
                  "type": "Identifier",
                  "start": 4693,
                  "end": 4698,
                  "name": "Funcs",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              "indexType": {
                "type": "TSTypeReference",
                "start": 4699,
                "end": 4700,
                "typeName": {
                  "type": "Identifier",
                  "start": 4699,
                  "end": 4700,
                  "name": "K",
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
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 4703,
        "end": 4717,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 4709,
            "end": 4715,
            "expression": {
              "type": "AssignmentExpression",
              "start": 4709,
              "end": 4714,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 4709,
                "end": 4710,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 4713,
                "end": 4714,
                "name": "y",
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
        "start": 4641,
        "end": 4665,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 4642,
            "end": 4664,
            "name": {
              "type": "Identifier",
              "start": 4642,
              "end": 4643,
              "name": "K",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 4652,
              "end": 4664,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 4658,
                "end": 4664,
                "typeName": {
                  "type": "Identifier",
                  "start": 4658,
                  "end": 4664,
                  "name": "ArgMap",
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
          }
        ]
      },
      "returnType": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 4741,
      "end": 4847,
      "id": {
        "type": "Identifier",
        "start": 4751,
        "end": 4756,
        "name": "MyObj",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 4757,
        "end": 4847,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 4763,
            "end": 4799,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 4763,
              "end": 4770,
              "name": "someKey",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 4770,
              "end": 4799,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 4772,
                "end": 4799,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 4780,
                    "end": 4793,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 4780,
                      "end": 4784,
                      "name": "name",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 4784,
                      "end": 4792,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 4786,
                        "end": 4792
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
          },
          {
            "type": "TSPropertySignature",
            "start": 4804,
            "end": 4845,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 4804,
              "end": 4816,
              "name": "someOtherKey",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 4816,
              "end": 4845,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 4818,
                "end": 4845,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 4826,
                    "end": 4839,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 4826,
                      "end": 4830,
                      "name": "name",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 4830,
                      "end": 4838,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 4832,
                        "end": 4838
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
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 4849,
      "end": 4930,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4855,
          "end": 4929,
          "id": {
            "type": "Identifier",
            "start": 4855,
            "end": 4865,
            "name": "ref",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 4858,
              "end": 4865,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 4860,
                "end": 4865,
                "typeName": {
                  "type": "Identifier",
                  "start": 4860,
                  "end": 4865,
                  "name": "MyObj",
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
            "start": 4868,
            "end": 4929,
            "properties": [
              {
                "type": "Property",
                "start": 4874,
                "end": 4895,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 4874,
                  "end": 4881,
                  "name": "someKey",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 4883,
                  "end": 4895,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 4885,
                      "end": 4893,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 4885,
                        "end": 4889,
                        "name": "name",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 4891,
                        "end": 4893,
                        "value": "",
                        "raw": "\"\""
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 4901,
                "end": 4927,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 4901,
                  "end": 4913,
                  "name": "someOtherKey",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 4915,
                  "end": 4927,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 4917,
                      "end": 4925,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 4917,
                        "end": 4921,
                        "name": "name",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 4923,
                        "end": 4925,
                        "value": 42,
                        "raw": "42"
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
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
      "type": "FunctionDeclaration",
      "start": 4932,
      "end": 5229,
      "id": {
        "type": "Identifier",
        "start": 4941,
        "end": 4945,
        "name": "func",
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
          "start": 4969,
          "end": 4973,
          "name": "k",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 4970,
            "end": 4973,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 4972,
              "end": 4973,
              "typeName": {
                "type": "Identifier",
                "start": 4972,
                "end": 4973,
                "name": "K",
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
        "start": 5005,
        "end": 5229,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 5011,
            "end": 5051,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 5017,
                "end": 5050,
                "id": {
                  "type": "Identifier",
                  "start": 5017,
                  "end": 5041,
                  "name": "myObj",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 5022,
                    "end": 5041,
                    "typeAnnotation": {
                      "type": "TSIndexedAccessType",
                      "start": 5024,
                      "end": 5041,
                      "objectType": {
                        "type": "TSTypeReference",
                        "start": 5024,
                        "end": 5038,
                        "typeName": {
                          "type": "Identifier",
                          "start": 5024,
                          "end": 5031,
                          "name": "Partial",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 5031,
                          "end": 5038,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 5032,
                              "end": 5037,
                              "typeName": {
                                "type": "Identifier",
                                "start": 5032,
                                "end": 5037,
                                "name": "MyObj",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          ]
                        }
                      },
                      "indexType": {
                        "type": "TSTypeReference",
                        "start": 5039,
                        "end": 5040,
                        "typeName": {
                          "type": "Identifier",
                          "start": 5039,
                          "end": 5040,
                          "name": "K",
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
                  "type": "MemberExpression",
                  "start": 5044,
                  "end": 5050,
                  "object": {
                    "type": "Identifier",
                    "start": 5044,
                    "end": 5047,
                    "name": "ref",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 5048,
                    "end": 5049,
                    "name": "k",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": true,
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "IfStatement",
            "start": 5056,
            "end": 5099,
            "test": {
              "type": "Identifier",
              "start": 5060,
              "end": 5065,
              "name": "myObj",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 5067,
              "end": 5099,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 5075,
                  "end": 5093,
                  "argument": {
                    "type": "MemberExpression",
                    "start": 5082,
                    "end": 5092,
                    "object": {
                      "type": "Identifier",
                      "start": 5082,
                      "end": 5087,
                      "name": "myObj",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 5088,
                      "end": 5092,
                      "name": "name",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  }
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "VariableDeclaration",
            "start": 5104,
            "end": 5155,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 5110,
                "end": 5154,
                "id": {
                  "type": "Identifier",
                  "start": 5110,
                  "end": 5145,
                  "name": "myObj2",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 5116,
                    "end": 5145,
                    "typeAnnotation": {
                      "type": "TSIndexedAccessType",
                      "start": 5118,
                      "end": 5145,
                      "objectType": {
                        "type": "TSTypeReference",
                        "start": 5118,
                        "end": 5132,
                        "typeName": {
                          "type": "Identifier",
                          "start": 5118,
                          "end": 5125,
                          "name": "Partial",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 5125,
                          "end": 5132,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 5126,
                              "end": 5131,
                              "typeName": {
                                "type": "Identifier",
                                "start": 5126,
                                "end": 5131,
                                "name": "MyObj",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          ]
                        }
                      },
                      "indexType": {
                        "type": "TSTypeOperator",
                        "start": 5133,
                        "end": 5144,
                        "operator": "keyof",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 5139,
                          "end": 5144,
                          "typeName": {
                            "type": "Identifier",
                            "start": 5139,
                            "end": 5144,
                            "name": "MyObj",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 5148,
                  "end": 5154,
                  "object": {
                    "type": "Identifier",
                    "start": 5148,
                    "end": 5151,
                    "name": "ref",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 5152,
                    "end": 5153,
                    "name": "k",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": true,
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "IfStatement",
            "start": 5160,
            "end": 5205,
            "test": {
              "type": "Identifier",
              "start": 5164,
              "end": 5170,
              "name": "myObj2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 5172,
              "end": 5205,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 5180,
                  "end": 5199,
                  "argument": {
                    "type": "MemberExpression",
                    "start": 5187,
                    "end": 5198,
                    "object": {
                      "type": "Identifier",
                      "start": 5187,
                      "end": 5193,
                      "name": "myObj2",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 5194,
                      "end": 5198,
                      "name": "name",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  }
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "ReturnStatement",
            "start": 5210,
            "end": 5227,
            "argument": {
              "type": "Identifier",
              "start": 5217,
              "end": 5226,
              "name": "undefined",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 4945,
        "end": 4968,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 4946,
            "end": 4967,
            "name": {
              "type": "Identifier",
              "start": 4946,
              "end": 4947,
              "name": "K",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 4956,
              "end": 4967,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 4962,
                "end": 4967,
                "typeName": {
                  "type": "Identifier",
                  "start": 4962,
                  "end": 4967,
                  "name": "MyObj",
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
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 4974,
        "end": 5004,
        "typeAnnotation": {
          "type": "TSUnionType",
          "start": 4976,
          "end": 5004,
          "types": [
            {
              "type": "TSIndexedAccessType",
              "start": 4976,
              "end": 4992,
              "objectType": {
                "type": "TSIndexedAccessType",
                "start": 4976,
                "end": 4984,
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 4976,
                  "end": 4981,
                  "typeName": {
                    "type": "Identifier",
                    "start": 4976,
                    "end": 4981,
                    "name": "MyObj",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 4982,
                  "end": 4983,
                  "typeName": {
                    "type": "Identifier",
                    "start": 4982,
                    "end": 4983,
                    "name": "K",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              },
              "indexType": {
                "type": "TSLiteralType",
                "start": 4985,
                "end": 4991,
                "literal": {
                  "type": "Literal",
                  "start": 4985,
                  "end": 4991,
                  "value": "name",
                  "raw": "'name'"
                }
              }
            },
            {
              "type": "TSUndefinedKeyword",
              "start": 4995,
              "end": 5004
            }
          ]
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 5253,
      "end": 5287,
      "id": {
        "type": "Identifier",
        "start": 5263,
        "end": 5266,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 5267,
        "end": 5287,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 5273,
            "end": 5285,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 5273,
              "end": 5276,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5277,
              "end": 5285,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 5279,
                "end": 5285
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
      "start": 5289,
      "end": 5371,
      "id": {
        "type": "Identifier",
        "start": 5298,
        "end": 5301,
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
          "start": 5323,
          "end": 5330,
          "name": "prop",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 5327,
            "end": 5330,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 5329,
              "end": 5330,
              "typeName": {
                "type": "Identifier",
                "start": 5329,
                "end": 5330,
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
          "start": 5332,
          "end": 5348,
          "name": "f",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 5333,
            "end": 5348,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 5335,
              "end": 5348,
              "typeName": {
                "type": "Identifier",
                "start": 5335,
                "end": 5343,
                "name": "Required",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 5343,
                "end": 5348,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 5344,
                    "end": 5347,
                    "typeName": {
                      "type": "Identifier",
                      "start": 5344,
                      "end": 5347,
                      "name": "Foo",
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
        "start": 5350,
        "end": 5371,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 5356,
            "end": 5369,
            "expression": {
              "type": "CallExpression",
              "start": 5356,
              "end": 5368,
              "callee": {
                "type": "Identifier",
                "start": 5356,
                "end": 5359,
                "name": "bar",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "MemberExpression",
                  "start": 5360,
                  "end": 5367,
                  "object": {
                    "type": "Identifier",
                    "start": 5360,
                    "end": 5361,
                    "name": "f",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 5362,
                    "end": 5366,
                    "name": "prop",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": true,
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
        "start": 5301,
        "end": 5322,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 5302,
            "end": 5321,
            "name": {
              "type": "Identifier",
              "start": 5302,
              "end": 5303,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 5312,
              "end": 5321,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 5318,
                "end": 5321,
                "typeName": {
                  "type": "Identifier",
                  "start": 5318,
                  "end": 5321,
                  "name": "Foo",
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
          }
        ]
      },
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 5373,
      "end": 5411,
      "id": {
        "type": "Identifier",
        "start": 5390,
        "end": 5393,
        "name": "bar",
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
          "start": 5394,
          "end": 5403,
          "name": "t",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 5395,
            "end": 5403,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 5397,
              "end": 5403
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
        "start": 5404,
        "end": 5410,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 5406,
          "end": 5410
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 5435,
      "end": 5607,
      "id": {
        "type": "Identifier",
        "start": 5452,
        "end": 5477,
        "name": "makeCompleteLookupMapping",
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
          "start": 5543,
          "end": 5549,
          "name": "ops",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 5546,
            "end": 5549,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 5548,
              "end": 5549,
              "typeName": {
                "type": "Identifier",
                "start": 5548,
                "end": 5549,
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
          "start": 5551,
          "end": 5561,
          "name": "attr",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 5555,
            "end": 5561,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 5557,
              "end": 5561,
              "typeName": {
                "type": "Identifier",
                "start": 5557,
                "end": 5561,
                "name": "Attr",
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
        "start": 5477,
        "end": 5537,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 5478,
            "end": 5506,
            "name": {
              "type": "Identifier",
              "start": 5478,
              "end": 5479,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 5488,
              "end": 5506,
              "typeName": {
                "type": "Identifier",
                "start": 5488,
                "end": 5501,
                "name": "ReadonlyArray",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 5501,
                "end": 5506,
                "params": [
                  {
                    "type": "TSAnyKeyword",
                    "start": 5502,
                    "end": 5505
                  }
                ]
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 5508,
            "end": 5536,
            "name": {
              "type": "Identifier",
              "start": 5508,
              "end": 5512,
              "name": "Attr",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 5521,
              "end": 5536,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "start": 5527,
                "end": 5536,
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 5527,
                  "end": 5528,
                  "typeName": {
                    "type": "Identifier",
                    "start": 5527,
                    "end": 5528,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                "indexType": {
                  "type": "TSNumberKeyword",
                  "start": 5529,
                  "end": 5535
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
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 5562,
        "end": 5606,
        "typeAnnotation": {
          "type": "TSMappedType",
          "start": 5564,
          "end": 5606,
          "typeParameter": {
            "type": "TSTypeParameter",
            "start": 5567,
            "end": 5584,
            "name": {
              "type": "Identifier",
              "start": 5567,
              "end": 5571,
              "name": "Item",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSIndexedAccessType",
              "start": 5575,
              "end": 5584,
              "objectType": {
                "type": "TSTypeReference",
                "start": 5575,
                "end": 5576,
                "typeName": {
                  "type": "Identifier",
                  "start": 5575,
                  "end": 5576,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              "indexType": {
                "type": "TSNumberKeyword",
                "start": 5577,
                "end": 5583
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          "nameType": {
            "type": "TSIndexedAccessType",
            "start": 5587,
            "end": 5597,
            "objectType": {
              "type": "TSTypeReference",
              "start": 5587,
              "end": 5591,
              "typeName": {
                "type": "Identifier",
                "start": 5587,
                "end": 5591,
                "name": "Item",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "indexType": {
              "type": "TSTypeReference",
              "start": 5592,
              "end": 5596,
              "typeName": {
                "type": "Identifier",
                "start": 5592,
                "end": 5596,
                "name": "Attr",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 5600,
            "end": 5604,
            "typeName": {
              "type": "Identifier",
              "start": 5600,
              "end": 5604,
              "name": "Item",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          "optional": null,
          "readonly": null,
          "constraint": {
            "type": "TSIndexedAccessType",
            "start": 5575,
            "end": 5584,
            "objectType": {
              "type": "TSTypeReference",
              "start": 5575,
              "end": 5576,
              "typeName": {
                "type": "Identifier",
                "start": 5575,
                "end": 5576,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "indexType": {
              "type": "TSNumberKeyword",
              "start": 5577,
              "end": 5583
            }
          },
          "key": {
            "type": "Identifier",
            "start": 5567,
            "end": 5571,
            "name": "Item",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 5609,
      "end": 5663,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5615,
          "end": 5662,
          "id": {
            "type": "Identifier",
            "start": 5615,
            "end": 5623,
            "name": "ALL_BARS",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TSAsExpression",
            "start": 5626,
            "end": 5662,
            "expression": {
              "type": "ArrayExpression",
              "start": 5626,
              "end": 5653,
              "elements": [
                {
                  "type": "ObjectExpression",
                  "start": 5627,
                  "end": 5639,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 5629,
                      "end": 5638,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 5629,
                        "end": 5633,
                        "name": "name",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 5635,
                        "end": 5638,
                        "value": "a",
                        "raw": "'a'"
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
                },
                {
                  "type": "ObjectExpression",
                  "start": 5641,
                  "end": 5652,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 5642,
                      "end": 5651,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 5642,
                        "end": 5646,
                        "name": "name",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 5648,
                        "end": 5651,
                        "value": "b",
                        "raw": "'b'"
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 5657,
              "end": 5662,
              "typeName": {
                "type": "Identifier",
                "start": 5657,
                "end": 5662,
                "name": "const",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 5665,
      "end": 5728,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5671,
          "end": 5727,
          "id": {
            "type": "Identifier",
            "start": 5671,
            "end": 5681,
            "name": "BAR_LOOKUP",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 5684,
            "end": 5727,
            "callee": {
              "type": "Identifier",
              "start": 5684,
              "end": 5709,
              "name": "makeCompleteLookupMapping",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 5710,
                "end": 5718,
                "name": "ALL_BARS",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Literal",
                "start": 5720,
                "end": 5726,
                "value": "name",
                "raw": "'name'"
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
      "type": "TSTypeAliasDeclaration",
      "start": 5730,
      "end": 5765,
      "id": {
        "type": "Identifier",
        "start": 5735,
        "end": 5744,
        "name": "BarLookup",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeQuery",
        "start": 5747,
        "end": 5764,
        "exprName": {
          "type": "Identifier",
          "start": 5754,
          "end": 5764,
          "name": "BAR_LOOKUP",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": null
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 5767,
      "end": 5827,
      "id": {
        "type": "Identifier",
        "start": 5772,
        "end": 5775,
        "name": "Baz",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 5778,
        "end": 5826,
        "typeParameter": {
          "type": "TSTypeParameter",
          "start": 5781,
          "end": 5801,
          "name": {
            "type": "Identifier",
            "start": 5781,
            "end": 5782,
            "name": "K",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "constraint": {
            "type": "TSTypeOperator",
            "start": 5786,
            "end": 5801,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 5792,
              "end": 5801,
              "typeName": {
                "type": "Identifier",
                "start": 5792,
                "end": 5801,
                "name": "BarLookup",
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
          "type": "TSIndexedAccessType",
          "start": 5804,
          "end": 5824,
          "objectType": {
            "type": "TSIndexedAccessType",
            "start": 5804,
            "end": 5816,
            "objectType": {
              "type": "TSTypeReference",
              "start": 5804,
              "end": 5813,
              "typeName": {
                "type": "Identifier",
                "start": 5804,
                "end": 5813,
                "name": "BarLookup",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "indexType": {
              "type": "TSTypeReference",
              "start": 5814,
              "end": 5815,
              "typeName": {
                "type": "Identifier",
                "start": 5814,
                "end": 5815,
                "name": "K",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "indexType": {
            "type": "TSLiteralType",
            "start": 5817,
            "end": 5823,
            "literal": {
              "type": "Literal",
              "start": 5817,
              "end": 5823,
              "value": "name",
              "raw": "'name'"
            }
          }
        },
        "optional": null,
        "readonly": null,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 5786,
          "end": 5801,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 5792,
            "end": 5801,
            "typeName": {
              "type": "Identifier",
              "start": 5792,
              "end": 5801,
              "name": "BarLookup",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        },
        "key": {
          "type": "Identifier",
          "start": 5781,
          "end": 5782,
          "name": "K",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 5851,
      "end": 5993,
      "id": {
        "type": "Identifier",
        "start": 5861,
        "end": 5869,
        "name": "Original",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 5870,
        "end": 5993,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 5874,
            "end": 5931,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 5874,
              "end": 5879,
              "name": "prop1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5879,
              "end": 5930,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 5881,
                "end": 5930,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 5887,
                    "end": 5904,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 5887,
                      "end": 5895,
                      "name": "subProp1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 5895,
                      "end": 5903,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 5897,
                        "end": 5903
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 5909,
                    "end": 5926,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 5909,
                      "end": 5917,
                      "name": "subProp2",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 5917,
                      "end": 5925,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 5919,
                        "end": 5925
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
          },
          {
            "type": "TSPropertySignature",
            "start": 5934,
            "end": 5991,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 5934,
              "end": 5939,
              "name": "prop2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5939,
              "end": 5990,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 5941,
                "end": 5990,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 5947,
                    "end": 5964,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 5947,
                      "end": 5955,
                      "name": "subProp3",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 5955,
                      "end": 5963,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 5957,
                        "end": 5963
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 5969,
                    "end": 5986,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 5969,
                      "end": 5977,
                      "name": "subProp4",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 5977,
                      "end": 5985,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 5979,
                        "end": 5985
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
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 5994,
      "end": 6030,
      "id": {
        "type": "Identifier",
        "start": 5999,
        "end": 6012,
        "name": "KeyOfOriginal",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "start": 6015,
        "end": 6029,
        "operator": "keyof",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 6021,
          "end": 6029,
          "typeName": {
            "type": "Identifier",
            "start": 6021,
            "end": 6029,
            "name": "Original",
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
      "start": 6031,
      "end": 6104,
      "id": {
        "type": "Identifier",
        "start": 6036,
        "end": 6058,
        "name": "NestedKeyOfOriginalFor",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 6058,
        "end": 6083,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 6059,
            "end": 6082,
            "name": {
              "type": "Identifier",
              "start": 6059,
              "end": 6060,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 6069,
              "end": 6082,
              "typeName": {
                "type": "Identifier",
                "start": 6069,
                "end": 6082,
                "name": "KeyOfOriginal",
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
        "type": "TSTypeOperator",
        "start": 6086,
        "end": 6103,
        "operator": "keyof",
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "start": 6092,
          "end": 6103,
          "objectType": {
            "type": "TSTypeReference",
            "start": 6092,
            "end": 6100,
            "typeName": {
              "type": "Identifier",
              "start": 6092,
              "end": 6100,
              "name": "Original",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          "indexType": {
            "type": "TSTypeReference",
            "start": 6101,
            "end": 6102,
            "typeName": {
              "type": "Identifier",
              "start": 6101,
              "end": 6102,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 6106,
      "end": 6186,
      "id": {
        "type": "Identifier",
        "start": 6111,
        "end": 6119,
        "name": "SameKeys",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 6119,
        "end": 6122,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 6120,
            "end": 6121,
            "name": {
              "type": "Identifier",
              "start": 6120,
              "end": 6121,
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
        "type": "TSMappedType",
        "start": 6125,
        "end": 6185,
        "typeParameter": {
          "type": "TSTypeParameter",
          "start": 6130,
          "end": 6142,
          "name": {
            "type": "Identifier",
            "start": 6130,
            "end": 6131,
            "name": "K",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "constraint": {
            "type": "TSTypeOperator",
            "start": 6135,
            "end": 6142,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 6141,
              "end": 6142,
              "typeName": {
                "type": "Identifier",
                "start": 6141,
                "end": 6142,
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
          "type": "TSMappedType",
          "start": 6145,
          "end": 6182,
          "typeParameter": {
            "type": "TSTypeParameter",
            "start": 6152,
            "end": 6168,
            "name": {
              "type": "Identifier",
              "start": 6152,
              "end": 6154,
              "name": "K2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 6158,
              "end": 6168,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "start": 6164,
                "end": 6168,
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 6164,
                  "end": 6165,
                  "typeName": {
                    "type": "Identifier",
                    "start": 6164,
                    "end": 6165,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 6166,
                  "end": 6167,
                  "typeName": {
                    "type": "Identifier",
                    "start": 6166,
                    "end": 6167,
                    "name": "K",
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
            "type": "TSNumberKeyword",
            "start": 6171,
            "end": 6177
          },
          "optional": null,
          "readonly": null,
          "constraint": {
            "type": "TSTypeOperator",
            "start": 6158,
            "end": 6168,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "start": 6164,
              "end": 6168,
              "objectType": {
                "type": "TSTypeReference",
                "start": 6164,
                "end": 6165,
                "typeName": {
                  "type": "Identifier",
                  "start": 6164,
                  "end": 6165,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              "indexType": {
                "type": "TSTypeReference",
                "start": 6166,
                "end": 6167,
                "typeName": {
                  "type": "Identifier",
                  "start": 6166,
                  "end": 6167,
                  "name": "K",
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
            "start": 6152,
            "end": 6154,
            "name": "K2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "optional": null,
        "readonly": null,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 6135,
          "end": 6142,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 6141,
            "end": 6142,
            "typeName": {
              "type": "Identifier",
              "start": 6141,
              "end": 6142,
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
          "start": 6130,
          "end": 6131,
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
      "start": 6188,
      "end": 6233,
      "id": {
        "type": "Identifier",
        "start": 6193,
        "end": 6211,
        "name": "MappedFromOriginal",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 6214,
        "end": 6232,
        "typeName": {
          "type": "Identifier",
          "start": 6214,
          "end": 6222,
          "name": "SameKeys",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 6222,
          "end": 6232,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 6223,
              "end": 6231,
              "typeName": {
                "type": "Identifier",
                "start": 6223,
                "end": 6231,
                "name": "Original",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 6235,
      "end": 6568,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6241,
          "end": 6567,
          "id": {
            "type": "Identifier",
            "start": 6241,
            "end": 6280,
            "name": "getStringAndNumberFromOriginalAndMapped",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 6283,
            "end": 6567,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 6355,
                "end": 6373,
                "name": "original",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 6363,
                  "end": 6373,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 6365,
                    "end": 6373,
                    "typeName": {
                      "type": "Identifier",
                      "start": 6365,
                      "end": 6373,
                      "name": "Original",
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
                "start": 6377,
                "end": 6415,
                "name": "mappedFromOriginal",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 6395,
                  "end": 6415,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 6397,
                    "end": 6415,
                    "typeName": {
                      "type": "Identifier",
                      "start": 6397,
                      "end": 6415,
                      "name": "MappedFromOriginal",
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
                "start": 6419,
                "end": 6425,
                "name": "key",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 6422,
                  "end": 6425,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 6424,
                    "end": 6425,
                    "typeName": {
                      "type": "Identifier",
                      "start": 6424,
                      "end": 6425,
                      "name": "K",
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
                "start": 6429,
                "end": 6441,
                "name": "nestedKey",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 6438,
                  "end": 6441,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 6440,
                    "end": 6441,
                    "typeName": {
                      "type": "Identifier",
                      "start": 6440,
                      "end": 6441,
                      "name": "N",
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
              "start": 6491,
              "end": 6567,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 6495,
                  "end": 6565,
                  "argument": {
                    "type": "ArrayExpression",
                    "start": 6502,
                    "end": 6564,
                    "elements": [
                      {
                        "type": "MemberExpression",
                        "start": 6503,
                        "end": 6527,
                        "object": {
                          "type": "MemberExpression",
                          "start": 6503,
                          "end": 6516,
                          "object": {
                            "type": "Identifier",
                            "start": 6503,
                            "end": 6511,
                            "name": "original",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 6512,
                            "end": 6515,
                            "name": "key",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": true,
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 6517,
                          "end": 6526,
                          "name": "nestedKey",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": true,
                        "optional": false
                      },
                      {
                        "type": "MemberExpression",
                        "start": 6529,
                        "end": 6563,
                        "object": {
                          "type": "MemberExpression",
                          "start": 6529,
                          "end": 6552,
                          "object": {
                            "type": "Identifier",
                            "start": 6529,
                            "end": 6547,
                            "name": "mappedFromOriginal",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 6548,
                            "end": 6551,
                            "name": "key",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": true,
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 6553,
                          "end": 6562,
                          "name": "nestedKey",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": true,
                        "optional": false
                      }
                    ]
                  }
                }
              ]
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 6283,
              "end": 6351,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 6287,
                  "end": 6310,
                  "name": {
                    "type": "Identifier",
                    "start": 6287,
                    "end": 6288,
                    "name": "K",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 6297,
                    "end": 6310,
                    "typeName": {
                      "type": "Identifier",
                      "start": 6297,
                      "end": 6310,
                      "name": "KeyOfOriginal",
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
                  "start": 6314,
                  "end": 6349,
                  "name": {
                    "type": "Identifier",
                    "start": 6314,
                    "end": 6315,
                    "name": "N",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 6324,
                    "end": 6349,
                    "typeName": {
                      "type": "Identifier",
                      "start": 6324,
                      "end": 6346,
                      "name": "NestedKeyOfOriginalFor",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 6346,
                      "end": 6349,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 6347,
                          "end": 6348,
                          "typeName": {
                            "type": "Identifier",
                            "start": 6347,
                            "end": 6348,
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
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 6443,
              "end": 6487,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 6445,
                "end": 6487,
                "elementTypes": [
                  {
                    "type": "TSIndexedAccessType",
                    "start": 6446,
                    "end": 6460,
                    "objectType": {
                      "type": "TSIndexedAccessType",
                      "start": 6446,
                      "end": 6457,
                      "objectType": {
                        "type": "TSTypeReference",
                        "start": 6446,
                        "end": 6454,
                        "typeName": {
                          "type": "Identifier",
                          "start": 6446,
                          "end": 6454,
                          "name": "Original",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      },
                      "indexType": {
                        "type": "TSTypeReference",
                        "start": 6455,
                        "end": 6456,
                        "typeName": {
                          "type": "Identifier",
                          "start": 6455,
                          "end": 6456,
                          "name": "K",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "indexType": {
                      "type": "TSTypeReference",
                      "start": 6458,
                      "end": 6459,
                      "typeName": {
                        "type": "Identifier",
                        "start": 6458,
                        "end": 6459,
                        "name": "N",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  {
                    "type": "TSIndexedAccessType",
                    "start": 6462,
                    "end": 6486,
                    "objectType": {
                      "type": "TSIndexedAccessType",
                      "start": 6462,
                      "end": 6483,
                      "objectType": {
                        "type": "TSTypeReference",
                        "start": 6462,
                        "end": 6480,
                        "typeName": {
                          "type": "Identifier",
                          "start": 6462,
                          "end": 6480,
                          "name": "MappedFromOriginal",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      },
                      "indexType": {
                        "type": "TSTypeReference",
                        "start": 6481,
                        "end": 6482,
                        "typeName": {
                          "type": "Identifier",
                          "start": 6481,
                          "end": 6482,
                          "name": "K",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "indexType": {
                      "type": "TSTypeReference",
                      "start": 6484,
                      "end": 6485,
                      "typeName": {
                        "type": "Identifier",
                        "start": 6484,
                        "end": 6485,
                        "name": "N",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  }
                ]
              }
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 6591,
      "end": 6647,
      "id": {
        "type": "Identifier",
        "start": 6601,
        "end": 6607,
        "name": "Config",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 6608,
        "end": 6647,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 6612,
            "end": 6627,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 6612,
              "end": 6618,
              "name": "string",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 6618,
              "end": 6626,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 6620,
                "end": 6626
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 6630,
            "end": 6645,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 6630,
              "end": 6636,
              "name": "number",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 6636,
              "end": 6644,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 6638,
                "end": 6644
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
      "start": 6649,
      "end": 6910,
      "id": {
        "type": "Identifier",
        "start": 6658,
        "end": 6676,
        "name": "getConfigOrDefault",
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
          "start": 6704,
          "end": 6731,
          "name": "userConfig",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 6714,
            "end": 6731,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 6716,
              "end": 6731,
              "typeName": {
                "type": "Identifier",
                "start": 6716,
                "end": 6723,
                "name": "Partial",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 6723,
                "end": 6731,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 6724,
                    "end": 6730,
                    "typeName": {
                      "type": "Identifier",
                      "start": 6724,
                      "end": 6730,
                      "name": "Config",
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
          "start": 6735,
          "end": 6741,
          "name": "key",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 6738,
            "end": 6741,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 6740,
              "end": 6741,
              "typeName": {
                "type": "Identifier",
                "start": 6740,
                "end": 6741,
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
          "start": 6745,
          "end": 6768,
          "name": "defaultValue",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 6757,
            "end": 6768,
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "start": 6759,
              "end": 6768,
              "objectType": {
                "type": "TSTypeReference",
                "start": 6759,
                "end": 6765,
                "typeName": {
                  "type": "Identifier",
                  "start": 6759,
                  "end": 6765,
                  "name": "Config",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              "indexType": {
                "type": "TSTypeReference",
                "start": 6766,
                "end": 6767,
                "typeName": {
                  "type": "Identifier",
                  "start": 6766,
                  "end": 6767,
                  "name": "T",
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
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 6782,
        "end": 6910,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 6786,
            "end": 6820,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 6792,
                "end": 6819,
                "id": {
                  "type": "Identifier",
                  "start": 6792,
                  "end": 6801,
                  "name": "userValue",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 6804,
                  "end": 6819,
                  "object": {
                    "type": "Identifier",
                    "start": 6804,
                    "end": 6814,
                    "name": "userConfig",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 6815,
                    "end": 6818,
                    "name": "key",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": true,
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
            "start": 6824,
            "end": 6884,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 6830,
                "end": 6883,
                "id": {
                  "type": "Identifier",
                  "start": 6830,
                  "end": 6843,
                  "name": "assertedCheck",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 6846,
                  "end": 6883,
                  "test": {
                    "type": "Identifier",
                    "start": 6846,
                    "end": 6855,
                    "name": "userValue",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "consequent": {
                    "type": "TSNonNullExpression",
                    "start": 6858,
                    "end": 6868,
                    "expression": {
                      "type": "Identifier",
                      "start": 6858,
                      "end": 6867,
                      "name": "userValue",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "alternate": {
                    "type": "Identifier",
                    "start": 6871,
                    "end": 6883,
                    "name": "defaultValue",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "ReturnStatement",
            "start": 6887,
            "end": 6908,
            "argument": {
              "type": "Identifier",
              "start": 6894,
              "end": 6907,
              "name": "assertedCheck",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 6676,
        "end": 6700,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 6677,
            "end": 6699,
            "name": {
              "type": "Identifier",
              "start": 6677,
              "end": 6678,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 6687,
              "end": 6699,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 6693,
                "end": 6699,
                "typeName": {
                  "type": "Identifier",
                  "start": 6693,
                  "end": 6699,
                  "name": "Config",
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
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 6770,
        "end": 6781,
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "start": 6772,
          "end": 6781,
          "objectType": {
            "type": "TSTypeReference",
            "start": 6772,
            "end": 6778,
            "typeName": {
              "type": "Identifier",
              "start": 6772,
              "end": 6778,
              "name": "Config",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          "indexType": {
            "type": "TSTypeReference",
            "start": 6779,
            "end": 6780,
            "typeName": {
              "type": "Identifier",
              "start": 6779,
              "end": 6780,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 6934,
      "end": 6976,
      "id": {
        "type": "Identifier",
        "start": 6939,
        "end": 6943,
        "name": "Foo1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 6946,
        "end": 6975,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 6950,
            "end": 6960,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 6950,
              "end": 6951,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 6951,
              "end": 6959,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 6953,
                "end": 6959
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 6963,
            "end": 6973,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 6963,
              "end": 6964,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 6964,
              "end": 6972,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 6966,
                "end": 6972
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
      "start": 6978,
      "end": 7095,
      "id": {
        "type": "Identifier",
        "start": 6987,
        "end": 7003,
        "name": "getValueConcrete",
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
          "start": 7029,
          "end": 7045,
          "name": "o",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 7030,
            "end": 7045,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 7032,
              "end": 7045,
              "typeName": {
                "type": "Identifier",
                "start": 7032,
                "end": 7039,
                "name": "Partial",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 7039,
                "end": 7045,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 7040,
                    "end": 7044,
                    "typeName": {
                      "type": "Identifier",
                      "start": 7040,
                      "end": 7044,
                      "name": "Foo1",
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
          "start": 7049,
          "end": 7053,
          "name": "k",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 7050,
            "end": 7053,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 7052,
              "end": 7053,
              "typeName": {
                "type": "Identifier",
                "start": 7052,
                "end": 7053,
                "name": "K",
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
        "start": 7077,
        "end": 7095,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 7081,
            "end": 7093,
            "argument": {
              "type": "MemberExpression",
              "start": 7088,
              "end": 7092,
              "object": {
                "type": "Identifier",
                "start": 7088,
                "end": 7089,
                "name": "o",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 7090,
                "end": 7091,
                "name": "k",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": true,
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 7003,
        "end": 7025,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 7004,
            "end": 7024,
            "name": {
              "type": "Identifier",
              "start": 7004,
              "end": 7005,
              "name": "K",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 7014,
              "end": 7024,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 7020,
                "end": 7024,
                "typeName": {
                  "type": "Identifier",
                  "start": 7020,
                  "end": 7024,
                  "name": "Foo1",
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
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 7055,
        "end": 7076,
        "typeAnnotation": {
          "type": "TSUnionType",
          "start": 7057,
          "end": 7076,
          "types": [
            {
              "type": "TSIndexedAccessType",
              "start": 7057,
              "end": 7064,
              "objectType": {
                "type": "TSTypeReference",
                "start": 7057,
                "end": 7061,
                "typeName": {
                  "type": "Identifier",
                  "start": 7057,
                  "end": 7061,
                  "name": "Foo1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              "indexType": {
                "type": "TSTypeReference",
                "start": 7062,
                "end": 7063,
                "typeName": {
                  "type": "Identifier",
                  "start": 7062,
                  "end": 7063,
                  "name": "K",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            {
              "type": "TSUndefinedKeyword",
              "start": 7067,
              "end": 7076
            }
          ]
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
