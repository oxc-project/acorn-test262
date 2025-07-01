__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "greeter",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 16
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "person",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 25,
              "end": 31
            },
            "start": 23,
            "end": 31
          },
          "start": 17,
          "end": 31
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
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
                  "name": "unused",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 43,
                  "end": 49
                },
                "init": {
                  "type": "Literal",
                  "value": 20,
                  "raw": "20",
                  "start": 52,
                  "end": 54
                },
                "definite": false,
                "start": 43,
                "end": 54
              }
            ],
            "declare": false,
            "start": 39,
            "end": 55
          }
        ],
        "start": 33,
        "end": 57
      },
      "expression": false,
      "start": 0,
      "end": 57
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Dummy",
        "optional": false,
        "typeAnnotation": null,
        "start": 65,
        "end": 70
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "usedtypeparameter",
              "optional": false,
              "typeAnnotation": null,
              "start": 71,
              "end": 88
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 71,
            "end": 88
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "unusedtypeparameter",
              "optional": false,
              "typeAnnotation": null,
              "start": 90,
              "end": 109
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 90,
            "end": 109
          }
        ],
        "start": 70,
        "end": 110
      },
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
              "name": "unusedprivatevariable",
              "optional": false,
              "typeAnnotation": null,
              "start": 125,
              "end": 146
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 148,
                "end": 154
              },
              "start": 146,
              "end": 154
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 117,
            "end": 155
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "greeting",
              "optional": false,
              "typeAnnotation": null,
              "start": 168,
              "end": 176
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 178,
                "end": 184
              },
              "start": 176,
              "end": 184
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 160,
            "end": 185
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "unusedpublicvariable",
              "optional": false,
              "typeAnnotation": null,
              "start": 197,
              "end": 217
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 219,
                "end": 225
              },
              "start": 217,
              "end": 225
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
            "start": 190,
            "end": 226
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "typedvariable",
              "optional": false,
              "typeAnnotation": null,
              "start": 238,
              "end": 251
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "usedtypeparameter",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 253,
                  "end": 270
                },
                "typeArguments": null,
                "start": 253,
                "end": 270
              },
              "start": 251,
              "end": 270
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
            "start": 231,
            "end": 271
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 277,
              "end": 288
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
                  "name": "message",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 298,
                      "end": 304
                    },
                    "start": 296,
                    "end": 304
                  },
                  "start": 289,
                  "end": 304
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
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
                          "name": "unused2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 320,
                          "end": 327
                        },
                        "init": {
                          "type": "Literal",
                          "value": 22,
                          "raw": "22",
                          "start": 330,
                          "end": 332
                        },
                        "definite": false,
                        "start": 320,
                        "end": 332
                      }
                    ],
                    "declare": false,
                    "start": 316,
                    "end": 333
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 342,
                          "end": 346
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "greeting",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 347,
                          "end": 355
                        },
                        "optional": false,
                        "computed": false,
                        "start": 342,
                        "end": 355
                      },
                      "right": {
                        "type": "Literal",
                        "value": "Dummy Message",
                        "raw": "\"Dummy Message\"",
                        "start": 358,
                        "end": 373
                      },
                      "start": 342,
                      "end": 373
                    },
                    "directive": null,
                    "start": 342,
                    "end": 374
                  }
                ],
                "start": 306,
                "end": 380
              },
              "expression": false,
              "start": 288,
              "end": 380
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 277,
            "end": 380
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "greeter",
              "optional": false,
              "typeAnnotation": null,
              "start": 393,
              "end": 400
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
                  "name": "person",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 409,
                      "end": 415
                    },
                    "start": 407,
                    "end": 415
                  },
                  "start": 401,
                  "end": 415
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
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
                          "name": "unused",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 431,
                          "end": 437
                        },
                        "init": {
                          "type": "Literal",
                          "value": 20,
                          "raw": "20",
                          "start": 440,
                          "end": 442
                        },
                        "definite": false,
                        "start": 431,
                        "end": 442
                      }
                    ],
                    "declare": false,
                    "start": 427,
                    "end": 443
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 452,
                          "end": 456
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "usedPrivateFunction",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 457,
                          "end": 476
                        },
                        "optional": false,
                        "computed": false,
                        "start": 452,
                        "end": 476
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 452,
                      "end": 478
                    },
                    "directive": null,
                    "start": 452,
                    "end": 479
                  }
                ],
                "start": 417,
                "end": 485
              },
              "expression": false,
              "start": 400,
              "end": 485
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 386,
            "end": 485
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "usedPrivateFunction",
              "optional": false,
              "typeAnnotation": null,
              "start": 499,
              "end": 518
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
                "start": 521,
                "end": 528
              },
              "expression": false,
              "start": 518,
              "end": 528
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 491,
            "end": 528
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "unUsedPrivateFunction",
              "optional": false,
              "typeAnnotation": null,
              "start": 542,
              "end": 563
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
                "start": 566,
                "end": 573
              },
              "expression": false,
              "start": 563,
              "end": 573
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 534,
            "end": 573
          }
        ],
        "start": 111,
        "end": 575
      },
      "abstract": false,
      "declare": false,
      "start": 59,
      "end": 575
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
            "name": "user",
            "optional": false,
            "typeAnnotation": null,
            "start": 581,
            "end": 585
          },
          "init": {
            "type": "Literal",
            "value": "Jane User",
            "raw": "\"Jane User\"",
            "start": 588,
            "end": 599
          },
          "definite": false,
          "start": 581,
          "end": 599
        }
      ],
      "declare": false,
      "start": 577,
      "end": 600
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
            "name": "user2",
            "optional": false,
            "typeAnnotation": null,
            "start": 605,
            "end": 610
          },
          "init": {
            "type": "Literal",
            "value": "Jane2 User2",
            "raw": "\"Jane2 User2\"",
            "start": 613,
            "end": 626
          },
          "definite": false,
          "start": 605,
          "end": 626
        }
      ],
      "declare": false,
      "start": 601,
      "end": 627
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Validation",
        "optional": false,
        "typeAnnotation": null,
        "start": 639,
        "end": 649
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "StringValidator",
                "optional": false,
                "typeAnnotation": null,
                "start": 673,
                "end": 688
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "isAcceptable",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 699,
                      "end": 711
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 715,
                            "end": 721
                          },
                          "start": 713,
                          "end": 721
                        },
                        "start": 712,
                        "end": 721
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 724,
                        "end": 731
                      },
                      "start": 722,
                      "end": 731
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 699,
                    "end": 732
                  }
                ],
                "start": 689,
                "end": 738
              },
              "declare": false,
              "start": 663,
              "end": 738
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 656,
            "end": 738
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
                  "name": "lettersRegexp",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 750,
                  "end": 763
                },
                "init": {
                  "type": "Literal",
                  "value": null,
                  "raw": "/^[A-Za-z]+$/",
                  "regex": {
                    "pattern": "^[A-Za-z]+$",
                    "flags": ""
                  },
                  "start": 766,
                  "end": 779
                },
                "definite": false,
                "start": 750,
                "end": 779
              }
            ],
            "declare": false,
            "start": 744,
            "end": 780
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
                  "name": "numberRegexp",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 791,
                  "end": 803
                },
                "init": {
                  "type": "Literal",
                  "value": null,
                  "raw": "/^[0-9]+$/",
                  "regex": {
                    "pattern": "^[0-9]+$",
                    "flags": ""
                  },
                  "start": 806,
                  "end": 816
                },
                "definite": false,
                "start": 791,
                "end": 816
              }
            ],
            "declare": false,
            "start": 785,
            "end": 817
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "LettersOnlyValidator",
                "optional": false,
                "typeAnnotation": null,
                "start": 836,
                "end": 856
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [
                {
                  "type": "TSClassImplements",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "StringValidator",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 868,
                    "end": 883
                  },
                  "typeArguments": null,
                  "start": 868,
                  "end": 883
                }
              ],
              "body": {
                "type": "ClassBody",
                "body": [
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "isAcceptable",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 894,
                      "end": 906
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
                          "name": "s2",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 911,
                              "end": 917
                            },
                            "start": 909,
                            "end": 917
                          },
                          "start": 907,
                          "end": 917
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "lettersRegexp",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 940,
                                  "end": 953
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "test",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 954,
                                  "end": 958
                                },
                                "optional": false,
                                "computed": false,
                                "start": 940,
                                "end": 958
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "s2",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 959,
                                  "end": 961
                                }
                              ],
                              "optional": false,
                              "start": 940,
                              "end": 962
                            },
                            "start": 933,
                            "end": 963
                          }
                        ],
                        "start": 919,
                        "end": 973
                      },
                      "expression": false,
                      "start": 906,
                      "end": 973
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 894,
                    "end": 973
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "unUsedPrivateFunction",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 991,
                      "end": 1012
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
                        "start": 1015,
                        "end": 1026
                      },
                      "expression": false,
                      "start": 1012,
                      "end": 1026
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 983,
                    "end": 1026
                  }
                ],
                "start": 884,
                "end": 1032
              },
              "abstract": false,
              "declare": false,
              "start": 830,
              "end": 1032
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 823,
            "end": 1032
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "ZipCodeValidator",
                "optional": false,
                "typeAnnotation": null,
                "start": 1051,
                "end": 1067
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [
                {
                  "type": "TSClassImplements",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "StringValidator",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1079,
                    "end": 1094
                  },
                  "typeArguments": null,
                  "start": 1079,
                  "end": 1094
                }
              ],
              "body": {
                "type": "ClassBody",
                "body": [
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "isAcceptable",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1105,
                      "end": 1117
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
                          "name": "s3",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 1122,
                              "end": 1128
                            },
                            "start": 1120,
                            "end": 1128
                          },
                          "start": 1118,
                          "end": 1128
                        }
                      ],
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
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "s3",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1151,
                                  "end": 1153
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "length",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1154,
                                  "end": 1160
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1151,
                                "end": 1160
                              },
                              "operator": "===",
                              "right": {
                                "type": "Literal",
                                "value": 5,
                                "raw": "5",
                                "start": 1165,
                                "end": 1166
                              },
                              "start": 1151,
                              "end": 1166
                            },
                            "start": 1144,
                            "end": 1167
                          }
                        ],
                        "start": 1130,
                        "end": 1177
                      },
                      "expression": false,
                      "start": 1117,
                      "end": 1177
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 1105,
                    "end": 1177
                  }
                ],
                "start": 1095,
                "end": 1183
              },
              "abstract": false,
              "declare": false,
              "start": 1045,
              "end": 1183
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1038,
            "end": 1183
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "usedLocallyInterface",
              "optional": false,
              "typeAnnotation": null,
              "start": 1199,
              "end": 1219
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 1220,
              "end": 1227
            },
            "declare": false,
            "start": 1189,
            "end": 1227
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "usedLocallyInterface2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1243,
              "end": 1264
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "someFunction",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1275,
                    "end": 1287
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "s1",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 1292,
                          "end": 1298
                        },
                        "start": 1290,
                        "end": 1298
                      },
                      "start": 1288,
                      "end": 1298
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 1301,
                      "end": 1305
                    },
                    "start": 1299,
                    "end": 1305
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 1275,
                  "end": 1306
                }
              ],
              "start": 1265,
              "end": 1312
            },
            "declare": false,
            "start": 1233,
            "end": 1312
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "exportedInterface",
                "optional": false,
                "typeAnnotation": null,
                "start": 1335,
                "end": 1352
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 1353,
                "end": 1360
              },
              "declare": false,
              "start": 1325,
              "end": 1360
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 1318,
            "end": 1360
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "dummy",
              "optional": false,
              "typeAnnotation": null,
              "start": 1372,
              "end": 1377
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [
              {
                "type": "TSClassImplements",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "usedLocallyInterface",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1389,
                  "end": 1409
                },
                "typeArguments": null,
                "start": 1389,
                "end": 1409
              }
            ],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 1410,
              "end": 1417
            },
            "abstract": false,
            "declare": false,
            "start": 1366,
            "end": 1417
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "unusedInterface",
              "optional": false,
              "typeAnnotation": null,
              "start": 1433,
              "end": 1448
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 1449,
              "end": 1456
            },
            "declare": false,
            "start": 1423,
            "end": 1456
          }
        ],
        "start": 650,
        "end": 1458
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 629,
      "end": 1458
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Greeter",
        "optional": false,
        "typeAnnotation": null,
        "start": 1471,
        "end": 1478
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "class1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1491,
              "end": 1497
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 1498,
              "end": 1505
            },
            "abstract": false,
            "declare": false,
            "start": 1485,
            "end": 1505
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "class2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1524,
                "end": 1530
              },
              "typeParameters": null,
              "superClass": {
                "type": "Identifier",
                "decorators": [],
                "name": "class1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1539,
                "end": 1545
              },
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 1546,
                "end": 1553
              },
              "abstract": false,
              "declare": false,
              "start": 1518,
              "end": 1553
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1511,
            "end": 1553
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "class3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1565,
              "end": 1571
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 1572,
              "end": 1579
            },
            "abstract": false,
            "declare": false,
            "start": 1559,
            "end": 1579
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "class4",
                "optional": false,
                "typeAnnotation": null,
                "start": 1598,
                "end": 1604
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 1605,
                "end": 1612
              },
              "abstract": false,
              "declare": false,
              "start": 1592,
              "end": 1612
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1585,
            "end": 1612
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "interface1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1628,
              "end": 1638
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 1639,
              "end": 1646
            },
            "declare": false,
            "start": 1618,
            "end": 1646
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "interface2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1669,
                "end": 1679
              },
              "typeParameters": null,
              "extends": [
                {
                  "type": "TSInterfaceHeritage",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "interface1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1688,
                    "end": 1698
                  },
                  "typeArguments": null,
                  "start": 1688,
                  "end": 1698
                }
              ],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 1699,
                "end": 1706
              },
              "declare": false,
              "start": 1659,
              "end": 1706
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 1652,
            "end": 1706
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "interface3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1722,
              "end": 1732
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 1733,
              "end": 1740
            },
            "declare": false,
            "start": 1712,
            "end": 1740
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "interface4",
                "optional": false,
                "typeAnnotation": null,
                "start": 1763,
                "end": 1773
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 1774,
                "end": 1781
              },
              "declare": false,
              "start": 1753,
              "end": 1781
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 1746,
            "end": 1781
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "interface3",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1801,
                          "end": 1811
                        },
                        "typeArguments": null,
                        "start": 1801,
                        "end": 1811
                      },
                      "start": 1799,
                      "end": 1811
                    },
                    "start": 1798,
                    "end": 1811
                  },
                  "init": null,
                  "definite": false,
                  "start": 1798,
                  "end": 1811
                }
              ],
              "declare": false,
              "start": 1794,
              "end": 1812
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1787,
            "end": 1812
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "interface5",
              "optional": false,
              "typeAnnotation": null,
              "start": 1828,
              "end": 1838
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 1839,
              "end": 1846
            },
            "declare": false,
            "start": 1818,
            "end": 1846
          }
        ],
        "start": 1479,
        "end": 1848
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 1461,
      "end": 1848
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1848
}
```
