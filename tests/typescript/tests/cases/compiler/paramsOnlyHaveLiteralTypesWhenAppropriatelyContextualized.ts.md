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
        "decorators": [],
        "name": "Lower",
        "optional": false,
        "typeAnnotation": null
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
        "start": 212,
        "end": 236,
        "key": {
          "type": "Identifier",
          "start": 215,
          "end": 216,
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null
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
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
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
          "decorators": [],
          "name": "appendToOptionalArray",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
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
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null
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
                "key": {
                  "type": "Identifier",
                  "start": 336,
                  "end": 337,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "constraint": {
                  "type": "TSTypeReference",
                  "start": 341,
                  "end": 342,
                  "typeName": {
                    "type": "Identifier",
                    "start": 341,
                    "end": 342,
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
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
                      "decorators": [],
                      "name": "Lower",
                      "optional": false,
                      "typeAnnotation": null
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
                },
                "optional": true,
                "readonly": null
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
                "typeName": {
                  "type": "Identifier",
                  "start": 367,
                  "end": 368,
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
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
                "typeName": {
                  "type": "Identifier",
                  "start": 379,
                  "end": 380,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "start": 383,
          "end": 495,
          "body": [
            {
              "type": "VariableDeclaration",
              "start": 387,
              "end": 413,
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 393,
                  "end": 412,
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
                    "object": {
                      "type": "Identifier",
                      "start": 401,
                      "end": 407,
                      "decorators": [],
                      "name": "object",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 408,
                      "end": 411,
                      "decorators": [],
                      "name": "key",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": true
                  },
                  "definite": false
                }
              ],
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
                "decorators": [],
                "name": "array",
                "optional": false,
                "typeAnnotation": null
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
                          "decorators": [],
                          "name": "array",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 439,
                          "end": 443,
                          "decorators": [],
                          "name": "push",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
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
                      "optional": false
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
                          "decorators": [],
                          "name": "object",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 474,
                          "end": 477,
                          "decorators": [],
                          "name": "key",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": true
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
                    },
                    "directive": null
                  }
                ]
              }
            }
          ]
        },
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "VariableDeclaration",
      "start": 505,
      "end": 552,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 511,
          "end": 551,
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
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 517,
                      "end": 518,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
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
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null
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
            }
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
          "decorators": [],
          "name": "appendToOptionalArray",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
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
        "optional": false
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
          "decorators": [],
          "name": "appendToOptionalArray",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
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
        "optional": false
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
          "decorators": [],
          "name": "appendToOptionalArray",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
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
        "optional": false
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
          "decorators": [],
          "name": "appendToOptionalArray",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
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
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
