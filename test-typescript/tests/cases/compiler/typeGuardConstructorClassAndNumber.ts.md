__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 16,
  "end": 2140,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 16,
      "end": 51,
      "id": {
        "type": "Identifier",
        "start": 22,
        "end": 24,
        "name": "C1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 25,
        "end": 51,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 31,
            "end": 49,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 31,
              "end": 40,
              "name": "property1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 40,
              "end": 48,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 42,
                "end": 48
              }
            },
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "VariableDeclaration",
      "start": 53,
      "end": 75,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 57,
          "end": 74,
          "id": {
            "type": "Identifier",
            "start": 57,
            "end": 74,
            "name": "var1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 61,
              "end": 74,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 63,
                "end": 74,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 63,
                    "end": 65,
                    "typeName": {
                      "type": "Identifier",
                      "start": 63,
                      "end": 65,
                      "name": "C1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 68,
                    "end": 74
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "IfStatement",
      "start": 76,
      "end": 187,
      "test": {
        "type": "BinaryExpression",
        "start": 80,
        "end": 102,
        "left": {
          "type": "MemberExpression",
          "start": 80,
          "end": 96,
          "object": {
            "type": "Identifier",
            "start": 80,
            "end": 84,
            "name": "var1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 85,
            "end": 96,
            "name": "constructor",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "operator": "==",
        "right": {
          "type": "Identifier",
          "start": 100,
          "end": 102,
          "name": "C1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 104,
        "end": 153,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 110,
            "end": 115,
            "expression": {
              "type": "Identifier",
              "start": 110,
              "end": 114,
              "name": "var1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 126,
            "end": 141,
            "expression": {
              "type": "MemberExpression",
              "start": 126,
              "end": 140,
              "object": {
                "type": "Identifier",
                "start": 126,
                "end": 130,
                "name": "var1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 131,
                "end": 140,
                "name": "property1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "alternate": {
        "type": "BlockStatement",
        "start": 159,
        "end": 187,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 165,
            "end": 170,
            "expression": {
              "type": "Identifier",
              "start": 165,
              "end": 169,
              "name": "var1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "IfStatement",
      "start": 188,
      "end": 302,
      "test": {
        "type": "BinaryExpression",
        "start": 192,
        "end": 217,
        "left": {
          "type": "MemberExpression",
          "start": 192,
          "end": 211,
          "object": {
            "type": "Identifier",
            "start": 192,
            "end": 196,
            "name": "var1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Literal",
            "start": 197,
            "end": 210,
            "value": "constructor",
            "raw": "\"constructor\""
          },
          "computed": true,
          "optional": false
        },
        "operator": "==",
        "right": {
          "type": "Identifier",
          "start": 215,
          "end": 217,
          "name": "C1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 219,
        "end": 268,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 225,
            "end": 230,
            "expression": {
              "type": "Identifier",
              "start": 225,
              "end": 229,
              "name": "var1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 241,
            "end": 256,
            "expression": {
              "type": "MemberExpression",
              "start": 241,
              "end": 255,
              "object": {
                "type": "Identifier",
                "start": 241,
                "end": 245,
                "name": "var1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 246,
                "end": 255,
                "name": "property1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "alternate": {
        "type": "BlockStatement",
        "start": 274,
        "end": 302,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 280,
            "end": 285,
            "expression": {
              "type": "Identifier",
              "start": 280,
              "end": 284,
              "name": "var1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "IfStatement",
      "start": 303,
      "end": 415,
      "test": {
        "type": "BinaryExpression",
        "start": 307,
        "end": 330,
        "left": {
          "type": "MemberExpression",
          "start": 307,
          "end": 323,
          "object": {
            "type": "Identifier",
            "start": 307,
            "end": 311,
            "name": "var1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 312,
            "end": 323,
            "name": "constructor",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "start": 328,
          "end": 330,
          "name": "C1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 332,
        "end": 381,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 338,
            "end": 343,
            "expression": {
              "type": "Identifier",
              "start": 338,
              "end": 342,
              "name": "var1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 354,
            "end": 369,
            "expression": {
              "type": "MemberExpression",
              "start": 354,
              "end": 368,
              "object": {
                "type": "Identifier",
                "start": 354,
                "end": 358,
                "name": "var1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 359,
                "end": 368,
                "name": "property1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "alternate": {
        "type": "BlockStatement",
        "start": 387,
        "end": 415,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 393,
            "end": 398,
            "expression": {
              "type": "Identifier",
              "start": 393,
              "end": 397,
              "name": "var1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "IfStatement",
      "start": 416,
      "end": 531,
      "test": {
        "type": "BinaryExpression",
        "start": 420,
        "end": 446,
        "left": {
          "type": "MemberExpression",
          "start": 420,
          "end": 439,
          "object": {
            "type": "Identifier",
            "start": 420,
            "end": 424,
            "name": "var1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Literal",
            "start": 425,
            "end": 438,
            "value": "constructor",
            "raw": "\"constructor\""
          },
          "computed": true,
          "optional": false
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "start": 444,
          "end": 446,
          "name": "C1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 448,
        "end": 497,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 454,
            "end": 459,
            "expression": {
              "type": "Identifier",
              "start": 454,
              "end": 458,
              "name": "var1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 470,
            "end": 485,
            "expression": {
              "type": "MemberExpression",
              "start": 470,
              "end": 484,
              "object": {
                "type": "Identifier",
                "start": 470,
                "end": 474,
                "name": "var1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 475,
                "end": 484,
                "name": "property1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "alternate": {
        "type": "BlockStatement",
        "start": 503,
        "end": 531,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 509,
            "end": 514,
            "expression": {
              "type": "Identifier",
              "start": 509,
              "end": 513,
              "name": "var1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "IfStatement",
      "start": 532,
      "end": 643,
      "test": {
        "type": "BinaryExpression",
        "start": 536,
        "end": 558,
        "left": {
          "type": "Identifier",
          "start": 536,
          "end": 538,
          "name": "C1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "==",
        "right": {
          "type": "MemberExpression",
          "start": 542,
          "end": 558,
          "object": {
            "type": "Identifier",
            "start": 542,
            "end": 546,
            "name": "var1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 547,
            "end": 558,
            "name": "constructor",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 560,
        "end": 609,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 566,
            "end": 571,
            "expression": {
              "type": "Identifier",
              "start": 566,
              "end": 570,
              "name": "var1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 582,
            "end": 597,
            "expression": {
              "type": "MemberExpression",
              "start": 582,
              "end": 596,
              "object": {
                "type": "Identifier",
                "start": 582,
                "end": 586,
                "name": "var1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 587,
                "end": 596,
                "name": "property1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "alternate": {
        "type": "BlockStatement",
        "start": 615,
        "end": 643,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 621,
            "end": 626,
            "expression": {
              "type": "Identifier",
              "start": 621,
              "end": 625,
              "name": "var1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "IfStatement",
      "start": 644,
      "end": 758,
      "test": {
        "type": "BinaryExpression",
        "start": 648,
        "end": 673,
        "left": {
          "type": "Identifier",
          "start": 648,
          "end": 650,
          "name": "C1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "==",
        "right": {
          "type": "MemberExpression",
          "start": 654,
          "end": 673,
          "object": {
            "type": "Identifier",
            "start": 654,
            "end": 658,
            "name": "var1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Literal",
            "start": 659,
            "end": 672,
            "value": "constructor",
            "raw": "\"constructor\""
          },
          "computed": true,
          "optional": false
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 675,
        "end": 724,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 681,
            "end": 686,
            "expression": {
              "type": "Identifier",
              "start": 681,
              "end": 685,
              "name": "var1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 697,
            "end": 712,
            "expression": {
              "type": "MemberExpression",
              "start": 697,
              "end": 711,
              "object": {
                "type": "Identifier",
                "start": 697,
                "end": 701,
                "name": "var1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 702,
                "end": 711,
                "name": "property1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "alternate": {
        "type": "BlockStatement",
        "start": 730,
        "end": 758,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 736,
            "end": 741,
            "expression": {
              "type": "Identifier",
              "start": 736,
              "end": 740,
              "name": "var1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "IfStatement",
      "start": 759,
      "end": 871,
      "test": {
        "type": "BinaryExpression",
        "start": 763,
        "end": 786,
        "left": {
          "type": "Identifier",
          "start": 763,
          "end": 765,
          "name": "C1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "===",
        "right": {
          "type": "MemberExpression",
          "start": 770,
          "end": 786,
          "object": {
            "type": "Identifier",
            "start": 770,
            "end": 774,
            "name": "var1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 775,
            "end": 786,
            "name": "constructor",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 788,
        "end": 837,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 794,
            "end": 799,
            "expression": {
              "type": "Identifier",
              "start": 794,
              "end": 798,
              "name": "var1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 810,
            "end": 825,
            "expression": {
              "type": "MemberExpression",
              "start": 810,
              "end": 824,
              "object": {
                "type": "Identifier",
                "start": 810,
                "end": 814,
                "name": "var1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 815,
                "end": 824,
                "name": "property1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "alternate": {
        "type": "BlockStatement",
        "start": 843,
        "end": 871,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 849,
            "end": 854,
            "expression": {
              "type": "Identifier",
              "start": 849,
              "end": 853,
              "name": "var1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "IfStatement",
      "start": 872,
      "end": 987,
      "test": {
        "type": "BinaryExpression",
        "start": 876,
        "end": 902,
        "left": {
          "type": "Identifier",
          "start": 876,
          "end": 878,
          "name": "C1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "===",
        "right": {
          "type": "MemberExpression",
          "start": 883,
          "end": 902,
          "object": {
            "type": "Identifier",
            "start": 883,
            "end": 887,
            "name": "var1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Literal",
            "start": 888,
            "end": 901,
            "value": "constructor",
            "raw": "\"constructor\""
          },
          "computed": true,
          "optional": false
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 904,
        "end": 953,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 910,
            "end": 915,
            "expression": {
              "type": "Identifier",
              "start": 910,
              "end": 914,
              "name": "var1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 926,
            "end": 941,
            "expression": {
              "type": "MemberExpression",
              "start": 926,
              "end": 940,
              "object": {
                "type": "Identifier",
                "start": 926,
                "end": 930,
                "name": "var1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 931,
                "end": 940,
                "name": "property1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "alternate": {
        "type": "BlockStatement",
        "start": 959,
        "end": 987,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 965,
            "end": 970,
            "expression": {
              "type": "Identifier",
              "start": 965,
              "end": 969,
              "name": "var1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "IfStatement",
      "start": 989,
      "end": 1099,
      "test": {
        "type": "BinaryExpression",
        "start": 993,
        "end": 1015,
        "left": {
          "type": "MemberExpression",
          "start": 993,
          "end": 1009,
          "object": {
            "type": "Identifier",
            "start": 993,
            "end": 997,
            "name": "var1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 998,
            "end": 1009,
            "name": "constructor",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "operator": "!=",
        "right": {
          "type": "Identifier",
          "start": 1013,
          "end": 1015,
          "name": "C1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 1017,
        "end": 1074,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1023,
            "end": 1028,
            "expression": {
              "type": "Identifier",
              "start": 1023,
              "end": 1027,
              "name": "var1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1048,
            "end": 1063,
            "expression": {
              "type": "MemberExpression",
              "start": 1048,
              "end": 1062,
              "object": {
                "type": "Identifier",
                "start": 1048,
                "end": 1052,
                "name": "var1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1053,
                "end": 1062,
                "name": "property1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "alternate": {
        "type": "BlockStatement",
        "start": 1080,
        "end": 1099,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1086,
            "end": 1091,
            "expression": {
              "type": "Identifier",
              "start": 1086,
              "end": 1090,
              "name": "var1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "IfStatement",
      "start": 1100,
      "end": 1213,
      "test": {
        "type": "BinaryExpression",
        "start": 1104,
        "end": 1129,
        "left": {
          "type": "MemberExpression",
          "start": 1104,
          "end": 1123,
          "object": {
            "type": "Identifier",
            "start": 1104,
            "end": 1108,
            "name": "var1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Literal",
            "start": 1109,
            "end": 1122,
            "value": "constructor",
            "raw": "\"constructor\""
          },
          "computed": true,
          "optional": false
        },
        "operator": "!=",
        "right": {
          "type": "Identifier",
          "start": 1127,
          "end": 1129,
          "name": "C1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 1131,
        "end": 1188,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1137,
            "end": 1142,
            "expression": {
              "type": "Identifier",
              "start": 1137,
              "end": 1141,
              "name": "var1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1162,
            "end": 1177,
            "expression": {
              "type": "MemberExpression",
              "start": 1162,
              "end": 1176,
              "object": {
                "type": "Identifier",
                "start": 1162,
                "end": 1166,
                "name": "var1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1167,
                "end": 1176,
                "name": "property1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "alternate": {
        "type": "BlockStatement",
        "start": 1194,
        "end": 1213,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1200,
            "end": 1205,
            "expression": {
              "type": "Identifier",
              "start": 1200,
              "end": 1204,
              "name": "var1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "IfStatement",
      "start": 1214,
      "end": 1325,
      "test": {
        "type": "BinaryExpression",
        "start": 1218,
        "end": 1241,
        "left": {
          "type": "MemberExpression",
          "start": 1218,
          "end": 1234,
          "object": {
            "type": "Identifier",
            "start": 1218,
            "end": 1222,
            "name": "var1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 1223,
            "end": 1234,
            "name": "constructor",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "operator": "!==",
        "right": {
          "type": "Identifier",
          "start": 1239,
          "end": 1241,
          "name": "C1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 1243,
        "end": 1300,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1249,
            "end": 1254,
            "expression": {
              "type": "Identifier",
              "start": 1249,
              "end": 1253,
              "name": "var1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1274,
            "end": 1289,
            "expression": {
              "type": "MemberExpression",
              "start": 1274,
              "end": 1288,
              "object": {
                "type": "Identifier",
                "start": 1274,
                "end": 1278,
                "name": "var1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1279,
                "end": 1288,
                "name": "property1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "alternate": {
        "type": "BlockStatement",
        "start": 1306,
        "end": 1325,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1312,
            "end": 1317,
            "expression": {
              "type": "Identifier",
              "start": 1312,
              "end": 1316,
              "name": "var1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "IfStatement",
      "start": 1326,
      "end": 1440,
      "test": {
        "type": "BinaryExpression",
        "start": 1330,
        "end": 1356,
        "left": {
          "type": "MemberExpression",
          "start": 1330,
          "end": 1349,
          "object": {
            "type": "Identifier",
            "start": 1330,
            "end": 1334,
            "name": "var1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Literal",
            "start": 1335,
            "end": 1348,
            "value": "constructor",
            "raw": "\"constructor\""
          },
          "computed": true,
          "optional": false
        },
        "operator": "!==",
        "right": {
          "type": "Identifier",
          "start": 1354,
          "end": 1356,
          "name": "C1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 1358,
        "end": 1415,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1364,
            "end": 1369,
            "expression": {
              "type": "Identifier",
              "start": 1364,
              "end": 1368,
              "name": "var1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1389,
            "end": 1404,
            "expression": {
              "type": "MemberExpression",
              "start": 1389,
              "end": 1403,
              "object": {
                "type": "Identifier",
                "start": 1389,
                "end": 1393,
                "name": "var1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1394,
                "end": 1403,
                "name": "property1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "alternate": {
        "type": "BlockStatement",
        "start": 1421,
        "end": 1440,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1427,
            "end": 1432,
            "expression": {
              "type": "Identifier",
              "start": 1427,
              "end": 1431,
              "name": "var1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "IfStatement",
      "start": 1441,
      "end": 1551,
      "test": {
        "type": "BinaryExpression",
        "start": 1445,
        "end": 1467,
        "left": {
          "type": "Identifier",
          "start": 1445,
          "end": 1447,
          "name": "C1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "!=",
        "right": {
          "type": "MemberExpression",
          "start": 1451,
          "end": 1467,
          "object": {
            "type": "Identifier",
            "start": 1451,
            "end": 1455,
            "name": "var1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 1456,
            "end": 1467,
            "name": "constructor",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 1469,
        "end": 1526,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1475,
            "end": 1480,
            "expression": {
              "type": "Identifier",
              "start": 1475,
              "end": 1479,
              "name": "var1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1500,
            "end": 1515,
            "expression": {
              "type": "MemberExpression",
              "start": 1500,
              "end": 1514,
              "object": {
                "type": "Identifier",
                "start": 1500,
                "end": 1504,
                "name": "var1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1505,
                "end": 1514,
                "name": "property1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "alternate": {
        "type": "BlockStatement",
        "start": 1532,
        "end": 1551,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1538,
            "end": 1543,
            "expression": {
              "type": "Identifier",
              "start": 1538,
              "end": 1542,
              "name": "var1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "IfStatement",
      "start": 1552,
      "end": 1665,
      "test": {
        "type": "BinaryExpression",
        "start": 1556,
        "end": 1581,
        "left": {
          "type": "Identifier",
          "start": 1556,
          "end": 1558,
          "name": "C1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "!=",
        "right": {
          "type": "MemberExpression",
          "start": 1562,
          "end": 1581,
          "object": {
            "type": "Identifier",
            "start": 1562,
            "end": 1566,
            "name": "var1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Literal",
            "start": 1567,
            "end": 1580,
            "value": "constructor",
            "raw": "\"constructor\""
          },
          "computed": true,
          "optional": false
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 1583,
        "end": 1640,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1589,
            "end": 1594,
            "expression": {
              "type": "Identifier",
              "start": 1589,
              "end": 1593,
              "name": "var1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1614,
            "end": 1629,
            "expression": {
              "type": "MemberExpression",
              "start": 1614,
              "end": 1628,
              "object": {
                "type": "Identifier",
                "start": 1614,
                "end": 1618,
                "name": "var1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1619,
                "end": 1628,
                "name": "property1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "alternate": {
        "type": "BlockStatement",
        "start": 1646,
        "end": 1665,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1652,
            "end": 1657,
            "expression": {
              "type": "Identifier",
              "start": 1652,
              "end": 1656,
              "name": "var1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "IfStatement",
      "start": 1666,
      "end": 1777,
      "test": {
        "type": "BinaryExpression",
        "start": 1670,
        "end": 1693,
        "left": {
          "type": "Identifier",
          "start": 1670,
          "end": 1672,
          "name": "C1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "!==",
        "right": {
          "type": "MemberExpression",
          "start": 1677,
          "end": 1693,
          "object": {
            "type": "Identifier",
            "start": 1677,
            "end": 1681,
            "name": "var1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 1682,
            "end": 1693,
            "name": "constructor",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 1695,
        "end": 1752,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1701,
            "end": 1706,
            "expression": {
              "type": "Identifier",
              "start": 1701,
              "end": 1705,
              "name": "var1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1726,
            "end": 1741,
            "expression": {
              "type": "MemberExpression",
              "start": 1726,
              "end": 1740,
              "object": {
                "type": "Identifier",
                "start": 1726,
                "end": 1730,
                "name": "var1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1731,
                "end": 1740,
                "name": "property1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "alternate": {
        "type": "BlockStatement",
        "start": 1758,
        "end": 1777,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1764,
            "end": 1769,
            "expression": {
              "type": "Identifier",
              "start": 1764,
              "end": 1768,
              "name": "var1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "IfStatement",
      "start": 1778,
      "end": 1892,
      "test": {
        "type": "BinaryExpression",
        "start": 1782,
        "end": 1808,
        "left": {
          "type": "Identifier",
          "start": 1782,
          "end": 1784,
          "name": "C1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "!==",
        "right": {
          "type": "MemberExpression",
          "start": 1789,
          "end": 1808,
          "object": {
            "type": "Identifier",
            "start": 1789,
            "end": 1793,
            "name": "var1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Literal",
            "start": 1794,
            "end": 1807,
            "value": "constructor",
            "raw": "\"constructor\""
          },
          "computed": true,
          "optional": false
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 1810,
        "end": 1867,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1816,
            "end": 1821,
            "expression": {
              "type": "Identifier",
              "start": 1816,
              "end": 1820,
              "name": "var1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1841,
            "end": 1856,
            "expression": {
              "type": "MemberExpression",
              "start": 1841,
              "end": 1855,
              "object": {
                "type": "Identifier",
                "start": 1841,
                "end": 1845,
                "name": "var1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1846,
                "end": 1855,
                "name": "property1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "alternate": {
        "type": "BlockStatement",
        "start": 1873,
        "end": 1892,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1879,
            "end": 1884,
            "expression": {
              "type": "Identifier",
              "start": 1879,
              "end": 1883,
              "name": "var1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 1916,
      "end": 2139,
      "id": {
        "type": "Identifier",
        "start": 1925,
        "end": 1928,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 1929,
          "end": 1956,
          "name": "instance",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1937,
            "end": 1956,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 1939,
              "end": 1956,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 1939,
                  "end": 1947,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1939,
                    "end": 1947,
                    "name": "Function",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSObjectKeyword",
                  "start": 1950,
                  "end": 1956
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1958,
        "end": 2139,
        "body": [
          {
            "type": "IfStatement",
            "start": 1964,
            "end": 2137,
            "test": {
              "type": "BinaryExpression",
              "start": 1968,
              "end": 1998,
              "left": {
                "type": "UnaryExpression",
                "start": 1968,
                "end": 1983,
                "operator": "typeof",
                "prefix": true,
                "argument": {
                  "type": "Identifier",
                  "start": 1975,
                  "end": 1983,
                  "name": "instance",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 1988,
                "end": 1998,
                "value": "function",
                "raw": "'function'"
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 2000,
              "end": 2137,
              "body": [
                {
                  "type": "IfStatement",
                  "start": 2010,
                  "end": 2131,
                  "test": {
                    "type": "LogicalExpression",
                    "start": 2014,
                    "end": 2082,
                    "left": {
                      "type": "BinaryExpression",
                      "start": 2014,
                      "end": 2040,
                      "left": {
                        "type": "MemberExpression",
                        "start": 2014,
                        "end": 2032,
                        "object": {
                          "type": "Identifier",
                          "start": 2014,
                          "end": 2022,
                          "name": "instance",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 2023,
                          "end": 2032,
                          "name": "prototype",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "operator": "==",
                      "right": {
                        "type": "Literal",
                        "start": 2036,
                        "end": 2040,
                        "value": null,
                        "raw": "null"
                      }
                    },
                    "operator": "||",
                    "right": {
                      "type": "BinaryExpression",
                      "start": 2044,
                      "end": 2082,
                      "left": {
                        "type": "MemberExpression",
                        "start": 2044,
                        "end": 2074,
                        "object": {
                          "type": "MemberExpression",
                          "start": 2044,
                          "end": 2062,
                          "object": {
                            "type": "Identifier",
                            "start": 2044,
                            "end": 2052,
                            "name": "instance",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 2053,
                            "end": 2062,
                            "name": "prototype",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 2063,
                          "end": 2074,
                          "name": "constructor",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "operator": "==",
                      "right": {
                        "type": "Literal",
                        "start": 2078,
                        "end": 2082,
                        "value": null,
                        "raw": "null"
                      }
                    }
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "start": 2084,
                    "end": 2131,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 2098,
                        "end": 2121,
                        "argument": {
                          "type": "MemberExpression",
                          "start": 2105,
                          "end": 2120,
                          "object": {
                            "type": "Identifier",
                            "start": 2105,
                            "end": 2113,
                            "name": "instance",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 2114,
                            "end": 2120,
                            "name": "length",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        }
                      }
                    ]
                  },
                  "alternate": null
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
