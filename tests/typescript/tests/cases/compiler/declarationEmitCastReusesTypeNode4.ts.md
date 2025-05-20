__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 49,
  "end": 1088,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 49,
      "end": 90,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 55,
          "end": 89,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 55,
            "end": 64,
            "decorators": [],
            "name": "something",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 84,
            "end": 88,
            "raw": "null",
            "value": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 92,
      "end": 138,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 99,
        "end": 138,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 103,
            "end": 137,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 103,
              "end": 107,
              "decorators": [],
              "name": "vLet",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Identifier",
              "start": 127,
              "end": 136,
              "decorators": [],
              "name": "something",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ],
        "declare": false,
        "kind": "let"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 139,
      "end": 189,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 146,
        "end": 189,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 152,
            "end": 188,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 152,
              "end": 158,
              "decorators": [],
              "name": "vConst",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Identifier",
              "start": 178,
              "end": 187,
              "decorators": [],
              "name": "something",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 191,
      "end": 245,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 198,
        "end": 245,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 243,
          "end": 245,
          "body": []
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 207,
          "end": 209,
          "decorators": [],
          "name": "fn",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [
          {
            "type": "AssignmentPattern",
            "start": 210,
            "end": 241,
            "decorators": [],
            "left": {
              "type": "Identifier",
              "start": 210,
              "end": 211,
              "decorators": [],
              "name": "p",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "right": {
              "type": "Identifier",
              "start": 231,
              "end": 240,
              "decorators": [],
              "name": "something",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null
          }
        ],
        "returnType": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 274,
      "end": 357,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 281,
        "end": 357,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 355,
          "end": 357,
          "body": []
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 290,
          "end": 316,
          "decorators": [],
          "name": "fnWithRequiredDefaultParam",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [
          {
            "type": "AssignmentPattern",
            "start": 317,
            "end": 348,
            "decorators": [],
            "left": {
              "type": "Identifier",
              "start": 317,
              "end": 318,
              "decorators": [],
              "name": "p",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "right": {
              "type": "Identifier",
              "start": 338,
              "end": 347,
              "decorators": [],
              "name": "something",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null
          },
          {
            "type": "Identifier",
            "start": 350,
            "end": 353,
            "decorators": [],
            "name": "req",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "returnType": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 359,
      "end": 833,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 366,
        "end": 833,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 374,
          "end": 833,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 380,
              "end": 416,
              "accessibility": null,
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 380,
                "end": 385,
                "decorators": [],
                "name": "field",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": null,
              "value": {
                "type": "Identifier",
                "start": 405,
                "end": 414,
                "decorators": [],
                "name": "something",
                "optional": false,
                "typeAnnotation": null
              }
            },
            {
              "type": "PropertyDefinition",
              "start": 438,
              "end": 477,
              "accessibility": null,
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 438,
                "end": 446,
                "decorators": [],
                "name": "optField",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": null,
              "value": {
                "type": "Identifier",
                "start": 466,
                "end": 475,
                "decorators": [],
                "name": "something",
                "optional": false,
                "typeAnnotation": null
              }
            },
            {
              "type": "PropertyDefinition",
              "start": 514,
              "end": 552,
              "accessibility": null,
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 514,
                "end": 521,
                "decorators": [],
                "name": "roFiled",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": null,
              "value": {
                "type": "Identifier",
                "start": 541,
                "end": 550,
                "decorators": [],
                "name": "something",
                "optional": false,
                "typeAnnotation": null
              }
            },
            {
              "type": "MethodDefinition",
              "start": 557,
              "end": 599,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 557,
                "end": 563,
                "decorators": [],
                "name": "method",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 563,
                "end": 599,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 597,
                  "end": 599,
                  "body": []
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "AssignmentPattern",
                    "start": 564,
                    "end": 595,
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "start": 564,
                      "end": 565,
                      "decorators": [],
                      "name": "p",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "right": {
                      "type": "Identifier",
                      "start": 585,
                      "end": 594,
                      "decorators": [],
                      "name": "something",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "typeParameters": null
              }
            },
            {
              "type": "MethodDefinition",
              "start": 635,
              "end": 701,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 635,
                "end": 660,
                "decorators": [],
                "name": "methodWithRequiredDefault",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 660,
                "end": 701,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 699,
                  "end": 701,
                  "body": []
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "AssignmentPattern",
                    "start": 661,
                    "end": 692,
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "start": 661,
                      "end": 662,
                      "decorators": [],
                      "name": "p",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "right": {
                      "type": "Identifier",
                      "start": 682,
                      "end": 691,
                      "decorators": [],
                      "name": "something",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": null
                  },
                  {
                    "type": "Identifier",
                    "start": 694,
                    "end": 697,
                    "decorators": [],
                    "name": "req",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "typeParameters": null
              }
            },
            {
              "type": "MethodDefinition",
              "start": 707,
              "end": 762,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 707,
                "end": 718,
                "decorators": [],
                "name": "constructor",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "constructor",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 718,
                "end": 762,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 760,
                  "end": 762,
                  "body": []
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "AssignmentPattern",
                    "start": 719,
                    "end": 758,
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "start": 719,
                      "end": 728,
                      "decorators": [],
                      "name": "ctorField",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "right": {
                      "type": "Identifier",
                      "start": 748,
                      "end": 757,
                      "decorators": [],
                      "name": "something",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "typeParameters": null
              }
            },
            {
              "type": "MethodDefinition",
              "start": 768,
              "end": 814,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 772,
                "end": 773,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "get",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 773,
                "end": 814,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 776,
                  "end": 814,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 778,
                      "end": 812,
                      "argument": {
                        "type": "Identifier",
                        "start": 802,
                        "end": 811,
                        "decorators": [],
                        "name": "something",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              }
            },
            {
              "type": "MethodDefinition",
              "start": 819,
              "end": 831,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 823,
                "end": 824,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "set",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 824,
                "end": 831,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 828,
                  "end": 831,
                  "body": []
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 825,
                    "end": 826,
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "typeParameters": null
              }
            }
          ]
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 372,
          "end": 373,
          "decorators": [],
          "name": "C",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": null,
        "superTypeArguments": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 835,
      "end": 878,
      "declaration": {
        "type": "Identifier",
        "start": 867,
        "end": 876,
        "decorators": [],
        "name": "something",
        "optional": false,
        "typeAnnotation": null
      },
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 996,
      "end": 1088,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 1003,
        "end": 1088,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 1086,
          "end": 1088,
          "body": []
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 1012,
          "end": 1049,
          "decorators": [],
          "name": "fnWithPartialAnnotationOnDefaultparam",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [
          {
            "type": "AssignmentPattern",
            "start": 1050,
            "end": 1081,
            "decorators": [],
            "left": {
              "type": "Identifier",
              "start": 1050,
              "end": 1051,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "right": {
              "type": "Identifier",
              "start": 1071,
              "end": 1080,
              "decorators": [],
              "name": "something",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null
          },
          {
            "type": "Identifier",
            "start": 1083,
            "end": 1084,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "returnType": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
