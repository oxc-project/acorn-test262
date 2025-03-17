__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 2614,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 25,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 25,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "name": "o",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 8,
            "end": 25,
            "properties": [
              {
                "type": "Property",
                "start": 10,
                "end": 14,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 10,
                  "end": 11,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 13,
                  "end": 14,
                  "value": 1,
                  "raw": "1"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 16,
                "end": 23,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 16,
                  "end": 17,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 19,
                  "end": 23,
                  "value": "no",
                  "raw": "'no'"
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 50,
      "end": 100,
      "id": {
        "type": "Identifier",
        "start": 56,
        "end": 72,
        "name": "PrivateOptionalX",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 73,
        "end": 100,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 79,
            "end": 98,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 87,
              "end": 88,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": true,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 89,
              "end": 97,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 91,
                "end": 97
              }
            },
            "accessibility": "private"
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
      "type": "ClassDeclaration",
      "start": 101,
      "end": 140,
      "id": {
        "type": "Identifier",
        "start": 107,
        "end": 114,
        "name": "PublicX",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 115,
        "end": 140,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 121,
            "end": 138,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 128,
              "end": 129,
              "name": "x",
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
              "start": 129,
              "end": 137,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 131,
                "end": 137
              }
            },
            "accessibility": "public"
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
      "start": 141,
      "end": 170,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 153,
          "end": 169,
          "id": {
            "type": "Identifier",
            "start": 153,
            "end": 169,
            "name": "publicX",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 160,
              "end": 169,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 162,
                "end": 169,
                "typeName": {
                  "type": "Identifier",
                  "start": 162,
                  "end": 169,
                  "name": "PublicX",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
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
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 171,
      "end": 218,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 183,
          "end": 217,
          "id": {
            "type": "Identifier",
            "start": 183,
            "end": 217,
            "name": "privateOptionalX",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 199,
              "end": 217,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 201,
                "end": 217,
                "typeName": {
                  "type": "Identifier",
                  "start": 201,
                  "end": 217,
                  "name": "PrivateOptionalX",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
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
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 219,
      "end": 264,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 223,
          "end": 263,
          "id": {
            "type": "Identifier",
            "start": 223,
            "end": 225,
            "name": "o2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 228,
            "end": 263,
            "properties": [
              {
                "type": "SpreadElement",
                "start": 230,
                "end": 240,
                "argument": {
                  "type": "Identifier",
                  "start": 233,
                  "end": 240,
                  "name": "publicX",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              {
                "type": "SpreadElement",
                "start": 242,
                "end": 261,
                "argument": {
                  "type": "Identifier",
                  "start": 245,
                  "end": 261,
                  "name": "privateOptionalX",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 265,
      "end": 287,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 269,
          "end": 286,
          "id": {
            "type": "Identifier",
            "start": 269,
            "end": 279,
            "name": "sn",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 271,
              "end": 279,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 273,
                "end": 279
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 282,
            "end": 286,
            "object": {
              "type": "Identifier",
              "start": 282,
              "end": 284,
              "name": "o2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 285,
              "end": 286,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 311,
      "end": 355,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 323,
          "end": 354,
          "id": {
            "type": "Identifier",
            "start": 323,
            "end": 354,
            "name": "optionalString",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 337,
              "end": 354,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 339,
                "end": 354,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 341,
                    "end": 352,
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 341,
                      "end": 343,
                      "name": "sn",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 344,
                      "end": 352,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 346,
                        "end": 352
                      }
                    },
                    "accessibility": null,
                    "static": false
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
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 356,
      "end": 400,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 368,
          "end": 399,
          "id": {
            "type": "Identifier",
            "start": 368,
            "end": 399,
            "name": "optionalNumber",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 382,
              "end": 399,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 384,
                "end": 399,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 386,
                    "end": 397,
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 386,
                      "end": 388,
                      "name": "sn",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 389,
                      "end": 397,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 391,
                        "end": 397
                      }
                    },
                    "accessibility": null,
                    "static": false
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
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 401,
      "end": 485,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 405,
          "end": 484,
          "id": {
            "type": "Identifier",
            "start": 405,
            "end": 441,
            "name": "allOptional",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 416,
              "end": 441,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 418,
                "end": 441,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 420,
                    "end": 439,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 420,
                      "end": 422,
                      "name": "sn",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 422,
                      "end": 439,
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "start": 424,
                        "end": 439,
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
                        ]
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 444,
            "end": 484,
            "properties": [
              {
                "type": "SpreadElement",
                "start": 446,
                "end": 463,
                "argument": {
                  "type": "Identifier",
                  "start": 449,
                  "end": 463,
                  "name": "optionalString",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              {
                "type": "SpreadElement",
                "start": 465,
                "end": 482,
                "argument": {
                  "type": "Identifier",
                  "start": 468,
                  "end": 482,
                  "name": "optionalNumber",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 571,
      "end": 600,
      "id": {
        "type": "Identifier",
        "start": 581,
        "end": 585,
        "name": "Bool",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 586,
        "end": 600,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 588,
            "end": 598,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 588,
              "end": 589,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 589,
              "end": 598,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 591,
                "end": 598
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "EmptyStatement",
      "start": 600,
      "end": 601
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 602,
      "end": 629,
      "id": {
        "type": "Identifier",
        "start": 612,
        "end": 615,
        "name": "Str",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 616,
        "end": 629,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 618,
            "end": 627,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 618,
              "end": 619,
              "name": "s",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 619,
              "end": 627,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 621,
                "end": 627
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "EmptyStatement",
      "start": 629,
      "end": 630
    },
    {
      "type": "VariableDeclaration",
      "start": 631,
      "end": 679,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 635,
          "end": 678,
          "id": {
            "type": "Identifier",
            "start": 635,
            "end": 641,
            "name": "spread",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 644,
            "end": 678,
            "properties": [
              {
                "type": "SpreadElement",
                "start": 646,
                "end": 660,
                "argument": {
                  "type": "ObjectExpression",
                  "start": 649,
                  "end": 660,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 651,
                      "end": 658,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 651,
                        "end": 652,
                        "name": "b",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 654,
                        "end": 658,
                        "value": true,
                        "raw": "true"
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
                }
              },
              {
                "type": "SpreadElement",
                "start": 662,
                "end": 676,
                "argument": {
                  "type": "ObjectExpression",
                  "start": 665,
                  "end": 676,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 666,
                      "end": 674,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 666,
                        "end": 667,
                        "name": "s",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 669,
                        "end": 674,
                        "value": "foo",
                        "raw": "\"foo\""
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
                }
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 680,
      "end": 702,
      "expression": {
        "type": "AssignmentExpression",
        "start": 680,
        "end": 701,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 680,
          "end": 686,
          "name": "spread",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "ObjectExpression",
          "start": 689,
          "end": 701,
          "properties": [
            {
              "type": "Property",
              "start": 691,
              "end": 699,
              "method": false,
              "shorthand": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 691,
                "end": 692,
                "name": "s",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "Literal",
                "start": 694,
                "end": 699,
                "value": "foo",
                "raw": "\"foo\""
              },
              "kind": "init",
              "optional": false
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 726,
      "end": 747,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 730,
          "end": 746,
          "id": {
            "type": "Identifier",
            "start": 730,
            "end": 731,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 734,
            "end": 746,
            "properties": [
              {
                "type": "Property",
                "start": 736,
                "end": 744,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 736,
                  "end": 737,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 739,
                  "end": 744,
                  "value": false,
                  "raw": "false"
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 748,
      "end": 759,
      "expression": {
        "type": "AssignmentExpression",
        "start": 748,
        "end": 758,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 748,
          "end": 754,
          "name": "spread",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 757,
          "end": 758,
          "name": "b",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 847,
      "end": 909,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 851,
          "end": 909,
          "id": {
            "type": "Identifier",
            "start": 851,
            "end": 861,
            "name": "duplicated",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 864,
            "end": 909,
            "properties": [
              {
                "type": "Property",
                "start": 866,
                "end": 874,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 866,
                  "end": 867,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 869,
                  "end": 874,
                  "value": "bad",
                  "raw": "'bad'"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "SpreadElement",
                "start": 876,
                "end": 880,
                "argument": {
                  "type": "Identifier",
                  "start": 879,
                  "end": 880,
                  "name": "o",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              {
                "type": "Property",
                "start": 882,
                "end": 890,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 882,
                  "end": 883,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 885,
                  "end": 890,
                  "value": "bad",
                  "raw": "'bad'"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "SpreadElement",
                "start": 892,
                "end": 897,
                "argument": {
                  "type": "Identifier",
                  "start": 895,
                  "end": 897,
                  "name": "o2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              {
                "type": "Property",
                "start": 899,
                "end": 907,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 899,
                  "end": 900,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 902,
                  "end": 907,
                  "value": "bad",
                  "raw": "'bad'"
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 910,
      "end": 947,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 914,
          "end": 947,
          "id": {
            "type": "Identifier",
            "start": 914,
            "end": 930,
            "name": "duplicatedSpread",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 933,
            "end": 947,
            "properties": [
              {
                "type": "SpreadElement",
                "start": 935,
                "end": 939,
                "argument": {
                  "type": "Identifier",
                  "start": 938,
                  "end": 939,
                  "name": "o",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              {
                "type": "SpreadElement",
                "start": 941,
                "end": 945,
                "argument": {
                  "type": "Identifier",
                  "start": 944,
                  "end": 945,
                  "name": "o",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1010,
      "end": 1075,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1014,
          "end": 1075,
          "id": {
            "type": "Identifier",
            "start": 1014,
            "end": 1046,
            "name": "ignore",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1020,
              "end": 1046,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 1022,
                "end": 1046,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 1024,
                    "end": 1034,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1024,
                      "end": 1025,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1025,
                      "end": 1033,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1027,
                        "end": 1033
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 1035,
                    "end": 1044,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1035,
                      "end": 1036,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1036,
                      "end": 1044,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1038,
                        "end": 1044
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 1053,
            "end": 1075,
            "properties": [
              {
                "type": "Property",
                "start": 1055,
                "end": 1067,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1055,
                  "end": 1056,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 1058,
                  "end": 1067,
                  "value": "ignored",
                  "raw": "'ignored'"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "SpreadElement",
                "start": 1069,
                "end": 1073,
                "argument": {
                  "type": "Identifier",
                  "start": 1072,
                  "end": 1073,
                  "name": "o",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1077,
      "end": 1103,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1081,
          "end": 1103,
          "id": {
            "type": "Identifier",
            "start": 1081,
            "end": 1083,
            "name": "o3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 1086,
            "end": 1103,
            "properties": [
              {
                "type": "Property",
                "start": 1088,
                "end": 1092,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1088,
                  "end": 1089,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 1091,
                  "end": 1092,
                  "value": 1,
                  "raw": "1"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 1094,
                "end": 1101,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1094,
                  "end": 1095,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 1097,
                  "end": 1101,
                  "value": "no",
                  "raw": "'no'"
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1104,
      "end": 1134,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1108,
          "end": 1134,
          "id": {
            "type": "Identifier",
            "start": 1108,
            "end": 1110,
            "name": "o4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 1113,
            "end": 1134,
            "properties": [
              {
                "type": "Property",
                "start": 1115,
                "end": 1123,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1115,
                  "end": 1116,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 1118,
                  "end": 1123,
                  "value": "yes",
                  "raw": "'yes'"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 1125,
                "end": 1132,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1125,
                  "end": 1126,
                  "name": "c",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 1128,
                  "end": 1132,
                  "value": true,
                  "raw": "true"
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1135,
      "end": 1223,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1139,
          "end": 1223,
          "id": {
            "type": "Identifier",
            "start": 1139,
            "end": 1191,
            "name": "combinedBefore",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1153,
              "end": 1191,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 1155,
                "end": 1191,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 1157,
                    "end": 1167,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1157,
                      "end": 1158,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1158,
                      "end": 1166,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1160,
                        "end": 1166
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 1168,
                    "end": 1178,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1168,
                      "end": 1169,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1169,
                      "end": 1177,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1171,
                        "end": 1177
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 1179,
                    "end": 1189,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1179,
                      "end": 1180,
                      "name": "c",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1180,
                      "end": 1189,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1182,
                        "end": 1189
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 1198,
            "end": 1223,
            "properties": [
              {
                "type": "Property",
                "start": 1200,
                "end": 1207,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1200,
                  "end": 1201,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 1203,
                  "end": 1207,
                  "value": "ok",
                  "raw": "'ok'"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "SpreadElement",
                "start": 1209,
                "end": 1214,
                "argument": {
                  "type": "Identifier",
                  "start": 1212,
                  "end": 1214,
                  "name": "o3",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              {
                "type": "SpreadElement",
                "start": 1216,
                "end": 1221,
                "argument": {
                  "type": "Identifier",
                  "start": 1219,
                  "end": 1221,
                  "name": "o4",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1224,
      "end": 1309,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1228,
          "end": 1309,
          "id": {
            "type": "Identifier",
            "start": 1228,
            "end": 1277,
            "name": "combinedMid",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1239,
              "end": 1277,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 1241,
                "end": 1277,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 1243,
                    "end": 1253,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1243,
                      "end": 1244,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1244,
                      "end": 1252,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1246,
                        "end": 1252
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 1254,
                    "end": 1264,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1254,
                      "end": 1255,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1255,
                      "end": 1263,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1257,
                        "end": 1263
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 1265,
                    "end": 1275,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1265,
                      "end": 1266,
                      "name": "c",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1266,
                      "end": 1275,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1268,
                        "end": 1275
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 1284,
            "end": 1309,
            "properties": [
              {
                "type": "SpreadElement",
                "start": 1286,
                "end": 1291,
                "argument": {
                  "type": "Identifier",
                  "start": 1289,
                  "end": 1291,
                  "name": "o3",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              {
                "type": "Property",
                "start": 1293,
                "end": 1300,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1293,
                  "end": 1294,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 1296,
                  "end": 1300,
                  "value": "ok",
                  "raw": "'ok'"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "SpreadElement",
                "start": 1302,
                "end": 1307,
                "argument": {
                  "type": "Identifier",
                  "start": 1305,
                  "end": 1307,
                  "name": "o4",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1310,
      "end": 1480,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1314,
          "end": 1480,
          "id": {
            "type": "Identifier",
            "start": 1314,
            "end": 1377,
            "name": "combinedNested",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1328,
              "end": 1377,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 1330,
                "end": 1377,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 1332,
                    "end": 1342,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1332,
                      "end": 1333,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1333,
                      "end": 1341,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1335,
                        "end": 1341
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 1343,
                    "end": 1354,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1343,
                      "end": 1344,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1344,
                      "end": 1353,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1346,
                        "end": 1353
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 1355,
                    "end": 1365,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1355,
                      "end": 1356,
                      "name": "c",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1356,
                      "end": 1364,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1358,
                        "end": 1364
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 1366,
                    "end": 1375,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1366,
                      "end": 1367,
                      "name": "d",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1367,
                      "end": 1375,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1369,
                        "end": 1375
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 1384,
            "end": 1480,
            "properties": [
              {
                "type": "SpreadElement",
                "start": 1386,
                "end": 1430,
                "argument": {
                  "type": "ObjectExpression",
                  "start": 1389,
                  "end": 1430,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 1391,
                      "end": 1395,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1391,
                        "end": 1392,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 1394,
                        "end": 1395,
                        "value": 4,
                        "raw": "4"
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "SpreadElement",
                      "start": 1397,
                      "end": 1428,
                      "argument": {
                        "type": "ObjectExpression",
                        "start": 1400,
                        "end": 1428,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 1402,
                            "end": 1410,
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1402,
                              "end": 1403,
                              "name": "b",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "value": {
                              "type": "Literal",
                              "start": 1405,
                              "end": 1410,
                              "value": false,
                              "raw": "false"
                            },
                            "kind": "init",
                            "optional": false
                          },
                          {
                            "type": "Property",
                            "start": 1412,
                            "end": 1426,
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1412,
                              "end": 1413,
                              "name": "c",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "value": {
                              "type": "Literal",
                              "start": 1415,
                              "end": 1426,
                              "value": "overriden",
                              "raw": "'overriden'"
                            },
                            "kind": "init",
                            "optional": false
                          }
                        ]
                      }
                    }
                  ]
                }
              },
              {
                "type": "Property",
                "start": 1432,
                "end": 1449,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1432,
                  "end": 1433,
                  "name": "d",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 1435,
                  "end": 1449,
                  "value": "actually new",
                  "raw": "'actually new'"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "SpreadElement",
                "start": 1451,
                "end": 1478,
                "argument": {
                  "type": "ObjectExpression",
                  "start": 1454,
                  "end": 1478,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 1456,
                      "end": 1460,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1456,
                        "end": 1457,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 1459,
                        "end": 1460,
                        "value": 5,
                        "raw": "5"
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 1462,
                      "end": 1476,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1462,
                        "end": 1463,
                        "name": "d",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 1465,
                        "end": 1476,
                        "value": "maybe new",
                        "raw": "'maybe new'"
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
                }
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1481,
      "end": 1562,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1485,
          "end": 1561,
          "id": {
            "type": "Identifier",
            "start": 1485,
            "end": 1527,
            "name": "changeTypeBefore",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1501,
              "end": 1527,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 1503,
                "end": 1527,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 1505,
                    "end": 1515,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1505,
                      "end": 1506,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1506,
                      "end": 1514,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1508,
                        "end": 1514
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 1516,
                    "end": 1525,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1516,
                      "end": 1517,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1517,
                      "end": 1525,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1519,
                        "end": 1525
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 1534,
            "end": 1561,
            "properties": [
              {
                "type": "Property",
                "start": 1536,
                "end": 1552,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1536,
                  "end": 1537,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 1539,
                  "end": 1552,
                  "value": "wrong type?",
                  "raw": "'wrong type?'"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "SpreadElement",
                "start": 1554,
                "end": 1559,
                "argument": {
                  "type": "Identifier",
                  "start": 1557,
                  "end": 1559,
                  "name": "o3",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1563,
      "end": 1703,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1567,
          "end": 1703,
          "id": {
            "type": "Identifier",
            "start": 1567,
            "end": 1644,
            "name": "computedMiddle",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1581,
              "end": 1644,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 1583,
                "end": 1644,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 1585,
                    "end": 1595,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1585,
                      "end": 1586,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1586,
                      "end": 1594,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1588,
                        "end": 1594
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 1596,
                    "end": 1606,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1596,
                      "end": 1597,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1597,
                      "end": 1605,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1599,
                        "end": 1605
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 1607,
                    "end": 1618,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1607,
                      "end": 1608,
                      "name": "c",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1608,
                      "end": 1617,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1610,
                        "end": 1617
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 1619,
                    "end": 1642,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Literal",
                      "start": 1619,
                      "end": 1634,
                      "value": "in the middle",
                      "raw": "\"in the middle\""
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1634,
                      "end": 1642,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1636,
                        "end": 1642
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 1651,
            "end": 1703,
            "properties": [
              {
                "type": "SpreadElement",
                "start": 1653,
                "end": 1658,
                "argument": {
                  "type": "Identifier",
                  "start": 1656,
                  "end": 1658,
                  "name": "o3",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              {
                "type": "Property",
                "start": 1660,
                "end": 1681,
                "method": false,
                "shorthand": false,
                "computed": true,
                "key": {
                  "type": "Literal",
                  "start": 1661,
                  "end": 1676,
                  "value": "in the middle",
                  "raw": "'in the middle'"
                },
                "value": {
                  "type": "Literal",
                  "start": 1679,
                  "end": 1681,
                  "value": 13,
                  "raw": "13"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 1683,
                "end": 1694,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1683,
                  "end": 1684,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 1686,
                  "end": 1694,
                  "value": "maybe?",
                  "raw": "'maybe?'"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "SpreadElement",
                "start": 1696,
                "end": 1701,
                "argument": {
                  "type": "Identifier",
                  "start": 1699,
                  "end": 1701,
                  "name": "o4",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1758,
      "end": 1784,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1762,
          "end": 1783,
          "id": {
            "type": "Identifier",
            "start": 1762,
            "end": 1771,
            "name": "spreadNum",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 1774,
            "end": 1783,
            "properties": [
              {
                "type": "SpreadElement",
                "start": 1776,
                "end": 1781,
                "argument": {
                  "type": "Literal",
                  "start": 1779,
                  "end": 1781,
                  "value": 12,
                  "raw": "12"
                }
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1785,
      "end": 1814,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1789,
          "end": 1813,
          "id": {
            "type": "Identifier",
            "start": 1789,
            "end": 1798,
            "name": "spreadSum",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 1801,
            "end": 1813,
            "properties": [
              {
                "type": "SpreadElement",
                "start": 1803,
                "end": 1811,
                "argument": {
                  "type": "BinaryExpression",
                  "start": 1806,
                  "end": 1811,
                  "left": {
                    "type": "Literal",
                    "start": 1806,
                    "end": 1807,
                    "value": 1,
                    "raw": "1"
                  },
                  "operator": "+",
                  "right": {
                    "type": "Literal",
                    "start": 1810,
                    "end": 1811,
                    "value": 1,
                    "raw": "1"
                  }
                }
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1815,
      "end": 1841,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1819,
          "end": 1840,
          "id": {
            "type": "Identifier",
            "start": 1819,
            "end": 1829,
            "name": "spreadZero",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 1832,
            "end": 1840,
            "properties": [
              {
                "type": "SpreadElement",
                "start": 1834,
                "end": 1838,
                "argument": {
                  "type": "Literal",
                  "start": 1837,
                  "end": 1838,
                  "value": 0,
                  "raw": "0"
                }
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 1842,
      "end": 1863,
      "expression": {
        "type": "CallExpression",
        "start": 1842,
        "end": 1862,
        "callee": {
          "type": "MemberExpression",
          "start": 1842,
          "end": 1860,
          "object": {
            "type": "Identifier",
            "start": 1842,
            "end": 1852,
            "name": "spreadZero",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 1853,
            "end": 1860,
            "name": "toFixed",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 1910,
      "end": 1939,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1914,
          "end": 1938,
          "id": {
            "type": "Identifier",
            "start": 1914,
            "end": 1924,
            "name": "spreadBool",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 1927,
            "end": 1938,
            "properties": [
              {
                "type": "SpreadElement",
                "start": 1929,
                "end": 1936,
                "argument": {
                  "type": "Literal",
                  "start": 1932,
                  "end": 1936,
                  "value": true,
                  "raw": "true"
                }
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 1940,
      "end": 1961,
      "expression": {
        "type": "CallExpression",
        "start": 1940,
        "end": 1960,
        "callee": {
          "type": "MemberExpression",
          "start": 1940,
          "end": 1958,
          "object": {
            "type": "Identifier",
            "start": 1940,
            "end": 1950,
            "name": "spreadBool",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 1951,
            "end": 1958,
            "name": "valueOf",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 1962,
      "end": 1991,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1966,
          "end": 1990,
          "id": {
            "type": "Identifier",
            "start": 1966,
            "end": 1975,
            "name": "spreadStr",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 1978,
            "end": 1990,
            "properties": [
              {
                "type": "SpreadElement",
                "start": 1980,
                "end": 1988,
                "argument": {
                  "type": "Literal",
                  "start": 1983,
                  "end": 1988,
                  "value": "foo",
                  "raw": "'foo'"
                }
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 1992,
      "end": 2009,
      "expression": {
        "type": "MemberExpression",
        "start": 1992,
        "end": 2008,
        "object": {
          "type": "Identifier",
          "start": 1992,
          "end": 2001,
          "name": "spreadStr",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 2002,
          "end": 2008,
          "name": "length",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2032,
      "end": 2052,
      "expression": {
        "type": "CallExpression",
        "start": 2032,
        "end": 2051,
        "callee": {
          "type": "MemberExpression",
          "start": 2032,
          "end": 2048,
          "object": {
            "type": "Identifier",
            "start": 2032,
            "end": 2041,
            "name": "spreadStr",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 2042,
            "end": 2048,
            "name": "charAt",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 2049,
            "end": 2050,
            "value": 1,
            "raw": "1"
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 2106,
      "end": 2145,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2110,
          "end": 2145,
          "id": {
            "type": "Identifier",
            "start": 2110,
            "end": 2120,
            "name": "spreadFunc",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 2123,
            "end": 2145,
            "properties": [
              {
                "type": "SpreadElement",
                "start": 2125,
                "end": 2143,
                "argument": {
                  "type": "FunctionExpression",
                  "start": 2128,
                  "end": 2143,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "start": 2140,
                    "end": 2143,
                    "body": []
                  },
                  "declare": false,
                  "typeParameters": null,
                  "returnType": null
                }
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 2146,
      "end": 2159,
      "expression": {
        "type": "CallExpression",
        "start": 2146,
        "end": 2158,
        "callee": {
          "type": "Identifier",
          "start": 2146,
          "end": 2156,
          "name": "spreadFunc",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 2226,
      "end": 2278,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2230,
          "end": 2277,
          "id": {
            "type": "Identifier",
            "start": 2230,
            "end": 2240,
            "name": "setterOnly",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 2243,
            "end": 2277,
            "properties": [
              {
                "type": "SpreadElement",
                "start": 2245,
                "end": 2275,
                "argument": {
                  "type": "ObjectExpression",
                  "start": 2248,
                  "end": 2275,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 2250,
                      "end": 2273,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 2254,
                        "end": 2255,
                        "name": "b",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "start": 2256,
                        "end": 2273,
                        "id": null,
                        "expression": false,
                        "generator": false,
                        "async": false,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 2257,
                            "end": 2268,
                            "name": "bad",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 2260,
                              "end": 2268,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 2262,
                                "end": 2268
                              }
                            },
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "body": {
                          "type": "BlockStatement",
                          "start": 2270,
                          "end": 2273,
                          "body": []
                        },
                        "declare": false,
                        "typeParameters": null,
                        "returnType": null
                      },
                      "kind": "set",
                      "optional": false
                    }
                  ]
                }
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 2279,
      "end": 2297,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2279,
        "end": 2296,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 2279,
          "end": 2291,
          "object": {
            "type": "Identifier",
            "start": 2279,
            "end": 2289,
            "name": "setterOnly",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 2290,
            "end": 2291,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 2294,
          "end": 2296,
          "value": 12,
          "raw": "12"
        }
      },
      "directive": null
    },
    {
      "type": "ClassDeclaration",
      "start": 2382,
      "end": 2408,
      "id": {
        "type": "Identifier",
        "start": 2388,
        "end": 2389,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 2390,
        "end": 2408,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 2392,
            "end": 2398,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2392,
              "end": 2393,
              "name": "p",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 2396,
              "end": 2397,
              "value": 1,
              "raw": "1"
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 2399,
            "end": 2406,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2399,
              "end": 2400,
              "name": "m",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 2400,
              "end": 2406,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 2403,
                "end": 2406,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
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
      "start": 2409,
      "end": 2427,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2413,
          "end": 2427,
          "id": {
            "type": "Identifier",
            "start": 2413,
            "end": 2417,
            "name": "c",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2414,
              "end": 2417,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2416,
                "end": 2417,
                "typeName": {
                  "type": "Identifier",
                  "start": 2416,
                  "end": 2417,
                  "name": "C",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 2420,
            "end": 2427,
            "callee": {
              "type": "Identifier",
              "start": 2424,
              "end": 2425,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2428,
      "end": 2450,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2432,
          "end": 2450,
          "id": {
            "type": "Identifier",
            "start": 2432,
            "end": 2439,
            "name": "spreadC",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 2442,
            "end": 2450,
            "properties": [
              {
                "type": "SpreadElement",
                "start": 2444,
                "end": 2448,
                "argument": {
                  "type": "Identifier",
                  "start": 2447,
                  "end": 2448,
                  "name": "c",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 2451,
      "end": 2463,
      "expression": {
        "type": "CallExpression",
        "start": 2451,
        "end": 2462,
        "callee": {
          "type": "MemberExpression",
          "start": 2451,
          "end": 2460,
          "object": {
            "type": "Identifier",
            "start": 2451,
            "end": 2458,
            "name": "spreadC",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 2459,
            "end": 2460,
            "name": "m",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 2517,
      "end": 2546,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2521,
          "end": 2545,
          "id": {
            "type": "Identifier",
            "start": 2521,
            "end": 2532,
            "name": "obj",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2524,
              "end": 2532,
              "typeAnnotation": {
                "type": "TSObjectKeyword",
                "start": 2526,
                "end": 2532
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 2535,
            "end": 2545,
            "properties": [
              {
                "type": "Property",
                "start": 2537,
                "end": 2543,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 2537,
                  "end": 2538,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 2540,
                  "end": 2543,
                  "value": 123,
                  "raw": "123"
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2547,
      "end": 2574,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2551,
          "end": 2573,
          "id": {
            "type": "Identifier",
            "start": 2551,
            "end": 2560,
            "name": "spreadObj",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 2563,
            "end": 2573,
            "properties": [
              {
                "type": "SpreadElement",
                "start": 2565,
                "end": 2571,
                "argument": {
                  "type": "Identifier",
                  "start": 2568,
                  "end": 2571,
                  "name": "obj",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 2575,
      "end": 2587,
      "expression": {
        "type": "MemberExpression",
        "start": 2575,
        "end": 2586,
        "object": {
          "type": "Identifier",
          "start": 2575,
          "end": 2584,
          "name": "spreadObj",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 2585,
          "end": 2586,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
