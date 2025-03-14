__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    412
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AttributeValue",
        "optional": false,
        "range": [
          5,
          19
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 1
          },
          "start": {
            "column": 5,
            "line": 1
          }
        }
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSNumberKeyword",
            "range": [
              22,
              28
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 1
              },
              "start": {
                "column": 22,
                "line": 1
              }
            }
          },
          {
            "type": "TSStringKeyword",
            "range": [
              31,
              37
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 1
              },
              "start": {
                "column": 31,
                "line": 1
              }
            }
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Date",
              "optional": false,
              "range": [
                40,
                44
              ],
              "loc": {
                "end": {
                  "column": 44,
                  "line": 1
                },
                "start": {
                  "column": 40,
                  "line": 1
                }
              }
            },
            "range": [
              40,
              44
            ],
            "loc": {
              "end": {
                "column": 44,
                "line": 1
              },
              "start": {
                "column": 40,
                "line": 1
              }
            }
          },
          {
            "type": "TSBooleanKeyword",
            "range": [
              47,
              54
            ],
            "loc": {
              "end": {
                "column": 54,
                "line": 1
              },
              "start": {
                "column": 47,
                "line": 1
              }
            }
          }
        ],
        "range": [
          22,
          54
        ],
        "loc": {
          "end": {
            "column": 54,
            "line": 1
          },
          "start": {
            "column": 22,
            "line": 1
          }
        }
      },
      "range": [
        0,
        55
      ],
      "loc": {
        "end": {
          "column": 55,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          77,
          115
        ],
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 3
                    },
                    "start": {
                      "column": 8,
                      "line": 3
                    }
                  },
                  "range": [
                    87,
                    95
                  ],
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "range": [
                      89,
                      95
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 3
                      },
                      "start": {
                        "column": 10,
                        "line": 3
                      }
                    }
                  }
                },
                "range": [
                  84,
                  95
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 3
                  },
                  "start": {
                    "column": 5,
                    "line": 3
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 33,
                  "line": 3
                },
                "start": {
                  "column": 17,
                  "line": 3
                }
              },
              "range": [
                96,
                112
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AttributeValue",
                  "optional": false,
                  "range": [
                    98,
                    112
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 3
                    },
                    "start": {
                      "column": 19,
                      "line": 3
                    }
                  }
                },
                "range": [
                  98,
                  112
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 3
                  },
                  "start": {
                    "column": 19,
                    "line": 3
                  }
                }
              }
            },
            "range": [
              83,
              113
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 3
              },
              "start": {
                "column": 4,
                "line": 3
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 4
          },
          "start": {
            "column": 21,
            "line": 2
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Attributes",
        "optional": false,
        "range": [
          66,
          76
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 2
          },
          "start": {
            "column": 10,
            "line": 2
          }
        }
      },
      "range": [
        56,
        115
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 2
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
              "type": "Identifier",
              "decorators": [],
              "name": "name",
              "optional": false,
              "range": [
                225,
                229
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
              218,
              230
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 6
              },
              "start": {
                "column": 4,
                "line": 6
              }
            }
          }
        ],
        "range": [
          212,
          232
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 7
          },
          "start": {
            "column": 96,
            "line": 5
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "createElement",
        "optional": false,
        "range": [
          125,
          138
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 5
          },
          "start": {
            "column": 9,
            "line": 5
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "name",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 35,
                "line": 5
              },
              "start": {
                "column": 27,
                "line": 5
              }
            },
            "range": [
              143,
              151
            ],
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "range": [
                145,
                151
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 5
                },
                "start": {
                  "column": 29,
                  "line": 5
                }
              }
            }
          },
          "range": [
            139,
            151
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 5
            },
            "start": {
              "column": 23,
              "line": 5
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "attributes",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 71,
                "line": 5
              },
              "start": {
                "column": 47,
                "line": 5
              }
            },
            "range": [
              163,
              187
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Attributes",
                    "optional": false,
                    "range": [
                      165,
                      175
                    ],
                    "loc": {
                      "end": {
                        "column": 59,
                        "line": 5
                      },
                      "start": {
                        "column": 49,
                        "line": 5
                      }
                    }
                  },
                  "range": [
                    165,
                    175
                  ],
                  "loc": {
                    "end": {
                      "column": 59,
                      "line": 5
                    },
                    "start": {
                      "column": 49,
                      "line": 5
                    }
                  }
                },
                {
                  "type": "TSUndefinedKeyword",
                  "range": [
                    178,
                    187
                  ],
                  "loc": {
                    "end": {
                      "column": 71,
                      "line": 5
                    },
                    "start": {
                      "column": 62,
                      "line": 5
                    }
                  }
                }
              ],
              "range": [
                165,
                187
              ],
              "loc": {
                "end": {
                  "column": 71,
                  "line": 5
                },
                "start": {
                  "column": 49,
                  "line": 5
                }
              }
            }
          },
          "range": [
            153,
            187
          ],
          "loc": {
            "end": {
              "column": 71,
              "line": 5
            },
            "start": {
              "column": 37,
              "line": 5
            }
          }
        },
        {
          "type": "RestElement",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "contents",
            "optional": false,
            "range": [
              192,
              200
            ],
            "loc": {
              "end": {
                "column": 84,
                "line": 5
              },
              "start": {
                "column": 76,
                "line": 5
              }
            }
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 94,
                "line": 5
              },
              "start": {
                "column": 84,
                "line": 5
              }
            },
            "range": [
              200,
              210
            ],
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSStringKeyword",
                "range": [
                  202,
                  208
                ],
                "loc": {
                  "end": {
                    "column": 92,
                    "line": 5
                  },
                  "start": {
                    "column": 86,
                    "line": 5
                  }
                }
              },
              "range": [
                202,
                210
              ],
              "loc": {
                "end": {
                  "column": 94,
                  "line": 5
                },
                "start": {
                  "column": 86,
                  "line": 5
                }
              }
            }
          },
          "range": [
            189,
            210
          ],
          "loc": {
            "end": {
              "column": 94,
              "line": 5
            },
            "start": {
              "column": 73,
              "line": 5
            }
          }
        }
      ],
      "range": [
        116,
        232
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 5
        }
      }
    },
    {
      "type": "TSModuleDeclaration",
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSTypeAliasDeclaration",
            "declare": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Element",
              "optional": false,
              "range": [
                272,
                279
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 9
                },
                "start": {
                  "column": 9,
                  "line": 9
                }
              }
            },
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "range": [
                282,
                288
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 9
                },
                "start": {
                  "column": 19,
                  "line": 9
                }
              }
            },
            "range": [
              267,
              289
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 9
              },
              "start": {
                "column": 4,
                "line": 9
              }
            }
          }
        ],
        "range": [
          261,
          291
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 10
          },
          "start": {
            "column": 28,
            "line": 8
          }
        }
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "TSQualifiedName",
        "range": [
          243,
          260
        ],
        "left": {
          "type": "Identifier",
          "range": [
            243,
            256
          ],
          "decorators": [],
          "name": "createElement",
          "optional": false,
          "loc": {
            "end": {
              "column": 23,
              "line": 8
            },
            "start": {
              "column": 10,
              "line": 8
            }
          }
        },
        "right": {
          "type": "Identifier",
          "range": [
            257,
            260
          ],
          "decorators": [],
          "name": "JSX",
          "optional": false,
          "loc": {
            "end": {
              "column": 27,
              "line": 8
            },
            "start": {
              "column": 24,
              "line": 8
            }
          }
        },
        "loc": {
          "end": {
            "column": 27,
            "line": 8
          },
          "start": {
            "column": 10,
            "line": 8
          }
        }
      },
      "kind": "namespace",
      "range": [
        233,
        291
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 10
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
              "type": "Literal",
              "raw": "''",
              "value": "",
              "range": [
                378,
                380
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 13
                },
                "start": {
                  "column": 11,
                  "line": 13
                }
              }
            },
            "range": [
              371,
              381
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 13
              },
              "start": {
                "column": 4,
                "line": 13
              }
            }
          }
        ],
        "range": [
          365,
          383
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 14
          },
          "start": {
            "column": 72,
            "line": 12
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Button",
        "optional": false,
        "range": [
          302,
          308
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 12
          },
          "start": {
            "column": 9,
            "line": 12
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "attributes",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 50,
                "line": 12
              },
              "start": {
                "column": 26,
                "line": 12
              }
            },
            "range": [
              319,
              343
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Attributes",
                    "optional": false,
                    "range": [
                      321,
                      331
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 12
                      },
                      "start": {
                        "column": 28,
                        "line": 12
                      }
                    }
                  },
                  "range": [
                    321,
                    331
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 12
                    },
                    "start": {
                      "column": 28,
                      "line": 12
                    }
                  }
                },
                {
                  "type": "TSUndefinedKeyword",
                  "range": [
                    334,
                    343
                  ],
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 12
                    },
                    "start": {
                      "column": 41,
                      "line": 12
                    }
                  }
                }
              ],
              "range": [
                321,
                343
              ],
              "loc": {
                "end": {
                  "column": 50,
                  "line": 12
                },
                "start": {
                  "column": 28,
                  "line": 12
                }
              }
            }
          },
          "range": [
            309,
            343
          ],
          "loc": {
            "end": {
              "column": 50,
              "line": 12
            },
            "start": {
              "column": 16,
              "line": 12
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "contents",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 70,
                "line": 12
              },
              "start": {
                "column": 60,
                "line": 12
              }
            },
            "range": [
              353,
              363
            ],
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSStringKeyword",
                "range": [
                  355,
                  361
                ],
                "loc": {
                  "end": {
                    "column": 68,
                    "line": 12
                  },
                  "start": {
                    "column": 62,
                    "line": 12
                  }
                }
              },
              "range": [
                355,
                363
              ],
              "loc": {
                "end": {
                  "column": 70,
                  "line": 12
                },
                "start": {
                  "column": 62,
                  "line": 12
                }
              }
            }
          },
          "range": [
            345,
            363
          ],
          "loc": {
            "end": {
              "column": 70,
              "line": 12
            },
            "start": {
              "column": 52,
              "line": 12
            }
          }
        }
      ],
      "range": [
        293,
        383
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 14
        },
        "start": {
          "column": 0,
          "line": 12
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
            "name": "b",
            "optional": false,
            "range": [
              390,
              391
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 15
              },
              "start": {
                "column": 6,
                "line": 15
              }
            }
          },
          "init": {
            "type": "JSXElement",
            "children": [],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Button",
                "range": [
                  404,
                  410
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
              },
              "range": [
                402,
                411
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 15
                },
                "start": {
                  "column": 18,
                  "line": 15
                }
              }
            },
            "openingElement": {
              "type": "JSXOpeningElement",
              "attributes": [],
              "name": {
                "type": "JSXIdentifier",
                "name": "Button",
                "range": [
                  395,
                  401
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 15
                  },
                  "start": {
                    "column": 11,
                    "line": 15
                  }
                }
              },
              "selfClosing": false,
              "range": [
                394,
                402
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 15
                },
                "start": {
                  "column": 10,
                  "line": 15
                }
              }
            },
            "range": [
              394,
              411
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 15
              },
              "start": {
                "column": 10,
                "line": 15
              }
            }
          },
          "range": [
            390,
            411
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 15
            },
            "start": {
              "column": 6,
              "line": 15
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        384,
        411
      ],
      "loc": {
        "end": {
          "column": 27,
          "line": 15
        },
        "start": {
          "column": 0,
          "line": 15
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 16
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
