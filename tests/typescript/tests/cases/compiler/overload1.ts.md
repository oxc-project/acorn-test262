__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "O",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 31,
                "end": 32
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 33,
                "end": 49
              },
              "abstract": false,
              "declare": false,
              "start": 25,
              "end": 49
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 18,
            "end": 49
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 68,
                "end": 69
              },
              "typeParameters": null,
              "superClass": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 78,
                "end": 79
              },
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 80,
                "end": 87
              },
              "abstract": false,
              "declare": false,
              "start": 62,
              "end": 87
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 55,
            "end": 87
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
                "start": 106,
                "end": 107
              },
              "typeParameters": null,
              "superClass": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 116,
                "end": 117
              },
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 118,
                "end": 134
              },
              "abstract": false,
              "declare": false,
              "start": 100,
              "end": 134
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 93,
            "end": 134
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null,
                "start": 157,
                "end": 158
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 169,
                      "end": 170
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 173,
                            "end": 179
                          },
                          "start": 172,
                          "end": 179
                        },
                        "start": 171,
                        "end": 179
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 181,
                        "end": 187
                      },
                      "start": 180,
                      "end": 187
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 169,
                    "end": 188
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 197,
                      "end": 198
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 201,
                            "end": 207
                          },
                          "start": 200,
                          "end": 207
                        },
                        "start": 199,
                        "end": 207
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 209,
                        "end": 215
                      },
                      "start": 208,
                      "end": 215
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 197,
                    "end": 216
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "g",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 225,
                      "end": 226
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "n1",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 230,
                            "end": 236
                          },
                          "start": 229,
                          "end": 236
                        },
                        "start": 227,
                        "end": 236
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "n2",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 240,
                            "end": 246
                          },
                          "start": 239,
                          "end": 246
                        },
                        "start": 237,
                        "end": 246
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 248,
                        "end": 254
                      },
                      "start": 247,
                      "end": 254
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 225,
                    "end": 255
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "g",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 264,
                      "end": 265
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 268,
                            "end": 274
                          },
                          "start": 267,
                          "end": 274
                        },
                        "start": 266,
                        "end": 274
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 276,
                        "end": 282
                      },
                      "start": 275,
                      "end": 282
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 264,
                    "end": 283
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "g",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 292,
                      "end": 293
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
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 296,
                              "end": 297
                            },
                            "typeArguments": null,
                            "start": 296,
                            "end": 297
                          },
                          "start": 295,
                          "end": 297
                        },
                        "start": 294,
                        "end": 297
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 299,
                          "end": 300
                        },
                        "typeArguments": null,
                        "start": 299,
                        "end": 300
                      },
                      "start": 298,
                      "end": 300
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 292,
                    "end": 301
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "g",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 310,
                      "end": 311
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "C",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 314,
                              "end": 315
                            },
                            "typeArguments": null,
                            "start": 314,
                            "end": 315
                          },
                          "start": 313,
                          "end": 315
                        },
                        "start": 312,
                        "end": 315
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 317,
                        "end": 323
                      },
                      "start": 316,
                      "end": 323
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 310,
                    "end": 324
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "h",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 333,
                      "end": 334
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s1",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 338,
                            "end": 344
                          },
                          "start": 337,
                          "end": 344
                        },
                        "start": 335,
                        "end": 344
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s2",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 348,
                            "end": 354
                          },
                          "start": 347,
                          "end": 354
                        },
                        "start": 345,
                        "end": 354
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 356,
                        "end": 362
                      },
                      "start": 355,
                      "end": 362
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 333,
                    "end": 363
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "h",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 372,
                      "end": 373
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s1",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 377,
                            "end": 383
                          },
                          "start": 376,
                          "end": 383
                        },
                        "start": 374,
                        "end": 383
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s2",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 387,
                            "end": 393
                          },
                          "start": 386,
                          "end": 393
                        },
                        "start": 384,
                        "end": 393
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 395,
                        "end": 401
                      },
                      "start": 394,
                      "end": 401
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 372,
                    "end": 402
                  }
                ],
                "start": 159,
                "end": 408
              },
              "declare": false,
              "start": 147,
              "end": 408
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 140,
            "end": 408
          }
        ],
        "start": 12,
        "end": 410
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 410
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
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "O",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 426,
                    "end": 427
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 428,
                    "end": 429
                  },
                  "start": 426,
                  "end": 429
                },
                "typeArguments": null,
                "start": 426,
                "end": 429
              },
              "start": 425,
              "end": 429
            },
            "start": 424,
            "end": 429
          },
          "init": null,
          "definite": false,
          "start": 424,
          "end": 429
        }
      ],
      "declare": true,
      "start": 412,
      "end": 430
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
            "name": "e",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 438,
                "end": 444
              },
              "start": 437,
              "end": 444
            },
            "start": 436,
            "end": 444
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 445,
                "end": 446
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "g",
                "optional": false,
                "typeAnnotation": null,
                "start": 447,
                "end": 448
              },
              "optional": false,
              "computed": false,
              "start": 445,
              "end": 448
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "NewExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "O",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 453,
                    "end": 454
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 455,
                    "end": 456
                  },
                  "optional": false,
                  "computed": false,
                  "start": 453,
                  "end": 456
                },
                "typeArguments": null,
                "arguments": [],
                "start": 449,
                "end": 458
              }
            ],
            "optional": false,
            "start": 445,
            "end": 459
          },
          "definite": false,
          "start": 436,
          "end": 459
        }
      ],
      "declare": false,
      "start": 432,
      "end": 460
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
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 506,
                "end": 512
              },
              "start": 505,
              "end": 512
            },
            "start": 504,
            "end": 512
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 513,
                "end": 514
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 515,
                "end": 516
              },
              "optional": false,
              "computed": false,
              "start": 513,
              "end": 516
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 517,
                "end": 518
              }
            ],
            "optional": false,
            "start": 513,
            "end": 519
          },
          "definite": false,
          "start": 504,
          "end": 519
        }
      ],
      "declare": false,
      "start": 500,
      "end": 520
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null,
          "start": 529,
          "end": 530
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 531,
              "end": 532
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 533,
              "end": 534
            },
            "optional": false,
            "computed": false,
            "start": 531,
            "end": 534
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "nope",
              "raw": "\"nope\"",
              "start": 535,
              "end": 541
            }
          ],
          "optional": false,
          "start": 531,
          "end": 542
        },
        "start": 529,
        "end": 542
      },
      "directive": null,
      "start": 529,
      "end": 543
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
            "name": "z",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 583,
                "end": 589
              },
              "start": 582,
              "end": 589
            },
            "start": 581,
            "end": 589
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 590,
                "end": 591
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "g",
                "optional": false,
                "typeAnnotation": null,
                "start": 592,
                "end": 593
              },
              "optional": false,
              "computed": false,
              "start": 590,
              "end": 593
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 594,
                    "end": 595
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "g",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 596,
                    "end": 597
                  },
                  "optional": false,
                  "computed": false,
                  "start": 594,
                  "end": 597
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": 3,
                    "raw": "3",
                    "start": 598,
                    "end": 599
                  },
                  {
                    "type": "Literal",
                    "value": 3,
                    "raw": "3",
                    "start": 600,
                    "end": 601
                  }
                ],
                "optional": false,
                "start": 594,
                "end": 602
              }
            ],
            "optional": false,
            "start": 590,
            "end": 603
          },
          "definite": false,
          "start": 581,
          "end": 603
        }
      ],
      "declare": false,
      "start": 577,
      "end": 604
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "z",
          "optional": false,
          "typeAnnotation": null,
          "start": 613,
          "end": 614
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 615,
              "end": 616
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null,
              "start": 617,
              "end": 618
            },
            "optional": false,
            "computed": false,
            "start": 615,
            "end": 618
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 619,
              "end": 620
            },
            {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 621,
              "end": 622
            },
            {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 623,
              "end": 624
            }
          ],
          "optional": false,
          "start": 615,
          "end": 625
        },
        "start": 613,
        "end": 625
      },
      "directive": null,
      "start": 613,
      "end": 626
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "z",
          "optional": false,
          "typeAnnotation": null,
          "start": 639,
          "end": 640
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 641,
              "end": 642
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null,
              "start": 643,
              "end": 644
            },
            "optional": false,
            "computed": false,
            "start": 641,
            "end": 644
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 641,
          "end": 646
        },
        "start": 639,
        "end": 646
      },
      "directive": null,
      "start": 639,
      "end": 647
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "z",
          "optional": false,
          "typeAnnotation": null,
          "start": 660,
          "end": 661
        },
        "right": {
          "type": "CallExpression",
          "callee": {
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
              "name": "g",
              "optional": false,
              "typeAnnotation": null,
              "start": 664,
              "end": 665
            },
            "optional": false,
            "computed": false,
            "start": 662,
            "end": 665
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "NewExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "O",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 670,
                  "end": 671
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 672,
                  "end": 673
                },
                "optional": false,
                "computed": false,
                "start": 670,
                "end": 673
              },
              "typeArguments": null,
              "arguments": [],
              "start": 666,
              "end": 675
            }
          ],
          "optional": false,
          "start": 662,
          "end": 676
        },
        "start": 660,
        "end": 676
      },
      "directive": null,
      "start": 660,
      "end": 677
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "z",
          "optional": false,
          "typeAnnotation": null,
          "start": 716,
          "end": 717
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 718,
              "end": 719
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "h",
              "optional": false,
              "typeAnnotation": null,
              "start": 720,
              "end": 721
            },
            "optional": false,
            "computed": false,
            "start": 718,
            "end": 721
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 722,
              "end": 723
            },
            {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 724,
              "end": 725
            }
          ],
          "optional": false,
          "start": 718,
          "end": 726
        },
        "start": 716,
        "end": 726
      },
      "directive": null,
      "start": 716,
      "end": 727
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "z",
          "optional": false,
          "typeAnnotation": null,
          "start": 740,
          "end": 741
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 742,
              "end": 743
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "h",
              "optional": false,
              "typeAnnotation": null,
              "start": 744,
              "end": 745
            },
            "optional": false,
            "computed": false,
            "start": 742,
            "end": 745
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "hello",
              "raw": "\"hello\"",
              "start": 746,
              "end": 753
            },
            {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 754,
              "end": 755
            }
          ],
          "optional": false,
          "start": 742,
          "end": 756
        },
        "start": 740,
        "end": 756
      },
      "directive": null,
      "start": 740,
      "end": 757
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
            "name": "v",
            "optional": false,
            "typeAnnotation": null,
            "start": 771,
            "end": 772
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 773,
              "end": 774
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null,
              "start": 775,
              "end": 776
            },
            "optional": false,
            "computed": false,
            "start": 773,
            "end": 776
          },
          "definite": false,
          "start": 771,
          "end": 776
        }
      ],
      "declare": false,
      "start": 767,
      "end": 777
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 778
}
```
