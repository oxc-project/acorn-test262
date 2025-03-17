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
      "id": {
        "type": "Identifier",
        "start": 14,
        "end": 23,
        "name": "Component",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 35,
        "end": 130,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 41,
            "end": 104,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 50,
              "end": 55,
              "name": "props",
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
            "readonly": true,
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
                    "typeName": {
                      "type": "Identifier",
                      "start": 57,
                      "end": 65,
                      "name": "Readonly",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
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
                              "computed": false,
                              "optional": true,
                              "readonly": false,
                              "key": {
                                "type": "Identifier",
                                "start": 68,
                                "end": 76,
                                "name": "children",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 77,
                                "end": 86,
                                "typeAnnotation": {
                                  "type": "TSUnknownKeyword",
                                  "start": 79,
                                  "end": 86
                                }
                              },
                              "accessibility": null,
                              "static": false
                            }
                          ]
                        }
                      ]
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 92,
                    "end": 103,
                    "typeName": {
                      "type": "Identifier",
                      "start": 92,
                      "end": 100,
                      "name": "Readonly",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 100,
                      "end": 103,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 101,
                          "end": 102,
                          "typeName": {
                            "type": "Identifier",
                            "start": 101,
                            "end": 102,
                            "name": "P",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      ]
                    }
                  }
                ]
              }
            },
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 109,
            "end": 128,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 109,
              "end": 114,
              "name": "state",
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
              "start": 114,
              "end": 127,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 116,
                "end": 127,
                "typeName": {
                  "type": "Identifier",
                  "start": 116,
                  "end": 124,
                  "name": "Readonly",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 124,
                  "end": 127,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 125,
                      "end": 126,
                      "typeName": {
                        "type": "Identifier",
                        "start": 125,
                        "end": 126,
                        "name": "S",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            },
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 23,
        "end": 34,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 24,
            "end": 25,
            "name": {
              "type": "Identifier",
              "start": 24,
              "end": 25,
              "name": "P",
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
            "start": 27,
            "end": 33,
            "name": {
              "type": "Identifier",
              "start": 27,
              "end": 28,
              "name": "S",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": {
              "type": "TSTypeLiteral",
              "start": 31,
              "end": 33,
              "members": []
            },
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "implements": [],
      "abstract": false,
      "declare": true,
      "superTypeArguments": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 131,
      "end": 205,
      "id": {
        "type": "Identifier",
        "start": 141,
        "end": 161,
        "name": "CoachMarkAnchorProps",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 161,
        "end": 164,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 162,
            "end": 163,
            "name": {
              "type": "Identifier",
              "start": 162,
              "end": 163,
              "name": "C",
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
      "body": {
        "type": "TSInterfaceBody",
        "start": 165,
        "end": 205,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 171,
            "end": 203,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 171,
              "end": 180,
              "name": "anchorRef",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 181,
              "end": 202,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 183,
                "end": 202,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 184,
                    "end": 193,
                    "name": "anchor",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 190,
                      "end": 193,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 192,
                        "end": 193,
                        "typeName": {
                          "type": "Identifier",
                          "start": 192,
                          "end": 193,
                          "name": "C",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "decorators": [],
                    "optional": false
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
                }
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 206,
      "end": 240,
      "id": {
        "type": "Identifier",
        "start": 211,
        "end": 221,
        "name": "AnchorType",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 222,
              "end": 223,
              "name": "P",
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
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 227,
        "end": 239,
        "typeName": {
          "type": "Identifier",
          "start": 227,
          "end": 236,
          "name": "Component",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 236,
          "end": 239,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 237,
              "end": 238,
              "typeName": {
                "type": "Identifier",
                "start": 237,
                "end": 238,
                "name": "P",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 242,
      "end": 657,
      "id": {
        "type": "Identifier",
        "start": 248,
        "end": 272,
        "name": "CoachMarkAnchorDecorator",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 273,
        "end": 657,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 279,
            "end": 655,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 279,
              "end": 296,
              "name": "decorateComponent",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 296,
              "end": 655,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 300,
                  "end": 309,
                  "name": "anchor",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 306,
                    "end": 309,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 308,
                      "end": 309,
                      "typeName": {
                        "type": "Identifier",
                        "start": 308,
                        "end": 309,
                        "name": "P",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
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
                      "id": {
                        "type": "Identifier",
                        "start": 334,
                        "end": 349,
                        "name": "CoachMarkAnchor",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "superClass": {
                        "type": "Identifier",
                        "start": 358,
                        "end": 367,
                        "name": "Component",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "body": {
                        "type": "ClassBody",
                        "start": 413,
                        "end": 648,
                        "body": [
                          {
                            "type": "PropertyDefinition",
                            "start": 427,
                            "end": 638,
                            "static": false,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 435,
                              "end": 447,
                              "name": "_onAnchorRef",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "value": {
                              "type": "ArrowFunctionExpression",
                              "start": 450,
                              "end": 638,
                              "id": null,
                              "expression": false,
                              "generator": false,
                              "async": false,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "start": 451,
                                  "end": 472,
                                  "name": "anchor",
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 457,
                                    "end": 472,
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "start": 459,
                                      "end": 472,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 459,
                                        "end": 469,
                                        "name": "AnchorType",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "typeArguments": {
                                        "type": "TSTypeParameterInstantiation",
                                        "start": 469,
                                        "end": 472,
                                        "params": [
                                          {
                                            "type": "TSTypeReference",
                                            "start": 470,
                                            "end": 471,
                                            "typeName": {
                                              "type": "Identifier",
                                              "start": 470,
                                              "end": 471,
                                              "name": "P",
                                              "typeAnnotation": null,
                                              "decorators": [],
                                              "optional": false
                                            },
                                            "typeArguments": null
                                          }
                                        ]
                                      }
                                    }
                                  },
                                  "decorators": [],
                                  "optional": false
                                }
                              ],
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
                                        "id": {
                                          "type": "Identifier",
                                          "start": 501,
                                          "end": 510,
                                          "name": "anchorRef",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "init": {
                                          "type": "MemberExpression",
                                          "start": 513,
                                          "end": 533,
                                          "object": {
                                            "type": "MemberExpression",
                                            "start": 513,
                                            "end": 523,
                                            "object": {
                                              "type": "ThisExpression",
                                              "start": 513,
                                              "end": 517
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "start": 518,
                                              "end": 523,
                                              "name": "props",
                                              "typeAnnotation": null,
                                              "decorators": [],
                                              "optional": false
                                            },
                                            "computed": false,
                                            "optional": false
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "start": 524,
                                            "end": 533,
                                            "name": "anchorRef",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          },
                                          "computed": false,
                                          "optional": false
                                        },
                                        "definite": false
                                      }
                                    ],
                                    "kind": "const",
                                    "declare": false
                                  },
                                  {
                                    "type": "IfStatement",
                                    "start": 551,
                                    "end": 624,
                                    "test": {
                                      "type": "Identifier",
                                      "start": 555,
                                      "end": 564,
                                      "name": "anchorRef",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "consequent": {
                                      "type": "BlockStatement",
                                      "start": 566,
                                      "end": 624,
                                      "body": [
                                        {
                                          "type": "ExpressionStatement",
                                          "start": 588,
                                          "end": 606,
                                          "expression": {
                                            "type": "CallExpression",
                                            "start": 588,
                                            "end": 605,
                                            "callee": {
                                              "type": "Identifier",
                                              "start": 588,
                                              "end": 597,
                                              "name": "anchorRef",
                                              "typeAnnotation": null,
                                              "decorators": [],
                                              "optional": false
                                            },
                                            "arguments": [
                                              {
                                                "type": "Identifier",
                                                "start": 598,
                                                "end": 604,
                                                "name": "anchor",
                                                "typeAnnotation": null,
                                                "decorators": [],
                                                "optional": false
                                              }
                                            ],
                                            "optional": false,
                                            "typeArguments": null
                                          },
                                          "directive": null
                                        }
                                      ]
                                    },
                                    "alternate": null
                                  }
                                ]
                              },
                              "typeParameters": null,
                              "returnType": null
                            },
                            "decorators": [],
                            "declare": false,
                            "override": false,
                            "optional": false,
                            "definite": false,
                            "readonly": false,
                            "typeAnnotation": null,
                            "accessibility": "private"
                          }
                        ]
                      },
                      "decorators": [],
                      "typeParameters": null,
                      "implements": [],
                      "abstract": false,
                      "declare": false,
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
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 368,
                                  "end": 388,
                                  "name": "CoachMarkAnchorProps",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "start": 388,
                                  "end": 403,
                                  "params": [
                                    {
                                      "type": "TSTypeReference",
                                      "start": 389,
                                      "end": 402,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 389,
                                        "end": 399,
                                        "name": "AnchorType",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "typeArguments": {
                                        "type": "TSTypeParameterInstantiation",
                                        "start": 399,
                                        "end": 402,
                                        "params": [
                                          {
                                            "type": "TSTypeReference",
                                            "start": 400,
                                            "end": 401,
                                            "typeName": {
                                              "type": "Identifier",
                                              "start": 400,
                                              "end": 401,
                                              "name": "P",
                                              "typeAnnotation": null,
                                              "decorators": [],
                                              "optional": false
                                            },
                                            "typeArguments": null
                                          }
                                        ]
                                      }
                                    }
                                  ]
                                }
                              },
                              {
                                "type": "TSTypeReference",
                                "start": 406,
                                "end": 407,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 406,
                                  "end": 407,
                                  "name": "P",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
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
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 296,
                "end": 299,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 297,
                    "end": 298,
                    "name": {
                      "type": "Identifier",
                      "start": 297,
                      "end": 298,
                      "name": "P",
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
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
