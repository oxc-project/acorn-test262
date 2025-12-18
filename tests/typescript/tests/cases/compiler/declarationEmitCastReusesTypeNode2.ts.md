__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "vLet",
              "optional": false,
              "typeAnnotation": null,
              "start": 11,
              "end": 15
            },
            "init": {
              "type": "TSAsExpression",
              "expression": {
                "type": "TSNonNullExpression",
                "expression": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 18,
                  "end": 22
                },
                "start": 18,
                "end": 23
              },
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "members": [],
                    "start": 27,
                    "end": 29
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "name",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 34,
                          "end": 38
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 40,
                            "end": 46
                          },
                          "start": 38,
                          "end": 46
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 34,
                        "end": 46
                      }
                    ],
                    "start": 32,
                    "end": 48
                  }
                ],
                "start": 27,
                "end": 48
              },
              "start": 18,
              "end": 48
            },
            "definite": false,
            "start": 11,
            "end": 48
          }
        ],
        "declare": false,
        "start": 7,
        "end": 48
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 48
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "vConst",
              "optional": false,
              "typeAnnotation": null,
              "start": 62,
              "end": 68
            },
            "init": {
              "type": "TSAsExpression",
              "expression": {
                "type": "TSNonNullExpression",
                "expression": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 71,
                  "end": 75
                },
                "start": 71,
                "end": 76
              },
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "members": [],
                    "start": 80,
                    "end": 82
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "name",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 87,
                          "end": 91
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 93,
                            "end": 99
                          },
                          "start": 91,
                          "end": 99
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 87,
                        "end": 99
                      }
                    ],
                    "start": 85,
                    "end": 101
                  }
                ],
                "start": 80,
                "end": 101
              },
              "start": 71,
              "end": 101
            },
            "definite": false,
            "start": 62,
            "end": 101
          }
        ],
        "declare": false,
        "start": 56,
        "end": 101
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 49,
      "end": 101
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn",
          "optional": false,
          "typeAnnotation": null,
          "start": 119,
          "end": 121
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "AssignmentPattern",
            "decorators": [],
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "p",
              "optional": false,
              "typeAnnotation": null,
              "start": 122,
              "end": 123
            },
            "right": {
              "type": "TSAsExpression",
              "expression": {
                "type": "TSNonNullExpression",
                "expression": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 126,
                  "end": 130
                },
                "start": 126,
                "end": 131
              },
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "members": [],
                    "start": 135,
                    "end": 137
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "name",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 142,
                          "end": 146
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 148,
                            "end": 154
                          },
                          "start": 146,
                          "end": 154
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 142,
                        "end": 154
                      }
                    ],
                    "start": 140,
                    "end": 156
                  }
                ],
                "start": 135,
                "end": 156
              },
              "start": 126,
              "end": 156
            },
            "optional": false,
            "typeAnnotation": null,
            "start": 122,
            "end": 156
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [],
          "start": 158,
          "end": 160
        },
        "expression": false,
        "start": 110,
        "end": 160
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 103,
      "end": 160
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "fnWithRequiredDefaultParam",
          "optional": false,
          "typeAnnotation": null,
          "start": 178,
          "end": 204
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "AssignmentPattern",
            "decorators": [],
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "p",
              "optional": false,
              "typeAnnotation": null,
              "start": 205,
              "end": 206
            },
            "right": {
              "type": "TSAsExpression",
              "expression": {
                "type": "TSNonNullExpression",
                "expression": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 209,
                  "end": 213
                },
                "start": 209,
                "end": 214
              },
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "members": [],
                    "start": 218,
                    "end": 220
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "name",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 225,
                          "end": 229
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 231,
                            "end": 237
                          },
                          "start": 229,
                          "end": 237
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 225,
                        "end": 237
                      }
                    ],
                    "start": 223,
                    "end": 239
                  }
                ],
                "start": 218,
                "end": 239
              },
              "start": 209,
              "end": 239
            },
            "optional": false,
            "typeAnnotation": null,
            "start": 205,
            "end": 239
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "req",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 246,
                "end": 252
              },
              "start": 244,
              "end": 252
            },
            "start": 241,
            "end": 252
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [],
          "start": 254,
          "end": 256
        },
        "expression": false,
        "start": 169,
        "end": 256
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 162,
      "end": 256
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "C",
          "optional": false,
          "typeAnnotation": null,
          "start": 271,
          "end": 272
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "field",
                "optional": false,
                "typeAnnotation": null,
                "start": 279,
                "end": 284
              },
              "typeAnnotation": null,
              "value": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "TSNonNullExpression",
                  "expression": {
                    "type": "Literal",
                    "value": null,
                    "raw": "null",
                    "start": 287,
                    "end": 291
                  },
                  "start": 287,
                  "end": 292
                },
                "typeAnnotation": {
                  "type": "TSIntersectionType",
                  "types": [
                    {
                      "type": "TSTypeLiteral",
                      "members": [],
                      "start": 296,
                      "end": 298
                    },
                    {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "name",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 303,
                            "end": 307
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 309,
                              "end": 315
                            },
                            "start": 307,
                            "end": 315
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 303,
                          "end": 315
                        }
                      ],
                      "start": 301,
                      "end": 317
                    }
                  ],
                  "start": 296,
                  "end": 317
                },
                "start": 287,
                "end": 317
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 279,
              "end": 318
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "optField",
                "optional": false,
                "typeAnnotation": null,
                "start": 323,
                "end": 331
              },
              "typeAnnotation": null,
              "value": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "TSNonNullExpression",
                  "expression": {
                    "type": "Literal",
                    "value": null,
                    "raw": "null",
                    "start": 335,
                    "end": 339
                  },
                  "start": 335,
                  "end": 340
                },
                "typeAnnotation": {
                  "type": "TSIntersectionType",
                  "types": [
                    {
                      "type": "TSTypeLiteral",
                      "members": [],
                      "start": 344,
                      "end": 346
                    },
                    {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "name",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 351,
                            "end": 355
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 357,
                              "end": 363
                            },
                            "start": 355,
                            "end": 363
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 351,
                          "end": 363
                        }
                      ],
                      "start": 349,
                      "end": 365
                    }
                  ],
                  "start": 344,
                  "end": 365
                },
                "start": 335,
                "end": 365
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": true,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 323,
              "end": 366
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "roFiled",
                "optional": false,
                "typeAnnotation": null,
                "start": 380,
                "end": 387
              },
              "typeAnnotation": null,
              "value": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "TSNonNullExpression",
                  "expression": {
                    "type": "Literal",
                    "value": null,
                    "raw": "null",
                    "start": 390,
                    "end": 394
                  },
                  "start": 390,
                  "end": 395
                },
                "typeAnnotation": {
                  "type": "TSIntersectionType",
                  "types": [
                    {
                      "type": "TSTypeLiteral",
                      "members": [],
                      "start": 399,
                      "end": 401
                    },
                    {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "name",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 406,
                            "end": 410
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 412,
                              "end": 418
                            },
                            "start": 410,
                            "end": 418
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 406,
                          "end": 418
                        }
                      ],
                      "start": 404,
                      "end": 420
                    }
                  ],
                  "start": 399,
                  "end": 420
                },
                "start": 390,
                "end": 420
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": true,
              "accessibility": null,
              "start": 371,
              "end": 421
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "method",
                "optional": false,
                "typeAnnotation": null,
                "start": 426,
                "end": 432
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "p",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 433,
                      "end": 434
                    },
                    "right": {
                      "type": "TSAsExpression",
                      "expression": {
                        "type": "TSNonNullExpression",
                        "expression": {
                          "type": "Literal",
                          "value": null,
                          "raw": "null",
                          "start": 437,
                          "end": 441
                        },
                        "start": 437,
                        "end": 442
                      },
                      "typeAnnotation": {
                        "type": "TSIntersectionType",
                        "types": [
                          {
                            "type": "TSTypeLiteral",
                            "members": [],
                            "start": 446,
                            "end": 448
                          },
                          {
                            "type": "TSTypeLiteral",
                            "members": [
                              {
                                "type": "TSPropertySignature",
                                "computed": false,
                                "optional": false,
                                "readonly": false,
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "name",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 453,
                                  "end": 457
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 459,
                                    "end": 465
                                  },
                                  "start": 457,
                                  "end": 465
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 453,
                                "end": 465
                              }
                            ],
                            "start": 451,
                            "end": 467
                          }
                        ],
                        "start": 446,
                        "end": 467
                      },
                      "start": 437,
                      "end": 467
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 433,
                    "end": 467
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 469,
                  "end": 471
                },
                "expression": false,
                "start": 432,
                "end": 471
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 426,
              "end": 471
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "methodWithRequiredDefault",
                "optional": false,
                "typeAnnotation": null,
                "start": 476,
                "end": 501
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "p",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 502,
                      "end": 503
                    },
                    "right": {
                      "type": "TSAsExpression",
                      "expression": {
                        "type": "TSNonNullExpression",
                        "expression": {
                          "type": "Literal",
                          "value": null,
                          "raw": "null",
                          "start": 506,
                          "end": 510
                        },
                        "start": 506,
                        "end": 511
                      },
                      "typeAnnotation": {
                        "type": "TSIntersectionType",
                        "types": [
                          {
                            "type": "TSTypeLiteral",
                            "members": [],
                            "start": 515,
                            "end": 517
                          },
                          {
                            "type": "TSTypeLiteral",
                            "members": [
                              {
                                "type": "TSPropertySignature",
                                "computed": false,
                                "optional": false,
                                "readonly": false,
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "name",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 522,
                                  "end": 526
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 528,
                                    "end": 534
                                  },
                                  "start": 526,
                                  "end": 534
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 522,
                                "end": 534
                              }
                            ],
                            "start": 520,
                            "end": 536
                          }
                        ],
                        "start": 515,
                        "end": 536
                      },
                      "start": 506,
                      "end": 536
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 502,
                    "end": 536
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "req",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 543,
                        "end": 549
                      },
                      "start": 541,
                      "end": 549
                    },
                    "start": 538,
                    "end": 549
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 551,
                  "end": 553
                },
                "expression": false,
                "start": 501,
                "end": 553
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 476,
              "end": 553
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "constructor",
                "optional": false,
                "typeAnnotation": null,
                "start": 559,
                "end": 570
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "TSParameterProperty",
                    "accessibility": "public",
                    "decorators": [],
                    "override": false,
                    "parameter": {
                      "type": "AssignmentPattern",
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ctorField",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 578,
                        "end": 587
                      },
                      "right": {
                        "type": "TSAsExpression",
                        "expression": {
                          "type": "TSNonNullExpression",
                          "expression": {
                            "type": "Literal",
                            "value": null,
                            "raw": "null",
                            "start": 590,
                            "end": 594
                          },
                          "start": 590,
                          "end": 595
                        },
                        "typeAnnotation": {
                          "type": "TSIntersectionType",
                          "types": [
                            {
                              "type": "TSTypeLiteral",
                              "members": [],
                              "start": 599,
                              "end": 601
                            },
                            {
                              "type": "TSTypeLiteral",
                              "members": [
                                {
                                  "type": "TSPropertySignature",
                                  "computed": false,
                                  "optional": false,
                                  "readonly": false,
                                  "key": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "name",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 606,
                                    "end": 610
                                  },
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSStringKeyword",
                                      "start": 612,
                                      "end": 618
                                    },
                                    "start": 610,
                                    "end": 618
                                  },
                                  "accessibility": null,
                                  "static": false,
                                  "start": 606,
                                  "end": 618
                                }
                              ],
                              "start": 604,
                              "end": 620
                            }
                          ],
                          "start": 599,
                          "end": 620
                        },
                        "start": 590,
                        "end": 620
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 578,
                      "end": 620
                    },
                    "readonly": false,
                    "static": false,
                    "start": 571,
                    "end": 620
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 622,
                  "end": 624
                },
                "expression": false,
                "start": 570,
                "end": 624
              },
              "kind": "constructor",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 559,
              "end": 624
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 634,
                "end": 635
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "TSAsExpression",
                        "expression": {
                          "type": "TSNonNullExpression",
                          "expression": {
                            "type": "Literal",
                            "value": null,
                            "raw": "null",
                            "start": 647,
                            "end": 651
                          },
                          "start": 647,
                          "end": 652
                        },
                        "typeAnnotation": {
                          "type": "TSIntersectionType",
                          "types": [
                            {
                              "type": "TSTypeLiteral",
                              "members": [],
                              "start": 656,
                              "end": 658
                            },
                            {
                              "type": "TSTypeLiteral",
                              "members": [
                                {
                                  "type": "TSPropertySignature",
                                  "computed": false,
                                  "optional": false,
                                  "readonly": false,
                                  "key": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "name",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 663,
                                    "end": 667
                                  },
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSStringKeyword",
                                      "start": 669,
                                      "end": 675
                                    },
                                    "start": 667,
                                    "end": 675
                                  },
                                  "accessibility": null,
                                  "static": false,
                                  "start": 663,
                                  "end": 675
                                }
                              ],
                              "start": 661,
                              "end": 677
                            }
                          ],
                          "start": 656,
                          "end": 677
                        },
                        "start": 647,
                        "end": 677
                      },
                      "start": 640,
                      "end": 677
                    }
                  ],
                  "start": 638,
                  "end": 679
                },
                "expression": false,
                "start": 635,
                "end": 679
              },
              "kind": "get",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 630,
              "end": 679
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 688,
                "end": 689
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 690,
                    "end": 691
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 693,
                  "end": 696
                },
                "expression": false,
                "start": 689,
                "end": 696
              },
              "kind": "set",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 684,
              "end": 696
            }
          ],
          "start": 273,
          "end": 698
        },
        "abstract": false,
        "declare": false,
        "start": 265,
        "end": 698
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 258,
      "end": 698
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "TSAsExpression",
        "expression": {
          "type": "TSNonNullExpression",
          "expression": {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 715,
            "end": 719
          },
          "start": 715,
          "end": 720
        },
        "typeAnnotation": {
          "type": "TSIntersectionType",
          "types": [
            {
              "type": "TSTypeLiteral",
              "members": [],
              "start": 724,
              "end": 726
            },
            {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 731,
                    "end": 735
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 737,
                      "end": 743
                    },
                    "start": 735,
                    "end": 743
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 731,
                  "end": 743
                }
              ],
              "start": 729,
              "end": 745
            }
          ],
          "start": 724,
          "end": 745
        },
        "start": 715,
        "end": 745
      },
      "exportKind": "value",
      "start": 700,
      "end": 745
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "fnWithPartialAnnotationOnDefaultparam",
          "optional": false,
          "typeAnnotation": null,
          "start": 830,
          "end": 867
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "AssignmentPattern",
            "decorators": [],
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSIntersectionType",
                  "types": [
                    {
                      "type": "TSTypeLiteral",
                      "members": [],
                      "start": 871,
                      "end": 873
                    },
                    {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "name",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 878,
                            "end": 882
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 884,
                              "end": 890
                            },
                            "start": 882,
                            "end": 890
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 878,
                          "end": 890
                        }
                      ],
                      "start": 876,
                      "end": 892
                    }
                  ],
                  "start": 871,
                  "end": 892
                },
                "start": 869,
                "end": 892
              },
              "start": 868,
              "end": 892
            },
            "right": {
              "type": "TSAsExpression",
              "expression": {
                "type": "TSNonNullExpression",
                "expression": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 895,
                  "end": 899
                },
                "start": 895,
                "end": 900
              },
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "members": [],
                    "start": 904,
                    "end": 906
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "name",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 911,
                          "end": 915
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 917,
                            "end": 923
                          },
                          "start": 915,
                          "end": 923
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 911,
                        "end": 923
                      }
                    ],
                    "start": 909,
                    "end": 925
                  }
                ],
                "start": 904,
                "end": 925
              },
              "start": 895,
              "end": 925
            },
            "optional": false,
            "typeAnnotation": null,
            "start": 868,
            "end": 925
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 930,
                "end": 936
              },
              "start": 928,
              "end": 936
            },
            "start": 927,
            "end": 936
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [],
          "start": 938,
          "end": 940
        },
        "expression": false,
        "start": 821,
        "end": 940
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 814,
      "end": 940
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 940
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 0,
    "end": 6,
    "range": [
      0,
      6
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 7,
    "end": 10,
    "range": [
      7,
      10
    ]
  },
  {
    "type": "Identifier",
    "value": "vLet",
    "start": 11,
    "end": 15,
    "range": [
      11,
      15
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 16,
    "end": 17,
    "range": [
      16,
      17
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 18,
    "end": 22,
    "range": [
      18,
      22
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 22,
    "end": 23,
    "range": [
      22,
      23
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 24,
    "end": 26,
    "range": [
      24,
      26
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 27,
    "end": 28,
    "range": [
      27,
      28
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 28,
    "end": 29,
    "range": [
      28,
      29
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 30,
    "end": 31,
    "range": [
      30,
      31
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 32,
    "end": 33,
    "range": [
      32,
      33
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 34,
    "end": 38,
    "range": [
      34,
      38
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 38,
    "end": 39,
    "range": [
      38,
      39
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 40,
    "end": 46,
    "range": [
      40,
      46
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 47,
    "end": 48,
    "range": [
      47,
      48
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 49,
    "end": 55,
    "range": [
      49,
      55
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 56,
    "end": 61,
    "range": [
      56,
      61
    ]
  },
  {
    "type": "Identifier",
    "value": "vConst",
    "start": 62,
    "end": 68,
    "range": [
      62,
      68
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 69,
    "end": 70,
    "range": [
      69,
      70
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 71,
    "end": 75,
    "range": [
      71,
      75
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 75,
    "end": 76,
    "range": [
      75,
      76
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 77,
    "end": 79,
    "range": [
      77,
      79
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 80,
    "end": 81,
    "range": [
      80,
      81
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 81,
    "end": 82,
    "range": [
      81,
      82
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 83,
    "end": 84,
    "range": [
      83,
      84
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 85,
    "end": 86,
    "range": [
      85,
      86
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 87,
    "end": 91,
    "range": [
      87,
      91
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 91,
    "end": 92,
    "range": [
      91,
      92
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 93,
    "end": 99,
    "range": [
      93,
      99
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 100,
    "end": 101,
    "range": [
      100,
      101
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 103,
    "end": 109,
    "range": [
      103,
      109
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 110,
    "end": 118,
    "range": [
      110,
      118
    ]
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 119,
    "end": 121,
    "range": [
      119,
      121
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 121,
    "end": 122,
    "range": [
      121,
      122
    ]
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 122,
    "end": 123,
    "range": [
      122,
      123
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 124,
    "end": 125,
    "range": [
      124,
      125
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 126,
    "end": 130,
    "range": [
      126,
      130
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 130,
    "end": 131,
    "range": [
      130,
      131
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 132,
    "end": 134,
    "range": [
      132,
      134
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 135,
    "end": 136,
    "range": [
      135,
      136
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 136,
    "end": 137,
    "range": [
      136,
      137
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 138,
    "end": 139,
    "range": [
      138,
      139
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 140,
    "end": 141,
    "range": [
      140,
      141
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 142,
    "end": 146,
    "range": [
      142,
      146
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 146,
    "end": 147,
    "range": [
      146,
      147
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 148,
    "end": 154,
    "range": [
      148,
      154
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 155,
    "end": 156,
    "range": [
      155,
      156
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 156,
    "end": 157,
    "range": [
      156,
      157
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 158,
    "end": 159,
    "range": [
      158,
      159
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 159,
    "end": 160,
    "range": [
      159,
      160
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 162,
    "end": 168,
    "range": [
      162,
      168
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 169,
    "end": 177,
    "range": [
      169,
      177
    ]
  },
  {
    "type": "Identifier",
    "value": "fnWithRequiredDefaultParam",
    "start": 178,
    "end": 204,
    "range": [
      178,
      204
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 204,
    "end": 205,
    "range": [
      204,
      205
    ]
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 205,
    "end": 206,
    "range": [
      205,
      206
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 207,
    "end": 208,
    "range": [
      207,
      208
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 209,
    "end": 213,
    "range": [
      209,
      213
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 213,
    "end": 214,
    "range": [
      213,
      214
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 215,
    "end": 217,
    "range": [
      215,
      217
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 218,
    "end": 219,
    "range": [
      218,
      219
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 219,
    "end": 220,
    "range": [
      219,
      220
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 221,
    "end": 222,
    "range": [
      221,
      222
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 223,
    "end": 224,
    "range": [
      223,
      224
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 225,
    "end": 229,
    "range": [
      225,
      229
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 229,
    "end": 230,
    "range": [
      229,
      230
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 231,
    "end": 237,
    "range": [
      231,
      237
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 238,
    "end": 239,
    "range": [
      238,
      239
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 239,
    "end": 240,
    "range": [
      239,
      240
    ]
  },
  {
    "type": "Identifier",
    "value": "req",
    "start": 241,
    "end": 244,
    "range": [
      241,
      244
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 244,
    "end": 245,
    "range": [
      244,
      245
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 246,
    "end": 252,
    "range": [
      246,
      252
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 252,
    "end": 253,
    "range": [
      252,
      253
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 254,
    "end": 255,
    "range": [
      254,
      255
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 255,
    "end": 256,
    "range": [
      255,
      256
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 258,
    "end": 264,
    "range": [
      258,
      264
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 265,
    "end": 270,
    "range": [
      265,
      270
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 271,
    "end": 272,
    "range": [
      271,
      272
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 273,
    "end": 274,
    "range": [
      273,
      274
    ]
  },
  {
    "type": "Identifier",
    "value": "field",
    "start": 279,
    "end": 284,
    "range": [
      279,
      284
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 285,
    "end": 286,
    "range": [
      285,
      286
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 287,
    "end": 291,
    "range": [
      287,
      291
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 291,
    "end": 292,
    "range": [
      291,
      292
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 293,
    "end": 295,
    "range": [
      293,
      295
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 296,
    "end": 297,
    "range": [
      296,
      297
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 297,
    "end": 298,
    "range": [
      297,
      298
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 299,
    "end": 300,
    "range": [
      299,
      300
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 301,
    "end": 302,
    "range": [
      301,
      302
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 303,
    "end": 307,
    "range": [
      303,
      307
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 307,
    "end": 308,
    "range": [
      307,
      308
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 309,
    "end": 315,
    "range": [
      309,
      315
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 316,
    "end": 317,
    "range": [
      316,
      317
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 317,
    "end": 318,
    "range": [
      317,
      318
    ]
  },
  {
    "type": "Identifier",
    "value": "optField",
    "start": 323,
    "end": 331,
    "range": [
      323,
      331
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 331,
    "end": 332,
    "range": [
      331,
      332
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 333,
    "end": 334,
    "range": [
      333,
      334
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 335,
    "end": 339,
    "range": [
      335,
      339
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 339,
    "end": 340,
    "range": [
      339,
      340
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 341,
    "end": 343,
    "range": [
      341,
      343
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 344,
    "end": 345,
    "range": [
      344,
      345
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 345,
    "end": 346,
    "range": [
      345,
      346
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 347,
    "end": 348,
    "range": [
      347,
      348
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 349,
    "end": 350,
    "range": [
      349,
      350
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 351,
    "end": 355,
    "range": [
      351,
      355
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 355,
    "end": 356,
    "range": [
      355,
      356
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 357,
    "end": 363,
    "range": [
      357,
      363
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 364,
    "end": 365,
    "range": [
      364,
      365
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 365,
    "end": 366,
    "range": [
      365,
      366
    ]
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 371,
    "end": 379,
    "range": [
      371,
      379
    ]
  },
  {
    "type": "Identifier",
    "value": "roFiled",
    "start": 380,
    "end": 387,
    "range": [
      380,
      387
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 388,
    "end": 389,
    "range": [
      388,
      389
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 390,
    "end": 394,
    "range": [
      390,
      394
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 394,
    "end": 395,
    "range": [
      394,
      395
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 396,
    "end": 398,
    "range": [
      396,
      398
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 399,
    "end": 400,
    "range": [
      399,
      400
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 400,
    "end": 401,
    "range": [
      400,
      401
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 402,
    "end": 403,
    "range": [
      402,
      403
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 404,
    "end": 405,
    "range": [
      404,
      405
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 406,
    "end": 410,
    "range": [
      406,
      410
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 410,
    "end": 411,
    "range": [
      410,
      411
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 412,
    "end": 418,
    "range": [
      412,
      418
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 419,
    "end": 420,
    "range": [
      419,
      420
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 420,
    "end": 421,
    "range": [
      420,
      421
    ]
  },
  {
    "type": "Identifier",
    "value": "method",
    "start": 426,
    "end": 432,
    "range": [
      426,
      432
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 432,
    "end": 433,
    "range": [
      432,
      433
    ]
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 433,
    "end": 434,
    "range": [
      433,
      434
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 435,
    "end": 436,
    "range": [
      435,
      436
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 437,
    "end": 441,
    "range": [
      437,
      441
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 441,
    "end": 442,
    "range": [
      441,
      442
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 443,
    "end": 445,
    "range": [
      443,
      445
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 446,
    "end": 447,
    "range": [
      446,
      447
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 447,
    "end": 448,
    "range": [
      447,
      448
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 449,
    "end": 450,
    "range": [
      449,
      450
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 451,
    "end": 452,
    "range": [
      451,
      452
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 453,
    "end": 457,
    "range": [
      453,
      457
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 457,
    "end": 458,
    "range": [
      457,
      458
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 459,
    "end": 465,
    "range": [
      459,
      465
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 466,
    "end": 467,
    "range": [
      466,
      467
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 467,
    "end": 468,
    "range": [
      467,
      468
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 469,
    "end": 470,
    "range": [
      469,
      470
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 470,
    "end": 471,
    "range": [
      470,
      471
    ]
  },
  {
    "type": "Identifier",
    "value": "methodWithRequiredDefault",
    "start": 476,
    "end": 501,
    "range": [
      476,
      501
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 501,
    "end": 502,
    "range": [
      501,
      502
    ]
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 502,
    "end": 503,
    "range": [
      502,
      503
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 504,
    "end": 505,
    "range": [
      504,
      505
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 506,
    "end": 510,
    "range": [
      506,
      510
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 510,
    "end": 511,
    "range": [
      510,
      511
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 512,
    "end": 514,
    "range": [
      512,
      514
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 515,
    "end": 516,
    "range": [
      515,
      516
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 516,
    "end": 517,
    "range": [
      516,
      517
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 518,
    "end": 519,
    "range": [
      518,
      519
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 520,
    "end": 521,
    "range": [
      520,
      521
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 522,
    "end": 526,
    "range": [
      522,
      526
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 526,
    "end": 527,
    "range": [
      526,
      527
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 528,
    "end": 534,
    "range": [
      528,
      534
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 535,
    "end": 536,
    "range": [
      535,
      536
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 536,
    "end": 537,
    "range": [
      536,
      537
    ]
  },
  {
    "type": "Identifier",
    "value": "req",
    "start": 538,
    "end": 541,
    "range": [
      538,
      541
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 541,
    "end": 542,
    "range": [
      541,
      542
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 543,
    "end": 549,
    "range": [
      543,
      549
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 549,
    "end": 550,
    "range": [
      549,
      550
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 551,
    "end": 552,
    "range": [
      551,
      552
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 552,
    "end": 553,
    "range": [
      552,
      553
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 559,
    "end": 570,
    "range": [
      559,
      570
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 570,
    "end": 571,
    "range": [
      570,
      571
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 571,
    "end": 577,
    "range": [
      571,
      577
    ]
  },
  {
    "type": "Identifier",
    "value": "ctorField",
    "start": 578,
    "end": 587,
    "range": [
      578,
      587
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 588,
    "end": 589,
    "range": [
      588,
      589
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 590,
    "end": 594,
    "range": [
      590,
      594
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 594,
    "end": 595,
    "range": [
      594,
      595
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 596,
    "end": 598,
    "range": [
      596,
      598
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 599,
    "end": 600,
    "range": [
      599,
      600
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 600,
    "end": 601,
    "range": [
      600,
      601
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 602,
    "end": 603,
    "range": [
      602,
      603
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 604,
    "end": 605,
    "range": [
      604,
      605
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 606,
    "end": 610,
    "range": [
      606,
      610
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 610,
    "end": 611,
    "range": [
      610,
      611
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 612,
    "end": 618,
    "range": [
      612,
      618
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 619,
    "end": 620,
    "range": [
      619,
      620
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 620,
    "end": 621,
    "range": [
      620,
      621
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 622,
    "end": 623,
    "range": [
      622,
      623
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 623,
    "end": 624,
    "range": [
      623,
      624
    ]
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 630,
    "end": 633,
    "range": [
      630,
      633
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 634,
    "end": 635,
    "range": [
      634,
      635
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 635,
    "end": 636,
    "range": [
      635,
      636
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 636,
    "end": 637,
    "range": [
      636,
      637
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 638,
    "end": 639,
    "range": [
      638,
      639
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 640,
    "end": 646,
    "range": [
      640,
      646
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 647,
    "end": 651,
    "range": [
      647,
      651
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 651,
    "end": 652,
    "range": [
      651,
      652
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 653,
    "end": 655,
    "range": [
      653,
      655
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 656,
    "end": 657,
    "range": [
      656,
      657
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 657,
    "end": 658,
    "range": [
      657,
      658
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 659,
    "end": 660,
    "range": [
      659,
      660
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 661,
    "end": 662,
    "range": [
      661,
      662
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 663,
    "end": 667,
    "range": [
      663,
      667
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 667,
    "end": 668,
    "range": [
      667,
      668
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 669,
    "end": 675,
    "range": [
      669,
      675
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 676,
    "end": 677,
    "range": [
      676,
      677
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 678,
    "end": 679,
    "range": [
      678,
      679
    ]
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 684,
    "end": 687,
    "range": [
      684,
      687
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 688,
    "end": 689,
    "range": [
      688,
      689
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 689,
    "end": 690,
    "range": [
      689,
      690
    ]
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 690,
    "end": 691,
    "range": [
      690,
      691
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 691,
    "end": 692,
    "range": [
      691,
      692
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 693,
    "end": 694,
    "range": [
      693,
      694
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 695,
    "end": 696,
    "range": [
      695,
      696
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 697,
    "end": 698,
    "range": [
      697,
      698
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 700,
    "end": 706,
    "range": [
      700,
      706
    ]
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 707,
    "end": 714,
    "range": [
      707,
      714
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 715,
    "end": 719,
    "range": [
      715,
      719
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 719,
    "end": 720,
    "range": [
      719,
      720
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 721,
    "end": 723,
    "range": [
      721,
      723
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 724,
    "end": 725,
    "range": [
      724,
      725
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 725,
    "end": 726,
    "range": [
      725,
      726
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 727,
    "end": 728,
    "range": [
      727,
      728
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 729,
    "end": 730,
    "range": [
      729,
      730
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 731,
    "end": 735,
    "range": [
      731,
      735
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 735,
    "end": 736,
    "range": [
      735,
      736
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 737,
    "end": 743,
    "range": [
      737,
      743
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 744,
    "end": 745,
    "range": [
      744,
      745
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 814,
    "end": 820,
    "range": [
      814,
      820
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 821,
    "end": 829,
    "range": [
      821,
      829
    ]
  },
  {
    "type": "Identifier",
    "value": "fnWithPartialAnnotationOnDefaultparam",
    "start": 830,
    "end": 867,
    "range": [
      830,
      867
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 867,
    "end": 868,
    "range": [
      867,
      868
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 868,
    "end": 869,
    "range": [
      868,
      869
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 869,
    "end": 870,
    "range": [
      869,
      870
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 871,
    "end": 872,
    "range": [
      871,
      872
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 872,
    "end": 873,
    "range": [
      872,
      873
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 874,
    "end": 875,
    "range": [
      874,
      875
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 876,
    "end": 877,
    "range": [
      876,
      877
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 878,
    "end": 882,
    "range": [
      878,
      882
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 882,
    "end": 883,
    "range": [
      882,
      883
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 884,
    "end": 890,
    "range": [
      884,
      890
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 891,
    "end": 892,
    "range": [
      891,
      892
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 893,
    "end": 894,
    "range": [
      893,
      894
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 895,
    "end": 899,
    "range": [
      895,
      899
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 899,
    "end": 900,
    "range": [
      899,
      900
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 901,
    "end": 903,
    "range": [
      901,
      903
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 904,
    "end": 905,
    "range": [
      904,
      905
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 905,
    "end": 906,
    "range": [
      905,
      906
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 907,
    "end": 908,
    "range": [
      907,
      908
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 909,
    "end": 910,
    "range": [
      909,
      910
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 911,
    "end": 915,
    "range": [
      911,
      915
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 915,
    "end": 916,
    "range": [
      915,
      916
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 917,
    "end": 923,
    "range": [
      917,
      923
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 924,
    "end": 925,
    "range": [
      924,
      925
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 925,
    "end": 926,
    "range": [
      925,
      926
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 927,
    "end": 928,
    "range": [
      927,
      928
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 928,
    "end": 929,
    "range": [
      928,
      929
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 930,
    "end": 936,
    "range": [
      930,
      936
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 936,
    "end": 937,
    "range": [
      936,
      937
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 938,
    "end": 939,
    "range": [
      938,
      939
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 939,
    "end": 940,
    "range": [
      939,
      940
    ]
  }
]
```
