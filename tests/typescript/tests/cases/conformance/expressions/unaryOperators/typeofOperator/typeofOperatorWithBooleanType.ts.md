__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "BOOLEAN",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 49,
                "end": 56
              },
              "start": 47,
              "end": 56
            },
            "start": 40,
            "end": 56
          },
          "init": null,
          "definite": false,
          "start": 40,
          "end": 56
        }
      ],
      "declare": false,
      "start": 36,
      "end": 57
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 68,
        "end": 71
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "start": 75,
          "end": 82
        },
        "start": 73,
        "end": 82
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 92,
              "end": 96
            },
            "start": 85,
            "end": 97
          }
        ],
        "start": 83,
        "end": 99
      },
      "expression": false,
      "start": 59,
      "end": 99
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 107,
        "end": 108
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 122,
              "end": 123
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 125,
                "end": 132
              },
              "start": 123,
              "end": 132
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 115,
            "end": 133
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 145,
              "end": 148
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
                      "type": "Literal",
                      "value": false,
                      "raw": "false",
                      "start": 160,
                      "end": 165
                    },
                    "start": 153,
                    "end": 166
                  }
                ],
                "start": 151,
                "end": 168
              },
              "expression": false,
              "start": 148,
              "end": 168
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 138,
            "end": 168
          }
        ],
        "start": 109,
        "end": 170
      },
      "abstract": false,
      "declare": false,
      "start": 101,
      "end": 170
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 181,
        "end": 182
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 203,
                        "end": 210
                      },
                      "start": 201,
                      "end": 210
                    },
                    "start": 200,
                    "end": 210
                  },
                  "init": null,
                  "definite": false,
                  "start": 200,
                  "end": 210
                }
              ],
              "declare": false,
              "start": 196,
              "end": 211
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 189,
            "end": 211
          }
        ],
        "start": 183,
        "end": 213
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 171,
      "end": 213
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
            "name": "objA",
            "optional": false,
            "typeAnnotation": null,
            "start": 219,
            "end": 223
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 230,
              "end": 231
            },
            "typeArguments": null,
            "arguments": [],
            "start": 226,
            "end": 233
          },
          "definite": false,
          "start": 219,
          "end": 233
        }
      ],
      "declare": false,
      "start": 215,
      "end": 234
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
            "name": "ResultIsString1",
            "optional": false,
            "typeAnnotation": null,
            "start": 260,
            "end": 275
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "typeof",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "BOOLEAN",
              "optional": false,
              "typeAnnotation": null,
              "start": 285,
              "end": 292
            },
            "prefix": true,
            "start": 278,
            "end": 292
          },
          "definite": false,
          "start": 260,
          "end": 292
        }
      ],
      "declare": false,
      "start": 256,
      "end": 293
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
            "name": "ResultIsString2",
            "optional": false,
            "typeAnnotation": null,
            "start": 323,
            "end": 338
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "typeof",
            "argument": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 348,
              "end": 352
            },
            "prefix": true,
            "start": 341,
            "end": 352
          },
          "definite": false,
          "start": 323,
          "end": 352
        }
      ],
      "declare": false,
      "start": 319,
      "end": 353
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
            "name": "ResultIsString3",
            "optional": false,
            "typeAnnotation": null,
            "start": 358,
            "end": 373
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "typeof",
            "argument": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 385,
                    "end": 386
                  },
                  "value": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 388,
                    "end": 392
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 385,
                  "end": 392
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 394,
                    "end": 395
                  },
                  "value": {
                    "type": "Literal",
                    "value": false,
                    "raw": "false",
                    "start": 397,
                    "end": 402
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 394,
                  "end": 402
                }
              ],
              "start": 383,
              "end": 404
            },
            "prefix": true,
            "start": 376,
            "end": 404
          },
          "definite": false,
          "start": 358,
          "end": 404
        }
      ],
      "declare": false,
      "start": 354,
      "end": 405
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
            "name": "ResultIsString4",
            "optional": false,
            "typeAnnotation": null,
            "start": 439,
            "end": 454
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "typeof",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "objA",
                "optional": false,
                "typeAnnotation": null,
                "start": 464,
                "end": 468
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 469,
                "end": 470
              },
              "optional": false,
              "computed": false,
              "start": 464,
              "end": 470
            },
            "prefix": true,
            "start": 457,
            "end": 470
          },
          "definite": false,
          "start": 439,
          "end": 470
        }
      ],
      "declare": false,
      "start": 435,
      "end": 471
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
            "name": "ResultIsString5",
            "optional": false,
            "typeAnnotation": null,
            "start": 476,
            "end": 491
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "typeof",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "M",
                "optional": false,
                "typeAnnotation": null,
                "start": 501,
                "end": 502
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 503,
                "end": 504
              },
              "optional": false,
              "computed": false,
              "start": 501,
              "end": 504
            },
            "prefix": true,
            "start": 494,
            "end": 504
          },
          "definite": false,
          "start": 476,
          "end": 504
        }
      ],
      "declare": false,
      "start": 472,
      "end": 505
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
            "name": "ResultIsString6",
            "optional": false,
            "typeAnnotation": null,
            "start": 510,
            "end": 525
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "typeof",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 535,
                "end": 538
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 535,
              "end": 540
            },
            "prefix": true,
            "start": 528,
            "end": 540
          },
          "definite": false,
          "start": 510,
          "end": 540
        }
      ],
      "declare": false,
      "start": 506,
      "end": 541
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
            "name": "ResultIsString7",
            "optional": false,
            "typeAnnotation": null,
            "start": 546,
            "end": 561
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "typeof",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 571,
                  "end": 572
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 573,
                  "end": 576
                },
                "optional": false,
                "computed": false,
                "start": 571,
                "end": 576
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 571,
              "end": 578
            },
            "prefix": true,
            "start": 564,
            "end": 578
          },
          "definite": false,
          "start": 546,
          "end": 578
        }
      ],
      "declare": false,
      "start": 542,
      "end": 579
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
            "name": "ResultIsString8",
            "optional": false,
            "typeAnnotation": null,
            "start": 614,
            "end": 629
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "typeof",
            "argument": {
              "type": "UnaryExpression",
              "operator": "typeof",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "BOOLEAN",
                "optional": false,
                "typeAnnotation": null,
                "start": 646,
                "end": 653
              },
              "prefix": true,
              "start": 639,
              "end": 653
            },
            "prefix": true,
            "start": 632,
            "end": 653
          },
          "definite": false,
          "start": 614,
          "end": 653
        }
      ],
      "declare": false,
      "start": 610,
      "end": 654
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "typeof",
        "argument": {
          "type": "Literal",
          "value": true,
          "raw": "true",
          "start": 692,
          "end": 696
        },
        "prefix": true,
        "start": 685,
        "end": 696
      },
      "directive": null,
      "start": 685,
      "end": 697
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "typeof",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "BOOLEAN",
          "optional": false,
          "typeAnnotation": null,
          "start": 705,
          "end": 712
        },
        "prefix": true,
        "start": 698,
        "end": 712
      },
      "directive": null,
      "start": 698,
      "end": 713
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "typeof",
        "argument": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 721,
            "end": 724
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 721,
          "end": 726
        },
        "prefix": true,
        "start": 714,
        "end": 726
      },
      "directive": null,
      "start": 714,
      "end": 727
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "UnaryExpression",
            "operator": "typeof",
            "argument": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 735,
              "end": 739
            },
            "prefix": true,
            "start": 728,
            "end": 739
          },
          {
            "type": "Literal",
            "value": false,
            "raw": "false",
            "start": 741,
            "end": 746
          }
        ],
        "start": 728,
        "end": 746
      },
      "directive": null,
      "start": 728,
      "end": 747
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "typeof",
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "objA",
            "optional": false,
            "typeAnnotation": null,
            "start": 755,
            "end": 759
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 760,
            "end": 761
          },
          "optional": false,
          "computed": false,
          "start": 755,
          "end": 761
        },
        "prefix": true,
        "start": 748,
        "end": 761
      },
      "directive": null,
      "start": 748,
      "end": 762
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "typeof",
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null,
            "start": 770,
            "end": 771
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null,
            "start": 772,
            "end": 773
          },
          "optional": false,
          "computed": false,
          "start": 770,
          "end": 773
        },
        "prefix": true,
        "start": 763,
        "end": 773
      },
      "directive": null,
      "start": 763,
      "end": 774
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
            "name": "z",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 811,
                "end": 818
              },
              "start": 809,
              "end": 818
            },
            "start": 808,
            "end": 818
          },
          "init": null,
          "definite": false,
          "start": 808,
          "end": 818
        }
      ],
      "declare": false,
      "start": 804,
      "end": 819
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
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSBooleanKeyword",
                  "start": 827,
                  "end": 834
                },
                "start": 827,
                "end": 836
              },
              "start": 825,
              "end": 836
            },
            "start": 824,
            "end": 836
          },
          "init": null,
          "definite": false,
          "start": 824,
          "end": 836
        }
      ],
      "declare": false,
      "start": 820,
      "end": 837
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
            "name": "r",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSBooleanKeyword",
                    "start": 851,
                    "end": 858
                  },
                  "start": 848,
                  "end": 858
                },
                "start": 845,
                "end": 858
              },
              "start": 843,
              "end": 858
            },
            "start": 842,
            "end": 858
          },
          "init": null,
          "definite": false,
          "start": 842,
          "end": 858
        }
      ],
      "declare": false,
      "start": 838,
      "end": 859
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "z",
        "optional": false,
        "typeAnnotation": null,
        "start": 860,
        "end": 861
      },
      "body": {
        "type": "ExpressionStatement",
        "expression": {
          "type": "UnaryExpression",
          "operator": "typeof",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "BOOLEAN",
            "optional": false,
            "typeAnnotation": null,
            "start": 870,
            "end": 877
          },
          "prefix": true,
          "start": 863,
          "end": 877
        },
        "directive": null,
        "start": 863,
        "end": 878
      },
      "start": 860,
      "end": 878
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "r",
        "optional": false,
        "typeAnnotation": null,
        "start": 879,
        "end": 880
      },
      "body": {
        "type": "ExpressionStatement",
        "expression": {
          "type": "UnaryExpression",
          "operator": "typeof",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 889,
            "end": 892
          },
          "prefix": true,
          "start": 882,
          "end": 892
        },
        "directive": null,
        "start": 882,
        "end": 893
      },
      "start": 879,
      "end": 893
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
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 898,
            "end": 899
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 904,
                  "end": 905
                },
                "value": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 907,
                  "end": 911
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 904,
                "end": 911
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 913,
                  "end": 914
                },
                "value": {
                  "type": "Literal",
                  "value": false,
                  "raw": "false",
                  "start": 916,
                  "end": 921
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 913,
                "end": 921
              }
            ],
            "start": 902,
            "end": 922
          },
          "definite": false,
          "start": 898,
          "end": 922
        }
      ],
      "declare": false,
      "start": 894,
      "end": 923
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "z",
        "optional": false,
        "typeAnnotation": null,
        "start": 924,
        "end": 925
      },
      "body": {
        "type": "ExpressionStatement",
        "expression": {
          "type": "UnaryExpression",
          "operator": "typeof",
          "argument": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 934,
              "end": 935
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 936,
              "end": 937
            },
            "optional": false,
            "computed": false,
            "start": 934,
            "end": 937
          },
          "prefix": true,
          "start": 927,
          "end": 937
        },
        "directive": null,
        "start": 927,
        "end": 938
      },
      "start": 924,
      "end": 938
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "z",
        "optional": false,
        "typeAnnotation": null,
        "start": 939,
        "end": 940
      },
      "body": {
        "type": "ExpressionStatement",
        "expression": {
          "type": "UnaryExpression",
          "operator": "typeof",
          "argument": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "objA",
              "optional": false,
              "typeAnnotation": null,
              "start": 949,
              "end": 953
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 954,
              "end": 955
            },
            "optional": false,
            "computed": false,
            "start": 949,
            "end": 955
          },
          "prefix": true,
          "start": 942,
          "end": 955
        },
        "directive": null,
        "start": 942,
        "end": 956
      },
      "start": 939,
      "end": 956
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "z",
        "optional": false,
        "typeAnnotation": null,
        "start": 957,
        "end": 958
      },
      "body": {
        "type": "ExpressionStatement",
        "expression": {
          "type": "UnaryExpression",
          "operator": "typeof",
          "argument": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 967,
              "end": 968
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 969,
              "end": 972
            },
            "optional": false,
            "computed": false,
            "start": 967,
            "end": 972
          },
          "prefix": true,
          "start": 960,
          "end": 972
        },
        "directive": null,
        "start": 960,
        "end": 973
      },
      "start": 957,
      "end": 973
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "z",
        "optional": false,
        "typeAnnotation": null,
        "start": 974,
        "end": 975
      },
      "body": {
        "type": "ExpressionStatement",
        "expression": {
          "type": "UnaryExpression",
          "operator": "typeof",
          "argument": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null,
              "start": 984,
              "end": 985
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null,
              "start": 986,
              "end": 987
            },
            "optional": false,
            "computed": false,
            "start": 984,
            "end": 987
          },
          "prefix": true,
          "start": 977,
          "end": 987
        },
        "directive": null,
        "start": 977,
        "end": 988
      },
      "start": 974,
      "end": 988
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 36,
  "end": 988
}
```
