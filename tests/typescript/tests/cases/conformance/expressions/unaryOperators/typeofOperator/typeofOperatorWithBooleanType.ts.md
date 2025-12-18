__ESTREE_TEST__:AST:
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
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 36,
    "end": 39,
    "range": [
      36,
      39
    ]
  },
  {
    "type": "Identifier",
    "value": "BOOLEAN",
    "start": 40,
    "end": 47,
    "range": [
      40,
      47
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 47,
    "end": 48,
    "range": [
      47,
      48
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 49,
    "end": 56,
    "range": [
      49,
      56
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 56,
    "end": 57,
    "range": [
      56,
      57
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 59,
    "end": 67,
    "range": [
      59,
      67
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 68,
    "end": 71,
    "range": [
      68,
      71
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 71,
    "end": 72,
    "range": [
      71,
      72
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 72,
    "end": 73,
    "range": [
      72,
      73
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 73,
    "end": 74,
    "range": [
      73,
      74
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 75,
    "end": 82,
    "range": [
      75,
      82
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 83,
    "end": 84,
    "range": [
      83,
      84
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 85,
    "end": 91,
    "range": [
      85,
      91
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 92,
    "end": 96,
    "range": [
      92,
      96
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 96,
    "end": 97,
    "range": [
      96,
      97
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 98,
    "end": 99,
    "range": [
      98,
      99
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 101,
    "end": 106,
    "range": [
      101,
      106
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 107,
    "end": 108,
    "range": [
      107,
      108
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 109,
    "end": 110,
    "range": [
      109,
      110
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 115,
    "end": 121,
    "range": [
      115,
      121
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 122,
    "end": 123,
    "range": [
      122,
      123
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 123,
    "end": 124,
    "range": [
      123,
      124
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 125,
    "end": 132,
    "range": [
      125,
      132
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 132,
    "end": 133,
    "range": [
      132,
      133
    ]
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 138,
    "end": 144,
    "range": [
      138,
      144
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 145,
    "end": 148,
    "range": [
      145,
      148
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 148,
    "end": 149,
    "range": [
      148,
      149
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 149,
    "end": 150,
    "range": [
      149,
      150
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 151,
    "end": 152,
    "range": [
      151,
      152
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 153,
    "end": 159,
    "range": [
      153,
      159
    ]
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 160,
    "end": 165,
    "range": [
      160,
      165
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 165,
    "end": 166,
    "range": [
      165,
      166
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 167,
    "end": 168,
    "range": [
      167,
      168
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 169,
    "end": 170,
    "range": [
      169,
      170
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 171,
    "end": 180,
    "range": [
      171,
      180
    ]
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 181,
    "end": 182,
    "range": [
      181,
      182
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 183,
    "end": 184,
    "range": [
      183,
      184
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 189,
    "end": 195,
    "range": [
      189,
      195
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 196,
    "end": 199,
    "range": [
      196,
      199
    ]
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 200,
    "end": 201,
    "range": [
      200,
      201
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 201,
    "end": 202,
    "range": [
      201,
      202
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 203,
    "end": 210,
    "range": [
      203,
      210
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 210,
    "end": 211,
    "range": [
      210,
      211
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 212,
    "end": 213,
    "range": [
      212,
      213
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 215,
    "end": 218,
    "range": [
      215,
      218
    ]
  },
  {
    "type": "Identifier",
    "value": "objA",
    "start": 219,
    "end": 223,
    "range": [
      219,
      223
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 224,
    "end": 225,
    "range": [
      224,
      225
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 226,
    "end": 229,
    "range": [
      226,
      229
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 230,
    "end": 231,
    "range": [
      230,
      231
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 231,
    "end": 232,
    "range": [
      231,
      232
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 232,
    "end": 233,
    "range": [
      232,
      233
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 233,
    "end": 234,
    "range": [
      233,
      234
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 256,
    "end": 259,
    "range": [
      256,
      259
    ]
  },
  {
    "type": "Identifier",
    "value": "ResultIsString1",
    "start": 260,
    "end": 275,
    "range": [
      260,
      275
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 276,
    "end": 277,
    "range": [
      276,
      277
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 278,
    "end": 284,
    "range": [
      278,
      284
    ]
  },
  {
    "type": "Identifier",
    "value": "BOOLEAN",
    "start": 285,
    "end": 292,
    "range": [
      285,
      292
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 292,
    "end": 293,
    "range": [
      292,
      293
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 319,
    "end": 322,
    "range": [
      319,
      322
    ]
  },
  {
    "type": "Identifier",
    "value": "ResultIsString2",
    "start": 323,
    "end": 338,
    "range": [
      323,
      338
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 339,
    "end": 340,
    "range": [
      339,
      340
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 341,
    "end": 347,
    "range": [
      341,
      347
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 348,
    "end": 352,
    "range": [
      348,
      352
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 352,
    "end": 353,
    "range": [
      352,
      353
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 354,
    "end": 357,
    "range": [
      354,
      357
    ]
  },
  {
    "type": "Identifier",
    "value": "ResultIsString3",
    "start": 358,
    "end": 373,
    "range": [
      358,
      373
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 374,
    "end": 375,
    "range": [
      374,
      375
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 376,
    "end": 382,
    "range": [
      376,
      382
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 383,
    "end": 384,
    "range": [
      383,
      384
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 385,
    "end": 386,
    "range": [
      385,
      386
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 386,
    "end": 387,
    "range": [
      386,
      387
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 388,
    "end": 392,
    "range": [
      388,
      392
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 392,
    "end": 393,
    "range": [
      392,
      393
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 394,
    "end": 395,
    "range": [
      394,
      395
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 395,
    "end": 396,
    "range": [
      395,
      396
    ]
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 397,
    "end": 402,
    "range": [
      397,
      402
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 403,
    "end": 404,
    "range": [
      403,
      404
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 404,
    "end": 405,
    "range": [
      404,
      405
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 435,
    "end": 438,
    "range": [
      435,
      438
    ]
  },
  {
    "type": "Identifier",
    "value": "ResultIsString4",
    "start": 439,
    "end": 454,
    "range": [
      439,
      454
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 455,
    "end": 456,
    "range": [
      455,
      456
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 457,
    "end": 463,
    "range": [
      457,
      463
    ]
  },
  {
    "type": "Identifier",
    "value": "objA",
    "start": 464,
    "end": 468,
    "range": [
      464,
      468
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 468,
    "end": 469,
    "range": [
      468,
      469
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 469,
    "end": 470,
    "range": [
      469,
      470
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 470,
    "end": 471,
    "range": [
      470,
      471
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 472,
    "end": 475,
    "range": [
      472,
      475
    ]
  },
  {
    "type": "Identifier",
    "value": "ResultIsString5",
    "start": 476,
    "end": 491,
    "range": [
      476,
      491
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 492,
    "end": 493,
    "range": [
      492,
      493
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 494,
    "end": 500,
    "range": [
      494,
      500
    ]
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 501,
    "end": 502,
    "range": [
      501,
      502
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 502,
    "end": 503,
    "range": [
      502,
      503
    ]
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 503,
    "end": 504,
    "range": [
      503,
      504
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 504,
    "end": 505,
    "range": [
      504,
      505
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 506,
    "end": 509,
    "range": [
      506,
      509
    ]
  },
  {
    "type": "Identifier",
    "value": "ResultIsString6",
    "start": 510,
    "end": 525,
    "range": [
      510,
      525
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 526,
    "end": 527,
    "range": [
      526,
      527
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 528,
    "end": 534,
    "range": [
      528,
      534
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 535,
    "end": 538,
    "range": [
      535,
      538
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 538,
    "end": 539,
    "range": [
      538,
      539
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 539,
    "end": 540,
    "range": [
      539,
      540
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 540,
    "end": 541,
    "range": [
      540,
      541
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 542,
    "end": 545,
    "range": [
      542,
      545
    ]
  },
  {
    "type": "Identifier",
    "value": "ResultIsString7",
    "start": 546,
    "end": 561,
    "range": [
      546,
      561
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 562,
    "end": 563,
    "range": [
      562,
      563
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 564,
    "end": 570,
    "range": [
      564,
      570
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 571,
    "end": 572,
    "range": [
      571,
      572
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 572,
    "end": 573,
    "range": [
      572,
      573
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 573,
    "end": 576,
    "range": [
      573,
      576
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 576,
    "end": 577,
    "range": [
      576,
      577
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 577,
    "end": 578,
    "range": [
      577,
      578
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 578,
    "end": 579,
    "range": [
      578,
      579
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 610,
    "end": 613,
    "range": [
      610,
      613
    ]
  },
  {
    "type": "Identifier",
    "value": "ResultIsString8",
    "start": 614,
    "end": 629,
    "range": [
      614,
      629
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 630,
    "end": 631,
    "range": [
      630,
      631
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 632,
    "end": 638,
    "range": [
      632,
      638
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 639,
    "end": 645,
    "range": [
      639,
      645
    ]
  },
  {
    "type": "Identifier",
    "value": "BOOLEAN",
    "start": 646,
    "end": 653,
    "range": [
      646,
      653
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 653,
    "end": 654,
    "range": [
      653,
      654
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 685,
    "end": 691,
    "range": [
      685,
      691
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 692,
    "end": 696,
    "range": [
      692,
      696
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 696,
    "end": 697,
    "range": [
      696,
      697
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 698,
    "end": 704,
    "range": [
      698,
      704
    ]
  },
  {
    "type": "Identifier",
    "value": "BOOLEAN",
    "start": 705,
    "end": 712,
    "range": [
      705,
      712
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 712,
    "end": 713,
    "range": [
      712,
      713
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 714,
    "end": 720,
    "range": [
      714,
      720
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 721,
    "end": 724,
    "range": [
      721,
      724
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 724,
    "end": 725,
    "range": [
      724,
      725
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 725,
    "end": 726,
    "range": [
      725,
      726
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 726,
    "end": 727,
    "range": [
      726,
      727
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 728,
    "end": 734,
    "range": [
      728,
      734
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 735,
    "end": 739,
    "range": [
      735,
      739
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 739,
    "end": 740,
    "range": [
      739,
      740
    ]
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 741,
    "end": 746,
    "range": [
      741,
      746
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 746,
    "end": 747,
    "range": [
      746,
      747
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 748,
    "end": 754,
    "range": [
      748,
      754
    ]
  },
  {
    "type": "Identifier",
    "value": "objA",
    "start": 755,
    "end": 759,
    "range": [
      755,
      759
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 759,
    "end": 760,
    "range": [
      759,
      760
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 760,
    "end": 761,
    "range": [
      760,
      761
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 761,
    "end": 762,
    "range": [
      761,
      762
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 763,
    "end": 769,
    "range": [
      763,
      769
    ]
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 770,
    "end": 771,
    "range": [
      770,
      771
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 771,
    "end": 772,
    "range": [
      771,
      772
    ]
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 772,
    "end": 773,
    "range": [
      772,
      773
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 773,
    "end": 774,
    "range": [
      773,
      774
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 804,
    "end": 807,
    "range": [
      804,
      807
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 808,
    "end": 809,
    "range": [
      808,
      809
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 809,
    "end": 810,
    "range": [
      809,
      810
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 811,
    "end": 818,
    "range": [
      811,
      818
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 818,
    "end": 819,
    "range": [
      818,
      819
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 820,
    "end": 823,
    "range": [
      820,
      823
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 824,
    "end": 825,
    "range": [
      824,
      825
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 825,
    "end": 826,
    "range": [
      825,
      826
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 827,
    "end": 834,
    "range": [
      827,
      834
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 834,
    "end": 835,
    "range": [
      834,
      835
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 835,
    "end": 836,
    "range": [
      835,
      836
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 836,
    "end": 837,
    "range": [
      836,
      837
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 838,
    "end": 841,
    "range": [
      838,
      841
    ]
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 842,
    "end": 843,
    "range": [
      842,
      843
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 843,
    "end": 844,
    "range": [
      843,
      844
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 845,
    "end": 846,
    "range": [
      845,
      846
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 846,
    "end": 847,
    "range": [
      846,
      847
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 848,
    "end": 850,
    "range": [
      848,
      850
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 851,
    "end": 858,
    "range": [
      851,
      858
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 858,
    "end": 859,
    "range": [
      858,
      859
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 860,
    "end": 861,
    "range": [
      860,
      861
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 861,
    "end": 862,
    "range": [
      861,
      862
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 863,
    "end": 869,
    "range": [
      863,
      869
    ]
  },
  {
    "type": "Identifier",
    "value": "BOOLEAN",
    "start": 870,
    "end": 877,
    "range": [
      870,
      877
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 877,
    "end": 878,
    "range": [
      877,
      878
    ]
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 879,
    "end": 880,
    "range": [
      879,
      880
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 880,
    "end": 881,
    "range": [
      880,
      881
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 882,
    "end": 888,
    "range": [
      882,
      888
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 889,
    "end": 892,
    "range": [
      889,
      892
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 892,
    "end": 893,
    "range": [
      892,
      893
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 894,
    "end": 897,
    "range": [
      894,
      897
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 898,
    "end": 899,
    "range": [
      898,
      899
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 900,
    "end": 901,
    "range": [
      900,
      901
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 902,
    "end": 903,
    "range": [
      902,
      903
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 904,
    "end": 905,
    "range": [
      904,
      905
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 905,
    "end": 906,
    "range": [
      905,
      906
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 907,
    "end": 911,
    "range": [
      907,
      911
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 911,
    "end": 912,
    "range": [
      911,
      912
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 913,
    "end": 914,
    "range": [
      913,
      914
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 914,
    "end": 915,
    "range": [
      914,
      915
    ]
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 916,
    "end": 921,
    "range": [
      916,
      921
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 921,
    "end": 922,
    "range": [
      921,
      922
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 922,
    "end": 923,
    "range": [
      922,
      923
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 924,
    "end": 925,
    "range": [
      924,
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
    "type": "Keyword",
    "value": "typeof",
    "start": 927,
    "end": 933,
    "range": [
      927,
      933
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 934,
    "end": 935,
    "range": [
      934,
      935
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 935,
    "end": 936,
    "range": [
      935,
      936
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 936,
    "end": 937,
    "range": [
      936,
      937
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 937,
    "end": 938,
    "range": [
      937,
      938
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 939,
    "end": 940,
    "range": [
      939,
      940
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 940,
    "end": 941,
    "range": [
      940,
      941
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 942,
    "end": 948,
    "range": [
      942,
      948
    ]
  },
  {
    "type": "Identifier",
    "value": "objA",
    "start": 949,
    "end": 953,
    "range": [
      949,
      953
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 953,
    "end": 954,
    "range": [
      953,
      954
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 954,
    "end": 955,
    "range": [
      954,
      955
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 955,
    "end": 956,
    "range": [
      955,
      956
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 957,
    "end": 958,
    "range": [
      957,
      958
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 958,
    "end": 959,
    "range": [
      958,
      959
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 960,
    "end": 966,
    "range": [
      960,
      966
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 967,
    "end": 968,
    "range": [
      967,
      968
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 968,
    "end": 969,
    "range": [
      968,
      969
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 969,
    "end": 972,
    "range": [
      969,
      972
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 972,
    "end": 973,
    "range": [
      972,
      973
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 974,
    "end": 975,
    "range": [
      974,
      975
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 975,
    "end": 976,
    "range": [
      975,
      976
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 977,
    "end": 983,
    "range": [
      977,
      983
    ]
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 984,
    "end": 985,
    "range": [
      984,
      985
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 985,
    "end": 986,
    "range": [
      985,
      986
    ]
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 986,
    "end": 987,
    "range": [
      986,
      987
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 987,
    "end": 988,
    "range": [
      987,
      988
    ]
  }
]
```
