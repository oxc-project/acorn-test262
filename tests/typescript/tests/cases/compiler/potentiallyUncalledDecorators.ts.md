__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Input",
        "optional": false,
        "typeAnnotation": null,
        "start": 52,
        "end": 57
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "bindingPropertyName",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 80,
              "end": 86
            },
            "start": 78,
            "end": 86
          },
          "start": 58,
          "end": 86
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 89,
          "end": 92
        },
        "start": 87,
        "end": 92
      },
      "body": null,
      "expression": false,
      "start": 35,
      "end": 93
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "FooComponent",
        "optional": false,
        "typeAnnotation": null,
        "start": 100,
        "end": 112
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
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Input",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 120,
                  "end": 125
                },
                "start": 119,
                "end": 125
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 126,
              "end": 129
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
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
            "accessibility": null,
            "start": 119,
            "end": 138
          }
        ],
        "start": 113,
        "end": 140
      },
      "abstract": false,
      "declare": false,
      "start": 94,
      "end": 140
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "tracked",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "PropertyDecorator",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 195,
                      "end": 212
                    },
                    "typeArguments": null,
                    "start": 195,
                    "end": 212
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSCallSignatureDeclaration",
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "RestElement",
                            "decorators": [],
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "watchedProperties",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 221,
                              "end": 238
                            },
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "elementType": {
                                  "type": "TSStringKeyword",
                                  "start": 240,
                                  "end": 246
                                },
                                "start": 240,
                                "end": 248
                              },
                              "start": 238,
                              "end": 248
                            },
                            "value": null,
                            "start": 218,
                            "end": 248
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 251,
                            "end": 254
                          },
                          "start": 249,
                          "end": 254
                        },
                        "start": 217,
                        "end": 255
                      }
                    ],
                    "start": 215,
                    "end": 257
                  }
                ],
                "start": 195,
                "end": 257
              },
              "start": 193,
              "end": 257
            },
            "start": 186,
            "end": 257
          },
          "init": null,
          "definite": false,
          "start": 186,
          "end": 257
        }
      ],
      "declare": true,
      "start": 172,
      "end": 257
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Person",
        "optional": false,
        "typeAnnotation": null,
        "start": 265,
        "end": 271
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
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "tracked",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 279,
                  "end": 286
                },
                "start": 278,
                "end": 286
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "person",
              "optional": false,
              "typeAnnotation": null,
              "start": 287,
              "end": 293
            },
            "typeAnnotation": null,
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 278,
            "end": 294
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "any",
              "optional": false,
              "typeAnnotation": null,
              "start": 295,
              "end": 298
            },
            "typeAnnotation": null,
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 295,
            "end": 299
          }
        ],
        "start": 272,
        "end": 301
      },
      "abstract": false,
      "declare": false,
      "start": 259,
      "end": 301
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MultiplyByTwo",
        "optional": false,
        "typeAnnotation": null,
        "start": 309,
        "end": 322
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
              "name": "args",
              "optional": false,
              "typeAnnotation": null,
              "start": 329,
              "end": 333
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 335,
                "end": 338
              },
              "start": 333,
              "end": 338
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 329,
            "end": 339
          },
          {
            "type": "MethodDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "tracked",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 345,
                    "end": 352
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "args",
                      "raw": "'args'",
                      "start": 353,
                      "end": 359
                    }
                  ],
                  "optional": false,
                  "start": 345,
                  "end": 360
                },
                "start": 344,
                "end": 360
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "multiplied",
              "optional": false,
              "typeAnnotation": null,
              "start": 369,
              "end": 379
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
                      "type": "BinaryExpression",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 399,
                            "end": 403
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "args",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 404,
                            "end": 408
                          },
                          "optional": false,
                          "computed": false,
                          "start": 399,
                          "end": 408
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "number",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 409,
                          "end": 415
                        },
                        "optional": false,
                        "computed": false,
                        "start": 399,
                        "end": 415
                      },
                      "operator": "*",
                      "right": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 418,
                        "end": 419
                      },
                      "start": 399,
                      "end": 419
                    },
                    "start": 392,
                    "end": 420
                  }
                ],
                "start": 382,
                "end": 426
              },
              "expression": false,
              "start": 379,
              "end": 426
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 344,
            "end": 426
          }
        ],
        "start": 323,
        "end": 428
      },
      "abstract": false,
      "declare": false,
      "start": 303,
      "end": 428
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "OmniDecorator",
        "optional": false,
        "typeAnnotation": null,
        "start": 461,
        "end": 474
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "MethodDecorator",
            "optional": false,
            "typeAnnotation": null,
            "start": 483,
            "end": 498
          },
          "typeArguments": null,
          "start": 483,
          "end": 498
        },
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "ClassDecorator",
            "optional": false,
            "typeAnnotation": null,
            "start": 500,
            "end": 514
          },
          "typeArguments": null,
          "start": 500,
          "end": 514
        },
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "PropertyDecorator",
            "optional": false,
            "typeAnnotation": null,
            "start": 516,
            "end": 533
          },
          "typeArguments": null,
          "start": 516,
          "end": 533
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 534,
        "end": 537
      },
      "declare": false,
      "start": 451,
      "end": 537
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "noArgs",
        "optional": false,
        "typeAnnotation": null,
        "start": 556,
        "end": 562
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "OmniDecorator",
            "optional": false,
            "typeAnnotation": null,
            "start": 566,
            "end": 579
          },
          "typeArguments": null,
          "start": 566,
          "end": 579
        },
        "start": 564,
        "end": 579
      },
      "body": null,
      "expression": false,
      "start": 539,
      "end": 580
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "allRest",
        "optional": false,
        "typeAnnotation": null,
        "start": 598,
        "end": 605
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "args",
            "optional": false,
            "typeAnnotation": null,
            "start": 609,
            "end": 613
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 615,
                "end": 618
              },
              "start": 615,
              "end": 620
            },
            "start": 613,
            "end": 620
          },
          "value": null,
          "start": 606,
          "end": 620
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "OmniDecorator",
            "optional": false,
            "typeAnnotation": null,
            "start": 623,
            "end": 636
          },
          "typeArguments": null,
          "start": 623,
          "end": 636
        },
        "start": 621,
        "end": 636
      },
      "body": null,
      "expression": false,
      "start": 581,
      "end": 637
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "oneOptional",
        "optional": false,
        "typeAnnotation": null,
        "start": 655,
        "end": 666
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 671,
              "end": 674
            },
            "start": 669,
            "end": 674
          },
          "start": 667,
          "end": 674
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "OmniDecorator",
            "optional": false,
            "typeAnnotation": null,
            "start": 677,
            "end": 690
          },
          "typeArguments": null,
          "start": 677,
          "end": 690
        },
        "start": 675,
        "end": 690
      },
      "body": null,
      "expression": false,
      "start": 638,
      "end": 691
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "twoOptional",
        "optional": false,
        "typeAnnotation": null,
        "start": 709,
        "end": 720
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 725,
              "end": 728
            },
            "start": 723,
            "end": 728
          },
          "start": 721,
          "end": 728
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 734,
              "end": 737
            },
            "start": 732,
            "end": 737
          },
          "start": 730,
          "end": 737
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "OmniDecorator",
            "optional": false,
            "typeAnnotation": null,
            "start": 740,
            "end": 753
          },
          "typeArguments": null,
          "start": 740,
          "end": 753
        },
        "start": 738,
        "end": 753
      },
      "body": null,
      "expression": false,
      "start": 692,
      "end": 754
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "threeOptional",
        "optional": false,
        "typeAnnotation": null,
        "start": 772,
        "end": 785
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 790,
              "end": 793
            },
            "start": 788,
            "end": 793
          },
          "start": 786,
          "end": 793
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 799,
              "end": 802
            },
            "start": 797,
            "end": 802
          },
          "start": 795,
          "end": 802
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "z",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 808,
              "end": 811
            },
            "start": 806,
            "end": 811
          },
          "start": 804,
          "end": 811
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "OmniDecorator",
            "optional": false,
            "typeAnnotation": null,
            "start": 814,
            "end": 827
          },
          "typeArguments": null,
          "start": 814,
          "end": 827
        },
        "start": 812,
        "end": 827
      },
      "body": null,
      "expression": false,
      "start": 755,
      "end": 828
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "oneOptionalWithRest",
        "optional": false,
        "typeAnnotation": null,
        "start": 846,
        "end": 865
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 870,
              "end": 873
            },
            "start": 868,
            "end": 873
          },
          "start": 866,
          "end": 873
        },
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "args",
            "optional": false,
            "typeAnnotation": null,
            "start": 878,
            "end": 882
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 884,
                "end": 887
              },
              "start": 884,
              "end": 889
            },
            "start": 882,
            "end": 889
          },
          "value": null,
          "start": 875,
          "end": 889
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "OmniDecorator",
            "optional": false,
            "typeAnnotation": null,
            "start": 892,
            "end": 905
          },
          "typeArguments": null,
          "start": 892,
          "end": 905
        },
        "start": 890,
        "end": 905
      },
      "body": null,
      "expression": false,
      "start": 829,
      "end": 906
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "anyDec",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 929,
                "end": 932
              },
              "start": 927,
              "end": 932
            },
            "start": 921,
            "end": 932
          },
          "init": null,
          "definite": false,
          "start": 921,
          "end": 932
        }
      ],
      "declare": true,
      "start": 907,
      "end": 933
    },
    {
      "type": "ClassDeclaration",
      "decorators": [
        {
          "type": "Decorator",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "noArgs",
            "optional": false,
            "typeAnnotation": null,
            "start": 936,
            "end": 942
          },
          "start": 935,
          "end": 942
        }
      ],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 949,
        "end": 950
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
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "noArgs",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 958,
                  "end": 964
                },
                "start": 957,
                "end": 964
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 965,
              "end": 968
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 970,
                "end": 973
              },
              "start": 968,
              "end": 973
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 957,
            "end": 974
          },
          {
            "type": "MethodDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "noArgs",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 980,
                  "end": 986
                },
                "start": 979,
                "end": 986
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 987,
              "end": 990
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
                "start": 993,
                "end": 996
              },
              "expression": false,
              "start": 990,
              "end": 996
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 979,
            "end": 996
          }
        ],
        "start": 951,
        "end": 998
      },
      "abstract": false,
      "declare": false,
      "start": 935,
      "end": 998
    },
    {
      "type": "ClassDeclaration",
      "decorators": [
        {
          "type": "Decorator",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "allRest",
            "optional": false,
            "typeAnnotation": null,
            "start": 1001,
            "end": 1008
          },
          "start": 1000,
          "end": 1008
        }
      ],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 1015,
        "end": 1016
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
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "allRest",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1024,
                  "end": 1031
                },
                "start": 1023,
                "end": 1031
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 1032,
              "end": 1035
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1037,
                "end": 1040
              },
              "start": 1035,
              "end": 1040
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 1023,
            "end": 1041
          },
          {
            "type": "MethodDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "allRest",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1047,
                  "end": 1054
                },
                "start": 1046,
                "end": 1054
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 1055,
              "end": 1058
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
                "start": 1061,
                "end": 1064
              },
              "expression": false,
              "start": 1058,
              "end": 1064
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1046,
            "end": 1064
          }
        ],
        "start": 1017,
        "end": 1066
      },
      "abstract": false,
      "declare": false,
      "start": 1000,
      "end": 1066
    },
    {
      "type": "ClassDeclaration",
      "decorators": [
        {
          "type": "Decorator",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "oneOptional",
            "optional": false,
            "typeAnnotation": null,
            "start": 1069,
            "end": 1080
          },
          "start": 1068,
          "end": 1080
        }
      ],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 1087,
        "end": 1088
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
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "oneOptional",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1096,
                  "end": 1107
                },
                "start": 1095,
                "end": 1107
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 1108,
              "end": 1111
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1113,
                "end": 1116
              },
              "start": 1111,
              "end": 1116
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 1095,
            "end": 1117
          },
          {
            "type": "MethodDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "oneOptional",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1123,
                  "end": 1134
                },
                "start": 1122,
                "end": 1134
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 1135,
              "end": 1138
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
                "start": 1141,
                "end": 1144
              },
              "expression": false,
              "start": 1138,
              "end": 1144
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1122,
            "end": 1144
          }
        ],
        "start": 1089,
        "end": 1146
      },
      "abstract": false,
      "declare": false,
      "start": 1068,
      "end": 1146
    },
    {
      "type": "ClassDeclaration",
      "decorators": [
        {
          "type": "Decorator",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "twoOptional",
            "optional": false,
            "typeAnnotation": null,
            "start": 1149,
            "end": 1160
          },
          "start": 1148,
          "end": 1160
        }
      ],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null,
        "start": 1167,
        "end": 1168
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
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "twoOptional",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1176,
                  "end": 1187
                },
                "start": 1175,
                "end": 1187
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 1188,
              "end": 1191
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1193,
                "end": 1196
              },
              "start": 1191,
              "end": 1196
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 1175,
            "end": 1197
          },
          {
            "type": "MethodDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "twoOptional",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1203,
                  "end": 1214
                },
                "start": 1202,
                "end": 1214
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 1215,
              "end": 1218
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
                "start": 1221,
                "end": 1224
              },
              "expression": false,
              "start": 1218,
              "end": 1224
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1202,
            "end": 1224
          }
        ],
        "start": 1169,
        "end": 1226
      },
      "abstract": false,
      "declare": false,
      "start": 1148,
      "end": 1226
    },
    {
      "type": "ClassDeclaration",
      "decorators": [
        {
          "type": "Decorator",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "threeOptional",
            "optional": false,
            "typeAnnotation": null,
            "start": 1229,
            "end": 1242
          },
          "start": 1228,
          "end": 1242
        }
      ],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null,
        "start": 1249,
        "end": 1250
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
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "threeOptional",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1258,
                  "end": 1271
                },
                "start": 1257,
                "end": 1271
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 1272,
              "end": 1275
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1277,
                "end": 1280
              },
              "start": 1275,
              "end": 1280
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 1257,
            "end": 1281
          },
          {
            "type": "MethodDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "threeOptional",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1287,
                  "end": 1300
                },
                "start": 1286,
                "end": 1300
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 1301,
              "end": 1304
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
                "start": 1307,
                "end": 1310
              },
              "expression": false,
              "start": 1304,
              "end": 1310
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1286,
            "end": 1310
          }
        ],
        "start": 1251,
        "end": 1312
      },
      "abstract": false,
      "declare": false,
      "start": 1228,
      "end": 1312
    },
    {
      "type": "ClassDeclaration",
      "decorators": [
        {
          "type": "Decorator",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "oneOptionalWithRest",
            "optional": false,
            "typeAnnotation": null,
            "start": 1315,
            "end": 1334
          },
          "start": 1314,
          "end": 1334
        }
      ],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "F",
        "optional": false,
        "typeAnnotation": null,
        "start": 1341,
        "end": 1342
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
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "oneOptionalWithRest",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1350,
                  "end": 1369
                },
                "start": 1349,
                "end": 1369
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 1370,
              "end": 1373
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1375,
                "end": 1378
              },
              "start": 1373,
              "end": 1378
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 1349,
            "end": 1379
          },
          {
            "type": "MethodDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "oneOptionalWithRest",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1385,
                  "end": 1404
                },
                "start": 1384,
                "end": 1404
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 1405,
              "end": 1408
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
                "start": 1411,
                "end": 1414
              },
              "expression": false,
              "start": 1408,
              "end": 1414
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1384,
            "end": 1414
          }
        ],
        "start": 1343,
        "end": 1416
      },
      "abstract": false,
      "declare": false,
      "start": 1314,
      "end": 1416
    },
    {
      "type": "ClassDeclaration",
      "decorators": [
        {
          "type": "Decorator",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "anyDec",
            "optional": false,
            "typeAnnotation": null,
            "start": 1419,
            "end": 1425
          },
          "start": 1418,
          "end": 1425
        }
      ],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "G",
        "optional": false,
        "typeAnnotation": null,
        "start": 1432,
        "end": 1433
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
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "anyDec",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1441,
                  "end": 1447
                },
                "start": 1440,
                "end": 1447
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 1448,
              "end": 1451
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1453,
                "end": 1456
              },
              "start": 1451,
              "end": 1456
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 1440,
            "end": 1457
          },
          {
            "type": "MethodDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "anyDec",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1463,
                  "end": 1469
                },
                "start": 1462,
                "end": 1469
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 1470,
              "end": 1473
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
                "start": 1476,
                "end": 1479
              },
              "expression": false,
              "start": 1473,
              "end": 1479
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1462,
            "end": 1479
          }
        ],
        "start": 1434,
        "end": 1481
      },
      "abstract": false,
      "declare": false,
      "start": 1418,
      "end": 1481
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1483,
      "end": 1494
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 35,
  "end": 1494
}
```
