__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C1",
        "optional": false,
        "typeAnnotation": null,
        "start": 22,
        "end": 24
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
              "name": "property1",
              "optional": false,
              "typeAnnotation": null,
              "start": 31,
              "end": 40
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 42,
                "end": 48
              },
              "start": 40,
              "end": 48
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 31,
            "end": 49
          }
        ],
        "start": 25,
        "end": 51
      },
      "abstract": false,
      "declare": false,
      "start": 16,
      "end": 51
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "var1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 63,
                      "end": 65
                    },
                    "typeArguments": null,
                    "start": 63,
                    "end": 65
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 68,
                    "end": 74
                  }
                ],
                "start": 63,
                "end": 74
              },
              "start": 61,
              "end": 74
            },
            "start": 57,
            "end": 74
          },
          "init": null,
          "definite": false,
          "start": 57,
          "end": 74
        }
      ],
      "declare": false,
      "start": 53,
      "end": 75
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "var1",
            "optional": false,
            "typeAnnotation": null,
            "start": 80,
            "end": 84
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "constructor",
            "optional": false,
            "typeAnnotation": null,
            "start": 85,
            "end": 96
          },
          "optional": false,
          "computed": false,
          "start": 80,
          "end": 96
        },
        "operator": "==",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "C1",
          "optional": false,
          "typeAnnotation": null,
          "start": 100,
          "end": 102
        },
        "start": 80,
        "end": 102
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "var1",
              "optional": false,
              "typeAnnotation": null,
              "start": 110,
              "end": 114
            },
            "directive": null,
            "start": 110,
            "end": 115
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "var1",
                "optional": false,
                "typeAnnotation": null,
                "start": 126,
                "end": 130
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "property1",
                "optional": false,
                "typeAnnotation": null,
                "start": 131,
                "end": 140
              },
              "optional": false,
              "computed": false,
              "start": 126,
              "end": 140
            },
            "directive": null,
            "start": 126,
            "end": 141
          }
        ],
        "start": 104,
        "end": 153
      },
      "alternate": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "var1",
              "optional": false,
              "typeAnnotation": null,
              "start": 165,
              "end": 169
            },
            "directive": null,
            "start": 165,
            "end": 170
          }
        ],
        "start": 159,
        "end": 187
      },
      "start": 76,
      "end": 187
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "var1",
            "optional": false,
            "typeAnnotation": null,
            "start": 192,
            "end": 196
          },
          "property": {
            "type": "Literal",
            "value": "constructor",
            "raw": "\"constructor\"",
            "start": 197,
            "end": 210
          },
          "optional": false,
          "computed": true,
          "start": 192,
          "end": 211
        },
        "operator": "==",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "C1",
          "optional": false,
          "typeAnnotation": null,
          "start": 215,
          "end": 217
        },
        "start": 192,
        "end": 217
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "var1",
              "optional": false,
              "typeAnnotation": null,
              "start": 225,
              "end": 229
            },
            "directive": null,
            "start": 225,
            "end": 230
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "var1",
                "optional": false,
                "typeAnnotation": null,
                "start": 241,
                "end": 245
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "property1",
                "optional": false,
                "typeAnnotation": null,
                "start": 246,
                "end": 255
              },
              "optional": false,
              "computed": false,
              "start": 241,
              "end": 255
            },
            "directive": null,
            "start": 241,
            "end": 256
          }
        ],
        "start": 219,
        "end": 268
      },
      "alternate": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "var1",
              "optional": false,
              "typeAnnotation": null,
              "start": 280,
              "end": 284
            },
            "directive": null,
            "start": 280,
            "end": 285
          }
        ],
        "start": 274,
        "end": 302
      },
      "start": 188,
      "end": 302
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "var1",
            "optional": false,
            "typeAnnotation": null,
            "start": 307,
            "end": 311
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "constructor",
            "optional": false,
            "typeAnnotation": null,
            "start": 312,
            "end": 323
          },
          "optional": false,
          "computed": false,
          "start": 307,
          "end": 323
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "C1",
          "optional": false,
          "typeAnnotation": null,
          "start": 328,
          "end": 330
        },
        "start": 307,
        "end": 330
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "var1",
              "optional": false,
              "typeAnnotation": null,
              "start": 338,
              "end": 342
            },
            "directive": null,
            "start": 338,
            "end": 343
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "var1",
                "optional": false,
                "typeAnnotation": null,
                "start": 354,
                "end": 358
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "property1",
                "optional": false,
                "typeAnnotation": null,
                "start": 359,
                "end": 368
              },
              "optional": false,
              "computed": false,
              "start": 354,
              "end": 368
            },
            "directive": null,
            "start": 354,
            "end": 369
          }
        ],
        "start": 332,
        "end": 381
      },
      "alternate": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "var1",
              "optional": false,
              "typeAnnotation": null,
              "start": 393,
              "end": 397
            },
            "directive": null,
            "start": 393,
            "end": 398
          }
        ],
        "start": 387,
        "end": 415
      },
      "start": 303,
      "end": 415
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "var1",
            "optional": false,
            "typeAnnotation": null,
            "start": 420,
            "end": 424
          },
          "property": {
            "type": "Literal",
            "value": "constructor",
            "raw": "\"constructor\"",
            "start": 425,
            "end": 438
          },
          "optional": false,
          "computed": true,
          "start": 420,
          "end": 439
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "C1",
          "optional": false,
          "typeAnnotation": null,
          "start": 444,
          "end": 446
        },
        "start": 420,
        "end": 446
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "var1",
              "optional": false,
              "typeAnnotation": null,
              "start": 454,
              "end": 458
            },
            "directive": null,
            "start": 454,
            "end": 459
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "var1",
                "optional": false,
                "typeAnnotation": null,
                "start": 470,
                "end": 474
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "property1",
                "optional": false,
                "typeAnnotation": null,
                "start": 475,
                "end": 484
              },
              "optional": false,
              "computed": false,
              "start": 470,
              "end": 484
            },
            "directive": null,
            "start": 470,
            "end": 485
          }
        ],
        "start": 448,
        "end": 497
      },
      "alternate": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "var1",
              "optional": false,
              "typeAnnotation": null,
              "start": 509,
              "end": 513
            },
            "directive": null,
            "start": 509,
            "end": 514
          }
        ],
        "start": 503,
        "end": 531
      },
      "start": 416,
      "end": 531
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "C1",
          "optional": false,
          "typeAnnotation": null,
          "start": 536,
          "end": 538
        },
        "operator": "==",
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "var1",
            "optional": false,
            "typeAnnotation": null,
            "start": 542,
            "end": 546
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "constructor",
            "optional": false,
            "typeAnnotation": null,
            "start": 547,
            "end": 558
          },
          "optional": false,
          "computed": false,
          "start": 542,
          "end": 558
        },
        "start": 536,
        "end": 558
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "var1",
              "optional": false,
              "typeAnnotation": null,
              "start": 566,
              "end": 570
            },
            "directive": null,
            "start": 566,
            "end": 571
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "var1",
                "optional": false,
                "typeAnnotation": null,
                "start": 582,
                "end": 586
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "property1",
                "optional": false,
                "typeAnnotation": null,
                "start": 587,
                "end": 596
              },
              "optional": false,
              "computed": false,
              "start": 582,
              "end": 596
            },
            "directive": null,
            "start": 582,
            "end": 597
          }
        ],
        "start": 560,
        "end": 609
      },
      "alternate": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "var1",
              "optional": false,
              "typeAnnotation": null,
              "start": 621,
              "end": 625
            },
            "directive": null,
            "start": 621,
            "end": 626
          }
        ],
        "start": 615,
        "end": 643
      },
      "start": 532,
      "end": 643
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "C1",
          "optional": false,
          "typeAnnotation": null,
          "start": 648,
          "end": 650
        },
        "operator": "==",
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "var1",
            "optional": false,
            "typeAnnotation": null,
            "start": 654,
            "end": 658
          },
          "property": {
            "type": "Literal",
            "value": "constructor",
            "raw": "\"constructor\"",
            "start": 659,
            "end": 672
          },
          "optional": false,
          "computed": true,
          "start": 654,
          "end": 673
        },
        "start": 648,
        "end": 673
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "var1",
              "optional": false,
              "typeAnnotation": null,
              "start": 681,
              "end": 685
            },
            "directive": null,
            "start": 681,
            "end": 686
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "var1",
                "optional": false,
                "typeAnnotation": null,
                "start": 697,
                "end": 701
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "property1",
                "optional": false,
                "typeAnnotation": null,
                "start": 702,
                "end": 711
              },
              "optional": false,
              "computed": false,
              "start": 697,
              "end": 711
            },
            "directive": null,
            "start": 697,
            "end": 712
          }
        ],
        "start": 675,
        "end": 724
      },
      "alternate": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "var1",
              "optional": false,
              "typeAnnotation": null,
              "start": 736,
              "end": 740
            },
            "directive": null,
            "start": 736,
            "end": 741
          }
        ],
        "start": 730,
        "end": 758
      },
      "start": 644,
      "end": 758
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "C1",
          "optional": false,
          "typeAnnotation": null,
          "start": 763,
          "end": 765
        },
        "operator": "===",
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "var1",
            "optional": false,
            "typeAnnotation": null,
            "start": 770,
            "end": 774
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "constructor",
            "optional": false,
            "typeAnnotation": null,
            "start": 775,
            "end": 786
          },
          "optional": false,
          "computed": false,
          "start": 770,
          "end": 786
        },
        "start": 763,
        "end": 786
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "var1",
              "optional": false,
              "typeAnnotation": null,
              "start": 794,
              "end": 798
            },
            "directive": null,
            "start": 794,
            "end": 799
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "var1",
                "optional": false,
                "typeAnnotation": null,
                "start": 810,
                "end": 814
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "property1",
                "optional": false,
                "typeAnnotation": null,
                "start": 815,
                "end": 824
              },
              "optional": false,
              "computed": false,
              "start": 810,
              "end": 824
            },
            "directive": null,
            "start": 810,
            "end": 825
          }
        ],
        "start": 788,
        "end": 837
      },
      "alternate": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "var1",
              "optional": false,
              "typeAnnotation": null,
              "start": 849,
              "end": 853
            },
            "directive": null,
            "start": 849,
            "end": 854
          }
        ],
        "start": 843,
        "end": 871
      },
      "start": 759,
      "end": 871
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "C1",
          "optional": false,
          "typeAnnotation": null,
          "start": 876,
          "end": 878
        },
        "operator": "===",
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "var1",
            "optional": false,
            "typeAnnotation": null,
            "start": 883,
            "end": 887
          },
          "property": {
            "type": "Literal",
            "value": "constructor",
            "raw": "\"constructor\"",
            "start": 888,
            "end": 901
          },
          "optional": false,
          "computed": true,
          "start": 883,
          "end": 902
        },
        "start": 876,
        "end": 902
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "var1",
              "optional": false,
              "typeAnnotation": null,
              "start": 910,
              "end": 914
            },
            "directive": null,
            "start": 910,
            "end": 915
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "var1",
                "optional": false,
                "typeAnnotation": null,
                "start": 926,
                "end": 930
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "property1",
                "optional": false,
                "typeAnnotation": null,
                "start": 931,
                "end": 940
              },
              "optional": false,
              "computed": false,
              "start": 926,
              "end": 940
            },
            "directive": null,
            "start": 926,
            "end": 941
          }
        ],
        "start": 904,
        "end": 953
      },
      "alternate": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "var1",
              "optional": false,
              "typeAnnotation": null,
              "start": 965,
              "end": 969
            },
            "directive": null,
            "start": 965,
            "end": 970
          }
        ],
        "start": 959,
        "end": 987
      },
      "start": 872,
      "end": 987
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "var1",
            "optional": false,
            "typeAnnotation": null,
            "start": 993,
            "end": 997
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "constructor",
            "optional": false,
            "typeAnnotation": null,
            "start": 998,
            "end": 1009
          },
          "optional": false,
          "computed": false,
          "start": 993,
          "end": 1009
        },
        "operator": "!=",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "C1",
          "optional": false,
          "typeAnnotation": null,
          "start": 1013,
          "end": 1015
        },
        "start": 993,
        "end": 1015
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "var1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1023,
              "end": 1027
            },
            "directive": null,
            "start": 1023,
            "end": 1028
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "var1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1048,
                "end": 1052
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "property1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1053,
                "end": 1062
              },
              "optional": false,
              "computed": false,
              "start": 1048,
              "end": 1062
            },
            "directive": null,
            "start": 1048,
            "end": 1063
          }
        ],
        "start": 1017,
        "end": 1074
      },
      "alternate": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "var1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1086,
              "end": 1090
            },
            "directive": null,
            "start": 1086,
            "end": 1091
          }
        ],
        "start": 1080,
        "end": 1099
      },
      "start": 989,
      "end": 1099
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "var1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1104,
            "end": 1108
          },
          "property": {
            "type": "Literal",
            "value": "constructor",
            "raw": "\"constructor\"",
            "start": 1109,
            "end": 1122
          },
          "optional": false,
          "computed": true,
          "start": 1104,
          "end": 1123
        },
        "operator": "!=",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "C1",
          "optional": false,
          "typeAnnotation": null,
          "start": 1127,
          "end": 1129
        },
        "start": 1104,
        "end": 1129
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "var1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1137,
              "end": 1141
            },
            "directive": null,
            "start": 1137,
            "end": 1142
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "var1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1162,
                "end": 1166
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "property1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1167,
                "end": 1176
              },
              "optional": false,
              "computed": false,
              "start": 1162,
              "end": 1176
            },
            "directive": null,
            "start": 1162,
            "end": 1177
          }
        ],
        "start": 1131,
        "end": 1188
      },
      "alternate": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "var1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1200,
              "end": 1204
            },
            "directive": null,
            "start": 1200,
            "end": 1205
          }
        ],
        "start": 1194,
        "end": 1213
      },
      "start": 1100,
      "end": 1213
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "var1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1218,
            "end": 1222
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "constructor",
            "optional": false,
            "typeAnnotation": null,
            "start": 1223,
            "end": 1234
          },
          "optional": false,
          "computed": false,
          "start": 1218,
          "end": 1234
        },
        "operator": "!==",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "C1",
          "optional": false,
          "typeAnnotation": null,
          "start": 1239,
          "end": 1241
        },
        "start": 1218,
        "end": 1241
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "var1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1249,
              "end": 1253
            },
            "directive": null,
            "start": 1249,
            "end": 1254
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "var1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1274,
                "end": 1278
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "property1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1279,
                "end": 1288
              },
              "optional": false,
              "computed": false,
              "start": 1274,
              "end": 1288
            },
            "directive": null,
            "start": 1274,
            "end": 1289
          }
        ],
        "start": 1243,
        "end": 1300
      },
      "alternate": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "var1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1312,
              "end": 1316
            },
            "directive": null,
            "start": 1312,
            "end": 1317
          }
        ],
        "start": 1306,
        "end": 1325
      },
      "start": 1214,
      "end": 1325
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "var1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1330,
            "end": 1334
          },
          "property": {
            "type": "Literal",
            "value": "constructor",
            "raw": "\"constructor\"",
            "start": 1335,
            "end": 1348
          },
          "optional": false,
          "computed": true,
          "start": 1330,
          "end": 1349
        },
        "operator": "!==",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "C1",
          "optional": false,
          "typeAnnotation": null,
          "start": 1354,
          "end": 1356
        },
        "start": 1330,
        "end": 1356
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "var1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1364,
              "end": 1368
            },
            "directive": null,
            "start": 1364,
            "end": 1369
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "var1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1389,
                "end": 1393
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "property1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1394,
                "end": 1403
              },
              "optional": false,
              "computed": false,
              "start": 1389,
              "end": 1403
            },
            "directive": null,
            "start": 1389,
            "end": 1404
          }
        ],
        "start": 1358,
        "end": 1415
      },
      "alternate": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "var1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1427,
              "end": 1431
            },
            "directive": null,
            "start": 1427,
            "end": 1432
          }
        ],
        "start": 1421,
        "end": 1440
      },
      "start": 1326,
      "end": 1440
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "C1",
          "optional": false,
          "typeAnnotation": null,
          "start": 1445,
          "end": 1447
        },
        "operator": "!=",
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "var1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1451,
            "end": 1455
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "constructor",
            "optional": false,
            "typeAnnotation": null,
            "start": 1456,
            "end": 1467
          },
          "optional": false,
          "computed": false,
          "start": 1451,
          "end": 1467
        },
        "start": 1445,
        "end": 1467
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "var1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1475,
              "end": 1479
            },
            "directive": null,
            "start": 1475,
            "end": 1480
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "var1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1500,
                "end": 1504
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "property1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1505,
                "end": 1514
              },
              "optional": false,
              "computed": false,
              "start": 1500,
              "end": 1514
            },
            "directive": null,
            "start": 1500,
            "end": 1515
          }
        ],
        "start": 1469,
        "end": 1526
      },
      "alternate": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "var1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1538,
              "end": 1542
            },
            "directive": null,
            "start": 1538,
            "end": 1543
          }
        ],
        "start": 1532,
        "end": 1551
      },
      "start": 1441,
      "end": 1551
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "C1",
          "optional": false,
          "typeAnnotation": null,
          "start": 1556,
          "end": 1558
        },
        "operator": "!=",
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "var1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1562,
            "end": 1566
          },
          "property": {
            "type": "Literal",
            "value": "constructor",
            "raw": "\"constructor\"",
            "start": 1567,
            "end": 1580
          },
          "optional": false,
          "computed": true,
          "start": 1562,
          "end": 1581
        },
        "start": 1556,
        "end": 1581
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "var1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1589,
              "end": 1593
            },
            "directive": null,
            "start": 1589,
            "end": 1594
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "var1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1614,
                "end": 1618
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "property1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1619,
                "end": 1628
              },
              "optional": false,
              "computed": false,
              "start": 1614,
              "end": 1628
            },
            "directive": null,
            "start": 1614,
            "end": 1629
          }
        ],
        "start": 1583,
        "end": 1640
      },
      "alternate": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "var1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1652,
              "end": 1656
            },
            "directive": null,
            "start": 1652,
            "end": 1657
          }
        ],
        "start": 1646,
        "end": 1665
      },
      "start": 1552,
      "end": 1665
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "C1",
          "optional": false,
          "typeAnnotation": null,
          "start": 1670,
          "end": 1672
        },
        "operator": "!==",
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "var1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1677,
            "end": 1681
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "constructor",
            "optional": false,
            "typeAnnotation": null,
            "start": 1682,
            "end": 1693
          },
          "optional": false,
          "computed": false,
          "start": 1677,
          "end": 1693
        },
        "start": 1670,
        "end": 1693
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "var1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1701,
              "end": 1705
            },
            "directive": null,
            "start": 1701,
            "end": 1706
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "var1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1726,
                "end": 1730
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "property1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1731,
                "end": 1740
              },
              "optional": false,
              "computed": false,
              "start": 1726,
              "end": 1740
            },
            "directive": null,
            "start": 1726,
            "end": 1741
          }
        ],
        "start": 1695,
        "end": 1752
      },
      "alternate": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "var1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1764,
              "end": 1768
            },
            "directive": null,
            "start": 1764,
            "end": 1769
          }
        ],
        "start": 1758,
        "end": 1777
      },
      "start": 1666,
      "end": 1777
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "C1",
          "optional": false,
          "typeAnnotation": null,
          "start": 1782,
          "end": 1784
        },
        "operator": "!==",
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "var1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1789,
            "end": 1793
          },
          "property": {
            "type": "Literal",
            "value": "constructor",
            "raw": "\"constructor\"",
            "start": 1794,
            "end": 1807
          },
          "optional": false,
          "computed": true,
          "start": 1789,
          "end": 1808
        },
        "start": 1782,
        "end": 1808
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "var1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1816,
              "end": 1820
            },
            "directive": null,
            "start": 1816,
            "end": 1821
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "var1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1841,
                "end": 1845
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "property1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1846,
                "end": 1855
              },
              "optional": false,
              "computed": false,
              "start": 1841,
              "end": 1855
            },
            "directive": null,
            "start": 1841,
            "end": 1856
          }
        ],
        "start": 1810,
        "end": 1867
      },
      "alternate": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "var1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1879,
              "end": 1883
            },
            "directive": null,
            "start": 1879,
            "end": 1884
          }
        ],
        "start": 1873,
        "end": 1892
      },
      "start": 1778,
      "end": 1892
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 1925,
        "end": 1928
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "instance",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Function",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1939,
                    "end": 1947
                  },
                  "typeArguments": null,
                  "start": 1939,
                  "end": 1947
                },
                {
                  "type": "TSObjectKeyword",
                  "start": 1950,
                  "end": 1956
                }
              ],
              "start": 1939,
              "end": 1956
            },
            "start": 1937,
            "end": 1956
          },
          "start": 1929,
          "end": 1956
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "UnaryExpression",
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "instance",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1975,
                  "end": 1983
                },
                "prefix": true,
                "start": 1968,
                "end": 1983
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "function",
                "raw": "'function'",
                "start": 1988,
                "end": 1998
              },
              "start": 1968,
              "end": 1998
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "LogicalExpression",
                    "left": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "instance",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2014,
                          "end": 2022
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "prototype",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2023,
                          "end": 2032
                        },
                        "optional": false,
                        "computed": false,
                        "start": 2014,
                        "end": 2032
                      },
                      "operator": "==",
                      "right": {
                        "type": "Literal",
                        "value": null,
                        "raw": "null",
                        "start": 2036,
                        "end": 2040
                      },
                      "start": 2014,
                      "end": 2040
                    },
                    "operator": "||",
                    "right": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "instance",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2044,
                            "end": 2052
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "prototype",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2053,
                            "end": 2062
                          },
                          "optional": false,
                          "computed": false,
                          "start": 2044,
                          "end": 2062
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "constructor",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2063,
                          "end": 2074
                        },
                        "optional": false,
                        "computed": false,
                        "start": 2044,
                        "end": 2074
                      },
                      "operator": "==",
                      "right": {
                        "type": "Literal",
                        "value": null,
                        "raw": "null",
                        "start": 2078,
                        "end": 2082
                      },
                      "start": 2044,
                      "end": 2082
                    },
                    "start": 2014,
                    "end": 2082
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "instance",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2105,
                            "end": 2113
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "length",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2114,
                            "end": 2120
                          },
                          "optional": false,
                          "computed": false,
                          "start": 2105,
                          "end": 2120
                        },
                        "start": 2098,
                        "end": 2121
                      }
                    ],
                    "start": 2084,
                    "end": 2131
                  },
                  "alternate": null,
                  "start": 2010,
                  "end": 2131
                }
              ],
              "start": 2000,
              "end": 2137
            },
            "alternate": null,
            "start": 1964,
            "end": 2137
          }
        ],
        "start": 1958,
        "end": 2139
      },
      "expression": false,
      "start": 1916,
      "end": 2139
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 16,
  "end": 2139
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 16,
    "end": 21
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 22,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 25,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "property1",
    "start": 31,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 40,
    "end": 41
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 42,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 48,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 50,
    "end": 51
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 53,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 57,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 61,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 63,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 66,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 68,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 74,
    "end": 75
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 76,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 79,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 80,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 84,
    "end": 85
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 85,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 97,
    "end": 99
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 100,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 102,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 104,
    "end": 105
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 110,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 114,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 126,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 130,
    "end": 131
  },
  {
    "type": "Identifier",
    "value": "property1",
    "start": 131,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 140,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 152,
    "end": 153
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 154,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 159,
    "end": 160
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 165,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 169,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 186,
    "end": 187
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 188,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 191,
    "end": 192
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 192,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 196,
    "end": 197
  },
  {
    "type": "String",
    "value": "\"constructor\"",
    "start": 197,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 210,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 212,
    "end": 214
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 215,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 217,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 219,
    "end": 220
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 225,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 229,
    "end": 230
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 241,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 245,
    "end": 246
  },
  {
    "type": "Identifier",
    "value": "property1",
    "start": 246,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 255,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 267,
    "end": 268
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 269,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 274,
    "end": 275
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 280,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 284,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 301,
    "end": 302
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 303,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 306,
    "end": 307
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 307,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 311,
    "end": 312
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 312,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 324,
    "end": 327
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 328,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 330,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 332,
    "end": 333
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 338,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 342,
    "end": 343
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 354,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 358,
    "end": 359
  },
  {
    "type": "Identifier",
    "value": "property1",
    "start": 359,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 368,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 380,
    "end": 381
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 382,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 387,
    "end": 388
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 393,
    "end": 397
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 397,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 414,
    "end": 415
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 416,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 419,
    "end": 420
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 420,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 424,
    "end": 425
  },
  {
    "type": "String",
    "value": "\"constructor\"",
    "start": 425,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 438,
    "end": 439
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 440,
    "end": 443
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 444,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 446,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 448,
    "end": 449
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 454,
    "end": 458
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 458,
    "end": 459
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 470,
    "end": 474
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 474,
    "end": 475
  },
  {
    "type": "Identifier",
    "value": "property1",
    "start": 475,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 484,
    "end": 485
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 496,
    "end": 497
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 498,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 503,
    "end": 504
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 509,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 513,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 530,
    "end": 531
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 532,
    "end": 534
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 535,
    "end": 536
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 536,
    "end": 538
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 539,
    "end": 541
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 542,
    "end": 546
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 546,
    "end": 547
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 547,
    "end": 558
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 558,
    "end": 559
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 560,
    "end": 561
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 566,
    "end": 570
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 570,
    "end": 571
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 582,
    "end": 586
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 586,
    "end": 587
  },
  {
    "type": "Identifier",
    "value": "property1",
    "start": 587,
    "end": 596
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 596,
    "end": 597
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 608,
    "end": 609
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 610,
    "end": 614
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 615,
    "end": 616
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 621,
    "end": 625
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 625,
    "end": 626
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 642,
    "end": 643
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 644,
    "end": 646
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 647,
    "end": 648
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 648,
    "end": 650
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 651,
    "end": 653
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 654,
    "end": 658
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 658,
    "end": 659
  },
  {
    "type": "String",
    "value": "\"constructor\"",
    "start": 659,
    "end": 672
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 672,
    "end": 673
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 673,
    "end": 674
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 675,
    "end": 676
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 681,
    "end": 685
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 685,
    "end": 686
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 697,
    "end": 701
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 701,
    "end": 702
  },
  {
    "type": "Identifier",
    "value": "property1",
    "start": 702,
    "end": 711
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 711,
    "end": 712
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 723,
    "end": 724
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 725,
    "end": 729
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 730,
    "end": 731
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 736,
    "end": 740
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 740,
    "end": 741
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 757,
    "end": 758
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 759,
    "end": 761
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 762,
    "end": 763
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 763,
    "end": 765
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 766,
    "end": 769
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 770,
    "end": 774
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 774,
    "end": 775
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 775,
    "end": 786
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 786,
    "end": 787
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 788,
    "end": 789
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 794,
    "end": 798
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 798,
    "end": 799
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 810,
    "end": 814
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 814,
    "end": 815
  },
  {
    "type": "Identifier",
    "value": "property1",
    "start": 815,
    "end": 824
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 824,
    "end": 825
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 836,
    "end": 837
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 838,
    "end": 842
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 843,
    "end": 844
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 849,
    "end": 853
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 853,
    "end": 854
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 870,
    "end": 871
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 872,
    "end": 874
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 875,
    "end": 876
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 876,
    "end": 878
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 879,
    "end": 882
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 883,
    "end": 887
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 887,
    "end": 888
  },
  {
    "type": "String",
    "value": "\"constructor\"",
    "start": 888,
    "end": 901
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 901,
    "end": 902
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 902,
    "end": 903
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 904,
    "end": 905
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 910,
    "end": 914
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 914,
    "end": 915
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 926,
    "end": 930
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 930,
    "end": 931
  },
  {
    "type": "Identifier",
    "value": "property1",
    "start": 931,
    "end": 940
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 940,
    "end": 941
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 952,
    "end": 953
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 954,
    "end": 958
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 959,
    "end": 960
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 965,
    "end": 969
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 969,
    "end": 970
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 986,
    "end": 987
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 989,
    "end": 991
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 992,
    "end": 993
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 993,
    "end": 997
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 997,
    "end": 998
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 998,
    "end": 1009
  },
  {
    "type": "Punctuator",
    "value": "!=",
    "start": 1010,
    "end": 1012
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 1013,
    "end": 1015
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1015,
    "end": 1016
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1017,
    "end": 1018
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 1023,
    "end": 1027
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1027,
    "end": 1028
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 1048,
    "end": 1052
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1052,
    "end": 1053
  },
  {
    "type": "Identifier",
    "value": "property1",
    "start": 1053,
    "end": 1062
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1062,
    "end": 1063
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1073,
    "end": 1074
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1075,
    "end": 1079
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1080,
    "end": 1081
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 1086,
    "end": 1090
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1090,
    "end": 1091
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1098,
    "end": 1099
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1100,
    "end": 1102
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1103,
    "end": 1104
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 1104,
    "end": 1108
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1108,
    "end": 1109
  },
  {
    "type": "String",
    "value": "\"constructor\"",
    "start": 1109,
    "end": 1122
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1122,
    "end": 1123
  },
  {
    "type": "Punctuator",
    "value": "!=",
    "start": 1124,
    "end": 1126
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 1127,
    "end": 1129
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1129,
    "end": 1130
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1131,
    "end": 1132
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 1137,
    "end": 1141
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1141,
    "end": 1142
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 1162,
    "end": 1166
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1166,
    "end": 1167
  },
  {
    "type": "Identifier",
    "value": "property1",
    "start": 1167,
    "end": 1176
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1176,
    "end": 1177
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1187,
    "end": 1188
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1189,
    "end": 1193
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1194,
    "end": 1195
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 1200,
    "end": 1204
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1204,
    "end": 1205
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1212,
    "end": 1213
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1214,
    "end": 1216
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1217,
    "end": 1218
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 1218,
    "end": 1222
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1222,
    "end": 1223
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1223,
    "end": 1234
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 1235,
    "end": 1238
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 1239,
    "end": 1241
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1241,
    "end": 1242
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1243,
    "end": 1244
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 1249,
    "end": 1253
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1253,
    "end": 1254
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 1274,
    "end": 1278
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1278,
    "end": 1279
  },
  {
    "type": "Identifier",
    "value": "property1",
    "start": 1279,
    "end": 1288
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1288,
    "end": 1289
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1299,
    "end": 1300
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1301,
    "end": 1305
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1306,
    "end": 1307
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 1312,
    "end": 1316
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1316,
    "end": 1317
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1324,
    "end": 1325
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1326,
    "end": 1328
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1329,
    "end": 1330
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 1330,
    "end": 1334
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1334,
    "end": 1335
  },
  {
    "type": "String",
    "value": "\"constructor\"",
    "start": 1335,
    "end": 1348
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1348,
    "end": 1349
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 1350,
    "end": 1353
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 1354,
    "end": 1356
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1356,
    "end": 1357
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1358,
    "end": 1359
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 1364,
    "end": 1368
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1368,
    "end": 1369
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 1389,
    "end": 1393
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1393,
    "end": 1394
  },
  {
    "type": "Identifier",
    "value": "property1",
    "start": 1394,
    "end": 1403
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1403,
    "end": 1404
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1414,
    "end": 1415
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1416,
    "end": 1420
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1421,
    "end": 1422
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 1427,
    "end": 1431
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1431,
    "end": 1432
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1439,
    "end": 1440
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1441,
    "end": 1443
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1444,
    "end": 1445
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 1445,
    "end": 1447
  },
  {
    "type": "Punctuator",
    "value": "!=",
    "start": 1448,
    "end": 1450
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 1451,
    "end": 1455
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1455,
    "end": 1456
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1456,
    "end": 1467
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1467,
    "end": 1468
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1469,
    "end": 1470
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 1475,
    "end": 1479
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1479,
    "end": 1480
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 1500,
    "end": 1504
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1504,
    "end": 1505
  },
  {
    "type": "Identifier",
    "value": "property1",
    "start": 1505,
    "end": 1514
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1514,
    "end": 1515
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1525,
    "end": 1526
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1527,
    "end": 1531
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1532,
    "end": 1533
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 1538,
    "end": 1542
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1542,
    "end": 1543
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1550,
    "end": 1551
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1552,
    "end": 1554
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1555,
    "end": 1556
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 1556,
    "end": 1558
  },
  {
    "type": "Punctuator",
    "value": "!=",
    "start": 1559,
    "end": 1561
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 1562,
    "end": 1566
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1566,
    "end": 1567
  },
  {
    "type": "String",
    "value": "\"constructor\"",
    "start": 1567,
    "end": 1580
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1580,
    "end": 1581
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1581,
    "end": 1582
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1583,
    "end": 1584
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 1589,
    "end": 1593
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1593,
    "end": 1594
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 1614,
    "end": 1618
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1618,
    "end": 1619
  },
  {
    "type": "Identifier",
    "value": "property1",
    "start": 1619,
    "end": 1628
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1628,
    "end": 1629
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1639,
    "end": 1640
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1641,
    "end": 1645
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1646,
    "end": 1647
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 1652,
    "end": 1656
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1656,
    "end": 1657
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1664,
    "end": 1665
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1666,
    "end": 1668
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1669,
    "end": 1670
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 1670,
    "end": 1672
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 1673,
    "end": 1676
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 1677,
    "end": 1681
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1681,
    "end": 1682
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1682,
    "end": 1693
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1693,
    "end": 1694
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1695,
    "end": 1696
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 1701,
    "end": 1705
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1705,
    "end": 1706
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 1726,
    "end": 1730
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1730,
    "end": 1731
  },
  {
    "type": "Identifier",
    "value": "property1",
    "start": 1731,
    "end": 1740
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1740,
    "end": 1741
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1751,
    "end": 1752
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1753,
    "end": 1757
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1758,
    "end": 1759
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 1764,
    "end": 1768
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1768,
    "end": 1769
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1776,
    "end": 1777
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1778,
    "end": 1780
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1781,
    "end": 1782
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 1782,
    "end": 1784
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 1785,
    "end": 1788
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 1789,
    "end": 1793
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1793,
    "end": 1794
  },
  {
    "type": "String",
    "value": "\"constructor\"",
    "start": 1794,
    "end": 1807
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1807,
    "end": 1808
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1808,
    "end": 1809
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1810,
    "end": 1811
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 1816,
    "end": 1820
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1820,
    "end": 1821
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 1841,
    "end": 1845
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1845,
    "end": 1846
  },
  {
    "type": "Identifier",
    "value": "property1",
    "start": 1846,
    "end": 1855
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1855,
    "end": 1856
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1866,
    "end": 1867
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1868,
    "end": 1872
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1873,
    "end": 1874
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 1879,
    "end": 1883
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1883,
    "end": 1884
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1891,
    "end": 1892
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1916,
    "end": 1924
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1925,
    "end": 1928
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1928,
    "end": 1929
  },
  {
    "type": "Identifier",
    "value": "instance",
    "start": 1929,
    "end": 1937
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1937,
    "end": 1938
  },
  {
    "type": "Identifier",
    "value": "Function",
    "start": 1939,
    "end": 1947
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1948,
    "end": 1949
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 1950,
    "end": 1956
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1956,
    "end": 1957
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1958,
    "end": 1959
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1964,
    "end": 1966
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1967,
    "end": 1968
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1968,
    "end": 1974
  },
  {
    "type": "Identifier",
    "value": "instance",
    "start": 1975,
    "end": 1983
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1984,
    "end": 1987
  },
  {
    "type": "String",
    "value": "'function'",
    "start": 1988,
    "end": 1998
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1998,
    "end": 1999
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2000,
    "end": 2001
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2010,
    "end": 2012
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2013,
    "end": 2014
  },
  {
    "type": "Identifier",
    "value": "instance",
    "start": 2014,
    "end": 2022
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2022,
    "end": 2023
  },
  {
    "type": "Identifier",
    "value": "prototype",
    "start": 2023,
    "end": 2032
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 2033,
    "end": 2035
  },
  {
    "type": "Null",
    "value": "null",
    "start": 2036,
    "end": 2040
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 2041,
    "end": 2043
  },
  {
    "type": "Identifier",
    "value": "instance",
    "start": 2044,
    "end": 2052
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2052,
    "end": 2053
  },
  {
    "type": "Identifier",
    "value": "prototype",
    "start": 2053,
    "end": 2062
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2062,
    "end": 2063
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 2063,
    "end": 2074
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 2075,
    "end": 2077
  },
  {
    "type": "Null",
    "value": "null",
    "start": 2078,
    "end": 2082
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2082,
    "end": 2083
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2084,
    "end": 2085
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2098,
    "end": 2104
  },
  {
    "type": "Identifier",
    "value": "instance",
    "start": 2105,
    "end": 2113
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2113,
    "end": 2114
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 2114,
    "end": 2120
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2120,
    "end": 2121
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2130,
    "end": 2131
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2136,
    "end": 2137
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2138,
    "end": 2139
  }
]
```
