__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    551
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BrandedNum",
        "optional": false,
        "range": [
          5,
          15
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 1
          },
          "start": {
            "column": 5,
            "line": 1
          }
        }
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSNumberKeyword",
            "range": [
              18,
              24
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 1
              },
              "start": {
                "column": 18,
                "line": 1
              }
            }
          },
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "__numberBrand",
                  "optional": false,
                  "range": [
                    29,
                    42
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 1
                    },
                    "start": {
                      "column": 29,
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
                      "column": 47,
                      "line": 1
                    },
                    "start": {
                      "column": 42,
                      "line": 1
                    }
                  },
                  "range": [
                    42,
                    47
                  ],
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "range": [
                      44,
                      47
                    ],
                    "loc": {
                      "end": {
                        "column": 47,
                        "line": 1
                      },
                      "start": {
                        "column": 44,
                        "line": 1
                      }
                    }
                  }
                },
                "range": [
                  29,
                  47
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 1
                  },
                  "start": {
                    "column": 29,
                    "line": 1
                  }
                }
              }
            ],
            "range": [
              27,
              49
            ],
            "loc": {
              "end": {
                "column": 49,
                "line": 1
              },
              "start": {
                "column": 27,
                "line": 1
              }
            }
          }
        ],
        "range": [
          18,
          49
        ],
        "loc": {
          "end": {
            "column": 49,
            "line": 1
          },
          "start": {
            "column": 18,
            "line": 1
          }
        }
      },
      "range": [
        0,
        50
      ],
      "loc": {
        "end": {
          "column": 50,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "definite": false,
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 18,
                  "line": 2
                },
                "start": {
                  "column": 6,
                  "line": 2
                }
              },
              "range": [
                57,
                69
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "BrandedNum",
                  "optional": false,
                  "range": [
                    59,
                    69
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 2
                    },
                    "start": {
                      "column": 8,
                      "line": 2
                    }
                  }
                },
                "range": [
                  59,
                  69
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 2
                  },
                  "start": {
                    "column": 8,
                    "line": 2
                  }
                }
              }
            },
            "range": [
              55,
              69
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 2
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          },
          "init": null,
          "range": [
            55,
            69
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 2
            },
            "start": {
              "column": 4,
              "line": 2
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        51,
        70
      ],
      "loc": {
        "end": {
          "column": 19,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "operator": ">",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "range": [
            86,
            87
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 5
            },
            "start": {
              "column": 0,
              "line": 5
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "0",
          "value": 0,
          "range": [
            90,
            91
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 5
            },
            "start": {
              "column": 4,
              "line": 5
            }
          }
        },
        "range": [
          86,
          91
        ],
        "loc": {
          "end": {
            "column": 5,
            "line": 5
          },
          "start": {
            "column": 0,
            "line": 5
          }
        }
      },
      "range": [
        86,
        92
      ],
      "loc": {
        "end": {
          "column": 6,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 5
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "operator": ">",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "range": [
            93,
            94
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 6
            },
            "start": {
              "column": 0,
              "line": 6
            }
          }
        },
        "right": {
          "type": "TSTypeAssertion",
          "expression": {
            "type": "Literal",
            "raw": "0",
            "value": 0,
            "range": [
              105,
              106
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 6
              },
              "start": {
                "column": 12,
                "line": 6
              }
            }
          },
          "typeAnnotation": {
            "type": "TSNumberKeyword",
            "range": [
              98,
              104
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 6
              },
              "start": {
                "column": 5,
                "line": 6
              }
            }
          },
          "range": [
            97,
            106
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 6
            },
            "start": {
              "column": 4,
              "line": 6
            }
          }
        },
        "range": [
          93,
          106
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 6
          },
          "start": {
            "column": 0,
            "line": 6
          }
        }
      },
      "range": [
        93,
        107
      ],
      "loc": {
        "end": {
          "column": 14,
          "line": 6
        },
        "start": {
          "column": 0,
          "line": 6
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "operator": ">",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "range": [
            108,
            109
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 7
            },
            "start": {
              "column": 0,
              "line": 7
            }
          }
        },
        "right": {
          "type": "TSTypeAssertion",
          "expression": {
            "type": "Literal",
            "raw": "0",
            "value": 0,
            "range": [
              124,
              125
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 7
              },
              "start": {
                "column": 16,
                "line": 7
              }
            }
          },
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "BrandedNum",
              "optional": false,
              "range": [
                113,
                123
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 7
                },
                "start": {
                  "column": 5,
                  "line": 7
                }
              }
            },
            "range": [
              113,
              123
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 7
              },
              "start": {
                "column": 5,
                "line": 7
              }
            }
          },
          "range": [
            112,
            125
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 7
            },
            "start": {
              "column": 4,
              "line": 7
            }
          }
        },
        "range": [
          108,
          125
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 7
          },
          "start": {
            "column": 0,
            "line": 7
          }
        }
      },
      "range": [
        108,
        126
      ],
      "loc": {
        "end": {
          "column": 18,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 7
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "operator": "<",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "range": [
            142,
            143
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 10
            },
            "start": {
              "column": 0,
              "line": 10
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "0",
          "value": 0,
          "range": [
            146,
            147
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 10
            },
            "start": {
              "column": 4,
              "line": 10
            }
          }
        },
        "range": [
          142,
          147
        ],
        "loc": {
          "end": {
            "column": 5,
            "line": 10
          },
          "start": {
            "column": 0,
            "line": 10
          }
        }
      },
      "range": [
        142,
        148
      ],
      "loc": {
        "end": {
          "column": 6,
          "line": 10
        },
        "start": {
          "column": 0,
          "line": 10
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "operator": "<",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "range": [
            149,
            150
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 11
            },
            "start": {
              "column": 0,
              "line": 11
            }
          }
        },
        "right": {
          "type": "TSTypeAssertion",
          "expression": {
            "type": "Literal",
            "raw": "0",
            "value": 0,
            "range": [
              161,
              162
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 11
              },
              "start": {
                "column": 12,
                "line": 11
              }
            }
          },
          "typeAnnotation": {
            "type": "TSNumberKeyword",
            "range": [
              154,
              160
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 11
              },
              "start": {
                "column": 5,
                "line": 11
              }
            }
          },
          "range": [
            153,
            162
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 11
            },
            "start": {
              "column": 4,
              "line": 11
            }
          }
        },
        "range": [
          149,
          162
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 11
          },
          "start": {
            "column": 0,
            "line": 11
          }
        }
      },
      "range": [
        149,
        163
      ],
      "loc": {
        "end": {
          "column": 14,
          "line": 11
        },
        "start": {
          "column": 0,
          "line": 11
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "operator": "<",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "range": [
            164,
            165
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 12
            },
            "start": {
              "column": 0,
              "line": 12
            }
          }
        },
        "right": {
          "type": "TSTypeAssertion",
          "expression": {
            "type": "Literal",
            "raw": "0",
            "value": 0,
            "range": [
              180,
              181
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 12
              },
              "start": {
                "column": 16,
                "line": 12
              }
            }
          },
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "BrandedNum",
              "optional": false,
              "range": [
                169,
                179
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 12
                },
                "start": {
                  "column": 5,
                  "line": 12
                }
              }
            },
            "range": [
              169,
              179
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 12
              },
              "start": {
                "column": 5,
                "line": 12
              }
            }
          },
          "range": [
            168,
            181
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 12
            },
            "start": {
              "column": 4,
              "line": 12
            }
          }
        },
        "range": [
          164,
          181
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 12
          },
          "start": {
            "column": 0,
            "line": 12
          }
        }
      },
      "range": [
        164,
        182
      ],
      "loc": {
        "end": {
          "column": 18,
          "line": 12
        },
        "start": {
          "column": 0,
          "line": 12
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "operator": ">=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "range": [
            199,
            200
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 15
            },
            "start": {
              "column": 0,
              "line": 15
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "0",
          "value": 0,
          "range": [
            204,
            205
          ],
          "loc": {
            "end": {
              "column": 6,
              "line": 15
            },
            "start": {
              "column": 5,
              "line": 15
            }
          }
        },
        "range": [
          199,
          205
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 15
          },
          "start": {
            "column": 0,
            "line": 15
          }
        }
      },
      "range": [
        199,
        206
      ],
      "loc": {
        "end": {
          "column": 7,
          "line": 15
        },
        "start": {
          "column": 0,
          "line": 15
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "operator": ">=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "range": [
            207,
            208
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 16
            },
            "start": {
              "column": 0,
              "line": 16
            }
          }
        },
        "right": {
          "type": "TSTypeAssertion",
          "expression": {
            "type": "Literal",
            "raw": "0",
            "value": 0,
            "range": [
              220,
              221
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 16
              },
              "start": {
                "column": 13,
                "line": 16
              }
            }
          },
          "typeAnnotation": {
            "type": "TSNumberKeyword",
            "range": [
              213,
              219
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 16
              },
              "start": {
                "column": 6,
                "line": 16
              }
            }
          },
          "range": [
            212,
            221
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 16
            },
            "start": {
              "column": 5,
              "line": 16
            }
          }
        },
        "range": [
          207,
          221
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 16
          },
          "start": {
            "column": 0,
            "line": 16
          }
        }
      },
      "range": [
        207,
        222
      ],
      "loc": {
        "end": {
          "column": 15,
          "line": 16
        },
        "start": {
          "column": 0,
          "line": 16
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "operator": ">=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "range": [
            223,
            224
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 17
            },
            "start": {
              "column": 0,
              "line": 17
            }
          }
        },
        "right": {
          "type": "TSTypeAssertion",
          "expression": {
            "type": "Literal",
            "raw": "0",
            "value": 0,
            "range": [
              240,
              241
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 17
              },
              "start": {
                "column": 17,
                "line": 17
              }
            }
          },
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "BrandedNum",
              "optional": false,
              "range": [
                229,
                239
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 17
                },
                "start": {
                  "column": 6,
                  "line": 17
                }
              }
            },
            "range": [
              229,
              239
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 17
              },
              "start": {
                "column": 6,
                "line": 17
              }
            }
          },
          "range": [
            228,
            241
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 17
            },
            "start": {
              "column": 5,
              "line": 17
            }
          }
        },
        "range": [
          223,
          241
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 17
          },
          "start": {
            "column": 0,
            "line": 17
          }
        }
      },
      "range": [
        223,
        242
      ],
      "loc": {
        "end": {
          "column": 19,
          "line": 17
        },
        "start": {
          "column": 0,
          "line": 17
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "operator": "<=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "range": [
            259,
            260
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 20
            },
            "start": {
              "column": 0,
              "line": 20
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "0",
          "value": 0,
          "range": [
            264,
            265
          ],
          "loc": {
            "end": {
              "column": 6,
              "line": 20
            },
            "start": {
              "column": 5,
              "line": 20
            }
          }
        },
        "range": [
          259,
          265
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 20
          },
          "start": {
            "column": 0,
            "line": 20
          }
        }
      },
      "range": [
        259,
        266
      ],
      "loc": {
        "end": {
          "column": 7,
          "line": 20
        },
        "start": {
          "column": 0,
          "line": 20
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "operator": "<=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "range": [
            267,
            268
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 21
            },
            "start": {
              "column": 0,
              "line": 21
            }
          }
        },
        "right": {
          "type": "TSTypeAssertion",
          "expression": {
            "type": "Literal",
            "raw": "0",
            "value": 0,
            "range": [
              280,
              281
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 21
              },
              "start": {
                "column": 13,
                "line": 21
              }
            }
          },
          "typeAnnotation": {
            "type": "TSNumberKeyword",
            "range": [
              273,
              279
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 21
              },
              "start": {
                "column": 6,
                "line": 21
              }
            }
          },
          "range": [
            272,
            281
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 21
            },
            "start": {
              "column": 5,
              "line": 21
            }
          }
        },
        "range": [
          267,
          281
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 21
          },
          "start": {
            "column": 0,
            "line": 21
          }
        }
      },
      "range": [
        267,
        282
      ],
      "loc": {
        "end": {
          "column": 15,
          "line": 21
        },
        "start": {
          "column": 0,
          "line": 21
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "operator": "<=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "range": [
            283,
            284
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 22
            },
            "start": {
              "column": 0,
              "line": 22
            }
          }
        },
        "right": {
          "type": "TSTypeAssertion",
          "expression": {
            "type": "Literal",
            "raw": "0",
            "value": 0,
            "range": [
              300,
              301
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 22
              },
              "start": {
                "column": 17,
                "line": 22
              }
            }
          },
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "BrandedNum",
              "optional": false,
              "range": [
                289,
                299
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 22
                },
                "start": {
                  "column": 6,
                  "line": 22
                }
              }
            },
            "range": [
              289,
              299
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 22
              },
              "start": {
                "column": 6,
                "line": 22
              }
            }
          },
          "range": [
            288,
            301
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 22
            },
            "start": {
              "column": 5,
              "line": 22
            }
          }
        },
        "range": [
          283,
          301
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 22
          },
          "start": {
            "column": 0,
            "line": 22
          }
        }
      },
      "range": [
        283,
        302
      ],
      "loc": {
        "end": {
          "column": 19,
          "line": 22
        },
        "start": {
          "column": 0,
          "line": 22
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "operator": "==",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "range": [
            319,
            320
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 25
            },
            "start": {
              "column": 0,
              "line": 25
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "0",
          "value": 0,
          "range": [
            324,
            325
          ],
          "loc": {
            "end": {
              "column": 6,
              "line": 25
            },
            "start": {
              "column": 5,
              "line": 25
            }
          }
        },
        "range": [
          319,
          325
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 25
          },
          "start": {
            "column": 0,
            "line": 25
          }
        }
      },
      "range": [
        319,
        326
      ],
      "loc": {
        "end": {
          "column": 7,
          "line": 25
        },
        "start": {
          "column": 0,
          "line": 25
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "operator": "==",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "range": [
            327,
            328
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 26
            },
            "start": {
              "column": 0,
              "line": 26
            }
          }
        },
        "right": {
          "type": "TSTypeAssertion",
          "expression": {
            "type": "Literal",
            "raw": "0",
            "value": 0,
            "range": [
              340,
              341
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 26
              },
              "start": {
                "column": 13,
                "line": 26
              }
            }
          },
          "typeAnnotation": {
            "type": "TSNumberKeyword",
            "range": [
              333,
              339
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 26
              },
              "start": {
                "column": 6,
                "line": 26
              }
            }
          },
          "range": [
            332,
            341
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 26
            },
            "start": {
              "column": 5,
              "line": 26
            }
          }
        },
        "range": [
          327,
          341
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 26
          },
          "start": {
            "column": 0,
            "line": 26
          }
        }
      },
      "range": [
        327,
        342
      ],
      "loc": {
        "end": {
          "column": 15,
          "line": 26
        },
        "start": {
          "column": 0,
          "line": 26
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "operator": "==",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "range": [
            343,
            344
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 27
            },
            "start": {
              "column": 0,
              "line": 27
            }
          }
        },
        "right": {
          "type": "TSTypeAssertion",
          "expression": {
            "type": "Literal",
            "raw": "0",
            "value": 0,
            "range": [
              360,
              361
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 27
              },
              "start": {
                "column": 17,
                "line": 27
              }
            }
          },
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "BrandedNum",
              "optional": false,
              "range": [
                349,
                359
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 27
                },
                "start": {
                  "column": 6,
                  "line": 27
                }
              }
            },
            "range": [
              349,
              359
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 27
              },
              "start": {
                "column": 6,
                "line": 27
              }
            }
          },
          "range": [
            348,
            361
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 27
            },
            "start": {
              "column": 5,
              "line": 27
            }
          }
        },
        "range": [
          343,
          361
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 27
          },
          "start": {
            "column": 0,
            "line": 27
          }
        }
      },
      "range": [
        343,
        362
      ],
      "loc": {
        "end": {
          "column": 19,
          "line": 27
        },
        "start": {
          "column": 0,
          "line": 27
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "operator": "!=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "range": [
            379,
            380
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 30
            },
            "start": {
              "column": 0,
              "line": 30
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "0",
          "value": 0,
          "range": [
            384,
            385
          ],
          "loc": {
            "end": {
              "column": 6,
              "line": 30
            },
            "start": {
              "column": 5,
              "line": 30
            }
          }
        },
        "range": [
          379,
          385
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 30
          },
          "start": {
            "column": 0,
            "line": 30
          }
        }
      },
      "range": [
        379,
        386
      ],
      "loc": {
        "end": {
          "column": 7,
          "line": 30
        },
        "start": {
          "column": 0,
          "line": 30
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "operator": "!=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "range": [
            387,
            388
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 31
            },
            "start": {
              "column": 0,
              "line": 31
            }
          }
        },
        "right": {
          "type": "TSTypeAssertion",
          "expression": {
            "type": "Literal",
            "raw": "0",
            "value": 0,
            "range": [
              400,
              401
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 31
              },
              "start": {
                "column": 13,
                "line": 31
              }
            }
          },
          "typeAnnotation": {
            "type": "TSNumberKeyword",
            "range": [
              393,
              399
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 31
              },
              "start": {
                "column": 6,
                "line": 31
              }
            }
          },
          "range": [
            392,
            401
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 31
            },
            "start": {
              "column": 5,
              "line": 31
            }
          }
        },
        "range": [
          387,
          401
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 31
          },
          "start": {
            "column": 0,
            "line": 31
          }
        }
      },
      "range": [
        387,
        402
      ],
      "loc": {
        "end": {
          "column": 15,
          "line": 31
        },
        "start": {
          "column": 0,
          "line": 31
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "operator": "!=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "range": [
            403,
            404
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 32
            },
            "start": {
              "column": 0,
              "line": 32
            }
          }
        },
        "right": {
          "type": "TSTypeAssertion",
          "expression": {
            "type": "Literal",
            "raw": "0",
            "value": 0,
            "range": [
              420,
              421
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 32
              },
              "start": {
                "column": 17,
                "line": 32
              }
            }
          },
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "BrandedNum",
              "optional": false,
              "range": [
                409,
                419
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 32
                },
                "start": {
                  "column": 6,
                  "line": 32
                }
              }
            },
            "range": [
              409,
              419
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 32
              },
              "start": {
                "column": 6,
                "line": 32
              }
            }
          },
          "range": [
            408,
            421
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 32
            },
            "start": {
              "column": 5,
              "line": 32
            }
          }
        },
        "range": [
          403,
          421
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 32
          },
          "start": {
            "column": 0,
            "line": 32
          }
        }
      },
      "range": [
        403,
        422
      ],
      "loc": {
        "end": {
          "column": 19,
          "line": 32
        },
        "start": {
          "column": 0,
          "line": 32
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "operator": "===",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "range": [
            440,
            441
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 35
            },
            "start": {
              "column": 0,
              "line": 35
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "0",
          "value": 0,
          "range": [
            446,
            447
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 35
            },
            "start": {
              "column": 6,
              "line": 35
            }
          }
        },
        "range": [
          440,
          447
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 35
          },
          "start": {
            "column": 0,
            "line": 35
          }
        }
      },
      "range": [
        440,
        448
      ],
      "loc": {
        "end": {
          "column": 8,
          "line": 35
        },
        "start": {
          "column": 0,
          "line": 35
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "operator": "===",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "range": [
            449,
            450
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 36
            },
            "start": {
              "column": 0,
              "line": 36
            }
          }
        },
        "right": {
          "type": "TSTypeAssertion",
          "expression": {
            "type": "Literal",
            "raw": "0",
            "value": 0,
            "range": [
              463,
              464
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 36
              },
              "start": {
                "column": 14,
                "line": 36
              }
            }
          },
          "typeAnnotation": {
            "type": "TSNumberKeyword",
            "range": [
              456,
              462
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 36
              },
              "start": {
                "column": 7,
                "line": 36
              }
            }
          },
          "range": [
            455,
            464
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 36
            },
            "start": {
              "column": 6,
              "line": 36
            }
          }
        },
        "range": [
          449,
          464
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 36
          },
          "start": {
            "column": 0,
            "line": 36
          }
        }
      },
      "range": [
        449,
        465
      ],
      "loc": {
        "end": {
          "column": 16,
          "line": 36
        },
        "start": {
          "column": 0,
          "line": 36
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "operator": "===",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "range": [
            466,
            467
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 37
            },
            "start": {
              "column": 0,
              "line": 37
            }
          }
        },
        "right": {
          "type": "TSTypeAssertion",
          "expression": {
            "type": "Literal",
            "raw": "0",
            "value": 0,
            "range": [
              484,
              485
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 37
              },
              "start": {
                "column": 18,
                "line": 37
              }
            }
          },
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "BrandedNum",
              "optional": false,
              "range": [
                473,
                483
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 37
                },
                "start": {
                  "column": 7,
                  "line": 37
                }
              }
            },
            "range": [
              473,
              483
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 37
              },
              "start": {
                "column": 7,
                "line": 37
              }
            }
          },
          "range": [
            472,
            485
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 37
            },
            "start": {
              "column": 6,
              "line": 37
            }
          }
        },
        "range": [
          466,
          485
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 37
          },
          "start": {
            "column": 0,
            "line": 37
          }
        }
      },
      "range": [
        466,
        486
      ],
      "loc": {
        "end": {
          "column": 20,
          "line": 37
        },
        "start": {
          "column": 0,
          "line": 37
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "operator": "!==",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "range": [
            504,
            505
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 40
            },
            "start": {
              "column": 0,
              "line": 40
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "0",
          "value": 0,
          "range": [
            510,
            511
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 40
            },
            "start": {
              "column": 6,
              "line": 40
            }
          }
        },
        "range": [
          504,
          511
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 40
          },
          "start": {
            "column": 0,
            "line": 40
          }
        }
      },
      "range": [
        504,
        512
      ],
      "loc": {
        "end": {
          "column": 8,
          "line": 40
        },
        "start": {
          "column": 0,
          "line": 40
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "operator": "!==",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "range": [
            513,
            514
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 41
            },
            "start": {
              "column": 0,
              "line": 41
            }
          }
        },
        "right": {
          "type": "TSTypeAssertion",
          "expression": {
            "type": "Literal",
            "raw": "0",
            "value": 0,
            "range": [
              527,
              528
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 41
              },
              "start": {
                "column": 14,
                "line": 41
              }
            }
          },
          "typeAnnotation": {
            "type": "TSNumberKeyword",
            "range": [
              520,
              526
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 41
              },
              "start": {
                "column": 7,
                "line": 41
              }
            }
          },
          "range": [
            519,
            528
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 41
            },
            "start": {
              "column": 6,
              "line": 41
            }
          }
        },
        "range": [
          513,
          528
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 41
          },
          "start": {
            "column": 0,
            "line": 41
          }
        }
      },
      "range": [
        513,
        529
      ],
      "loc": {
        "end": {
          "column": 16,
          "line": 41
        },
        "start": {
          "column": 0,
          "line": 41
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "operator": "!==",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "range": [
            530,
            531
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 42
            },
            "start": {
              "column": 0,
              "line": 42
            }
          }
        },
        "right": {
          "type": "TSTypeAssertion",
          "expression": {
            "type": "Literal",
            "raw": "0",
            "value": 0,
            "range": [
              548,
              549
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 42
              },
              "start": {
                "column": 18,
                "line": 42
              }
            }
          },
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "BrandedNum",
              "optional": false,
              "range": [
                537,
                547
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 42
                },
                "start": {
                  "column": 7,
                  "line": 42
                }
              }
            },
            "range": [
              537,
              547
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 42
              },
              "start": {
                "column": 7,
                "line": 42
              }
            }
          },
          "range": [
            536,
            549
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 42
            },
            "start": {
              "column": 6,
              "line": 42
            }
          }
        },
        "range": [
          530,
          549
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 42
          },
          "start": {
            "column": 0,
            "line": 42
          }
        }
      },
      "range": [
        530,
        550
      ],
      "loc": {
        "end": {
          "column": 20,
          "line": 42
        },
        "start": {
          "column": 0,
          "line": 42
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 43
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
