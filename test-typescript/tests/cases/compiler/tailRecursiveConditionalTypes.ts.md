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
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 9,
        "decorators": [],
        "name": "Trim",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 34,
        "end": 115,
        "checkType": {
          "type": "TSTypeReference",
          "start": 34,
          "end": 35,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 34,
            "end": 35,
            "decorators": [],
            "name": "S",
            "optional": false,
            "typeAnnotation": null
          }
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
              "tail": false,
              "value": {
                "cooked": " ",
                "raw": " "
              }
            },
            {
              "type": "TemplateElement",
              "start": 55,
              "end": 57,
              "tail": true,
              "value": {
                "cooked": "",
                "raw": ""
              }
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
                "const": false,
                "constraint": null,
                "default": null,
                "in": false,
                "name": {
                  "type": "Identifier",
                  "start": 54,
                  "end": 55,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "out": false
              }
            }
          ]
        },
        "falseType": {
          "type": "TSConditionalType",
          "start": 74,
          "end": 115,
          "checkType": {
            "type": "TSTypeReference",
            "start": 74,
            "end": 75,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 74,
              "end": 75,
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null
            }
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
                "tail": false,
                "value": {
                  "cooked": "",
                  "raw": ""
                }
              },
              {
                "type": "TemplateElement",
                "start": 94,
                "end": 97,
                "tail": true,
                "value": {
                  "cooked": " ",
                  "raw": " "
                }
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
                  "const": false,
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 93,
                    "end": 94,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "out": false
                }
              }
            ]
          },
          "falseType": {
            "type": "TSTypeReference",
            "start": 114,
            "end": 115,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 114,
              "end": 115,
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "trueType": {
            "type": "TSTypeReference",
            "start": 100,
            "end": 107,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 104,
              "end": 107,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 105,
                  "end": 106,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 105,
                    "end": 106,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "typeName": {
              "type": "Identifier",
              "start": 100,
              "end": 104,
              "decorators": [],
              "name": "Trim",
              "optional": false,
              "typeAnnotation": null
            }
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 60,
          "end": 67,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 64,
            "end": 67,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 65,
                "end": 66,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 65,
                  "end": 66,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 60,
            "end": 64,
            "decorators": [],
            "name": "Trim",
            "optional": false,
            "typeAnnotation": null
          }
        }
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
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "start": 20,
              "end": 26
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 10,
              "end": 11,
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
      "type": "TSTypeAliasDeclaration",
      "start": 118,
      "end": 288,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 123,
        "end": 126,
        "decorators": [],
        "name": "T10",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 129,
        "end": 287,
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
                "raw": "'                                                                                                                                                hello '",
                "value": "                                                                                                                                                hello "
              }
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 129,
          "end": 133,
          "decorators": [],
          "name": "Trim",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 289,
      "end": 459,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 294,
        "end": 297,
        "decorators": [],
        "name": "T11",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 300,
        "end": 458,
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
                "raw": "' hello                                                                                                                                                '",
                "value": " hello                                                                                                                                                "
              }
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 300,
          "end": 304,
          "decorators": [],
          "name": "Trim",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 461,
      "end": 502,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 466,
        "end": 474,
        "decorators": [],
        "name": "GetChars",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 480,
        "end": 501,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 491,
          "end": 501,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 492,
              "end": 493,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 492,
                "end": 493,
                "decorators": [],
                "name": "S",
                "optional": false,
                "typeAnnotation": null
              }
            },
            {
              "type": "TSNeverKeyword",
              "start": 495,
              "end": 500
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 480,
          "end": 491,
          "decorators": [],
          "name": "GetCharsRec",
          "optional": false,
          "typeAnnotation": null
        }
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
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 475,
              "end": 476,
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
      "type": "TSTypeAliasDeclaration",
      "start": 503,
      "end": 611,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 508,
        "end": 519,
        "decorators": [],
        "name": "GetCharsRec",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 534,
        "end": 610,
        "checkType": {
          "type": "TSTypeReference",
          "start": 534,
          "end": 535,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 534,
            "end": 535,
            "decorators": [],
            "name": "S",
            "optional": false,
            "typeAnnotation": null
          }
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
              "tail": false,
              "value": {
                "cooked": "",
                "raw": ""
              }
            },
            {
              "type": "TemplateElement",
              "start": 557,
              "end": 560,
              "tail": false,
              "value": {
                "cooked": "",
                "raw": ""
              }
            },
            {
              "type": "TemplateElement",
              "start": 570,
              "end": 572,
              "tail": true,
              "value": {
                "cooked": "",
                "raw": ""
              }
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
                "const": false,
                "constraint": null,
                "default": null,
                "in": false,
                "name": {
                  "type": "Identifier",
                  "start": 553,
                  "end": 557,
                  "decorators": [],
                  "name": "Char",
                  "optional": false,
                  "typeAnnotation": null
                },
                "out": false
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
                "const": false,
                "constraint": null,
                "default": null,
                "in": false,
                "name": {
                  "type": "Identifier",
                  "start": 566,
                  "end": 570,
                  "decorators": [],
                  "name": "Rest",
                  "optional": false,
                  "typeAnnotation": null
                },
                "out": false
              }
            }
          ]
        },
        "falseType": {
          "type": "TSTypeReference",
          "start": 607,
          "end": 610,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 607,
            "end": 610,
            "decorators": [],
            "name": "Acc",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 575,
          "end": 604,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 586,
            "end": 604,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 587,
                "end": 591,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 587,
                  "end": 591,
                  "decorators": [],
                  "name": "Rest",
                  "optional": false,
                  "typeAnnotation": null
                }
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
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 593,
                      "end": 597,
                      "decorators": [],
                      "name": "Char",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 600,
                    "end": 603,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 600,
                      "end": 603,
                      "decorators": [],
                      "name": "Acc",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 575,
            "end": 586,
            "decorators": [],
            "name": "GetCharsRec",
            "optional": false,
            "typeAnnotation": null
          }
        }
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
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 520,
              "end": 521,
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 523,
            "end": 526,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 523,
              "end": 526,
              "decorators": [],
              "name": "Acc",
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
      "start": 613,
      "end": 699,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 618,
        "end": 621,
        "decorators": [],
        "name": "T20",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 624,
        "end": 698,
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
                "raw": "'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'",
                "value": "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
              }
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 624,
          "end": 632,
          "decorators": [],
          "name": "GetChars",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 701,
      "end": 759,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 706,
        "end": 713,
        "decorators": [],
        "name": "Reverse",
        "optional": false,
        "typeAnnotation": null
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
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 733,
            "end": 734,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "falseType": {
          "type": "TSTypeReference",
          "start": 741,
          "end": 758,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 751,
            "end": 758,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 752,
                "end": 753,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 752,
                  "end": 753,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "TSTupleType",
                "start": 755,
                "end": 757,
                "elementTypes": []
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 741,
            "end": 751,
            "decorators": [],
            "name": "ReverseRec",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 737,
          "end": 738,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 737,
            "end": 738,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          }
        }
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
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 714,
              "end": 715,
              "decorators": [],
              "name": "T",
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
      "start": 760,
      "end": 887,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 765,
        "end": 775,
        "decorators": [],
        "name": "ReverseRec",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 808,
        "end": 886,
        "checkType": {
          "type": "TSTypeReference",
          "start": 808,
          "end": 809,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 808,
            "end": 809,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          }
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
                "const": false,
                "constraint": null,
                "default": null,
                "in": false,
                "name": {
                  "type": "Identifier",
                  "start": 825,
                  "end": 829,
                  "decorators": [],
                  "name": "Head",
                  "optional": false,
                  "typeAnnotation": null
                },
                "out": false
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
                  "const": false,
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 840,
                    "end": 844,
                    "decorators": [],
                    "name": "Tail",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "out": false
                }
              }
            }
          ]
        },
        "falseType": {
          "type": "TSTypeReference",
          "start": 883,
          "end": 886,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 883,
            "end": 886,
            "decorators": [],
            "name": "Acc",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 848,
          "end": 880,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 858,
            "end": 880,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 859,
                "end": 863,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 859,
                  "end": 863,
                  "decorators": [],
                  "name": "Tail",
                  "optional": false,
                  "typeAnnotation": null
                }
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
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 866,
                      "end": 870,
                      "decorators": [],
                      "name": "Head",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSRestType",
                    "start": 872,
                    "end": 878,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 875,
                      "end": 878,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 875,
                        "end": 878,
                        "decorators": [],
                        "name": "Acc",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                ]
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 848,
            "end": 858,
            "decorators": [],
            "name": "ReverseRec",
            "optional": false,
            "typeAnnotation": null
          }
        }
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
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 776,
              "end": 777,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 779,
            "end": 800,
            "const": false,
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
            "name": {
              "type": "Identifier",
              "start": 779,
              "end": 782,
              "decorators": [],
              "name": "Acc",
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
      "start": 889,
      "end": 1060,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 894,
        "end": 897,
        "decorators": [],
        "name": "T30",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 900,
        "end": 1059,
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
                    "raw": "0",
                    "value": 0
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
                    "raw": "1",
                    "value": 1
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
                    "raw": "2",
                    "value": 2
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
                    "raw": "3",
                    "value": 3
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
                    "raw": "4",
                    "value": 4
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
                    "raw": "5",
                    "value": 5
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
                    "raw": "6",
                    "value": 6
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
                    "raw": "7",
                    "value": 7
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
                    "raw": "8",
                    "value": 8
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
                    "raw": "9",
                    "value": 9
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
                    "raw": "0",
                    "value": 0
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
                    "raw": "1",
                    "value": 1
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
                    "raw": "2",
                    "value": 2
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
                    "raw": "3",
                    "value": 3
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
                    "raw": "4",
                    "value": 4
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
                    "raw": "5",
                    "value": 5
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
                    "raw": "6",
                    "value": 6
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
                    "raw": "7",
                    "value": 7
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
                    "raw": "8",
                    "value": 8
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
                    "raw": "9",
                    "value": 9
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
                    "raw": "0",
                    "value": 0
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
                    "raw": "1",
                    "value": 1
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
                    "raw": "2",
                    "value": 2
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
                    "raw": "3",
                    "value": 3
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
                    "raw": "4",
                    "value": 4
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
                    "raw": "5",
                    "value": 5
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
                    "raw": "6",
                    "value": 6
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
                    "raw": "7",
                    "value": 7
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
                    "raw": "8",
                    "value": 8
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
                    "raw": "9",
                    "value": 9
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
                    "raw": "0",
                    "value": 0
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
                    "raw": "1",
                    "value": 1
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
                    "raw": "2",
                    "value": 2
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
                    "raw": "3",
                    "value": 3
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
                    "raw": "4",
                    "value": 4
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
                    "raw": "5",
                    "value": 5
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
                    "raw": "6",
                    "value": 6
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
                    "raw": "7",
                    "value": 7
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
                    "raw": "8",
                    "value": 8
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
                    "raw": "9",
                    "value": 9
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
                    "raw": "0",
                    "value": 0
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
                    "raw": "1",
                    "value": 1
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
                    "raw": "2",
                    "value": 2
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
                    "raw": "3",
                    "value": 3
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
                    "raw": "4",
                    "value": 4
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
                    "raw": "5",
                    "value": 5
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
                    "raw": "6",
                    "value": 6
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
                    "raw": "7",
                    "value": 7
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
                    "raw": "8",
                    "value": 8
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
                    "raw": "9",
                    "value": 9
                  }
                }
              ]
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 900,
          "end": 907,
          "decorators": [],
          "name": "Reverse",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1061,
      "end": 1090,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1066,
        "end": 1069,
        "decorators": [],
        "name": "T31",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 1072,
        "end": 1089,
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
        },
        "typeName": {
          "type": "Identifier",
          "start": 1072,
          "end": 1079,
          "decorators": [],
          "name": "Reverse",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1092,
      "end": 1174,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1097,
        "end": 1104,
        "decorators": [],
        "name": "TupleOf",
        "optional": false,
        "typeAnnotation": null
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
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 1143,
            "end": 1144,
            "decorators": [],
            "name": "N",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "falseType": {
          "type": "TSTypeReference",
          "start": 1153,
          "end": 1173,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 1163,
            "end": 1173,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 1164,
                "end": 1165,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 1164,
                  "end": 1165,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "TSTypeReference",
                "start": 1167,
                "end": 1168,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 1167,
                  "end": 1168,
                  "decorators": [],
                  "name": "N",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "TSTupleType",
                "start": 1170,
                "end": 1172,
                "elementTypes": []
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 1153,
            "end": 1163,
            "decorators": [],
            "name": "TupleOfRec",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "trueType": {
          "type": "TSArrayType",
          "start": 1147,
          "end": 1150,
          "elementType": {
            "type": "TSTypeReference",
            "start": 1147,
            "end": 1148,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 1147,
              "end": 1148,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
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
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1105,
              "end": 1106,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 1108,
            "end": 1124,
            "const": false,
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 1118,
              "end": 1124
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1108,
              "end": 1109,
              "decorators": [],
              "name": "N",
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
      "start": 1175,
      "end": 1303,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1180,
        "end": 1190,
        "decorators": [],
        "name": "TupleOfRec",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 1241,
        "end": 1302,
        "checkType": {
          "type": "TSIndexedAccessType",
          "start": 1241,
          "end": 1254,
          "indexType": {
            "type": "TSLiteralType",
            "start": 1245,
            "end": 1253,
            "literal": {
              "type": "Literal",
              "start": 1245,
              "end": 1253,
              "raw": "\"length\"",
              "value": "length"
            }
          },
          "objectType": {
            "type": "TSTypeReference",
            "start": 1241,
            "end": 1244,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 1241,
              "end": 1244,
              "decorators": [],
              "name": "Acc",
              "optional": false,
              "typeAnnotation": null
            }
          }
        },
        "extendsType": {
          "type": "TSTypeReference",
          "start": 1263,
          "end": 1264,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 1263,
            "end": 1264,
            "decorators": [],
            "name": "N",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "falseType": {
          "type": "TSTypeReference",
          "start": 1273,
          "end": 1302,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 1283,
            "end": 1302,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 1284,
                "end": 1285,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 1284,
                  "end": 1285,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "TSTypeReference",
                "start": 1287,
                "end": 1288,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 1287,
                  "end": 1288,
                  "decorators": [],
                  "name": "N",
                  "optional": false,
                  "typeAnnotation": null
                }
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
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1291,
                      "end": 1292,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSRestType",
                    "start": 1294,
                    "end": 1300,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1297,
                      "end": 1300,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1297,
                        "end": 1300,
                        "decorators": [],
                        "name": "Acc",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                ]
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 1273,
            "end": 1283,
            "decorators": [],
            "name": "TupleOfRec",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 1267,
          "end": 1270,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 1267,
            "end": 1270,
            "decorators": [],
            "name": "Acc",
            "optional": false,
            "typeAnnotation": null
          }
        }
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
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1191,
              "end": 1192,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 1194,
            "end": 1210,
            "const": false,
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 1204,
              "end": 1210
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1194,
              "end": 1195,
              "decorators": [],
              "name": "N",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 1212,
            "end": 1233,
            "const": false,
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
            "name": {
              "type": "Identifier",
              "start": 1212,
              "end": 1215,
              "decorators": [],
              "name": "Acc",
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
      "start": 1305,
      "end": 1334,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1310,
        "end": 1313,
        "decorators": [],
        "name": "T40",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 1316,
        "end": 1333,
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
                "raw": "200",
                "value": 200
              }
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 1316,
          "end": 1323,
          "decorators": [],
          "name": "TupleOf",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1335,
      "end": 1367,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1340,
        "end": 1343,
        "decorators": [],
        "name": "T41",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 1346,
        "end": 1366,
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
        },
        "typeName": {
          "type": "Identifier",
          "start": 1346,
          "end": 1353,
          "decorators": [],
          "name": "TupleOf",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
