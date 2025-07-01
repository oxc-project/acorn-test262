__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BinaryTuple",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 21
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 22,
              "end": 23
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 22,
            "end": 23
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 25,
              "end": 26
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 25,
            "end": 26
          }
        ],
        "start": 21,
        "end": 27
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "first",
              "optional": false,
              "typeAnnotation": null,
              "start": 34,
              "end": 39
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 41,
                  "end": 42
                },
                "typeArguments": null,
                "start": 41,
                "end": 42
              },
              "start": 39,
              "end": 42
            },
            "accessibility": null,
            "static": false,
            "start": 34,
            "end": 42
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "second",
              "optional": false,
              "typeAnnotation": null,
              "start": 47,
              "end": 53
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "S",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 55,
                  "end": 56
                },
                "typeArguments": null,
                "start": 55,
                "end": 56
              },
              "start": 53,
              "end": 56
            },
            "accessibility": null,
            "static": false,
            "start": 47,
            "end": 56
          }
        ],
        "start": 28,
        "end": 58
      },
      "declare": false,
      "start": 0,
      "end": 58
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Sequence",
        "optional": false,
        "typeAnnotation": null,
        "start": 70,
        "end": 78
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 79,
              "end": 80
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 79,
            "end": 80
          }
        ],
        "start": 78,
        "end": 81
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "hasNext",
              "optional": false,
              "typeAnnotation": null,
              "start": 88,
              "end": 95
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 99,
                "end": 106
              },
              "start": 97,
              "end": 106
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 88,
            "end": 106
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "pop",
              "optional": false,
              "typeAnnotation": null,
              "start": 111,
              "end": 114
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 118,
                  "end": 119
                },
                "typeArguments": null,
                "start": 118,
                "end": 119
              },
              "start": 116,
              "end": 119
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 111,
            "end": 119
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "zip",
              "optional": false,
              "typeAnnotation": null,
              "start": 124,
              "end": 127
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "S",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 128,
                    "end": 129
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 128,
                  "end": 129
                }
              ],
              "start": 127,
              "end": 130
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "seq",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Sequence",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 136,
                      "end": 144
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
                            "start": 145,
                            "end": 146
                          },
                          "typeArguments": null,
                          "start": 145,
                          "end": 146
                        }
                      ],
                      "start": 144,
                      "end": 147
                    },
                    "start": 136,
                    "end": 147
                  },
                  "start": 134,
                  "end": 147
                },
                "start": 131,
                "end": 147
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Sequence",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 150,
                  "end": 158
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "BinaryTuple",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 159,
                        "end": 170
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 171,
                              "end": 172
                            },
                            "typeArguments": null,
                            "start": 171,
                            "end": 172
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "S",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 174,
                              "end": 175
                            },
                            "typeArguments": null,
                            "start": 174,
                            "end": 175
                          }
                        ],
                        "start": 170,
                        "end": 176
                      },
                      "start": 159,
                      "end": 176
                    }
                  ],
                  "start": 158,
                  "end": 177
                },
                "start": 150,
                "end": 177
              },
              "start": 148,
              "end": 177
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 124,
            "end": 177
          }
        ],
        "start": 82,
        "end": 179
      },
      "declare": false,
      "start": 60,
      "end": 179
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "List",
        "optional": false,
        "typeAnnotation": null,
        "start": 467,
        "end": 471
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 472,
              "end": 473
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 472,
            "end": 473
          }
        ],
        "start": 471,
        "end": 474
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Sequence",
            "optional": false,
            "typeAnnotation": null,
            "start": 483,
            "end": 491
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 492,
                  "end": 493
                },
                "typeArguments": null,
                "start": 492,
                "end": 493
              }
            ],
            "start": 491,
            "end": 494
          },
          "start": 483,
          "end": 494
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "getLength",
              "optional": false,
              "typeAnnotation": null,
              "start": 501,
              "end": 510
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 514,
                "end": 520
              },
              "start": 512,
              "end": 520
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 501,
            "end": 520
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "zip",
              "optional": false,
              "typeAnnotation": null,
              "start": 525,
              "end": 528
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "S",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 529,
                    "end": 530
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 529,
                  "end": 530
                }
              ],
              "start": 528,
              "end": 531
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "seq",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Sequence",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 537,
                      "end": 545
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
                            "start": 546,
                            "end": 547
                          },
                          "typeArguments": null,
                          "start": 546,
                          "end": 547
                        }
                      ],
                      "start": 545,
                      "end": 548
                    },
                    "start": 537,
                    "end": 548
                  },
                  "start": 535,
                  "end": 548
                },
                "start": 532,
                "end": 548
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "List",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 551,
                  "end": 555
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "BinaryTuple",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 556,
                        "end": 567
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 568,
                              "end": 569
                            },
                            "typeArguments": null,
                            "start": 568,
                            "end": 569
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "S",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 571,
                              "end": 572
                            },
                            "typeArguments": null,
                            "start": 571,
                            "end": 572
                          }
                        ],
                        "start": 567,
                        "end": 573
                      },
                      "start": 556,
                      "end": 573
                    }
                  ],
                  "start": 555,
                  "end": 574
                },
                "start": 551,
                "end": 574
              },
              "start": 549,
              "end": 574
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 525,
            "end": 574
          }
        ],
        "start": 495,
        "end": 576
      },
      "declare": false,
      "start": 457,
      "end": 576
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 576
}
```
