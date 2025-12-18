__ESTREE_TEST__:AST:
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
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "let",
    "start": 0,
    "end": 3,
    "range": [
      0,
      3
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 4,
    "end": 5,
    "range": [
      4,
      5
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6,
    "end": 7,
    "range": [
      6,
      7
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8,
    "end": 9,
    "range": [
      8,
      9
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 10,
    "end": 11,
    "range": [
      10,
      11
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 11,
    "end": 12,
    "range": [
      11,
      12
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 13,
    "end": 14,
    "range": [
      13,
      14
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 14,
    "end": 15,
    "range": [
      14,
      15
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 16,
    "end": 17,
    "range": [
      16,
      17
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 17,
    "end": 18,
    "range": [
      17,
      18
    ]
  },
  {
    "type": "String",
    "value": "'no'",
    "start": 19,
    "end": 23,
    "range": [
      19,
      23
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 24,
    "end": 25,
    "range": [
      24,
      25
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 50,
    "end": 55,
    "range": [
      50,
      55
    ]
  },
  {
    "type": "Identifier",
    "value": "PrivateOptionalX",
    "start": 56,
    "end": 72,
    "range": [
      56,
      72
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 73,
    "end": 74,
    "range": [
      73,
      74
    ]
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 79,
    "end": 86,
    "range": [
      79,
      86
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 87,
    "end": 88,
    "range": [
      87,
      88
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 88,
    "end": 89,
    "range": [
      88,
      89
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 89,
    "end": 90,
    "range": [
      89,
      90
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 91,
    "end": 97,
    "range": [
      91,
      97
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 97,
    "end": 98,
    "range": [
      97,
      98
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 99,
    "end": 100,
    "range": [
      99,
      100
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
    "value": "PublicX",
    "start": 107,
    "end": 114,
    "range": [
      107,
      114
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 115,
    "end": 116,
    "range": [
      115,
      116
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 121,
    "end": 127,
    "range": [
      121,
      127
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 128,
    "end": 129,
    "range": [
      128,
      129
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 129,
    "end": 130,
    "range": [
      129,
      130
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 131,
    "end": 137,
    "range": [
      131,
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
    "type": "Punctuator",
    "value": "}",
    "start": 139,
    "end": 140,
    "range": [
      139,
      140
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 141,
    "end": 148,
    "range": [
      141,
      148
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 149,
    "end": 152,
    "range": [
      149,
      152
    ]
  },
  {
    "type": "Identifier",
    "value": "publicX",
    "start": 153,
    "end": 160,
    "range": [
      153,
      160
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 160,
    "end": 161,
    "range": [
      160,
      161
    ]
  },
  {
    "type": "Identifier",
    "value": "PublicX",
    "start": 162,
    "end": 169,
    "range": [
      162,
      169
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 169,
    "end": 170,
    "range": [
      169,
      170
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 171,
    "end": 178,
    "range": [
      171,
      178
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 179,
    "end": 182,
    "range": [
      179,
      182
    ]
  },
  {
    "type": "Identifier",
    "value": "privateOptionalX",
    "start": 183,
    "end": 199,
    "range": [
      183,
      199
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 199,
    "end": 200,
    "range": [
      199,
      200
    ]
  },
  {
    "type": "Identifier",
    "value": "PrivateOptionalX",
    "start": 201,
    "end": 217,
    "range": [
      201,
      217
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 217,
    "end": 218,
    "range": [
      217,
      218
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 219,
    "end": 222,
    "range": [
      219,
      222
    ]
  },
  {
    "type": "Identifier",
    "value": "o2",
    "start": 223,
    "end": 225,
    "range": [
      223,
      225
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 226,
    "end": 227,
    "range": [
      226,
      227
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 228,
    "end": 229,
    "range": [
      228,
      229
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 230,
    "end": 233,
    "range": [
      230,
      233
    ]
  },
  {
    "type": "Identifier",
    "value": "publicX",
    "start": 233,
    "end": 240,
    "range": [
      233,
      240
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 240,
    "end": 241,
    "range": [
      240,
      241
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 242,
    "end": 245,
    "range": [
      242,
      245
    ]
  },
  {
    "type": "Identifier",
    "value": "privateOptionalX",
    "start": 245,
    "end": 261,
    "range": [
      245,
      261
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 262,
    "end": 263,
    "range": [
      262,
      263
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 263,
    "end": 264,
    "range": [
      263,
      264
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 265,
    "end": 268,
    "range": [
      265,
      268
    ]
  },
  {
    "type": "Identifier",
    "value": "sn",
    "start": 269,
    "end": 271,
    "range": [
      269,
      271
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 271,
    "end": 272,
    "range": [
      271,
      272
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 273,
    "end": 279,
    "range": [
      273,
      279
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 280,
    "end": 281,
    "range": [
      280,
      281
    ]
  },
  {
    "type": "Identifier",
    "value": "o2",
    "start": 282,
    "end": 284,
    "range": [
      282,
      284
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 284,
    "end": 285,
    "range": [
      284,
      285
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 285,
    "end": 286,
    "range": [
      285,
      286
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 286,
    "end": 287,
    "range": [
      286,
      287
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 311,
    "end": 318,
    "range": [
      311,
      318
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 319,
    "end": 322,
    "range": [
      319,
      322
    ]
  },
  {
    "type": "Identifier",
    "value": "optionalString",
    "start": 323,
    "end": 337,
    "range": [
      323,
      337
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 337,
    "end": 338,
    "range": [
      337,
      338
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 339,
    "end": 340,
    "range": [
      339,
      340
    ]
  },
  {
    "type": "Identifier",
    "value": "sn",
    "start": 341,
    "end": 343,
    "range": [
      341,
      343
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 343,
    "end": 344,
    "range": [
      343,
      344
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 344,
    "end": 345,
    "range": [
      344,
      345
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 346,
    "end": 352,
    "range": [
      346,
      352
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 353,
    "end": 354,
    "range": [
      353,
      354
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 354,
    "end": 355,
    "range": [
      354,
      355
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 356,
    "end": 363,
    "range": [
      356,
      363
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 364,
    "end": 367,
    "range": [
      364,
      367
    ]
  },
  {
    "type": "Identifier",
    "value": "optionalNumber",
    "start": 368,
    "end": 382,
    "range": [
      368,
      382
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 382,
    "end": 383,
    "range": [
      382,
      383
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 384,
    "end": 385,
    "range": [
      384,
      385
    ]
  },
  {
    "type": "Identifier",
    "value": "sn",
    "start": 386,
    "end": 388,
    "range": [
      386,
      388
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 388,
    "end": 389,
    "range": [
      388,
      389
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 389,
    "end": 390,
    "range": [
      389,
      390
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 391,
    "end": 397,
    "range": [
      391,
      397
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 398,
    "end": 399,
    "range": [
      398,
      399
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 399,
    "end": 400,
    "range": [
      399,
      400
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 401,
    "end": 404,
    "range": [
      401,
      404
    ]
  },
  {
    "type": "Identifier",
    "value": "allOptional",
    "start": 405,
    "end": 416,
    "range": [
      405,
      416
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 416,
    "end": 417,
    "range": [
      416,
      417
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 418,
    "end": 419,
    "range": [
      418,
      419
    ]
  },
  {
    "type": "Identifier",
    "value": "sn",
    "start": 420,
    "end": 422,
    "range": [
      420,
      422
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 422,
    "end": 423,
    "range": [
      422,
      423
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 424,
    "end": 430,
    "range": [
      424,
      430
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 431,
    "end": 432,
    "range": [
      431,
      432
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 433,
    "end": 439,
    "range": [
      433,
      439
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 440,
    "end": 441,
    "range": [
      440,
      441
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 442,
    "end": 443,
    "range": [
      442,
      443
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 444,
    "end": 445,
    "range": [
      444,
      445
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 446,
    "end": 449,
    "range": [
      446,
      449
    ]
  },
  {
    "type": "Identifier",
    "value": "optionalString",
    "start": 449,
    "end": 463,
    "range": [
      449,
      463
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 463,
    "end": 464,
    "range": [
      463,
      464
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 465,
    "end": 468,
    "range": [
      465,
      468
    ]
  },
  {
    "type": "Identifier",
    "value": "optionalNumber",
    "start": 468,
    "end": 482,
    "range": [
      468,
      482
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 483,
    "end": 484,
    "range": [
      483,
      484
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 484,
    "end": 485,
    "range": [
      484,
      485
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 571,
    "end": 580,
    "range": [
      571,
      580
    ]
  },
  {
    "type": "Identifier",
    "value": "Bool",
    "start": 581,
    "end": 585,
    "range": [
      581,
      585
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 586,
    "end": 587,
    "range": [
      586,
      587
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 588,
    "end": 589,
    "range": [
      588,
      589
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 589,
    "end": 590,
    "range": [
      589,
      590
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 591,
    "end": 598,
    "range": [
      591,
      598
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 599,
    "end": 600,
    "range": [
      599,
      600
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 600,
    "end": 601,
    "range": [
      600,
      601
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 602,
    "end": 611,
    "range": [
      602,
      611
    ]
  },
  {
    "type": "Identifier",
    "value": "Str",
    "start": 612,
    "end": 615,
    "range": [
      612,
      615
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 616,
    "end": 617,
    "range": [
      616,
      617
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 618,
    "end": 619,
    "range": [
      618,
      619
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 619,
    "end": 620,
    "range": [
      619,
      620
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 621,
    "end": 627,
    "range": [
      621,
      627
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 628,
    "end": 629,
    "range": [
      628,
      629
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 629,
    "end": 630,
    "range": [
      629,
      630
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 631,
    "end": 634,
    "range": [
      631,
      634
    ]
  },
  {
    "type": "Identifier",
    "value": "spread",
    "start": 635,
    "end": 641,
    "range": [
      635,
      641
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 642,
    "end": 643,
    "range": [
      642,
      643
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 644,
    "end": 645,
    "range": [
      644,
      645
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 646,
    "end": 649,
    "range": [
      646,
      649
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 649,
    "end": 650,
    "range": [
      649,
      650
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 651,
    "end": 652,
    "range": [
      651,
      652
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 652,
    "end": 653,
    "range": [
      652,
      653
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 654,
    "end": 658,
    "range": [
      654,
      658
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 659,
    "end": 660,
    "range": [
      659,
      660
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 660,
    "end": 661,
    "range": [
      660,
      661
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 662,
    "end": 665,
    "range": [
      662,
      665
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 665,
    "end": 666,
    "range": [
      665,
      666
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 666,
    "end": 667,
    "range": [
      666,
      667
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 667,
    "end": 668,
    "range": [
      667,
      668
    ]
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 669,
    "end": 674,
    "range": [
      669,
      674
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 675,
    "end": 676,
    "range": [
      675,
      676
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 677,
    "end": 678,
    "range": [
      677,
      678
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 678,
    "end": 679,
    "range": [
      678,
      679
    ]
  },
  {
    "type": "Identifier",
    "value": "spread",
    "start": 680,
    "end": 686,
    "range": [
      680,
      686
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 687,
    "end": 688,
    "range": [
      687,
      688
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 689,
    "end": 690,
    "range": [
      689,
      690
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 691,
    "end": 692,
    "range": [
      691,
      692
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 692,
    "end": 693,
    "range": [
      692,
      693
    ]
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 694,
    "end": 699,
    "range": [
      694,
      699
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 700,
    "end": 701,
    "range": [
      700,
      701
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 701,
    "end": 702,
    "range": [
      701,
      702
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 726,
    "end": 729,
    "range": [
      726,
      729
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 730,
    "end": 731,
    "range": [
      730,
      731
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 732,
    "end": 733,
    "range": [
      732,
      733
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 734,
    "end": 735,
    "range": [
      734,
      735
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 736,
    "end": 737,
    "range": [
      736,
      737
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 737,
    "end": 738,
    "range": [
      737,
      738
    ]
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 739,
    "end": 744,
    "range": [
      739,
      744
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 745,
    "end": 746,
    "range": [
      745,
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
    "type": "Identifier",
    "value": "spread",
    "start": 748,
    "end": 754,
    "range": [
      748,
      754
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 755,
    "end": 756,
    "range": [
      755,
      756
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 757,
    "end": 758,
    "range": [
      757,
      758
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 758,
    "end": 759,
    "range": [
      758,
      759
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 847,
    "end": 850,
    "range": [
      847,
      850
    ]
  },
  {
    "type": "Identifier",
    "value": "duplicated",
    "start": 851,
    "end": 861,
    "range": [
      851,
      861
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 862,
    "end": 863,
    "range": [
      862,
      863
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 864,
    "end": 865,
    "range": [
      864,
      865
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 866,
    "end": 867,
    "range": [
      866,
      867
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 867,
    "end": 868,
    "range": [
      867,
      868
    ]
  },
  {
    "type": "String",
    "value": "'bad'",
    "start": 869,
    "end": 874,
    "range": [
      869,
      874
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 874,
    "end": 875,
    "range": [
      874,
      875
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 876,
    "end": 879,
    "range": [
      876,
      879
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 879,
    "end": 880,
    "range": [
      879,
      880
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 880,
    "end": 881,
    "range": [
      880,
      881
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 882,
    "end": 883,
    "range": [
      882,
      883
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 883,
    "end": 884,
    "range": [
      883,
      884
    ]
  },
  {
    "type": "String",
    "value": "'bad'",
    "start": 885,
    "end": 890,
    "range": [
      885,
      890
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 890,
    "end": 891,
    "range": [
      890,
      891
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 892,
    "end": 895,
    "range": [
      892,
      895
    ]
  },
  {
    "type": "Identifier",
    "value": "o2",
    "start": 895,
    "end": 897,
    "range": [
      895,
      897
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 897,
    "end": 898,
    "range": [
      897,
      898
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 899,
    "end": 900,
    "range": [
      899,
      900
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 900,
    "end": 901,
    "range": [
      900,
      901
    ]
  },
  {
    "type": "String",
    "value": "'bad'",
    "start": 902,
    "end": 907,
    "range": [
      902,
      907
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 908,
    "end": 909,
    "range": [
      908,
      909
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 910,
    "end": 913,
    "range": [
      910,
      913
    ]
  },
  {
    "type": "Identifier",
    "value": "duplicatedSpread",
    "start": 914,
    "end": 930,
    "range": [
      914,
      930
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 931,
    "end": 932,
    "range": [
      931,
      932
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 933,
    "end": 934,
    "range": [
      933,
      934
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 935,
    "end": 938,
    "range": [
      935,
      938
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 938,
    "end": 939,
    "range": [
      938,
      939
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 939,
    "end": 940,
    "range": [
      939,
      940
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 941,
    "end": 944,
    "range": [
      941,
      944
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 944,
    "end": 945,
    "range": [
      944,
      945
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 946,
    "end": 947,
    "range": [
      946,
      947
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1010,
    "end": 1013,
    "range": [
      1010,
      1013
    ]
  },
  {
    "type": "Identifier",
    "value": "ignore",
    "start": 1014,
    "end": 1020,
    "range": [
      1014,
      1020
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1020,
    "end": 1021,
    "range": [
      1020,
      1021
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1022,
    "end": 1023,
    "range": [
      1022,
      1023
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1024,
    "end": 1025,
    "range": [
      1024,
      1025
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1025,
    "end": 1026,
    "range": [
      1025,
      1026
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1027,
    "end": 1033,
    "range": [
      1027,
      1033
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1033,
    "end": 1034,
    "range": [
      1033,
      1034
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1035,
    "end": 1036,
    "range": [
      1035,
      1036
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1036,
    "end": 1037,
    "range": [
      1036,
      1037
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1038,
    "end": 1044,
    "range": [
      1038,
      1044
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1045,
    "end": 1046,
    "range": [
      1045,
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
    "value": "{",
    "start": 1053,
    "end": 1054,
    "range": [
      1053,
      1054
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1055,
    "end": 1056,
    "range": [
      1055,
      1056
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1056,
    "end": 1057,
    "range": [
      1056,
      1057
    ]
  },
  {
    "type": "String",
    "value": "'ignored'",
    "start": 1058,
    "end": 1067,
    "range": [
      1058,
      1067
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1067,
    "end": 1068,
    "range": [
      1067,
      1068
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1069,
    "end": 1072,
    "range": [
      1069,
      1072
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 1072,
    "end": 1073,
    "range": [
      1072,
      1073
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1074,
    "end": 1075,
    "range": [
      1074,
      1075
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1077,
    "end": 1080,
    "range": [
      1077,
      1080
    ]
  },
  {
    "type": "Identifier",
    "value": "o3",
    "start": 1081,
    "end": 1083,
    "range": [
      1081,
      1083
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1084,
    "end": 1085,
    "range": [
      1084,
      1085
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1086,
    "end": 1087,
    "range": [
      1086,
      1087
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1088,
    "end": 1089,
    "range": [
      1088,
      1089
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1089,
    "end": 1090,
    "range": [
      1089,
      1090
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1091,
    "end": 1092,
    "range": [
      1091,
      1092
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1092,
    "end": 1093,
    "range": [
      1092,
      1093
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1094,
    "end": 1095,
    "range": [
      1094,
      1095
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1095,
    "end": 1096,
    "range": [
      1095,
      1096
    ]
  },
  {
    "type": "String",
    "value": "'no'",
    "start": 1097,
    "end": 1101,
    "range": [
      1097,
      1101
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1102,
    "end": 1103,
    "range": [
      1102,
      1103
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1104,
    "end": 1107,
    "range": [
      1104,
      1107
    ]
  },
  {
    "type": "Identifier",
    "value": "o4",
    "start": 1108,
    "end": 1110,
    "range": [
      1108,
      1110
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1111,
    "end": 1112,
    "range": [
      1111,
      1112
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1113,
    "end": 1114,
    "range": [
      1113,
      1114
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1115,
    "end": 1116,
    "range": [
      1115,
      1116
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1116,
    "end": 1117,
    "range": [
      1116,
      1117
    ]
  },
  {
    "type": "String",
    "value": "'yes'",
    "start": 1118,
    "end": 1123,
    "range": [
      1118,
      1123
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1123,
    "end": 1124,
    "range": [
      1123,
      1124
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1125,
    "end": 1126,
    "range": [
      1125,
      1126
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1126,
    "end": 1127,
    "range": [
      1126,
      1127
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1128,
    "end": 1132,
    "range": [
      1128,
      1132
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1133,
    "end": 1134,
    "range": [
      1133,
      1134
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1135,
    "end": 1138,
    "range": [
      1135,
      1138
    ]
  },
  {
    "type": "Identifier",
    "value": "combinedBefore",
    "start": 1139,
    "end": 1153,
    "range": [
      1139,
      1153
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1153,
    "end": 1154,
    "range": [
      1153,
      1154
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1155,
    "end": 1156,
    "range": [
      1155,
      1156
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1157,
    "end": 1158,
    "range": [
      1157,
      1158
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1158,
    "end": 1159,
    "range": [
      1158,
      1159
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1160,
    "end": 1166,
    "range": [
      1160,
      1166
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1166,
    "end": 1167,
    "range": [
      1166,
      1167
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1168,
    "end": 1169,
    "range": [
      1168,
      1169
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1169,
    "end": 1170,
    "range": [
      1169,
      1170
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1171,
    "end": 1177,
    "range": [
      1171,
      1177
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1177,
    "end": 1178,
    "range": [
      1177,
      1178
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1179,
    "end": 1180,
    "range": [
      1179,
      1180
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1180,
    "end": 1181,
    "range": [
      1180,
      1181
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1182,
    "end": 1189,
    "range": [
      1182,
      1189
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1190,
    "end": 1191,
    "range": [
      1190,
      1191
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1192,
    "end": 1193,
    "range": [
      1192,
      1193
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1198,
    "end": 1199,
    "range": [
      1198,
      1199
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1200,
    "end": 1201,
    "range": [
      1200,
      1201
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1201,
    "end": 1202,
    "range": [
      1201,
      1202
    ]
  },
  {
    "type": "String",
    "value": "'ok'",
    "start": 1203,
    "end": 1207,
    "range": [
      1203,
      1207
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1207,
    "end": 1208,
    "range": [
      1207,
      1208
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1209,
    "end": 1212,
    "range": [
      1209,
      1212
    ]
  },
  {
    "type": "Identifier",
    "value": "o3",
    "start": 1212,
    "end": 1214,
    "range": [
      1212,
      1214
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1214,
    "end": 1215,
    "range": [
      1214,
      1215
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1216,
    "end": 1219,
    "range": [
      1216,
      1219
    ]
  },
  {
    "type": "Identifier",
    "value": "o4",
    "start": 1219,
    "end": 1221,
    "range": [
      1219,
      1221
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1222,
    "end": 1223,
    "range": [
      1222,
      1223
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1224,
    "end": 1227,
    "range": [
      1224,
      1227
    ]
  },
  {
    "type": "Identifier",
    "value": "combinedMid",
    "start": 1228,
    "end": 1239,
    "range": [
      1228,
      1239
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1239,
    "end": 1240,
    "range": [
      1239,
      1240
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1241,
    "end": 1242,
    "range": [
      1241,
      1242
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1243,
    "end": 1244,
    "range": [
      1243,
      1244
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1244,
    "end": 1245,
    "range": [
      1244,
      1245
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1246,
    "end": 1252,
    "range": [
      1246,
      1252
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1252,
    "end": 1253,
    "range": [
      1252,
      1253
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1254,
    "end": 1255,
    "range": [
      1254,
      1255
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1255,
    "end": 1256,
    "range": [
      1255,
      1256
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1257,
    "end": 1263,
    "range": [
      1257,
      1263
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1263,
    "end": 1264,
    "range": [
      1263,
      1264
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1265,
    "end": 1266,
    "range": [
      1265,
      1266
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1266,
    "end": 1267,
    "range": [
      1266,
      1267
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1268,
    "end": 1275,
    "range": [
      1268,
      1275
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1276,
    "end": 1277,
    "range": [
      1276,
      1277
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1278,
    "end": 1279,
    "range": [
      1278,
      1279
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1284,
    "end": 1285,
    "range": [
      1284,
      1285
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1286,
    "end": 1289,
    "range": [
      1286,
      1289
    ]
  },
  {
    "type": "Identifier",
    "value": "o3",
    "start": 1289,
    "end": 1291,
    "range": [
      1289,
      1291
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1291,
    "end": 1292,
    "range": [
      1291,
      1292
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1293,
    "end": 1294,
    "range": [
      1293,
      1294
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1294,
    "end": 1295,
    "range": [
      1294,
      1295
    ]
  },
  {
    "type": "String",
    "value": "'ok'",
    "start": 1296,
    "end": 1300,
    "range": [
      1296,
      1300
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1300,
    "end": 1301,
    "range": [
      1300,
      1301
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1302,
    "end": 1305,
    "range": [
      1302,
      1305
    ]
  },
  {
    "type": "Identifier",
    "value": "o4",
    "start": 1305,
    "end": 1307,
    "range": [
      1305,
      1307
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1308,
    "end": 1309,
    "range": [
      1308,
      1309
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1310,
    "end": 1313,
    "range": [
      1310,
      1313
    ]
  },
  {
    "type": "Identifier",
    "value": "combinedNested",
    "start": 1314,
    "end": 1328,
    "range": [
      1314,
      1328
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1328,
    "end": 1329,
    "range": [
      1328,
      1329
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1330,
    "end": 1331,
    "range": [
      1330,
      1331
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1332,
    "end": 1333,
    "range": [
      1332,
      1333
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1333,
    "end": 1334,
    "range": [
      1333,
      1334
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1335,
    "end": 1341,
    "range": [
      1335,
      1341
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1341,
    "end": 1342,
    "range": [
      1341,
      1342
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1343,
    "end": 1344,
    "range": [
      1343,
      1344
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1344,
    "end": 1345,
    "range": [
      1344,
      1345
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1346,
    "end": 1353,
    "range": [
      1346,
      1353
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1353,
    "end": 1354,
    "range": [
      1353,
      1354
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1355,
    "end": 1356,
    "range": [
      1355,
      1356
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1356,
    "end": 1357,
    "range": [
      1356,
      1357
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1358,
    "end": 1364,
    "range": [
      1358,
      1364
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1364,
    "end": 1365,
    "range": [
      1364,
      1365
    ]
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 1366,
    "end": 1367,
    "range": [
      1366,
      1367
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1367,
    "end": 1368,
    "range": [
      1367,
      1368
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1369,
    "end": 1375,
    "range": [
      1369,
      1375
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1376,
    "end": 1377,
    "range": [
      1376,
      1377
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1378,
    "end": 1379,
    "range": [
      1378,
      1379
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1384,
    "end": 1385,
    "range": [
      1384,
      1385
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1386,
    "end": 1389,
    "range": [
      1386,
      1389
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1389,
    "end": 1390,
    "range": [
      1389,
      1390
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1391,
    "end": 1392,
    "range": [
      1391,
      1392
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1392,
    "end": 1393,
    "range": [
      1392,
      1393
    ]
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 1394,
    "end": 1395,
    "range": [
      1394,
      1395
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1395,
    "end": 1396,
    "range": [
      1395,
      1396
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1397,
    "end": 1400,
    "range": [
      1397,
      1400
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1400,
    "end": 1401,
    "range": [
      1400,
      1401
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1402,
    "end": 1403,
    "range": [
      1402,
      1403
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1403,
    "end": 1404,
    "range": [
      1403,
      1404
    ]
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 1405,
    "end": 1410,
    "range": [
      1405,
      1410
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1410,
    "end": 1411,
    "range": [
      1410,
      1411
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1412,
    "end": 1413,
    "range": [
      1412,
      1413
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1413,
    "end": 1414,
    "range": [
      1413,
      1414
    ]
  },
  {
    "type": "String",
    "value": "'overriden'",
    "start": 1415,
    "end": 1426,
    "range": [
      1415,
      1426
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1427,
    "end": 1428,
    "range": [
      1427,
      1428
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1429,
    "end": 1430,
    "range": [
      1429,
      1430
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1430,
    "end": 1431,
    "range": [
      1430,
      1431
    ]
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 1432,
    "end": 1433,
    "range": [
      1432,
      1433
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1433,
    "end": 1434,
    "range": [
      1433,
      1434
    ]
  },
  {
    "type": "String",
    "value": "'actually new'",
    "start": 1435,
    "end": 1449,
    "range": [
      1435,
      1449
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1449,
    "end": 1450,
    "range": [
      1449,
      1450
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1451,
    "end": 1454,
    "range": [
      1451,
      1454
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1454,
    "end": 1455,
    "range": [
      1454,
      1455
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1456,
    "end": 1457,
    "range": [
      1456,
      1457
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1457,
    "end": 1458,
    "range": [
      1457,
      1458
    ]
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 1459,
    "end": 1460,
    "range": [
      1459,
      1460
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1460,
    "end": 1461,
    "range": [
      1460,
      1461
    ]
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 1462,
    "end": 1463,
    "range": [
      1462,
      1463
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1463,
    "end": 1464,
    "range": [
      1463,
      1464
    ]
  },
  {
    "type": "String",
    "value": "'maybe new'",
    "start": 1465,
    "end": 1476,
    "range": [
      1465,
      1476
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1477,
    "end": 1478,
    "range": [
      1477,
      1478
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1479,
    "end": 1480,
    "range": [
      1479,
      1480
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1481,
    "end": 1484,
    "range": [
      1481,
      1484
    ]
  },
  {
    "type": "Identifier",
    "value": "changeTypeBefore",
    "start": 1485,
    "end": 1501,
    "range": [
      1485,
      1501
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1501,
    "end": 1502,
    "range": [
      1501,
      1502
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1503,
    "end": 1504,
    "range": [
      1503,
      1504
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1505,
    "end": 1506,
    "range": [
      1505,
      1506
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1506,
    "end": 1507,
    "range": [
      1506,
      1507
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1508,
    "end": 1514,
    "range": [
      1508,
      1514
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1514,
    "end": 1515,
    "range": [
      1514,
      1515
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1516,
    "end": 1517,
    "range": [
      1516,
      1517
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1517,
    "end": 1518,
    "range": [
      1517,
      1518
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1519,
    "end": 1525,
    "range": [
      1519,
      1525
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1526,
    "end": 1527,
    "range": [
      1526,
      1527
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1528,
    "end": 1529,
    "range": [
      1528,
      1529
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1534,
    "end": 1535,
    "range": [
      1534,
      1535
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1536,
    "end": 1537,
    "range": [
      1536,
      1537
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1537,
    "end": 1538,
    "range": [
      1537,
      1538
    ]
  },
  {
    "type": "String",
    "value": "'wrong type?'",
    "start": 1539,
    "end": 1552,
    "range": [
      1539,
      1552
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1552,
    "end": 1553,
    "range": [
      1552,
      1553
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1554,
    "end": 1557,
    "range": [
      1554,
      1557
    ]
  },
  {
    "type": "Identifier",
    "value": "o3",
    "start": 1557,
    "end": 1559,
    "range": [
      1557,
      1559
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1560,
    "end": 1561,
    "range": [
      1560,
      1561
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1561,
    "end": 1562,
    "range": [
      1561,
      1562
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1563,
    "end": 1566,
    "range": [
      1563,
      1566
    ]
  },
  {
    "type": "Identifier",
    "value": "computedMiddle",
    "start": 1567,
    "end": 1581,
    "range": [
      1567,
      1581
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1581,
    "end": 1582,
    "range": [
      1581,
      1582
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1583,
    "end": 1584,
    "range": [
      1583,
      1584
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1585,
    "end": 1586,
    "range": [
      1585,
      1586
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1586,
    "end": 1587,
    "range": [
      1586,
      1587
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1588,
    "end": 1594,
    "range": [
      1588,
      1594
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1594,
    "end": 1595,
    "range": [
      1594,
      1595
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1596,
    "end": 1597,
    "range": [
      1596,
      1597
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1597,
    "end": 1598,
    "range": [
      1597,
      1598
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1599,
    "end": 1605,
    "range": [
      1599,
      1605
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1605,
    "end": 1606,
    "range": [
      1605,
      1606
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1607,
    "end": 1608,
    "range": [
      1607,
      1608
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1608,
    "end": 1609,
    "range": [
      1608,
      1609
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1610,
    "end": 1617,
    "range": [
      1610,
      1617
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1617,
    "end": 1618,
    "range": [
      1617,
      1618
    ]
  },
  {
    "type": "String",
    "value": "\"in the middle\"",
    "start": 1619,
    "end": 1634,
    "range": [
      1619,
      1634
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1634,
    "end": 1635,
    "range": [
      1634,
      1635
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1636,
    "end": 1642,
    "range": [
      1636,
      1642
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1643,
    "end": 1644,
    "range": [
      1643,
      1644
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1645,
    "end": 1646,
    "range": [
      1645,
      1646
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1651,
    "end": 1652,
    "range": [
      1651,
      1652
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1653,
    "end": 1656,
    "range": [
      1653,
      1656
    ]
  },
  {
    "type": "Identifier",
    "value": "o3",
    "start": 1656,
    "end": 1658,
    "range": [
      1656,
      1658
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1658,
    "end": 1659,
    "range": [
      1658,
      1659
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1660,
    "end": 1661,
    "range": [
      1660,
      1661
    ]
  },
  {
    "type": "String",
    "value": "'in the middle'",
    "start": 1661,
    "end": 1676,
    "range": [
      1661,
      1676
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1676,
    "end": 1677,
    "range": [
      1676,
      1677
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1677,
    "end": 1678,
    "range": [
      1677,
      1678
    ]
  },
  {
    "type": "Numeric",
    "value": "13",
    "start": 1679,
    "end": 1681,
    "range": [
      1679,
      1681
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1681,
    "end": 1682,
    "range": [
      1681,
      1682
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1683,
    "end": 1684,
    "range": [
      1683,
      1684
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1684,
    "end": 1685,
    "range": [
      1684,
      1685
    ]
  },
  {
    "type": "String",
    "value": "'maybe?'",
    "start": 1686,
    "end": 1694,
    "range": [
      1686,
      1694
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1694,
    "end": 1695,
    "range": [
      1694,
      1695
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1696,
    "end": 1699,
    "range": [
      1696,
      1699
    ]
  },
  {
    "type": "Identifier",
    "value": "o4",
    "start": 1699,
    "end": 1701,
    "range": [
      1699,
      1701
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1702,
    "end": 1703,
    "range": [
      1702,
      1703
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1758,
    "end": 1761,
    "range": [
      1758,
      1761
    ]
  },
  {
    "type": "Identifier",
    "value": "spreadNum",
    "start": 1762,
    "end": 1771,
    "range": [
      1762,
      1771
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1772,
    "end": 1773,
    "range": [
      1772,
      1773
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1774,
    "end": 1775,
    "range": [
      1774,
      1775
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1776,
    "end": 1779,
    "range": [
      1776,
      1779
    ]
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 1779,
    "end": 1781,
    "range": [
      1779,
      1781
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1782,
    "end": 1783,
    "range": [
      1782,
      1783
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1783,
    "end": 1784,
    "range": [
      1783,
      1784
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1785,
    "end": 1788,
    "range": [
      1785,
      1788
    ]
  },
  {
    "type": "Identifier",
    "value": "spreadSum",
    "start": 1789,
    "end": 1798,
    "range": [
      1789,
      1798
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1799,
    "end": 1800,
    "range": [
      1799,
      1800
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1801,
    "end": 1802,
    "range": [
      1801,
      1802
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1803,
    "end": 1806,
    "range": [
      1803,
      1806
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1806,
    "end": 1807,
    "range": [
      1806,
      1807
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1808,
    "end": 1809,
    "range": [
      1808,
      1809
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1810,
    "end": 1811,
    "range": [
      1810,
      1811
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1812,
    "end": 1813,
    "range": [
      1812,
      1813
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1813,
    "end": 1814,
    "range": [
      1813,
      1814
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1815,
    "end": 1818,
    "range": [
      1815,
      1818
    ]
  },
  {
    "type": "Identifier",
    "value": "spreadZero",
    "start": 1819,
    "end": 1829,
    "range": [
      1819,
      1829
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1830,
    "end": 1831,
    "range": [
      1830,
      1831
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1832,
    "end": 1833,
    "range": [
      1832,
      1833
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1834,
    "end": 1837,
    "range": [
      1834,
      1837
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1837,
    "end": 1838,
    "range": [
      1837,
      1838
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1839,
    "end": 1840,
    "range": [
      1839,
      1840
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1840,
    "end": 1841,
    "range": [
      1840,
      1841
    ]
  },
  {
    "type": "Identifier",
    "value": "spreadZero",
    "start": 1842,
    "end": 1852,
    "range": [
      1842,
      1852
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1852,
    "end": 1853,
    "range": [
      1852,
      1853
    ]
  },
  {
    "type": "Identifier",
    "value": "toFixed",
    "start": 1853,
    "end": 1860,
    "range": [
      1853,
      1860
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1860,
    "end": 1861,
    "range": [
      1860,
      1861
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1861,
    "end": 1862,
    "range": [
      1861,
      1862
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1862,
    "end": 1863,
    "range": [
      1862,
      1863
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1910,
    "end": 1913,
    "range": [
      1910,
      1913
    ]
  },
  {
    "type": "Identifier",
    "value": "spreadBool",
    "start": 1914,
    "end": 1924,
    "range": [
      1914,
      1924
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1925,
    "end": 1926,
    "range": [
      1925,
      1926
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1927,
    "end": 1928,
    "range": [
      1927,
      1928
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1929,
    "end": 1932,
    "range": [
      1929,
      1932
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1932,
    "end": 1936,
    "range": [
      1932,
      1936
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1937,
    "end": 1938,
    "range": [
      1937,
      1938
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1938,
    "end": 1939,
    "range": [
      1938,
      1939
    ]
  },
  {
    "type": "Identifier",
    "value": "spreadBool",
    "start": 1940,
    "end": 1950,
    "range": [
      1940,
      1950
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1950,
    "end": 1951,
    "range": [
      1950,
      1951
    ]
  },
  {
    "type": "Identifier",
    "value": "valueOf",
    "start": 1951,
    "end": 1958,
    "range": [
      1951,
      1958
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1958,
    "end": 1959,
    "range": [
      1958,
      1959
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1959,
    "end": 1960,
    "range": [
      1959,
      1960
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1960,
    "end": 1961,
    "range": [
      1960,
      1961
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1962,
    "end": 1965,
    "range": [
      1962,
      1965
    ]
  },
  {
    "type": "Identifier",
    "value": "spreadStr",
    "start": 1966,
    "end": 1975,
    "range": [
      1966,
      1975
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1976,
    "end": 1977,
    "range": [
      1976,
      1977
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1978,
    "end": 1979,
    "range": [
      1978,
      1979
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1980,
    "end": 1983,
    "range": [
      1980,
      1983
    ]
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 1983,
    "end": 1988,
    "range": [
      1983,
      1988
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1989,
    "end": 1990,
    "range": [
      1989,
      1990
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1990,
    "end": 1991,
    "range": [
      1990,
      1991
    ]
  },
  {
    "type": "Identifier",
    "value": "spreadStr",
    "start": 1992,
    "end": 2001,
    "range": [
      1992,
      2001
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2001,
    "end": 2002,
    "range": [
      2001,
      2002
    ]
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 2002,
    "end": 2008,
    "range": [
      2002,
      2008
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2008,
    "end": 2009,
    "range": [
      2008,
      2009
    ]
  },
  {
    "type": "Identifier",
    "value": "spreadStr",
    "start": 2032,
    "end": 2041,
    "range": [
      2032,
      2041
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2041,
    "end": 2042,
    "range": [
      2041,
      2042
    ]
  },
  {
    "type": "Identifier",
    "value": "charAt",
    "start": 2042,
    "end": 2048,
    "range": [
      2042,
      2048
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2048,
    "end": 2049,
    "range": [
      2048,
      2049
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2049,
    "end": 2050,
    "range": [
      2049,
      2050
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2050,
    "end": 2051,
    "range": [
      2050,
      2051
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2051,
    "end": 2052,
    "range": [
      2051,
      2052
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2106,
    "end": 2109,
    "range": [
      2106,
      2109
    ]
  },
  {
    "type": "Identifier",
    "value": "spreadFunc",
    "start": 2110,
    "end": 2120,
    "range": [
      2110,
      2120
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2121,
    "end": 2122,
    "range": [
      2121,
      2122
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2123,
    "end": 2124,
    "range": [
      2123,
      2124
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2125,
    "end": 2128,
    "range": [
      2125,
      2128
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2128,
    "end": 2136,
    "range": [
      2128,
      2136
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2137,
    "end": 2138,
    "range": [
      2137,
      2138
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2138,
    "end": 2139,
    "range": [
      2138,
      2139
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2140,
    "end": 2141,
    "range": [
      2140,
      2141
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2142,
    "end": 2143,
    "range": [
      2142,
      2143
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2144,
    "end": 2145,
    "range": [
      2144,
      2145
    ]
  },
  {
    "type": "Identifier",
    "value": "spreadFunc",
    "start": 2146,
    "end": 2156,
    "range": [
      2146,
      2156
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2156,
    "end": 2157,
    "range": [
      2156,
      2157
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2157,
    "end": 2158,
    "range": [
      2157,
      2158
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2158,
    "end": 2159,
    "range": [
      2158,
      2159
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2226,
    "end": 2229,
    "range": [
      2226,
      2229
    ]
  },
  {
    "type": "Identifier",
    "value": "setterOnly",
    "start": 2230,
    "end": 2240,
    "range": [
      2230,
      2240
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2241,
    "end": 2242,
    "range": [
      2241,
      2242
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2243,
    "end": 2244,
    "range": [
      2243,
      2244
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2245,
    "end": 2248,
    "range": [
      2245,
      2248
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2248,
    "end": 2249,
    "range": [
      2248,
      2249
    ]
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 2250,
    "end": 2253,
    "range": [
      2250,
      2253
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2254,
    "end": 2255,
    "range": [
      2254,
      2255
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
    "type": "Identifier",
    "value": "bad",
    "start": 2257,
    "end": 2260,
    "range": [
      2257,
      2260
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2260,
    "end": 2261,
    "range": [
      2260,
      2261
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2262,
    "end": 2268,
    "range": [
      2262,
      2268
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2268,
    "end": 2269,
    "range": [
      2268,
      2269
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2270,
    "end": 2271,
    "range": [
      2270,
      2271
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2272,
    "end": 2273,
    "range": [
      2272,
      2273
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2274,
    "end": 2275,
    "range": [
      2274,
      2275
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2276,
    "end": 2277,
    "range": [
      2276,
      2277
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2277,
    "end": 2278,
    "range": [
      2277,
      2278
    ]
  },
  {
    "type": "Identifier",
    "value": "setterOnly",
    "start": 2279,
    "end": 2289,
    "range": [
      2279,
      2289
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2289,
    "end": 2290,
    "range": [
      2289,
      2290
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2290,
    "end": 2291,
    "range": [
      2290,
      2291
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2292,
    "end": 2293,
    "range": [
      2292,
      2293
    ]
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 2294,
    "end": 2296,
    "range": [
      2294,
      2296
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2296,
    "end": 2297,
    "range": [
      2296,
      2297
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2382,
    "end": 2387,
    "range": [
      2382,
      2387
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 2388,
    "end": 2389,
    "range": [
      2388,
      2389
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2390,
    "end": 2391,
    "range": [
      2390,
      2391
    ]
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 2392,
    "end": 2393,
    "range": [
      2392,
      2393
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2394,
    "end": 2395,
    "range": [
      2394,
      2395
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2396,
    "end": 2397,
    "range": [
      2396,
      2397
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2397,
    "end": 2398,
    "range": [
      2397,
      2398
    ]
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 2399,
    "end": 2400,
    "range": [
      2399,
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
    "type": "Punctuator",
    "value": ")",
    "start": 2401,
    "end": 2402,
    "range": [
      2401,
      2402
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2403,
    "end": 2404,
    "range": [
      2403,
      2404
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2405,
    "end": 2406,
    "range": [
      2405,
      2406
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2407,
    "end": 2408,
    "range": [
      2407,
      2408
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2409,
    "end": 2412,
    "range": [
      2409,
      2412
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 2413,
    "end": 2414,
    "range": [
      2413,
      2414
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2414,
    "end": 2415,
    "range": [
      2414,
      2415
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 2416,
    "end": 2417,
    "range": [
      2416,
      2417
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2418,
    "end": 2419,
    "range": [
      2418,
      2419
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2420,
    "end": 2423,
    "range": [
      2420,
      2423
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 2424,
    "end": 2425,
    "range": [
      2424,
      2425
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2425,
    "end": 2426,
    "range": [
      2425,
      2426
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2426,
    "end": 2427,
    "range": [
      2426,
      2427
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2428,
    "end": 2431,
    "range": [
      2428,
      2431
    ]
  },
  {
    "type": "Identifier",
    "value": "spreadC",
    "start": 2432,
    "end": 2439,
    "range": [
      2432,
      2439
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2440,
    "end": 2441,
    "range": [
      2440,
      2441
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2442,
    "end": 2443,
    "range": [
      2442,
      2443
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2444,
    "end": 2447,
    "range": [
      2444,
      2447
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 2447,
    "end": 2448,
    "range": [
      2447,
      2448
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2449,
    "end": 2450,
    "range": [
      2449,
      2450
    ]
  },
  {
    "type": "Identifier",
    "value": "spreadC",
    "start": 2451,
    "end": 2458,
    "range": [
      2451,
      2458
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2458,
    "end": 2459,
    "range": [
      2458,
      2459
    ]
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 2459,
    "end": 2460,
    "range": [
      2459,
      2460
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2460,
    "end": 2461,
    "range": [
      2460,
      2461
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2461,
    "end": 2462,
    "range": [
      2461,
      2462
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2462,
    "end": 2463,
    "range": [
      2462,
      2463
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2517,
    "end": 2520,
    "range": [
      2517,
      2520
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 2521,
    "end": 2524,
    "range": [
      2521,
      2524
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2524,
    "end": 2525,
    "range": [
      2524,
      2525
    ]
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 2526,
    "end": 2532,
    "range": [
      2526,
      2532
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2533,
    "end": 2534,
    "range": [
      2533,
      2534
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2535,
    "end": 2536,
    "range": [
      2535,
      2536
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2537,
    "end": 2538,
    "range": [
      2537,
      2538
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2538,
    "end": 2539,
    "range": [
      2538,
      2539
    ]
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 2540,
    "end": 2543,
    "range": [
      2540,
      2543
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2544,
    "end": 2545,
    "range": [
      2544,
      2545
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2545,
    "end": 2546,
    "range": [
      2545,
      2546
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2547,
    "end": 2550,
    "range": [
      2547,
      2550
    ]
  },
  {
    "type": "Identifier",
    "value": "spreadObj",
    "start": 2551,
    "end": 2560,
    "range": [
      2551,
      2560
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2561,
    "end": 2562,
    "range": [
      2561,
      2562
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2563,
    "end": 2564,
    "range": [
      2563,
      2564
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2565,
    "end": 2568,
    "range": [
      2565,
      2568
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 2568,
    "end": 2571,
    "range": [
      2568,
      2571
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2572,
    "end": 2573,
    "range": [
      2572,
      2573
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2573,
    "end": 2574,
    "range": [
      2573,
      2574
    ]
  },
  {
    "type": "Identifier",
    "value": "spreadObj",
    "start": 2575,
    "end": 2584,
    "range": [
      2575,
      2584
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2584,
    "end": 2585,
    "range": [
      2584,
      2585
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2585,
    "end": 2586,
    "range": [
      2585,
      2586
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2586,
    "end": 2587,
    "range": [
      2586,
      2587
    ]
  }
]
```
