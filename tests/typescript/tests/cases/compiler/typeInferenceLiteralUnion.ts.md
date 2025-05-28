__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 83,
  "end": 875,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 83,
      "end": 140,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 90,
        "end": 140,
        "id": {
          "type": "Identifier",
          "start": 95,
          "end": 104,
          "decorators": [],
          "name": "Primitive",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSUnionType",
          "start": 107,
          "end": 139,
          "types": [
            {
              "type": "TSNumberKeyword",
              "start": 107,
              "end": 113
            },
            {
              "type": "TSStringKeyword",
              "start": 116,
              "end": 122
            },
            {
              "type": "TSBooleanKeyword",
              "start": 125,
              "end": 132
            },
            {
              "type": "TSTypeReference",
              "start": 135,
              "end": 139,
              "typeName": {
                "type": "Identifier",
                "start": 135,
                "end": 139,
                "decorators": [],
                "name": "Date",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          ]
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 261,
      "end": 305,
      "id": {
        "type": "Identifier",
        "start": 271,
        "end": 278,
        "decorators": [],
        "name": "Numeric",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 279,
        "end": 305,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 285,
            "end": 303,
            "key": {
              "type": "Identifier",
              "start": 285,
              "end": 292,
              "decorators": [],
              "name": "valueOf",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 294,
              "end": 302,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 296,
                "end": 302
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 345,
      "end": 497,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 351,
        "end": 363,
        "decorators": [],
        "name": "NumCoercible",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 364,
        "end": 497,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 370,
            "end": 387,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 377,
              "end": 378,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 378,
              "end": 386,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 380,
                "end": 386
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 393,
            "end": 443,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 393,
              "end": 404,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 404,
              "end": 443,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 405,
                  "end": 414,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 406,
                    "end": 414,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 408,
                      "end": 414
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 416,
                "end": 443,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 426,
                    "end": 437,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 426,
                      "end": 436,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 426,
                        "end": 432,
                        "object": {
                          "type": "ThisExpression",
                          "start": 426,
                          "end": 430
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 431,
                          "end": 432,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 435,
                        "end": 436,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 448,
            "end": 495,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 455,
              "end": 462,
              "decorators": [],
              "name": "valueOf",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 462,
              "end": 495,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 465,
                "end": 495,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 475,
                    "end": 489,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 482,
                      "end": 488,
                      "object": {
                        "type": "ThisExpression",
                        "start": 482,
                        "end": 486
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 487,
                        "end": 488,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public"
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 549,
      "end": 715,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 556,
        "end": 715,
        "id": {
          "type": "Identifier",
          "start": 565,
          "end": 571,
          "decorators": [],
          "name": "extent",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 571,
          "end": 590,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 572,
              "end": 589,
              "name": {
                "type": "Identifier",
                "start": 572,
                "end": 573,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": {
                "type": "TSTypeReference",
                "start": 582,
                "end": 589,
                "typeName": {
                  "type": "Identifier",
                  "start": 582,
                  "end": 589,
                  "decorators": [],
                  "name": "Numeric",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
        "params": [
          {
            "type": "Identifier",
            "start": 591,
            "end": 618,
            "decorators": [],
            "name": "array",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 596,
              "end": 618,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 598,
                "end": 618,
                "typeName": {
                  "type": "Identifier",
                  "start": 598,
                  "end": 603,
                  "decorators": [],
                  "name": "Array",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 603,
                  "end": 618,
                  "params": [
                    {
                      "type": "TSUnionType",
                      "start": 604,
                      "end": 617,
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "start": 604,
                          "end": 605,
                          "typeName": {
                            "type": "Identifier",
                            "start": 604,
                            "end": 605,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 608,
                          "end": 617,
                          "typeName": {
                            "type": "Identifier",
                            "start": 608,
                            "end": 617,
                            "decorators": [],
                            "name": "Primitive",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      ]
                    }
                  ]
                }
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 619,
          "end": 676,
          "typeAnnotation": {
            "type": "TSUnionType",
            "start": 621,
            "end": 676,
            "types": [
              {
                "type": "TSTupleType",
                "start": 621,
                "end": 651,
                "elementTypes": [
                  {
                    "type": "TSUnionType",
                    "start": 622,
                    "end": 635,
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "start": 622,
                        "end": 623,
                        "typeName": {
                          "type": "Identifier",
                          "start": 622,
                          "end": 623,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      },
                      {
                        "type": "TSTypeReference",
                        "start": 626,
                        "end": 635,
                        "typeName": {
                          "type": "Identifier",
                          "start": 626,
                          "end": 635,
                          "decorators": [],
                          "name": "Primitive",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    ]
                  },
                  {
                    "type": "TSUnionType",
                    "start": 637,
                    "end": 650,
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "start": 637,
                        "end": 638,
                        "typeName": {
                          "type": "Identifier",
                          "start": 637,
                          "end": 638,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      },
                      {
                        "type": "TSTypeReference",
                        "start": 641,
                        "end": 650,
                        "typeName": {
                          "type": "Identifier",
                          "start": 641,
                          "end": 650,
                          "decorators": [],
                          "name": "Primitive",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                ]
              },
              {
                "type": "TSTupleType",
                "start": 654,
                "end": 676,
                "elementTypes": [
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 655,
                    "end": 664
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 666,
                    "end": 675
                  }
                ]
              }
            ]
          }
        },
        "body": {
          "type": "BlockStatement",
          "start": 677,
          "end": 715,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 683,
              "end": 713,
              "argument": {
                "type": "ArrayExpression",
                "start": 690,
                "end": 712,
                "elements": [
                  {
                    "type": "Identifier",
                    "start": 691,
                    "end": 700,
                    "decorators": [],
                    "name": "undefined",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Identifier",
                    "start": 702,
                    "end": 711,
                    "decorators": [],
                    "name": "undefined",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ]
              }
            }
          ]
        },
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "VariableDeclaration",
      "start": 718,
      "end": 813,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 722,
          "end": 812,
          "id": {
            "type": "Identifier",
            "start": 722,
            "end": 812,
            "decorators": [],
            "name": "extentMixed",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 733,
              "end": 812,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 735,
                "end": 812,
                "types": [
                  {
                    "type": "TSTupleType",
                    "start": 735,
                    "end": 787,
                    "elementTypes": [
                      {
                        "type": "TSUnionType",
                        "start": 736,
                        "end": 760,
                        "types": [
                          {
                            "type": "TSTypeReference",
                            "start": 736,
                            "end": 745,
                            "typeName": {
                              "type": "Identifier",
                              "start": 736,
                              "end": 745,
                              "decorators": [],
                              "name": "Primitive",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          },
                          {
                            "type": "TSTypeReference",
                            "start": 748,
                            "end": 760,
                            "typeName": {
                              "type": "Identifier",
                              "start": 748,
                              "end": 760,
                              "decorators": [],
                              "name": "NumCoercible",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        ]
                      },
                      {
                        "type": "TSUnionType",
                        "start": 762,
                        "end": 786,
                        "types": [
                          {
                            "type": "TSTypeReference",
                            "start": 762,
                            "end": 771,
                            "typeName": {
                              "type": "Identifier",
                              "start": 762,
                              "end": 771,
                              "decorators": [],
                              "name": "Primitive",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          },
                          {
                            "type": "TSTypeReference",
                            "start": 774,
                            "end": 786,
                            "typeName": {
                              "type": "Identifier",
                              "start": 774,
                              "end": 786,
                              "decorators": [],
                              "name": "NumCoercible",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "TSTupleType",
                    "start": 790,
                    "end": 812,
                    "elementTypes": [
                      {
                        "type": "TSUndefinedKeyword",
                        "start": 791,
                        "end": 800
                      },
                      {
                        "type": "TSUndefinedKeyword",
                        "start": 802,
                        "end": 811
                      }
                    ]
                  }
                ]
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 814,
      "end": 875,
      "expression": {
        "type": "AssignmentExpression",
        "start": 814,
        "end": 874,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 814,
          "end": 825,
          "decorators": [],
          "name": "extentMixed",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 828,
          "end": 874,
          "callee": {
            "type": "Identifier",
            "start": 828,
            "end": 834,
            "decorators": [],
            "name": "extent",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "ArrayExpression",
              "start": 835,
              "end": 873,
              "elements": [
                {
                  "type": "NewExpression",
                  "start": 836,
                  "end": 856,
                  "callee": {
                    "type": "Identifier",
                    "start": 840,
                    "end": 852,
                    "decorators": [],
                    "name": "NumCoercible",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 853,
                      "end": 855,
                      "value": 10,
                      "raw": "10"
                    }
                  ]
                },
                {
                  "type": "Literal",
                  "start": 858,
                  "end": 860,
                  "value": 13,
                  "raw": "13"
                },
                {
                  "type": "Literal",
                  "start": 862,
                  "end": 866,
                  "value": "12",
                  "raw": "'12'"
                },
                {
                  "type": "Literal",
                  "start": 868,
                  "end": 872,
                  "value": true,
                  "raw": "true"
                }
              ]
            }
          ],
          "optional": false
        }
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
