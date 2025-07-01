__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "noOp",
            "optional": false,
            "typeAnnotation": null,
            "start": 16,
            "end": 20
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 29,
              "end": 31
            },
            "id": null,
            "generator": false,
            "start": 23,
            "end": 31
          },
          "definite": false,
          "start": 16,
          "end": 31
        }
      ],
      "declare": false,
      "start": 10,
      "end": 32
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "testReflectApply",
            "optional": false,
            "typeAnnotation": null,
            "start": 39,
            "end": 55
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Reflect",
                "optional": false,
                "typeAnnotation": null,
                "start": 58,
                "end": 65
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "apply",
                "optional": false,
                "typeAnnotation": null,
                "start": 66,
                "end": 71
              },
              "optional": false,
              "computed": false,
              "start": 58,
              "end": 71
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "noOp",
                "optional": false,
                "typeAnnotation": null,
                "start": 72,
                "end": 76
              },
              {
                "type": "ThisExpression",
                "start": 78,
                "end": 82
              },
              {
                "type": "ArrayExpression",
                "elements": [],
                "start": 84,
                "end": 86
              }
            ],
            "optional": false,
            "start": 58,
            "end": 87
          },
          "definite": false,
          "start": 39,
          "end": 87
        }
      ],
      "declare": false,
      "start": 33,
      "end": 88
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "testReflectConstruct",
            "optional": false,
            "typeAnnotation": null,
            "start": 95,
            "end": 115
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Reflect",
                "optional": false,
                "typeAnnotation": null,
                "start": 118,
                "end": 125
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "construct",
                "optional": false,
                "typeAnnotation": null,
                "start": 126,
                "end": 135
              },
              "optional": false,
              "computed": false,
              "start": 118,
              "end": 135
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "noOp",
                "optional": false,
                "typeAnnotation": null,
                "start": 136,
                "end": 140
              },
              {
                "type": "ArrayExpression",
                "elements": [],
                "start": 142,
                "end": 144
              }
            ],
            "optional": false,
            "start": 118,
            "end": 145
          },
          "definite": false,
          "start": 95,
          "end": 145
        }
      ],
      "declare": false,
      "start": 89,
      "end": 146
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "testReflectDefineProperty",
            "optional": false,
            "typeAnnotation": null,
            "start": 153,
            "end": 178
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Reflect",
                "optional": false,
                "typeAnnotation": null,
                "start": 181,
                "end": 188
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "defineProperty",
                "optional": false,
                "typeAnnotation": null,
                "start": 189,
                "end": 203
              },
              "optional": false,
              "computed": false,
              "start": 181,
              "end": 203
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [],
                "start": 204,
                "end": 206
              },
              {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 208,
                "end": 210
              },
              {
                "type": "ObjectExpression",
                "properties": [],
                "start": 212,
                "end": 214
              }
            ],
            "optional": false,
            "start": 181,
            "end": 215
          },
          "definite": false,
          "start": 153,
          "end": 215
        }
      ],
      "declare": false,
      "start": 147,
      "end": 216
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "testReflectDeleteProperty",
            "optional": false,
            "typeAnnotation": null,
            "start": 223,
            "end": 248
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Reflect",
                "optional": false,
                "typeAnnotation": null,
                "start": 251,
                "end": 258
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "deleteProperty",
                "optional": false,
                "typeAnnotation": null,
                "start": 259,
                "end": 273
              },
              "optional": false,
              "computed": false,
              "start": 251,
              "end": 273
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [],
                "start": 274,
                "end": 276
              },
              {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 278,
                "end": 280
              }
            ],
            "optional": false,
            "start": 251,
            "end": 281
          },
          "definite": false,
          "start": 223,
          "end": 281
        }
      ],
      "declare": false,
      "start": 217,
      "end": 282
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "testReflectGet",
            "optional": false,
            "typeAnnotation": null,
            "start": 289,
            "end": 303
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Reflect",
                "optional": false,
                "typeAnnotation": null,
                "start": 306,
                "end": 313
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "get",
                "optional": false,
                "typeAnnotation": null,
                "start": 314,
                "end": 317
              },
              "optional": false,
              "computed": false,
              "start": 306,
              "end": 317
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [],
                "start": 318,
                "end": 320
              },
              {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 322,
                "end": 324
              }
            ],
            "optional": false,
            "start": 306,
            "end": 325
          },
          "definite": false,
          "start": 289,
          "end": 325
        }
      ],
      "declare": false,
      "start": 283,
      "end": 326
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "testReflectGetOwnPropertyDescriptor",
            "optional": false,
            "typeAnnotation": null,
            "start": 333,
            "end": 368
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Reflect",
                "optional": false,
                "typeAnnotation": null,
                "start": 371,
                "end": 378
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "getOwnPropertyDescriptor",
                "optional": false,
                "typeAnnotation": null,
                "start": 379,
                "end": 403
              },
              "optional": false,
              "computed": false,
              "start": 371,
              "end": 403
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [],
                "start": 404,
                "end": 406
              },
              {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 408,
                "end": 410
              }
            ],
            "optional": false,
            "start": 371,
            "end": 411
          },
          "definite": false,
          "start": 333,
          "end": 411
        }
      ],
      "declare": false,
      "start": 327,
      "end": 412
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "testReflectGetPrototypeOf",
            "optional": false,
            "typeAnnotation": null,
            "start": 419,
            "end": 444
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Reflect",
                "optional": false,
                "typeAnnotation": null,
                "start": 447,
                "end": 454
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "getPrototypeOf",
                "optional": false,
                "typeAnnotation": null,
                "start": 455,
                "end": 469
              },
              "optional": false,
              "computed": false,
              "start": 447,
              "end": 469
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [],
                "start": 470,
                "end": 472
              }
            ],
            "optional": false,
            "start": 447,
            "end": 473
          },
          "definite": false,
          "start": 419,
          "end": 473
        }
      ],
      "declare": false,
      "start": 413,
      "end": 474
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "testReflectIsExtensible",
            "optional": false,
            "typeAnnotation": null,
            "start": 481,
            "end": 504
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Reflect",
                "optional": false,
                "typeAnnotation": null,
                "start": 507,
                "end": 514
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "isExtensible",
                "optional": false,
                "typeAnnotation": null,
                "start": 515,
                "end": 527
              },
              "optional": false,
              "computed": false,
              "start": 507,
              "end": 527
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [],
                "start": 528,
                "end": 530
              }
            ],
            "optional": false,
            "start": 507,
            "end": 531
          },
          "definite": false,
          "start": 481,
          "end": 531
        }
      ],
      "declare": false,
      "start": 475,
      "end": 532
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "testReflectOwnKeys",
            "optional": false,
            "typeAnnotation": null,
            "start": 539,
            "end": 557
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Reflect",
                "optional": false,
                "typeAnnotation": null,
                "start": 560,
                "end": 567
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "ownKeys",
                "optional": false,
                "typeAnnotation": null,
                "start": 568,
                "end": 575
              },
              "optional": false,
              "computed": false,
              "start": 560,
              "end": 575
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [],
                "start": 576,
                "end": 578
              }
            ],
            "optional": false,
            "start": 560,
            "end": 579
          },
          "definite": false,
          "start": 539,
          "end": 579
        }
      ],
      "declare": false,
      "start": 533,
      "end": 580
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "testReflectPreventExtensions",
            "optional": false,
            "typeAnnotation": null,
            "start": 587,
            "end": 615
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Reflect",
                "optional": false,
                "typeAnnotation": null,
                "start": 618,
                "end": 625
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "preventExtensions",
                "optional": false,
                "typeAnnotation": null,
                "start": 626,
                "end": 643
              },
              "optional": false,
              "computed": false,
              "start": 618,
              "end": 643
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [],
                "start": 644,
                "end": 646
              }
            ],
            "optional": false,
            "start": 618,
            "end": 647
          },
          "definite": false,
          "start": 587,
          "end": 647
        }
      ],
      "declare": false,
      "start": 581,
      "end": 648
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "testReflectSet",
            "optional": false,
            "typeAnnotation": null,
            "start": 655,
            "end": 669
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Reflect",
                "optional": false,
                "typeAnnotation": null,
                "start": 672,
                "end": 679
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "set",
                "optional": false,
                "typeAnnotation": null,
                "start": 680,
                "end": 683
              },
              "optional": false,
              "computed": false,
              "start": 672,
              "end": 683
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [],
                "start": 684,
                "end": 686
              },
              {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 688,
                "end": 690
              },
              {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 692,
                "end": 693
              }
            ],
            "optional": false,
            "start": 672,
            "end": 694
          },
          "definite": false,
          "start": 655,
          "end": 694
        }
      ],
      "declare": false,
      "start": 649,
      "end": 695
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "testReflectSetPrototypeOf",
            "optional": false,
            "typeAnnotation": null,
            "start": 702,
            "end": 727
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Reflect",
                "optional": false,
                "typeAnnotation": null,
                "start": 730,
                "end": 737
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "setPrototypeOf",
                "optional": false,
                "typeAnnotation": null,
                "start": 738,
                "end": 752
              },
              "optional": false,
              "computed": false,
              "start": 730,
              "end": 752
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [],
                "start": 753,
                "end": 755
              },
              {
                "type": "ObjectExpression",
                "properties": [],
                "start": 757,
                "end": 759
              }
            ],
            "optional": false,
            "start": 730,
            "end": 760
          },
          "definite": false,
          "start": 702,
          "end": 760
        }
      ],
      "declare": false,
      "start": 696,
      "end": 761
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "testArrayFind",
            "optional": false,
            "typeAnnotation": null,
            "start": 769,
            "end": 782
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": "",
                    "raw": "\"\"",
                    "start": 786,
                    "end": 788
                  }
                ],
                "start": 785,
                "end": 789
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "find",
                "optional": false,
                "typeAnnotation": null,
                "start": 790,
                "end": 794
              },
              "optional": false,
              "computed": false,
              "start": 785,
              "end": 794
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "val",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 796,
                    "end": 799
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "idx",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 801,
                    "end": 804
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 806,
                    "end": 809
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Literal",
                        "value": true,
                        "raw": "true",
                        "start": 827,
                        "end": 831
                      },
                      "start": 820,
                      "end": 832
                    }
                  ],
                  "start": 814,
                  "end": 834
                },
                "id": null,
                "generator": false,
                "start": 795,
                "end": 834
              }
            ],
            "optional": false,
            "start": 785,
            "end": 835
          },
          "definite": false,
          "start": 769,
          "end": 835
        }
      ],
      "declare": false,
      "start": 763,
      "end": 836
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "testArrayFindIndex",
            "optional": false,
            "typeAnnotation": null,
            "start": 843,
            "end": 861
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": "",
                    "raw": "\"\"",
                    "start": 865,
                    "end": 867
                  }
                ],
                "start": 864,
                "end": 868
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "findIndex",
                "optional": false,
                "typeAnnotation": null,
                "start": 869,
                "end": 878
              },
              "optional": false,
              "computed": false,
              "start": 864,
              "end": 878
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "val",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 880,
                    "end": 883
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "idx",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 885,
                    "end": 888
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 890,
                    "end": 893
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Literal",
                        "value": true,
                        "raw": "true",
                        "start": 911,
                        "end": 915
                      },
                      "start": 904,
                      "end": 916
                    }
                  ],
                  "start": 898,
                  "end": 918
                },
                "id": null,
                "generator": false,
                "start": 879,
                "end": 918
              }
            ],
            "optional": false,
            "start": 864,
            "end": 919
          },
          "definite": false,
          "start": 843,
          "end": 919
        }
      ],
      "declare": false,
      "start": 837,
      "end": 920
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "testArrayFill",
            "optional": false,
            "typeAnnotation": null,
            "start": 927,
            "end": 940
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": "",
                    "raw": "\"\"",
                    "start": 944,
                    "end": 946
                  }
                ],
                "start": 943,
                "end": 947
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "fill",
                "optional": false,
                "typeAnnotation": null,
                "start": 948,
                "end": 952
              },
              "optional": false,
              "computed": false,
              "start": 943,
              "end": 952
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "fill",
                "raw": "\"fill\"",
                "start": 953,
                "end": 959
              }
            ],
            "optional": false,
            "start": 943,
            "end": 960
          },
          "definite": false,
          "start": 927,
          "end": 960
        }
      ],
      "declare": false,
      "start": 921,
      "end": 961
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "testArrayCopyWithin",
            "optional": false,
            "typeAnnotation": null,
            "start": 968,
            "end": 987
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": "",
                    "raw": "\"\"",
                    "start": 991,
                    "end": 993
                  }
                ],
                "start": 990,
                "end": 994
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "copyWithin",
                "optional": false,
                "typeAnnotation": null,
                "start": 995,
                "end": 1005
              },
              "optional": false,
              "computed": false,
              "start": 990,
              "end": 1005
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 1006,
                "end": 1007
              },
              {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 1009,
                "end": 1010
              }
            ],
            "optional": false,
            "start": 990,
            "end": 1011
          },
          "definite": false,
          "start": 968,
          "end": 1011
        }
      ],
      "declare": false,
      "start": 962,
      "end": 1012
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "testArrayEntries",
            "optional": false,
            "typeAnnotation": null,
            "start": 1019,
            "end": 1035
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": "",
                    "raw": "\"\"",
                    "start": 1039,
                    "end": 1041
                  }
                ],
                "start": 1038,
                "end": 1042
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "entries",
                "optional": false,
                "typeAnnotation": null,
                "start": 1043,
                "end": 1050
              },
              "optional": false,
              "computed": false,
              "start": 1038,
              "end": 1050
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 1038,
            "end": 1052
          },
          "definite": false,
          "start": 1019,
          "end": 1052
        }
      ],
      "declare": false,
      "start": 1013,
      "end": 1053
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "testArrayKeys",
            "optional": false,
            "typeAnnotation": null,
            "start": 1060,
            "end": 1073
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": "",
                    "raw": "\"\"",
                    "start": 1077,
                    "end": 1079
                  }
                ],
                "start": 1076,
                "end": 1080
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "keys",
                "optional": false,
                "typeAnnotation": null,
                "start": 1081,
                "end": 1085
              },
              "optional": false,
              "computed": false,
              "start": 1076,
              "end": 1085
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 1076,
            "end": 1087
          },
          "definite": false,
          "start": 1060,
          "end": 1087
        }
      ],
      "declare": false,
      "start": 1054,
      "end": 1088
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "testArrayValues",
            "optional": false,
            "typeAnnotation": null,
            "start": 1095,
            "end": 1110
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": "",
                    "raw": "\"\"",
                    "start": 1114,
                    "end": 1116
                  }
                ],
                "start": 1113,
                "end": 1117
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "values",
                "optional": false,
                "typeAnnotation": null,
                "start": 1118,
                "end": 1124
              },
              "optional": false,
              "computed": false,
              "start": 1113,
              "end": 1124
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 1113,
            "end": 1126
          },
          "definite": false,
          "start": 1095,
          "end": 1126
        }
      ],
      "declare": false,
      "start": 1089,
      "end": 1127
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "testArrayConstructorFrom",
            "optional": false,
            "typeAnnotation": null,
            "start": 1134,
            "end": 1158
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Array",
                "optional": false,
                "typeAnnotation": null,
                "start": 1161,
                "end": 1166
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "from",
                "optional": false,
                "typeAnnotation": null,
                "start": 1167,
                "end": 1171
              },
              "optional": false,
              "computed": false,
              "start": 1161,
              "end": 1171
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [],
                "start": 1172,
                "end": 1174
              }
            ],
            "optional": false,
            "start": 1161,
            "end": 1175
          },
          "definite": false,
          "start": 1134,
          "end": 1175
        }
      ],
      "declare": false,
      "start": 1128,
      "end": 1176
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "testArrayConstructorOf",
            "optional": false,
            "typeAnnotation": null,
            "start": 1183,
            "end": 1205
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Array",
                "optional": false,
                "typeAnnotation": null,
                "start": 1208,
                "end": 1213
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "of",
                "optional": false,
                "typeAnnotation": null,
                "start": 1214,
                "end": 1216
              },
              "optional": false,
              "computed": false,
              "start": 1208,
              "end": 1216
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [],
                "start": 1217,
                "end": 1219
              }
            ],
            "optional": false,
            "start": 1208,
            "end": 1220
          },
          "definite": false,
          "start": 1183,
          "end": 1220
        }
      ],
      "declare": false,
      "start": 1177,
      "end": 1221
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "testObjectConstructorAssign",
            "optional": false,
            "typeAnnotation": null,
            "start": 1228,
            "end": 1255
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null,
                "start": 1258,
                "end": 1264
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "assign",
                "optional": false,
                "typeAnnotation": null,
                "start": 1265,
                "end": 1271
              },
              "optional": false,
              "computed": false,
              "start": 1258,
              "end": 1271
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [],
                "start": 1272,
                "end": 1274
              },
              {
                "type": "ObjectExpression",
                "properties": [],
                "start": 1276,
                "end": 1278
              }
            ],
            "optional": false,
            "start": 1258,
            "end": 1279
          },
          "definite": false,
          "start": 1228,
          "end": 1279
        }
      ],
      "declare": false,
      "start": 1222,
      "end": 1280
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "testObjectConstructorGetOwnPropertySymbols",
            "optional": false,
            "typeAnnotation": null,
            "start": 1287,
            "end": 1329
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null,
                "start": 1332,
                "end": 1338
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "getOwnPropertySymbols",
                "optional": false,
                "typeAnnotation": null,
                "start": 1339,
                "end": 1360
              },
              "optional": false,
              "computed": false,
              "start": 1332,
              "end": 1360
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [],
                "start": 1361,
                "end": 1363
              }
            ],
            "optional": false,
            "start": 1332,
            "end": 1364
          },
          "definite": false,
          "start": 1287,
          "end": 1364
        }
      ],
      "declare": false,
      "start": 1281,
      "end": 1365
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "testObjectConstructorKeys",
            "optional": false,
            "typeAnnotation": null,
            "start": 1372,
            "end": 1397
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null,
                "start": 1400,
                "end": 1406
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "keys",
                "optional": false,
                "typeAnnotation": null,
                "start": 1407,
                "end": 1411
              },
              "optional": false,
              "computed": false,
              "start": 1400,
              "end": 1411
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [],
                "start": 1412,
                "end": 1414
              }
            ],
            "optional": false,
            "start": 1400,
            "end": 1415
          },
          "definite": false,
          "start": 1372,
          "end": 1415
        }
      ],
      "declare": false,
      "start": 1366,
      "end": 1416
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "testObjectConstructorIs",
            "optional": false,
            "typeAnnotation": null,
            "start": 1423,
            "end": 1446
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null,
                "start": 1449,
                "end": 1455
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "is",
                "optional": false,
                "typeAnnotation": null,
                "start": 1456,
                "end": 1458
              },
              "optional": false,
              "computed": false,
              "start": 1449,
              "end": 1458
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [],
                "start": 1459,
                "end": 1461
              },
              {
                "type": "ObjectExpression",
                "properties": [],
                "start": 1463,
                "end": 1465
              }
            ],
            "optional": false,
            "start": 1449,
            "end": 1466
          },
          "definite": false,
          "start": 1423,
          "end": 1466
        }
      ],
      "declare": false,
      "start": 1417,
      "end": 1467
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "testObjectConstructorSetPrototypeOf",
            "optional": false,
            "typeAnnotation": null,
            "start": 1474,
            "end": 1509
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null,
                "start": 1512,
                "end": 1518
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "setPrototypeOf",
                "optional": false,
                "typeAnnotation": null,
                "start": 1519,
                "end": 1533
              },
              "optional": false,
              "computed": false,
              "start": 1512,
              "end": 1533
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [],
                "start": 1534,
                "end": 1536
              },
              {
                "type": "ObjectExpression",
                "properties": [],
                "start": 1538,
                "end": 1540
              }
            ],
            "optional": false,
            "start": 1512,
            "end": 1541
          },
          "definite": false,
          "start": 1474,
          "end": 1541
        }
      ],
      "declare": false,
      "start": 1468,
      "end": 1542
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "testNumberConstructorIsFinite",
            "optional": false,
            "typeAnnotation": null,
            "start": 1549,
            "end": 1578
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Number",
                "optional": false,
                "typeAnnotation": null,
                "start": 1581,
                "end": 1587
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "isFinite",
                "optional": false,
                "typeAnnotation": null,
                "start": 1588,
                "end": 1596
              },
              "optional": false,
              "computed": false,
              "start": 1581,
              "end": 1596
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 1597,
                "end": 1598
              }
            ],
            "optional": false,
            "start": 1581,
            "end": 1599
          },
          "definite": false,
          "start": 1549,
          "end": 1599
        }
      ],
      "declare": false,
      "start": 1543,
      "end": 1600
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "testNumberConstructorIsInteger",
            "optional": false,
            "typeAnnotation": null,
            "start": 1607,
            "end": 1637
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Number",
                "optional": false,
                "typeAnnotation": null,
                "start": 1640,
                "end": 1646
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "isInteger",
                "optional": false,
                "typeAnnotation": null,
                "start": 1647,
                "end": 1656
              },
              "optional": false,
              "computed": false,
              "start": 1640,
              "end": 1656
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 1657,
                "end": 1658
              }
            ],
            "optional": false,
            "start": 1640,
            "end": 1659
          },
          "definite": false,
          "start": 1607,
          "end": 1659
        }
      ],
      "declare": false,
      "start": 1601,
      "end": 1660
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "testNumberConstructorIsNan",
            "optional": false,
            "typeAnnotation": null,
            "start": 1667,
            "end": 1693
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Number",
                "optional": false,
                "typeAnnotation": null,
                "start": 1696,
                "end": 1702
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "isNaN",
                "optional": false,
                "typeAnnotation": null,
                "start": 1703,
                "end": 1708
              },
              "optional": false,
              "computed": false,
              "start": 1696,
              "end": 1708
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 1709,
                "end": 1710
              }
            ],
            "optional": false,
            "start": 1696,
            "end": 1711
          },
          "definite": false,
          "start": 1667,
          "end": 1711
        }
      ],
      "declare": false,
      "start": 1661,
      "end": 1712
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "testNumberConstructorIsSafeInteger",
            "optional": false,
            "typeAnnotation": null,
            "start": 1719,
            "end": 1753
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Number",
                "optional": false,
                "typeAnnotation": null,
                "start": 1756,
                "end": 1762
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "isSafeInteger",
                "optional": false,
                "typeAnnotation": null,
                "start": 1763,
                "end": 1776
              },
              "optional": false,
              "computed": false,
              "start": 1756,
              "end": 1776
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 1777,
                "end": 1778
              }
            ],
            "optional": false,
            "start": 1756,
            "end": 1779
          },
          "definite": false,
          "start": 1719,
          "end": 1779
        }
      ],
      "declare": false,
      "start": 1713,
      "end": 1780
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "testNumberConstructorParseFloat",
            "optional": false,
            "typeAnnotation": null,
            "start": 1787,
            "end": 1818
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Number",
                "optional": false,
                "typeAnnotation": null,
                "start": 1821,
                "end": 1827
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "parseFloat",
                "optional": false,
                "typeAnnotation": null,
                "start": 1828,
                "end": 1838
              },
              "optional": false,
              "computed": false,
              "start": 1821,
              "end": 1838
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "0",
                "raw": "\"0\"",
                "start": 1839,
                "end": 1842
              }
            ],
            "optional": false,
            "start": 1821,
            "end": 1843
          },
          "definite": false,
          "start": 1787,
          "end": 1843
        }
      ],
      "declare": false,
      "start": 1781,
      "end": 1844
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "testNumberConstructorParseInt",
            "optional": false,
            "typeAnnotation": null,
            "start": 1851,
            "end": 1880
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Number",
                "optional": false,
                "typeAnnotation": null,
                "start": 1883,
                "end": 1889
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "parseInt",
                "optional": false,
                "typeAnnotation": null,
                "start": 1890,
                "end": 1898
              },
              "optional": false,
              "computed": false,
              "start": 1883,
              "end": 1898
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "0",
                "raw": "\"0\"",
                "start": 1899,
                "end": 1902
              }
            ],
            "optional": false,
            "start": 1883,
            "end": 1903
          },
          "definite": false,
          "start": 1851,
          "end": 1903
        }
      ],
      "declare": false,
      "start": 1845,
      "end": 1904
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "testMathClz32",
            "optional": false,
            "typeAnnotation": null,
            "start": 1911,
            "end": 1924
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Math",
                "optional": false,
                "typeAnnotation": null,
                "start": 1927,
                "end": 1931
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "clz32",
                "optional": false,
                "typeAnnotation": null,
                "start": 1932,
                "end": 1937
              },
              "optional": false,
              "computed": false,
              "start": 1927,
              "end": 1937
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 1938,
                "end": 1939
              }
            ],
            "optional": false,
            "start": 1927,
            "end": 1940
          },
          "definite": false,
          "start": 1911,
          "end": 1940
        }
      ],
      "declare": false,
      "start": 1905,
      "end": 1941
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "testMathImul",
            "optional": false,
            "typeAnnotation": null,
            "start": 1948,
            "end": 1960
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Math",
                "optional": false,
                "typeAnnotation": null,
                "start": 1963,
                "end": 1967
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "imul",
                "optional": false,
                "typeAnnotation": null,
                "start": 1968,
                "end": 1972
              },
              "optional": false,
              "computed": false,
              "start": 1963,
              "end": 1972
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 1973,
                "end": 1974
              },
              {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 1975,
                "end": 1976
              }
            ],
            "optional": false,
            "start": 1963,
            "end": 1977
          },
          "definite": false,
          "start": 1948,
          "end": 1977
        }
      ],
      "declare": false,
      "start": 1942,
      "end": 1978
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "testMathSign",
            "optional": false,
            "typeAnnotation": null,
            "start": 1985,
            "end": 1997
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Math",
                "optional": false,
                "typeAnnotation": null,
                "start": 2000,
                "end": 2004
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "sign",
                "optional": false,
                "typeAnnotation": null,
                "start": 2005,
                "end": 2009
              },
              "optional": false,
              "computed": false,
              "start": 2000,
              "end": 2009
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 2010,
                "end": 2011
              }
            ],
            "optional": false,
            "start": 2000,
            "end": 2012
          },
          "definite": false,
          "start": 1985,
          "end": 2012
        }
      ],
      "declare": false,
      "start": 1979,
      "end": 2013
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "testMathLog10",
            "optional": false,
            "typeAnnotation": null,
            "start": 2020,
            "end": 2033
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Math",
                "optional": false,
                "typeAnnotation": null,
                "start": 2036,
                "end": 2040
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "log10",
                "optional": false,
                "typeAnnotation": null,
                "start": 2041,
                "end": 2046
              },
              "optional": false,
              "computed": false,
              "start": 2036,
              "end": 2046
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 2047,
                "end": 2048
              }
            ],
            "optional": false,
            "start": 2036,
            "end": 2049
          },
          "definite": false,
          "start": 2020,
          "end": 2049
        }
      ],
      "declare": false,
      "start": 2014,
      "end": 2050
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "testMathLog2",
            "optional": false,
            "typeAnnotation": null,
            "start": 2057,
            "end": 2069
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Math",
                "optional": false,
                "typeAnnotation": null,
                "start": 2072,
                "end": 2076
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "log2",
                "optional": false,
                "typeAnnotation": null,
                "start": 2077,
                "end": 2081
              },
              "optional": false,
              "computed": false,
              "start": 2072,
              "end": 2081
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 2082,
                "end": 2083
              }
            ],
            "optional": false,
            "start": 2072,
            "end": 2084
          },
          "definite": false,
          "start": 2057,
          "end": 2084
        }
      ],
      "declare": false,
      "start": 2051,
      "end": 2085
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "testMathLog1p",
            "optional": false,
            "typeAnnotation": null,
            "start": 2092,
            "end": 2105
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Math",
                "optional": false,
                "typeAnnotation": null,
                "start": 2108,
                "end": 2112
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "log1p",
                "optional": false,
                "typeAnnotation": null,
                "start": 2113,
                "end": 2118
              },
              "optional": false,
              "computed": false,
              "start": 2108,
              "end": 2118
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 2119,
                "end": 2120
              }
            ],
            "optional": false,
            "start": 2108,
            "end": 2121
          },
          "definite": false,
          "start": 2092,
          "end": 2121
        }
      ],
      "declare": false,
      "start": 2086,
      "end": 2122
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "testMathExpm1",
            "optional": false,
            "typeAnnotation": null,
            "start": 2129,
            "end": 2142
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Math",
                "optional": false,
                "typeAnnotation": null,
                "start": 2145,
                "end": 2149
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "expm1",
                "optional": false,
                "typeAnnotation": null,
                "start": 2150,
                "end": 2155
              },
              "optional": false,
              "computed": false,
              "start": 2145,
              "end": 2155
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 2156,
                "end": 2157
              }
            ],
            "optional": false,
            "start": 2145,
            "end": 2158
          },
          "definite": false,
          "start": 2129,
          "end": 2158
        }
      ],
      "declare": false,
      "start": 2123,
      "end": 2159
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "testMathCosh",
            "optional": false,
            "typeAnnotation": null,
            "start": 2166,
            "end": 2178
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Math",
                "optional": false,
                "typeAnnotation": null,
                "start": 2181,
                "end": 2185
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "cosh",
                "optional": false,
                "typeAnnotation": null,
                "start": 2186,
                "end": 2190
              },
              "optional": false,
              "computed": false,
              "start": 2181,
              "end": 2190
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 2191,
                "end": 2192
              }
            ],
            "optional": false,
            "start": 2181,
            "end": 2193
          },
          "definite": false,
          "start": 2166,
          "end": 2193
        }
      ],
      "declare": false,
      "start": 2160,
      "end": 2194
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "testMathSinh",
            "optional": false,
            "typeAnnotation": null,
            "start": 2201,
            "end": 2213
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Math",
                "optional": false,
                "typeAnnotation": null,
                "start": 2216,
                "end": 2220
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "sinh",
                "optional": false,
                "typeAnnotation": null,
                "start": 2221,
                "end": 2225
              },
              "optional": false,
              "computed": false,
              "start": 2216,
              "end": 2225
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 2226,
                "end": 2227
              }
            ],
            "optional": false,
            "start": 2216,
            "end": 2228
          },
          "definite": false,
          "start": 2201,
          "end": 2228
        }
      ],
      "declare": false,
      "start": 2195,
      "end": 2229
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "testMathTanh",
            "optional": false,
            "typeAnnotation": null,
            "start": 2236,
            "end": 2248
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Math",
                "optional": false,
                "typeAnnotation": null,
                "start": 2251,
                "end": 2255
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "tanh",
                "optional": false,
                "typeAnnotation": null,
                "start": 2256,
                "end": 2260
              },
              "optional": false,
              "computed": false,
              "start": 2251,
              "end": 2260
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 2261,
                "end": 2262
              }
            ],
            "optional": false,
            "start": 2251,
            "end": 2263
          },
          "definite": false,
          "start": 2236,
          "end": 2263
        }
      ],
      "declare": false,
      "start": 2230,
      "end": 2264
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "testMathAcosh",
            "optional": false,
            "typeAnnotation": null,
            "start": 2271,
            "end": 2284
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Math",
                "optional": false,
                "typeAnnotation": null,
                "start": 2287,
                "end": 2291
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "acosh",
                "optional": false,
                "typeAnnotation": null,
                "start": 2292,
                "end": 2297
              },
              "optional": false,
              "computed": false,
              "start": 2287,
              "end": 2297
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 2298,
                "end": 2299
              }
            ],
            "optional": false,
            "start": 2287,
            "end": 2300
          },
          "definite": false,
          "start": 2271,
          "end": 2300
        }
      ],
      "declare": false,
      "start": 2265,
      "end": 2301
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "testMathAsinh",
            "optional": false,
            "typeAnnotation": null,
            "start": 2308,
            "end": 2321
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Math",
                "optional": false,
                "typeAnnotation": null,
                "start": 2324,
                "end": 2328
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "asinh",
                "optional": false,
                "typeAnnotation": null,
                "start": 2329,
                "end": 2334
              },
              "optional": false,
              "computed": false,
              "start": 2324,
              "end": 2334
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 2335,
                "end": 2336
              }
            ],
            "optional": false,
            "start": 2324,
            "end": 2337
          },
          "definite": false,
          "start": 2308,
          "end": 2337
        }
      ],
      "declare": false,
      "start": 2302,
      "end": 2338
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "testMathAtanh",
            "optional": false,
            "typeAnnotation": null,
            "start": 2345,
            "end": 2358
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Math",
                "optional": false,
                "typeAnnotation": null,
                "start": 2361,
                "end": 2365
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "atanh",
                "optional": false,
                "typeAnnotation": null,
                "start": 2366,
                "end": 2371
              },
              "optional": false,
              "computed": false,
              "start": 2361,
              "end": 2371
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 2372,
                "end": 2373
              }
            ],
            "optional": false,
            "start": 2361,
            "end": 2374
          },
          "definite": false,
          "start": 2345,
          "end": 2374
        }
      ],
      "declare": false,
      "start": 2339,
      "end": 2375
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "testMathHypot",
            "optional": false,
            "typeAnnotation": null,
            "start": 2382,
            "end": 2395
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Math",
                "optional": false,
                "typeAnnotation": null,
                "start": 2398,
                "end": 2402
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "hypot",
                "optional": false,
                "typeAnnotation": null,
                "start": 2403,
                "end": 2408
              },
              "optional": false,
              "computed": false,
              "start": 2398,
              "end": 2408
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 2409,
                "end": 2410
              },
              {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 2411,
                "end": 2412
              }
            ],
            "optional": false,
            "start": 2398,
            "end": 2413
          },
          "definite": false,
          "start": 2382,
          "end": 2413
        }
      ],
      "declare": false,
      "start": 2376,
      "end": 2414
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "testMathTrunc",
            "optional": false,
            "typeAnnotation": null,
            "start": 2421,
            "end": 2434
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Math",
                "optional": false,
                "typeAnnotation": null,
                "start": 2437,
                "end": 2441
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "trunc",
                "optional": false,
                "typeAnnotation": null,
                "start": 2442,
                "end": 2447
              },
              "optional": false,
              "computed": false,
              "start": 2437,
              "end": 2447
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 2448,
                "end": 2449
              }
            ],
            "optional": false,
            "start": 2437,
            "end": 2450
          },
          "definite": false,
          "start": 2421,
          "end": 2450
        }
      ],
      "declare": false,
      "start": 2415,
      "end": 2451
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "testMathFround",
            "optional": false,
            "typeAnnotation": null,
            "start": 2458,
            "end": 2472
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Math",
                "optional": false,
                "typeAnnotation": null,
                "start": 2475,
                "end": 2479
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "fround",
                "optional": false,
                "typeAnnotation": null,
                "start": 2480,
                "end": 2486
              },
              "optional": false,
              "computed": false,
              "start": 2475,
              "end": 2486
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 2487,
                "end": 2488
              }
            ],
            "optional": false,
            "start": 2475,
            "end": 2489
          },
          "definite": false,
          "start": 2458,
          "end": 2489
        }
      ],
      "declare": false,
      "start": 2452,
      "end": 2490
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "testMathCbrt",
            "optional": false,
            "typeAnnotation": null,
            "start": 2497,
            "end": 2509
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Math",
                "optional": false,
                "typeAnnotation": null,
                "start": 2512,
                "end": 2516
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "cbrt",
                "optional": false,
                "typeAnnotation": null,
                "start": 2517,
                "end": 2521
              },
              "optional": false,
              "computed": false,
              "start": 2512,
              "end": 2521
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 2522,
                "end": 2523
              }
            ],
            "optional": false,
            "start": 2512,
            "end": 2524
          },
          "definite": false,
          "start": 2497,
          "end": 2524
        }
      ],
      "declare": false,
      "start": 2491,
      "end": 2525
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "testMap",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Map",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2541,
                  "end": 2544
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "start": 2545,
                      "end": 2548
                    },
                    {
                      "type": "TSAnyKeyword",
                      "start": 2550,
                      "end": 2553
                    }
                  ],
                  "start": 2544,
                  "end": 2554
                },
                "start": 2541,
                "end": 2554
              },
              "start": 2539,
              "end": 2554
            },
            "start": 2532,
            "end": 2554
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 2557,
              "end": 2561
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 2565,
              "end": 2568
            },
            "start": 2557,
            "end": 2568
          },
          "definite": false,
          "start": 2532,
          "end": 2568
        }
      ],
      "declare": false,
      "start": 2526,
      "end": 2569
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "testSet",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Set",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2585,
                  "end": 2588
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "start": 2589,
                      "end": 2592
                    }
                  ],
                  "start": 2588,
                  "end": 2593
                },
                "start": 2585,
                "end": 2593
              },
              "start": 2583,
              "end": 2593
            },
            "start": 2576,
            "end": 2593
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 2596,
              "end": 2600
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 2604,
              "end": 2607
            },
            "start": 2596,
            "end": 2607
          },
          "definite": false,
          "start": 2576,
          "end": 2607
        }
      ],
      "declare": false,
      "start": 2570,
      "end": 2608
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "testPromiseAll",
            "optional": false,
            "typeAnnotation": null,
            "start": 2615,
            "end": 2629
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Promise",
                "optional": false,
                "typeAnnotation": null,
                "start": 2632,
                "end": 2639
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "all",
                "optional": false,
                "typeAnnotation": null,
                "start": 2640,
                "end": 2643
              },
              "optional": false,
              "computed": false,
              "start": 2632,
              "end": 2643
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [],
                "start": 2644,
                "end": 2646
              }
            ],
            "optional": false,
            "start": 2632,
            "end": 2647
          },
          "definite": false,
          "start": 2615,
          "end": 2647
        }
      ],
      "declare": false,
      "start": 2609,
      "end": 2648
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "testPromiseRace",
            "optional": false,
            "typeAnnotation": null,
            "start": 2655,
            "end": 2670
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Promise",
                "optional": false,
                "typeAnnotation": null,
                "start": 2673,
                "end": 2680
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "race",
                "optional": false,
                "typeAnnotation": null,
                "start": 2681,
                "end": 2685
              },
              "optional": false,
              "computed": false,
              "start": 2673,
              "end": 2685
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [],
                "start": 2686,
                "end": 2688
              }
            ],
            "optional": false,
            "start": 2673,
            "end": 2689
          },
          "definite": false,
          "start": 2655,
          "end": 2689
        }
      ],
      "declare": false,
      "start": 2649,
      "end": 2690
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "testPromiseResolve",
            "optional": false,
            "typeAnnotation": null,
            "start": 2697,
            "end": 2715
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Promise",
                "optional": false,
                "typeAnnotation": null,
                "start": 2718,
                "end": 2725
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "resolve",
                "optional": false,
                "typeAnnotation": null,
                "start": 2726,
                "end": 2733
              },
              "optional": false,
              "computed": false,
              "start": 2718,
              "end": 2733
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 2718,
            "end": 2735
          },
          "definite": false,
          "start": 2697,
          "end": 2735
        }
      ],
      "declare": false,
      "start": 2691,
      "end": 2736
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "testPromiseReject",
            "optional": false,
            "typeAnnotation": null,
            "start": 2743,
            "end": 2760
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Promise",
                "optional": false,
                "typeAnnotation": null,
                "start": 2763,
                "end": 2770
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "reject",
                "optional": false,
                "typeAnnotation": null,
                "start": 2771,
                "end": 2777
              },
              "optional": false,
              "computed": false,
              "start": 2763,
              "end": 2777
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 2763,
            "end": 2779
          },
          "definite": false,
          "start": 2743,
          "end": 2779
        }
      ],
      "declare": false,
      "start": 2737,
      "end": 2780
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "testSymbolFor",
            "optional": false,
            "typeAnnotation": null,
            "start": 2787,
            "end": 2800
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 2803,
                "end": 2809
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "for",
                "optional": false,
                "typeAnnotation": null,
                "start": 2810,
                "end": 2813
              },
              "optional": false,
              "computed": false,
              "start": 2803,
              "end": 2813
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "a",
                "raw": "'a'",
                "start": 2814,
                "end": 2817
              }
            ],
            "optional": false,
            "start": 2803,
            "end": 2818
          },
          "definite": false,
          "start": 2787,
          "end": 2818
        }
      ],
      "declare": false,
      "start": 2781,
      "end": 2819
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "testSymbolKeyFor",
            "optional": false,
            "typeAnnotation": null,
            "start": 2826,
            "end": 2842
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 2845,
                "end": 2851
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "keyFor",
                "optional": false,
                "typeAnnotation": null,
                "start": 2852,
                "end": 2858
              },
              "optional": false,
              "computed": false,
              "start": 2845,
              "end": 2858
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testSymbolFor",
                "optional": false,
                "typeAnnotation": null,
                "start": 2859,
                "end": 2872
              }
            ],
            "optional": false,
            "start": 2845,
            "end": 2873
          },
          "definite": false,
          "start": 2826,
          "end": 2873
        }
      ],
      "declare": false,
      "start": 2820,
      "end": 2874
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "testWeakMap",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "WeakMap",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2894,
                  "end": 2901
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "start": 2902,
                      "end": 2905
                    },
                    {
                      "type": "TSAnyKeyword",
                      "start": 2907,
                      "end": 2910
                    }
                  ],
                  "start": 2901,
                  "end": 2911
                },
                "start": 2894,
                "end": 2911
              },
              "start": 2892,
              "end": 2911
            },
            "start": 2881,
            "end": 2911
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 2914,
              "end": 2918
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 2922,
              "end": 2925
            },
            "start": 2914,
            "end": 2925
          },
          "definite": false,
          "start": 2881,
          "end": 2925
        }
      ],
      "declare": false,
      "start": 2875,
      "end": 2926
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "testWeakSet",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "WeakMap",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2946,
                  "end": 2953
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "start": 2954,
                      "end": 2957
                    },
                    {
                      "type": "TSAnyKeyword",
                      "start": 2959,
                      "end": 2962
                    }
                  ],
                  "start": 2953,
                  "end": 2963
                },
                "start": 2946,
                "end": 2963
              },
              "start": 2944,
              "end": 2963
            },
            "start": 2933,
            "end": 2963
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 2966,
              "end": 2970
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 2974,
              "end": 2977
            },
            "start": 2966,
            "end": 2977
          },
          "definite": false,
          "start": 2933,
          "end": 2977
        }
      ],
      "declare": false,
      "start": 2927,
      "end": 2978
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "testIterator",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Iterator",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2999,
                  "end": 3007
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "start": 3008,
                      "end": 3011
                    },
                    {
                      "type": "TSAnyKeyword",
                      "start": 3013,
                      "end": 3016
                    },
                    {
                      "type": "TSAnyKeyword",
                      "start": 3018,
                      "end": 3021
                    }
                  ],
                  "start": 3007,
                  "end": 3022
                },
                "start": 2999,
                "end": 3022
              },
              "start": 2997,
              "end": 3022
            },
            "start": 2985,
            "end": 3022
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 3025,
              "end": 3029
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 3033,
              "end": 3036
            },
            "start": 3025,
            "end": 3036
          },
          "definite": false,
          "start": 2985,
          "end": 3036
        }
      ],
      "declare": false,
      "start": 2979,
      "end": 3037
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "testAsyncIterator",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AsyncIterator",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3063,
                  "end": 3076
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "start": 3077,
                      "end": 3080
                    },
                    {
                      "type": "TSAnyKeyword",
                      "start": 3082,
                      "end": 3085
                    },
                    {
                      "type": "TSAnyKeyword",
                      "start": 3087,
                      "end": 3090
                    }
                  ],
                  "start": 3076,
                  "end": 3091
                },
                "start": 3063,
                "end": 3091
              },
              "start": 3061,
              "end": 3091
            },
            "start": 3044,
            "end": 3091
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 3094,
              "end": 3098
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 3102,
              "end": 3105
            },
            "start": 3094,
            "end": 3105
          },
          "definite": false,
          "start": 3044,
          "end": 3105
        }
      ],
      "declare": false,
      "start": 3038,
      "end": 3106
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "testStringCodePointAt",
            "optional": false,
            "typeAnnotation": null,
            "start": 3113,
            "end": 3134
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 3137,
                "end": 3139
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "codePointAt",
                "optional": false,
                "typeAnnotation": null,
                "start": 3140,
                "end": 3151
              },
              "optional": false,
              "computed": false,
              "start": 3137,
              "end": 3151
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 3152,
                "end": 3153
              }
            ],
            "optional": false,
            "start": 3137,
            "end": 3154
          },
          "definite": false,
          "start": 3113,
          "end": 3154
        }
      ],
      "declare": false,
      "start": 3107,
      "end": 3155
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "testStringIncludes",
            "optional": false,
            "typeAnnotation": null,
            "start": 3162,
            "end": 3180
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 3183,
                "end": 3185
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "includes",
                "optional": false,
                "typeAnnotation": null,
                "start": 3186,
                "end": 3194
              },
              "optional": false,
              "computed": false,
              "start": 3183,
              "end": 3194
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 3195,
                "end": 3197
              }
            ],
            "optional": false,
            "start": 3183,
            "end": 3198
          },
          "definite": false,
          "start": 3162,
          "end": 3198
        }
      ],
      "declare": false,
      "start": 3156,
      "end": 3199
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "testStringEndsWith",
            "optional": false,
            "typeAnnotation": null,
            "start": 3206,
            "end": 3224
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 3227,
                "end": 3229
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "endsWith",
                "optional": false,
                "typeAnnotation": null,
                "start": 3230,
                "end": 3238
              },
              "optional": false,
              "computed": false,
              "start": 3227,
              "end": 3238
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 3239,
                "end": 3241
              }
            ],
            "optional": false,
            "start": 3227,
            "end": 3242
          },
          "definite": false,
          "start": 3206,
          "end": 3242
        }
      ],
      "declare": false,
      "start": 3200,
      "end": 3243
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "testStringNormalize",
            "optional": false,
            "typeAnnotation": null,
            "start": 3250,
            "end": 3269
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 3272,
                "end": 3274
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "normalize",
                "optional": false,
                "typeAnnotation": null,
                "start": 3275,
                "end": 3284
              },
              "optional": false,
              "computed": false,
              "start": 3272,
              "end": 3284
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 3272,
            "end": 3286
          },
          "definite": false,
          "start": 3250,
          "end": 3286
        }
      ],
      "declare": false,
      "start": 3244,
      "end": 3287
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "testStringRepeat",
            "optional": false,
            "typeAnnotation": null,
            "start": 3294,
            "end": 3310
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 3313,
                "end": 3315
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "repeat",
                "optional": false,
                "typeAnnotation": null,
                "start": 3316,
                "end": 3322
              },
              "optional": false,
              "computed": false,
              "start": 3313,
              "end": 3322
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 3323,
                "end": 3324
              }
            ],
            "optional": false,
            "start": 3313,
            "end": 3325
          },
          "definite": false,
          "start": 3294,
          "end": 3325
        }
      ],
      "declare": false,
      "start": 3288,
      "end": 3326
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "testStringStartsWith",
            "optional": false,
            "typeAnnotation": null,
            "start": 3333,
            "end": 3353
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 3356,
                "end": 3358
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "startsWith",
                "optional": false,
                "typeAnnotation": null,
                "start": 3359,
                "end": 3369
              },
              "optional": false,
              "computed": false,
              "start": 3356,
              "end": 3369
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 3370,
                "end": 3372
              }
            ],
            "optional": false,
            "start": 3356,
            "end": 3373
          },
          "definite": false,
          "start": 3333,
          "end": 3373
        }
      ],
      "declare": false,
      "start": 3327,
      "end": 3374
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "testStringAnchor",
            "optional": false,
            "typeAnnotation": null,
            "start": 3381,
            "end": 3397
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 3400,
                "end": 3402
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "anchor",
                "optional": false,
                "typeAnnotation": null,
                "start": 3403,
                "end": 3409
              },
              "optional": false,
              "computed": false,
              "start": 3400,
              "end": 3409
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 3410,
                "end": 3412
              }
            ],
            "optional": false,
            "start": 3400,
            "end": 3413
          },
          "definite": false,
          "start": 3381,
          "end": 3413
        }
      ],
      "declare": false,
      "start": 3375,
      "end": 3414
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "testStringBig",
            "optional": false,
            "typeAnnotation": null,
            "start": 3421,
            "end": 3434
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 3437,
                "end": 3439
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "big",
                "optional": false,
                "typeAnnotation": null,
                "start": 3440,
                "end": 3443
              },
              "optional": false,
              "computed": false,
              "start": 3437,
              "end": 3443
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 3437,
            "end": 3445
          },
          "definite": false,
          "start": 3421,
          "end": 3445
        }
      ],
      "declare": false,
      "start": 3415,
      "end": 3446
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "testStringBlink",
            "optional": false,
            "typeAnnotation": null,
            "start": 3453,
            "end": 3468
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 3471,
                "end": 3473
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "blink",
                "optional": false,
                "typeAnnotation": null,
                "start": 3474,
                "end": 3479
              },
              "optional": false,
              "computed": false,
              "start": 3471,
              "end": 3479
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 3471,
            "end": 3481
          },
          "definite": false,
          "start": 3453,
          "end": 3481
        }
      ],
      "declare": false,
      "start": 3447,
      "end": 3482
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "testStringBold",
            "optional": false,
            "typeAnnotation": null,
            "start": 3489,
            "end": 3503
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 3506,
                "end": 3508
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "bold",
                "optional": false,
                "typeAnnotation": null,
                "start": 3509,
                "end": 3513
              },
              "optional": false,
              "computed": false,
              "start": 3506,
              "end": 3513
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 3506,
            "end": 3515
          },
          "definite": false,
          "start": 3489,
          "end": 3515
        }
      ],
      "declare": false,
      "start": 3483,
      "end": 3516
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "testStringFixed",
            "optional": false,
            "typeAnnotation": null,
            "start": 3523,
            "end": 3538
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 3541,
                "end": 3543
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "fixed",
                "optional": false,
                "typeAnnotation": null,
                "start": 3544,
                "end": 3549
              },
              "optional": false,
              "computed": false,
              "start": 3541,
              "end": 3549
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 3541,
            "end": 3551
          },
          "definite": false,
          "start": 3523,
          "end": 3551
        }
      ],
      "declare": false,
      "start": 3517,
      "end": 3552
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "testStringFontColor",
            "optional": false,
            "typeAnnotation": null,
            "start": 3559,
            "end": 3578
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 3581,
                "end": 3583
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "fontcolor",
                "optional": false,
                "typeAnnotation": null,
                "start": 3584,
                "end": 3593
              },
              "optional": false,
              "computed": false,
              "start": 3581,
              "end": 3593
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "blue",
                "raw": "\"blue\"",
                "start": 3594,
                "end": 3600
              }
            ],
            "optional": false,
            "start": 3581,
            "end": 3601
          },
          "definite": false,
          "start": 3559,
          "end": 3601
        }
      ],
      "declare": false,
      "start": 3553,
      "end": 3602
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "testStringFontSize",
            "optional": false,
            "typeAnnotation": null,
            "start": 3609,
            "end": 3627
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 3630,
                "end": 3632
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "fontsize",
                "optional": false,
                "typeAnnotation": null,
                "start": 3633,
                "end": 3641
              },
              "optional": false,
              "computed": false,
              "start": 3630,
              "end": 3641
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 3642,
                "end": 3643
              }
            ],
            "optional": false,
            "start": 3630,
            "end": 3644
          },
          "definite": false,
          "start": 3609,
          "end": 3644
        }
      ],
      "declare": false,
      "start": 3603,
      "end": 3645
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "testStringItalics",
            "optional": false,
            "typeAnnotation": null,
            "start": 3652,
            "end": 3669
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 3672,
                "end": 3674
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "italics",
                "optional": false,
                "typeAnnotation": null,
                "start": 3675,
                "end": 3682
              },
              "optional": false,
              "computed": false,
              "start": 3672,
              "end": 3682
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 3672,
            "end": 3684
          },
          "definite": false,
          "start": 3652,
          "end": 3684
        }
      ],
      "declare": false,
      "start": 3646,
      "end": 3685
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "testStringLink",
            "optional": false,
            "typeAnnotation": null,
            "start": 3692,
            "end": 3706
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 3709,
                "end": 3711
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "link",
                "optional": false,
                "typeAnnotation": null,
                "start": 3712,
                "end": 3716
              },
              "optional": false,
              "computed": false,
              "start": 3709,
              "end": 3716
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 3717,
                "end": 3719
              }
            ],
            "optional": false,
            "start": 3709,
            "end": 3720
          },
          "definite": false,
          "start": 3692,
          "end": 3720
        }
      ],
      "declare": false,
      "start": 3686,
      "end": 3721
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "testStringSmall",
            "optional": false,
            "typeAnnotation": null,
            "start": 3728,
            "end": 3743
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 3746,
                "end": 3748
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "small",
                "optional": false,
                "typeAnnotation": null,
                "start": 3749,
                "end": 3754
              },
              "optional": false,
              "computed": false,
              "start": 3746,
              "end": 3754
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 3746,
            "end": 3756
          },
          "definite": false,
          "start": 3728,
          "end": 3756
        }
      ],
      "declare": false,
      "start": 3722,
      "end": 3757
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "testStringStrike",
            "optional": false,
            "typeAnnotation": null,
            "start": 3764,
            "end": 3780
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 3783,
                "end": 3785
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "strike",
                "optional": false,
                "typeAnnotation": null,
                "start": 3786,
                "end": 3792
              },
              "optional": false,
              "computed": false,
              "start": 3783,
              "end": 3792
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 3783,
            "end": 3794
          },
          "definite": false,
          "start": 3764,
          "end": 3794
        }
      ],
      "declare": false,
      "start": 3758,
      "end": 3795
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "testStringSub",
            "optional": false,
            "typeAnnotation": null,
            "start": 3802,
            "end": 3815
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 3818,
                "end": 3820
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "sub",
                "optional": false,
                "typeAnnotation": null,
                "start": 3821,
                "end": 3824
              },
              "optional": false,
              "computed": false,
              "start": 3818,
              "end": 3824
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 3818,
            "end": 3826
          },
          "definite": false,
          "start": 3802,
          "end": 3826
        }
      ],
      "declare": false,
      "start": 3796,
      "end": 3827
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "testStringSup",
            "optional": false,
            "typeAnnotation": null,
            "start": 3834,
            "end": 3847
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 3850,
                "end": 3852
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "sup",
                "optional": false,
                "typeAnnotation": null,
                "start": 3853,
                "end": 3856
              },
              "optional": false,
              "computed": false,
              "start": 3850,
              "end": 3856
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 3850,
            "end": 3858
          },
          "definite": false,
          "start": 3834,
          "end": 3858
        }
      ],
      "declare": false,
      "start": 3828,
      "end": 3859
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "testStringConstructorFromCodePoint",
            "optional": false,
            "typeAnnotation": null,
            "start": 3866,
            "end": 3900
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "String",
                "optional": false,
                "typeAnnotation": null,
                "start": 3903,
                "end": 3909
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "fromCodePoint",
                "optional": false,
                "typeAnnotation": null,
                "start": 3910,
                "end": 3923
              },
              "optional": false,
              "computed": false,
              "start": 3903,
              "end": 3923
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 3903,
            "end": 3925
          },
          "definite": false,
          "start": 3866,
          "end": 3925
        }
      ],
      "declare": false,
      "start": 3860,
      "end": 3926
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "testStringConstructorRaw",
            "optional": false,
            "typeAnnotation": null,
            "start": 3933,
            "end": 3957
          },
          "init": {
            "type": "TaggedTemplateExpression",
            "tag": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "String",
                "optional": false,
                "typeAnnotation": null,
                "start": 3960,
                "end": 3966
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "raw",
                "optional": false,
                "typeAnnotation": null,
                "start": 3967,
                "end": 3970
              },
              "optional": false,
              "computed": false,
              "start": 3960,
              "end": 3970
            },
            "typeArguments": null,
            "quasi": {
              "type": "TemplateLiteral",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true,
                  "start": 3970,
                  "end": 3972
                }
              ],
              "expressions": [],
              "start": 3970,
              "end": 3972
            },
            "start": 3960,
            "end": 3972
          },
          "definite": false,
          "start": 3933,
          "end": 3972
        }
      ],
      "declare": false,
      "start": 3927,
      "end": 3973
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "testRegExpFlags",
            "optional": false,
            "typeAnnotation": null,
            "start": 3980,
            "end": 3995
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Literal",
              "value": null,
              "raw": "/abc/g",
              "regex": {
                "pattern": "abc",
                "flags": "g"
              },
              "start": 3998,
              "end": 4004
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "flags",
              "optional": false,
              "typeAnnotation": null,
              "start": 4005,
              "end": 4010
            },
            "optional": false,
            "computed": false,
            "start": 3998,
            "end": 4010
          },
          "definite": false,
          "start": 3980,
          "end": 4010
        }
      ],
      "declare": false,
      "start": 3974,
      "end": 4011
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "testRegExpSticky",
            "optional": false,
            "typeAnnotation": null,
            "start": 4018,
            "end": 4034
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Literal",
              "value": null,
              "raw": "/abc/g",
              "regex": {
                "pattern": "abc",
                "flags": "g"
              },
              "start": 4037,
              "end": 4043
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "sticky",
              "optional": false,
              "typeAnnotation": null,
              "start": 4044,
              "end": 4050
            },
            "optional": false,
            "computed": false,
            "start": 4037,
            "end": 4050
          },
          "definite": false,
          "start": 4018,
          "end": 4050
        }
      ],
      "declare": false,
      "start": 4012,
      "end": 4051
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "testRegExpUnicode",
            "optional": false,
            "typeAnnotation": null,
            "start": 4058,
            "end": 4075
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Literal",
              "value": null,
              "raw": "/abc/g",
              "regex": {
                "pattern": "abc",
                "flags": "g"
              },
              "start": 4078,
              "end": 4084
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "unicode",
              "optional": false,
              "typeAnnotation": null,
              "start": 4085,
              "end": 4092
            },
            "optional": false,
            "computed": false,
            "start": 4078,
            "end": 4092
          },
          "definite": false,
          "start": 4058,
          "end": 4092
        }
      ],
      "declare": false,
      "start": 4052,
      "end": 4093
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 10,
  "end": 4093
}
```
