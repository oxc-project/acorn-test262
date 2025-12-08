__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TypeFunction",
        "optional": false,
        "typeAnnotation": null,
        "start": 62,
        "end": 74
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "ReturnType",
              "optional": false,
              "typeAnnotation": null,
              "start": 75,
              "end": 85
            },
            "constraint": null,
            "default": {
              "type": "TSUnknownKeyword",
              "start": 88,
              "end": 95
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 75,
            "end": 95
          }
        ],
        "start": 74,
        "end": 96
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
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
              "start": 103,
              "end": 107
            },
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSAnyKeyword",
                  "start": 109,
                  "end": 112
                },
                "start": 109,
                "end": 114
              },
              "start": 107,
              "end": 114
            },
            "value": null,
            "start": 100,
            "end": 114
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "ReturnType",
              "optional": false,
              "typeAnnotation": null,
              "start": 119,
              "end": 129
            },
            "typeArguments": null,
            "start": 119,
            "end": 129
          },
          "start": 116,
          "end": 129
        },
        "start": 99,
        "end": 129
      },
      "declare": false,
      "start": 57,
      "end": 130
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Flags",
        "optional": false,
        "typeAnnotation": null,
        "start": 136,
        "end": 141
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "flagName",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 159,
                    "end": 165
                  },
                  "start": 157,
                  "end": 165
                },
                "start": 149,
                "end": 165
              }
            ],
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
                      "name": "type",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 174,
                      "end": 178
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TypeFunction",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 180,
                          "end": 192
                        },
                        "typeArguments": null,
                        "start": 180,
                        "end": 192
                      },
                      "start": 178,
                      "end": 192
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 174,
                    "end": 193
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "default",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 198,
                      "end": 205
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSUnknownKeyword",
                        "start": 208,
                        "end": 215
                      },
                      "start": 206,
                      "end": 215
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 198,
                    "end": 216
                  }
                ],
                "start": 168,
                "end": 220
              },
              "start": 166,
              "end": 220
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 148,
            "end": 221
          }
        ],
        "start": 144,
        "end": 223
      },
      "declare": false,
      "start": 131,
      "end": 224
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TypeFlag",
        "optional": false,
        "typeAnnotation": null,
        "start": 230,
        "end": 238
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Schemas",
              "optional": false,
              "typeAnnotation": null,
              "start": 239,
              "end": 246
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Flags",
                "optional": false,
                "typeAnnotation": null,
                "start": 255,
                "end": 260
              },
              "typeArguments": null,
              "start": 255,
              "end": 260
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 239,
            "end": 260
          }
        ],
        "start": 238,
        "end": 261
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "flag",
          "optional": false,
          "typeAnnotation": null,
          "start": 269,
          "end": 273
        },
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Schemas",
              "optional": false,
              "typeAnnotation": null,
              "start": 283,
              "end": 290
            },
            "typeArguments": null,
            "start": 283,
            "end": 290
          },
          "start": 277,
          "end": 290
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSIndexedAccessType",
            "objectType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Schemas",
                "optional": false,
                "typeAnnotation": null,
                "start": 293,
                "end": 300
              },
              "typeArguments": null,
              "start": 293,
              "end": 300
            },
            "indexType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "flag",
                "optional": false,
                "typeAnnotation": null,
                "start": 301,
                "end": 305
              },
              "typeArguments": null,
              "start": 301,
              "end": 305
            },
            "start": 293,
            "end": 306
          },
          "extendsType": {
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
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 317,
                  "end": 321
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TypeFunction",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 323,
                      "end": 335
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSInferType",
                          "typeParameter": {
                            "type": "TSTypeParameter",
                            "name": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 342,
                              "end": 343
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 342,
                            "end": 343
                          },
                          "start": 336,
                          "end": 343
                        }
                      ],
                      "start": 335,
                      "end": 344
                    },
                    "start": 323,
                    "end": 344
                  },
                  "start": 321,
                  "end": 344
                },
                "accessibility": null,
                "static": false,
                "start": 317,
                "end": 344
              }
            ],
            "start": 315,
            "end": 346
          },
          "trueType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 353,
              "end": 354
            },
            "typeArguments": null,
            "start": 353,
            "end": 354
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 361,
            "end": 366
          },
          "start": 293,
          "end": 366
        },
        "optional": false,
        "readonly": null,
        "start": 264,
        "end": 369
      },
      "declare": false,
      "start": 225,
      "end": 370
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn1",
        "optional": false,
        "typeAnnotation": null,
        "start": 389,
        "end": 392
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Options",
              "optional": false,
              "typeAnnotation": null,
              "start": 393,
              "end": 400
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Flags",
                "optional": false,
                "typeAnnotation": null,
                "start": 409,
                "end": 414
              },
              "typeArguments": null,
              "start": 409,
              "end": 414
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 393,
            "end": 414
          }
        ],
        "start": 392,
        "end": 415
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "options",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Options",
                "optional": false,
                "typeAnnotation": null,
                "start": 428,
                "end": 435
              },
              "typeArguments": null,
              "start": 428,
              "end": 435
            },
            "start": 426,
            "end": 435
          },
          "start": 419,
          "end": 435
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "TypeFlag",
            "optional": false,
            "typeAnnotation": null,
            "start": 440,
            "end": 448
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Options",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 449,
                  "end": 456
                },
                "typeArguments": null,
                "start": 449,
                "end": 456
              }
            ],
            "start": 448,
            "end": 457
          },
          "start": 440,
          "end": 457
        },
        "start": 438,
        "end": 457
      },
      "body": null,
      "expression": false,
      "start": 372,
      "end": 458
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
            "name": "result1",
            "optional": false,
            "typeAnnotation": null,
            "start": 466,
            "end": 473
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "fn1",
              "optional": false,
              "typeAnnotation": null,
              "start": 476,
              "end": 479
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "booleanFlag",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 484,
                      "end": 495
                    },
                    "value": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "type",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 499,
                            "end": 503
                          },
                          "value": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Boolean",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 505,
                            "end": 512
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 499,
                          "end": 512
                        }
                      ],
                      "start": 497,
                      "end": 514
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 484,
                    "end": 514
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "booleanFlagDefault",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 518,
                      "end": 536
                    },
                    "value": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "type",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 544,
                            "end": 548
                          },
                          "value": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Boolean",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 550,
                            "end": 557
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 544,
                          "end": 557
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "default",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 563,
                            "end": 570
                          },
                          "value": {
                            "type": "Literal",
                            "value": false,
                            "raw": "false",
                            "start": 572,
                            "end": 577
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 563,
                          "end": 577
                        }
                      ],
                      "start": 538,
                      "end": 582
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 518,
                    "end": 582
                  }
                ],
                "start": 480,
                "end": 585
              }
            ],
            "optional": false,
            "start": 476,
            "end": 586
          },
          "definite": false,
          "start": 466,
          "end": 586
        }
      ],
      "declare": false,
      "start": 460,
      "end": 587
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "result1",
          "optional": false,
          "typeAnnotation": null,
          "start": 588,
          "end": 595
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "booleanFlag",
          "optional": false,
          "typeAnnotation": null,
          "start": 596,
          "end": 607
        },
        "optional": false,
        "computed": false,
        "start": 588,
        "end": 607
      },
      "directive": null,
      "start": 588,
      "end": 608
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "result1",
          "optional": false,
          "typeAnnotation": null,
          "start": 620,
          "end": 627
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "booleanFlagDefault",
          "optional": false,
          "typeAnnotation": null,
          "start": 628,
          "end": 646
        },
        "optional": false,
        "computed": false,
        "start": 620,
        "end": 646
      },
      "directive": null,
      "start": 620,
      "end": 647
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn2",
        "optional": false,
        "typeAnnotation": null,
        "start": 677,
        "end": 680
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Options",
              "optional": false,
              "typeAnnotation": null,
              "start": 681,
              "end": 688
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Flags",
                "optional": false,
                "typeAnnotation": null,
                "start": 697,
                "end": 702
              },
              "typeArguments": null,
              "start": 697,
              "end": 702
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 681,
            "end": 702
          }
        ],
        "start": 680,
        "end": 703
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "options",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Readonly",
                "optional": false,
                "typeAnnotation": null,
                "start": 716,
                "end": 724
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Options",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 725,
                      "end": 732
                    },
                    "typeArguments": null,
                    "start": 725,
                    "end": 732
                  }
                ],
                "start": 724,
                "end": 733
              },
              "start": 716,
              "end": 733
            },
            "start": 714,
            "end": 733
          },
          "start": 707,
          "end": 733
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "TypeFlag",
            "optional": false,
            "typeAnnotation": null,
            "start": 738,
            "end": 746
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Options",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 747,
                  "end": 754
                },
                "typeArguments": null,
                "start": 747,
                "end": 754
              }
            ],
            "start": 746,
            "end": 755
          },
          "start": 738,
          "end": 755
        },
        "start": 736,
        "end": 755
      },
      "body": null,
      "expression": false,
      "start": 660,
      "end": 756
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
            "name": "result2",
            "optional": false,
            "typeAnnotation": null,
            "start": 764,
            "end": 771
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "fn2",
              "optional": false,
              "typeAnnotation": null,
              "start": 774,
              "end": 777
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "booleanFlag",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 782,
                      "end": 793
                    },
                    "value": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "type",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 797,
                            "end": 801
                          },
                          "value": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Boolean",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 803,
                            "end": 810
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 797,
                          "end": 810
                        }
                      ],
                      "start": 795,
                      "end": 812
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 782,
                    "end": 812
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "booleanFlagDefault",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 816,
                      "end": 834
                    },
                    "value": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "type",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 842,
                            "end": 846
                          },
                          "value": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Boolean",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 848,
                            "end": 855
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 842,
                          "end": 855
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "default",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 861,
                            "end": 868
                          },
                          "value": {
                            "type": "Literal",
                            "value": false,
                            "raw": "false",
                            "start": 870,
                            "end": 875
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 861,
                          "end": 875
                        }
                      ],
                      "start": 836,
                      "end": 880
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 816,
                    "end": 880
                  }
                ],
                "start": 778,
                "end": 883
              }
            ],
            "optional": false,
            "start": 774,
            "end": 884
          },
          "definite": false,
          "start": 764,
          "end": 884
        }
      ],
      "declare": false,
      "start": 758,
      "end": 885
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "result2",
          "optional": false,
          "typeAnnotation": null,
          "start": 886,
          "end": 893
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "booleanFlag",
          "optional": false,
          "typeAnnotation": null,
          "start": 894,
          "end": 905
        },
        "optional": false,
        "computed": false,
        "start": 886,
        "end": 905
      },
      "directive": null,
      "start": 886,
      "end": 906
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "result2",
          "optional": false,
          "typeAnnotation": null,
          "start": 918,
          "end": 925
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "booleanFlagDefault",
          "optional": false,
          "typeAnnotation": null,
          "start": 926,
          "end": 944
        },
        "optional": false,
        "computed": false,
        "start": 918,
        "end": 944
      },
      "directive": null,
      "start": 918,
      "end": 945
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn3",
        "optional": false,
        "typeAnnotation": null,
        "start": 975,
        "end": 978
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Options",
              "optional": false,
              "typeAnnotation": null,
              "start": 979,
              "end": 986
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Flags",
                "optional": false,
                "typeAnnotation": null,
                "start": 995,
                "end": 1000
              },
              "typeArguments": null,
              "start": 995,
              "end": 1000
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 979,
            "end": 1000
          }
        ],
        "start": 978,
        "end": 1001
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "options",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Readonly",
                "optional": false,
                "typeAnnotation": null,
                "start": 1014,
                "end": 1022
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Options",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1023,
                      "end": 1030
                    },
                    "typeArguments": null,
                    "start": 1023,
                    "end": 1030
                  }
                ],
                "start": 1022,
                "end": 1031
              },
              "start": 1014,
              "end": 1031
            },
            "start": 1012,
            "end": 1031
          },
          "start": 1005,
          "end": 1031
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Options",
            "optional": false,
            "typeAnnotation": null,
            "start": 1036,
            "end": 1043
          },
          "typeArguments": null,
          "start": 1036,
          "end": 1043
        },
        "start": 1034,
        "end": 1043
      },
      "body": null,
      "expression": false,
      "start": 958,
      "end": 1044
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
            "name": "result3",
            "optional": false,
            "typeAnnotation": null,
            "start": 1052,
            "end": 1059
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "fn3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1062,
              "end": 1065
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "booleanFlag",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1070,
                      "end": 1081
                    },
                    "value": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "type",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1085,
                            "end": 1089
                          },
                          "value": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Boolean",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1091,
                            "end": 1098
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1085,
                          "end": 1098
                        }
                      ],
                      "start": 1083,
                      "end": 1100
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1070,
                    "end": 1100
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "booleanFlagDefault",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1104,
                      "end": 1122
                    },
                    "value": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "type",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1130,
                            "end": 1134
                          },
                          "value": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Boolean",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1136,
                            "end": 1143
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1130,
                          "end": 1143
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "default",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1149,
                            "end": 1156
                          },
                          "value": {
                            "type": "Literal",
                            "value": false,
                            "raw": "false",
                            "start": 1158,
                            "end": 1163
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1149,
                          "end": 1163
                        }
                      ],
                      "start": 1124,
                      "end": 1198
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1104,
                    "end": 1198
                  }
                ],
                "start": 1066,
                "end": 1201
              }
            ],
            "optional": false,
            "start": 1062,
            "end": 1202
          },
          "definite": false,
          "start": 1052,
          "end": 1202
        }
      ],
      "declare": false,
      "start": 1046,
      "end": 1203
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "takeType",
        "optional": false,
        "typeAnnotation": null,
        "start": 1222,
        "end": 1230
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg",
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
                    "name": "type",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1238,
                    "end": 1242
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnknownKeyword",
                      "start": 1244,
                      "end": 1251
                    },
                    "start": 1242,
                    "end": 1251
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1238,
                  "end": 1251
                }
              ],
              "start": 1236,
              "end": 1253
            },
            "start": 1234,
            "end": 1253
          },
          "start": 1231,
          "end": 1253
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 1256,
          "end": 1260
        },
        "start": 1254,
        "end": 1260
      },
      "body": null,
      "expression": false,
      "start": 1205,
      "end": 1261
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "takeType",
          "optional": false,
          "typeAnnotation": null,
          "start": 1262,
          "end": 1270
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "result3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1271,
              "end": 1278
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "booleanFlagDefault",
              "optional": false,
              "typeAnnotation": null,
              "start": 1279,
              "end": 1297
            },
            "optional": false,
            "computed": false,
            "start": 1271,
            "end": 1297
          }
        ],
        "optional": false,
        "start": 1262,
        "end": 1298
      },
      "directive": null,
      "start": 1262,
      "end": 1299
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 57,
  "end": 1299
}
```
