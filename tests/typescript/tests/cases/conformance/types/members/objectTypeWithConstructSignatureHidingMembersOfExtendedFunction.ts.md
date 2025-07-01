__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Function",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 18
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "data",
              "optional": false,
              "typeAnnotation": null,
              "start": 25,
              "end": 29
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 31,
                "end": 37
              },
              "start": 29,
              "end": 37
            },
            "accessibility": null,
            "static": false,
            "start": 25,
            "end": 38
          },
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 47,
                    "end": 53
                  },
                  "start": 45,
                  "end": 53
                },
                "start": 44,
                "end": 53
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Object",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 56,
                  "end": 62
                },
                "typeArguments": null,
                "start": 56,
                "end": 62
              },
              "start": 54,
              "end": 62
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 43,
            "end": 63
          }
        ],
        "start": 19,
        "end": 65
      },
      "declare": false,
      "start": 0,
      "end": 65
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 77,
        "end": 78
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 92,
                "end": 98
              },
              "start": 90,
              "end": 98
            },
            "start": 85,
            "end": 99
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "apply",
              "optional": false,
              "typeAnnotation": null,
              "start": 104,
              "end": 109
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 113,
                    "end": 116
                  },
                  "start": 111,
                  "end": 116
                },
                "start": 110,
                "end": 116
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 122,
                    "end": 125
                  },
                  "start": 120,
                  "end": 125
                },
                "start": 118,
                "end": 125
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 128,
                "end": 132
              },
              "start": 126,
              "end": 132
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 104,
            "end": 133
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "call",
              "optional": false,
              "typeAnnotation": null,
              "start": 138,
              "end": 142
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "thisArg",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 152,
                    "end": 158
                  },
                  "start": 150,
                  "end": 158
                },
                "start": 143,
                "end": 158
              },
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "argArray",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 163,
                  "end": 171
                },
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSNumberKeyword",
                      "start": 173,
                      "end": 179
                    },
                    "start": 173,
                    "end": 181
                  },
                  "start": 171,
                  "end": 181
                },
                "value": null,
                "start": 160,
                "end": 181
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 184,
                "end": 187
              },
              "start": 182,
              "end": 187
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 138,
            "end": 188
          }
        ],
        "start": 79,
        "end": 190
      },
      "declare": false,
      "start": 67,
      "end": 190
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 199,
                  "end": 200
                },
                "typeArguments": null,
                "start": 199,
                "end": 200
              },
              "start": 197,
              "end": 200
            },
            "start": 196,
            "end": 200
          },
          "init": null,
          "definite": false,
          "start": 196,
          "end": 200
        }
      ],
      "declare": false,
      "start": 192,
      "end": 201
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 214,
                        "end": 217
                      },
                      "start": 212,
                      "end": 217
                    },
                    "start": 211,
                    "end": 217
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 223,
                        "end": 226
                      },
                      "start": 221,
                      "end": 226
                    },
                    "start": 219,
                    "end": 226
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 231,
                    "end": 235
                  },
                  "start": 228,
                  "end": 235
                },
                "start": 210,
                "end": 235
              },
              "start": 208,
              "end": 235
            },
            "start": 206,
            "end": 235
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 238,
              "end": 239
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "apply",
              "optional": false,
              "typeAnnotation": null,
              "start": 240,
              "end": 245
            },
            "optional": false,
            "computed": false,
            "start": 238,
            "end": 245
          },
          "definite": false,
          "start": 206,
          "end": 245
        }
      ],
      "declare": false,
      "start": 202,
      "end": 246
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r1b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "thisArg",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 266,
                        "end": 272
                      },
                      "start": 264,
                      "end": 272
                    },
                    "start": 257,
                    "end": 272
                  },
                  {
                    "type": "RestElement",
                    "decorators": [],
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "argArray",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 277,
                      "end": 285
                    },
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSNumberKeyword",
                          "start": 287,
                          "end": 293
                        },
                        "start": 287,
                        "end": 295
                      },
                      "start": 285,
                      "end": 295
                    },
                    "value": null,
                    "start": 274,
                    "end": 295
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 300,
                    "end": 304
                  },
                  "start": 297,
                  "end": 304
                },
                "start": 256,
                "end": 304
              },
              "start": 254,
              "end": 304
            },
            "start": 251,
            "end": 304
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 307,
              "end": 308
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "call",
              "optional": false,
              "typeAnnotation": null,
              "start": 309,
              "end": 313
            },
            "optional": false,
            "computed": false,
            "start": 307,
            "end": 313
          },
          "definite": false,
          "start": 251,
          "end": 313
        }
      ],
      "declare": false,
      "start": 247,
      "end": 314
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r1c",
            "optional": false,
            "typeAnnotation": null,
            "start": 319,
            "end": 322
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 325,
              "end": 326
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "arguments",
              "optional": false,
              "typeAnnotation": null,
              "start": 327,
              "end": 336
            },
            "optional": false,
            "computed": false,
            "start": 325,
            "end": 336
          },
          "definite": false,
          "start": 319,
          "end": 336
        }
      ],
      "declare": false,
      "start": 315,
      "end": 337
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r1d",
            "optional": false,
            "typeAnnotation": null,
            "start": 342,
            "end": 345
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 348,
              "end": 349
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "data",
              "optional": false,
              "typeAnnotation": null,
              "start": 350,
              "end": 354
            },
            "optional": false,
            "computed": false,
            "start": 348,
            "end": 354
          },
          "definite": false,
          "start": 342,
          "end": 354
        }
      ],
      "declare": false,
      "start": 338,
      "end": 355
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r1e",
            "optional": false,
            "typeAnnotation": null,
            "start": 360,
            "end": 363
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 366,
              "end": 367
            },
            "property": {
              "type": "Literal",
              "value": "hm",
              "raw": "'hm'",
              "start": 368,
              "end": 372
            },
            "optional": false,
            "computed": true,
            "start": 366,
            "end": 373
          },
          "definite": false,
          "start": 360,
          "end": 373
        }
      ],
      "declare": false,
      "start": 356,
      "end": 374
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 416,
                        "end": 422
                      },
                      "start": 414,
                      "end": 422
                    },
                    "start": 409,
                    "end": 423
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "apply",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 428,
                      "end": 433
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 437,
                            "end": 440
                          },
                          "start": 435,
                          "end": 440
                        },
                        "start": 434,
                        "end": 440
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": true,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 446,
                            "end": 449
                          },
                          "start": 444,
                          "end": 449
                        },
                        "start": 442,
                        "end": 449
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 452,
                        "end": 456
                      },
                      "start": 450,
                      "end": 456
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 428,
                    "end": 457
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "call",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 462,
                      "end": 466
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "thisArg",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 476,
                            "end": 482
                          },
                          "start": 474,
                          "end": 482
                        },
                        "start": 467,
                        "end": 482
                      },
                      {
                        "type": "RestElement",
                        "decorators": [],
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "argArray",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 487,
                          "end": 495
                        },
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "elementType": {
                              "type": "TSNumberKeyword",
                              "start": 497,
                              "end": 503
                            },
                            "start": 497,
                            "end": 505
                          },
                          "start": 495,
                          "end": 505
                        },
                        "value": null,
                        "start": 484,
                        "end": 505
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 508,
                        "end": 511
                      },
                      "start": 506,
                      "end": 511
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 462,
                    "end": 512
                  }
                ],
                "start": 403,
                "end": 514
              },
              "start": 401,
              "end": 514
            },
            "start": 400,
            "end": 514
          },
          "init": null,
          "definite": false,
          "start": 400,
          "end": 514
        }
      ],
      "declare": false,
      "start": 396,
      "end": 514
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 528,
                        "end": 531
                      },
                      "start": 526,
                      "end": 531
                    },
                    "start": 525,
                    "end": 531
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 537,
                        "end": 540
                      },
                      "start": 535,
                      "end": 540
                    },
                    "start": 533,
                    "end": 540
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 545,
                    "end": 549
                  },
                  "start": 542,
                  "end": 549
                },
                "start": 524,
                "end": 549
              },
              "start": 522,
              "end": 549
            },
            "start": 520,
            "end": 549
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 552,
              "end": 553
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "apply",
              "optional": false,
              "typeAnnotation": null,
              "start": 554,
              "end": 559
            },
            "optional": false,
            "computed": false,
            "start": 552,
            "end": 559
          },
          "definite": false,
          "start": 520,
          "end": 559
        }
      ],
      "declare": false,
      "start": 516,
      "end": 560
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r2b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "thisArg",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 580,
                        "end": 586
                      },
                      "start": 578,
                      "end": 586
                    },
                    "start": 571,
                    "end": 586
                  },
                  {
                    "type": "RestElement",
                    "decorators": [],
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "argArray",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 591,
                      "end": 599
                    },
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSNumberKeyword",
                          "start": 601,
                          "end": 607
                        },
                        "start": 601,
                        "end": 609
                      },
                      "start": 599,
                      "end": 609
                    },
                    "value": null,
                    "start": 588,
                    "end": 609
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 614,
                    "end": 618
                  },
                  "start": 611,
                  "end": 618
                },
                "start": 570,
                "end": 618
              },
              "start": 568,
              "end": 618
            },
            "start": 565,
            "end": 618
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 621,
              "end": 622
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "call",
              "optional": false,
              "typeAnnotation": null,
              "start": 623,
              "end": 627
            },
            "optional": false,
            "computed": false,
            "start": 621,
            "end": 627
          },
          "definite": false,
          "start": 565,
          "end": 627
        }
      ],
      "declare": false,
      "start": 561,
      "end": 628
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r2c",
            "optional": false,
            "typeAnnotation": null,
            "start": 633,
            "end": 636
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 639,
              "end": 640
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "arguments",
              "optional": false,
              "typeAnnotation": null,
              "start": 641,
              "end": 650
            },
            "optional": false,
            "computed": false,
            "start": 639,
            "end": 650
          },
          "definite": false,
          "start": 633,
          "end": 650
        }
      ],
      "declare": false,
      "start": 629,
      "end": 651
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r2d",
            "optional": false,
            "typeAnnotation": null,
            "start": 656,
            "end": 659
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 662,
              "end": 663
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "data",
              "optional": false,
              "typeAnnotation": null,
              "start": 664,
              "end": 668
            },
            "optional": false,
            "computed": false,
            "start": 662,
            "end": 668
          },
          "definite": false,
          "start": 656,
          "end": 668
        }
      ],
      "declare": false,
      "start": 652,
      "end": 669
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r2e",
            "optional": false,
            "typeAnnotation": null,
            "start": 674,
            "end": 677
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 680,
              "end": 681
            },
            "property": {
              "type": "Literal",
              "value": "hm",
              "raw": "'hm'",
              "start": 682,
              "end": 686
            },
            "optional": false,
            "computed": true,
            "start": 680,
            "end": 687
          },
          "definite": false,
          "start": 674,
          "end": 687
        }
      ],
      "declare": false,
      "start": 670,
      "end": 688
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 708
}
```
