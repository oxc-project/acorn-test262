__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 196,
  "end": 754,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 196,
      "end": 237,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 201,
        "end": 206,
        "decorators": [],
        "name": "Lower",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 212,
        "end": 236,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 220,
          "end": 227,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 226,
            "end": 227,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 226,
              "end": 227,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            }
          }
        },
        "key": {
          "type": "Identifier",
          "start": 215,
          "end": 216,
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null
        },
        "nameType": null,
        "optional": null,
        "readonly": null,
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "start": 230,
          "end": 234,
          "indexType": {
            "type": "TSTypeReference",
            "start": 232,
            "end": 233,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 232,
              "end": 233,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "objectType": {
            "type": "TSTypeReference",
            "start": 230,
            "end": 231,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 230,
              "end": 231,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 206,
        "end": 209,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 207,
            "end": 208,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 207,
              "end": 208,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 239,
      "end": 495,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 246,
        "end": 495,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 383,
          "end": 495,
          "body": [
            {
              "type": "VariableDeclaration",
              "start": 387,
              "end": 413,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 393,
                  "end": 412,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 393,
                    "end": 398,
                    "decorators": [],
                    "name": "array",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "MemberExpression",
                    "start": 401,
                    "end": 412,
                    "computed": true,
                    "object": {
                      "type": "Identifier",
                      "start": 401,
                      "end": 407,
                      "decorators": [],
                      "name": "object",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 408,
                      "end": 411,
                      "decorators": [],
                      "name": "key",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "const"
            },
            {
              "type": "IfStatement",
              "start": 416,
              "end": 493,
              "alternate": {
                "type": "BlockStatement",
                "start": 461,
                "end": 493,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 467,
                    "end": 489,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 467,
                      "end": 488,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 467,
                        "end": 478,
                        "computed": true,
                        "object": {
                          "type": "Identifier",
                          "start": 467,
                          "end": 473,
                          "decorators": [],
                          "name": "object",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 474,
                          "end": 477,
                          "decorators": [],
                          "name": "key",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "ArrayExpression",
                        "start": 481,
                        "end": 488,
                        "elements": [
                          {
                            "type": "Identifier",
                            "start": 482,
                            "end": 487,
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        ]
                      }
                    }
                  }
                ]
              },
              "consequent": {
                "type": "BlockStatement",
                "start": 427,
                "end": 455,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 433,
                    "end": 451,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 433,
                      "end": 450,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 444,
                          "end": 449,
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 433,
                        "end": 443,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 433,
                          "end": 438,
                          "decorators": [],
                          "name": "array",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 439,
                          "end": 443,
                          "decorators": [],
                          "name": "push",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  }
                ]
              },
              "test": {
                "type": "Identifier",
                "start": 420,
                "end": 425,
                "decorators": [],
                "name": "array",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 255,
          "end": 276,
          "decorators": [],
          "name": "appendToOptionalArray",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [
          {
            "type": "Identifier",
            "start": 325,
            "end": 358,
            "decorators": [],
            "name": "object",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 331,
              "end": 358,
              "typeAnnotation": {
                "type": "TSMappedType",
                "start": 333,
                "end": 358,
                "constraint": {
                  "type": "TSTypeReference",
                  "start": 341,
                  "end": 342,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 341,
                    "end": 342,
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "key": {
                  "type": "Identifier",
                  "start": 336,
                  "end": 337,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "nameType": null,
                "optional": true,
                "readonly": null,
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "start": 346,
                  "end": 356,
                  "elementType": {
                    "type": "TSTypeReference",
                    "start": 346,
                    "end": 354,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 351,
                      "end": 354,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 352,
                          "end": 353,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 352,
                            "end": 353,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 346,
                      "end": 351,
                      "decorators": [],
                      "name": "Lower",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              }
            }
          },
          {
            "type": "Identifier",
            "start": 362,
            "end": 368,
            "decorators": [],
            "name": "key",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 365,
              "end": 368,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 367,
                "end": 368,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 367,
                  "end": 368,
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          {
            "type": "Identifier",
            "start": 372,
            "end": 380,
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 377,
              "end": 380,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 379,
                "end": 380,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 379,
                  "end": 380,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ],
        "returnType": null,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 276,
          "end": 321,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 280,
              "end": 314,
              "const": false,
              "constraint": {
                "type": "TSUnionType",
                "start": 290,
                "end": 314,
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 290,
                    "end": 296
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 299,
                    "end": 305
                  },
                  {
                    "type": "TSSymbolKeyword",
                    "start": 308,
                    "end": 314
                  }
                ]
              },
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 280,
                "end": 281,
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null
              },
              "out": false
            },
            {
              "type": "TSTypeParameter",
              "start": 318,
              "end": 319,
              "const": false,
              "constraint": null,
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 318,
                "end": 319,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "out": false
            }
          ]
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "VariableDeclaration",
      "start": 505,
      "end": 552,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 511,
          "end": 551,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 511,
            "end": 546,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 514,
              "end": 546,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 516,
                "end": 546,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 517,
                    "end": 530,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 517,
                      "end": 518,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": true,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 519,
                      "end": 529,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 521,
                        "end": 529,
                        "elementType": {
                          "type": "TSNumberKeyword",
                          "start": 521,
                          "end": 527
                        }
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 531,
                    "end": 544,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 531,
                      "end": 532,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": true,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 533,
                      "end": 543,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 535,
                        "end": 543,
                        "elementType": {
                          "type": "TSStringKeyword",
                          "start": 535,
                          "end": 541
                        }
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 549,
            "end": 551,
            "properties": []
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 553,
      "end": 590,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 553,
        "end": 589,
        "arguments": [
          {
            "type": "Identifier",
            "start": 575,
            "end": 578,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          {
            "type": "Literal",
            "start": 580,
            "end": 583,
            "raw": "'x'",
            "value": "x"
          },
          {
            "type": "Literal",
            "start": 585,
            "end": 588,
            "raw": "123",
            "value": 123
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 553,
          "end": 574,
          "decorators": [],
          "name": "appendToOptionalArray",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 599,
      "end": 638,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 599,
        "end": 637,
        "arguments": [
          {
            "type": "Identifier",
            "start": 621,
            "end": 624,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          {
            "type": "Literal",
            "start": 626,
            "end": 629,
            "raw": "'y'",
            "value": "y"
          },
          {
            "type": "Literal",
            "start": 631,
            "end": 636,
            "raw": "'bar'",
            "value": "bar"
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 599,
          "end": 620,
          "decorators": [],
          "name": "appendToOptionalArray",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 645,
      "end": 681,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 645,
        "end": 680,
        "arguments": [
          {
            "type": "Identifier",
            "start": 667,
            "end": 670,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          {
            "type": "Literal",
            "start": 672,
            "end": 675,
            "raw": "'y'",
            "value": "y"
          },
          {
            "type": "Literal",
            "start": 677,
            "end": 679,
            "raw": "12",
            "value": 12
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 645,
          "end": 666,
          "decorators": [],
          "name": "appendToOptionalArray",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 700,
      "end": 738,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 700,
        "end": 737,
        "arguments": [
          {
            "type": "Identifier",
            "start": 722,
            "end": 725,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          {
            "type": "Literal",
            "start": 727,
            "end": 730,
            "raw": "'x'",
            "value": "x"
          },
          {
            "type": "Literal",
            "start": 732,
            "end": 736,
            "raw": "\"no\"",
            "value": "no"
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 700,
          "end": 721,
          "decorators": [],
          "name": "appendToOptionalArray",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
