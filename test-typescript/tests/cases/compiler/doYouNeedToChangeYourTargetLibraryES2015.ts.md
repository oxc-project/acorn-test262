__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 10,
  "end": 4094,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 10,
      "end": 32,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 16,
          "end": 31,
          "id": {
            "type": "Identifier",
            "start": 16,
            "end": 20,
            "name": "noOp",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 23,
            "end": 31,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [],
            "body": {
              "type": "BlockStatement",
              "start": 29,
              "end": 31,
              "body": []
            },
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 33,
      "end": 88,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 39,
          "end": 87,
          "id": {
            "type": "Identifier",
            "start": 39,
            "end": 55,
            "name": "testReflectApply",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 58,
            "end": 87,
            "callee": {
              "type": "MemberExpression",
              "start": 58,
              "end": 71,
              "object": {
                "type": "Identifier",
                "start": 58,
                "end": 65,
                "name": "Reflect",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 66,
                "end": 71,
                "name": "apply",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 72,
                "end": 76,
                "name": "noOp",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "ThisExpression",
                "start": 78,
                "end": 82
              },
              {
                "type": "ArrayExpression",
                "start": 84,
                "end": 86,
                "elements": []
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 89,
      "end": 146,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 95,
          "end": 145,
          "id": {
            "type": "Identifier",
            "start": 95,
            "end": 115,
            "name": "testReflectConstruct",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 118,
            "end": 145,
            "callee": {
              "type": "MemberExpression",
              "start": 118,
              "end": 135,
              "object": {
                "type": "Identifier",
                "start": 118,
                "end": 125,
                "name": "Reflect",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 126,
                "end": 135,
                "name": "construct",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 136,
                "end": 140,
                "name": "noOp",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "ArrayExpression",
                "start": 142,
                "end": 144,
                "elements": []
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 147,
      "end": 216,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 153,
          "end": 215,
          "id": {
            "type": "Identifier",
            "start": 153,
            "end": 178,
            "name": "testReflectDefineProperty",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 181,
            "end": 215,
            "callee": {
              "type": "MemberExpression",
              "start": 181,
              "end": 203,
              "object": {
                "type": "Identifier",
                "start": 181,
                "end": 188,
                "name": "Reflect",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 189,
                "end": 203,
                "name": "defineProperty",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 204,
                "end": 206,
                "properties": []
              },
              {
                "type": "Literal",
                "start": 208,
                "end": 210,
                "value": "",
                "raw": "\"\""
              },
              {
                "type": "ObjectExpression",
                "start": 212,
                "end": 214,
                "properties": []
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 217,
      "end": 282,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 223,
          "end": 281,
          "id": {
            "type": "Identifier",
            "start": 223,
            "end": 248,
            "name": "testReflectDeleteProperty",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 251,
            "end": 281,
            "callee": {
              "type": "MemberExpression",
              "start": 251,
              "end": 273,
              "object": {
                "type": "Identifier",
                "start": 251,
                "end": 258,
                "name": "Reflect",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 259,
                "end": 273,
                "name": "deleteProperty",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 274,
                "end": 276,
                "properties": []
              },
              {
                "type": "Literal",
                "start": 278,
                "end": 280,
                "value": "",
                "raw": "\"\""
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 283,
      "end": 326,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 289,
          "end": 325,
          "id": {
            "type": "Identifier",
            "start": 289,
            "end": 303,
            "name": "testReflectGet",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 306,
            "end": 325,
            "callee": {
              "type": "MemberExpression",
              "start": 306,
              "end": 317,
              "object": {
                "type": "Identifier",
                "start": 306,
                "end": 313,
                "name": "Reflect",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 314,
                "end": 317,
                "name": "get",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 318,
                "end": 320,
                "properties": []
              },
              {
                "type": "Literal",
                "start": 322,
                "end": 324,
                "value": "",
                "raw": "\"\""
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 327,
      "end": 412,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 333,
          "end": 411,
          "id": {
            "type": "Identifier",
            "start": 333,
            "end": 368,
            "name": "testReflectGetOwnPropertyDescriptor",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 371,
            "end": 411,
            "callee": {
              "type": "MemberExpression",
              "start": 371,
              "end": 403,
              "object": {
                "type": "Identifier",
                "start": 371,
                "end": 378,
                "name": "Reflect",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 379,
                "end": 403,
                "name": "getOwnPropertyDescriptor",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 404,
                "end": 406,
                "properties": []
              },
              {
                "type": "Literal",
                "start": 408,
                "end": 410,
                "value": "",
                "raw": "\"\""
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 413,
      "end": 474,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 419,
          "end": 473,
          "id": {
            "type": "Identifier",
            "start": 419,
            "end": 444,
            "name": "testReflectGetPrototypeOf",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 447,
            "end": 473,
            "callee": {
              "type": "MemberExpression",
              "start": 447,
              "end": 469,
              "object": {
                "type": "Identifier",
                "start": 447,
                "end": 454,
                "name": "Reflect",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 455,
                "end": 469,
                "name": "getPrototypeOf",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 470,
                "end": 472,
                "properties": []
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 475,
      "end": 532,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 481,
          "end": 531,
          "id": {
            "type": "Identifier",
            "start": 481,
            "end": 504,
            "name": "testReflectIsExtensible",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 507,
            "end": 531,
            "callee": {
              "type": "MemberExpression",
              "start": 507,
              "end": 527,
              "object": {
                "type": "Identifier",
                "start": 507,
                "end": 514,
                "name": "Reflect",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 515,
                "end": 527,
                "name": "isExtensible",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 528,
                "end": 530,
                "properties": []
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 533,
      "end": 580,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 539,
          "end": 579,
          "id": {
            "type": "Identifier",
            "start": 539,
            "end": 557,
            "name": "testReflectOwnKeys",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 560,
            "end": 579,
            "callee": {
              "type": "MemberExpression",
              "start": 560,
              "end": 575,
              "object": {
                "type": "Identifier",
                "start": 560,
                "end": 567,
                "name": "Reflect",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 568,
                "end": 575,
                "name": "ownKeys",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 576,
                "end": 578,
                "properties": []
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 581,
      "end": 648,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 587,
          "end": 647,
          "id": {
            "type": "Identifier",
            "start": 587,
            "end": 615,
            "name": "testReflectPreventExtensions",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 618,
            "end": 647,
            "callee": {
              "type": "MemberExpression",
              "start": 618,
              "end": 643,
              "object": {
                "type": "Identifier",
                "start": 618,
                "end": 625,
                "name": "Reflect",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 626,
                "end": 643,
                "name": "preventExtensions",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 644,
                "end": 646,
                "properties": []
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 649,
      "end": 695,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 655,
          "end": 694,
          "id": {
            "type": "Identifier",
            "start": 655,
            "end": 669,
            "name": "testReflectSet",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 672,
            "end": 694,
            "callee": {
              "type": "MemberExpression",
              "start": 672,
              "end": 683,
              "object": {
                "type": "Identifier",
                "start": 672,
                "end": 679,
                "name": "Reflect",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 680,
                "end": 683,
                "name": "set",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 684,
                "end": 686,
                "properties": []
              },
              {
                "type": "Literal",
                "start": 688,
                "end": 690,
                "value": "",
                "raw": "\"\""
              },
              {
                "type": "Literal",
                "start": 692,
                "end": 693,
                "value": 0,
                "raw": "0"
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 696,
      "end": 761,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 702,
          "end": 760,
          "id": {
            "type": "Identifier",
            "start": 702,
            "end": 727,
            "name": "testReflectSetPrototypeOf",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 730,
            "end": 760,
            "callee": {
              "type": "MemberExpression",
              "start": 730,
              "end": 752,
              "object": {
                "type": "Identifier",
                "start": 730,
                "end": 737,
                "name": "Reflect",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 738,
                "end": 752,
                "name": "setPrototypeOf",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 753,
                "end": 755,
                "properties": []
              },
              {
                "type": "ObjectExpression",
                "start": 757,
                "end": 759,
                "properties": []
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 763,
      "end": 836,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 769,
          "end": 835,
          "id": {
            "type": "Identifier",
            "start": 769,
            "end": 782,
            "name": "testArrayFind",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 785,
            "end": 835,
            "callee": {
              "type": "MemberExpression",
              "start": 785,
              "end": 794,
              "object": {
                "type": "ArrayExpression",
                "start": 785,
                "end": 789,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 786,
                    "end": 788,
                    "value": "",
                    "raw": "\"\""
                  }
                ]
              },
              "property": {
                "type": "Identifier",
                "start": 790,
                "end": 794,
                "name": "find",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 795,
                "end": 834,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 796,
                    "end": 799,
                    "name": "val",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 801,
                    "end": 804,
                    "name": "idx",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 806,
                    "end": 809,
                    "name": "obj",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "BlockStatement",
                  "start": 814,
                  "end": 834,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 820,
                      "end": 832,
                      "argument": {
                        "type": "Literal",
                        "start": 827,
                        "end": 831,
                        "value": true,
                        "raw": "true"
                      }
                    }
                  ]
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 837,
      "end": 920,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 843,
          "end": 919,
          "id": {
            "type": "Identifier",
            "start": 843,
            "end": 861,
            "name": "testArrayFindIndex",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 864,
            "end": 919,
            "callee": {
              "type": "MemberExpression",
              "start": 864,
              "end": 878,
              "object": {
                "type": "ArrayExpression",
                "start": 864,
                "end": 868,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 865,
                    "end": 867,
                    "value": "",
                    "raw": "\"\""
                  }
                ]
              },
              "property": {
                "type": "Identifier",
                "start": 869,
                "end": 878,
                "name": "findIndex",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 879,
                "end": 918,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 880,
                    "end": 883,
                    "name": "val",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 885,
                    "end": 888,
                    "name": "idx",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 890,
                    "end": 893,
                    "name": "obj",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "BlockStatement",
                  "start": 898,
                  "end": 918,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 904,
                      "end": 916,
                      "argument": {
                        "type": "Literal",
                        "start": 911,
                        "end": 915,
                        "value": true,
                        "raw": "true"
                      }
                    }
                  ]
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 921,
      "end": 961,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 927,
          "end": 960,
          "id": {
            "type": "Identifier",
            "start": 927,
            "end": 940,
            "name": "testArrayFill",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 943,
            "end": 960,
            "callee": {
              "type": "MemberExpression",
              "start": 943,
              "end": 952,
              "object": {
                "type": "ArrayExpression",
                "start": 943,
                "end": 947,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 944,
                    "end": 946,
                    "value": "",
                    "raw": "\"\""
                  }
                ]
              },
              "property": {
                "type": "Identifier",
                "start": 948,
                "end": 952,
                "name": "fill",
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
                "start": 953,
                "end": 959,
                "value": "fill",
                "raw": "\"fill\""
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 962,
      "end": 1012,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 968,
          "end": 1011,
          "id": {
            "type": "Identifier",
            "start": 968,
            "end": 987,
            "name": "testArrayCopyWithin",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 990,
            "end": 1011,
            "callee": {
              "type": "MemberExpression",
              "start": 990,
              "end": 1005,
              "object": {
                "type": "ArrayExpression",
                "start": 990,
                "end": 994,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 991,
                    "end": 993,
                    "value": "",
                    "raw": "\"\""
                  }
                ]
              },
              "property": {
                "type": "Identifier",
                "start": 995,
                "end": 1005,
                "name": "copyWithin",
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
                "start": 1006,
                "end": 1007,
                "value": 0,
                "raw": "0"
              },
              {
                "type": "Literal",
                "start": 1009,
                "end": 1010,
                "value": 0,
                "raw": "0"
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1013,
      "end": 1053,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1019,
          "end": 1052,
          "id": {
            "type": "Identifier",
            "start": 1019,
            "end": 1035,
            "name": "testArrayEntries",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1038,
            "end": 1052,
            "callee": {
              "type": "MemberExpression",
              "start": 1038,
              "end": 1050,
              "object": {
                "type": "ArrayExpression",
                "start": 1038,
                "end": 1042,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 1039,
                    "end": 1041,
                    "value": "",
                    "raw": "\"\""
                  }
                ]
              },
              "property": {
                "type": "Identifier",
                "start": 1043,
                "end": 1050,
                "name": "entries",
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
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1054,
      "end": 1088,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1060,
          "end": 1087,
          "id": {
            "type": "Identifier",
            "start": 1060,
            "end": 1073,
            "name": "testArrayKeys",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1076,
            "end": 1087,
            "callee": {
              "type": "MemberExpression",
              "start": 1076,
              "end": 1085,
              "object": {
                "type": "ArrayExpression",
                "start": 1076,
                "end": 1080,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 1077,
                    "end": 1079,
                    "value": "",
                    "raw": "\"\""
                  }
                ]
              },
              "property": {
                "type": "Identifier",
                "start": 1081,
                "end": 1085,
                "name": "keys",
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
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1089,
      "end": 1127,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1095,
          "end": 1126,
          "id": {
            "type": "Identifier",
            "start": 1095,
            "end": 1110,
            "name": "testArrayValues",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1113,
            "end": 1126,
            "callee": {
              "type": "MemberExpression",
              "start": 1113,
              "end": 1124,
              "object": {
                "type": "ArrayExpression",
                "start": 1113,
                "end": 1117,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 1114,
                    "end": 1116,
                    "value": "",
                    "raw": "\"\""
                  }
                ]
              },
              "property": {
                "type": "Identifier",
                "start": 1118,
                "end": 1124,
                "name": "values",
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
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1128,
      "end": 1176,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1134,
          "end": 1175,
          "id": {
            "type": "Identifier",
            "start": 1134,
            "end": 1158,
            "name": "testArrayConstructorFrom",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1161,
            "end": 1175,
            "callee": {
              "type": "MemberExpression",
              "start": 1161,
              "end": 1171,
              "object": {
                "type": "Identifier",
                "start": 1161,
                "end": 1166,
                "name": "Array",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1167,
                "end": 1171,
                "name": "from",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrayExpression",
                "start": 1172,
                "end": 1174,
                "elements": []
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1177,
      "end": 1221,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1183,
          "end": 1220,
          "id": {
            "type": "Identifier",
            "start": 1183,
            "end": 1205,
            "name": "testArrayConstructorOf",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1208,
            "end": 1220,
            "callee": {
              "type": "MemberExpression",
              "start": 1208,
              "end": 1216,
              "object": {
                "type": "Identifier",
                "start": 1208,
                "end": 1213,
                "name": "Array",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1214,
                "end": 1216,
                "name": "of",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrayExpression",
                "start": 1217,
                "end": 1219,
                "elements": []
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1222,
      "end": 1280,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1228,
          "end": 1279,
          "id": {
            "type": "Identifier",
            "start": 1228,
            "end": 1255,
            "name": "testObjectConstructorAssign",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1258,
            "end": 1279,
            "callee": {
              "type": "MemberExpression",
              "start": 1258,
              "end": 1271,
              "object": {
                "type": "Identifier",
                "start": 1258,
                "end": 1264,
                "name": "Object",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1265,
                "end": 1271,
                "name": "assign",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 1272,
                "end": 1274,
                "properties": []
              },
              {
                "type": "ObjectExpression",
                "start": 1276,
                "end": 1278,
                "properties": []
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1281,
      "end": 1365,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1287,
          "end": 1364,
          "id": {
            "type": "Identifier",
            "start": 1287,
            "end": 1329,
            "name": "testObjectConstructorGetOwnPropertySymbols",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1332,
            "end": 1364,
            "callee": {
              "type": "MemberExpression",
              "start": 1332,
              "end": 1360,
              "object": {
                "type": "Identifier",
                "start": 1332,
                "end": 1338,
                "name": "Object",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1339,
                "end": 1360,
                "name": "getOwnPropertySymbols",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 1361,
                "end": 1363,
                "properties": []
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1366,
      "end": 1416,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1372,
          "end": 1415,
          "id": {
            "type": "Identifier",
            "start": 1372,
            "end": 1397,
            "name": "testObjectConstructorKeys",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1400,
            "end": 1415,
            "callee": {
              "type": "MemberExpression",
              "start": 1400,
              "end": 1411,
              "object": {
                "type": "Identifier",
                "start": 1400,
                "end": 1406,
                "name": "Object",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1407,
                "end": 1411,
                "name": "keys",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 1412,
                "end": 1414,
                "properties": []
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1417,
      "end": 1467,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1423,
          "end": 1466,
          "id": {
            "type": "Identifier",
            "start": 1423,
            "end": 1446,
            "name": "testObjectConstructorIs",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1449,
            "end": 1466,
            "callee": {
              "type": "MemberExpression",
              "start": 1449,
              "end": 1458,
              "object": {
                "type": "Identifier",
                "start": 1449,
                "end": 1455,
                "name": "Object",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1456,
                "end": 1458,
                "name": "is",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 1459,
                "end": 1461,
                "properties": []
              },
              {
                "type": "ObjectExpression",
                "start": 1463,
                "end": 1465,
                "properties": []
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1468,
      "end": 1542,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1474,
          "end": 1541,
          "id": {
            "type": "Identifier",
            "start": 1474,
            "end": 1509,
            "name": "testObjectConstructorSetPrototypeOf",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1512,
            "end": 1541,
            "callee": {
              "type": "MemberExpression",
              "start": 1512,
              "end": 1533,
              "object": {
                "type": "Identifier",
                "start": 1512,
                "end": 1518,
                "name": "Object",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1519,
                "end": 1533,
                "name": "setPrototypeOf",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 1534,
                "end": 1536,
                "properties": []
              },
              {
                "type": "ObjectExpression",
                "start": 1538,
                "end": 1540,
                "properties": []
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1543,
      "end": 1600,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1549,
          "end": 1599,
          "id": {
            "type": "Identifier",
            "start": 1549,
            "end": 1578,
            "name": "testNumberConstructorIsFinite",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1581,
            "end": 1599,
            "callee": {
              "type": "MemberExpression",
              "start": 1581,
              "end": 1596,
              "object": {
                "type": "Identifier",
                "start": 1581,
                "end": 1587,
                "name": "Number",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1588,
                "end": 1596,
                "name": "isFinite",
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
                "start": 1597,
                "end": 1598,
                "value": 0,
                "raw": "0"
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1601,
      "end": 1660,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1607,
          "end": 1659,
          "id": {
            "type": "Identifier",
            "start": 1607,
            "end": 1637,
            "name": "testNumberConstructorIsInteger",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1640,
            "end": 1659,
            "callee": {
              "type": "MemberExpression",
              "start": 1640,
              "end": 1656,
              "object": {
                "type": "Identifier",
                "start": 1640,
                "end": 1646,
                "name": "Number",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1647,
                "end": 1656,
                "name": "isInteger",
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
                "start": 1657,
                "end": 1658,
                "value": 0,
                "raw": "0"
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1661,
      "end": 1712,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1667,
          "end": 1711,
          "id": {
            "type": "Identifier",
            "start": 1667,
            "end": 1693,
            "name": "testNumberConstructorIsNan",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1696,
            "end": 1711,
            "callee": {
              "type": "MemberExpression",
              "start": 1696,
              "end": 1708,
              "object": {
                "type": "Identifier",
                "start": 1696,
                "end": 1702,
                "name": "Number",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1703,
                "end": 1708,
                "name": "isNaN",
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
                "start": 1709,
                "end": 1710,
                "value": 0,
                "raw": "0"
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1713,
      "end": 1780,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1719,
          "end": 1779,
          "id": {
            "type": "Identifier",
            "start": 1719,
            "end": 1753,
            "name": "testNumberConstructorIsSafeInteger",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1756,
            "end": 1779,
            "callee": {
              "type": "MemberExpression",
              "start": 1756,
              "end": 1776,
              "object": {
                "type": "Identifier",
                "start": 1756,
                "end": 1762,
                "name": "Number",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1763,
                "end": 1776,
                "name": "isSafeInteger",
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
                "start": 1777,
                "end": 1778,
                "value": 0,
                "raw": "0"
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1781,
      "end": 1844,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1787,
          "end": 1843,
          "id": {
            "type": "Identifier",
            "start": 1787,
            "end": 1818,
            "name": "testNumberConstructorParseFloat",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1821,
            "end": 1843,
            "callee": {
              "type": "MemberExpression",
              "start": 1821,
              "end": 1838,
              "object": {
                "type": "Identifier",
                "start": 1821,
                "end": 1827,
                "name": "Number",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1828,
                "end": 1838,
                "name": "parseFloat",
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
                "start": 1839,
                "end": 1842,
                "value": "0",
                "raw": "\"0\""
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1845,
      "end": 1904,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1851,
          "end": 1903,
          "id": {
            "type": "Identifier",
            "start": 1851,
            "end": 1880,
            "name": "testNumberConstructorParseInt",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1883,
            "end": 1903,
            "callee": {
              "type": "MemberExpression",
              "start": 1883,
              "end": 1898,
              "object": {
                "type": "Identifier",
                "start": 1883,
                "end": 1889,
                "name": "Number",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1890,
                "end": 1898,
                "name": "parseInt",
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
                "start": 1899,
                "end": 1902,
                "value": "0",
                "raw": "\"0\""
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1905,
      "end": 1941,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1911,
          "end": 1940,
          "id": {
            "type": "Identifier",
            "start": 1911,
            "end": 1924,
            "name": "testMathClz32",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1927,
            "end": 1940,
            "callee": {
              "type": "MemberExpression",
              "start": 1927,
              "end": 1937,
              "object": {
                "type": "Identifier",
                "start": 1927,
                "end": 1931,
                "name": "Math",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1932,
                "end": 1937,
                "name": "clz32",
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
                "start": 1938,
                "end": 1939,
                "value": 0,
                "raw": "0"
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1942,
      "end": 1978,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1948,
          "end": 1977,
          "id": {
            "type": "Identifier",
            "start": 1948,
            "end": 1960,
            "name": "testMathImul",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1963,
            "end": 1977,
            "callee": {
              "type": "MemberExpression",
              "start": 1963,
              "end": 1972,
              "object": {
                "type": "Identifier",
                "start": 1963,
                "end": 1967,
                "name": "Math",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1968,
                "end": 1972,
                "name": "imul",
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
                "start": 1973,
                "end": 1974,
                "value": 0,
                "raw": "0"
              },
              {
                "type": "Literal",
                "start": 1975,
                "end": 1976,
                "value": 0,
                "raw": "0"
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1979,
      "end": 2013,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1985,
          "end": 2012,
          "id": {
            "type": "Identifier",
            "start": 1985,
            "end": 1997,
            "name": "testMathSign",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 2000,
            "end": 2012,
            "callee": {
              "type": "MemberExpression",
              "start": 2000,
              "end": 2009,
              "object": {
                "type": "Identifier",
                "start": 2000,
                "end": 2004,
                "name": "Math",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 2005,
                "end": 2009,
                "name": "sign",
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
                "start": 2010,
                "end": 2011,
                "value": 0,
                "raw": "0"
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2014,
      "end": 2050,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2020,
          "end": 2049,
          "id": {
            "type": "Identifier",
            "start": 2020,
            "end": 2033,
            "name": "testMathLog10",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 2036,
            "end": 2049,
            "callee": {
              "type": "MemberExpression",
              "start": 2036,
              "end": 2046,
              "object": {
                "type": "Identifier",
                "start": 2036,
                "end": 2040,
                "name": "Math",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 2041,
                "end": 2046,
                "name": "log10",
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
                "start": 2047,
                "end": 2048,
                "value": 0,
                "raw": "0"
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2051,
      "end": 2085,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2057,
          "end": 2084,
          "id": {
            "type": "Identifier",
            "start": 2057,
            "end": 2069,
            "name": "testMathLog2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 2072,
            "end": 2084,
            "callee": {
              "type": "MemberExpression",
              "start": 2072,
              "end": 2081,
              "object": {
                "type": "Identifier",
                "start": 2072,
                "end": 2076,
                "name": "Math",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 2077,
                "end": 2081,
                "name": "log2",
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
                "start": 2082,
                "end": 2083,
                "value": 0,
                "raw": "0"
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2086,
      "end": 2122,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2092,
          "end": 2121,
          "id": {
            "type": "Identifier",
            "start": 2092,
            "end": 2105,
            "name": "testMathLog1p",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 2108,
            "end": 2121,
            "callee": {
              "type": "MemberExpression",
              "start": 2108,
              "end": 2118,
              "object": {
                "type": "Identifier",
                "start": 2108,
                "end": 2112,
                "name": "Math",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 2113,
                "end": 2118,
                "name": "log1p",
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
                "start": 2119,
                "end": 2120,
                "value": 0,
                "raw": "0"
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2123,
      "end": 2159,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2129,
          "end": 2158,
          "id": {
            "type": "Identifier",
            "start": 2129,
            "end": 2142,
            "name": "testMathExpm1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 2145,
            "end": 2158,
            "callee": {
              "type": "MemberExpression",
              "start": 2145,
              "end": 2155,
              "object": {
                "type": "Identifier",
                "start": 2145,
                "end": 2149,
                "name": "Math",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 2150,
                "end": 2155,
                "name": "expm1",
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
                "start": 2156,
                "end": 2157,
                "value": 0,
                "raw": "0"
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2160,
      "end": 2194,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2166,
          "end": 2193,
          "id": {
            "type": "Identifier",
            "start": 2166,
            "end": 2178,
            "name": "testMathCosh",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 2181,
            "end": 2193,
            "callee": {
              "type": "MemberExpression",
              "start": 2181,
              "end": 2190,
              "object": {
                "type": "Identifier",
                "start": 2181,
                "end": 2185,
                "name": "Math",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 2186,
                "end": 2190,
                "name": "cosh",
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
                "start": 2191,
                "end": 2192,
                "value": 0,
                "raw": "0"
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2195,
      "end": 2229,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2201,
          "end": 2228,
          "id": {
            "type": "Identifier",
            "start": 2201,
            "end": 2213,
            "name": "testMathSinh",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 2216,
            "end": 2228,
            "callee": {
              "type": "MemberExpression",
              "start": 2216,
              "end": 2225,
              "object": {
                "type": "Identifier",
                "start": 2216,
                "end": 2220,
                "name": "Math",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 2221,
                "end": 2225,
                "name": "sinh",
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
                "start": 2226,
                "end": 2227,
                "value": 0,
                "raw": "0"
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2230,
      "end": 2264,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2236,
          "end": 2263,
          "id": {
            "type": "Identifier",
            "start": 2236,
            "end": 2248,
            "name": "testMathTanh",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 2251,
            "end": 2263,
            "callee": {
              "type": "MemberExpression",
              "start": 2251,
              "end": 2260,
              "object": {
                "type": "Identifier",
                "start": 2251,
                "end": 2255,
                "name": "Math",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 2256,
                "end": 2260,
                "name": "tanh",
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
                "start": 2261,
                "end": 2262,
                "value": 0,
                "raw": "0"
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2265,
      "end": 2301,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2271,
          "end": 2300,
          "id": {
            "type": "Identifier",
            "start": 2271,
            "end": 2284,
            "name": "testMathAcosh",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 2287,
            "end": 2300,
            "callee": {
              "type": "MemberExpression",
              "start": 2287,
              "end": 2297,
              "object": {
                "type": "Identifier",
                "start": 2287,
                "end": 2291,
                "name": "Math",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 2292,
                "end": 2297,
                "name": "acosh",
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
                "start": 2298,
                "end": 2299,
                "value": 0,
                "raw": "0"
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2302,
      "end": 2338,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2308,
          "end": 2337,
          "id": {
            "type": "Identifier",
            "start": 2308,
            "end": 2321,
            "name": "testMathAsinh",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 2324,
            "end": 2337,
            "callee": {
              "type": "MemberExpression",
              "start": 2324,
              "end": 2334,
              "object": {
                "type": "Identifier",
                "start": 2324,
                "end": 2328,
                "name": "Math",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 2329,
                "end": 2334,
                "name": "asinh",
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
                "start": 2335,
                "end": 2336,
                "value": 0,
                "raw": "0"
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2339,
      "end": 2375,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2345,
          "end": 2374,
          "id": {
            "type": "Identifier",
            "start": 2345,
            "end": 2358,
            "name": "testMathAtanh",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 2361,
            "end": 2374,
            "callee": {
              "type": "MemberExpression",
              "start": 2361,
              "end": 2371,
              "object": {
                "type": "Identifier",
                "start": 2361,
                "end": 2365,
                "name": "Math",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 2366,
                "end": 2371,
                "name": "atanh",
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
                "start": 2372,
                "end": 2373,
                "value": 0,
                "raw": "0"
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2376,
      "end": 2414,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2382,
          "end": 2413,
          "id": {
            "type": "Identifier",
            "start": 2382,
            "end": 2395,
            "name": "testMathHypot",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 2398,
            "end": 2413,
            "callee": {
              "type": "MemberExpression",
              "start": 2398,
              "end": 2408,
              "object": {
                "type": "Identifier",
                "start": 2398,
                "end": 2402,
                "name": "Math",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 2403,
                "end": 2408,
                "name": "hypot",
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
                "start": 2409,
                "end": 2410,
                "value": 0,
                "raw": "0"
              },
              {
                "type": "Literal",
                "start": 2411,
                "end": 2412,
                "value": 0,
                "raw": "0"
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2415,
      "end": 2451,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2421,
          "end": 2450,
          "id": {
            "type": "Identifier",
            "start": 2421,
            "end": 2434,
            "name": "testMathTrunc",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 2437,
            "end": 2450,
            "callee": {
              "type": "MemberExpression",
              "start": 2437,
              "end": 2447,
              "object": {
                "type": "Identifier",
                "start": 2437,
                "end": 2441,
                "name": "Math",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 2442,
                "end": 2447,
                "name": "trunc",
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
                "start": 2448,
                "end": 2449,
                "value": 0,
                "raw": "0"
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2452,
      "end": 2490,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2458,
          "end": 2489,
          "id": {
            "type": "Identifier",
            "start": 2458,
            "end": 2472,
            "name": "testMathFround",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 2475,
            "end": 2489,
            "callee": {
              "type": "MemberExpression",
              "start": 2475,
              "end": 2486,
              "object": {
                "type": "Identifier",
                "start": 2475,
                "end": 2479,
                "name": "Math",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 2480,
                "end": 2486,
                "name": "fround",
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
                "start": 2487,
                "end": 2488,
                "value": 0,
                "raw": "0"
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2491,
      "end": 2525,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2497,
          "end": 2524,
          "id": {
            "type": "Identifier",
            "start": 2497,
            "end": 2509,
            "name": "testMathCbrt",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 2512,
            "end": 2524,
            "callee": {
              "type": "MemberExpression",
              "start": 2512,
              "end": 2521,
              "object": {
                "type": "Identifier",
                "start": 2512,
                "end": 2516,
                "name": "Math",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 2517,
                "end": 2521,
                "name": "cbrt",
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
                "start": 2522,
                "end": 2523,
                "value": 0,
                "raw": "0"
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2526,
      "end": 2569,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2532,
          "end": 2568,
          "id": {
            "type": "Identifier",
            "start": 2532,
            "end": 2554,
            "name": "testMap",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2539,
              "end": 2554,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2541,
                "end": 2554,
                "typeName": {
                  "type": "Identifier",
                  "start": 2541,
                  "end": 2544,
                  "name": "Map",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 2544,
                  "end": 2554,
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
                  ]
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TSAsExpression",
            "start": 2557,
            "end": 2568,
            "expression": {
              "type": "Literal",
              "start": 2557,
              "end": 2561,
              "value": null,
              "raw": "null"
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 2565,
              "end": 2568
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2570,
      "end": 2608,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2576,
          "end": 2607,
          "id": {
            "type": "Identifier",
            "start": 2576,
            "end": 2593,
            "name": "testSet",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2583,
              "end": 2593,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2585,
                "end": 2593,
                "typeName": {
                  "type": "Identifier",
                  "start": 2585,
                  "end": 2588,
                  "name": "Set",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 2588,
                  "end": 2593,
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "start": 2589,
                      "end": 2592
                    }
                  ]
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TSAsExpression",
            "start": 2596,
            "end": 2607,
            "expression": {
              "type": "Literal",
              "start": 2596,
              "end": 2600,
              "value": null,
              "raw": "null"
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 2604,
              "end": 2607
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2609,
      "end": 2648,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2615,
          "end": 2647,
          "id": {
            "type": "Identifier",
            "start": 2615,
            "end": 2629,
            "name": "testPromiseAll",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 2632,
            "end": 2647,
            "callee": {
              "type": "MemberExpression",
              "start": 2632,
              "end": 2643,
              "object": {
                "type": "Identifier",
                "start": 2632,
                "end": 2639,
                "name": "Promise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 2640,
                "end": 2643,
                "name": "all",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrayExpression",
                "start": 2644,
                "end": 2646,
                "elements": []
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2649,
      "end": 2690,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2655,
          "end": 2689,
          "id": {
            "type": "Identifier",
            "start": 2655,
            "end": 2670,
            "name": "testPromiseRace",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 2673,
            "end": 2689,
            "callee": {
              "type": "MemberExpression",
              "start": 2673,
              "end": 2685,
              "object": {
                "type": "Identifier",
                "start": 2673,
                "end": 2680,
                "name": "Promise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 2681,
                "end": 2685,
                "name": "race",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrayExpression",
                "start": 2686,
                "end": 2688,
                "elements": []
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2691,
      "end": 2736,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2697,
          "end": 2735,
          "id": {
            "type": "Identifier",
            "start": 2697,
            "end": 2715,
            "name": "testPromiseResolve",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 2718,
            "end": 2735,
            "callee": {
              "type": "MemberExpression",
              "start": 2718,
              "end": 2733,
              "object": {
                "type": "Identifier",
                "start": 2718,
                "end": 2725,
                "name": "Promise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 2726,
                "end": 2733,
                "name": "resolve",
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
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2737,
      "end": 2780,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2743,
          "end": 2779,
          "id": {
            "type": "Identifier",
            "start": 2743,
            "end": 2760,
            "name": "testPromiseReject",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 2763,
            "end": 2779,
            "callee": {
              "type": "MemberExpression",
              "start": 2763,
              "end": 2777,
              "object": {
                "type": "Identifier",
                "start": 2763,
                "end": 2770,
                "name": "Promise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 2771,
                "end": 2777,
                "name": "reject",
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
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2781,
      "end": 2819,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2787,
          "end": 2818,
          "id": {
            "type": "Identifier",
            "start": 2787,
            "end": 2800,
            "name": "testSymbolFor",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 2803,
            "end": 2818,
            "callee": {
              "type": "MemberExpression",
              "start": 2803,
              "end": 2813,
              "object": {
                "type": "Identifier",
                "start": 2803,
                "end": 2809,
                "name": "Symbol",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 2810,
                "end": 2813,
                "name": "for",
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
                "start": 2814,
                "end": 2817,
                "value": "a",
                "raw": "'a'"
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2820,
      "end": 2874,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2826,
          "end": 2873,
          "id": {
            "type": "Identifier",
            "start": 2826,
            "end": 2842,
            "name": "testSymbolKeyFor",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 2845,
            "end": 2873,
            "callee": {
              "type": "MemberExpression",
              "start": 2845,
              "end": 2858,
              "object": {
                "type": "Identifier",
                "start": 2845,
                "end": 2851,
                "name": "Symbol",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 2852,
                "end": 2858,
                "name": "keyFor",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 2859,
                "end": 2872,
                "name": "testSymbolFor",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2875,
      "end": 2926,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2881,
          "end": 2925,
          "id": {
            "type": "Identifier",
            "start": 2881,
            "end": 2911,
            "name": "testWeakMap",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2892,
              "end": 2911,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2894,
                "end": 2911,
                "typeName": {
                  "type": "Identifier",
                  "start": 2894,
                  "end": 2901,
                  "name": "WeakMap",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 2901,
                  "end": 2911,
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
                  ]
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TSAsExpression",
            "start": 2914,
            "end": 2925,
            "expression": {
              "type": "Literal",
              "start": 2914,
              "end": 2918,
              "value": null,
              "raw": "null"
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 2922,
              "end": 2925
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2927,
      "end": 2978,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2933,
          "end": 2977,
          "id": {
            "type": "Identifier",
            "start": 2933,
            "end": 2963,
            "name": "testWeakSet",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2944,
              "end": 2963,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2946,
                "end": 2963,
                "typeName": {
                  "type": "Identifier",
                  "start": 2946,
                  "end": 2953,
                  "name": "WeakMap",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 2953,
                  "end": 2963,
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
                  ]
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TSAsExpression",
            "start": 2966,
            "end": 2977,
            "expression": {
              "type": "Literal",
              "start": 2966,
              "end": 2970,
              "value": null,
              "raw": "null"
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 2974,
              "end": 2977
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2979,
      "end": 3037,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2985,
          "end": 3036,
          "id": {
            "type": "Identifier",
            "start": 2985,
            "end": 3022,
            "name": "testIterator",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2997,
              "end": 3022,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2999,
                "end": 3022,
                "typeName": {
                  "type": "Identifier",
                  "start": 2999,
                  "end": 3007,
                  "name": "Iterator",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 3007,
                  "end": 3022,
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
                  ]
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TSAsExpression",
            "start": 3025,
            "end": 3036,
            "expression": {
              "type": "Literal",
              "start": 3025,
              "end": 3029,
              "value": null,
              "raw": "null"
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 3033,
              "end": 3036
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3038,
      "end": 3106,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3044,
          "end": 3105,
          "id": {
            "type": "Identifier",
            "start": 3044,
            "end": 3091,
            "name": "testAsyncIterator",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3061,
              "end": 3091,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3063,
                "end": 3091,
                "typeName": {
                  "type": "Identifier",
                  "start": 3063,
                  "end": 3076,
                  "name": "AsyncIterator",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 3076,
                  "end": 3091,
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
                  ]
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TSAsExpression",
            "start": 3094,
            "end": 3105,
            "expression": {
              "type": "Literal",
              "start": 3094,
              "end": 3098,
              "value": null,
              "raw": "null"
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 3102,
              "end": 3105
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3107,
      "end": 3155,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3113,
          "end": 3154,
          "id": {
            "type": "Identifier",
            "start": 3113,
            "end": 3134,
            "name": "testStringCodePointAt",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 3137,
            "end": 3154,
            "callee": {
              "type": "MemberExpression",
              "start": 3137,
              "end": 3151,
              "object": {
                "type": "Literal",
                "start": 3137,
                "end": 3139,
                "value": "",
                "raw": "\"\""
              },
              "property": {
                "type": "Identifier",
                "start": 3140,
                "end": 3151,
                "name": "codePointAt",
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
                "start": 3152,
                "end": 3153,
                "value": 0,
                "raw": "0"
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3156,
      "end": 3199,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3162,
          "end": 3198,
          "id": {
            "type": "Identifier",
            "start": 3162,
            "end": 3180,
            "name": "testStringIncludes",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 3183,
            "end": 3198,
            "callee": {
              "type": "MemberExpression",
              "start": 3183,
              "end": 3194,
              "object": {
                "type": "Literal",
                "start": 3183,
                "end": 3185,
                "value": "",
                "raw": "\"\""
              },
              "property": {
                "type": "Identifier",
                "start": 3186,
                "end": 3194,
                "name": "includes",
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
                "start": 3195,
                "end": 3197,
                "value": "",
                "raw": "\"\""
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3200,
      "end": 3243,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3206,
          "end": 3242,
          "id": {
            "type": "Identifier",
            "start": 3206,
            "end": 3224,
            "name": "testStringEndsWith",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 3227,
            "end": 3242,
            "callee": {
              "type": "MemberExpression",
              "start": 3227,
              "end": 3238,
              "object": {
                "type": "Literal",
                "start": 3227,
                "end": 3229,
                "value": "",
                "raw": "\"\""
              },
              "property": {
                "type": "Identifier",
                "start": 3230,
                "end": 3238,
                "name": "endsWith",
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
                "start": 3239,
                "end": 3241,
                "value": "",
                "raw": "\"\""
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3244,
      "end": 3287,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3250,
          "end": 3286,
          "id": {
            "type": "Identifier",
            "start": 3250,
            "end": 3269,
            "name": "testStringNormalize",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 3272,
            "end": 3286,
            "callee": {
              "type": "MemberExpression",
              "start": 3272,
              "end": 3284,
              "object": {
                "type": "Literal",
                "start": 3272,
                "end": 3274,
                "value": "",
                "raw": "\"\""
              },
              "property": {
                "type": "Identifier",
                "start": 3275,
                "end": 3284,
                "name": "normalize",
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
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3288,
      "end": 3326,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3294,
          "end": 3325,
          "id": {
            "type": "Identifier",
            "start": 3294,
            "end": 3310,
            "name": "testStringRepeat",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 3313,
            "end": 3325,
            "callee": {
              "type": "MemberExpression",
              "start": 3313,
              "end": 3322,
              "object": {
                "type": "Literal",
                "start": 3313,
                "end": 3315,
                "value": "",
                "raw": "\"\""
              },
              "property": {
                "type": "Identifier",
                "start": 3316,
                "end": 3322,
                "name": "repeat",
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
                "start": 3323,
                "end": 3324,
                "value": 0,
                "raw": "0"
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3327,
      "end": 3374,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3333,
          "end": 3373,
          "id": {
            "type": "Identifier",
            "start": 3333,
            "end": 3353,
            "name": "testStringStartsWith",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 3356,
            "end": 3373,
            "callee": {
              "type": "MemberExpression",
              "start": 3356,
              "end": 3369,
              "object": {
                "type": "Literal",
                "start": 3356,
                "end": 3358,
                "value": "",
                "raw": "\"\""
              },
              "property": {
                "type": "Identifier",
                "start": 3359,
                "end": 3369,
                "name": "startsWith",
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
                "start": 3370,
                "end": 3372,
                "value": "",
                "raw": "\"\""
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3375,
      "end": 3414,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3381,
          "end": 3413,
          "id": {
            "type": "Identifier",
            "start": 3381,
            "end": 3397,
            "name": "testStringAnchor",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 3400,
            "end": 3413,
            "callee": {
              "type": "MemberExpression",
              "start": 3400,
              "end": 3409,
              "object": {
                "type": "Literal",
                "start": 3400,
                "end": 3402,
                "value": "",
                "raw": "\"\""
              },
              "property": {
                "type": "Identifier",
                "start": 3403,
                "end": 3409,
                "name": "anchor",
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
                "start": 3410,
                "end": 3412,
                "value": "",
                "raw": "\"\""
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3415,
      "end": 3446,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3421,
          "end": 3445,
          "id": {
            "type": "Identifier",
            "start": 3421,
            "end": 3434,
            "name": "testStringBig",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 3437,
            "end": 3445,
            "callee": {
              "type": "MemberExpression",
              "start": 3437,
              "end": 3443,
              "object": {
                "type": "Literal",
                "start": 3437,
                "end": 3439,
                "value": "",
                "raw": "\"\""
              },
              "property": {
                "type": "Identifier",
                "start": 3440,
                "end": 3443,
                "name": "big",
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
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3447,
      "end": 3482,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3453,
          "end": 3481,
          "id": {
            "type": "Identifier",
            "start": 3453,
            "end": 3468,
            "name": "testStringBlink",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 3471,
            "end": 3481,
            "callee": {
              "type": "MemberExpression",
              "start": 3471,
              "end": 3479,
              "object": {
                "type": "Literal",
                "start": 3471,
                "end": 3473,
                "value": "",
                "raw": "\"\""
              },
              "property": {
                "type": "Identifier",
                "start": 3474,
                "end": 3479,
                "name": "blink",
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
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3483,
      "end": 3516,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3489,
          "end": 3515,
          "id": {
            "type": "Identifier",
            "start": 3489,
            "end": 3503,
            "name": "testStringBold",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 3506,
            "end": 3515,
            "callee": {
              "type": "MemberExpression",
              "start": 3506,
              "end": 3513,
              "object": {
                "type": "Literal",
                "start": 3506,
                "end": 3508,
                "value": "",
                "raw": "\"\""
              },
              "property": {
                "type": "Identifier",
                "start": 3509,
                "end": 3513,
                "name": "bold",
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
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3517,
      "end": 3552,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3523,
          "end": 3551,
          "id": {
            "type": "Identifier",
            "start": 3523,
            "end": 3538,
            "name": "testStringFixed",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 3541,
            "end": 3551,
            "callee": {
              "type": "MemberExpression",
              "start": 3541,
              "end": 3549,
              "object": {
                "type": "Literal",
                "start": 3541,
                "end": 3543,
                "value": "",
                "raw": "\"\""
              },
              "property": {
                "type": "Identifier",
                "start": 3544,
                "end": 3549,
                "name": "fixed",
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
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3553,
      "end": 3602,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3559,
          "end": 3601,
          "id": {
            "type": "Identifier",
            "start": 3559,
            "end": 3578,
            "name": "testStringFontColor",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 3581,
            "end": 3601,
            "callee": {
              "type": "MemberExpression",
              "start": 3581,
              "end": 3593,
              "object": {
                "type": "Literal",
                "start": 3581,
                "end": 3583,
                "value": "",
                "raw": "\"\""
              },
              "property": {
                "type": "Identifier",
                "start": 3584,
                "end": 3593,
                "name": "fontcolor",
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
                "start": 3594,
                "end": 3600,
                "value": "blue",
                "raw": "\"blue\""
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3603,
      "end": 3645,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3609,
          "end": 3644,
          "id": {
            "type": "Identifier",
            "start": 3609,
            "end": 3627,
            "name": "testStringFontSize",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 3630,
            "end": 3644,
            "callee": {
              "type": "MemberExpression",
              "start": 3630,
              "end": 3641,
              "object": {
                "type": "Literal",
                "start": 3630,
                "end": 3632,
                "value": "",
                "raw": "\"\""
              },
              "property": {
                "type": "Identifier",
                "start": 3633,
                "end": 3641,
                "name": "fontsize",
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
                "start": 3642,
                "end": 3643,
                "value": 0,
                "raw": "0"
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3646,
      "end": 3685,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3652,
          "end": 3684,
          "id": {
            "type": "Identifier",
            "start": 3652,
            "end": 3669,
            "name": "testStringItalics",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 3672,
            "end": 3684,
            "callee": {
              "type": "MemberExpression",
              "start": 3672,
              "end": 3682,
              "object": {
                "type": "Literal",
                "start": 3672,
                "end": 3674,
                "value": "",
                "raw": "\"\""
              },
              "property": {
                "type": "Identifier",
                "start": 3675,
                "end": 3682,
                "name": "italics",
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
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3686,
      "end": 3721,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3692,
          "end": 3720,
          "id": {
            "type": "Identifier",
            "start": 3692,
            "end": 3706,
            "name": "testStringLink",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 3709,
            "end": 3720,
            "callee": {
              "type": "MemberExpression",
              "start": 3709,
              "end": 3716,
              "object": {
                "type": "Literal",
                "start": 3709,
                "end": 3711,
                "value": "",
                "raw": "\"\""
              },
              "property": {
                "type": "Identifier",
                "start": 3712,
                "end": 3716,
                "name": "link",
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
                "start": 3717,
                "end": 3719,
                "value": "",
                "raw": "\"\""
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3722,
      "end": 3757,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3728,
          "end": 3756,
          "id": {
            "type": "Identifier",
            "start": 3728,
            "end": 3743,
            "name": "testStringSmall",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 3746,
            "end": 3756,
            "callee": {
              "type": "MemberExpression",
              "start": 3746,
              "end": 3754,
              "object": {
                "type": "Literal",
                "start": 3746,
                "end": 3748,
                "value": "",
                "raw": "\"\""
              },
              "property": {
                "type": "Identifier",
                "start": 3749,
                "end": 3754,
                "name": "small",
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
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3758,
      "end": 3795,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3764,
          "end": 3794,
          "id": {
            "type": "Identifier",
            "start": 3764,
            "end": 3780,
            "name": "testStringStrike",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 3783,
            "end": 3794,
            "callee": {
              "type": "MemberExpression",
              "start": 3783,
              "end": 3792,
              "object": {
                "type": "Literal",
                "start": 3783,
                "end": 3785,
                "value": "",
                "raw": "\"\""
              },
              "property": {
                "type": "Identifier",
                "start": 3786,
                "end": 3792,
                "name": "strike",
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
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3796,
      "end": 3827,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3802,
          "end": 3826,
          "id": {
            "type": "Identifier",
            "start": 3802,
            "end": 3815,
            "name": "testStringSub",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 3818,
            "end": 3826,
            "callee": {
              "type": "MemberExpression",
              "start": 3818,
              "end": 3824,
              "object": {
                "type": "Literal",
                "start": 3818,
                "end": 3820,
                "value": "",
                "raw": "\"\""
              },
              "property": {
                "type": "Identifier",
                "start": 3821,
                "end": 3824,
                "name": "sub",
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
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3828,
      "end": 3859,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3834,
          "end": 3858,
          "id": {
            "type": "Identifier",
            "start": 3834,
            "end": 3847,
            "name": "testStringSup",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 3850,
            "end": 3858,
            "callee": {
              "type": "MemberExpression",
              "start": 3850,
              "end": 3856,
              "object": {
                "type": "Literal",
                "start": 3850,
                "end": 3852,
                "value": "",
                "raw": "\"\""
              },
              "property": {
                "type": "Identifier",
                "start": 3853,
                "end": 3856,
                "name": "sup",
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
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3860,
      "end": 3926,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3866,
          "end": 3925,
          "id": {
            "type": "Identifier",
            "start": 3866,
            "end": 3900,
            "name": "testStringConstructorFromCodePoint",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 3903,
            "end": 3925,
            "callee": {
              "type": "MemberExpression",
              "start": 3903,
              "end": 3923,
              "object": {
                "type": "Identifier",
                "start": 3903,
                "end": 3909,
                "name": "String",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 3910,
                "end": 3923,
                "name": "fromCodePoint",
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
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3927,
      "end": 3973,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3933,
          "end": 3972,
          "id": {
            "type": "Identifier",
            "start": 3933,
            "end": 3957,
            "name": "testStringConstructorRaw",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TaggedTemplateExpression",
            "start": 3960,
            "end": 3972,
            "tag": {
              "type": "MemberExpression",
              "start": 3960,
              "end": 3970,
              "object": {
                "type": "Identifier",
                "start": 3960,
                "end": 3966,
                "name": "String",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 3967,
                "end": 3970,
                "name": "raw",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "quasi": {
              "type": "TemplateLiteral",
              "start": 3970,
              "end": 3972,
              "expressions": [],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 3970,
                  "end": 3972,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "tail": true
                }
              ]
            },
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3974,
      "end": 4011,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3980,
          "end": 4010,
          "id": {
            "type": "Identifier",
            "start": 3980,
            "end": 3995,
            "name": "testRegExpFlags",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 3998,
            "end": 4010,
            "object": {
              "type": "Literal",
              "start": 3998,
              "end": 4004,
              "value": null,
              "raw": "/abc/g",
              "regex": {
                "flags": "g",
                "pattern": "abc"
              }
            },
            "property": {
              "type": "Identifier",
              "start": 4005,
              "end": 4010,
              "name": "flags",
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
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 4012,
      "end": 4051,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4018,
          "end": 4050,
          "id": {
            "type": "Identifier",
            "start": 4018,
            "end": 4034,
            "name": "testRegExpSticky",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 4037,
            "end": 4050,
            "object": {
              "type": "Literal",
              "start": 4037,
              "end": 4043,
              "value": null,
              "raw": "/abc/g",
              "regex": {
                "flags": "g",
                "pattern": "abc"
              }
            },
            "property": {
              "type": "Identifier",
              "start": 4044,
              "end": 4050,
              "name": "sticky",
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
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 4052,
      "end": 4093,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4058,
          "end": 4092,
          "id": {
            "type": "Identifier",
            "start": 4058,
            "end": 4075,
            "name": "testRegExpUnicode",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 4078,
            "end": 4092,
            "object": {
              "type": "Literal",
              "start": 4078,
              "end": 4084,
              "value": null,
              "raw": "/abc/g",
              "regex": {
                "flags": "g",
                "pattern": "abc"
              }
            },
            "property": {
              "type": "Identifier",
              "start": 4085,
              "end": 4092,
              "name": "unicode",
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
      "kind": "const",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
