__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 5
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
                  "start": 10,
                  "end": 11
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 13,
                  "end": 14
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 10,
                "end": 14
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
                  "start": 16,
                  "end": 17
                },
                "value": {
                  "type": "Literal",
                  "value": "no",
                  "raw": "'no'",
                  "start": 19,
                  "end": 23
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 16,
                "end": 23
              }
            ],
            "start": 8,
            "end": 25
          },
          "definite": false,
          "start": 4,
          "end": 25
        }
      ],
      "declare": false,
      "start": 0,
      "end": 25
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PrivateOptionalX",
        "optional": false,
        "typeAnnotation": null,
        "start": 56,
        "end": 72
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 87,
              "end": 88
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 91,
                "end": 97
              },
              "start": 89,
              "end": 97
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": true,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 79,
            "end": 98
          }
        ],
        "start": 73,
        "end": 100
      },
      "abstract": false,
      "declare": false,
      "start": 50,
      "end": 100
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PublicX",
        "optional": false,
        "typeAnnotation": null,
        "start": 107,
        "end": 114
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 128,
              "end": 129
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 131,
                "end": 137
              },
              "start": 129,
              "end": 137
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
            "start": 121,
            "end": 138
          }
        ],
        "start": 115,
        "end": 140
      },
      "abstract": false,
      "declare": false,
      "start": 101,
      "end": 140
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
            "name": "publicX",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "PublicX",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 162,
                  "end": 169
                },
                "typeArguments": null,
                "start": 162,
                "end": 169
              },
              "start": 160,
              "end": 169
            },
            "start": 153,
            "end": 169
          },
          "init": null,
          "definite": false,
          "start": 153,
          "end": 169
        }
      ],
      "declare": true,
      "start": 141,
      "end": 170
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
            "name": "privateOptionalX",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "PrivateOptionalX",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 201,
                  "end": 217
                },
                "typeArguments": null,
                "start": 201,
                "end": 217
              },
              "start": 199,
              "end": 217
            },
            "start": 183,
            "end": 217
          },
          "init": null,
          "definite": false,
          "start": 183,
          "end": 217
        }
      ],
      "declare": true,
      "start": 171,
      "end": 218
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
            "name": "o2",
            "optional": false,
            "typeAnnotation": null,
            "start": 223,
            "end": 225
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicX",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 233,
                  "end": 240
                },
                "start": 230,
                "end": 240
              },
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "privateOptionalX",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 245,
                  "end": 261
                },
                "start": 242,
                "end": 261
              }
            ],
            "start": 228,
            "end": 263
          },
          "definite": false,
          "start": 223,
          "end": 263
        }
      ],
      "declare": false,
      "start": 219,
      "end": 264
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
            "name": "sn",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 273,
                "end": 279
              },
              "start": 271,
              "end": 279
            },
            "start": 269,
            "end": 279
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "o2",
              "optional": false,
              "typeAnnotation": null,
              "start": 282,
              "end": 284
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 285,
              "end": 286
            },
            "optional": false,
            "computed": false,
            "start": 282,
            "end": 286
          },
          "definite": false,
          "start": 269,
          "end": 286
        }
      ],
      "declare": false,
      "start": 265,
      "end": 287
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
            "name": "optionalString",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "sn",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 341,
                      "end": 343
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 346,
                        "end": 352
                      },
                      "start": 344,
                      "end": 352
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 341,
                    "end": 352
                  }
                ],
                "start": 339,
                "end": 354
              },
              "start": 337,
              "end": 354
            },
            "start": 323,
            "end": 354
          },
          "init": null,
          "definite": false,
          "start": 323,
          "end": 354
        }
      ],
      "declare": true,
      "start": 311,
      "end": 355
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
            "name": "optionalNumber",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "sn",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 386,
                      "end": 388
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 391,
                        "end": 397
                      },
                      "start": 389,
                      "end": 397
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 386,
                    "end": 397
                  }
                ],
                "start": 384,
                "end": 399
              },
              "start": 382,
              "end": 399
            },
            "start": 368,
            "end": 399
          },
          "init": null,
          "definite": false,
          "start": 368,
          "end": 399
        }
      ],
      "declare": true,
      "start": 356,
      "end": 400
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
            "name": "allOptional",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "sn",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 420,
                      "end": 422
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSStringKeyword",
                            "start": 424,
                            "end": 430
                          },
                          {
                            "type": "TSNumberKeyword",
                            "start": 433,
                            "end": 439
                          }
                        ],
                        "start": 424,
                        "end": 439
                      },
                      "start": 422,
                      "end": 439
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 420,
                    "end": 439
                  }
                ],
                "start": 418,
                "end": 441
              },
              "start": 416,
              "end": 441
            },
            "start": 405,
            "end": 441
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "optionalString",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 449,
                  "end": 463
                },
                "start": 446,
                "end": 463
              },
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "optionalNumber",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 468,
                  "end": 482
                },
                "start": 465,
                "end": 482
              }
            ],
            "start": 444,
            "end": 484
          },
          "definite": false,
          "start": 405,
          "end": 484
        }
      ],
      "declare": false,
      "start": 401,
      "end": 485
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Bool",
        "optional": false,
        "typeAnnotation": null,
        "start": 581,
        "end": 585
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
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 588,
              "end": 589
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 591,
                "end": 598
              },
              "start": 589,
              "end": 598
            },
            "accessibility": null,
            "static": false,
            "start": 588,
            "end": 598
          }
        ],
        "start": 586,
        "end": 600
      },
      "declare": false,
      "start": 571,
      "end": 600
    },
    {
      "type": "EmptyStatement",
      "start": 600,
      "end": 601
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Str",
        "optional": false,
        "typeAnnotation": null,
        "start": 612,
        "end": 615
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
              "name": "s",
              "optional": false,
              "typeAnnotation": null,
              "start": 618,
              "end": 619
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 621,
                "end": 627
              },
              "start": 619,
              "end": 627
            },
            "accessibility": null,
            "static": false,
            "start": 618,
            "end": 627
          }
        ],
        "start": 616,
        "end": 629
      },
      "declare": false,
      "start": 602,
      "end": 629
    },
    {
      "type": "EmptyStatement",
      "start": 629,
      "end": 630
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
            "name": "spread",
            "optional": false,
            "typeAnnotation": null,
            "start": 635,
            "end": 641
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 651,
                        "end": 652
                      },
                      "value": {
                        "type": "Literal",
                        "value": true,
                        "raw": "true",
                        "start": 654,
                        "end": 658
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 651,
                      "end": 658
                    }
                  ],
                  "start": 649,
                  "end": 660
                },
                "start": 646,
                "end": 660
              },
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 666,
                        "end": 667
                      },
                      "value": {
                        "type": "Literal",
                        "value": "foo",
                        "raw": "\"foo\"",
                        "start": 669,
                        "end": 674
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 666,
                      "end": 674
                    }
                  ],
                  "start": 665,
                  "end": 676
                },
                "start": 662,
                "end": 676
              }
            ],
            "start": 644,
            "end": 678
          },
          "definite": false,
          "start": 635,
          "end": 678
        }
      ],
      "declare": false,
      "start": 631,
      "end": 679
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "spread",
          "optional": false,
          "typeAnnotation": null,
          "start": 680,
          "end": 686
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 691,
                "end": 692
              },
              "value": {
                "type": "Literal",
                "value": "foo",
                "raw": "\"foo\"",
                "start": 694,
                "end": 699
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 691,
              "end": 699
            }
          ],
          "start": 689,
          "end": 701
        },
        "start": 680,
        "end": 701
      },
      "directive": null,
      "start": 680,
      "end": 702
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
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 730,
            "end": 731
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
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 736,
                  "end": 737
                },
                "value": {
                  "type": "Literal",
                  "value": false,
                  "raw": "false",
                  "start": 739,
                  "end": 744
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 736,
                "end": 744
              }
            ],
            "start": 734,
            "end": 746
          },
          "definite": false,
          "start": 730,
          "end": 746
        }
      ],
      "declare": false,
      "start": 726,
      "end": 747
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "spread",
          "optional": false,
          "typeAnnotation": null,
          "start": 748,
          "end": 754
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 757,
          "end": 758
        },
        "start": 748,
        "end": 758
      },
      "directive": null,
      "start": 748,
      "end": 759
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
            "name": "duplicated",
            "optional": false,
            "typeAnnotation": null,
            "start": 851,
            "end": 861
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
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 866,
                  "end": 867
                },
                "value": {
                  "type": "Literal",
                  "value": "bad",
                  "raw": "'bad'",
                  "start": 869,
                  "end": 874
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 866,
                "end": 874
              },
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 879,
                  "end": 880
                },
                "start": 876,
                "end": 880
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
                  "start": 882,
                  "end": 883
                },
                "value": {
                  "type": "Literal",
                  "value": "bad",
                  "raw": "'bad'",
                  "start": 885,
                  "end": 890
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 882,
                "end": 890
              },
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "o2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 895,
                  "end": 897
                },
                "start": 892,
                "end": 897
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
                  "start": 899,
                  "end": 900
                },
                "value": {
                  "type": "Literal",
                  "value": "bad",
                  "raw": "'bad'",
                  "start": 902,
                  "end": 907
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 899,
                "end": 907
              }
            ],
            "start": 864,
            "end": 909
          },
          "definite": false,
          "start": 851,
          "end": 909
        }
      ],
      "declare": false,
      "start": 847,
      "end": 909
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
            "name": "duplicatedSpread",
            "optional": false,
            "typeAnnotation": null,
            "start": 914,
            "end": 930
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 938,
                  "end": 939
                },
                "start": 935,
                "end": 939
              },
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 944,
                  "end": 945
                },
                "start": 941,
                "end": 945
              }
            ],
            "start": 933,
            "end": 947
          },
          "definite": false,
          "start": 914,
          "end": 947
        }
      ],
      "declare": false,
      "start": 910,
      "end": 947
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
            "name": "ignore",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1024,
                      "end": 1025
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1027,
                        "end": 1033
                      },
                      "start": 1025,
                      "end": 1033
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1024,
                    "end": 1034
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1035,
                      "end": 1036
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1038,
                        "end": 1044
                      },
                      "start": 1036,
                      "end": 1044
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1035,
                    "end": 1044
                  }
                ],
                "start": 1022,
                "end": 1046
              },
              "start": 1020,
              "end": 1046
            },
            "start": 1014,
            "end": 1046
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
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1055,
                  "end": 1056
                },
                "value": {
                  "type": "Literal",
                  "value": "ignored",
                  "raw": "'ignored'",
                  "start": 1058,
                  "end": 1067
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1055,
                "end": 1067
              },
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1072,
                  "end": 1073
                },
                "start": 1069,
                "end": 1073
              }
            ],
            "start": 1053,
            "end": 1075
          },
          "definite": false,
          "start": 1014,
          "end": 1075
        }
      ],
      "declare": false,
      "start": 1010,
      "end": 1075
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
            "name": "o3",
            "optional": false,
            "typeAnnotation": null,
            "start": 1081,
            "end": 1083
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
                  "start": 1088,
                  "end": 1089
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1091,
                  "end": 1092
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1088,
                "end": 1092
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
                  "start": 1094,
                  "end": 1095
                },
                "value": {
                  "type": "Literal",
                  "value": "no",
                  "raw": "'no'",
                  "start": 1097,
                  "end": 1101
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1094,
                "end": 1101
              }
            ],
            "start": 1086,
            "end": 1103
          },
          "definite": false,
          "start": 1081,
          "end": 1103
        }
      ],
      "declare": false,
      "start": 1077,
      "end": 1103
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
            "name": "o4",
            "optional": false,
            "typeAnnotation": null,
            "start": 1108,
            "end": 1110
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
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1115,
                  "end": 1116
                },
                "value": {
                  "type": "Literal",
                  "value": "yes",
                  "raw": "'yes'",
                  "start": 1118,
                  "end": 1123
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1115,
                "end": 1123
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1125,
                  "end": 1126
                },
                "value": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 1128,
                  "end": 1132
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1125,
                "end": 1132
              }
            ],
            "start": 1113,
            "end": 1134
          },
          "definite": false,
          "start": 1108,
          "end": 1134
        }
      ],
      "declare": false,
      "start": 1104,
      "end": 1134
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
            "name": "combinedBefore",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1157,
                      "end": 1158
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1160,
                        "end": 1166
                      },
                      "start": 1158,
                      "end": 1166
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1157,
                    "end": 1167
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1168,
                      "end": 1169
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1171,
                        "end": 1177
                      },
                      "start": 1169,
                      "end": 1177
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1168,
                    "end": 1178
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1179,
                      "end": 1180
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1182,
                        "end": 1189
                      },
                      "start": 1180,
                      "end": 1189
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1179,
                    "end": 1189
                  }
                ],
                "start": 1155,
                "end": 1191
              },
              "start": 1153,
              "end": 1191
            },
            "start": 1139,
            "end": 1191
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
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1200,
                  "end": 1201
                },
                "value": {
                  "type": "Literal",
                  "value": "ok",
                  "raw": "'ok'",
                  "start": 1203,
                  "end": 1207
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1200,
                "end": 1207
              },
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "o3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1212,
                  "end": 1214
                },
                "start": 1209,
                "end": 1214
              },
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "o4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1219,
                  "end": 1221
                },
                "start": 1216,
                "end": 1221
              }
            ],
            "start": 1198,
            "end": 1223
          },
          "definite": false,
          "start": 1139,
          "end": 1223
        }
      ],
      "declare": false,
      "start": 1135,
      "end": 1223
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
            "name": "combinedMid",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1243,
                      "end": 1244
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1246,
                        "end": 1252
                      },
                      "start": 1244,
                      "end": 1252
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1243,
                    "end": 1253
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1254,
                      "end": 1255
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1257,
                        "end": 1263
                      },
                      "start": 1255,
                      "end": 1263
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1254,
                    "end": 1264
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1265,
                      "end": 1266
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1268,
                        "end": 1275
                      },
                      "start": 1266,
                      "end": 1275
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1265,
                    "end": 1275
                  }
                ],
                "start": 1241,
                "end": 1277
              },
              "start": 1239,
              "end": 1277
            },
            "start": 1228,
            "end": 1277
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "o3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1289,
                  "end": 1291
                },
                "start": 1286,
                "end": 1291
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
                  "start": 1293,
                  "end": 1294
                },
                "value": {
                  "type": "Literal",
                  "value": "ok",
                  "raw": "'ok'",
                  "start": 1296,
                  "end": 1300
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1293,
                "end": 1300
              },
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "o4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1305,
                  "end": 1307
                },
                "start": 1302,
                "end": 1307
              }
            ],
            "start": 1284,
            "end": 1309
          },
          "definite": false,
          "start": 1228,
          "end": 1309
        }
      ],
      "declare": false,
      "start": 1224,
      "end": 1309
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
            "name": "combinedNested",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1332,
                      "end": 1333
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1335,
                        "end": 1341
                      },
                      "start": 1333,
                      "end": 1341
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1332,
                    "end": 1342
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1343,
                      "end": 1344
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1346,
                        "end": 1353
                      },
                      "start": 1344,
                      "end": 1353
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1343,
                    "end": 1354
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1355,
                      "end": 1356
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1358,
                        "end": 1364
                      },
                      "start": 1356,
                      "end": 1364
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1355,
                    "end": 1365
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "d",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1366,
                      "end": 1367
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1369,
                        "end": 1375
                      },
                      "start": 1367,
                      "end": 1375
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1366,
                    "end": 1375
                  }
                ],
                "start": 1330,
                "end": 1377
              },
              "start": 1328,
              "end": 1377
            },
            "start": 1314,
            "end": 1377
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "SpreadElement",
                "argument": {
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
                        "start": 1391,
                        "end": 1392
                      },
                      "value": {
                        "type": "Literal",
                        "value": 4,
                        "raw": "4",
                        "start": 1394,
                        "end": 1395
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1391,
                      "end": 1395
                    },
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "ObjectExpression",
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1402,
                              "end": 1403
                            },
                            "value": {
                              "type": "Literal",
                              "value": false,
                              "raw": "false",
                              "start": 1405,
                              "end": 1410
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 1402,
                            "end": 1410
                          },
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "c",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1412,
                              "end": 1413
                            },
                            "value": {
                              "type": "Literal",
                              "value": "overriden",
                              "raw": "'overriden'",
                              "start": 1415,
                              "end": 1426
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 1412,
                            "end": 1426
                          }
                        ],
                        "start": 1400,
                        "end": 1428
                      },
                      "start": 1397,
                      "end": 1428
                    }
                  ],
                  "start": 1389,
                  "end": 1430
                },
                "start": 1386,
                "end": 1430
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "d",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1432,
                  "end": 1433
                },
                "value": {
                  "type": "Literal",
                  "value": "actually new",
                  "raw": "'actually new'",
                  "start": 1435,
                  "end": 1449
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1432,
                "end": 1449
              },
              {
                "type": "SpreadElement",
                "argument": {
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
                        "start": 1456,
                        "end": 1457
                      },
                      "value": {
                        "type": "Literal",
                        "value": 5,
                        "raw": "5",
                        "start": 1459,
                        "end": 1460
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1456,
                      "end": 1460
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "d",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1462,
                        "end": 1463
                      },
                      "value": {
                        "type": "Literal",
                        "value": "maybe new",
                        "raw": "'maybe new'",
                        "start": 1465,
                        "end": 1476
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1462,
                      "end": 1476
                    }
                  ],
                  "start": 1454,
                  "end": 1478
                },
                "start": 1451,
                "end": 1478
              }
            ],
            "start": 1384,
            "end": 1480
          },
          "definite": false,
          "start": 1314,
          "end": 1480
        }
      ],
      "declare": false,
      "start": 1310,
      "end": 1480
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
            "name": "changeTypeBefore",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1505,
                      "end": 1506
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1508,
                        "end": 1514
                      },
                      "start": 1506,
                      "end": 1514
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1505,
                    "end": 1515
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1516,
                      "end": 1517
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1519,
                        "end": 1525
                      },
                      "start": 1517,
                      "end": 1525
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1516,
                    "end": 1525
                  }
                ],
                "start": 1503,
                "end": 1527
              },
              "start": 1501,
              "end": 1527
            },
            "start": 1485,
            "end": 1527
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
                  "start": 1536,
                  "end": 1537
                },
                "value": {
                  "type": "Literal",
                  "value": "wrong type?",
                  "raw": "'wrong type?'",
                  "start": 1539,
                  "end": 1552
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1536,
                "end": 1552
              },
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "o3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1557,
                  "end": 1559
                },
                "start": 1554,
                "end": 1559
              }
            ],
            "start": 1534,
            "end": 1561
          },
          "definite": false,
          "start": 1485,
          "end": 1561
        }
      ],
      "declare": false,
      "start": 1481,
      "end": 1562
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
            "name": "computedMiddle",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1585,
                      "end": 1586
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1588,
                        "end": 1594
                      },
                      "start": 1586,
                      "end": 1594
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1585,
                    "end": 1595
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1596,
                      "end": 1597
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1599,
                        "end": 1605
                      },
                      "start": 1597,
                      "end": 1605
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1596,
                    "end": 1606
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1607,
                      "end": 1608
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1610,
                        "end": 1617
                      },
                      "start": 1608,
                      "end": 1617
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1607,
                    "end": 1618
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Literal",
                      "value": "in the middle",
                      "raw": "\"in the middle\"",
                      "start": 1619,
                      "end": 1634
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1636,
                        "end": 1642
                      },
                      "start": 1634,
                      "end": 1642
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1619,
                    "end": 1642
                  }
                ],
                "start": 1583,
                "end": 1644
              },
              "start": 1581,
              "end": 1644
            },
            "start": 1567,
            "end": 1644
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "o3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1656,
                  "end": 1658
                },
                "start": 1653,
                "end": 1658
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "value": "in the middle",
                  "raw": "'in the middle'",
                  "start": 1661,
                  "end": 1676
                },
                "value": {
                  "type": "Literal",
                  "value": 13,
                  "raw": "13",
                  "start": 1679,
                  "end": 1681
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 1660,
                "end": 1681
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
                  "start": 1683,
                  "end": 1684
                },
                "value": {
                  "type": "Literal",
                  "value": "maybe?",
                  "raw": "'maybe?'",
                  "start": 1686,
                  "end": 1694
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1683,
                "end": 1694
              },
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "o4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1699,
                  "end": 1701
                },
                "start": 1696,
                "end": 1701
              }
            ],
            "start": 1651,
            "end": 1703
          },
          "definite": false,
          "start": 1567,
          "end": 1703
        }
      ],
      "declare": false,
      "start": 1563,
      "end": 1703
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
            "name": "spreadNum",
            "optional": false,
            "typeAnnotation": null,
            "start": 1762,
            "end": 1771
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Literal",
                  "value": 12,
                  "raw": "12",
                  "start": 1779,
                  "end": 1781
                },
                "start": 1776,
                "end": 1781
              }
            ],
            "start": 1774,
            "end": 1783
          },
          "definite": false,
          "start": 1762,
          "end": 1783
        }
      ],
      "declare": false,
      "start": 1758,
      "end": 1784
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
            "name": "spreadSum",
            "optional": false,
            "typeAnnotation": null,
            "start": 1789,
            "end": 1798
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 1806,
                    "end": 1807
                  },
                  "operator": "+",
                  "right": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 1810,
                    "end": 1811
                  },
                  "start": 1806,
                  "end": 1811
                },
                "start": 1803,
                "end": 1811
              }
            ],
            "start": 1801,
            "end": 1813
          },
          "definite": false,
          "start": 1789,
          "end": 1813
        }
      ],
      "declare": false,
      "start": 1785,
      "end": 1814
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
            "name": "spreadZero",
            "optional": false,
            "typeAnnotation": null,
            "start": 1819,
            "end": 1829
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 1837,
                  "end": 1838
                },
                "start": 1834,
                "end": 1838
              }
            ],
            "start": 1832,
            "end": 1840
          },
          "definite": false,
          "start": 1819,
          "end": 1840
        }
      ],
      "declare": false,
      "start": 1815,
      "end": 1841
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "spreadZero",
            "optional": false,
            "typeAnnotation": null,
            "start": 1842,
            "end": 1852
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toFixed",
            "optional": false,
            "typeAnnotation": null,
            "start": 1853,
            "end": 1860
          },
          "optional": false,
          "computed": false,
          "start": 1842,
          "end": 1860
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 1842,
        "end": 1862
      },
      "directive": null,
      "start": 1842,
      "end": 1863
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
            "name": "spreadBool",
            "optional": false,
            "typeAnnotation": null,
            "start": 1914,
            "end": 1924
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 1932,
                  "end": 1936
                },
                "start": 1929,
                "end": 1936
              }
            ],
            "start": 1927,
            "end": 1938
          },
          "definite": false,
          "start": 1914,
          "end": 1938
        }
      ],
      "declare": false,
      "start": 1910,
      "end": 1939
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "spreadBool",
            "optional": false,
            "typeAnnotation": null,
            "start": 1940,
            "end": 1950
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "valueOf",
            "optional": false,
            "typeAnnotation": null,
            "start": 1951,
            "end": 1958
          },
          "optional": false,
          "computed": false,
          "start": 1940,
          "end": 1958
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 1940,
        "end": 1960
      },
      "directive": null,
      "start": 1940,
      "end": 1961
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
            "name": "spreadStr",
            "optional": false,
            "typeAnnotation": null,
            "start": 1966,
            "end": 1975
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Literal",
                  "value": "foo",
                  "raw": "'foo'",
                  "start": 1983,
                  "end": 1988
                },
                "start": 1980,
                "end": 1988
              }
            ],
            "start": 1978,
            "end": 1990
          },
          "definite": false,
          "start": 1966,
          "end": 1990
        }
      ],
      "declare": false,
      "start": 1962,
      "end": 1991
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "spreadStr",
          "optional": false,
          "typeAnnotation": null,
          "start": 1992,
          "end": 2001
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "length",
          "optional": false,
          "typeAnnotation": null,
          "start": 2002,
          "end": 2008
        },
        "optional": false,
        "computed": false,
        "start": 1992,
        "end": 2008
      },
      "directive": null,
      "start": 1992,
      "end": 2009
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "spreadStr",
            "optional": false,
            "typeAnnotation": null,
            "start": 2032,
            "end": 2041
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "charAt",
            "optional": false,
            "typeAnnotation": null,
            "start": 2042,
            "end": 2048
          },
          "optional": false,
          "computed": false,
          "start": 2032,
          "end": 2048
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 2049,
            "end": 2050
          }
        ],
        "optional": false,
        "start": 2032,
        "end": 2051
      },
      "directive": null,
      "start": 2032,
      "end": 2052
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
            "name": "spreadFunc",
            "optional": false,
            "typeAnnotation": null,
            "start": 2110,
            "end": 2120
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "SpreadElement",
                "argument": {
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
                    "body": [],
                    "start": 2140,
                    "end": 2143
                  },
                  "expression": false,
                  "start": 2128,
                  "end": 2143
                },
                "start": 2125,
                "end": 2143
              }
            ],
            "start": 2123,
            "end": 2145
          },
          "definite": false,
          "start": 2110,
          "end": 2145
        }
      ],
      "declare": false,
      "start": 2106,
      "end": 2145
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "spreadFunc",
          "optional": false,
          "typeAnnotation": null,
          "start": 2146,
          "end": 2156
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 2146,
        "end": 2158
      },
      "directive": null,
      "start": 2146,
      "end": 2159
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
            "name": "setterOnly",
            "optional": false,
            "typeAnnotation": null,
            "start": 2230,
            "end": 2240
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "set",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2254,
                        "end": 2255
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
                            "name": "bad",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 2262,
                                "end": 2268
                              },
                              "start": 2260,
                              "end": 2268
                            },
                            "start": 2257,
                            "end": 2268
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "start": 2270,
                          "end": 2273
                        },
                        "expression": false,
                        "start": 2256,
                        "end": 2273
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 2250,
                      "end": 2273
                    }
                  ],
                  "start": 2248,
                  "end": 2275
                },
                "start": 2245,
                "end": 2275
              }
            ],
            "start": 2243,
            "end": 2277
          },
          "definite": false,
          "start": 2230,
          "end": 2277
        }
      ],
      "declare": false,
      "start": 2226,
      "end": 2278
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
            "name": "setterOnly",
            "optional": false,
            "typeAnnotation": null,
            "start": 2279,
            "end": 2289
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 2290,
            "end": 2291
          },
          "optional": false,
          "computed": false,
          "start": 2279,
          "end": 2291
        },
        "right": {
          "type": "Literal",
          "value": 12,
          "raw": "12",
          "start": 2294,
          "end": 2296
        },
        "start": 2279,
        "end": 2296
      },
      "directive": null,
      "start": 2279,
      "end": 2297
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 2388,
        "end": 2389
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
              "name": "p",
              "optional": false,
              "typeAnnotation": null,
              "start": 2392,
              "end": 2393
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 2396,
              "end": 2397
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 2392,
            "end": 2398
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null,
              "start": 2399,
              "end": 2400
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
                "body": [],
                "start": 2403,
                "end": 2406
              },
              "expression": false,
              "start": 2400,
              "end": 2406
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2399,
            "end": 2406
          }
        ],
        "start": 2390,
        "end": 2408
      },
      "abstract": false,
      "declare": false,
      "start": 2382,
      "end": 2408
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
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2416,
                  "end": 2417
                },
                "typeArguments": null,
                "start": 2416,
                "end": 2417
              },
              "start": 2414,
              "end": 2417
            },
            "start": 2413,
            "end": 2417
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 2424,
              "end": 2425
            },
            "typeArguments": null,
            "arguments": [],
            "start": 2420,
            "end": 2427
          },
          "definite": false,
          "start": 2413,
          "end": 2427
        }
      ],
      "declare": false,
      "start": 2409,
      "end": 2427
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
            "name": "spreadC",
            "optional": false,
            "typeAnnotation": null,
            "start": 2432,
            "end": 2439
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2447,
                  "end": 2448
                },
                "start": 2444,
                "end": 2448
              }
            ],
            "start": 2442,
            "end": 2450
          },
          "definite": false,
          "start": 2432,
          "end": 2450
        }
      ],
      "declare": false,
      "start": 2428,
      "end": 2450
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "spreadC",
            "optional": false,
            "typeAnnotation": null,
            "start": 2451,
            "end": 2458
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null,
            "start": 2459,
            "end": 2460
          },
          "optional": false,
          "computed": false,
          "start": 2451,
          "end": 2460
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 2451,
        "end": 2462
      },
      "directive": null,
      "start": 2451,
      "end": 2463
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
            "name": "obj",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSObjectKeyword",
                "start": 2526,
                "end": 2532
              },
              "start": 2524,
              "end": 2532
            },
            "start": 2521,
            "end": 2532
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
                  "start": 2537,
                  "end": 2538
                },
                "value": {
                  "type": "Literal",
                  "value": 123,
                  "raw": "123",
                  "start": 2540,
                  "end": 2543
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2537,
                "end": 2543
              }
            ],
            "start": 2535,
            "end": 2545
          },
          "definite": false,
          "start": 2521,
          "end": 2545
        }
      ],
      "declare": false,
      "start": 2517,
      "end": 2546
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
            "name": "spreadObj",
            "optional": false,
            "typeAnnotation": null,
            "start": 2551,
            "end": 2560
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2568,
                  "end": 2571
                },
                "start": 2565,
                "end": 2571
              }
            ],
            "start": 2563,
            "end": 2573
          },
          "definite": false,
          "start": 2551,
          "end": 2573
        }
      ],
      "declare": false,
      "start": 2547,
      "end": 2574
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "spreadObj",
          "optional": false,
          "typeAnnotation": null,
          "start": 2575,
          "end": 2584
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 2585,
          "end": 2586
        },
        "optional": false,
        "computed": false,
        "start": 2575,
        "end": 2586
      },
      "directive": null,
      "start": 2575,
      "end": 2587
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 2613
}
```
