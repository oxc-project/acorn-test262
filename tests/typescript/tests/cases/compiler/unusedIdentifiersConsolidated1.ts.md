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
        "decorators": [],
        "name": "greeter",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 17,
          "end": 31,
          "decorators": [],
          "name": "person",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 23,
            "end": 31,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 25,
              "end": 31
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 33,
        "end": 57,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 39,
            "end": 55,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 43,
                "end": 54,
                "id": {
                  "type": "Identifier",
                  "start": 43,
                  "end": 49,
                  "decorators": [],
                  "name": "unused",
                  "optional": false,
                  "typeAnnotation": null
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
            "declare": false
          }
        ]
      },
      "expression": false
    },
    {
      "type": "ClassDeclaration",
      "start": 59,
      "end": 575,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 65,
        "end": 70,
        "decorators": [],
        "name": "Dummy",
        "optional": false,
        "typeAnnotation": null
      },
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
              "decorators": [],
              "name": "usedtypeparameter",
              "optional": false,
              "typeAnnotation": null
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
              "decorators": [],
              "name": "unusedtypeparameter",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 111,
        "end": 575,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 117,
            "end": 155,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 125,
              "end": 146,
              "decorators": [],
              "name": "unusedprivatevariable",
              "optional": false,
              "typeAnnotation": null
            },
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
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private"
          },
          {
            "type": "PropertyDefinition",
            "start": 160,
            "end": 185,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 168,
              "end": 176,
              "decorators": [],
              "name": "greeting",
              "optional": false,
              "typeAnnotation": null
            },
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
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private"
          },
          {
            "type": "PropertyDefinition",
            "start": 190,
            "end": 226,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 197,
              "end": 217,
              "decorators": [],
              "name": "unusedpublicvariable",
              "optional": false,
              "typeAnnotation": null
            },
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
            "type": "PropertyDefinition",
            "start": 231,
            "end": 271,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 238,
              "end": 251,
              "decorators": [],
              "name": "typedvariable",
              "optional": false,
              "typeAnnotation": null
            },
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
                  "decorators": [],
                  "name": "usedtypeparameter",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
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
            "start": 277,
            "end": 380,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 277,
              "end": 288,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 288,
              "end": 380,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 289,
                  "end": 304,
                  "decorators": [],
                  "name": "message",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 296,
                    "end": 304,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 298,
                      "end": 304
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 306,
                "end": 380,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 316,
                    "end": 333,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 320,
                        "end": 332,
                        "id": {
                          "type": "Identifier",
                          "start": 320,
                          "end": 327,
                          "decorators": [],
                          "name": "unused2",
                          "optional": false,
                          "typeAnnotation": null
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
                          "decorators": [],
                          "name": "greeting",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
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
            "start": 386,
            "end": 485,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 393,
              "end": 400,
              "decorators": [],
              "name": "greeter",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 400,
              "end": 485,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 401,
                  "end": 415,
                  "decorators": [],
                  "name": "person",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 407,
                    "end": 415,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 409,
                      "end": 415
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 417,
                "end": 485,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 427,
                    "end": 443,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 431,
                        "end": 442,
                        "id": {
                          "type": "Identifier",
                          "start": 431,
                          "end": 437,
                          "decorators": [],
                          "name": "unused",
                          "optional": false,
                          "typeAnnotation": null
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
                          "decorators": [],
                          "name": "usedPrivateFunction",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    },
                    "directive": null
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
          },
          {
            "type": "MethodDefinition",
            "start": 491,
            "end": 528,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 499,
              "end": 518,
              "decorators": [],
              "name": "usedPrivateFunction",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 518,
              "end": 528,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 521,
                "end": 528,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 534,
            "end": 573,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 542,
              "end": 563,
              "decorators": [],
              "name": "unUsedPrivateFunction",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 563,
              "end": 573,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 566,
                "end": 573,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private"
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 577,
      "end": 600,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 581,
          "end": 599,
          "id": {
            "type": "Identifier",
            "start": 581,
            "end": 585,
            "decorators": [],
            "name": "user",
            "optional": false,
            "typeAnnotation": null
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
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 601,
      "end": 627,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 605,
          "end": 626,
          "id": {
            "type": "Identifier",
            "start": 605,
            "end": 610,
            "decorators": [],
            "name": "user2",
            "optional": false,
            "typeAnnotation": null
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
        "decorators": [],
        "name": "Validation",
        "optional": false,
        "typeAnnotation": null
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
                "decorators": [],
                "name": "StringValidator",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "extends": [],
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
                      "decorators": [],
                      "name": "isAcceptable",
                      "optional": false,
                      "typeAnnotation": null
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
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 713,
                          "end": 721,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 715,
                            "end": 721
                          }
                        }
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
            "exportKind": "type",
            "attributes": []
          },
          {
            "type": "VariableDeclaration",
            "start": 744,
            "end": 780,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 750,
                "end": 779,
                "id": {
                  "type": "Identifier",
                  "start": 750,
                  "end": 763,
                  "decorators": [],
                  "name": "lettersRegexp",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 766,
                  "end": 779,
                  "value": null,
                  "raw": "/^[A-Za-z]+$/",
                  "regex": {
                    "pattern": "^[A-Za-z]+$",
                    "flags": ""
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 785,
            "end": 817,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 791,
                "end": 816,
                "id": {
                  "type": "Identifier",
                  "start": 791,
                  "end": 803,
                  "decorators": [],
                  "name": "numberRegexp",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 806,
                  "end": 816,
                  "value": null,
                  "raw": "/^[0-9]+$/",
                  "regex": {
                    "pattern": "^[0-9]+$",
                    "flags": ""
                  }
                },
                "definite": false
              }
            ],
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
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 836,
                "end": 856,
                "decorators": [],
                "name": "LettersOnlyValidator",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [
                {
                  "type": "TSClassImplements",
                  "start": 868,
                  "end": 883,
                  "expression": {
                    "type": "Identifier",
                    "start": 868,
                    "end": 883,
                    "decorators": [],
                    "name": "StringValidator",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ],
              "body": {
                "type": "ClassBody",
                "start": 884,
                "end": 1032,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 894,
                    "end": 973,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 894,
                      "end": 906,
                      "decorators": [],
                      "name": "isAcceptable",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 906,
                      "end": 973,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 907,
                          "end": 917,
                          "decorators": [],
                          "name": "s2",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 909,
                            "end": 917,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 911,
                              "end": 917
                            }
                          }
                        }
                      ],
                      "returnType": null,
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
                                  "decorators": [],
                                  "name": "lettersRegexp",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 954,
                                  "end": 958,
                                  "decorators": [],
                                  "name": "test",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "start": 959,
                                  "end": 961,
                                  "decorators": [],
                                  "name": "s2",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              ],
                              "optional": false
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
                    "accessibility": null
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 983,
                    "end": 1026,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 991,
                      "end": 1012,
                      "decorators": [],
                      "name": "unUsedPrivateFunction",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 1012,
                      "end": 1026,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "start": 1015,
                        "end": 1026,
                        "body": []
                      },
                      "expression": false
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private"
                  }
                ]
              },
              "abstract": false,
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 1038,
            "end": 1183,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 1045,
              "end": 1183,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 1051,
                "end": 1067,
                "decorators": [],
                "name": "ZipCodeValidator",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [
                {
                  "type": "TSClassImplements",
                  "start": 1079,
                  "end": 1094,
                  "expression": {
                    "type": "Identifier",
                    "start": 1079,
                    "end": 1094,
                    "decorators": [],
                    "name": "StringValidator",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ],
              "body": {
                "type": "ClassBody",
                "start": 1095,
                "end": 1183,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 1105,
                    "end": 1177,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 1105,
                      "end": 1117,
                      "decorators": [],
                      "name": "isAcceptable",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 1117,
                      "end": 1177,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 1118,
                          "end": 1128,
                          "decorators": [],
                          "name": "s3",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1120,
                            "end": 1128,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 1122,
                              "end": 1128
                            }
                          }
                        }
                      ],
                      "returnType": null,
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
                                  "decorators": [],
                                  "name": "s3",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 1154,
                                  "end": 1160,
                                  "decorators": [],
                                  "name": "length",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
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
                      "expression": false
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null
                  }
                ]
              },
              "abstract": false,
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 1189,
            "end": 1227,
            "id": {
              "type": "Identifier",
              "start": 1199,
              "end": 1219,
              "decorators": [],
              "name": "usedLocallyInterface",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "extends": [],
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
              "decorators": [],
              "name": "usedLocallyInterface2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "extends": [],
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
                    "decorators": [],
                    "name": "someFunction",
                    "optional": false,
                    "typeAnnotation": null
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
                      "decorators": [],
                      "name": "s1",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1290,
                        "end": 1298,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 1292,
                          "end": 1298
                        }
                      }
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
                "decorators": [],
                "name": "exportedInterface",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "extends": [],
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
            "exportKind": "type",
            "attributes": []
          },
          {
            "type": "ClassDeclaration",
            "start": 1366,
            "end": 1417,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 1372,
              "end": 1377,
              "decorators": [],
              "name": "dummy",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [
              {
                "type": "TSClassImplements",
                "start": 1389,
                "end": 1409,
                "expression": {
                  "type": "Identifier",
                  "start": 1389,
                  "end": 1409,
                  "decorators": [],
                  "name": "usedLocallyInterface",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ],
            "body": {
              "type": "ClassBody",
              "start": 1410,
              "end": 1417,
              "body": []
            },
            "abstract": false,
            "declare": false
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 1423,
            "end": 1456,
            "id": {
              "type": "Identifier",
              "start": 1433,
              "end": 1448,
              "decorators": [],
              "name": "unusedInterface",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "extends": [],
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
        "decorators": [],
        "name": "Greeter",
        "optional": false,
        "typeAnnotation": null
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
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 1491,
              "end": 1497,
              "decorators": [],
              "name": "class1",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "start": 1498,
              "end": 1505,
              "body": []
            },
            "abstract": false,
            "declare": false
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 1511,
            "end": 1553,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 1518,
              "end": 1553,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 1524,
                "end": 1530,
                "decorators": [],
                "name": "class2",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "superClass": {
                "type": "Identifier",
                "start": 1539,
                "end": 1545,
                "decorators": [],
                "name": "class1",
                "optional": false,
                "typeAnnotation": null
              },
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 1546,
                "end": 1553,
                "body": []
              },
              "abstract": false,
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "ClassDeclaration",
            "start": 1559,
            "end": 1579,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 1565,
              "end": 1571,
              "decorators": [],
              "name": "class3",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "start": 1572,
              "end": 1579,
              "body": []
            },
            "abstract": false,
            "declare": false
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 1585,
            "end": 1612,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 1592,
              "end": 1612,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 1598,
                "end": 1604,
                "decorators": [],
                "name": "class4",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 1605,
                "end": 1612,
                "body": []
              },
              "abstract": false,
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 1618,
            "end": 1646,
            "id": {
              "type": "Identifier",
              "start": 1628,
              "end": 1638,
              "decorators": [],
              "name": "interface1",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "extends": [],
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
                "decorators": [],
                "name": "interface2",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "extends": [
                {
                  "type": "TSInterfaceHeritage",
                  "start": 1688,
                  "end": 1698,
                  "expression": {
                    "type": "Identifier",
                    "start": 1688,
                    "end": 1698,
                    "decorators": [],
                    "name": "interface1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ],
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
            "exportKind": "type",
            "attributes": []
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 1712,
            "end": 1740,
            "id": {
              "type": "Identifier",
              "start": 1722,
              "end": 1732,
              "decorators": [],
              "name": "interface3",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "extends": [],
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
                "decorators": [],
                "name": "interface4",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "extends": [],
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
            "exportKind": "type",
            "attributes": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 1787,
            "end": 1812,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 1794,
              "end": 1812,
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 1798,
                  "end": 1811,
                  "id": {
                    "type": "Identifier",
                    "start": 1798,
                    "end": 1811,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
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
                          "decorators": [],
                          "name": "interface3",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 1818,
            "end": 1846,
            "id": {
              "type": "Identifier",
              "start": 1828,
              "end": 1838,
              "decorators": [],
              "name": "interface5",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "extends": [],
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
