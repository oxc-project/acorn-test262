__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1368,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 116,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 9,
        "name": "Trim",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 9,
        "end": 27,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 10,
            "end": 26,
            "name": {
              "type": "Identifier",
              "start": 10,
              "end": 11,
              "name": "S",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 20,
              "end": 26
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 34,
        "end": 115,
        "checkType": {
          "type": "TSTypeReference",
          "start": 34,
          "end": 35,
          "typeName": {
            "type": "Identifier",
            "start": 34,
            "end": 35,
            "name": "S",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSTemplateLiteralType",
          "start": 44,
          "end": 57,
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 44,
              "end": 48,
              "value": {
                "cooked": " ",
                "raw": " "
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 55,
              "end": 57,
              "value": {
                "cooked": "",
                "raw": ""
              },
              "tail": true
            }
          ],
          "types": [
            {
              "type": "TSInferType",
              "start": 48,
              "end": 55,
              "typeParameter": {
                "type": "TSTypeParameter",
                "start": 54,
                "end": 55,
                "name": {
                  "type": "Identifier",
                  "start": 54,
                  "end": 55,
                  "name": "T",
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
            }
          ]
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 60,
          "end": 67,
          "typeName": {
            "type": "Identifier",
            "start": 60,
            "end": 64,
            "name": "Trim",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 64,
            "end": 67,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 65,
                "end": 66,
                "typeName": {
                  "type": "Identifier",
                  "start": 65,
                  "end": 66,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ]
          }
        },
        "falseType": {
          "type": "TSConditionalType",
          "start": 74,
          "end": 115,
          "checkType": {
            "type": "TSTypeReference",
            "start": 74,
            "end": 75,
            "typeName": {
              "type": "Identifier",
              "start": 74,
              "end": 75,
              "name": "S",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          "extendsType": {
            "type": "TSTemplateLiteralType",
            "start": 84,
            "end": 97,
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 84,
                "end": 87,
                "value": {
                  "cooked": "",
                  "raw": ""
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 94,
                "end": 97,
                "value": {
                  "cooked": " ",
                  "raw": " "
                },
                "tail": true
              }
            ],
            "types": [
              {
                "type": "TSInferType",
                "start": 87,
                "end": 94,
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "start": 93,
                  "end": 94,
                  "name": {
                    "type": "Identifier",
                    "start": 93,
                    "end": 94,
                    "name": "T",
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
              }
            ]
          },
          "trueType": {
            "type": "TSTypeReference",
            "start": 100,
            "end": 107,
            "typeName": {
              "type": "Identifier",
              "start": 100,
              "end": 104,
              "name": "Trim",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 104,
              "end": 107,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 105,
                  "end": 106,
                  "typeName": {
                    "type": "Identifier",
                    "start": 105,
                    "end": 106,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ]
            }
          },
          "falseType": {
            "type": "TSTypeReference",
            "start": 114,
            "end": 115,
            "typeName": {
              "type": "Identifier",
              "start": 114,
              "end": 115,
              "name": "S",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 118,
      "end": 288,
      "id": {
        "type": "Identifier",
        "start": 123,
        "end": 126,
        "name": "T10",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 129,
        "end": 287,
        "typeName": {
          "type": "Identifier",
          "start": 129,
          "end": 133,
          "name": "Trim",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 133,
          "end": 287,
          "params": [
            {
              "type": "TSLiteralType",
              "start": 134,
              "end": 286,
              "literal": {
                "type": "Literal",
                "start": 134,
                "end": 286,
                "value": "                                                                                                                                                hello ",
                "raw": "'                                                                                                                                                hello '"
              }
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 289,
      "end": 459,
      "id": {
        "type": "Identifier",
        "start": 294,
        "end": 297,
        "name": "T11",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 300,
        "end": 458,
        "typeName": {
          "type": "Identifier",
          "start": 300,
          "end": 304,
          "name": "Trim",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 304,
          "end": 458,
          "params": [
            {
              "type": "TSLiteralType",
              "start": 305,
              "end": 457,
              "literal": {
                "type": "Literal",
                "start": 305,
                "end": 457,
                "value": " hello                                                                                                                                                ",
                "raw": "' hello                                                                                                                                                '"
              }
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 461,
      "end": 502,
      "id": {
        "type": "Identifier",
        "start": 466,
        "end": 474,
        "name": "GetChars",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 474,
        "end": 477,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 475,
            "end": 476,
            "name": {
              "type": "Identifier",
              "start": 475,
              "end": 476,
              "name": "S",
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
        "start": 480,
        "end": 501,
        "typeName": {
          "type": "Identifier",
          "start": 480,
          "end": 491,
          "name": "GetCharsRec",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 491,
          "end": 501,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 492,
              "end": 493,
              "typeName": {
                "type": "Identifier",
                "start": 492,
                "end": 493,
                "name": "S",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            {
              "type": "TSNeverKeyword",
              "start": 495,
              "end": 500
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 503,
      "end": 611,
      "id": {
        "type": "Identifier",
        "start": 508,
        "end": 519,
        "name": "GetCharsRec",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 519,
        "end": 527,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 520,
            "end": 521,
            "name": {
              "type": "Identifier",
              "start": 520,
              "end": 521,
              "name": "S",
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
            "start": 523,
            "end": 526,
            "name": {
              "type": "Identifier",
              "start": 523,
              "end": 526,
              "name": "Acc",
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
        "type": "TSConditionalType",
        "start": 534,
        "end": 610,
        "checkType": {
          "type": "TSTypeReference",
          "start": 534,
          "end": 535,
          "typeName": {
            "type": "Identifier",
            "start": 534,
            "end": 535,
            "name": "S",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSTemplateLiteralType",
          "start": 544,
          "end": 572,
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 544,
              "end": 547,
              "value": {
                "cooked": "",
                "raw": ""
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 557,
              "end": 560,
              "value": {
                "cooked": "",
                "raw": ""
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 570,
              "end": 572,
              "value": {
                "cooked": "",
                "raw": ""
              },
              "tail": true
            }
          ],
          "types": [
            {
              "type": "TSInferType",
              "start": 547,
              "end": 557,
              "typeParameter": {
                "type": "TSTypeParameter",
                "start": 553,
                "end": 557,
                "name": {
                  "type": "Identifier",
                  "start": 553,
                  "end": 557,
                  "name": "Char",
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
            },
            {
              "type": "TSInferType",
              "start": 560,
              "end": 570,
              "typeParameter": {
                "type": "TSTypeParameter",
                "start": 566,
                "end": 570,
                "name": {
                  "type": "Identifier",
                  "start": 566,
                  "end": 570,
                  "name": "Rest",
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
            }
          ]
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 575,
          "end": 604,
          "typeName": {
            "type": "Identifier",
            "start": 575,
            "end": 586,
            "name": "GetCharsRec",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 586,
            "end": 604,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 587,
                "end": 591,
                "typeName": {
                  "type": "Identifier",
                  "start": 587,
                  "end": 591,
                  "name": "Rest",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              {
                "type": "TSUnionType",
                "start": 593,
                "end": 603,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 593,
                    "end": 597,
                    "typeName": {
                      "type": "Identifier",
                      "start": 593,
                      "end": 597,
                      "name": "Char",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 600,
                    "end": 603,
                    "typeName": {
                      "type": "Identifier",
                      "start": 600,
                      "end": 603,
                      "name": "Acc",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            ]
          }
        },
        "falseType": {
          "type": "TSTypeReference",
          "start": 607,
          "end": 610,
          "typeName": {
            "type": "Identifier",
            "start": 607,
            "end": 610,
            "name": "Acc",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 613,
      "end": 699,
      "id": {
        "type": "Identifier",
        "start": 618,
        "end": 621,
        "name": "T20",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 624,
        "end": 698,
        "typeName": {
          "type": "Identifier",
          "start": 624,
          "end": 632,
          "name": "GetChars",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 632,
          "end": 698,
          "params": [
            {
              "type": "TSLiteralType",
              "start": 633,
              "end": 697,
              "literal": {
                "type": "Literal",
                "start": 633,
                "end": 697,
                "value": "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
                "raw": "'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'"
              }
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 701,
      "end": 759,
      "id": {
        "type": "Identifier",
        "start": 706,
        "end": 713,
        "name": "Reverse",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 713,
        "end": 716,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 714,
            "end": 715,
            "name": {
              "type": "Identifier",
              "start": 714,
              "end": 715,
              "name": "T",
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
        "type": "TSConditionalType",
        "start": 719,
        "end": 758,
        "checkType": {
          "type": "TSArrayType",
          "start": 719,
          "end": 724,
          "elementType": {
            "type": "TSAnyKeyword",
            "start": 719,
            "end": 722
          }
        },
        "extendsType": {
          "type": "TSTypeReference",
          "start": 733,
          "end": 734,
          "typeName": {
            "type": "Identifier",
            "start": 733,
            "end": 734,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 737,
          "end": 738,
          "typeName": {
            "type": "Identifier",
            "start": 737,
            "end": 738,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "falseType": {
          "type": "TSTypeReference",
          "start": 741,
          "end": 758,
          "typeName": {
            "type": "Identifier",
            "start": 741,
            "end": 751,
            "name": "ReverseRec",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 751,
            "end": 758,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 752,
                "end": 753,
                "typeName": {
                  "type": "Identifier",
                  "start": 752,
                  "end": 753,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              {
                "type": "TSTupleType",
                "start": 755,
                "end": 757,
                "elementTypes": []
              }
            ]
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 760,
      "end": 887,
      "id": {
        "type": "Identifier",
        "start": 765,
        "end": 775,
        "name": "ReverseRec",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 775,
        "end": 801,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 776,
            "end": 777,
            "name": {
              "type": "Identifier",
              "start": 776,
              "end": 777,
              "name": "T",
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
            "start": 779,
            "end": 800,
            "name": {
              "type": "Identifier",
              "start": 779,
              "end": 782,
              "name": "Acc",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSArrayType",
              "start": 791,
              "end": 800,
              "elementType": {
                "type": "TSUnknownKeyword",
                "start": 791,
                "end": 798
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
        "type": "TSConditionalType",
        "start": 808,
        "end": 886,
        "checkType": {
          "type": "TSTypeReference",
          "start": 808,
          "end": 809,
          "typeName": {
            "type": "Identifier",
            "start": 808,
            "end": 809,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSTupleType",
          "start": 818,
          "end": 845,
          "elementTypes": [
            {
              "type": "TSInferType",
              "start": 819,
              "end": 829,
              "typeParameter": {
                "type": "TSTypeParameter",
                "start": 825,
                "end": 829,
                "name": {
                  "type": "Identifier",
                  "start": 825,
                  "end": 829,
                  "name": "Head",
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
            },
            {
              "type": "TSRestType",
              "start": 831,
              "end": 844,
              "typeAnnotation": {
                "type": "TSInferType",
                "start": 834,
                "end": 844,
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "start": 840,
                  "end": 844,
                  "name": {
                    "type": "Identifier",
                    "start": 840,
                    "end": 844,
                    "name": "Tail",
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
              }
            }
          ]
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 848,
          "end": 880,
          "typeName": {
            "type": "Identifier",
            "start": 848,
            "end": 858,
            "name": "ReverseRec",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 858,
            "end": 880,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 859,
                "end": 863,
                "typeName": {
                  "type": "Identifier",
                  "start": 859,
                  "end": 863,
                  "name": "Tail",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              {
                "type": "TSTupleType",
                "start": 865,
                "end": 879,
                "elementTypes": [
                  {
                    "type": "TSTypeReference",
                    "start": 866,
                    "end": 870,
                    "typeName": {
                      "type": "Identifier",
                      "start": 866,
                      "end": 870,
                      "name": "Head",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSRestType",
                    "start": 872,
                    "end": 878,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 875,
                      "end": 878,
                      "typeName": {
                        "type": "Identifier",
                        "start": 875,
                        "end": 878,
                        "name": "Acc",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  }
                ]
              }
            ]
          }
        },
        "falseType": {
          "type": "TSTypeReference",
          "start": 883,
          "end": 886,
          "typeName": {
            "type": "Identifier",
            "start": 883,
            "end": 886,
            "name": "Acc",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 889,
      "end": 1060,
      "id": {
        "type": "Identifier",
        "start": 894,
        "end": 897,
        "name": "T30",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 900,
        "end": 1059,
        "typeName": {
          "type": "Identifier",
          "start": 900,
          "end": 907,
          "name": "Reverse",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 907,
          "end": 1059,
          "params": [
            {
              "type": "TSTupleType",
              "start": 908,
              "end": 1058,
              "elementTypes": [
                {
                  "type": "TSLiteralType",
                  "start": 909,
                  "end": 910,
                  "literal": {
                    "type": "Literal",
                    "start": 909,
                    "end": 910,
                    "value": 0,
                    "raw": "0"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 912,
                  "end": 913,
                  "literal": {
                    "type": "Literal",
                    "start": 912,
                    "end": 913,
                    "value": 1,
                    "raw": "1"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 915,
                  "end": 916,
                  "literal": {
                    "type": "Literal",
                    "start": 915,
                    "end": 916,
                    "value": 2,
                    "raw": "2"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 918,
                  "end": 919,
                  "literal": {
                    "type": "Literal",
                    "start": 918,
                    "end": 919,
                    "value": 3,
                    "raw": "3"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 921,
                  "end": 922,
                  "literal": {
                    "type": "Literal",
                    "start": 921,
                    "end": 922,
                    "value": 4,
                    "raw": "4"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 924,
                  "end": 925,
                  "literal": {
                    "type": "Literal",
                    "start": 924,
                    "end": 925,
                    "value": 5,
                    "raw": "5"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 927,
                  "end": 928,
                  "literal": {
                    "type": "Literal",
                    "start": 927,
                    "end": 928,
                    "value": 6,
                    "raw": "6"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 930,
                  "end": 931,
                  "literal": {
                    "type": "Literal",
                    "start": 930,
                    "end": 931,
                    "value": 7,
                    "raw": "7"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 933,
                  "end": 934,
                  "literal": {
                    "type": "Literal",
                    "start": 933,
                    "end": 934,
                    "value": 8,
                    "raw": "8"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 936,
                  "end": 937,
                  "literal": {
                    "type": "Literal",
                    "start": 936,
                    "end": 937,
                    "value": 9,
                    "raw": "9"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 939,
                  "end": 940,
                  "literal": {
                    "type": "Literal",
                    "start": 939,
                    "end": 940,
                    "value": 0,
                    "raw": "0"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 942,
                  "end": 943,
                  "literal": {
                    "type": "Literal",
                    "start": 942,
                    "end": 943,
                    "value": 1,
                    "raw": "1"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 945,
                  "end": 946,
                  "literal": {
                    "type": "Literal",
                    "start": 945,
                    "end": 946,
                    "value": 2,
                    "raw": "2"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 948,
                  "end": 949,
                  "literal": {
                    "type": "Literal",
                    "start": 948,
                    "end": 949,
                    "value": 3,
                    "raw": "3"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 951,
                  "end": 952,
                  "literal": {
                    "type": "Literal",
                    "start": 951,
                    "end": 952,
                    "value": 4,
                    "raw": "4"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 954,
                  "end": 955,
                  "literal": {
                    "type": "Literal",
                    "start": 954,
                    "end": 955,
                    "value": 5,
                    "raw": "5"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 957,
                  "end": 958,
                  "literal": {
                    "type": "Literal",
                    "start": 957,
                    "end": 958,
                    "value": 6,
                    "raw": "6"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 960,
                  "end": 961,
                  "literal": {
                    "type": "Literal",
                    "start": 960,
                    "end": 961,
                    "value": 7,
                    "raw": "7"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 963,
                  "end": 964,
                  "literal": {
                    "type": "Literal",
                    "start": 963,
                    "end": 964,
                    "value": 8,
                    "raw": "8"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 966,
                  "end": 967,
                  "literal": {
                    "type": "Literal",
                    "start": 966,
                    "end": 967,
                    "value": 9,
                    "raw": "9"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 969,
                  "end": 970,
                  "literal": {
                    "type": "Literal",
                    "start": 969,
                    "end": 970,
                    "value": 0,
                    "raw": "0"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 972,
                  "end": 973,
                  "literal": {
                    "type": "Literal",
                    "start": 972,
                    "end": 973,
                    "value": 1,
                    "raw": "1"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 975,
                  "end": 976,
                  "literal": {
                    "type": "Literal",
                    "start": 975,
                    "end": 976,
                    "value": 2,
                    "raw": "2"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 978,
                  "end": 979,
                  "literal": {
                    "type": "Literal",
                    "start": 978,
                    "end": 979,
                    "value": 3,
                    "raw": "3"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 981,
                  "end": 982,
                  "literal": {
                    "type": "Literal",
                    "start": 981,
                    "end": 982,
                    "value": 4,
                    "raw": "4"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 984,
                  "end": 985,
                  "literal": {
                    "type": "Literal",
                    "start": 984,
                    "end": 985,
                    "value": 5,
                    "raw": "5"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 987,
                  "end": 988,
                  "literal": {
                    "type": "Literal",
                    "start": 987,
                    "end": 988,
                    "value": 6,
                    "raw": "6"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 990,
                  "end": 991,
                  "literal": {
                    "type": "Literal",
                    "start": 990,
                    "end": 991,
                    "value": 7,
                    "raw": "7"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 993,
                  "end": 994,
                  "literal": {
                    "type": "Literal",
                    "start": 993,
                    "end": 994,
                    "value": 8,
                    "raw": "8"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 996,
                  "end": 997,
                  "literal": {
                    "type": "Literal",
                    "start": 996,
                    "end": 997,
                    "value": 9,
                    "raw": "9"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 999,
                  "end": 1000,
                  "literal": {
                    "type": "Literal",
                    "start": 999,
                    "end": 1000,
                    "value": 0,
                    "raw": "0"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 1002,
                  "end": 1003,
                  "literal": {
                    "type": "Literal",
                    "start": 1002,
                    "end": 1003,
                    "value": 1,
                    "raw": "1"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 1005,
                  "end": 1006,
                  "literal": {
                    "type": "Literal",
                    "start": 1005,
                    "end": 1006,
                    "value": 2,
                    "raw": "2"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 1008,
                  "end": 1009,
                  "literal": {
                    "type": "Literal",
                    "start": 1008,
                    "end": 1009,
                    "value": 3,
                    "raw": "3"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 1011,
                  "end": 1012,
                  "literal": {
                    "type": "Literal",
                    "start": 1011,
                    "end": 1012,
                    "value": 4,
                    "raw": "4"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 1014,
                  "end": 1015,
                  "literal": {
                    "type": "Literal",
                    "start": 1014,
                    "end": 1015,
                    "value": 5,
                    "raw": "5"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 1017,
                  "end": 1018,
                  "literal": {
                    "type": "Literal",
                    "start": 1017,
                    "end": 1018,
                    "value": 6,
                    "raw": "6"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 1020,
                  "end": 1021,
                  "literal": {
                    "type": "Literal",
                    "start": 1020,
                    "end": 1021,
                    "value": 7,
                    "raw": "7"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 1023,
                  "end": 1024,
                  "literal": {
                    "type": "Literal",
                    "start": 1023,
                    "end": 1024,
                    "value": 8,
                    "raw": "8"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 1026,
                  "end": 1027,
                  "literal": {
                    "type": "Literal",
                    "start": 1026,
                    "end": 1027,
                    "value": 9,
                    "raw": "9"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 1029,
                  "end": 1030,
                  "literal": {
                    "type": "Literal",
                    "start": 1029,
                    "end": 1030,
                    "value": 0,
                    "raw": "0"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 1032,
                  "end": 1033,
                  "literal": {
                    "type": "Literal",
                    "start": 1032,
                    "end": 1033,
                    "value": 1,
                    "raw": "1"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 1035,
                  "end": 1036,
                  "literal": {
                    "type": "Literal",
                    "start": 1035,
                    "end": 1036,
                    "value": 2,
                    "raw": "2"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 1038,
                  "end": 1039,
                  "literal": {
                    "type": "Literal",
                    "start": 1038,
                    "end": 1039,
                    "value": 3,
                    "raw": "3"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 1041,
                  "end": 1042,
                  "literal": {
                    "type": "Literal",
                    "start": 1041,
                    "end": 1042,
                    "value": 4,
                    "raw": "4"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 1044,
                  "end": 1045,
                  "literal": {
                    "type": "Literal",
                    "start": 1044,
                    "end": 1045,
                    "value": 5,
                    "raw": "5"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 1047,
                  "end": 1048,
                  "literal": {
                    "type": "Literal",
                    "start": 1047,
                    "end": 1048,
                    "value": 6,
                    "raw": "6"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 1050,
                  "end": 1051,
                  "literal": {
                    "type": "Literal",
                    "start": 1050,
                    "end": 1051,
                    "value": 7,
                    "raw": "7"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 1053,
                  "end": 1054,
                  "literal": {
                    "type": "Literal",
                    "start": 1053,
                    "end": 1054,
                    "value": 8,
                    "raw": "8"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 1056,
                  "end": 1057,
                  "literal": {
                    "type": "Literal",
                    "start": 1056,
                    "end": 1057,
                    "value": 9,
                    "raw": "9"
                  }
                }
              ]
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1061,
      "end": 1090,
      "id": {
        "type": "Identifier",
        "start": 1066,
        "end": 1069,
        "name": "T31",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 1072,
        "end": 1089,
        "typeName": {
          "type": "Identifier",
          "start": 1072,
          "end": 1079,
          "name": "Reverse",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 1079,
          "end": 1089,
          "params": [
            {
              "type": "TSArrayType",
              "start": 1080,
              "end": 1088,
              "elementType": {
                "type": "TSStringKeyword",
                "start": 1080,
                "end": 1086
              }
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1092,
      "end": 1174,
      "id": {
        "type": "Identifier",
        "start": 1097,
        "end": 1104,
        "name": "TupleOf",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1104,
        "end": 1125,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1105,
            "end": 1106,
            "name": {
              "type": "Identifier",
              "start": 1105,
              "end": 1106,
              "name": "T",
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
            "start": 1108,
            "end": 1124,
            "name": {
              "type": "Identifier",
              "start": 1108,
              "end": 1109,
              "name": "N",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 1118,
              "end": 1124
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 1128,
        "end": 1173,
        "checkType": {
          "type": "TSNumberKeyword",
          "start": 1128,
          "end": 1134
        },
        "extendsType": {
          "type": "TSTypeReference",
          "start": 1143,
          "end": 1144,
          "typeName": {
            "type": "Identifier",
            "start": 1143,
            "end": 1144,
            "name": "N",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "trueType": {
          "type": "TSArrayType",
          "start": 1147,
          "end": 1150,
          "elementType": {
            "type": "TSTypeReference",
            "start": 1147,
            "end": 1148,
            "typeName": {
              "type": "Identifier",
              "start": 1147,
              "end": 1148,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        },
        "falseType": {
          "type": "TSTypeReference",
          "start": 1153,
          "end": 1173,
          "typeName": {
            "type": "Identifier",
            "start": 1153,
            "end": 1163,
            "name": "TupleOfRec",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 1163,
            "end": 1173,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 1164,
                "end": 1165,
                "typeName": {
                  "type": "Identifier",
                  "start": 1164,
                  "end": 1165,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              {
                "type": "TSTypeReference",
                "start": 1167,
                "end": 1168,
                "typeName": {
                  "type": "Identifier",
                  "start": 1167,
                  "end": 1168,
                  "name": "N",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              {
                "type": "TSTupleType",
                "start": 1170,
                "end": 1172,
                "elementTypes": []
              }
            ]
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1175,
      "end": 1303,
      "id": {
        "type": "Identifier",
        "start": 1180,
        "end": 1190,
        "name": "TupleOfRec",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1190,
        "end": 1234,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1191,
            "end": 1192,
            "name": {
              "type": "Identifier",
              "start": 1191,
              "end": 1192,
              "name": "T",
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
            "start": 1194,
            "end": 1210,
            "name": {
              "type": "Identifier",
              "start": 1194,
              "end": 1195,
              "name": "N",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 1204,
              "end": 1210
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 1212,
            "end": 1233,
            "name": {
              "type": "Identifier",
              "start": 1212,
              "end": 1215,
              "name": "Acc",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSArrayType",
              "start": 1224,
              "end": 1233,
              "elementType": {
                "type": "TSUnknownKeyword",
                "start": 1224,
                "end": 1231
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
        "type": "TSConditionalType",
        "start": 1241,
        "end": 1302,
        "checkType": {
          "type": "TSIndexedAccessType",
          "start": 1241,
          "end": 1254,
          "objectType": {
            "type": "TSTypeReference",
            "start": 1241,
            "end": 1244,
            "typeName": {
              "type": "Identifier",
              "start": 1241,
              "end": 1244,
              "name": "Acc",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          "indexType": {
            "type": "TSLiteralType",
            "start": 1245,
            "end": 1253,
            "literal": {
              "type": "Literal",
              "start": 1245,
              "end": 1253,
              "value": "length",
              "raw": "\"length\""
            }
          }
        },
        "extendsType": {
          "type": "TSTypeReference",
          "start": 1263,
          "end": 1264,
          "typeName": {
            "type": "Identifier",
            "start": 1263,
            "end": 1264,
            "name": "N",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 1267,
          "end": 1270,
          "typeName": {
            "type": "Identifier",
            "start": 1267,
            "end": 1270,
            "name": "Acc",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "falseType": {
          "type": "TSTypeReference",
          "start": 1273,
          "end": 1302,
          "typeName": {
            "type": "Identifier",
            "start": 1273,
            "end": 1283,
            "name": "TupleOfRec",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 1283,
            "end": 1302,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 1284,
                "end": 1285,
                "typeName": {
                  "type": "Identifier",
                  "start": 1284,
                  "end": 1285,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              {
                "type": "TSTypeReference",
                "start": 1287,
                "end": 1288,
                "typeName": {
                  "type": "Identifier",
                  "start": 1287,
                  "end": 1288,
                  "name": "N",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              {
                "type": "TSTupleType",
                "start": 1290,
                "end": 1301,
                "elementTypes": [
                  {
                    "type": "TSTypeReference",
                    "start": 1291,
                    "end": 1292,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1291,
                      "end": 1292,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSRestType",
                    "start": 1294,
                    "end": 1300,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1297,
                      "end": 1300,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1297,
                        "end": 1300,
                        "name": "Acc",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  }
                ]
              }
            ]
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1305,
      "end": 1334,
      "id": {
        "type": "Identifier",
        "start": 1310,
        "end": 1313,
        "name": "T40",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 1316,
        "end": 1333,
        "typeName": {
          "type": "Identifier",
          "start": 1316,
          "end": 1323,
          "name": "TupleOf",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 1323,
          "end": 1333,
          "params": [
            {
              "type": "TSAnyKeyword",
              "start": 1324,
              "end": 1327
            },
            {
              "type": "TSLiteralType",
              "start": 1329,
              "end": 1332,
              "literal": {
                "type": "Literal",
                "start": 1329,
                "end": 1332,
                "value": 200,
                "raw": "200"
              }
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1335,
      "end": 1367,
      "id": {
        "type": "Identifier",
        "start": 1340,
        "end": 1343,
        "name": "T41",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 1346,
        "end": 1366,
        "typeName": {
          "type": "Identifier",
          "start": 1346,
          "end": 1353,
          "name": "TupleOf",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 1353,
          "end": 1366,
          "params": [
            {
              "type": "TSAnyKeyword",
              "start": 1354,
              "end": 1357
            },
            {
              "type": "TSNumberKeyword",
              "start": 1359,
              "end": 1365
            }
          ]
        }
      },
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
