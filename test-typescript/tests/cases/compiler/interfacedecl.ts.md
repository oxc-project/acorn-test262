interfacedecl.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 563,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 322,
      "body": {
        "type": "TSInterfaceBody",
        "start": 13,
        "end": 322,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 19,
            "end": 30,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 21,
              "end": 29,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 23,
                "end": 29
              }
            }
          },
          {
            "type": "TSCallSignatureDeclaration",
            "start": 35,
            "end": 62,
            "params": [
              {
                "type": "Identifier",
                "start": 36,
                "end": 37,
                "decorators": [],
                "name": "a",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 39,
                "end": 40,
                "decorators": [],
                "name": "b",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 42,
                "end": 52,
                "decorators": [],
                "name": "c",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 44,
                  "end": 52,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 46,
                    "end": 52
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 53,
              "end": 61,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 55,
                "end": 61
              }
            }
          },
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 72,
            "end": 87,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 78,
              "end": 86,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 80,
                "end": 86
              }
            }
          },
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 92,
            "end": 108,
            "params": [
              {
                "type": "Identifier",
                "start": 97,
                "end": 106,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 98,
                  "end": 106,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 100,
                    "end": 106
                  }
                }
              }
            ]
          },
          {
            "type": "TSIndexSignature",
            "start": 114,
            "end": 138,
            "parameters": [
              {
                "type": "Identifier",
                "start": 115,
                "end": 124,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 116,
                  "end": 124,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 118,
                    "end": 124
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 125,
              "end": 137,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 127,
                "end": 137,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 129,
                  "end": 137,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 131,
                    "end": 137
                  }
                }
              }
            }
          },
          {
            "type": "TSIndexSignature",
            "start": 143,
            "end": 160,
            "parameters": [
              {
                "type": "Identifier",
                "start": 144,
                "end": 153,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 145,
                  "end": 153,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 147,
                    "end": 153
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 154,
              "end": 159,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 156,
                "end": 159
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 166,
            "end": 169,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 166,
              "end": 168,
              "decorators": [],
              "name": "p1",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 174,
            "end": 185,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 174,
              "end": 176,
              "decorators": [],
              "name": "p2",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 176,
              "end": 184,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 178,
                "end": 184
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 190,
            "end": 194,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 190,
              "end": 192,
              "decorators": [],
              "name": "p3",
              "optional": false
            },
            "optional": true,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 199,
            "end": 211,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 199,
              "end": 201,
              "decorators": [],
              "name": "p4",
              "optional": false
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 202,
              "end": 210,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 204,
                "end": 210
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 216,
            "end": 241,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 216,
              "end": 218,
              "decorators": [],
              "name": "p5",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 218,
              "end": 240,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 220,
                "end": 240,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 221,
                    "end": 230,
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 222,
                      "end": 230,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 224,
                        "end": 230
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 232,
                  "end": 240,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 234,
                    "end": 240
                  }
                }
              }
            }
          },
          {
            "type": "TSMethodSignature",
            "start": 247,
            "end": 252,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 247,
              "end": 249,
              "decorators": [],
              "name": "f1",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 257,
            "end": 264,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 257,
              "end": 259,
              "decorators": [],
              "name": "f2",
              "optional": false
            },
            "kind": "method",
            "optional": true,
            "params": [],
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 269,
            "end": 291,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 269,
              "end": 271,
              "decorators": [],
              "name": "f3",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 272,
                "end": 281,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 273,
                  "end": 281,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 275,
                    "end": 281
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 282,
              "end": 290,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 284,
                "end": 290
              }
            },
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 296,
            "end": 320,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 296,
              "end": 298,
              "decorators": [],
              "name": "f4",
              "optional": false
            },
            "kind": "method",
            "optional": true,
            "params": [
              {
                "type": "Identifier",
                "start": 301,
                "end": 310,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 302,
                  "end": 310,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 304,
                    "end": 310
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 311,
              "end": 319,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 313,
                "end": 319
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
        "start": 10,
        "end": 12,
        "decorators": [],
        "name": "a0",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 325,
      "end": 366,
      "body": {
        "type": "TSInterfaceBody",
        "start": 338,
        "end": 366,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 344,
            "end": 364,
            "parameters": [
              {
                "type": "Identifier",
                "start": 345,
                "end": 354,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 346,
                  "end": 354,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 348,
                    "end": 354
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 355,
              "end": 363,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 357,
                "end": 363
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 335,
        "end": 337,
        "decorators": [],
        "name": "a1",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 368,
      "end": 409,
      "body": {
        "type": "TSInterfaceBody",
        "start": 381,
        "end": 409,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 387,
            "end": 407,
            "parameters": [
              {
                "type": "Identifier",
                "start": 388,
                "end": 397,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 389,
                  "end": 397,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 391,
                    "end": 397
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 398,
              "end": 406,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 400,
                "end": 406
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 378,
        "end": 380,
        "decorators": [],
        "name": "a2",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 411,
      "end": 426,
      "body": {
        "type": "TSInterfaceBody",
        "start": 423,
        "end": 426,
        "body": []
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 421,
        "end": 422,
        "decorators": [],
        "name": "a",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 428,
      "end": 453,
      "body": {
        "type": "TSInterfaceBody",
        "start": 450,
        "end": 453,
        "body": []
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 448,
          "end": 449,
          "expression": {
            "type": "Identifier",
            "start": 448,
            "end": 449,
            "decorators": [],
            "name": "a",
            "optional": false
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 438,
        "end": 439,
        "decorators": [],
        "name": "b",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 455,
      "end": 483,
      "body": {
        "type": "TSInterfaceBody",
        "start": 480,
        "end": 483,
        "body": []
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 475,
          "end": 476,
          "expression": {
            "type": "Identifier",
            "start": 475,
            "end": 476,
            "decorators": [],
            "name": "a",
            "optional": false
          }
        },
        {
          "type": "TSInterfaceHeritage",
          "start": 478,
          "end": 479,
          "expression": {
            "type": "Identifier",
            "start": 478,
            "end": 479,
            "decorators": [],
            "name": "b",
            "optional": false
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 465,
        "end": 466,
        "decorators": [],
        "name": "c",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 485,
      "end": 510,
      "body": {
        "type": "TSInterfaceBody",
        "start": 507,
        "end": 510,
        "body": []
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 505,
          "end": 506,
          "expression": {
            "type": "Identifier",
            "start": 505,
            "end": 506,
            "decorators": [],
            "name": "a",
            "optional": false
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 495,
        "end": 496,
        "decorators": [],
        "name": "d",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 512,
      "end": 537,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 534,
        "end": 537,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 518,
        "end": 520,
        "decorators": [],
        "name": "c1",
        "optional": false
      },
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 532,
          "end": 533,
          "expression": {
            "type": "Identifier",
            "start": 532,
            "end": 533,
            "decorators": [],
            "name": "a",
            "optional": false
          }
        }
      ],
      "superClass": null
    },
    {
      "type": "VariableDeclaration",
      "start": 538,
      "end": 563,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 542,
          "end": 562,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 542,
            "end": 551,
            "decorators": [],
            "name": "instance2",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 554,
            "end": 562,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 558,
              "end": 560,
              "decorators": [],
              "name": "c1",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script"
}
```
