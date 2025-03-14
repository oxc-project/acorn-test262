__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    57,
    588
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "obj",
        "optional": false,
        "range": [
          62,
          65
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 3
          },
          "start": {
            "column": 5,
            "line": 3
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "range": [
                74,
                77
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 4
                },
                "start": {
                  "column": 4,
                  "line": 4
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
                  "column": 10,
                  "line": 4
                },
                "start": {
                  "column": 7,
                  "line": 4
                }
              },
              "range": [
                77,
                80
              ],
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "1",
                  "value": 1,
                  "range": [
                    79,
                    80
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 4
                    },
                    "start": {
                      "column": 9,
                      "line": 4
                    }
                  }
                },
                "range": [
                  79,
                  80
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 4
                  },
                  "start": {
                    "column": 9,
                    "line": 4
                  }
                }
              }
            },
            "range": [
              74,
              81
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 4
              },
              "start": {
                "column": 4,
                "line": 4
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "range": [
                86,
                89
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 5
                },
                "start": {
                  "column": 4,
                  "line": 5
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
                  "column": 10,
                  "line": 5
                },
                "start": {
                  "column": 7,
                  "line": 5
                }
              },
              "range": [
                89,
                92
              ],
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "2",
                  "value": 2,
                  "range": [
                    91,
                    92
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 5
                    },
                    "start": {
                      "column": 9,
                      "line": 5
                    }
                  }
                },
                "range": [
                  91,
                  92
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 5
                  },
                  "start": {
                    "column": 9,
                    "line": 5
                  }
                }
              }
            },
            "range": [
              86,
              93
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 5
              },
              "start": {
                "column": 4,
                "line": 5
              }
            }
          }
        ],
        "range": [
          68,
          95
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 6
          },
          "start": {
            "column": 11,
            "line": 3
          }
        }
      },
      "range": [
        57,
        96
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 6
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "keyContaining1",
        "optional": false,
        "range": [
          103,
          117
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 8
          },
          "start": {
            "column": 5,
            "line": 8
          }
        }
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "keys",
            "optional": false,
            "range": [
              187,
              191
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 11
              },
              "start": {
                "column": 4,
                "line": 11
              }
            }
          },
          "range": [
            187,
            191
          ],
          "loc": {
            "end": {
              "column": 8,
              "line": 11
            },
            "start": {
              "column": 4,
              "line": 11
            }
          }
        },
        "extendsType": {
          "type": "TSInferType",
          "typeParameter": {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "range": [
                    224,
                    227
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 11
                    },
                    "start": {
                      "column": 41,
                      "line": 11
                    }
                  }
                },
                "range": [
                  224,
                  227
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 11
                  },
                  "start": {
                    "column": 41,
                    "line": 11
                  }
                }
              },
              "range": [
                218,
                227
              ],
              "loc": {
                "end": {
                  "column": 44,
                  "line": 11
                },
                "start": {
                  "column": 35,
                  "line": 11
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "key",
              "optional": false,
              "range": [
                206,
                209
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 11
                },
                "start": {
                  "column": 23,
                  "line": 11
                }
              }
            },
            "out": false,
            "range": [
              206,
              227
            ],
            "loc": {
              "end": {
                "column": 44,
                "line": 11
              },
              "start": {
                "column": 23,
                "line": 11
              }
            }
          },
          "range": [
            200,
            227
          ],
          "loc": {
            "end": {
              "column": 44,
              "line": 11
            },
            "start": {
              "column": 17,
              "line": 11
            }
          }
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "range": [
            306,
            311
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 15
            },
            "start": {
              "column": 6,
              "line": 15
            }
          }
        },
        "trueType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "key",
              "optional": false,
              "range": [
                234,
                237
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 12
                },
                "start": {
                  "column": 6,
                  "line": 12
                }
              }
            },
            "range": [
              234,
              237
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 12
              },
              "start": {
                "column": 6,
                "line": 12
              }
            }
          },
          "extendsType": {
            "type": "TSTemplateLiteralType",
            "quasis": [
              {
                "type": "TemplateElement",
                "tail": false,
                "value": {
                  "cooked": "",
                  "raw": ""
                },
                "range": [
                  246,
                  249
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 12
                  },
                  "start": {
                    "column": 18,
                    "line": 12
                  }
                }
              },
              {
                "type": "TemplateElement",
                "tail": false,
                "value": {
                  "cooked": "",
                  "raw": ""
                },
                "range": [
                  255,
                  258
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 12
                  },
                  "start": {
                    "column": 27,
                    "line": 12
                  }
                }
              },
              {
                "type": "TemplateElement",
                "tail": false,
                "value": {
                  "cooked": "",
                  "raw": ""
                },
                "range": [
                  261,
                  264
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 12
                  },
                  "start": {
                    "column": 33,
                    "line": 12
                  }
                }
              },
              {
                "type": "TemplateElement",
                "tail": true,
                "value": {
                  "cooked": "",
                  "raw": ""
                },
                "range": [
                  270,
                  272
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 12
                  },
                  "start": {
                    "column": 42,
                    "line": 12
                  }
                }
              }
            ],
            "types": [
              {
                "type": "TSStringKeyword",
                "range": [
                  249,
                  255
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 12
                  },
                  "start": {
                    "column": 21,
                    "line": 12
                  }
                }
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "str",
                  "optional": false,
                  "range": [
                    258,
                    261
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 12
                    },
                    "start": {
                      "column": 30,
                      "line": 12
                    }
                  }
                },
                "range": [
                  258,
                  261
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 12
                  },
                  "start": {
                    "column": 30,
                    "line": 12
                  }
                }
              },
              {
                "type": "TSStringKeyword",
                "range": [
                  264,
                  270
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 12
                  },
                  "start": {
                    "column": 36,
                    "line": 12
                  }
                }
              }
            ],
            "range": [
              246,
              272
            ],
            "loc": {
              "end": {
                "column": 44,
                "line": 12
              },
              "start": {
                "column": 18,
                "line": 12
              }
            }
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "range": [
              294,
              299
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 14
              },
              "start": {
                "column": 6,
                "line": 14
              }
            }
          },
          "trueType": {
            "type": "TSIndexedAccessType",
            "indexType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "range": [
                  283,
                  286
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 13
                  },
                  "start": {
                    "column": 10,
                    "line": 13
                  }
                }
              },
              "range": [
                283,
                286
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 13
                },
                "start": {
                  "column": 10,
                  "line": 13
                }
              }
            },
            "objectType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj",
                "optional": false,
                "range": [
                  279,
                  282
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 13
                  },
                  "start": {
                    "column": 6,
                    "line": 13
                  }
                }
              },
              "range": [
                279,
                282
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 13
                },
                "start": {
                  "column": 6,
                  "line": 13
                }
              }
            },
            "range": [
              279,
              287
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 13
              },
              "start": {
                "column": 6,
                "line": 13
              }
            }
          },
          "range": [
            234,
            299
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 14
            },
            "start": {
              "column": 6,
              "line": 12
            }
          }
        },
        "range": [
          187,
          311
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 15
          },
          "start": {
            "column": 4,
            "line": 11
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 1,
            "line": 11
          },
          "start": {
            "column": 19,
            "line": 8
          }
        },
        "range": [
          117,
          184
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "range": [
                135,
                141
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 9
                },
                "start": {
                  "column": 16,
                  "line": 9
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "str",
              "optional": false,
              "range": [
                123,
                126
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 9
                },
                "start": {
                  "column": 4,
                  "line": 9
                }
              }
            },
            "out": false,
            "range": [
              123,
              141
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 9
              },
              "start": {
                "column": 4,
                "line": 9
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "range": [
                    166,
                    169
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 10
                    },
                    "start": {
                      "column": 23,
                      "line": 10
                    }
                  }
                },
                "range": [
                  166,
                  169
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 10
                  },
                  "start": {
                    "column": 23,
                    "line": 10
                  }
                }
              },
              "range": [
                160,
                169
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 10
                },
                "start": {
                  "column": 17,
                  "line": 10
                }
              }
            },
            "default": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "range": [
                    178,
                    181
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 10
                    },
                    "start": {
                      "column": 35,
                      "line": 10
                    }
                  }
                },
                "range": [
                  178,
                  181
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 10
                  },
                  "start": {
                    "column": 35,
                    "line": 10
                  }
                }
              },
              "range": [
                172,
                181
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 10
                },
                "start": {
                  "column": 29,
                  "line": 10
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "keys",
              "optional": false,
              "range": [
                147,
                151
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 10
                },
                "start": {
                  "column": 4,
                  "line": 10
                }
              }
            },
            "out": false,
            "range": [
              147,
              181
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 10
              },
              "start": {
                "column": 4,
                "line": 10
              }
            }
          }
        ]
      },
      "range": [
        98,
        312
      ],
      "loc": {
        "end": {
          "column": 12,
          "line": 15
        },
        "start": {
          "column": 0,
          "line": 8
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "_1",
        "optional": false,
        "range": [
          319,
          321
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 17
          },
          "start": {
            "column": 5,
            "line": 17
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            338,
            345
          ],
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "raw": "\"foo\"",
                "value": "foo",
                "range": [
                  339,
                  344
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 17
                  },
                  "start": {
                    "column": 25,
                    "line": 17
                  }
                }
              },
              "range": [
                339,
                344
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 17
                },
                "start": {
                  "column": 25,
                  "line": 17
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 17
            },
            "start": {
              "column": 24,
              "line": 17
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "keyContaining1",
          "optional": false,
          "range": [
            324,
            338
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 17
            },
            "start": {
              "column": 10,
              "line": 17
            }
          }
        },
        "range": [
          324,
          345
        ],
        "loc": {
          "end": {
            "column": 31,
            "line": 17
          },
          "start": {
            "column": 10,
            "line": 17
          }
        }
      },
      "range": [
        314,
        346
      ],
      "loc": {
        "end": {
          "column": 32,
          "line": 17
        },
        "start": {
          "column": 0,
          "line": 17
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "keyContaining2",
        "optional": false,
        "range": [
          359,
          373
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 19
          },
          "start": {
            "column": 5,
            "line": 19
          }
        }
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "keys",
            "optional": false,
            "range": [
              443,
              447
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 22
              },
              "start": {
                "column": 4,
                "line": 22
              }
            }
          },
          "range": [
            443,
            447
          ],
          "loc": {
            "end": {
              "column": 8,
              "line": 22
            },
            "start": {
              "column": 4,
              "line": 22
            }
          }
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "keys",
            "optional": false,
            "range": [
              456,
              460
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 22
              },
              "start": {
                "column": 17,
                "line": 22
              }
            }
          },
          "range": [
            456,
            460
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 22
            },
            "start": {
              "column": 17,
              "line": 22
            }
          }
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "range": [
            541,
            546
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 26
            },
            "start": {
              "column": 6,
              "line": 26
            }
          }
        },
        "trueType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "keys",
              "optional": false,
              "range": [
                467,
                471
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 23
                },
                "start": {
                  "column": 6,
                  "line": 23
                }
              }
            },
            "range": [
              467,
              471
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 23
              },
              "start": {
                "column": 6,
                "line": 23
              }
            }
          },
          "extendsType": {
            "type": "TSTemplateLiteralType",
            "quasis": [
              {
                "type": "TemplateElement",
                "tail": false,
                "value": {
                  "cooked": "",
                  "raw": ""
                },
                "range": [
                  480,
                  483
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 23
                  },
                  "start": {
                    "column": 19,
                    "line": 23
                  }
                }
              },
              {
                "type": "TemplateElement",
                "tail": false,
                "value": {
                  "cooked": "",
                  "raw": ""
                },
                "range": [
                  489,
                  492
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 23
                  },
                  "start": {
                    "column": 28,
                    "line": 23
                  }
                }
              },
              {
                "type": "TemplateElement",
                "tail": false,
                "value": {
                  "cooked": "",
                  "raw": ""
                },
                "range": [
                  495,
                  498
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 23
                  },
                  "start": {
                    "column": 34,
                    "line": 23
                  }
                }
              },
              {
                "type": "TemplateElement",
                "tail": true,
                "value": {
                  "cooked": "",
                  "raw": ""
                },
                "range": [
                  504,
                  506
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 23
                  },
                  "start": {
                    "column": 43,
                    "line": 23
                  }
                }
              }
            ],
            "types": [
              {
                "type": "TSStringKeyword",
                "range": [
                  483,
                  489
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 23
                  },
                  "start": {
                    "column": 22,
                    "line": 23
                  }
                }
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "str",
                  "optional": false,
                  "range": [
                    492,
                    495
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 23
                    },
                    "start": {
                      "column": 31,
                      "line": 23
                    }
                  }
                },
                "range": [
                  492,
                  495
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 23
                  },
                  "start": {
                    "column": 31,
                    "line": 23
                  }
                }
              },
              {
                "type": "TSStringKeyword",
                "range": [
                  498,
                  504
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 23
                  },
                  "start": {
                    "column": 37,
                    "line": 23
                  }
                }
              }
            ],
            "range": [
              480,
              506
            ],
            "loc": {
              "end": {
                "column": 45,
                "line": 23
              },
              "start": {
                "column": 19,
                "line": 23
              }
            }
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "range": [
              529,
              534
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 25
              },
              "start": {
                "column": 6,
                "line": 25
              }
            }
          },
          "trueType": {
            "type": "TSIndexedAccessType",
            "indexType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "keys",
                "optional": false,
                "range": [
                  517,
                  521
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 24
                  },
                  "start": {
                    "column": 10,
                    "line": 24
                  }
                }
              },
              "range": [
                517,
                521
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 24
                },
                "start": {
                  "column": 10,
                  "line": 24
                }
              }
            },
            "objectType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj",
                "optional": false,
                "range": [
                  513,
                  516
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 24
                  },
                  "start": {
                    "column": 6,
                    "line": 24
                  }
                }
              },
              "range": [
                513,
                516
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 24
                },
                "start": {
                  "column": 6,
                  "line": 24
                }
              }
            },
            "range": [
              513,
              522
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 24
              },
              "start": {
                "column": 6,
                "line": 24
              }
            }
          },
          "range": [
            467,
            534
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 25
            },
            "start": {
              "column": 6,
              "line": 23
            }
          }
        },
        "range": [
          443,
          546
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 26
          },
          "start": {
            "column": 4,
            "line": 22
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 1,
            "line": 22
          },
          "start": {
            "column": 19,
            "line": 19
          }
        },
        "range": [
          373,
          440
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "range": [
                391,
                397
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 20
                },
                "start": {
                  "column": 16,
                  "line": 20
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "str",
              "optional": false,
              "range": [
                379,
                382
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 20
                },
                "start": {
                  "column": 4,
                  "line": 20
                }
              }
            },
            "out": false,
            "range": [
              379,
              397
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 20
              },
              "start": {
                "column": 4,
                "line": 20
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "range": [
                    422,
                    425
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 21
                    },
                    "start": {
                      "column": 23,
                      "line": 21
                    }
                  }
                },
                "range": [
                  422,
                  425
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 21
                  },
                  "start": {
                    "column": 23,
                    "line": 21
                  }
                }
              },
              "range": [
                416,
                425
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 21
                },
                "start": {
                  "column": 17,
                  "line": 21
                }
              }
            },
            "default": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "range": [
                    434,
                    437
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 21
                    },
                    "start": {
                      "column": 35,
                      "line": 21
                    }
                  }
                },
                "range": [
                  434,
                  437
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 21
                  },
                  "start": {
                    "column": 35,
                    "line": 21
                  }
                }
              },
              "range": [
                428,
                437
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 21
                },
                "start": {
                  "column": 29,
                  "line": 21
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "keys",
              "optional": false,
              "range": [
                403,
                407
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 21
                },
                "start": {
                  "column": 4,
                  "line": 21
                }
              }
            },
            "out": false,
            "range": [
              403,
              437
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 21
              },
              "start": {
                "column": 4,
                "line": 21
              }
            }
          }
        ]
      },
      "range": [
        354,
        547
      ],
      "loc": {
        "end": {
          "column": 12,
          "line": 26
        },
        "start": {
          "column": 0,
          "line": 19
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "_2",
        "optional": false,
        "range": [
          554,
          556
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 28
          },
          "start": {
            "column": 5,
            "line": 28
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            573,
            580
          ],
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "raw": "\"foo\"",
                "value": "foo",
                "range": [
                  574,
                  579
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 28
                  },
                  "start": {
                    "column": 25,
                    "line": 28
                  }
                }
              },
              "range": [
                574,
                579
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 28
                },
                "start": {
                  "column": 25,
                  "line": 28
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 28
            },
            "start": {
              "column": 24,
              "line": 28
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "keyContaining2",
          "optional": false,
          "range": [
            559,
            573
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 28
            },
            "start": {
              "column": 10,
              "line": 28
            }
          }
        },
        "range": [
          559,
          580
        ],
        "loc": {
          "end": {
            "column": 31,
            "line": 28
          },
          "start": {
            "column": 10,
            "line": 28
          }
        }
      },
      "range": [
        549,
        581
      ],
      "loc": {
        "end": {
          "column": 32,
          "line": 28
        },
        "start": {
          "column": 0,
          "line": 28
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 29
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
