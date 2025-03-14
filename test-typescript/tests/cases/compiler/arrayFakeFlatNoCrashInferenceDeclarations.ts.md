__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    474
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BadFlatArray",
        "optional": false,
        "range": [
          5,
          17
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 1
          },
          "start": {
            "column": 5,
            "line": 1
          }
        }
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "indexType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "raw": "\"obj\"",
            "value": "obj",
            "range": [
              293,
              298
            ],
            "loc": {
              "end": {
                "column": 45,
                "line": 6
              },
              "start": {
                "column": 40,
                "line": 6
              }
            }
          },
          "range": [
            293,
            298
          ],
          "loc": {
            "end": {
              "column": 45,
              "line": 6
            },
            "start": {
              "column": 40,
              "line": 6
            }
          }
        },
        "objectType": {
          "type": "TSTypeLiteral",
          "members": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj",
                "optional": false,
                "range": [
                  48,
                  51
                ],
                "loc": {
                  "end": {
                    "column": 51,
                    "line": 1
                  },
                  "start": {
                    "column": 48,
                    "line": 1
                  }
                }
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 6
                  },
                  "start": {
                    "column": 51,
                    "line": 1
                  }
                },
                "range": [
                  51,
                  291
                ],
                "typeAnnotation": {
                  "type": "TSIndexedAccessType",
                  "indexType": {
                    "type": "TSConditionalType",
                    "checkType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Depth",
                        "optional": false,
                        "range": [
                          255,
                          260
                        ],
                        "loc": {
                          "end": {
                            "column": 7,
                            "line": 6
                          },
                          "start": {
                            "column": 2,
                            "line": 6
                          }
                        }
                      },
                      "range": [
                        255,
                        260
                      ],
                      "loc": {
                        "end": {
                          "column": 7,
                          "line": 6
                        },
                        "start": {
                          "column": 2,
                          "line": 6
                        }
                      }
                    },
                    "extendsType": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "UnaryExpression",
                        "argument": {
                          "type": "Literal",
                          "raw": "1",
                          "value": 1,
                          "range": [
                            270,
                            271
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 6
                            },
                            "start": {
                              "column": 17,
                              "line": 6
                            }
                          }
                        },
                        "operator": "-",
                        "prefix": true,
                        "range": [
                          269,
                          271
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 6
                          },
                          "start": {
                            "column": 16,
                            "line": 6
                          }
                        }
                      },
                      "range": [
                        269,
                        271
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 6
                        },
                        "start": {
                          "column": 16,
                          "line": 6
                        }
                      }
                    },
                    "falseType": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "raw": "\"recur\"",
                        "value": "recur",
                        "range": [
                          283,
                          290
                        ],
                        "loc": {
                          "end": {
                            "column": 37,
                            "line": 6
                          },
                          "start": {
                            "column": 30,
                            "line": 6
                          }
                        }
                      },
                      "range": [
                        283,
                        290
                      ],
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 6
                        },
                        "start": {
                          "column": 30,
                          "line": 6
                        }
                      }
                    },
                    "trueType": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "raw": "\"done\"",
                        "value": "done",
                        "range": [
                          274,
                          280
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 6
                          },
                          "start": {
                            "column": 21,
                            "line": 6
                          }
                        }
                      },
                      "range": [
                        274,
                        280
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 6
                        },
                        "start": {
                          "column": 21,
                          "line": 6
                        }
                      }
                    },
                    "range": [
                      255,
                      290
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 6
                      },
                      "start": {
                        "column": 2,
                        "line": 6
                      }
                    }
                  },
                  "objectType": {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "key": {
                          "type": "Literal",
                          "raw": "\"done\"",
                          "value": "done",
                          "range": [
                            59,
                            65
                          ],
                          "loc": {
                            "end": {
                              "column": 10,
                              "line": 2
                            },
                            "start": {
                              "column": 4,
                              "line": 2
                            }
                          }
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 15,
                              "line": 2
                            },
                            "start": {
                              "column": 10,
                              "line": 2
                            }
                          },
                          "range": [
                            65,
                            70
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Arr",
                              "optional": false,
                              "range": [
                                67,
                                70
                              ],
                              "loc": {
                                "end": {
                                  "column": 15,
                                  "line": 2
                                },
                                "start": {
                                  "column": 12,
                                  "line": 2
                                }
                              }
                            },
                            "range": [
                              67,
                              70
                            ],
                            "loc": {
                              "end": {
                                "column": 15,
                                "line": 2
                              },
                              "start": {
                                "column": 12,
                                "line": 2
                              }
                            }
                          }
                        },
                        "range": [
                          59,
                          71
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 2
                          },
                          "start": {
                            "column": 4,
                            "line": 2
                          }
                        }
                      },
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "key": {
                          "type": "Literal",
                          "raw": "\"recur\"",
                          "value": "recur",
                          "range": [
                            76,
                            83
                          ],
                          "loc": {
                            "end": {
                              "column": 11,
                              "line": 3
                            },
                            "start": {
                              "column": 4,
                              "line": 3
                            }
                          }
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 5
                            },
                            "start": {
                              "column": 11,
                              "line": 3
                            }
                          },
                          "range": [
                            83,
                            252
                          ],
                          "typeAnnotation": {
                            "type": "TSConditionalType",
                            "checkType": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Arr",
                                "optional": false,
                                "range": [
                                  85,
                                  88
                                ],
                                "loc": {
                                  "end": {
                                    "column": 16,
                                    "line": 3
                                  },
                                  "start": {
                                    "column": 13,
                                    "line": 3
                                  }
                                }
                              },
                              "range": [
                                85,
                                88
                              ],
                              "loc": {
                                "end": {
                                  "column": 16,
                                  "line": 3
                                },
                                "start": {
                                  "column": 13,
                                  "line": 3
                                }
                              }
                            },
                            "extendsType": {
                              "type": "TSTypeReference",
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "range": [
                                  110,
                                  126
                                ],
                                "params": [
                                  {
                                    "type": "TSInferType",
                                    "typeParameter": {
                                      "type": "TSTypeParameter",
                                      "const": false,
                                      "in": false,
                                      "name": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "InnerArr",
                                        "optional": false,
                                        "range": [
                                          117,
                                          125
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 53,
                                            "line": 3
                                          },
                                          "start": {
                                            "column": 45,
                                            "line": 3
                                          }
                                        }
                                      },
                                      "out": false,
                                      "range": [
                                        117,
                                        125
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 53,
                                          "line": 3
                                        },
                                        "start": {
                                          "column": 45,
                                          "line": 3
                                        }
                                      }
                                    },
                                    "range": [
                                      111,
                                      125
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 53,
                                        "line": 3
                                      },
                                      "start": {
                                        "column": 39,
                                        "line": 3
                                      }
                                    }
                                  }
                                ],
                                "loc": {
                                  "end": {
                                    "column": 54,
                                    "line": 3
                                  },
                                  "start": {
                                    "column": 38,
                                    "line": 3
                                  }
                                }
                              },
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "ReadonlyArray",
                                "optional": false,
                                "range": [
                                  97,
                                  110
                                ],
                                "loc": {
                                  "end": {
                                    "column": 38,
                                    "line": 3
                                  },
                                  "start": {
                                    "column": 25,
                                    "line": 3
                                  }
                                }
                              },
                              "range": [
                                97,
                                126
                              ],
                              "loc": {
                                "end": {
                                  "column": 54,
                                  "line": 3
                                },
                                "start": {
                                  "column": 25,
                                  "line": 3
                                }
                              }
                            },
                            "falseType": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Arr",
                                "optional": false,
                                "range": [
                                  249,
                                  252
                                ],
                                "loc": {
                                  "end": {
                                    "column": 9,
                                    "line": 5
                                  },
                                  "start": {
                                    "column": 6,
                                    "line": 5
                                  }
                                }
                              },
                              "range": [
                                249,
                                252
                              ],
                              "loc": {
                                "end": {
                                  "column": 9,
                                  "line": 5
                                },
                                "start": {
                                  "column": 6,
                                  "line": 5
                                }
                              }
                            },
                            "trueType": {
                              "type": "TSTypeReference",
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "range": [
                                  145,
                                  242
                                ],
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "InnerArr",
                                      "optional": false,
                                      "range": [
                                        146,
                                        154
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 27,
                                          "line": 4
                                        },
                                        "start": {
                                          "column": 19,
                                          "line": 4
                                        }
                                      }
                                    },
                                    "range": [
                                      146,
                                      154
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 27,
                                        "line": 4
                                      },
                                      "start": {
                                        "column": 19,
                                        "line": 4
                                      }
                                    }
                                  },
                                  {
                                    "type": "TSIndexedAccessType",
                                    "indexType": {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "Depth",
                                        "optional": false,
                                        "range": [
                                          235,
                                          240
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 113,
                                            "line": 4
                                          },
                                          "start": {
                                            "column": 108,
                                            "line": 4
                                          }
                                        }
                                      },
                                      "range": [
                                        235,
                                        240
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 113,
                                          "line": 4
                                        },
                                        "start": {
                                          "column": 108,
                                          "line": 4
                                        }
                                      }
                                    },
                                    "objectType": {
                                      "type": "TSTupleType",
                                      "elementTypes": [
                                        {
                                          "type": "TSLiteralType",
                                          "literal": {
                                            "type": "UnaryExpression",
                                            "argument": {
                                              "type": "Literal",
                                              "raw": "1",
                                              "value": 1,
                                              "range": [
                                                158,
                                                159
                                              ],
                                              "loc": {
                                                "end": {
                                                  "column": 32,
                                                  "line": 4
                                                },
                                                "start": {
                                                  "column": 31,
                                                  "line": 4
                                                }
                                              }
                                            },
                                            "operator": "-",
                                            "prefix": true,
                                            "range": [
                                              157,
                                              159
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 32,
                                                "line": 4
                                              },
                                              "start": {
                                                "column": 30,
                                                "line": 4
                                              }
                                            }
                                          },
                                          "range": [
                                            157,
                                            159
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 32,
                                              "line": 4
                                            },
                                            "start": {
                                              "column": 30,
                                              "line": 4
                                            }
                                          }
                                        },
                                        {
                                          "type": "TSLiteralType",
                                          "literal": {
                                            "type": "Literal",
                                            "raw": "0",
                                            "value": 0,
                                            "range": [
                                              161,
                                              162
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 35,
                                                "line": 4
                                              },
                                              "start": {
                                                "column": 34,
                                                "line": 4
                                              }
                                            }
                                          },
                                          "range": [
                                            161,
                                            162
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 35,
                                              "line": 4
                                            },
                                            "start": {
                                              "column": 34,
                                              "line": 4
                                            }
                                          }
                                        },
                                        {
                                          "type": "TSLiteralType",
                                          "literal": {
                                            "type": "Literal",
                                            "raw": "1",
                                            "value": 1,
                                            "range": [
                                              164,
                                              165
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 38,
                                                "line": 4
                                              },
                                              "start": {
                                                "column": 37,
                                                "line": 4
                                              }
                                            }
                                          },
                                          "range": [
                                            164,
                                            165
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 38,
                                              "line": 4
                                            },
                                            "start": {
                                              "column": 37,
                                              "line": 4
                                            }
                                          }
                                        },
                                        {
                                          "type": "TSLiteralType",
                                          "literal": {
                                            "type": "Literal",
                                            "raw": "2",
                                            "value": 2,
                                            "range": [
                                              167,
                                              168
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 41,
                                                "line": 4
                                              },
                                              "start": {
                                                "column": 40,
                                                "line": 4
                                              }
                                            }
                                          },
                                          "range": [
                                            167,
                                            168
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 41,
                                              "line": 4
                                            },
                                            "start": {
                                              "column": 40,
                                              "line": 4
                                            }
                                          }
                                        },
                                        {
                                          "type": "TSLiteralType",
                                          "literal": {
                                            "type": "Literal",
                                            "raw": "3",
                                            "value": 3,
                                            "range": [
                                              170,
                                              171
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 44,
                                                "line": 4
                                              },
                                              "start": {
                                                "column": 43,
                                                "line": 4
                                              }
                                            }
                                          },
                                          "range": [
                                            170,
                                            171
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 44,
                                              "line": 4
                                            },
                                            "start": {
                                              "column": 43,
                                              "line": 4
                                            }
                                          }
                                        },
                                        {
                                          "type": "TSLiteralType",
                                          "literal": {
                                            "type": "Literal",
                                            "raw": "4",
                                            "value": 4,
                                            "range": [
                                              173,
                                              174
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 47,
                                                "line": 4
                                              },
                                              "start": {
                                                "column": 46,
                                                "line": 4
                                              }
                                            }
                                          },
                                          "range": [
                                            173,
                                            174
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 47,
                                              "line": 4
                                            },
                                            "start": {
                                              "column": 46,
                                              "line": 4
                                            }
                                          }
                                        },
                                        {
                                          "type": "TSLiteralType",
                                          "literal": {
                                            "type": "Literal",
                                            "raw": "5",
                                            "value": 5,
                                            "range": [
                                              176,
                                              177
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 50,
                                                "line": 4
                                              },
                                              "start": {
                                                "column": 49,
                                                "line": 4
                                              }
                                            }
                                          },
                                          "range": [
                                            176,
                                            177
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 50,
                                              "line": 4
                                            },
                                            "start": {
                                              "column": 49,
                                              "line": 4
                                            }
                                          }
                                        },
                                        {
                                          "type": "TSLiteralType",
                                          "literal": {
                                            "type": "Literal",
                                            "raw": "6",
                                            "value": 6,
                                            "range": [
                                              179,
                                              180
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 53,
                                                "line": 4
                                              },
                                              "start": {
                                                "column": 52,
                                                "line": 4
                                              }
                                            }
                                          },
                                          "range": [
                                            179,
                                            180
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 53,
                                              "line": 4
                                            },
                                            "start": {
                                              "column": 52,
                                              "line": 4
                                            }
                                          }
                                        },
                                        {
                                          "type": "TSLiteralType",
                                          "literal": {
                                            "type": "Literal",
                                            "raw": "7",
                                            "value": 7,
                                            "range": [
                                              182,
                                              183
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 56,
                                                "line": 4
                                              },
                                              "start": {
                                                "column": 55,
                                                "line": 4
                                              }
                                            }
                                          },
                                          "range": [
                                            182,
                                            183
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 56,
                                              "line": 4
                                            },
                                            "start": {
                                              "column": 55,
                                              "line": 4
                                            }
                                          }
                                        },
                                        {
                                          "type": "TSLiteralType",
                                          "literal": {
                                            "type": "Literal",
                                            "raw": "8",
                                            "value": 8,
                                            "range": [
                                              185,
                                              186
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 59,
                                                "line": 4
                                              },
                                              "start": {
                                                "column": 58,
                                                "line": 4
                                              }
                                            }
                                          },
                                          "range": [
                                            185,
                                            186
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 59,
                                              "line": 4
                                            },
                                            "start": {
                                              "column": 58,
                                              "line": 4
                                            }
                                          }
                                        },
                                        {
                                          "type": "TSLiteralType",
                                          "literal": {
                                            "type": "Literal",
                                            "raw": "9",
                                            "value": 9,
                                            "range": [
                                              188,
                                              189
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 62,
                                                "line": 4
                                              },
                                              "start": {
                                                "column": 61,
                                                "line": 4
                                              }
                                            }
                                          },
                                          "range": [
                                            188,
                                            189
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 62,
                                              "line": 4
                                            },
                                            "start": {
                                              "column": 61,
                                              "line": 4
                                            }
                                          }
                                        },
                                        {
                                          "type": "TSLiteralType",
                                          "literal": {
                                            "type": "Literal",
                                            "raw": "10",
                                            "value": 10,
                                            "range": [
                                              191,
                                              193
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 66,
                                                "line": 4
                                              },
                                              "start": {
                                                "column": 64,
                                                "line": 4
                                              }
                                            }
                                          },
                                          "range": [
                                            191,
                                            193
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 66,
                                              "line": 4
                                            },
                                            "start": {
                                              "column": 64,
                                              "line": 4
                                            }
                                          }
                                        },
                                        {
                                          "type": "TSLiteralType",
                                          "literal": {
                                            "type": "Literal",
                                            "raw": "11",
                                            "value": 11,
                                            "range": [
                                              195,
                                              197
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 70,
                                                "line": 4
                                              },
                                              "start": {
                                                "column": 68,
                                                "line": 4
                                              }
                                            }
                                          },
                                          "range": [
                                            195,
                                            197
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 70,
                                              "line": 4
                                            },
                                            "start": {
                                              "column": 68,
                                              "line": 4
                                            }
                                          }
                                        },
                                        {
                                          "type": "TSLiteralType",
                                          "literal": {
                                            "type": "Literal",
                                            "raw": "12",
                                            "value": 12,
                                            "range": [
                                              199,
                                              201
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 74,
                                                "line": 4
                                              },
                                              "start": {
                                                "column": 72,
                                                "line": 4
                                              }
                                            }
                                          },
                                          "range": [
                                            199,
                                            201
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 74,
                                              "line": 4
                                            },
                                            "start": {
                                              "column": 72,
                                              "line": 4
                                            }
                                          }
                                        },
                                        {
                                          "type": "TSLiteralType",
                                          "literal": {
                                            "type": "Literal",
                                            "raw": "13",
                                            "value": 13,
                                            "range": [
                                              203,
                                              205
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 78,
                                                "line": 4
                                              },
                                              "start": {
                                                "column": 76,
                                                "line": 4
                                              }
                                            }
                                          },
                                          "range": [
                                            203,
                                            205
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 78,
                                              "line": 4
                                            },
                                            "start": {
                                              "column": 76,
                                              "line": 4
                                            }
                                          }
                                        },
                                        {
                                          "type": "TSLiteralType",
                                          "literal": {
                                            "type": "Literal",
                                            "raw": "14",
                                            "value": 14,
                                            "range": [
                                              207,
                                              209
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 82,
                                                "line": 4
                                              },
                                              "start": {
                                                "column": 80,
                                                "line": 4
                                              }
                                            }
                                          },
                                          "range": [
                                            207,
                                            209
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 82,
                                              "line": 4
                                            },
                                            "start": {
                                              "column": 80,
                                              "line": 4
                                            }
                                          }
                                        },
                                        {
                                          "type": "TSLiteralType",
                                          "literal": {
                                            "type": "Literal",
                                            "raw": "15",
                                            "value": 15,
                                            "range": [
                                              211,
                                              213
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 86,
                                                "line": 4
                                              },
                                              "start": {
                                                "column": 84,
                                                "line": 4
                                              }
                                            }
                                          },
                                          "range": [
                                            211,
                                            213
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 86,
                                              "line": 4
                                            },
                                            "start": {
                                              "column": 84,
                                              "line": 4
                                            }
                                          }
                                        },
                                        {
                                          "type": "TSLiteralType",
                                          "literal": {
                                            "type": "Literal",
                                            "raw": "16",
                                            "value": 16,
                                            "range": [
                                              215,
                                              217
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 90,
                                                "line": 4
                                              },
                                              "start": {
                                                "column": 88,
                                                "line": 4
                                              }
                                            }
                                          },
                                          "range": [
                                            215,
                                            217
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 90,
                                              "line": 4
                                            },
                                            "start": {
                                              "column": 88,
                                              "line": 4
                                            }
                                          }
                                        },
                                        {
                                          "type": "TSLiteralType",
                                          "literal": {
                                            "type": "Literal",
                                            "raw": "17",
                                            "value": 17,
                                            "range": [
                                              219,
                                              221
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 94,
                                                "line": 4
                                              },
                                              "start": {
                                                "column": 92,
                                                "line": 4
                                              }
                                            }
                                          },
                                          "range": [
                                            219,
                                            221
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 94,
                                              "line": 4
                                            },
                                            "start": {
                                              "column": 92,
                                              "line": 4
                                            }
                                          }
                                        },
                                        {
                                          "type": "TSLiteralType",
                                          "literal": {
                                            "type": "Literal",
                                            "raw": "18",
                                            "value": 18,
                                            "range": [
                                              223,
                                              225
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 98,
                                                "line": 4
                                              },
                                              "start": {
                                                "column": 96,
                                                "line": 4
                                              }
                                            }
                                          },
                                          "range": [
                                            223,
                                            225
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 98,
                                              "line": 4
                                            },
                                            "start": {
                                              "column": 96,
                                              "line": 4
                                            }
                                          }
                                        },
                                        {
                                          "type": "TSLiteralType",
                                          "literal": {
                                            "type": "Literal",
                                            "raw": "19",
                                            "value": 19,
                                            "range": [
                                              227,
                                              229
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 102,
                                                "line": 4
                                              },
                                              "start": {
                                                "column": 100,
                                                "line": 4
                                              }
                                            }
                                          },
                                          "range": [
                                            227,
                                            229
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 102,
                                              "line": 4
                                            },
                                            "start": {
                                              "column": 100,
                                              "line": 4
                                            }
                                          }
                                        },
                                        {
                                          "type": "TSLiteralType",
                                          "literal": {
                                            "type": "Literal",
                                            "raw": "20",
                                            "value": 20,
                                            "range": [
                                              231,
                                              233
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 106,
                                                "line": 4
                                              },
                                              "start": {
                                                "column": 104,
                                                "line": 4
                                              }
                                            }
                                          },
                                          "range": [
                                            231,
                                            233
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 106,
                                              "line": 4
                                            },
                                            "start": {
                                              "column": 104,
                                              "line": 4
                                            }
                                          }
                                        }
                                      ],
                                      "range": [
                                        156,
                                        234
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 107,
                                          "line": 4
                                        },
                                        "start": {
                                          "column": 29,
                                          "line": 4
                                        }
                                      }
                                    },
                                    "range": [
                                      156,
                                      241
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 114,
                                        "line": 4
                                      },
                                      "start": {
                                        "column": 29,
                                        "line": 4
                                      }
                                    }
                                  }
                                ],
                                "loc": {
                                  "end": {
                                    "column": 115,
                                    "line": 4
                                  },
                                  "start": {
                                    "column": 18,
                                    "line": 4
                                  }
                                }
                              },
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "BadFlatArray",
                                "optional": false,
                                "range": [
                                  133,
                                  145
                                ],
                                "loc": {
                                  "end": {
                                    "column": 18,
                                    "line": 4
                                  },
                                  "start": {
                                    "column": 6,
                                    "line": 4
                                  }
                                }
                              },
                              "range": [
                                133,
                                242
                              ],
                              "loc": {
                                "end": {
                                  "column": 115,
                                  "line": 4
                                },
                                "start": {
                                  "column": 6,
                                  "line": 4
                                }
                              }
                            },
                            "range": [
                              85,
                              252
                            ],
                            "loc": {
                              "end": {
                                "column": 9,
                                "line": 5
                              },
                              "start": {
                                "column": 13,
                                "line": 3
                              }
                            }
                          }
                        },
                        "range": [
                          76,
                          252
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 5
                          },
                          "start": {
                            "column": 4,
                            "line": 3
                          }
                        }
                      }
                    ],
                    "range": [
                      53,
                      254
                    ],
                    "loc": {
                      "end": {
                        "column": 1,
                        "line": 6
                      },
                      "start": {
                        "column": 53,
                        "line": 1
                      }
                    }
                  },
                  "range": [
                    53,
                    291
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 6
                    },
                    "start": {
                      "column": 53,
                      "line": 1
                    }
                  }
                }
              },
              "range": [
                48,
                291
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 6
                },
                "start": {
                  "column": 48,
                  "line": 1
                }
              }
            }
          ],
          "range": [
            47,
            292
          ],
          "loc": {
            "end": {
              "column": 39,
              "line": 6
            },
            "start": {
              "column": 47,
              "line": 1
            }
          }
        },
        "range": [
          47,
          299
        ],
        "loc": {
          "end": {
            "column": 46,
            "line": 6
          },
          "start": {
            "column": 47,
            "line": 1
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 44,
            "line": 1
          },
          "start": {
            "column": 17,
            "line": 1
          }
        },
        "range": [
          17,
          44
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Arr",
              "optional": false,
              "range": [
                18,
                21
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 1
                },
                "start": {
                  "column": 18,
                  "line": 1
                }
              }
            },
            "out": false,
            "range": [
              18,
              21
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 1
              },
              "start": {
                "column": 18,
                "line": 1
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSNumberKeyword",
              "range": [
                37,
                43
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 1
                },
                "start": {
                  "column": 37,
                  "line": 1
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Depth",
              "optional": false,
              "range": [
                23,
                28
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 1
                },
                "start": {
                  "column": 23,
                  "line": 1
                }
              }
            },
            "out": false,
            "range": [
              23,
              43
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 1
              },
              "start": {
                "column": 23,
                "line": 1
              }
            }
          }
        ]
      },
      "range": [
        0,
        300
      ],
      "loc": {
        "end": {
          "column": 47,
          "line": 6
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "flat",
        "optional": false,
        "range": [
          319,
          323
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 8
          },
          "start": {
            "column": 17,
            "line": 8
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arr",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 10,
                "line": 9
              },
              "start": {
                "column": 7,
                "line": 9
              }
            },
            "range": [
              357,
              360
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "range": [
                  359,
                  360
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 9
                  },
                  "start": {
                    "column": 9,
                    "line": 9
                  }
                }
              },
              "range": [
                359,
                360
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 9
                },
                "start": {
                  "column": 9,
                  "line": 9
                }
              }
            }
          },
          "range": [
            354,
            360
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 9
            },
            "start": {
              "column": 4,
              "line": 9
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "depth",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 13,
                "line": 10
              },
              "start": {
                "column": 10,
                "line": 10
              }
            },
            "range": [
              372,
              375
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "D",
                "optional": false,
                "range": [
                  374,
                  375
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 10
                  },
                  "start": {
                    "column": 12,
                    "line": 10
                  }
                }
              },
              "range": [
                374,
                375
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 10
                },
                "start": {
                  "column": 12,
                  "line": 10
                }
              }
            }
          },
          "range": [
            366,
            375
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 10
            },
            "start": {
              "column": 4,
              "line": 10
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 23,
            "line": 11
          },
          "start": {
            "column": 1,
            "line": 11
          }
        },
        "range": [
          377,
          399
        ],
        "typeAnnotation": {
          "type": "TSArrayType",
          "elementType": {
            "type": "TSTypeReference",
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                391,
                397
              ],
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "range": [
                      392,
                      393
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 11
                      },
                      "start": {
                        "column": 16,
                        "line": 11
                      }
                    }
                  },
                  "range": [
                    392,
                    393
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 11
                    },
                    "start": {
                      "column": 16,
                      "line": 11
                    }
                  }
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "D",
                    "optional": false,
                    "range": [
                      395,
                      396
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 11
                      },
                      "start": {
                        "column": 19,
                        "line": 11
                      }
                    }
                  },
                  "range": [
                    395,
                    396
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 11
                    },
                    "start": {
                      "column": 19,
                      "line": 11
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 11
                },
                "start": {
                  "column": 15,
                  "line": 11
                }
              }
            },
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "BadFlatArray",
              "optional": false,
              "range": [
                379,
                391
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 11
                },
                "start": {
                  "column": 3,
                  "line": 11
                }
              }
            },
            "range": [
              379,
              397
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 11
              },
              "start": {
                "column": 3,
                "line": 11
              }
            }
          },
          "range": [
            379,
            399
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 11
            },
            "start": {
              "column": 3,
              "line": 11
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 46,
            "line": 8
          },
          "start": {
            "column": 21,
            "line": 8
          }
        },
        "range": [
          323,
          348
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "range": [
                324,
                325
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 8
                },
                "start": {
                  "column": 22,
                  "line": 8
                }
              }
            },
            "out": false,
            "range": [
              324,
              325
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 8
              },
              "start": {
                "column": 22,
                "line": 8
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSNumberKeyword",
              "range": [
                337,
                343
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 8
                },
                "start": {
                  "column": 35,
                  "line": 8
                }
              }
            },
            "default": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  346,
                  347
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 8
                  },
                  "start": {
                    "column": 44,
                    "line": 8
                  }
                }
              },
              "range": [
                346,
                347
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 8
                },
                "start": {
                  "column": 44,
                  "line": 8
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "D",
              "optional": false,
              "range": [
                327,
                328
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 8
                },
                "start": {
                  "column": 25,
                  "line": 8
                }
              }
            },
            "out": false,
            "range": [
              327,
              347
            ],
            "loc": {
              "end": {
                "column": 45,
                "line": 8
              },
              "start": {
                "column": 25,
                "line": 8
              }
            }
          }
        ]
      },
      "range": [
        302,
        399
      ],
      "loc": {
        "end": {
          "column": 23,
          "line": 11
        },
        "start": {
          "column": 0,
          "line": 8
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arr",
                  "optional": false,
                  "range": [
                    460,
                    463
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 14
                    },
                    "start": {
                      "column": 16,
                      "line": 14
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "depth",
                  "optional": false,
                  "range": [
                    465,
                    470
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 14
                    },
                    "start": {
                      "column": 21,
                      "line": 14
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "flat",
                "optional": false,
                "range": [
                  455,
                  459
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 14
                  },
                  "start": {
                    "column": 11,
                    "line": 14
                  }
                }
              },
              "optional": false,
              "range": [
                455,
                471
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 14
                },
                "start": {
                  "column": 11,
                  "line": 14
                }
              }
            },
            "range": [
              448,
              472
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 14
              },
              "start": {
                "column": 4,
                "line": 14
              }
            }
          }
        ],
        "range": [
          442,
          474
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 15
          },
          "start": {
            "column": 41,
            "line": 13
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "range": [
          410,
          413
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 13
          },
          "start": {
            "column": 9,
            "line": 13
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arr",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 24,
                "line": 13
              },
              "start": {
                "column": 19,
                "line": 13
              }
            },
            "range": [
              420,
              425
            ],
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    422,
                    423
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 13
                    },
                    "start": {
                      "column": 21,
                      "line": 13
                    }
                  }
                },
                "range": [
                  422,
                  423
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 13
                  },
                  "start": {
                    "column": 21,
                    "line": 13
                  }
                }
              },
              "range": [
                422,
                425
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 13
                },
                "start": {
                  "column": 21,
                  "line": 13
                }
              }
            }
          },
          "range": [
            417,
            425
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 13
            },
            "start": {
              "column": 16,
              "line": 13
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "depth",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 39,
                "line": 13
              },
              "start": {
                "column": 31,
                "line": 13
              }
            },
            "range": [
              432,
              440
            ],
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "range": [
                434,
                440
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 13
                },
                "start": {
                  "column": 33,
                  "line": 13
                }
              }
            }
          },
          "range": [
            427,
            440
          ],
          "loc": {
            "end": {
              "column": 39,
              "line": 13
            },
            "start": {
              "column": 26,
              "line": 13
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 15,
            "line": 13
          },
          "start": {
            "column": 12,
            "line": 13
          }
        },
        "range": [
          413,
          416
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                414,
                415
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 13
                },
                "start": {
                  "column": 13,
                  "line": 13
                }
              }
            },
            "out": false,
            "range": [
              414,
              415
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 13
              },
              "start": {
                "column": 13,
                "line": 13
              }
            }
          }
        ]
      },
      "range": [
        401,
        474
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 15
        },
        "start": {
          "column": 0,
          "line": 13
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 15
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
