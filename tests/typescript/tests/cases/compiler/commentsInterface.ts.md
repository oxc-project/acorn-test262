__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 26,
  "end": 1641,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 26,
      "end": 42,
      "id": {
        "type": "Identifier",
        "start": 36,
        "end": 38,
        "decorators": [],
        "name": "i1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 39,
        "end": 42,
        "body": []
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 43,
      "end": 56,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 47,
          "end": 55,
          "id": {
            "type": "Identifier",
            "start": 47,
            "end": 55,
            "decorators": [],
            "name": "i1_i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 51,
              "end": 55,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 53,
                "end": 55,
                "typeName": {
                  "type": "Identifier",
                  "start": 53,
                  "end": 55,
                  "decorators": [],
                  "name": "i1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 57,
      "end": 76,
      "id": {
        "type": "Identifier",
        "start": 67,
        "end": 72,
        "decorators": [],
        "name": "nc_i1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 73,
        "end": 76,
        "body": []
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 77,
      "end": 96,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 81,
          "end": 95,
          "id": {
            "type": "Identifier",
            "start": 81,
            "end": 95,
            "decorators": [],
            "name": "nc_i1_i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 88,
              "end": 95,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 90,
                "end": 95,
                "typeName": {
                  "type": "Identifier",
                  "start": 90,
                  "end": 95,
                  "decorators": [],
                  "name": "nc_i1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 137,
      "end": 682,
      "id": {
        "type": "Identifier",
        "start": 147,
        "end": 149,
        "decorators": [],
        "name": "i2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 150,
        "end": 682,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 176,
            "end": 186,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 176,
              "end": 177,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 177,
              "end": 185,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 179,
                "end": 185
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 213,
            "end": 255,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 213,
              "end": 216,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 216,
              "end": 254,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 218,
                "end": 254,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 234,
                    "end": 243,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 235,
                      "end": 243,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 237,
                        "end": 243
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 245,
                  "end": 254,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 248,
                    "end": 254
                  }
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSIndexSignature",
            "start": 286,
            "end": 320,
            "parameters": [
              {
                "type": "Identifier",
                "start": 304,
                "end": 313,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 305,
                  "end": 313,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 307,
                    "end": 313
                  }
                }
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 314,
              "end": 319,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 316,
                "end": 319
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          },
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 345,
            "end": 368,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 361,
                "end": 366,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 362,
                  "end": 366,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 364,
                    "end": 366,
                    "typeName": {
                      "type": "Identifier",
                      "start": 364,
                      "end": 366,
                      "decorators": [],
                      "name": "i1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              }
            ],
            "returnType": null
          },
          {
            "type": "TSPropertySignature",
            "start": 373,
            "end": 386,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 373,
              "end": 377,
              "decorators": [],
              "name": "nc_x",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 377,
              "end": 385,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 379,
                "end": 385
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 391,
            "end": 421,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 391,
              "end": 397,
              "decorators": [],
              "name": "nc_foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 397,
              "end": 420,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 399,
                "end": 420,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 400,
                    "end": 409,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 401,
                      "end": 409,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 403,
                        "end": 409
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 411,
                  "end": 420,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 414,
                    "end": 420
                  }
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSIndexSignature",
            "start": 426,
            "end": 446,
            "parameters": [
              {
                "type": "Identifier",
                "start": 427,
                "end": 436,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 428,
                  "end": 436,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 430,
                    "end": 436
                  }
                }
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 437,
              "end": 445,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 439,
                "end": 445
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          },
          {
            "type": "TSCallSignatureDeclaration",
            "start": 484,
            "end": 548,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 501,
                "end": 510,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 502,
                  "end": 510,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 504,
                    "end": 510
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 528,
                "end": 537,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 529,
                  "end": 537,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 531,
                    "end": 537
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 539,
              "end": 547,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 541,
                "end": 547
              }
            }
          },
          {
            "type": "TSMethodSignature",
            "start": 577,
            "end": 617,
            "key": {
              "type": "Identifier",
              "start": 577,
              "end": 582,
              "decorators": [],
              "name": "fnfoo",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 598,
                "end": 607,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 599,
                  "end": 607,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 601,
                    "end": 607
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 608,
              "end": 616,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 610,
                "end": 616
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 622,
            "end": 650,
            "key": {
              "type": "Identifier",
              "start": 622,
              "end": 630,
              "decorators": [],
              "name": "nc_fnfoo",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 631,
                "end": 640,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 632,
                  "end": 640,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 634,
                    "end": 640
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 641,
              "end": 649,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 643,
                "end": 649
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 667,
            "end": 680,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 667,
              "end": 671,
              "decorators": [],
              "name": "nc_y",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 671,
              "end": 679,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 673,
                "end": 679
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 683,
      "end": 696,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 687,
          "end": 695,
          "id": {
            "type": "Identifier",
            "start": 687,
            "end": 695,
            "decorators": [],
            "name": "i2_i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 691,
              "end": 695,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 693,
                "end": 695,
                "typeName": {
                  "type": "Identifier",
                  "start": 693,
                  "end": 695,
                  "decorators": [],
                  "name": "i2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 697,
      "end": 717,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 701,
          "end": 716,
          "id": {
            "type": "Identifier",
            "start": 701,
            "end": 707,
            "decorators": [],
            "name": "i2_i_x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 710,
            "end": 716,
            "object": {
              "type": "Identifier",
              "start": 710,
              "end": 714,
              "decorators": [],
              "name": "i2_i",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 715,
              "end": 716,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 718,
      "end": 742,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 722,
          "end": 741,
          "id": {
            "type": "Identifier",
            "start": 722,
            "end": 730,
            "decorators": [],
            "name": "i2_i_foo",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 733,
            "end": 741,
            "object": {
              "type": "Identifier",
              "start": 733,
              "end": 737,
              "decorators": [],
              "name": "i2_i",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 738,
              "end": 741,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 743,
      "end": 773,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 747,
          "end": 772,
          "id": {
            "type": "Identifier",
            "start": 747,
            "end": 757,
            "decorators": [],
            "name": "i2_i_foo_r",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 760,
            "end": 772,
            "callee": {
              "type": "MemberExpression",
              "start": 760,
              "end": 768,
              "object": {
                "type": "Identifier",
                "start": 760,
                "end": 764,
                "decorators": [],
                "name": "i2_i",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 765,
                "end": 768,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 769,
                "end": 771,
                "value": 30,
                "raw": "30"
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 774,
      "end": 805,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 778,
          "end": 804,
          "id": {
            "type": "Identifier",
            "start": 778,
            "end": 788,
            "decorators": [],
            "name": "i2_i_i2_si",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 791,
            "end": 804,
            "object": {
              "type": "Identifier",
              "start": 791,
              "end": 795,
              "decorators": [],
              "name": "i2_i",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Literal",
              "start": 796,
              "end": 803,
              "value": "hello",
              "raw": "\"hello\""
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
      "type": "VariableDeclaration",
      "start": 806,
      "end": 832,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 810,
          "end": 831,
          "id": {
            "type": "Identifier",
            "start": 810,
            "end": 820,
            "decorators": [],
            "name": "i2_i_i2_ii",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 823,
            "end": 831,
            "object": {
              "type": "Identifier",
              "start": 823,
              "end": 827,
              "decorators": [],
              "name": "i2_i",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Literal",
              "start": 828,
              "end": 830,
              "value": 30,
              "raw": "30"
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
      "type": "VariableDeclaration",
      "start": 833,
      "end": 861,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 837,
          "end": 860,
          "id": {
            "type": "Identifier",
            "start": 837,
            "end": 843,
            "decorators": [],
            "name": "i2_i_n",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 846,
            "end": 860,
            "callee": {
              "type": "Identifier",
              "start": 850,
              "end": 854,
              "decorators": [],
              "name": "i2_i",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 855,
                "end": 859,
                "decorators": [],
                "name": "i1_i",
                "optional": false,
                "typeAnnotation": null
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 862,
      "end": 888,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 866,
          "end": 887,
          "id": {
            "type": "Identifier",
            "start": 866,
            "end": 875,
            "decorators": [],
            "name": "i2_i_nc_x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 878,
            "end": 887,
            "object": {
              "type": "Identifier",
              "start": 878,
              "end": 882,
              "decorators": [],
              "name": "i2_i",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 883,
              "end": 887,
              "decorators": [],
              "name": "nc_x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 889,
      "end": 919,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 893,
          "end": 918,
          "id": {
            "type": "Identifier",
            "start": 893,
            "end": 904,
            "decorators": [],
            "name": "i2_i_nc_foo",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 907,
            "end": 918,
            "object": {
              "type": "Identifier",
              "start": 907,
              "end": 911,
              "decorators": [],
              "name": "i2_i",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 912,
              "end": 918,
              "decorators": [],
              "name": "nc_foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 920,
      "end": 956,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 924,
          "end": 955,
          "id": {
            "type": "Identifier",
            "start": 924,
            "end": 937,
            "decorators": [],
            "name": "i2_i_nc_foo_r",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 940,
            "end": 955,
            "callee": {
              "type": "MemberExpression",
              "start": 940,
              "end": 951,
              "object": {
                "type": "Identifier",
                "start": 940,
                "end": 944,
                "decorators": [],
                "name": "i2_i",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 945,
                "end": 951,
                "decorators": [],
                "name": "nc_foo",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 952,
                "end": 954,
                "value": 30,
                "raw": "30"
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 957,
      "end": 983,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 961,
          "end": 982,
          "id": {
            "type": "Identifier",
            "start": 961,
            "end": 967,
            "decorators": [],
            "name": "i2_i_r",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 970,
            "end": 982,
            "callee": {
              "type": "Identifier",
              "start": 970,
              "end": 974,
              "decorators": [],
              "name": "i2_i",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 975,
                "end": 977,
                "value": 10,
                "raw": "10"
              },
              {
                "type": "Literal",
                "start": 979,
                "end": 981,
                "value": 20,
                "raw": "20"
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 984,
      "end": 1012,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 988,
          "end": 1011,
          "id": {
            "type": "Identifier",
            "start": 988,
            "end": 998,
            "decorators": [],
            "name": "i2_i_fnfoo",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 1001,
            "end": 1011,
            "object": {
              "type": "Identifier",
              "start": 1001,
              "end": 1005,
              "decorators": [],
              "name": "i2_i",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 1006,
              "end": 1011,
              "decorators": [],
              "name": "fnfoo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1013,
      "end": 1047,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1017,
          "end": 1046,
          "id": {
            "type": "Identifier",
            "start": 1017,
            "end": 1029,
            "decorators": [],
            "name": "i2_i_fnfoo_r",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 1032,
            "end": 1046,
            "callee": {
              "type": "MemberExpression",
              "start": 1032,
              "end": 1042,
              "object": {
                "type": "Identifier",
                "start": 1032,
                "end": 1036,
                "decorators": [],
                "name": "i2_i",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 1037,
                "end": 1042,
                "decorators": [],
                "name": "fnfoo",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 1043,
                "end": 1045,
                "value": 10,
                "raw": "10"
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1048,
      "end": 1082,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1052,
          "end": 1081,
          "id": {
            "type": "Identifier",
            "start": 1052,
            "end": 1065,
            "decorators": [],
            "name": "i2_i_nc_fnfoo",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 1068,
            "end": 1081,
            "object": {
              "type": "Identifier",
              "start": 1068,
              "end": 1072,
              "decorators": [],
              "name": "i2_i",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 1073,
              "end": 1081,
              "decorators": [],
              "name": "nc_fnfoo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1083,
      "end": 1123,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1087,
          "end": 1122,
          "id": {
            "type": "Identifier",
            "start": 1087,
            "end": 1102,
            "decorators": [],
            "name": "i2_i_nc_fnfoo_r",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 1105,
            "end": 1122,
            "callee": {
              "type": "MemberExpression",
              "start": 1105,
              "end": 1118,
              "object": {
                "type": "Identifier",
                "start": 1105,
                "end": 1109,
                "decorators": [],
                "name": "i2_i",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 1110,
                "end": 1118,
                "decorators": [],
                "name": "nc_fnfoo",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 1119,
                "end": 1121,
                "value": 10,
                "raw": "10"
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1124,
      "end": 1393,
      "id": {
        "type": "Identifier",
        "start": 1134,
        "end": 1136,
        "decorators": [],
        "name": "i3",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 1137,
        "end": 1393,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1166,
            "end": 1176,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1166,
              "end": 1167,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1167,
              "end": 1175,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1169,
                "end": 1175
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 1205,
            "end": 1247,
            "key": {
              "type": "Identifier",
              "start": 1205,
              "end": 1206,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 1228,
                "end": 1237,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1229,
                  "end": 1237,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1231,
                    "end": 1237
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1238,
              "end": 1246,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1240,
                "end": 1246
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 1267,
            "end": 1311,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1267,
              "end": 1268,
              "decorators": [],
              "name": "l",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1268,
              "end": 1310,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 1270,
                "end": 1310,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1290,
                    "end": 1299,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1291,
                      "end": 1299,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1293,
                        "end": 1299
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 1301,
                  "end": 1310,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1304,
                    "end": 1310
                  }
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 1316,
            "end": 1329,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1316,
              "end": 1320,
              "decorators": [],
              "name": "nc_x",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1320,
              "end": 1328,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1322,
                "end": 1328
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 1334,
            "end": 1358,
            "key": {
              "type": "Identifier",
              "start": 1334,
              "end": 1338,
              "decorators": [],
              "name": "nc_f",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 1339,
                "end": 1348,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1340,
                  "end": 1348,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1342,
                    "end": 1348
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1349,
              "end": 1357,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1351,
                "end": 1357
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 1363,
            "end": 1391,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1363,
              "end": 1367,
              "decorators": [],
              "name": "nc_l",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1367,
              "end": 1390,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 1369,
                "end": 1390,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1370,
                    "end": 1379,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1371,
                      "end": 1379,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1373,
                        "end": 1379
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 1381,
                  "end": 1390,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1384,
                    "end": 1390
                  }
                }
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1394,
      "end": 1407,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1398,
          "end": 1406,
          "id": {
            "type": "Identifier",
            "start": 1398,
            "end": 1406,
            "decorators": [],
            "name": "i3_i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1402,
              "end": 1406,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1404,
                "end": 1406,
                "typeName": {
                  "type": "Identifier",
                  "start": 1404,
                  "end": 1406,
                  "decorators": [],
                  "name": "i3",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 1408,
      "end": 1587,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1408,
        "end": 1586,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1408,
          "end": 1412,
          "decorators": [],
          "name": "i3_i",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "ObjectExpression",
          "start": 1415,
          "end": 1586,
          "properties": [
            {
              "type": "Property",
              "start": 1421,
              "end": 1472,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 1421,
                "end": 1422,
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "ArrowFunctionExpression",
                "start": 1435,
                "end": 1472,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1447,
                    "end": 1456,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1448,
                      "end": 1456,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1450,
                        "end": 1456
                      }
                    }
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BinaryExpression",
                  "start": 1461,
                  "end": 1472,
                  "left": {
                    "type": "Literal",
                    "start": 1461,
                    "end": 1468,
                    "value": "Hello",
                    "raw": "\"Hello\""
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "start": 1471,
                    "end": 1472,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "id": null,
                "generator": false
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false
            },
            {
              "type": "Property",
              "start": 1478,
              "end": 1487,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 1478,
                "end": 1479,
                "decorators": [],
                "name": "l",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "MemberExpression",
                "start": 1481,
                "end": 1487,
                "object": {
                  "type": "ThisExpression",
                  "start": 1481,
                  "end": 1485
                },
                "property": {
                  "type": "Identifier",
                  "start": 1486,
                  "end": 1487,
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false
            },
            {
              "type": "Property",
              "start": 1509,
              "end": 1522,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 1509,
                "end": 1510,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "CallExpression",
                "start": 1512,
                "end": 1522,
                "callee": {
                  "type": "MemberExpression",
                  "start": 1512,
                  "end": 1518,
                  "object": {
                    "type": "ThisExpression",
                    "start": 1512,
                    "end": 1516
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 1517,
                    "end": 1518,
                    "decorators": [],
                    "name": "f",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "start": 1519,
                    "end": 1521,
                    "value": 10,
                    "raw": "10"
                  }
                ],
                "optional": false
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false
            },
            {
              "type": "Property",
              "start": 1528,
              "end": 1548,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 1528,
                "end": 1532,
                "decorators": [],
                "name": "nc_x",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "CallExpression",
                "start": 1534,
                "end": 1548,
                "callee": {
                  "type": "MemberExpression",
                  "start": 1534,
                  "end": 1540,
                  "object": {
                    "type": "ThisExpression",
                    "start": 1534,
                    "end": 1538
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 1539,
                    "end": 1540,
                    "decorators": [],
                    "name": "l",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "MemberExpression",
                    "start": 1541,
                    "end": 1547,
                    "object": {
                      "type": "ThisExpression",
                      "start": 1541,
                      "end": 1545
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 1546,
                      "end": 1547,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  }
                ],
                "optional": false
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false
            },
            {
              "type": "Property",
              "start": 1554,
              "end": 1566,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 1554,
                "end": 1558,
                "decorators": [],
                "name": "nc_f",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "MemberExpression",
                "start": 1560,
                "end": 1566,
                "object": {
                  "type": "ThisExpression",
                  "start": 1560,
                  "end": 1564
                },
                "property": {
                  "type": "Identifier",
                  "start": 1565,
                  "end": 1566,
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false
            },
            {
              "type": "Property",
              "start": 1572,
              "end": 1584,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 1572,
                "end": 1576,
                "decorators": [],
                "name": "nc_l",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "MemberExpression",
                "start": 1578,
                "end": 1584,
                "object": {
                  "type": "ThisExpression",
                  "start": 1578,
                  "end": 1582
                },
                "property": {
                  "type": "Identifier",
                  "start": 1583,
                  "end": 1584,
                  "decorators": [],
                  "name": "l",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1588,
      "end": 1599,
      "expression": {
        "type": "CallExpression",
        "start": 1588,
        "end": 1598,
        "callee": {
          "type": "MemberExpression",
          "start": 1588,
          "end": 1594,
          "object": {
            "type": "Identifier",
            "start": 1588,
            "end": 1592,
            "decorators": [],
            "name": "i3_i",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 1593,
            "end": 1594,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 1595,
            "end": 1597,
            "value": 10,
            "raw": "10"
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1600,
      "end": 1611,
      "expression": {
        "type": "CallExpression",
        "start": 1600,
        "end": 1610,
        "callee": {
          "type": "MemberExpression",
          "start": 1600,
          "end": 1606,
          "object": {
            "type": "Identifier",
            "start": 1600,
            "end": 1604,
            "decorators": [],
            "name": "i3_i",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 1605,
            "end": 1606,
            "decorators": [],
            "name": "l",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 1607,
            "end": 1609,
            "value": 10,
            "raw": "10"
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1612,
      "end": 1626,
      "expression": {
        "type": "CallExpression",
        "start": 1612,
        "end": 1625,
        "callee": {
          "type": "MemberExpression",
          "start": 1612,
          "end": 1621,
          "object": {
            "type": "Identifier",
            "start": 1612,
            "end": 1616,
            "decorators": [],
            "name": "i3_i",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 1617,
            "end": 1621,
            "decorators": [],
            "name": "nc_f",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 1622,
            "end": 1624,
            "value": 10,
            "raw": "10"
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1627,
      "end": 1641,
      "expression": {
        "type": "CallExpression",
        "start": 1627,
        "end": 1640,
        "callee": {
          "type": "MemberExpression",
          "start": 1627,
          "end": 1636,
          "object": {
            "type": "Identifier",
            "start": 1627,
            "end": 1631,
            "decorators": [],
            "name": "i3_i",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 1632,
            "end": 1636,
            "decorators": [],
            "name": "nc_l",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 1637,
            "end": 1639,
            "value": 10,
            "raw": "10"
          }
        ],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
