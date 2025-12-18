__ESTREE_TEST__:AST:
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
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 57,
    "end": 61,
    "range": [
      57,
      61
    ]
  },
  {
    "type": "Identifier",
    "value": "TypeFunction",
    "start": 62,
    "end": 74,
    "range": [
      62,
      74
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 74,
    "end": 75,
    "range": [
      74,
      75
    ]
  },
  {
    "type": "Identifier",
    "value": "ReturnType",
    "start": 75,
    "end": 85,
    "range": [
      75,
      85
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 86,
    "end": 87,
    "range": [
      86,
      87
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 88,
    "end": 95,
    "range": [
      88,
      95
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 95,
    "end": 96,
    "range": [
      95,
      96
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 97,
    "end": 98,
    "range": [
      97,
      98
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 99,
    "end": 100,
    "range": [
      99,
      100
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 100,
    "end": 103,
    "range": [
      100,
      103
    ]
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 103,
    "end": 107,
    "range": [
      103,
      107
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 107,
    "end": 108,
    "range": [
      107,
      108
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 109,
    "end": 112,
    "range": [
      109,
      112
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 112,
    "end": 113,
    "range": [
      112,
      113
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 113,
    "end": 114,
    "range": [
      113,
      114
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 114,
    "end": 115,
    "range": [
      114,
      115
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 116,
    "end": 118,
    "range": [
      116,
      118
    ]
  },
  {
    "type": "Identifier",
    "value": "ReturnType",
    "start": 119,
    "end": 129,
    "range": [
      119,
      129
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 129,
    "end": 130,
    "range": [
      129,
      130
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 131,
    "end": 135,
    "range": [
      131,
      135
    ]
  },
  {
    "type": "Identifier",
    "value": "Flags",
    "start": 136,
    "end": 141,
    "range": [
      136,
      141
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 142,
    "end": 143,
    "range": [
      142,
      143
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 144,
    "end": 145,
    "range": [
      144,
      145
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 148,
    "end": 149,
    "range": [
      148,
      149
    ]
  },
  {
    "type": "Identifier",
    "value": "flagName",
    "start": 149,
    "end": 157,
    "range": [
      149,
      157
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 157,
    "end": 158,
    "range": [
      157,
      158
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 159,
    "end": 165,
    "range": [
      159,
      165
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 165,
    "end": 166,
    "range": [
      165,
      166
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 166,
    "end": 167,
    "range": [
      166,
      167
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 168,
    "end": 169,
    "range": [
      168,
      169
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 174,
    "end": 178,
    "range": [
      174,
      178
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 178,
    "end": 179,
    "range": [
      178,
      179
    ]
  },
  {
    "type": "Identifier",
    "value": "TypeFunction",
    "start": 180,
    "end": 192,
    "range": [
      180,
      192
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 192,
    "end": 193,
    "range": [
      192,
      193
    ]
  },
  {
    "type": "Identifier",
    "value": "default",
    "start": 198,
    "end": 205,
    "range": [
      198,
      205
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 205,
    "end": 206,
    "range": [
      205,
      206
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 206,
    "end": 207,
    "range": [
      206,
      207
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 208,
    "end": 215,
    "range": [
      208,
      215
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 215,
    "end": 216,
    "range": [
      215,
      216
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 219,
    "end": 220,
    "range": [
      219,
      220
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 220,
    "end": 221,
    "range": [
      220,
      221
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 222,
    "end": 223,
    "range": [
      222,
      223
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 223,
    "end": 224,
    "range": [
      223,
      224
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 225,
    "end": 229,
    "range": [
      225,
      229
    ]
  },
  {
    "type": "Identifier",
    "value": "TypeFlag",
    "start": 230,
    "end": 238,
    "range": [
      230,
      238
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 238,
    "end": 239,
    "range": [
      238,
      239
    ]
  },
  {
    "type": "Identifier",
    "value": "Schemas",
    "start": 239,
    "end": 246,
    "range": [
      239,
      246
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 247,
    "end": 254,
    "range": [
      247,
      254
    ]
  },
  {
    "type": "Identifier",
    "value": "Flags",
    "start": 255,
    "end": 260,
    "range": [
      255,
      260
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 260,
    "end": 261,
    "range": [
      260,
      261
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 262,
    "end": 263,
    "range": [
      262,
      263
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 264,
    "end": 265,
    "range": [
      264,
      265
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 268,
    "end": 269,
    "range": [
      268,
      269
    ]
  },
  {
    "type": "Identifier",
    "value": "flag",
    "start": 269,
    "end": 273,
    "range": [
      269,
      273
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 274,
    "end": 276,
    "range": [
      274,
      276
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 277,
    "end": 282,
    "range": [
      277,
      282
    ]
  },
  {
    "type": "Identifier",
    "value": "Schemas",
    "start": 283,
    "end": 290,
    "range": [
      283,
      290
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 290,
    "end": 291,
    "range": [
      290,
      291
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 291,
    "end": 292,
    "range": [
      291,
      292
    ]
  },
  {
    "type": "Identifier",
    "value": "Schemas",
    "start": 293,
    "end": 300,
    "range": [
      293,
      300
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 300,
    "end": 301,
    "range": [
      300,
      301
    ]
  },
  {
    "type": "Identifier",
    "value": "flag",
    "start": 301,
    "end": 305,
    "range": [
      301,
      305
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 305,
    "end": 306,
    "range": [
      305,
      306
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 307,
    "end": 314,
    "range": [
      307,
      314
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 315,
    "end": 316,
    "range": [
      315,
      316
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 317,
    "end": 321,
    "range": [
      317,
      321
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 321,
    "end": 322,
    "range": [
      321,
      322
    ]
  },
  {
    "type": "Identifier",
    "value": "TypeFunction",
    "start": 323,
    "end": 335,
    "range": [
      323,
      335
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 335,
    "end": 336,
    "range": [
      335,
      336
    ]
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 336,
    "end": 341,
    "range": [
      336,
      341
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 342,
    "end": 343,
    "range": [
      342,
      343
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 343,
    "end": 344,
    "range": [
      343,
      344
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 345,
    "end": 346,
    "range": [
      345,
      346
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 351,
    "end": 352,
    "range": [
      351,
      352
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 353,
    "end": 354,
    "range": [
      353,
      354
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 359,
    "end": 360,
    "range": [
      359,
      360
    ]
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 361,
    "end": 366,
    "range": [
      361,
      366
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 366,
    "end": 367,
    "range": [
      366,
      367
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 368,
    "end": 369,
    "range": [
      368,
      369
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 369,
    "end": 370,
    "range": [
      369,
      370
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 372,
    "end": 379,
    "range": [
      372,
      379
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 380,
    "end": 388,
    "range": [
      380,
      388
    ]
  },
  {
    "type": "Identifier",
    "value": "fn1",
    "start": 389,
    "end": 392,
    "range": [
      389,
      392
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 392,
    "end": 393,
    "range": [
      392,
      393
    ]
  },
  {
    "type": "Identifier",
    "value": "Options",
    "start": 393,
    "end": 400,
    "range": [
      393,
      400
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 401,
    "end": 408,
    "range": [
      401,
      408
    ]
  },
  {
    "type": "Identifier",
    "value": "Flags",
    "start": 409,
    "end": 414,
    "range": [
      409,
      414
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 414,
    "end": 415,
    "range": [
      414,
      415
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 415,
    "end": 416,
    "range": [
      415,
      416
    ]
  },
  {
    "type": "Identifier",
    "value": "options",
    "start": 419,
    "end": 426,
    "range": [
      419,
      426
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 426,
    "end": 427,
    "range": [
      426,
      427
    ]
  },
  {
    "type": "Identifier",
    "value": "Options",
    "start": 428,
    "end": 435,
    "range": [
      428,
      435
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 435,
    "end": 436,
    "range": [
      435,
      436
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 437,
    "end": 438,
    "range": [
      437,
      438
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 438,
    "end": 439,
    "range": [
      438,
      439
    ]
  },
  {
    "type": "Identifier",
    "value": "TypeFlag",
    "start": 440,
    "end": 448,
    "range": [
      440,
      448
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 448,
    "end": 449,
    "range": [
      448,
      449
    ]
  },
  {
    "type": "Identifier",
    "value": "Options",
    "start": 449,
    "end": 456,
    "range": [
      449,
      456
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 456,
    "end": 457,
    "range": [
      456,
      457
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 457,
    "end": 458,
    "range": [
      457,
      458
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 460,
    "end": 465,
    "range": [
      460,
      465
    ]
  },
  {
    "type": "Identifier",
    "value": "result1",
    "start": 466,
    "end": 473,
    "range": [
      466,
      473
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 474,
    "end": 475,
    "range": [
      474,
      475
    ]
  },
  {
    "type": "Identifier",
    "value": "fn1",
    "start": 476,
    "end": 479,
    "range": [
      476,
      479
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 479,
    "end": 480,
    "range": [
      479,
      480
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 480,
    "end": 481,
    "range": [
      480,
      481
    ]
  },
  {
    "type": "Identifier",
    "value": "booleanFlag",
    "start": 484,
    "end": 495,
    "range": [
      484,
      495
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 495,
    "end": 496,
    "range": [
      495,
      496
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 497,
    "end": 498,
    "range": [
      497,
      498
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 499,
    "end": 503,
    "range": [
      499,
      503
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 503,
    "end": 504,
    "range": [
      503,
      504
    ]
  },
  {
    "type": "Identifier",
    "value": "Boolean",
    "start": 505,
    "end": 512,
    "range": [
      505,
      512
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 513,
    "end": 514,
    "range": [
      513,
      514
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 514,
    "end": 515,
    "range": [
      514,
      515
    ]
  },
  {
    "type": "Identifier",
    "value": "booleanFlagDefault",
    "start": 518,
    "end": 536,
    "range": [
      518,
      536
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 536,
    "end": 537,
    "range": [
      536,
      537
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 538,
    "end": 539,
    "range": [
      538,
      539
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 544,
    "end": 548,
    "range": [
      544,
      548
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 548,
    "end": 549,
    "range": [
      548,
      549
    ]
  },
  {
    "type": "Identifier",
    "value": "Boolean",
    "start": 550,
    "end": 557,
    "range": [
      550,
      557
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 557,
    "end": 558,
    "range": [
      557,
      558
    ]
  },
  {
    "type": "Identifier",
    "value": "default",
    "start": 563,
    "end": 570,
    "range": [
      563,
      570
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 570,
    "end": 571,
    "range": [
      570,
      571
    ]
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 572,
    "end": 577,
    "range": [
      572,
      577
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 577,
    "end": 578,
    "range": [
      577,
      578
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 581,
    "end": 582,
    "range": [
      581,
      582
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 582,
    "end": 583,
    "range": [
      582,
      583
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 584,
    "end": 585,
    "range": [
      584,
      585
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 585,
    "end": 586,
    "range": [
      585,
      586
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 586,
    "end": 587,
    "range": [
      586,
      587
    ]
  },
  {
    "type": "Identifier",
    "value": "result1",
    "start": 588,
    "end": 595,
    "range": [
      588,
      595
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 595,
    "end": 596,
    "range": [
      595,
      596
    ]
  },
  {
    "type": "Identifier",
    "value": "booleanFlag",
    "start": 596,
    "end": 607,
    "range": [
      596,
      607
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 607,
    "end": 608,
    "range": [
      607,
      608
    ]
  },
  {
    "type": "Identifier",
    "value": "result1",
    "start": 620,
    "end": 627,
    "range": [
      620,
      627
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 627,
    "end": 628,
    "range": [
      627,
      628
    ]
  },
  {
    "type": "Identifier",
    "value": "booleanFlagDefault",
    "start": 628,
    "end": 646,
    "range": [
      628,
      646
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 646,
    "end": 647,
    "range": [
      646,
      647
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 660,
    "end": 667,
    "range": [
      660,
      667
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 668,
    "end": 676,
    "range": [
      668,
      676
    ]
  },
  {
    "type": "Identifier",
    "value": "fn2",
    "start": 677,
    "end": 680,
    "range": [
      677,
      680
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 680,
    "end": 681,
    "range": [
      680,
      681
    ]
  },
  {
    "type": "Identifier",
    "value": "Options",
    "start": 681,
    "end": 688,
    "range": [
      681,
      688
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 689,
    "end": 696,
    "range": [
      689,
      696
    ]
  },
  {
    "type": "Identifier",
    "value": "Flags",
    "start": 697,
    "end": 702,
    "range": [
      697,
      702
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 702,
    "end": 703,
    "range": [
      702,
      703
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 703,
    "end": 704,
    "range": [
      703,
      704
    ]
  },
  {
    "type": "Identifier",
    "value": "options",
    "start": 707,
    "end": 714,
    "range": [
      707,
      714
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 714,
    "end": 715,
    "range": [
      714,
      715
    ]
  },
  {
    "type": "Identifier",
    "value": "Readonly",
    "start": 716,
    "end": 724,
    "range": [
      716,
      724
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 724,
    "end": 725,
    "range": [
      724,
      725
    ]
  },
  {
    "type": "Identifier",
    "value": "Options",
    "start": 725,
    "end": 732,
    "range": [
      725,
      732
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 732,
    "end": 733,
    "range": [
      732,
      733
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 733,
    "end": 734,
    "range": [
      733,
      734
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 735,
    "end": 736,
    "range": [
      735,
      736
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 736,
    "end": 737,
    "range": [
      736,
      737
    ]
  },
  {
    "type": "Identifier",
    "value": "TypeFlag",
    "start": 738,
    "end": 746,
    "range": [
      738,
      746
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 746,
    "end": 747,
    "range": [
      746,
      747
    ]
  },
  {
    "type": "Identifier",
    "value": "Options",
    "start": 747,
    "end": 754,
    "range": [
      747,
      754
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 754,
    "end": 755,
    "range": [
      754,
      755
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 755,
    "end": 756,
    "range": [
      755,
      756
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 758,
    "end": 763,
    "range": [
      758,
      763
    ]
  },
  {
    "type": "Identifier",
    "value": "result2",
    "start": 764,
    "end": 771,
    "range": [
      764,
      771
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 772,
    "end": 773,
    "range": [
      772,
      773
    ]
  },
  {
    "type": "Identifier",
    "value": "fn2",
    "start": 774,
    "end": 777,
    "range": [
      774,
      777
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 777,
    "end": 778,
    "range": [
      777,
      778
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 778,
    "end": 779,
    "range": [
      778,
      779
    ]
  },
  {
    "type": "Identifier",
    "value": "booleanFlag",
    "start": 782,
    "end": 793,
    "range": [
      782,
      793
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 793,
    "end": 794,
    "range": [
      793,
      794
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 795,
    "end": 796,
    "range": [
      795,
      796
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 797,
    "end": 801,
    "range": [
      797,
      801
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 801,
    "end": 802,
    "range": [
      801,
      802
    ]
  },
  {
    "type": "Identifier",
    "value": "Boolean",
    "start": 803,
    "end": 810,
    "range": [
      803,
      810
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 811,
    "end": 812,
    "range": [
      811,
      812
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 812,
    "end": 813,
    "range": [
      812,
      813
    ]
  },
  {
    "type": "Identifier",
    "value": "booleanFlagDefault",
    "start": 816,
    "end": 834,
    "range": [
      816,
      834
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 834,
    "end": 835,
    "range": [
      834,
      835
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 836,
    "end": 837,
    "range": [
      836,
      837
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 842,
    "end": 846,
    "range": [
      842,
      846
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 846,
    "end": 847,
    "range": [
      846,
      847
    ]
  },
  {
    "type": "Identifier",
    "value": "Boolean",
    "start": 848,
    "end": 855,
    "range": [
      848,
      855
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 855,
    "end": 856,
    "range": [
      855,
      856
    ]
  },
  {
    "type": "Identifier",
    "value": "default",
    "start": 861,
    "end": 868,
    "range": [
      861,
      868
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 868,
    "end": 869,
    "range": [
      868,
      869
    ]
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 870,
    "end": 875,
    "range": [
      870,
      875
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 875,
    "end": 876,
    "range": [
      875,
      876
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "type": "Punctuator",
    "value": "}",
    "start": 882,
    "end": 883,
    "range": [
      882,
      883
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 883,
    "end": 884,
    "range": [
      883,
      884
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 884,
    "end": 885,
    "range": [
      884,
      885
    ]
  },
  {
    "type": "Identifier",
    "value": "result2",
    "start": 886,
    "end": 893,
    "range": [
      886,
      893
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 893,
    "end": 894,
    "range": [
      893,
      894
    ]
  },
  {
    "type": "Identifier",
    "value": "booleanFlag",
    "start": 894,
    "end": 905,
    "range": [
      894,
      905
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 905,
    "end": 906,
    "range": [
      905,
      906
    ]
  },
  {
    "type": "Identifier",
    "value": "result2",
    "start": 918,
    "end": 925,
    "range": [
      918,
      925
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 925,
    "end": 926,
    "range": [
      925,
      926
    ]
  },
  {
    "type": "Identifier",
    "value": "booleanFlagDefault",
    "start": 926,
    "end": 944,
    "range": [
      926,
      944
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 944,
    "end": 945,
    "range": [
      944,
      945
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 958,
    "end": 965,
    "range": [
      958,
      965
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 966,
    "end": 974,
    "range": [
      966,
      974
    ]
  },
  {
    "type": "Identifier",
    "value": "fn3",
    "start": 975,
    "end": 978,
    "range": [
      975,
      978
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 978,
    "end": 979,
    "range": [
      978,
      979
    ]
  },
  {
    "type": "Identifier",
    "value": "Options",
    "start": 979,
    "end": 986,
    "range": [
      979,
      986
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 987,
    "end": 994,
    "range": [
      987,
      994
    ]
  },
  {
    "type": "Identifier",
    "value": "Flags",
    "start": 995,
    "end": 1000,
    "range": [
      995,
      1000
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1000,
    "end": 1001,
    "range": [
      1000,
      1001
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1001,
    "end": 1002,
    "range": [
      1001,
      1002
    ]
  },
  {
    "type": "Identifier",
    "value": "options",
    "start": 1005,
    "end": 1012,
    "range": [
      1005,
      1012
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1012,
    "end": 1013,
    "range": [
      1012,
      1013
    ]
  },
  {
    "type": "Identifier",
    "value": "Readonly",
    "start": 1014,
    "end": 1022,
    "range": [
      1014,
      1022
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1022,
    "end": 1023,
    "range": [
      1022,
      1023
    ]
  },
  {
    "type": "Identifier",
    "value": "Options",
    "start": 1023,
    "end": 1030,
    "range": [
      1023,
      1030
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1030,
    "end": 1031,
    "range": [
      1030,
      1031
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1031,
    "end": 1032,
    "range": [
      1031,
      1032
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1033,
    "end": 1034,
    "range": [
      1033,
      1034
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1034,
    "end": 1035,
    "range": [
      1034,
      1035
    ]
  },
  {
    "type": "Identifier",
    "value": "Options",
    "start": 1036,
    "end": 1043,
    "range": [
      1036,
      1043
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1043,
    "end": 1044,
    "range": [
      1043,
      1044
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1046,
    "end": 1051,
    "range": [
      1046,
      1051
    ]
  },
  {
    "type": "Identifier",
    "value": "result3",
    "start": 1052,
    "end": 1059,
    "range": [
      1052,
      1059
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1060,
    "end": 1061,
    "range": [
      1060,
      1061
    ]
  },
  {
    "type": "Identifier",
    "value": "fn3",
    "start": 1062,
    "end": 1065,
    "range": [
      1062,
      1065
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1065,
    "end": 1066,
    "range": [
      1065,
      1066
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1066,
    "end": 1067,
    "range": [
      1066,
      1067
    ]
  },
  {
    "type": "Identifier",
    "value": "booleanFlag",
    "start": 1070,
    "end": 1081,
    "range": [
      1070,
      1081
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1081,
    "end": 1082,
    "range": [
      1081,
      1082
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1083,
    "end": 1084,
    "range": [
      1083,
      1084
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1085,
    "end": 1089,
    "range": [
      1085,
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
    "type": "Identifier",
    "value": "Boolean",
    "start": 1091,
    "end": 1098,
    "range": [
      1091,
      1098
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1099,
    "end": 1100,
    "range": [
      1099,
      1100
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1100,
    "end": 1101,
    "range": [
      1100,
      1101
    ]
  },
  {
    "type": "Identifier",
    "value": "booleanFlagDefault",
    "start": 1104,
    "end": 1122,
    "range": [
      1104,
      1122
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1122,
    "end": 1123,
    "range": [
      1122,
      1123
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1124,
    "end": 1125,
    "range": [
      1124,
      1125
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1130,
    "end": 1134,
    "range": [
      1130,
      1134
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1134,
    "end": 1135,
    "range": [
      1134,
      1135
    ]
  },
  {
    "type": "Identifier",
    "value": "Boolean",
    "start": 1136,
    "end": 1143,
    "range": [
      1136,
      1143
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1143,
    "end": 1144,
    "range": [
      1143,
      1144
    ]
  },
  {
    "type": "Identifier",
    "value": "default",
    "start": 1149,
    "end": 1156,
    "range": [
      1149,
      1156
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1156,
    "end": 1157,
    "range": [
      1156,
      1157
    ]
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 1158,
    "end": 1163,
    "range": [
      1158,
      1163
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1163,
    "end": 1164,
    "range": [
      1163,
      1164
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1197,
    "end": 1198,
    "range": [
      1197,
      1198
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1198,
    "end": 1199,
    "range": [
      1198,
      1199
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1200,
    "end": 1201,
    "range": [
      1200,
      1201
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Identifier",
    "value": "declare",
    "start": 1205,
    "end": 1212,
    "range": [
      1205,
      1212
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1213,
    "end": 1221,
    "range": [
      1213,
      1221
    ]
  },
  {
    "type": "Identifier",
    "value": "takeType",
    "start": 1222,
    "end": 1230,
    "range": [
      1222,
      1230
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1230,
    "end": 1231,
    "range": [
      1230,
      1231
    ]
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 1231,
    "end": 1234,
    "range": [
      1231,
      1234
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1234,
    "end": 1235,
    "range": [
      1234,
      1235
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1236,
    "end": 1237,
    "range": [
      1236,
      1237
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1238,
    "end": 1242,
    "range": [
      1238,
      1242
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1242,
    "end": 1243,
    "range": [
      1242,
      1243
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 1244,
    "end": 1251,
    "range": [
      1244,
      1251
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1252,
    "end": 1253,
    "range": [
      1252,
      1253
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1253,
    "end": 1254,
    "range": [
      1253,
      1254
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1254,
    "end": 1255,
    "range": [
      1254,
      1255
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1256,
    "end": 1260,
    "range": [
      1256,
      1260
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1260,
    "end": 1261,
    "range": [
      1260,
      1261
    ]
  },
  {
    "type": "Identifier",
    "value": "takeType",
    "start": 1262,
    "end": 1270,
    "range": [
      1262,
      1270
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1270,
    "end": 1271,
    "range": [
      1270,
      1271
    ]
  },
  {
    "type": "Identifier",
    "value": "result3",
    "start": 1271,
    "end": 1278,
    "range": [
      1271,
      1278
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1278,
    "end": 1279,
    "range": [
      1278,
      1279
    ]
  },
  {
    "type": "Identifier",
    "value": "booleanFlagDefault",
    "start": 1279,
    "end": 1297,
    "range": [
      1279,
      1297
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1297,
    "end": 1298,
    "range": [
      1297,
      1298
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1298,
    "end": 1299,
    "range": [
      1298,
      1299
    ]
  }
]
```
