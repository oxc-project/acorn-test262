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
