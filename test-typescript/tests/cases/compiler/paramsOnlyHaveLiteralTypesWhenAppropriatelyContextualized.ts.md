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
      "id": {
        "type": "Identifier",
        "start": 201,
        "end": 206,
        "name": "Lower",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 207,
              "end": 208,
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
        "start": 212,
        "end": 236,
        "typeParameter": {
          "type": "TSTypeParameter",
          "start": 215,
          "end": 227,
          "name": {
            "type": "Identifier",
            "start": 215,
            "end": 216,
            "name": "K",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "constraint": {
            "type": "TSTypeOperator",
            "start": 220,
            "end": 227,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 226,
              "end": 227,
              "typeName": {
                "type": "Identifier",
                "start": 226,
                "end": 227,
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
          "type": "TSIndexedAccessType",
          "start": 230,
          "end": 234,
          "objectType": {
            "type": "TSTypeReference",
            "start": 230,
            "end": 231,
            "typeName": {
              "type": "Identifier",
              "start": 230,
              "end": 231,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          "indexType": {
            "type": "TSTypeReference",
            "start": 232,
            "end": 233,
            "typeName": {
              "type": "Identifier",
              "start": 232,
              "end": 233,
              "name": "K",
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
          "start": 220,
          "end": 227,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 226,
            "end": 227,
            "typeName": {
              "type": "Identifier",
              "start": 226,
              "end": 227,
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
          "start": 215,
          "end": 216,
          "name": "K",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 239,
      "end": 495,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 246,
        "end": 495,
        "id": {
          "type": "Identifier",
          "start": 255,
          "end": 276,
          "name": "appendToOptionalArray",
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
            "start": 325,
            "end": 358,
            "name": "object",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 331,
              "end": 358,
              "typeAnnotation": {
                "type": "TSMappedType",
                "start": 333,
                "end": 358,
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "start": 336,
                  "end": 342,
                  "name": {
                    "type": "Identifier",
                    "start": 336,
                    "end": 337,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 341,
                    "end": 342,
                    "typeName": {
                      "type": "Identifier",
                      "start": 341,
                      "end": 342,
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
                  "type": "TSArrayType",
                  "start": 346,
                  "end": 356,
                  "elementType": {
                    "type": "TSTypeReference",
                    "start": 346,
                    "end": 354,
                    "typeName": {
                      "type": "Identifier",
                      "start": 346,
                      "end": 351,
                      "name": "Lower",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 351,
                      "end": 354,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 352,
                          "end": 353,
                          "typeName": {
                            "type": "Identifier",
                            "start": 352,
                            "end": 353,
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
                "optional": true,
                "readonly": null,
                "constraint": {
                  "type": "TSTypeReference",
                  "start": 341,
                  "end": 342,
                  "typeName": {
                    "type": "Identifier",
                    "start": 341,
                    "end": 342,
                    "name": "K",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                "key": {
                  "type": "Identifier",
                  "start": 336,
                  "end": 337,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          {
            "type": "Identifier",
            "start": 362,
            "end": 368,
            "name": "key",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 365,
              "end": 368,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 367,
                "end": 368,
                "typeName": {
                  "type": "Identifier",
                  "start": 367,
                  "end": 368,
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
            "start": 372,
            "end": 380,
            "name": "value",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 377,
              "end": 380,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 379,
                "end": 380,
                "typeName": {
                  "type": "Identifier",
                  "start": 379,
                  "end": 380,
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
                  "id": {
                    "type": "Identifier",
                    "start": 393,
                    "end": 398,
                    "name": "array",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "MemberExpression",
                    "start": 401,
                    "end": 412,
                    "object": {
                      "type": "Identifier",
                      "start": 401,
                      "end": 407,
                      "name": "object",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 408,
                      "end": 411,
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
              "type": "IfStatement",
              "start": 416,
              "end": 493,
              "test": {
                "type": "Identifier",
                "start": 420,
                "end": 425,
                "name": "array",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                    "expression": {
                      "type": "CallExpression",
                      "start": 433,
                      "end": 450,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 433,
                        "end": 443,
                        "object": {
                          "type": "Identifier",
                          "start": 433,
                          "end": 438,
                          "name": "array",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 439,
                          "end": 443,
                          "name": "push",
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
                          "start": 444,
                          "end": 449,
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
              "alternate": {
                "type": "BlockStatement",
                "start": 461,
                "end": 493,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 467,
                    "end": 489,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 467,
                      "end": 488,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 467,
                        "end": 478,
                        "object": {
                          "type": "Identifier",
                          "start": 467,
                          "end": 473,
                          "name": "object",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 474,
                          "end": 477,
                          "name": "key",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": true,
                        "optional": false
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
                            "name": "value",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        ]
                      }
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
          "start": 276,
          "end": 321,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 280,
              "end": 314,
              "name": {
                "type": "Identifier",
                "start": 280,
                "end": 281,
                "name": "K",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
              "out": false,
              "const": false
            },
            {
              "type": "TSTypeParameter",
              "start": 318,
              "end": 319,
              "name": {
                "type": "Identifier",
                "start": 318,
                "end": 319,
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
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
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
          "id": {
            "type": "Identifier",
            "start": 511,
            "end": 546,
            "name": "foo",
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
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 517,
                      "end": 518,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
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
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 531,
                    "end": 544,
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 531,
                      "end": 532,
                      "name": "y",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
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
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 549,
            "end": 551,
            "properties": []
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 553,
      "end": 590,
      "expression": {
        "type": "CallExpression",
        "start": 553,
        "end": 589,
        "callee": {
          "type": "Identifier",
          "start": 553,
          "end": 574,
          "name": "appendToOptionalArray",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 575,
            "end": 578,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          {
            "type": "Literal",
            "start": 580,
            "end": 583,
            "value": "x",
            "raw": "'x'"
          },
          {
            "type": "Literal",
            "start": 585,
            "end": 588,
            "value": 123,
            "raw": "123"
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 599,
      "end": 638,
      "expression": {
        "type": "CallExpression",
        "start": 599,
        "end": 637,
        "callee": {
          "type": "Identifier",
          "start": 599,
          "end": 620,
          "name": "appendToOptionalArray",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 621,
            "end": 624,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          {
            "type": "Literal",
            "start": 626,
            "end": 629,
            "value": "y",
            "raw": "'y'"
          },
          {
            "type": "Literal",
            "start": 631,
            "end": 636,
            "value": "bar",
            "raw": "'bar'"
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 645,
      "end": 681,
      "expression": {
        "type": "CallExpression",
        "start": 645,
        "end": 680,
        "callee": {
          "type": "Identifier",
          "start": 645,
          "end": 666,
          "name": "appendToOptionalArray",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 667,
            "end": 670,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          {
            "type": "Literal",
            "start": 672,
            "end": 675,
            "value": "y",
            "raw": "'y'"
          },
          {
            "type": "Literal",
            "start": 677,
            "end": 679,
            "value": 12,
            "raw": "12"
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 700,
      "end": 738,
      "expression": {
        "type": "CallExpression",
        "start": 700,
        "end": 737,
        "callee": {
          "type": "Identifier",
          "start": 700,
          "end": 721,
          "name": "appendToOptionalArray",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 722,
            "end": 725,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          {
            "type": "Literal",
            "start": 727,
            "end": 730,
            "value": "x",
            "raw": "'x'"
          },
          {
            "type": "Literal",
            "start": 732,
            "end": 736,
            "value": "no",
            "raw": "\"no\""
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
