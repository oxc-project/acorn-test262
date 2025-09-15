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
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 121,
            "end": 127
          },
          "init": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 130,
            "end": 131
          },
          "definite": false,
          "start": 121,
          "end": 131
        }
      ],
      "declare": false,
      "start": 117,
      "end": 132
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UpdateExpression",
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 133,
          "end": 134
        },
        "start": 133,
        "end": 137
      },
      "directive": null,
      "start": 133,
      "end": 138
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UpdateExpression",
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 139,
          "end": 145
        },
        "start": 139,
        "end": 148
      },
      "directive": null,
      "start": 139,
      "end": 149
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
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 155,
            "end": 156
          },
          "init": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 159,
            "end": 160
          },
          "definite": false,
          "start": 155,
          "end": 160
        }
      ],
      "declare": false,
      "start": 151,
      "end": 161
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UpdateExpression",
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 162,
          "end": 163
        },
        "start": 162,
        "end": 166
      },
      "directive": null,
      "start": 162,
      "end": 167
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UpdateExpression",
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 168,
          "end": 174
        },
        "start": 168,
        "end": 177
      },
      "directive": null,
      "start": 168,
      "end": 178
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "moduleType1",
        "optional": false,
        "typeAnnotation": null,
        "start": 201,
        "end": 212
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
                    "name": "baz1",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 237,
                        "end": 243
                      },
                      "start": 235,
                      "end": 243
                    },
                    "start": 231,
                    "end": 243
                  },
                  "init": null,
                  "definite": false,
                  "start": 231,
                  "end": 243
                }
              ],
              "declare": false,
              "start": 227,
              "end": 244
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 220,
            "end": 244
          }
        ],
        "start": 213,
        "end": 246
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 191,
      "end": 246
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "moduleType2",
        "optional": false,
        "typeAnnotation": null,
        "start": 254,
        "end": 270
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
                    "name": "baz2",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 295,
                        "end": 301
                      },
                      "start": 293,
                      "end": 301
                    },
                    "start": 289,
                    "end": 301
                  },
                  "init": null,
                  "definite": false,
                  "start": 289,
                  "end": 301
                }
              ],
              "declare": false,
              "start": 285,
              "end": 302
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 278,
            "end": 302
          }
        ],
        "start": 271,
        "end": 304
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 247,
      "end": 304
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "moduleType1",
            "optional": false,
            "typeAnnotation": null,
            "start": 306,
            "end": 317
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "baz1",
            "optional": false,
            "typeAnnotation": null,
            "start": 318,
            "end": 322
          },
          "optional": false,
          "computed": false,
          "start": 306,
          "end": 322
        },
        "right": {
          "type": "Literal",
          "value": 3,
          "raw": "3",
          "start": 325,
          "end": 326
        },
        "start": 306,
        "end": 326
      },
      "directive": null,
      "start": 306,
      "end": 327
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "moduleType1",
            "optional": false,
            "typeAnnotation": null,
            "start": 328,
            "end": 344
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "baz1",
            "optional": false,
            "typeAnnotation": null,
            "start": 345,
            "end": 349
          },
          "optional": false,
          "computed": false,
          "start": 328,
          "end": 349
        },
        "right": {
          "type": "Literal",
          "value": 3,
          "raw": "3",
          "start": 352,
          "end": 353
        },
        "start": 328,
        "end": 353
      },
      "directive": null,
      "start": 328,
      "end": 354
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "moduleType2",
            "optional": false,
            "typeAnnotation": null,
            "start": 355,
            "end": 366
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "baz2",
            "optional": false,
            "typeAnnotation": null,
            "start": 367,
            "end": 371
          },
          "optional": false,
          "computed": false,
          "start": 355,
          "end": 371
        },
        "right": {
          "type": "Literal",
          "value": 3,
          "raw": "3",
          "start": 374,
          "end": 375
        },
        "start": 355,
        "end": 375
      },
      "directive": null,
      "start": 355,
      "end": 376
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "moduleType2",
            "optional": false,
            "typeAnnotation": null,
            "start": 377,
            "end": 393
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "baz2",
            "optional": false,
            "typeAnnotation": null,
            "start": 394,
            "end": 398
          },
          "optional": false,
          "computed": false,
          "start": 377,
          "end": 398
        },
        "right": {
          "type": "Literal",
          "value": 3,
          "raw": "3",
          "start": 401,
          "end": 402
        },
        "start": 377,
        "end": 402
      },
      "directive": null,
      "start": 377,
      "end": 403
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "classType1",
        "optional": false,
        "typeAnnotation": null,
        "start": 423,
        "end": 433
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
              "name": "foo1",
              "optional": false,
              "typeAnnotation": null,
              "start": 448,
              "end": 452
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 454,
                "end": 460
              },
              "start": 452,
              "end": 460
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
            "start": 441,
            "end": 461
          }
        ],
        "start": 434,
        "end": 463
      },
      "abstract": false,
      "declare": false,
      "start": 417,
      "end": 463
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "classType2",
        "optional": false,
        "typeAnnotation": null,
        "start": 470,
        "end": 485
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
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null,
              "start": 500,
              "end": 504
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 506,
                "end": 512
              },
              "start": 504,
              "end": 512
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
            "start": 493,
            "end": 513
          }
        ],
        "start": 486,
        "end": 515
      },
      "abstract": false,
      "declare": false,
      "start": 464,
      "end": 515
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
            "name": "classType1Object1",
            "optional": false,
            "typeAnnotation": null,
            "start": 521,
            "end": 538
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "classType1",
              "optional": false,
              "typeAnnotation": null,
              "start": 545,
              "end": 555
            },
            "typeArguments": null,
            "arguments": [],
            "start": 541,
            "end": 557
          },
          "definite": false,
          "start": 521,
          "end": 557
        }
      ],
      "declare": false,
      "start": 517,
      "end": 558
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "classType1Object1",
            "optional": false,
            "typeAnnotation": null,
            "start": 559,
            "end": 576
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo1",
            "optional": false,
            "typeAnnotation": null,
            "start": 577,
            "end": 581
          },
          "optional": false,
          "computed": false,
          "start": 559,
          "end": 581
        },
        "right": {
          "type": "Literal",
          "value": 2,
          "raw": "2",
          "start": 584,
          "end": 585
        },
        "start": 559,
        "end": 585
      },
      "directive": null,
      "start": 559,
      "end": 586
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
            "name": "classType1Object2",
            "optional": false,
            "typeAnnotation": null,
            "start": 591,
            "end": 608
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "classType1",
              "optional": false,
              "typeAnnotation": null,
              "start": 615,
              "end": 630
            },
            "typeArguments": null,
            "arguments": [],
            "start": 611,
            "end": 632
          },
          "definite": false,
          "start": 591,
          "end": 632
        }
      ],
      "declare": false,
      "start": 587,
      "end": 633
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "classType1Object2",
            "optional": false,
            "typeAnnotation": null,
            "start": 634,
            "end": 651
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo1",
            "optional": false,
            "typeAnnotation": null,
            "start": 652,
            "end": 656
          },
          "optional": false,
          "computed": false,
          "start": 634,
          "end": 656
        },
        "right": {
          "type": "Literal",
          "value": 2,
          "raw": "2",
          "start": 659,
          "end": 660
        },
        "start": 634,
        "end": 660
      },
      "directive": null,
      "start": 634,
      "end": 661
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
            "name": "classType2Object1",
            "optional": false,
            "typeAnnotation": null,
            "start": 666,
            "end": 683
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "classType2",
              "optional": false,
              "typeAnnotation": null,
              "start": 690,
              "end": 700
            },
            "typeArguments": null,
            "arguments": [],
            "start": 686,
            "end": 702
          },
          "definite": false,
          "start": 666,
          "end": 702
        }
      ],
      "declare": false,
      "start": 662,
      "end": 703
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "classType2Object1",
            "optional": false,
            "typeAnnotation": null,
            "start": 704,
            "end": 721
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo2",
            "optional": false,
            "typeAnnotation": null,
            "start": 722,
            "end": 726
          },
          "optional": false,
          "computed": false,
          "start": 704,
          "end": 726
        },
        "right": {
          "type": "Literal",
          "value": 2,
          "raw": "2",
          "start": 729,
          "end": 730
        },
        "start": 704,
        "end": 730
      },
      "directive": null,
      "start": 704,
      "end": 731
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
            "name": "classType2Object2",
            "optional": false,
            "typeAnnotation": null,
            "start": 736,
            "end": 753
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "classType2",
              "optional": false,
              "typeAnnotation": null,
              "start": 760,
              "end": 775
            },
            "typeArguments": null,
            "arguments": [],
            "start": 756,
            "end": 777
          },
          "definite": false,
          "start": 736,
          "end": 777
        }
      ],
      "declare": false,
      "start": 732,
      "end": 778
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "classType2Object2",
            "optional": false,
            "typeAnnotation": null,
            "start": 779,
            "end": 796
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo2",
            "optional": false,
            "typeAnnotation": null,
            "start": 797,
            "end": 801
          },
          "optional": false,
          "computed": false,
          "start": 779,
          "end": 801
        },
        "right": {
          "type": "Literal",
          "value": 2,
          "raw": "2",
          "start": 804,
          "end": 805
        },
        "start": 779,
        "end": 805
      },
      "directive": null,
      "start": 779,
      "end": 806
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "interfaceType1",
        "optional": false,
        "typeAnnotation": null,
        "start": 832,
        "end": 846
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar1",
              "optional": false,
              "typeAnnotation": null,
              "start": 854,
              "end": 858
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 860,
                "end": 866
              },
              "start": 858,
              "end": 866
            },
            "accessibility": null,
            "static": false,
            "start": 854,
            "end": 867
          }
        ],
        "start": 847,
        "end": 869
      },
      "declare": false,
      "start": 822,
      "end": 869
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "interfaceType2",
        "optional": false,
        "typeAnnotation": null,
        "start": 880,
        "end": 899
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar2",
              "optional": false,
              "typeAnnotation": null,
              "start": 907,
              "end": 911
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 913,
                "end": 919
              },
              "start": 911,
              "end": 919
            },
            "accessibility": null,
            "static": false,
            "start": 907,
            "end": 920
          }
        ],
        "start": 900,
        "end": 922
      },
      "declare": false,
      "start": 870,
      "end": 922
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
            "name": "interfaceType1Object1",
            "optional": false,
            "typeAnnotation": null,
            "start": 928,
            "end": 949
          },
          "init": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "interfaceType1",
                "optional": false,
                "typeAnnotation": null,
                "start": 953,
                "end": 967
              },
              "typeArguments": null,
              "start": 953,
              "end": 967
            },
            "expression": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bar1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 970,
                    "end": 974
                  },
                  "value": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 976,
                    "end": 977
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 970,
                  "end": 977
                }
              ],
              "start": 968,
              "end": 979
            },
            "start": 952,
            "end": 979
          },
          "definite": false,
          "start": 928,
          "end": 979
        }
      ],
      "declare": false,
      "start": 924,
      "end": 980
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "interfaceType1Object1",
            "optional": false,
            "typeAnnotation": null,
            "start": 981,
            "end": 1002
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "bar1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1003,
            "end": 1007
          },
          "optional": false,
          "computed": false,
          "start": 981,
          "end": 1007
        },
        "right": {
          "type": "Literal",
          "value": 2,
          "raw": "2",
          "start": 1010,
          "end": 1011
        },
        "start": 981,
        "end": 1011
      },
      "directive": null,
      "start": 981,
      "end": 1012
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
            "name": "interfaceType1Object2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1017,
            "end": 1038
          },
          "init": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "interfaceType1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1042,
                "end": 1061
              },
              "typeArguments": null,
              "start": 1042,
              "end": 1061
            },
            "expression": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bar1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1064,
                    "end": 1068
                  },
                  "value": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 1070,
                    "end": 1071
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1064,
                  "end": 1071
                }
              ],
              "start": 1062,
              "end": 1073
            },
            "start": 1041,
            "end": 1073
          },
          "definite": false,
          "start": 1017,
          "end": 1073
        }
      ],
      "declare": false,
      "start": 1013,
      "end": 1074
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "interfaceType1Object2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1075,
            "end": 1096
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "bar1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1097,
            "end": 1101
          },
          "optional": false,
          "computed": false,
          "start": 1075,
          "end": 1101
        },
        "right": {
          "type": "Literal",
          "value": 2,
          "raw": "2",
          "start": 1104,
          "end": 1105
        },
        "start": 1075,
        "end": 1105
      },
      "directive": null,
      "start": 1075,
      "end": 1106
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
            "name": "interfaceType2Object1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1111,
            "end": 1132
          },
          "init": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "interfaceType2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1136,
                "end": 1150
              },
              "typeArguments": null,
              "start": 1136,
              "end": 1150
            },
            "expression": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bar2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1153,
                    "end": 1157
                  },
                  "value": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 1159,
                    "end": 1160
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1153,
                  "end": 1160
                }
              ],
              "start": 1151,
              "end": 1162
            },
            "start": 1135,
            "end": 1162
          },
          "definite": false,
          "start": 1111,
          "end": 1162
        }
      ],
      "declare": false,
      "start": 1107,
      "end": 1163
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "interfaceType2Object1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1164,
            "end": 1185
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "bar2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1186,
            "end": 1190
          },
          "optional": false,
          "computed": false,
          "start": 1164,
          "end": 1190
        },
        "right": {
          "type": "Literal",
          "value": 2,
          "raw": "2",
          "start": 1193,
          "end": 1194
        },
        "start": 1164,
        "end": 1194
      },
      "directive": null,
      "start": 1164,
      "end": 1195
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
            "name": "interfaceType2Object2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1200,
            "end": 1221
          },
          "init": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "interfaceType2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1225,
                "end": 1244
              },
              "typeArguments": null,
              "start": 1225,
              "end": 1244
            },
            "expression": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bar2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1247,
                    "end": 1251
                  },
                  "value": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 1253,
                    "end": 1254
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1247,
                  "end": 1254
                }
              ],
              "start": 1245,
              "end": 1256
            },
            "start": 1224,
            "end": 1256
          },
          "definite": false,
          "start": 1200,
          "end": 1256
        }
      ],
      "declare": false,
      "start": 1196,
      "end": 1257
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "interfaceType2Object2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1258,
            "end": 1279
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "bar2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1280,
            "end": 1284
          },
          "optional": false,
          "computed": false,
          "start": 1258,
          "end": 1284
        },
        "right": {
          "type": "Literal",
          "value": 2,
          "raw": "2",
          "start": 1287,
          "end": 1288
        },
        "start": 1258,
        "end": 1288
      },
      "directive": null,
      "start": 1258,
      "end": 1289
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 1311,
        "end": 1320
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "func",
              "optional": false,
              "typeAnnotation": null,
              "start": 1335,
              "end": 1339
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
                  "name": "arg1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1346,
                      "end": 1352
                    },
                    "start": 1344,
                    "end": 1352
                  },
                  "start": 1340,
                  "end": 1352
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arg2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1365,
                      "end": 1371
                    },
                    "start": 1363,
                    "end": 1371
                  },
                  "start": 1354,
                  "end": 1371
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arg3",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 1384,
                      "end": 1391
                    },
                    "start": 1382,
                    "end": 1391
                  },
                  "start": 1373,
                  "end": 1391
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arg4",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1399,
                      "end": 1405
                    },
                    "start": 1397,
                    "end": 1405
                  },
                  "start": 1393,
                  "end": 1405
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
                        "name": "arg1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1418,
                        "end": 1427
                      },
                      "right": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 1430,
                        "end": 1431
                      },
                      "start": 1418,
                      "end": 1431
                    },
                    "directive": null,
                    "start": 1418,
                    "end": 1432
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "arg2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1441,
                        "end": 1445
                      },
                      "right": {
                        "type": "Literal",
                        "value": "string",
                        "raw": "'string'",
                        "start": 1448,
                        "end": 1456
                      },
                      "start": 1441,
                      "end": 1456
                    },
                    "directive": null,
                    "start": 1441,
                    "end": 1457
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "arg3",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1466,
                        "end": 1475
                      },
                      "right": {
                        "type": "Literal",
                        "value": true,
                        "raw": "true",
                        "start": 1478,
                        "end": 1482
                      },
                      "start": 1466,
                      "end": 1482
                    },
                    "directive": null,
                    "start": 1466,
                    "end": 1483
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "arg4",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1492,
                        "end": 1496
                      },
                      "right": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 1499,
                        "end": 1500
                      },
                      "start": 1492,
                      "end": 1500
                    },
                    "directive": null,
                    "start": 1492,
                    "end": 1501
                  }
                ],
                "start": 1407,
                "end": 1507
              },
              "expression": false,
              "start": 1339,
              "end": 1507
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 1328,
            "end": 1507
          }
        ],
        "start": 1321,
        "end": 1509
      },
      "abstract": false,
      "declare": false,
      "start": 1305,
      "end": 1509
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "constructorTestClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 1533,
        "end": 1553
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 1561,
              "end": 1572
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
                  "type": "TSParameterProperty",
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "arg1",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1587,
                        "end": 1593
                      },
                      "start": 1585,
                      "end": 1593
                    },
                    "start": 1581,
                    "end": 1593
                  },
                  "readonly": false,
                  "static": false,
                  "start": 1574,
                  "end": 1593
                },
                {
                  "type": "TSParameterProperty",
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "arg2",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1612,
                        "end": 1618
                      },
                      "start": 1610,
                      "end": 1618
                    },
                    "start": 1601,
                    "end": 1618
                  },
                  "readonly": false,
                  "static": false,
                  "start": 1594,
                  "end": 1618
                },
                {
                  "type": "TSParameterProperty",
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "arg3",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1637,
                        "end": 1644
                      },
                      "start": 1635,
                      "end": 1644
                    },
                    "start": 1626,
                    "end": 1644
                  },
                  "readonly": false,
                  "static": false,
                  "start": 1619,
                  "end": 1644
                },
                {
                  "type": "TSParameterProperty",
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "arg4",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1658,
                        "end": 1664
                      },
                      "start": 1656,
                      "end": 1664
                    },
                    "start": 1652,
                    "end": 1664
                  },
                  "readonly": false,
                  "static": false,
                  "start": 1645,
                  "end": 1664
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 1666,
                "end": 1674
              },
              "expression": false,
              "start": 1573,
              "end": 1674
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1561,
            "end": 1674
          }
        ],
        "start": 1554,
        "end": 1676
      },
      "abstract": false,
      "declare": false,
      "start": 1527,
      "end": 1676
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
            "name": "constructorTestObject",
            "optional": false,
            "typeAnnotation": null,
            "start": 1681,
            "end": 1702
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructorTestClass",
              "optional": false,
              "typeAnnotation": null,
              "start": 1709,
              "end": 1729
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1730,
                "end": 1731
              },
              {
                "type": "Literal",
                "value": "string",
                "raw": "'string'",
                "start": 1733,
                "end": 1741
              },
              {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 1743,
                "end": 1747
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 1749,
                "end": 1750
              }
            ],
            "start": 1705,
            "end": 1751
          },
          "definite": false,
          "start": 1681,
          "end": 1751
        }
      ],
      "declare": false,
      "start": 1677,
      "end": 1752
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "constructorTestObject",
            "optional": false,
            "typeAnnotation": null,
            "start": 1753,
            "end": 1774
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "arg1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1775,
            "end": 1784
          },
          "optional": false,
          "computed": false,
          "start": 1753,
          "end": 1784
        },
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1787,
          "end": 1788
        },
        "start": 1753,
        "end": 1788
      },
      "directive": null,
      "start": 1753,
      "end": 1789
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "constructorTestObject",
            "optional": false,
            "typeAnnotation": null,
            "start": 1790,
            "end": 1811
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "arg2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1812,
            "end": 1816
          },
          "optional": false,
          "computed": false,
          "start": 1790,
          "end": 1816
        },
        "right": {
          "type": "Literal",
          "value": "string",
          "raw": "'string'",
          "start": 1819,
          "end": 1827
        },
        "start": 1790,
        "end": 1827
      },
      "directive": null,
      "start": 1790,
      "end": 1828
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "constructorTestObject",
            "optional": false,
            "typeAnnotation": null,
            "start": 1829,
            "end": 1850
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "arg3",
            "optional": false,
            "typeAnnotation": null,
            "start": 1851,
            "end": 1860
          },
          "optional": false,
          "computed": false,
          "start": 1829,
          "end": 1860
        },
        "right": {
          "type": "Literal",
          "value": true,
          "raw": "true",
          "start": 1863,
          "end": 1867
        },
        "start": 1829,
        "end": 1867
      },
      "directive": null,
      "start": 1829,
      "end": 1868
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "constructorTestObject",
            "optional": false,
            "typeAnnotation": null,
            "start": 1869,
            "end": 1890
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "arg4",
            "optional": false,
            "typeAnnotation": null,
            "start": 1891,
            "end": 1895
          },
          "optional": false,
          "computed": false,
          "start": 1869,
          "end": 1895
        },
        "right": {
          "type": "Literal",
          "value": 2,
          "raw": "2",
          "start": 1898,
          "end": 1899
        },
        "start": 1869,
        "end": 1899
      },
      "directive": null,
      "start": 1869,
      "end": 1900
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "label1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1913,
        "end": 1924
      },
      "body": {
        "type": "WhileStatement",
        "test": {
          "type": "Literal",
          "value": false,
          "raw": "false",
          "start": 1938,
          "end": 1943
        },
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "WhileStatement",
              "test": {
                "type": "Literal",
                "value": false,
                "raw": "false",
                "start": 1966,
                "end": 1971
              },
              "body": {
                "type": "ContinueStatement",
                "label": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "label1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1993,
                  "end": 1999
                },
                "start": 1984,
                "end": 2000
              },
              "start": 1960,
              "end": 2000
            }
          ],
          "start": 1949,
          "end": 2054
        },
        "start": 1931,
        "end": 2054
      },
      "start": 1913,
      "end": 2054
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "label2",
        "optional": false,
        "typeAnnotation": null,
        "start": 2057,
        "end": 2063
      },
      "body": {
        "type": "WhileStatement",
        "test": {
          "type": "Literal",
          "value": false,
          "raw": "false",
          "start": 2077,
          "end": 2082
        },
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "WhileStatement",
              "test": {
                "type": "Literal",
                "value": false,
                "raw": "false",
                "start": 2105,
                "end": 2110
              },
              "body": {
                "type": "ContinueStatement",
                "label": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "label2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2132,
                  "end": 2143
                },
                "start": 2123,
                "end": 2144
              },
              "start": 2099,
              "end": 2144
            }
          ],
          "start": 2088,
          "end": 2198
        },
        "start": 2070,
        "end": 2198
      },
      "start": 2057,
      "end": 2198
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "label3",
        "optional": false,
        "typeAnnotation": null,
        "start": 2201,
        "end": 2207
      },
      "body": {
        "type": "WhileStatement",
        "test": {
          "type": "Literal",
          "value": false,
          "raw": "false",
          "start": 2221,
          "end": 2226
        },
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "WhileStatement",
              "test": {
                "type": "Literal",
                "value": false,
                "raw": "false",
                "start": 2249,
                "end": 2254
              },
              "body": {
                "type": "ContinueStatement",
                "label": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "label3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2276,
                  "end": 2282
                },
                "start": 2267,
                "end": 2283
              },
              "start": 2243,
              "end": 2283
            }
          ],
          "start": 2232,
          "end": 2337
        },
        "start": 2214,
        "end": 2337
      },
      "start": 2201,
      "end": 2337
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "label4",
        "optional": false,
        "typeAnnotation": null,
        "start": 2340,
        "end": 2351
      },
      "body": {
        "type": "WhileStatement",
        "test": {
          "type": "Literal",
          "value": false,
          "raw": "false",
          "start": 2365,
          "end": 2370
        },
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "WhileStatement",
              "test": {
                "type": "Literal",
                "value": false,
                "raw": "false",
                "start": 2393,
                "end": 2398
              },
              "body": {
                "type": "ContinueStatement",
                "label": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "label4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2420,
                  "end": 2431
                },
                "start": 2411,
                "end": 2432
              },
              "start": 2387,
              "end": 2432
            }
          ],
          "start": 2376,
          "end": 2486
        },
        "start": 2358,
        "end": 2486
      },
      "start": 2340,
      "end": 2486
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 117,
  "end": 2487
}
```
