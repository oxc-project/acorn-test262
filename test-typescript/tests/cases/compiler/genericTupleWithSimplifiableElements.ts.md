__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 417,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 22,
      "end": 40,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 27,
        "end": 30,
        "decorators": [],
        "name": "SS1",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSStringKeyword",
        "start": 33,
        "end": 39
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 41,
      "end": 116,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 45,
          "end": 115,
          "definite": false,
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
                    "elementType": {
                      "type": "TSLiteralType",
                      "start": 52,
                      "end": 57,
                      "literal": {
                        "type": "Literal",
                        "start": 52,
                        "end": 57,
                        "raw": "\"AAA\"",
                        "value": "AAA"
                      }
                    },
                    "label": {
                      "type": "Identifier",
                      "start": 49,
                      "end": 50,
                      "decorators": [],
                      "name": "t",
                      "optional": false
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
                      "elementType": {
                        "type": "TSIndexedAccessType",
                        "start": 68,
                        "end": 101,
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
                            "optional": false
                          }
                        },
                        "objectType": {
                          "type": "TSMappedType",
                          "start": 68,
                          "end": 96,
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
                              "optional": false
                            }
                          },
                          "key": {
                            "type": "Identifier",
                            "start": 71,
                            "end": 72,
                            "decorators": [],
                            "name": "S",
                            "optional": false
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
                                "elementType": {
                                  "type": "TSNumberKeyword",
                                  "start": 86,
                                  "end": 92
                                },
                                "label": {
                                  "type": "Identifier",
                                  "start": 83,
                                  "end": 84,
                                  "decorators": [],
                                  "name": "a",
                                  "optional": false
                                },
                                "optional": false
                              }
                            ]
                          }
                        }
                      },
                      "label": {
                        "type": "Identifier",
                        "start": 62,
                        "end": 66,
                        "decorators": [],
                        "name": "args",
                        "optional": false
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
                "raw": "\"AAA\"",
                "value": "AAA"
              },
              {
                "type": "Literal",
                "start": 113,
                "end": 114,
                "raw": "1",
                "value": 1
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 118,
      "end": 145,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 123,
        "end": 126,
        "decorators": [],
        "name": "SS2",
        "optional": false
      },
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
              "raw": "\"1\"",
              "value": "1"
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
              "raw": "\"2\"",
              "value": "2"
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
              "raw": "\"3\"",
              "value": "3"
            }
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 146,
      "end": 221,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 150,
          "end": 220,
          "definite": false,
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
                    "elementType": {
                      "type": "TSLiteralType",
                      "start": 157,
                      "end": 162,
                      "literal": {
                        "type": "Literal",
                        "start": 157,
                        "end": 162,
                        "raw": "\"AAA\"",
                        "value": "AAA"
                      }
                    },
                    "label": {
                      "type": "Identifier",
                      "start": 154,
                      "end": 155,
                      "decorators": [],
                      "name": "t",
                      "optional": false
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
                      "elementType": {
                        "type": "TSIndexedAccessType",
                        "start": 173,
                        "end": 206,
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
                            "optional": false
                          }
                        },
                        "objectType": {
                          "type": "TSMappedType",
                          "start": 173,
                          "end": 201,
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
                              "optional": false
                            }
                          },
                          "key": {
                            "type": "Identifier",
                            "start": 176,
                            "end": 177,
                            "decorators": [],
                            "name": "S",
                            "optional": false
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
                                "elementType": {
                                  "type": "TSNumberKeyword",
                                  "start": 191,
                                  "end": 197
                                },
                                "label": {
                                  "type": "Identifier",
                                  "start": 188,
                                  "end": 189,
                                  "decorators": [],
                                  "name": "a",
                                  "optional": false
                                },
                                "optional": false
                              }
                            ]
                          }
                        }
                      },
                      "label": {
                        "type": "Identifier",
                        "start": 167,
                        "end": 171,
                        "decorators": [],
                        "name": "args",
                        "optional": false
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
                "raw": "\"AAA\"",
                "value": "AAA"
              },
              {
                "type": "Literal",
                "start": 218,
                "end": 219,
                "raw": "1",
                "value": 1
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ClassDeclaration",
      "start": 223,
      "end": 416,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 249,
        "end": 416,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 255,
            "end": 414,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 255,
              "end": 256,
              "decorators": [],
              "name": "f",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 256,
              "end": 414,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 259,
                "end": 414,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 269,
                    "end": 325,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 273,
                        "end": 324,
                        "definite": false,
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
                                    "elementType": {
                                      "type": "TSIndexedAccessType",
                                      "start": 286,
                                      "end": 317,
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
                                          "optional": false
                                        }
                                      },
                                      "objectType": {
                                        "type": "TSMappedType",
                                        "start": 286,
                                        "end": 313,
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
                                            "optional": false
                                          }
                                        },
                                        "key": {
                                          "type": "Identifier",
                                          "start": 289,
                                          "end": 290,
                                          "decorators": [],
                                          "name": "S",
                                          "optional": false
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
                                              "elementType": {
                                                "type": "TSNumberKeyword",
                                                "start": 303,
                                                "end": 309
                                              },
                                              "label": {
                                                "type": "Identifier",
                                                "start": 300,
                                                "end": 301,
                                                "decorators": [],
                                                "name": "a",
                                                "optional": false
                                              },
                                              "optional": false
                                            }
                                          ]
                                        }
                                      }
                                    },
                                    "label": {
                                      "type": "Identifier",
                                      "start": 280,
                                      "end": 284,
                                      "decorators": [],
                                      "name": "args",
                                      "optional": false
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
                              "raw": "1",
                              "value": 1
                            }
                          ]
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "let"
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 335,
                    "end": 408,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 339,
                        "end": 407,
                        "definite": false,
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
                                  "elementType": {
                                    "type": "TSLiteralType",
                                    "start": 346,
                                    "end": 351,
                                    "literal": {
                                      "type": "Literal",
                                      "start": 346,
                                      "end": 351,
                                      "raw": "\"AAA\"",
                                      "value": "AAA"
                                    }
                                  },
                                  "label": {
                                    "type": "Identifier",
                                    "start": 343,
                                    "end": 344,
                                    "decorators": [],
                                    "name": "t",
                                    "optional": false
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
                                    "elementType": {
                                      "type": "TSIndexedAccessType",
                                      "start": 362,
                                      "end": 393,
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
                                          "optional": false
                                        }
                                      },
                                      "objectType": {
                                        "type": "TSMappedType",
                                        "start": 362,
                                        "end": 389,
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
                                            "optional": false
                                          }
                                        },
                                        "key": {
                                          "type": "Identifier",
                                          "start": 365,
                                          "end": 366,
                                          "decorators": [],
                                          "name": "S",
                                          "optional": false
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
                                              "elementType": {
                                                "type": "TSNumberKeyword",
                                                "start": 379,
                                                "end": 385
                                              },
                                              "label": {
                                                "type": "Identifier",
                                                "start": 376,
                                                "end": 377,
                                                "decorators": [],
                                                "name": "a",
                                                "optional": false
                                              },
                                              "optional": false
                                            }
                                          ]
                                        }
                                      }
                                    },
                                    "label": {
                                      "type": "Identifier",
                                      "start": 356,
                                      "end": 360,
                                      "decorators": [],
                                      "name": "args",
                                      "optional": false
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
                              "raw": "\"AAA\"",
                              "value": "AAA"
                            },
                            {
                              "type": "Literal",
                              "start": 405,
                              "end": 406,
                              "raw": "1",
                              "value": 1
                            }
                          ]
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "let"
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 229,
        "end": 230,
        "decorators": [],
        "name": "I",
        "optional": false
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 230,
        "end": 249,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 231,
            "end": 248,
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "start": 242,
              "end": 248
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 231,
              "end": 233,
              "decorators": [],
              "name": "SS",
              "optional": false
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
