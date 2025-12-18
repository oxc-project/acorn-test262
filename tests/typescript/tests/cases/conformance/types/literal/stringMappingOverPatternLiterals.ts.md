__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 21,
        "end": 22
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSLiteralType",
        "literal": {
          "type": "Literal",
          "value": "aA",
          "raw": "\"aA\"",
          "start": 25,
          "end": 29
        },
        "start": 25,
        "end": 29
      },
      "declare": false,
      "start": 16,
      "end": 30
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 36,
        "end": 37
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Uppercase",
          "optional": false,
          "typeAnnotation": null,
          "start": 40,
          "end": 49
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 50,
                "end": 51
              },
              "typeArguments": null,
              "start": 50,
              "end": 51
            }
          ],
          "start": 49,
          "end": 52
        },
        "start": 40,
        "end": 52
      },
      "declare": false,
      "start": 31,
      "end": 53
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 59,
        "end": 60
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Lowercase",
          "optional": false,
          "typeAnnotation": null,
          "start": 63,
          "end": 72
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 73,
                "end": 74
              },
              "typeArguments": null,
              "start": 73,
              "end": 74
            }
          ],
          "start": 72,
          "end": 75
        },
        "start": 63,
        "end": 75
      },
      "declare": false,
      "start": 54,
      "end": 76
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ATemplate",
        "optional": false,
        "typeAnnotation": null,
        "start": 96,
        "end": 105
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTemplateLiteralType",
        "quasis": [
          {
            "type": "TemplateElement",
            "value": {
              "raw": "aA",
              "cooked": "aA"
            },
            "tail": false,
            "start": 108,
            "end": 113
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": true,
            "start": 119,
            "end": 121
          }
        ],
        "types": [
          {
            "type": "TSStringKeyword",
            "start": 113,
            "end": 119
          }
        ],
        "start": 108,
        "end": 121
      },
      "declare": false,
      "start": 91,
      "end": 122
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BTemplate",
        "optional": false,
        "typeAnnotation": null,
        "start": 128,
        "end": 137
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Uppercase",
          "optional": false,
          "typeAnnotation": null,
          "start": 140,
          "end": 149
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ATemplate",
                "optional": false,
                "typeAnnotation": null,
                "start": 150,
                "end": 159
              },
              "typeArguments": null,
              "start": 150,
              "end": 159
            }
          ],
          "start": 149,
          "end": 160
        },
        "start": 140,
        "end": 160
      },
      "declare": false,
      "start": 123,
      "end": 161
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "CTemplate",
        "optional": false,
        "typeAnnotation": null,
        "start": 167,
        "end": 176
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Lowercase",
          "optional": false,
          "typeAnnotation": null,
          "start": 179,
          "end": 188
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ATemplate",
                "optional": false,
                "typeAnnotation": null,
                "start": 189,
                "end": 198
              },
              "typeArguments": null,
              "start": 189,
              "end": 198
            }
          ],
          "start": 188,
          "end": 199
        },
        "start": 179,
        "end": 199
      },
      "declare": false,
      "start": 162,
      "end": 200
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 211,
        "end": 213
      },
      "generator": false,
      "async": false,
      "declare": false,
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
                "start": 222,
                "end": 223
              },
              "typeArguments": null,
              "start": 222,
              "end": 223
            },
            "start": 220,
            "end": 223
          },
          "start": 219,
          "end": 223
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 232,
                "end": 233
              },
              "typeArguments": null,
              "start": 232,
              "end": 233
            },
            "start": 230,
            "end": 233
          },
          "start": 229,
          "end": 233
        },
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
                "start": 242,
                "end": 243
              },
              "typeArguments": null,
              "start": 242,
              "end": 243
            },
            "start": 240,
            "end": 243
          },
          "start": 239,
          "end": 243
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a_template",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ATemplate",
                "optional": false,
                "typeAnnotation": null,
                "start": 261,
                "end": 270
              },
              "typeArguments": null,
              "start": 261,
              "end": 270
            },
            "start": 259,
            "end": 270
          },
          "start": 249,
          "end": 270
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b_template",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "BTemplate",
                "optional": false,
                "typeAnnotation": null,
                "start": 288,
                "end": 297
              },
              "typeArguments": null,
              "start": 288,
              "end": 297
            },
            "start": 286,
            "end": 297
          },
          "start": 276,
          "end": 297
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "c_template",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "CTemplate",
                "optional": false,
                "typeAnnotation": null,
                "start": 315,
                "end": 324
              },
              "typeArguments": null,
              "start": 315,
              "end": 324
            },
            "start": 313,
            "end": 324
          },
          "start": 303,
          "end": 324
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a_template",
                "optional": false,
                "typeAnnotation": null,
                "start": 435,
                "end": 445
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 448,
                "end": 449
              },
              "start": 435,
              "end": 449
            },
            "directive": null,
            "start": 435,
            "end": 450
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b_template",
                "optional": false,
                "typeAnnotation": null,
                "start": 455,
                "end": 465
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 468,
                "end": 469
              },
              "start": 455,
              "end": 469
            },
            "directive": null,
            "start": 455,
            "end": 470
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "c_template",
                "optional": false,
                "typeAnnotation": null,
                "start": 475,
                "end": 485
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 488,
                "end": 489
              },
              "start": 475,
              "end": 489
            },
            "directive": null,
            "start": 475,
            "end": 490
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 528,
                "end": 529
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a_template",
                "optional": false,
                "typeAnnotation": null,
                "start": 532,
                "end": 542
              },
              "start": 528,
              "end": 542
            },
            "directive": null,
            "start": 528,
            "end": 543
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 548,
                "end": 549
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b_template",
                "optional": false,
                "typeAnnotation": null,
                "start": 552,
                "end": 562
              },
              "start": 548,
              "end": 562
            },
            "directive": null,
            "start": 548,
            "end": 563
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 568,
                "end": 569
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "c_template",
                "optional": false,
                "typeAnnotation": null,
                "start": 572,
                "end": 582
              },
              "start": 568,
              "end": 582
            },
            "directive": null,
            "start": 568,
            "end": 583
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a_template",
                "optional": false,
                "typeAnnotation": null,
                "start": 699,
                "end": 709
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b_template",
                "optional": false,
                "typeAnnotation": null,
                "start": 712,
                "end": 722
              },
              "start": 699,
              "end": 722
            },
            "directive": null,
            "start": 699,
            "end": 723
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a_template",
                "optional": false,
                "typeAnnotation": null,
                "start": 728,
                "end": 738
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "c_template",
                "optional": false,
                "typeAnnotation": null,
                "start": 741,
                "end": 751
              },
              "start": 728,
              "end": 751
            },
            "directive": null,
            "start": 728,
            "end": 752
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b_template",
                "optional": false,
                "typeAnnotation": null,
                "start": 758,
                "end": 768
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a_template",
                "optional": false,
                "typeAnnotation": null,
                "start": 771,
                "end": 781
              },
              "start": 758,
              "end": 781
            },
            "directive": null,
            "start": 758,
            "end": 782
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b_template",
                "optional": false,
                "typeAnnotation": null,
                "start": 787,
                "end": 797
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "c_template",
                "optional": false,
                "typeAnnotation": null,
                "start": 800,
                "end": 810
              },
              "start": 787,
              "end": 810
            },
            "directive": null,
            "start": 787,
            "end": 811
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "c_template",
                "optional": false,
                "typeAnnotation": null,
                "start": 817,
                "end": 827
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a_template",
                "optional": false,
                "typeAnnotation": null,
                "start": 830,
                "end": 840
              },
              "start": 817,
              "end": 840
            },
            "directive": null,
            "start": 817,
            "end": 841
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "c_template",
                "optional": false,
                "typeAnnotation": null,
                "start": 846,
                "end": 856
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b_template",
                "optional": false,
                "typeAnnotation": null,
                "start": 859,
                "end": 869
              },
              "start": 846,
              "end": 869
            },
            "directive": null,
            "start": 846,
            "end": 870
          }
        ],
        "start": 327,
        "end": 872
      },
      "expression": false,
      "start": 202,
      "end": 872
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 920,
        "end": 922
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x1",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 927,
              "end": 933
            },
            "start": 925,
            "end": 933
          },
          "start": 923,
          "end": 933
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x2",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Uppercase",
                "optional": false,
                "typeAnnotation": null,
                "start": 939,
                "end": 948
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 949,
                    "end": 955
                  }
                ],
                "start": 948,
                "end": 956
              },
              "start": 939,
              "end": 956
            },
            "start": 937,
            "end": 956
          },
          "start": 935,
          "end": 956
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x3",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Lowercase",
                "optional": false,
                "typeAnnotation": null,
                "start": 962,
                "end": 971
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 972,
                    "end": 978
                  }
                ],
                "start": 971,
                "end": 979
              },
              "start": 962,
              "end": 979
            },
            "start": 960,
            "end": 979
          },
          "start": 958,
          "end": 979
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x1",
                "optional": false,
                "typeAnnotation": null,
                "start": 997,
                "end": 999
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "x2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1002,
                "end": 1004
              },
              "start": 997,
              "end": 1004
            },
            "directive": null,
            "start": 997,
            "end": 1005
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1010,
                "end": 1012
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "x3",
                "optional": false,
                "typeAnnotation": null,
                "start": 1015,
                "end": 1017
              },
              "start": 1010,
              "end": 1017
            },
            "directive": null,
            "start": 1010,
            "end": 1018
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1024,
                "end": 1026
              },
              "right": {
                "type": "Literal",
                "value": "ABC",
                "raw": "\"ABC\"",
                "start": 1029,
                "end": 1034
              },
              "start": 1024,
              "end": 1034
            },
            "directive": null,
            "start": 1024,
            "end": 1035
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x3",
                "optional": false,
                "typeAnnotation": null,
                "start": 1040,
                "end": 1042
              },
              "right": {
                "type": "Literal",
                "value": "abc",
                "raw": "\"abc\"",
                "start": 1045,
                "end": 1050
              },
              "start": 1040,
              "end": 1050
            },
            "directive": null,
            "start": 1040,
            "end": 1051
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1096,
                "end": 1098
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "x1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1101,
                "end": 1103
              },
              "start": 1096,
              "end": 1103
            },
            "directive": null,
            "start": 1096,
            "end": 1104
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1109,
                "end": 1111
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "x3",
                "optional": false,
                "typeAnnotation": null,
                "start": 1114,
                "end": 1116
              },
              "start": 1109,
              "end": 1116
            },
            "directive": null,
            "start": 1109,
            "end": 1117
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x3",
                "optional": false,
                "typeAnnotation": null,
                "start": 1122,
                "end": 1124
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "x1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1127,
                "end": 1129
              },
              "start": 1122,
              "end": 1129
            },
            "directive": null,
            "start": 1122,
            "end": 1130
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x3",
                "optional": false,
                "typeAnnotation": null,
                "start": 1135,
                "end": 1137
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "x2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1140,
                "end": 1142
              },
              "start": 1135,
              "end": 1142
            },
            "directive": null,
            "start": 1135,
            "end": 1143
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1149,
                "end": 1151
              },
              "right": {
                "type": "Literal",
                "value": "AbC",
                "raw": "\"AbC\"",
                "start": 1154,
                "end": 1159
              },
              "start": 1149,
              "end": 1159
            },
            "directive": null,
            "start": 1149,
            "end": 1160
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x3",
                "optional": false,
                "typeAnnotation": null,
                "start": 1165,
                "end": 1167
              },
              "right": {
                "type": "Literal",
                "value": "AbC",
                "raw": "\"AbC\"",
                "start": 1170,
                "end": 1175
              },
              "start": 1165,
              "end": 1175
            },
            "directive": null,
            "start": 1165,
            "end": 1176
          }
        ],
        "start": 981,
        "end": 1178
      },
      "expression": false,
      "start": 911,
      "end": 1178
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1216,
        "end": 1218
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x1",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Uppercase",
                "optional": false,
                "typeAnnotation": null,
                "start": 1228,
                "end": 1237
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1238,
                    "end": 1244
                  }
                ],
                "start": 1237,
                "end": 1245
              },
              "start": 1228,
              "end": 1245
            },
            "start": 1226,
            "end": 1245
          },
          "start": 1224,
          "end": 1245
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x2",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Uppercase",
                "optional": false,
                "typeAnnotation": null,
                "start": 1255,
                "end": 1264
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Uppercase",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1265,
                      "end": 1274
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 1275,
                          "end": 1281
                        }
                      ],
                      "start": 1274,
                      "end": 1282
                    },
                    "start": 1265,
                    "end": 1282
                  }
                ],
                "start": 1264,
                "end": 1283
              },
              "start": 1255,
              "end": 1283
            },
            "start": 1253,
            "end": 1283
          },
          "start": 1251,
          "end": 1283
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x3",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Uppercase",
                "optional": false,
                "typeAnnotation": null,
                "start": 1293,
                "end": 1302
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Lowercase",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1303,
                      "end": 1312
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 1313,
                          "end": 1319
                        }
                      ],
                      "start": 1312,
                      "end": 1320
                    },
                    "start": 1303,
                    "end": 1320
                  }
                ],
                "start": 1302,
                "end": 1321
              },
              "start": 1293,
              "end": 1321
            },
            "start": 1291,
            "end": 1321
          },
          "start": 1289,
          "end": 1321
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1377,
                "end": 1379
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "x2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1382,
                "end": 1384
              },
              "start": 1377,
              "end": 1384
            },
            "directive": null,
            "start": 1377,
            "end": 1385
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1390,
                "end": 1392
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "x3",
                "optional": false,
                "typeAnnotation": null,
                "start": 1395,
                "end": 1397
              },
              "start": 1390,
              "end": 1397
            },
            "directive": null,
            "start": 1390,
            "end": 1398
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1404,
                "end": 1406
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "x1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1409,
                "end": 1411
              },
              "start": 1404,
              "end": 1411
            },
            "directive": null,
            "start": 1404,
            "end": 1412
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1417,
                "end": 1419
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "x3",
                "optional": false,
                "typeAnnotation": null,
                "start": 1422,
                "end": 1424
              },
              "start": 1417,
              "end": 1424
            },
            "directive": null,
            "start": 1417,
            "end": 1425
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x3",
                "optional": false,
                "typeAnnotation": null,
                "start": 1752,
                "end": 1754
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "x1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1757,
                "end": 1759
              },
              "start": 1752,
              "end": 1759
            },
            "directive": null,
            "start": 1752,
            "end": 1760
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x3",
                "optional": false,
                "typeAnnotation": null,
                "start": 1765,
                "end": 1767
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "x2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1770,
                "end": 1772
              },
              "start": 1765,
              "end": 1772
            },
            "directive": null,
            "start": 1765,
            "end": 1773
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
                  "name": "x4",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Lowercase",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1846,
                        "end": 1855
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Uppercase",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1856,
                              "end": 1865
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSStringKeyword",
                                  "start": 1866,
                                  "end": 1872
                                }
                              ],
                              "start": 1865,
                              "end": 1873
                            },
                            "start": 1856,
                            "end": 1873
                          }
                        ],
                        "start": 1855,
                        "end": 1874
                      },
                      "start": 1846,
                      "end": 1874
                    },
                    "start": 1844,
                    "end": 1874
                  },
                  "start": 1842,
                  "end": 1874
                },
                "init": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "Literal",
                    "value": null,
                    "raw": "null",
                    "start": 1877,
                    "end": 1881
                  },
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 1885,
                    "end": 1888
                  },
                  "start": 1877,
                  "end": 1888
                },
                "definite": false,
                "start": 1842,
                "end": 1888
              }
            ],
            "declare": false,
            "start": 1838,
            "end": 1889
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1894,
                "end": 1896
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "x4",
                "optional": false,
                "typeAnnotation": null,
                "start": 1899,
                "end": 1901
              },
              "start": 1894,
              "end": 1901
            },
            "directive": null,
            "start": 1894,
            "end": 1902
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1907,
                "end": 1909
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "x4",
                "optional": false,
                "typeAnnotation": null,
                "start": 1912,
                "end": 1914
              },
              "start": 1907,
              "end": 1914
            },
            "directive": null,
            "start": 1907,
            "end": 1915
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x3",
                "optional": false,
                "typeAnnotation": null,
                "start": 1920,
                "end": 1922
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "x4",
                "optional": false,
                "typeAnnotation": null,
                "start": 1925,
                "end": 1927
              },
              "start": 1920,
              "end": 1927
            },
            "directive": null,
            "start": 1920,
            "end": 1928
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x4",
                "optional": false,
                "typeAnnotation": null,
                "start": 1934,
                "end": 1936
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "x1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1939,
                "end": 1941
              },
              "start": 1934,
              "end": 1941
            },
            "directive": null,
            "start": 1934,
            "end": 1942
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x4",
                "optional": false,
                "typeAnnotation": null,
                "start": 1947,
                "end": 1949
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "x2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1952,
                "end": 1954
              },
              "start": 1947,
              "end": 1954
            },
            "directive": null,
            "start": 1947,
            "end": 1955
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x4",
                "optional": false,
                "typeAnnotation": null,
                "start": 1960,
                "end": 1962
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "x3",
                "optional": false,
                "typeAnnotation": null,
                "start": 1965,
                "end": 1967
              },
              "start": 1960,
              "end": 1967
            },
            "directive": null,
            "start": 1960,
            "end": 1968
          }
        ],
        "start": 1323,
        "end": 1970
      },
      "expression": false,
      "start": 1207,
      "end": 1970
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NonStringPat",
        "optional": false,
        "typeAnnotation": null,
        "start": 2042,
        "end": 2054
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Uppercase",
          "optional": false,
          "typeAnnotation": null,
          "start": 2057,
          "end": 2066
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTemplateLiteralType",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "aA",
                    "cooked": "aA"
                  },
                  "tail": false,
                  "start": 2067,
                  "end": 2072
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false,
                  "start": 2078,
                  "end": 2081
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false,
                  "start": 2087,
                  "end": 2090
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true,
                  "start": 2097,
                  "end": 2099
                }
              ],
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "start": 2072,
                  "end": 2078
                },
                {
                  "type": "TSBigIntKeyword",
                  "start": 2081,
                  "end": 2087
                },
                {
                  "type": "TSBooleanKeyword",
                  "start": 2090,
                  "end": 2097
                }
              ],
              "start": 2067,
              "end": 2099
            }
          ],
          "start": 2066,
          "end": 2100
        },
        "start": 2057,
        "end": 2100
      },
      "declare": false,
      "start": 2037,
      "end": 2101
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "EquivalentNonStringPat",
        "optional": false,
        "typeAnnotation": null,
        "start": 2107,
        "end": 2129
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTemplateLiteralType",
        "quasis": [
          {
            "type": "TemplateElement",
            "value": {
              "raw": "AA",
              "cooked": "AA"
            },
            "tail": false,
            "start": 2132,
            "end": 2137
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": false,
            "start": 2159,
            "end": 2162
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": false,
            "start": 2184,
            "end": 2187
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": true,
            "start": 2210,
            "end": 2212
          }
        ],
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Uppercase",
              "optional": false,
              "typeAnnotation": null,
              "start": 2137,
              "end": 2146
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTemplateLiteralType",
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "",
                        "cooked": ""
                      },
                      "tail": false,
                      "start": 2147,
                      "end": 2150
                    },
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "",
                        "cooked": ""
                      },
                      "tail": true,
                      "start": 2156,
                      "end": 2158
                    }
                  ],
                  "types": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 2150,
                      "end": 2156
                    }
                  ],
                  "start": 2147,
                  "end": 2158
                }
              ],
              "start": 2146,
              "end": 2159
            },
            "start": 2137,
            "end": 2159
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Uppercase",
              "optional": false,
              "typeAnnotation": null,
              "start": 2162,
              "end": 2171
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTemplateLiteralType",
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "",
                        "cooked": ""
                      },
                      "tail": false,
                      "start": 2172,
                      "end": 2175
                    },
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "",
                        "cooked": ""
                      },
                      "tail": true,
                      "start": 2181,
                      "end": 2183
                    }
                  ],
                  "types": [
                    {
                      "type": "TSBigIntKeyword",
                      "start": 2175,
                      "end": 2181
                    }
                  ],
                  "start": 2172,
                  "end": 2183
                }
              ],
              "start": 2171,
              "end": 2184
            },
            "start": 2162,
            "end": 2184
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Uppercase",
              "optional": false,
              "typeAnnotation": null,
              "start": 2187,
              "end": 2196
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTemplateLiteralType",
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "",
                        "cooked": ""
                      },
                      "tail": false,
                      "start": 2197,
                      "end": 2200
                    },
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "",
                        "cooked": ""
                      },
                      "tail": true,
                      "start": 2207,
                      "end": 2209
                    }
                  ],
                  "types": [
                    {
                      "type": "TSBooleanKeyword",
                      "start": 2200,
                      "end": 2207
                    }
                  ],
                  "start": 2197,
                  "end": 2209
                }
              ],
              "start": 2196,
              "end": 2210
            },
            "start": 2187,
            "end": 2210
          }
        ],
        "start": 2132,
        "end": 2212
      },
      "declare": false,
      "start": 2102,
      "end": 2213
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null,
        "start": 2224,
        "end": 2226
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x1",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "NonStringPat",
                "optional": false,
                "typeAnnotation": null,
                "start": 2231,
                "end": 2243
              },
              "typeArguments": null,
              "start": 2231,
              "end": 2243
            },
            "start": 2229,
            "end": 2243
          },
          "start": 2227,
          "end": 2243
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x2",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "EquivalentNonStringPat",
                "optional": false,
                "typeAnnotation": null,
                "start": 2249,
                "end": 2271
              },
              "typeArguments": null,
              "start": 2249,
              "end": 2271
            },
            "start": 2247,
            "end": 2271
          },
          "start": 2245,
          "end": 2271
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x1",
                "optional": false,
                "typeAnnotation": null,
                "start": 2303,
                "end": 2305
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "x2",
                "optional": false,
                "typeAnnotation": null,
                "start": 2308,
                "end": 2310
              },
              "start": 2303,
              "end": 2310
            },
            "directive": null,
            "start": 2303,
            "end": 2311
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x2",
                "optional": false,
                "typeAnnotation": null,
                "start": 2316,
                "end": 2318
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "x1",
                "optional": false,
                "typeAnnotation": null,
                "start": 2321,
                "end": 2323
              },
              "start": 2316,
              "end": 2323
            },
            "directive": null,
            "start": 2316,
            "end": 2324
          }
        ],
        "start": 2273,
        "end": 2326
      },
      "expression": false,
      "start": 2215,
      "end": 2326
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f5",
        "optional": false,
        "typeAnnotation": null,
        "start": 2390,
        "end": 2392
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cap_tem",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTemplateLiteralType",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "A",
                    "cooked": "A"
                  },
                  "tail": false,
                  "start": 2407,
                  "end": 2411
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true,
                  "start": 2417,
                  "end": 2419
                }
              ],
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 2411,
                  "end": 2417
                }
              ],
              "start": 2407,
              "end": 2419
            },
            "start": 2405,
            "end": 2419
          },
          "start": 2398,
          "end": 2419
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cap_str",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Capitalize",
                "optional": false,
                "typeAnnotation": null,
                "start": 2434,
                "end": 2444
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 2445,
                    "end": 2451
                  }
                ],
                "start": 2444,
                "end": 2452
              },
              "start": 2434,
              "end": 2452
            },
            "start": 2432,
            "end": 2452
          },
          "start": 2425,
          "end": 2452
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cap_tem_map",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Capitalize",
                "optional": false,
                "typeAnnotation": null,
                "start": 2471,
                "end": 2481
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTemplateLiteralType",
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "A",
                          "cooked": "A"
                        },
                        "tail": false,
                        "start": 2482,
                        "end": 2486
                      },
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "",
                          "cooked": ""
                        },
                        "tail": true,
                        "start": 2492,
                        "end": 2494
                      }
                    ],
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 2486,
                        "end": 2492
                      }
                    ],
                    "start": 2482,
                    "end": 2494
                  }
                ],
                "start": 2481,
                "end": 2495
              },
              "start": 2471,
              "end": 2495
            },
            "start": 2469,
            "end": 2495
          },
          "start": 2458,
          "end": 2495
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cap_tem_map2",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Capitalize",
                "optional": false,
                "typeAnnotation": null,
                "start": 2515,
                "end": 2525
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTemplateLiteralType",
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "a",
                          "cooked": "a"
                        },
                        "tail": false,
                        "start": 2526,
                        "end": 2530
                      },
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "",
                          "cooked": ""
                        },
                        "tail": true,
                        "start": 2536,
                        "end": 2538
                      }
                    ],
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 2530,
                        "end": 2536
                      }
                    ],
                    "start": 2526,
                    "end": 2538
                  }
                ],
                "start": 2525,
                "end": 2539
              },
              "start": 2515,
              "end": 2539
            },
            "start": 2513,
            "end": 2539
          },
          "start": 2501,
          "end": 2539
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "uncap_tem",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTemplateLiteralType",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "a",
                    "cooked": "a"
                  },
                  "tail": false,
                  "start": 2556,
                  "end": 2560
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true,
                  "start": 2566,
                  "end": 2568
                }
              ],
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 2560,
                  "end": 2566
                }
              ],
              "start": 2556,
              "end": 2568
            },
            "start": 2554,
            "end": 2568
          },
          "start": 2545,
          "end": 2568
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "uncap_str",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Uncapitalize",
                "optional": false,
                "typeAnnotation": null,
                "start": 2585,
                "end": 2597
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 2598,
                    "end": 2604
                  }
                ],
                "start": 2597,
                "end": 2605
              },
              "start": 2585,
              "end": 2605
            },
            "start": 2583,
            "end": 2605
          },
          "start": 2574,
          "end": 2605
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "uncap_tem_map",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Uncapitalize",
                "optional": false,
                "typeAnnotation": null,
                "start": 2626,
                "end": 2638
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTemplateLiteralType",
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "A",
                          "cooked": "A"
                        },
                        "tail": false,
                        "start": 2639,
                        "end": 2643
                      },
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "",
                          "cooked": ""
                        },
                        "tail": true,
                        "start": 2649,
                        "end": 2651
                      }
                    ],
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 2643,
                        "end": 2649
                      }
                    ],
                    "start": 2639,
                    "end": 2651
                  }
                ],
                "start": 2638,
                "end": 2652
              },
              "start": 2626,
              "end": 2652
            },
            "start": 2624,
            "end": 2652
          },
          "start": 2611,
          "end": 2652
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "uncap_tem_map2",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Uncapitalize",
                "optional": false,
                "typeAnnotation": null,
                "start": 2674,
                "end": 2686
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTemplateLiteralType",
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "a",
                          "cooked": "a"
                        },
                        "tail": false,
                        "start": 2687,
                        "end": 2691
                      },
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "",
                          "cooked": ""
                        },
                        "tail": true,
                        "start": 2697,
                        "end": 2699
                      }
                    ],
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 2691,
                        "end": 2697
                      }
                    ],
                    "start": 2687,
                    "end": 2699
                  }
                ],
                "start": 2686,
                "end": 2700
              },
              "start": 2674,
              "end": 2700
            },
            "start": 2672,
            "end": 2700
          },
          "start": 2658,
          "end": 2700
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "cap_str",
                "optional": false,
                "typeAnnotation": null,
                "start": 2743,
                "end": 2750
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "cap_tem",
                "optional": false,
                "typeAnnotation": null,
                "start": 2753,
                "end": 2760
              },
              "start": 2743,
              "end": 2760
            },
            "directive": null,
            "start": 2743,
            "end": 2761
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "cap_str",
                "optional": false,
                "typeAnnotation": null,
                "start": 2766,
                "end": 2773
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "cap_tem_map",
                "optional": false,
                "typeAnnotation": null,
                "start": 2776,
                "end": 2787
              },
              "start": 2766,
              "end": 2787
            },
            "directive": null,
            "start": 2766,
            "end": 2788
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "cap_str",
                "optional": false,
                "typeAnnotation": null,
                "start": 2793,
                "end": 2800
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "cap_tem_map2",
                "optional": false,
                "typeAnnotation": null,
                "start": 2803,
                "end": 2815
              },
              "start": 2793,
              "end": 2815
            },
            "directive": null,
            "start": 2793,
            "end": 2816
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "cap_tem",
                "optional": false,
                "typeAnnotation": null,
                "start": 2854,
                "end": 2861
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "cap_tem_map",
                "optional": false,
                "typeAnnotation": null,
                "start": 2864,
                "end": 2875
              },
              "start": 2854,
              "end": 2875
            },
            "directive": null,
            "start": 2854,
            "end": 2876
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "cap_tem",
                "optional": false,
                "typeAnnotation": null,
                "start": 2881,
                "end": 2888
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "cap_tem_map2",
                "optional": false,
                "typeAnnotation": null,
                "start": 2891,
                "end": 2903
              },
              "start": 2881,
              "end": 2903
            },
            "directive": null,
            "start": 2881,
            "end": 2904
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "cap_tem_map",
                "optional": false,
                "typeAnnotation": null,
                "start": 2909,
                "end": 2920
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "cap_tem_map2",
                "optional": false,
                "typeAnnotation": null,
                "start": 2923,
                "end": 2935
              },
              "start": 2909,
              "end": 2935
            },
            "directive": null,
            "start": 2909,
            "end": 2936
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "cap_tem_map",
                "optional": false,
                "typeAnnotation": null,
                "start": 2941,
                "end": 2952
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "cap_tem",
                "optional": false,
                "typeAnnotation": null,
                "start": 2955,
                "end": 2962
              },
              "start": 2941,
              "end": 2962
            },
            "directive": null,
            "start": 2941,
            "end": 2963
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "cap_tem_map2",
                "optional": false,
                "typeAnnotation": null,
                "start": 2968,
                "end": 2980
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "cap_tem_map",
                "optional": false,
                "typeAnnotation": null,
                "start": 2983,
                "end": 2994
              },
              "start": 2968,
              "end": 2994
            },
            "directive": null,
            "start": 2968,
            "end": 2995
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "cap_tem_map2",
                "optional": false,
                "typeAnnotation": null,
                "start": 3000,
                "end": 3012
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "cap_tem",
                "optional": false,
                "typeAnnotation": null,
                "start": 3015,
                "end": 3022
              },
              "start": 3000,
              "end": 3022
            },
            "directive": null,
            "start": 3000,
            "end": 3023
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "cap_tem",
                "optional": false,
                "typeAnnotation": null,
                "start": 3078,
                "end": 3085
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "cap_str",
                "optional": false,
                "typeAnnotation": null,
                "start": 3088,
                "end": 3095
              },
              "start": 3078,
              "end": 3095
            },
            "directive": null,
            "start": 3078,
            "end": 3096
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "cap_tem_map",
                "optional": false,
                "typeAnnotation": null,
                "start": 3101,
                "end": 3112
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "cap_str",
                "optional": false,
                "typeAnnotation": null,
                "start": 3115,
                "end": 3122
              },
              "start": 3101,
              "end": 3122
            },
            "directive": null,
            "start": 3101,
            "end": 3123
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "cap_tem_map2",
                "optional": false,
                "typeAnnotation": null,
                "start": 3128,
                "end": 3140
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "cap_str",
                "optional": false,
                "typeAnnotation": null,
                "start": 3143,
                "end": 3150
              },
              "start": 3128,
              "end": 3150
            },
            "directive": null,
            "start": 3128,
            "end": 3151
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "uncap_str",
                "optional": false,
                "typeAnnotation": null,
                "start": 3192,
                "end": 3201
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "uncap_tem",
                "optional": false,
                "typeAnnotation": null,
                "start": 3204,
                "end": 3213
              },
              "start": 3192,
              "end": 3213
            },
            "directive": null,
            "start": 3192,
            "end": 3214
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "uncap_str",
                "optional": false,
                "typeAnnotation": null,
                "start": 3219,
                "end": 3228
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "uncap_tem_map",
                "optional": false,
                "typeAnnotation": null,
                "start": 3231,
                "end": 3244
              },
              "start": 3219,
              "end": 3244
            },
            "directive": null,
            "start": 3219,
            "end": 3245
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "uncap_str",
                "optional": false,
                "typeAnnotation": null,
                "start": 3250,
                "end": 3259
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "uncap_tem_map2",
                "optional": false,
                "typeAnnotation": null,
                "start": 3262,
                "end": 3276
              },
              "start": 3250,
              "end": 3276
            },
            "directive": null,
            "start": 3250,
            "end": 3277
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "uncap_tem",
                "optional": false,
                "typeAnnotation": null,
                "start": 3315,
                "end": 3324
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "uncap_tem_map",
                "optional": false,
                "typeAnnotation": null,
                "start": 3327,
                "end": 3340
              },
              "start": 3315,
              "end": 3340
            },
            "directive": null,
            "start": 3315,
            "end": 3341
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "uncap_tem",
                "optional": false,
                "typeAnnotation": null,
                "start": 3346,
                "end": 3355
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "uncap_tem_map2",
                "optional": false,
                "typeAnnotation": null,
                "start": 3358,
                "end": 3372
              },
              "start": 3346,
              "end": 3372
            },
            "directive": null,
            "start": 3346,
            "end": 3373
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "uncap_tem_map",
                "optional": false,
                "typeAnnotation": null,
                "start": 3378,
                "end": 3391
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "uncap_tem_map2",
                "optional": false,
                "typeAnnotation": null,
                "start": 3394,
                "end": 3408
              },
              "start": 3378,
              "end": 3408
            },
            "directive": null,
            "start": 3378,
            "end": 3409
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "uncap_tem_map",
                "optional": false,
                "typeAnnotation": null,
                "start": 3414,
                "end": 3427
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "uncap_tem",
                "optional": false,
                "typeAnnotation": null,
                "start": 3430,
                "end": 3439
              },
              "start": 3414,
              "end": 3439
            },
            "directive": null,
            "start": 3414,
            "end": 3440
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "uncap_tem_map2",
                "optional": false,
                "typeAnnotation": null,
                "start": 3445,
                "end": 3459
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "uncap_tem_map",
                "optional": false,
                "typeAnnotation": null,
                "start": 3462,
                "end": 3475
              },
              "start": 3445,
              "end": 3475
            },
            "directive": null,
            "start": 3445,
            "end": 3476
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "uncap_tem_map2",
                "optional": false,
                "typeAnnotation": null,
                "start": 3481,
                "end": 3495
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "uncap_tem",
                "optional": false,
                "typeAnnotation": null,
                "start": 3498,
                "end": 3507
              },
              "start": 3481,
              "end": 3507
            },
            "directive": null,
            "start": 3481,
            "end": 3508
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "uncap_tem",
                "optional": false,
                "typeAnnotation": null,
                "start": 3563,
                "end": 3572
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "uncap_str",
                "optional": false,
                "typeAnnotation": null,
                "start": 3575,
                "end": 3584
              },
              "start": 3563,
              "end": 3584
            },
            "directive": null,
            "start": 3563,
            "end": 3585
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "uncap_tem_map",
                "optional": false,
                "typeAnnotation": null,
                "start": 3590,
                "end": 3603
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "uncap_str",
                "optional": false,
                "typeAnnotation": null,
                "start": 3606,
                "end": 3615
              },
              "start": 3590,
              "end": 3615
            },
            "directive": null,
            "start": 3590,
            "end": 3616
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "uncap_tem_map2",
                "optional": false,
                "typeAnnotation": null,
                "start": 3621,
                "end": 3635
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "uncap_str",
                "optional": false,
                "typeAnnotation": null,
                "start": 3638,
                "end": 3647
              },
              "start": 3621,
              "end": 3647
            },
            "directive": null,
            "start": 3621,
            "end": 3648
          }
        ],
        "start": 2704,
        "end": 3650
      },
      "expression": false,
      "start": 2381,
      "end": 3650
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 16,
  "end": 3650
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 16,
    "end": 20,
    "range": [
      16,
      20
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 21,
    "end": 22,
    "range": [
      21,
      22
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 23,
    "end": 24,
    "range": [
      23,
      24
    ]
  },
  {
    "type": "String",
    "value": "\"aA\"",
    "start": 25,
    "end": 29,
    "range": [
      25,
      29
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 29,
    "end": 30,
    "range": [
      29,
      30
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 31,
    "end": 35,
    "range": [
      31,
      35
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 36,
    "end": 37,
    "range": [
      36,
      37
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 38,
    "end": 39,
    "range": [
      38,
      39
    ]
  },
  {
    "type": "Identifier",
    "value": "Uppercase",
    "start": 40,
    "end": 49,
    "range": [
      40,
      49
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 49,
    "end": 50,
    "range": [
      49,
      50
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 50,
    "end": 51,
    "range": [
      50,
      51
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 51,
    "end": 52,
    "range": [
      51,
      52
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 52,
    "end": 53,
    "range": [
      52,
      53
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 54,
    "end": 58,
    "range": [
      54,
      58
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 59,
    "end": 60,
    "range": [
      59,
      60
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 61,
    "end": 62,
    "range": [
      61,
      62
    ]
  },
  {
    "type": "Identifier",
    "value": "Lowercase",
    "start": 63,
    "end": 72,
    "range": [
      63,
      72
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 72,
    "end": 73,
    "range": [
      72,
      73
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 73,
    "end": 74,
    "range": [
      73,
      74
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 74,
    "end": 75,
    "range": [
      74,
      75
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 75,
    "end": 76,
    "range": [
      75,
      76
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 91,
    "end": 95,
    "range": [
      91,
      95
    ]
  },
  {
    "type": "Identifier",
    "value": "ATemplate",
    "start": 96,
    "end": 105,
    "range": [
      96,
      105
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 106,
    "end": 107,
    "range": [
      106,
      107
    ]
  },
  {
    "type": "Template",
    "value": "`aA${",
    "start": 108,
    "end": 113,
    "range": [
      108,
      113
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 113,
    "end": 119,
    "range": [
      113,
      119
    ]
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 119,
    "end": 121,
    "range": [
      119,
      121
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 121,
    "end": 122,
    "range": [
      121,
      122
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 123,
    "end": 127,
    "range": [
      123,
      127
    ]
  },
  {
    "type": "Identifier",
    "value": "BTemplate",
    "start": 128,
    "end": 137,
    "range": [
      128,
      137
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 138,
    "end": 139,
    "range": [
      138,
      139
    ]
  },
  {
    "type": "Identifier",
    "value": "Uppercase",
    "start": 140,
    "end": 149,
    "range": [
      140,
      149
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 149,
    "end": 150,
    "range": [
      149,
      150
    ]
  },
  {
    "type": "Identifier",
    "value": "ATemplate",
    "start": 150,
    "end": 159,
    "range": [
      150,
      159
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 159,
    "end": 160,
    "range": [
      159,
      160
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 160,
    "end": 161,
    "range": [
      160,
      161
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 162,
    "end": 166,
    "range": [
      162,
      166
    ]
  },
  {
    "type": "Identifier",
    "value": "CTemplate",
    "start": 167,
    "end": 176,
    "range": [
      167,
      176
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 177,
    "end": 178,
    "range": [
      177,
      178
    ]
  },
  {
    "type": "Identifier",
    "value": "Lowercase",
    "start": 179,
    "end": 188,
    "range": [
      179,
      188
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 188,
    "end": 189,
    "range": [
      188,
      189
    ]
  },
  {
    "type": "Identifier",
    "value": "ATemplate",
    "start": 189,
    "end": 198,
    "range": [
      189,
      198
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 198,
    "end": 199,
    "range": [
      198,
      199
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 199,
    "end": 200,
    "range": [
      199,
      200
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 202,
    "end": 210,
    "range": [
      202,
      210
    ]
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 211,
    "end": 213,
    "range": [
      211,
      213
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 213,
    "end": 214,
    "range": [
      213,
      214
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 219,
    "end": 220,
    "range": [
      219,
      220
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 220,
    "end": 221,
    "range": [
      220,
      221
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 222,
    "end": 223,
    "range": [
      222,
      223
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 223,
    "end": 224,
    "range": [
      223,
      224
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 229,
    "end": 230,
    "range": [
      229,
      230
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 230,
    "end": 231,
    "range": [
      230,
      231
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 232,
    "end": 233,
    "range": [
      232,
      233
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 233,
    "end": 234,
    "range": [
      233,
      234
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 239,
    "end": 240,
    "range": [
      239,
      240
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 240,
    "end": 241,
    "range": [
      240,
      241
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 242,
    "end": 243,
    "range": [
      242,
      243
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 243,
    "end": 244,
    "range": [
      243,
      244
    ]
  },
  {
    "type": "Identifier",
    "value": "a_template",
    "start": 249,
    "end": 259,
    "range": [
      249,
      259
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 259,
    "end": 260,
    "range": [
      259,
      260
    ]
  },
  {
    "type": "Identifier",
    "value": "ATemplate",
    "start": 261,
    "end": 270,
    "range": [
      261,
      270
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 270,
    "end": 271,
    "range": [
      270,
      271
    ]
  },
  {
    "type": "Identifier",
    "value": "b_template",
    "start": 276,
    "end": 286,
    "range": [
      276,
      286
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 286,
    "end": 287,
    "range": [
      286,
      287
    ]
  },
  {
    "type": "Identifier",
    "value": "BTemplate",
    "start": 288,
    "end": 297,
    "range": [
      288,
      297
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 297,
    "end": 298,
    "range": [
      297,
      298
    ]
  },
  {
    "type": "Identifier",
    "value": "c_template",
    "start": 303,
    "end": 313,
    "range": [
      303,
      313
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 313,
    "end": 314,
    "range": [
      313,
      314
    ]
  },
  {
    "type": "Identifier",
    "value": "CTemplate",
    "start": 315,
    "end": 324,
    "range": [
      315,
      324
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 325,
    "end": 326,
    "range": [
      325,
      326
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 327,
    "end": 328,
    "range": [
      327,
      328
    ]
  },
  {
    "type": "Identifier",
    "value": "a_template",
    "start": 435,
    "end": 445,
    "range": [
      435,
      445
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 446,
    "end": 447,
    "range": [
      446,
      447
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 448,
    "end": 449,
    "range": [
      448,
      449
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 449,
    "end": 450,
    "range": [
      449,
      450
    ]
  },
  {
    "type": "Identifier",
    "value": "b_template",
    "start": 455,
    "end": 465,
    "range": [
      455,
      465
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 466,
    "end": 467,
    "range": [
      466,
      467
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 468,
    "end": 469,
    "range": [
      468,
      469
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 469,
    "end": 470,
    "range": [
      469,
      470
    ]
  },
  {
    "type": "Identifier",
    "value": "c_template",
    "start": 475,
    "end": 485,
    "range": [
      475,
      485
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 486,
    "end": 487,
    "range": [
      486,
      487
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 488,
    "end": 489,
    "range": [
      488,
      489
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 489,
    "end": 490,
    "range": [
      489,
      490
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 528,
    "end": 529,
    "range": [
      528,
      529
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 530,
    "end": 531,
    "range": [
      530,
      531
    ]
  },
  {
    "type": "Identifier",
    "value": "a_template",
    "start": 532,
    "end": 542,
    "range": [
      532,
      542
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 542,
    "end": 543,
    "range": [
      542,
      543
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 548,
    "end": 549,
    "range": [
      548,
      549
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 550,
    "end": 551,
    "range": [
      550,
      551
    ]
  },
  {
    "type": "Identifier",
    "value": "b_template",
    "start": 552,
    "end": 562,
    "range": [
      552,
      562
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 562,
    "end": 563,
    "range": [
      562,
      563
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 568,
    "end": 569,
    "range": [
      568,
      569
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 570,
    "end": 571,
    "range": [
      570,
      571
    ]
  },
  {
    "type": "Identifier",
    "value": "c_template",
    "start": 572,
    "end": 582,
    "range": [
      572,
      582
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 582,
    "end": 583,
    "range": [
      582,
      583
    ]
  },
  {
    "type": "Identifier",
    "value": "a_template",
    "start": 699,
    "end": 709,
    "range": [
      699,
      709
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 710,
    "end": 711,
    "range": [
      710,
      711
    ]
  },
  {
    "type": "Identifier",
    "value": "b_template",
    "start": 712,
    "end": 722,
    "range": [
      712,
      722
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 722,
    "end": 723,
    "range": [
      722,
      723
    ]
  },
  {
    "type": "Identifier",
    "value": "a_template",
    "start": 728,
    "end": 738,
    "range": [
      728,
      738
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 739,
    "end": 740,
    "range": [
      739,
      740
    ]
  },
  {
    "type": "Identifier",
    "value": "c_template",
    "start": 741,
    "end": 751,
    "range": [
      741,
      751
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 751,
    "end": 752,
    "range": [
      751,
      752
    ]
  },
  {
    "type": "Identifier",
    "value": "b_template",
    "start": 758,
    "end": 768,
    "range": [
      758,
      768
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 769,
    "end": 770,
    "range": [
      769,
      770
    ]
  },
  {
    "type": "Identifier",
    "value": "a_template",
    "start": 771,
    "end": 781,
    "range": [
      771,
      781
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 781,
    "end": 782,
    "range": [
      781,
      782
    ]
  },
  {
    "type": "Identifier",
    "value": "b_template",
    "start": 787,
    "end": 797,
    "range": [
      787,
      797
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 798,
    "end": 799,
    "range": [
      798,
      799
    ]
  },
  {
    "type": "Identifier",
    "value": "c_template",
    "start": 800,
    "end": 810,
    "range": [
      800,
      810
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 810,
    "end": 811,
    "range": [
      810,
      811
    ]
  },
  {
    "type": "Identifier",
    "value": "c_template",
    "start": 817,
    "end": 827,
    "range": [
      817,
      827
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 828,
    "end": 829,
    "range": [
      828,
      829
    ]
  },
  {
    "type": "Identifier",
    "value": "a_template",
    "start": 830,
    "end": 840,
    "range": [
      830,
      840
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 840,
    "end": 841,
    "range": [
      840,
      841
    ]
  },
  {
    "type": "Identifier",
    "value": "c_template",
    "start": 846,
    "end": 856,
    "range": [
      846,
      856
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 857,
    "end": 858,
    "range": [
      857,
      858
    ]
  },
  {
    "type": "Identifier",
    "value": "b_template",
    "start": 859,
    "end": 869,
    "range": [
      859,
      869
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 869,
    "end": 870,
    "range": [
      869,
      870
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 871,
    "end": 872,
    "range": [
      871,
      872
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 911,
    "end": 919,
    "range": [
      911,
      919
    ]
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 920,
    "end": 922,
    "range": [
      920,
      922
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 922,
    "end": 923,
    "range": [
      922,
      923
    ]
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 923,
    "end": 925,
    "range": [
      923,
      925
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 925,
    "end": 926,
    "range": [
      925,
      926
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 927,
    "end": 933,
    "range": [
      927,
      933
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 933,
    "end": 934,
    "range": [
      933,
      934
    ]
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 935,
    "end": 937,
    "range": [
      935,
      937
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 937,
    "end": 938,
    "range": [
      937,
      938
    ]
  },
  {
    "type": "Identifier",
    "value": "Uppercase",
    "start": 939,
    "end": 948,
    "range": [
      939,
      948
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 948,
    "end": 949,
    "range": [
      948,
      949
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 949,
    "end": 955,
    "range": [
      949,
      955
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 955,
    "end": 956,
    "range": [
      955,
      956
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 956,
    "end": 957,
    "range": [
      956,
      957
    ]
  },
  {
    "type": "Identifier",
    "value": "x3",
    "start": 958,
    "end": 960,
    "range": [
      958,
      960
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 960,
    "end": 961,
    "range": [
      960,
      961
    ]
  },
  {
    "type": "Identifier",
    "value": "Lowercase",
    "start": 962,
    "end": 971,
    "range": [
      962,
      971
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 971,
    "end": 972,
    "range": [
      971,
      972
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 972,
    "end": 978,
    "range": [
      972,
      978
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 978,
    "end": 979,
    "range": [
      978,
      979
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 979,
    "end": 980,
    "range": [
      979,
      980
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 981,
    "end": 982,
    "range": [
      981,
      982
    ]
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 997,
    "end": 999,
    "range": [
      997,
      999
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1000,
    "end": 1001,
    "range": [
      1000,
      1001
    ]
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 1002,
    "end": 1004,
    "range": [
      1002,
      1004
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1004,
    "end": 1005,
    "range": [
      1004,
      1005
    ]
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 1010,
    "end": 1012,
    "range": [
      1010,
      1012
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1013,
    "end": 1014,
    "range": [
      1013,
      1014
    ]
  },
  {
    "type": "Identifier",
    "value": "x3",
    "start": 1015,
    "end": 1017,
    "range": [
      1015,
      1017
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1017,
    "end": 1018,
    "range": [
      1017,
      1018
    ]
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 1024,
    "end": 1026,
    "range": [
      1024,
      1026
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1027,
    "end": 1028,
    "range": [
      1027,
      1028
    ]
  },
  {
    "type": "String",
    "value": "\"ABC\"",
    "start": 1029,
    "end": 1034,
    "range": [
      1029,
      1034
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1034,
    "end": 1035,
    "range": [
      1034,
      1035
    ]
  },
  {
    "type": "Identifier",
    "value": "x3",
    "start": 1040,
    "end": 1042,
    "range": [
      1040,
      1042
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1043,
    "end": 1044,
    "range": [
      1043,
      1044
    ]
  },
  {
    "type": "String",
    "value": "\"abc\"",
    "start": 1045,
    "end": 1050,
    "range": [
      1045,
      1050
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1050,
    "end": 1051,
    "range": [
      1050,
      1051
    ]
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 1096,
    "end": 1098,
    "range": [
      1096,
      1098
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1099,
    "end": 1100,
    "range": [
      1099,
      1100
    ]
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 1101,
    "end": 1103,
    "range": [
      1101,
      1103
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1103,
    "end": 1104,
    "range": [
      1103,
      1104
    ]
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 1109,
    "end": 1111,
    "range": [
      1109,
      1111
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1112,
    "end": 1113,
    "range": [
      1112,
      1113
    ]
  },
  {
    "type": "Identifier",
    "value": "x3",
    "start": 1114,
    "end": 1116,
    "range": [
      1114,
      1116
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1116,
    "end": 1117,
    "range": [
      1116,
      1117
    ]
  },
  {
    "type": "Identifier",
    "value": "x3",
    "start": 1122,
    "end": 1124,
    "range": [
      1122,
      1124
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1125,
    "end": 1126,
    "range": [
      1125,
      1126
    ]
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 1127,
    "end": 1129,
    "range": [
      1127,
      1129
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1129,
    "end": 1130,
    "range": [
      1129,
      1130
    ]
  },
  {
    "type": "Identifier",
    "value": "x3",
    "start": 1135,
    "end": 1137,
    "range": [
      1135,
      1137
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1138,
    "end": 1139,
    "range": [
      1138,
      1139
    ]
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 1140,
    "end": 1142,
    "range": [
      1140,
      1142
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1142,
    "end": 1143,
    "range": [
      1142,
      1143
    ]
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 1149,
    "end": 1151,
    "range": [
      1149,
      1151
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1152,
    "end": 1153,
    "range": [
      1152,
      1153
    ]
  },
  {
    "type": "String",
    "value": "\"AbC\"",
    "start": 1154,
    "end": 1159,
    "range": [
      1154,
      1159
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1159,
    "end": 1160,
    "range": [
      1159,
      1160
    ]
  },
  {
    "type": "Identifier",
    "value": "x3",
    "start": 1165,
    "end": 1167,
    "range": [
      1165,
      1167
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1168,
    "end": 1169,
    "range": [
      1168,
      1169
    ]
  },
  {
    "type": "String",
    "value": "\"AbC\"",
    "start": 1170,
    "end": 1175,
    "range": [
      1170,
      1175
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1175,
    "end": 1176,
    "range": [
      1175,
      1176
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1177,
    "end": 1178,
    "range": [
      1177,
      1178
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1207,
    "end": 1215,
    "range": [
      1207,
      1215
    ]
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 1216,
    "end": 1218,
    "range": [
      1216,
      1218
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1218,
    "end": 1219,
    "range": [
      1218,
      1219
    ]
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 1224,
    "end": 1226,
    "range": [
      1224,
      1226
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1226,
    "end": 1227,
    "range": [
      1226,
      1227
    ]
  },
  {
    "type": "Identifier",
    "value": "Uppercase",
    "start": 1228,
    "end": 1237,
    "range": [
      1228,
      1237
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1237,
    "end": 1238,
    "range": [
      1237,
      1238
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1238,
    "end": 1244,
    "range": [
      1238,
      1244
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1244,
    "end": 1245,
    "range": [
      1244,
      1245
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1245,
    "end": 1246,
    "range": [
      1245,
      1246
    ]
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 1251,
    "end": 1253,
    "range": [
      1251,
      1253
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1253,
    "end": 1254,
    "range": [
      1253,
      1254
    ]
  },
  {
    "type": "Identifier",
    "value": "Uppercase",
    "start": 1255,
    "end": 1264,
    "range": [
      1255,
      1264
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1264,
    "end": 1265,
    "range": [
      1264,
      1265
    ]
  },
  {
    "type": "Identifier",
    "value": "Uppercase",
    "start": 1265,
    "end": 1274,
    "range": [
      1265,
      1274
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1274,
    "end": 1275,
    "range": [
      1274,
      1275
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1275,
    "end": 1281,
    "range": [
      1275,
      1281
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1281,
    "end": 1282,
    "range": [
      1281,
      1282
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1282,
    "end": 1283,
    "range": [
      1282,
      1283
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1283,
    "end": 1284,
    "range": [
      1283,
      1284
    ]
  },
  {
    "type": "Identifier",
    "value": "x3",
    "start": 1289,
    "end": 1291,
    "range": [
      1289,
      1291
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1291,
    "end": 1292,
    "range": [
      1291,
      1292
    ]
  },
  {
    "type": "Identifier",
    "value": "Uppercase",
    "start": 1293,
    "end": 1302,
    "range": [
      1293,
      1302
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1302,
    "end": 1303,
    "range": [
      1302,
      1303
    ]
  },
  {
    "type": "Identifier",
    "value": "Lowercase",
    "start": 1303,
    "end": 1312,
    "range": [
      1303,
      1312
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1312,
    "end": 1313,
    "range": [
      1312,
      1313
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1313,
    "end": 1319,
    "range": [
      1313,
      1319
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1319,
    "end": 1320,
    "range": [
      1319,
      1320
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1320,
    "end": 1321,
    "range": [
      1320,
      1321
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1321,
    "end": 1322,
    "range": [
      1321,
      1322
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1323,
    "end": 1324,
    "range": [
      1323,
      1324
    ]
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 1377,
    "end": 1379,
    "range": [
      1377,
      1379
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1380,
    "end": 1381,
    "range": [
      1380,
      1381
    ]
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 1382,
    "end": 1384,
    "range": [
      1382,
      1384
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1384,
    "end": 1385,
    "range": [
      1384,
      1385
    ]
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 1390,
    "end": 1392,
    "range": [
      1390,
      1392
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1393,
    "end": 1394,
    "range": [
      1393,
      1394
    ]
  },
  {
    "type": "Identifier",
    "value": "x3",
    "start": 1395,
    "end": 1397,
    "range": [
      1395,
      1397
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1397,
    "end": 1398,
    "range": [
      1397,
      1398
    ]
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 1404,
    "end": 1406,
    "range": [
      1404,
      1406
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1407,
    "end": 1408,
    "range": [
      1407,
      1408
    ]
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 1409,
    "end": 1411,
    "range": [
      1409,
      1411
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1411,
    "end": 1412,
    "range": [
      1411,
      1412
    ]
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 1417,
    "end": 1419,
    "range": [
      1417,
      1419
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1420,
    "end": 1421,
    "range": [
      1420,
      1421
    ]
  },
  {
    "type": "Identifier",
    "value": "x3",
    "start": 1422,
    "end": 1424,
    "range": [
      1422,
      1424
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1424,
    "end": 1425,
    "range": [
      1424,
      1425
    ]
  },
  {
    "type": "Identifier",
    "value": "x3",
    "start": 1752,
    "end": 1754,
    "range": [
      1752,
      1754
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1755,
    "end": 1756,
    "range": [
      1755,
      1756
    ]
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 1757,
    "end": 1759,
    "range": [
      1757,
      1759
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1759,
    "end": 1760,
    "range": [
      1759,
      1760
    ]
  },
  {
    "type": "Identifier",
    "value": "x3",
    "start": 1765,
    "end": 1767,
    "range": [
      1765,
      1767
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1768,
    "end": 1769,
    "range": [
      1768,
      1769
    ]
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 1770,
    "end": 1772,
    "range": [
      1770,
      1772
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1772,
    "end": 1773,
    "range": [
      1772,
      1773
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1838,
    "end": 1841,
    "range": [
      1838,
      1841
    ]
  },
  {
    "type": "Identifier",
    "value": "x4",
    "start": 1842,
    "end": 1844,
    "range": [
      1842,
      1844
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1844,
    "end": 1845,
    "range": [
      1844,
      1845
    ]
  },
  {
    "type": "Identifier",
    "value": "Lowercase",
    "start": 1846,
    "end": 1855,
    "range": [
      1846,
      1855
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1855,
    "end": 1856,
    "range": [
      1855,
      1856
    ]
  },
  {
    "type": "Identifier",
    "value": "Uppercase",
    "start": 1856,
    "end": 1865,
    "range": [
      1856,
      1865
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1865,
    "end": 1866,
    "range": [
      1865,
      1866
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1866,
    "end": 1872,
    "range": [
      1866,
      1872
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1872,
    "end": 1873,
    "range": [
      1872,
      1873
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1873,
    "end": 1874,
    "range": [
      1873,
      1874
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1875,
    "end": 1876,
    "range": [
      1875,
      1876
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1877,
    "end": 1881,
    "range": [
      1877,
      1881
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1882,
    "end": 1884,
    "range": [
      1882,
      1884
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1885,
    "end": 1888,
    "range": [
      1885,
      1888
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1888,
    "end": 1889,
    "range": [
      1888,
      1889
    ]
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 1894,
    "end": 1896,
    "range": [
      1894,
      1896
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1897,
    "end": 1898,
    "range": [
      1897,
      1898
    ]
  },
  {
    "type": "Identifier",
    "value": "x4",
    "start": 1899,
    "end": 1901,
    "range": [
      1899,
      1901
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1901,
    "end": 1902,
    "range": [
      1901,
      1902
    ]
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 1907,
    "end": 1909,
    "range": [
      1907,
      1909
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1910,
    "end": 1911,
    "range": [
      1910,
      1911
    ]
  },
  {
    "type": "Identifier",
    "value": "x4",
    "start": 1912,
    "end": 1914,
    "range": [
      1912,
      1914
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1914,
    "end": 1915,
    "range": [
      1914,
      1915
    ]
  },
  {
    "type": "Identifier",
    "value": "x3",
    "start": 1920,
    "end": 1922,
    "range": [
      1920,
      1922
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1923,
    "end": 1924,
    "range": [
      1923,
      1924
    ]
  },
  {
    "type": "Identifier",
    "value": "x4",
    "start": 1925,
    "end": 1927,
    "range": [
      1925,
      1927
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1927,
    "end": 1928,
    "range": [
      1927,
      1928
    ]
  },
  {
    "type": "Identifier",
    "value": "x4",
    "start": 1934,
    "end": 1936,
    "range": [
      1934,
      1936
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1937,
    "end": 1938,
    "range": [
      1937,
      1938
    ]
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 1939,
    "end": 1941,
    "range": [
      1939,
      1941
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1941,
    "end": 1942,
    "range": [
      1941,
      1942
    ]
  },
  {
    "type": "Identifier",
    "value": "x4",
    "start": 1947,
    "end": 1949,
    "range": [
      1947,
      1949
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1950,
    "end": 1951,
    "range": [
      1950,
      1951
    ]
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 1952,
    "end": 1954,
    "range": [
      1952,
      1954
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1954,
    "end": 1955,
    "range": [
      1954,
      1955
    ]
  },
  {
    "type": "Identifier",
    "value": "x4",
    "start": 1960,
    "end": 1962,
    "range": [
      1960,
      1962
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1963,
    "end": 1964,
    "range": [
      1963,
      1964
    ]
  },
  {
    "type": "Identifier",
    "value": "x3",
    "start": 1965,
    "end": 1967,
    "range": [
      1965,
      1967
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1967,
    "end": 1968,
    "range": [
      1967,
      1968
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1969,
    "end": 1970,
    "range": [
      1969,
      1970
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2037,
    "end": 2041,
    "range": [
      2037,
      2041
    ]
  },
  {
    "type": "Identifier",
    "value": "NonStringPat",
    "start": 2042,
    "end": 2054,
    "range": [
      2042,
      2054
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2055,
    "end": 2056,
    "range": [
      2055,
      2056
    ]
  },
  {
    "type": "Identifier",
    "value": "Uppercase",
    "start": 2057,
    "end": 2066,
    "range": [
      2057,
      2066
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2066,
    "end": 2067,
    "range": [
      2066,
      2067
    ]
  },
  {
    "type": "Template",
    "value": "`aA${",
    "start": 2067,
    "end": 2072,
    "range": [
      2067,
      2072
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2072,
    "end": 2078,
    "range": [
      2072,
      2078
    ]
  },
  {
    "type": "Template",
    "value": "}${",
    "start": 2078,
    "end": 2081,
    "range": [
      2078,
      2081
    ]
  },
  {
    "type": "Identifier",
    "value": "bigint",
    "start": 2081,
    "end": 2087,
    "range": [
      2081,
      2087
    ]
  },
  {
    "type": "Template",
    "value": "}${",
    "start": 2087,
    "end": 2090,
    "range": [
      2087,
      2090
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2090,
    "end": 2097,
    "range": [
      2090,
      2097
    ]
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 2097,
    "end": 2099,
    "range": [
      2097,
      2099
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2099,
    "end": 2100,
    "range": [
      2099,
      2100
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2100,
    "end": 2101,
    "range": [
      2100,
      2101
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2102,
    "end": 2106,
    "range": [
      2102,
      2106
    ]
  },
  {
    "type": "Identifier",
    "value": "EquivalentNonStringPat",
    "start": 2107,
    "end": 2129,
    "range": [
      2107,
      2129
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2130,
    "end": 2131,
    "range": [
      2130,
      2131
    ]
  },
  {
    "type": "Template",
    "value": "`AA${",
    "start": 2132,
    "end": 2137,
    "range": [
      2132,
      2137
    ]
  },
  {
    "type": "Identifier",
    "value": "Uppercase",
    "start": 2137,
    "end": 2146,
    "range": [
      2137,
      2146
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2146,
    "end": 2147,
    "range": [
      2146,
      2147
    ]
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 2147,
    "end": 2150,
    "range": [
      2147,
      2150
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2150,
    "end": 2156,
    "range": [
      2150,
      2156
    ]
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 2156,
    "end": 2158,
    "range": [
      2156,
      2158
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2158,
    "end": 2159,
    "range": [
      2158,
      2159
    ]
  },
  {
    "type": "Template",
    "value": "}${",
    "start": 2159,
    "end": 2162,
    "range": [
      2159,
      2162
    ]
  },
  {
    "type": "Identifier",
    "value": "Uppercase",
    "start": 2162,
    "end": 2171,
    "range": [
      2162,
      2171
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2171,
    "end": 2172,
    "range": [
      2171,
      2172
    ]
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 2172,
    "end": 2175,
    "range": [
      2172,
      2175
    ]
  },
  {
    "type": "Identifier",
    "value": "bigint",
    "start": 2175,
    "end": 2181,
    "range": [
      2175,
      2181
    ]
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 2181,
    "end": 2183,
    "range": [
      2181,
      2183
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2183,
    "end": 2184,
    "range": [
      2183,
      2184
    ]
  },
  {
    "type": "Template",
    "value": "}${",
    "start": 2184,
    "end": 2187,
    "range": [
      2184,
      2187
    ]
  },
  {
    "type": "Identifier",
    "value": "Uppercase",
    "start": 2187,
    "end": 2196,
    "range": [
      2187,
      2196
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2196,
    "end": 2197,
    "range": [
      2196,
      2197
    ]
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 2197,
    "end": 2200,
    "range": [
      2197,
      2200
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2200,
    "end": 2207,
    "range": [
      2200,
      2207
    ]
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 2207,
    "end": 2209,
    "range": [
      2207,
      2209
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2209,
    "end": 2210,
    "range": [
      2209,
      2210
    ]
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 2210,
    "end": 2212,
    "range": [
      2210,
      2212
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2212,
    "end": 2213,
    "range": [
      2212,
      2213
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2215,
    "end": 2223,
    "range": [
      2215,
      2223
    ]
  },
  {
    "type": "Identifier",
    "value": "f4",
    "start": 2224,
    "end": 2226,
    "range": [
      2224,
      2226
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2226,
    "end": 2227,
    "range": [
      2226,
      2227
    ]
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 2227,
    "end": 2229,
    "range": [
      2227,
      2229
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2229,
    "end": 2230,
    "range": [
      2229,
      2230
    ]
  },
  {
    "type": "Identifier",
    "value": "NonStringPat",
    "start": 2231,
    "end": 2243,
    "range": [
      2231,
      2243
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2243,
    "end": 2244,
    "range": [
      2243,
      2244
    ]
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 2245,
    "end": 2247,
    "range": [
      2245,
      2247
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2247,
    "end": 2248,
    "range": [
      2247,
      2248
    ]
  },
  {
    "type": "Identifier",
    "value": "EquivalentNonStringPat",
    "start": 2249,
    "end": 2271,
    "range": [
      2249,
      2271
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2271,
    "end": 2272,
    "range": [
      2271,
      2272
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2273,
    "end": 2274,
    "range": [
      2273,
      2274
    ]
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 2303,
    "end": 2305,
    "range": [
      2303,
      2305
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2306,
    "end": 2307,
    "range": [
      2306,
      2307
    ]
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 2308,
    "end": 2310,
    "range": [
      2308,
      2310
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2310,
    "end": 2311,
    "range": [
      2310,
      2311
    ]
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 2316,
    "end": 2318,
    "range": [
      2316,
      2318
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2319,
    "end": 2320,
    "range": [
      2319,
      2320
    ]
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 2321,
    "end": 2323,
    "range": [
      2321,
      2323
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2323,
    "end": 2324,
    "range": [
      2323,
      2324
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2325,
    "end": 2326,
    "range": [
      2325,
      2326
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2381,
    "end": 2389,
    "range": [
      2381,
      2389
    ]
  },
  {
    "type": "Identifier",
    "value": "f5",
    "start": 2390,
    "end": 2392,
    "range": [
      2390,
      2392
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2392,
    "end": 2393,
    "range": [
      2392,
      2393
    ]
  },
  {
    "type": "Identifier",
    "value": "cap_tem",
    "start": 2398,
    "end": 2405,
    "range": [
      2398,
      2405
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2405,
    "end": 2406,
    "range": [
      2405,
      2406
    ]
  },
  {
    "type": "Template",
    "value": "`A${",
    "start": 2407,
    "end": 2411,
    "range": [
      2407,
      2411
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2411,
    "end": 2417,
    "range": [
      2411,
      2417
    ]
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 2417,
    "end": 2419,
    "range": [
      2417,
      2419
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2419,
    "end": 2420,
    "range": [
      2419,
      2420
    ]
  },
  {
    "type": "Identifier",
    "value": "cap_str",
    "start": 2425,
    "end": 2432,
    "range": [
      2425,
      2432
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2432,
    "end": 2433,
    "range": [
      2432,
      2433
    ]
  },
  {
    "type": "Identifier",
    "value": "Capitalize",
    "start": 2434,
    "end": 2444,
    "range": [
      2434,
      2444
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2444,
    "end": 2445,
    "range": [
      2444,
      2445
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2445,
    "end": 2451,
    "range": [
      2445,
      2451
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2451,
    "end": 2452,
    "range": [
      2451,
      2452
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2452,
    "end": 2453,
    "range": [
      2452,
      2453
    ]
  },
  {
    "type": "Identifier",
    "value": "cap_tem_map",
    "start": 2458,
    "end": 2469,
    "range": [
      2458,
      2469
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2469,
    "end": 2470,
    "range": [
      2469,
      2470
    ]
  },
  {
    "type": "Identifier",
    "value": "Capitalize",
    "start": 2471,
    "end": 2481,
    "range": [
      2471,
      2481
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2481,
    "end": 2482,
    "range": [
      2481,
      2482
    ]
  },
  {
    "type": "Template",
    "value": "`A${",
    "start": 2482,
    "end": 2486,
    "range": [
      2482,
      2486
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2486,
    "end": 2492,
    "range": [
      2486,
      2492
    ]
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 2492,
    "end": 2494,
    "range": [
      2492,
      2494
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2494,
    "end": 2495,
    "range": [
      2494,
      2495
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2495,
    "end": 2496,
    "range": [
      2495,
      2496
    ]
  },
  {
    "type": "Identifier",
    "value": "cap_tem_map2",
    "start": 2501,
    "end": 2513,
    "range": [
      2501,
      2513
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2513,
    "end": 2514,
    "range": [
      2513,
      2514
    ]
  },
  {
    "type": "Identifier",
    "value": "Capitalize",
    "start": 2515,
    "end": 2525,
    "range": [
      2515,
      2525
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2525,
    "end": 2526,
    "range": [
      2525,
      2526
    ]
  },
  {
    "type": "Template",
    "value": "`a${",
    "start": 2526,
    "end": 2530,
    "range": [
      2526,
      2530
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2530,
    "end": 2536,
    "range": [
      2530,
      2536
    ]
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 2536,
    "end": 2538,
    "range": [
      2536,
      2538
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2538,
    "end": 2539,
    "range": [
      2538,
      2539
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2539,
    "end": 2540,
    "range": [
      2539,
      2540
    ]
  },
  {
    "type": "Identifier",
    "value": "uncap_tem",
    "start": 2545,
    "end": 2554,
    "range": [
      2545,
      2554
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2554,
    "end": 2555,
    "range": [
      2554,
      2555
    ]
  },
  {
    "type": "Template",
    "value": "`a${",
    "start": 2556,
    "end": 2560,
    "range": [
      2556,
      2560
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2560,
    "end": 2566,
    "range": [
      2560,
      2566
    ]
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 2566,
    "end": 2568,
    "range": [
      2566,
      2568
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2568,
    "end": 2569,
    "range": [
      2568,
      2569
    ]
  },
  {
    "type": "Identifier",
    "value": "uncap_str",
    "start": 2574,
    "end": 2583,
    "range": [
      2574,
      2583
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2583,
    "end": 2584,
    "range": [
      2583,
      2584
    ]
  },
  {
    "type": "Identifier",
    "value": "Uncapitalize",
    "start": 2585,
    "end": 2597,
    "range": [
      2585,
      2597
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2597,
    "end": 2598,
    "range": [
      2597,
      2598
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2598,
    "end": 2604,
    "range": [
      2598,
      2604
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2604,
    "end": 2605,
    "range": [
      2604,
      2605
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2605,
    "end": 2606,
    "range": [
      2605,
      2606
    ]
  },
  {
    "type": "Identifier",
    "value": "uncap_tem_map",
    "start": 2611,
    "end": 2624,
    "range": [
      2611,
      2624
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2624,
    "end": 2625,
    "range": [
      2624,
      2625
    ]
  },
  {
    "type": "Identifier",
    "value": "Uncapitalize",
    "start": 2626,
    "end": 2638,
    "range": [
      2626,
      2638
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2638,
    "end": 2639,
    "range": [
      2638,
      2639
    ]
  },
  {
    "type": "Template",
    "value": "`A${",
    "start": 2639,
    "end": 2643,
    "range": [
      2639,
      2643
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2643,
    "end": 2649,
    "range": [
      2643,
      2649
    ]
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 2649,
    "end": 2651,
    "range": [
      2649,
      2651
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2651,
    "end": 2652,
    "range": [
      2651,
      2652
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2652,
    "end": 2653,
    "range": [
      2652,
      2653
    ]
  },
  {
    "type": "Identifier",
    "value": "uncap_tem_map2",
    "start": 2658,
    "end": 2672,
    "range": [
      2658,
      2672
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2672,
    "end": 2673,
    "range": [
      2672,
      2673
    ]
  },
  {
    "type": "Identifier",
    "value": "Uncapitalize",
    "start": 2674,
    "end": 2686,
    "range": [
      2674,
      2686
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2686,
    "end": 2687,
    "range": [
      2686,
      2687
    ]
  },
  {
    "type": "Template",
    "value": "`a${",
    "start": 2687,
    "end": 2691,
    "range": [
      2687,
      2691
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2691,
    "end": 2697,
    "range": [
      2691,
      2697
    ]
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 2697,
    "end": 2699,
    "range": [
      2697,
      2699
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2699,
    "end": 2700,
    "range": [
      2699,
      2700
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2700,
    "end": 2701,
    "range": [
      2700,
      2701
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2702,
    "end": 2703,
    "range": [
      2702,
      2703
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2704,
    "end": 2705,
    "range": [
      2704,
      2705
    ]
  },
  {
    "type": "Identifier",
    "value": "cap_str",
    "start": 2743,
    "end": 2750,
    "range": [
      2743,
      2750
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2751,
    "end": 2752,
    "range": [
      2751,
      2752
    ]
  },
  {
    "type": "Identifier",
    "value": "cap_tem",
    "start": 2753,
    "end": 2760,
    "range": [
      2753,
      2760
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2760,
    "end": 2761,
    "range": [
      2760,
      2761
    ]
  },
  {
    "type": "Identifier",
    "value": "cap_str",
    "start": 2766,
    "end": 2773,
    "range": [
      2766,
      2773
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2774,
    "end": 2775,
    "range": [
      2774,
      2775
    ]
  },
  {
    "type": "Identifier",
    "value": "cap_tem_map",
    "start": 2776,
    "end": 2787,
    "range": [
      2776,
      2787
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2787,
    "end": 2788,
    "range": [
      2787,
      2788
    ]
  },
  {
    "type": "Identifier",
    "value": "cap_str",
    "start": 2793,
    "end": 2800,
    "range": [
      2793,
      2800
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2801,
    "end": 2802,
    "range": [
      2801,
      2802
    ]
  },
  {
    "type": "Identifier",
    "value": "cap_tem_map2",
    "start": 2803,
    "end": 2815,
    "range": [
      2803,
      2815
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2815,
    "end": 2816,
    "range": [
      2815,
      2816
    ]
  },
  {
    "type": "Identifier",
    "value": "cap_tem",
    "start": 2854,
    "end": 2861,
    "range": [
      2854,
      2861
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2862,
    "end": 2863,
    "range": [
      2862,
      2863
    ]
  },
  {
    "type": "Identifier",
    "value": "cap_tem_map",
    "start": 2864,
    "end": 2875,
    "range": [
      2864,
      2875
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2875,
    "end": 2876,
    "range": [
      2875,
      2876
    ]
  },
  {
    "type": "Identifier",
    "value": "cap_tem",
    "start": 2881,
    "end": 2888,
    "range": [
      2881,
      2888
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2889,
    "end": 2890,
    "range": [
      2889,
      2890
    ]
  },
  {
    "type": "Identifier",
    "value": "cap_tem_map2",
    "start": 2891,
    "end": 2903,
    "range": [
      2891,
      2903
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2903,
    "end": 2904,
    "range": [
      2903,
      2904
    ]
  },
  {
    "type": "Identifier",
    "value": "cap_tem_map",
    "start": 2909,
    "end": 2920,
    "range": [
      2909,
      2920
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2921,
    "end": 2922,
    "range": [
      2921,
      2922
    ]
  },
  {
    "type": "Identifier",
    "value": "cap_tem_map2",
    "start": 2923,
    "end": 2935,
    "range": [
      2923,
      2935
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2935,
    "end": 2936,
    "range": [
      2935,
      2936
    ]
  },
  {
    "type": "Identifier",
    "value": "cap_tem_map",
    "start": 2941,
    "end": 2952,
    "range": [
      2941,
      2952
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2953,
    "end": 2954,
    "range": [
      2953,
      2954
    ]
  },
  {
    "type": "Identifier",
    "value": "cap_tem",
    "start": 2955,
    "end": 2962,
    "range": [
      2955,
      2962
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2962,
    "end": 2963,
    "range": [
      2962,
      2963
    ]
  },
  {
    "type": "Identifier",
    "value": "cap_tem_map2",
    "start": 2968,
    "end": 2980,
    "range": [
      2968,
      2980
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2981,
    "end": 2982,
    "range": [
      2981,
      2982
    ]
  },
  {
    "type": "Identifier",
    "value": "cap_tem_map",
    "start": 2983,
    "end": 2994,
    "range": [
      2983,
      2994
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2994,
    "end": 2995,
    "range": [
      2994,
      2995
    ]
  },
  {
    "type": "Identifier",
    "value": "cap_tem_map2",
    "start": 3000,
    "end": 3012,
    "range": [
      3000,
      3012
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3013,
    "end": 3014,
    "range": [
      3013,
      3014
    ]
  },
  {
    "type": "Identifier",
    "value": "cap_tem",
    "start": 3015,
    "end": 3022,
    "range": [
      3015,
      3022
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3022,
    "end": 3023,
    "range": [
      3022,
      3023
    ]
  },
  {
    "type": "Identifier",
    "value": "cap_tem",
    "start": 3078,
    "end": 3085,
    "range": [
      3078,
      3085
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3086,
    "end": 3087,
    "range": [
      3086,
      3087
    ]
  },
  {
    "type": "Identifier",
    "value": "cap_str",
    "start": 3088,
    "end": 3095,
    "range": [
      3088,
      3095
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3095,
    "end": 3096,
    "range": [
      3095,
      3096
    ]
  },
  {
    "type": "Identifier",
    "value": "cap_tem_map",
    "start": 3101,
    "end": 3112,
    "range": [
      3101,
      3112
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3113,
    "end": 3114,
    "range": [
      3113,
      3114
    ]
  },
  {
    "type": "Identifier",
    "value": "cap_str",
    "start": 3115,
    "end": 3122,
    "range": [
      3115,
      3122
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3122,
    "end": 3123,
    "range": [
      3122,
      3123
    ]
  },
  {
    "type": "Identifier",
    "value": "cap_tem_map2",
    "start": 3128,
    "end": 3140,
    "range": [
      3128,
      3140
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3141,
    "end": 3142,
    "range": [
      3141,
      3142
    ]
  },
  {
    "type": "Identifier",
    "value": "cap_str",
    "start": 3143,
    "end": 3150,
    "range": [
      3143,
      3150
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3150,
    "end": 3151,
    "range": [
      3150,
      3151
    ]
  },
  {
    "type": "Identifier",
    "value": "uncap_str",
    "start": 3192,
    "end": 3201,
    "range": [
      3192,
      3201
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3202,
    "end": 3203,
    "range": [
      3202,
      3203
    ]
  },
  {
    "type": "Identifier",
    "value": "uncap_tem",
    "start": 3204,
    "end": 3213,
    "range": [
      3204,
      3213
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3213,
    "end": 3214,
    "range": [
      3213,
      3214
    ]
  },
  {
    "type": "Identifier",
    "value": "uncap_str",
    "start": 3219,
    "end": 3228,
    "range": [
      3219,
      3228
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3229,
    "end": 3230,
    "range": [
      3229,
      3230
    ]
  },
  {
    "type": "Identifier",
    "value": "uncap_tem_map",
    "start": 3231,
    "end": 3244,
    "range": [
      3231,
      3244
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3244,
    "end": 3245,
    "range": [
      3244,
      3245
    ]
  },
  {
    "type": "Identifier",
    "value": "uncap_str",
    "start": 3250,
    "end": 3259,
    "range": [
      3250,
      3259
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3260,
    "end": 3261,
    "range": [
      3260,
      3261
    ]
  },
  {
    "type": "Identifier",
    "value": "uncap_tem_map2",
    "start": 3262,
    "end": 3276,
    "range": [
      3262,
      3276
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3276,
    "end": 3277,
    "range": [
      3276,
      3277
    ]
  },
  {
    "type": "Identifier",
    "value": "uncap_tem",
    "start": 3315,
    "end": 3324,
    "range": [
      3315,
      3324
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3325,
    "end": 3326,
    "range": [
      3325,
      3326
    ]
  },
  {
    "type": "Identifier",
    "value": "uncap_tem_map",
    "start": 3327,
    "end": 3340,
    "range": [
      3327,
      3340
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3340,
    "end": 3341,
    "range": [
      3340,
      3341
    ]
  },
  {
    "type": "Identifier",
    "value": "uncap_tem",
    "start": 3346,
    "end": 3355,
    "range": [
      3346,
      3355
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3356,
    "end": 3357,
    "range": [
      3356,
      3357
    ]
  },
  {
    "type": "Identifier",
    "value": "uncap_tem_map2",
    "start": 3358,
    "end": 3372,
    "range": [
      3358,
      3372
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3372,
    "end": 3373,
    "range": [
      3372,
      3373
    ]
  },
  {
    "type": "Identifier",
    "value": "uncap_tem_map",
    "start": 3378,
    "end": 3391,
    "range": [
      3378,
      3391
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3392,
    "end": 3393,
    "range": [
      3392,
      3393
    ]
  },
  {
    "type": "Identifier",
    "value": "uncap_tem_map2",
    "start": 3394,
    "end": 3408,
    "range": [
      3394,
      3408
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3408,
    "end": 3409,
    "range": [
      3408,
      3409
    ]
  },
  {
    "type": "Identifier",
    "value": "uncap_tem_map",
    "start": 3414,
    "end": 3427,
    "range": [
      3414,
      3427
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3428,
    "end": 3429,
    "range": [
      3428,
      3429
    ]
  },
  {
    "type": "Identifier",
    "value": "uncap_tem",
    "start": 3430,
    "end": 3439,
    "range": [
      3430,
      3439
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3439,
    "end": 3440,
    "range": [
      3439,
      3440
    ]
  },
  {
    "type": "Identifier",
    "value": "uncap_tem_map2",
    "start": 3445,
    "end": 3459,
    "range": [
      3445,
      3459
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3460,
    "end": 3461,
    "range": [
      3460,
      3461
    ]
  },
  {
    "type": "Identifier",
    "value": "uncap_tem_map",
    "start": 3462,
    "end": 3475,
    "range": [
      3462,
      3475
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3475,
    "end": 3476,
    "range": [
      3475,
      3476
    ]
  },
  {
    "type": "Identifier",
    "value": "uncap_tem_map2",
    "start": 3481,
    "end": 3495,
    "range": [
      3481,
      3495
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3496,
    "end": 3497,
    "range": [
      3496,
      3497
    ]
  },
  {
    "type": "Identifier",
    "value": "uncap_tem",
    "start": 3498,
    "end": 3507,
    "range": [
      3498,
      3507
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3507,
    "end": 3508,
    "range": [
      3507,
      3508
    ]
  },
  {
    "type": "Identifier",
    "value": "uncap_tem",
    "start": 3563,
    "end": 3572,
    "range": [
      3563,
      3572
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3573,
    "end": 3574,
    "range": [
      3573,
      3574
    ]
  },
  {
    "type": "Identifier",
    "value": "uncap_str",
    "start": 3575,
    "end": 3584,
    "range": [
      3575,
      3584
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3584,
    "end": 3585,
    "range": [
      3584,
      3585
    ]
  },
  {
    "type": "Identifier",
    "value": "uncap_tem_map",
    "start": 3590,
    "end": 3603,
    "range": [
      3590,
      3603
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3604,
    "end": 3605,
    "range": [
      3604,
      3605
    ]
  },
  {
    "type": "Identifier",
    "value": "uncap_str",
    "start": 3606,
    "end": 3615,
    "range": [
      3606,
      3615
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3615,
    "end": 3616,
    "range": [
      3615,
      3616
    ]
  },
  {
    "type": "Identifier",
    "value": "uncap_tem_map2",
    "start": 3621,
    "end": 3635,
    "range": [
      3621,
      3635
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3636,
    "end": 3637,
    "range": [
      3636,
      3637
    ]
  },
  {
    "type": "Identifier",
    "value": "uncap_str",
    "start": 3638,
    "end": 3647,
    "range": [
      3638,
      3647
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3647,
    "end": 3648,
    "range": [
      3647,
      3648
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3649,
    "end": 3650,
    "range": [
      3649,
      3650
    ]
  }
]
```
