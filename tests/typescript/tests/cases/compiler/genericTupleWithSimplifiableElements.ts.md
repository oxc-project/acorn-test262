__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 416,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 22,
      "end": 40,
      "id": {
        "type": "Identifier",
        "start": 27,
        "end": 30,
        "decorators": [],
        "name": "SS1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSStringKeyword",
        "start": 33,
        "end": 39
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 41,
      "end": 116,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 45,
          "end": 115,
          "id": {
            "type": "Identifier",
            "start": 45,
            "end": 102,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 46,
              "end": 102,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 48,
                "end": 102,
                "elementTypes": [
                  {
                    "type": "TSNamedTupleMember",
                    "start": 49,
                    "end": 57,
                    "label": {
                      "type": "Identifier",
                      "start": 49,
                      "end": 50,
                      "decorators": [],
                      "name": "t",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "elementType": {
                      "type": "TSLiteralType",
                      "start": 52,
                      "end": 57,
                      "literal": {
                        "type": "Literal",
                        "start": 52,
                        "end": 57,
                        "value": "AAA",
                        "raw": "\"AAA\""
                      }
                    },
                    "optional": false
                  },
                  {
                    "type": "TSRestType",
                    "start": 59,
                    "end": 101,
                    "typeAnnotation": {
                      "type": "TSNamedTupleMember",
                      "start": 62,
                      "end": 101,
                      "label": {
                        "type": "Identifier",
                        "start": 62,
                        "end": 66,
                        "decorators": [],
                        "name": "args",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "elementType": {
                        "type": "TSIndexedAccessType",
                        "start": 68,
                        "end": 101,
                        "objectType": {
                          "type": "TSMappedType",
                          "start": 68,
                          "end": 96,
                          "key": {
                            "type": "Identifier",
                            "start": 71,
                            "end": 72,
                            "decorators": [],
                            "name": "S",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "start": 76,
                            "end": 79,
                            "typeName": {
                              "type": "Identifier",
                              "start": 76,
                              "end": 79,
                              "decorators": [],
                              "name": "SS1",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          },
                          "nameType": null,
                          "typeAnnotation": {
                            "type": "TSTupleType",
                            "start": 82,
                            "end": 93,
                            "elementTypes": [
                              {
                                "type": "TSNamedTupleMember",
                                "start": 83,
                                "end": 92,
                                "label": {
                                  "type": "Identifier",
                                  "start": 83,
                                  "end": 84,
                                  "decorators": [],
                                  "name": "a",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "elementType": {
                                  "type": "TSNumberKeyword",
                                  "start": 86,
                                  "end": 92
                                },
                                "optional": false
                              }
                            ]
                          },
                          "optional": false,
                          "readonly": null
                        },
                        "indexType": {
                          "type": "TSTypeReference",
                          "start": 97,
                          "end": 100,
                          "typeName": {
                            "type": "Identifier",
                            "start": 97,
                            "end": 100,
                            "decorators": [],
                            "name": "SS1",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      },
                      "optional": false
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 105,
            "end": 115,
            "elements": [
              {
                "type": "Literal",
                "start": 106,
                "end": 111,
                "value": "AAA",
                "raw": "\"AAA\""
              },
              {
                "type": "Literal",
                "start": 113,
                "end": 114,
                "value": 1,
                "raw": "1"
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 118,
      "end": 145,
      "id": {
        "type": "Identifier",
        "start": 123,
        "end": 126,
        "decorators": [],
        "name": "SS2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 129,
        "end": 144,
        "types": [
          {
            "type": "TSLiteralType",
            "start": 129,
            "end": 132,
            "literal": {
              "type": "Literal",
              "start": 129,
              "end": 132,
              "value": "1",
              "raw": "\"1\""
            }
          },
          {
            "type": "TSLiteralType",
            "start": 135,
            "end": 138,
            "literal": {
              "type": "Literal",
              "start": 135,
              "end": 138,
              "value": "2",
              "raw": "\"2\""
            }
          },
          {
            "type": "TSLiteralType",
            "start": 141,
            "end": 144,
            "literal": {
              "type": "Literal",
              "start": 141,
              "end": 144,
              "value": "3",
              "raw": "\"3\""
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 146,
      "end": 221,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 150,
          "end": 220,
          "id": {
            "type": "Identifier",
            "start": 150,
            "end": 207,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 151,
              "end": 207,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 153,
                "end": 207,
                "elementTypes": [
                  {
                    "type": "TSNamedTupleMember",
                    "start": 154,
                    "end": 162,
                    "label": {
                      "type": "Identifier",
                      "start": 154,
                      "end": 155,
                      "decorators": [],
                      "name": "t",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "elementType": {
                      "type": "TSLiteralType",
                      "start": 157,
                      "end": 162,
                      "literal": {
                        "type": "Literal",
                        "start": 157,
                        "end": 162,
                        "value": "AAA",
                        "raw": "\"AAA\""
                      }
                    },
                    "optional": false
                  },
                  {
                    "type": "TSRestType",
                    "start": 164,
                    "end": 206,
                    "typeAnnotation": {
                      "type": "TSNamedTupleMember",
                      "start": 167,
                      "end": 206,
                      "label": {
                        "type": "Identifier",
                        "start": 167,
                        "end": 171,
                        "decorators": [],
                        "name": "args",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "elementType": {
                        "type": "TSIndexedAccessType",
                        "start": 173,
                        "end": 206,
                        "objectType": {
                          "type": "TSMappedType",
                          "start": 173,
                          "end": 201,
                          "key": {
                            "type": "Identifier",
                            "start": 176,
                            "end": 177,
                            "decorators": [],
                            "name": "S",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "start": 181,
                            "end": 184,
                            "typeName": {
                              "type": "Identifier",
                              "start": 181,
                              "end": 184,
                              "decorators": [],
                              "name": "SS2",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          },
                          "nameType": null,
                          "typeAnnotation": {
                            "type": "TSTupleType",
                            "start": 187,
                            "end": 198,
                            "elementTypes": [
                              {
                                "type": "TSNamedTupleMember",
                                "start": 188,
                                "end": 197,
                                "label": {
                                  "type": "Identifier",
                                  "start": 188,
                                  "end": 189,
                                  "decorators": [],
                                  "name": "a",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "elementType": {
                                  "type": "TSNumberKeyword",
                                  "start": 191,
                                  "end": 197
                                },
                                "optional": false
                              }
                            ]
                          },
                          "optional": false,
                          "readonly": null
                        },
                        "indexType": {
                          "type": "TSTypeReference",
                          "start": 202,
                          "end": 205,
                          "typeName": {
                            "type": "Identifier",
                            "start": 202,
                            "end": 205,
                            "decorators": [],
                            "name": "SS2",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      },
                      "optional": false
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 210,
            "end": 220,
            "elements": [
              {
                "type": "Literal",
                "start": 211,
                "end": 216,
                "value": "AAA",
                "raw": "\"AAA\""
              },
              {
                "type": "Literal",
                "start": 218,
                "end": 219,
                "value": 1,
                "raw": "1"
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 223,
      "end": 416,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 229,
        "end": 230,
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 230,
        "end": 249,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 231,
            "end": 248,
            "name": {
              "type": "Identifier",
              "start": 231,
              "end": 233,
              "decorators": [],
              "name": "SS",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 242,
              "end": 248
            },
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
        "start": 249,
        "end": 416,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 255,
            "end": 414,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 255,
              "end": 256,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 256,
              "end": 414,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 259,
                "end": 414,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 269,
                    "end": 325,
                    "kind": "let",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 273,
                        "end": 324,
                        "id": {
                          "type": "Identifier",
                          "start": 273,
                          "end": 318,
                          "decorators": [],
                          "name": "w",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 274,
                            "end": 318,
                            "typeAnnotation": {
                              "type": "TSTupleType",
                              "start": 276,
                              "end": 318,
                              "elementTypes": [
                                {
                                  "type": "TSRestType",
                                  "start": 277,
                                  "end": 317,
                                  "typeAnnotation": {
                                    "type": "TSNamedTupleMember",
                                    "start": 280,
                                    "end": 317,
                                    "label": {
                                      "type": "Identifier",
                                      "start": 280,
                                      "end": 284,
                                      "decorators": [],
                                      "name": "args",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "elementType": {
                                      "type": "TSIndexedAccessType",
                                      "start": 286,
                                      "end": 317,
                                      "objectType": {
                                        "type": "TSMappedType",
                                        "start": 286,
                                        "end": 313,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 289,
                                          "end": 290,
                                          "decorators": [],
                                          "name": "S",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "constraint": {
                                          "type": "TSTypeReference",
                                          "start": 294,
                                          "end": 296,
                                          "typeName": {
                                            "type": "Identifier",
                                            "start": 294,
                                            "end": 296,
                                            "decorators": [],
                                            "name": "SS",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "typeArguments": null
                                        },
                                        "nameType": null,
                                        "typeAnnotation": {
                                          "type": "TSTupleType",
                                          "start": 299,
                                          "end": 310,
                                          "elementTypes": [
                                            {
                                              "type": "TSNamedTupleMember",
                                              "start": 300,
                                              "end": 309,
                                              "label": {
                                                "type": "Identifier",
                                                "start": 300,
                                                "end": 301,
                                                "decorators": [],
                                                "name": "a",
                                                "optional": false,
                                                "typeAnnotation": null
                                              },
                                              "elementType": {
                                                "type": "TSNumberKeyword",
                                                "start": 303,
                                                "end": 309
                                              },
                                              "optional": false
                                            }
                                          ]
                                        },
                                        "optional": false,
                                        "readonly": null
                                      },
                                      "indexType": {
                                        "type": "TSTypeReference",
                                        "start": 314,
                                        "end": 316,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 314,
                                          "end": 316,
                                          "decorators": [],
                                          "name": "SS",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "typeArguments": null
                                      }
                                    },
                                    "optional": false
                                  }
                                }
                              ]
                            }
                          }
                        },
                        "init": {
                          "type": "ArrayExpression",
                          "start": 321,
                          "end": 324,
                          "elements": [
                            {
                              "type": "Literal",
                              "start": 322,
                              "end": 323,
                              "value": 1,
                              "raw": "1"
                            }
                          ]
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 335,
                    "end": 408,
                    "kind": "let",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 339,
                        "end": 407,
                        "id": {
                          "type": "Identifier",
                          "start": 339,
                          "end": 394,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 340,
                            "end": 394,
                            "typeAnnotation": {
                              "type": "TSTupleType",
                              "start": 342,
                              "end": 394,
                              "elementTypes": [
                                {
                                  "type": "TSNamedTupleMember",
                                  "start": 343,
                                  "end": 351,
                                  "label": {
                                    "type": "Identifier",
                                    "start": 343,
                                    "end": 344,
                                    "decorators": [],
                                    "name": "t",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "elementType": {
                                    "type": "TSLiteralType",
                                    "start": 346,
                                    "end": 351,
                                    "literal": {
                                      "type": "Literal",
                                      "start": 346,
                                      "end": 351,
                                      "value": "AAA",
                                      "raw": "\"AAA\""
                                    }
                                  },
                                  "optional": false
                                },
                                {
                                  "type": "TSRestType",
                                  "start": 353,
                                  "end": 393,
                                  "typeAnnotation": {
                                    "type": "TSNamedTupleMember",
                                    "start": 356,
                                    "end": 393,
                                    "label": {
                                      "type": "Identifier",
                                      "start": 356,
                                      "end": 360,
                                      "decorators": [],
                                      "name": "args",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "elementType": {
                                      "type": "TSIndexedAccessType",
                                      "start": 362,
                                      "end": 393,
                                      "objectType": {
                                        "type": "TSMappedType",
                                        "start": 362,
                                        "end": 389,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 365,
                                          "end": 366,
                                          "decorators": [],
                                          "name": "S",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "constraint": {
                                          "type": "TSTypeReference",
                                          "start": 370,
                                          "end": 372,
                                          "typeName": {
                                            "type": "Identifier",
                                            "start": 370,
                                            "end": 372,
                                            "decorators": [],
                                            "name": "SS",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "typeArguments": null
                                        },
                                        "nameType": null,
                                        "typeAnnotation": {
                                          "type": "TSTupleType",
                                          "start": 375,
                                          "end": 386,
                                          "elementTypes": [
                                            {
                                              "type": "TSNamedTupleMember",
                                              "start": 376,
                                              "end": 385,
                                              "label": {
                                                "type": "Identifier",
                                                "start": 376,
                                                "end": 377,
                                                "decorators": [],
                                                "name": "a",
                                                "optional": false,
                                                "typeAnnotation": null
                                              },
                                              "elementType": {
                                                "type": "TSNumberKeyword",
                                                "start": 379,
                                                "end": 385
                                              },
                                              "optional": false
                                            }
                                          ]
                                        },
                                        "optional": false,
                                        "readonly": null
                                      },
                                      "indexType": {
                                        "type": "TSTypeReference",
                                        "start": 390,
                                        "end": 392,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 390,
                                          "end": 392,
                                          "decorators": [],
                                          "name": "SS",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "typeArguments": null
                                      }
                                    },
                                    "optional": false
                                  }
                                }
                              ]
                            }
                          }
                        },
                        "init": {
                          "type": "ArrayExpression",
                          "start": 397,
                          "end": 407,
                          "elements": [
                            {
                              "type": "Literal",
                              "start": 398,
                              "end": 403,
                              "value": "AAA",
                              "raw": "\"AAA\""
                            },
                            {
                              "type": "Literal",
                              "start": 405,
                              "end": 406,
                              "value": 1,
                              "raw": "1"
                            }
                          ]
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
