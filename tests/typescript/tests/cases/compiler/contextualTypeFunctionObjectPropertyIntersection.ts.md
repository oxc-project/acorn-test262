__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 2831,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 22,
      "end": 90,
      "id": {
        "type": "Identifier",
        "start": 27,
        "end": 33,
        "decorators": [],
        "name": "Action",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 33,
        "end": 66,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 34,
            "end": 65,
            "name": {
              "type": "Identifier",
              "start": 34,
              "end": 40,
              "decorators": [],
              "name": "TEvent",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 49,
              "end": 65,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 51,
                  "end": 63,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 51,
                    "end": 55,
                    "decorators": [],
                    "name": "type",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 55,
                    "end": 63,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 57,
                      "end": 63
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 69,
        "end": 89,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "start": 70,
            "end": 80,
            "decorators": [],
            "name": "ev",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 72,
              "end": 80,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 74,
                "end": 80,
                "typeName": {
                  "type": "Identifier",
                  "start": 74,
                  "end": 80,
                  "decorators": [],
                  "name": "TEvent",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 82,
          "end": 89,
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 85,
            "end": 89
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 92,
      "end": 318,
      "id": {
        "type": "Identifier",
        "start": 102,
        "end": 115,
        "decorators": [],
        "name": "MachineConfig",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 115,
        "end": 148,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 116,
            "end": 147,
            "name": {
              "type": "Identifier",
              "start": 116,
              "end": 122,
              "decorators": [],
              "name": "TEvent",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 131,
              "end": 147,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 133,
                  "end": 145,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 133,
                    "end": 137,
                    "decorators": [],
                    "name": "type",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 137,
                    "end": 145,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 139,
                      "end": 145
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 149,
        "end": 318,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 153,
            "end": 187,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 153,
              "end": 159,
              "decorators": [],
              "name": "schema",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 159,
              "end": 186,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 161,
                "end": 186,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 167,
                    "end": 182,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 167,
                      "end": 173,
                      "decorators": [],
                      "name": "events",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 173,
                      "end": 181,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 175,
                        "end": 181,
                        "typeName": {
                          "type": "Identifier",
                          "start": 175,
                          "end": 181,
                          "decorators": [],
                          "name": "TEvent",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 190,
            "end": 316,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 190,
              "end": 192,
              "decorators": [],
              "name": "on",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 193,
              "end": 315,
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 195,
                "end": 315,
                "types": [
                  {
                    "type": "TSMappedType",
                    "start": 195,
                    "end": 281,
                    "key": {
                      "type": "Identifier",
                      "start": 202,
                      "end": 203,
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": {
                      "type": "TSIndexedAccessType",
                      "start": 207,
                      "end": 221,
                      "objectType": {
                        "type": "TSTypeReference",
                        "start": 207,
                        "end": 213,
                        "typeName": {
                          "type": "Identifier",
                          "start": 207,
                          "end": 213,
                          "decorators": [],
                          "name": "TEvent",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      },
                      "indexType": {
                        "type": "TSLiteralType",
                        "start": 214,
                        "end": 220,
                        "literal": {
                          "type": "Literal",
                          "start": 214,
                          "end": 220,
                          "value": "type",
                          "raw": "\"type\""
                        }
                      }
                    },
                    "nameType": null,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 225,
                      "end": 276,
                      "typeName": {
                        "type": "Identifier",
                        "start": 225,
                        "end": 231,
                        "decorators": [],
                        "name": "Action",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 231,
                        "end": 276,
                        "params": [
                          {
                            "type": "TSConditionalType",
                            "start": 232,
                            "end": 275,
                            "checkType": {
                              "type": "TSTypeReference",
                              "start": 232,
                              "end": 238,
                              "typeName": {
                                "type": "Identifier",
                                "start": 232,
                                "end": 238,
                                "decorators": [],
                                "name": "TEvent",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            },
                            "extendsType": {
                              "type": "TSTypeLiteral",
                              "start": 247,
                              "end": 258,
                              "members": [
                                {
                                  "type": "TSPropertySignature",
                                  "start": 249,
                                  "end": 256,
                                  "computed": false,
                                  "optional": false,
                                  "readonly": false,
                                  "key": {
                                    "type": "Identifier",
                                    "start": 249,
                                    "end": 253,
                                    "decorators": [],
                                    "name": "type",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 253,
                                    "end": 256,
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "start": 255,
                                      "end": 256,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 255,
                                        "end": 256,
                                        "decorators": [],
                                        "name": "K",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "typeArguments": null
                                    }
                                  },
                                  "accessibility": null,
                                  "static": false
                                }
                              ]
                            },
                            "trueType": {
                              "type": "TSTypeReference",
                              "start": 261,
                              "end": 267,
                              "typeName": {
                                "type": "Identifier",
                                "start": 261,
                                "end": 267,
                                "decorators": [],
                                "name": "TEvent",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            },
                            "falseType": {
                              "type": "TSNeverKeyword",
                              "start": 270,
                              "end": 275
                            }
                          }
                        ]
                      }
                    },
                    "optional": true,
                    "readonly": null
                  },
                  {
                    "type": "TSTypeLiteral",
                    "start": 284,
                    "end": 315,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 290,
                        "end": 311,
                        "computed": false,
                        "optional": true,
                        "readonly": false,
                        "key": {
                          "type": "Literal",
                          "start": 290,
                          "end": 293,
                          "value": "*",
                          "raw": "\"*\""
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 294,
                          "end": 310,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 296,
                            "end": 310,
                            "typeName": {
                              "type": "Identifier",
                              "start": 296,
                              "end": 302,
                              "decorators": [],
                              "name": "Action",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 302,
                              "end": 310,
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "start": 303,
                                  "end": 309,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 303,
                                    "end": 309,
                                    "decorators": [],
                                    "name": "TEvent",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeArguments": null
                                }
                              ]
                            }
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
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 320,
      "end": 425,
      "id": {
        "type": "Identifier",
        "start": 337,
        "end": 350,
        "decorators": [],
        "name": "createMachine",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 350,
        "end": 383,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 351,
            "end": 382,
            "name": {
              "type": "Identifier",
              "start": 351,
              "end": 357,
              "decorators": [],
              "name": "TEvent",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 366,
              "end": 382,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 368,
                  "end": 380,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 368,
                    "end": 372,
                    "decorators": [],
                    "name": "type",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 372,
                    "end": 380,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 374,
                      "end": 380
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [
        {
          "type": "Identifier",
          "start": 387,
          "end": 416,
          "decorators": [],
          "name": "config",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 393,
            "end": 416,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 395,
              "end": 416,
              "typeName": {
                "type": "Identifier",
                "start": 395,
                "end": 408,
                "decorators": [],
                "name": "MachineConfig",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 408,
                "end": 416,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 409,
                    "end": 415,
                    "typeName": {
                      "type": "Identifier",
                      "start": 409,
                      "end": 415,
                      "decorators": [],
                      "name": "TEvent",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 418,
        "end": 424,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 420,
          "end": 424
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 427,
      "end": 589,
      "expression": {
        "type": "CallExpression",
        "start": 427,
        "end": 588,
        "callee": {
          "type": "Identifier",
          "start": 427,
          "end": 440,
          "decorators": [],
          "name": "createMachine",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 441,
            "end": 587,
            "properties": [
              {
                "type": "Property",
                "start": 445,
                "end": 511,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 445,
                  "end": 451,
                  "decorators": [],
                  "name": "schema",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 453,
                  "end": 511,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 459,
                      "end": 506,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 459,
                        "end": 465,
                        "decorators": [],
                        "name": "events",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "TSAsExpression",
                        "start": 467,
                        "end": 506,
                        "expression": {
                          "type": "ObjectExpression",
                          "start": 467,
                          "end": 469,
                          "properties": []
                        },
                        "typeAnnotation": {
                          "type": "TSUnionType",
                          "start": 473,
                          "end": 506,
                          "types": [
                            {
                              "type": "TSTypeLiteral",
                              "start": 473,
                              "end": 488,
                              "members": [
                                {
                                  "type": "TSPropertySignature",
                                  "start": 475,
                                  "end": 486,
                                  "computed": false,
                                  "optional": false,
                                  "readonly": false,
                                  "key": {
                                    "type": "Identifier",
                                    "start": 475,
                                    "end": 479,
                                    "decorators": [],
                                    "name": "type",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 479,
                                    "end": 486,
                                    "typeAnnotation": {
                                      "type": "TSLiteralType",
                                      "start": 481,
                                      "end": 486,
                                      "literal": {
                                        "type": "Literal",
                                        "start": 481,
                                        "end": 486,
                                        "value": "FOO",
                                        "raw": "\"FOO\""
                                      }
                                    }
                                  },
                                  "accessibility": null,
                                  "static": false
                                }
                              ]
                            },
                            {
                              "type": "TSTypeLiteral",
                              "start": 491,
                              "end": 506,
                              "members": [
                                {
                                  "type": "TSPropertySignature",
                                  "start": 493,
                                  "end": 504,
                                  "computed": false,
                                  "optional": false,
                                  "readonly": false,
                                  "key": {
                                    "type": "Identifier",
                                    "start": 493,
                                    "end": 497,
                                    "decorators": [],
                                    "name": "type",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 497,
                                    "end": 504,
                                    "typeAnnotation": {
                                      "type": "TSLiteralType",
                                      "start": 499,
                                      "end": 504,
                                      "literal": {
                                        "type": "Literal",
                                        "start": 499,
                                        "end": 504,
                                        "value": "BAR",
                                        "raw": "\"BAR\""
                                      }
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
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    }
                  ]
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 515,
                "end": 584,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 515,
                  "end": 517,
                  "decorators": [],
                  "name": "on",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 519,
                  "end": 584,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 525,
                      "end": 579,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 525,
                        "end": 528,
                        "decorators": [],
                        "name": "FOO",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "ArrowFunctionExpression",
                        "start": 530,
                        "end": 579,
                        "expression": false,
                        "async": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 531,
                            "end": 533,
                            "decorators": [],
                            "name": "ev",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "start": 538,
                          "end": 579,
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "start": 546,
                              "end": 554,
                              "expression": {
                                "type": "MemberExpression",
                                "start": 546,
                                "end": 553,
                                "object": {
                                  "type": "Identifier",
                                  "start": 546,
                                  "end": 548,
                                  "decorators": [],
                                  "name": "ev",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 549,
                                  "end": 553,
                                  "decorators": [],
                                  "name": "type",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "directive": null
                            }
                          ]
                        },
                        "id": null,
                        "generator": false
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    }
                  ]
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 591,
      "end": 761,
      "expression": {
        "type": "CallExpression",
        "start": 591,
        "end": 760,
        "callee": {
          "type": "Identifier",
          "start": 591,
          "end": 604,
          "decorators": [],
          "name": "createMachine",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 605,
            "end": 759,
            "properties": [
              {
                "type": "Property",
                "start": 609,
                "end": 675,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 609,
                  "end": 615,
                  "decorators": [],
                  "name": "schema",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 617,
                  "end": 675,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 623,
                      "end": 670,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 623,
                        "end": 629,
                        "decorators": [],
                        "name": "events",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "TSAsExpression",
                        "start": 631,
                        "end": 670,
                        "expression": {
                          "type": "ObjectExpression",
                          "start": 631,
                          "end": 633,
                          "properties": []
                        },
                        "typeAnnotation": {
                          "type": "TSUnionType",
                          "start": 637,
                          "end": 670,
                          "types": [
                            {
                              "type": "TSTypeLiteral",
                              "start": 637,
                              "end": 652,
                              "members": [
                                {
                                  "type": "TSPropertySignature",
                                  "start": 639,
                                  "end": 650,
                                  "computed": false,
                                  "optional": false,
                                  "readonly": false,
                                  "key": {
                                    "type": "Identifier",
                                    "start": 639,
                                    "end": 643,
                                    "decorators": [],
                                    "name": "type",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 643,
                                    "end": 650,
                                    "typeAnnotation": {
                                      "type": "TSLiteralType",
                                      "start": 645,
                                      "end": 650,
                                      "literal": {
                                        "type": "Literal",
                                        "start": 645,
                                        "end": 650,
                                        "value": "FOO",
                                        "raw": "\"FOO\""
                                      }
                                    }
                                  },
                                  "accessibility": null,
                                  "static": false
                                }
                              ]
                            },
                            {
                              "type": "TSTypeLiteral",
                              "start": 655,
                              "end": 670,
                              "members": [
                                {
                                  "type": "TSPropertySignature",
                                  "start": 657,
                                  "end": 668,
                                  "computed": false,
                                  "optional": false,
                                  "readonly": false,
                                  "key": {
                                    "type": "Identifier",
                                    "start": 657,
                                    "end": 661,
                                    "decorators": [],
                                    "name": "type",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 661,
                                    "end": 668,
                                    "typeAnnotation": {
                                      "type": "TSLiteralType",
                                      "start": 663,
                                      "end": 668,
                                      "literal": {
                                        "type": "Literal",
                                        "start": 663,
                                        "end": 668,
                                        "value": "BAR",
                                        "raw": "\"BAR\""
                                      }
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
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    }
                  ]
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 679,
                "end": 756,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 679,
                  "end": 681,
                  "decorators": [],
                  "name": "on",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 683,
                  "end": 756,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 689,
                      "end": 751,
                      "kind": "init",
                      "key": {
                        "type": "Literal",
                        "start": 689,
                        "end": 692,
                        "value": "*",
                        "raw": "\"*\""
                      },
                      "value": {
                        "type": "ArrowFunctionExpression",
                        "start": 694,
                        "end": 751,
                        "expression": false,
                        "async": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 695,
                            "end": 697,
                            "decorators": [],
                            "name": "ev",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "start": 702,
                          "end": 751,
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "start": 710,
                              "end": 718,
                              "expression": {
                                "type": "MemberExpression",
                                "start": 710,
                                "end": 717,
                                "object": {
                                  "type": "Identifier",
                                  "start": 710,
                                  "end": 712,
                                  "decorators": [],
                                  "name": "ev",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 713,
                                  "end": 717,
                                  "decorators": [],
                                  "name": "type",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "directive": null
                            }
                          ]
                        },
                        "id": null,
                        "generator": false
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    }
                  ]
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 763,
      "end": 1033,
      "id": {
        "type": "Identifier",
        "start": 773,
        "end": 787,
        "decorators": [],
        "name": "MachineConfig2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 787,
        "end": 820,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 788,
            "end": 819,
            "name": {
              "type": "Identifier",
              "start": 788,
              "end": 794,
              "decorators": [],
              "name": "TEvent",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 803,
              "end": 819,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 805,
                  "end": 817,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 805,
                    "end": 809,
                    "decorators": [],
                    "name": "type",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 809,
                    "end": 817,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 811,
                      "end": 817
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 821,
        "end": 1033,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 825,
            "end": 859,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 825,
              "end": 831,
              "decorators": [],
              "name": "schema",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 831,
              "end": 858,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 833,
                "end": 858,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 839,
                    "end": 854,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 839,
                      "end": 845,
                      "decorators": [],
                      "name": "events",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 845,
                      "end": 853,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 847,
                        "end": 853,
                        "typeName": {
                          "type": "Identifier",
                          "start": 847,
                          "end": 853,
                          "decorators": [],
                          "name": "TEvent",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 862,
            "end": 1031,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 862,
              "end": 864,
              "decorators": [],
              "name": "on",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 865,
              "end": 1030,
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 867,
                "end": 1030,
                "types": [
                  {
                    "type": "TSMappedType",
                    "start": 867,
                    "end": 996,
                    "key": {
                      "type": "Identifier",
                      "start": 874,
                      "end": 875,
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": {
                      "type": "TSIndexedAccessType",
                      "start": 879,
                      "end": 893,
                      "objectType": {
                        "type": "TSTypeReference",
                        "start": 879,
                        "end": 885,
                        "typeName": {
                          "type": "Identifier",
                          "start": 879,
                          "end": 885,
                          "decorators": [],
                          "name": "TEvent",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      },
                      "indexType": {
                        "type": "TSLiteralType",
                        "start": 886,
                        "end": 892,
                        "literal": {
                          "type": "Literal",
                          "start": 886,
                          "end": 892,
                          "value": "type",
                          "raw": "\"type\""
                        }
                      }
                    },
                    "nameType": {
                      "type": "TSConditionalType",
                      "start": 897,
                      "end": 936,
                      "checkType": {
                        "type": "TSTypeReference",
                        "start": 897,
                        "end": 898,
                        "typeName": {
                          "type": "Identifier",
                          "start": 897,
                          "end": 898,
                          "decorators": [],
                          "name": "K",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      },
                      "extendsType": {
                        "type": "TSTypeReference",
                        "start": 907,
                        "end": 924,
                        "typeName": {
                          "type": "Identifier",
                          "start": 907,
                          "end": 916,
                          "decorators": [],
                          "name": "Uppercase",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 916,
                          "end": 924,
                          "params": [
                            {
                              "type": "TSStringKeyword",
                              "start": 917,
                              "end": 923
                            }
                          ]
                        }
                      },
                      "trueType": {
                        "type": "TSTypeReference",
                        "start": 927,
                        "end": 928,
                        "typeName": {
                          "type": "Identifier",
                          "start": 927,
                          "end": 928,
                          "decorators": [],
                          "name": "K",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      },
                      "falseType": {
                        "type": "TSNeverKeyword",
                        "start": 931,
                        "end": 936
                      }
                    },
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 940,
                      "end": 991,
                      "typeName": {
                        "type": "Identifier",
                        "start": 940,
                        "end": 946,
                        "decorators": [],
                        "name": "Action",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 946,
                        "end": 991,
                        "params": [
                          {
                            "type": "TSConditionalType",
                            "start": 947,
                            "end": 990,
                            "checkType": {
                              "type": "TSTypeReference",
                              "start": 947,
                              "end": 953,
                              "typeName": {
                                "type": "Identifier",
                                "start": 947,
                                "end": 953,
                                "decorators": [],
                                "name": "TEvent",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            },
                            "extendsType": {
                              "type": "TSTypeLiteral",
                              "start": 962,
                              "end": 973,
                              "members": [
                                {
                                  "type": "TSPropertySignature",
                                  "start": 964,
                                  "end": 971,
                                  "computed": false,
                                  "optional": false,
                                  "readonly": false,
                                  "key": {
                                    "type": "Identifier",
                                    "start": 964,
                                    "end": 968,
                                    "decorators": [],
                                    "name": "type",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 968,
                                    "end": 971,
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "start": 970,
                                      "end": 971,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 970,
                                        "end": 971,
                                        "decorators": [],
                                        "name": "K",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "typeArguments": null
                                    }
                                  },
                                  "accessibility": null,
                                  "static": false
                                }
                              ]
                            },
                            "trueType": {
                              "type": "TSTypeReference",
                              "start": 976,
                              "end": 982,
                              "typeName": {
                                "type": "Identifier",
                                "start": 976,
                                "end": 982,
                                "decorators": [],
                                "name": "TEvent",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            },
                            "falseType": {
                              "type": "TSNeverKeyword",
                              "start": 985,
                              "end": 990
                            }
                          }
                        ]
                      }
                    },
                    "optional": true,
                    "readonly": null
                  },
                  {
                    "type": "TSTypeLiteral",
                    "start": 999,
                    "end": 1030,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 1005,
                        "end": 1026,
                        "computed": false,
                        "optional": true,
                        "readonly": false,
                        "key": {
                          "type": "Literal",
                          "start": 1005,
                          "end": 1008,
                          "value": "*",
                          "raw": "\"*\""
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1009,
                          "end": 1025,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1011,
                            "end": 1025,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1011,
                              "end": 1017,
                              "decorators": [],
                              "name": "Action",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 1017,
                              "end": 1025,
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "start": 1018,
                                  "end": 1024,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 1018,
                                    "end": 1024,
                                    "decorators": [],
                                    "name": "TEvent",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeArguments": null
                                }
                              ]
                            }
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
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 1035,
      "end": 1142,
      "id": {
        "type": "Identifier",
        "start": 1052,
        "end": 1066,
        "decorators": [],
        "name": "createMachine2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1066,
        "end": 1099,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1067,
            "end": 1098,
            "name": {
              "type": "Identifier",
              "start": 1067,
              "end": 1073,
              "decorators": [],
              "name": "TEvent",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 1082,
              "end": 1098,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 1084,
                  "end": 1096,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1084,
                    "end": 1088,
                    "decorators": [],
                    "name": "type",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1088,
                    "end": 1096,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1090,
                      "end": 1096
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1103,
          "end": 1133,
          "decorators": [],
          "name": "config",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1109,
            "end": 1133,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1111,
              "end": 1133,
              "typeName": {
                "type": "Identifier",
                "start": 1111,
                "end": 1125,
                "decorators": [],
                "name": "MachineConfig2",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1125,
                "end": 1133,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1126,
                    "end": 1132,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1126,
                      "end": 1132,
                      "decorators": [],
                      "name": "TEvent",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1135,
        "end": 1141,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 1137,
          "end": 1141
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 1144,
      "end": 1307,
      "expression": {
        "type": "CallExpression",
        "start": 1144,
        "end": 1306,
        "callee": {
          "type": "Identifier",
          "start": 1144,
          "end": 1158,
          "decorators": [],
          "name": "createMachine2",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 1159,
            "end": 1305,
            "properties": [
              {
                "type": "Property",
                "start": 1163,
                "end": 1229,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 1163,
                  "end": 1169,
                  "decorators": [],
                  "name": "schema",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 1171,
                  "end": 1229,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 1177,
                      "end": 1224,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 1177,
                        "end": 1183,
                        "decorators": [],
                        "name": "events",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "TSAsExpression",
                        "start": 1185,
                        "end": 1224,
                        "expression": {
                          "type": "ObjectExpression",
                          "start": 1185,
                          "end": 1187,
                          "properties": []
                        },
                        "typeAnnotation": {
                          "type": "TSUnionType",
                          "start": 1191,
                          "end": 1224,
                          "types": [
                            {
                              "type": "TSTypeLiteral",
                              "start": 1191,
                              "end": 1206,
                              "members": [
                                {
                                  "type": "TSPropertySignature",
                                  "start": 1193,
                                  "end": 1204,
                                  "computed": false,
                                  "optional": false,
                                  "readonly": false,
                                  "key": {
                                    "type": "Identifier",
                                    "start": 1193,
                                    "end": 1197,
                                    "decorators": [],
                                    "name": "type",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 1197,
                                    "end": 1204,
                                    "typeAnnotation": {
                                      "type": "TSLiteralType",
                                      "start": 1199,
                                      "end": 1204,
                                      "literal": {
                                        "type": "Literal",
                                        "start": 1199,
                                        "end": 1204,
                                        "value": "FOO",
                                        "raw": "\"FOO\""
                                      }
                                    }
                                  },
                                  "accessibility": null,
                                  "static": false
                                }
                              ]
                            },
                            {
                              "type": "TSTypeLiteral",
                              "start": 1209,
                              "end": 1224,
                              "members": [
                                {
                                  "type": "TSPropertySignature",
                                  "start": 1211,
                                  "end": 1222,
                                  "computed": false,
                                  "optional": false,
                                  "readonly": false,
                                  "key": {
                                    "type": "Identifier",
                                    "start": 1211,
                                    "end": 1215,
                                    "decorators": [],
                                    "name": "type",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 1215,
                                    "end": 1222,
                                    "typeAnnotation": {
                                      "type": "TSLiteralType",
                                      "start": 1217,
                                      "end": 1222,
                                      "literal": {
                                        "type": "Literal",
                                        "start": 1217,
                                        "end": 1222,
                                        "value": "bar",
                                        "raw": "\"bar\""
                                      }
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
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    }
                  ]
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 1233,
                "end": 1302,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 1233,
                  "end": 1235,
                  "decorators": [],
                  "name": "on",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 1237,
                  "end": 1302,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 1243,
                      "end": 1297,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 1243,
                        "end": 1246,
                        "decorators": [],
                        "name": "FOO",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "ArrowFunctionExpression",
                        "start": 1248,
                        "end": 1297,
                        "expression": false,
                        "async": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 1249,
                            "end": 1251,
                            "decorators": [],
                            "name": "ev",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "start": 1256,
                          "end": 1297,
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "start": 1264,
                              "end": 1272,
                              "expression": {
                                "type": "MemberExpression",
                                "start": 1264,
                                "end": 1271,
                                "object": {
                                  "type": "Identifier",
                                  "start": 1264,
                                  "end": 1266,
                                  "decorators": [],
                                  "name": "ev",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 1267,
                                  "end": 1271,
                                  "decorators": [],
                                  "name": "type",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "directive": null
                            }
                          ]
                        },
                        "id": null,
                        "generator": false
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    }
                  ]
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1309,
      "end": 1480,
      "expression": {
        "type": "CallExpression",
        "start": 1309,
        "end": 1479,
        "callee": {
          "type": "Identifier",
          "start": 1309,
          "end": 1323,
          "decorators": [],
          "name": "createMachine2",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 1324,
            "end": 1478,
            "properties": [
              {
                "type": "Property",
                "start": 1328,
                "end": 1394,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 1328,
                  "end": 1334,
                  "decorators": [],
                  "name": "schema",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 1336,
                  "end": 1394,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 1342,
                      "end": 1389,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 1342,
                        "end": 1348,
                        "decorators": [],
                        "name": "events",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "TSAsExpression",
                        "start": 1350,
                        "end": 1389,
                        "expression": {
                          "type": "ObjectExpression",
                          "start": 1350,
                          "end": 1352,
                          "properties": []
                        },
                        "typeAnnotation": {
                          "type": "TSUnionType",
                          "start": 1356,
                          "end": 1389,
                          "types": [
                            {
                              "type": "TSTypeLiteral",
                              "start": 1356,
                              "end": 1371,
                              "members": [
                                {
                                  "type": "TSPropertySignature",
                                  "start": 1358,
                                  "end": 1369,
                                  "computed": false,
                                  "optional": false,
                                  "readonly": false,
                                  "key": {
                                    "type": "Identifier",
                                    "start": 1358,
                                    "end": 1362,
                                    "decorators": [],
                                    "name": "type",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 1362,
                                    "end": 1369,
                                    "typeAnnotation": {
                                      "type": "TSLiteralType",
                                      "start": 1364,
                                      "end": 1369,
                                      "literal": {
                                        "type": "Literal",
                                        "start": 1364,
                                        "end": 1369,
                                        "value": "FOO",
                                        "raw": "\"FOO\""
                                      }
                                    }
                                  },
                                  "accessibility": null,
                                  "static": false
                                }
                              ]
                            },
                            {
                              "type": "TSTypeLiteral",
                              "start": 1374,
                              "end": 1389,
                              "members": [
                                {
                                  "type": "TSPropertySignature",
                                  "start": 1376,
                                  "end": 1387,
                                  "computed": false,
                                  "optional": false,
                                  "readonly": false,
                                  "key": {
                                    "type": "Identifier",
                                    "start": 1376,
                                    "end": 1380,
                                    "decorators": [],
                                    "name": "type",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 1380,
                                    "end": 1387,
                                    "typeAnnotation": {
                                      "type": "TSLiteralType",
                                      "start": 1382,
                                      "end": 1387,
                                      "literal": {
                                        "type": "Literal",
                                        "start": 1382,
                                        "end": 1387,
                                        "value": "bar",
                                        "raw": "\"bar\""
                                      }
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
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    }
                  ]
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 1398,
                "end": 1475,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 1398,
                  "end": 1400,
                  "decorators": [],
                  "name": "on",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 1402,
                  "end": 1475,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 1408,
                      "end": 1470,
                      "kind": "init",
                      "key": {
                        "type": "Literal",
                        "start": 1408,
                        "end": 1411,
                        "value": "*",
                        "raw": "\"*\""
                      },
                      "value": {
                        "type": "ArrowFunctionExpression",
                        "start": 1413,
                        "end": 1470,
                        "expression": false,
                        "async": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 1414,
                            "end": 1416,
                            "decorators": [],
                            "name": "ev",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "start": 1421,
                          "end": 1470,
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "start": 1429,
                              "end": 1437,
                              "expression": {
                                "type": "MemberExpression",
                                "start": 1429,
                                "end": 1436,
                                "object": {
                                  "type": "Identifier",
                                  "start": 1429,
                                  "end": 1431,
                                  "decorators": [],
                                  "name": "ev",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 1432,
                                  "end": 1436,
                                  "decorators": [],
                                  "name": "type",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "directive": null
                            }
                          ]
                        },
                        "id": null,
                        "generator": false
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    }
                  ]
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1482,
      "end": 1627,
      "expression": {
        "type": "CallExpression",
        "start": 1482,
        "end": 1626,
        "callee": {
          "type": "Identifier",
          "start": 1482,
          "end": 1496,
          "decorators": [],
          "name": "createMachine2",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 1497,
            "end": 1625,
            "properties": [
              {
                "type": "Property",
                "start": 1501,
                "end": 1567,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 1501,
                  "end": 1507,
                  "decorators": [],
                  "name": "schema",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 1509,
                  "end": 1567,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 1515,
                      "end": 1562,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 1515,
                        "end": 1521,
                        "decorators": [],
                        "name": "events",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "TSAsExpression",
                        "start": 1523,
                        "end": 1562,
                        "expression": {
                          "type": "ObjectExpression",
                          "start": 1523,
                          "end": 1525,
                          "properties": []
                        },
                        "typeAnnotation": {
                          "type": "TSUnionType",
                          "start": 1529,
                          "end": 1562,
                          "types": [
                            {
                              "type": "TSTypeLiteral",
                              "start": 1529,
                              "end": 1544,
                              "members": [
                                {
                                  "type": "TSPropertySignature",
                                  "start": 1531,
                                  "end": 1542,
                                  "computed": false,
                                  "optional": false,
                                  "readonly": false,
                                  "key": {
                                    "type": "Identifier",
                                    "start": 1531,
                                    "end": 1535,
                                    "decorators": [],
                                    "name": "type",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 1535,
                                    "end": 1542,
                                    "typeAnnotation": {
                                      "type": "TSLiteralType",
                                      "start": 1537,
                                      "end": 1542,
                                      "literal": {
                                        "type": "Literal",
                                        "start": 1537,
                                        "end": 1542,
                                        "value": "FOO",
                                        "raw": "\"FOO\""
                                      }
                                    }
                                  },
                                  "accessibility": null,
                                  "static": false
                                }
                              ]
                            },
                            {
                              "type": "TSTypeLiteral",
                              "start": 1547,
                              "end": 1562,
                              "members": [
                                {
                                  "type": "TSPropertySignature",
                                  "start": 1549,
                                  "end": 1560,
                                  "computed": false,
                                  "optional": false,
                                  "readonly": false,
                                  "key": {
                                    "type": "Identifier",
                                    "start": 1549,
                                    "end": 1553,
                                    "decorators": [],
                                    "name": "type",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 1553,
                                    "end": 1560,
                                    "typeAnnotation": {
                                      "type": "TSLiteralType",
                                      "start": 1555,
                                      "end": 1560,
                                      "literal": {
                                        "type": "Literal",
                                        "start": 1555,
                                        "end": 1560,
                                        "value": "bar",
                                        "raw": "\"bar\""
                                      }
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
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    }
                  ]
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 1571,
                "end": 1622,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 1571,
                  "end": 1573,
                  "decorators": [],
                  "name": "on",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 1575,
                  "end": 1622,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 1581,
                      "end": 1617,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 1581,
                        "end": 1584,
                        "decorators": [],
                        "name": "bar",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "ArrowFunctionExpression",
                        "start": 1586,
                        "end": 1617,
                        "expression": false,
                        "async": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 1587,
                            "end": 1589,
                            "decorators": [],
                            "name": "ev",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "start": 1594,
                          "end": 1617,
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "start": 1602,
                              "end": 1604,
                              "expression": {
                                "type": "Identifier",
                                "start": 1602,
                                "end": 1604,
                                "decorators": [],
                                "name": "ev",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "directive": null
                            }
                          ]
                        },
                        "id": null,
                        "generator": false
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    }
                  ]
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1675,
      "end": 1805,
      "id": {
        "type": "Identifier",
        "start": 1692,
        "end": 1703,
        "decorators": [],
        "name": "createSlice",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1703,
        "end": 1706,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1704,
            "end": 1705,
            "name": {
              "type": "Identifier",
              "start": 1704,
              "end": 1705,
              "decorators": [],
              "name": "T",
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
      "params": [
        {
          "type": "Identifier",
          "start": 1710,
          "end": 1796,
          "decorators": [],
          "name": "reducers",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1718,
            "end": 1796,
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "start": 1720,
              "end": 1796,
              "types": [
                {
                  "type": "TSTypeLiteral",
                  "start": 1720,
                  "end": 1760,
                  "members": [
                    {
                      "type": "TSIndexSignature",
                      "start": 1722,
                      "end": 1758,
                      "parameters": [
                        {
                          "type": "Identifier",
                          "start": 1723,
                          "end": 1732,
                          "decorators": [],
                          "name": "K",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1724,
                            "end": 1732,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 1726,
                              "end": 1732
                            }
                          }
                        }
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1733,
                        "end": 1758,
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "start": 1735,
                          "end": 1758,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 1736,
                              "end": 1749,
                              "decorators": [],
                              "name": "state",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 1741,
                                "end": 1749,
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 1743,
                                  "end": 1749
                                }
                              }
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "start": 1751,
                            "end": 1758,
                            "typeAnnotation": {
                              "type": "TSVoidKeyword",
                              "start": 1754,
                              "end": 1758
                            }
                          }
                        }
                      },
                      "readonly": false,
                      "static": false,
                      "accessibility": null
                    }
                  ]
                },
                {
                  "type": "TSMappedType",
                  "start": 1763,
                  "end": 1796,
                  "key": {
                    "type": "Identifier",
                    "start": 1770,
                    "end": 1771,
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": {
                    "type": "TSTypeOperator",
                    "start": 1775,
                    "end": 1782,
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1781,
                      "end": 1782,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1781,
                        "end": 1782,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  },
                  "nameType": null,
                  "typeAnnotation": {
                    "type": "TSObjectKeyword",
                    "start": 1785,
                    "end": 1791
                  },
                  "optional": false,
                  "readonly": null
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1798,
        "end": 1804,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 1800,
          "end": 1804
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 1807,
      "end": 1835,
      "expression": {
        "type": "CallExpression",
        "start": 1807,
        "end": 1834,
        "callee": {
          "type": "Identifier",
          "start": 1807,
          "end": 1818,
          "decorators": [],
          "name": "createSlice",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 1819,
            "end": 1833,
            "properties": [
              {
                "type": "Property",
                "start": 1823,
                "end": 1830,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 1823,
                  "end": 1824,
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 1824,
                  "end": 1830,
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1825,
                      "end": 1826,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 1828,
                    "end": 1830,
                    "body": []
                  },
                  "expression": false
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1883,
      "end": 1932,
      "id": {
        "type": "Identifier",
        "start": 1888,
        "end": 1896,
        "decorators": [],
        "name": "Validate",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1896,
        "end": 1899,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1897,
            "end": 1898,
            "name": {
              "type": "Identifier",
              "start": 1897,
              "end": 1898,
              "decorators": [],
              "name": "T",
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
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 1902,
        "end": 1932,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 1902,
            "end": 1903,
            "typeName": {
              "type": "Identifier",
              "start": 1902,
              "end": 1903,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          {
            "type": "TSMappedType",
            "start": 1906,
            "end": 1932,
            "key": {
              "type": "Identifier",
              "start": 1909,
              "end": 1910,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 1914,
              "end": 1921,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1920,
                "end": 1921,
                "typeName": {
                  "type": "Identifier",
                  "start": 1920,
                  "end": 1921,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "nameType": null,
            "typeAnnotation": {
              "type": "TSObjectKeyword",
              "start": 1924,
              "end": 1930
            },
            "optional": false,
            "readonly": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 1933,
      "end": 2028,
      "id": {
        "type": "Identifier",
        "start": 1950,
        "end": 1951,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1951,
        "end": 1999,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1952,
            "end": 1953,
            "name": {
              "type": "Identifier",
              "start": 1952,
              "end": 1953,
              "decorators": [],
              "name": "S",
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
            "start": 1955,
            "end": 1998,
            "name": {
              "type": "Identifier",
              "start": 1955,
              "end": 1956,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 1965,
              "end": 1998,
              "typeName": {
                "type": "Identifier",
                "start": 1965,
                "end": 1971,
                "decorators": [],
                "name": "Record",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1971,
                "end": 1998,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1972,
                    "end": 1978
                  },
                  {
                    "type": "TSFunctionType",
                    "start": 1980,
                    "end": 1997,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1981,
                        "end": 1989,
                        "decorators": [],
                        "name": "state",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1986,
                          "end": 1989,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1988,
                            "end": 1989,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1988,
                              "end": 1989,
                              "decorators": [],
                              "name": "S",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 1991,
                      "end": 1997,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 1994,
                        "end": 1997
                      }
                    }
                  }
                ]
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2000,
          "end": 2004,
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2001,
            "end": 2004,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2003,
              "end": 2004,
              "typeName": {
                "type": "Identifier",
                "start": 2003,
                "end": 2004,
                "decorators": [],
                "name": "S",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 2006,
          "end": 2020,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2007,
            "end": 2020,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2009,
              "end": 2020,
              "typeName": {
                "type": "Identifier",
                "start": 2009,
                "end": 2017,
                "decorators": [],
                "name": "Validate",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 2017,
                "end": 2020,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 2018,
                    "end": 2019,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2018,
                      "end": 2019,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2021,
        "end": 2027,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 2023,
          "end": 2027
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 2030,
      "end": 2058,
      "expression": {
        "type": "CallExpression",
        "start": 2030,
        "end": 2058,
        "callee": {
          "type": "Identifier",
          "start": 2030,
          "end": 2031,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 2032,
            "end": 2033,
            "value": 0,
            "raw": "0"
          },
          {
            "type": "ObjectExpression",
            "start": 2035,
            "end": 2057,
            "properties": [
              {
                "type": "Property",
                "start": 2039,
                "end": 2054,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 2039,
                  "end": 2042,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 2044,
                  "end": 2054,
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 2044,
                      "end": 2045,
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BinaryExpression",
                    "start": 2049,
                    "end": 2054,
                    "left": {
                      "type": "Identifier",
                      "start": 2049,
                      "end": 2050,
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "operator": "+",
                    "right": {
                      "type": "Literal",
                      "start": 2053,
                      "end": 2054,
                      "value": 1,
                      "raw": "1"
                    }
                  },
                  "id": null,
                  "generator": false
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2105,
      "end": 2184,
      "id": {
        "type": "Identifier",
        "start": 2110,
        "end": 2127,
        "decorators": [],
        "name": "SliceCaseReducers",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2127,
        "end": 2134,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2128,
            "end": 2133,
            "name": {
              "type": "Identifier",
              "start": 2128,
              "end": 2133,
              "decorators": [],
              "name": "State",
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
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 2137,
        "end": 2183,
        "typeName": {
          "type": "Identifier",
          "start": 2137,
          "end": 2143,
          "decorators": [],
          "name": "Record",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 2143,
          "end": 2183,
          "params": [
            {
              "type": "TSStringKeyword",
              "start": 2144,
              "end": 2150
            },
            {
              "type": "TSFunctionType",
              "start": 2152,
              "end": 2182,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 2153,
                  "end": 2165,
                  "decorators": [],
                  "name": "state",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2158,
                    "end": 2165,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 2160,
                      "end": 2165,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2160,
                        "end": 2165,
                        "decorators": [],
                        "name": "State",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 2167,
                "end": 2182,
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "start": 2170,
                  "end": 2182,
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "start": 2170,
                      "end": 2175,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2170,
                        "end": 2175,
                        "decorators": [],
                        "name": "State",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    },
                    {
                      "type": "TSVoidKeyword",
                      "start": 2178,
                      "end": 2182
                    }
                  ]
                }
              }
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2186,
      "end": 2424,
      "id": {
        "type": "Identifier",
        "start": 2191,
        "end": 2216,
        "decorators": [],
        "name": "ValidateSliceCaseReducers",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2216,
        "end": 2253,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2217,
            "end": 2218,
            "name": {
              "type": "Identifier",
              "start": 2217,
              "end": 2218,
              "decorators": [],
              "name": "S",
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
            "start": 2220,
            "end": 2252,
            "name": {
              "type": "Identifier",
              "start": 2220,
              "end": 2223,
              "decorators": [],
              "name": "ACR",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 2232,
              "end": 2252,
              "typeName": {
                "type": "Identifier",
                "start": 2232,
                "end": 2249,
                "decorators": [],
                "name": "SliceCaseReducers",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 2249,
                "end": 2252,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 2250,
                    "end": 2251,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2250,
                      "end": 2251,
                      "decorators": [],
                      "name": "S",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 2256,
        "end": 2423,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 2256,
            "end": 2259,
            "typeName": {
              "type": "Identifier",
              "start": 2256,
              "end": 2259,
              "decorators": [],
              "name": "ACR",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          {
            "type": "TSMappedType",
            "start": 2262,
            "end": 2423,
            "key": {
              "type": "Identifier",
              "start": 2267,
              "end": 2268,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 2272,
              "end": 2281,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2278,
                "end": 2281,
                "typeName": {
                  "type": "Identifier",
                  "start": 2278,
                  "end": 2281,
                  "decorators": [],
                  "name": "ACR",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "nameType": null,
            "typeAnnotation": {
              "type": "TSConditionalType",
              "start": 2284,
              "end": 2420,
              "checkType": {
                "type": "TSIndexedAccessType",
                "start": 2284,
                "end": 2290,
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 2284,
                  "end": 2287,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2284,
                    "end": 2287,
                    "decorators": [],
                    "name": "ACR",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 2288,
                  "end": 2289,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2288,
                    "end": 2289,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              },
              "extendsType": {
                "type": "TSTypeLiteral",
                "start": 2299,
                "end": 2346,
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "start": 2305,
                    "end": 2342,
                    "key": {
                      "type": "Identifier",
                      "start": 2305,
                      "end": 2312,
                      "decorators": [],
                      "name": "reducer",
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
                        "start": 2313,
                        "end": 2317,
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2314,
                          "end": 2317,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 2316,
                            "end": 2317,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2316,
                              "end": 2317,
                              "decorators": [],
                              "name": "S",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "start": 2319,
                        "end": 2335,
                        "decorators": [],
                        "name": "action",
                        "optional": true,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2326,
                          "end": 2335,
                          "typeAnnotation": {
                            "type": "TSInferType",
                            "start": 2328,
                            "end": 2335,
                            "typeParameter": {
                              "type": "TSTypeParameter",
                              "start": 2334,
                              "end": 2335,
                              "name": {
                                "type": "Identifier",
                                "start": 2334,
                                "end": 2335,
                                "decorators": [],
                                "name": "A",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "constraint": null,
                              "default": null,
                              "in": false,
                              "out": false,
                              "const": false
                            }
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 2336,
                      "end": 2341,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 2338,
                        "end": 2341
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  }
                ]
              },
              "trueType": {
                "type": "TSTypeLiteral",
                "start": 2353,
                "end": 2411,
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "start": 2363,
                    "end": 2403,
                    "key": {
                      "type": "Identifier",
                      "start": 2363,
                      "end": 2370,
                      "decorators": [],
                      "name": "prepare",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "RestElement",
                        "start": 2371,
                        "end": 2384,
                        "decorators": [],
                        "argument": {
                          "type": "Identifier",
                          "start": 2374,
                          "end": 2375,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2375,
                          "end": 2384,
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "start": 2377,
                            "end": 2384,
                            "elementType": {
                              "type": "TSNeverKeyword",
                              "start": 2377,
                              "end": 2382
                            }
                          }
                        },
                        "value": null
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 2385,
                      "end": 2402,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 2387,
                        "end": 2402,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2387,
                          "end": 2391,
                          "decorators": [],
                          "name": "Omit",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 2391,
                          "end": 2402,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 2392,
                              "end": 2393,
                              "typeName": {
                                "type": "Identifier",
                                "start": 2392,
                                "end": 2393,
                                "decorators": [],
                                "name": "A",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            },
                            {
                              "type": "TSLiteralType",
                              "start": 2395,
                              "end": 2401,
                              "literal": {
                                "type": "Literal",
                                "start": 2395,
                                "end": 2401,
                                "value": "type",
                                "raw": "\"type\""
                              }
                            }
                          ]
                        }
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  }
                ]
              },
              "falseType": {
                "type": "TSTypeLiteral",
                "start": 2418,
                "end": 2420,
                "members": []
              }
            },
            "optional": false,
            "readonly": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 2426,
      "end": 2634,
      "id": {
        "type": "Identifier",
        "start": 2443,
        "end": 2454,
        "decorators": [],
        "name": "createSlice",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2454,
        "end": 2514,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2458,
            "end": 2463,
            "name": {
              "type": "Identifier",
              "start": 2458,
              "end": 2463,
              "decorators": [],
              "name": "State",
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
            "start": 2467,
            "end": 2512,
            "name": {
              "type": "Identifier",
              "start": 2467,
              "end": 2479,
              "decorators": [],
              "name": "CaseReducers",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 2488,
              "end": 2512,
              "typeName": {
                "type": "Identifier",
                "start": 2488,
                "end": 2505,
                "decorators": [],
                "name": "SliceCaseReducers",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 2505,
                "end": 2512,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 2506,
                    "end": 2511,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2506,
                      "end": 2511,
                      "decorators": [],
                      "name": "State",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2515,
          "end": 2626,
          "decorators": [],
          "name": "options",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2522,
            "end": 2626,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 2524,
              "end": 2626,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 2528,
                  "end": 2564,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2528,
                    "end": 2540,
                    "decorators": [],
                    "name": "initialState",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2540,
                    "end": 2563,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 2542,
                      "end": 2563,
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "start": 2542,
                          "end": 2547,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2542,
                            "end": 2547,
                            "decorators": [],
                            "name": "State",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSFunctionType",
                          "start": 2551,
                          "end": 2562,
                          "typeParameters": null,
                          "params": [],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "start": 2554,
                            "end": 2562,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 2557,
                              "end": 2562,
                              "typeName": {
                                "type": "Identifier",
                                "start": 2557,
                                "end": 2562,
                                "decorators": [],
                                "name": "State",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          }
                        }
                      ]
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 2567,
                  "end": 2624,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2567,
                    "end": 2575,
                    "decorators": [],
                    "name": "reducers",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2575,
                    "end": 2623,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 2577,
                      "end": 2623,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2577,
                        "end": 2602,
                        "decorators": [],
                        "name": "ValidateSliceCaseReducers",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 2602,
                        "end": 2623,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 2603,
                            "end": 2608,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2603,
                              "end": 2608,
                              "decorators": [],
                              "name": "State",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          },
                          {
                            "type": "TSTypeReference",
                            "start": 2610,
                            "end": 2622,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2610,
                              "end": 2622,
                              "decorators": [],
                              "name": "CaseReducers",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2627,
        "end": 2633,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 2629,
          "end": 2633
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 2636,
      "end": 2830,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 2643,
        "end": 2830,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 2649,
            "end": 2829,
            "id": {
              "type": "Identifier",
              "start": 2649,
              "end": 2660,
              "decorators": [],
              "name": "clientSlice",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "CallExpression",
              "start": 2663,
              "end": 2829,
              "callee": {
                "type": "Identifier",
                "start": 2663,
                "end": 2674,
                "decorators": [],
                "name": "createSlice",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ObjectExpression",
                  "start": 2675,
                  "end": 2828,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 2679,
                      "end": 2771,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 2679,
                        "end": 2691,
                        "decorators": [],
                        "name": "initialState",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "ObjectExpression",
                        "start": 2693,
                        "end": 2771,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 2699,
                            "end": 2711,
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "start": 2699,
                              "end": 2707,
                              "decorators": [],
                              "name": "username",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "value": {
                              "type": "Literal",
                              "start": 2709,
                              "end": 2711,
                              "value": "",
                              "raw": "\"\""
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false
                          },
                          {
                            "type": "Property",
                            "start": 2717,
                            "end": 2734,
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "start": 2717,
                              "end": 2727,
                              "decorators": [],
                              "name": "isLoggedIn",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "value": {
                              "type": "Literal",
                              "start": 2729,
                              "end": 2734,
                              "value": false,
                              "raw": "false"
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false
                          },
                          {
                            "type": "Property",
                            "start": 2740,
                            "end": 2750,
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "start": 2740,
                              "end": 2746,
                              "decorators": [],
                              "name": "userId",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "value": {
                              "type": "Literal",
                              "start": 2748,
                              "end": 2750,
                              "value": "",
                              "raw": "\"\""
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false
                          },
                          {
                            "type": "Property",
                            "start": 2756,
                            "end": 2766,
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "start": 2756,
                              "end": 2762,
                              "decorators": [],
                              "name": "avatar",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "value": {
                              "type": "Literal",
                              "start": 2764,
                              "end": 2766,
                              "value": "",
                              "raw": "\"\""
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false
                          }
                        ]
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 2775,
                      "end": 2825,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 2775,
                        "end": 2783,
                        "decorators": [],
                        "name": "reducers",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "ObjectExpression",
                        "start": 2785,
                        "end": 2825,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 2791,
                            "end": 2820,
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "start": 2791,
                              "end": 2810,
                              "decorators": [],
                              "name": "onClientUserChanged",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "value": {
                              "type": "FunctionExpression",
                              "start": 2810,
                              "end": 2820,
                              "id": null,
                              "generator": false,
                              "async": false,
                              "declare": false,
                              "typeParameters": null,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "start": 2811,
                                  "end": 2816,
                                  "decorators": [],
                                  "name": "state",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              ],
                              "returnType": null,
                              "body": {
                                "type": "BlockStatement",
                                "start": 2818,
                                "end": 2820,
                                "body": []
                              },
                              "expression": false
                            },
                            "method": true,
                            "shorthand": false,
                            "computed": false,
                            "optional": false
                          }
                        ]
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    }
                  ]
                }
              ],
              "optional": false
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
