__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 776,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 407,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "name": "O",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 407,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 15,
            "end": 46,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 22,
              "end": 46,
              "id": {
                "type": "Identifier",
                "start": 28,
                "end": 29,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 30,
                "end": 46,
                "body": []
              },
              "decorators": [],
              "typeParameters": null,
              "implements": [],
              "abstract": false,
              "declare": false,
              "superTypeArguments": null
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 52,
            "end": 84,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 59,
              "end": 84,
              "id": {
                "type": "Identifier",
                "start": 65,
                "end": 66,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": {
                "type": "Identifier",
                "start": 75,
                "end": 76,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "body": {
                "type": "ClassBody",
                "start": 77,
                "end": 84,
                "body": []
              },
              "decorators": [],
              "typeParameters": null,
              "implements": [],
              "abstract": false,
              "declare": false,
              "superTypeArguments": null
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 90,
            "end": 131,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 97,
              "end": 131,
              "id": {
                "type": "Identifier",
                "start": 103,
                "end": 104,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": {
                "type": "Identifier",
                "start": 113,
                "end": 114,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "body": {
                "type": "ClassBody",
                "start": 115,
                "end": 131,
                "body": []
              },
              "decorators": [],
              "typeParameters": null,
              "implements": [],
              "abstract": false,
              "declare": false,
              "superTypeArguments": null
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 137,
            "end": 405,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 144,
              "end": 405,
              "id": {
                "type": "Identifier",
                "start": 154,
                "end": 155,
                "name": "I",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
              "typeParameters": null,
              "body": {
                "type": "TSInterfaceBody",
                "start": 156,
                "end": 405,
                "body": [
                  {
                    "type": "TSMethodSignature",
                    "start": 166,
                    "end": 185,
                    "key": {
                      "type": "Identifier",
                      "start": 166,
                      "end": 167,
                      "name": "f",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 168,
                        "end": 176,
                        "name": "s",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 169,
                          "end": 176,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 170,
                            "end": 176
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 177,
                      "end": 184,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 178,
                        "end": 184
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 194,
                    "end": 213,
                    "key": {
                      "type": "Identifier",
                      "start": 194,
                      "end": 195,
                      "name": "f",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 196,
                        "end": 204,
                        "name": "n",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 197,
                          "end": 204,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 198,
                            "end": 204
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 205,
                      "end": 212,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 206,
                        "end": 212
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 222,
                    "end": 252,
                    "key": {
                      "type": "Identifier",
                      "start": 222,
                      "end": 223,
                      "name": "g",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 224,
                        "end": 233,
                        "name": "n1",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 226,
                          "end": 233,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 227,
                            "end": 233
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 234,
                        "end": 243,
                        "name": "n2",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 236,
                          "end": 243,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 237,
                            "end": 243
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 244,
                      "end": 251,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 245,
                        "end": 251
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 261,
                    "end": 280,
                    "key": {
                      "type": "Identifier",
                      "start": 261,
                      "end": 262,
                      "name": "g",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 263,
                        "end": 271,
                        "name": "n",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 264,
                          "end": 271,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 265,
                            "end": 271
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 272,
                      "end": 279,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 273,
                        "end": 279
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 289,
                    "end": 298,
                    "key": {
                      "type": "Identifier",
                      "start": 289,
                      "end": 290,
                      "name": "g",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 291,
                        "end": 294,
                        "name": "a",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 292,
                          "end": 294,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 293,
                            "end": 294,
                            "typeName": {
                              "type": "Identifier",
                              "start": 293,
                              "end": 294,
                              "name": "A",
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
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 295,
                      "end": 297,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 296,
                        "end": 297,
                        "typeName": {
                          "type": "Identifier",
                          "start": 296,
                          "end": 297,
                          "name": "C",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 307,
                    "end": 321,
                    "key": {
                      "type": "Identifier",
                      "start": 307,
                      "end": 308,
                      "name": "g",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 309,
                        "end": 312,
                        "name": "c",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 310,
                          "end": 312,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 311,
                            "end": 312,
                            "typeName": {
                              "type": "Identifier",
                              "start": 311,
                              "end": 312,
                              "name": "C",
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
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 313,
                      "end": 320,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 314,
                        "end": 320
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 330,
                    "end": 360,
                    "key": {
                      "type": "Identifier",
                      "start": 330,
                      "end": 331,
                      "name": "h",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 332,
                        "end": 341,
                        "name": "s1",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 334,
                          "end": 341,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 335,
                            "end": 341
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 342,
                        "end": 351,
                        "name": "s2",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 344,
                          "end": 351,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 345,
                            "end": 351
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 352,
                      "end": 359,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 353,
                        "end": 359
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 369,
                    "end": 399,
                    "key": {
                      "type": "Identifier",
                      "start": 369,
                      "end": 370,
                      "name": "h",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 371,
                        "end": 380,
                        "name": "s1",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 373,
                          "end": 380,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 374,
                            "end": 380
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 381,
                        "end": 390,
                        "name": "s2",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 383,
                          "end": 390,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 384,
                            "end": 390
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 391,
                      "end": 398,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 392,
                        "end": 398
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  }
                ]
              },
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "type"
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "VariableDeclaration",
      "start": 409,
      "end": 427,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 421,
          "end": 426,
          "id": {
            "type": "Identifier",
            "start": 421,
            "end": 426,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 422,
              "end": 426,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 423,
                "end": 426,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 423,
                  "end": 426,
                  "left": {
                    "type": "Identifier",
                    "start": 423,
                    "end": 424,
                    "name": "O",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 425,
                    "end": 426,
                    "name": "I",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 429,
      "end": 457,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 433,
          "end": 456,
          "id": {
            "type": "Identifier",
            "start": 433,
            "end": 441,
            "name": "e",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 434,
              "end": 441,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 435,
                "end": 441
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 442,
            "end": 456,
            "callee": {
              "type": "MemberExpression",
              "start": 442,
              "end": 445,
              "object": {
                "type": "Identifier",
                "start": 442,
                "end": 443,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 444,
                "end": 445,
                "name": "g",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "NewExpression",
                "start": 446,
                "end": 455,
                "callee": {
                  "type": "MemberExpression",
                  "start": 450,
                  "end": 453,
                  "object": {
                    "type": "Identifier",
                    "start": 450,
                    "end": 451,
                    "name": "O",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 452,
                    "end": 453,
                    "name": "A",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "arguments": [],
                "typeArguments": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 497,
      "end": 517,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 501,
          "end": 516,
          "id": {
            "type": "Identifier",
            "start": 501,
            "end": 509,
            "name": "y",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 502,
              "end": 509,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 503,
                "end": 509
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 510,
            "end": 516,
            "callee": {
              "type": "MemberExpression",
              "start": 510,
              "end": 513,
              "object": {
                "type": "Identifier",
                "start": 510,
                "end": 511,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 512,
                "end": 513,
                "name": "f",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 514,
                "end": 515,
                "value": 3,
                "raw": "3"
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 526,
      "end": 540,
      "expression": {
        "type": "AssignmentExpression",
        "start": 526,
        "end": 539,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 526,
          "end": 527,
          "name": "y",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 528,
          "end": 539,
          "callee": {
            "type": "MemberExpression",
            "start": 528,
            "end": 531,
            "object": {
              "type": "Identifier",
              "start": 528,
              "end": 529,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 530,
              "end": 531,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "arguments": [
            {
              "type": "Literal",
              "start": 532,
              "end": 538,
              "value": "nope",
              "raw": "\"nope\""
            }
          ],
          "optional": false,
          "typeArguments": null
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 574,
      "end": 601,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 578,
          "end": 600,
          "id": {
            "type": "Identifier",
            "start": 578,
            "end": 586,
            "name": "z",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 579,
              "end": 586,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 580,
                "end": 586
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 587,
            "end": 600,
            "callee": {
              "type": "MemberExpression",
              "start": 587,
              "end": 590,
              "object": {
                "type": "Identifier",
                "start": 587,
                "end": 588,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 589,
                "end": 590,
                "name": "g",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "CallExpression",
                "start": 591,
                "end": 599,
                "callee": {
                  "type": "MemberExpression",
                  "start": 591,
                  "end": 594,
                  "object": {
                    "type": "Identifier",
                    "start": 591,
                    "end": 592,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 593,
                    "end": 594,
                    "name": "g",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "Literal",
                    "start": 595,
                    "end": 596,
                    "value": 3,
                    "raw": "3"
                  },
                  {
                    "type": "Literal",
                    "start": 597,
                    "end": 598,
                    "value": 3,
                    "raw": "3"
                  }
                ],
                "optional": false,
                "typeArguments": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 610,
      "end": 623,
      "expression": {
        "type": "AssignmentExpression",
        "start": 610,
        "end": 622,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 610,
          "end": 611,
          "name": "z",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 612,
          "end": 622,
          "callee": {
            "type": "MemberExpression",
            "start": 612,
            "end": 615,
            "object": {
              "type": "Identifier",
              "start": 612,
              "end": 613,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 614,
              "end": 615,
              "name": "g",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "arguments": [
            {
              "type": "Literal",
              "start": 616,
              "end": 617,
              "value": 2,
              "raw": "2"
            },
            {
              "type": "Literal",
              "start": 618,
              "end": 619,
              "value": 2,
              "raw": "2"
            },
            {
              "type": "Literal",
              "start": 620,
              "end": 621,
              "value": 2,
              "raw": "2"
            }
          ],
          "optional": false,
          "typeArguments": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 636,
      "end": 644,
      "expression": {
        "type": "AssignmentExpression",
        "start": 636,
        "end": 643,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 636,
          "end": 637,
          "name": "z",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 638,
          "end": 643,
          "callee": {
            "type": "MemberExpression",
            "start": 638,
            "end": 641,
            "object": {
              "type": "Identifier",
              "start": 638,
              "end": 639,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 640,
              "end": 641,
              "name": "g",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "arguments": [],
          "optional": false,
          "typeArguments": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 657,
      "end": 674,
      "expression": {
        "type": "AssignmentExpression",
        "start": 657,
        "end": 673,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 657,
          "end": 658,
          "name": "z",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 659,
          "end": 673,
          "callee": {
            "type": "MemberExpression",
            "start": 659,
            "end": 662,
            "object": {
              "type": "Identifier",
              "start": 659,
              "end": 660,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 661,
              "end": 662,
              "name": "g",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "arguments": [
            {
              "type": "NewExpression",
              "start": 663,
              "end": 672,
              "callee": {
                "type": "MemberExpression",
                "start": 667,
                "end": 670,
                "object": {
                  "type": "Identifier",
                  "start": 667,
                  "end": 668,
                  "name": "O",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 669,
                  "end": 670,
                  "name": "B",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [],
              "typeArguments": null
            }
          ],
          "optional": false,
          "typeArguments": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 713,
      "end": 724,
      "expression": {
        "type": "AssignmentExpression",
        "start": 713,
        "end": 723,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 713,
          "end": 714,
          "name": "z",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 715,
          "end": 723,
          "callee": {
            "type": "MemberExpression",
            "start": 715,
            "end": 718,
            "object": {
              "type": "Identifier",
              "start": 715,
              "end": 716,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 717,
              "end": 718,
              "name": "h",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "arguments": [
            {
              "type": "Literal",
              "start": 719,
              "end": 720,
              "value": 2,
              "raw": "2"
            },
            {
              "type": "Literal",
              "start": 721,
              "end": 722,
              "value": 2,
              "raw": "2"
            }
          ],
          "optional": false,
          "typeArguments": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 737,
      "end": 754,
      "expression": {
        "type": "AssignmentExpression",
        "start": 737,
        "end": 753,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 737,
          "end": 738,
          "name": "z",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 739,
          "end": 753,
          "callee": {
            "type": "MemberExpression",
            "start": 739,
            "end": 742,
            "object": {
              "type": "Identifier",
              "start": 739,
              "end": 740,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 741,
              "end": 742,
              "name": "h",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "arguments": [
            {
              "type": "Literal",
              "start": 743,
              "end": 750,
              "value": "hello",
              "raw": "\"hello\""
            },
            {
              "type": "Literal",
              "start": 751,
              "end": 752,
              "value": 0,
              "raw": "0"
            }
          ],
          "optional": false,
          "typeArguments": null
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 764,
      "end": 774,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 768,
          "end": 773,
          "id": {
            "type": "Identifier",
            "start": 768,
            "end": 769,
            "name": "v",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 770,
            "end": 773,
            "object": {
              "type": "Identifier",
              "start": 770,
              "end": 771,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 772,
              "end": 773,
              "name": "g",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
