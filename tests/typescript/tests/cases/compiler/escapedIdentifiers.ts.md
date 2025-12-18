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
        "start": 262,
        "end": 278
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
                        "start": 303,
                        "end": 309
                      },
                      "start": 301,
                      "end": 309
                    },
                    "start": 297,
                    "end": 309
                  },
                  "init": null,
                  "definite": false,
                  "start": 297,
                  "end": 309
                }
              ],
              "declare": false,
              "start": 293,
              "end": 310
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 286,
            "end": 310
          }
        ],
        "start": 279,
        "end": 312
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 247,
      "end": 312
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
            "start": 314,
            "end": 325
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "baz1",
            "optional": false,
            "typeAnnotation": null,
            "start": 326,
            "end": 330
          },
          "optional": false,
          "computed": false,
          "start": 314,
          "end": 330
        },
        "right": {
          "type": "Literal",
          "value": 3,
          "raw": "3",
          "start": 333,
          "end": 334
        },
        "start": 314,
        "end": 334
      },
      "directive": null,
      "start": 314,
      "end": 335
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
            "start": 336,
            "end": 352
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "baz1",
            "optional": false,
            "typeAnnotation": null,
            "start": 353,
            "end": 357
          },
          "optional": false,
          "computed": false,
          "start": 336,
          "end": 357
        },
        "right": {
          "type": "Literal",
          "value": 3,
          "raw": "3",
          "start": 360,
          "end": 361
        },
        "start": 336,
        "end": 361
      },
      "directive": null,
      "start": 336,
      "end": 362
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
            "start": 363,
            "end": 374
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "baz2",
            "optional": false,
            "typeAnnotation": null,
            "start": 375,
            "end": 379
          },
          "optional": false,
          "computed": false,
          "start": 363,
          "end": 379
        },
        "right": {
          "type": "Literal",
          "value": 3,
          "raw": "3",
          "start": 382,
          "end": 383
        },
        "start": 363,
        "end": 383
      },
      "directive": null,
      "start": 363,
      "end": 384
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
            "start": 385,
            "end": 401
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "baz2",
            "optional": false,
            "typeAnnotation": null,
            "start": 402,
            "end": 406
          },
          "optional": false,
          "computed": false,
          "start": 385,
          "end": 406
        },
        "right": {
          "type": "Literal",
          "value": 3,
          "raw": "3",
          "start": 409,
          "end": 410
        },
        "start": 385,
        "end": 410
      },
      "directive": null,
      "start": 385,
      "end": 411
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
        "start": 431,
        "end": 441
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
              "start": 456,
              "end": 460
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 462,
                "end": 468
              },
              "start": 460,
              "end": 468
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
            "start": 449,
            "end": 469
          }
        ],
        "start": 442,
        "end": 471
      },
      "abstract": false,
      "declare": false,
      "start": 425,
      "end": 471
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
        "start": 478,
        "end": 493
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
              "start": 508,
              "end": 512
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 514,
                "end": 520
              },
              "start": 512,
              "end": 520
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
            "start": 501,
            "end": 521
          }
        ],
        "start": 494,
        "end": 523
      },
      "abstract": false,
      "declare": false,
      "start": 472,
      "end": 523
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
            "start": 529,
            "end": 546
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "classType1",
              "optional": false,
              "typeAnnotation": null,
              "start": 553,
              "end": 563
            },
            "typeArguments": null,
            "arguments": [],
            "start": 549,
            "end": 565
          },
          "definite": false,
          "start": 529,
          "end": 565
        }
      ],
      "declare": false,
      "start": 525,
      "end": 566
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
            "start": 567,
            "end": 584
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo1",
            "optional": false,
            "typeAnnotation": null,
            "start": 585,
            "end": 589
          },
          "optional": false,
          "computed": false,
          "start": 567,
          "end": 589
        },
        "right": {
          "type": "Literal",
          "value": 2,
          "raw": "2",
          "start": 592,
          "end": 593
        },
        "start": 567,
        "end": 593
      },
      "directive": null,
      "start": 567,
      "end": 594
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
            "start": 599,
            "end": 616
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "classType1",
              "optional": false,
              "typeAnnotation": null,
              "start": 623,
              "end": 638
            },
            "typeArguments": null,
            "arguments": [],
            "start": 619,
            "end": 640
          },
          "definite": false,
          "start": 599,
          "end": 640
        }
      ],
      "declare": false,
      "start": 595,
      "end": 641
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
            "start": 642,
            "end": 659
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo1",
            "optional": false,
            "typeAnnotation": null,
            "start": 660,
            "end": 664
          },
          "optional": false,
          "computed": false,
          "start": 642,
          "end": 664
        },
        "right": {
          "type": "Literal",
          "value": 2,
          "raw": "2",
          "start": 667,
          "end": 668
        },
        "start": 642,
        "end": 668
      },
      "directive": null,
      "start": 642,
      "end": 669
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
            "start": 674,
            "end": 691
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "classType2",
              "optional": false,
              "typeAnnotation": null,
              "start": 698,
              "end": 708
            },
            "typeArguments": null,
            "arguments": [],
            "start": 694,
            "end": 710
          },
          "definite": false,
          "start": 674,
          "end": 710
        }
      ],
      "declare": false,
      "start": 670,
      "end": 711
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
            "start": 712,
            "end": 729
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo2",
            "optional": false,
            "typeAnnotation": null,
            "start": 730,
            "end": 734
          },
          "optional": false,
          "computed": false,
          "start": 712,
          "end": 734
        },
        "right": {
          "type": "Literal",
          "value": 2,
          "raw": "2",
          "start": 737,
          "end": 738
        },
        "start": 712,
        "end": 738
      },
      "directive": null,
      "start": 712,
      "end": 739
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
            "start": 744,
            "end": 761
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "classType2",
              "optional": false,
              "typeAnnotation": null,
              "start": 768,
              "end": 783
            },
            "typeArguments": null,
            "arguments": [],
            "start": 764,
            "end": 785
          },
          "definite": false,
          "start": 744,
          "end": 785
        }
      ],
      "declare": false,
      "start": 740,
      "end": 786
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
            "start": 787,
            "end": 804
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo2",
            "optional": false,
            "typeAnnotation": null,
            "start": 805,
            "end": 809
          },
          "optional": false,
          "computed": false,
          "start": 787,
          "end": 809
        },
        "right": {
          "type": "Literal",
          "value": 2,
          "raw": "2",
          "start": 812,
          "end": 813
        },
        "start": 787,
        "end": 813
      },
      "directive": null,
      "start": 787,
      "end": 814
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "interfaceType1",
        "optional": false,
        "typeAnnotation": null,
        "start": 840,
        "end": 854
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
              "start": 862,
              "end": 866
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 868,
                "end": 874
              },
              "start": 866,
              "end": 874
            },
            "accessibility": null,
            "static": false,
            "start": 862,
            "end": 875
          }
        ],
        "start": 855,
        "end": 877
      },
      "declare": false,
      "start": 830,
      "end": 877
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "interfaceType2",
        "optional": false,
        "typeAnnotation": null,
        "start": 888,
        "end": 907
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
              "start": 915,
              "end": 919
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 921,
                "end": 927
              },
              "start": 919,
              "end": 927
            },
            "accessibility": null,
            "static": false,
            "start": 915,
            "end": 928
          }
        ],
        "start": 908,
        "end": 930
      },
      "declare": false,
      "start": 878,
      "end": 930
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
            "start": 936,
            "end": 957
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
                "start": 961,
                "end": 975
              },
              "typeArguments": null,
              "start": 961,
              "end": 975
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
                    "start": 978,
                    "end": 982
                  },
                  "value": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 984,
                    "end": 985
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 978,
                  "end": 985
                }
              ],
              "start": 976,
              "end": 987
            },
            "start": 960,
            "end": 987
          },
          "definite": false,
          "start": 936,
          "end": 987
        }
      ],
      "declare": false,
      "start": 932,
      "end": 988
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
            "start": 989,
            "end": 1010
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "bar1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1011,
            "end": 1015
          },
          "optional": false,
          "computed": false,
          "start": 989,
          "end": 1015
        },
        "right": {
          "type": "Literal",
          "value": 2,
          "raw": "2",
          "start": 1018,
          "end": 1019
        },
        "start": 989,
        "end": 1019
      },
      "directive": null,
      "start": 989,
      "end": 1020
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
            "start": 1025,
            "end": 1046
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
                "start": 1050,
                "end": 1069
              },
              "typeArguments": null,
              "start": 1050,
              "end": 1069
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
                    "start": 1072,
                    "end": 1076
                  },
                  "value": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 1078,
                    "end": 1079
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1072,
                  "end": 1079
                }
              ],
              "start": 1070,
              "end": 1081
            },
            "start": 1049,
            "end": 1081
          },
          "definite": false,
          "start": 1025,
          "end": 1081
        }
      ],
      "declare": false,
      "start": 1021,
      "end": 1082
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
            "start": 1083,
            "end": 1104
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "bar1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1105,
            "end": 1109
          },
          "optional": false,
          "computed": false,
          "start": 1083,
          "end": 1109
        },
        "right": {
          "type": "Literal",
          "value": 2,
          "raw": "2",
          "start": 1112,
          "end": 1113
        },
        "start": 1083,
        "end": 1113
      },
      "directive": null,
      "start": 1083,
      "end": 1114
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
            "start": 1119,
            "end": 1140
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
                "start": 1144,
                "end": 1158
              },
              "typeArguments": null,
              "start": 1144,
              "end": 1158
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
                    "start": 1161,
                    "end": 1165
                  },
                  "value": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 1167,
                    "end": 1168
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1161,
                  "end": 1168
                }
              ],
              "start": 1159,
              "end": 1170
            },
            "start": 1143,
            "end": 1170
          },
          "definite": false,
          "start": 1119,
          "end": 1170
        }
      ],
      "declare": false,
      "start": 1115,
      "end": 1171
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
            "start": 1172,
            "end": 1193
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "bar2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1194,
            "end": 1198
          },
          "optional": false,
          "computed": false,
          "start": 1172,
          "end": 1198
        },
        "right": {
          "type": "Literal",
          "value": 2,
          "raw": "2",
          "start": 1201,
          "end": 1202
        },
        "start": 1172,
        "end": 1202
      },
      "directive": null,
      "start": 1172,
      "end": 1203
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
            "start": 1208,
            "end": 1229
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
                "start": 1233,
                "end": 1252
              },
              "typeArguments": null,
              "start": 1233,
              "end": 1252
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
                    "start": 1255,
                    "end": 1259
                  },
                  "value": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 1261,
                    "end": 1262
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1255,
                  "end": 1262
                }
              ],
              "start": 1253,
              "end": 1264
            },
            "start": 1232,
            "end": 1264
          },
          "definite": false,
          "start": 1208,
          "end": 1264
        }
      ],
      "declare": false,
      "start": 1204,
      "end": 1265
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
            "start": 1266,
            "end": 1287
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "bar2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1288,
            "end": 1292
          },
          "optional": false,
          "computed": false,
          "start": 1266,
          "end": 1292
        },
        "right": {
          "type": "Literal",
          "value": 2,
          "raw": "2",
          "start": 1295,
          "end": 1296
        },
        "start": 1266,
        "end": 1296
      },
      "directive": null,
      "start": 1266,
      "end": 1297
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
        "start": 1319,
        "end": 1328
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
              "start": 1343,
              "end": 1347
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
                      "start": 1354,
                      "end": 1360
                    },
                    "start": 1352,
                    "end": 1360
                  },
                  "start": 1348,
                  "end": 1360
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
                      "start": 1373,
                      "end": 1379
                    },
                    "start": 1371,
                    "end": 1379
                  },
                  "start": 1362,
                  "end": 1379
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
                      "start": 1392,
                      "end": 1399
                    },
                    "start": 1390,
                    "end": 1399
                  },
                  "start": 1381,
                  "end": 1399
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
                      "start": 1407,
                      "end": 1413
                    },
                    "start": 1405,
                    "end": 1413
                  },
                  "start": 1401,
                  "end": 1413
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
                        "start": 1426,
                        "end": 1435
                      },
                      "right": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 1438,
                        "end": 1439
                      },
                      "start": 1426,
                      "end": 1439
                    },
                    "directive": null,
                    "start": 1426,
                    "end": 1440
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
                        "start": 1449,
                        "end": 1453
                      },
                      "right": {
                        "type": "Literal",
                        "value": "string",
                        "raw": "'string'",
                        "start": 1456,
                        "end": 1464
                      },
                      "start": 1449,
                      "end": 1464
                    },
                    "directive": null,
                    "start": 1449,
                    "end": 1465
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
                        "start": 1474,
                        "end": 1483
                      },
                      "right": {
                        "type": "Literal",
                        "value": true,
                        "raw": "true",
                        "start": 1486,
                        "end": 1490
                      },
                      "start": 1474,
                      "end": 1490
                    },
                    "directive": null,
                    "start": 1474,
                    "end": 1491
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
                        "start": 1500,
                        "end": 1504
                      },
                      "right": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 1507,
                        "end": 1508
                      },
                      "start": 1500,
                      "end": 1508
                    },
                    "directive": null,
                    "start": 1500,
                    "end": 1509
                  }
                ],
                "start": 1415,
                "end": 1515
              },
              "expression": false,
              "start": 1347,
              "end": 1515
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 1336,
            "end": 1515
          }
        ],
        "start": 1329,
        "end": 1517
      },
      "abstract": false,
      "declare": false,
      "start": 1313,
      "end": 1517
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
        "start": 1541,
        "end": 1561
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
              "start": 1569,
              "end": 1580
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
                        "start": 1595,
                        "end": 1601
                      },
                      "start": 1593,
                      "end": 1601
                    },
                    "start": 1589,
                    "end": 1601
                  },
                  "readonly": false,
                  "static": false,
                  "start": 1582,
                  "end": 1601
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
                        "start": 1620,
                        "end": 1626
                      },
                      "start": 1618,
                      "end": 1626
                    },
                    "start": 1609,
                    "end": 1626
                  },
                  "readonly": false,
                  "static": false,
                  "start": 1602,
                  "end": 1626
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
                        "start": 1645,
                        "end": 1652
                      },
                      "start": 1643,
                      "end": 1652
                    },
                    "start": 1634,
                    "end": 1652
                  },
                  "readonly": false,
                  "static": false,
                  "start": 1627,
                  "end": 1652
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
                        "start": 1666,
                        "end": 1672
                      },
                      "start": 1664,
                      "end": 1672
                    },
                    "start": 1660,
                    "end": 1672
                  },
                  "readonly": false,
                  "static": false,
                  "start": 1653,
                  "end": 1672
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 1674,
                "end": 1682
              },
              "expression": false,
              "start": 1581,
              "end": 1682
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1569,
            "end": 1682
          }
        ],
        "start": 1562,
        "end": 1684
      },
      "abstract": false,
      "declare": false,
      "start": 1535,
      "end": 1684
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
            "start": 1689,
            "end": 1710
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructorTestClass",
              "optional": false,
              "typeAnnotation": null,
              "start": 1717,
              "end": 1737
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1738,
                "end": 1739
              },
              {
                "type": "Literal",
                "value": "string",
                "raw": "'string'",
                "start": 1741,
                "end": 1749
              },
              {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 1751,
                "end": 1755
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 1757,
                "end": 1758
              }
            ],
            "start": 1713,
            "end": 1759
          },
          "definite": false,
          "start": 1689,
          "end": 1759
        }
      ],
      "declare": false,
      "start": 1685,
      "end": 1760
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
            "start": 1761,
            "end": 1782
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "arg1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1783,
            "end": 1792
          },
          "optional": false,
          "computed": false,
          "start": 1761,
          "end": 1792
        },
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1795,
          "end": 1796
        },
        "start": 1761,
        "end": 1796
      },
      "directive": null,
      "start": 1761,
      "end": 1797
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
            "start": 1798,
            "end": 1819
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "arg2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1820,
            "end": 1824
          },
          "optional": false,
          "computed": false,
          "start": 1798,
          "end": 1824
        },
        "right": {
          "type": "Literal",
          "value": "string",
          "raw": "'string'",
          "start": 1827,
          "end": 1835
        },
        "start": 1798,
        "end": 1835
      },
      "directive": null,
      "start": 1798,
      "end": 1836
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
            "start": 1837,
            "end": 1858
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "arg3",
            "optional": false,
            "typeAnnotation": null,
            "start": 1859,
            "end": 1868
          },
          "optional": false,
          "computed": false,
          "start": 1837,
          "end": 1868
        },
        "right": {
          "type": "Literal",
          "value": true,
          "raw": "true",
          "start": 1871,
          "end": 1875
        },
        "start": 1837,
        "end": 1875
      },
      "directive": null,
      "start": 1837,
      "end": 1876
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
            "start": 1877,
            "end": 1898
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "arg4",
            "optional": false,
            "typeAnnotation": null,
            "start": 1899,
            "end": 1903
          },
          "optional": false,
          "computed": false,
          "start": 1877,
          "end": 1903
        },
        "right": {
          "type": "Literal",
          "value": 2,
          "raw": "2",
          "start": 1906,
          "end": 1907
        },
        "start": 1877,
        "end": 1907
      },
      "directive": null,
      "start": 1877,
      "end": 1908
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "label1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1921,
        "end": 1932
      },
      "body": {
        "type": "WhileStatement",
        "test": {
          "type": "Literal",
          "value": false,
          "raw": "false",
          "start": 1946,
          "end": 1951
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
                "start": 1974,
                "end": 1979
              },
              "body": {
                "type": "ContinueStatement",
                "label": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "label1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2001,
                  "end": 2007
                },
                "start": 1992,
                "end": 2008
              },
              "start": 1968,
              "end": 2008
            }
          ],
          "start": 1957,
          "end": 2062
        },
        "start": 1939,
        "end": 2062
      },
      "start": 1921,
      "end": 2062
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "label2",
        "optional": false,
        "typeAnnotation": null,
        "start": 2065,
        "end": 2071
      },
      "body": {
        "type": "WhileStatement",
        "test": {
          "type": "Literal",
          "value": false,
          "raw": "false",
          "start": 2085,
          "end": 2090
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
                "start": 2113,
                "end": 2118
              },
              "body": {
                "type": "ContinueStatement",
                "label": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "label2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2140,
                  "end": 2151
                },
                "start": 2131,
                "end": 2152
              },
              "start": 2107,
              "end": 2152
            }
          ],
          "start": 2096,
          "end": 2206
        },
        "start": 2078,
        "end": 2206
      },
      "start": 2065,
      "end": 2206
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "label3",
        "optional": false,
        "typeAnnotation": null,
        "start": 2209,
        "end": 2215
      },
      "body": {
        "type": "WhileStatement",
        "test": {
          "type": "Literal",
          "value": false,
          "raw": "false",
          "start": 2229,
          "end": 2234
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
                "start": 2257,
                "end": 2262
              },
              "body": {
                "type": "ContinueStatement",
                "label": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "label3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2284,
                  "end": 2290
                },
                "start": 2275,
                "end": 2291
              },
              "start": 2251,
              "end": 2291
            }
          ],
          "start": 2240,
          "end": 2345
        },
        "start": 2222,
        "end": 2345
      },
      "start": 2209,
      "end": 2345
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "label4",
        "optional": false,
        "typeAnnotation": null,
        "start": 2348,
        "end": 2359
      },
      "body": {
        "type": "WhileStatement",
        "test": {
          "type": "Literal",
          "value": false,
          "raw": "false",
          "start": 2373,
          "end": 2378
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
                "start": 2401,
                "end": 2406
              },
              "body": {
                "type": "ContinueStatement",
                "label": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "label4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2428,
                  "end": 2439
                },
                "start": 2419,
                "end": 2440
              },
              "start": 2395,
              "end": 2440
            }
          ],
          "start": 2384,
          "end": 2494
        },
        "start": 2366,
        "end": 2494
      },
      "start": 2348,
      "end": 2494
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 117,
  "end": 2495
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 117,
    "end": 120,
    "range": [
      117,
      120
    ]
  },
  {
    "type": "Identifier",
    "value": "\\u0061",
    "start": 121,
    "end": 127,
    "range": [
      121,
      127
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 128,
    "end": 129,
    "range": [
      128,
      129
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 130,
    "end": 131,
    "range": [
      130,
      131
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 131,
    "end": 132,
    "range": [
      131,
      132
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 133,
    "end": 134,
    "range": [
      133,
      134
    ]
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 135,
    "end": 137,
    "range": [
      135,
      137
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 137,
    "end": 138,
    "range": [
      137,
      138
    ]
  },
  {
    "type": "Identifier",
    "value": "\\u0061",
    "start": 139,
    "end": 145,
    "range": [
      139,
      145
    ]
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 146,
    "end": 148,
    "range": [
      146,
      148
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 148,
    "end": 149,
    "range": [
      148,
      149
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 151,
    "end": 154,
    "range": [
      151,
      154
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 155,
    "end": 156,
    "range": [
      155,
      156
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 157,
    "end": 158,
    "range": [
      157,
      158
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
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
    "value": "b",
    "start": 162,
    "end": 163,
    "range": [
      162,
      163
    ]
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 164,
    "end": 166,
    "range": [
      164,
      166
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 166,
    "end": 167,
    "range": [
      166,
      167
    ]
  },
  {
    "type": "Identifier",
    "value": "\\u0062",
    "start": 168,
    "end": 174,
    "range": [
      168,
      174
    ]
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 175,
    "end": 177,
    "range": [
      175,
      177
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 177,
    "end": 178,
    "range": [
      177,
      178
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 191,
    "end": 200,
    "range": [
      191,
      200
    ]
  },
  {
    "type": "Identifier",
    "value": "moduleType1",
    "start": 201,
    "end": 212,
    "range": [
      201,
      212
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 213,
    "end": 214,
    "range": [
      213,
      214
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 220,
    "end": 226,
    "range": [
      220,
      226
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 227,
    "end": 230,
    "range": [
      227,
      230
    ]
  },
  {
    "type": "Identifier",
    "value": "baz1",
    "start": 231,
    "end": 235,
    "range": [
      231,
      235
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 235,
    "end": 236,
    "range": [
      235,
      236
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 237,
    "end": 243,
    "range": [
      237,
      243
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 243,
    "end": 244,
    "range": [
      243,
      244
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 245,
    "end": 246,
    "range": [
      245,
      246
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 247,
    "end": 254,
    "range": [
      247,
      254
    ]
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 255,
    "end": 261,
    "range": [
      255,
      261
    ]
  },
  {
    "type": "Identifier",
    "value": "moduleType\\u0032",
    "start": 262,
    "end": 278,
    "range": [
      262,
      278
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 279,
    "end": 280,
    "range": [
      279,
      280
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 286,
    "end": 292,
    "range": [
      286,
      292
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 293,
    "end": 296,
    "range": [
      293,
      296
    ]
  },
  {
    "type": "Identifier",
    "value": "baz2",
    "start": 297,
    "end": 301,
    "range": [
      297,
      301
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 301,
    "end": 302,
    "range": [
      301,
      302
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 303,
    "end": 309,
    "range": [
      303,
      309
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 309,
    "end": 310,
    "range": [
      309,
      310
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 311,
    "end": 312,
    "range": [
      311,
      312
    ]
  },
  {
    "type": "Identifier",
    "value": "moduleType1",
    "start": 314,
    "end": 325,
    "range": [
      314,
      325
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 325,
    "end": 326,
    "range": [
      325,
      326
    ]
  },
  {
    "type": "Identifier",
    "value": "baz1",
    "start": 326,
    "end": 330,
    "range": [
      326,
      330
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 331,
    "end": 332,
    "range": [
      331,
      332
    ]
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 333,
    "end": 334,
    "range": [
      333,
      334
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 334,
    "end": 335,
    "range": [
      334,
      335
    ]
  },
  {
    "type": "Identifier",
    "value": "moduleType\\u0031",
    "start": 336,
    "end": 352,
    "range": [
      336,
      352
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 352,
    "end": 353,
    "range": [
      352,
      353
    ]
  },
  {
    "type": "Identifier",
    "value": "baz1",
    "start": 353,
    "end": 357,
    "range": [
      353,
      357
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 358,
    "end": 359,
    "range": [
      358,
      359
    ]
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 360,
    "end": 361,
    "range": [
      360,
      361
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 361,
    "end": 362,
    "range": [
      361,
      362
    ]
  },
  {
    "type": "Identifier",
    "value": "moduleType2",
    "start": 363,
    "end": 374,
    "range": [
      363,
      374
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 374,
    "end": 375,
    "range": [
      374,
      375
    ]
  },
  {
    "type": "Identifier",
    "value": "baz2",
    "start": 375,
    "end": 379,
    "range": [
      375,
      379
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 380,
    "end": 381,
    "range": [
      380,
      381
    ]
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 382,
    "end": 383,
    "range": [
      382,
      383
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 383,
    "end": 384,
    "range": [
      383,
      384
    ]
  },
  {
    "type": "Identifier",
    "value": "moduleType\\u0032",
    "start": 385,
    "end": 401,
    "range": [
      385,
      401
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 401,
    "end": 402,
    "range": [
      401,
      402
    ]
  },
  {
    "type": "Identifier",
    "value": "baz2",
    "start": 402,
    "end": 406,
    "range": [
      402,
      406
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 407,
    "end": 408,
    "range": [
      407,
      408
    ]
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 409,
    "end": 410,
    "range": [
      409,
      410
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 410,
    "end": 411,
    "range": [
      410,
      411
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 425,
    "end": 430,
    "range": [
      425,
      430
    ]
  },
  {
    "type": "Identifier",
    "value": "classType1",
    "start": 431,
    "end": 441,
    "range": [
      431,
      441
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 442,
    "end": 443,
    "range": [
      442,
      443
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 449,
    "end": 455,
    "range": [
      449,
      455
    ]
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 456,
    "end": 460,
    "range": [
      456,
      460
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 460,
    "end": 461,
    "range": [
      460,
      461
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 462,
    "end": 468,
    "range": [
      462,
      468
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 468,
    "end": 469,
    "range": [
      468,
      469
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 470,
    "end": 471,
    "range": [
      470,
      471
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 472,
    "end": 477,
    "range": [
      472,
      477
    ]
  },
  {
    "type": "Identifier",
    "value": "classType\\u0032",
    "start": 478,
    "end": 493,
    "range": [
      478,
      493
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 494,
    "end": 495,
    "range": [
      494,
      495
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 501,
    "end": 507,
    "range": [
      501,
      507
    ]
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 508,
    "end": 512,
    "range": [
      508,
      512
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 512,
    "end": 513,
    "range": [
      512,
      513
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 514,
    "end": 520,
    "range": [
      514,
      520
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 520,
    "end": 521,
    "range": [
      520,
      521
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 522,
    "end": 523,
    "range": [
      522,
      523
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 525,
    "end": 528,
    "range": [
      525,
      528
    ]
  },
  {
    "type": "Identifier",
    "value": "classType1Object1",
    "start": 529,
    "end": 546,
    "range": [
      529,
      546
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 547,
    "end": 548,
    "range": [
      547,
      548
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 549,
    "end": 552,
    "range": [
      549,
      552
    ]
  },
  {
    "type": "Identifier",
    "value": "classType1",
    "start": 553,
    "end": 563,
    "range": [
      553,
      563
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 563,
    "end": 564,
    "range": [
      563,
      564
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 564,
    "end": 565,
    "range": [
      564,
      565
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 565,
    "end": 566,
    "range": [
      565,
      566
    ]
  },
  {
    "type": "Identifier",
    "value": "classType1Object1",
    "start": 567,
    "end": 584,
    "range": [
      567,
      584
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 584,
    "end": 585,
    "range": [
      584,
      585
    ]
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 585,
    "end": 589,
    "range": [
      585,
      589
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 590,
    "end": 591,
    "range": [
      590,
      591
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 592,
    "end": 593,
    "range": [
      592,
      593
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 593,
    "end": 594,
    "range": [
      593,
      594
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 595,
    "end": 598,
    "range": [
      595,
      598
    ]
  },
  {
    "type": "Identifier",
    "value": "classType1Object2",
    "start": 599,
    "end": 616,
    "range": [
      599,
      616
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 617,
    "end": 618,
    "range": [
      617,
      618
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 619,
    "end": 622,
    "range": [
      619,
      622
    ]
  },
  {
    "type": "Identifier",
    "value": "classType\\u0031",
    "start": 623,
    "end": 638,
    "range": [
      623,
      638
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 638,
    "end": 639,
    "range": [
      638,
      639
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 639,
    "end": 640,
    "range": [
      639,
      640
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 640,
    "end": 641,
    "range": [
      640,
      641
    ]
  },
  {
    "type": "Identifier",
    "value": "classType1Object2",
    "start": 642,
    "end": 659,
    "range": [
      642,
      659
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 659,
    "end": 660,
    "range": [
      659,
      660
    ]
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 660,
    "end": 664,
    "range": [
      660,
      664
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 665,
    "end": 666,
    "range": [
      665,
      666
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 667,
    "end": 668,
    "range": [
      667,
      668
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 668,
    "end": 669,
    "range": [
      668,
      669
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 670,
    "end": 673,
    "range": [
      670,
      673
    ]
  },
  {
    "type": "Identifier",
    "value": "classType2Object1",
    "start": 674,
    "end": 691,
    "range": [
      674,
      691
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 692,
    "end": 693,
    "range": [
      692,
      693
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 694,
    "end": 697,
    "range": [
      694,
      697
    ]
  },
  {
    "type": "Identifier",
    "value": "classType2",
    "start": 698,
    "end": 708,
    "range": [
      698,
      708
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 708,
    "end": 709,
    "range": [
      708,
      709
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 709,
    "end": 710,
    "range": [
      709,
      710
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 710,
    "end": 711,
    "range": [
      710,
      711
    ]
  },
  {
    "type": "Identifier",
    "value": "classType2Object1",
    "start": 712,
    "end": 729,
    "range": [
      712,
      729
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 729,
    "end": 730,
    "range": [
      729,
      730
    ]
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 730,
    "end": 734,
    "range": [
      730,
      734
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 735,
    "end": 736,
    "range": [
      735,
      736
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 737,
    "end": 738,
    "range": [
      737,
      738
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 738,
    "end": 739,
    "range": [
      738,
      739
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 740,
    "end": 743,
    "range": [
      740,
      743
    ]
  },
  {
    "type": "Identifier",
    "value": "classType2Object2",
    "start": 744,
    "end": 761,
    "range": [
      744,
      761
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 762,
    "end": 763,
    "range": [
      762,
      763
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 764,
    "end": 767,
    "range": [
      764,
      767
    ]
  },
  {
    "type": "Identifier",
    "value": "classType\\u0032",
    "start": 768,
    "end": 783,
    "range": [
      768,
      783
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 783,
    "end": 784,
    "range": [
      783,
      784
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 784,
    "end": 785,
    "range": [
      784,
      785
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 785,
    "end": 786,
    "range": [
      785,
      786
    ]
  },
  {
    "type": "Identifier",
    "value": "classType2Object2",
    "start": 787,
    "end": 804,
    "range": [
      787,
      804
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 804,
    "end": 805,
    "range": [
      804,
      805
    ]
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 805,
    "end": 809,
    "range": [
      805,
      809
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 810,
    "end": 811,
    "range": [
      810,
      811
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 812,
    "end": 813,
    "range": [
      812,
      813
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 813,
    "end": 814,
    "range": [
      813,
      814
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 830,
    "end": 839,
    "range": [
      830,
      839
    ]
  },
  {
    "type": "Identifier",
    "value": "interfaceType1",
    "start": 840,
    "end": 854,
    "range": [
      840,
      854
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 855,
    "end": 856,
    "range": [
      855,
      856
    ]
  },
  {
    "type": "Identifier",
    "value": "bar1",
    "start": 862,
    "end": 866,
    "range": [
      862,
      866
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 866,
    "end": 867,
    "range": [
      866,
      867
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 868,
    "end": 874,
    "range": [
      868,
      874
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 874,
    "end": 875,
    "range": [
      874,
      875
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 876,
    "end": 877,
    "range": [
      876,
      877
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 878,
    "end": 887,
    "range": [
      878,
      887
    ]
  },
  {
    "type": "Identifier",
    "value": "interfaceType\\u0032",
    "start": 888,
    "end": 907,
    "range": [
      888,
      907
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 908,
    "end": 909,
    "range": [
      908,
      909
    ]
  },
  {
    "type": "Identifier",
    "value": "bar2",
    "start": 915,
    "end": 919,
    "range": [
      915,
      919
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 919,
    "end": 920,
    "range": [
      919,
      920
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 921,
    "end": 927,
    "range": [
      921,
      927
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 927,
    "end": 928,
    "range": [
      927,
      928
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 929,
    "end": 930,
    "range": [
      929,
      930
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 932,
    "end": 935,
    "range": [
      932,
      935
    ]
  },
  {
    "type": "Identifier",
    "value": "interfaceType1Object1",
    "start": 936,
    "end": 957,
    "range": [
      936,
      957
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 958,
    "end": 959,
    "range": [
      958,
      959
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 960,
    "end": 961,
    "range": [
      960,
      961
    ]
  },
  {
    "type": "Identifier",
    "value": "interfaceType1",
    "start": 961,
    "end": 975,
    "range": [
      961,
      975
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 975,
    "end": 976,
    "range": [
      975,
      976
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 976,
    "end": 977,
    "range": [
      976,
      977
    ]
  },
  {
    "type": "Identifier",
    "value": "bar1",
    "start": 978,
    "end": 982,
    "range": [
      978,
      982
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 982,
    "end": 983,
    "range": [
      982,
      983
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 984,
    "end": 985,
    "range": [
      984,
      985
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
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
  },
  {
    "type": "Identifier",
    "value": "interfaceType1Object1",
    "start": 989,
    "end": 1010,
    "range": [
      989,
      1010
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1010,
    "end": 1011,
    "range": [
      1010,
      1011
    ]
  },
  {
    "type": "Identifier",
    "value": "bar1",
    "start": 1011,
    "end": 1015,
    "range": [
      1011,
      1015
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1016,
    "end": 1017,
    "range": [
      1016,
      1017
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1018,
    "end": 1019,
    "range": [
      1018,
      1019
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1019,
    "end": 1020,
    "range": [
      1019,
      1020
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1021,
    "end": 1024,
    "range": [
      1021,
      1024
    ]
  },
  {
    "type": "Identifier",
    "value": "interfaceType1Object2",
    "start": 1025,
    "end": 1046,
    "range": [
      1025,
      1046
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1047,
    "end": 1048,
    "range": [
      1047,
      1048
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1049,
    "end": 1050,
    "range": [
      1049,
      1050
    ]
  },
  {
    "type": "Identifier",
    "value": "interfaceType\\u0031",
    "start": 1050,
    "end": 1069,
    "range": [
      1050,
      1069
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1069,
    "end": 1070,
    "range": [
      1069,
      1070
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1070,
    "end": 1071,
    "range": [
      1070,
      1071
    ]
  },
  {
    "type": "Identifier",
    "value": "bar1",
    "start": 1072,
    "end": 1076,
    "range": [
      1072,
      1076
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1076,
    "end": 1077,
    "range": [
      1076,
      1077
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1078,
    "end": 1079,
    "range": [
      1078,
      1079
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1080,
    "end": 1081,
    "range": [
      1080,
      1081
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1081,
    "end": 1082,
    "range": [
      1081,
      1082
    ]
  },
  {
    "type": "Identifier",
    "value": "interfaceType1Object2",
    "start": 1083,
    "end": 1104,
    "range": [
      1083,
      1104
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1104,
    "end": 1105,
    "range": [
      1104,
      1105
    ]
  },
  {
    "type": "Identifier",
    "value": "bar1",
    "start": 1105,
    "end": 1109,
    "range": [
      1105,
      1109
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1110,
    "end": 1111,
    "range": [
      1110,
      1111
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1112,
    "end": 1113,
    "range": [
      1112,
      1113
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1113,
    "end": 1114,
    "range": [
      1113,
      1114
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1115,
    "end": 1118,
    "range": [
      1115,
      1118
    ]
  },
  {
    "type": "Identifier",
    "value": "interfaceType2Object1",
    "start": 1119,
    "end": 1140,
    "range": [
      1119,
      1140
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1141,
    "end": 1142,
    "range": [
      1141,
      1142
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1143,
    "end": 1144,
    "range": [
      1143,
      1144
    ]
  },
  {
    "type": "Identifier",
    "value": "interfaceType2",
    "start": 1144,
    "end": 1158,
    "range": [
      1144,
      1158
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1158,
    "end": 1159,
    "range": [
      1158,
      1159
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1159,
    "end": 1160,
    "range": [
      1159,
      1160
    ]
  },
  {
    "type": "Identifier",
    "value": "bar2",
    "start": 1161,
    "end": 1165,
    "range": [
      1161,
      1165
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1165,
    "end": 1166,
    "range": [
      1165,
      1166
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1167,
    "end": 1168,
    "range": [
      1167,
      1168
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1169,
    "end": 1170,
    "range": [
      1169,
      1170
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1170,
    "end": 1171,
    "range": [
      1170,
      1171
    ]
  },
  {
    "type": "Identifier",
    "value": "interfaceType2Object1",
    "start": 1172,
    "end": 1193,
    "range": [
      1172,
      1193
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1193,
    "end": 1194,
    "range": [
      1193,
      1194
    ]
  },
  {
    "type": "Identifier",
    "value": "bar2",
    "start": 1194,
    "end": 1198,
    "range": [
      1194,
      1198
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1199,
    "end": 1200,
    "range": [
      1199,
      1200
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1201,
    "end": 1202,
    "range": [
      1201,
      1202
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1202,
    "end": 1203,
    "range": [
      1202,
      1203
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1204,
    "end": 1207,
    "range": [
      1204,
      1207
    ]
  },
  {
    "type": "Identifier",
    "value": "interfaceType2Object2",
    "start": 1208,
    "end": 1229,
    "range": [
      1208,
      1229
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1230,
    "end": 1231,
    "range": [
      1230,
      1231
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1232,
    "end": 1233,
    "range": [
      1232,
      1233
    ]
  },
  {
    "type": "Identifier",
    "value": "interfaceType\\u0032",
    "start": 1233,
    "end": 1252,
    "range": [
      1233,
      1252
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1252,
    "end": 1253,
    "range": [
      1252,
      1253
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1253,
    "end": 1254,
    "range": [
      1253,
      1254
    ]
  },
  {
    "type": "Identifier",
    "value": "bar2",
    "start": 1255,
    "end": 1259,
    "range": [
      1255,
      1259
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1259,
    "end": 1260,
    "range": [
      1259,
      1260
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1261,
    "end": 1262,
    "range": [
      1261,
      1262
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1263,
    "end": 1264,
    "range": [
      1263,
      1264
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1264,
    "end": 1265,
    "range": [
      1264,
      1265
    ]
  },
  {
    "type": "Identifier",
    "value": "interfaceType2Object2",
    "start": 1266,
    "end": 1287,
    "range": [
      1266,
      1287
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1287,
    "end": 1288,
    "range": [
      1287,
      1288
    ]
  },
  {
    "type": "Identifier",
    "value": "bar2",
    "start": 1288,
    "end": 1292,
    "range": [
      1288,
      1292
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1293,
    "end": 1294,
    "range": [
      1293,
      1294
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1295,
    "end": 1296,
    "range": [
      1295,
      1296
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1296,
    "end": 1297,
    "range": [
      1296,
      1297
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1313,
    "end": 1318,
    "range": [
      1313,
      1318
    ]
  },
  {
    "type": "Identifier",
    "value": "testClass",
    "start": 1319,
    "end": 1328,
    "range": [
      1319,
      1328
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1329,
    "end": 1330,
    "range": [
      1329,
      1330
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 1336,
    "end": 1342,
    "range": [
      1336,
      1342
    ]
  },
  {
    "type": "Identifier",
    "value": "func",
    "start": 1343,
    "end": 1347,
    "range": [
      1343,
      1347
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1347,
    "end": 1348,
    "range": [
      1347,
      1348
    ]
  },
  {
    "type": "Identifier",
    "value": "arg1",
    "start": 1348,
    "end": 1352,
    "range": [
      1348,
      1352
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1352,
    "end": 1353,
    "range": [
      1352,
      1353
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1354,
    "end": 1360,
    "range": [
      1354,
      1360
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1360,
    "end": 1361,
    "range": [
      1360,
      1361
    ]
  },
  {
    "type": "Identifier",
    "value": "arg\\u0032",
    "start": 1362,
    "end": 1371,
    "range": [
      1362,
      1371
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1371,
    "end": 1372,
    "range": [
      1371,
      1372
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1373,
    "end": 1379,
    "range": [
      1373,
      1379
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1379,
    "end": 1380,
    "range": [
      1379,
      1380
    ]
  },
  {
    "type": "Identifier",
    "value": "arg\\u0033",
    "start": 1381,
    "end": 1390,
    "range": [
      1381,
      1390
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1390,
    "end": 1391,
    "range": [
      1390,
      1391
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1392,
    "end": 1399,
    "range": [
      1392,
      1399
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1399,
    "end": 1400,
    "range": [
      1399,
      1400
    ]
  },
  {
    "type": "Identifier",
    "value": "arg4",
    "start": 1401,
    "end": 1405,
    "range": [
      1401,
      1405
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1405,
    "end": 1406,
    "range": [
      1405,
      1406
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1407,
    "end": 1413,
    "range": [
      1407,
      1413
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1413,
    "end": 1414,
    "range": [
      1413,
      1414
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1415,
    "end": 1416,
    "range": [
      1415,
      1416
    ]
  },
  {
    "type": "Identifier",
    "value": "arg\\u0031",
    "start": 1426,
    "end": 1435,
    "range": [
      1426,
      1435
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1436,
    "end": 1437,
    "range": [
      1436,
      1437
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1438,
    "end": 1439,
    "range": [
      1438,
      1439
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1439,
    "end": 1440,
    "range": [
      1439,
      1440
    ]
  },
  {
    "type": "Identifier",
    "value": "arg2",
    "start": 1449,
    "end": 1453,
    "range": [
      1449,
      1453
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1454,
    "end": 1455,
    "range": [
      1454,
      1455
    ]
  },
  {
    "type": "String",
    "value": "'string'",
    "start": 1456,
    "end": 1464,
    "range": [
      1456,
      1464
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1464,
    "end": 1465,
    "range": [
      1464,
      1465
    ]
  },
  {
    "type": "Identifier",
    "value": "arg\\u0033",
    "start": 1474,
    "end": 1483,
    "range": [
      1474,
      1483
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1484,
    "end": 1485,
    "range": [
      1484,
      1485
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1486,
    "end": 1490,
    "range": [
      1486,
      1490
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1490,
    "end": 1491,
    "range": [
      1490,
      1491
    ]
  },
  {
    "type": "Identifier",
    "value": "arg4",
    "start": 1500,
    "end": 1504,
    "range": [
      1500,
      1504
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1505,
    "end": 1506,
    "range": [
      1505,
      1506
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1507,
    "end": 1508,
    "range": [
      1507,
      1508
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1508,
    "end": 1509,
    "range": [
      1508,
      1509
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1514,
    "end": 1515,
    "range": [
      1514,
      1515
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1516,
    "end": 1517,
    "range": [
      1516,
      1517
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1535,
    "end": 1540,
    "range": [
      1535,
      1540
    ]
  },
  {
    "type": "Identifier",
    "value": "constructorTestClass",
    "start": 1541,
    "end": 1561,
    "range": [
      1541,
      1561
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1562,
    "end": 1563,
    "range": [
      1562,
      1563
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1569,
    "end": 1580,
    "range": [
      1569,
      1580
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1581,
    "end": 1582,
    "range": [
      1581,
      1582
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 1582,
    "end": 1588,
    "range": [
      1582,
      1588
    ]
  },
  {
    "type": "Identifier",
    "value": "arg1",
    "start": 1589,
    "end": 1593,
    "range": [
      1589,
      1593
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1593,
    "end": 1594,
    "range": [
      1593,
      1594
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1595,
    "end": 1601,
    "range": [
      1595,
      1601
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1601,
    "end": 1602,
    "range": [
      1601,
      1602
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 1602,
    "end": 1608,
    "range": [
      1602,
      1608
    ]
  },
  {
    "type": "Identifier",
    "value": "arg\\u0032",
    "start": 1609,
    "end": 1618,
    "range": [
      1609,
      1618
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1618,
    "end": 1619,
    "range": [
      1618,
      1619
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1620,
    "end": 1626,
    "range": [
      1620,
      1626
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1626,
    "end": 1627,
    "range": [
      1626,
      1627
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 1627,
    "end": 1633,
    "range": [
      1627,
      1633
    ]
  },
  {
    "type": "Identifier",
    "value": "arg\\u0033",
    "start": 1634,
    "end": 1643,
    "range": [
      1634,
      1643
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1643,
    "end": 1644,
    "range": [
      1643,
      1644
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1645,
    "end": 1652,
    "range": [
      1645,
      1652
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1652,
    "end": 1653,
    "range": [
      1652,
      1653
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 1653,
    "end": 1659,
    "range": [
      1653,
      1659
    ]
  },
  {
    "type": "Identifier",
    "value": "arg4",
    "start": 1660,
    "end": 1664,
    "range": [
      1660,
      1664
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1664,
    "end": 1665,
    "range": [
      1664,
      1665
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1666,
    "end": 1672,
    "range": [
      1666,
      1672
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1672,
    "end": 1673,
    "range": [
      1672,
      1673
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1674,
    "end": 1675,
    "range": [
      1674,
      1675
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1681,
    "end": 1682,
    "range": [
      1681,
      1682
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1683,
    "end": 1684,
    "range": [
      1683,
      1684
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1685,
    "end": 1688,
    "range": [
      1685,
      1688
    ]
  },
  {
    "type": "Identifier",
    "value": "constructorTestObject",
    "start": 1689,
    "end": 1710,
    "range": [
      1689,
      1710
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1711,
    "end": 1712,
    "range": [
      1711,
      1712
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1713,
    "end": 1716,
    "range": [
      1713,
      1716
    ]
  },
  {
    "type": "Identifier",
    "value": "constructorTestClass",
    "start": 1717,
    "end": 1737,
    "range": [
      1717,
      1737
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1737,
    "end": 1738,
    "range": [
      1737,
      1738
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1738,
    "end": 1739,
    "range": [
      1738,
      1739
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1739,
    "end": 1740,
    "range": [
      1739,
      1740
    ]
  },
  {
    "type": "String",
    "value": "'string'",
    "start": 1741,
    "end": 1749,
    "range": [
      1741,
      1749
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1749,
    "end": 1750,
    "range": [
      1749,
      1750
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1751,
    "end": 1755,
    "range": [
      1751,
      1755
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1755,
    "end": 1756,
    "range": [
      1755,
      1756
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1757,
    "end": 1758,
    "range": [
      1757,
      1758
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1758,
    "end": 1759,
    "range": [
      1758,
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
    "value": "constructorTestObject",
    "start": 1761,
    "end": 1782,
    "range": [
      1761,
      1782
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1782,
    "end": 1783,
    "range": [
      1782,
      1783
    ]
  },
  {
    "type": "Identifier",
    "value": "arg\\u0031",
    "start": 1783,
    "end": 1792,
    "range": [
      1783,
      1792
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1793,
    "end": 1794,
    "range": [
      1793,
      1794
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1795,
    "end": 1796,
    "range": [
      1795,
      1796
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1796,
    "end": 1797,
    "range": [
      1796,
      1797
    ]
  },
  {
    "type": "Identifier",
    "value": "constructorTestObject",
    "start": 1798,
    "end": 1819,
    "range": [
      1798,
      1819
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1819,
    "end": 1820,
    "range": [
      1819,
      1820
    ]
  },
  {
    "type": "Identifier",
    "value": "arg2",
    "start": 1820,
    "end": 1824,
    "range": [
      1820,
      1824
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1825,
    "end": 1826,
    "range": [
      1825,
      1826
    ]
  },
  {
    "type": "String",
    "value": "'string'",
    "start": 1827,
    "end": 1835,
    "range": [
      1827,
      1835
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1835,
    "end": 1836,
    "range": [
      1835,
      1836
    ]
  },
  {
    "type": "Identifier",
    "value": "constructorTestObject",
    "start": 1837,
    "end": 1858,
    "range": [
      1837,
      1858
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1858,
    "end": 1859,
    "range": [
      1858,
      1859
    ]
  },
  {
    "type": "Identifier",
    "value": "arg\\u0033",
    "start": 1859,
    "end": 1868,
    "range": [
      1859,
      1868
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1869,
    "end": 1870,
    "range": [
      1869,
      1870
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1871,
    "end": 1875,
    "range": [
      1871,
      1875
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1875,
    "end": 1876,
    "range": [
      1875,
      1876
    ]
  },
  {
    "type": "Identifier",
    "value": "constructorTestObject",
    "start": 1877,
    "end": 1898,
    "range": [
      1877,
      1898
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1898,
    "end": 1899,
    "range": [
      1898,
      1899
    ]
  },
  {
    "type": "Identifier",
    "value": "arg4",
    "start": 1899,
    "end": 1903,
    "range": [
      1899,
      1903
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1904,
    "end": 1905,
    "range": [
      1904,
      1905
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1906,
    "end": 1907,
    "range": [
      1906,
      1907
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1907,
    "end": 1908,
    "range": [
      1907,
      1908
    ]
  },
  {
    "type": "Identifier",
    "value": "l\\u0061bel1",
    "start": 1921,
    "end": 1932,
    "range": [
      1921,
      1932
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1932,
    "end": 1933,
    "range": [
      1932,
      1933
    ]
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 1939,
    "end": 1944,
    "range": [
      1939,
      1944
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1945,
    "end": 1946,
    "range": [
      1945,
      1946
    ]
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 1946,
    "end": 1951,
    "range": [
      1946,
      1951
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1951,
    "end": 1952,
    "range": [
      1951,
      1952
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1957,
    "end": 1958,
    "range": [
      1957,
      1958
    ]
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 1968,
    "end": 1973,
    "range": [
      1968,
      1973
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1973,
    "end": 1974,
    "range": [
      1973,
      1974
    ]
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 1974,
    "end": 1979,
    "range": [
      1974,
      1979
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1979,
    "end": 1980,
    "range": [
      1979,
      1980
    ]
  },
  {
    "type": "Keyword",
    "value": "continue",
    "start": 1992,
    "end": 2000,
    "range": [
      1992,
      2000
    ]
  },
  {
    "type": "Identifier",
    "value": "label1",
    "start": 2001,
    "end": 2007,
    "range": [
      2001,
      2007
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2007,
    "end": 2008,
    "range": [
      2007,
      2008
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2061,
    "end": 2062,
    "range": [
      2061,
      2062
    ]
  },
  {
    "type": "Identifier",
    "value": "label2",
    "start": 2065,
    "end": 2071,
    "range": [
      2065,
      2071
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2071,
    "end": 2072,
    "range": [
      2071,
      2072
    ]
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 2078,
    "end": 2083,
    "range": [
      2078,
      2083
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2084,
    "end": 2085,
    "range": [
      2084,
      2085
    ]
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 2085,
    "end": 2090,
    "range": [
      2085,
      2090
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2090,
    "end": 2091,
    "range": [
      2090,
      2091
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2096,
    "end": 2097,
    "range": [
      2096,
      2097
    ]
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 2107,
    "end": 2112,
    "range": [
      2107,
      2112
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2112,
    "end": 2113,
    "range": [
      2112,
      2113
    ]
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 2113,
    "end": 2118,
    "range": [
      2113,
      2118
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2118,
    "end": 2119,
    "range": [
      2118,
      2119
    ]
  },
  {
    "type": "Keyword",
    "value": "continue",
    "start": 2131,
    "end": 2139,
    "range": [
      2131,
      2139
    ]
  },
  {
    "type": "Identifier",
    "value": "l\\u0061bel2",
    "start": 2140,
    "end": 2151,
    "range": [
      2140,
      2151
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2151,
    "end": 2152,
    "range": [
      2151,
      2152
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2205,
    "end": 2206,
    "range": [
      2205,
      2206
    ]
  },
  {
    "type": "Identifier",
    "value": "label3",
    "start": 2209,
    "end": 2215,
    "range": [
      2209,
      2215
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2215,
    "end": 2216,
    "range": [
      2215,
      2216
    ]
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 2222,
    "end": 2227,
    "range": [
      2222,
      2227
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2228,
    "end": 2229,
    "range": [
      2228,
      2229
    ]
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 2229,
    "end": 2234,
    "range": [
      2229,
      2234
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2234,
    "end": 2235,
    "range": [
      2234,
      2235
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2240,
    "end": 2241,
    "range": [
      2240,
      2241
    ]
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 2251,
    "end": 2256,
    "range": [
      2251,
      2256
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2256,
    "end": 2257,
    "range": [
      2256,
      2257
    ]
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 2257,
    "end": 2262,
    "range": [
      2257,
      2262
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2262,
    "end": 2263,
    "range": [
      2262,
      2263
    ]
  },
  {
    "type": "Keyword",
    "value": "continue",
    "start": 2275,
    "end": 2283,
    "range": [
      2275,
      2283
    ]
  },
  {
    "type": "Identifier",
    "value": "label3",
    "start": 2284,
    "end": 2290,
    "range": [
      2284,
      2290
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2290,
    "end": 2291,
    "range": [
      2290,
      2291
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2344,
    "end": 2345,
    "range": [
      2344,
      2345
    ]
  },
  {
    "type": "Identifier",
    "value": "l\\u0061bel4",
    "start": 2348,
    "end": 2359,
    "range": [
      2348,
      2359
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2359,
    "end": 2360,
    "range": [
      2359,
      2360
    ]
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 2366,
    "end": 2371,
    "range": [
      2366,
      2371
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2372,
    "end": 2373,
    "range": [
      2372,
      2373
    ]
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 2373,
    "end": 2378,
    "range": [
      2373,
      2378
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2378,
    "end": 2379,
    "range": [
      2378,
      2379
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2384,
    "end": 2385,
    "range": [
      2384,
      2385
    ]
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 2395,
    "end": 2400,
    "range": [
      2395,
      2400
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2400,
    "end": 2401,
    "range": [
      2400,
      2401
    ]
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 2401,
    "end": 2406,
    "range": [
      2401,
      2406
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2406,
    "end": 2407,
    "range": [
      2406,
      2407
    ]
  },
  {
    "type": "Keyword",
    "value": "continue",
    "start": 2419,
    "end": 2427,
    "range": [
      2419,
      2427
    ]
  },
  {
    "type": "Identifier",
    "value": "l\\u0061bel4",
    "start": 2428,
    "end": 2439,
    "range": [
      2428,
      2439
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2439,
    "end": 2440,
    "range": [
      2439,
      2440
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2493,
    "end": 2494,
    "range": [
      2493,
      2494
    ]
  }
]
```
