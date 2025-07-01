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
        "name": "i1",
        "optional": false,
        "typeAnnotation": null,
        "start": 36,
        "end": 38
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 39,
        "end": 42
      },
      "declare": false,
      "start": 26,
      "end": 42
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
            "name": "i1_i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "i1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 53,
                  "end": 55
                },
                "typeArguments": null,
                "start": 53,
                "end": 55
              },
              "start": 51,
              "end": 55
            },
            "start": 47,
            "end": 55
          },
          "init": null,
          "definite": false,
          "start": 47,
          "end": 55
        }
      ],
      "declare": false,
      "start": 43,
      "end": 56
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "nc_i1",
        "optional": false,
        "typeAnnotation": null,
        "start": 67,
        "end": 72
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 73,
        "end": 76
      },
      "declare": false,
      "start": 57,
      "end": 76
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
            "name": "nc_i1_i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nc_i1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 90,
                  "end": 95
                },
                "typeArguments": null,
                "start": 90,
                "end": 95
              },
              "start": 88,
              "end": 95
            },
            "start": 81,
            "end": 95
          },
          "init": null,
          "definite": false,
          "start": 81,
          "end": 95
        }
      ],
      "declare": false,
      "start": 77,
      "end": 96
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "i2",
        "optional": false,
        "typeAnnotation": null,
        "start": 147,
        "end": 149
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 176,
              "end": 177
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 179,
                "end": 185
              },
              "start": 177,
              "end": 185
            },
            "accessibility": null,
            "static": false,
            "start": 176,
            "end": 186
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 213,
              "end": 216
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 237,
                        "end": 243
                      },
                      "start": 235,
                      "end": 243
                    },
                    "start": 234,
                    "end": 243
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 248,
                    "end": 254
                  },
                  "start": 245,
                  "end": 254
                },
                "start": 218,
                "end": 254
              },
              "start": 216,
              "end": 254
            },
            "accessibility": null,
            "static": false,
            "start": 213,
            "end": 255
          },
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 307,
                    "end": 313
                  },
                  "start": 305,
                  "end": 313
                },
                "start": 304,
                "end": 313
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 316,
                "end": 319
              },
              "start": 314,
              "end": 319
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 286,
            "end": 320
          },
          {
            "type": "TSConstructSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
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
                      "name": "i1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 364,
                      "end": 366
                    },
                    "typeArguments": null,
                    "start": 364,
                    "end": 366
                  },
                  "start": 362,
                  "end": 366
                },
                "start": 361,
                "end": 366
              }
            ],
            "returnType": null,
            "start": 345,
            "end": 368
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "nc_x",
              "optional": false,
              "typeAnnotation": null,
              "start": 373,
              "end": 377
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 379,
                "end": 385
              },
              "start": 377,
              "end": 385
            },
            "accessibility": null,
            "static": false,
            "start": 373,
            "end": 386
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "nc_foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 391,
              "end": 397
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 403,
                        "end": 409
                      },
                      "start": 401,
                      "end": 409
                    },
                    "start": 400,
                    "end": 409
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 414,
                    "end": 420
                  },
                  "start": 411,
                  "end": 420
                },
                "start": 399,
                "end": 420
              },
              "start": 397,
              "end": 420
            },
            "accessibility": null,
            "static": false,
            "start": 391,
            "end": 421
          },
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 430,
                    "end": 436
                  },
                  "start": 428,
                  "end": 436
                },
                "start": 427,
                "end": 436
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 439,
                "end": 445
              },
              "start": 437,
              "end": 445
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 426,
            "end": 446
          },
          {
            "type": "TSCallSignatureDeclaration",
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
                    "type": "TSNumberKeyword",
                    "start": 504,
                    "end": 510
                  },
                  "start": 502,
                  "end": 510
                },
                "start": 501,
                "end": 510
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
                    "start": 531,
                    "end": 537
                  },
                  "start": 529,
                  "end": 537
                },
                "start": 528,
                "end": 537
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 541,
                "end": 547
              },
              "start": 539,
              "end": 547
            },
            "start": 484,
            "end": 548
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fnfoo",
              "optional": false,
              "typeAnnotation": null,
              "start": 577,
              "end": 582
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 601,
                    "end": 607
                  },
                  "start": 599,
                  "end": 607
                },
                "start": 598,
                "end": 607
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 610,
                "end": 616
              },
              "start": 608,
              "end": 616
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 577,
            "end": 617
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "nc_fnfoo",
              "optional": false,
              "typeAnnotation": null,
              "start": 622,
              "end": 630
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 634,
                    "end": 640
                  },
                  "start": 632,
                  "end": 640
                },
                "start": 631,
                "end": 640
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 643,
                "end": 649
              },
              "start": 641,
              "end": 649
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 622,
            "end": 650
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "nc_y",
              "optional": false,
              "typeAnnotation": null,
              "start": 667,
              "end": 671
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 673,
                "end": 679
              },
              "start": 671,
              "end": 679
            },
            "accessibility": null,
            "static": false,
            "start": 667,
            "end": 680
          }
        ],
        "start": 150,
        "end": 682
      },
      "declare": false,
      "start": 137,
      "end": 682
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
            "name": "i2_i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "i2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 693,
                  "end": 695
                },
                "typeArguments": null,
                "start": 693,
                "end": 695
              },
              "start": 691,
              "end": 695
            },
            "start": 687,
            "end": 695
          },
          "init": null,
          "definite": false,
          "start": 687,
          "end": 695
        }
      ],
      "declare": false,
      "start": 683,
      "end": 696
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
            "name": "i2_i_x",
            "optional": false,
            "typeAnnotation": null,
            "start": 701,
            "end": 707
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "i2_i",
              "optional": false,
              "typeAnnotation": null,
              "start": 710,
              "end": 714
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 715,
              "end": 716
            },
            "optional": false,
            "computed": false,
            "start": 710,
            "end": 716
          },
          "definite": false,
          "start": 701,
          "end": 716
        }
      ],
      "declare": false,
      "start": 697,
      "end": 717
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
            "name": "i2_i_foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 722,
            "end": 730
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "i2_i",
              "optional": false,
              "typeAnnotation": null,
              "start": 733,
              "end": 737
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 738,
              "end": 741
            },
            "optional": false,
            "computed": false,
            "start": 733,
            "end": 741
          },
          "definite": false,
          "start": 722,
          "end": 741
        }
      ],
      "declare": false,
      "start": 718,
      "end": 742
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
            "name": "i2_i_foo_r",
            "optional": false,
            "typeAnnotation": null,
            "start": 747,
            "end": 757
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "i2_i",
                "optional": false,
                "typeAnnotation": null,
                "start": 760,
                "end": 764
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 765,
                "end": 768
              },
              "optional": false,
              "computed": false,
              "start": 760,
              "end": 768
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 30,
                "raw": "30",
                "start": 769,
                "end": 771
              }
            ],
            "optional": false,
            "start": 760,
            "end": 772
          },
          "definite": false,
          "start": 747,
          "end": 772
        }
      ],
      "declare": false,
      "start": 743,
      "end": 773
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
            "name": "i2_i_i2_si",
            "optional": false,
            "typeAnnotation": null,
            "start": 778,
            "end": 788
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "i2_i",
              "optional": false,
              "typeAnnotation": null,
              "start": 791,
              "end": 795
            },
            "property": {
              "type": "Literal",
              "value": "hello",
              "raw": "\"hello\"",
              "start": 796,
              "end": 803
            },
            "optional": false,
            "computed": true,
            "start": 791,
            "end": 804
          },
          "definite": false,
          "start": 778,
          "end": 804
        }
      ],
      "declare": false,
      "start": 774,
      "end": 805
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
            "name": "i2_i_i2_ii",
            "optional": false,
            "typeAnnotation": null,
            "start": 810,
            "end": 820
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "i2_i",
              "optional": false,
              "typeAnnotation": null,
              "start": 823,
              "end": 827
            },
            "property": {
              "type": "Literal",
              "value": 30,
              "raw": "30",
              "start": 828,
              "end": 830
            },
            "optional": false,
            "computed": true,
            "start": 823,
            "end": 831
          },
          "definite": false,
          "start": 810,
          "end": 831
        }
      ],
      "declare": false,
      "start": 806,
      "end": 832
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
            "name": "i2_i_n",
            "optional": false,
            "typeAnnotation": null,
            "start": 837,
            "end": 843
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "i2_i",
              "optional": false,
              "typeAnnotation": null,
              "start": 850,
              "end": 854
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "i1_i",
                "optional": false,
                "typeAnnotation": null,
                "start": 855,
                "end": 859
              }
            ],
            "start": 846,
            "end": 860
          },
          "definite": false,
          "start": 837,
          "end": 860
        }
      ],
      "declare": false,
      "start": 833,
      "end": 861
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
            "name": "i2_i_nc_x",
            "optional": false,
            "typeAnnotation": null,
            "start": 866,
            "end": 875
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "i2_i",
              "optional": false,
              "typeAnnotation": null,
              "start": 878,
              "end": 882
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "nc_x",
              "optional": false,
              "typeAnnotation": null,
              "start": 883,
              "end": 887
            },
            "optional": false,
            "computed": false,
            "start": 878,
            "end": 887
          },
          "definite": false,
          "start": 866,
          "end": 887
        }
      ],
      "declare": false,
      "start": 862,
      "end": 888
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
            "name": "i2_i_nc_foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 893,
            "end": 904
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "i2_i",
              "optional": false,
              "typeAnnotation": null,
              "start": 907,
              "end": 911
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "nc_foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 912,
              "end": 918
            },
            "optional": false,
            "computed": false,
            "start": 907,
            "end": 918
          },
          "definite": false,
          "start": 893,
          "end": 918
        }
      ],
      "declare": false,
      "start": 889,
      "end": 919
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
            "name": "i2_i_nc_foo_r",
            "optional": false,
            "typeAnnotation": null,
            "start": 924,
            "end": 937
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "i2_i",
                "optional": false,
                "typeAnnotation": null,
                "start": 940,
                "end": 944
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "nc_foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 945,
                "end": 951
              },
              "optional": false,
              "computed": false,
              "start": 940,
              "end": 951
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 30,
                "raw": "30",
                "start": 952,
                "end": 954
              }
            ],
            "optional": false,
            "start": 940,
            "end": 955
          },
          "definite": false,
          "start": 924,
          "end": 955
        }
      ],
      "declare": false,
      "start": 920,
      "end": 956
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
            "name": "i2_i_r",
            "optional": false,
            "typeAnnotation": null,
            "start": 961,
            "end": 967
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "i2_i",
              "optional": false,
              "typeAnnotation": null,
              "start": 970,
              "end": 974
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 10,
                "raw": "10",
                "start": 975,
                "end": 977
              },
              {
                "type": "Literal",
                "value": 20,
                "raw": "20",
                "start": 979,
                "end": 981
              }
            ],
            "optional": false,
            "start": 970,
            "end": 982
          },
          "definite": false,
          "start": 961,
          "end": 982
        }
      ],
      "declare": false,
      "start": 957,
      "end": 983
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
            "name": "i2_i_fnfoo",
            "optional": false,
            "typeAnnotation": null,
            "start": 988,
            "end": 998
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "i2_i",
              "optional": false,
              "typeAnnotation": null,
              "start": 1001,
              "end": 1005
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "fnfoo",
              "optional": false,
              "typeAnnotation": null,
              "start": 1006,
              "end": 1011
            },
            "optional": false,
            "computed": false,
            "start": 1001,
            "end": 1011
          },
          "definite": false,
          "start": 988,
          "end": 1011
        }
      ],
      "declare": false,
      "start": 984,
      "end": 1012
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
            "name": "i2_i_fnfoo_r",
            "optional": false,
            "typeAnnotation": null,
            "start": 1017,
            "end": 1029
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "i2_i",
                "optional": false,
                "typeAnnotation": null,
                "start": 1032,
                "end": 1036
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "fnfoo",
                "optional": false,
                "typeAnnotation": null,
                "start": 1037,
                "end": 1042
              },
              "optional": false,
              "computed": false,
              "start": 1032,
              "end": 1042
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 10,
                "raw": "10",
                "start": 1043,
                "end": 1045
              }
            ],
            "optional": false,
            "start": 1032,
            "end": 1046
          },
          "definite": false,
          "start": 1017,
          "end": 1046
        }
      ],
      "declare": false,
      "start": 1013,
      "end": 1047
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
            "name": "i2_i_nc_fnfoo",
            "optional": false,
            "typeAnnotation": null,
            "start": 1052,
            "end": 1065
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "i2_i",
              "optional": false,
              "typeAnnotation": null,
              "start": 1068,
              "end": 1072
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "nc_fnfoo",
              "optional": false,
              "typeAnnotation": null,
              "start": 1073,
              "end": 1081
            },
            "optional": false,
            "computed": false,
            "start": 1068,
            "end": 1081
          },
          "definite": false,
          "start": 1052,
          "end": 1081
        }
      ],
      "declare": false,
      "start": 1048,
      "end": 1082
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
            "name": "i2_i_nc_fnfoo_r",
            "optional": false,
            "typeAnnotation": null,
            "start": 1087,
            "end": 1102
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "i2_i",
                "optional": false,
                "typeAnnotation": null,
                "start": 1105,
                "end": 1109
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "nc_fnfoo",
                "optional": false,
                "typeAnnotation": null,
                "start": 1110,
                "end": 1118
              },
              "optional": false,
              "computed": false,
              "start": 1105,
              "end": 1118
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 10,
                "raw": "10",
                "start": 1119,
                "end": 1121
              }
            ],
            "optional": false,
            "start": 1105,
            "end": 1122
          },
          "definite": false,
          "start": 1087,
          "end": 1122
        }
      ],
      "declare": false,
      "start": 1083,
      "end": 1123
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "i3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1134,
        "end": 1136
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1166,
              "end": 1167
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1169,
                "end": 1175
              },
              "start": 1167,
              "end": 1175
            },
            "accessibility": null,
            "static": false,
            "start": 1166,
            "end": 1176
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 1205,
              "end": 1206
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
                    "type": "TSNumberKeyword",
                    "start": 1231,
                    "end": 1237
                  },
                  "start": 1229,
                  "end": 1237
                },
                "start": 1228,
                "end": 1237
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1240,
                "end": 1246
              },
              "start": 1238,
              "end": 1246
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1205,
            "end": 1247
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "l",
              "optional": false,
              "typeAnnotation": null,
              "start": 1267,
              "end": 1268
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1293,
                        "end": 1299
                      },
                      "start": 1291,
                      "end": 1299
                    },
                    "start": 1290,
                    "end": 1299
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1304,
                    "end": 1310
                  },
                  "start": 1301,
                  "end": 1310
                },
                "start": 1270,
                "end": 1310
              },
              "start": 1268,
              "end": 1310
            },
            "accessibility": null,
            "static": false,
            "start": 1267,
            "end": 1311
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "nc_x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1316,
              "end": 1320
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1322,
                "end": 1328
              },
              "start": 1320,
              "end": 1328
            },
            "accessibility": null,
            "static": false,
            "start": 1316,
            "end": 1329
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "nc_f",
              "optional": false,
              "typeAnnotation": null,
              "start": 1334,
              "end": 1338
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
                    "type": "TSNumberKeyword",
                    "start": 1342,
                    "end": 1348
                  },
                  "start": 1340,
                  "end": 1348
                },
                "start": 1339,
                "end": 1348
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1351,
                "end": 1357
              },
              "start": 1349,
              "end": 1357
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1334,
            "end": 1358
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "nc_l",
              "optional": false,
              "typeAnnotation": null,
              "start": 1363,
              "end": 1367
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1373,
                        "end": 1379
                      },
                      "start": 1371,
                      "end": 1379
                    },
                    "start": 1370,
                    "end": 1379
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1384,
                    "end": 1390
                  },
                  "start": 1381,
                  "end": 1390
                },
                "start": 1369,
                "end": 1390
              },
              "start": 1367,
              "end": 1390
            },
            "accessibility": null,
            "static": false,
            "start": 1363,
            "end": 1391
          }
        ],
        "start": 1137,
        "end": 1393
      },
      "declare": false,
      "start": 1124,
      "end": 1393
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
            "name": "i3_i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "i3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1404,
                  "end": 1406
                },
                "typeArguments": null,
                "start": 1404,
                "end": 1406
              },
              "start": 1402,
              "end": 1406
            },
            "start": 1398,
            "end": 1406
          },
          "init": null,
          "definite": false,
          "start": 1398,
          "end": 1406
        }
      ],
      "declare": false,
      "start": 1394,
      "end": 1407
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i3_i",
          "optional": false,
          "typeAnnotation": null,
          "start": 1408,
          "end": 1412
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 1421,
                "end": 1422
              },
              "value": {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
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
                        "type": "TSNumberKeyword",
                        "start": 1450,
                        "end": 1456
                      },
                      "start": 1448,
                      "end": 1456
                    },
                    "start": 1447,
                    "end": 1456
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Literal",
                    "value": "Hello",
                    "raw": "\"Hello\"",
                    "start": 1461,
                    "end": 1468
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1471,
                    "end": 1472
                  },
                  "start": 1461,
                  "end": 1472
                },
                "id": null,
                "generator": false,
                "start": 1435,
                "end": 1472
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 1421,
              "end": 1472
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "l",
                "optional": false,
                "typeAnnotation": null,
                "start": 1478,
                "end": 1479
              },
              "value": {
                "type": "MemberExpression",
                "object": {
                  "type": "ThisExpression",
                  "start": 1481,
                  "end": 1485
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1486,
                  "end": 1487
                },
                "optional": false,
                "computed": false,
                "start": 1481,
                "end": 1487
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 1478,
              "end": 1487
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1509,
                "end": 1510
              },
              "value": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "ThisExpression",
                    "start": 1512,
                    "end": 1516
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1517,
                    "end": 1518
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1512,
                  "end": 1518
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": 10,
                    "raw": "10",
                    "start": 1519,
                    "end": 1521
                  }
                ],
                "optional": false,
                "start": 1512,
                "end": 1522
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 1509,
              "end": 1522
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "nc_x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1528,
                "end": 1532
              },
              "value": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "ThisExpression",
                    "start": 1534,
                    "end": 1538
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "l",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1539,
                    "end": 1540
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1534,
                  "end": 1540
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "MemberExpression",
                    "object": {
                      "type": "ThisExpression",
                      "start": 1541,
                      "end": 1545
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1546,
                      "end": 1547
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1541,
                    "end": 1547
                  }
                ],
                "optional": false,
                "start": 1534,
                "end": 1548
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 1528,
              "end": 1548
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "nc_f",
                "optional": false,
                "typeAnnotation": null,
                "start": 1554,
                "end": 1558
              },
              "value": {
                "type": "MemberExpression",
                "object": {
                  "type": "ThisExpression",
                  "start": 1560,
                  "end": 1564
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1565,
                  "end": 1566
                },
                "optional": false,
                "computed": false,
                "start": 1560,
                "end": 1566
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 1554,
              "end": 1566
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "nc_l",
                "optional": false,
                "typeAnnotation": null,
                "start": 1572,
                "end": 1576
              },
              "value": {
                "type": "MemberExpression",
                "object": {
                  "type": "ThisExpression",
                  "start": 1578,
                  "end": 1582
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "l",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1583,
                  "end": 1584
                },
                "optional": false,
                "computed": false,
                "start": 1578,
                "end": 1584
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 1572,
              "end": 1584
            }
          ],
          "start": 1415,
          "end": 1586
        },
        "start": 1408,
        "end": 1586
      },
      "directive": null,
      "start": 1408,
      "end": 1587
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "i3_i",
            "optional": false,
            "typeAnnotation": null,
            "start": 1588,
            "end": 1592
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 1593,
            "end": 1594
          },
          "optional": false,
          "computed": false,
          "start": 1588,
          "end": 1594
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 10,
            "raw": "10",
            "start": 1595,
            "end": 1597
          }
        ],
        "optional": false,
        "start": 1588,
        "end": 1598
      },
      "directive": null,
      "start": 1588,
      "end": 1599
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "i3_i",
            "optional": false,
            "typeAnnotation": null,
            "start": 1600,
            "end": 1604
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "l",
            "optional": false,
            "typeAnnotation": null,
            "start": 1605,
            "end": 1606
          },
          "optional": false,
          "computed": false,
          "start": 1600,
          "end": 1606
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 10,
            "raw": "10",
            "start": 1607,
            "end": 1609
          }
        ],
        "optional": false,
        "start": 1600,
        "end": 1610
      },
      "directive": null,
      "start": 1600,
      "end": 1611
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "i3_i",
            "optional": false,
            "typeAnnotation": null,
            "start": 1612,
            "end": 1616
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "nc_f",
            "optional": false,
            "typeAnnotation": null,
            "start": 1617,
            "end": 1621
          },
          "optional": false,
          "computed": false,
          "start": 1612,
          "end": 1621
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 10,
            "raw": "10",
            "start": 1622,
            "end": 1624
          }
        ],
        "optional": false,
        "start": 1612,
        "end": 1625
      },
      "directive": null,
      "start": 1612,
      "end": 1626
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "i3_i",
            "optional": false,
            "typeAnnotation": null,
            "start": 1627,
            "end": 1631
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "nc_l",
            "optional": false,
            "typeAnnotation": null,
            "start": 1632,
            "end": 1636
          },
          "optional": false,
          "computed": false,
          "start": 1627,
          "end": 1636
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 10,
            "raw": "10",
            "start": 1637,
            "end": 1639
          }
        ],
        "optional": false,
        "start": 1627,
        "end": 1640
      },
      "directive": null,
      "start": 1627,
      "end": 1641
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 26,
  "end": 1641
}
```
