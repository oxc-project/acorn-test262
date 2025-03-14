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
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 407,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 15,
            "end": 46,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 22,
              "end": 46,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 30,
                "end": 46,
                "body": []
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 28,
                "end": 29,
                "decorators": [],
                "name": "A",
                "optional": false
              },
              "implements": [],
              "superClass": null
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 52,
            "end": 84,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 59,
              "end": 84,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 77,
                "end": 84,
                "body": []
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 65,
                "end": 66,
                "decorators": [],
                "name": "B",
                "optional": false
              },
              "implements": [],
              "superClass": {
                "type": "Identifier",
                "start": 75,
                "end": 76,
                "decorators": [],
                "name": "A",
                "optional": false
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 90,
            "end": 131,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 97,
              "end": 131,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 115,
                "end": 131,
                "body": []
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 103,
                "end": 104,
                "decorators": [],
                "name": "C",
                "optional": false
              },
              "implements": [],
              "superClass": {
                "type": "Identifier",
                "start": 113,
                "end": 114,
                "decorators": [],
                "name": "B",
                "optional": false
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 137,
            "end": 405,
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 144,
              "end": 405,
              "body": {
                "type": "TSInterfaceBody",
                "start": 156,
                "end": 405,
                "body": [
                  {
                    "type": "TSMethodSignature",
                    "start": 166,
                    "end": 185,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 166,
                      "end": 167,
                      "decorators": [],
                      "name": "f",
                      "optional": false
                    },
                    "kind": "method",
                    "optional": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 168,
                        "end": 176,
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 169,
                          "end": 176,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 170,
                            "end": 176
                          }
                        }
                      }
                    ],
                    "readonly": false,
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
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 194,
                    "end": 213,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 194,
                      "end": 195,
                      "decorators": [],
                      "name": "f",
                      "optional": false
                    },
                    "kind": "method",
                    "optional": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 196,
                        "end": 204,
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 197,
                          "end": 204,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 198,
                            "end": 204
                          }
                        }
                      }
                    ],
                    "readonly": false,
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
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 222,
                    "end": 252,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 222,
                      "end": 223,
                      "decorators": [],
                      "name": "g",
                      "optional": false
                    },
                    "kind": "method",
                    "optional": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 224,
                        "end": 233,
                        "decorators": [],
                        "name": "n1",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 226,
                          "end": 233,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 227,
                            "end": 233
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "start": 234,
                        "end": 243,
                        "decorators": [],
                        "name": "n2",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 236,
                          "end": 243,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 237,
                            "end": 243
                          }
                        }
                      }
                    ],
                    "readonly": false,
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
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 261,
                    "end": 280,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 261,
                      "end": 262,
                      "decorators": [],
                      "name": "g",
                      "optional": false
                    },
                    "kind": "method",
                    "optional": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 263,
                        "end": 271,
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 264,
                          "end": 271,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 265,
                            "end": 271
                          }
                        }
                      }
                    ],
                    "readonly": false,
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
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 289,
                    "end": 298,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 289,
                      "end": 290,
                      "decorators": [],
                      "name": "g",
                      "optional": false
                    },
                    "kind": "method",
                    "optional": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 291,
                        "end": 294,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
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
                              "decorators": [],
                              "name": "A",
                              "optional": false
                            }
                          }
                        }
                      }
                    ],
                    "readonly": false,
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
                          "decorators": [],
                          "name": "C",
                          "optional": false
                        }
                      }
                    },
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 307,
                    "end": 321,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 307,
                      "end": 308,
                      "decorators": [],
                      "name": "g",
                      "optional": false
                    },
                    "kind": "method",
                    "optional": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 309,
                        "end": 312,
                        "decorators": [],
                        "name": "c",
                        "optional": false,
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
                              "decorators": [],
                              "name": "C",
                              "optional": false
                            }
                          }
                        }
                      }
                    ],
                    "readonly": false,
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
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 330,
                    "end": 360,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 330,
                      "end": 331,
                      "decorators": [],
                      "name": "h",
                      "optional": false
                    },
                    "kind": "method",
                    "optional": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 332,
                        "end": 341,
                        "decorators": [],
                        "name": "s1",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 334,
                          "end": 341,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 335,
                            "end": 341
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "start": 342,
                        "end": 351,
                        "decorators": [],
                        "name": "s2",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 344,
                          "end": 351,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 345,
                            "end": 351
                          }
                        }
                      }
                    ],
                    "readonly": false,
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
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 369,
                    "end": 399,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 369,
                      "end": 370,
                      "decorators": [],
                      "name": "h",
                      "optional": false
                    },
                    "kind": "method",
                    "optional": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 371,
                        "end": 380,
                        "decorators": [],
                        "name": "s1",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 373,
                          "end": 380,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 374,
                            "end": 380
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "start": 381,
                        "end": 390,
                        "decorators": [],
                        "name": "s2",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 383,
                          "end": 390,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 384,
                            "end": 390
                          }
                        }
                      }
                    ],
                    "readonly": false,
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
                    "static": false
                  }
                ]
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "start": 154,
                "end": 155,
                "decorators": [],
                "name": "I",
                "optional": false
              }
            },
            "exportKind": "type",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "decorators": [],
        "name": "O",
        "optional": false
      },
      "kind": "module"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 421,
            "end": 426,
            "decorators": [],
            "name": "x",
            "optional": false,
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
                    "decorators": [],
                    "name": "O",
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 425,
                    "end": 426,
                    "decorators": [],
                    "name": "I",
                    "optional": false
                  }
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 433,
            "end": 441,
            "decorators": [],
            "name": "e",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 434,
              "end": 441,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 435,
                "end": 441
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 442,
            "end": 456,
            "arguments": [
              {
                "type": "NewExpression",
                "start": 446,
                "end": 455,
                "arguments": [],
                "callee": {
                  "type": "MemberExpression",
                  "start": 450,
                  "end": 453,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 450,
                    "end": 451,
                    "decorators": [],
                    "name": "O",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 452,
                    "end": 453,
                    "decorators": [],
                    "name": "A",
                    "optional": false
                  }
                }
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 442,
              "end": 445,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 442,
                "end": 443,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 444,
                "end": 445,
                "decorators": [],
                "name": "g",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 501,
            "end": 509,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 502,
              "end": 509,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 503,
                "end": 509
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 510,
            "end": 516,
            "arguments": [
              {
                "type": "Literal",
                "start": 514,
                "end": 515,
                "raw": "3",
                "value": 3
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 510,
              "end": 513,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 510,
                "end": 511,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 512,
                "end": 513,
                "decorators": [],
                "name": "f",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "decorators": [],
          "name": "y",
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 528,
          "end": 539,
          "arguments": [
            {
              "type": "Literal",
              "start": 532,
              "end": 538,
              "raw": "\"nope\"",
              "value": "nope"
            }
          ],
          "callee": {
            "type": "MemberExpression",
            "start": 528,
            "end": 531,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 528,
              "end": 529,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 530,
              "end": 531,
              "decorators": [],
              "name": "f",
              "optional": false
            }
          },
          "optional": false
        }
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 578,
            "end": 586,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 579,
              "end": 586,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 580,
                "end": 586
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 587,
            "end": 600,
            "arguments": [
              {
                "type": "CallExpression",
                "start": 591,
                "end": 599,
                "arguments": [
                  {
                    "type": "Literal",
                    "start": 595,
                    "end": 596,
                    "raw": "3",
                    "value": 3
                  },
                  {
                    "type": "Literal",
                    "start": 597,
                    "end": 598,
                    "raw": "3",
                    "value": 3
                  }
                ],
                "callee": {
                  "type": "MemberExpression",
                  "start": 591,
                  "end": 594,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 591,
                    "end": 592,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 593,
                    "end": 594,
                    "decorators": [],
                    "name": "g",
                    "optional": false
                  }
                },
                "optional": false
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 587,
              "end": 590,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 587,
                "end": 588,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 589,
                "end": 590,
                "decorators": [],
                "name": "g",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "decorators": [],
          "name": "z",
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 612,
          "end": 622,
          "arguments": [
            {
              "type": "Literal",
              "start": 616,
              "end": 617,
              "raw": "2",
              "value": 2
            },
            {
              "type": "Literal",
              "start": 618,
              "end": 619,
              "raw": "2",
              "value": 2
            },
            {
              "type": "Literal",
              "start": 620,
              "end": 621,
              "raw": "2",
              "value": 2
            }
          ],
          "callee": {
            "type": "MemberExpression",
            "start": 612,
            "end": 615,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 612,
              "end": 613,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 614,
              "end": 615,
              "decorators": [],
              "name": "g",
              "optional": false
            }
          },
          "optional": false
        }
      }
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
          "decorators": [],
          "name": "z",
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 638,
          "end": 643,
          "arguments": [],
          "callee": {
            "type": "MemberExpression",
            "start": 638,
            "end": 641,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 638,
              "end": 639,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 640,
              "end": 641,
              "decorators": [],
              "name": "g",
              "optional": false
            }
          },
          "optional": false
        }
      }
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
          "decorators": [],
          "name": "z",
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 659,
          "end": 673,
          "arguments": [
            {
              "type": "NewExpression",
              "start": 663,
              "end": 672,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 667,
                "end": 670,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 667,
                  "end": 668,
                  "decorators": [],
                  "name": "O",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 669,
                  "end": 670,
                  "decorators": [],
                  "name": "B",
                  "optional": false
                }
              }
            }
          ],
          "callee": {
            "type": "MemberExpression",
            "start": 659,
            "end": 662,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 659,
              "end": 660,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 661,
              "end": 662,
              "decorators": [],
              "name": "g",
              "optional": false
            }
          },
          "optional": false
        }
      }
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
          "decorators": [],
          "name": "z",
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 715,
          "end": 723,
          "arguments": [
            {
              "type": "Literal",
              "start": 719,
              "end": 720,
              "raw": "2",
              "value": 2
            },
            {
              "type": "Literal",
              "start": 721,
              "end": 722,
              "raw": "2",
              "value": 2
            }
          ],
          "callee": {
            "type": "MemberExpression",
            "start": 715,
            "end": 718,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 715,
              "end": 716,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 717,
              "end": 718,
              "decorators": [],
              "name": "h",
              "optional": false
            }
          },
          "optional": false
        }
      }
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
          "decorators": [],
          "name": "z",
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 739,
          "end": 753,
          "arguments": [
            {
              "type": "Literal",
              "start": 743,
              "end": 750,
              "raw": "\"hello\"",
              "value": "hello"
            },
            {
              "type": "Literal",
              "start": 751,
              "end": 752,
              "raw": "0",
              "value": 0
            }
          ],
          "callee": {
            "type": "MemberExpression",
            "start": 739,
            "end": 742,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 739,
              "end": 740,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 741,
              "end": 742,
              "decorators": [],
              "name": "h",
              "optional": false
            }
          },
          "optional": false
        }
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 768,
            "end": 769,
            "decorators": [],
            "name": "v",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 770,
            "end": 773,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 770,
              "end": 771,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 772,
              "end": 773,
              "decorators": [],
              "name": "g",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
