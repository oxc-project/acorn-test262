__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Component",
        "optional": false,
        "typeAnnotation": null,
        "start": 14,
        "end": 23
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 24,
              "end": 25
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 24,
            "end": 25
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 27,
              "end": 28
            },
            "constraint": null,
            "default": {
              "type": "TSTypeLiteral",
              "members": [],
              "start": 31,
              "end": 33
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 27,
            "end": 33
          }
        ],
        "start": 23,
        "end": 34
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
              "name": "props",
              "optional": false,
              "typeAnnotation": null,
              "start": 50,
              "end": 55
            },
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
                      "name": "Readonly",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 57,
                      "end": 65
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
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
                                "name": "children",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 68,
                                "end": 76
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSUnknownKeyword",
                                  "start": 79,
                                  "end": 86
                                },
                                "start": 77,
                                "end": 86
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 68,
                              "end": 86
                            }
                          ],
                          "start": 66,
                          "end": 88
                        }
                      ],
                      "start": 65,
                      "end": 89
                    },
                    "start": 57,
                    "end": 89
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Readonly",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 92,
                      "end": 100
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "P",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 101,
                            "end": 102
                          },
                          "typeArguments": null,
                          "start": 101,
                          "end": 102
                        }
                      ],
                      "start": 100,
                      "end": 103
                    },
                    "start": 92,
                    "end": 103
                  }
                ],
                "start": 57,
                "end": 103
              },
              "start": 55,
              "end": 103
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": true,
            "accessibility": null,
            "start": 41,
            "end": 104
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "state",
              "optional": false,
              "typeAnnotation": null,
              "start": 109,
              "end": 114
            },
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
                  "start": 116,
                  "end": 124
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "S",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 125,
                        "end": 126
                      },
                      "typeArguments": null,
                      "start": 125,
                      "end": 126
                    }
                  ],
                  "start": 124,
                  "end": 127
                },
                "start": 116,
                "end": 127
              },
              "start": 114,
              "end": 127
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
            "start": 109,
            "end": 128
          }
        ],
        "start": 35,
        "end": 130
      },
      "abstract": false,
      "declare": true,
      "start": 0,
      "end": 130
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "CoachMarkAnchorProps",
        "optional": false,
        "typeAnnotation": null,
        "start": 141,
        "end": 161
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 162,
              "end": 163
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 162,
            "end": 163
          }
        ],
        "start": 161,
        "end": 164
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "anchorRef",
              "optional": false,
              "typeAnnotation": null,
              "start": 171,
              "end": 180
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "anchor",
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
                          "start": 192,
                          "end": 193
                        },
                        "typeArguments": null,
                        "start": 192,
                        "end": 193
                      },
                      "start": 190,
                      "end": 193
                    },
                    "start": 184,
                    "end": 193
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 198,
                    "end": 202
                  },
                  "start": 195,
                  "end": 202
                },
                "start": 183,
                "end": 202
              },
              "start": 181,
              "end": 202
            },
            "accessibility": null,
            "static": false,
            "start": 171,
            "end": 203
          }
        ],
        "start": 165,
        "end": 205
      },
      "declare": false,
      "start": 131,
      "end": 205
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AnchorType",
        "optional": false,
        "typeAnnotation": null,
        "start": 211,
        "end": 221
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 222,
              "end": 223
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 222,
            "end": 223
          }
        ],
        "start": 221,
        "end": 224
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Component",
          "optional": false,
          "typeAnnotation": null,
          "start": 227,
          "end": 236
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 237,
                "end": 238
              },
              "typeArguments": null,
              "start": 237,
              "end": 238
            }
          ],
          "start": 236,
          "end": 239
        },
        "start": 227,
        "end": 239
      },
      "declare": false,
      "start": 206,
      "end": 240
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "CoachMarkAnchorDecorator",
        "optional": false,
        "typeAnnotation": null,
        "start": 248,
        "end": 272
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "decorateComponent",
              "optional": false,
              "typeAnnotation": null,
              "start": 279,
              "end": 296
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "P",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 297,
                      "end": 298
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 297,
                    "end": 298
                  }
                ],
                "start": 296,
                "end": 299
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "anchor",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "P",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 308,
                        "end": 309
                      },
                      "typeArguments": null,
                      "start": 308,
                      "end": 309
                    },
                    "start": 306,
                    "end": 309
                  },
                  "start": 300,
                  "end": 309
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "ClassExpression",
                      "decorators": [],
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "CoachMarkAnchor",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 334,
                        "end": 349
                      },
                      "typeParameters": null,
                      "superClass": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Component",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 358,
                        "end": 367
                      },
                      "superTypeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSIntersectionType",
                            "types": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "CoachMarkAnchorProps",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 368,
                                  "end": 388
                                },
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "params": [
                                    {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "AnchorType",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 389,
                                        "end": 399
                                      },
                                      "typeArguments": {
                                        "type": "TSTypeParameterInstantiation",
                                        "params": [
                                          {
                                            "type": "TSTypeReference",
                                            "typeName": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "P",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 400,
                                              "end": 401
                                            },
                                            "typeArguments": null,
                                            "start": 400,
                                            "end": 401
                                          }
                                        ],
                                        "start": 399,
                                        "end": 402
                                      },
                                      "start": 389,
                                      "end": 402
                                    }
                                  ],
                                  "start": 388,
                                  "end": 403
                                },
                                "start": 368,
                                "end": 403
                              },
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "P",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 406,
                                  "end": 407
                                },
                                "typeArguments": null,
                                "start": 406,
                                "end": 407
                              }
                            ],
                            "start": 368,
                            "end": 407
                          },
                          {
                            "type": "TSTypeLiteral",
                            "members": [],
                            "start": 409,
                            "end": 411
                          }
                        ],
                        "start": 367,
                        "end": 412
                      },
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
                              "name": "_onAnchorRef",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 435,
                              "end": 447
                            },
                            "typeAnnotation": null,
                            "value": {
                              "type": "ArrowFunctionExpression",
                              "expression": false,
                              "async": false,
                              "typeParameters": null,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "anchor",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "AnchorType",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 459,
                                        "end": 469
                                      },
                                      "typeArguments": {
                                        "type": "TSTypeParameterInstantiation",
                                        "params": [
                                          {
                                            "type": "TSTypeReference",
                                            "typeName": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "P",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 470,
                                              "end": 471
                                            },
                                            "typeArguments": null,
                                            "start": 470,
                                            "end": 471
                                          }
                                        ],
                                        "start": 469,
                                        "end": 472
                                      },
                                      "start": 459,
                                      "end": 472
                                    },
                                    "start": 457,
                                    "end": 472
                                  },
                                  "start": 451,
                                  "end": 472
                                }
                              ],
                              "returnType": null,
                              "body": {
                                "type": "BlockStatement",
                                "body": [
                                  {
                                    "type": "VariableDeclaration",
                                    "kind": "const",
                                    "declarations": [
                                      {
                                        "type": "VariableDeclarator",
                                        "id": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "anchorRef",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 501,
                                          "end": 510
                                        },
                                        "init": {
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "MemberExpression",
                                            "object": {
                                              "type": "ThisExpression",
                                              "start": 513,
                                              "end": 517
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "props",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 518,
                                              "end": 523
                                            },
                                            "optional": false,
                                            "computed": false,
                                            "start": 513,
                                            "end": 523
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "anchorRef",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 524,
                                            "end": 533
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 513,
                                          "end": 533
                                        },
                                        "definite": false,
                                        "start": 501,
                                        "end": 533
                                      }
                                    ],
                                    "declare": false,
                                    "start": 495,
                                    "end": 534
                                  },
                                  {
                                    "type": "IfStatement",
                                    "test": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "anchorRef",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 555,
                                      "end": 564
                                    },
                                    "consequent": {
                                      "type": "BlockStatement",
                                      "body": [
                                        {
                                          "type": "ExpressionStatement",
                                          "expression": {
                                            "type": "CallExpression",
                                            "callee": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "anchorRef",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 588,
                                              "end": 597
                                            },
                                            "typeArguments": null,
                                            "arguments": [
                                              {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "anchor",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 598,
                                                "end": 604
                                              }
                                            ],
                                            "optional": false,
                                            "start": 588,
                                            "end": 605
                                          },
                                          "directive": null,
                                          "start": 588,
                                          "end": 606
                                        }
                                      ],
                                      "start": 566,
                                      "end": 624
                                    },
                                    "alternate": null,
                                    "start": 551,
                                    "end": 624
                                  }
                                ],
                                "start": 477,
                                "end": 638
                              },
                              "id": null,
                              "generator": false,
                              "start": 450,
                              "end": 638
                            },
                            "computed": false,
                            "static": false,
                            "declare": false,
                            "override": false,
                            "optional": false,
                            "definite": false,
                            "readonly": false,
                            "accessibility": "private",
                            "start": 427,
                            "end": 638
                          }
                        ],
                        "start": 413,
                        "end": 648
                      },
                      "abstract": false,
                      "declare": false,
                      "start": 328,
                      "end": 648
                    },
                    "start": 321,
                    "end": 649
                  }
                ],
                "start": 311,
                "end": 655
              },
              "expression": false,
              "start": 296,
              "end": 655
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 279,
            "end": 655
          }
        ],
        "start": 273,
        "end": 657
      },
      "abstract": false,
      "declare": false,
      "start": 242,
      "end": 657
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 657
}
```
