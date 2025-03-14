__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    66,
    5397
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo1",
        "optional": false,
        "range": [
          71,
          75
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 3
          },
          "start": {
            "column": 5,
            "line": 3
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
            "name": "T",
            "optional": false,
            "range": [
              81,
              82
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 3
              },
              "start": {
                "column": 15,
                "line": 3
              }
            }
          },
          "range": [
            81,
            82
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 3
            },
            "start": {
              "column": 15,
              "line": 3
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
                "cooked": "*",
                "raw": "*"
              },
              "range": [
                91,
                95
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 3
                },
                "start": {
                  "column": 25,
                  "line": 3
                }
              }
            },
            {
              "type": "TemplateElement",
              "tail": true,
              "value": {
                "cooked": "*",
                "raw": "*"
              },
              "range": [
                102,
                105
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 3
                },
                "start": {
                  "column": 36,
                  "line": 3
                }
              }
            }
          ],
          "types": [
            {
              "type": "TSInferType",
              "typeParameter": {
                "type": "TSTypeParameter",
                "const": false,
                "in": false,
                "name": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "range": [
                    101,
                    102
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 3
                    },
                    "start": {
                      "column": 35,
                      "line": 3
                    }
                  }
                },
                "out": false,
                "range": [
                  101,
                  102
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 3
                  },
                  "start": {
                    "column": 35,
                    "line": 3
                  }
                }
              },
              "range": [
                95,
                102
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 3
                },
                "start": {
                  "column": 29,
                  "line": 3
                }
              }
            }
          ],
          "range": [
            91,
            105
          ],
          "loc": {
            "end": {
              "column": 39,
              "line": 3
            },
            "start": {
              "column": 25,
              "line": 3
            }
          }
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "range": [
            112,
            117
          ],
          "loc": {
            "end": {
              "column": 51,
              "line": 3
            },
            "start": {
              "column": 46,
              "line": 3
            }
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "U",
            "optional": false,
            "range": [
              108,
              109
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 3
              },
              "start": {
                "column": 42,
                "line": 3
              }
            }
          },
          "range": [
            108,
            109
          ],
          "loc": {
            "end": {
              "column": 43,
              "line": 3
            },
            "start": {
              "column": 42,
              "line": 3
            }
          }
        },
        "range": [
          81,
          117
        ],
        "loc": {
          "end": {
            "column": 51,
            "line": 3
          },
          "start": {
            "column": 15,
            "line": 3
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 12,
            "line": 3
          },
          "start": {
            "column": 9,
            "line": 3
          }
        },
        "range": [
          75,
          78
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
                76,
                77
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 3
                },
                "start": {
                  "column": 10,
                  "line": 3
                }
              }
            },
            "out": false,
            "range": [
              76,
              77
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 3
              },
              "start": {
                "column": 10,
                "line": 3
              }
            }
          }
        ]
      },
      "range": [
        66,
        118
      ],
      "loc": {
        "end": {
          "column": 52,
          "line": 3
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
        "name": "T01",
        "optional": false,
        "range": [
          125,
          128
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 5
          },
          "start": {
            "column": 5,
            "line": 5
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            135,
            144
          ],
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "raw": "'hello'",
                "value": "hello",
                "range": [
                  136,
                  143
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 5
                  },
                  "start": {
                    "column": 16,
                    "line": 5
                  }
                }
              },
              "range": [
                136,
                143
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 5
                },
                "start": {
                  "column": 16,
                  "line": 5
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 5
            },
            "start": {
              "column": 15,
              "line": 5
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Foo1",
          "optional": false,
          "range": [
            131,
            135
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 5
            },
            "start": {
              "column": 11,
              "line": 5
            }
          }
        },
        "range": [
          131,
          144
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 5
          },
          "start": {
            "column": 11,
            "line": 5
          }
        }
      },
      "range": [
        120,
        145
      ],
      "loc": {
        "end": {
          "column": 25,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 5
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T02",
        "optional": false,
        "range": [
          151,
          154
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 6
          },
          "start": {
            "column": 5,
            "line": 6
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            161,
            172
          ],
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "raw": "'*hello*'",
                "value": "*hello*",
                "range": [
                  162,
                  171
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 6
                  },
                  "start": {
                    "column": 16,
                    "line": 6
                  }
                }
              },
              "range": [
                162,
                171
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 6
                },
                "start": {
                  "column": 16,
                  "line": 6
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 6
            },
            "start": {
              "column": 15,
              "line": 6
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Foo1",
          "optional": false,
          "range": [
            157,
            161
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 6
            },
            "start": {
              "column": 11,
              "line": 6
            }
          }
        },
        "range": [
          157,
          172
        ],
        "loc": {
          "end": {
            "column": 26,
            "line": 6
          },
          "start": {
            "column": 11,
            "line": 6
          }
        }
      },
      "range": [
        146,
        173
      ],
      "loc": {
        "end": {
          "column": 27,
          "line": 6
        },
        "start": {
          "column": 0,
          "line": 6
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T03",
        "optional": false,
        "range": [
          179,
          182
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 7
          },
          "start": {
            "column": 5,
            "line": 7
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            189,
            202
          ],
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "raw": "'**hello**'",
                "value": "**hello**",
                "range": [
                  190,
                  201
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 7
                  },
                  "start": {
                    "column": 16,
                    "line": 7
                  }
                }
              },
              "range": [
                190,
                201
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 7
                },
                "start": {
                  "column": 16,
                  "line": 7
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 7
            },
            "start": {
              "column": 15,
              "line": 7
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Foo1",
          "optional": false,
          "range": [
            185,
            189
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 7
            },
            "start": {
              "column": 11,
              "line": 7
            }
          }
        },
        "range": [
          185,
          202
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 7
          },
          "start": {
            "column": 11,
            "line": 7
          }
        }
      },
      "range": [
        174,
        203
      ],
      "loc": {
        "end": {
          "column": 29,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 7
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T04",
        "optional": false,
        "range": [
          209,
          212
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 8
          },
          "start": {
            "column": 5,
            "line": 8
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            219,
            234
          ],
          "params": [
            {
              "type": "TSTemplateLiteralType",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "tail": false,
                  "value": {
                    "cooked": "*",
                    "raw": "*"
                  },
                  "range": [
                    220,
                    224
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 8
                    },
                    "start": {
                      "column": 16,
                      "line": 8
                    }
                  }
                },
                {
                  "type": "TemplateElement",
                  "tail": true,
                  "value": {
                    "cooked": "*",
                    "raw": "*"
                  },
                  "range": [
                    230,
                    233
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 8
                    },
                    "start": {
                      "column": 26,
                      "line": 8
                    }
                  }
                }
              ],
              "types": [
                {
                  "type": "TSStringKeyword",
                  "range": [
                    224,
                    230
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 8
                    },
                    "start": {
                      "column": 20,
                      "line": 8
                    }
                  }
                }
              ],
              "range": [
                220,
                233
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 8
                },
                "start": {
                  "column": 16,
                  "line": 8
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 8
            },
            "start": {
              "column": 15,
              "line": 8
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Foo1",
          "optional": false,
          "range": [
            215,
            219
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 8
            },
            "start": {
              "column": 11,
              "line": 8
            }
          }
        },
        "range": [
          215,
          234
        ],
        "loc": {
          "end": {
            "column": 30,
            "line": 8
          },
          "start": {
            "column": 11,
            "line": 8
          }
        }
      },
      "range": [
        204,
        235
      ],
      "loc": {
        "end": {
          "column": 31,
          "line": 8
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
        "name": "T05",
        "optional": false,
        "range": [
          241,
          244
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 9
          },
          "start": {
            "column": 5,
            "line": 9
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            251,
            266
          ],
          "params": [
            {
              "type": "TSTemplateLiteralType",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "tail": false,
                  "value": {
                    "cooked": "*",
                    "raw": "*"
                  },
                  "range": [
                    252,
                    256
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 9
                    },
                    "start": {
                      "column": 16,
                      "line": 9
                    }
                  }
                },
                {
                  "type": "TemplateElement",
                  "tail": true,
                  "value": {
                    "cooked": "*",
                    "raw": "*"
                  },
                  "range": [
                    262,
                    265
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 9
                    },
                    "start": {
                      "column": 26,
                      "line": 9
                    }
                  }
                }
              ],
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "range": [
                    256,
                    262
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 9
                    },
                    "start": {
                      "column": 20,
                      "line": 9
                    }
                  }
                }
              ],
              "range": [
                252,
                265
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 9
                },
                "start": {
                  "column": 16,
                  "line": 9
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 9
            },
            "start": {
              "column": 15,
              "line": 9
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Foo1",
          "optional": false,
          "range": [
            247,
            251
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 9
            },
            "start": {
              "column": 11,
              "line": 9
            }
          }
        },
        "range": [
          247,
          266
        ],
        "loc": {
          "end": {
            "column": 30,
            "line": 9
          },
          "start": {
            "column": 11,
            "line": 9
          }
        }
      },
      "range": [
        236,
        267
      ],
      "loc": {
        "end": {
          "column": 31,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 9
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T06",
        "optional": false,
        "range": [
          273,
          276
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 10
          },
          "start": {
            "column": 5,
            "line": 10
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            283,
            298
          ],
          "params": [
            {
              "type": "TSTemplateLiteralType",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "tail": false,
                  "value": {
                    "cooked": "*",
                    "raw": "*"
                  },
                  "range": [
                    284,
                    288
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 10
                    },
                    "start": {
                      "column": 16,
                      "line": 10
                    }
                  }
                },
                {
                  "type": "TemplateElement",
                  "tail": true,
                  "value": {
                    "cooked": "*",
                    "raw": "*"
                  },
                  "range": [
                    294,
                    297
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 10
                    },
                    "start": {
                      "column": 26,
                      "line": 10
                    }
                  }
                }
              ],
              "types": [
                {
                  "type": "TSBigIntKeyword",
                  "range": [
                    288,
                    294
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 10
                    },
                    "start": {
                      "column": 20,
                      "line": 10
                    }
                  }
                }
              ],
              "range": [
                284,
                297
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 10
                },
                "start": {
                  "column": 16,
                  "line": 10
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 10
            },
            "start": {
              "column": 15,
              "line": 10
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Foo1",
          "optional": false,
          "range": [
            279,
            283
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 10
            },
            "start": {
              "column": 11,
              "line": 10
            }
          }
        },
        "range": [
          279,
          298
        ],
        "loc": {
          "end": {
            "column": 30,
            "line": 10
          },
          "start": {
            "column": 11,
            "line": 10
          }
        }
      },
      "range": [
        268,
        299
      ],
      "loc": {
        "end": {
          "column": 31,
          "line": 10
        },
        "start": {
          "column": 0,
          "line": 10
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T07",
        "optional": false,
        "range": [
          305,
          308
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 11
          },
          "start": {
            "column": 5,
            "line": 11
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            315,
            327
          ],
          "params": [
            {
              "type": "TSTemplateLiteralType",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "tail": false,
                  "value": {
                    "cooked": "*",
                    "raw": "*"
                  },
                  "range": [
                    316,
                    320
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 11
                    },
                    "start": {
                      "column": 16,
                      "line": 11
                    }
                  }
                },
                {
                  "type": "TemplateElement",
                  "tail": true,
                  "value": {
                    "cooked": "*",
                    "raw": "*"
                  },
                  "range": [
                    323,
                    326
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
                }
              ],
              "types": [
                {
                  "type": "TSAnyKeyword",
                  "range": [
                    320,
                    323
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 11
                    },
                    "start": {
                      "column": 20,
                      "line": 11
                    }
                  }
                }
              ],
              "range": [
                316,
                326
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 11
                },
                "start": {
                  "column": 16,
                  "line": 11
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 27,
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
          "name": "Foo1",
          "optional": false,
          "range": [
            311,
            315
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 11
            },
            "start": {
              "column": 11,
              "line": 11
            }
          }
        },
        "range": [
          311,
          327
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 11
          },
          "start": {
            "column": 11,
            "line": 11
          }
        }
      },
      "range": [
        300,
        328
      ],
      "loc": {
        "end": {
          "column": 28,
          "line": 11
        },
        "start": {
          "column": 0,
          "line": 11
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T08",
        "optional": false,
        "range": [
          334,
          337
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 12
          },
          "start": {
            "column": 5,
            "line": 12
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            344,
            361
          ],
          "params": [
            {
              "type": "TSTemplateLiteralType",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "tail": false,
                  "value": {
                    "cooked": "**",
                    "raw": "**"
                  },
                  "range": [
                    345,
                    350
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 12
                    },
                    "start": {
                      "column": 16,
                      "line": 12
                    }
                  }
                },
                {
                  "type": "TemplateElement",
                  "tail": true,
                  "value": {
                    "cooked": "**",
                    "raw": "**"
                  },
                  "range": [
                    356,
                    360
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 12
                    },
                    "start": {
                      "column": 27,
                      "line": 12
                    }
                  }
                }
              ],
              "types": [
                {
                  "type": "TSStringKeyword",
                  "range": [
                    350,
                    356
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
                }
              ],
              "range": [
                345,
                360
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 12
                },
                "start": {
                  "column": 16,
                  "line": 12
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 12
            },
            "start": {
              "column": 15,
              "line": 12
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Foo1",
          "optional": false,
          "range": [
            340,
            344
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 12
            },
            "start": {
              "column": 11,
              "line": 12
            }
          }
        },
        "range": [
          340,
          361
        ],
        "loc": {
          "end": {
            "column": 32,
            "line": 12
          },
          "start": {
            "column": 11,
            "line": 12
          }
        }
      },
      "range": [
        329,
        362
      ],
      "loc": {
        "end": {
          "column": 33,
          "line": 12
        },
        "start": {
          "column": 0,
          "line": 12
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T09",
        "optional": false,
        "range": [
          368,
          371
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 13
          },
          "start": {
            "column": 5,
            "line": 13
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            378,
            406
          ],
          "params": [
            {
              "type": "TSTemplateLiteralType",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "tail": false,
                  "value": {
                    "cooked": "**",
                    "raw": "**"
                  },
                  "range": [
                    379,
                    384
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 13
                    },
                    "start": {
                      "column": 16,
                      "line": 13
                    }
                  }
                },
                {
                  "type": "TemplateElement",
                  "tail": false,
                  "value": {
                    "cooked": "**",
                    "raw": "**"
                  },
                  "range": [
                    390,
                    395
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 13
                    },
                    "start": {
                      "column": 27,
                      "line": 13
                    }
                  }
                },
                {
                  "type": "TemplateElement",
                  "tail": true,
                  "value": {
                    "cooked": "**",
                    "raw": "**"
                  },
                  "range": [
                    401,
                    405
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 13
                    },
                    "start": {
                      "column": 38,
                      "line": 13
                    }
                  }
                }
              ],
              "types": [
                {
                  "type": "TSStringKeyword",
                  "range": [
                    384,
                    390
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 13
                    },
                    "start": {
                      "column": 21,
                      "line": 13
                    }
                  }
                },
                {
                  "type": "TSStringKeyword",
                  "range": [
                    395,
                    401
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 13
                    },
                    "start": {
                      "column": 32,
                      "line": 13
                    }
                  }
                }
              ],
              "range": [
                379,
                405
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 13
                },
                "start": {
                  "column": 16,
                  "line": 13
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 43,
              "line": 13
            },
            "start": {
              "column": 15,
              "line": 13
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Foo1",
          "optional": false,
          "range": [
            374,
            378
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 13
            },
            "start": {
              "column": 11,
              "line": 13
            }
          }
        },
        "range": [
          374,
          406
        ],
        "loc": {
          "end": {
            "column": 43,
            "line": 13
          },
          "start": {
            "column": 11,
            "line": 13
          }
        }
      },
      "range": [
        363,
        407
      ],
      "loc": {
        "end": {
          "column": 44,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 13
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T10",
        "optional": false,
        "range": [
          413,
          416
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 14
          },
          "start": {
            "column": 5,
            "line": 14
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            423,
            449
          ],
          "params": [
            {
              "type": "TSTemplateLiteralType",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "tail": false,
                  "value": {
                    "cooked": "**",
                    "raw": "**"
                  },
                  "range": [
                    424,
                    429
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 14
                    },
                    "start": {
                      "column": 16,
                      "line": 14
                    }
                  }
                },
                {
                  "type": "TemplateElement",
                  "tail": true,
                  "value": {
                    "cooked": "**",
                    "raw": "**"
                  },
                  "range": [
                    444,
                    448
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 14
                    },
                    "start": {
                      "column": 36,
                      "line": 14
                    }
                  }
                }
              ],
              "types": [
                {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "raw": "'a'",
                        "value": "a",
                        "range": [
                          429,
                          432
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 14
                          },
                          "start": {
                            "column": 21,
                            "line": 14
                          }
                        }
                      },
                      "range": [
                        429,
                        432
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 14
                        },
                        "start": {
                          "column": 21,
                          "line": 14
                        }
                      }
                    },
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "raw": "'b'",
                        "value": "b",
                        "range": [
                          435,
                          438
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 14
                          },
                          "start": {
                            "column": 27,
                            "line": 14
                          }
                        }
                      },
                      "range": [
                        435,
                        438
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 14
                        },
                        "start": {
                          "column": 27,
                          "line": 14
                        }
                      }
                    },
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "raw": "'c'",
                        "value": "c",
                        "range": [
                          441,
                          444
                        ],
                        "loc": {
                          "end": {
                            "column": 36,
                            "line": 14
                          },
                          "start": {
                            "column": 33,
                            "line": 14
                          }
                        }
                      },
                      "range": [
                        441,
                        444
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 14
                        },
                        "start": {
                          "column": 33,
                          "line": 14
                        }
                      }
                    }
                  ],
                  "range": [
                    429,
                    444
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 14
                    },
                    "start": {
                      "column": 21,
                      "line": 14
                    }
                  }
                }
              ],
              "range": [
                424,
                448
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 14
                },
                "start": {
                  "column": 16,
                  "line": 14
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 41,
              "line": 14
            },
            "start": {
              "column": 15,
              "line": 14
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Foo1",
          "optional": false,
          "range": [
            419,
            423
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
        "range": [
          419,
          449
        ],
        "loc": {
          "end": {
            "column": 41,
            "line": 14
          },
          "start": {
            "column": 11,
            "line": 14
          }
        }
      },
      "range": [
        408,
        450
      ],
      "loc": {
        "end": {
          "column": 42,
          "line": 14
        },
        "start": {
          "column": 0,
          "line": 14
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T11",
        "optional": false,
        "range": [
          456,
          459
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 15
          },
          "start": {
            "column": 5,
            "line": 15
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            466,
            496
          ],
          "params": [
            {
              "type": "TSTemplateLiteralType",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "tail": false,
                  "value": {
                    "cooked": "**",
                    "raw": "**"
                  },
                  "range": [
                    467,
                    472
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 15
                    },
                    "start": {
                      "column": 16,
                      "line": 15
                    }
                  }
                },
                {
                  "type": "TemplateElement",
                  "tail": false,
                  "value": {
                    "cooked": "**",
                    "raw": "**"
                  },
                  "range": [
                    479,
                    484
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 15
                    },
                    "start": {
                      "column": 28,
                      "line": 15
                    }
                  }
                },
                {
                  "type": "TemplateElement",
                  "tail": true,
                  "value": {
                    "cooked": "**",
                    "raw": "**"
                  },
                  "range": [
                    491,
                    495
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 15
                    },
                    "start": {
                      "column": 40,
                      "line": 15
                    }
                  }
                }
              ],
              "types": [
                {
                  "type": "TSBooleanKeyword",
                  "range": [
                    472,
                    479
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 15
                    },
                    "start": {
                      "column": 21,
                      "line": 15
                    }
                  }
                },
                {
                  "type": "TSBooleanKeyword",
                  "range": [
                    484,
                    491
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 15
                    },
                    "start": {
                      "column": 33,
                      "line": 15
                    }
                  }
                }
              ],
              "range": [
                467,
                495
              ],
              "loc": {
                "end": {
                  "column": 44,
                  "line": 15
                },
                "start": {
                  "column": 16,
                  "line": 15
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 45,
              "line": 15
            },
            "start": {
              "column": 15,
              "line": 15
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Foo1",
          "optional": false,
          "range": [
            462,
            466
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 15
            },
            "start": {
              "column": 11,
              "line": 15
            }
          }
        },
        "range": [
          462,
          496
        ],
        "loc": {
          "end": {
            "column": 45,
            "line": 15
          },
          "start": {
            "column": 11,
            "line": 15
          }
        }
      },
      "range": [
        451,
        497
      ],
      "loc": {
        "end": {
          "column": 46,
          "line": 15
        },
        "start": {
          "column": 0,
          "line": 15
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
        "name": "foo1",
        "optional": false,
        "range": [
          516,
          520
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 17
          },
          "start": {
            "column": 17,
            "line": 17
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 53,
                "line": 17
              },
              "start": {
                "column": 43,
                "line": 17
              }
            },
            "range": [
              542,
              552
            ],
            "typeAnnotation": {
              "type": "TSTemplateLiteralType",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "tail": false,
                  "value": {
                    "cooked": "*",
                    "raw": "*"
                  },
                  "range": [
                    544,
                    548
                  ],
                  "loc": {
                    "end": {
                      "column": 49,
                      "line": 17
                    },
                    "start": {
                      "column": 45,
                      "line": 17
                    }
                  }
                },
                {
                  "type": "TemplateElement",
                  "tail": true,
                  "value": {
                    "cooked": "*",
                    "raw": "*"
                  },
                  "range": [
                    549,
                    552
                  ],
                  "loc": {
                    "end": {
                      "column": 53,
                      "line": 17
                    },
                    "start": {
                      "column": 50,
                      "line": 17
                    }
                  }
                }
              ],
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "V",
                    "optional": false,
                    "range": [
                      548,
                      549
                    ],
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 17
                      },
                      "start": {
                        "column": 49,
                        "line": 17
                      }
                    }
                  },
                  "range": [
                    548,
                    549
                  ],
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 17
                    },
                    "start": {
                      "column": 49,
                      "line": 17
                    }
                  }
                }
              ],
              "range": [
                544,
                552
              ],
              "loc": {
                "end": {
                  "column": 53,
                  "line": 17
                },
                "start": {
                  "column": 45,
                  "line": 17
                }
              }
            }
          },
          "range": [
            539,
            552
          ],
          "loc": {
            "end": {
              "column": 53,
              "line": 17
            },
            "start": {
              "column": 40,
              "line": 17
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 57,
            "line": 17
          },
          "start": {
            "column": 54,
            "line": 17
          }
        },
        "range": [
          553,
          556
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "V",
            "optional": false,
            "range": [
              555,
              556
            ],
            "loc": {
              "end": {
                "column": 57,
                "line": 17
              },
              "start": {
                "column": 56,
                "line": 17
              }
            }
          },
          "range": [
            555,
            556
          ],
          "loc": {
            "end": {
              "column": 57,
              "line": 17
            },
            "start": {
              "column": 56,
              "line": 17
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 39,
            "line": 17
          },
          "start": {
            "column": 21,
            "line": 17
          }
        },
        "range": [
          520,
          538
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "range": [
                531,
                537
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 17
                },
                "start": {
                  "column": 32,
                  "line": 17
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "range": [
                521,
                522
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 17
                },
                "start": {
                  "column": 22,
                  "line": 17
                }
              }
            },
            "out": false,
            "range": [
              521,
              537
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 17
              },
              "start": {
                "column": 22,
                "line": 17
              }
            }
          }
        ]
      },
      "range": [
        499,
        557
      ],
      "loc": {
        "end": {
          "column": 58,
          "line": 17
        },
        "start": {
          "column": 0,
          "line": 17
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
            "type": "VariableDeclaration",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x1",
                  "optional": false,
                  "range": [
                    639,
                    641
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 20
                    },
                    "start": {
                      "column": 8,
                      "line": 20
                    }
                  }
                },
                "init": {
                  "type": "CallExpression",
                  "arguments": [
                    {
                      "type": "Literal",
                      "raw": "'hello'",
                      "value": "hello",
                      "range": [
                        649,
                        656
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 20
                        },
                        "start": {
                          "column": 18,
                          "line": 20
                        }
                      }
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo1",
                    "optional": false,
                    "range": [
                      644,
                      648
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 20
                      },
                      "start": {
                        "column": 13,
                        "line": 20
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    644,
                    657
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 20
                    },
                    "start": {
                      "column": 13,
                      "line": 20
                    }
                  }
                },
                "range": [
                  639,
                  657
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 20
                  },
                  "start": {
                    "column": 8,
                    "line": 20
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              635,
              658
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 20
              },
              "start": {
                "column": 4,
                "line": 20
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
                  "name": "x2",
                  "optional": false,
                  "range": [
                    677,
                    679
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 21
                    },
                    "start": {
                      "column": 8,
                      "line": 21
                    }
                  }
                },
                "init": {
                  "type": "CallExpression",
                  "arguments": [
                    {
                      "type": "Literal",
                      "raw": "'*hello*'",
                      "value": "*hello*",
                      "range": [
                        687,
                        696
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 21
                        },
                        "start": {
                          "column": 18,
                          "line": 21
                        }
                      }
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo1",
                    "optional": false,
                    "range": [
                      682,
                      686
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 21
                      },
                      "start": {
                        "column": 13,
                        "line": 21
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    682,
                    697
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 21
                    },
                    "start": {
                      "column": 13,
                      "line": 21
                    }
                  }
                },
                "range": [
                  677,
                  697
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 21
                  },
                  "start": {
                    "column": 8,
                    "line": 21
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              673,
              698
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 21
              },
              "start": {
                "column": 4,
                "line": 21
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
                  "name": "x3",
                  "optional": false,
                  "range": [
                    707,
                    709
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 22
                    },
                    "start": {
                      "column": 8,
                      "line": 22
                    }
                  }
                },
                "init": {
                  "type": "CallExpression",
                  "arguments": [
                    {
                      "type": "Literal",
                      "raw": "'**hello**'",
                      "value": "**hello**",
                      "range": [
                        717,
                        728
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 22
                        },
                        "start": {
                          "column": 18,
                          "line": 22
                        }
                      }
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo1",
                    "optional": false,
                    "range": [
                      712,
                      716
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 22
                      },
                      "start": {
                        "column": 13,
                        "line": 22
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    712,
                    729
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 22
                    },
                    "start": {
                      "column": 13,
                      "line": 22
                    }
                  }
                },
                "range": [
                  707,
                  729
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 22
                  },
                  "start": {
                    "column": 8,
                    "line": 22
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              703,
              730
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 22
              },
              "start": {
                "column": 4,
                "line": 22
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
                  "name": "x4",
                  "optional": false,
                  "range": [
                    739,
                    741
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 23
                    },
                    "start": {
                      "column": 8,
                      "line": 23
                    }
                  }
                },
                "init": {
                  "type": "CallExpression",
                  "arguments": [
                    {
                      "type": "TSAsExpression",
                      "expression": {
                        "type": "TemplateLiteral",
                        "expressions": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "range": [
                              753,
                              754
                            ],
                            "loc": {
                              "end": {
                                "column": 23,
                                "line": 23
                              },
                              "start": {
                                "column": 22,
                                "line": 23
                              }
                            }
                          }
                        ],
                        "quasis": [
                          {
                            "type": "TemplateElement",
                            "tail": false,
                            "value": {
                              "cooked": "*",
                              "raw": "*"
                            },
                            "range": [
                              749,
                              753
                            ],
                            "loc": {
                              "end": {
                                "column": 22,
                                "line": 23
                              },
                              "start": {
                                "column": 18,
                                "line": 23
                              }
                            }
                          },
                          {
                            "type": "TemplateElement",
                            "tail": true,
                            "value": {
                              "cooked": "*",
                              "raw": "*"
                            },
                            "range": [
                              754,
                              757
                            ],
                            "loc": {
                              "end": {
                                "column": 26,
                                "line": 23
                              },
                              "start": {
                                "column": 23,
                                "line": 23
                              }
                            }
                          }
                        ],
                        "range": [
                          749,
                          757
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 23
                          },
                          "start": {
                            "column": 18,
                            "line": 23
                          }
                        }
                      },
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "const",
                          "optional": false,
                          "range": [
                            761,
                            766
                          ],
                          "loc": {
                            "end": {
                              "column": 35,
                              "line": 23
                            },
                            "start": {
                              "column": 30,
                              "line": 23
                            }
                          }
                        },
                        "range": [
                          761,
                          766
                        ],
                        "loc": {
                          "end": {
                            "column": 35,
                            "line": 23
                          },
                          "start": {
                            "column": 30,
                            "line": 23
                          }
                        }
                      },
                      "range": [
                        749,
                        766
                      ],
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 23
                        },
                        "start": {
                          "column": 18,
                          "line": 23
                        }
                      }
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo1",
                    "optional": false,
                    "range": [
                      744,
                      748
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 23
                      },
                      "start": {
                        "column": 13,
                        "line": 23
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    744,
                    767
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 23
                    },
                    "start": {
                      "column": 13,
                      "line": 23
                    }
                  }
                },
                "range": [
                  739,
                  767
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 23
                  },
                  "start": {
                    "column": 8,
                    "line": 23
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              735,
              768
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 23
              },
              "start": {
                "column": 4,
                "line": 23
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
                  "name": "x5",
                  "optional": false,
                  "range": [
                    777,
                    779
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 24
                    },
                    "start": {
                      "column": 8,
                      "line": 24
                    }
                  }
                },
                "init": {
                  "type": "CallExpression",
                  "arguments": [
                    {
                      "type": "TSAsExpression",
                      "expression": {
                        "type": "TemplateLiteral",
                        "expressions": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "n",
                            "optional": false,
                            "range": [
                              791,
                              792
                            ],
                            "loc": {
                              "end": {
                                "column": 23,
                                "line": 24
                              },
                              "start": {
                                "column": 22,
                                "line": 24
                              }
                            }
                          }
                        ],
                        "quasis": [
                          {
                            "type": "TemplateElement",
                            "tail": false,
                            "value": {
                              "cooked": "*",
                              "raw": "*"
                            },
                            "range": [
                              787,
                              791
                            ],
                            "loc": {
                              "end": {
                                "column": 22,
                                "line": 24
                              },
                              "start": {
                                "column": 18,
                                "line": 24
                              }
                            }
                          },
                          {
                            "type": "TemplateElement",
                            "tail": true,
                            "value": {
                              "cooked": "*",
                              "raw": "*"
                            },
                            "range": [
                              792,
                              795
                            ],
                            "loc": {
                              "end": {
                                "column": 26,
                                "line": 24
                              },
                              "start": {
                                "column": 23,
                                "line": 24
                              }
                            }
                          }
                        ],
                        "range": [
                          787,
                          795
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 24
                          },
                          "start": {
                            "column": 18,
                            "line": 24
                          }
                        }
                      },
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "const",
                          "optional": false,
                          "range": [
                            799,
                            804
                          ],
                          "loc": {
                            "end": {
                              "column": 35,
                              "line": 24
                            },
                            "start": {
                              "column": 30,
                              "line": 24
                            }
                          }
                        },
                        "range": [
                          799,
                          804
                        ],
                        "loc": {
                          "end": {
                            "column": 35,
                            "line": 24
                          },
                          "start": {
                            "column": 30,
                            "line": 24
                          }
                        }
                      },
                      "range": [
                        787,
                        804
                      ],
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 24
                        },
                        "start": {
                          "column": 18,
                          "line": 24
                        }
                      }
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo1",
                    "optional": false,
                    "range": [
                      782,
                      786
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 24
                      },
                      "start": {
                        "column": 13,
                        "line": 24
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    782,
                    805
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 24
                    },
                    "start": {
                      "column": 13,
                      "line": 24
                    }
                  }
                },
                "range": [
                  777,
                  805
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 24
                  },
                  "start": {
                    "column": 8,
                    "line": 24
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              773,
              806
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 24
              },
              "start": {
                "column": 4,
                "line": 24
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
                  "name": "x6",
                  "optional": false,
                  "range": [
                    815,
                    817
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 25
                    },
                    "start": {
                      "column": 8,
                      "line": 25
                    }
                  }
                },
                "init": {
                  "type": "CallExpression",
                  "arguments": [
                    {
                      "type": "TSAsExpression",
                      "expression": {
                        "type": "TemplateLiteral",
                        "expressions": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "range": [
                              829,
                              830
                            ],
                            "loc": {
                              "end": {
                                "column": 23,
                                "line": 25
                              },
                              "start": {
                                "column": 22,
                                "line": 25
                              }
                            }
                          }
                        ],
                        "quasis": [
                          {
                            "type": "TemplateElement",
                            "tail": false,
                            "value": {
                              "cooked": "*",
                              "raw": "*"
                            },
                            "range": [
                              825,
                              829
                            ],
                            "loc": {
                              "end": {
                                "column": 22,
                                "line": 25
                              },
                              "start": {
                                "column": 18,
                                "line": 25
                              }
                            }
                          },
                          {
                            "type": "TemplateElement",
                            "tail": true,
                            "value": {
                              "cooked": "*",
                              "raw": "*"
                            },
                            "range": [
                              830,
                              833
                            ],
                            "loc": {
                              "end": {
                                "column": 26,
                                "line": 25
                              },
                              "start": {
                                "column": 23,
                                "line": 25
                              }
                            }
                          }
                        ],
                        "range": [
                          825,
                          833
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 25
                          },
                          "start": {
                            "column": 18,
                            "line": 25
                          }
                        }
                      },
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "const",
                          "optional": false,
                          "range": [
                            837,
                            842
                          ],
                          "loc": {
                            "end": {
                              "column": 35,
                              "line": 25
                            },
                            "start": {
                              "column": 30,
                              "line": 25
                            }
                          }
                        },
                        "range": [
                          837,
                          842
                        ],
                        "loc": {
                          "end": {
                            "column": 35,
                            "line": 25
                          },
                          "start": {
                            "column": 30,
                            "line": 25
                          }
                        }
                      },
                      "range": [
                        825,
                        842
                      ],
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 25
                        },
                        "start": {
                          "column": 18,
                          "line": 25
                        }
                      }
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo1",
                    "optional": false,
                    "range": [
                      820,
                      824
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 25
                      },
                      "start": {
                        "column": 13,
                        "line": 25
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    820,
                    843
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 25
                    },
                    "start": {
                      "column": 13,
                      "line": 25
                    }
                  }
                },
                "range": [
                  815,
                  843
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 25
                  },
                  "start": {
                    "column": 8,
                    "line": 25
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              811,
              844
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 25
              },
              "start": {
                "column": 4,
                "line": 25
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
                  "name": "x7",
                  "optional": false,
                  "range": [
                    853,
                    855
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 26
                    },
                    "start": {
                      "column": 8,
                      "line": 26
                    }
                  }
                },
                "init": {
                  "type": "CallExpression",
                  "arguments": [
                    {
                      "type": "TSAsExpression",
                      "expression": {
                        "type": "TemplateLiteral",
                        "expressions": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "t",
                            "optional": false,
                            "range": [
                              867,
                              868
                            ],
                            "loc": {
                              "end": {
                                "column": 23,
                                "line": 26
                              },
                              "start": {
                                "column": 22,
                                "line": 26
                              }
                            }
                          }
                        ],
                        "quasis": [
                          {
                            "type": "TemplateElement",
                            "tail": false,
                            "value": {
                              "cooked": "*",
                              "raw": "*"
                            },
                            "range": [
                              863,
                              867
                            ],
                            "loc": {
                              "end": {
                                "column": 22,
                                "line": 26
                              },
                              "start": {
                                "column": 18,
                                "line": 26
                              }
                            }
                          },
                          {
                            "type": "TemplateElement",
                            "tail": true,
                            "value": {
                              "cooked": "*",
                              "raw": "*"
                            },
                            "range": [
                              868,
                              871
                            ],
                            "loc": {
                              "end": {
                                "column": 26,
                                "line": 26
                              },
                              "start": {
                                "column": 23,
                                "line": 26
                              }
                            }
                          }
                        ],
                        "range": [
                          863,
                          871
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 26
                          },
                          "start": {
                            "column": 18,
                            "line": 26
                          }
                        }
                      },
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "const",
                          "optional": false,
                          "range": [
                            875,
                            880
                          ],
                          "loc": {
                            "end": {
                              "column": 35,
                              "line": 26
                            },
                            "start": {
                              "column": 30,
                              "line": 26
                            }
                          }
                        },
                        "range": [
                          875,
                          880
                        ],
                        "loc": {
                          "end": {
                            "column": 35,
                            "line": 26
                          },
                          "start": {
                            "column": 30,
                            "line": 26
                          }
                        }
                      },
                      "range": [
                        863,
                        880
                      ],
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 26
                        },
                        "start": {
                          "column": 18,
                          "line": 26
                        }
                      }
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo1",
                    "optional": false,
                    "range": [
                      858,
                      862
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 26
                      },
                      "start": {
                        "column": 13,
                        "line": 26
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    858,
                    881
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 26
                    },
                    "start": {
                      "column": 13,
                      "line": 26
                    }
                  }
                },
                "range": [
                  853,
                  881
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 26
                  },
                  "start": {
                    "column": 8,
                    "line": 26
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              849,
              882
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 26
              },
              "start": {
                "column": 4,
                "line": 26
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
                  "name": "x8",
                  "optional": false,
                  "range": [
                    891,
                    893
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 27
                    },
                    "start": {
                      "column": 8,
                      "line": 27
                    }
                  }
                },
                "init": {
                  "type": "CallExpression",
                  "arguments": [
                    {
                      "type": "TSAsExpression",
                      "expression": {
                        "type": "TemplateLiteral",
                        "expressions": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "range": [
                              906,
                              907
                            ],
                            "loc": {
                              "end": {
                                "column": 24,
                                "line": 27
                              },
                              "start": {
                                "column": 23,
                                "line": 27
                              }
                            }
                          }
                        ],
                        "quasis": [
                          {
                            "type": "TemplateElement",
                            "tail": false,
                            "value": {
                              "cooked": "**",
                              "raw": "**"
                            },
                            "range": [
                              901,
                              906
                            ],
                            "loc": {
                              "end": {
                                "column": 23,
                                "line": 27
                              },
                              "start": {
                                "column": 18,
                                "line": 27
                              }
                            }
                          },
                          {
                            "type": "TemplateElement",
                            "tail": true,
                            "value": {
                              "cooked": "**",
                              "raw": "**"
                            },
                            "range": [
                              907,
                              911
                            ],
                            "loc": {
                              "end": {
                                "column": 28,
                                "line": 27
                              },
                              "start": {
                                "column": 24,
                                "line": 27
                              }
                            }
                          }
                        ],
                        "range": [
                          901,
                          911
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 27
                          },
                          "start": {
                            "column": 18,
                            "line": 27
                          }
                        }
                      },
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "const",
                          "optional": false,
                          "range": [
                            915,
                            920
                          ],
                          "loc": {
                            "end": {
                              "column": 37,
                              "line": 27
                            },
                            "start": {
                              "column": 32,
                              "line": 27
                            }
                          }
                        },
                        "range": [
                          915,
                          920
                        ],
                        "loc": {
                          "end": {
                            "column": 37,
                            "line": 27
                          },
                          "start": {
                            "column": 32,
                            "line": 27
                          }
                        }
                      },
                      "range": [
                        901,
                        920
                      ],
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 27
                        },
                        "start": {
                          "column": 18,
                          "line": 27
                        }
                      }
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo1",
                    "optional": false,
                    "range": [
                      896,
                      900
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 27
                      },
                      "start": {
                        "column": 13,
                        "line": 27
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    896,
                    921
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 27
                    },
                    "start": {
                      "column": 13,
                      "line": 27
                    }
                  }
                },
                "range": [
                  891,
                  921
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 27
                  },
                  "start": {
                    "column": 8,
                    "line": 27
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              887,
              922
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 27
              },
              "start": {
                "column": 4,
                "line": 27
              }
            }
          }
        ],
        "range": [
          629,
          924
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 28
          },
          "start": {
            "column": 70,
            "line": 19
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "range": [
          568,
          570
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 19
          },
          "start": {
            "column": 9,
            "line": 19
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 39,
                "line": 19
              },
              "start": {
                "column": 31,
                "line": 19
              }
            },
            "range": [
              590,
              598
            ],
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "range": [
                592,
                598
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 19
                },
                "start": {
                  "column": 33,
                  "line": 19
                }
              }
            }
          },
          "range": [
            589,
            598
          ],
          "loc": {
            "end": {
              "column": 39,
              "line": 19
            },
            "start": {
              "column": 30,
              "line": 19
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 50,
                "line": 19
              },
              "start": {
                "column": 42,
                "line": 19
              }
            },
            "range": [
              601,
              609
            ],
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "range": [
                603,
                609
              ],
              "loc": {
                "end": {
                  "column": 50,
                  "line": 19
                },
                "start": {
                  "column": 44,
                  "line": 19
                }
              }
            }
          },
          "range": [
            600,
            609
          ],
          "loc": {
            "end": {
              "column": 50,
              "line": 19
            },
            "start": {
              "column": 41,
              "line": 19
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 62,
                "line": 19
              },
              "start": {
                "column": 53,
                "line": 19
              }
            },
            "range": [
              612,
              621
            ],
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "range": [
                614,
                621
              ],
              "loc": {
                "end": {
                  "column": 62,
                  "line": 19
                },
                "start": {
                  "column": 55,
                  "line": 19
                }
              }
            }
          },
          "range": [
            611,
            621
          ],
          "loc": {
            "end": {
              "column": 62,
              "line": 19
            },
            "start": {
              "column": 52,
              "line": 19
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 68,
                "line": 19
              },
              "start": {
                "column": 65,
                "line": 19
              }
            },
            "range": [
              624,
              627
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  626,
                  627
                ],
                "loc": {
                  "end": {
                    "column": 68,
                    "line": 19
                  },
                  "start": {
                    "column": 67,
                    "line": 19
                  }
                }
              },
              "range": [
                626,
                627
              ],
              "loc": {
                "end": {
                  "column": 68,
                  "line": 19
                },
                "start": {
                  "column": 67,
                  "line": 19
                }
              }
            }
          },
          "range": [
            623,
            627
          ],
          "loc": {
            "end": {
              "column": 68,
              "line": 19
            },
            "start": {
              "column": 64,
              "line": 19
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 29,
            "line": 19
          },
          "start": {
            "column": 11,
            "line": 19
          }
        },
        "range": [
          570,
          588
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "range": [
                581,
                587
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 19
                },
                "start": {
                  "column": 22,
                  "line": 19
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                571,
                572
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 19
                },
                "start": {
                  "column": 12,
                  "line": 19
                }
              }
            },
            "out": false,
            "range": [
              571,
              587
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 19
              },
              "start": {
                "column": 12,
                "line": 19
              }
            }
          }
        ]
      },
      "range": [
        559,
        924
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 28
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
        "name": "Parts",
        "optional": false,
        "range": [
          1067,
          1072
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 33
          },
          "start": {
            "column": 5,
            "line": 33
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
            "name": "T",
            "optional": false,
            "range": [
              1082,
              1083
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 34
              },
              "start": {
                "column": 4,
                "line": 34
              }
            }
          },
          "range": [
            1082,
            1083
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 34
            },
            "start": {
              "column": 4,
              "line": 34
            }
          }
        },
        "extendsType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "raw": "''",
            "value": "",
            "range": [
              1092,
              1094
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 34
              },
              "start": {
                "column": 14,
                "line": 34
              }
            }
          },
          "range": [
            1092,
            1094
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 34
            },
            "start": {
              "column": 14,
              "line": 34
            }
          }
        },
        "falseType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                1106,
                1107
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 35
                },
                "start": {
                  "column": 4,
                  "line": 35
                }
              }
            },
            "range": [
              1106,
              1107
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 35
              },
              "start": {
                "column": 4,
                "line": 35
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
                  1116,
                  1119
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 35
                  },
                  "start": {
                    "column": 14,
                    "line": 35
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
                  1129,
                  1132
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 35
                  },
                  "start": {
                    "column": 27,
                    "line": 35
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
                  1142,
                  1144
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 35
                  },
                  "start": {
                    "column": 40,
                    "line": 35
                  }
                }
              }
            ],
            "types": [
              {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Head",
                    "optional": false,
                    "range": [
                      1125,
                      1129
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 35
                      },
                      "start": {
                        "column": 23,
                        "line": 35
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    1125,
                    1129
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 35
                    },
                    "start": {
                      "column": 23,
                      "line": 35
                    }
                  }
                },
                "range": [
                  1119,
                  1129
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 35
                  },
                  "start": {
                    "column": 17,
                    "line": 35
                  }
                }
              },
              {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Tail",
                    "optional": false,
                    "range": [
                      1138,
                      1142
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 35
                      },
                      "start": {
                        "column": 36,
                        "line": 35
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    1138,
                    1142
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 35
                    },
                    "start": {
                      "column": 36,
                      "line": 35
                    }
                  }
                },
                "range": [
                  1132,
                  1142
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 35
                  },
                  "start": {
                    "column": 30,
                    "line": 35
                  }
                }
              }
            ],
            "range": [
              1116,
              1144
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 35
              },
              "start": {
                "column": 14,
                "line": 35
              }
            }
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "range": [
              1176,
              1181
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 36
              },
              "start": {
                "column": 4,
                "line": 36
              }
            }
          },
          "trueType": {
            "type": "TSTupleType",
            "elementTypes": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Head",
                  "optional": false,
                  "range": [
                    1148,
                    1152
                  ],
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 35
                    },
                    "start": {
                      "column": 46,
                      "line": 35
                    }
                  }
                },
                "range": [
                  1148,
                  1152
                ],
                "loc": {
                  "end": {
                    "column": 50,
                    "line": 35
                  },
                  "start": {
                    "column": 46,
                    "line": 35
                  }
                }
              },
              {
                "type": "TSRestType",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      1162,
                      1168
                    ],
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Tail",
                          "optional": false,
                          "range": [
                            1163,
                            1167
                          ],
                          "loc": {
                            "end": {
                              "column": 65,
                              "line": 35
                            },
                            "start": {
                              "column": 61,
                              "line": 35
                            }
                          }
                        },
                        "range": [
                          1163,
                          1167
                        ],
                        "loc": {
                          "end": {
                            "column": 65,
                            "line": 35
                          },
                          "start": {
                            "column": 61,
                            "line": 35
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 66,
                        "line": 35
                      },
                      "start": {
                        "column": 60,
                        "line": 35
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Parts",
                    "optional": false,
                    "range": [
                      1157,
                      1162
                    ],
                    "loc": {
                      "end": {
                        "column": 60,
                        "line": 35
                      },
                      "start": {
                        "column": 55,
                        "line": 35
                      }
                    }
                  },
                  "range": [
                    1157,
                    1168
                  ],
                  "loc": {
                    "end": {
                      "column": 66,
                      "line": 35
                    },
                    "start": {
                      "column": 55,
                      "line": 35
                    }
                  }
                },
                "range": [
                  1154,
                  1168
                ],
                "loc": {
                  "end": {
                    "column": 66,
                    "line": 35
                  },
                  "start": {
                    "column": 52,
                    "line": 35
                  }
                }
              }
            ],
            "range": [
              1147,
              1169
            ],
            "loc": {
              "end": {
                "column": 67,
                "line": 35
              },
              "start": {
                "column": 45,
                "line": 35
              }
            }
          },
          "range": [
            1106,
            1181
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 36
            },
            "start": {
              "column": 4,
              "line": 35
            }
          }
        },
        "trueType": {
          "type": "TSTupleType",
          "elementTypes": [],
          "range": [
            1097,
            1099
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 34
            },
            "start": {
              "column": 19,
              "line": 34
            }
          }
        },
        "range": [
          1082,
          1181
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 36
          },
          "start": {
            "column": 4,
            "line": 34
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 13,
            "line": 33
          },
          "start": {
            "column": 10,
            "line": 33
          }
        },
        "range": [
          1072,
          1075
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
                1073,
                1074
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 33
                },
                "start": {
                  "column": 11,
                  "line": 33
                }
              }
            },
            "out": false,
            "range": [
              1073,
              1074
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 33
              },
              "start": {
                "column": 11,
                "line": 33
              }
            }
          }
        ]
      },
      "range": [
        1062,
        1182
      ],
      "loc": {
        "end": {
          "column": 10,
          "line": 36
        },
        "start": {
          "column": 0,
          "line": 33
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T20",
        "optional": false,
        "range": [
          1189,
          1192
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 38
          },
          "start": {
            "column": 5,
            "line": 38
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            1200,
            1207
          ],
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "TemplateLiteral",
                "expressions": [],
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "tail": true,
                    "value": {
                      "cooked": "abc",
                      "raw": "abc"
                    },
                    "range": [
                      1201,
                      1206
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 38
                      },
                      "start": {
                        "column": 17,
                        "line": 38
                      }
                    }
                  }
                ],
                "range": [
                  1201,
                  1206
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 38
                  },
                  "start": {
                    "column": 17,
                    "line": 38
                  }
                }
              },
              "range": [
                1201,
                1206
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 38
                },
                "start": {
                  "column": 17,
                  "line": 38
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 38
            },
            "start": {
              "column": 16,
              "line": 38
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Parts",
          "optional": false,
          "range": [
            1195,
            1200
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 38
            },
            "start": {
              "column": 11,
              "line": 38
            }
          }
        },
        "range": [
          1195,
          1207
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 38
          },
          "start": {
            "column": 11,
            "line": 38
          }
        }
      },
      "range": [
        1184,
        1208
      ],
      "loc": {
        "end": {
          "column": 24,
          "line": 38
        },
        "start": {
          "column": 0,
          "line": 38
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T21",
        "optional": false,
        "range": [
          1214,
          1217
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 39
          },
          "start": {
            "column": 5,
            "line": 39
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            1225,
            1240
          ],
          "params": [
            {
              "type": "TSTemplateLiteralType",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "tail": false,
                  "value": {
                    "cooked": "*",
                    "raw": "*"
                  },
                  "range": [
                    1226,
                    1230
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 39
                    },
                    "start": {
                      "column": 17,
                      "line": 39
                    }
                  }
                },
                {
                  "type": "TemplateElement",
                  "tail": true,
                  "value": {
                    "cooked": "*",
                    "raw": "*"
                  },
                  "range": [
                    1236,
                    1239
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 39
                    },
                    "start": {
                      "column": 27,
                      "line": 39
                    }
                  }
                }
              ],
              "types": [
                {
                  "type": "TSStringKeyword",
                  "range": [
                    1230,
                    1236
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 39
                    },
                    "start": {
                      "column": 21,
                      "line": 39
                    }
                  }
                }
              ],
              "range": [
                1226,
                1239
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 39
                },
                "start": {
                  "column": 17,
                  "line": 39
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 39
            },
            "start": {
              "column": 16,
              "line": 39
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Parts",
          "optional": false,
          "range": [
            1220,
            1225
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 39
            },
            "start": {
              "column": 11,
              "line": 39
            }
          }
        },
        "range": [
          1220,
          1240
        ],
        "loc": {
          "end": {
            "column": 31,
            "line": 39
          },
          "start": {
            "column": 11,
            "line": 39
          }
        }
      },
      "range": [
        1209,
        1241
      ],
      "loc": {
        "end": {
          "column": 32,
          "line": 39
        },
        "start": {
          "column": 0,
          "line": 39
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T22",
        "optional": false,
        "range": [
          1247,
          1250
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 40
          },
          "start": {
            "column": 5,
            "line": 40
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            1258,
            1273
          ],
          "params": [
            {
              "type": "TSTemplateLiteralType",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "tail": false,
                  "value": {
                    "cooked": "*",
                    "raw": "*"
                  },
                  "range": [
                    1259,
                    1263
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 40
                    },
                    "start": {
                      "column": 17,
                      "line": 40
                    }
                  }
                },
                {
                  "type": "TemplateElement",
                  "tail": true,
                  "value": {
                    "cooked": "*",
                    "raw": "*"
                  },
                  "range": [
                    1269,
                    1272
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 40
                    },
                    "start": {
                      "column": 27,
                      "line": 40
                    }
                  }
                }
              ],
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "range": [
                    1263,
                    1269
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 40
                    },
                    "start": {
                      "column": 21,
                      "line": 40
                    }
                  }
                }
              ],
              "range": [
                1259,
                1272
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 40
                },
                "start": {
                  "column": 17,
                  "line": 40
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 40
            },
            "start": {
              "column": 16,
              "line": 40
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Parts",
          "optional": false,
          "range": [
            1253,
            1258
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 40
            },
            "start": {
              "column": 11,
              "line": 40
            }
          }
        },
        "range": [
          1253,
          1273
        ],
        "loc": {
          "end": {
            "column": 31,
            "line": 40
          },
          "start": {
            "column": 11,
            "line": 40
          }
        }
      },
      "range": [
        1242,
        1274
      ],
      "loc": {
        "end": {
          "column": 32,
          "line": 40
        },
        "start": {
          "column": 0,
          "line": 40
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T23",
        "optional": false,
        "range": [
          1280,
          1283
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 41
          },
          "start": {
            "column": 5,
            "line": 41
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            1291,
            1326
          ],
          "params": [
            {
              "type": "TSTemplateLiteralType",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "tail": false,
                  "value": {
                    "cooked": "*",
                    "raw": "*"
                  },
                  "range": [
                    1292,
                    1296
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 41
                    },
                    "start": {
                      "column": 17,
                      "line": 41
                    }
                  }
                },
                {
                  "type": "TemplateElement",
                  "tail": false,
                  "value": {
                    "cooked": "*",
                    "raw": "*"
                  },
                  "range": [
                    1302,
                    1306
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 41
                    },
                    "start": {
                      "column": 27,
                      "line": 41
                    }
                  }
                },
                {
                  "type": "TemplateElement",
                  "tail": false,
                  "value": {
                    "cooked": "*",
                    "raw": "*"
                  },
                  "range": [
                    1312,
                    1316
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 41
                    },
                    "start": {
                      "column": 37,
                      "line": 41
                    }
                  }
                },
                {
                  "type": "TemplateElement",
                  "tail": true,
                  "value": {
                    "cooked": "*",
                    "raw": "*"
                  },
                  "range": [
                    1322,
                    1325
                  ],
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 41
                    },
                    "start": {
                      "column": 47,
                      "line": 41
                    }
                  }
                }
              ],
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "range": [
                    1296,
                    1302
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 41
                    },
                    "start": {
                      "column": 21,
                      "line": 41
                    }
                  }
                },
                {
                  "type": "TSStringKeyword",
                  "range": [
                    1306,
                    1312
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 41
                    },
                    "start": {
                      "column": 31,
                      "line": 41
                    }
                  }
                },
                {
                  "type": "TSBigIntKeyword",
                  "range": [
                    1316,
                    1322
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 41
                    },
                    "start": {
                      "column": 41,
                      "line": 41
                    }
                  }
                }
              ],
              "range": [
                1292,
                1325
              ],
              "loc": {
                "end": {
                  "column": 50,
                  "line": 41
                },
                "start": {
                  "column": 17,
                  "line": 41
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 51,
              "line": 41
            },
            "start": {
              "column": 16,
              "line": 41
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Parts",
          "optional": false,
          "range": [
            1286,
            1291
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 41
            },
            "start": {
              "column": 11,
              "line": 41
            }
          }
        },
        "range": [
          1286,
          1326
        ],
        "loc": {
          "end": {
            "column": 51,
            "line": 41
          },
          "start": {
            "column": 11,
            "line": 41
          }
        }
      },
      "range": [
        1275,
        1327
      ],
      "loc": {
        "end": {
          "column": 52,
          "line": 41
        },
        "start": {
          "column": 0,
          "line": 41
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
                        "column": 42,
                        "line": 44
                      },
                      "start": {
                        "column": 9,
                        "line": 44
                      }
                    },
                    "range": [
                      1354,
                      1387
                    ],
                    "typeAnnotation": {
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
                            1356,
                            1359
                          ],
                          "loc": {
                            "end": {
                              "column": 14,
                              "line": 44
                            },
                            "start": {
                              "column": 11,
                              "line": 44
                            }
                          }
                        },
                        {
                          "type": "TemplateElement",
                          "tail": false,
                          "value": {
                            "cooked": ".",
                            "raw": "."
                          },
                          "range": [
                            1365,
                            1369
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 44
                            },
                            "start": {
                              "column": 20,
                              "line": 44
                            }
                          }
                        },
                        {
                          "type": "TemplateElement",
                          "tail": false,
                          "value": {
                            "cooked": ".",
                            "raw": "."
                          },
                          "range": [
                            1375,
                            1379
                          ],
                          "loc": {
                            "end": {
                              "column": 34,
                              "line": 44
                            },
                            "start": {
                              "column": 30,
                              "line": 44
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
                            1385,
                            1387
                          ],
                          "loc": {
                            "end": {
                              "column": 42,
                              "line": 44
                            },
                            "start": {
                              "column": 40,
                              "line": 44
                            }
                          }
                        }
                      ],
                      "types": [
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            1359,
                            1365
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 44
                            },
                            "start": {
                              "column": 14,
                              "line": 44
                            }
                          }
                        },
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            1369,
                            1375
                          ],
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 44
                            },
                            "start": {
                              "column": 24,
                              "line": 44
                            }
                          }
                        },
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            1379,
                            1385
                          ],
                          "loc": {
                            "end": {
                              "column": 40,
                              "line": 44
                            },
                            "start": {
                              "column": 34,
                              "line": 44
                            }
                          }
                        }
                      ],
                      "range": [
                        1356,
                        1387
                      ],
                      "loc": {
                        "end": {
                          "column": 42,
                          "line": 44
                        },
                        "start": {
                          "column": 11,
                          "line": 44
                        }
                      }
                    }
                  },
                  "range": [
                    1353,
                    1387
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 44
                    },
                    "start": {
                      "column": 8,
                      "line": 44
                    }
                  }
                },
                "init": null,
                "range": [
                  1353,
                  1387
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 44
                  },
                  "start": {
                    "column": 8,
                    "line": 44
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              1349,
              1388
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 44
              },
              "start": {
                "column": 4,
                "line": 44
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  1393,
                  1394
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 45
                  },
                  "start": {
                    "column": 4,
                    "line": 45
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "'1.1.1'",
                "value": "1.1.1",
                "range": [
                  1397,
                  1404
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 45
                  },
                  "start": {
                    "column": 8,
                    "line": 45
                  }
                }
              },
              "range": [
                1393,
                1404
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 45
                },
                "start": {
                  "column": 4,
                  "line": 45
                }
              }
            },
            "range": [
              1393,
              1405
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 45
              },
              "start": {
                "column": 4,
                "line": 45
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  1410,
                  1411
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 46
                  },
                  "start": {
                    "column": 4,
                    "line": 46
                  }
                }
              },
              "right": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "Literal",
                  "raw": "'1.1.1'",
                  "value": "1.1.1",
                  "range": [
                    1414,
                    1421
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 46
                    },
                    "start": {
                      "column": 8,
                      "line": 46
                    }
                  }
                },
                "typeAnnotation": {
                  "type": "TSTemplateLiteralType",
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "tail": false,
                      "value": {
                        "cooked": "1.1.",
                        "raw": "1.1."
                      },
                      "range": [
                        1425,
                        1432
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 46
                        },
                        "start": {
                          "column": 19,
                          "line": 46
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
                        1438,
                        1440
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 46
                        },
                        "start": {
                          "column": 32,
                          "line": 46
                        }
                      }
                    }
                  ],
                  "types": [
                    {
                      "type": "TSNumberKeyword",
                      "range": [
                        1432,
                        1438
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 46
                        },
                        "start": {
                          "column": 26,
                          "line": 46
                        }
                      }
                    }
                  ],
                  "range": [
                    1425,
                    1440
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 46
                    },
                    "start": {
                      "column": 19,
                      "line": 46
                    }
                  }
                },
                "range": [
                  1414,
                  1440
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 46
                  },
                  "start": {
                    "column": 8,
                    "line": 46
                  }
                }
              },
              "range": [
                1410,
                1440
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 46
                },
                "start": {
                  "column": 4,
                  "line": 46
                }
              }
            },
            "range": [
              1410,
              1441
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 46
              },
              "start": {
                "column": 4,
                "line": 46
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  1446,
                  1447
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 47
                  },
                  "start": {
                    "column": 4,
                    "line": 47
                  }
                }
              },
              "right": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "Literal",
                  "raw": "'1.1.1'",
                  "value": "1.1.1",
                  "range": [
                    1450,
                    1457
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 47
                    },
                    "start": {
                      "column": 8,
                      "line": 47
                    }
                  }
                },
                "typeAnnotation": {
                  "type": "TSTemplateLiteralType",
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "tail": false,
                      "value": {
                        "cooked": "1.",
                        "raw": "1."
                      },
                      "range": [
                        1461,
                        1466
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 47
                        },
                        "start": {
                          "column": 19,
                          "line": 47
                        }
                      }
                    },
                    {
                      "type": "TemplateElement",
                      "tail": true,
                      "value": {
                        "cooked": ".1",
                        "raw": ".1"
                      },
                      "range": [
                        1472,
                        1476
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 47
                        },
                        "start": {
                          "column": 30,
                          "line": 47
                        }
                      }
                    }
                  ],
                  "types": [
                    {
                      "type": "TSNumberKeyword",
                      "range": [
                        1466,
                        1472
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 47
                        },
                        "start": {
                          "column": 24,
                          "line": 47
                        }
                      }
                    }
                  ],
                  "range": [
                    1461,
                    1476
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 47
                    },
                    "start": {
                      "column": 19,
                      "line": 47
                    }
                  }
                },
                "range": [
                  1450,
                  1476
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 47
                  },
                  "start": {
                    "column": 8,
                    "line": 47
                  }
                }
              },
              "range": [
                1446,
                1476
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 47
                },
                "start": {
                  "column": 4,
                  "line": 47
                }
              }
            },
            "range": [
              1446,
              1477
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 47
              },
              "start": {
                "column": 4,
                "line": 47
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  1482,
                  1483
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 48
                  },
                  "start": {
                    "column": 4,
                    "line": 48
                  }
                }
              },
              "right": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "Literal",
                  "raw": "'1.1.1'",
                  "value": "1.1.1",
                  "range": [
                    1486,
                    1493
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 48
                    },
                    "start": {
                      "column": 8,
                      "line": 48
                    }
                  }
                },
                "typeAnnotation": {
                  "type": "TSTemplateLiteralType",
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "tail": false,
                      "value": {
                        "cooked": "1.",
                        "raw": "1."
                      },
                      "range": [
                        1497,
                        1502
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 48
                        },
                        "start": {
                          "column": 19,
                          "line": 48
                        }
                      }
                    },
                    {
                      "type": "TemplateElement",
                      "tail": false,
                      "value": {
                        "cooked": ".",
                        "raw": "."
                      },
                      "range": [
                        1508,
                        1512
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 48
                        },
                        "start": {
                          "column": 30,
                          "line": 48
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
                        1518,
                        1520
                      ],
                      "loc": {
                        "end": {
                          "column": 42,
                          "line": 48
                        },
                        "start": {
                          "column": 40,
                          "line": 48
                        }
                      }
                    }
                  ],
                  "types": [
                    {
                      "type": "TSNumberKeyword",
                      "range": [
                        1502,
                        1508
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 48
                        },
                        "start": {
                          "column": 24,
                          "line": 48
                        }
                      }
                    },
                    {
                      "type": "TSNumberKeyword",
                      "range": [
                        1512,
                        1518
                      ],
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 48
                        },
                        "start": {
                          "column": 34,
                          "line": 48
                        }
                      }
                    }
                  ],
                  "range": [
                    1497,
                    1520
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 48
                    },
                    "start": {
                      "column": 19,
                      "line": 48
                    }
                  }
                },
                "range": [
                  1486,
                  1520
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 48
                  },
                  "start": {
                    "column": 8,
                    "line": 48
                  }
                }
              },
              "range": [
                1482,
                1520
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 48
                },
                "start": {
                  "column": 4,
                  "line": 48
                }
              }
            },
            "range": [
              1482,
              1521
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 48
              },
              "start": {
                "column": 4,
                "line": 48
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  1526,
                  1527
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 49
                  },
                  "start": {
                    "column": 4,
                    "line": 49
                  }
                }
              },
              "right": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "Literal",
                  "raw": "'1.1.1'",
                  "value": "1.1.1",
                  "range": [
                    1530,
                    1537
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 49
                    },
                    "start": {
                      "column": 8,
                      "line": 49
                    }
                  }
                },
                "typeAnnotation": {
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
                        1541,
                        1544
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 49
                        },
                        "start": {
                          "column": 19,
                          "line": 49
                        }
                      }
                    },
                    {
                      "type": "TemplateElement",
                      "tail": true,
                      "value": {
                        "cooked": ".1.1",
                        "raw": ".1.1"
                      },
                      "range": [
                        1550,
                        1556
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 49
                        },
                        "start": {
                          "column": 28,
                          "line": 49
                        }
                      }
                    }
                  ],
                  "types": [
                    {
                      "type": "TSNumberKeyword",
                      "range": [
                        1544,
                        1550
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 49
                        },
                        "start": {
                          "column": 22,
                          "line": 49
                        }
                      }
                    }
                  ],
                  "range": [
                    1541,
                    1556
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 49
                    },
                    "start": {
                      "column": 19,
                      "line": 49
                    }
                  }
                },
                "range": [
                  1530,
                  1556
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 49
                  },
                  "start": {
                    "column": 8,
                    "line": 49
                  }
                }
              },
              "range": [
                1526,
                1556
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 49
                },
                "start": {
                  "column": 4,
                  "line": 49
                }
              }
            },
            "range": [
              1526,
              1557
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 49
              },
              "start": {
                "column": 4,
                "line": 49
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  1562,
                  1563
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 50
                  },
                  "start": {
                    "column": 4,
                    "line": 50
                  }
                }
              },
              "right": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "Literal",
                  "raw": "'1.1.1'",
                  "value": "1.1.1",
                  "range": [
                    1566,
                    1573
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 50
                    },
                    "start": {
                      "column": 8,
                      "line": 50
                    }
                  }
                },
                "typeAnnotation": {
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
                        1577,
                        1580
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 50
                        },
                        "start": {
                          "column": 19,
                          "line": 50
                        }
                      }
                    },
                    {
                      "type": "TemplateElement",
                      "tail": false,
                      "value": {
                        "cooked": ".1.",
                        "raw": ".1."
                      },
                      "range": [
                        1586,
                        1592
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 50
                        },
                        "start": {
                          "column": 28,
                          "line": 50
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
                        1598,
                        1600
                      ],
                      "loc": {
                        "end": {
                          "column": 42,
                          "line": 50
                        },
                        "start": {
                          "column": 40,
                          "line": 50
                        }
                      }
                    }
                  ],
                  "types": [
                    {
                      "type": "TSNumberKeyword",
                      "range": [
                        1580,
                        1586
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 50
                        },
                        "start": {
                          "column": 22,
                          "line": 50
                        }
                      }
                    },
                    {
                      "type": "TSNumberKeyword",
                      "range": [
                        1592,
                        1598
                      ],
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 50
                        },
                        "start": {
                          "column": 34,
                          "line": 50
                        }
                      }
                    }
                  ],
                  "range": [
                    1577,
                    1600
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 50
                    },
                    "start": {
                      "column": 19,
                      "line": 50
                    }
                  }
                },
                "range": [
                  1566,
                  1600
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 50
                  },
                  "start": {
                    "column": 8,
                    "line": 50
                  }
                }
              },
              "range": [
                1562,
                1600
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 50
                },
                "start": {
                  "column": 4,
                  "line": 50
                }
              }
            },
            "range": [
              1562,
              1601
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 50
              },
              "start": {
                "column": 4,
                "line": 50
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  1606,
                  1607
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 51
                  },
                  "start": {
                    "column": 4,
                    "line": 51
                  }
                }
              },
              "right": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "Literal",
                  "raw": "'1.1.1'",
                  "value": "1.1.1",
                  "range": [
                    1610,
                    1617
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 51
                    },
                    "start": {
                      "column": 8,
                      "line": 51
                    }
                  }
                },
                "typeAnnotation": {
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
                        1621,
                        1624
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 51
                        },
                        "start": {
                          "column": 19,
                          "line": 51
                        }
                      }
                    },
                    {
                      "type": "TemplateElement",
                      "tail": false,
                      "value": {
                        "cooked": ".",
                        "raw": "."
                      },
                      "range": [
                        1630,
                        1634
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 51
                        },
                        "start": {
                          "column": 28,
                          "line": 51
                        }
                      }
                    },
                    {
                      "type": "TemplateElement",
                      "tail": true,
                      "value": {
                        "cooked": ".1",
                        "raw": ".1"
                      },
                      "range": [
                        1640,
                        1644
                      ],
                      "loc": {
                        "end": {
                          "column": 42,
                          "line": 51
                        },
                        "start": {
                          "column": 38,
                          "line": 51
                        }
                      }
                    }
                  ],
                  "types": [
                    {
                      "type": "TSNumberKeyword",
                      "range": [
                        1624,
                        1630
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 51
                        },
                        "start": {
                          "column": 22,
                          "line": 51
                        }
                      }
                    },
                    {
                      "type": "TSNumberKeyword",
                      "range": [
                        1634,
                        1640
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 51
                        },
                        "start": {
                          "column": 32,
                          "line": 51
                        }
                      }
                    }
                  ],
                  "range": [
                    1621,
                    1644
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 51
                    },
                    "start": {
                      "column": 19,
                      "line": 51
                    }
                  }
                },
                "range": [
                  1610,
                  1644
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 51
                  },
                  "start": {
                    "column": 8,
                    "line": 51
                  }
                }
              },
              "range": [
                1606,
                1644
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 51
                },
                "start": {
                  "column": 4,
                  "line": 51
                }
              }
            },
            "range": [
              1606,
              1645
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 51
              },
              "start": {
                "column": 4,
                "line": 51
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  1650,
                  1651
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 52
                  },
                  "start": {
                    "column": 4,
                    "line": 52
                  }
                }
              },
              "right": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "Literal",
                  "raw": "'1.1.1'",
                  "value": "1.1.1",
                  "range": [
                    1654,
                    1661
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 52
                    },
                    "start": {
                      "column": 8,
                      "line": 52
                    }
                  }
                },
                "typeAnnotation": {
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
                        1665,
                        1668
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 52
                        },
                        "start": {
                          "column": 19,
                          "line": 52
                        }
                      }
                    },
                    {
                      "type": "TemplateElement",
                      "tail": false,
                      "value": {
                        "cooked": ".",
                        "raw": "."
                      },
                      "range": [
                        1674,
                        1678
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 52
                        },
                        "start": {
                          "column": 28,
                          "line": 52
                        }
                      }
                    },
                    {
                      "type": "TemplateElement",
                      "tail": false,
                      "value": {
                        "cooked": ".",
                        "raw": "."
                      },
                      "range": [
                        1684,
                        1688
                      ],
                      "loc": {
                        "end": {
                          "column": 42,
                          "line": 52
                        },
                        "start": {
                          "column": 38,
                          "line": 52
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
                        1694,
                        1696
                      ],
                      "loc": {
                        "end": {
                          "column": 50,
                          "line": 52
                        },
                        "start": {
                          "column": 48,
                          "line": 52
                        }
                      }
                    }
                  ],
                  "types": [
                    {
                      "type": "TSNumberKeyword",
                      "range": [
                        1668,
                        1674
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 52
                        },
                        "start": {
                          "column": 22,
                          "line": 52
                        }
                      }
                    },
                    {
                      "type": "TSNumberKeyword",
                      "range": [
                        1678,
                        1684
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 52
                        },
                        "start": {
                          "column": 32,
                          "line": 52
                        }
                      }
                    },
                    {
                      "type": "TSNumberKeyword",
                      "range": [
                        1688,
                        1694
                      ],
                      "loc": {
                        "end": {
                          "column": 48,
                          "line": 52
                        },
                        "start": {
                          "column": 42,
                          "line": 52
                        }
                      }
                    }
                  ],
                  "range": [
                    1665,
                    1696
                  ],
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 52
                    },
                    "start": {
                      "column": 19,
                      "line": 52
                    }
                  }
                },
                "range": [
                  1654,
                  1696
                ],
                "loc": {
                  "end": {
                    "column": 50,
                    "line": 52
                  },
                  "start": {
                    "column": 8,
                    "line": 52
                  }
                }
              },
              "range": [
                1650,
                1696
              ],
              "loc": {
                "end": {
                  "column": 50,
                  "line": 52
                },
                "start": {
                  "column": 4,
                  "line": 52
                }
              }
            },
            "range": [
              1650,
              1697
            ],
            "loc": {
              "end": {
                "column": 51,
                "line": 52
              },
              "start": {
                "column": 4,
                "line": 52
              }
            }
          }
        ],
        "range": [
          1343,
          1699
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 53
          },
          "start": {
            "column": 14,
            "line": 43
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "range": [
          1338,
          1340
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 43
          },
          "start": {
            "column": 9,
            "line": 43
          }
        }
      },
      "params": [],
      "range": [
        1329,
        1699
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 53
        },
        "start": {
          "column": 0,
          "line": 43
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
                        "column": 24,
                        "line": 56
                      },
                      "start": {
                        "column": 9,
                        "line": 56
                      }
                    },
                    "range": [
                      1782,
                      1797
                    ],
                    "typeAnnotation": {
                      "type": "TSTemplateLiteralType",
                      "quasis": [
                        {
                          "type": "TemplateElement",
                          "tail": false,
                          "value": {
                            "cooked": "*",
                            "raw": "*"
                          },
                          "range": [
                            1784,
                            1788
                          ],
                          "loc": {
                            "end": {
                              "column": 15,
                              "line": 56
                            },
                            "start": {
                              "column": 11,
                              "line": 56
                            }
                          }
                        },
                        {
                          "type": "TemplateElement",
                          "tail": true,
                          "value": {
                            "cooked": "*",
                            "raw": "*"
                          },
                          "range": [
                            1794,
                            1797
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 56
                            },
                            "start": {
                              "column": 21,
                              "line": 56
                            }
                          }
                        }
                      ],
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            1788,
                            1794
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 56
                            },
                            "start": {
                              "column": 15,
                              "line": 56
                            }
                          }
                        }
                      ],
                      "range": [
                        1784,
                        1797
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 56
                        },
                        "start": {
                          "column": 11,
                          "line": 56
                        }
                      }
                    }
                  },
                  "range": [
                    1781,
                    1797
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 56
                    },
                    "start": {
                      "column": 8,
                      "line": 56
                    }
                  }
                },
                "init": null,
                "range": [
                  1781,
                  1797
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 56
                  },
                  "start": {
                    "column": 8,
                    "line": 56
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              1777,
              1798
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 56
              },
              "start": {
                "column": 4,
                "line": 56
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  1803,
                  1804
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 57
                  },
                  "start": {
                    "column": 4,
                    "line": 57
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "'hello'",
                "value": "hello",
                "range": [
                  1807,
                  1814
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 57
                  },
                  "start": {
                    "column": 8,
                    "line": 57
                  }
                }
              },
              "range": [
                1803,
                1814
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 57
                },
                "start": {
                  "column": 4,
                  "line": 57
                }
              }
            },
            "range": [
              1803,
              1815
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 57
              },
              "start": {
                "column": 4,
                "line": 57
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  1830,
                  1831
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 58
                  },
                  "start": {
                    "column": 4,
                    "line": 58
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "'*hello*'",
                "value": "*hello*",
                "range": [
                  1834,
                  1843
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 58
                  },
                  "start": {
                    "column": 8,
                    "line": 58
                  }
                }
              },
              "range": [
                1830,
                1843
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 58
                },
                "start": {
                  "column": 4,
                  "line": 58
                }
              }
            },
            "range": [
              1830,
              1844
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 58
              },
              "start": {
                "column": 4,
                "line": 58
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  1849,
                  1850
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 59
                  },
                  "start": {
                    "column": 4,
                    "line": 59
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "'**hello**'",
                "value": "**hello**",
                "range": [
                  1853,
                  1864
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 59
                  },
                  "start": {
                    "column": 8,
                    "line": 59
                  }
                }
              },
              "range": [
                1849,
                1864
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 59
                },
                "start": {
                  "column": 4,
                  "line": 59
                }
              }
            },
            "range": [
              1849,
              1865
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 59
              },
              "start": {
                "column": 4,
                "line": 59
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  1870,
                  1871
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 60
                  },
                  "start": {
                    "column": 4,
                    "line": 60
                  }
                }
              },
              "right": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "TemplateLiteral",
                  "expressions": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "range": [
                        1878,
                        1879
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 60
                        },
                        "start": {
                          "column": 12,
                          "line": 60
                        }
                      }
                    }
                  ],
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "tail": false,
                      "value": {
                        "cooked": "*",
                        "raw": "*"
                      },
                      "range": [
                        1874,
                        1878
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 60
                        },
                        "start": {
                          "column": 8,
                          "line": 60
                        }
                      }
                    },
                    {
                      "type": "TemplateElement",
                      "tail": true,
                      "value": {
                        "cooked": "*",
                        "raw": "*"
                      },
                      "range": [
                        1879,
                        1882
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 60
                        },
                        "start": {
                          "column": 13,
                          "line": 60
                        }
                      }
                    }
                  ],
                  "range": [
                    1874,
                    1882
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 60
                    },
                    "start": {
                      "column": 8,
                      "line": 60
                    }
                  }
                },
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "const",
                    "optional": false,
                    "range": [
                      1886,
                      1891
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 60
                      },
                      "start": {
                        "column": 20,
                        "line": 60
                      }
                    }
                  },
                  "range": [
                    1886,
                    1891
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 60
                    },
                    "start": {
                      "column": 20,
                      "line": 60
                    }
                  }
                },
                "range": [
                  1874,
                  1891
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 60
                  },
                  "start": {
                    "column": 8,
                    "line": 60
                  }
                }
              },
              "range": [
                1870,
                1891
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 60
                },
                "start": {
                  "column": 4,
                  "line": 60
                }
              }
            },
            "range": [
              1870,
              1892
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 60
              },
              "start": {
                "column": 4,
                "line": 60
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  1897,
                  1898
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 61
                  },
                  "start": {
                    "column": 4,
                    "line": 61
                  }
                }
              },
              "right": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "TemplateLiteral",
                  "expressions": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "range": [
                        1905,
                        1906
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 61
                        },
                        "start": {
                          "column": 12,
                          "line": 61
                        }
                      }
                    }
                  ],
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "tail": false,
                      "value": {
                        "cooked": "*",
                        "raw": "*"
                      },
                      "range": [
                        1901,
                        1905
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 61
                        },
                        "start": {
                          "column": 8,
                          "line": 61
                        }
                      }
                    },
                    {
                      "type": "TemplateElement",
                      "tail": true,
                      "value": {
                        "cooked": "*",
                        "raw": "*"
                      },
                      "range": [
                        1906,
                        1909
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 61
                        },
                        "start": {
                          "column": 13,
                          "line": 61
                        }
                      }
                    }
                  ],
                  "range": [
                    1901,
                    1909
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 61
                    },
                    "start": {
                      "column": 8,
                      "line": 61
                    }
                  }
                },
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "const",
                    "optional": false,
                    "range": [
                      1913,
                      1918
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 61
                      },
                      "start": {
                        "column": 20,
                        "line": 61
                      }
                    }
                  },
                  "range": [
                    1913,
                    1918
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 61
                    },
                    "start": {
                      "column": 20,
                      "line": 61
                    }
                  }
                },
                "range": [
                  1901,
                  1918
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 61
                  },
                  "start": {
                    "column": 8,
                    "line": 61
                  }
                }
              },
              "range": [
                1897,
                1918
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 61
                },
                "start": {
                  "column": 4,
                  "line": 61
                }
              }
            },
            "range": [
              1897,
              1919
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 61
              },
              "start": {
                "column": 4,
                "line": 61
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  1924,
                  1925
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 62
                  },
                  "start": {
                    "column": 4,
                    "line": 62
                  }
                }
              },
              "right": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "TemplateLiteral",
                  "expressions": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "range": [
                        1932,
                        1933
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 62
                        },
                        "start": {
                          "column": 12,
                          "line": 62
                        }
                      }
                    }
                  ],
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "tail": false,
                      "value": {
                        "cooked": "*",
                        "raw": "*"
                      },
                      "range": [
                        1928,
                        1932
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 62
                        },
                        "start": {
                          "column": 8,
                          "line": 62
                        }
                      }
                    },
                    {
                      "type": "TemplateElement",
                      "tail": true,
                      "value": {
                        "cooked": "*",
                        "raw": "*"
                      },
                      "range": [
                        1933,
                        1936
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 62
                        },
                        "start": {
                          "column": 13,
                          "line": 62
                        }
                      }
                    }
                  ],
                  "range": [
                    1928,
                    1936
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 62
                    },
                    "start": {
                      "column": 8,
                      "line": 62
                    }
                  }
                },
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "const",
                    "optional": false,
                    "range": [
                      1940,
                      1945
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 62
                      },
                      "start": {
                        "column": 20,
                        "line": 62
                      }
                    }
                  },
                  "range": [
                    1940,
                    1945
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 62
                    },
                    "start": {
                      "column": 20,
                      "line": 62
                    }
                  }
                },
                "range": [
                  1928,
                  1945
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 62
                  },
                  "start": {
                    "column": 8,
                    "line": 62
                  }
                }
              },
              "range": [
                1924,
                1945
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 62
                },
                "start": {
                  "column": 4,
                  "line": 62
                }
              }
            },
            "range": [
              1924,
              1946
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 62
              },
              "start": {
                "column": 4,
                "line": 62
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  1951,
                  1952
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 63
                  },
                  "start": {
                    "column": 4,
                    "line": 63
                  }
                }
              },
              "right": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "TemplateLiteral",
                  "expressions": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "t",
                      "optional": false,
                      "range": [
                        1959,
                        1960
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 63
                        },
                        "start": {
                          "column": 12,
                          "line": 63
                        }
                      }
                    }
                  ],
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "tail": false,
                      "value": {
                        "cooked": "*",
                        "raw": "*"
                      },
                      "range": [
                        1955,
                        1959
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 63
                        },
                        "start": {
                          "column": 8,
                          "line": 63
                        }
                      }
                    },
                    {
                      "type": "TemplateElement",
                      "tail": true,
                      "value": {
                        "cooked": "*",
                        "raw": "*"
                      },
                      "range": [
                        1960,
                        1963
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 63
                        },
                        "start": {
                          "column": 13,
                          "line": 63
                        }
                      }
                    }
                  ],
                  "range": [
                    1955,
                    1963
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 63
                    },
                    "start": {
                      "column": 8,
                      "line": 63
                    }
                  }
                },
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "const",
                    "optional": false,
                    "range": [
                      1967,
                      1972
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 63
                      },
                      "start": {
                        "column": 20,
                        "line": 63
                      }
                    }
                  },
                  "range": [
                    1967,
                    1972
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 63
                    },
                    "start": {
                      "column": 20,
                      "line": 63
                    }
                  }
                },
                "range": [
                  1955,
                  1972
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 63
                  },
                  "start": {
                    "column": 8,
                    "line": 63
                  }
                }
              },
              "range": [
                1951,
                1972
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 63
                },
                "start": {
                  "column": 4,
                  "line": 63
                }
              }
            },
            "range": [
              1951,
              1973
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 63
              },
              "start": {
                "column": 4,
                "line": 63
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  1978,
                  1979
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 64
                  },
                  "start": {
                    "column": 4,
                    "line": 64
                  }
                }
              },
              "right": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "TemplateLiteral",
                  "expressions": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "range": [
                        1987,
                        1988
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 64
                        },
                        "start": {
                          "column": 13,
                          "line": 64
                        }
                      }
                    }
                  ],
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "tail": false,
                      "value": {
                        "cooked": "**",
                        "raw": "**"
                      },
                      "range": [
                        1982,
                        1987
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 64
                        },
                        "start": {
                          "column": 8,
                          "line": 64
                        }
                      }
                    },
                    {
                      "type": "TemplateElement",
                      "tail": true,
                      "value": {
                        "cooked": "**",
                        "raw": "**"
                      },
                      "range": [
                        1988,
                        1992
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 64
                        },
                        "start": {
                          "column": 14,
                          "line": 64
                        }
                      }
                    }
                  ],
                  "range": [
                    1982,
                    1992
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 64
                    },
                    "start": {
                      "column": 8,
                      "line": 64
                    }
                  }
                },
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "const",
                    "optional": false,
                    "range": [
                      1996,
                      2001
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 64
                      },
                      "start": {
                        "column": 22,
                        "line": 64
                      }
                    }
                  },
                  "range": [
                    1996,
                    2001
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 64
                    },
                    "start": {
                      "column": 22,
                      "line": 64
                    }
                  }
                },
                "range": [
                  1982,
                  2001
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 64
                  },
                  "start": {
                    "column": 8,
                    "line": 64
                  }
                }
              },
              "range": [
                1978,
                2001
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 64
                },
                "start": {
                  "column": 4,
                  "line": 64
                }
              }
            },
            "range": [
              1978,
              2002
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 64
              },
              "start": {
                "column": 4,
                "line": 64
              }
            }
          }
        ],
        "range": [
          1771,
          2004
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 65
          },
          "start": {
            "column": 70,
            "line": 55
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "range": [
          1710,
          1712
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 55
          },
          "start": {
            "column": 9,
            "line": 55
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 39,
                "line": 55
              },
              "start": {
                "column": 31,
                "line": 55
              }
            },
            "range": [
              1732,
              1740
            ],
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "range": [
                1734,
                1740
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 55
                },
                "start": {
                  "column": 33,
                  "line": 55
                }
              }
            }
          },
          "range": [
            1731,
            1740
          ],
          "loc": {
            "end": {
              "column": 39,
              "line": 55
            },
            "start": {
              "column": 30,
              "line": 55
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 50,
                "line": 55
              },
              "start": {
                "column": 42,
                "line": 55
              }
            },
            "range": [
              1743,
              1751
            ],
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "range": [
                1745,
                1751
              ],
              "loc": {
                "end": {
                  "column": 50,
                  "line": 55
                },
                "start": {
                  "column": 44,
                  "line": 55
                }
              }
            }
          },
          "range": [
            1742,
            1751
          ],
          "loc": {
            "end": {
              "column": 50,
              "line": 55
            },
            "start": {
              "column": 41,
              "line": 55
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 62,
                "line": 55
              },
              "start": {
                "column": 53,
                "line": 55
              }
            },
            "range": [
              1754,
              1763
            ],
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "range": [
                1756,
                1763
              ],
              "loc": {
                "end": {
                  "column": 62,
                  "line": 55
                },
                "start": {
                  "column": 55,
                  "line": 55
                }
              }
            }
          },
          "range": [
            1753,
            1763
          ],
          "loc": {
            "end": {
              "column": 62,
              "line": 55
            },
            "start": {
              "column": 52,
              "line": 55
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 68,
                "line": 55
              },
              "start": {
                "column": 65,
                "line": 55
              }
            },
            "range": [
              1766,
              1769
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  1768,
                  1769
                ],
                "loc": {
                  "end": {
                    "column": 68,
                    "line": 55
                  },
                  "start": {
                    "column": 67,
                    "line": 55
                  }
                }
              },
              "range": [
                1768,
                1769
              ],
              "loc": {
                "end": {
                  "column": 68,
                  "line": 55
                },
                "start": {
                  "column": 67,
                  "line": 55
                }
              }
            }
          },
          "range": [
            1765,
            1769
          ],
          "loc": {
            "end": {
              "column": 68,
              "line": 55
            },
            "start": {
              "column": 64,
              "line": 55
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 29,
            "line": 55
          },
          "start": {
            "column": 11,
            "line": 55
          }
        },
        "range": [
          1712,
          1730
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "range": [
                1723,
                1729
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 55
                },
                "start": {
                  "column": 22,
                  "line": 55
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                1713,
                1714
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 55
                },
                "start": {
                  "column": 12,
                  "line": 55
                }
              }
            },
            "out": false,
            "range": [
              1713,
              1729
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 55
              },
              "start": {
                "column": 12,
                "line": 55
              }
            }
          }
        ]
      },
      "range": [
        1701,
        2004
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 65
        },
        "start": {
          "column": 0,
          "line": 55
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
                        "column": 24,
                        "line": 68
                      },
                      "start": {
                        "column": 9,
                        "line": 68
                      }
                    },
                    "range": [
                      2087,
                      2102
                    ],
                    "typeAnnotation": {
                      "type": "TSTemplateLiteralType",
                      "quasis": [
                        {
                          "type": "TemplateElement",
                          "tail": false,
                          "value": {
                            "cooked": "*",
                            "raw": "*"
                          },
                          "range": [
                            2089,
                            2093
                          ],
                          "loc": {
                            "end": {
                              "column": 15,
                              "line": 68
                            },
                            "start": {
                              "column": 11,
                              "line": 68
                            }
                          }
                        },
                        {
                          "type": "TemplateElement",
                          "tail": true,
                          "value": {
                            "cooked": "*",
                            "raw": "*"
                          },
                          "range": [
                            2099,
                            2102
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 68
                            },
                            "start": {
                              "column": 21,
                              "line": 68
                            }
                          }
                        }
                      ],
                      "types": [
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            2093,
                            2099
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 68
                            },
                            "start": {
                              "column": 15,
                              "line": 68
                            }
                          }
                        }
                      ],
                      "range": [
                        2089,
                        2102
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 68
                        },
                        "start": {
                          "column": 11,
                          "line": 68
                        }
                      }
                    }
                  },
                  "range": [
                    2086,
                    2102
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 68
                    },
                    "start": {
                      "column": 8,
                      "line": 68
                    }
                  }
                },
                "init": null,
                "range": [
                  2086,
                  2102
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 68
                  },
                  "start": {
                    "column": 8,
                    "line": 68
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              2082,
              2103
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 68
              },
              "start": {
                "column": 4,
                "line": 68
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  2108,
                  2109
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 69
                  },
                  "start": {
                    "column": 4,
                    "line": 69
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "'123'",
                "value": "123",
                "range": [
                  2112,
                  2117
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 69
                  },
                  "start": {
                    "column": 8,
                    "line": 69
                  }
                }
              },
              "range": [
                2108,
                2117
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 69
                },
                "start": {
                  "column": 4,
                  "line": 69
                }
              }
            },
            "range": [
              2108,
              2118
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 69
              },
              "start": {
                "column": 4,
                "line": 69
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  2133,
                  2134
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 70
                  },
                  "start": {
                    "column": 4,
                    "line": 70
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "'*123*'",
                "value": "*123*",
                "range": [
                  2137,
                  2144
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 70
                  },
                  "start": {
                    "column": 8,
                    "line": 70
                  }
                }
              },
              "range": [
                2133,
                2144
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 70
                },
                "start": {
                  "column": 4,
                  "line": 70
                }
              }
            },
            "range": [
              2133,
              2145
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 70
              },
              "start": {
                "column": 4,
                "line": 70
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  2150,
                  2151
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 71
                  },
                  "start": {
                    "column": 4,
                    "line": 71
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "'**123**'",
                "value": "**123**",
                "range": [
                  2154,
                  2163
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 71
                  },
                  "start": {
                    "column": 8,
                    "line": 71
                  }
                }
              },
              "range": [
                2150,
                2163
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 71
                },
                "start": {
                  "column": 4,
                  "line": 71
                }
              }
            },
            "range": [
              2150,
              2164
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 71
              },
              "start": {
                "column": 4,
                "line": 71
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  2179,
                  2180
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 72
                  },
                  "start": {
                    "column": 4,
                    "line": 72
                  }
                }
              },
              "right": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "TemplateLiteral",
                  "expressions": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "range": [
                        2187,
                        2188
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 72
                        },
                        "start": {
                          "column": 12,
                          "line": 72
                        }
                      }
                    }
                  ],
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "tail": false,
                      "value": {
                        "cooked": "*",
                        "raw": "*"
                      },
                      "range": [
                        2183,
                        2187
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 72
                        },
                        "start": {
                          "column": 8,
                          "line": 72
                        }
                      }
                    },
                    {
                      "type": "TemplateElement",
                      "tail": true,
                      "value": {
                        "cooked": "*",
                        "raw": "*"
                      },
                      "range": [
                        2188,
                        2191
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 72
                        },
                        "start": {
                          "column": 13,
                          "line": 72
                        }
                      }
                    }
                  ],
                  "range": [
                    2183,
                    2191
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 72
                    },
                    "start": {
                      "column": 8,
                      "line": 72
                    }
                  }
                },
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "const",
                    "optional": false,
                    "range": [
                      2195,
                      2200
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 72
                      },
                      "start": {
                        "column": 20,
                        "line": 72
                      }
                    }
                  },
                  "range": [
                    2195,
                    2200
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 72
                    },
                    "start": {
                      "column": 20,
                      "line": 72
                    }
                  }
                },
                "range": [
                  2183,
                  2200
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 72
                  },
                  "start": {
                    "column": 8,
                    "line": 72
                  }
                }
              },
              "range": [
                2179,
                2200
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 72
                },
                "start": {
                  "column": 4,
                  "line": 72
                }
              }
            },
            "range": [
              2179,
              2201
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 72
              },
              "start": {
                "column": 4,
                "line": 72
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  2216,
                  2217
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 73
                  },
                  "start": {
                    "column": 4,
                    "line": 73
                  }
                }
              },
              "right": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "TemplateLiteral",
                  "expressions": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "range": [
                        2224,
                        2225
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 73
                        },
                        "start": {
                          "column": 12,
                          "line": 73
                        }
                      }
                    }
                  ],
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "tail": false,
                      "value": {
                        "cooked": "*",
                        "raw": "*"
                      },
                      "range": [
                        2220,
                        2224
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 73
                        },
                        "start": {
                          "column": 8,
                          "line": 73
                        }
                      }
                    },
                    {
                      "type": "TemplateElement",
                      "tail": true,
                      "value": {
                        "cooked": "*",
                        "raw": "*"
                      },
                      "range": [
                        2225,
                        2228
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 73
                        },
                        "start": {
                          "column": 13,
                          "line": 73
                        }
                      }
                    }
                  ],
                  "range": [
                    2220,
                    2228
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 73
                    },
                    "start": {
                      "column": 8,
                      "line": 73
                    }
                  }
                },
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "const",
                    "optional": false,
                    "range": [
                      2232,
                      2237
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 73
                      },
                      "start": {
                        "column": 20,
                        "line": 73
                      }
                    }
                  },
                  "range": [
                    2232,
                    2237
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 73
                    },
                    "start": {
                      "column": 20,
                      "line": 73
                    }
                  }
                },
                "range": [
                  2220,
                  2237
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 73
                  },
                  "start": {
                    "column": 8,
                    "line": 73
                  }
                }
              },
              "range": [
                2216,
                2237
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 73
                },
                "start": {
                  "column": 4,
                  "line": 73
                }
              }
            },
            "range": [
              2216,
              2238
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 73
              },
              "start": {
                "column": 4,
                "line": 73
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  2243,
                  2244
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 74
                  },
                  "start": {
                    "column": 4,
                    "line": 74
                  }
                }
              },
              "right": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "TemplateLiteral",
                  "expressions": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "range": [
                        2251,
                        2252
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 74
                        },
                        "start": {
                          "column": 12,
                          "line": 74
                        }
                      }
                    }
                  ],
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "tail": false,
                      "value": {
                        "cooked": "*",
                        "raw": "*"
                      },
                      "range": [
                        2247,
                        2251
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 74
                        },
                        "start": {
                          "column": 8,
                          "line": 74
                        }
                      }
                    },
                    {
                      "type": "TemplateElement",
                      "tail": true,
                      "value": {
                        "cooked": "*",
                        "raw": "*"
                      },
                      "range": [
                        2252,
                        2255
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 74
                        },
                        "start": {
                          "column": 13,
                          "line": 74
                        }
                      }
                    }
                  ],
                  "range": [
                    2247,
                    2255
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 74
                    },
                    "start": {
                      "column": 8,
                      "line": 74
                    }
                  }
                },
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "const",
                    "optional": false,
                    "range": [
                      2259,
                      2264
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 74
                      },
                      "start": {
                        "column": 20,
                        "line": 74
                      }
                    }
                  },
                  "range": [
                    2259,
                    2264
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 74
                    },
                    "start": {
                      "column": 20,
                      "line": 74
                    }
                  }
                },
                "range": [
                  2247,
                  2264
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 74
                  },
                  "start": {
                    "column": 8,
                    "line": 74
                  }
                }
              },
              "range": [
                2243,
                2264
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 74
                },
                "start": {
                  "column": 4,
                  "line": 74
                }
              }
            },
            "range": [
              2243,
              2265
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 74
              },
              "start": {
                "column": 4,
                "line": 74
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  2280,
                  2281
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 75
                  },
                  "start": {
                    "column": 4,
                    "line": 75
                  }
                }
              },
              "right": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "TemplateLiteral",
                  "expressions": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "t",
                      "optional": false,
                      "range": [
                        2288,
                        2289
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 75
                        },
                        "start": {
                          "column": 12,
                          "line": 75
                        }
                      }
                    }
                  ],
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "tail": false,
                      "value": {
                        "cooked": "*",
                        "raw": "*"
                      },
                      "range": [
                        2284,
                        2288
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 75
                        },
                        "start": {
                          "column": 8,
                          "line": 75
                        }
                      }
                    },
                    {
                      "type": "TemplateElement",
                      "tail": true,
                      "value": {
                        "cooked": "*",
                        "raw": "*"
                      },
                      "range": [
                        2289,
                        2292
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 75
                        },
                        "start": {
                          "column": 13,
                          "line": 75
                        }
                      }
                    }
                  ],
                  "range": [
                    2284,
                    2292
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 75
                    },
                    "start": {
                      "column": 8,
                      "line": 75
                    }
                  }
                },
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "const",
                    "optional": false,
                    "range": [
                      2296,
                      2301
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 75
                      },
                      "start": {
                        "column": 20,
                        "line": 75
                      }
                    }
                  },
                  "range": [
                    2296,
                    2301
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 75
                    },
                    "start": {
                      "column": 20,
                      "line": 75
                    }
                  }
                },
                "range": [
                  2284,
                  2301
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 75
                  },
                  "start": {
                    "column": 8,
                    "line": 75
                  }
                }
              },
              "range": [
                2280,
                2301
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 75
                },
                "start": {
                  "column": 4,
                  "line": 75
                }
              }
            },
            "range": [
              2280,
              2302
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 75
              },
              "start": {
                "column": 4,
                "line": 75
              }
            }
          }
        ],
        "range": [
          2076,
          2304
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 76
          },
          "start": {
            "column": 70,
            "line": 67
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "range": [
          2015,
          2017
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 67
          },
          "start": {
            "column": 9,
            "line": 67
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 39,
                "line": 67
              },
              "start": {
                "column": 31,
                "line": 67
              }
            },
            "range": [
              2037,
              2045
            ],
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "range": [
                2039,
                2045
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 67
                },
                "start": {
                  "column": 33,
                  "line": 67
                }
              }
            }
          },
          "range": [
            2036,
            2045
          ],
          "loc": {
            "end": {
              "column": 39,
              "line": 67
            },
            "start": {
              "column": 30,
              "line": 67
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 50,
                "line": 67
              },
              "start": {
                "column": 42,
                "line": 67
              }
            },
            "range": [
              2048,
              2056
            ],
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "range": [
                2050,
                2056
              ],
              "loc": {
                "end": {
                  "column": 50,
                  "line": 67
                },
                "start": {
                  "column": 44,
                  "line": 67
                }
              }
            }
          },
          "range": [
            2047,
            2056
          ],
          "loc": {
            "end": {
              "column": 50,
              "line": 67
            },
            "start": {
              "column": 41,
              "line": 67
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 62,
                "line": 67
              },
              "start": {
                "column": 53,
                "line": 67
              }
            },
            "range": [
              2059,
              2068
            ],
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "range": [
                2061,
                2068
              ],
              "loc": {
                "end": {
                  "column": 62,
                  "line": 67
                },
                "start": {
                  "column": 55,
                  "line": 67
                }
              }
            }
          },
          "range": [
            2058,
            2068
          ],
          "loc": {
            "end": {
              "column": 62,
              "line": 67
            },
            "start": {
              "column": 52,
              "line": 67
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 68,
                "line": 67
              },
              "start": {
                "column": 65,
                "line": 67
              }
            },
            "range": [
              2071,
              2074
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  2073,
                  2074
                ],
                "loc": {
                  "end": {
                    "column": 68,
                    "line": 67
                  },
                  "start": {
                    "column": 67,
                    "line": 67
                  }
                }
              },
              "range": [
                2073,
                2074
              ],
              "loc": {
                "end": {
                  "column": 68,
                  "line": 67
                },
                "start": {
                  "column": 67,
                  "line": 67
                }
              }
            }
          },
          "range": [
            2070,
            2074
          ],
          "loc": {
            "end": {
              "column": 68,
              "line": 67
            },
            "start": {
              "column": 64,
              "line": 67
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 29,
            "line": 67
          },
          "start": {
            "column": 11,
            "line": 67
          }
        },
        "range": [
          2017,
          2035
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSNumberKeyword",
              "range": [
                2028,
                2034
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 67
                },
                "start": {
                  "column": 22,
                  "line": 67
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                2018,
                2019
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 67
                },
                "start": {
                  "column": 12,
                  "line": 67
                }
              }
            },
            "out": false,
            "range": [
              2018,
              2034
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 67
              },
              "start": {
                "column": 12,
                "line": 67
              }
            }
          }
        ]
      },
      "range": [
        2006,
        2304
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 76
        },
        "start": {
          "column": 0,
          "line": 67
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "range": [
          2333,
          2334
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 80
          },
          "start": {
            "column": 5,
            "line": 80
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
            "name": "T",
            "optional": false,
            "range": [
              2340,
              2341
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 80
              },
              "start": {
                "column": 12,
                "line": 80
              }
            }
          },
          "range": [
            2340,
            2341
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 80
            },
            "start": {
              "column": 12,
              "line": 80
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
                2350,
                2353
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 80
                },
                "start": {
                  "column": 22,
                  "line": 80
                }
              }
            },
            {
              "type": "TemplateElement",
              "tail": false,
              "value": {
                "cooked": ".",
                "raw": "."
              },
              "range": [
                2360,
                2364
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 80
                },
                "start": {
                  "column": 32,
                  "line": 80
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
                2371,
                2373
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 80
                },
                "start": {
                  "column": 43,
                  "line": 80
                }
              }
            }
          ],
          "types": [
            {
              "type": "TSInferType",
              "typeParameter": {
                "type": "TSTypeParameter",
                "const": false,
                "in": false,
                "name": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "range": [
                    2359,
                    2360
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 80
                    },
                    "start": {
                      "column": 31,
                      "line": 80
                    }
                  }
                },
                "out": false,
                "range": [
                  2359,
                  2360
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 80
                  },
                  "start": {
                    "column": 31,
                    "line": 80
                  }
                }
              },
              "range": [
                2353,
                2360
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 80
                },
                "start": {
                  "column": 25,
                  "line": 80
                }
              }
            },
            {
              "type": "TSInferType",
              "typeParameter": {
                "type": "TSTypeParameter",
                "const": false,
                "in": false,
                "name": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "V",
                  "optional": false,
                  "range": [
                    2370,
                    2371
                  ],
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 80
                    },
                    "start": {
                      "column": 42,
                      "line": 80
                    }
                  }
                },
                "out": false,
                "range": [
                  2370,
                  2371
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 80
                  },
                  "start": {
                    "column": 42,
                    "line": 80
                  }
                }
              },
              "range": [
                2364,
                2371
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 80
                },
                "start": {
                  "column": 36,
                  "line": 80
                }
              }
            }
          ],
          "range": [
            2350,
            2373
          ],
          "loc": {
            "end": {
              "column": 45,
              "line": 80
            },
            "start": {
              "column": 22,
              "line": 80
            }
          }
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "range": [
            2384,
            2389
          ],
          "loc": {
            "end": {
              "column": 61,
              "line": 80
            },
            "start": {
              "column": 56,
              "line": 80
            }
          }
        },
        "trueType": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "range": [
                  2376,
                  2377
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 80
                  },
                  "start": {
                    "column": 48,
                    "line": 80
                  }
                }
              },
              "range": [
                2376,
                2377
              ],
              "loc": {
                "end": {
                  "column": 49,
                  "line": 80
                },
                "start": {
                  "column": 48,
                  "line": 80
                }
              }
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "V",
                "optional": false,
                "range": [
                  2380,
                  2381
                ],
                "loc": {
                  "end": {
                    "column": 53,
                    "line": 80
                  },
                  "start": {
                    "column": 52,
                    "line": 80
                  }
                }
              },
              "range": [
                2380,
                2381
              ],
              "loc": {
                "end": {
                  "column": 53,
                  "line": 80
                },
                "start": {
                  "column": 52,
                  "line": 80
                }
              }
            }
          ],
          "range": [
            2376,
            2381
          ],
          "loc": {
            "end": {
              "column": 53,
              "line": 80
            },
            "start": {
              "column": 48,
              "line": 80
            }
          }
        },
        "range": [
          2340,
          2389
        ],
        "loc": {
          "end": {
            "column": 61,
            "line": 80
          },
          "start": {
            "column": 12,
            "line": 80
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 9,
            "line": 80
          },
          "start": {
            "column": 6,
            "line": 80
          }
        },
        "range": [
          2334,
          2337
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
                2335,
                2336
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 80
                },
                "start": {
                  "column": 7,
                  "line": 80
                }
              }
            },
            "out": false,
            "range": [
              2335,
              2336
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 80
              },
              "start": {
                "column": 7,
                "line": 80
              }
            }
          }
        ]
      },
      "range": [
        2328,
        2389
      ],
      "loc": {
        "end": {
          "column": 61,
          "line": 80
        },
        "start": {
          "column": 0,
          "line": 80
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "range": [
          2395,
          2396
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 81
          },
          "start": {
            "column": 5,
            "line": 81
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            2400,
            2413
          ],
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "TemplateLiteral",
                "expressions": [],
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "tail": true,
                    "value": {
                      "cooked": "test.1024",
                      "raw": "test.1024"
                    },
                    "range": [
                      2401,
                      2412
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 81
                      },
                      "start": {
                        "column": 11,
                        "line": 81
                      }
                    }
                  }
                ],
                "range": [
                  2401,
                  2412
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 81
                  },
                  "start": {
                    "column": 11,
                    "line": 81
                  }
                }
              },
              "range": [
                2401,
                2412
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 81
                },
                "start": {
                  "column": 11,
                  "line": 81
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 81
            },
            "start": {
              "column": 10,
              "line": 81
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "A",
          "optional": false,
          "range": [
            2399,
            2400
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 81
            },
            "start": {
              "column": 9,
              "line": 81
            }
          }
        },
        "range": [
          2399,
          2413
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 81
          },
          "start": {
            "column": 9,
            "line": 81
          }
        }
      },
      "range": [
        2390,
        2414
      ],
      "loc": {
        "end": {
          "column": 24,
          "line": 81
        },
        "start": {
          "column": 0,
          "line": 81
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "range": [
          2440,
          2441
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 82
          },
          "start": {
            "column": 5,
            "line": 82
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            2445,
            2463
          ],
          "params": [
            {
              "type": "TSTemplateLiteralType",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "tail": false,
                  "value": {
                    "cooked": "test.",
                    "raw": "test."
                  },
                  "range": [
                    2446,
                    2454
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 82
                    },
                    "start": {
                      "column": 11,
                      "line": 82
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
                    2460,
                    2462
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 82
                    },
                    "start": {
                      "column": 25,
                      "line": 82
                    }
                  }
                }
              ],
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "range": [
                    2454,
                    2460
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 82
                    },
                    "start": {
                      "column": 19,
                      "line": 82
                    }
                  }
                }
              ],
              "range": [
                2446,
                2462
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 82
                },
                "start": {
                  "column": 11,
                  "line": 82
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 82
            },
            "start": {
              "column": 10,
              "line": 82
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "A",
          "optional": false,
          "range": [
            2444,
            2445
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 82
            },
            "start": {
              "column": 9,
              "line": 82
            }
          }
        },
        "range": [
          2444,
          2463
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 82
          },
          "start": {
            "column": 9,
            "line": 82
          }
        }
      },
      "range": [
        2435,
        2464
      ],
      "loc": {
        "end": {
          "column": 29,
          "line": 82
        },
        "start": {
          "column": 0,
          "line": 82
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "range": [
          2496,
          2497
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 84
          },
          "start": {
            "column": 5,
            "line": 84
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
            "name": "T",
            "optional": false,
            "range": [
              2503,
              2504
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 84
              },
              "start": {
                "column": 12,
                "line": 84
              }
            }
          },
          "range": [
            2503,
            2504
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 84
            },
            "start": {
              "column": 12,
              "line": 84
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
                2513,
                2516
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 84
                },
                "start": {
                  "column": 22,
                  "line": 84
                }
              }
            },
            {
              "type": "TemplateElement",
              "tail": false,
              "value": {
                "cooked": ".",
                "raw": "."
              },
              "range": [
                2523,
                2527
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 84
                },
                "start": {
                  "column": 32,
                  "line": 84
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
                2533,
                2535
              ],
              "loc": {
                "end": {
                  "column": 44,
                  "line": 84
                },
                "start": {
                  "column": 42,
                  "line": 84
                }
              }
            }
          ],
          "types": [
            {
              "type": "TSInferType",
              "typeParameter": {
                "type": "TSTypeParameter",
                "const": false,
                "in": false,
                "name": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "range": [
                    2522,
                    2523
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 84
                    },
                    "start": {
                      "column": 31,
                      "line": 84
                    }
                  }
                },
                "out": false,
                "range": [
                  2522,
                  2523
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 84
                  },
                  "start": {
                    "column": 31,
                    "line": 84
                  }
                }
              },
              "range": [
                2516,
                2523
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 84
                },
                "start": {
                  "column": 25,
                  "line": 84
                }
              }
            },
            {
              "type": "TSNumberKeyword",
              "range": [
                2527,
                2533
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 84
                },
                "start": {
                  "column": 36,
                  "line": 84
                }
              }
            }
          ],
          "range": [
            2513,
            2535
          ],
          "loc": {
            "end": {
              "column": 44,
              "line": 84
            },
            "start": {
              "column": 22,
              "line": 84
            }
          }
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "range": [
            2542,
            2547
          ],
          "loc": {
            "end": {
              "column": 56,
              "line": 84
            },
            "start": {
              "column": 51,
              "line": 84
            }
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "U",
            "optional": false,
            "range": [
              2538,
              2539
            ],
            "loc": {
              "end": {
                "column": 48,
                "line": 84
              },
              "start": {
                "column": 47,
                "line": 84
              }
            }
          },
          "range": [
            2538,
            2539
          ],
          "loc": {
            "end": {
              "column": 48,
              "line": 84
            },
            "start": {
              "column": 47,
              "line": 84
            }
          }
        },
        "range": [
          2503,
          2547
        ],
        "loc": {
          "end": {
            "column": 56,
            "line": 84
          },
          "start": {
            "column": 12,
            "line": 84
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 9,
            "line": 84
          },
          "start": {
            "column": 6,
            "line": 84
          }
        },
        "range": [
          2497,
          2500
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
                2498,
                2499
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 84
                },
                "start": {
                  "column": 7,
                  "line": 84
                }
              }
            },
            "out": false,
            "range": [
              2498,
              2499
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 84
              },
              "start": {
                "column": 7,
                "line": 84
              }
            }
          }
        ]
      },
      "range": [
        2491,
        2547
      ],
      "loc": {
        "end": {
          "column": 56,
          "line": 84
        },
        "start": {
          "column": 0,
          "line": 84
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E",
        "optional": false,
        "range": [
          2553,
          2554
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 85
          },
          "start": {
            "column": 5,
            "line": 85
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            2558,
            2571
          ],
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "TemplateLiteral",
                "expressions": [],
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "tail": true,
                    "value": {
                      "cooked": "test.1024",
                      "raw": "test.1024"
                    },
                    "range": [
                      2559,
                      2570
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 85
                      },
                      "start": {
                        "column": 11,
                        "line": 85
                      }
                    }
                  }
                ],
                "range": [
                  2559,
                  2570
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 85
                  },
                  "start": {
                    "column": 11,
                    "line": 85
                  }
                }
              },
              "range": [
                2559,
                2570
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 85
                },
                "start": {
                  "column": 11,
                  "line": 85
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 85
            },
            "start": {
              "column": 10,
              "line": 85
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "D",
          "optional": false,
          "range": [
            2557,
            2558
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 85
            },
            "start": {
              "column": 9,
              "line": 85
            }
          }
        },
        "range": [
          2557,
          2571
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 85
          },
          "start": {
            "column": 9,
            "line": 85
          }
        }
      },
      "range": [
        2548,
        2572
      ],
      "loc": {
        "end": {
          "column": 24,
          "line": 85
        },
        "start": {
          "column": 0,
          "line": 85
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "F",
        "optional": false,
        "range": [
          2589,
          2590
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 86
          },
          "start": {
            "column": 5,
            "line": 86
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            2594,
            2612
          ],
          "params": [
            {
              "type": "TSTemplateLiteralType",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "tail": false,
                  "value": {
                    "cooked": "test.",
                    "raw": "test."
                  },
                  "range": [
                    2595,
                    2603
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 86
                    },
                    "start": {
                      "column": 11,
                      "line": 86
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
                    2609,
                    2611
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 86
                    },
                    "start": {
                      "column": 25,
                      "line": 86
                    }
                  }
                }
              ],
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "range": [
                    2603,
                    2609
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 86
                    },
                    "start": {
                      "column": 19,
                      "line": 86
                    }
                  }
                }
              ],
              "range": [
                2595,
                2611
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 86
                },
                "start": {
                  "column": 11,
                  "line": 86
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 86
            },
            "start": {
              "column": 10,
              "line": 86
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "D",
          "optional": false,
          "range": [
            2593,
            2594
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 86
            },
            "start": {
              "column": 9,
              "line": 86
            }
          }
        },
        "range": [
          2593,
          2612
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 86
          },
          "start": {
            "column": 9,
            "line": 86
          }
        }
      },
      "range": [
        2584,
        2613
      ],
      "loc": {
        "end": {
          "column": 29,
          "line": 86
        },
        "start": {
          "column": 0,
          "line": 86
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "G",
        "optional": false,
        "range": [
          2631,
          2632
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 88
          },
          "start": {
            "column": 5,
            "line": 88
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
            "name": "T",
            "optional": false,
            "range": [
              2638,
              2639
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 88
              },
              "start": {
                "column": 12,
                "line": 88
              }
            }
          },
          "range": [
            2638,
            2639
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 88
            },
            "start": {
              "column": 12,
              "line": 88
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
                2648,
                2651
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 88
                },
                "start": {
                  "column": 22,
                  "line": 88
                }
              }
            },
            {
              "type": "TemplateElement",
              "tail": false,
              "value": {
                "cooked": ".",
                "raw": "."
              },
              "range": [
                2658,
                2662
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 88
                },
                "start": {
                  "column": 32,
                  "line": 88
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
                2669,
                2671
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 88
                },
                "start": {
                  "column": 43,
                  "line": 88
                }
              }
            }
          ],
          "types": [
            {
              "type": "TSInferType",
              "typeParameter": {
                "type": "TSTypeParameter",
                "const": false,
                "in": false,
                "name": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "range": [
                    2657,
                    2658
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 88
                    },
                    "start": {
                      "column": 31,
                      "line": 88
                    }
                  }
                },
                "out": false,
                "range": [
                  2657,
                  2658
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 88
                  },
                  "start": {
                    "column": 31,
                    "line": 88
                  }
                }
              },
              "range": [
                2651,
                2658
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 88
                },
                "start": {
                  "column": 25,
                  "line": 88
                }
              }
            },
            {
              "type": "TSInferType",
              "typeParameter": {
                "type": "TSTypeParameter",
                "const": false,
                "in": false,
                "name": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "V",
                  "optional": false,
                  "range": [
                    2668,
                    2669
                  ],
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 88
                    },
                    "start": {
                      "column": 42,
                      "line": 88
                    }
                  }
                },
                "out": false,
                "range": [
                  2668,
                  2669
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 88
                  },
                  "start": {
                    "column": 42,
                    "line": 88
                  }
                }
              },
              "range": [
                2662,
                2669
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 88
                },
                "start": {
                  "column": 36,
                  "line": 88
                }
              }
            }
          ],
          "range": [
            2648,
            2671
          ],
          "loc": {
            "end": {
              "column": 45,
              "line": 88
            },
            "start": {
              "column": 22,
              "line": 88
            }
          }
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "range": [
            2682,
            2687
          ],
          "loc": {
            "end": {
              "column": 61,
              "line": 88
            },
            "start": {
              "column": 56,
              "line": 88
            }
          }
        },
        "trueType": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "range": [
                  2674,
                  2675
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 88
                  },
                  "start": {
                    "column": 48,
                    "line": 88
                  }
                }
              },
              "range": [
                2674,
                2675
              ],
              "loc": {
                "end": {
                  "column": 49,
                  "line": 88
                },
                "start": {
                  "column": 48,
                  "line": 88
                }
              }
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "V",
                "optional": false,
                "range": [
                  2678,
                  2679
                ],
                "loc": {
                  "end": {
                    "column": 53,
                    "line": 88
                  },
                  "start": {
                    "column": 52,
                    "line": 88
                  }
                }
              },
              "range": [
                2678,
                2679
              ],
              "loc": {
                "end": {
                  "column": 53,
                  "line": 88
                },
                "start": {
                  "column": 52,
                  "line": 88
                }
              }
            }
          ],
          "range": [
            2674,
            2679
          ],
          "loc": {
            "end": {
              "column": 53,
              "line": 88
            },
            "start": {
              "column": 48,
              "line": 88
            }
          }
        },
        "range": [
          2638,
          2687
        ],
        "loc": {
          "end": {
            "column": 61,
            "line": 88
          },
          "start": {
            "column": 12,
            "line": 88
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 9,
            "line": 88
          },
          "start": {
            "column": 6,
            "line": 88
          }
        },
        "range": [
          2632,
          2635
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
                2633,
                2634
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 88
                },
                "start": {
                  "column": 7,
                  "line": 88
                }
              }
            },
            "out": false,
            "range": [
              2633,
              2634
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 88
              },
              "start": {
                "column": 7,
                "line": 88
              }
            }
          }
        ]
      },
      "range": [
        2626,
        2687
      ],
      "loc": {
        "end": {
          "column": 61,
          "line": 88
        },
        "start": {
          "column": 0,
          "line": 88
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "H",
        "optional": false,
        "range": [
          2693,
          2694
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 89
          },
          "start": {
            "column": 5,
            "line": 89
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            2698,
            2711
          ],
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "TemplateLiteral",
                "expressions": [],
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "tail": true,
                    "value": {
                      "cooked": "test.hoge",
                      "raw": "test.hoge"
                    },
                    "range": [
                      2699,
                      2710
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 89
                      },
                      "start": {
                        "column": 11,
                        "line": 89
                      }
                    }
                  }
                ],
                "range": [
                  2699,
                  2710
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 89
                  },
                  "start": {
                    "column": 11,
                    "line": 89
                  }
                }
              },
              "range": [
                2699,
                2710
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 89
                },
                "start": {
                  "column": 11,
                  "line": 89
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 89
            },
            "start": {
              "column": 10,
              "line": 89
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "G",
          "optional": false,
          "range": [
            2697,
            2698
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 89
            },
            "start": {
              "column": 9,
              "line": 89
            }
          }
        },
        "range": [
          2697,
          2711
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 89
          },
          "start": {
            "column": 9,
            "line": 89
          }
        }
      },
      "range": [
        2688,
        2712
      ],
      "loc": {
        "end": {
          "column": 24,
          "line": 89
        },
        "start": {
          "column": 0,
          "line": 89
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "range": [
          2738,
          2739
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 90
          },
          "start": {
            "column": 5,
            "line": 90
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            2743,
            2761
          ],
          "params": [
            {
              "type": "TSTemplateLiteralType",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "tail": false,
                  "value": {
                    "cooked": "test.",
                    "raw": "test."
                  },
                  "range": [
                    2744,
                    2752
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 90
                    },
                    "start": {
                      "column": 11,
                      "line": 90
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
                    2758,
                    2760
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 90
                    },
                    "start": {
                      "column": 25,
                      "line": 90
                    }
                  }
                }
              ],
              "types": [
                {
                  "type": "TSStringKeyword",
                  "range": [
                    2752,
                    2758
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 90
                    },
                    "start": {
                      "column": 19,
                      "line": 90
                    }
                  }
                }
              ],
              "range": [
                2744,
                2760
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 90
                },
                "start": {
                  "column": 11,
                  "line": 90
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 90
            },
            "start": {
              "column": 10,
              "line": 90
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "G",
          "optional": false,
          "range": [
            2742,
            2743
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 90
            },
            "start": {
              "column": 9,
              "line": 90
            }
          }
        },
        "range": [
          2742,
          2761
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 90
          },
          "start": {
            "column": 9,
            "line": 90
          }
        }
      },
      "range": [
        2733,
        2762
      ],
      "loc": {
        "end": {
          "column": 29,
          "line": 90
        },
        "start": {
          "column": 0,
          "line": 90
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "J",
        "optional": false,
        "range": [
          2816,
          2817
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 92
          },
          "start": {
            "column": 5,
            "line": 92
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
            "name": "T",
            "optional": false,
            "range": [
              2823,
              2824
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 92
              },
              "start": {
                "column": 12,
                "line": 92
              }
            }
          },
          "range": [
            2823,
            2824
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 92
            },
            "start": {
              "column": 12,
              "line": 92
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
                2833,
                2836
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 92
                },
                "start": {
                  "column": 22,
                  "line": 92
                }
              }
            },
            {
              "type": "TemplateElement",
              "tail": false,
              "value": {
                "cooked": ".",
                "raw": "."
              },
              "range": [
                2843,
                2847
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 92
                },
                "start": {
                  "column": 32,
                  "line": 92
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
                2853,
                2855
              ],
              "loc": {
                "end": {
                  "column": 44,
                  "line": 92
                },
                "start": {
                  "column": 42,
                  "line": 92
                }
              }
            }
          ],
          "types": [
            {
              "type": "TSInferType",
              "typeParameter": {
                "type": "TSTypeParameter",
                "const": false,
                "in": false,
                "name": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "range": [
                    2842,
                    2843
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 92
                    },
                    "start": {
                      "column": 31,
                      "line": 92
                    }
                  }
                },
                "out": false,
                "range": [
                  2842,
                  2843
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 92
                  },
                  "start": {
                    "column": 31,
                    "line": 92
                  }
                }
              },
              "range": [
                2836,
                2843
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 92
                },
                "start": {
                  "column": 25,
                  "line": 92
                }
              }
            },
            {
              "type": "TSStringKeyword",
              "range": [
                2847,
                2853
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 92
                },
                "start": {
                  "column": 36,
                  "line": 92
                }
              }
            }
          ],
          "range": [
            2833,
            2855
          ],
          "loc": {
            "end": {
              "column": 44,
              "line": 92
            },
            "start": {
              "column": 22,
              "line": 92
            }
          }
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "range": [
            2862,
            2867
          ],
          "loc": {
            "end": {
              "column": 56,
              "line": 92
            },
            "start": {
              "column": 51,
              "line": 92
            }
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "U",
            "optional": false,
            "range": [
              2858,
              2859
            ],
            "loc": {
              "end": {
                "column": 48,
                "line": 92
              },
              "start": {
                "column": 47,
                "line": 92
              }
            }
          },
          "range": [
            2858,
            2859
          ],
          "loc": {
            "end": {
              "column": 48,
              "line": 92
            },
            "start": {
              "column": 47,
              "line": 92
            }
          }
        },
        "range": [
          2823,
          2867
        ],
        "loc": {
          "end": {
            "column": 56,
            "line": 92
          },
          "start": {
            "column": 12,
            "line": 92
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 9,
            "line": 92
          },
          "start": {
            "column": 6,
            "line": 92
          }
        },
        "range": [
          2817,
          2820
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
                2818,
                2819
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 92
                },
                "start": {
                  "column": 7,
                  "line": 92
                }
              }
            },
            "out": false,
            "range": [
              2818,
              2819
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 92
              },
              "start": {
                "column": 7,
                "line": 92
              }
            }
          }
        ]
      },
      "range": [
        2811,
        2867
      ],
      "loc": {
        "end": {
          "column": 56,
          "line": 92
        },
        "start": {
          "column": 0,
          "line": 92
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "K",
        "optional": false,
        "range": [
          2873,
          2874
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 93
          },
          "start": {
            "column": 5,
            "line": 93
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            2878,
            2891
          ],
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "TemplateLiteral",
                "expressions": [],
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "tail": true,
                    "value": {
                      "cooked": "test.hoge",
                      "raw": "test.hoge"
                    },
                    "range": [
                      2879,
                      2890
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 93
                      },
                      "start": {
                        "column": 11,
                        "line": 93
                      }
                    }
                  }
                ],
                "range": [
                  2879,
                  2890
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 93
                  },
                  "start": {
                    "column": 11,
                    "line": 93
                  }
                }
              },
              "range": [
                2879,
                2890
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 93
                },
                "start": {
                  "column": 11,
                  "line": 93
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 93
            },
            "start": {
              "column": 10,
              "line": 93
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "J",
          "optional": false,
          "range": [
            2877,
            2878
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 93
            },
            "start": {
              "column": 9,
              "line": 93
            }
          }
        },
        "range": [
          2877,
          2891
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 93
          },
          "start": {
            "column": 9,
            "line": 93
          }
        }
      },
      "range": [
        2868,
        2892
      ],
      "loc": {
        "end": {
          "column": 24,
          "line": 93
        },
        "start": {
          "column": 0,
          "line": 93
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "L",
        "optional": false,
        "range": [
          2909,
          2910
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 94
          },
          "start": {
            "column": 5,
            "line": 94
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            2914,
            2932
          ],
          "params": [
            {
              "type": "TSTemplateLiteralType",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "tail": false,
                  "value": {
                    "cooked": "test.",
                    "raw": "test."
                  },
                  "range": [
                    2915,
                    2923
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 94
                    },
                    "start": {
                      "column": 11,
                      "line": 94
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
                    2929,
                    2931
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 94
                    },
                    "start": {
                      "column": 25,
                      "line": 94
                    }
                  }
                }
              ],
              "types": [
                {
                  "type": "TSStringKeyword",
                  "range": [
                    2923,
                    2929
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 94
                    },
                    "start": {
                      "column": 19,
                      "line": 94
                    }
                  }
                }
              ],
              "range": [
                2915,
                2931
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 94
                },
                "start": {
                  "column": 11,
                  "line": 94
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 94
            },
            "start": {
              "column": 10,
              "line": 94
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "J",
          "optional": false,
          "range": [
            2913,
            2914
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 94
            },
            "start": {
              "column": 9,
              "line": 94
            }
          }
        },
        "range": [
          2913,
          2932
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 94
          },
          "start": {
            "column": 9,
            "line": 94
          }
        }
      },
      "range": [
        2904,
        2933
      ],
      "loc": {
        "end": {
          "column": 29,
          "line": 94
        },
        "start": {
          "column": 0,
          "line": 94
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Templated",
        "optional": false,
        "range": [
          2974,
          2983
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 98
          },
          "start": {
            "column": 5,
            "line": 98
          }
        }
      },
      "typeAnnotation": {
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
              2986,
              2989
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 98
              },
              "start": {
                "column": 17,
                "line": 98
              }
            }
          },
          {
            "type": "TemplateElement",
            "tail": false,
            "value": {
              "cooked": " ",
              "raw": " "
            },
            "range": [
              2995,
              2999
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 98
              },
              "start": {
                "column": 26,
                "line": 98
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
              3005,
              3007
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 98
              },
              "start": {
                "column": 36,
                "line": 98
              }
            }
          }
        ],
        "types": [
          {
            "type": "TSStringKeyword",
            "range": [
              2989,
              2995
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 98
              },
              "start": {
                "column": 20,
                "line": 98
              }
            }
          },
          {
            "type": "TSStringKeyword",
            "range": [
              2999,
              3005
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 98
              },
              "start": {
                "column": 30,
                "line": 98
              }
            }
          }
        ],
        "range": [
          2986,
          3007
        ],
        "loc": {
          "end": {
            "column": 38,
            "line": 98
          },
          "start": {
            "column": 17,
            "line": 98
          }
        }
      },
      "range": [
        2969,
        3008
      ],
      "loc": {
        "end": {
          "column": 39,
          "line": 98
        },
        "start": {
          "column": 0,
          "line": 98
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
            "name": "value1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 20,
                  "line": 100
                },
                "start": {
                  "column": 12,
                  "line": 100
                }
              },
              "range": [
                3022,
                3030
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  3024,
                  3030
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 100
                  },
                  "start": {
                    "column": 14,
                    "line": 100
                  }
                }
              }
            },
            "range": [
              3016,
              3030
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 100
              },
              "start": {
                "column": 6,
                "line": 100
              }
            }
          },
          "init": {
            "type": "Literal",
            "raw": "\"abc\"",
            "value": "abc",
            "range": [
              3033,
              3038
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 100
              },
              "start": {
                "column": 23,
                "line": 100
              }
            }
          },
          "range": [
            3016,
            3038
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 100
            },
            "start": {
              "column": 6,
              "line": 100
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        3010,
        3039
      ],
      "loc": {
        "end": {
          "column": 29,
          "line": 100
        },
        "start": {
          "column": 0,
          "line": 100
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
            "name": "templated1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 27,
                  "line": 101
                },
                "start": {
                  "column": 16,
                  "line": 101
                }
              },
              "range": [
                3056,
                3067
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Templated",
                  "optional": false,
                  "range": [
                    3058,
                    3067
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 101
                    },
                    "start": {
                      "column": 18,
                      "line": 101
                    }
                  }
                },
                "range": [
                  3058,
                  3067
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 101
                  },
                  "start": {
                    "column": 18,
                    "line": 101
                  }
                }
              }
            },
            "range": [
              3046,
              3067
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 101
              },
              "start": {
                "column": 6,
                "line": 101
              }
            }
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "TemplateLiteral",
              "expressions": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value1",
                  "optional": false,
                  "range": [
                    3073,
                    3079
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 101
                    },
                    "start": {
                      "column": 33,
                      "line": 101
                    }
                  }
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "tail": false,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "range": [
                    3070,
                    3073
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 101
                    },
                    "start": {
                      "column": 30,
                      "line": 101
                    }
                  }
                },
                {
                  "type": "TemplateElement",
                  "tail": true,
                  "value": {
                    "cooked": " abc",
                    "raw": " abc"
                  },
                  "range": [
                    3079,
                    3085
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 101
                    },
                    "start": {
                      "column": 39,
                      "line": 101
                    }
                  }
                }
              ],
              "range": [
                3070,
                3085
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 101
                },
                "start": {
                  "column": 30,
                  "line": 101
                }
              }
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "range": [
                  3089,
                  3094
                ],
                "loc": {
                  "end": {
                    "column": 54,
                    "line": 101
                  },
                  "start": {
                    "column": 49,
                    "line": 101
                  }
                }
              },
              "range": [
                3089,
                3094
              ],
              "loc": {
                "end": {
                  "column": 54,
                  "line": 101
                },
                "start": {
                  "column": 49,
                  "line": 101
                }
              }
            },
            "range": [
              3070,
              3094
            ],
            "loc": {
              "end": {
                "column": 54,
                "line": 101
              },
              "start": {
                "column": 30,
                "line": 101
              }
            }
          },
          "range": [
            3046,
            3094
          ],
          "loc": {
            "end": {
              "column": 54,
              "line": 101
            },
            "start": {
              "column": 6,
              "line": 101
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        3040,
        3095
      ],
      "loc": {
        "end": {
          "column": 55,
          "line": 101
        },
        "start": {
          "column": 0,
          "line": 101
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
            "name": "value2",
            "optional": false,
            "range": [
              3180,
              3186
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 104
              },
              "start": {
                "column": 6,
                "line": 104
              }
            }
          },
          "init": {
            "type": "Literal",
            "raw": "\"abc\"",
            "value": "abc",
            "range": [
              3189,
              3194
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 104
              },
              "start": {
                "column": 15,
                "line": 104
              }
            }
          },
          "range": [
            3180,
            3194
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 104
            },
            "start": {
              "column": 6,
              "line": 104
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        3174,
        3195
      ],
      "loc": {
        "end": {
          "column": 21,
          "line": 104
        },
        "start": {
          "column": 0,
          "line": 104
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
            "name": "templated2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 27,
                  "line": 105
                },
                "start": {
                  "column": 16,
                  "line": 105
                }
              },
              "range": [
                3212,
                3223
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Templated",
                  "optional": false,
                  "range": [
                    3214,
                    3223
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 105
                    },
                    "start": {
                      "column": 18,
                      "line": 105
                    }
                  }
                },
                "range": [
                  3214,
                  3223
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 105
                  },
                  "start": {
                    "column": 18,
                    "line": 105
                  }
                }
              }
            },
            "range": [
              3202,
              3223
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 105
              },
              "start": {
                "column": 6,
                "line": 105
              }
            }
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "TemplateLiteral",
              "expressions": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value2",
                  "optional": false,
                  "range": [
                    3229,
                    3235
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 105
                    },
                    "start": {
                      "column": 33,
                      "line": 105
                    }
                  }
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "tail": false,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "range": [
                    3226,
                    3229
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 105
                    },
                    "start": {
                      "column": 30,
                      "line": 105
                    }
                  }
                },
                {
                  "type": "TemplateElement",
                  "tail": true,
                  "value": {
                    "cooked": " abc",
                    "raw": " abc"
                  },
                  "range": [
                    3235,
                    3241
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 105
                    },
                    "start": {
                      "column": 39,
                      "line": 105
                    }
                  }
                }
              ],
              "range": [
                3226,
                3241
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 105
                },
                "start": {
                  "column": 30,
                  "line": 105
                }
              }
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "range": [
                  3245,
                  3250
                ],
                "loc": {
                  "end": {
                    "column": 54,
                    "line": 105
                  },
                  "start": {
                    "column": 49,
                    "line": 105
                  }
                }
              },
              "range": [
                3245,
                3250
              ],
              "loc": {
                "end": {
                  "column": 54,
                  "line": 105
                },
                "start": {
                  "column": 49,
                  "line": 105
                }
              }
            },
            "range": [
              3226,
              3250
            ],
            "loc": {
              "end": {
                "column": 54,
                "line": 105
              },
              "start": {
                "column": 30,
                "line": 105
              }
            }
          },
          "range": [
            3202,
            3250
          ],
          "loc": {
            "end": {
              "column": 54,
              "line": 105
            },
            "start": {
              "column": 6,
              "line": 105
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        3196,
        3251
      ],
      "loc": {
        "end": {
          "column": 55,
          "line": 105
        },
        "start": {
          "column": 0,
          "line": 105
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Prefixes",
        "optional": false,
        "range": [
          3280,
          3288
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 109
          },
          "start": {
            "column": 5,
            "line": 109
          }
        }
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "raw": "\"foo\"",
              "value": "foo",
              "range": [
                3291,
                3296
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 109
                },
                "start": {
                  "column": 16,
                  "line": 109
                }
              }
            },
            "range": [
              3291,
              3296
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 109
              },
              "start": {
                "column": 16,
                "line": 109
              }
            }
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "raw": "\"bar\"",
              "value": "bar",
              "range": [
                3299,
                3304
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 109
                },
                "start": {
                  "column": 24,
                  "line": 109
                }
              }
            },
            "range": [
              3299,
              3304
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 109
              },
              "start": {
                "column": 24,
                "line": 109
              }
            }
          }
        ],
        "range": [
          3291,
          3304
        ],
        "loc": {
          "end": {
            "column": 29,
            "line": 109
          },
          "start": {
            "column": 16,
            "line": 109
          }
        }
      },
      "range": [
        3275,
        3305
      ],
      "loc": {
        "end": {
          "column": 30,
          "line": 109
        },
        "start": {
          "column": 0,
          "line": 109
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AllPrefixData",
        "optional": false,
        "range": [
          3312,
          3325
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 111
          },
          "start": {
            "column": 5,
            "line": 111
          }
        }
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "raw": "\"foo:baz\"",
              "value": "foo:baz",
              "range": [
                3328,
                3337
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 111
                },
                "start": {
                  "column": 21,
                  "line": 111
                }
              }
            },
            "range": [
              3328,
              3337
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 111
              },
              "start": {
                "column": 21,
                "line": 111
              }
            }
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "raw": "\"bar:baz\"",
              "value": "bar:baz",
              "range": [
                3340,
                3349
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 111
                },
                "start": {
                  "column": 33,
                  "line": 111
                }
              }
            },
            "range": [
              3340,
              3349
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 111
              },
              "start": {
                "column": 33,
                "line": 111
              }
            }
          }
        ],
        "range": [
          3328,
          3349
        ],
        "loc": {
          "end": {
            "column": 42,
            "line": 111
          },
          "start": {
            "column": 21,
            "line": 111
          }
        }
      },
      "range": [
        3307,
        3350
      ],
      "loc": {
        "end": {
          "column": 43,
          "line": 111
        },
        "start": {
          "column": 0,
          "line": 111
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PrefixData",
        "optional": false,
        "range": [
          3357,
          3367
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 113
          },
          "start": {
            "column": 5,
            "line": 113
          }
        }
      },
      "typeAnnotation": {
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
              3390,
              3393
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 113
              },
              "start": {
                "column": 38,
                "line": 113
              }
            }
          },
          {
            "type": "TemplateElement",
            "tail": true,
            "value": {
              "cooked": ":baz",
              "raw": ":baz"
            },
            "range": [
              3394,
              3400
            ],
            "loc": {
              "end": {
                "column": 48,
                "line": 113
              },
              "start": {
                "column": 42,
                "line": 113
              }
            }
          }
        ],
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "range": [
                3393,
                3394
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 113
                },
                "start": {
                  "column": 41,
                  "line": 113
                }
              }
            },
            "range": [
              3393,
              3394
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 113
              },
              "start": {
                "column": 41,
                "line": 113
              }
            }
          }
        ],
        "range": [
          3390,
          3400
        ],
        "loc": {
          "end": {
            "column": 48,
            "line": 113
          },
          "start": {
            "column": 38,
            "line": 113
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 35,
            "line": 113
          },
          "start": {
            "column": 15,
            "line": 113
          }
        },
        "range": [
          3367,
          3387
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Prefixes",
                "optional": false,
                "range": [
                  3378,
                  3386
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 113
                  },
                  "start": {
                    "column": 26,
                    "line": 113
                  }
                }
              },
              "range": [
                3378,
                3386
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 113
                },
                "start": {
                  "column": 26,
                  "line": 113
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "range": [
                3368,
                3369
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 113
                },
                "start": {
                  "column": 16,
                  "line": 113
                }
              }
            },
            "out": false,
            "range": [
              3368,
              3386
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 113
              },
              "start": {
                "column": 16,
                "line": 113
              }
            }
          }
        ]
      },
      "range": [
        3352,
        3401
      ],
      "loc": {
        "end": {
          "column": 49,
          "line": 113
        },
        "start": {
          "column": 0,
          "line": 113
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          3480,
          3501
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "blah",
              "optional": false,
              "range": [
                3486,
                3490
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 116
                },
                "start": {
                  "column": 4,
                  "line": 116
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
                  "column": 16,
                  "line": 116
                },
                "start": {
                  "column": 8,
                  "line": 116
                }
              },
              "range": [
                3490,
                3498
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  3492,
                  3498
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 116
                  },
                  "start": {
                    "column": 10,
                    "line": 116
                  }
                }
              }
            },
            "range": [
              3486,
              3499
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 116
              },
              "start": {
                "column": 4,
                "line": 116
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 117
          },
          "start": {
            "column": 77,
            "line": 115
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ITest",
        "optional": false,
        "range": [
          3413,
          3418
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 115
          },
          "start": {
            "column": 10,
            "line": 115
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 76,
            "line": 115
          },
          "start": {
            "column": 15,
            "line": 115
          }
        },
        "range": [
          3418,
          3479
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Prefixes",
                "optional": false,
                "range": [
                  3429,
                  3437
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 115
                  },
                  "start": {
                    "column": 26,
                    "line": 115
                  }
                }
              },
              "range": [
                3429,
                3437
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 115
                },
                "start": {
                  "column": 26,
                  "line": 115
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "range": [
                3419,
                3420
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 115
                },
                "start": {
                  "column": 16,
                  "line": 115
                }
              }
            },
            "out": false,
            "range": [
              3419,
              3437
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 115
              },
              "start": {
                "column": 16,
                "line": 115
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "AllPrefixData",
                "optional": false,
                "range": [
                  3449,
                  3462
                ],
                "loc": {
                  "end": {
                    "column": 59,
                    "line": 115
                  },
                  "start": {
                    "column": 46,
                    "line": 115
                  }
                }
              },
              "range": [
                3449,
                3462
              ],
              "loc": {
                "end": {
                  "column": 59,
                  "line": 115
                },
                "start": {
                  "column": 46,
                  "line": 115
                }
              }
            },
            "default": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  3475,
                  3478
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "P",
                      "optional": false,
                      "range": [
                        3476,
                        3477
                      ],
                      "loc": {
                        "end": {
                          "column": 74,
                          "line": 115
                        },
                        "start": {
                          "column": 73,
                          "line": 115
                        }
                      }
                    },
                    "range": [
                      3476,
                      3477
                    ],
                    "loc": {
                      "end": {
                        "column": 74,
                        "line": 115
                      },
                      "start": {
                        "column": 73,
                        "line": 115
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 75,
                    "line": 115
                  },
                  "start": {
                    "column": 72,
                    "line": 115
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "PrefixData",
                "optional": false,
                "range": [
                  3465,
                  3475
                ],
                "loc": {
                  "end": {
                    "column": 72,
                    "line": 115
                  },
                  "start": {
                    "column": 62,
                    "line": 115
                  }
                }
              },
              "range": [
                3465,
                3478
              ],
              "loc": {
                "end": {
                  "column": 75,
                  "line": 115
                },
                "start": {
                  "column": 62,
                  "line": 115
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "E",
              "optional": false,
              "range": [
                3439,
                3440
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 115
                },
                "start": {
                  "column": 36,
                  "line": 115
                }
              }
            },
            "out": false,
            "range": [
              3439,
              3478
            ],
            "loc": {
              "end": {
                "column": 75,
                "line": 115
              },
              "start": {
                "column": 36,
                "line": 115
              }
            }
          }
        ]
      },
      "range": [
        3403,
        3501
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 117
        },
        "start": {
          "column": 0,
          "line": 115
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Schema",
        "optional": false,
        "range": [
          3530,
          3536
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 121
          },
          "start": {
            "column": 5,
            "line": 121
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
              "name": "a",
              "optional": false,
              "range": [
                3541,
                3542
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 121
                },
                "start": {
                  "column": 16,
                  "line": 121
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
                  "column": 39,
                  "line": 121
                },
                "start": {
                  "column": 17,
                  "line": 121
                }
              },
              "range": [
                3542,
                3564
              ],
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "range": [
                        3546,
                        3547
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 121
                        },
                        "start": {
                          "column": 21,
                          "line": 121
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
                          "column": 37,
                          "line": 121
                        },
                        "start": {
                          "column": 22,
                          "line": 121
                        }
                      },
                      "range": [
                        3547,
                        3562
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "c",
                              "optional": false,
                              "range": [
                                3551,
                                3552
                              ],
                              "loc": {
                                "end": {
                                  "column": 27,
                                  "line": 121
                                },
                                "start": {
                                  "column": 26,
                                  "line": 121
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
                                  "column": 35,
                                  "line": 121
                                },
                                "start": {
                                  "column": 27,
                                  "line": 121
                                }
                              },
                              "range": [
                                3552,
                                3560
                              ],
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "range": [
                                  3554,
                                  3560
                                ],
                                "loc": {
                                  "end": {
                                    "column": 35,
                                    "line": 121
                                  },
                                  "start": {
                                    "column": 29,
                                    "line": 121
                                  }
                                }
                              }
                            },
                            "range": [
                              3551,
                              3560
                            ],
                            "loc": {
                              "end": {
                                "column": 35,
                                "line": 121
                              },
                              "start": {
                                "column": 26,
                                "line": 121
                              }
                            }
                          }
                        ],
                        "range": [
                          3549,
                          3562
                        ],
                        "loc": {
                          "end": {
                            "column": 37,
                            "line": 121
                          },
                          "start": {
                            "column": 24,
                            "line": 121
                          }
                        }
                      }
                    },
                    "range": [
                      3546,
                      3562
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 121
                      },
                      "start": {
                        "column": 21,
                        "line": 121
                      }
                    }
                  }
                ],
                "range": [
                  3544,
                  3564
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 121
                  },
                  "start": {
                    "column": 19,
                    "line": 121
                  }
                }
              }
            },
            "range": [
              3541,
              3564
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 121
              },
              "start": {
                "column": 16,
                "line": 121
              }
            }
          }
        ],
        "range": [
          3539,
          3566
        ],
        "loc": {
          "end": {
            "column": 41,
            "line": 121
          },
          "start": {
            "column": 14,
            "line": 121
          }
        }
      },
      "range": [
        3525,
        3567
      ],
      "loc": {
        "end": {
          "column": 42,
          "line": 121
        },
        "start": {
          "column": 0,
          "line": 121
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
        "name": "chain",
        "optional": false,
        "range": [
          3586,
          3591
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 123
          },
          "start": {
            "column": 17,
            "line": 123
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "field",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 69,
                "line": 123
              },
              "start": {
                "column": 52,
                "line": 123
              }
            },
            "range": [
              3621,
              3638
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "F",
                    "optional": false,
                    "range": [
                      3623,
                      3624
                    ],
                    "loc": {
                      "end": {
                        "column": 55,
                        "line": 123
                      },
                      "start": {
                        "column": 54,
                        "line": 123
                      }
                    }
                  },
                  "range": [
                    3623,
                    3624
                  ],
                  "loc": {
                    "end": {
                      "column": 55,
                      "line": 123
                    },
                    "start": {
                      "column": 54,
                      "line": 123
                    }
                  }
                },
                {
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
                        3627,
                        3630
                      ],
                      "loc": {
                        "end": {
                          "column": 61,
                          "line": 123
                        },
                        "start": {
                          "column": 58,
                          "line": 123
                        }
                      }
                    },
                    {
                      "type": "TemplateElement",
                      "tail": false,
                      "value": {
                        "cooked": ".",
                        "raw": "."
                      },
                      "range": [
                        3631,
                        3635
                      ],
                      "loc": {
                        "end": {
                          "column": 66,
                          "line": 123
                        },
                        "start": {
                          "column": 62,
                          "line": 123
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
                        3636,
                        3638
                      ],
                      "loc": {
                        "end": {
                          "column": 69,
                          "line": 123
                        },
                        "start": {
                          "column": 67,
                          "line": 123
                        }
                      }
                    }
                  ],
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "F",
                        "optional": false,
                        "range": [
                          3630,
                          3631
                        ],
                        "loc": {
                          "end": {
                            "column": 62,
                            "line": 123
                          },
                          "start": {
                            "column": 61,
                            "line": 123
                          }
                        }
                      },
                      "range": [
                        3630,
                        3631
                      ],
                      "loc": {
                        "end": {
                          "column": 62,
                          "line": 123
                        },
                        "start": {
                          "column": 61,
                          "line": 123
                        }
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "F",
                        "optional": false,
                        "range": [
                          3635,
                          3636
                        ],
                        "loc": {
                          "end": {
                            "column": 67,
                            "line": 123
                          },
                          "start": {
                            "column": 66,
                            "line": 123
                          }
                        }
                      },
                      "range": [
                        3635,
                        3636
                      ],
                      "loc": {
                        "end": {
                          "column": 67,
                          "line": 123
                        },
                        "start": {
                          "column": 66,
                          "line": 123
                        }
                      }
                    }
                  ],
                  "range": [
                    3627,
                    3638
                  ],
                  "loc": {
                    "end": {
                      "column": 69,
                      "line": 123
                    },
                    "start": {
                      "column": 58,
                      "line": 123
                    }
                  }
                }
              ],
              "range": [
                3623,
                3638
              ],
              "loc": {
                "end": {
                  "column": 69,
                  "line": 123
                },
                "start": {
                  "column": 54,
                  "line": 123
                }
              }
            }
          },
          "range": [
            3616,
            3638
          ],
          "loc": {
            "end": {
              "column": 69,
              "line": 123
            },
            "start": {
              "column": 47,
              "line": 123
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 76,
            "line": 123
          },
          "start": {
            "column": 70,
            "line": 123
          }
        },
        "range": [
          3639,
          3645
        ],
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "range": [
            3641,
            3645
          ],
          "loc": {
            "end": {
              "column": 76,
              "line": 123
            },
            "start": {
              "column": 72,
              "line": 123
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 46,
            "line": 123
          },
          "start": {
            "column": 22,
            "line": 123
          }
        },
        "range": [
          3591,
          3615
        ],
        "params": [
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
                  "name": "Schema",
                  "optional": false,
                  "range": [
                    3608,
                    3614
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 123
                    },
                    "start": {
                      "column": 39,
                      "line": 123
                    }
                  }
                },
                "range": [
                  3608,
                  3614
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 123
                  },
                  "start": {
                    "column": 39,
                    "line": 123
                  }
                }
              },
              "range": [
                3602,
                3614
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 123
                },
                "start": {
                  "column": 33,
                  "line": 123
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "F",
              "optional": false,
              "range": [
                3592,
                3593
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 123
                },
                "start": {
                  "column": 23,
                  "line": 123
                }
              }
            },
            "out": false,
            "range": [
              3592,
              3614
            ],
            "loc": {
              "end": {
                "column": 45,
                "line": 123
              },
              "start": {
                "column": 23,
                "line": 123
              }
            }
          }
        ]
      },
      "range": [
        3569,
        3646
      ],
      "loc": {
        "end": {
          "column": 77,
          "line": 123
        },
        "start": {
          "column": 0,
          "line": 123
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "\"a\"",
            "value": "a",
            "range": [
              3654,
              3657
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 125
              },
              "start": {
                "column": 6,
                "line": 125
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "chain",
          "optional": false,
          "range": [
            3648,
            3653
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 125
            },
            "start": {
              "column": 0,
              "line": 125
            }
          }
        },
        "optional": false,
        "range": [
          3648,
          3658
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 125
          },
          "start": {
            "column": 0,
            "line": 125
          }
        }
      },
      "range": [
        3648,
        3659
      ],
      "loc": {
        "end": {
          "column": 11,
          "line": 125
        },
        "start": {
          "column": 0,
          "line": 125
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
            "type": "IfStatement",
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      3785,
                      3786
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 131
                      },
                      "start": {
                        "column": 8,
                        "line": 131
                      }
                    }
                  },
                  "range": [
                    3785,
                    3787
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 131
                    },
                    "start": {
                      "column": 8,
                      "line": 131
                    }
                  }
                }
              ],
              "range": [
                3775,
                3813
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 132
                },
                "start": {
                  "column": 17,
                  "line": 130
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  3766,
                  3767
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 130
                  },
                  "start": {
                    "column": 8,
                    "line": 130
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "range": [
                  3772,
                  3773
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 130
                  },
                  "start": {
                    "column": 14,
                    "line": 130
                  }
                }
              },
              "range": [
                3766,
                3773
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 130
                },
                "start": {
                  "column": 8,
                  "line": 130
                }
              }
            },
            "range": [
              3762,
              3813
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 132
              },
              "start": {
                "column": 4,
                "line": 130
              }
            }
          },
          {
            "type": "IfStatement",
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "range": [
                3831,
                3848
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 134
                },
                "start": {
                  "column": 17,
                  "line": 133
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  3822,
                  3823
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 133
                  },
                  "start": {
                    "column": 8,
                    "line": 133
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "z",
                "optional": false,
                "range": [
                  3828,
                  3829
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 133
                  },
                  "start": {
                    "column": 14,
                    "line": 133
                  }
                }
              },
              "range": [
                3822,
                3829
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 133
                },
                "start": {
                  "column": 8,
                  "line": 133
                }
              }
            },
            "range": [
              3818,
              3848
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 134
              },
              "start": {
                "column": 4,
                "line": 133
              }
            }
          }
        ],
        "range": [
          3756,
          3850
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 135
          },
          "start": {
            "column": 73,
            "line": 129
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ff1",
        "optional": false,
        "range": [
          3692,
          3695
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 129
          },
          "start": {
            "column": 9,
            "line": 129
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 31,
                "line": 129
              },
              "start": {
                "column": 14,
                "line": 129
              }
            },
            "range": [
              3697,
              3714
            ],
            "typeAnnotation": {
              "type": "TSTemplateLiteralType",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "tail": false,
                  "value": {
                    "cooked": "foo-",
                    "raw": "foo-"
                  },
                  "range": [
                    3699,
                    3706
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 129
                    },
                    "start": {
                      "column": 16,
                      "line": 129
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
                    3712,
                    3714
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 129
                    },
                    "start": {
                      "column": 29,
                      "line": 129
                    }
                  }
                }
              ],
              "types": [
                {
                  "type": "TSStringKeyword",
                  "range": [
                    3706,
                    3712
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 129
                    },
                    "start": {
                      "column": 23,
                      "line": 129
                    }
                  }
                }
              ],
              "range": [
                3699,
                3714
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 129
                },
                "start": {
                  "column": 16,
                  "line": 129
                }
              }
            }
          },
          "range": [
            3696,
            3714
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 129
            },
            "start": {
              "column": 13,
              "line": 129
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 51,
                "line": 129
              },
              "start": {
                "column": 34,
                "line": 129
              }
            },
            "range": [
              3717,
              3734
            ],
            "typeAnnotation": {
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
                    3719,
                    3722
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 129
                    },
                    "start": {
                      "column": 36,
                      "line": 129
                    }
                  }
                },
                {
                  "type": "TemplateElement",
                  "tail": true,
                  "value": {
                    "cooked": "-bar",
                    "raw": "-bar"
                  },
                  "range": [
                    3728,
                    3734
                  ],
                  "loc": {
                    "end": {
                      "column": 51,
                      "line": 129
                    },
                    "start": {
                      "column": 45,
                      "line": 129
                    }
                  }
                }
              ],
              "types": [
                {
                  "type": "TSStringKeyword",
                  "range": [
                    3722,
                    3728
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 129
                    },
                    "start": {
                      "column": 39,
                      "line": 129
                    }
                  }
                }
              ],
              "range": [
                3719,
                3734
              ],
              "loc": {
                "end": {
                  "column": 51,
                  "line": 129
                },
                "start": {
                  "column": 36,
                  "line": 129
                }
              }
            }
          },
          "range": [
            3716,
            3734
          ],
          "loc": {
            "end": {
              "column": 51,
              "line": 129
            },
            "start": {
              "column": 33,
              "line": 129
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "z",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 71,
                "line": 129
              },
              "start": {
                "column": 54,
                "line": 129
              }
            },
            "range": [
              3737,
              3754
            ],
            "typeAnnotation": {
              "type": "TSTemplateLiteralType",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "tail": false,
                  "value": {
                    "cooked": "baz-",
                    "raw": "baz-"
                  },
                  "range": [
                    3739,
                    3746
                  ],
                  "loc": {
                    "end": {
                      "column": 63,
                      "line": 129
                    },
                    "start": {
                      "column": 56,
                      "line": 129
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
                    3752,
                    3754
                  ],
                  "loc": {
                    "end": {
                      "column": 71,
                      "line": 129
                    },
                    "start": {
                      "column": 69,
                      "line": 129
                    }
                  }
                }
              ],
              "types": [
                {
                  "type": "TSStringKeyword",
                  "range": [
                    3746,
                    3752
                  ],
                  "loc": {
                    "end": {
                      "column": 69,
                      "line": 129
                    },
                    "start": {
                      "column": 63,
                      "line": 129
                    }
                  }
                }
              ],
              "range": [
                3739,
                3754
              ],
              "loc": {
                "end": {
                  "column": 71,
                  "line": 129
                },
                "start": {
                  "column": 56,
                  "line": 129
                }
              }
            }
          },
          "range": [
            3736,
            3754
          ],
          "loc": {
            "end": {
              "column": 71,
              "line": 129
            },
            "start": {
              "column": 53,
              "line": 129
            }
          }
        }
      ],
      "range": [
        3683,
        3850
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 135
        },
        "start": {
          "column": 0,
          "line": 129
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
            "type": "IfStatement",
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      3957,
                      3958
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 139
                      },
                      "start": {
                        "column": 8,
                        "line": 139
                      }
                    }
                  },
                  "range": [
                    3957,
                    3959
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 139
                    },
                    "start": {
                      "column": 8,
                      "line": 139
                    }
                  }
                }
              ],
              "range": [
                3947,
                3980
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 140
                },
                "start": {
                  "column": 17,
                  "line": 138
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  3938,
                  3939
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 138
                  },
                  "start": {
                    "column": 8,
                    "line": 138
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "range": [
                  3944,
                  3945
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 138
                  },
                  "start": {
                    "column": 14,
                    "line": 138
                  }
                }
              },
              "range": [
                3938,
                3945
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 138
                },
                "start": {
                  "column": 8,
                  "line": 138
                }
              }
            },
            "range": [
              3934,
              3980
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 140
              },
              "start": {
                "column": 4,
                "line": 138
              }
            }
          },
          {
            "type": "IfStatement",
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "range": [
                3998,
                4015
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 142
                },
                "start": {
                  "column": 17,
                  "line": 141
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  3989,
                  3990
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 141
                  },
                  "start": {
                    "column": 8,
                    "line": 141
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "z",
                "optional": false,
                "range": [
                  3995,
                  3996
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 141
                  },
                  "start": {
                    "column": 14,
                    "line": 141
                  }
                }
              },
              "range": [
                3989,
                3996
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 141
                },
                "start": {
                  "column": 8,
                  "line": 141
                }
              }
            },
            "range": [
              3985,
              4015
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 142
              },
              "start": {
                "column": 4,
                "line": 141
              }
            }
          }
        ],
        "range": [
          3928,
          4017
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 143
          },
          "start": {
            "column": 76,
            "line": 137
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ff2",
        "optional": false,
        "range": [
          3861,
          3864
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 137
          },
          "start": {
            "column": 9,
            "line": 137
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 44,
                "line": 137
              },
              "start": {
                "column": 32,
                "line": 137
              }
            },
            "range": [
              3884,
              3896
            ],
            "typeAnnotation": {
              "type": "TSTemplateLiteralType",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "tail": false,
                  "value": {
                    "cooked": "foo-",
                    "raw": "foo-"
                  },
                  "range": [
                    3886,
                    3893
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 137
                    },
                    "start": {
                      "column": 34,
                      "line": 137
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
                    3894,
                    3896
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 137
                    },
                    "start": {
                      "column": 42,
                      "line": 137
                    }
                  }
                }
              ],
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "range": [
                      3893,
                      3894
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 137
                      },
                      "start": {
                        "column": 41,
                        "line": 137
                      }
                    }
                  },
                  "range": [
                    3893,
                    3894
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 137
                    },
                    "start": {
                      "column": 41,
                      "line": 137
                    }
                  }
                }
              ],
              "range": [
                3886,
                3896
              ],
              "loc": {
                "end": {
                  "column": 44,
                  "line": 137
                },
                "start": {
                  "column": 34,
                  "line": 137
                }
              }
            }
          },
          "range": [
            3883,
            3896
          ],
          "loc": {
            "end": {
              "column": 44,
              "line": 137
            },
            "start": {
              "column": 31,
              "line": 137
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 59,
                "line": 137
              },
              "start": {
                "column": 47,
                "line": 137
              }
            },
            "range": [
              3899,
              3911
            ],
            "typeAnnotation": {
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
                    3901,
                    3904
                  ],
                  "loc": {
                    "end": {
                      "column": 52,
                      "line": 137
                    },
                    "start": {
                      "column": 49,
                      "line": 137
                    }
                  }
                },
                {
                  "type": "TemplateElement",
                  "tail": true,
                  "value": {
                    "cooked": "-bar",
                    "raw": "-bar"
                  },
                  "range": [
                    3905,
                    3911
                  ],
                  "loc": {
                    "end": {
                      "column": 59,
                      "line": 137
                    },
                    "start": {
                      "column": 53,
                      "line": 137
                    }
                  }
                }
              ],
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "range": [
                      3904,
                      3905
                    ],
                    "loc": {
                      "end": {
                        "column": 53,
                        "line": 137
                      },
                      "start": {
                        "column": 52,
                        "line": 137
                      }
                    }
                  },
                  "range": [
                    3904,
                    3905
                  ],
                  "loc": {
                    "end": {
                      "column": 53,
                      "line": 137
                    },
                    "start": {
                      "column": 52,
                      "line": 137
                    }
                  }
                }
              ],
              "range": [
                3901,
                3911
              ],
              "loc": {
                "end": {
                  "column": 59,
                  "line": 137
                },
                "start": {
                  "column": 49,
                  "line": 137
                }
              }
            }
          },
          "range": [
            3898,
            3911
          ],
          "loc": {
            "end": {
              "column": 59,
              "line": 137
            },
            "start": {
              "column": 46,
              "line": 137
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "z",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 74,
                "line": 137
              },
              "start": {
                "column": 62,
                "line": 137
              }
            },
            "range": [
              3914,
              3926
            ],
            "typeAnnotation": {
              "type": "TSTemplateLiteralType",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "tail": false,
                  "value": {
                    "cooked": "baz-",
                    "raw": "baz-"
                  },
                  "range": [
                    3916,
                    3923
                  ],
                  "loc": {
                    "end": {
                      "column": 71,
                      "line": 137
                    },
                    "start": {
                      "column": 64,
                      "line": 137
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
                    3924,
                    3926
                  ],
                  "loc": {
                    "end": {
                      "column": 74,
                      "line": 137
                    },
                    "start": {
                      "column": 72,
                      "line": 137
                    }
                  }
                }
              ],
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "range": [
                      3923,
                      3924
                    ],
                    "loc": {
                      "end": {
                        "column": 72,
                        "line": 137
                      },
                      "start": {
                        "column": 71,
                        "line": 137
                      }
                    }
                  },
                  "range": [
                    3923,
                    3924
                  ],
                  "loc": {
                    "end": {
                      "column": 72,
                      "line": 137
                    },
                    "start": {
                      "column": 71,
                      "line": 137
                    }
                  }
                }
              ],
              "range": [
                3916,
                3926
              ],
              "loc": {
                "end": {
                  "column": 74,
                  "line": 137
                },
                "start": {
                  "column": 64,
                  "line": 137
                }
              }
            }
          },
          "range": [
            3913,
            3926
          ],
          "loc": {
            "end": {
              "column": 74,
              "line": 137
            },
            "start": {
              "column": 61,
              "line": 137
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 30,
            "line": 137
          },
          "start": {
            "column": 12,
            "line": 137
          }
        },
        "range": [
          3864,
          3882
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "range": [
                3875,
                3881
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 137
                },
                "start": {
                  "column": 23,
                  "line": 137
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                3865,
                3866
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 137
                },
                "start": {
                  "column": 13,
                  "line": 137
                }
              }
            },
            "out": false,
            "range": [
              3865,
              3881
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 137
              },
              "start": {
                "column": 13,
                "line": 137
              }
            }
          }
        ]
      },
      "range": [
        3852,
        4017
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 143
        },
        "start": {
          "column": 0,
          "line": 137
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
            "type": "IfStatement",
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      4100,
                      4101
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 147
                      },
                      "start": {
                        "column": 8,
                        "line": 147
                      }
                    }
                  },
                  "range": [
                    4100,
                    4102
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 147
                    },
                    "start": {
                      "column": 8,
                      "line": 147
                    }
                  }
                }
              ],
              "range": [
                4090,
                4136
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 148
                },
                "start": {
                  "column": 17,
                  "line": 146
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  4081,
                  4082
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 146
                  },
                  "start": {
                    "column": 8,
                    "line": 146
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "range": [
                  4087,
                  4088
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 146
                  },
                  "start": {
                    "column": 14,
                    "line": 146
                  }
                }
              },
              "range": [
                4081,
                4088
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 146
                },
                "start": {
                  "column": 8,
                  "line": 146
                }
              }
            },
            "range": [
              4077,
              4136
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 148
              },
              "start": {
                "column": 4,
                "line": 146
              }
            }
          }
        ],
        "range": [
          4071,
          4138
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 149
          },
          "start": {
            "column": 52,
            "line": 145
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ff3",
        "optional": false,
        "range": [
          4028,
          4031
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 145
          },
          "start": {
            "column": 9,
            "line": 145
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 22,
                "line": 145
              },
              "start": {
                "column": 14,
                "line": 145
              }
            },
            "range": [
              4033,
              4041
            ],
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "range": [
                4035,
                4041
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 145
                },
                "start": {
                  "column": 16,
                  "line": 145
                }
              }
            }
          },
          "range": [
            4032,
            4041
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 145
            },
            "start": {
              "column": 13,
              "line": 145
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 50,
                "line": 145
              },
              "start": {
                "column": 25,
                "line": 145
              }
            },
            "range": [
              4044,
              4069
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTemplateLiteralType",
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "tail": false,
                      "value": {
                        "cooked": "foo-",
                        "raw": "foo-"
                      },
                      "range": [
                        4046,
                        4053
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 145
                        },
                        "start": {
                          "column": 27,
                          "line": 145
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
                        4059,
                        4061
                      ],
                      "loc": {
                        "end": {
                          "column": 42,
                          "line": 145
                        },
                        "start": {
                          "column": 40,
                          "line": 145
                        }
                      }
                    }
                  ],
                  "types": [
                    {
                      "type": "TSStringKeyword",
                      "range": [
                        4053,
                        4059
                      ],
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 145
                        },
                        "start": {
                          "column": 34,
                          "line": 145
                        }
                      }
                    }
                  ],
                  "range": [
                    4046,
                    4061
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 145
                    },
                    "start": {
                      "column": 27,
                      "line": 145
                    }
                  }
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "'bar'",
                    "value": "bar",
                    "range": [
                      4064,
                      4069
                    ],
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 145
                      },
                      "start": {
                        "column": 45,
                        "line": 145
                      }
                    }
                  },
                  "range": [
                    4064,
                    4069
                  ],
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 145
                    },
                    "start": {
                      "column": 45,
                      "line": 145
                    }
                  }
                }
              ],
              "range": [
                4046,
                4069
              ],
              "loc": {
                "end": {
                  "column": 50,
                  "line": 145
                },
                "start": {
                  "column": 27,
                  "line": 145
                }
              }
            }
          },
          "range": [
            4043,
            4069
          ],
          "loc": {
            "end": {
              "column": 50,
              "line": 145
            },
            "start": {
              "column": 24,
              "line": 145
            }
          }
        }
      ],
      "range": [
        4019,
        4138
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 149
        },
        "start": {
          "column": 0,
          "line": 145
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
            "type": "IfStatement",
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      4222,
                      4223
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 153
                      },
                      "start": {
                        "column": 8,
                        "line": 153
                      }
                    }
                  },
                  "range": [
                    4222,
                    4224
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 153
                    },
                    "start": {
                      "column": 8,
                      "line": 153
                    }
                  }
                }
              ],
              "range": [
                4212,
                4245
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 154
                },
                "start": {
                  "column": 26,
                  "line": 152
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  4194,
                  4195
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 152
                  },
                  "start": {
                    "column": 8,
                    "line": 152
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "'foo-test'",
                "value": "foo-test",
                "range": [
                  4200,
                  4210
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 152
                  },
                  "start": {
                    "column": 14,
                    "line": 152
                  }
                }
              },
              "range": [
                4194,
                4210
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 152
                },
                "start": {
                  "column": 8,
                  "line": 152
                }
              }
            },
            "range": [
              4190,
              4245
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 154
              },
              "start": {
                "column": 4,
                "line": 152
              }
            }
          },
          {
            "type": "IfStatement",
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "range": [
                      4282,
                      4283
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 156
                      },
                      "start": {
                        "column": 8,
                        "line": 156
                      }
                    }
                  },
                  "range": [
                    4282,
                    4284
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 156
                    },
                    "start": {
                      "column": 8,
                      "line": 156
                    }
                  }
                }
              ],
              "range": [
                4272,
                4305
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 157
                },
                "start": {
                  "column": 26,
                  "line": 155
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "range": [
                  4254,
                  4255
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 155
                  },
                  "start": {
                    "column": 8,
                    "line": 155
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "'foo-test'",
                "value": "foo-test",
                "range": [
                  4260,
                  4270
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 155
                  },
                  "start": {
                    "column": 14,
                    "line": 155
                  }
                }
              },
              "range": [
                4254,
                4270
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 155
                },
                "start": {
                  "column": 8,
                  "line": 155
                }
              }
            },
            "range": [
              4250,
              4305
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 157
              },
              "start": {
                "column": 4,
                "line": 155
              }
            }
          }
        ],
        "range": [
          4184,
          4307
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 158
          },
          "start": {
            "column": 44,
            "line": 151
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ff4",
        "optional": false,
        "range": [
          4149,
          4152
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 151
          },
          "start": {
            "column": 9,
            "line": 151
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 22,
                "line": 151
              },
              "start": {
                "column": 14,
                "line": 151
              }
            },
            "range": [
              4154,
              4162
            ],
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "range": [
                4156,
                4162
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 151
                },
                "start": {
                  "column": 16,
                  "line": 151
                }
              }
            }
          },
          "range": [
            4153,
            4162
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 151
            },
            "start": {
              "column": 13,
              "line": 151
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 42,
                "line": 151
              },
              "start": {
                "column": 25,
                "line": 151
              }
            },
            "range": [
              4165,
              4182
            ],
            "typeAnnotation": {
              "type": "TSTemplateLiteralType",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "tail": false,
                  "value": {
                    "cooked": "foo-",
                    "raw": "foo-"
                  },
                  "range": [
                    4167,
                    4174
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 151
                    },
                    "start": {
                      "column": 27,
                      "line": 151
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
                    4180,
                    4182
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 151
                    },
                    "start": {
                      "column": 40,
                      "line": 151
                    }
                  }
                }
              ],
              "types": [
                {
                  "type": "TSStringKeyword",
                  "range": [
                    4174,
                    4180
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 151
                    },
                    "start": {
                      "column": 34,
                      "line": 151
                    }
                  }
                }
              ],
              "range": [
                4167,
                4182
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 151
                },
                "start": {
                  "column": 27,
                  "line": 151
                }
              }
            }
          },
          "range": [
            4164,
            4182
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 151
            },
            "start": {
              "column": 24,
              "line": 151
            }
          }
        }
      ],
      "range": [
        4140,
        4307
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 158
        },
        "start": {
          "column": 0,
          "line": 151
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Action",
        "optional": false,
        "range": [
          4336,
          4342
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 162
          },
          "start": {
            "column": 5,
            "line": 162
          }
        }
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "type",
                  "optional": false,
                  "range": [
                    4353,
                    4357
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 163
                    },
                    "start": {
                      "column": 8,
                      "line": 163
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
                      "column": 33,
                      "line": 163
                    },
                    "start": {
                      "column": 12,
                      "line": 163
                    }
                  },
                  "range": [
                    4357,
                    4378
                  ],
                  "typeAnnotation": {
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
                          4359,
                          4362
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 163
                          },
                          "start": {
                            "column": 14,
                            "line": 163
                          }
                        }
                      },
                      {
                        "type": "TemplateElement",
                        "tail": true,
                        "value": {
                          "cooked": "_REQUEST",
                          "raw": "_REQUEST"
                        },
                        "range": [
                          4368,
                          4378
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 163
                          },
                          "start": {
                            "column": 23,
                            "line": 163
                          }
                        }
                      }
                    ],
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "range": [
                          4362,
                          4368
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 163
                          },
                          "start": {
                            "column": 17,
                            "line": 163
                          }
                        }
                      }
                    ],
                    "range": [
                      4359,
                      4378
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 163
                      },
                      "start": {
                        "column": 14,
                        "line": 163
                      }
                    }
                  }
                },
                "range": [
                  4353,
                  4378
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 163
                  },
                  "start": {
                    "column": 8,
                    "line": 163
                  }
                }
              }
            ],
            "range": [
              4351,
              4380
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 163
              },
              "start": {
                "column": 6,
                "line": 163
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
                  "name": "type",
                  "optional": false,
                  "range": [
                    4389,
                    4393
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 164
                    },
                    "start": {
                      "column": 8,
                      "line": 164
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
                      "column": 33,
                      "line": 164
                    },
                    "start": {
                      "column": 12,
                      "line": 164
                    }
                  },
                  "range": [
                    4393,
                    4414
                  ],
                  "typeAnnotation": {
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
                          4395,
                          4398
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 164
                          },
                          "start": {
                            "column": 14,
                            "line": 164
                          }
                        }
                      },
                      {
                        "type": "TemplateElement",
                        "tail": true,
                        "value": {
                          "cooked": "_SUCCESS",
                          "raw": "_SUCCESS"
                        },
                        "range": [
                          4404,
                          4414
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 164
                          },
                          "start": {
                            "column": 23,
                            "line": 164
                          }
                        }
                      }
                    ],
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "range": [
                          4398,
                          4404
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 164
                          },
                          "start": {
                            "column": 17,
                            "line": 164
                          }
                        }
                      }
                    ],
                    "range": [
                      4395,
                      4414
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 164
                      },
                      "start": {
                        "column": 14,
                        "line": 164
                      }
                    }
                  }
                },
                "range": [
                  4389,
                  4415
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 164
                  },
                  "start": {
                    "column": 8,
                    "line": 164
                  }
                }
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "response",
                  "optional": false,
                  "range": [
                    4416,
                    4424
                  ],
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 164
                    },
                    "start": {
                      "column": 35,
                      "line": 164
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
                      "column": 51,
                      "line": 164
                    },
                    "start": {
                      "column": 43,
                      "line": 164
                    }
                  },
                  "range": [
                    4424,
                    4432
                  ],
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "range": [
                      4426,
                      4432
                    ],
                    "loc": {
                      "end": {
                        "column": 51,
                        "line": 164
                      },
                      "start": {
                        "column": 45,
                        "line": 164
                      }
                    }
                  }
                },
                "range": [
                  4416,
                  4432
                ],
                "loc": {
                  "end": {
                    "column": 51,
                    "line": 164
                  },
                  "start": {
                    "column": 35,
                    "line": 164
                  }
                }
              }
            ],
            "range": [
              4387,
              4434
            ],
            "loc": {
              "end": {
                "column": 53,
                "line": 164
              },
              "start": {
                "column": 6,
                "line": 164
              }
            }
          }
        ],
        "range": [
          4349,
          4434
        ],
        "loc": {
          "end": {
            "column": 53,
            "line": 164
          },
          "start": {
            "column": 4,
            "line": 163
          }
        }
      },
      "range": [
        4331,
        4435
      ],
      "loc": {
        "end": {
          "column": 54,
          "line": 164
        },
        "start": {
          "column": 0,
          "line": 162
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
            "type": "IfStatement",
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "action",
                      "optional": false,
                      "range": [
                        4521,
                        4527
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 168
                        },
                        "start": {
                          "column": 8,
                          "line": 168
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "type",
                      "optional": false,
                      "range": [
                        4528,
                        4532
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 168
                        },
                        "start": {
                          "column": 15,
                          "line": 168
                        }
                      }
                    },
                    "range": [
                      4521,
                      4532
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 168
                      },
                      "start": {
                        "column": 8,
                        "line": 168
                      }
                    }
                  },
                  "range": [
                    4521,
                    4533
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 168
                    },
                    "start": {
                      "column": 8,
                      "line": 168
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "action",
                      "optional": false,
                      "range": [
                        4542,
                        4548
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 169
                        },
                        "start": {
                          "column": 8,
                          "line": 169
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "response",
                      "optional": false,
                      "range": [
                        4549,
                        4557
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 169
                        },
                        "start": {
                          "column": 15,
                          "line": 169
                        }
                      }
                    },
                    "range": [
                      4542,
                      4557
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 169
                      },
                      "start": {
                        "column": 8,
                        "line": 169
                      }
                    }
                  },
                  "range": [
                    4542,
                    4558
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 169
                    },
                    "start": {
                      "column": 8,
                      "line": 169
                    }
                  }
                }
              ],
              "range": [
                4511,
                4564
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 170
                },
                "start": {
                  "column": 39,
                  "line": 167
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "action",
                  "optional": false,
                  "range": [
                    4480,
                    4486
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 167
                    },
                    "start": {
                      "column": 8,
                      "line": 167
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "type",
                  "optional": false,
                  "range": [
                    4487,
                    4491
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 167
                    },
                    "start": {
                      "column": 15,
                      "line": 167
                    }
                  }
                },
                "range": [
                  4480,
                  4491
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 167
                  },
                  "start": {
                    "column": 8,
                    "line": 167
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "'FOO_SUCCESS'",
                "value": "FOO_SUCCESS",
                "range": [
                  4496,
                  4509
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 167
                  },
                  "start": {
                    "column": 24,
                    "line": 167
                  }
                }
              },
              "range": [
                4480,
                4509
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 167
                },
                "start": {
                  "column": 8,
                  "line": 167
                }
              }
            },
            "range": [
              4476,
              4564
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 170
              },
              "start": {
                "column": 4,
                "line": 167
              }
            }
          }
        ],
        "range": [
          4470,
          4566
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 171
          },
          "start": {
            "column": 33,
            "line": 166
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "reducer",
        "optional": false,
        "range": [
          4446,
          4453
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 166
          },
          "start": {
            "column": 9,
            "line": 166
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "action",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 31,
                "line": 166
              },
              "start": {
                "column": 23,
                "line": 166
              }
            },
            "range": [
              4460,
              4468
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Action",
                "optional": false,
                "range": [
                  4462,
                  4468
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 166
                  },
                  "start": {
                    "column": 25,
                    "line": 166
                  }
                }
              },
              "range": [
                4462,
                4468
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 166
                },
                "start": {
                  "column": 25,
                  "line": 166
                }
              }
            }
          },
          "range": [
            4454,
            4468
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 166
            },
            "start": {
              "column": 17,
              "line": 166
            }
          }
        }
      ],
      "range": [
        4437,
        4566
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 171
        },
        "start": {
          "column": 0,
          "line": 166
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DotString",
        "optional": false,
        "range": [
          4595,
          4604
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 175
          },
          "start": {
            "column": 5,
            "line": 175
          }
        }
      },
      "typeAnnotation": {
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
              4607,
              4610
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 175
              },
              "start": {
                "column": 17,
                "line": 175
              }
            }
          },
          {
            "type": "TemplateElement",
            "tail": false,
            "value": {
              "cooked": ".",
              "raw": "."
            },
            "range": [
              4616,
              4620
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 175
              },
              "start": {
                "column": 26,
                "line": 175
              }
            }
          },
          {
            "type": "TemplateElement",
            "tail": false,
            "value": {
              "cooked": ".",
              "raw": "."
            },
            "range": [
              4626,
              4630
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 175
              },
              "start": {
                "column": 36,
                "line": 175
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
              4636,
              4638
            ],
            "loc": {
              "end": {
                "column": 48,
                "line": 175
              },
              "start": {
                "column": 46,
                "line": 175
              }
            }
          }
        ],
        "types": [
          {
            "type": "TSStringKeyword",
            "range": [
              4610,
              4616
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 175
              },
              "start": {
                "column": 20,
                "line": 175
              }
            }
          },
          {
            "type": "TSStringKeyword",
            "range": [
              4620,
              4626
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 175
              },
              "start": {
                "column": 30,
                "line": 175
              }
            }
          },
          {
            "type": "TSStringKeyword",
            "range": [
              4630,
              4636
            ],
            "loc": {
              "end": {
                "column": 46,
                "line": 175
              },
              "start": {
                "column": 40,
                "line": 175
              }
            }
          }
        ],
        "range": [
          4607,
          4638
        ],
        "loc": {
          "end": {
            "column": 48,
            "line": 175
          },
          "start": {
            "column": 17,
            "line": 175
          }
        }
      },
      "range": [
        4590,
        4639
      ],
      "loc": {
        "end": {
          "column": 49,
          "line": 175
        },
        "start": {
          "column": 0,
          "line": 175
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
        "name": "noSpread",
        "optional": false,
        "range": [
          4658,
          4666
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 177
          },
          "start": {
            "column": 17,
            "line": 177
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "args",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 56,
                "line": 177
              },
              "start": {
                "column": 51,
                "line": 177
              }
            },
            "range": [
              4692,
              4697
            ],
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "range": [
                    4694,
                    4695
                  ],
                  "loc": {
                    "end": {
                      "column": 54,
                      "line": 177
                    },
                    "start": {
                      "column": 53,
                      "line": 177
                    }
                  }
                },
                "range": [
                  4694,
                  4695
                ],
                "loc": {
                  "end": {
                    "column": 54,
                    "line": 177
                  },
                  "start": {
                    "column": 53,
                    "line": 177
                  }
                }
              },
              "range": [
                4694,
                4697
              ],
              "loc": {
                "end": {
                  "column": 56,
                  "line": 177
                },
                "start": {
                  "column": 53,
                  "line": 177
                }
              }
            }
          },
          "range": [
            4688,
            4697
          ],
          "loc": {
            "end": {
              "column": 56,
              "line": 177
            },
            "start": {
              "column": 47,
              "line": 177
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 60,
            "line": 177
          },
          "start": {
            "column": 57,
            "line": 177
          }
        },
        "range": [
          4698,
          4701
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "P",
            "optional": false,
            "range": [
              4700,
              4701
            ],
            "loc": {
              "end": {
                "column": 60,
                "line": 177
              },
              "start": {
                "column": 59,
                "line": 177
              }
            }
          },
          "range": [
            4700,
            4701
          ],
          "loc": {
            "end": {
              "column": 60,
              "line": 177
            },
            "start": {
              "column": 59,
              "line": 177
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 46,
            "line": 177
          },
          "start": {
            "column": 25,
            "line": 177
          }
        },
        "range": [
          4666,
          4687
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "DotString",
                "optional": false,
                "range": [
                  4677,
                  4686
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 177
                  },
                  "start": {
                    "column": 36,
                    "line": 177
                  }
                }
              },
              "range": [
                4677,
                4686
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 177
                },
                "start": {
                  "column": 36,
                  "line": 177
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "range": [
                4667,
                4668
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 177
                },
                "start": {
                  "column": 26,
                  "line": 177
                }
              }
            },
            "out": false,
            "range": [
              4667,
              4686
            ],
            "loc": {
              "end": {
                "column": 45,
                "line": 177
              },
              "start": {
                "column": 26,
                "line": 177
              }
            }
          }
        ]
      },
      "range": [
        4641,
        4702
      ],
      "loc": {
        "end": {
          "column": 61,
          "line": 177
        },
        "start": {
          "column": 0,
          "line": 177
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
        "name": "spread",
        "optional": false,
        "range": [
          4720,
          4726
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 178
          },
          "start": {
            "column": 17,
            "line": 178
          }
        }
      },
      "params": [
        {
          "type": "RestElement",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "args",
            "optional": false,
            "range": [
              4751,
              4755
            ],
            "loc": {
              "end": {
                "column": 52,
                "line": 178
              },
              "start": {
                "column": 48,
                "line": 178
              }
            }
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 57,
                "line": 178
              },
              "start": {
                "column": 52,
                "line": 178
              }
            },
            "range": [
              4755,
              4760
            ],
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "range": [
                    4757,
                    4758
                  ],
                  "loc": {
                    "end": {
                      "column": 55,
                      "line": 178
                    },
                    "start": {
                      "column": 54,
                      "line": 178
                    }
                  }
                },
                "range": [
                  4757,
                  4758
                ],
                "loc": {
                  "end": {
                    "column": 55,
                    "line": 178
                  },
                  "start": {
                    "column": 54,
                    "line": 178
                  }
                }
              },
              "range": [
                4757,
                4760
              ],
              "loc": {
                "end": {
                  "column": 57,
                  "line": 178
                },
                "start": {
                  "column": 54,
                  "line": 178
                }
              }
            }
          },
          "range": [
            4748,
            4760
          ],
          "loc": {
            "end": {
              "column": 57,
              "line": 178
            },
            "start": {
              "column": 45,
              "line": 178
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 61,
            "line": 178
          },
          "start": {
            "column": 58,
            "line": 178
          }
        },
        "range": [
          4761,
          4764
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "P",
            "optional": false,
            "range": [
              4763,
              4764
            ],
            "loc": {
              "end": {
                "column": 61,
                "line": 178
              },
              "start": {
                "column": 60,
                "line": 178
              }
            }
          },
          "range": [
            4763,
            4764
          ],
          "loc": {
            "end": {
              "column": 61,
              "line": 178
            },
            "start": {
              "column": 60,
              "line": 178
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 44,
            "line": 178
          },
          "start": {
            "column": 23,
            "line": 178
          }
        },
        "range": [
          4726,
          4747
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "DotString",
                "optional": false,
                "range": [
                  4737,
                  4746
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 178
                  },
                  "start": {
                    "column": 34,
                    "line": 178
                  }
                }
              },
              "range": [
                4737,
                4746
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 178
                },
                "start": {
                  "column": 34,
                  "line": 178
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "range": [
                4727,
                4728
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 178
                },
                "start": {
                  "column": 24,
                  "line": 178
                }
              }
            },
            "out": false,
            "range": [
              4727,
              4746
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 178
              },
              "start": {
                "column": 24,
                "line": 178
              }
            }
          }
        ]
      },
      "range": [
        4703,
        4765
      ],
      "loc": {
        "end": {
          "column": 62,
          "line": 178
        },
        "start": {
          "column": 0,
          "line": 178
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "TemplateLiteral",
                "expressions": [
                  {
                    "type": "Literal",
                    "raw": "'2'",
                    "value": "2",
                    "range": [
                      4782,
                      4785
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 180
                      },
                      "start": {
                        "column": 15,
                        "line": 180
                      }
                    }
                  }
                ],
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "tail": false,
                    "value": {
                      "cooked": "1.",
                      "raw": "1."
                    },
                    "range": [
                      4777,
                      4782
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 180
                      },
                      "start": {
                        "column": 10,
                        "line": 180
                      }
                    }
                  },
                  {
                    "type": "TemplateElement",
                    "tail": true,
                    "value": {
                      "cooked": ".3",
                      "raw": ".3"
                    },
                    "range": [
                      4785,
                      4789
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 180
                      },
                      "start": {
                        "column": 18,
                        "line": 180
                      }
                    }
                  }
                ],
                "range": [
                  4777,
                  4789
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 180
                  },
                  "start": {
                    "column": 10,
                    "line": 180
                  }
                }
              },
              {
                "type": "TemplateLiteral",
                "expressions": [
                  {
                    "type": "Literal",
                    "raw": "'2'",
                    "value": "2",
                    "range": [
                      4796,
                      4799
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 180
                      },
                      "start": {
                        "column": 29,
                        "line": 180
                      }
                    }
                  }
                ],
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "tail": false,
                    "value": {
                      "cooked": "1.",
                      "raw": "1."
                    },
                    "range": [
                      4791,
                      4796
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 180
                      },
                      "start": {
                        "column": 24,
                        "line": 180
                      }
                    }
                  },
                  {
                    "type": "TemplateElement",
                    "tail": true,
                    "value": {
                      "cooked": ".4",
                      "raw": ".4"
                    },
                    "range": [
                      4799,
                      4803
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 180
                      },
                      "start": {
                        "column": 32,
                        "line": 180
                      }
                    }
                  }
                ],
                "range": [
                  4791,
                  4803
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 180
                  },
                  "start": {
                    "column": 24,
                    "line": 180
                  }
                }
              }
            ],
            "range": [
              4776,
              4804
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 180
              },
              "start": {
                "column": 9,
                "line": 180
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "noSpread",
          "optional": false,
          "range": [
            4767,
            4775
          ],
          "loc": {
            "end": {
              "column": 8,
              "line": 180
            },
            "start": {
              "column": 0,
              "line": 180
            }
          }
        },
        "optional": false,
        "range": [
          4767,
          4805
        ],
        "loc": {
          "end": {
            "column": 38,
            "line": 180
          },
          "start": {
            "column": 0,
            "line": 180
          }
        }
      },
      "range": [
        4767,
        4806
      ],
      "loc": {
        "end": {
          "column": 39,
          "line": 180
        },
        "start": {
          "column": 0,
          "line": 180
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "TemplateLiteral",
                "expressions": [
                  {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "Literal",
                      "raw": "'2'",
                      "value": "2",
                      "range": [
                        4822,
                        4825
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 181
                        },
                        "start": {
                          "column": 15,
                          "line": 181
                        }
                      }
                    },
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        4829,
                        4835
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 181
                        },
                        "start": {
                          "column": 22,
                          "line": 181
                        }
                      }
                    },
                    "range": [
                      4822,
                      4835
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 181
                      },
                      "start": {
                        "column": 15,
                        "line": 181
                      }
                    }
                  }
                ],
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "tail": false,
                    "value": {
                      "cooked": "1.",
                      "raw": "1."
                    },
                    "range": [
                      4817,
                      4822
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 181
                      },
                      "start": {
                        "column": 10,
                        "line": 181
                      }
                    }
                  },
                  {
                    "type": "TemplateElement",
                    "tail": true,
                    "value": {
                      "cooked": ".3",
                      "raw": ".3"
                    },
                    "range": [
                      4835,
                      4839
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 181
                      },
                      "start": {
                        "column": 28,
                        "line": 181
                      }
                    }
                  }
                ],
                "range": [
                  4817,
                  4839
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 181
                  },
                  "start": {
                    "column": 10,
                    "line": 181
                  }
                }
              },
              {
                "type": "TemplateLiteral",
                "expressions": [
                  {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "Literal",
                      "raw": "'2'",
                      "value": "2",
                      "range": [
                        4846,
                        4849
                      ],
                      "loc": {
                        "end": {
                          "column": 42,
                          "line": 181
                        },
                        "start": {
                          "column": 39,
                          "line": 181
                        }
                      }
                    },
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        4853,
                        4859
                      ],
                      "loc": {
                        "end": {
                          "column": 52,
                          "line": 181
                        },
                        "start": {
                          "column": 46,
                          "line": 181
                        }
                      }
                    },
                    "range": [
                      4846,
                      4859
                    ],
                    "loc": {
                      "end": {
                        "column": 52,
                        "line": 181
                      },
                      "start": {
                        "column": 39,
                        "line": 181
                      }
                    }
                  }
                ],
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "tail": false,
                    "value": {
                      "cooked": "1.",
                      "raw": "1."
                    },
                    "range": [
                      4841,
                      4846
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 181
                      },
                      "start": {
                        "column": 34,
                        "line": 181
                      }
                    }
                  },
                  {
                    "type": "TemplateElement",
                    "tail": true,
                    "value": {
                      "cooked": ".4",
                      "raw": ".4"
                    },
                    "range": [
                      4859,
                      4863
                    ],
                    "loc": {
                      "end": {
                        "column": 56,
                        "line": 181
                      },
                      "start": {
                        "column": 52,
                        "line": 181
                      }
                    }
                  }
                ],
                "range": [
                  4841,
                  4863
                ],
                "loc": {
                  "end": {
                    "column": 56,
                    "line": 181
                  },
                  "start": {
                    "column": 34,
                    "line": 181
                  }
                }
              }
            ],
            "range": [
              4816,
              4864
            ],
            "loc": {
              "end": {
                "column": 57,
                "line": 181
              },
              "start": {
                "column": 9,
                "line": 181
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "noSpread",
          "optional": false,
          "range": [
            4807,
            4815
          ],
          "loc": {
            "end": {
              "column": 8,
              "line": 181
            },
            "start": {
              "column": 0,
              "line": 181
            }
          }
        },
        "optional": false,
        "range": [
          4807,
          4865
        ],
        "loc": {
          "end": {
            "column": 58,
            "line": 181
          },
          "start": {
            "column": 0,
            "line": 181
          }
        }
      },
      "range": [
        4807,
        4866
      ],
      "loc": {
        "end": {
          "column": 59,
          "line": 181
        },
        "start": {
          "column": 0,
          "line": 181
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "TemplateLiteral",
            "expressions": [
              {
                "type": "Literal",
                "raw": "'2'",
                "value": "2",
                "range": [
                  4880,
                  4883
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 183
                  },
                  "start": {
                    "column": 12,
                    "line": 183
                  }
                }
              }
            ],
            "quasis": [
              {
                "type": "TemplateElement",
                "tail": false,
                "value": {
                  "cooked": "1.",
                  "raw": "1."
                },
                "range": [
                  4875,
                  4880
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 183
                  },
                  "start": {
                    "column": 7,
                    "line": 183
                  }
                }
              },
              {
                "type": "TemplateElement",
                "tail": true,
                "value": {
                  "cooked": ".3",
                  "raw": ".3"
                },
                "range": [
                  4883,
                  4887
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 183
                  },
                  "start": {
                    "column": 15,
                    "line": 183
                  }
                }
              }
            ],
            "range": [
              4875,
              4887
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 183
              },
              "start": {
                "column": 7,
                "line": 183
              }
            }
          },
          {
            "type": "TemplateLiteral",
            "expressions": [
              {
                "type": "Literal",
                "raw": "'2'",
                "value": "2",
                "range": [
                  4894,
                  4897
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 183
                  },
                  "start": {
                    "column": 26,
                    "line": 183
                  }
                }
              }
            ],
            "quasis": [
              {
                "type": "TemplateElement",
                "tail": false,
                "value": {
                  "cooked": "1.",
                  "raw": "1."
                },
                "range": [
                  4889,
                  4894
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 183
                  },
                  "start": {
                    "column": 21,
                    "line": 183
                  }
                }
              },
              {
                "type": "TemplateElement",
                "tail": true,
                "value": {
                  "cooked": ".4",
                  "raw": ".4"
                },
                "range": [
                  4897,
                  4901
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 183
                  },
                  "start": {
                    "column": 29,
                    "line": 183
                  }
                }
              }
            ],
            "range": [
              4889,
              4901
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 183
              },
              "start": {
                "column": 21,
                "line": 183
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "spread",
          "optional": false,
          "range": [
            4868,
            4874
          ],
          "loc": {
            "end": {
              "column": 6,
              "line": 183
            },
            "start": {
              "column": 0,
              "line": 183
            }
          }
        },
        "optional": false,
        "range": [
          4868,
          4902
        ],
        "loc": {
          "end": {
            "column": 34,
            "line": 183
          },
          "start": {
            "column": 0,
            "line": 183
          }
        }
      },
      "range": [
        4868,
        4903
      ],
      "loc": {
        "end": {
          "column": 35,
          "line": 183
        },
        "start": {
          "column": 0,
          "line": 183
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "TemplateLiteral",
            "expressions": [
              {
                "type": "TSAsExpression",
                "expression": {
                  "type": "Literal",
                  "raw": "'2'",
                  "value": "2",
                  "range": [
                    4916,
                    4919
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 184
                    },
                    "start": {
                      "column": 12,
                      "line": 184
                    }
                  }
                },
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "range": [
                    4923,
                    4929
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 184
                    },
                    "start": {
                      "column": 19,
                      "line": 184
                    }
                  }
                },
                "range": [
                  4916,
                  4929
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 184
                  },
                  "start": {
                    "column": 12,
                    "line": 184
                  }
                }
              }
            ],
            "quasis": [
              {
                "type": "TemplateElement",
                "tail": false,
                "value": {
                  "cooked": "1.",
                  "raw": "1."
                },
                "range": [
                  4911,
                  4916
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 184
                  },
                  "start": {
                    "column": 7,
                    "line": 184
                  }
                }
              },
              {
                "type": "TemplateElement",
                "tail": true,
                "value": {
                  "cooked": ".3",
                  "raw": ".3"
                },
                "range": [
                  4929,
                  4933
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 184
                  },
                  "start": {
                    "column": 25,
                    "line": 184
                  }
                }
              }
            ],
            "range": [
              4911,
              4933
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 184
              },
              "start": {
                "column": 7,
                "line": 184
              }
            }
          },
          {
            "type": "TemplateLiteral",
            "expressions": [
              {
                "type": "TSAsExpression",
                "expression": {
                  "type": "Literal",
                  "raw": "'2'",
                  "value": "2",
                  "range": [
                    4940,
                    4943
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 184
                    },
                    "start": {
                      "column": 36,
                      "line": 184
                    }
                  }
                },
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "range": [
                    4947,
                    4953
                  ],
                  "loc": {
                    "end": {
                      "column": 49,
                      "line": 184
                    },
                    "start": {
                      "column": 43,
                      "line": 184
                    }
                  }
                },
                "range": [
                  4940,
                  4953
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 184
                  },
                  "start": {
                    "column": 36,
                    "line": 184
                  }
                }
              }
            ],
            "quasis": [
              {
                "type": "TemplateElement",
                "tail": false,
                "value": {
                  "cooked": "1.",
                  "raw": "1."
                },
                "range": [
                  4935,
                  4940
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 184
                  },
                  "start": {
                    "column": 31,
                    "line": 184
                  }
                }
              },
              {
                "type": "TemplateElement",
                "tail": true,
                "value": {
                  "cooked": ".4",
                  "raw": ".4"
                },
                "range": [
                  4953,
                  4957
                ],
                "loc": {
                  "end": {
                    "column": 53,
                    "line": 184
                  },
                  "start": {
                    "column": 49,
                    "line": 184
                  }
                }
              }
            ],
            "range": [
              4935,
              4957
            ],
            "loc": {
              "end": {
                "column": 53,
                "line": 184
              },
              "start": {
                "column": 31,
                "line": 184
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "spread",
          "optional": false,
          "range": [
            4904,
            4910
          ],
          "loc": {
            "end": {
              "column": 6,
              "line": 184
            },
            "start": {
              "column": 0,
              "line": 184
            }
          }
        },
        "optional": false,
        "range": [
          4904,
          4958
        ],
        "loc": {
          "end": {
            "column": 54,
            "line": 184
          },
          "start": {
            "column": 0,
            "line": 184
          }
        }
      },
      "range": [
        4904,
        4959
      ],
      "loc": {
        "end": {
          "column": 55,
          "line": 184
        },
        "start": {
          "column": 0,
          "line": 184
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
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "TemplateLiteral",
                  "expressions": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "t",
                      "optional": false,
                      "range": [
                        5087,
                        5088
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 187
                        },
                        "start": {
                          "column": 16,
                          "line": 187
                        }
                      }
                    }
                  ],
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "tail": false,
                      "value": {
                        "cooked": "1.",
                        "raw": "1."
                      },
                      "range": [
                        5082,
                        5087
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 187
                        },
                        "start": {
                          "column": 11,
                          "line": 187
                        }
                      }
                    },
                    {
                      "type": "TemplateElement",
                      "tail": true,
                      "value": {
                        "cooked": ".3",
                        "raw": ".3"
                      },
                      "range": [
                        5088,
                        5092
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 187
                        },
                        "start": {
                          "column": 17,
                          "line": 187
                        }
                      }
                    }
                  ],
                  "range": [
                    5082,
                    5092
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 187
                    },
                    "start": {
                      "column": 11,
                      "line": 187
                    }
                  }
                },
                {
                  "type": "TemplateLiteral",
                  "expressions": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "t",
                      "optional": false,
                      "range": [
                        5099,
                        5100
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 187
                        },
                        "start": {
                          "column": 28,
                          "line": 187
                        }
                      }
                    }
                  ],
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "tail": false,
                      "value": {
                        "cooked": "1.",
                        "raw": "1."
                      },
                      "range": [
                        5094,
                        5099
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 187
                        },
                        "start": {
                          "column": 23,
                          "line": 187
                        }
                      }
                    },
                    {
                      "type": "TemplateElement",
                      "tail": true,
                      "value": {
                        "cooked": ".4",
                        "raw": ".4"
                      },
                      "range": [
                        5100,
                        5104
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 187
                        },
                        "start": {
                          "column": 29,
                          "line": 187
                        }
                      }
                    }
                  ],
                  "range": [
                    5094,
                    5104
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 187
                    },
                    "start": {
                      "column": 23,
                      "line": 187
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "spread",
                "optional": false,
                "range": [
                  5075,
                  5081
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 187
                  },
                  "start": {
                    "column": 4,
                    "line": 187
                  }
                }
              },
              "optional": false,
              "range": [
                5075,
                5105
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 187
                },
                "start": {
                  "column": 4,
                  "line": 187
                }
              }
            },
            "range": [
              5075,
              5106
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 187
              },
              "start": {
                "column": 4,
                "line": 187
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "TemplateLiteral",
                  "expressions": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "u",
                      "optional": false,
                      "range": [
                        5123,
                        5124
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 188
                        },
                        "start": {
                          "column": 16,
                          "line": 188
                        }
                      }
                    }
                  ],
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "tail": false,
                      "value": {
                        "cooked": "1.",
                        "raw": "1."
                      },
                      "range": [
                        5118,
                        5123
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 188
                        },
                        "start": {
                          "column": 11,
                          "line": 188
                        }
                      }
                    },
                    {
                      "type": "TemplateElement",
                      "tail": true,
                      "value": {
                        "cooked": ".3",
                        "raw": ".3"
                      },
                      "range": [
                        5124,
                        5128
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 188
                        },
                        "start": {
                          "column": 17,
                          "line": 188
                        }
                      }
                    }
                  ],
                  "range": [
                    5118,
                    5128
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 188
                    },
                    "start": {
                      "column": 11,
                      "line": 188
                    }
                  }
                },
                {
                  "type": "TemplateLiteral",
                  "expressions": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "u",
                      "optional": false,
                      "range": [
                        5135,
                        5136
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 188
                        },
                        "start": {
                          "column": 28,
                          "line": 188
                        }
                      }
                    }
                  ],
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "tail": false,
                      "value": {
                        "cooked": "1.",
                        "raw": "1."
                      },
                      "range": [
                        5130,
                        5135
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 188
                        },
                        "start": {
                          "column": 23,
                          "line": 188
                        }
                      }
                    },
                    {
                      "type": "TemplateElement",
                      "tail": true,
                      "value": {
                        "cooked": ".4",
                        "raw": ".4"
                      },
                      "range": [
                        5136,
                        5140
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 188
                        },
                        "start": {
                          "column": 29,
                          "line": 188
                        }
                      }
                    }
                  ],
                  "range": [
                    5130,
                    5140
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 188
                    },
                    "start": {
                      "column": 23,
                      "line": 188
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "spread",
                "optional": false,
                "range": [
                  5111,
                  5117
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 188
                  },
                  "start": {
                    "column": 4,
                    "line": 188
                  }
                }
              },
              "optional": false,
              "range": [
                5111,
                5141
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 188
                },
                "start": {
                  "column": 4,
                  "line": 188
                }
              }
            },
            "range": [
              5111,
              5142
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 188
              },
              "start": {
                "column": 4,
                "line": 188
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "u1",
                  "optional": false,
                  "range": [
                    5154,
                    5156
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 189
                    },
                    "start": {
                      "column": 11,
                      "line": 189
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "u2",
                  "optional": false,
                  "range": [
                    5158,
                    5160
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 189
                    },
                    "start": {
                      "column": 15,
                      "line": 189
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "spread",
                "optional": false,
                "range": [
                  5147,
                  5153
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 189
                  },
                  "start": {
                    "column": 4,
                    "line": 189
                  }
                }
              },
              "optional": false,
              "range": [
                5147,
                5161
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 189
                },
                "start": {
                  "column": 4,
                  "line": 189
                }
              }
            },
            "range": [
              5147,
              5162
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 189
              },
              "start": {
                "column": 4,
                "line": 189
              }
            }
          }
        ],
        "range": [
          5069,
          5164
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 190
          },
          "start": {
            "column": 108,
            "line": 186
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ft1",
        "optional": false,
        "range": [
          4970,
          4973
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 186
          },
          "start": {
            "column": 9,
            "line": 186
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 35,
                "line": 186
              },
              "start": {
                "column": 32,
                "line": 186
              }
            },
            "range": [
              4993,
              4996
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  4995,
                  4996
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 186
                  },
                  "start": {
                    "column": 34,
                    "line": 186
                  }
                }
              },
              "range": [
                4995,
                4996
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 186
                },
                "start": {
                  "column": 34,
                  "line": 186
                }
              }
            }
          },
          "range": [
            4992,
            4996
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 186
            },
            "start": {
              "column": 31,
              "line": 186
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "u",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 52,
                "line": 186
              },
              "start": {
                "column": 38,
                "line": 186
              }
            },
            "range": [
              4999,
              5013
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  5010,
                  5013
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "range": [
                        5011,
                        5012
                      ],
                      "loc": {
                        "end": {
                          "column": 51,
                          "line": 186
                        },
                        "start": {
                          "column": 50,
                          "line": 186
                        }
                      }
                    },
                    "range": [
                      5011,
                      5012
                    ],
                    "loc": {
                      "end": {
                        "column": 51,
                        "line": 186
                      },
                      "start": {
                        "column": 50,
                        "line": 186
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 52,
                    "line": 186
                  },
                  "start": {
                    "column": 49,
                    "line": 186
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Uppercase",
                "optional": false,
                "range": [
                  5001,
                  5010
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 186
                  },
                  "start": {
                    "column": 40,
                    "line": 186
                  }
                }
              },
              "range": [
                5001,
                5013
              ],
              "loc": {
                "end": {
                  "column": 52,
                  "line": 186
                },
                "start": {
                  "column": 40,
                  "line": 186
                }
              }
            }
          },
          "range": [
            4998,
            5013
          ],
          "loc": {
            "end": {
              "column": 52,
              "line": 186
            },
            "start": {
              "column": 37,
              "line": 186
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "u1",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 79,
                "line": 186
              },
              "start": {
                "column": 56,
                "line": 186
              }
            },
            "range": [
              5017,
              5040
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  5028,
                  5040
                ],
                "params": [
                  {
                    "type": "TSTemplateLiteralType",
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "tail": false,
                        "value": {
                          "cooked": "1.",
                          "raw": "1."
                        },
                        "range": [
                          5029,
                          5034
                        ],
                        "loc": {
                          "end": {
                            "column": 73,
                            "line": 186
                          },
                          "start": {
                            "column": 68,
                            "line": 186
                          }
                        }
                      },
                      {
                        "type": "TemplateElement",
                        "tail": true,
                        "value": {
                          "cooked": ".3",
                          "raw": ".3"
                        },
                        "range": [
                          5035,
                          5039
                        ],
                        "loc": {
                          "end": {
                            "column": 78,
                            "line": 186
                          },
                          "start": {
                            "column": 74,
                            "line": 186
                          }
                        }
                      }
                    ],
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "range": [
                            5034,
                            5035
                          ],
                          "loc": {
                            "end": {
                              "column": 74,
                              "line": 186
                            },
                            "start": {
                              "column": 73,
                              "line": 186
                            }
                          }
                        },
                        "range": [
                          5034,
                          5035
                        ],
                        "loc": {
                          "end": {
                            "column": 74,
                            "line": 186
                          },
                          "start": {
                            "column": 73,
                            "line": 186
                          }
                        }
                      }
                    ],
                    "range": [
                      5029,
                      5039
                    ],
                    "loc": {
                      "end": {
                        "column": 78,
                        "line": 186
                      },
                      "start": {
                        "column": 68,
                        "line": 186
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 79,
                    "line": 186
                  },
                  "start": {
                    "column": 67,
                    "line": 186
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Uppercase",
                "optional": false,
                "range": [
                  5019,
                  5028
                ],
                "loc": {
                  "end": {
                    "column": 67,
                    "line": 186
                  },
                  "start": {
                    "column": 58,
                    "line": 186
                  }
                }
              },
              "range": [
                5019,
                5040
              ],
              "loc": {
                "end": {
                  "column": 79,
                  "line": 186
                },
                "start": {
                  "column": 58,
                  "line": 186
                }
              }
            }
          },
          "range": [
            5015,
            5040
          ],
          "loc": {
            "end": {
              "column": 79,
              "line": 186
            },
            "start": {
              "column": 54,
              "line": 186
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "u2",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 106,
                "line": 186
              },
              "start": {
                "column": 83,
                "line": 186
              }
            },
            "range": [
              5044,
              5067
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  5055,
                  5067
                ],
                "params": [
                  {
                    "type": "TSTemplateLiteralType",
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "tail": false,
                        "value": {
                          "cooked": "1.",
                          "raw": "1."
                        },
                        "range": [
                          5056,
                          5061
                        ],
                        "loc": {
                          "end": {
                            "column": 100,
                            "line": 186
                          },
                          "start": {
                            "column": 95,
                            "line": 186
                          }
                        }
                      },
                      {
                        "type": "TemplateElement",
                        "tail": true,
                        "value": {
                          "cooked": ".4",
                          "raw": ".4"
                        },
                        "range": [
                          5062,
                          5066
                        ],
                        "loc": {
                          "end": {
                            "column": 105,
                            "line": 186
                          },
                          "start": {
                            "column": 101,
                            "line": 186
                          }
                        }
                      }
                    ],
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "range": [
                            5061,
                            5062
                          ],
                          "loc": {
                            "end": {
                              "column": 101,
                              "line": 186
                            },
                            "start": {
                              "column": 100,
                              "line": 186
                            }
                          }
                        },
                        "range": [
                          5061,
                          5062
                        ],
                        "loc": {
                          "end": {
                            "column": 101,
                            "line": 186
                          },
                          "start": {
                            "column": 100,
                            "line": 186
                          }
                        }
                      }
                    ],
                    "range": [
                      5056,
                      5066
                    ],
                    "loc": {
                      "end": {
                        "column": 105,
                        "line": 186
                      },
                      "start": {
                        "column": 95,
                        "line": 186
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 106,
                    "line": 186
                  },
                  "start": {
                    "column": 94,
                    "line": 186
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Uppercase",
                "optional": false,
                "range": [
                  5046,
                  5055
                ],
                "loc": {
                  "end": {
                    "column": 94,
                    "line": 186
                  },
                  "start": {
                    "column": 85,
                    "line": 186
                  }
                }
              },
              "range": [
                5046,
                5067
              ],
              "loc": {
                "end": {
                  "column": 106,
                  "line": 186
                },
                "start": {
                  "column": 85,
                  "line": 186
                }
              }
            }
          },
          "range": [
            5042,
            5067
          ],
          "loc": {
            "end": {
              "column": 106,
              "line": 186
            },
            "start": {
              "column": 81,
              "line": 186
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 30,
            "line": 186
          },
          "start": {
            "column": 12,
            "line": 186
          }
        },
        "range": [
          4973,
          4991
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "range": [
                4984,
                4990
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 186
                },
                "start": {
                  "column": 23,
                  "line": 186
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                4974,
                4975
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 186
                },
                "start": {
                  "column": 13,
                  "line": 186
                }
              }
            },
            "out": false,
            "range": [
              4974,
              4990
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 186
              },
              "start": {
                "column": 13,
                "line": 186
              }
            }
          }
        ]
      },
      "range": [
        4961,
        5164
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 190
        },
        "start": {
          "column": 0,
          "line": 186
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Boom",
        "optional": false,
        "range": [
          5193,
          5197
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 194
          },
          "start": {
            "column": 5,
            "line": 194
          }
        }
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "raw": "'abc'",
              "value": "abc",
              "range": [
                5200,
                5205
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 194
                },
                "start": {
                  "column": 12,
                  "line": 194
                }
              }
            },
            "range": [
              5200,
              5205
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 194
              },
              "start": {
                "column": 12,
                "line": 194
              }
            }
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "raw": "'def'",
              "value": "def",
              "range": [
                5208,
                5213
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 194
                },
                "start": {
                  "column": 20,
                  "line": 194
                }
              }
            },
            "range": [
              5208,
              5213
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 194
              },
              "start": {
                "column": 20,
                "line": 194
              }
            }
          },
          {
            "type": "TSTemplateLiteralType",
            "quasis": [
              {
                "type": "TemplateElement",
                "tail": false,
                "value": {
                  "cooked": "a",
                  "raw": "a"
                },
                "range": [
                  5216,
                  5220
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 194
                  },
                  "start": {
                    "column": 28,
                    "line": 194
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
                  5226,
                  5228
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 194
                  },
                  "start": {
                    "column": 38,
                    "line": 194
                  }
                }
              }
            ],
            "types": [
              {
                "type": "TSStringKeyword",
                "range": [
                  5220,
                  5226
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 194
                  },
                  "start": {
                    "column": 32,
                    "line": 194
                  }
                }
              }
            ],
            "range": [
              5216,
              5228
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 194
              },
              "start": {
                "column": 28,
                "line": 194
              }
            }
          },
          {
            "type": "TSTypeReference",
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                5240,
                5248
              ],
              "params": [
                {
                  "type": "TSStringKeyword",
                  "range": [
                    5241,
                    5247
                  ],
                  "loc": {
                    "end": {
                      "column": 59,
                      "line": 194
                    },
                    "start": {
                      "column": 53,
                      "line": 194
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 60,
                  "line": 194
                },
                "start": {
                  "column": 52,
                  "line": 194
                }
              }
            },
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Lowercase",
              "optional": false,
              "range": [
                5231,
                5240
              ],
              "loc": {
                "end": {
                  "column": 52,
                  "line": 194
                },
                "start": {
                  "column": 43,
                  "line": 194
                }
              }
            },
            "range": [
              5231,
              5248
            ],
            "loc": {
              "end": {
                "column": 60,
                "line": 194
              },
              "start": {
                "column": 43,
                "line": 194
              }
            }
          }
        ],
        "range": [
          5200,
          5248
        ],
        "loc": {
          "end": {
            "column": 60,
            "line": 194
          },
          "start": {
            "column": 12,
            "line": 194
          }
        }
      },
      "range": [
        5188,
        5249
      ],
      "loc": {
        "end": {
          "column": 61,
          "line": 194
        },
        "start": {
          "column": 0,
          "line": 194
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
                        "column": 52,
                        "line": 199
                      },
                      "start": {
                        "column": 9,
                        "line": 199
                      }
                    },
                    "range": [
                      5321,
                      5364
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSIntersectionType",
                          "types": [
                            {
                              "type": "TSTypeOperator",
                              "operator": "keyof",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "range": [
                                    5329,
                                    5330
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 18,
                                      "line": 199
                                    },
                                    "start": {
                                      "column": 17,
                                      "line": 199
                                    }
                                  }
                                },
                                "range": [
                                  5329,
                                  5330
                                ],
                                "loc": {
                                  "end": {
                                    "column": 18,
                                    "line": 199
                                  },
                                  "start": {
                                    "column": 17,
                                    "line": 199
                                  }
                                }
                              },
                              "range": [
                                5323,
                                5330
                              ],
                              "loc": {
                                "end": {
                                  "column": 18,
                                  "line": 199
                                },
                                "start": {
                                  "column": 11,
                                  "line": 199
                                }
                              }
                            },
                            {
                              "type": "TSStringKeyword",
                              "range": [
                                5333,
                                5339
                              ],
                              "loc": {
                                "end": {
                                  "column": 27,
                                  "line": 199
                                },
                                "start": {
                                  "column": 21,
                                  "line": 199
                                }
                              }
                            }
                          ],
                          "range": [
                            5323,
                            5339
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 199
                            },
                            "start": {
                              "column": 11,
                              "line": 199
                            }
                          }
                        },
                        {
                          "type": "TSTemplateLiteralType",
                          "quasis": [
                            {
                              "type": "TemplateElement",
                              "tail": false,
                              "value": {
                                "cooked": "-",
                                "raw": "-"
                              },
                              "range": [
                                5342,
                                5346
                              ],
                              "loc": {
                                "end": {
                                  "column": 34,
                                  "line": 199
                                },
                                "start": {
                                  "column": 30,
                                  "line": 199
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
                                5362,
                                5364
                              ],
                              "loc": {
                                "end": {
                                  "column": 52,
                                  "line": 199
                                },
                                "start": {
                                  "column": 50,
                                  "line": 199
                                }
                              }
                            }
                          ],
                          "types": [
                            {
                              "type": "TSIntersectionType",
                              "types": [
                                {
                                  "type": "TSTypeOperator",
                                  "operator": "keyof",
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "T",
                                      "optional": false,
                                      "range": [
                                        5352,
                                        5353
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 41,
                                          "line": 199
                                        },
                                        "start": {
                                          "column": 40,
                                          "line": 199
                                        }
                                      }
                                    },
                                    "range": [
                                      5352,
                                      5353
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 41,
                                        "line": 199
                                      },
                                      "start": {
                                        "column": 40,
                                        "line": 199
                                      }
                                    }
                                  },
                                  "range": [
                                    5346,
                                    5353
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 41,
                                      "line": 199
                                    },
                                    "start": {
                                      "column": 34,
                                      "line": 199
                                    }
                                  }
                                },
                                {
                                  "type": "TSStringKeyword",
                                  "range": [
                                    5356,
                                    5362
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 50,
                                      "line": 199
                                    },
                                    "start": {
                                      "column": 44,
                                      "line": 199
                                    }
                                  }
                                }
                              ],
                              "range": [
                                5346,
                                5362
                              ],
                              "loc": {
                                "end": {
                                  "column": 50,
                                  "line": 199
                                },
                                "start": {
                                  "column": 34,
                                  "line": 199
                                }
                              }
                            }
                          ],
                          "range": [
                            5342,
                            5364
                          ],
                          "loc": {
                            "end": {
                              "column": 52,
                              "line": 199
                            },
                            "start": {
                              "column": 30,
                              "line": 199
                            }
                          }
                        }
                      ],
                      "range": [
                        5323,
                        5364
                      ],
                      "loc": {
                        "end": {
                          "column": 52,
                          "line": 199
                        },
                        "start": {
                          "column": 11,
                          "line": 199
                        }
                      }
                    }
                  },
                  "range": [
                    5320,
                    5364
                  ],
                  "loc": {
                    "end": {
                      "column": 52,
                      "line": 199
                    },
                    "start": {
                      "column": 8,
                      "line": 199
                    }
                  }
                },
                "init": null,
                "range": [
                  5320,
                  5364
                ],
                "loc": {
                  "end": {
                    "column": 52,
                    "line": 199
                  },
                  "start": {
                    "column": 8,
                    "line": 199
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              5316,
              5365
            ],
            "loc": {
              "end": {
                "column": 53,
                "line": 199
              },
              "start": {
                "column": 4,
                "line": 199
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  5370,
                  5371
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 200
                  },
                  "start": {
                    "column": 4,
                    "line": 200
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "\"id\"",
                "value": "id",
                "range": [
                  5374,
                  5378
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 200
                  },
                  "start": {
                    "column": 8,
                    "line": 200
                  }
                }
              },
              "range": [
                5370,
                5378
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 200
                },
                "start": {
                  "column": 4,
                  "line": 200
                }
              }
            },
            "range": [
              5370,
              5379
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 200
              },
              "start": {
                "column": 4,
                "line": 200
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  5384,
                  5385
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 201
                  },
                  "start": {
                    "column": 4,
                    "line": 201
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "\"-id\"",
                "value": "-id",
                "range": [
                  5388,
                  5393
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 201
                  },
                  "start": {
                    "column": 8,
                    "line": 201
                  }
                }
              },
              "range": [
                5384,
                5393
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 201
                },
                "start": {
                  "column": 4,
                  "line": 201
                }
              }
            },
            "range": [
              5384,
              5394
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 201
              },
              "start": {
                "column": 4,
                "line": 201
              }
            }
          }
        ],
        "range": [
          5310,
          5396
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 202
          },
          "start": {
            "column": 37,
            "line": 198
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "a",
        "optional": false,
        "range": [
          5282,
          5283
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 198
          },
          "start": {
            "column": 9,
            "line": 198
          }
        }
      },
      "params": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 34,
            "line": 198
          },
          "start": {
            "column": 10,
            "line": 198
          }
        },
        "range": [
          5283,
          5307
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "id",
                    "optional": false,
                    "range": [
                      5295,
                      5297
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 198
                      },
                      "start": {
                        "column": 22,
                        "line": 198
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
                        "column": 32,
                        "line": 198
                      },
                      "start": {
                        "column": 24,
                        "line": 198
                      }
                    },
                    "range": [
                      5297,
                      5305
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        5299,
                        5305
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 198
                        },
                        "start": {
                          "column": 26,
                          "line": 198
                        }
                      }
                    }
                  },
                  "range": [
                    5295,
                    5305
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 198
                    },
                    "start": {
                      "column": 22,
                      "line": 198
                    }
                  }
                }
              ],
              "range": [
                5294,
                5306
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 198
                },
                "start": {
                  "column": 21,
                  "line": 198
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                5284,
                5285
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 198
                },
                "start": {
                  "column": 11,
                  "line": 198
                }
              }
            },
            "out": false,
            "range": [
              5284,
              5306
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 198
              },
              "start": {
                "column": 11,
                "line": 198
              }
            }
          }
        ]
      },
      "range": [
        5273,
        5396
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 202
        },
        "start": {
          "column": 0,
          "line": 198
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 203
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
