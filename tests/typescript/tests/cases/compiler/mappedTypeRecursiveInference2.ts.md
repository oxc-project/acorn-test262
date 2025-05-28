__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 572,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 37,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 15,
        "decorators": [],
        "name": "MorphTuple",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
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
              "value": "|>",
              "raw": "\"|>\""
            }
          },
          {
            "type": "TSAnyKeyword",
            "start": 33,
            "end": 36
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 39,
      "end": 179,
      "id": {
        "type": "Identifier",
        "start": 44,
        "end": 57,
        "decorators": [],
        "name": "validateMorph",
        "optional": false,
        "typeAnnotation": null
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
            "name": {
              "type": "Identifier",
              "start": 58,
              "end": 61,
              "decorators": [],
              "name": "def",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 70,
              "end": 80,
              "typeName": {
                "type": "Identifier",
                "start": 70,
                "end": 80,
                "decorators": [],
                "name": "MorphTuple",
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
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 84,
        "end": 179,
        "checkType": {
          "type": "TSIndexedAccessType",
          "start": 84,
          "end": 90,
          "objectType": {
            "type": "TSTypeReference",
            "start": 84,
            "end": 87,
            "typeName": {
              "type": "Identifier",
              "start": 84,
              "end": 87,
              "decorators": [],
              "name": "def",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          "indexType": {
            "type": "TSLiteralType",
            "start": 88,
            "end": 89,
            "literal": {
              "type": "Literal",
              "start": 88,
              "end": 89,
              "value": 1,
              "raw": "1"
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
            "value": "|>",
            "raw": "\"|>\""
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
              "typeName": {
                "type": "Identifier",
                "start": 111,
                "end": 129,
                "decorators": [],
                "name": "validateDefinition",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 129,
                "end": 137,
                "params": [
                  {
                    "type": "TSIndexedAccessType",
                    "start": 130,
                    "end": 136,
                    "objectType": {
                      "type": "TSTypeReference",
                      "start": 130,
                      "end": 133,
                      "typeName": {
                        "type": "Identifier",
                        "start": 130,
                        "end": 133,
                        "decorators": [],
                        "name": "def",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    },
                    "indexType": {
                      "type": "TSLiteralType",
                      "start": 134,
                      "end": 135,
                      "literal": {
                        "type": "Literal",
                        "start": 134,
                        "end": 135,
                        "value": 0,
                        "raw": "0"
                      }
                    }
                  }
                ]
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
                "value": "|>",
                "raw": "\"|>\""
              }
            },
            {
              "type": "TSFunctionType",
              "start": 145,
              "end": 168,
              "typeParameters": null,
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
                      "objectType": {
                        "type": "TSTypeReference",
                        "start": 150,
                        "end": 153,
                        "typeName": {
                          "type": "Identifier",
                          "start": 150,
                          "end": 153,
                          "decorators": [],
                          "name": "def",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      },
                      "indexType": {
                        "type": "TSLiteralType",
                        "start": 154,
                        "end": 155,
                        "literal": {
                          "type": "Literal",
                          "start": 154,
                          "end": 155,
                          "value": 0,
                          "raw": "0"
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
              }
            }
          ]
        },
        "falseType": {
          "type": "TSTypeReference",
          "start": 176,
          "end": 179,
          "typeName": {
            "type": "Identifier",
            "start": 176,
            "end": 179,
            "decorators": [],
            "name": "def",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 181,
      "end": 330,
      "id": {
        "type": "Identifier",
        "start": 186,
        "end": 204,
        "decorators": [],
        "name": "validateDefinition",
        "optional": false,
        "typeAnnotation": null
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
            "name": {
              "type": "Identifier",
              "start": 205,
              "end": 208,
              "decorators": [],
              "name": "def",
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
        "type": "TSConditionalType",
        "start": 212,
        "end": 330,
        "checkType": {
          "type": "TSTypeReference",
          "start": 212,
          "end": 215,
          "typeName": {
            "type": "Identifier",
            "start": 212,
            "end": 215,
            "decorators": [],
            "name": "def",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSTypeReference",
          "start": 224,
          "end": 234,
          "typeName": {
            "type": "Identifier",
            "start": 224,
            "end": 234,
            "decorators": [],
            "name": "MorphTuple",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 241,
          "end": 259,
          "typeName": {
            "type": "Identifier",
            "start": 241,
            "end": 254,
            "decorators": [],
            "name": "validateMorph",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 254,
            "end": 259,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 255,
                "end": 258,
                "typeName": {
                  "type": "Identifier",
                  "start": 255,
                  "end": 258,
                  "decorators": [],
                  "name": "def",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ]
          }
        },
        "falseType": {
          "type": "TSMappedType",
          "start": 266,
          "end": 330,
          "key": {
            "type": "Identifier",
            "start": 279,
            "end": 280,
            "decorators": [],
            "name": "k",
            "optional": false,
            "typeAnnotation": null
          },
          "constraint": {
            "type": "TSTypeOperator",
            "start": 284,
            "end": 293,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 290,
              "end": 293,
              "typeName": {
                "type": "Identifier",
                "start": 290,
                "end": 293,
                "decorators": [],
                "name": "def",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          },
          "nameType": null,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 296,
            "end": 322,
            "typeName": {
              "type": "Identifier",
              "start": 296,
              "end": 314,
              "decorators": [],
              "name": "validateDefinition",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 314,
              "end": 322,
              "params": [
                {
                  "type": "TSIndexedAccessType",
                  "start": 315,
                  "end": 321,
                  "objectType": {
                    "type": "TSTypeReference",
                    "start": 315,
                    "end": 318,
                    "typeName": {
                      "type": "Identifier",
                      "start": 315,
                      "end": 318,
                      "decorators": [],
                      "name": "def",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "start": 319,
                    "end": 320,
                    "typeName": {
                      "type": "Identifier",
                      "start": 319,
                      "end": 320,
                      "decorators": [],
                      "name": "k",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              ]
            }
          },
          "optional": false,
          "readonly": null
        }
      },
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 332,
      "end": 393,
      "id": {
        "type": "Identifier",
        "start": 349,
        "end": 353,
        "decorators": [],
        "name": "type",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 353,
        "end": 358,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 354,
            "end": 357,
            "name": {
              "type": "Identifier",
              "start": 354,
              "end": 357,
              "decorators": [],
              "name": "def",
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
              "typeName": {
                "type": "Identifier",
                "start": 364,
                "end": 382,
                "decorators": [],
                "name": "validateDefinition",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 382,
                "end": 387,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 383,
                    "end": 386,
                    "typeName": {
                      "type": "Identifier",
                      "start": 383,
                      "end": 386,
                      "decorators": [],
                      "name": "def",
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
        "start": 388,
        "end": 393,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 390,
          "end": 393,
          "typeName": {
            "type": "Identifier",
            "start": 390,
            "end": 393,
            "decorators": [],
            "name": "def",
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
      "start": 395,
      "end": 447,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 401,
          "end": 447,
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
            "callee": {
              "type": "Identifier",
              "start": 411,
              "end": 415,
              "decorators": [],
              "name": "type",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
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
                    "value": "ark",
                    "raw": "\"ark\""
                  },
                  {
                    "type": "Literal",
                    "start": 424,
                    "end": 428,
                    "value": "|>",
                    "raw": "\"|>\""
                  },
                  {
                    "type": "ArrowFunctionExpression",
                    "start": 430,
                    "end": 445,
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
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
                    "body": {
                      "type": "MemberExpression",
                      "start": 437,
                      "end": 445,
                      "object": {
                        "type": "Identifier",
                        "start": 437,
                        "end": 438,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 439,
                        "end": 445,
                        "decorators": [],
                        "name": "length",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "id": null,
                    "generator": false
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
      "start": 448,
      "end": 513,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 454,
          "end": 513,
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
            "callee": {
              "type": "Identifier",
              "start": 470,
              "end": 474,
              "decorators": [],
              "name": "type",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
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
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 477,
                      "end": 478,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "ArrayExpression",
                      "start": 480,
                      "end": 510,
                      "elements": [
                        {
                          "type": "Literal",
                          "start": 481,
                          "end": 486,
                          "value": "ark",
                          "raw": "\"ark\""
                        },
                        {
                          "type": "Literal",
                          "start": 488,
                          "end": 492,
                          "value": "|>",
                          "raw": "\"|>\""
                        },
                        {
                          "type": "ArrowFunctionExpression",
                          "start": 494,
                          "end": 509,
                          "expression": true,
                          "async": false,
                          "typeParameters": null,
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
                          "body": {
                            "type": "MemberExpression",
                            "start": 501,
                            "end": 509,
                            "object": {
                              "type": "Identifier",
                              "start": 501,
                              "end": 502,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 503,
                              "end": 509,
                              "decorators": [],
                              "name": "length",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
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
      "type": "VariableDeclaration",
      "start": 514,
      "end": 572,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 520,
          "end": 572,
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
            "callee": {
              "type": "Identifier",
              "start": 534,
              "end": 538,
              "decorators": [],
              "name": "type",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
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
                        "value": "ark",
                        "raw": "\"ark\""
                      },
                      {
                        "type": "Literal",
                        "start": 548,
                        "end": 552,
                        "value": "|>",
                        "raw": "\"|>\""
                      },
                      {
                        "type": "ArrowFunctionExpression",
                        "start": 554,
                        "end": 569,
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
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
                        "body": {
                          "type": "MemberExpression",
                          "start": 561,
                          "end": 569,
                          "object": {
                            "type": "Identifier",
                            "start": 561,
                            "end": 562,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 563,
                            "end": 569,
                            "decorators": [],
                            "name": "length",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
