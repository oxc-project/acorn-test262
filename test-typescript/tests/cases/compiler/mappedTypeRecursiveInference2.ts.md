__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 573,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 37,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 15,
        "decorators": [],
        "name": "MorphTuple",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTupleType",
        "start": 18,
        "end": 37,
        "elementTypes": [
          {
            "type": "TSStringKeyword",
            "start": 19,
            "end": 25
          },
          {
            "type": "TSLiteralType",
            "start": 27,
            "end": 31,
            "literal": {
              "type": "Literal",
              "start": 27,
              "end": 31,
              "raw": "\"|>\"",
              "value": "|>"
            }
          },
          {
            "type": "TSAnyKeyword",
            "start": 33,
            "end": 36
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 39,
      "end": 179,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 44,
        "end": 57,
        "decorators": [],
        "name": "validateMorph",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 84,
        "end": 179,
        "checkType": {
          "type": "TSIndexedAccessType",
          "start": 84,
          "end": 90,
          "indexType": {
            "type": "TSLiteralType",
            "start": 88,
            "end": 89,
            "literal": {
              "type": "Literal",
              "start": 88,
              "end": 89,
              "raw": "1",
              "value": 1
            }
          },
          "objectType": {
            "type": "TSTypeReference",
            "start": 84,
            "end": 87,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 84,
              "end": 87,
              "decorators": [],
              "name": "def",
              "optional": false,
              "typeAnnotation": null
            }
          }
        },
        "extendsType": {
          "type": "TSLiteralType",
          "start": 99,
          "end": 103,
          "literal": {
            "type": "Literal",
            "start": 99,
            "end": 103,
            "raw": "\"|>\"",
            "value": "|>"
          }
        },
        "falseType": {
          "type": "TSTypeReference",
          "start": 176,
          "end": 179,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 176,
            "end": 179,
            "decorators": [],
            "name": "def",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "trueType": {
          "type": "TSTupleType",
          "start": 110,
          "end": 169,
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "start": 111,
              "end": 137,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 129,
                "end": 137,
                "params": [
                  {
                    "type": "TSIndexedAccessType",
                    "start": 130,
                    "end": 136,
                    "indexType": {
                      "type": "TSLiteralType",
                      "start": 134,
                      "end": 135,
                      "literal": {
                        "type": "Literal",
                        "start": 134,
                        "end": 135,
                        "raw": "0",
                        "value": 0
                      }
                    },
                    "objectType": {
                      "type": "TSTypeReference",
                      "start": 130,
                      "end": 133,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 130,
                        "end": 133,
                        "decorators": [],
                        "name": "def",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 111,
                "end": 129,
                "decorators": [],
                "name": "validateDefinition",
                "optional": false,
                "typeAnnotation": null
              }
            },
            {
              "type": "TSLiteralType",
              "start": 139,
              "end": 143,
              "literal": {
                "type": "Literal",
                "start": 139,
                "end": 143,
                "raw": "\"|>\"",
                "value": "|>"
              }
            },
            {
              "type": "TSFunctionType",
              "start": 145,
              "end": 168,
              "params": [
                {
                  "type": "Identifier",
                  "start": 146,
                  "end": 156,
                  "decorators": [],
                  "name": "In",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 148,
                    "end": 156,
                    "typeAnnotation": {
                      "type": "TSIndexedAccessType",
                      "start": 150,
                      "end": 156,
                      "indexType": {
                        "type": "TSLiteralType",
                        "start": 154,
                        "end": 155,
                        "literal": {
                          "type": "Literal",
                          "start": 154,
                          "end": 155,
                          "raw": "0",
                          "value": 0
                        }
                      },
                      "objectType": {
                        "type": "TSTypeReference",
                        "start": 150,
                        "end": 153,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 150,
                          "end": 153,
                          "decorators": [],
                          "name": "def",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 158,
                "end": 168,
                "typeAnnotation": {
                  "type": "TSUnknownKeyword",
                  "start": 161,
                  "end": 168
                }
              },
              "typeParameters": null
            }
          ]
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 57,
        "end": 81,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 58,
            "end": 80,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 70,
              "end": 80,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 70,
                "end": 80,
                "decorators": [],
                "name": "MorphTuple",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 58,
              "end": 61,
              "decorators": [],
              "name": "def",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 181,
      "end": 330,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 186,
        "end": 204,
        "decorators": [],
        "name": "validateDefinition",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 212,
        "end": 330,
        "checkType": {
          "type": "TSTypeReference",
          "start": 212,
          "end": 215,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 212,
            "end": 215,
            "decorators": [],
            "name": "def",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "extendsType": {
          "type": "TSTypeReference",
          "start": 224,
          "end": 234,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 224,
            "end": 234,
            "decorators": [],
            "name": "MorphTuple",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "falseType": {
          "type": "TSMappedType",
          "start": 266,
          "end": 330,
          "constraint": {
            "type": "TSTypeOperator",
            "start": 284,
            "end": 293,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 290,
              "end": 293,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 290,
                "end": 293,
                "decorators": [],
                "name": "def",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          "key": {
            "type": "Identifier",
            "start": 279,
            "end": 280,
            "decorators": [],
            "name": "k",
            "optional": false,
            "typeAnnotation": null
          },
          "nameType": null,
          "optional": null,
          "readonly": null,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 296,
            "end": 322,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 314,
              "end": 322,
              "params": [
                {
                  "type": "TSIndexedAccessType",
                  "start": 315,
                  "end": 321,
                  "indexType": {
                    "type": "TSTypeReference",
                    "start": 319,
                    "end": 320,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 319,
                      "end": 320,
                      "decorators": [],
                      "name": "k",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "objectType": {
                    "type": "TSTypeReference",
                    "start": 315,
                    "end": 318,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 315,
                      "end": 318,
                      "decorators": [],
                      "name": "def",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "typeName": {
              "type": "Identifier",
              "start": 296,
              "end": 314,
              "decorators": [],
              "name": "validateDefinition",
              "optional": false,
              "typeAnnotation": null
            }
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 241,
          "end": 259,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 254,
            "end": 259,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 255,
                "end": 258,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 255,
                  "end": 258,
                  "decorators": [],
                  "name": "def",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 241,
            "end": 254,
            "decorators": [],
            "name": "validateMorph",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 204,
        "end": 209,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 205,
            "end": 208,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 205,
              "end": 208,
              "decorators": [],
              "name": "def",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 332,
      "end": 393,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 349,
        "end": 353,
        "decorators": [],
        "name": "type",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 359,
          "end": 387,
          "decorators": [],
          "name": "def",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 362,
            "end": 387,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 364,
              "end": 387,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 382,
                "end": 387,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 383,
                    "end": 386,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 383,
                      "end": 386,
                      "decorators": [],
                      "name": "def",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 364,
                "end": 382,
                "decorators": [],
                "name": "validateDefinition",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 388,
        "end": 393,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 390,
          "end": 393,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 390,
            "end": 393,
            "decorators": [],
            "name": "def",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 353,
        "end": 358,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 354,
            "end": 357,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 354,
              "end": 357,
              "decorators": [],
              "name": "def",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 395,
      "end": 447,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 401,
          "end": 447,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 401,
            "end": 408,
            "decorators": [],
            "name": "shallow",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 411,
            "end": 447,
            "arguments": [
              {
                "type": "ArrayExpression",
                "start": 416,
                "end": 446,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 417,
                    "end": 422,
                    "raw": "\"ark\"",
                    "value": "ark"
                  },
                  {
                    "type": "Literal",
                    "start": 424,
                    "end": 428,
                    "raw": "\"|>\"",
                    "value": "|>"
                  },
                  {
                    "type": "ArrowFunctionExpression",
                    "start": 430,
                    "end": 445,
                    "async": false,
                    "body": {
                      "type": "MemberExpression",
                      "start": 437,
                      "end": 445,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 437,
                        "end": 438,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 439,
                        "end": 445,
                        "decorators": [],
                        "name": "length",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 431,
                        "end": 432,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "returnType": null,
                    "typeParameters": null
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 411,
              "end": 415,
              "decorators": [],
              "name": "type",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 448,
      "end": 513,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 454,
          "end": 513,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 454,
            "end": 467,
            "decorators": [],
            "name": "objectLiteral",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 470,
            "end": 513,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 475,
                "end": 512,
                "properties": [
                  {
                    "type": "Property",
                    "start": 477,
                    "end": 510,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 477,
                      "end": 478,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ArrayExpression",
                      "start": 480,
                      "end": 510,
                      "elements": [
                        {
                          "type": "Literal",
                          "start": 481,
                          "end": 486,
                          "raw": "\"ark\"",
                          "value": "ark"
                        },
                        {
                          "type": "Literal",
                          "start": 488,
                          "end": 492,
                          "raw": "\"|>\"",
                          "value": "|>"
                        },
                        {
                          "type": "ArrowFunctionExpression",
                          "start": 494,
                          "end": 509,
                          "async": false,
                          "body": {
                            "type": "MemberExpression",
                            "start": 501,
                            "end": 509,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 501,
                              "end": 502,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 503,
                              "end": 509,
                              "decorators": [],
                              "name": "length",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "expression": true,
                          "generator": false,
                          "id": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 495,
                              "end": 496,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          ],
                          "returnType": null,
                          "typeParameters": null
                        }
                      ]
                    }
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 470,
              "end": 474,
              "decorators": [],
              "name": "type",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 514,
      "end": 572,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 520,
          "end": 572,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 520,
            "end": 531,
            "decorators": [],
            "name": "nestedTuple",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 534,
            "end": 572,
            "arguments": [
              {
                "type": "ArrayExpression",
                "start": 539,
                "end": 571,
                "elements": [
                  {
                    "type": "ArrayExpression",
                    "start": 540,
                    "end": 570,
                    "elements": [
                      {
                        "type": "Literal",
                        "start": 541,
                        "end": 546,
                        "raw": "\"ark\"",
                        "value": "ark"
                      },
                      {
                        "type": "Literal",
                        "start": 548,
                        "end": 552,
                        "raw": "\"|>\"",
                        "value": "|>"
                      },
                      {
                        "type": "ArrowFunctionExpression",
                        "start": 554,
                        "end": 569,
                        "async": false,
                        "body": {
                          "type": "MemberExpression",
                          "start": 561,
                          "end": 569,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 561,
                            "end": 562,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 563,
                            "end": 569,
                            "decorators": [],
                            "name": "length",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "expression": true,
                        "generator": false,
                        "id": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 555,
                            "end": 556,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        ],
                        "returnType": null,
                        "typeParameters": null
                      }
                    ]
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 534,
              "end": 538,
              "decorators": [],
              "name": "type",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
