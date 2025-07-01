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
        "start": 198,
        "end": 209
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
                        "start": 234,
                        "end": 240
                      },
                      "start": 232,
                      "end": 240
                    },
                    "start": 228,
                    "end": 240
                  },
                  "init": null,
                  "definite": false,
                  "start": 228,
                  "end": 240
                }
              ],
              "declare": false,
              "start": 224,
              "end": 241
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 217,
            "end": 241
          }
        ],
        "start": 210,
        "end": 243
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 191,
      "end": 243
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "moduleType2",
        "optional": false,
        "typeAnnotation": null,
        "start": 251,
        "end": 267
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
                        "start": 292,
                        "end": 298
                      },
                      "start": 290,
                      "end": 298
                    },
                    "start": 286,
                    "end": 298
                  },
                  "init": null,
                  "definite": false,
                  "start": 286,
                  "end": 298
                }
              ],
              "declare": false,
              "start": 282,
              "end": 299
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 275,
            "end": 299
          }
        ],
        "start": 268,
        "end": 301
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 244,
      "end": 301
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
            "start": 303,
            "end": 314
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "baz1",
            "optional": false,
            "typeAnnotation": null,
            "start": 315,
            "end": 319
          },
          "optional": false,
          "computed": false,
          "start": 303,
          "end": 319
        },
        "right": {
          "type": "Literal",
          "value": 3,
          "raw": "3",
          "start": 322,
          "end": 323
        },
        "start": 303,
        "end": 323
      },
      "directive": null,
      "start": 303,
      "end": 324
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
            "start": 325,
            "end": 341
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "baz1",
            "optional": false,
            "typeAnnotation": null,
            "start": 342,
            "end": 346
          },
          "optional": false,
          "computed": false,
          "start": 325,
          "end": 346
        },
        "right": {
          "type": "Literal",
          "value": 3,
          "raw": "3",
          "start": 349,
          "end": 350
        },
        "start": 325,
        "end": 350
      },
      "directive": null,
      "start": 325,
      "end": 351
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
            "start": 352,
            "end": 363
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "baz2",
            "optional": false,
            "typeAnnotation": null,
            "start": 364,
            "end": 368
          },
          "optional": false,
          "computed": false,
          "start": 352,
          "end": 368
        },
        "right": {
          "type": "Literal",
          "value": 3,
          "raw": "3",
          "start": 371,
          "end": 372
        },
        "start": 352,
        "end": 372
      },
      "directive": null,
      "start": 352,
      "end": 373
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
            "start": 374,
            "end": 390
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "baz2",
            "optional": false,
            "typeAnnotation": null,
            "start": 391,
            "end": 395
          },
          "optional": false,
          "computed": false,
          "start": 374,
          "end": 395
        },
        "right": {
          "type": "Literal",
          "value": 3,
          "raw": "3",
          "start": 398,
          "end": 399
        },
        "start": 374,
        "end": 399
      },
      "directive": null,
      "start": 374,
      "end": 400
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
        "start": 420,
        "end": 430
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
              "start": 445,
              "end": 449
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 451,
                "end": 457
              },
              "start": 449,
              "end": 457
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
            "start": 438,
            "end": 458
          }
        ],
        "start": 431,
        "end": 460
      },
      "abstract": false,
      "declare": false,
      "start": 414,
      "end": 460
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
        "start": 467,
        "end": 482
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
              "start": 497,
              "end": 501
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 503,
                "end": 509
              },
              "start": 501,
              "end": 509
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
            "start": 490,
            "end": 510
          }
        ],
        "start": 483,
        "end": 512
      },
      "abstract": false,
      "declare": false,
      "start": 461,
      "end": 512
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
            "start": 518,
            "end": 535
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "classType1",
              "optional": false,
              "typeAnnotation": null,
              "start": 542,
              "end": 552
            },
            "typeArguments": null,
            "arguments": [],
            "start": 538,
            "end": 554
          },
          "definite": false,
          "start": 518,
          "end": 554
        }
      ],
      "declare": false,
      "start": 514,
      "end": 555
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
            "start": 556,
            "end": 573
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo1",
            "optional": false,
            "typeAnnotation": null,
            "start": 574,
            "end": 578
          },
          "optional": false,
          "computed": false,
          "start": 556,
          "end": 578
        },
        "right": {
          "type": "Literal",
          "value": 2,
          "raw": "2",
          "start": 581,
          "end": 582
        },
        "start": 556,
        "end": 582
      },
      "directive": null,
      "start": 556,
      "end": 583
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
            "start": 588,
            "end": 605
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "classType1",
              "optional": false,
              "typeAnnotation": null,
              "start": 612,
              "end": 627
            },
            "typeArguments": null,
            "arguments": [],
            "start": 608,
            "end": 629
          },
          "definite": false,
          "start": 588,
          "end": 629
        }
      ],
      "declare": false,
      "start": 584,
      "end": 630
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
            "start": 631,
            "end": 648
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo1",
            "optional": false,
            "typeAnnotation": null,
            "start": 649,
            "end": 653
          },
          "optional": false,
          "computed": false,
          "start": 631,
          "end": 653
        },
        "right": {
          "type": "Literal",
          "value": 2,
          "raw": "2",
          "start": 656,
          "end": 657
        },
        "start": 631,
        "end": 657
      },
      "directive": null,
      "start": 631,
      "end": 658
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
            "start": 663,
            "end": 680
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "classType2",
              "optional": false,
              "typeAnnotation": null,
              "start": 687,
              "end": 697
            },
            "typeArguments": null,
            "arguments": [],
            "start": 683,
            "end": 699
          },
          "definite": false,
          "start": 663,
          "end": 699
        }
      ],
      "declare": false,
      "start": 659,
      "end": 700
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
            "start": 701,
            "end": 718
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo2",
            "optional": false,
            "typeAnnotation": null,
            "start": 719,
            "end": 723
          },
          "optional": false,
          "computed": false,
          "start": 701,
          "end": 723
        },
        "right": {
          "type": "Literal",
          "value": 2,
          "raw": "2",
          "start": 726,
          "end": 727
        },
        "start": 701,
        "end": 727
      },
      "directive": null,
      "start": 701,
      "end": 728
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
            "start": 733,
            "end": 750
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "classType2",
              "optional": false,
              "typeAnnotation": null,
              "start": 757,
              "end": 772
            },
            "typeArguments": null,
            "arguments": [],
            "start": 753,
            "end": 774
          },
          "definite": false,
          "start": 733,
          "end": 774
        }
      ],
      "declare": false,
      "start": 729,
      "end": 775
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
            "start": 776,
            "end": 793
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo2",
            "optional": false,
            "typeAnnotation": null,
            "start": 794,
            "end": 798
          },
          "optional": false,
          "computed": false,
          "start": 776,
          "end": 798
        },
        "right": {
          "type": "Literal",
          "value": 2,
          "raw": "2",
          "start": 801,
          "end": 802
        },
        "start": 776,
        "end": 802
      },
      "directive": null,
      "start": 776,
      "end": 803
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "interfaceType1",
        "optional": false,
        "typeAnnotation": null,
        "start": 829,
        "end": 843
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
              "start": 851,
              "end": 855
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 857,
                "end": 863
              },
              "start": 855,
              "end": 863
            },
            "accessibility": null,
            "static": false,
            "start": 851,
            "end": 864
          }
        ],
        "start": 844,
        "end": 866
      },
      "declare": false,
      "start": 819,
      "end": 866
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "interfaceType2",
        "optional": false,
        "typeAnnotation": null,
        "start": 877,
        "end": 896
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
              "start": 904,
              "end": 908
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 910,
                "end": 916
              },
              "start": 908,
              "end": 916
            },
            "accessibility": null,
            "static": false,
            "start": 904,
            "end": 917
          }
        ],
        "start": 897,
        "end": 919
      },
      "declare": false,
      "start": 867,
      "end": 919
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
            "start": 925,
            "end": 946
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
                "start": 950,
                "end": 964
              },
              "typeArguments": null,
              "start": 950,
              "end": 964
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
                    "start": 967,
                    "end": 971
                  },
                  "value": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 973,
                    "end": 974
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 967,
                  "end": 974
                }
              ],
              "start": 965,
              "end": 976
            },
            "start": 949,
            "end": 976
          },
          "definite": false,
          "start": 925,
          "end": 976
        }
      ],
      "declare": false,
      "start": 921,
      "end": 977
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
            "start": 978,
            "end": 999
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "bar1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1000,
            "end": 1004
          },
          "optional": false,
          "computed": false,
          "start": 978,
          "end": 1004
        },
        "right": {
          "type": "Literal",
          "value": 2,
          "raw": "2",
          "start": 1007,
          "end": 1008
        },
        "start": 978,
        "end": 1008
      },
      "directive": null,
      "start": 978,
      "end": 1009
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
            "start": 1014,
            "end": 1035
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
                "start": 1039,
                "end": 1058
              },
              "typeArguments": null,
              "start": 1039,
              "end": 1058
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
                    "start": 1061,
                    "end": 1065
                  },
                  "value": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 1067,
                    "end": 1068
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1061,
                  "end": 1068
                }
              ],
              "start": 1059,
              "end": 1070
            },
            "start": 1038,
            "end": 1070
          },
          "definite": false,
          "start": 1014,
          "end": 1070
        }
      ],
      "declare": false,
      "start": 1010,
      "end": 1071
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
            "start": 1072,
            "end": 1093
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "bar1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1094,
            "end": 1098
          },
          "optional": false,
          "computed": false,
          "start": 1072,
          "end": 1098
        },
        "right": {
          "type": "Literal",
          "value": 2,
          "raw": "2",
          "start": 1101,
          "end": 1102
        },
        "start": 1072,
        "end": 1102
      },
      "directive": null,
      "start": 1072,
      "end": 1103
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
            "start": 1108,
            "end": 1129
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
                "start": 1133,
                "end": 1147
              },
              "typeArguments": null,
              "start": 1133,
              "end": 1147
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
                    "start": 1150,
                    "end": 1154
                  },
                  "value": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 1156,
                    "end": 1157
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1150,
                  "end": 1157
                }
              ],
              "start": 1148,
              "end": 1159
            },
            "start": 1132,
            "end": 1159
          },
          "definite": false,
          "start": 1108,
          "end": 1159
        }
      ],
      "declare": false,
      "start": 1104,
      "end": 1160
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
            "start": 1161,
            "end": 1182
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "bar2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1183,
            "end": 1187
          },
          "optional": false,
          "computed": false,
          "start": 1161,
          "end": 1187
        },
        "right": {
          "type": "Literal",
          "value": 2,
          "raw": "2",
          "start": 1190,
          "end": 1191
        },
        "start": 1161,
        "end": 1191
      },
      "directive": null,
      "start": 1161,
      "end": 1192
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
            "start": 1197,
            "end": 1218
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
                "start": 1222,
                "end": 1241
              },
              "typeArguments": null,
              "start": 1222,
              "end": 1241
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
                    "start": 1244,
                    "end": 1248
                  },
                  "value": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 1250,
                    "end": 1251
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1244,
                  "end": 1251
                }
              ],
              "start": 1242,
              "end": 1253
            },
            "start": 1221,
            "end": 1253
          },
          "definite": false,
          "start": 1197,
          "end": 1253
        }
      ],
      "declare": false,
      "start": 1193,
      "end": 1254
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
            "start": 1255,
            "end": 1276
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "bar2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1277,
            "end": 1281
          },
          "optional": false,
          "computed": false,
          "start": 1255,
          "end": 1281
        },
        "right": {
          "type": "Literal",
          "value": 2,
          "raw": "2",
          "start": 1284,
          "end": 1285
        },
        "start": 1255,
        "end": 1285
      },
      "directive": null,
      "start": 1255,
      "end": 1286
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
        "start": 1308,
        "end": 1317
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
              "start": 1332,
              "end": 1336
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
                      "start": 1343,
                      "end": 1349
                    },
                    "start": 1341,
                    "end": 1349
                  },
                  "start": 1337,
                  "end": 1349
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
                      "start": 1362,
                      "end": 1368
                    },
                    "start": 1360,
                    "end": 1368
                  },
                  "start": 1351,
                  "end": 1368
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
                      "start": 1381,
                      "end": 1388
                    },
                    "start": 1379,
                    "end": 1388
                  },
                  "start": 1370,
                  "end": 1388
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
                      "start": 1396,
                      "end": 1402
                    },
                    "start": 1394,
                    "end": 1402
                  },
                  "start": 1390,
                  "end": 1402
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
                        "start": 1415,
                        "end": 1424
                      },
                      "right": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 1427,
                        "end": 1428
                      },
                      "start": 1415,
                      "end": 1428
                    },
                    "directive": null,
                    "start": 1415,
                    "end": 1429
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
                        "start": 1438,
                        "end": 1442
                      },
                      "right": {
                        "type": "Literal",
                        "value": "string",
                        "raw": "'string'",
                        "start": 1445,
                        "end": 1453
                      },
                      "start": 1438,
                      "end": 1453
                    },
                    "directive": null,
                    "start": 1438,
                    "end": 1454
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
                        "start": 1463,
                        "end": 1472
                      },
                      "right": {
                        "type": "Literal",
                        "value": true,
                        "raw": "true",
                        "start": 1475,
                        "end": 1479
                      },
                      "start": 1463,
                      "end": 1479
                    },
                    "directive": null,
                    "start": 1463,
                    "end": 1480
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
                        "start": 1489,
                        "end": 1493
                      },
                      "right": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 1496,
                        "end": 1497
                      },
                      "start": 1489,
                      "end": 1497
                    },
                    "directive": null,
                    "start": 1489,
                    "end": 1498
                  }
                ],
                "start": 1404,
                "end": 1504
              },
              "expression": false,
              "start": 1336,
              "end": 1504
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 1325,
            "end": 1504
          }
        ],
        "start": 1318,
        "end": 1506
      },
      "abstract": false,
      "declare": false,
      "start": 1302,
      "end": 1506
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
        "start": 1530,
        "end": 1550
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
              "start": 1558,
              "end": 1569
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
                        "start": 1584,
                        "end": 1590
                      },
                      "start": 1582,
                      "end": 1590
                    },
                    "start": 1578,
                    "end": 1590
                  },
                  "readonly": false,
                  "static": false,
                  "start": 1571,
                  "end": 1590
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
                        "start": 1609,
                        "end": 1615
                      },
                      "start": 1607,
                      "end": 1615
                    },
                    "start": 1598,
                    "end": 1615
                  },
                  "readonly": false,
                  "static": false,
                  "start": 1591,
                  "end": 1615
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
                        "start": 1634,
                        "end": 1641
                      },
                      "start": 1632,
                      "end": 1641
                    },
                    "start": 1623,
                    "end": 1641
                  },
                  "readonly": false,
                  "static": false,
                  "start": 1616,
                  "end": 1641
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
                        "start": 1655,
                        "end": 1661
                      },
                      "start": 1653,
                      "end": 1661
                    },
                    "start": 1649,
                    "end": 1661
                  },
                  "readonly": false,
                  "static": false,
                  "start": 1642,
                  "end": 1661
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 1663,
                "end": 1671
              },
              "expression": false,
              "start": 1570,
              "end": 1671
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1558,
            "end": 1671
          }
        ],
        "start": 1551,
        "end": 1673
      },
      "abstract": false,
      "declare": false,
      "start": 1524,
      "end": 1673
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
            "start": 1678,
            "end": 1699
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructorTestClass",
              "optional": false,
              "typeAnnotation": null,
              "start": 1706,
              "end": 1726
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1727,
                "end": 1728
              },
              {
                "type": "Literal",
                "value": "string",
                "raw": "'string'",
                "start": 1730,
                "end": 1738
              },
              {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 1740,
                "end": 1744
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 1746,
                "end": 1747
              }
            ],
            "start": 1702,
            "end": 1748
          },
          "definite": false,
          "start": 1678,
          "end": 1748
        }
      ],
      "declare": false,
      "start": 1674,
      "end": 1749
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
            "start": 1750,
            "end": 1771
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "arg1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1772,
            "end": 1781
          },
          "optional": false,
          "computed": false,
          "start": 1750,
          "end": 1781
        },
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1784,
          "end": 1785
        },
        "start": 1750,
        "end": 1785
      },
      "directive": null,
      "start": 1750,
      "end": 1786
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
            "start": 1787,
            "end": 1808
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "arg2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1809,
            "end": 1813
          },
          "optional": false,
          "computed": false,
          "start": 1787,
          "end": 1813
        },
        "right": {
          "type": "Literal",
          "value": "string",
          "raw": "'string'",
          "start": 1816,
          "end": 1824
        },
        "start": 1787,
        "end": 1824
      },
      "directive": null,
      "start": 1787,
      "end": 1825
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
            "start": 1826,
            "end": 1847
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "arg3",
            "optional": false,
            "typeAnnotation": null,
            "start": 1848,
            "end": 1857
          },
          "optional": false,
          "computed": false,
          "start": 1826,
          "end": 1857
        },
        "right": {
          "type": "Literal",
          "value": true,
          "raw": "true",
          "start": 1860,
          "end": 1864
        },
        "start": 1826,
        "end": 1864
      },
      "directive": null,
      "start": 1826,
      "end": 1865
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
            "start": 1866,
            "end": 1887
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "arg4",
            "optional": false,
            "typeAnnotation": null,
            "start": 1888,
            "end": 1892
          },
          "optional": false,
          "computed": false,
          "start": 1866,
          "end": 1892
        },
        "right": {
          "type": "Literal",
          "value": 2,
          "raw": "2",
          "start": 1895,
          "end": 1896
        },
        "start": 1866,
        "end": 1896
      },
      "directive": null,
      "start": 1866,
      "end": 1897
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "label1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1910,
        "end": 1921
      },
      "body": {
        "type": "WhileStatement",
        "test": {
          "type": "Literal",
          "value": false,
          "raw": "false",
          "start": 1935,
          "end": 1940
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
                "start": 1963,
                "end": 1968
              },
              "body": {
                "type": "ContinueStatement",
                "label": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "label1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1990,
                  "end": 1996
                },
                "start": 1981,
                "end": 1997
              },
              "start": 1957,
              "end": 1997
            }
          ],
          "start": 1946,
          "end": 2051
        },
        "start": 1928,
        "end": 2051
      },
      "start": 1910,
      "end": 2051
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "label2",
        "optional": false,
        "typeAnnotation": null,
        "start": 2054,
        "end": 2060
      },
      "body": {
        "type": "WhileStatement",
        "test": {
          "type": "Literal",
          "value": false,
          "raw": "false",
          "start": 2074,
          "end": 2079
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
                "start": 2102,
                "end": 2107
              },
              "body": {
                "type": "ContinueStatement",
                "label": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "label2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2129,
                  "end": 2140
                },
                "start": 2120,
                "end": 2141
              },
              "start": 2096,
              "end": 2141
            }
          ],
          "start": 2085,
          "end": 2195
        },
        "start": 2067,
        "end": 2195
      },
      "start": 2054,
      "end": 2195
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "label3",
        "optional": false,
        "typeAnnotation": null,
        "start": 2198,
        "end": 2204
      },
      "body": {
        "type": "WhileStatement",
        "test": {
          "type": "Literal",
          "value": false,
          "raw": "false",
          "start": 2218,
          "end": 2223
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
                "start": 2246,
                "end": 2251
              },
              "body": {
                "type": "ContinueStatement",
                "label": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "label3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2273,
                  "end": 2279
                },
                "start": 2264,
                "end": 2280
              },
              "start": 2240,
              "end": 2280
            }
          ],
          "start": 2229,
          "end": 2334
        },
        "start": 2211,
        "end": 2334
      },
      "start": 2198,
      "end": 2334
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "label4",
        "optional": false,
        "typeAnnotation": null,
        "start": 2337,
        "end": 2348
      },
      "body": {
        "type": "WhileStatement",
        "test": {
          "type": "Literal",
          "value": false,
          "raw": "false",
          "start": 2362,
          "end": 2367
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
                "start": 2390,
                "end": 2395
              },
              "body": {
                "type": "ContinueStatement",
                "label": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "label4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2417,
                  "end": 2428
                },
                "start": 2408,
                "end": 2429
              },
              "start": 2384,
              "end": 2429
            }
          ],
          "start": 2373,
          "end": 2483
        },
        "start": 2355,
        "end": 2483
      },
      "start": 2337,
      "end": 2483
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 117,
  "end": 2484
}
```
