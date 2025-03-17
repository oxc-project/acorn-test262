__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 658,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 130,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 35,
        "end": 130,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 41,
            "end": 104,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 50,
              "end": 55,
              "decorators": [],
              "name": "props",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": true,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 55,
              "end": 103,
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 57,
                "end": 103,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 57,
                    "end": 89,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 65,
                      "end": 89,
                      "params": [
                        {
                          "type": "TSTypeLiteral",
                          "start": 66,
                          "end": 88,
                          "members": [
                            {
                              "type": "TSPropertySignature",
                              "start": 68,
                              "end": 86,
                              "accessibility": null,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 68,
                                "end": 76,
                                "decorators": [],
                                "name": "children",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": true,
                              "readonly": false,
                              "static": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 77,
                                "end": 86,
                                "typeAnnotation": {
                                  "type": "TSUnknownKeyword",
                                  "start": 79,
                                  "end": 86
                                }
                              }
                            }
                          ]
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 57,
                      "end": 65,
                      "decorators": [],
                      "name": "Readonly",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 92,
                    "end": 103,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 100,
                      "end": 103,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 101,
                          "end": 102,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 101,
                            "end": 102,
                            "decorators": [],
                            "name": "P",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 92,
                      "end": 100,
                      "decorators": [],
                      "name": "Readonly",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 109,
            "end": 128,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 109,
              "end": 114,
              "decorators": [],
              "name": "state",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 114,
              "end": 127,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 116,
                "end": 127,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 124,
                  "end": 127,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 125,
                      "end": 126,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 125,
                        "end": 126,
                        "decorators": [],
                        "name": "S",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 116,
                  "end": 124,
                  "decorators": [],
                  "name": "Readonly",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "value": null
          }
        ]
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 14,
        "end": 23,
        "decorators": [],
        "name": "Component",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 23,
        "end": 34,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 24,
            "end": 25,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 24,
              "end": 25,
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 27,
            "end": 33,
            "const": false,
            "constraint": null,
            "default": {
              "type": "TSTypeLiteral",
              "start": 31,
              "end": 33,
              "members": []
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 27,
              "end": 28,
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 131,
      "end": 205,
      "body": {
        "type": "TSInterfaceBody",
        "start": 165,
        "end": 205,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 171,
            "end": 203,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 171,
              "end": 180,
              "decorators": [],
              "name": "anchorRef",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 181,
              "end": 202,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 183,
                "end": 202,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 184,
                    "end": 193,
                    "decorators": [],
                    "name": "anchor",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 190,
                      "end": 193,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 192,
                        "end": 193,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 192,
                          "end": 193,
                          "decorators": [],
                          "name": "C",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 195,
                  "end": 202,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 198,
                    "end": 202
                  }
                },
                "typeParameters": null
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 141,
        "end": 161,
        "decorators": [],
        "name": "CoachMarkAnchorProps",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 161,
        "end": 164,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 162,
            "end": 163,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 162,
              "end": 163,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 206,
      "end": 240,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 211,
        "end": 221,
        "decorators": [],
        "name": "AnchorType",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 227,
        "end": 239,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 236,
          "end": 239,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 237,
              "end": 238,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 237,
                "end": 238,
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 227,
          "end": 236,
          "decorators": [],
          "name": "Component",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 221,
        "end": 224,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 222,
            "end": 223,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 222,
              "end": 223,
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 242,
      "end": 657,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 273,
        "end": 657,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 279,
            "end": 655,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 279,
              "end": 296,
              "decorators": [],
              "name": "decorateComponent",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 296,
              "end": 655,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 311,
                "end": 655,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 321,
                    "end": 649,
                    "argument": {
                      "type": "ClassExpression",
                      "start": 328,
                      "end": 648,
                      "abstract": false,
                      "body": {
                        "type": "ClassBody",
                        "start": 413,
                        "end": 648,
                        "body": [
                          {
                            "type": "PropertyDefinition",
                            "start": 427,
                            "end": 638,
                            "accessibility": "private",
                            "computed": false,
                            "declare": false,
                            "decorators": [],
                            "definite": false,
                            "key": {
                              "type": "Identifier",
                              "start": 435,
                              "end": 447,
                              "decorators": [],
                              "name": "_onAnchorRef",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "override": false,
                            "readonly": false,
                            "static": false,
                            "typeAnnotation": null,
                            "value": {
                              "type": "ArrowFunctionExpression",
                              "start": 450,
                              "end": 638,
                              "async": false,
                              "body": {
                                "type": "BlockStatement",
                                "start": 477,
                                "end": 638,
                                "body": [
                                  {
                                    "type": "VariableDeclaration",
                                    "start": 495,
                                    "end": 534,
                                    "declarations": [
                                      {
                                        "type": "VariableDeclarator",
                                        "start": 501,
                                        "end": 533,
                                        "definite": false,
                                        "id": {
                                          "type": "Identifier",
                                          "start": 501,
                                          "end": 510,
                                          "decorators": [],
                                          "name": "anchorRef",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "init": {
                                          "type": "MemberExpression",
                                          "start": 513,
                                          "end": 533,
                                          "computed": false,
                                          "object": {
                                            "type": "MemberExpression",
                                            "start": 513,
                                            "end": 523,
                                            "computed": false,
                                            "object": {
                                              "type": "ThisExpression",
                                              "start": 513,
                                              "end": 517
                                            },
                                            "optional": false,
                                            "property": {
                                              "type": "Identifier",
                                              "start": 518,
                                              "end": 523,
                                              "decorators": [],
                                              "name": "props",
                                              "optional": false,
                                              "typeAnnotation": null
                                            }
                                          },
                                          "optional": false,
                                          "property": {
                                            "type": "Identifier",
                                            "start": 524,
                                            "end": 533,
                                            "decorators": [],
                                            "name": "anchorRef",
                                            "optional": false,
                                            "typeAnnotation": null
                                          }
                                        }
                                      }
                                    ],
                                    "declare": false,
                                    "kind": "const"
                                  },
                                  {
                                    "type": "IfStatement",
                                    "start": 551,
                                    "end": 624,
                                    "alternate": null,
                                    "consequent": {
                                      "type": "BlockStatement",
                                      "start": 566,
                                      "end": 624,
                                      "body": [
                                        {
                                          "type": "ExpressionStatement",
                                          "start": 588,
                                          "end": 606,
                                          "directive": null,
                                          "expression": {
                                            "type": "CallExpression",
                                            "start": 588,
                                            "end": 605,
                                            "arguments": [
                                              {
                                                "type": "Identifier",
                                                "start": 598,
                                                "end": 604,
                                                "decorators": [],
                                                "name": "anchor",
                                                "optional": false,
                                                "typeAnnotation": null
                                              }
                                            ],
                                            "callee": {
                                              "type": "Identifier",
                                              "start": 588,
                                              "end": 597,
                                              "decorators": [],
                                              "name": "anchorRef",
                                              "optional": false,
                                              "typeAnnotation": null
                                            },
                                            "optional": false,
                                            "typeArguments": null
                                          }
                                        }
                                      ]
                                    },
                                    "test": {
                                      "type": "Identifier",
                                      "start": 555,
                                      "end": 564,
                                      "decorators": [],
                                      "name": "anchorRef",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  }
                                ]
                              },
                              "expression": false,
                              "generator": false,
                              "id": null,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "start": 451,
                                  "end": 472,
                                  "decorators": [],
                                  "name": "anchor",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 457,
                                    "end": 472,
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "start": 459,
                                      "end": 472,
                                      "typeArguments": {
                                        "type": "TSTypeParameterInstantiation",
                                        "start": 469,
                                        "end": 472,
                                        "params": [
                                          {
                                            "type": "TSTypeReference",
                                            "start": 470,
                                            "end": 471,
                                            "typeArguments": null,
                                            "typeName": {
                                              "type": "Identifier",
                                              "start": 470,
                                              "end": 471,
                                              "decorators": [],
                                              "name": "P",
                                              "optional": false,
                                              "typeAnnotation": null
                                            }
                                          }
                                        ]
                                      },
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 459,
                                        "end": 469,
                                        "decorators": [],
                                        "name": "AnchorType",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    }
                                  }
                                }
                              ],
                              "returnType": null,
                              "typeParameters": null
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "decorators": [],
                      "id": {
                        "type": "Identifier",
                        "start": 334,
                        "end": 349,
                        "decorators": [],
                        "name": "CoachMarkAnchor",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "implements": [],
                      "superClass": {
                        "type": "Identifier",
                        "start": 358,
                        "end": 367,
                        "decorators": [],
                        "name": "Component",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "superTypeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 367,
                        "end": 412,
                        "params": [
                          {
                            "type": "TSIntersectionType",
                            "start": 368,
                            "end": 407,
                            "types": [
                              {
                                "type": "TSTypeReference",
                                "start": 368,
                                "end": 403,
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "start": 388,
                                  "end": 403,
                                  "params": [
                                    {
                                      "type": "TSTypeReference",
                                      "start": 389,
                                      "end": 402,
                                      "typeArguments": {
                                        "type": "TSTypeParameterInstantiation",
                                        "start": 399,
                                        "end": 402,
                                        "params": [
                                          {
                                            "type": "TSTypeReference",
                                            "start": 400,
                                            "end": 401,
                                            "typeArguments": null,
                                            "typeName": {
                                              "type": "Identifier",
                                              "start": 400,
                                              "end": 401,
                                              "decorators": [],
                                              "name": "P",
                                              "optional": false,
                                              "typeAnnotation": null
                                            }
                                          }
                                        ]
                                      },
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 389,
                                        "end": 399,
                                        "decorators": [],
                                        "name": "AnchorType",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    }
                                  ]
                                },
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 368,
                                  "end": 388,
                                  "decorators": [],
                                  "name": "CoachMarkAnchorProps",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              {
                                "type": "TSTypeReference",
                                "start": 406,
                                "end": 407,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 406,
                                  "end": 407,
                                  "decorators": [],
                                  "name": "P",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            ]
                          },
                          {
                            "type": "TSTypeLiteral",
                            "start": 409,
                            "end": 411,
                            "members": []
                          }
                        ]
                      },
                      "typeParameters": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 300,
                  "end": 309,
                  "decorators": [],
                  "name": "anchor",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 306,
                    "end": 309,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 308,
                      "end": 309,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 308,
                        "end": 309,
                        "decorators": [],
                        "name": "P",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 296,
                "end": 299,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 297,
                    "end": 298,
                    "const": false,
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 297,
                      "end": 298,
                      "decorators": [],
                      "name": "P",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "out": false
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 248,
        "end": 272,
        "decorators": [],
        "name": "CoachMarkAnchorDecorator",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
