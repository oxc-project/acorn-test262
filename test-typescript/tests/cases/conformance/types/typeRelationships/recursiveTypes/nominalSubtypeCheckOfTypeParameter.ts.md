nominalSubtypeCheckOfTypeParameter.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 577,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 58,
      "body": {
        "type": "TSInterfaceBody",
        "start": 28,
        "end": 58,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 34,
            "end": 42,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 34,
              "end": 39,
              "decorators": [],
              "name": "first",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 39,
              "end": 42,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 41,
                "end": 42,
                "typeName": {
                  "type": "Identifier",
                  "start": 41,
                  "end": 42,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 47,
            "end": 56,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 47,
              "end": 53,
              "decorators": [],
              "name": "second",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 53,
              "end": 56,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 55,
                "end": 56,
                "typeName": {
                  "type": "Identifier",
                  "start": 55,
                  "end": 56,
                  "decorators": [],
                  "name": "S",
                  "optional": false
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 21,
        "decorators": [],
        "name": "BinaryTuple",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 21,
        "end": 27,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 22,
            "end": 23,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 22,
              "end": 23,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 25,
            "end": 26,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 25,
              "end": 26,
              "decorators": [],
              "name": "S",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 60,
      "end": 179,
      "body": {
        "type": "TSInterfaceBody",
        "start": 82,
        "end": 179,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 88,
            "end": 106,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 88,
              "end": 95,
              "decorators": [],
              "name": "hasNext",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 97,
              "end": 106,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 99,
                "end": 106
              }
            },
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 111,
            "end": 119,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 111,
              "end": 114,
              "decorators": [],
              "name": "pop",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 116,
              "end": 119,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 118,
                "end": 119,
                "typeName": {
                  "type": "Identifier",
                  "start": 118,
                  "end": 119,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            },
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 124,
            "end": 177,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 124,
              "end": 127,
              "decorators": [],
              "name": "zip",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 131,
                "end": 147,
                "decorators": [],
                "name": "seq",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 134,
                  "end": 147,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 136,
                    "end": 147,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 144,
                      "end": 147,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 145,
                          "end": 146,
                          "typeName": {
                            "type": "Identifier",
                            "start": 145,
                            "end": 146,
                            "decorators": [],
                            "name": "S",
                            "optional": false
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 136,
                      "end": 144,
                      "decorators": [],
                      "name": "Sequence",
                      "optional": false
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 148,
              "end": 177,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 150,
                "end": 177,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 158,
                  "end": 177,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 159,
                      "end": 176,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 170,
                        "end": 176,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 171,
                            "end": 172,
                            "typeName": {
                              "type": "Identifier",
                              "start": 171,
                              "end": 172,
                              "decorators": [],
                              "name": "T",
                              "optional": false
                            }
                          },
                          {
                            "type": "TSTypeReference",
                            "start": 174,
                            "end": 175,
                            "typeName": {
                              "type": "Identifier",
                              "start": 174,
                              "end": 175,
                              "decorators": [],
                              "name": "S",
                              "optional": false
                            }
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 159,
                        "end": 170,
                        "decorators": [],
                        "name": "BinaryTuple",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 150,
                  "end": 158,
                  "decorators": [],
                  "name": "Sequence",
                  "optional": false
                }
              }
            },
            "static": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 127,
              "end": 130,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 128,
                  "end": 129,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 128,
                    "end": 129,
                    "decorators": [],
                    "name": "S",
                    "optional": false
                  },
                  "out": false
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 70,
        "end": 78,
        "decorators": [],
        "name": "Sequence",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 78,
        "end": 81,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 79,
            "end": 80,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 79,
              "end": 80,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 457,
      "end": 576,
      "body": {
        "type": "TSInterfaceBody",
        "start": 495,
        "end": 576,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 501,
            "end": 520,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 501,
              "end": 510,
              "decorators": [],
              "name": "getLength",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 512,
              "end": 520,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 514,
                "end": 520
              }
            },
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 525,
            "end": 574,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 525,
              "end": 528,
              "decorators": [],
              "name": "zip",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 532,
                "end": 548,
                "decorators": [],
                "name": "seq",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 535,
                  "end": 548,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 537,
                    "end": 548,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 545,
                      "end": 548,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 546,
                          "end": 547,
                          "typeName": {
                            "type": "Identifier",
                            "start": 546,
                            "end": 547,
                            "decorators": [],
                            "name": "S",
                            "optional": false
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 537,
                      "end": 545,
                      "decorators": [],
                      "name": "Sequence",
                      "optional": false
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 549,
              "end": 574,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 551,
                "end": 574,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 555,
                  "end": 574,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 556,
                      "end": 573,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 567,
                        "end": 573,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 568,
                            "end": 569,
                            "typeName": {
                              "type": "Identifier",
                              "start": 568,
                              "end": 569,
                              "decorators": [],
                              "name": "T",
                              "optional": false
                            }
                          },
                          {
                            "type": "TSTypeReference",
                            "start": 571,
                            "end": 572,
                            "typeName": {
                              "type": "Identifier",
                              "start": 571,
                              "end": 572,
                              "decorators": [],
                              "name": "S",
                              "optional": false
                            }
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 556,
                        "end": 567,
                        "decorators": [],
                        "name": "BinaryTuple",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 551,
                  "end": 555,
                  "decorators": [],
                  "name": "List",
                  "optional": false
                }
              }
            },
            "static": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 528,
              "end": 531,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 529,
                  "end": 530,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 529,
                    "end": 530,
                    "decorators": [],
                    "name": "S",
                    "optional": false
                  },
                  "out": false
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 483,
          "end": 494,
          "expression": {
            "type": "Identifier",
            "start": 483,
            "end": 491,
            "decorators": [],
            "name": "Sequence",
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 491,
            "end": 494,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 492,
                "end": 493,
                "typeName": {
                  "type": "Identifier",
                  "start": 492,
                  "end": 493,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            ]
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 467,
        "end": 471,
        "decorators": [],
        "name": "List",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 471,
        "end": 474,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 472,
            "end": 473,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 472,
              "end": 473,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "script"
}
```
