__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    440
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Path",
        "optional": false,
        "range": [
          5,
          9
        ],
        "loc": {
          "end": {
            "column": 9,
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
            "type": "TSStringKeyword",
            "range": [
              12,
              18
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 1
              },
              "start": {
                "column": 12,
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
                  "name": "_pathBrand",
                  "optional": false,
                  "range": [
                    23,
                    33
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 1
                    },
                    "start": {
                      "column": 23,
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
                      "line": 1
                    },
                    "start": {
                      "column": 33,
                      "line": 1
                    }
                  },
                  "range": [
                    33,
                    38
                  ],
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "range": [
                      35,
                      38
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 1
                      },
                      "start": {
                        "column": 35,
                        "line": 1
                      }
                    }
                  }
                },
                "range": [
                  23,
                  38
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 1
                  },
                  "start": {
                    "column": 23,
                    "line": 1
                  }
                }
              }
            ],
            "range": [
              21,
              40
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 1
              },
              "start": {
                "column": 21,
                "line": 1
              }
            }
          }
        ],
        "range": [
          12,
          40
        ],
        "loc": {
          "end": {
            "column": 40,
            "line": 1
          },
          "start": {
            "column": 12,
            "line": 1
          }
        }
      },
      "range": [
        0,
        41
      ],
      "loc": {
        "end": {
          "column": 41,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "JoinedPath",
        "optional": false,
        "range": [
          48,
          58
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 3
          },
          "start": {
            "column": 5,
            "line": 3
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
              61,
              64
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 3
              },
              "start": {
                "column": 18,
                "line": 3
              }
            }
          },
          {
            "type": "TemplateElement",
            "tail": false,
            "value": {
              "cooked": "/",
              "raw": "/"
            },
            "range": [
              68,
              72
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
              "cooked": "",
              "raw": ""
            },
            "range": [
              76,
              78
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 3
              },
              "start": {
                "column": 33,
                "line": 3
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
              "name": "Path",
              "optional": false,
              "range": [
                64,
                68
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 3
                },
                "start": {
                  "column": 21,
                  "line": 3
                }
              }
            },
            "range": [
              64,
              68
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 3
              },
              "start": {
                "column": 21,
                "line": 3
              }
            }
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Path",
              "optional": false,
              "range": [
                72,
                76
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 3
                },
                "start": {
                  "column": 29,
                  "line": 3
                }
              }
            },
            "range": [
              72,
              76
            ],
            "loc": {
              "end": {
                "column": 33,
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
          61,
          78
        ],
        "loc": {
          "end": {
            "column": 35,
            "line": 3
          },
          "start": {
            "column": 18,
            "line": 3
          }
        }
      },
      "range": [
        43,
        79
      ],
      "loc": {
        "end": {
          "column": 36,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 3
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
        "name": "joinedPath",
        "optional": false,
        "range": [
          98,
          108
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 5
          },
          "start": {
            "column": 17,
            "line": 5
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "p",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 41,
                "line": 5
              },
              "start": {
                "column": 29,
                "line": 5
              }
            },
            "range": [
              110,
              122
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "JoinedPath",
                "optional": false,
                "range": [
                  112,
                  122
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 5
                  },
                  "start": {
                    "column": 31,
                    "line": 5
                  }
                }
              },
              "range": [
                112,
                122
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 5
                },
                "start": {
                  "column": 31,
                  "line": 5
                }
              }
            }
          },
          "range": [
            109,
            122
          ],
          "loc": {
            "end": {
              "column": 41,
              "line": 5
            },
            "start": {
              "column": 28,
              "line": 5
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 48,
            "line": 5
          },
          "start": {
            "column": 42,
            "line": 5
          }
        },
        "range": [
          123,
          129
        ],
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "range": [
            125,
            129
          ],
          "loc": {
            "end": {
              "column": 48,
              "line": 5
            },
            "start": {
              "column": 44,
              "line": 5
            }
          }
        }
      },
      "range": [
        81,
        130
      ],
      "loc": {
        "end": {
          "column": 49,
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
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "\"foo/bar\"",
            "value": "foo/bar",
            "range": [
              143,
              152
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 7
              },
              "start": {
                "column": 11,
                "line": 7
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "joinedPath",
          "optional": false,
          "range": [
            132,
            142
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 7
            },
            "start": {
              "column": 0,
              "line": 7
            }
          }
        },
        "optional": false,
        "range": [
          132,
          153
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 7
          },
          "start": {
            "column": 0,
            "line": 7
          }
        }
      },
      "range": [
        132,
        154
      ],
      "loc": {
        "end": {
          "column": 22,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 7
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
            "name": "somePath",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 28,
                  "line": 9
                },
                "start": {
                  "column": 22,
                  "line": 9
                }
              },
              "range": [
                178,
                184
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Path",
                  "optional": false,
                  "range": [
                    180,
                    184
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 9
                    },
                    "start": {
                      "column": 24,
                      "line": 9
                    }
                  }
                },
                "range": [
                  180,
                  184
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 9
                  },
                  "start": {
                    "column": 24,
                    "line": 9
                  }
                }
              }
            },
            "range": [
              170,
              184
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 9
              },
              "start": {
                "column": 14,
                "line": 9
              }
            }
          },
          "init": null,
          "range": [
            170,
            184
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 9
            },
            "start": {
              "column": 14,
              "line": 9
            }
          }
        }
      ],
      "declare": true,
      "kind": "const",
      "range": [
        156,
        185
      ],
      "loc": {
        "end": {
          "column": 29,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 9
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
                "name": "somePath",
                "optional": false,
                "range": [
                  201,
                  209
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 11
                  },
                  "start": {
                    "column": 14,
                    "line": 11
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "somePath",
                "optional": false,
                "range": [
                  213,
                  221
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 11
                  },
                  "start": {
                    "column": 26,
                    "line": 11
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
                  198,
                  201
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 11
                  },
                  "start": {
                    "column": 11,
                    "line": 11
                  }
                }
              },
              {
                "type": "TemplateElement",
                "tail": false,
                "value": {
                  "cooked": "/",
                  "raw": "/"
                },
                "range": [
                  209,
                  213
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 11
                  },
                  "start": {
                    "column": 22,
                    "line": 11
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
                  221,
                  223
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 11
                  },
                  "start": {
                    "column": 34,
                    "line": 11
                  }
                }
              }
            ],
            "range": [
              198,
              223
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 11
              },
              "start": {
                "column": 11,
                "line": 11
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "joinedPath",
          "optional": false,
          "range": [
            187,
            197
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 11
            },
            "start": {
              "column": 0,
              "line": 11
            }
          }
        },
        "optional": false,
        "range": [
          187,
          224
        ],
        "loc": {
          "end": {
            "column": 37,
            "line": 11
          },
          "start": {
            "column": 0,
            "line": 11
          }
        }
      },
      "range": [
        187,
        225
      ],
      "loc": {
        "end": {
          "column": 38,
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
        "name": "StartsWithA",
        "optional": false,
        "range": [
          233,
          244
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 14
          },
          "start": {
            "column": 5,
            "line": 14
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
              "cooked": "a",
              "raw": "a"
            },
            "range": [
              247,
              251
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 14
              },
              "start": {
                "column": 19,
                "line": 14
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
              257,
              259
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 14
              },
              "start": {
                "column": 29,
                "line": 14
              }
            }
          }
        ],
        "types": [
          {
            "type": "TSStringKeyword",
            "range": [
              251,
              257
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 14
              },
              "start": {
                "column": 23,
                "line": 14
              }
            }
          }
        ],
        "range": [
          247,
          259
        ],
        "loc": {
          "end": {
            "column": 31,
            "line": 14
          },
          "start": {
            "column": 19,
            "line": 14
          }
        }
      },
      "range": [
        228,
        260
      ],
      "loc": {
        "end": {
          "column": 32,
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
        "name": "EndsWithA",
        "optional": false,
        "range": [
          266,
          275
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 15
          },
          "start": {
            "column": 5,
            "line": 15
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
              278,
              281
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 15
              },
              "start": {
                "column": 17,
                "line": 15
              }
            }
          },
          {
            "type": "TemplateElement",
            "tail": true,
            "value": {
              "cooked": "a",
              "raw": "a"
            },
            "range": [
              287,
              290
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 15
              },
              "start": {
                "column": 26,
                "line": 15
              }
            }
          }
        ],
        "types": [
          {
            "type": "TSStringKeyword",
            "range": [
              281,
              287
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 15
              },
              "start": {
                "column": 20,
                "line": 15
              }
            }
          }
        ],
        "range": [
          278,
          290
        ],
        "loc": {
          "end": {
            "column": 29,
            "line": 15
          },
          "start": {
            "column": 17,
            "line": 15
          }
        }
      },
      "range": [
        261,
        291
      ],
      "loc": {
        "end": {
          "column": 30,
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
        "name": "withinAs",
        "optional": false,
        "range": [
          311,
          319
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 18
          },
          "start": {
            "column": 17,
            "line": 18
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "p",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 52,
                "line": 18
              },
              "start": {
                "column": 27,
                "line": 18
              }
            },
            "range": [
              321,
              346
            ],
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "StartsWithA",
                    "optional": false,
                    "range": [
                      323,
                      334
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 18
                      },
                      "start": {
                        "column": 29,
                        "line": 18
                      }
                    }
                  },
                  "range": [
                    323,
                    334
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 18
                    },
                    "start": {
                      "column": 29,
                      "line": 18
                    }
                  }
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "EndsWithA",
                    "optional": false,
                    "range": [
                      337,
                      346
                    ],
                    "loc": {
                      "end": {
                        "column": 52,
                        "line": 18
                      },
                      "start": {
                        "column": 43,
                        "line": 18
                      }
                    }
                  },
                  "range": [
                    337,
                    346
                  ],
                  "loc": {
                    "end": {
                      "column": 52,
                      "line": 18
                    },
                    "start": {
                      "column": 43,
                      "line": 18
                    }
                  }
                }
              ],
              "range": [
                323,
                346
              ],
              "loc": {
                "end": {
                  "column": 52,
                  "line": 18
                },
                "start": {
                  "column": 29,
                  "line": 18
                }
              }
            }
          },
          "range": [
            320,
            346
          ],
          "loc": {
            "end": {
              "column": 52,
              "line": 18
            },
            "start": {
              "column": 26,
              "line": 18
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 59,
            "line": 18
          },
          "start": {
            "column": 53,
            "line": 18
          }
        },
        "range": [
          347,
          353
        ],
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "range": [
            349,
            353
          ],
          "loc": {
            "end": {
              "column": 59,
              "line": 18
            },
            "start": {
              "column": 55,
              "line": 18
            }
          }
        }
      },
      "range": [
        294,
        354
      ],
      "loc": {
        "end": {
          "column": 60,
          "line": 18
        },
        "start": {
          "column": 0,
          "line": 18
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
            "raw": "\"\"",
            "value": "",
            "range": [
              365,
              367
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 20
              },
              "start": {
                "column": 9,
                "line": 20
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "withinAs",
          "optional": false,
          "range": [
            356,
            364
          ],
          "loc": {
            "end": {
              "column": 8,
              "line": 20
            },
            "start": {
              "column": 0,
              "line": 20
            }
          }
        },
        "optional": false,
        "range": [
          356,
          368
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 20
          },
          "start": {
            "column": 0,
            "line": 20
          }
        }
      },
      "range": [
        356,
        369
      ],
      "loc": {
        "end": {
          "column": 13,
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
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "\"a\"",
            "value": "a",
            "range": [
              379,
              382
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 21
              },
              "start": {
                "column": 9,
                "line": 21
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "withinAs",
          "optional": false,
          "range": [
            370,
            378
          ],
          "loc": {
            "end": {
              "column": 8,
              "line": 21
            },
            "start": {
              "column": 0,
              "line": 21
            }
          }
        },
        "optional": false,
        "range": [
          370,
          383
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 21
          },
          "start": {
            "column": 0,
            "line": 21
          }
        }
      },
      "range": [
        370,
        384
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
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "\"ab\"",
            "value": "ab",
            "range": [
              394,
              398
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 22
              },
              "start": {
                "column": 9,
                "line": 22
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "withinAs",
          "optional": false,
          "range": [
            385,
            393
          ],
          "loc": {
            "end": {
              "column": 8,
              "line": 22
            },
            "start": {
              "column": 0,
              "line": 22
            }
          }
        },
        "optional": false,
        "range": [
          385,
          399
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 22
          },
          "start": {
            "column": 0,
            "line": 22
          }
        }
      },
      "range": [
        385,
        400
      ],
      "loc": {
        "end": {
          "column": 15,
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
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "\"aba\"",
            "value": "aba",
            "range": [
              410,
              415
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 23
              },
              "start": {
                "column": 9,
                "line": 23
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "withinAs",
          "optional": false,
          "range": [
            401,
            409
          ],
          "loc": {
            "end": {
              "column": 8,
              "line": 23
            },
            "start": {
              "column": 0,
              "line": 23
            }
          }
        },
        "optional": false,
        "range": [
          401,
          416
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 23
          },
          "start": {
            "column": 0,
            "line": 23
          }
        }
      },
      "range": [
        401,
        417
      ],
      "loc": {
        "end": {
          "column": 16,
          "line": 23
        },
        "start": {
          "column": 0,
          "line": 23
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
            "raw": "\"abavvvva\"",
            "value": "abavvvva",
            "range": [
              427,
              437
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 24
              },
              "start": {
                "column": 9,
                "line": 24
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "withinAs",
          "optional": false,
          "range": [
            418,
            426
          ],
          "loc": {
            "end": {
              "column": 8,
              "line": 24
            },
            "start": {
              "column": 0,
              "line": 24
            }
          }
        },
        "optional": false,
        "range": [
          418,
          438
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 24
          },
          "start": {
            "column": 0,
            "line": 24
          }
        }
      },
      "range": [
        418,
        439
      ],
      "loc": {
        "end": {
          "column": 21,
          "line": 24
        },
        "start": {
          "column": 0,
          "line": 24
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 25
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
