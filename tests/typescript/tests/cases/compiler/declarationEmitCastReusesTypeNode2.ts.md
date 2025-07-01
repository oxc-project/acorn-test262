__ESTREE_TEST__:PASS:
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
