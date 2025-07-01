__ESTREE_TEST__:PASS:
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
