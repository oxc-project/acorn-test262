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
            "name": "something",
            "optional": false,
            "typeAnnotation": null,
            "start": 55,
            "end": 64
          },
          "init": {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 84,
            "end": 88
          },
          "definite": false,
          "start": 55,
          "end": 89
        }
      ],
      "declare": false,
      "start": 49,
      "end": 90
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "vLet",
              "optional": false,
              "typeAnnotation": null,
              "start": 103,
              "end": 107
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "something",
              "optional": false,
              "typeAnnotation": null,
              "start": 127,
              "end": 136
            },
            "definite": false,
            "start": 103,
            "end": 137
          }
        ],
        "declare": false,
        "start": 99,
        "end": 138
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 92,
      "end": 138
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "vConst",
              "optional": false,
              "typeAnnotation": null,
              "start": 152,
              "end": 158
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "something",
              "optional": false,
              "typeAnnotation": null,
              "start": 178,
              "end": 187
            },
            "definite": false,
            "start": 152,
            "end": 188
          }
        ],
        "declare": false,
        "start": 146,
        "end": 189
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 139,
      "end": 189
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn",
          "optional": false,
          "typeAnnotation": null,
          "start": 207,
          "end": 209
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "AssignmentPattern",
            "decorators": [],
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "p",
              "optional": false,
              "typeAnnotation": null,
              "start": 210,
              "end": 211
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "something",
              "optional": false,
              "typeAnnotation": null,
              "start": 231,
              "end": 240
            },
            "optional": false,
            "typeAnnotation": null,
            "start": 210,
            "end": 241
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [],
          "start": 243,
          "end": 245
        },
        "expression": false,
        "start": 198,
        "end": 245
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 191,
      "end": 245
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "fnWithRequiredDefaultParam",
          "optional": false,
          "typeAnnotation": null,
          "start": 290,
          "end": 316
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "AssignmentPattern",
            "decorators": [],
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "p",
              "optional": false,
              "typeAnnotation": null,
              "start": 317,
              "end": 318
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "something",
              "optional": false,
              "typeAnnotation": null,
              "start": 338,
              "end": 347
            },
            "optional": false,
            "typeAnnotation": null,
            "start": 317,
            "end": 348
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "req",
            "optional": false,
            "typeAnnotation": null,
            "start": 350,
            "end": 353
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [],
          "start": 355,
          "end": 357
        },
        "expression": false,
        "start": 281,
        "end": 357
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 274,
      "end": 357
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
          "start": 372,
          "end": 373
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "field",
                "optional": false,
                "typeAnnotation": null,
                "start": 380,
                "end": 385
              },
              "typeAnnotation": null,
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "something",
                "optional": false,
                "typeAnnotation": null,
                "start": 405,
                "end": 414
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 380,
              "end": 416
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "optField",
                "optional": false,
                "typeAnnotation": null,
                "start": 438,
                "end": 446
              },
              "typeAnnotation": null,
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "something",
                "optional": false,
                "typeAnnotation": null,
                "start": 466,
                "end": 475
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 438,
              "end": 477
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "roFiled",
                "optional": false,
                "typeAnnotation": null,
                "start": 514,
                "end": 521
              },
              "typeAnnotation": null,
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "something",
                "optional": false,
                "typeAnnotation": null,
                "start": 541,
                "end": 550
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 514,
              "end": 552
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "method",
                "optional": false,
                "typeAnnotation": null,
                "start": 557,
                "end": 563
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "p",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 564,
                      "end": 565
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "something",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 585,
                      "end": 594
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 564,
                    "end": 595
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 597,
                  "end": 599
                },
                "expression": false,
                "start": 563,
                "end": 599
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 557,
              "end": 599
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "methodWithRequiredDefault",
                "optional": false,
                "typeAnnotation": null,
                "start": 635,
                "end": 660
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "p",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 661,
                      "end": 662
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "something",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 682,
                      "end": 691
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 661,
                    "end": 692
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "req",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 694,
                    "end": 697
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 699,
                  "end": 701
                },
                "expression": false,
                "start": 660,
                "end": 701
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 635,
              "end": 701
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "constructor",
                "optional": false,
                "typeAnnotation": null,
                "start": 707,
                "end": 718
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ctorField",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 719,
                      "end": 728
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "something",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 748,
                      "end": 757
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 719,
                    "end": 758
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 760,
                  "end": 762
                },
                "expression": false,
                "start": 718,
                "end": 762
              },
              "kind": "constructor",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 707,
              "end": 762
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 772,
                "end": 773
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "something",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 802,
                        "end": 811
                      },
                      "start": 778,
                      "end": 812
                    }
                  ],
                  "start": 776,
                  "end": 814
                },
                "expression": false,
                "start": 773,
                "end": 814
              },
              "kind": "get",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 768,
              "end": 814
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 823,
                "end": 824
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 825,
                    "end": 826
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 828,
                  "end": 831
                },
                "expression": false,
                "start": 824,
                "end": 831
              },
              "kind": "set",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 819,
              "end": 831
            }
          ],
          "start": 374,
          "end": 833
        },
        "abstract": false,
        "declare": false,
        "start": 366,
        "end": 833
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 359,
      "end": 833
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "Identifier",
        "decorators": [],
        "name": "something",
        "optional": false,
        "typeAnnotation": null,
        "start": 867,
        "end": 876
      },
      "exportKind": "value",
      "start": 835,
      "end": 878
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "fnWithPartialAnnotationOnDefaultparam",
          "optional": false,
          "typeAnnotation": null,
          "start": 1012,
          "end": 1049
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "AssignmentPattern",
            "decorators": [],
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1050,
              "end": 1051
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "something",
              "optional": false,
              "typeAnnotation": null,
              "start": 1071,
              "end": 1080
            },
            "optional": false,
            "typeAnnotation": null,
            "start": 1050,
            "end": 1081
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 1083,
            "end": 1084
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [],
          "start": 1086,
          "end": 1088
        },
        "expression": false,
        "start": 1003,
        "end": 1088
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 996,
      "end": 1088
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 49,
  "end": 1088
}
```
