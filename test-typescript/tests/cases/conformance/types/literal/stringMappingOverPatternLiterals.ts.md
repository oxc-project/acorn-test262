__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 16,
  "end": 3650,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 16,
      "end": 30,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 21,
        "end": 22,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSLiteralType",
        "start": 25,
        "end": 29,
        "literal": {
          "type": "Literal",
          "start": 25,
          "end": 29,
          "raw": "\"aA\"",
          "value": "aA"
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 31,
      "end": 53,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 36,
        "end": 37,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 40,
        "end": 52,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 49,
          "end": 52,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 50,
              "end": 51,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 50,
                "end": 51,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 40,
          "end": 49,
          "decorators": [],
          "name": "Uppercase",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 54,
      "end": 76,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 59,
        "end": 60,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 63,
        "end": 75,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 72,
          "end": 75,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 73,
              "end": 74,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 73,
                "end": 74,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 63,
          "end": 72,
          "decorators": [],
          "name": "Lowercase",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 91,
      "end": 122,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 96,
        "end": 105,
        "decorators": [],
        "name": "ATemplate",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTemplateLiteralType",
        "start": 108,
        "end": 121,
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 108,
            "end": 113,
            "tail": false,
            "value": {
              "cooked": "aA",
              "raw": "aA"
            }
          },
          {
            "type": "TemplateElement",
            "start": 119,
            "end": 121,
            "tail": true,
            "value": {
              "cooked": "",
              "raw": ""
            }
          }
        ],
        "types": [
          {
            "type": "TSStringKeyword",
            "start": 113,
            "end": 119
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 123,
      "end": 161,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 128,
        "end": 137,
        "decorators": [],
        "name": "BTemplate",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 140,
        "end": 160,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 149,
          "end": 160,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 150,
              "end": 159,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 150,
                "end": 159,
                "decorators": [],
                "name": "ATemplate",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 140,
          "end": 149,
          "decorators": [],
          "name": "Uppercase",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 162,
      "end": 200,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 167,
        "end": 176,
        "decorators": [],
        "name": "CTemplate",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 179,
        "end": 199,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 188,
          "end": 199,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 189,
              "end": 198,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 189,
                "end": 198,
                "decorators": [],
                "name": "ATemplate",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 179,
          "end": 188,
          "decorators": [],
          "name": "Lowercase",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 202,
      "end": 872,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 327,
        "end": 872,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 435,
            "end": 450,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 435,
              "end": 449,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 435,
                "end": 445,
                "decorators": [],
                "name": "a_template",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 448,
                "end": 449,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 455,
            "end": 470,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 455,
              "end": 469,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 455,
                "end": 465,
                "decorators": [],
                "name": "b_template",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 468,
                "end": 469,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 475,
            "end": 490,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 475,
              "end": 489,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 475,
                "end": 485,
                "decorators": [],
                "name": "c_template",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 488,
                "end": 489,
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 528,
            "end": 543,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 528,
              "end": 542,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 528,
                "end": 529,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 532,
                "end": 542,
                "decorators": [],
                "name": "a_template",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 548,
            "end": 563,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 548,
              "end": 562,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 548,
                "end": 549,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 552,
                "end": 562,
                "decorators": [],
                "name": "b_template",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 568,
            "end": 583,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 568,
              "end": 582,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 568,
                "end": 569,
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 572,
                "end": 582,
                "decorators": [],
                "name": "c_template",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 699,
            "end": 723,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 699,
              "end": 722,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 699,
                "end": 709,
                "decorators": [],
                "name": "a_template",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 712,
                "end": 722,
                "decorators": [],
                "name": "b_template",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 728,
            "end": 752,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 728,
              "end": 751,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 728,
                "end": 738,
                "decorators": [],
                "name": "a_template",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 741,
                "end": 751,
                "decorators": [],
                "name": "c_template",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 758,
            "end": 782,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 758,
              "end": 781,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 758,
                "end": 768,
                "decorators": [],
                "name": "b_template",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 771,
                "end": 781,
                "decorators": [],
                "name": "a_template",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 787,
            "end": 811,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 787,
              "end": 810,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 787,
                "end": 797,
                "decorators": [],
                "name": "b_template",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 800,
                "end": 810,
                "decorators": [],
                "name": "c_template",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 817,
            "end": 841,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 817,
              "end": 840,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 817,
                "end": 827,
                "decorators": [],
                "name": "c_template",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 830,
                "end": 840,
                "decorators": [],
                "name": "a_template",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 846,
            "end": 870,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 846,
              "end": 869,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 846,
                "end": 856,
                "decorators": [],
                "name": "c_template",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 859,
                "end": 869,
                "decorators": [],
                "name": "b_template",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 211,
        "end": 213,
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 219,
          "end": 223,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 220,
            "end": 223,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 222,
              "end": 223,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 222,
                "end": 223,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 229,
          "end": 233,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 230,
            "end": 233,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 232,
              "end": 233,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 232,
                "end": 233,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 239,
          "end": 243,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 240,
            "end": 243,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 242,
              "end": 243,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 242,
                "end": 243,
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 249,
          "end": 270,
          "decorators": [],
          "name": "a_template",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 259,
            "end": 270,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 261,
              "end": 270,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 261,
                "end": 270,
                "decorators": [],
                "name": "ATemplate",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 276,
          "end": 297,
          "decorators": [],
          "name": "b_template",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 286,
            "end": 297,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 288,
              "end": 297,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 288,
                "end": 297,
                "decorators": [],
                "name": "BTemplate",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 303,
          "end": 324,
          "decorators": [],
          "name": "c_template",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 313,
            "end": 324,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 315,
              "end": 324,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 315,
                "end": 324,
                "decorators": [],
                "name": "CTemplate",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 911,
      "end": 1178,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 981,
        "end": 1178,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 997,
            "end": 1005,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 997,
              "end": 1004,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 997,
                "end": 999,
                "decorators": [],
                "name": "x1",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1002,
                "end": 1004,
                "decorators": [],
                "name": "x2",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1010,
            "end": 1018,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1010,
              "end": 1017,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1010,
                "end": 1012,
                "decorators": [],
                "name": "x1",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1015,
                "end": 1017,
                "decorators": [],
                "name": "x3",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1024,
            "end": 1035,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1024,
              "end": 1034,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1024,
                "end": 1026,
                "decorators": [],
                "name": "x2",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 1029,
                "end": 1034,
                "raw": "\"ABC\"",
                "value": "ABC"
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1040,
            "end": 1051,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1040,
              "end": 1050,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1040,
                "end": 1042,
                "decorators": [],
                "name": "x3",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 1045,
                "end": 1050,
                "raw": "\"abc\"",
                "value": "abc"
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1096,
            "end": 1104,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1096,
              "end": 1103,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1096,
                "end": 1098,
                "decorators": [],
                "name": "x2",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1101,
                "end": 1103,
                "decorators": [],
                "name": "x1",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1109,
            "end": 1117,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1109,
              "end": 1116,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1109,
                "end": 1111,
                "decorators": [],
                "name": "x2",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1114,
                "end": 1116,
                "decorators": [],
                "name": "x3",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1122,
            "end": 1130,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1122,
              "end": 1129,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1122,
                "end": 1124,
                "decorators": [],
                "name": "x3",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1127,
                "end": 1129,
                "decorators": [],
                "name": "x1",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1135,
            "end": 1143,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1135,
              "end": 1142,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1135,
                "end": 1137,
                "decorators": [],
                "name": "x3",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1140,
                "end": 1142,
                "decorators": [],
                "name": "x2",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1149,
            "end": 1160,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1149,
              "end": 1159,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1149,
                "end": 1151,
                "decorators": [],
                "name": "x2",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 1154,
                "end": 1159,
                "raw": "\"AbC\"",
                "value": "AbC"
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1165,
            "end": 1176,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1165,
              "end": 1175,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1165,
                "end": 1167,
                "decorators": [],
                "name": "x3",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 1170,
                "end": 1175,
                "raw": "\"AbC\"",
                "value": "AbC"
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 920,
        "end": 922,
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 923,
          "end": 933,
          "decorators": [],
          "name": "x1",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 925,
            "end": 933,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 927,
              "end": 933
            }
          }
        },
        {
          "type": "Identifier",
          "start": 935,
          "end": 956,
          "decorators": [],
          "name": "x2",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 937,
            "end": 956,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 939,
              "end": 956,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 948,
                "end": 956,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 949,
                    "end": 955
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 939,
                "end": 948,
                "decorators": [],
                "name": "Uppercase",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 958,
          "end": 979,
          "decorators": [],
          "name": "x3",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 960,
            "end": 979,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 962,
              "end": 979,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 971,
                "end": 979,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 972,
                    "end": 978
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 962,
                "end": 971,
                "decorators": [],
                "name": "Lowercase",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1207,
      "end": 1970,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1323,
        "end": 1970,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1377,
            "end": 1385,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1377,
              "end": 1384,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1377,
                "end": 1379,
                "decorators": [],
                "name": "x1",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1382,
                "end": 1384,
                "decorators": [],
                "name": "x2",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1390,
            "end": 1398,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1390,
              "end": 1397,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1390,
                "end": 1392,
                "decorators": [],
                "name": "x1",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1395,
                "end": 1397,
                "decorators": [],
                "name": "x3",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1404,
            "end": 1412,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1404,
              "end": 1411,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1404,
                "end": 1406,
                "decorators": [],
                "name": "x2",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1409,
                "end": 1411,
                "decorators": [],
                "name": "x1",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1417,
            "end": 1425,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1417,
              "end": 1424,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1417,
                "end": 1419,
                "decorators": [],
                "name": "x2",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1422,
                "end": 1424,
                "decorators": [],
                "name": "x3",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1752,
            "end": 1760,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1752,
              "end": 1759,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1752,
                "end": 1754,
                "decorators": [],
                "name": "x3",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1757,
                "end": 1759,
                "decorators": [],
                "name": "x1",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1765,
            "end": 1773,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1765,
              "end": 1772,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1765,
                "end": 1767,
                "decorators": [],
                "name": "x3",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1770,
                "end": 1772,
                "decorators": [],
                "name": "x2",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "VariableDeclaration",
            "start": 1838,
            "end": 1889,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1842,
                "end": 1888,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1842,
                  "end": 1874,
                  "decorators": [],
                  "name": "x4",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1844,
                    "end": 1874,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1846,
                      "end": 1874,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 1855,
                        "end": 1874,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 1856,
                            "end": 1873,
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 1865,
                              "end": 1873,
                              "params": [
                                {
                                  "type": "TSStringKeyword",
                                  "start": 1866,
                                  "end": 1872
                                }
                              ]
                            },
                            "typeName": {
                              "type": "Identifier",
                              "start": 1856,
                              "end": 1865,
                              "decorators": [],
                              "name": "Uppercase",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 1846,
                        "end": 1855,
                        "decorators": [],
                        "name": "Lowercase",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                },
                "init": {
                  "type": "TSAsExpression",
                  "start": 1877,
                  "end": 1888,
                  "expression": {
                    "type": "Literal",
                    "start": 1877,
                    "end": 1881,
                    "raw": "null",
                    "value": null
                  },
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 1885,
                    "end": 1888
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "ExpressionStatement",
            "start": 1894,
            "end": 1902,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1894,
              "end": 1901,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1894,
                "end": 1896,
                "decorators": [],
                "name": "x1",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1899,
                "end": 1901,
                "decorators": [],
                "name": "x4",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1907,
            "end": 1915,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1907,
              "end": 1914,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1907,
                "end": 1909,
                "decorators": [],
                "name": "x2",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1912,
                "end": 1914,
                "decorators": [],
                "name": "x4",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1920,
            "end": 1928,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1920,
              "end": 1927,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1920,
                "end": 1922,
                "decorators": [],
                "name": "x3",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1925,
                "end": 1927,
                "decorators": [],
                "name": "x4",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1934,
            "end": 1942,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1934,
              "end": 1941,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1934,
                "end": 1936,
                "decorators": [],
                "name": "x4",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1939,
                "end": 1941,
                "decorators": [],
                "name": "x1",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1947,
            "end": 1955,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1947,
              "end": 1954,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1947,
                "end": 1949,
                "decorators": [],
                "name": "x4",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1952,
                "end": 1954,
                "decorators": [],
                "name": "x2",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1960,
            "end": 1968,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1960,
              "end": 1967,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1960,
                "end": 1962,
                "decorators": [],
                "name": "x4",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1965,
                "end": 1967,
                "decorators": [],
                "name": "x3",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1216,
        "end": 1218,
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1224,
          "end": 1245,
          "decorators": [],
          "name": "x1",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1226,
            "end": 1245,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1228,
              "end": 1245,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1237,
                "end": 1245,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1238,
                    "end": 1244
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 1228,
                "end": 1237,
                "decorators": [],
                "name": "Uppercase",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 1251,
          "end": 1283,
          "decorators": [],
          "name": "x2",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1253,
            "end": 1283,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1255,
              "end": 1283,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1264,
                "end": 1283,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1265,
                    "end": 1282,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 1274,
                      "end": 1282,
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 1275,
                          "end": 1281
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 1265,
                      "end": 1274,
                      "decorators": [],
                      "name": "Uppercase",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 1255,
                "end": 1264,
                "decorators": [],
                "name": "Uppercase",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 1289,
          "end": 1321,
          "decorators": [],
          "name": "x3",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1291,
            "end": 1321,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1293,
              "end": 1321,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1302,
                "end": 1321,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1303,
                    "end": 1320,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 1312,
                      "end": 1320,
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 1313,
                          "end": 1319
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 1303,
                      "end": 1312,
                      "decorators": [],
                      "name": "Lowercase",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 1293,
                "end": 1302,
                "decorators": [],
                "name": "Uppercase",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2037,
      "end": 2101,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 2042,
        "end": 2054,
        "decorators": [],
        "name": "NonStringPat",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 2057,
        "end": 2100,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 2066,
          "end": 2100,
          "params": [
            {
              "type": "TSTemplateLiteralType",
              "start": 2067,
              "end": 2099,
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 2067,
                  "end": 2072,
                  "tail": false,
                  "value": {
                    "cooked": "aA",
                    "raw": "aA"
                  }
                },
                {
                  "type": "TemplateElement",
                  "start": 2078,
                  "end": 2081,
                  "tail": false,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  }
                },
                {
                  "type": "TemplateElement",
                  "start": 2087,
                  "end": 2090,
                  "tail": false,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  }
                },
                {
                  "type": "TemplateElement",
                  "start": 2097,
                  "end": 2099,
                  "tail": true,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  }
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
              ]
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 2057,
          "end": 2066,
          "decorators": [],
          "name": "Uppercase",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2102,
      "end": 2213,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 2107,
        "end": 2129,
        "decorators": [],
        "name": "EquivalentNonStringPat",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTemplateLiteralType",
        "start": 2132,
        "end": 2212,
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 2132,
            "end": 2137,
            "tail": false,
            "value": {
              "cooked": "AA",
              "raw": "AA"
            }
          },
          {
            "type": "TemplateElement",
            "start": 2159,
            "end": 2162,
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            }
          },
          {
            "type": "TemplateElement",
            "start": 2184,
            "end": 2187,
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            }
          },
          {
            "type": "TemplateElement",
            "start": 2210,
            "end": 2212,
            "tail": true,
            "value": {
              "cooked": "",
              "raw": ""
            }
          }
        ],
        "types": [
          {
            "type": "TSTypeReference",
            "start": 2137,
            "end": 2159,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 2146,
              "end": 2159,
              "params": [
                {
                  "type": "TSTemplateLiteralType",
                  "start": 2147,
                  "end": 2158,
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "start": 2147,
                      "end": 2150,
                      "tail": false,
                      "value": {
                        "cooked": "",
                        "raw": ""
                      }
                    },
                    {
                      "type": "TemplateElement",
                      "start": 2156,
                      "end": 2158,
                      "tail": true,
                      "value": {
                        "cooked": "",
                        "raw": ""
                      }
                    }
                  ],
                  "types": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 2150,
                      "end": 2156
                    }
                  ]
                }
              ]
            },
            "typeName": {
              "type": "Identifier",
              "start": 2137,
              "end": 2146,
              "decorators": [],
              "name": "Uppercase",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "TSTypeReference",
            "start": 2162,
            "end": 2184,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 2171,
              "end": 2184,
              "params": [
                {
                  "type": "TSTemplateLiteralType",
                  "start": 2172,
                  "end": 2183,
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "start": 2172,
                      "end": 2175,
                      "tail": false,
                      "value": {
                        "cooked": "",
                        "raw": ""
                      }
                    },
                    {
                      "type": "TemplateElement",
                      "start": 2181,
                      "end": 2183,
                      "tail": true,
                      "value": {
                        "cooked": "",
                        "raw": ""
                      }
                    }
                  ],
                  "types": [
                    {
                      "type": "TSBigIntKeyword",
                      "start": 2175,
                      "end": 2181
                    }
                  ]
                }
              ]
            },
            "typeName": {
              "type": "Identifier",
              "start": 2162,
              "end": 2171,
              "decorators": [],
              "name": "Uppercase",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "TSTypeReference",
            "start": 2187,
            "end": 2210,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 2196,
              "end": 2210,
              "params": [
                {
                  "type": "TSTemplateLiteralType",
                  "start": 2197,
                  "end": 2209,
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "start": 2197,
                      "end": 2200,
                      "tail": false,
                      "value": {
                        "cooked": "",
                        "raw": ""
                      }
                    },
                    {
                      "type": "TemplateElement",
                      "start": 2207,
                      "end": 2209,
                      "tail": true,
                      "value": {
                        "cooked": "",
                        "raw": ""
                      }
                    }
                  ],
                  "types": [
                    {
                      "type": "TSBooleanKeyword",
                      "start": 2200,
                      "end": 2207
                    }
                  ]
                }
              ]
            },
            "typeName": {
              "type": "Identifier",
              "start": 2187,
              "end": 2196,
              "decorators": [],
              "name": "Uppercase",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 2215,
      "end": 2326,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 2273,
        "end": 2326,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2303,
            "end": 2311,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 2303,
              "end": 2310,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 2303,
                "end": 2305,
                "decorators": [],
                "name": "x1",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 2308,
                "end": 2310,
                "decorators": [],
                "name": "x2",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 2316,
            "end": 2324,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 2316,
              "end": 2323,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 2316,
                "end": 2318,
                "decorators": [],
                "name": "x2",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 2321,
                "end": 2323,
                "decorators": [],
                "name": "x1",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2224,
        "end": 2226,
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2227,
          "end": 2243,
          "decorators": [],
          "name": "x1",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2229,
            "end": 2243,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2231,
              "end": 2243,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 2231,
                "end": 2243,
                "decorators": [],
                "name": "NonStringPat",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 2245,
          "end": 2271,
          "decorators": [],
          "name": "x2",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2247,
            "end": 2271,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2249,
              "end": 2271,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 2249,
                "end": 2271,
                "decorators": [],
                "name": "EquivalentNonStringPat",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 2381,
      "end": 3650,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 2704,
        "end": 3650,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2743,
            "end": 2761,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 2743,
              "end": 2760,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 2743,
                "end": 2750,
                "decorators": [],
                "name": "cap_str",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 2753,
                "end": 2760,
                "decorators": [],
                "name": "cap_tem",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 2766,
            "end": 2788,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 2766,
              "end": 2787,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 2766,
                "end": 2773,
                "decorators": [],
                "name": "cap_str",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 2776,
                "end": 2787,
                "decorators": [],
                "name": "cap_tem_map",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 2793,
            "end": 2816,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 2793,
              "end": 2815,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 2793,
                "end": 2800,
                "decorators": [],
                "name": "cap_str",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 2803,
                "end": 2815,
                "decorators": [],
                "name": "cap_tem_map2",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 2854,
            "end": 2876,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 2854,
              "end": 2875,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 2854,
                "end": 2861,
                "decorators": [],
                "name": "cap_tem",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 2864,
                "end": 2875,
                "decorators": [],
                "name": "cap_tem_map",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 2881,
            "end": 2904,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 2881,
              "end": 2903,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 2881,
                "end": 2888,
                "decorators": [],
                "name": "cap_tem",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 2891,
                "end": 2903,
                "decorators": [],
                "name": "cap_tem_map2",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 2909,
            "end": 2936,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 2909,
              "end": 2935,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 2909,
                "end": 2920,
                "decorators": [],
                "name": "cap_tem_map",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 2923,
                "end": 2935,
                "decorators": [],
                "name": "cap_tem_map2",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 2941,
            "end": 2963,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 2941,
              "end": 2962,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 2941,
                "end": 2952,
                "decorators": [],
                "name": "cap_tem_map",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 2955,
                "end": 2962,
                "decorators": [],
                "name": "cap_tem",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 2968,
            "end": 2995,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 2968,
              "end": 2994,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 2968,
                "end": 2980,
                "decorators": [],
                "name": "cap_tem_map2",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 2983,
                "end": 2994,
                "decorators": [],
                "name": "cap_tem_map",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 3000,
            "end": 3023,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 3000,
              "end": 3022,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 3000,
                "end": 3012,
                "decorators": [],
                "name": "cap_tem_map2",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 3015,
                "end": 3022,
                "decorators": [],
                "name": "cap_tem",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 3078,
            "end": 3096,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 3078,
              "end": 3095,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 3078,
                "end": 3085,
                "decorators": [],
                "name": "cap_tem",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 3088,
                "end": 3095,
                "decorators": [],
                "name": "cap_str",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 3101,
            "end": 3123,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 3101,
              "end": 3122,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 3101,
                "end": 3112,
                "decorators": [],
                "name": "cap_tem_map",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 3115,
                "end": 3122,
                "decorators": [],
                "name": "cap_str",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 3128,
            "end": 3151,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 3128,
              "end": 3150,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 3128,
                "end": 3140,
                "decorators": [],
                "name": "cap_tem_map2",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 3143,
                "end": 3150,
                "decorators": [],
                "name": "cap_str",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 3192,
            "end": 3214,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 3192,
              "end": 3213,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 3192,
                "end": 3201,
                "decorators": [],
                "name": "uncap_str",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 3204,
                "end": 3213,
                "decorators": [],
                "name": "uncap_tem",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 3219,
            "end": 3245,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 3219,
              "end": 3244,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 3219,
                "end": 3228,
                "decorators": [],
                "name": "uncap_str",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 3231,
                "end": 3244,
                "decorators": [],
                "name": "uncap_tem_map",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 3250,
            "end": 3277,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 3250,
              "end": 3276,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 3250,
                "end": 3259,
                "decorators": [],
                "name": "uncap_str",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 3262,
                "end": 3276,
                "decorators": [],
                "name": "uncap_tem_map2",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 3315,
            "end": 3341,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 3315,
              "end": 3340,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 3315,
                "end": 3324,
                "decorators": [],
                "name": "uncap_tem",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 3327,
                "end": 3340,
                "decorators": [],
                "name": "uncap_tem_map",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 3346,
            "end": 3373,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 3346,
              "end": 3372,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 3346,
                "end": 3355,
                "decorators": [],
                "name": "uncap_tem",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 3358,
                "end": 3372,
                "decorators": [],
                "name": "uncap_tem_map2",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 3378,
            "end": 3409,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 3378,
              "end": 3408,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 3378,
                "end": 3391,
                "decorators": [],
                "name": "uncap_tem_map",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 3394,
                "end": 3408,
                "decorators": [],
                "name": "uncap_tem_map2",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 3414,
            "end": 3440,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 3414,
              "end": 3439,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 3414,
                "end": 3427,
                "decorators": [],
                "name": "uncap_tem_map",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 3430,
                "end": 3439,
                "decorators": [],
                "name": "uncap_tem",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 3445,
            "end": 3476,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 3445,
              "end": 3475,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 3445,
                "end": 3459,
                "decorators": [],
                "name": "uncap_tem_map2",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 3462,
                "end": 3475,
                "decorators": [],
                "name": "uncap_tem_map",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 3481,
            "end": 3508,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 3481,
              "end": 3507,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 3481,
                "end": 3495,
                "decorators": [],
                "name": "uncap_tem_map2",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 3498,
                "end": 3507,
                "decorators": [],
                "name": "uncap_tem",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 3563,
            "end": 3585,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 3563,
              "end": 3584,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 3563,
                "end": 3572,
                "decorators": [],
                "name": "uncap_tem",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 3575,
                "end": 3584,
                "decorators": [],
                "name": "uncap_str",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 3590,
            "end": 3616,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 3590,
              "end": 3615,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 3590,
                "end": 3603,
                "decorators": [],
                "name": "uncap_tem_map",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 3606,
                "end": 3615,
                "decorators": [],
                "name": "uncap_str",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 3621,
            "end": 3648,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 3621,
              "end": 3647,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 3621,
                "end": 3635,
                "decorators": [],
                "name": "uncap_tem_map2",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 3638,
                "end": 3647,
                "decorators": [],
                "name": "uncap_str",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2390,
        "end": 2392,
        "decorators": [],
        "name": "f5",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2398,
          "end": 2419,
          "decorators": [],
          "name": "cap_tem",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2405,
            "end": 2419,
            "typeAnnotation": {
              "type": "TSTemplateLiteralType",
              "start": 2407,
              "end": 2419,
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 2407,
                  "end": 2411,
                  "tail": false,
                  "value": {
                    "cooked": "A",
                    "raw": "A"
                  }
                },
                {
                  "type": "TemplateElement",
                  "start": 2417,
                  "end": 2419,
                  "tail": true,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  }
                }
              ],
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 2411,
                  "end": 2417
                }
              ]
            }
          }
        },
        {
          "type": "Identifier",
          "start": 2425,
          "end": 2452,
          "decorators": [],
          "name": "cap_str",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2432,
            "end": 2452,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2434,
              "end": 2452,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 2444,
                "end": 2452,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 2445,
                    "end": 2451
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 2434,
                "end": 2444,
                "decorators": [],
                "name": "Capitalize",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 2458,
          "end": 2495,
          "decorators": [],
          "name": "cap_tem_map",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2469,
            "end": 2495,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2471,
              "end": 2495,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 2481,
                "end": 2495,
                "params": [
                  {
                    "type": "TSTemplateLiteralType",
                    "start": 2482,
                    "end": 2494,
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "start": 2482,
                        "end": 2486,
                        "tail": false,
                        "value": {
                          "cooked": "A",
                          "raw": "A"
                        }
                      },
                      {
                        "type": "TemplateElement",
                        "start": 2492,
                        "end": 2494,
                        "tail": true,
                        "value": {
                          "cooked": "",
                          "raw": ""
                        }
                      }
                    ],
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 2486,
                        "end": 2492
                      }
                    ]
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 2471,
                "end": 2481,
                "decorators": [],
                "name": "Capitalize",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 2501,
          "end": 2539,
          "decorators": [],
          "name": "cap_tem_map2",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2513,
            "end": 2539,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2515,
              "end": 2539,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 2525,
                "end": 2539,
                "params": [
                  {
                    "type": "TSTemplateLiteralType",
                    "start": 2526,
                    "end": 2538,
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "start": 2526,
                        "end": 2530,
                        "tail": false,
                        "value": {
                          "cooked": "a",
                          "raw": "a"
                        }
                      },
                      {
                        "type": "TemplateElement",
                        "start": 2536,
                        "end": 2538,
                        "tail": true,
                        "value": {
                          "cooked": "",
                          "raw": ""
                        }
                      }
                    ],
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 2530,
                        "end": 2536
                      }
                    ]
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 2515,
                "end": 2525,
                "decorators": [],
                "name": "Capitalize",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 2545,
          "end": 2568,
          "decorators": [],
          "name": "uncap_tem",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2554,
            "end": 2568,
            "typeAnnotation": {
              "type": "TSTemplateLiteralType",
              "start": 2556,
              "end": 2568,
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 2556,
                  "end": 2560,
                  "tail": false,
                  "value": {
                    "cooked": "a",
                    "raw": "a"
                  }
                },
                {
                  "type": "TemplateElement",
                  "start": 2566,
                  "end": 2568,
                  "tail": true,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  }
                }
              ],
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 2560,
                  "end": 2566
                }
              ]
            }
          }
        },
        {
          "type": "Identifier",
          "start": 2574,
          "end": 2605,
          "decorators": [],
          "name": "uncap_str",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2583,
            "end": 2605,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2585,
              "end": 2605,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 2597,
                "end": 2605,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 2598,
                    "end": 2604
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 2585,
                "end": 2597,
                "decorators": [],
                "name": "Uncapitalize",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 2611,
          "end": 2652,
          "decorators": [],
          "name": "uncap_tem_map",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2624,
            "end": 2652,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2626,
              "end": 2652,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 2638,
                "end": 2652,
                "params": [
                  {
                    "type": "TSTemplateLiteralType",
                    "start": 2639,
                    "end": 2651,
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "start": 2639,
                        "end": 2643,
                        "tail": false,
                        "value": {
                          "cooked": "A",
                          "raw": "A"
                        }
                      },
                      {
                        "type": "TemplateElement",
                        "start": 2649,
                        "end": 2651,
                        "tail": true,
                        "value": {
                          "cooked": "",
                          "raw": ""
                        }
                      }
                    ],
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 2643,
                        "end": 2649
                      }
                    ]
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 2626,
                "end": 2638,
                "decorators": [],
                "name": "Uncapitalize",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 2658,
          "end": 2700,
          "decorators": [],
          "name": "uncap_tem_map2",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2672,
            "end": 2700,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2674,
              "end": 2700,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 2686,
                "end": 2700,
                "params": [
                  {
                    "type": "TSTemplateLiteralType",
                    "start": 2687,
                    "end": 2699,
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "start": 2687,
                        "end": 2691,
                        "tail": false,
                        "value": {
                          "cooked": "a",
                          "raw": "a"
                        }
                      },
                      {
                        "type": "TemplateElement",
                        "start": 2697,
                        "end": 2699,
                        "tail": true,
                        "value": {
                          "cooked": "",
                          "raw": ""
                        }
                      }
                    ],
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 2691,
                        "end": 2697
                      }
                    ]
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 2674,
                "end": 2686,
                "decorators": [],
                "name": "Uncapitalize",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
