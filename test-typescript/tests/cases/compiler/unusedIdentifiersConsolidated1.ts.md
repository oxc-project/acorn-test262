__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1848,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 57,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 16,
        "name": "greeter",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 17,
          "end": 31,
          "name": "person",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 23,
            "end": 31,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 25,
              "end": 31
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 33,
        "end": 57,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 39,
            "end": 55,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 43,
                "end": 54,
                "id": {
                  "type": "Identifier",
                  "start": 43,
                  "end": 49,
                  "name": "unused",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 52,
                  "end": 54,
                  "value": 20,
                  "raw": "20"
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ClassDeclaration",
      "start": 59,
      "end": 575,
      "id": {
        "type": "Identifier",
        "start": 65,
        "end": 70,
        "name": "Dummy",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 111,
        "end": 575,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 117,
            "end": 155,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 125,
              "end": 146,
              "name": "unusedprivatevariable",
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
              "start": 146,
              "end": 154,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 148,
                "end": 154
              }
            },
            "accessibility": "private"
          },
          {
            "type": "PropertyDefinition",
            "start": 160,
            "end": 185,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 168,
              "end": 176,
              "name": "greeting",
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
              "start": 176,
              "end": 184,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 178,
                "end": 184
              }
            },
            "accessibility": "private"
          },
          {
            "type": "PropertyDefinition",
            "start": 190,
            "end": 226,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 197,
              "end": 217,
              "name": "unusedpublicvariable",
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
              "start": 217,
              "end": 225,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 219,
                "end": 225
              }
            },
            "accessibility": "public"
          },
          {
            "type": "PropertyDefinition",
            "start": 231,
            "end": 271,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 238,
              "end": 251,
              "name": "typedvariable",
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
              "start": 251,
              "end": 270,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 253,
                "end": 270,
                "typeName": {
                  "type": "Identifier",
                  "start": 253,
                  "end": 270,
                  "name": "usedtypeparameter",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 277,
            "end": 380,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 277,
              "end": 288,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 288,
              "end": 380,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 289,
                  "end": 304,
                  "name": "message",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 296,
                    "end": 304,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 298,
                      "end": 304
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 306,
                "end": 380,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 316,
                    "end": 333,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 320,
                        "end": 332,
                        "id": {
                          "type": "Identifier",
                          "start": 320,
                          "end": 327,
                          "name": "unused2",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "Literal",
                          "start": 330,
                          "end": 332,
                          "value": 22,
                          "raw": "22"
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 342,
                    "end": 374,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 342,
                      "end": 373,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 342,
                        "end": 355,
                        "object": {
                          "type": "ThisExpression",
                          "start": 342,
                          "end": 346
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 347,
                          "end": 355,
                          "name": "greeting",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 358,
                        "end": 373,
                        "value": "Dummy Message",
                        "raw": "\"Dummy Message\""
                      }
                    },
                    "directive": null
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 386,
            "end": 485,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 393,
              "end": 400,
              "name": "greeter",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 400,
              "end": 485,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 401,
                  "end": 415,
                  "name": "person",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 407,
                    "end": 415,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 409,
                      "end": 415
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 417,
                "end": 485,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 427,
                    "end": 443,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 431,
                        "end": 442,
                        "id": {
                          "type": "Identifier",
                          "start": 431,
                          "end": 437,
                          "name": "unused",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "Literal",
                          "start": 440,
                          "end": 442,
                          "value": 20,
                          "raw": "20"
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 452,
                    "end": 479,
                    "expression": {
                      "type": "CallExpression",
                      "start": 452,
                      "end": 478,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 452,
                        "end": 476,
                        "object": {
                          "type": "ThisExpression",
                          "start": 452,
                          "end": 456
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 457,
                          "end": 476,
                          "name": "usedPrivateFunction",
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
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 491,
            "end": 528,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 499,
              "end": 518,
              "name": "usedPrivateFunction",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 518,
              "end": 528,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 521,
                "end": 528,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 534,
            "end": 573,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 542,
              "end": 563,
              "name": "unUsedPrivateFunction",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 563,
              "end": 573,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 566,
                "end": 573,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "private"
          }
        ]
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 70,
        "end": 110,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 71,
            "end": 88,
            "name": {
              "type": "Identifier",
              "start": 71,
              "end": 88,
              "name": "usedtypeparameter",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 90,
            "end": 109,
            "name": {
              "type": "Identifier",
              "start": 90,
              "end": 109,
              "name": "unusedtypeparameter",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "VariableDeclaration",
      "start": 577,
      "end": 600,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 581,
          "end": 599,
          "id": {
            "type": "Identifier",
            "start": 581,
            "end": 585,
            "name": "user",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 588,
            "end": 599,
            "value": "Jane User",
            "raw": "\"Jane User\""
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 601,
      "end": 627,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 605,
          "end": 626,
          "id": {
            "type": "Identifier",
            "start": 605,
            "end": 610,
            "name": "user2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 613,
            "end": 626,
            "value": "Jane2 User2",
            "raw": "\"Jane2 User2\""
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 629,
      "end": 1458,
      "id": {
        "type": "Identifier",
        "start": 639,
        "end": 649,
        "name": "Validation",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 650,
        "end": 1458,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 656,
            "end": 738,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 663,
              "end": 738,
              "id": {
                "type": "Identifier",
                "start": 673,
                "end": 688,
                "name": "StringValidator",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
              "typeParameters": null,
              "body": {
                "type": "TSInterfaceBody",
                "start": 689,
                "end": 738,
                "body": [
                  {
                    "type": "TSMethodSignature",
                    "start": 699,
                    "end": 732,
                    "key": {
                      "type": "Identifier",
                      "start": 699,
                      "end": 711,
                      "name": "isAcceptable",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 712,
                        "end": 721,
                        "name": "s",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 713,
                          "end": 721,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 715,
                            "end": 721
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 722,
                      "end": 731,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 724,
                        "end": 731
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
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "type"
          },
          {
            "type": "VariableDeclaration",
            "start": 744,
            "end": 780,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 750,
                "end": 779,
                "id": {
                  "type": "Identifier",
                  "start": 750,
                  "end": 763,
                  "name": "lettersRegexp",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 766,
                  "end": 779,
                  "value": null,
                  "raw": "/^[A-Za-z]+$/",
                  "regex": {
                    "flags": "",
                    "pattern": "^[A-Za-z]+$"
                  }
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 785,
            "end": 817,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 791,
                "end": 816,
                "id": {
                  "type": "Identifier",
                  "start": 791,
                  "end": 803,
                  "name": "numberRegexp",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 806,
                  "end": 816,
                  "value": null,
                  "raw": "/^[0-9]+$/",
                  "regex": {
                    "flags": "",
                    "pattern": "^[0-9]+$"
                  }
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 823,
            "end": 1032,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 830,
              "end": 1032,
              "id": {
                "type": "Identifier",
                "start": 836,
                "end": 856,
                "name": "LettersOnlyValidator",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 884,
                "end": 1032,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 894,
                    "end": 973,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 894,
                      "end": 906,
                      "name": "isAcceptable",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "method",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 906,
                      "end": 973,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 907,
                          "end": 917,
                          "name": "s2",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 909,
                            "end": 917,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 911,
                              "end": 917
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": {
                        "type": "BlockStatement",
                        "start": 919,
                        "end": 973,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 933,
                            "end": 963,
                            "argument": {
                              "type": "CallExpression",
                              "start": 940,
                              "end": 962,
                              "callee": {
                                "type": "MemberExpression",
                                "start": 940,
                                "end": 958,
                                "object": {
                                  "type": "Identifier",
                                  "start": 940,
                                  "end": 953,
                                  "name": "lettersRegexp",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 954,
                                  "end": 958,
                                  "name": "test",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": false
                              },
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "start": 959,
                                  "end": 961,
                                  "name": "s2",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                }
                              ],
                              "optional": false,
                              "typeArguments": null
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": null
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": null
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 983,
                    "end": 1026,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 991,
                      "end": 1012,
                      "name": "unUsedPrivateFunction",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "method",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 1012,
                      "end": 1026,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
                      "body": {
                        "type": "BlockStatement",
                        "start": 1015,
                        "end": 1026,
                        "body": []
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": null
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": "private"
                  }
                ]
              },
              "decorators": [],
              "typeParameters": null,
              "implements": [
                {
                  "type": "TSClassImplements",
                  "start": 868,
                  "end": 883,
                  "expression": {
                    "type": "Identifier",
                    "start": 868,
                    "end": 883,
                    "name": "StringValidator",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ],
              "abstract": false,
              "declare": false,
              "superTypeArguments": null
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 1038,
            "end": 1183,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 1045,
              "end": 1183,
              "id": {
                "type": "Identifier",
                "start": 1051,
                "end": 1067,
                "name": "ZipCodeValidator",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 1095,
                "end": 1183,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 1105,
                    "end": 1177,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1105,
                      "end": 1117,
                      "name": "isAcceptable",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "method",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 1117,
                      "end": 1177,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 1118,
                          "end": 1128,
                          "name": "s3",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1120,
                            "end": 1128,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 1122,
                              "end": 1128
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": {
                        "type": "BlockStatement",
                        "start": 1130,
                        "end": 1177,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 1144,
                            "end": 1167,
                            "argument": {
                              "type": "BinaryExpression",
                              "start": 1151,
                              "end": 1166,
                              "left": {
                                "type": "MemberExpression",
                                "start": 1151,
                                "end": 1160,
                                "object": {
                                  "type": "Identifier",
                                  "start": 1151,
                                  "end": 1153,
                                  "name": "s3",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 1154,
                                  "end": 1160,
                                  "name": "length",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": false
                              },
                              "operator": "===",
                              "right": {
                                "type": "Literal",
                                "start": 1165,
                                "end": 1166,
                                "value": 5,
                                "raw": "5"
                              }
                            }
                          }
                        ]
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
              "implements": [
                {
                  "type": "TSClassImplements",
                  "start": 1079,
                  "end": 1094,
                  "expression": {
                    "type": "Identifier",
                    "start": 1079,
                    "end": 1094,
                    "name": "StringValidator",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ],
              "abstract": false,
              "declare": false,
              "superTypeArguments": null
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 1189,
            "end": 1227,
            "id": {
              "type": "Identifier",
              "start": 1199,
              "end": 1219,
              "name": "usedLocallyInterface",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 1220,
              "end": 1227,
              "body": []
            },
            "declare": false
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 1233,
            "end": 1312,
            "id": {
              "type": "Identifier",
              "start": 1243,
              "end": 1264,
              "name": "usedLocallyInterface2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 1265,
              "end": 1312,
              "body": [
                {
                  "type": "TSMethodSignature",
                  "start": 1275,
                  "end": 1306,
                  "key": {
                    "type": "Identifier",
                    "start": 1275,
                    "end": 1287,
                    "name": "someFunction",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1288,
                      "end": 1298,
                      "name": "s1",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1290,
                        "end": 1298,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 1292,
                          "end": 1298
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 1299,
                    "end": 1305,
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 1301,
                      "end": 1305
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
            "type": "ExportNamedDeclaration",
            "start": 1318,
            "end": 1360,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 1325,
              "end": 1360,
              "id": {
                "type": "Identifier",
                "start": 1335,
                "end": 1352,
                "name": "exportedInterface",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
              "typeParameters": null,
              "body": {
                "type": "TSInterfaceBody",
                "start": 1353,
                "end": 1360,
                "body": []
              },
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "type"
          },
          {
            "type": "ClassDeclaration",
            "start": 1366,
            "end": 1417,
            "id": {
              "type": "Identifier",
              "start": 1372,
              "end": 1377,
              "name": "dummy",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 1410,
              "end": 1417,
              "body": []
            },
            "decorators": [],
            "typeParameters": null,
            "implements": [
              {
                "type": "TSClassImplements",
                "start": 1389,
                "end": 1409,
                "expression": {
                  "type": "Identifier",
                  "start": 1389,
                  "end": 1409,
                  "name": "usedLocallyInterface",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 1423,
            "end": 1456,
            "id": {
              "type": "Identifier",
              "start": 1433,
              "end": 1448,
              "name": "unusedInterface",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 1449,
              "end": 1456,
              "body": []
            },
            "declare": false
          }
        ]
      },
      "kind": "namespace",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 1461,
      "end": 1848,
      "id": {
        "type": "Identifier",
        "start": 1471,
        "end": 1478,
        "name": "Greeter",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 1479,
        "end": 1848,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 1485,
            "end": 1505,
            "id": {
              "type": "Identifier",
              "start": 1491,
              "end": 1497,
              "name": "class1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 1498,
              "end": 1505,
              "body": []
            },
            "decorators": [],
            "typeParameters": null,
            "implements": [],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 1511,
            "end": 1553,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 1518,
              "end": 1553,
              "id": {
                "type": "Identifier",
                "start": 1524,
                "end": 1530,
                "name": "class2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": {
                "type": "Identifier",
                "start": 1539,
                "end": 1545,
                "name": "class1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "body": {
                "type": "ClassBody",
                "start": 1546,
                "end": 1553,
                "body": []
              },
              "decorators": [],
              "typeParameters": null,
              "implements": [],
              "abstract": false,
              "declare": false,
              "superTypeArguments": null
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ClassDeclaration",
            "start": 1559,
            "end": 1579,
            "id": {
              "type": "Identifier",
              "start": 1565,
              "end": 1571,
              "name": "class3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 1572,
              "end": 1579,
              "body": []
            },
            "decorators": [],
            "typeParameters": null,
            "implements": [],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 1585,
            "end": 1612,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 1592,
              "end": 1612,
              "id": {
                "type": "Identifier",
                "start": 1598,
                "end": 1604,
                "name": "class4",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 1605,
                "end": 1612,
                "body": []
              },
              "decorators": [],
              "typeParameters": null,
              "implements": [],
              "abstract": false,
              "declare": false,
              "superTypeArguments": null
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 1618,
            "end": 1646,
            "id": {
              "type": "Identifier",
              "start": 1628,
              "end": 1638,
              "name": "interface1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 1639,
              "end": 1646,
              "body": []
            },
            "declare": false
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 1652,
            "end": 1706,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 1659,
              "end": 1706,
              "id": {
                "type": "Identifier",
                "start": 1669,
                "end": 1679,
                "name": "interface2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [
                {
                  "type": "TSInterfaceHeritage",
                  "start": 1688,
                  "end": 1698,
                  "expression": {
                    "type": "Identifier",
                    "start": 1688,
                    "end": 1698,
                    "name": "interface1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ],
              "typeParameters": null,
              "body": {
                "type": "TSInterfaceBody",
                "start": 1699,
                "end": 1706,
                "body": []
              },
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "type"
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 1712,
            "end": 1740,
            "id": {
              "type": "Identifier",
              "start": 1722,
              "end": 1732,
              "name": "interface3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 1733,
              "end": 1740,
              "body": []
            },
            "declare": false
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 1746,
            "end": 1781,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 1753,
              "end": 1781,
              "id": {
                "type": "Identifier",
                "start": 1763,
                "end": 1773,
                "name": "interface4",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
              "typeParameters": null,
              "body": {
                "type": "TSInterfaceBody",
                "start": 1774,
                "end": 1781,
                "body": []
              },
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "type"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 1787,
            "end": 1812,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 1794,
              "end": 1812,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 1798,
                  "end": 1811,
                  "id": {
                    "type": "Identifier",
                    "start": 1798,
                    "end": 1811,
                    "name": "a",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1799,
                      "end": 1811,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1801,
                        "end": 1811,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1801,
                          "end": 1811,
                          "name": "interface3",
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
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 1818,
            "end": 1846,
            "id": {
              "type": "Identifier",
              "start": 1828,
              "end": 1838,
              "name": "interface5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 1839,
              "end": 1846,
              "body": []
            },
            "declare": false
          }
        ]
      },
      "kind": "namespace",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
