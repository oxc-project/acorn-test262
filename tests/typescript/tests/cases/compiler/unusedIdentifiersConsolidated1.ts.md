__ESTREE_TEST__:AST:
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
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 0,
    "end": 8,
    "range": [
      0,
      8
    ]
  },
  {
    "type": "Identifier",
    "value": "greeter",
    "start": 9,
    "end": 16,
    "range": [
      9,
      16
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 16,
    "end": 17,
    "range": [
      16,
      17
    ]
  },
  {
    "type": "Identifier",
    "value": "person",
    "start": 17,
    "end": 23,
    "range": [
      17,
      23
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 23,
    "end": 24,
    "range": [
      23,
      24
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 25,
    "end": 31,
    "range": [
      25,
      31
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 31,
    "end": 32,
    "range": [
      31,
      32
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 33,
    "end": 34,
    "range": [
      33,
      34
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 39,
    "end": 42,
    "range": [
      39,
      42
    ]
  },
  {
    "type": "Identifier",
    "value": "unused",
    "start": 43,
    "end": 49,
    "range": [
      43,
      49
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 50,
    "end": 51,
    "range": [
      50,
      51
    ]
  },
  {
    "type": "Numeric",
    "value": "20",
    "start": 52,
    "end": 54,
    "range": [
      52,
      54
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 54,
    "end": 55,
    "range": [
      54,
      55
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 56,
    "end": 57,
    "range": [
      56,
      57
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 59,
    "end": 64,
    "range": [
      59,
      64
    ]
  },
  {
    "type": "Identifier",
    "value": "Dummy",
    "start": 65,
    "end": 70,
    "range": [
      65,
      70
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 70,
    "end": 71,
    "range": [
      70,
      71
    ]
  },
  {
    "type": "Identifier",
    "value": "usedtypeparameter",
    "start": 71,
    "end": 88,
    "range": [
      71,
      88
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 88,
    "end": 89,
    "range": [
      88,
      89
    ]
  },
  {
    "type": "Identifier",
    "value": "unusedtypeparameter",
    "start": 90,
    "end": 109,
    "range": [
      90,
      109
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 109,
    "end": 110,
    "range": [
      109,
      110
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 111,
    "end": 112,
    "range": [
      111,
      112
    ]
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 117,
    "end": 124,
    "range": [
      117,
      124
    ]
  },
  {
    "type": "Identifier",
    "value": "unusedprivatevariable",
    "start": 125,
    "end": 146,
    "range": [
      125,
      146
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 146,
    "end": 147,
    "range": [
      146,
      147
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 148,
    "end": 154,
    "range": [
      148,
      154
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 154,
    "end": 155,
    "range": [
      154,
      155
    ]
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 160,
    "end": 167,
    "range": [
      160,
      167
    ]
  },
  {
    "type": "Identifier",
    "value": "greeting",
    "start": 168,
    "end": 176,
    "range": [
      168,
      176
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 176,
    "end": 177,
    "range": [
      176,
      177
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 178,
    "end": 184,
    "range": [
      178,
      184
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 184,
    "end": 185,
    "range": [
      184,
      185
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 190,
    "end": 196,
    "range": [
      190,
      196
    ]
  },
  {
    "type": "Identifier",
    "value": "unusedpublicvariable",
    "start": 197,
    "end": 217,
    "range": [
      197,
      217
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 217,
    "end": 218,
    "range": [
      217,
      218
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 219,
    "end": 225,
    "range": [
      219,
      225
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 225,
    "end": 226,
    "range": [
      225,
      226
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 231,
    "end": 237,
    "range": [
      231,
      237
    ]
  },
  {
    "type": "Identifier",
    "value": "typedvariable",
    "start": 238,
    "end": 251,
    "range": [
      238,
      251
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 251,
    "end": 252,
    "range": [
      251,
      252
    ]
  },
  {
    "type": "Identifier",
    "value": "usedtypeparameter",
    "start": 253,
    "end": 270,
    "range": [
      253,
      270
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 270,
    "end": 271,
    "range": [
      270,
      271
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 277,
    "end": 288,
    "range": [
      277,
      288
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 288,
    "end": 289,
    "range": [
      288,
      289
    ]
  },
  {
    "type": "Identifier",
    "value": "message",
    "start": 289,
    "end": 296,
    "range": [
      289,
      296
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 296,
    "end": 297,
    "range": [
      296,
      297
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 298,
    "end": 304,
    "range": [
      298,
      304
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 304,
    "end": 305,
    "range": [
      304,
      305
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 306,
    "end": 307,
    "range": [
      306,
      307
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 316,
    "end": 319,
    "range": [
      316,
      319
    ]
  },
  {
    "type": "Identifier",
    "value": "unused2",
    "start": 320,
    "end": 327,
    "range": [
      320,
      327
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 328,
    "end": 329,
    "range": [
      328,
      329
    ]
  },
  {
    "type": "Numeric",
    "value": "22",
    "start": 330,
    "end": 332,
    "range": [
      330,
      332
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 332,
    "end": 333,
    "range": [
      332,
      333
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 342,
    "end": 346,
    "range": [
      342,
      346
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 346,
    "end": 347,
    "range": [
      346,
      347
    ]
  },
  {
    "type": "Identifier",
    "value": "greeting",
    "start": 347,
    "end": 355,
    "range": [
      347,
      355
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 356,
    "end": 357,
    "range": [
      356,
      357
    ]
  },
  {
    "type": "String",
    "value": "\"Dummy Message\"",
    "start": 358,
    "end": 373,
    "range": [
      358,
      373
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 373,
    "end": 374,
    "range": [
      373,
      374
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 379,
    "end": 380,
    "range": [
      379,
      380
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 386,
    "end": 392,
    "range": [
      386,
      392
    ]
  },
  {
    "type": "Identifier",
    "value": "greeter",
    "start": 393,
    "end": 400,
    "range": [
      393,
      400
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 400,
    "end": 401,
    "range": [
      400,
      401
    ]
  },
  {
    "type": "Identifier",
    "value": "person",
    "start": 401,
    "end": 407,
    "range": [
      401,
      407
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 407,
    "end": 408,
    "range": [
      407,
      408
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 409,
    "end": 415,
    "range": [
      409,
      415
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 415,
    "end": 416,
    "range": [
      415,
      416
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 417,
    "end": 418,
    "range": [
      417,
      418
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 427,
    "end": 430,
    "range": [
      427,
      430
    ]
  },
  {
    "type": "Identifier",
    "value": "unused",
    "start": 431,
    "end": 437,
    "range": [
      431,
      437
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 438,
    "end": 439,
    "range": [
      438,
      439
    ]
  },
  {
    "type": "Numeric",
    "value": "20",
    "start": 440,
    "end": 442,
    "range": [
      440,
      442
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 442,
    "end": 443,
    "range": [
      442,
      443
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 452,
    "end": 456,
    "range": [
      452,
      456
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 456,
    "end": 457,
    "range": [
      456,
      457
    ]
  },
  {
    "type": "Identifier",
    "value": "usedPrivateFunction",
    "start": 457,
    "end": 476,
    "range": [
      457,
      476
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 476,
    "end": 477,
    "range": [
      476,
      477
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 477,
    "end": 478,
    "range": [
      477,
      478
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 478,
    "end": 479,
    "range": [
      478,
      479
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 484,
    "end": 485,
    "range": [
      484,
      485
    ]
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 491,
    "end": 498,
    "range": [
      491,
      498
    ]
  },
  {
    "type": "Identifier",
    "value": "usedPrivateFunction",
    "start": 499,
    "end": 518,
    "range": [
      499,
      518
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 518,
    "end": 519,
    "range": [
      518,
      519
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 519,
    "end": 520,
    "range": [
      519,
      520
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 521,
    "end": 522,
    "range": [
      521,
      522
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 527,
    "end": 528,
    "range": [
      527,
      528
    ]
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 534,
    "end": 541,
    "range": [
      534,
      541
    ]
  },
  {
    "type": "Identifier",
    "value": "unUsedPrivateFunction",
    "start": 542,
    "end": 563,
    "range": [
      542,
      563
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 563,
    "end": 564,
    "range": [
      563,
      564
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 564,
    "end": 565,
    "range": [
      564,
      565
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 566,
    "end": 567,
    "range": [
      566,
      567
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 572,
    "end": 573,
    "range": [
      572,
      573
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 574,
    "end": 575,
    "range": [
      574,
      575
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 577,
    "end": 580,
    "range": [
      577,
      580
    ]
  },
  {
    "type": "Identifier",
    "value": "user",
    "start": 581,
    "end": 585,
    "range": [
      581,
      585
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 586,
    "end": 587,
    "range": [
      586,
      587
    ]
  },
  {
    "type": "String",
    "value": "\"Jane User\"",
    "start": 588,
    "end": 599,
    "range": [
      588,
      599
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 599,
    "end": 600,
    "range": [
      599,
      600
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 601,
    "end": 604,
    "range": [
      601,
      604
    ]
  },
  {
    "type": "Identifier",
    "value": "user2",
    "start": 605,
    "end": 610,
    "range": [
      605,
      610
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 611,
    "end": 612,
    "range": [
      611,
      612
    ]
  },
  {
    "type": "String",
    "value": "\"Jane2 User2\"",
    "start": 613,
    "end": 626,
    "range": [
      613,
      626
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 626,
    "end": 627,
    "range": [
      626,
      627
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 629,
    "end": 638,
    "range": [
      629,
      638
    ]
  },
  {
    "type": "Identifier",
    "value": "Validation",
    "start": 639,
    "end": 649,
    "range": [
      639,
      649
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 650,
    "end": 651,
    "range": [
      650,
      651
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 656,
    "end": 662,
    "range": [
      656,
      662
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 663,
    "end": 672,
    "range": [
      663,
      672
    ]
  },
  {
    "type": "Identifier",
    "value": "StringValidator",
    "start": 673,
    "end": 688,
    "range": [
      673,
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
    "value": "isAcceptable",
    "start": 699,
    "end": 711,
    "range": [
      699,
      711
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 711,
    "end": 712,
    "range": [
      711,
      712
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 712,
    "end": 713,
    "range": [
      712,
      713
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 713,
    "end": 714,
    "range": [
      713,
      714
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 715,
    "end": 721,
    "range": [
      715,
      721
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 721,
    "end": 722,
    "range": [
      721,
      722
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 722,
    "end": 723,
    "range": [
      722,
      723
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 724,
    "end": 731,
    "range": [
      724,
      731
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 731,
    "end": 732,
    "range": [
      731,
      732
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 737,
    "end": 738,
    "range": [
      737,
      738
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 744,
    "end": 749,
    "range": [
      744,
      749
    ]
  },
  {
    "type": "Identifier",
    "value": "lettersRegexp",
    "start": 750,
    "end": 763,
    "range": [
      750,
      763
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 764,
    "end": 765,
    "range": [
      764,
      765
    ]
  },
  {
    "type": "RegularExpression",
    "value": "/^[A-Za-z]+$/",
    "regex": {
      "flags": "",
      "pattern": "^[A-Za-z]+$"
    },
    "start": 766,
    "end": 779,
    "range": [
      766,
      779
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 779,
    "end": 780,
    "range": [
      779,
      780
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 785,
    "end": 790,
    "range": [
      785,
      790
    ]
  },
  {
    "type": "Identifier",
    "value": "numberRegexp",
    "start": 791,
    "end": 803,
    "range": [
      791,
      803
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 804,
    "end": 805,
    "range": [
      804,
      805
    ]
  },
  {
    "type": "RegularExpression",
    "value": "/^[0-9]+$/",
    "regex": {
      "flags": "",
      "pattern": "^[0-9]+$"
    },
    "start": 806,
    "end": 816,
    "range": [
      806,
      816
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 816,
    "end": 817,
    "range": [
      816,
      817
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 823,
    "end": 829,
    "range": [
      823,
      829
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 830,
    "end": 835,
    "range": [
      830,
      835
    ]
  },
  {
    "type": "Identifier",
    "value": "LettersOnlyValidator",
    "start": 836,
    "end": 856,
    "range": [
      836,
      856
    ]
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 857,
    "end": 867,
    "range": [
      857,
      867
    ]
  },
  {
    "type": "Identifier",
    "value": "StringValidator",
    "start": 868,
    "end": 883,
    "range": [
      868,
      883
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 884,
    "end": 885,
    "range": [
      884,
      885
    ]
  },
  {
    "type": "Identifier",
    "value": "isAcceptable",
    "start": 894,
    "end": 906,
    "range": [
      894,
      906
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 906,
    "end": 907,
    "range": [
      906,
      907
    ]
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 907,
    "end": 909,
    "range": [
      907,
      909
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 909,
    "end": 910,
    "range": [
      909,
      910
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 911,
    "end": 917,
    "range": [
      911,
      917
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 917,
    "end": 918,
    "range": [
      917,
      918
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 919,
    "end": 920,
    "range": [
      919,
      920
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 933,
    "end": 939,
    "range": [
      933,
      939
    ]
  },
  {
    "type": "Identifier",
    "value": "lettersRegexp",
    "start": 940,
    "end": 953,
    "range": [
      940,
      953
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 953,
    "end": 954,
    "range": [
      953,
      954
    ]
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 954,
    "end": 958,
    "range": [
      954,
      958
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 958,
    "end": 959,
    "range": [
      958,
      959
    ]
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 959,
    "end": 961,
    "range": [
      959,
      961
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 961,
    "end": 962,
    "range": [
      961,
      962
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 962,
    "end": 963,
    "range": [
      962,
      963
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 972,
    "end": 973,
    "range": [
      972,
      973
    ]
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 983,
    "end": 990,
    "range": [
      983,
      990
    ]
  },
  {
    "type": "Identifier",
    "value": "unUsedPrivateFunction",
    "start": 991,
    "end": 1012,
    "range": [
      991,
      1012
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1012,
    "end": 1013,
    "range": [
      1012,
      1013
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1013,
    "end": 1014,
    "range": [
      1013,
      1014
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1015,
    "end": 1016,
    "range": [
      1015,
      1016
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1025,
    "end": 1026,
    "range": [
      1025,
      1026
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1031,
    "end": 1032,
    "range": [
      1031,
      1032
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1038,
    "end": 1044,
    "range": [
      1038,
      1044
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1045,
    "end": 1050,
    "range": [
      1045,
      1050
    ]
  },
  {
    "type": "Identifier",
    "value": "ZipCodeValidator",
    "start": 1051,
    "end": 1067,
    "range": [
      1051,
      1067
    ]
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 1068,
    "end": 1078,
    "range": [
      1068,
      1078
    ]
  },
  {
    "type": "Identifier",
    "value": "StringValidator",
    "start": 1079,
    "end": 1094,
    "range": [
      1079,
      1094
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1095,
    "end": 1096,
    "range": [
      1095,
      1096
    ]
  },
  {
    "type": "Identifier",
    "value": "isAcceptable",
    "start": 1105,
    "end": 1117,
    "range": [
      1105,
      1117
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1117,
    "end": 1118,
    "range": [
      1117,
      1118
    ]
  },
  {
    "type": "Identifier",
    "value": "s3",
    "start": 1118,
    "end": 1120,
    "range": [
      1118,
      1120
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1120,
    "end": 1121,
    "range": [
      1120,
      1121
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1122,
    "end": 1128,
    "range": [
      1122,
      1128
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1128,
    "end": 1129,
    "range": [
      1128,
      1129
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1130,
    "end": 1131,
    "range": [
      1130,
      1131
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1144,
    "end": 1150,
    "range": [
      1144,
      1150
    ]
  },
  {
    "type": "Identifier",
    "value": "s3",
    "start": 1151,
    "end": 1153,
    "range": [
      1151,
      1153
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1153,
    "end": 1154,
    "range": [
      1153,
      1154
    ]
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 1154,
    "end": 1160,
    "range": [
      1154,
      1160
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1161,
    "end": 1164,
    "range": [
      1161,
      1164
    ]
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 1165,
    "end": 1166,
    "range": [
      1165,
      1166
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1166,
    "end": 1167,
    "range": [
      1166,
      1167
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1176,
    "end": 1177,
    "range": [
      1176,
      1177
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1182,
    "end": 1183,
    "range": [
      1182,
      1183
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1189,
    "end": 1198,
    "range": [
      1189,
      1198
    ]
  },
  {
    "type": "Identifier",
    "value": "usedLocallyInterface",
    "start": 1199,
    "end": 1219,
    "range": [
      1199,
      1219
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1220,
    "end": 1221,
    "range": [
      1220,
      1221
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1226,
    "end": 1227,
    "range": [
      1226,
      1227
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1233,
    "end": 1242,
    "range": [
      1233,
      1242
    ]
  },
  {
    "type": "Identifier",
    "value": "usedLocallyInterface2",
    "start": 1243,
    "end": 1264,
    "range": [
      1243,
      1264
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1265,
    "end": 1266,
    "range": [
      1265,
      1266
    ]
  },
  {
    "type": "Identifier",
    "value": "someFunction",
    "start": 1275,
    "end": 1287,
    "range": [
      1275,
      1287
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1287,
    "end": 1288,
    "range": [
      1287,
      1288
    ]
  },
  {
    "type": "Identifier",
    "value": "s1",
    "start": 1288,
    "end": 1290,
    "range": [
      1288,
      1290
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1290,
    "end": 1291,
    "range": [
      1290,
      1291
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1292,
    "end": 1298,
    "range": [
      1292,
      1298
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1298,
    "end": 1299,
    "range": [
      1298,
      1299
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1299,
    "end": 1300,
    "range": [
      1299,
      1300
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1301,
    "end": 1305,
    "range": [
      1301,
      1305
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1305,
    "end": 1306,
    "range": [
      1305,
      1306
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1311,
    "end": 1312,
    "range": [
      1311,
      1312
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1318,
    "end": 1324,
    "range": [
      1318,
      1324
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1325,
    "end": 1334,
    "range": [
      1325,
      1334
    ]
  },
  {
    "type": "Identifier",
    "value": "exportedInterface",
    "start": 1335,
    "end": 1352,
    "range": [
      1335,
      1352
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1353,
    "end": 1354,
    "range": [
      1353,
      1354
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1359,
    "end": 1360,
    "range": [
      1359,
      1360
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1366,
    "end": 1371,
    "range": [
      1366,
      1371
    ]
  },
  {
    "type": "Identifier",
    "value": "dummy",
    "start": 1372,
    "end": 1377,
    "range": [
      1372,
      1377
    ]
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 1378,
    "end": 1388,
    "range": [
      1378,
      1388
    ]
  },
  {
    "type": "Identifier",
    "value": "usedLocallyInterface",
    "start": 1389,
    "end": 1409,
    "range": [
      1389,
      1409
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1410,
    "end": 1411,
    "range": [
      1410,
      1411
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1416,
    "end": 1417,
    "range": [
      1416,
      1417
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1423,
    "end": 1432,
    "range": [
      1423,
      1432
    ]
  },
  {
    "type": "Identifier",
    "value": "unusedInterface",
    "start": 1433,
    "end": 1448,
    "range": [
      1433,
      1448
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1449,
    "end": 1450,
    "range": [
      1449,
      1450
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1455,
    "end": 1456,
    "range": [
      1455,
      1456
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1457,
    "end": 1458,
    "range": [
      1457,
      1458
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 1461,
    "end": 1470,
    "range": [
      1461,
      1470
    ]
  },
  {
    "type": "Identifier",
    "value": "Greeter",
    "start": 1471,
    "end": 1478,
    "range": [
      1471,
      1478
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1479,
    "end": 1480,
    "range": [
      1479,
      1480
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1485,
    "end": 1490,
    "range": [
      1485,
      1490
    ]
  },
  {
    "type": "Identifier",
    "value": "class1",
    "start": 1491,
    "end": 1497,
    "range": [
      1491,
      1497
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1498,
    "end": 1499,
    "range": [
      1498,
      1499
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1504,
    "end": 1505,
    "range": [
      1504,
      1505
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1511,
    "end": 1517,
    "range": [
      1511,
      1517
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1518,
    "end": 1523,
    "range": [
      1518,
      1523
    ]
  },
  {
    "type": "Identifier",
    "value": "class2",
    "start": 1524,
    "end": 1530,
    "range": [
      1524,
      1530
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1531,
    "end": 1538,
    "range": [
      1531,
      1538
    ]
  },
  {
    "type": "Identifier",
    "value": "class1",
    "start": 1539,
    "end": 1545,
    "range": [
      1539,
      1545
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1546,
    "end": 1547,
    "range": [
      1546,
      1547
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1552,
    "end": 1553,
    "range": [
      1552,
      1553
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1559,
    "end": 1564,
    "range": [
      1559,
      1564
    ]
  },
  {
    "type": "Identifier",
    "value": "class3",
    "start": 1565,
    "end": 1571,
    "range": [
      1565,
      1571
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1572,
    "end": 1573,
    "range": [
      1572,
      1573
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1578,
    "end": 1579,
    "range": [
      1578,
      1579
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1585,
    "end": 1591,
    "range": [
      1585,
      1591
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1592,
    "end": 1597,
    "range": [
      1592,
      1597
    ]
  },
  {
    "type": "Identifier",
    "value": "class4",
    "start": 1598,
    "end": 1604,
    "range": [
      1598,
      1604
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1605,
    "end": 1606,
    "range": [
      1605,
      1606
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1611,
    "end": 1612,
    "range": [
      1611,
      1612
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1618,
    "end": 1627,
    "range": [
      1618,
      1627
    ]
  },
  {
    "type": "Identifier",
    "value": "interface1",
    "start": 1628,
    "end": 1638,
    "range": [
      1628,
      1638
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1639,
    "end": 1640,
    "range": [
      1639,
      1640
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1645,
    "end": 1646,
    "range": [
      1645,
      1646
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1652,
    "end": 1658,
    "range": [
      1652,
      1658
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1659,
    "end": 1668,
    "range": [
      1659,
      1668
    ]
  },
  {
    "type": "Identifier",
    "value": "interface2",
    "start": 1669,
    "end": 1679,
    "range": [
      1669,
      1679
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1680,
    "end": 1687,
    "range": [
      1680,
      1687
    ]
  },
  {
    "type": "Identifier",
    "value": "interface1",
    "start": 1688,
    "end": 1698,
    "range": [
      1688,
      1698
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1699,
    "end": 1700,
    "range": [
      1699,
      1700
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1705,
    "end": 1706,
    "range": [
      1705,
      1706
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1712,
    "end": 1721,
    "range": [
      1712,
      1721
    ]
  },
  {
    "type": "Identifier",
    "value": "interface3",
    "start": 1722,
    "end": 1732,
    "range": [
      1722,
      1732
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1733,
    "end": 1734,
    "range": [
      1733,
      1734
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1739,
    "end": 1740,
    "range": [
      1739,
      1740
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1746,
    "end": 1752,
    "range": [
      1746,
      1752
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1753,
    "end": 1762,
    "range": [
      1753,
      1762
    ]
  },
  {
    "type": "Identifier",
    "value": "interface4",
    "start": 1763,
    "end": 1773,
    "range": [
      1763,
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
    "value": "}",
    "start": 1780,
    "end": 1781,
    "range": [
      1780,
      1781
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1787,
    "end": 1793,
    "range": [
      1787,
      1793
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1794,
    "end": 1797,
    "range": [
      1794,
      1797
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1798,
    "end": 1799,
    "range": [
      1798,
      1799
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1799,
    "end": 1800,
    "range": [
      1799,
      1800
    ]
  },
  {
    "type": "Identifier",
    "value": "interface3",
    "start": 1801,
    "end": 1811,
    "range": [
      1801,
      1811
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1811,
    "end": 1812,
    "range": [
      1811,
      1812
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1818,
    "end": 1827,
    "range": [
      1818,
      1827
    ]
  },
  {
    "type": "Identifier",
    "value": "interface5",
    "start": 1828,
    "end": 1838,
    "range": [
      1828,
      1838
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1839,
    "end": 1840,
    "range": [
      1839,
      1840
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1845,
    "end": 1846,
    "range": [
      1845,
      1846
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1847,
    "end": 1848,
    "range": [
      1847,
      1848
    ]
  }
]
```
