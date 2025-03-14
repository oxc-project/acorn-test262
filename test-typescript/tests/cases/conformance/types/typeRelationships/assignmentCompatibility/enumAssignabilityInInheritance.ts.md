__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    111,
    2183
  ],
  "body": [
    {
      "type": "TSEnumDeclaration",
      "body": {
        "type": "TSEnumBody",
        "range": [
          118,
          123
        ],
        "members": [
          {
            "type": "TSEnumMember",
            "computed": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "range": [
                120,
                121
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
              120,
              121
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
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 4
          },
          "start": {
            "column": 7,
            "line": 4
          }
        }
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E",
        "optional": false,
        "range": [
          116,
          117
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 4
          },
          "start": {
            "column": 5,
            "line": 4
          }
        }
      },
      "range": [
        111,
        123
      ],
      "loc": {
        "end": {
          "column": 12,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 4
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          138,
          202
        ],
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 7
                    },
                    "start": {
                      "column": 6,
                      "line": 7
                    }
                  },
                  "range": [
                    146,
                    154
                  ],
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "range": [
                      148,
                      154
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 7
                      },
                      "start": {
                        "column": 8,
                        "line": 7
                      }
                    }
                  }
                },
                "range": [
                  145,
                  154
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 7
                  },
                  "start": {
                    "column": 5,
                    "line": 7
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
                  "column": 18,
                  "line": 7
                },
                "start": {
                  "column": 15,
                  "line": 7
                }
              },
              "range": [
                155,
                158
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "range": [
                    157,
                    158
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 7
                    },
                    "start": {
                      "column": 17,
                      "line": 7
                    }
                  }
                },
                "range": [
                  157,
                  158
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 7
                  },
                  "start": {
                    "column": 17,
                    "line": 7
                  }
                }
              }
            },
            "range": [
              144,
              159
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 7
              },
              "start": {
                "column": 4,
                "line": 7
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "range": [
                164,
                167
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 8
                },
                "start": {
                  "column": 4,
                  "line": 8
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
                  "line": 8
                },
                "start": {
                  "column": 7,
                  "line": 8
                }
              },
              "range": [
                167,
                170
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "range": [
                    169,
                    170
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 8
                    },
                    "start": {
                      "column": 9,
                      "line": 8
                    }
                  }
                },
                "range": [
                  169,
                  170
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 8
                  },
                  "start": {
                    "column": 9,
                    "line": 8
                  }
                }
              }
            },
            "range": [
              164,
              171
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 8
              },
              "start": {
                "column": 4,
                "line": 8
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 9
          },
          "start": {
            "column": 13,
            "line": 6
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I0",
        "optional": false,
        "range": [
          135,
          137
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 6
          },
          "start": {
            "column": 10,
            "line": 6
          }
        }
      },
      "range": [
        125,
        202
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 6
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
        "name": "foo",
        "optional": false,
        "range": [
          222,
          225
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 12
          },
          "start": {
            "column": 17,
            "line": 12
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
                "column": 25,
                "line": 12
              },
              "start": {
                "column": 22,
                "line": 12
              }
            },
            "range": [
              227,
              230
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "range": [
                  229,
                  230
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 12
                  },
                  "start": {
                    "column": 24,
                    "line": 12
                  }
                }
              },
              "range": [
                229,
                230
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 12
                },
                "start": {
                  "column": 24,
                  "line": 12
                }
              }
            }
          },
          "range": [
            226,
            230
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 12
            },
            "start": {
              "column": 21,
              "line": 12
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 29,
            "line": 12
          },
          "start": {
            "column": 26,
            "line": 12
          }
        },
        "range": [
          231,
          234
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "E",
            "optional": false,
            "range": [
              233,
              234
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 12
              },
              "start": {
                "column": 28,
                "line": 12
              }
            }
          },
          "range": [
            233,
            234
          ],
          "loc": {
            "end": {
              "column": 29,
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
        205,
        235
      ],
      "loc": {
        "end": {
          "column": 30,
          "line": 12
        },
        "start": {
          "column": 0,
          "line": 12
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
        "name": "foo",
        "optional": false,
        "range": [
          253,
          256
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 13
          },
          "start": {
            "column": 17,
            "line": 13
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
                "column": 30,
                "line": 13
              },
              "start": {
                "column": 22,
                "line": 13
              }
            },
            "range": [
              258,
              266
            ],
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "range": [
                260,
                266
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 13
                },
                "start": {
                  "column": 24,
                  "line": 13
                }
              }
            }
          },
          "range": [
            257,
            266
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 13
            },
            "start": {
              "column": 21,
              "line": 13
            }
          }
        }
      ],
      "returnType": {
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
          267,
          275
        ],
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "range": [
            269,
            275
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
        236,
        276
      ],
      "loc": {
        "end": {
          "column": 40,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 13
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
        "name": "foo",
        "optional": false,
        "range": [
          294,
          297
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 14
          },
          "start": {
            "column": 17,
            "line": 14
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
                "column": 27,
                "line": 14
              },
              "start": {
                "column": 22,
                "line": 14
              }
            },
            "range": [
              299,
              304
            ],
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                301,
                304
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 14
                },
                "start": {
                  "column": 24,
                  "line": 14
                }
              }
            }
          },
          "range": [
            298,
            304
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 14
            },
            "start": {
              "column": 21,
              "line": 14
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 33,
            "line": 14
          },
          "start": {
            "column": 28,
            "line": 14
          }
        },
        "range": [
          305,
          310
        ],
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "range": [
            307,
            310
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 14
            },
            "start": {
              "column": 30,
              "line": 14
            }
          }
        }
      },
      "range": [
        277,
        311
      ],
      "loc": {
        "end": {
          "column": 34,
          "line": 14
        },
        "start": {
          "column": 0,
          "line": 14
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
            "name": "r",
            "optional": false,
            "range": [
              316,
              317
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 15
              },
              "start": {
                "column": 4,
                "line": 15
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "range": [
                    324,
                    325
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 15
                    },
                    "start": {
                      "column": 12,
                      "line": 15
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "range": [
                    326,
                    327
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 15
                    },
                    "start": {
                      "column": 14,
                      "line": 15
                    }
                  }
                },
                "range": [
                  324,
                  327
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 15
                  },
                  "start": {
                    "column": 12,
                    "line": 15
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "range": [
                320,
                323
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 15
                },
                "start": {
                  "column": 8,
                  "line": 15
                }
              }
            },
            "optional": false,
            "range": [
              320,
              328
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 15
              },
              "start": {
                "column": 8,
                "line": 15
              }
            }
          },
          "range": [
            316,
            328
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 15
            },
            "start": {
              "column": 4,
              "line": 15
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        312,
        329
      ],
      "loc": {
        "end": {
          "column": 17,
          "line": 15
        },
        "start": {
          "column": 0,
          "line": 15
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
            "name": "r2",
            "optional": false,
            "range": [
              339,
              341
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 16
              },
              "start": {
                "column": 4,
                "line": 16
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  348,
                  349
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
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "range": [
                344,
                347
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 16
                },
                "start": {
                  "column": 9,
                  "line": 16
                }
              }
            },
            "optional": false,
            "range": [
              344,
              350
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 16
              },
              "start": {
                "column": 9,
                "line": 16
              }
            }
          },
          "range": [
            339,
            350
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 16
            },
            "start": {
              "column": 4,
              "line": 16
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        335,
        351
      ],
      "loc": {
        "end": {
          "column": 16,
          "line": 16
        },
        "start": {
          "column": 0,
          "line": 16
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
            "name": "r3",
            "optional": false,
            "range": [
              366,
              368
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 17
              },
              "start": {
                "column": 4,
                "line": 17
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "TSTypeAssertion",
                "expression": {
                  "type": "Literal",
                  "raw": "null",
                  "value": null,
                  "range": [
                    380,
                    384
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 17
                    },
                    "start": {
                      "column": 18,
                      "line": 17
                    }
                  }
                },
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "range": [
                    376,
                    379
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 17
                    },
                    "start": {
                      "column": 14,
                      "line": 17
                    }
                  }
                },
                "range": [
                  375,
                  384
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 17
                  },
                  "start": {
                    "column": 13,
                    "line": 17
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "range": [
                371,
                374
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 17
                },
                "start": {
                  "column": 9,
                  "line": 17
                }
              }
            },
            "optional": false,
            "range": [
              371,
              385
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 17
              },
              "start": {
                "column": 9,
                "line": 17
              }
            }
          },
          "range": [
            366,
            385
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 17
            },
            "start": {
              "column": 4,
              "line": 17
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        362,
        386
      ],
      "loc": {
        "end": {
          "column": 24,
          "line": 17
        },
        "start": {
          "column": 0,
          "line": 17
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
        "name": "foo2",
        "optional": false,
        "range": [
          412,
          416
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 19
          },
          "start": {
            "column": 17,
            "line": 19
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
                "line": 19
              },
              "start": {
                "column": 23,
                "line": 19
              }
            },
            "range": [
              418,
              426
            ],
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "range": [
                420,
                426
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 19
                },
                "start": {
                  "column": 25,
                  "line": 19
                }
              }
            }
          },
          "range": [
            417,
            426
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 19
            },
            "start": {
              "column": 22,
              "line": 19
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 40,
            "line": 19
          },
          "start": {
            "column": 32,
            "line": 19
          }
        },
        "range": [
          427,
          435
        ],
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "range": [
            429,
            435
          ],
          "loc": {
            "end": {
              "column": 40,
              "line": 19
            },
            "start": {
              "column": 34,
              "line": 19
            }
          }
        }
      },
      "range": [
        395,
        436
      ],
      "loc": {
        "end": {
          "column": 41,
          "line": 19
        },
        "start": {
          "column": 0,
          "line": 19
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
        "name": "foo2",
        "optional": false,
        "range": [
          454,
          458
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 20
          },
          "start": {
            "column": 17,
            "line": 20
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
                "column": 26,
                "line": 20
              },
              "start": {
                "column": 23,
                "line": 20
              }
            },
            "range": [
              460,
              463
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "range": [
                  462,
                  463
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 20
                  },
                  "start": {
                    "column": 25,
                    "line": 20
                  }
                }
              },
              "range": [
                462,
                463
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 20
                },
                "start": {
                  "column": 25,
                  "line": 20
                }
              }
            }
          },
          "range": [
            459,
            463
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 20
            },
            "start": {
              "column": 22,
              "line": 20
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 30,
            "line": 20
          },
          "start": {
            "column": 27,
            "line": 20
          }
        },
        "range": [
          464,
          467
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "E",
            "optional": false,
            "range": [
              466,
              467
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 20
              },
              "start": {
                "column": 29,
                "line": 20
              }
            }
          },
          "range": [
            466,
            467
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 20
            },
            "start": {
              "column": 29,
              "line": 20
            }
          }
        }
      },
      "range": [
        437,
        468
      ],
      "loc": {
        "end": {
          "column": 31,
          "line": 20
        },
        "start": {
          "column": 0,
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
            "name": "r4",
            "optional": false,
            "range": [
              474,
              476
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 22
              },
              "start": {
                "column": 4,
                "line": 22
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "range": [
                    484,
                    485
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 22
                    },
                    "start": {
                      "column": 14,
                      "line": 22
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "range": [
                    486,
                    487
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 22
                    },
                    "start": {
                      "column": 16,
                      "line": 22
                    }
                  }
                },
                "range": [
                  484,
                  487
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 22
                  },
                  "start": {
                    "column": 14,
                    "line": 22
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "range": [
                479,
                483
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
            },
            "optional": false,
            "range": [
              479,
              488
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 22
              },
              "start": {
                "column": 9,
                "line": 22
              }
            }
          },
          "range": [
            474,
            488
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 22
            },
            "start": {
              "column": 4,
              "line": 22
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        470,
        489
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
      "type": "TSDeclareFunction",
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "range": [
          508,
          512
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 24
          },
          "start": {
            "column": 17,
            "line": 24
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
                "column": 32,
                "line": 24
              },
              "start": {
                "column": 23,
                "line": 24
              }
            },
            "range": [
              514,
              523
            ],
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "range": [
                516,
                523
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 24
                },
                "start": {
                  "column": 25,
                  "line": 24
                }
              }
            }
          },
          "range": [
            513,
            523
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 24
            },
            "start": {
              "column": 22,
              "line": 24
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 42,
            "line": 24
          },
          "start": {
            "column": 33,
            "line": 24
          }
        },
        "range": [
          524,
          533
        ],
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "range": [
            526,
            533
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 24
            },
            "start": {
              "column": 35,
              "line": 24
            }
          }
        }
      },
      "range": [
        491,
        534
      ],
      "loc": {
        "end": {
          "column": 43,
          "line": 24
        },
        "start": {
          "column": 0,
          "line": 24
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
        "name": "foo3",
        "optional": false,
        "range": [
          552,
          556
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 25
          },
          "start": {
            "column": 17,
            "line": 25
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
                "column": 26,
                "line": 25
              },
              "start": {
                "column": 23,
                "line": 25
              }
            },
            "range": [
              558,
              561
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "range": [
                  560,
                  561
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 25
                  },
                  "start": {
                    "column": 25,
                    "line": 25
                  }
                }
              },
              "range": [
                560,
                561
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 25
                },
                "start": {
                  "column": 25,
                  "line": 25
                }
              }
            }
          },
          "range": [
            557,
            561
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 25
            },
            "start": {
              "column": 22,
              "line": 25
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 30,
            "line": 25
          },
          "start": {
            "column": 27,
            "line": 25
          }
        },
        "range": [
          562,
          565
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "E",
            "optional": false,
            "range": [
              564,
              565
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 25
              },
              "start": {
                "column": 29,
                "line": 25
              }
            }
          },
          "range": [
            564,
            565
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 25
            },
            "start": {
              "column": 29,
              "line": 25
            }
          }
        }
      },
      "range": [
        535,
        566
      ],
      "loc": {
        "end": {
          "column": 31,
          "line": 25
        },
        "start": {
          "column": 0,
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
            "name": "r4",
            "optional": false,
            "range": [
              572,
              574
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 27
              },
              "start": {
                "column": 4,
                "line": 27
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "range": [
                    582,
                    583
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 27
                    },
                    "start": {
                      "column": 14,
                      "line": 27
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "range": [
                    584,
                    585
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 27
                    },
                    "start": {
                      "column": 16,
                      "line": 27
                    }
                  }
                },
                "range": [
                  582,
                  585
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 27
                  },
                  "start": {
                    "column": 14,
                    "line": 27
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo3",
              "optional": false,
              "range": [
                577,
                581
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 27
                },
                "start": {
                  "column": 9,
                  "line": 27
                }
              }
            },
            "optional": false,
            "range": [
              577,
              586
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 27
              },
              "start": {
                "column": 9,
                "line": 27
              }
            }
          },
          "range": [
            572,
            586
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 27
            },
            "start": {
              "column": 4,
              "line": 27
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        568,
        587
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
      "type": "TSDeclareFunction",
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "range": [
          606,
          610
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 29
          },
          "start": {
            "column": 17,
            "line": 29
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
                "column": 29,
                "line": 29
              },
              "start": {
                "column": 23,
                "line": 29
              }
            },
            "range": [
              612,
              618
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Date",
                "optional": false,
                "range": [
                  614,
                  618
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 29
                  },
                  "start": {
                    "column": 25,
                    "line": 29
                  }
                }
              },
              "range": [
                614,
                618
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 29
                },
                "start": {
                  "column": 25,
                  "line": 29
                }
              }
            }
          },
          "range": [
            611,
            618
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 29
            },
            "start": {
              "column": 22,
              "line": 29
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 36,
            "line": 29
          },
          "start": {
            "column": 30,
            "line": 29
          }
        },
        "range": [
          619,
          625
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Date",
            "optional": false,
            "range": [
              621,
              625
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 29
              },
              "start": {
                "column": 32,
                "line": 29
              }
            }
          },
          "range": [
            621,
            625
          ],
          "loc": {
            "end": {
              "column": 36,
              "line": 29
            },
            "start": {
              "column": 32,
              "line": 29
            }
          }
        }
      },
      "range": [
        589,
        626
      ],
      "loc": {
        "end": {
          "column": 37,
          "line": 29
        },
        "start": {
          "column": 0,
          "line": 29
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
        "name": "foo4",
        "optional": false,
        "range": [
          644,
          648
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 30
          },
          "start": {
            "column": 17,
            "line": 30
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
                "column": 26,
                "line": 30
              },
              "start": {
                "column": 23,
                "line": 30
              }
            },
            "range": [
              650,
              653
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "range": [
                  652,
                  653
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 30
                  },
                  "start": {
                    "column": 25,
                    "line": 30
                  }
                }
              },
              "range": [
                652,
                653
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 30
                },
                "start": {
                  "column": 25,
                  "line": 30
                }
              }
            }
          },
          "range": [
            649,
            653
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 30
            },
            "start": {
              "column": 22,
              "line": 30
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 30,
            "line": 30
          },
          "start": {
            "column": 27,
            "line": 30
          }
        },
        "range": [
          654,
          657
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "E",
            "optional": false,
            "range": [
              656,
              657
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 30
              },
              "start": {
                "column": 29,
                "line": 30
              }
            }
          },
          "range": [
            656,
            657
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 30
            },
            "start": {
              "column": 29,
              "line": 30
            }
          }
        }
      },
      "range": [
        627,
        658
      ],
      "loc": {
        "end": {
          "column": 31,
          "line": 30
        },
        "start": {
          "column": 0,
          "line": 30
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
            "name": "r4",
            "optional": false,
            "range": [
              664,
              666
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 32
              },
              "start": {
                "column": 4,
                "line": 32
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "range": [
                    674,
                    675
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 32
                    },
                    "start": {
                      "column": 14,
                      "line": 32
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "range": [
                    676,
                    677
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 32
                    },
                    "start": {
                      "column": 16,
                      "line": 32
                    }
                  }
                },
                "range": [
                  674,
                  677
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 32
                  },
                  "start": {
                    "column": 14,
                    "line": 32
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo4",
              "optional": false,
              "range": [
                669,
                673
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 32
                },
                "start": {
                  "column": 9,
                  "line": 32
                }
              }
            },
            "optional": false,
            "range": [
              669,
              678
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 32
              },
              "start": {
                "column": 9,
                "line": 32
              }
            }
          },
          "range": [
            664,
            678
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 32
            },
            "start": {
              "column": 4,
              "line": 32
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        660,
        679
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
      "type": "TSDeclareFunction",
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5",
        "optional": false,
        "range": [
          698,
          702
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 34
          },
          "start": {
            "column": 17,
            "line": 34
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
                "line": 34
              },
              "start": {
                "column": 23,
                "line": 34
              }
            },
            "range": [
              704,
              712
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "RegExp",
                "optional": false,
                "range": [
                  706,
                  712
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 34
                  },
                  "start": {
                    "column": 25,
                    "line": 34
                  }
                }
              },
              "range": [
                706,
                712
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 34
                },
                "start": {
                  "column": 25,
                  "line": 34
                }
              }
            }
          },
          "range": [
            703,
            712
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 34
            },
            "start": {
              "column": 22,
              "line": 34
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 40,
            "line": 34
          },
          "start": {
            "column": 32,
            "line": 34
          }
        },
        "range": [
          713,
          721
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "RegExp",
            "optional": false,
            "range": [
              715,
              721
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 34
              },
              "start": {
                "column": 34,
                "line": 34
              }
            }
          },
          "range": [
            715,
            721
          ],
          "loc": {
            "end": {
              "column": 40,
              "line": 34
            },
            "start": {
              "column": 34,
              "line": 34
            }
          }
        }
      },
      "range": [
        681,
        722
      ],
      "loc": {
        "end": {
          "column": 41,
          "line": 34
        },
        "start": {
          "column": 0,
          "line": 34
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
        "name": "foo5",
        "optional": false,
        "range": [
          740,
          744
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 35
          },
          "start": {
            "column": 17,
            "line": 35
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
                "column": 26,
                "line": 35
              },
              "start": {
                "column": 23,
                "line": 35
              }
            },
            "range": [
              746,
              749
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "range": [
                  748,
                  749
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 35
                  },
                  "start": {
                    "column": 25,
                    "line": 35
                  }
                }
              },
              "range": [
                748,
                749
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 35
                },
                "start": {
                  "column": 25,
                  "line": 35
                }
              }
            }
          },
          "range": [
            745,
            749
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 35
            },
            "start": {
              "column": 22,
              "line": 35
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 30,
            "line": 35
          },
          "start": {
            "column": 27,
            "line": 35
          }
        },
        "range": [
          750,
          753
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "E",
            "optional": false,
            "range": [
              752,
              753
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 35
              },
              "start": {
                "column": 29,
                "line": 35
              }
            }
          },
          "range": [
            752,
            753
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 35
            },
            "start": {
              "column": 29,
              "line": 35
            }
          }
        }
      },
      "range": [
        723,
        754
      ],
      "loc": {
        "end": {
          "column": 31,
          "line": 35
        },
        "start": {
          "column": 0,
          "line": 35
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
            "name": "r4",
            "optional": false,
            "range": [
              760,
              762
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 37
              },
              "start": {
                "column": 4,
                "line": 37
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "range": [
                    770,
                    771
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 37
                    },
                    "start": {
                      "column": 14,
                      "line": 37
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "range": [
                    772,
                    773
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 37
                    },
                    "start": {
                      "column": 16,
                      "line": 37
                    }
                  }
                },
                "range": [
                  770,
                  773
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 37
                  },
                  "start": {
                    "column": 14,
                    "line": 37
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo5",
              "optional": false,
              "range": [
                765,
                769
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 37
                },
                "start": {
                  "column": 9,
                  "line": 37
                }
              }
            },
            "optional": false,
            "range": [
              765,
              774
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 37
              },
              "start": {
                "column": 9,
                "line": 37
              }
            }
          },
          "range": [
            760,
            774
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 37
            },
            "start": {
              "column": 4,
              "line": 37
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        756,
        775
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
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo6",
        "optional": false,
        "range": [
          794,
          798
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
                "column": 40,
                "line": 39
              },
              "start": {
                "column": 23,
                "line": 39
              }
            },
            "range": [
              800,
              817
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
                    "name": "bar",
                    "optional": false,
                    "range": [
                      804,
                      807
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
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 39
                      },
                      "start": {
                        "column": 30,
                        "line": 39
                      }
                    },
                    "range": [
                      807,
                      815
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        809,
                        815
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 39
                        },
                        "start": {
                          "column": 32,
                          "line": 39
                        }
                      }
                    }
                  },
                  "range": [
                    804,
                    815
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 39
                    },
                    "start": {
                      "column": 27,
                      "line": 39
                    }
                  }
                }
              ],
              "range": [
                802,
                817
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 39
                },
                "start": {
                  "column": 25,
                  "line": 39
                }
              }
            }
          },
          "range": [
            799,
            817
          ],
          "loc": {
            "end": {
              "column": 40,
              "line": 39
            },
            "start": {
              "column": 22,
              "line": 39
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 58,
            "line": 39
          },
          "start": {
            "column": 41,
            "line": 39
          }
        },
        "range": [
          818,
          835
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
                "name": "bar",
                "optional": false,
                "range": [
                  822,
                  825
                ],
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 39
                  },
                  "start": {
                    "column": 45,
                    "line": 39
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
                    "column": 56,
                    "line": 39
                  },
                  "start": {
                    "column": 48,
                    "line": 39
                  }
                },
                "range": [
                  825,
                  833
                ],
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "range": [
                    827,
                    833
                  ],
                  "loc": {
                    "end": {
                      "column": 56,
                      "line": 39
                    },
                    "start": {
                      "column": 50,
                      "line": 39
                    }
                  }
                }
              },
              "range": [
                822,
                833
              ],
              "loc": {
                "end": {
                  "column": 56,
                  "line": 39
                },
                "start": {
                  "column": 45,
                  "line": 39
                }
              }
            }
          ],
          "range": [
            820,
            835
          ],
          "loc": {
            "end": {
              "column": 58,
              "line": 39
            },
            "start": {
              "column": 43,
              "line": 39
            }
          }
        }
      },
      "range": [
        777,
        836
      ],
      "loc": {
        "end": {
          "column": 59,
          "line": 39
        },
        "start": {
          "column": 0,
          "line": 39
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
        "name": "foo6",
        "optional": false,
        "range": [
          854,
          858
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
                "column": 26,
                "line": 40
              },
              "start": {
                "column": 23,
                "line": 40
              }
            },
            "range": [
              860,
              863
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "range": [
                  862,
                  863
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 40
                  },
                  "start": {
                    "column": 25,
                    "line": 40
                  }
                }
              },
              "range": [
                862,
                863
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 40
                },
                "start": {
                  "column": 25,
                  "line": 40
                }
              }
            }
          },
          "range": [
            859,
            863
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 40
            },
            "start": {
              "column": 22,
              "line": 40
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 30,
            "line": 40
          },
          "start": {
            "column": 27,
            "line": 40
          }
        },
        "range": [
          864,
          867
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "E",
            "optional": false,
            "range": [
              866,
              867
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 40
              },
              "start": {
                "column": 29,
                "line": 40
              }
            }
          },
          "range": [
            866,
            867
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 40
            },
            "start": {
              "column": 29,
              "line": 40
            }
          }
        }
      },
      "range": [
        837,
        868
      ],
      "loc": {
        "end": {
          "column": 31,
          "line": 40
        },
        "start": {
          "column": 0,
          "line": 40
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
            "name": "r4",
            "optional": false,
            "range": [
              874,
              876
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 42
              },
              "start": {
                "column": 4,
                "line": 42
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "range": [
                    884,
                    885
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 42
                    },
                    "start": {
                      "column": 14,
                      "line": 42
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "range": [
                    886,
                    887
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 42
                    },
                    "start": {
                      "column": 16,
                      "line": 42
                    }
                  }
                },
                "range": [
                  884,
                  887
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 42
                  },
                  "start": {
                    "column": 14,
                    "line": 42
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo6",
              "optional": false,
              "range": [
                879,
                883
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 42
                },
                "start": {
                  "column": 9,
                  "line": 42
                }
              }
            },
            "optional": false,
            "range": [
              879,
              888
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 42
              },
              "start": {
                "column": 9,
                "line": 42
              }
            }
          },
          "range": [
            874,
            888
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 42
            },
            "start": {
              "column": 4,
              "line": 42
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        870,
        889
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
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo7",
        "optional": false,
        "range": [
          908,
          912
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 44
          },
          "start": {
            "column": 17,
            "line": 44
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
                "column": 33,
                "line": 44
              },
              "start": {
                "column": 23,
                "line": 44
              }
            },
            "range": [
              914,
              924
            ],
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSNumberKeyword",
                "range": [
                  916,
                  922
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 44
                  },
                  "start": {
                    "column": 25,
                    "line": 44
                  }
                }
              },
              "range": [
                916,
                924
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 44
                },
                "start": {
                  "column": 25,
                  "line": 44
                }
              }
            }
          },
          "range": [
            913,
            924
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 44
            },
            "start": {
              "column": 22,
              "line": 44
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 44,
            "line": 44
          },
          "start": {
            "column": 34,
            "line": 44
          }
        },
        "range": [
          925,
          935
        ],
        "typeAnnotation": {
          "type": "TSArrayType",
          "elementType": {
            "type": "TSNumberKeyword",
            "range": [
              927,
              933
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 44
              },
              "start": {
                "column": 36,
                "line": 44
              }
            }
          },
          "range": [
            927,
            935
          ],
          "loc": {
            "end": {
              "column": 44,
              "line": 44
            },
            "start": {
              "column": 36,
              "line": 44
            }
          }
        }
      },
      "range": [
        891,
        936
      ],
      "loc": {
        "end": {
          "column": 45,
          "line": 44
        },
        "start": {
          "column": 0,
          "line": 44
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
        "name": "foo7",
        "optional": false,
        "range": [
          954,
          958
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 45
          },
          "start": {
            "column": 17,
            "line": 45
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
                "column": 26,
                "line": 45
              },
              "start": {
                "column": 23,
                "line": 45
              }
            },
            "range": [
              960,
              963
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "range": [
                  962,
                  963
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 45
                  },
                  "start": {
                    "column": 25,
                    "line": 45
                  }
                }
              },
              "range": [
                962,
                963
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 45
                },
                "start": {
                  "column": 25,
                  "line": 45
                }
              }
            }
          },
          "range": [
            959,
            963
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 45
            },
            "start": {
              "column": 22,
              "line": 45
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 30,
            "line": 45
          },
          "start": {
            "column": 27,
            "line": 45
          }
        },
        "range": [
          964,
          967
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "E",
            "optional": false,
            "range": [
              966,
              967
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 45
              },
              "start": {
                "column": 29,
                "line": 45
              }
            }
          },
          "range": [
            966,
            967
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 45
            },
            "start": {
              "column": 29,
              "line": 45
            }
          }
        }
      },
      "range": [
        937,
        968
      ],
      "loc": {
        "end": {
          "column": 31,
          "line": 45
        },
        "start": {
          "column": 0,
          "line": 45
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
            "name": "r4",
            "optional": false,
            "range": [
              974,
              976
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 47
              },
              "start": {
                "column": 4,
                "line": 47
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "range": [
                    984,
                    985
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 47
                    },
                    "start": {
                      "column": 14,
                      "line": 47
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "range": [
                    986,
                    987
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 47
                    },
                    "start": {
                      "column": 16,
                      "line": 47
                    }
                  }
                },
                "range": [
                  984,
                  987
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 47
                  },
                  "start": {
                    "column": 14,
                    "line": 47
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo7",
              "optional": false,
              "range": [
                979,
                983
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 47
                },
                "start": {
                  "column": 9,
                  "line": 47
                }
              }
            },
            "optional": false,
            "range": [
              979,
              988
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 47
              },
              "start": {
                "column": 9,
                "line": 47
              }
            }
          },
          "range": [
            974,
            988
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 47
            },
            "start": {
              "column": 4,
              "line": 47
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        970,
        989
      ],
      "loc": {
        "end": {
          "column": 19,
          "line": 47
        },
        "start": {
          "column": 0,
          "line": 47
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          1004,
          1020
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "range": [
                1006,
                1009
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 49
                },
                "start": {
                  "column": 15,
                  "line": 49
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
                  "column": 26,
                  "line": 49
                },
                "start": {
                  "column": 18,
                  "line": 49
                }
              },
              "range": [
                1009,
                1017
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  1011,
                  1017
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 49
                  },
                  "start": {
                    "column": 20,
                    "line": 49
                  }
                }
              }
            },
            "range": [
              1006,
              1018
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 49
              },
              "start": {
                "column": 15,
                "line": 49
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 29,
            "line": 49
          },
          "start": {
            "column": 13,
            "line": 49
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I8",
        "optional": false,
        "range": [
          1001,
          1003
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 49
          },
          "start": {
            "column": 10,
            "line": 49
          }
        }
      },
      "range": [
        991,
        1020
      ],
      "loc": {
        "end": {
          "column": 29,
          "line": 49
        },
        "start": {
          "column": 0,
          "line": 49
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
        "name": "foo8",
        "optional": false,
        "range": [
          1038,
          1042
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 50
          },
          "start": {
            "column": 17,
            "line": 50
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
                "column": 27,
                "line": 50
              },
              "start": {
                "column": 23,
                "line": 50
              }
            },
            "range": [
              1044,
              1048
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "I8",
                "optional": false,
                "range": [
                  1046,
                  1048
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 50
                  },
                  "start": {
                    "column": 25,
                    "line": 50
                  }
                }
              },
              "range": [
                1046,
                1048
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 50
                },
                "start": {
                  "column": 25,
                  "line": 50
                }
              }
            }
          },
          "range": [
            1043,
            1048
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 50
            },
            "start": {
              "column": 22,
              "line": 50
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 32,
            "line": 50
          },
          "start": {
            "column": 28,
            "line": 50
          }
        },
        "range": [
          1049,
          1053
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "I8",
            "optional": false,
            "range": [
              1051,
              1053
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 50
              },
              "start": {
                "column": 30,
                "line": 50
              }
            }
          },
          "range": [
            1051,
            1053
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 50
            },
            "start": {
              "column": 30,
              "line": 50
            }
          }
        }
      },
      "range": [
        1021,
        1054
      ],
      "loc": {
        "end": {
          "column": 33,
          "line": 50
        },
        "start": {
          "column": 0,
          "line": 50
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
        "name": "foo8",
        "optional": false,
        "range": [
          1072,
          1076
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 51
          },
          "start": {
            "column": 17,
            "line": 51
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
                "column": 26,
                "line": 51
              },
              "start": {
                "column": 23,
                "line": 51
              }
            },
            "range": [
              1078,
              1081
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "range": [
                  1080,
                  1081
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 51
                  },
                  "start": {
                    "column": 25,
                    "line": 51
                  }
                }
              },
              "range": [
                1080,
                1081
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 51
                },
                "start": {
                  "column": 25,
                  "line": 51
                }
              }
            }
          },
          "range": [
            1077,
            1081
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 51
            },
            "start": {
              "column": 22,
              "line": 51
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 30,
            "line": 51
          },
          "start": {
            "column": 27,
            "line": 51
          }
        },
        "range": [
          1082,
          1085
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "E",
            "optional": false,
            "range": [
              1084,
              1085
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 51
              },
              "start": {
                "column": 29,
                "line": 51
              }
            }
          },
          "range": [
            1084,
            1085
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 51
            },
            "start": {
              "column": 29,
              "line": 51
            }
          }
        }
      },
      "range": [
        1055,
        1086
      ],
      "loc": {
        "end": {
          "column": 31,
          "line": 51
        },
        "start": {
          "column": 0,
          "line": 51
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
            "name": "r4",
            "optional": false,
            "range": [
              1092,
              1094
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 53
              },
              "start": {
                "column": 4,
                "line": 53
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "range": [
                    1102,
                    1103
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 53
                    },
                    "start": {
                      "column": 14,
                      "line": 53
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "range": [
                    1104,
                    1105
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 53
                    },
                    "start": {
                      "column": 16,
                      "line": 53
                    }
                  }
                },
                "range": [
                  1102,
                  1105
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 53
                  },
                  "start": {
                    "column": 14,
                    "line": 53
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo8",
              "optional": false,
              "range": [
                1097,
                1101
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 53
                },
                "start": {
                  "column": 9,
                  "line": 53
                }
              }
            },
            "optional": false,
            "range": [
              1097,
              1106
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 53
              },
              "start": {
                "column": 9,
                "line": 53
              }
            }
          },
          "range": [
            1092,
            1106
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 53
            },
            "start": {
              "column": 4,
              "line": 53
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        1088,
        1107
      ],
      "loc": {
        "end": {
          "column": 19,
          "line": 53
        },
        "start": {
          "column": 0,
          "line": 53
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          1117,
          1133
        ],
        "body": [
          {
            "type": "PropertyDefinition",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "range": [
                1119,
                1122
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 55
                },
                "start": {
                  "column": 10,
                  "line": 55
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 21,
                  "line": 55
                },
                "start": {
                  "column": 13,
                  "line": 55
                }
              },
              "range": [
                1122,
                1130
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  1124,
                  1130
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 55
                  },
                  "start": {
                    "column": 15,
                    "line": 55
                  }
                }
              }
            },
            "value": null,
            "range": [
              1119,
              1131
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 55
              },
              "start": {
                "column": 10,
                "line": 55
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 55
          },
          "start": {
            "column": 8,
            "line": 55
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "range": [
          1115,
          1116
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 55
          },
          "start": {
            "column": 6,
            "line": 55
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        1109,
        1133
      ],
      "loc": {
        "end": {
          "column": 24,
          "line": 55
        },
        "start": {
          "column": 0,
          "line": 55
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
        "name": "foo9",
        "optional": false,
        "range": [
          1151,
          1155
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 56
          },
          "start": {
            "column": 17,
            "line": 56
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
                "column": 26,
                "line": 56
              },
              "start": {
                "column": 23,
                "line": 56
              }
            },
            "range": [
              1157,
              1160
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "range": [
                  1159,
                  1160
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 56
                  },
                  "start": {
                    "column": 25,
                    "line": 56
                  }
                }
              },
              "range": [
                1159,
                1160
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 56
                },
                "start": {
                  "column": 25,
                  "line": 56
                }
              }
            }
          },
          "range": [
            1156,
            1160
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 56
            },
            "start": {
              "column": 22,
              "line": 56
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 30,
            "line": 56
          },
          "start": {
            "column": 27,
            "line": 56
          }
        },
        "range": [
          1161,
          1164
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "range": [
              1163,
              1164
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 56
              },
              "start": {
                "column": 29,
                "line": 56
              }
            }
          },
          "range": [
            1163,
            1164
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 56
            },
            "start": {
              "column": 29,
              "line": 56
            }
          }
        }
      },
      "range": [
        1134,
        1165
      ],
      "loc": {
        "end": {
          "column": 31,
          "line": 56
        },
        "start": {
          "column": 0,
          "line": 56
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
        "name": "foo9",
        "optional": false,
        "range": [
          1183,
          1187
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 57
          },
          "start": {
            "column": 17,
            "line": 57
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
                "column": 26,
                "line": 57
              },
              "start": {
                "column": 23,
                "line": 57
              }
            },
            "range": [
              1189,
              1192
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "range": [
                  1191,
                  1192
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 57
                  },
                  "start": {
                    "column": 25,
                    "line": 57
                  }
                }
              },
              "range": [
                1191,
                1192
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 57
                },
                "start": {
                  "column": 25,
                  "line": 57
                }
              }
            }
          },
          "range": [
            1188,
            1192
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 57
            },
            "start": {
              "column": 22,
              "line": 57
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 30,
            "line": 57
          },
          "start": {
            "column": 27,
            "line": 57
          }
        },
        "range": [
          1193,
          1196
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "E",
            "optional": false,
            "range": [
              1195,
              1196
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 57
              },
              "start": {
                "column": 29,
                "line": 57
              }
            }
          },
          "range": [
            1195,
            1196
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 57
            },
            "start": {
              "column": 29,
              "line": 57
            }
          }
        }
      },
      "range": [
        1166,
        1197
      ],
      "loc": {
        "end": {
          "column": 31,
          "line": 57
        },
        "start": {
          "column": 0,
          "line": 57
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
            "name": "r4",
            "optional": false,
            "range": [
              1203,
              1205
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 59
              },
              "start": {
                "column": 4,
                "line": 59
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "range": [
                    1213,
                    1214
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 59
                    },
                    "start": {
                      "column": 14,
                      "line": 59
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "range": [
                    1215,
                    1216
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 59
                    },
                    "start": {
                      "column": 16,
                      "line": 59
                    }
                  }
                },
                "range": [
                  1213,
                  1216
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 59
                  },
                  "start": {
                    "column": 14,
                    "line": 59
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo9",
              "optional": false,
              "range": [
                1208,
                1212
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 59
                },
                "start": {
                  "column": 9,
                  "line": 59
                }
              }
            },
            "optional": false,
            "range": [
              1208,
              1217
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 59
              },
              "start": {
                "column": 9,
                "line": 59
              }
            }
          },
          "range": [
            1203,
            1217
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 59
            },
            "start": {
              "column": 4,
              "line": 59
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        1199,
        1218
      ],
      "loc": {
        "end": {
          "column": 19,
          "line": 59
        },
        "start": {
          "column": 0,
          "line": 59
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          1232,
          1243
        ],
        "body": [
          {
            "type": "PropertyDefinition",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "range": [
                1234,
                1237
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 61
                },
                "start": {
                  "column": 14,
                  "line": 61
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 20,
                  "line": 61
                },
                "start": {
                  "column": 17,
                  "line": 61
                }
              },
              "range": [
                1237,
                1240
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    1239,
                    1240
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 61
                    },
                    "start": {
                      "column": 19,
                      "line": 61
                    }
                  }
                },
                "range": [
                  1239,
                  1240
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 61
                  },
                  "start": {
                    "column": 19,
                    "line": 61
                  }
                }
              }
            },
            "value": null,
            "range": [
              1234,
              1241
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 61
              },
              "start": {
                "column": 14,
                "line": 61
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 61
          },
          "start": {
            "column": 12,
            "line": 61
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A2",
        "optional": false,
        "range": [
          1226,
          1228
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 61
          },
          "start": {
            "column": 6,
            "line": 61
          }
        }
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 11,
            "line": 61
          },
          "start": {
            "column": 8,
            "line": 61
          }
        },
        "range": [
          1228,
          1231
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
                1229,
                1230
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 61
                },
                "start": {
                  "column": 9,
                  "line": 61
                }
              }
            },
            "out": false,
            "range": [
              1229,
              1230
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 61
              },
              "start": {
                "column": 9,
                "line": 61
              }
            }
          }
        ]
      },
      "range": [
        1220,
        1243
      ],
      "loc": {
        "end": {
          "column": 23,
          "line": 61
        },
        "start": {
          "column": 0,
          "line": 61
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
        "name": "foo10",
        "optional": false,
        "range": [
          1261,
          1266
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 62
          },
          "start": {
            "column": 17,
            "line": 62
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
                "column": 36,
                "line": 62
              },
              "start": {
                "column": 24,
                "line": 62
              }
            },
            "range": [
              1268,
              1280
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  1272,
                  1280
                ],
                "params": [
                  {
                    "type": "TSNumberKeyword",
                    "range": [
                      1273,
                      1279
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 62
                      },
                      "start": {
                        "column": 29,
                        "line": 62
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 62
                  },
                  "start": {
                    "column": 28,
                    "line": 62
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A2",
                "optional": false,
                "range": [
                  1270,
                  1272
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 62
                  },
                  "start": {
                    "column": 26,
                    "line": 62
                  }
                }
              },
              "range": [
                1270,
                1280
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 62
                },
                "start": {
                  "column": 26,
                  "line": 62
                }
              }
            }
          },
          "range": [
            1267,
            1280
          ],
          "loc": {
            "end": {
              "column": 36,
              "line": 62
            },
            "start": {
              "column": 23,
              "line": 62
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 49,
            "line": 62
          },
          "start": {
            "column": 37,
            "line": 62
          }
        },
        "range": [
          1281,
          1293
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              1285,
              1293
            ],
            "params": [
              {
                "type": "TSNumberKeyword",
                "range": [
                  1286,
                  1292
                ],
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 62
                  },
                  "start": {
                    "column": 42,
                    "line": 62
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 49,
                "line": 62
              },
              "start": {
                "column": 41,
                "line": 62
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "A2",
            "optional": false,
            "range": [
              1283,
              1285
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 62
              },
              "start": {
                "column": 39,
                "line": 62
              }
            }
          },
          "range": [
            1283,
            1293
          ],
          "loc": {
            "end": {
              "column": 49,
              "line": 62
            },
            "start": {
              "column": 39,
              "line": 62
            }
          }
        }
      },
      "range": [
        1244,
        1294
      ],
      "loc": {
        "end": {
          "column": 50,
          "line": 62
        },
        "start": {
          "column": 0,
          "line": 62
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
        "name": "foo10",
        "optional": false,
        "range": [
          1312,
          1317
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 63
          },
          "start": {
            "column": 17,
            "line": 63
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
                "column": 27,
                "line": 63
              },
              "start": {
                "column": 24,
                "line": 63
              }
            },
            "range": [
              1319,
              1322
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "range": [
                  1321,
                  1322
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 63
                  },
                  "start": {
                    "column": 26,
                    "line": 63
                  }
                }
              },
              "range": [
                1321,
                1322
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 63
                },
                "start": {
                  "column": 26,
                  "line": 63
                }
              }
            }
          },
          "range": [
            1318,
            1322
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 63
            },
            "start": {
              "column": 23,
              "line": 63
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 31,
            "line": 63
          },
          "start": {
            "column": 28,
            "line": 63
          }
        },
        "range": [
          1323,
          1326
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "E",
            "optional": false,
            "range": [
              1325,
              1326
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 63
              },
              "start": {
                "column": 30,
                "line": 63
              }
            }
          },
          "range": [
            1325,
            1326
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 63
            },
            "start": {
              "column": 30,
              "line": 63
            }
          }
        }
      },
      "range": [
        1295,
        1327
      ],
      "loc": {
        "end": {
          "column": 32,
          "line": 63
        },
        "start": {
          "column": 0,
          "line": 63
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
            "name": "r4",
            "optional": false,
            "range": [
              1333,
              1335
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 65
              },
              "start": {
                "column": 4,
                "line": 65
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "range": [
                    1344,
                    1345
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 65
                    },
                    "start": {
                      "column": 15,
                      "line": 65
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "range": [
                    1346,
                    1347
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 65
                    },
                    "start": {
                      "column": 17,
                      "line": 65
                    }
                  }
                },
                "range": [
                  1344,
                  1347
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 65
                  },
                  "start": {
                    "column": 15,
                    "line": 65
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo10",
              "optional": false,
              "range": [
                1338,
                1343
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 65
                },
                "start": {
                  "column": 9,
                  "line": 65
                }
              }
            },
            "optional": false,
            "range": [
              1338,
              1348
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 65
              },
              "start": {
                "column": 9,
                "line": 65
              }
            }
          },
          "range": [
            1333,
            1348
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 65
            },
            "start": {
              "column": 4,
              "line": 65
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        1329,
        1349
      ],
      "loc": {
        "end": {
          "column": 20,
          "line": 65
        },
        "start": {
          "column": 0,
          "line": 65
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
        "name": "foo11",
        "optional": false,
        "range": [
          1368,
          1373
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 67
          },
          "start": {
            "column": 17,
            "line": 67
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
                "column": 39,
                "line": 67
              },
              "start": {
                "column": 24,
                "line": 67
              }
            },
            "range": [
              1375,
              1390
            ],
            "typeAnnotation": {
              "type": "TSFunctionType",
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    1378,
                    1379
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 67
                    },
                    "start": {
                      "column": 27,
                      "line": 67
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 67
                  },
                  "start": {
                    "column": 30,
                    "line": 67
                  }
                },
                "range": [
                  1381,
                  1390
                ],
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "range": [
                    1384,
                    1390
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
                1377,
                1390
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 67
                },
                "start": {
                  "column": 26,
                  "line": 67
                }
              }
            }
          },
          "range": [
            1374,
            1390
          ],
          "loc": {
            "end": {
              "column": 39,
              "line": 67
            },
            "start": {
              "column": 23,
              "line": 67
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 55,
            "line": 67
          },
          "start": {
            "column": 40,
            "line": 67
          }
        },
        "range": [
          1391,
          1406
        ],
        "typeAnnotation": {
          "type": "TSFunctionType",
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                1394,
                1395
              ],
              "loc": {
                "end": {
                  "column": 44,
                  "line": 67
                },
                "start": {
                  "column": 43,
                  "line": 67
                }
              }
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 55,
                "line": 67
              },
              "start": {
                "column": 46,
                "line": 67
              }
            },
            "range": [
              1397,
              1406
            ],
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "range": [
                1400,
                1406
              ],
              "loc": {
                "end": {
                  "column": 55,
                  "line": 67
                },
                "start": {
                  "column": 49,
                  "line": 67
                }
              }
            }
          },
          "range": [
            1393,
            1406
          ],
          "loc": {
            "end": {
              "column": 55,
              "line": 67
            },
            "start": {
              "column": 42,
              "line": 67
            }
          }
        }
      },
      "range": [
        1351,
        1407
      ],
      "loc": {
        "end": {
          "column": 56,
          "line": 67
        },
        "start": {
          "column": 0,
          "line": 67
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
        "name": "foo11",
        "optional": false,
        "range": [
          1425,
          1430
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 68
          },
          "start": {
            "column": 17,
            "line": 68
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
                "column": 27,
                "line": 68
              },
              "start": {
                "column": 24,
                "line": 68
              }
            },
            "range": [
              1432,
              1435
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "range": [
                  1434,
                  1435
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 68
                  },
                  "start": {
                    "column": 26,
                    "line": 68
                  }
                }
              },
              "range": [
                1434,
                1435
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 68
                },
                "start": {
                  "column": 26,
                  "line": 68
                }
              }
            }
          },
          "range": [
            1431,
            1435
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 68
            },
            "start": {
              "column": 23,
              "line": 68
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 31,
            "line": 68
          },
          "start": {
            "column": 28,
            "line": 68
          }
        },
        "range": [
          1436,
          1439
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "E",
            "optional": false,
            "range": [
              1438,
              1439
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 68
              },
              "start": {
                "column": 30,
                "line": 68
              }
            }
          },
          "range": [
            1438,
            1439
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 68
            },
            "start": {
              "column": 30,
              "line": 68
            }
          }
        }
      },
      "range": [
        1408,
        1440
      ],
      "loc": {
        "end": {
          "column": 32,
          "line": 68
        },
        "start": {
          "column": 0,
          "line": 68
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
            "name": "r4",
            "optional": false,
            "range": [
              1446,
              1448
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 70
              },
              "start": {
                "column": 4,
                "line": 70
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "range": [
                    1457,
                    1458
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 70
                    },
                    "start": {
                      "column": 15,
                      "line": 70
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "range": [
                    1459,
                    1460
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 70
                    },
                    "start": {
                      "column": 17,
                      "line": 70
                    }
                  }
                },
                "range": [
                  1457,
                  1460
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 70
                  },
                  "start": {
                    "column": 15,
                    "line": 70
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo11",
              "optional": false,
              "range": [
                1451,
                1456
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 70
                },
                "start": {
                  "column": 9,
                  "line": 70
                }
              }
            },
            "optional": false,
            "range": [
              1451,
              1461
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 70
              },
              "start": {
                "column": 9,
                "line": 70
              }
            }
          },
          "range": [
            1446,
            1461
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 70
            },
            "start": {
              "column": 4,
              "line": 70
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        1442,
        1462
      ],
      "loc": {
        "end": {
          "column": 20,
          "line": 70
        },
        "start": {
          "column": 0,
          "line": 70
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
        "name": "foo12",
        "optional": false,
        "range": [
          1481,
          1486
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 72
          },
          "start": {
            "column": 17,
            "line": 72
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
                "column": 40,
                "line": 72
              },
              "start": {
                "column": 24,
                "line": 72
              }
            },
            "range": [
              1488,
              1504
            ],
            "typeAnnotation": {
              "type": "TSFunctionType",
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
                        "column": 34,
                        "line": 72
                      },
                      "start": {
                        "column": 31,
                        "line": 72
                      }
                    },
                    "range": [
                      1495,
                      1498
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          1497,
                          1498
                        ],
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 72
                          },
                          "start": {
                            "column": 33,
                            "line": 72
                          }
                        }
                      },
                      "range": [
                        1497,
                        1498
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 72
                        },
                        "start": {
                          "column": 33,
                          "line": 72
                        }
                      }
                    }
                  },
                  "range": [
                    1494,
                    1498
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 72
                    },
                    "start": {
                      "column": 30,
                      "line": 72
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 72
                  },
                  "start": {
                    "column": 36,
                    "line": 72
                  }
                },
                "range": [
                  1500,
                  1504
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "range": [
                      1503,
                      1504
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 72
                      },
                      "start": {
                        "column": 39,
                        "line": 72
                      }
                    }
                  },
                  "range": [
                    1503,
                    1504
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 72
                    },
                    "start": {
                      "column": 39,
                      "line": 72
                    }
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 72
                  },
                  "start": {
                    "column": 26,
                    "line": 72
                  }
                },
                "range": [
                  1490,
                  1493
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
                        1491,
                        1492
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 72
                        },
                        "start": {
                          "column": 27,
                          "line": 72
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      1491,
                      1492
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 72
                      },
                      "start": {
                        "column": 27,
                        "line": 72
                      }
                    }
                  }
                ]
              },
              "range": [
                1490,
                1504
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 72
                },
                "start": {
                  "column": 26,
                  "line": 72
                }
              }
            }
          },
          "range": [
            1487,
            1504
          ],
          "loc": {
            "end": {
              "column": 40,
              "line": 72
            },
            "start": {
              "column": 23,
              "line": 72
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 57,
            "line": 72
          },
          "start": {
            "column": 41,
            "line": 72
          }
        },
        "range": [
          1505,
          1521
        ],
        "typeAnnotation": {
          "type": "TSFunctionType",
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
                    "column": 51,
                    "line": 72
                  },
                  "start": {
                    "column": 48,
                    "line": 72
                  }
                },
                "range": [
                  1512,
                  1515
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "range": [
                      1514,
                      1515
                    ],
                    "loc": {
                      "end": {
                        "column": 51,
                        "line": 72
                      },
                      "start": {
                        "column": 50,
                        "line": 72
                      }
                    }
                  },
                  "range": [
                    1514,
                    1515
                  ],
                  "loc": {
                    "end": {
                      "column": 51,
                      "line": 72
                    },
                    "start": {
                      "column": 50,
                      "line": 72
                    }
                  }
                }
              },
              "range": [
                1511,
                1515
              ],
              "loc": {
                "end": {
                  "column": 51,
                  "line": 72
                },
                "start": {
                  "column": 47,
                  "line": 72
                }
              }
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 57,
                "line": 72
              },
              "start": {
                "column": 53,
                "line": 72
              }
            },
            "range": [
              1517,
              1521
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  1520,
                  1521
                ],
                "loc": {
                  "end": {
                    "column": 57,
                    "line": 72
                  },
                  "start": {
                    "column": 56,
                    "line": 72
                  }
                }
              },
              "range": [
                1520,
                1521
              ],
              "loc": {
                "end": {
                  "column": 57,
                  "line": 72
                },
                "start": {
                  "column": 56,
                  "line": 72
                }
              }
            }
          },
          "typeParameters": {
            "type": "TSTypeParameterDeclaration",
            "loc": {
              "end": {
                "column": 46,
                "line": 72
              },
              "start": {
                "column": 43,
                "line": 72
              }
            },
            "range": [
              1507,
              1510
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
                    1508,
                    1509
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 72
                    },
                    "start": {
                      "column": 44,
                      "line": 72
                    }
                  }
                },
                "out": false,
                "range": [
                  1508,
                  1509
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 72
                  },
                  "start": {
                    "column": 44,
                    "line": 72
                  }
                }
              }
            ]
          },
          "range": [
            1507,
            1521
          ],
          "loc": {
            "end": {
              "column": 57,
              "line": 72
            },
            "start": {
              "column": 43,
              "line": 72
            }
          }
        }
      },
      "range": [
        1464,
        1522
      ],
      "loc": {
        "end": {
          "column": 58,
          "line": 72
        },
        "start": {
          "column": 0,
          "line": 72
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
        "name": "foo12",
        "optional": false,
        "range": [
          1540,
          1545
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 73
          },
          "start": {
            "column": 17,
            "line": 73
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
                "column": 27,
                "line": 73
              },
              "start": {
                "column": 24,
                "line": 73
              }
            },
            "range": [
              1547,
              1550
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "range": [
                  1549,
                  1550
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 73
                  },
                  "start": {
                    "column": 26,
                    "line": 73
                  }
                }
              },
              "range": [
                1549,
                1550
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 73
                },
                "start": {
                  "column": 26,
                  "line": 73
                }
              }
            }
          },
          "range": [
            1546,
            1550
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 73
            },
            "start": {
              "column": 23,
              "line": 73
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 31,
            "line": 73
          },
          "start": {
            "column": 28,
            "line": 73
          }
        },
        "range": [
          1551,
          1554
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "E",
            "optional": false,
            "range": [
              1553,
              1554
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 73
              },
              "start": {
                "column": 30,
                "line": 73
              }
            }
          },
          "range": [
            1553,
            1554
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 73
            },
            "start": {
              "column": 30,
              "line": 73
            }
          }
        }
      },
      "range": [
        1523,
        1555
      ],
      "loc": {
        "end": {
          "column": 32,
          "line": 73
        },
        "start": {
          "column": 0,
          "line": 73
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
            "name": "r4",
            "optional": false,
            "range": [
              1561,
              1563
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 75
              },
              "start": {
                "column": 4,
                "line": 75
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "range": [
                    1572,
                    1573
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 75
                    },
                    "start": {
                      "column": 15,
                      "line": 75
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "range": [
                    1574,
                    1575
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 75
                    },
                    "start": {
                      "column": 17,
                      "line": 75
                    }
                  }
                },
                "range": [
                  1572,
                  1575
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 75
                  },
                  "start": {
                    "column": 15,
                    "line": 75
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo12",
              "optional": false,
              "range": [
                1566,
                1571
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 75
                },
                "start": {
                  "column": 9,
                  "line": 75
                }
              }
            },
            "optional": false,
            "range": [
              1566,
              1576
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 75
              },
              "start": {
                "column": 9,
                "line": 75
              }
            }
          },
          "range": [
            1561,
            1576
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 75
            },
            "start": {
              "column": 4,
              "line": 75
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        1557,
        1577
      ],
      "loc": {
        "end": {
          "column": 20,
          "line": 75
        },
        "start": {
          "column": 0,
          "line": 75
        }
      }
    },
    {
      "type": "TSEnumDeclaration",
      "body": {
        "type": "TSEnumBody",
        "range": [
          1587,
          1592
        ],
        "members": [
          {
            "type": "TSEnumMember",
            "computed": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "range": [
                1589,
                1590
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 77
                },
                "start": {
                  "column": 10,
                  "line": 77
                }
              }
            },
            "range": [
              1589,
              1590
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 77
              },
              "start": {
                "column": 10,
                "line": 77
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 77
          },
          "start": {
            "column": 8,
            "line": 77
          }
        }
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E2",
        "optional": false,
        "range": [
          1584,
          1586
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 77
          },
          "start": {
            "column": 5,
            "line": 77
          }
        }
      },
      "range": [
        1579,
        1592
      ],
      "loc": {
        "end": {
          "column": 13,
          "line": 77
        },
        "start": {
          "column": 0,
          "line": 77
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
        "name": "foo13",
        "optional": false,
        "range": [
          1610,
          1615
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 78
          },
          "start": {
            "column": 17,
            "line": 78
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
                "column": 28,
                "line": 78
              },
              "start": {
                "column": 24,
                "line": 78
              }
            },
            "range": [
              1617,
              1621
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "E2",
                "optional": false,
                "range": [
                  1619,
                  1621
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 78
                  },
                  "start": {
                    "column": 26,
                    "line": 78
                  }
                }
              },
              "range": [
                1619,
                1621
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 78
                },
                "start": {
                  "column": 26,
                  "line": 78
                }
              }
            }
          },
          "range": [
            1616,
            1621
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 78
            },
            "start": {
              "column": 23,
              "line": 78
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 33,
            "line": 78
          },
          "start": {
            "column": 29,
            "line": 78
          }
        },
        "range": [
          1622,
          1626
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "E2",
            "optional": false,
            "range": [
              1624,
              1626
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 78
              },
              "start": {
                "column": 31,
                "line": 78
              }
            }
          },
          "range": [
            1624,
            1626
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 78
            },
            "start": {
              "column": 31,
              "line": 78
            }
          }
        }
      },
      "range": [
        1593,
        1627
      ],
      "loc": {
        "end": {
          "column": 34,
          "line": 78
        },
        "start": {
          "column": 0,
          "line": 78
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
        "name": "foo13",
        "optional": false,
        "range": [
          1645,
          1650
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 79
          },
          "start": {
            "column": 17,
            "line": 79
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
                "column": 27,
                "line": 79
              },
              "start": {
                "column": 24,
                "line": 79
              }
            },
            "range": [
              1652,
              1655
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "range": [
                  1654,
                  1655
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 79
                  },
                  "start": {
                    "column": 26,
                    "line": 79
                  }
                }
              },
              "range": [
                1654,
                1655
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 79
                },
                "start": {
                  "column": 26,
                  "line": 79
                }
              }
            }
          },
          "range": [
            1651,
            1655
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 79
            },
            "start": {
              "column": 23,
              "line": 79
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 31,
            "line": 79
          },
          "start": {
            "column": 28,
            "line": 79
          }
        },
        "range": [
          1656,
          1659
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "E",
            "optional": false,
            "range": [
              1658,
              1659
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 79
              },
              "start": {
                "column": 30,
                "line": 79
              }
            }
          },
          "range": [
            1658,
            1659
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 79
            },
            "start": {
              "column": 30,
              "line": 79
            }
          }
        }
      },
      "range": [
        1628,
        1660
      ],
      "loc": {
        "end": {
          "column": 32,
          "line": 79
        },
        "start": {
          "column": 0,
          "line": 79
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
            "name": "r4",
            "optional": false,
            "range": [
              1666,
              1668
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 81
              },
              "start": {
                "column": 4,
                "line": 81
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "range": [
                    1677,
                    1678
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 81
                    },
                    "start": {
                      "column": 15,
                      "line": 81
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "range": [
                    1679,
                    1680
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 81
                    },
                    "start": {
                      "column": 17,
                      "line": 81
                    }
                  }
                },
                "range": [
                  1677,
                  1680
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 81
                  },
                  "start": {
                    "column": 15,
                    "line": 81
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo13",
              "optional": false,
              "range": [
                1671,
                1676
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 81
                },
                "start": {
                  "column": 9,
                  "line": 81
                }
              }
            },
            "optional": false,
            "range": [
              1671,
              1681
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 81
              },
              "start": {
                "column": 9,
                "line": 81
              }
            }
          },
          "range": [
            1666,
            1681
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 81
            },
            "start": {
              "column": 4,
              "line": 81
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        1662,
        1682
      ],
      "loc": {
        "end": {
          "column": 20,
          "line": 81
        },
        "start": {
          "column": 0,
          "line": 81
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          1697,
          1700
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 83
          },
          "start": {
            "column": 13,
            "line": 83
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "range": [
          1693,
          1694
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 83
          },
          "start": {
            "column": 9,
            "line": 83
          }
        }
      },
      "params": [],
      "range": [
        1684,
        1700
      ],
      "loc": {
        "end": {
          "column": 16,
          "line": 83
        },
        "start": {
          "column": 0,
          "line": 83
        }
      }
    },
    {
      "type": "TSModuleDeclaration",
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "range": [
              1716,
              1735
            ],
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "range": [
                      1727,
                      1730
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 85
                      },
                      "start": {
                        "column": 15,
                        "line": 85
                      }
                    }
                  },
                  "init": {
                    "type": "Literal",
                    "raw": "1",
                    "value": 1,
                    "range": [
                      1733,
                      1734
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 85
                      },
                      "start": {
                        "column": 21,
                        "line": 85
                      }
                    }
                  },
                  "range": [
                    1727,
                    1734
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 85
                    },
                    "start": {
                      "column": 15,
                      "line": 85
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "var",
              "range": [
                1723,
                1735
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 85
                },
                "start": {
                  "column": 11,
                  "line": 85
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 23,
                "line": 85
              },
              "start": {
                "column": 4,
                "line": 85
              }
            }
          }
        ],
        "range": [
          1710,
          1737
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 86
          },
          "start": {
            "column": 9,
            "line": 84
          }
        }
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          1708,
          1709
        ],
        "decorators": [],
        "name": "f",
        "optional": false,
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
      "kind": "module",
      "range": [
        1701,
        1737
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 86
        },
        "start": {
          "column": 0,
          "line": 84
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
        "name": "foo14",
        "optional": false,
        "range": [
          1755,
          1760
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 87
          },
          "start": {
            "column": 17,
            "line": 87
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
                "column": 34,
                "line": 87
              },
              "start": {
                "column": 24,
                "line": 87
              }
            },
            "range": [
              1762,
              1772
            ],
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "range": [
                  1771,
                  1772
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 87
                  },
                  "start": {
                    "column": 33,
                    "line": 87
                  }
                }
              },
              "range": [
                1764,
                1772
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 87
                },
                "start": {
                  "column": 26,
                  "line": 87
                }
              }
            }
          },
          "range": [
            1761,
            1772
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 87
            },
            "start": {
              "column": 23,
              "line": 87
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 45,
            "line": 87
          },
          "start": {
            "column": 35,
            "line": 87
          }
        },
        "range": [
          1773,
          1783
        ],
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "exprName": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "range": [
              1782,
              1783
            ],
            "loc": {
              "end": {
                "column": 45,
                "line": 87
              },
              "start": {
                "column": 44,
                "line": 87
              }
            }
          },
          "range": [
            1775,
            1783
          ],
          "loc": {
            "end": {
              "column": 45,
              "line": 87
            },
            "start": {
              "column": 37,
              "line": 87
            }
          }
        }
      },
      "range": [
        1738,
        1784
      ],
      "loc": {
        "end": {
          "column": 46,
          "line": 87
        },
        "start": {
          "column": 0,
          "line": 87
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
        "name": "foo14",
        "optional": false,
        "range": [
          1802,
          1807
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 88
          },
          "start": {
            "column": 17,
            "line": 88
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
                "column": 27,
                "line": 88
              },
              "start": {
                "column": 24,
                "line": 88
              }
            },
            "range": [
              1809,
              1812
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "range": [
                  1811,
                  1812
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 88
                  },
                  "start": {
                    "column": 26,
                    "line": 88
                  }
                }
              },
              "range": [
                1811,
                1812
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 88
                },
                "start": {
                  "column": 26,
                  "line": 88
                }
              }
            }
          },
          "range": [
            1808,
            1812
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 88
            },
            "start": {
              "column": 23,
              "line": 88
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 31,
            "line": 88
          },
          "start": {
            "column": 28,
            "line": 88
          }
        },
        "range": [
          1813,
          1816
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "E",
            "optional": false,
            "range": [
              1815,
              1816
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 88
              },
              "start": {
                "column": 30,
                "line": 88
              }
            }
          },
          "range": [
            1815,
            1816
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 88
            },
            "start": {
              "column": 30,
              "line": 88
            }
          }
        }
      },
      "range": [
        1785,
        1817
      ],
      "loc": {
        "end": {
          "column": 32,
          "line": 88
        },
        "start": {
          "column": 0,
          "line": 88
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
            "name": "r4",
            "optional": false,
            "range": [
              1823,
              1825
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 90
              },
              "start": {
                "column": 4,
                "line": 90
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "range": [
                    1834,
                    1835
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 90
                    },
                    "start": {
                      "column": 15,
                      "line": 90
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "range": [
                    1836,
                    1837
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 90
                    },
                    "start": {
                      "column": 17,
                      "line": 90
                    }
                  }
                },
                "range": [
                  1834,
                  1837
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 90
                  },
                  "start": {
                    "column": 15,
                    "line": 90
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo14",
              "optional": false,
              "range": [
                1828,
                1833
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 90
                },
                "start": {
                  "column": 9,
                  "line": 90
                }
              }
            },
            "optional": false,
            "range": [
              1828,
              1838
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 90
              },
              "start": {
                "column": 9,
                "line": 90
              }
            }
          },
          "range": [
            1823,
            1838
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 90
            },
            "start": {
              "column": 4,
              "line": 90
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        1819,
        1839
      ],
      "loc": {
        "end": {
          "column": 20,
          "line": 90
        },
        "start": {
          "column": 0,
          "line": 90
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          1850,
          1865
        ],
        "body": [
          {
            "type": "PropertyDefinition",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "baz",
              "optional": false,
              "range": [
                1852,
                1855
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 92
                },
                "start": {
                  "column": 11,
                  "line": 92
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 22,
                  "line": 92
                },
                "start": {
                  "column": 14,
                  "line": 92
                }
              },
              "range": [
                1855,
                1863
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  1857,
                  1863
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 92
                  },
                  "start": {
                    "column": 16,
                    "line": 92
                  }
                }
              }
            },
            "value": null,
            "range": [
              1852,
              1863
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 92
              },
              "start": {
                "column": 11,
                "line": 92
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 92
          },
          "start": {
            "column": 9,
            "line": 92
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "CC",
        "optional": false,
        "range": [
          1847,
          1849
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 92
          },
          "start": {
            "column": 6,
            "line": 92
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        1841,
        1865
      ],
      "loc": {
        "end": {
          "column": 24,
          "line": 92
        },
        "start": {
          "column": 0,
          "line": 92
        }
      }
    },
    {
      "type": "TSModuleDeclaration",
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "range": [
              1882,
              1901
            ],
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "range": [
                      1893,
                      1896
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 94
                      },
                      "start": {
                        "column": 15,
                        "line": 94
                      }
                    }
                  },
                  "init": {
                    "type": "Literal",
                    "raw": "1",
                    "value": 1,
                    "range": [
                      1899,
                      1900
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 94
                      },
                      "start": {
                        "column": 21,
                        "line": 94
                      }
                    }
                  },
                  "range": [
                    1893,
                    1900
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 94
                    },
                    "start": {
                      "column": 15,
                      "line": 94
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "var",
              "range": [
                1889,
                1901
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 94
                },
                "start": {
                  "column": 11,
                  "line": 94
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 23,
                "line": 94
              },
              "start": {
                "column": 4,
                "line": 94
              }
            }
          }
        ],
        "range": [
          1876,
          1903
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 95
          },
          "start": {
            "column": 10,
            "line": 93
          }
        }
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          1873,
          1875
        ],
        "decorators": [],
        "name": "CC",
        "optional": false,
        "loc": {
          "end": {
            "column": 9,
            "line": 93
          },
          "start": {
            "column": 7,
            "line": 93
          }
        }
      },
      "kind": "module",
      "range": [
        1866,
        1903
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 95
        },
        "start": {
          "column": 0,
          "line": 93
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
        "name": "foo15",
        "optional": false,
        "range": [
          1921,
          1926
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 96
          },
          "start": {
            "column": 17,
            "line": 96
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
                "column": 28,
                "line": 96
              },
              "start": {
                "column": 24,
                "line": 96
              }
            },
            "range": [
              1928,
              1932
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "CC",
                "optional": false,
                "range": [
                  1930,
                  1932
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 96
                  },
                  "start": {
                    "column": 26,
                    "line": 96
                  }
                }
              },
              "range": [
                1930,
                1932
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 96
                },
                "start": {
                  "column": 26,
                  "line": 96
                }
              }
            }
          },
          "range": [
            1927,
            1932
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 96
            },
            "start": {
              "column": 23,
              "line": 96
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 33,
            "line": 96
          },
          "start": {
            "column": 29,
            "line": 96
          }
        },
        "range": [
          1933,
          1937
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "CC",
            "optional": false,
            "range": [
              1935,
              1937
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 96
              },
              "start": {
                "column": 31,
                "line": 96
              }
            }
          },
          "range": [
            1935,
            1937
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 96
            },
            "start": {
              "column": 31,
              "line": 96
            }
          }
        }
      },
      "range": [
        1904,
        1938
      ],
      "loc": {
        "end": {
          "column": 34,
          "line": 96
        },
        "start": {
          "column": 0,
          "line": 96
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
        "name": "foo15",
        "optional": false,
        "range": [
          1956,
          1961
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 97
          },
          "start": {
            "column": 17,
            "line": 97
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
                "column": 27,
                "line": 97
              },
              "start": {
                "column": 24,
                "line": 97
              }
            },
            "range": [
              1963,
              1966
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "range": [
                  1965,
                  1966
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 97
                  },
                  "start": {
                    "column": 26,
                    "line": 97
                  }
                }
              },
              "range": [
                1965,
                1966
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 97
                },
                "start": {
                  "column": 26,
                  "line": 97
                }
              }
            }
          },
          "range": [
            1962,
            1966
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 97
            },
            "start": {
              "column": 23,
              "line": 97
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 31,
            "line": 97
          },
          "start": {
            "column": 28,
            "line": 97
          }
        },
        "range": [
          1967,
          1970
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "E",
            "optional": false,
            "range": [
              1969,
              1970
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 97
              },
              "start": {
                "column": 30,
                "line": 97
              }
            }
          },
          "range": [
            1969,
            1970
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 97
            },
            "start": {
              "column": 30,
              "line": 97
            }
          }
        }
      },
      "range": [
        1939,
        1971
      ],
      "loc": {
        "end": {
          "column": 32,
          "line": 97
        },
        "start": {
          "column": 0,
          "line": 97
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
            "name": "r4",
            "optional": false,
            "range": [
              1977,
              1979
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 99
              },
              "start": {
                "column": 4,
                "line": 99
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "range": [
                    1988,
                    1989
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 99
                    },
                    "start": {
                      "column": 15,
                      "line": 99
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "range": [
                    1990,
                    1991
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 99
                    },
                    "start": {
                      "column": 17,
                      "line": 99
                    }
                  }
                },
                "range": [
                  1988,
                  1991
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 99
                  },
                  "start": {
                    "column": 15,
                    "line": 99
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo15",
              "optional": false,
              "range": [
                1982,
                1987
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 99
                },
                "start": {
                  "column": 9,
                  "line": 99
                }
              }
            },
            "optional": false,
            "range": [
              1982,
              1992
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 99
              },
              "start": {
                "column": 9,
                "line": 99
              }
            }
          },
          "range": [
            1977,
            1992
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 99
            },
            "start": {
              "column": 4,
              "line": 99
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        1973,
        1993
      ],
      "loc": {
        "end": {
          "column": 20,
          "line": 99
        },
        "start": {
          "column": 0,
          "line": 99
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
        "name": "foo16",
        "optional": false,
        "range": [
          2012,
          2017
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 101
          },
          "start": {
            "column": 17,
            "line": 101
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
                "column": 32,
                "line": 101
              },
              "start": {
                "column": 24,
                "line": 101
              }
            },
            "range": [
              2019,
              2027
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Object",
                "optional": false,
                "range": [
                  2021,
                  2027
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 101
                  },
                  "start": {
                    "column": 26,
                    "line": 101
                  }
                }
              },
              "range": [
                2021,
                2027
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 101
                },
                "start": {
                  "column": 26,
                  "line": 101
                }
              }
            }
          },
          "range": [
            2018,
            2027
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 101
            },
            "start": {
              "column": 23,
              "line": 101
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 41,
            "line": 101
          },
          "start": {
            "column": 33,
            "line": 101
          }
        },
        "range": [
          2028,
          2036
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Object",
            "optional": false,
            "range": [
              2030,
              2036
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 101
              },
              "start": {
                "column": 35,
                "line": 101
              }
            }
          },
          "range": [
            2030,
            2036
          ],
          "loc": {
            "end": {
              "column": 41,
              "line": 101
            },
            "start": {
              "column": 35,
              "line": 101
            }
          }
        }
      },
      "range": [
        1995,
        2037
      ],
      "loc": {
        "end": {
          "column": 42,
          "line": 101
        },
        "start": {
          "column": 0,
          "line": 101
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
        "name": "foo16",
        "optional": false,
        "range": [
          2055,
          2060
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 102
          },
          "start": {
            "column": 17,
            "line": 102
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
                "column": 27,
                "line": 102
              },
              "start": {
                "column": 24,
                "line": 102
              }
            },
            "range": [
              2062,
              2065
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "range": [
                  2064,
                  2065
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 102
                  },
                  "start": {
                    "column": 26,
                    "line": 102
                  }
                }
              },
              "range": [
                2064,
                2065
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 102
                },
                "start": {
                  "column": 26,
                  "line": 102
                }
              }
            }
          },
          "range": [
            2061,
            2065
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 102
            },
            "start": {
              "column": 23,
              "line": 102
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 31,
            "line": 102
          },
          "start": {
            "column": 28,
            "line": 102
          }
        },
        "range": [
          2066,
          2069
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "E",
            "optional": false,
            "range": [
              2068,
              2069
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 102
              },
              "start": {
                "column": 30,
                "line": 102
              }
            }
          },
          "range": [
            2068,
            2069
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 102
            },
            "start": {
              "column": 30,
              "line": 102
            }
          }
        }
      },
      "range": [
        2038,
        2070
      ],
      "loc": {
        "end": {
          "column": 32,
          "line": 102
        },
        "start": {
          "column": 0,
          "line": 102
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
            "name": "r4",
            "optional": false,
            "range": [
              2076,
              2078
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 104
              },
              "start": {
                "column": 4,
                "line": 104
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "range": [
                    2087,
                    2088
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 104
                    },
                    "start": {
                      "column": 15,
                      "line": 104
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "range": [
                    2089,
                    2090
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 104
                    },
                    "start": {
                      "column": 17,
                      "line": 104
                    }
                  }
                },
                "range": [
                  2087,
                  2090
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 104
                  },
                  "start": {
                    "column": 15,
                    "line": 104
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo16",
              "optional": false,
              "range": [
                2081,
                2086
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 104
                },
                "start": {
                  "column": 9,
                  "line": 104
                }
              }
            },
            "optional": false,
            "range": [
              2081,
              2091
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 104
              },
              "start": {
                "column": 9,
                "line": 104
              }
            }
          },
          "range": [
            2076,
            2091
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 104
            },
            "start": {
              "column": 4,
              "line": 104
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        2072,
        2092
      ],
      "loc": {
        "end": {
          "column": 20,
          "line": 104
        },
        "start": {
          "column": 0,
          "line": 104
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
        "name": "foo17",
        "optional": false,
        "range": [
          2111,
          2116
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 106
          },
          "start": {
            "column": 17,
            "line": 106
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
                "column": 28,
                "line": 106
              },
              "start": {
                "column": 24,
                "line": 106
              }
            },
            "range": [
              2118,
              2122
            ],
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [],
              "range": [
                2120,
                2122
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 106
                },
                "start": {
                  "column": 26,
                  "line": 106
                }
              }
            }
          },
          "range": [
            2117,
            2122
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 106
            },
            "start": {
              "column": 23,
              "line": 106
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 33,
            "line": 106
          },
          "start": {
            "column": 29,
            "line": 106
          }
        },
        "range": [
          2123,
          2127
        ],
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "members": [],
          "range": [
            2125,
            2127
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 106
            },
            "start": {
              "column": 31,
              "line": 106
            }
          }
        }
      },
      "range": [
        2094,
        2128
      ],
      "loc": {
        "end": {
          "column": 34,
          "line": 106
        },
        "start": {
          "column": 0,
          "line": 106
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
        "name": "foo17",
        "optional": false,
        "range": [
          2146,
          2151
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 107
          },
          "start": {
            "column": 17,
            "line": 107
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
                "column": 27,
                "line": 107
              },
              "start": {
                "column": 24,
                "line": 107
              }
            },
            "range": [
              2153,
              2156
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "range": [
                  2155,
                  2156
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 107
                  },
                  "start": {
                    "column": 26,
                    "line": 107
                  }
                }
              },
              "range": [
                2155,
                2156
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 107
                },
                "start": {
                  "column": 26,
                  "line": 107
                }
              }
            }
          },
          "range": [
            2152,
            2156
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 107
            },
            "start": {
              "column": 23,
              "line": 107
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 31,
            "line": 107
          },
          "start": {
            "column": 28,
            "line": 107
          }
        },
        "range": [
          2157,
          2160
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "E",
            "optional": false,
            "range": [
              2159,
              2160
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 107
              },
              "start": {
                "column": 30,
                "line": 107
              }
            }
          },
          "range": [
            2159,
            2160
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 107
            },
            "start": {
              "column": 30,
              "line": 107
            }
          }
        }
      },
      "range": [
        2129,
        2161
      ],
      "loc": {
        "end": {
          "column": 32,
          "line": 107
        },
        "start": {
          "column": 0,
          "line": 107
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
            "name": "r4",
            "optional": false,
            "range": [
              2167,
              2169
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 109
              },
              "start": {
                "column": 4,
                "line": 109
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "range": [
                    2178,
                    2179
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 109
                    },
                    "start": {
                      "column": 15,
                      "line": 109
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "range": [
                    2180,
                    2181
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 109
                    },
                    "start": {
                      "column": 17,
                      "line": 109
                    }
                  }
                },
                "range": [
                  2178,
                  2181
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 109
                  },
                  "start": {
                    "column": 15,
                    "line": 109
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo16",
              "optional": false,
              "range": [
                2172,
                2177
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 109
                },
                "start": {
                  "column": 9,
                  "line": 109
                }
              }
            },
            "optional": false,
            "range": [
              2172,
              2182
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 109
              },
              "start": {
                "column": 9,
                "line": 109
              }
            }
          },
          "range": [
            2167,
            2182
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 109
            },
            "start": {
              "column": 4,
              "line": 109
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        2163,
        2183
      ],
      "loc": {
        "end": {
          "column": 20,
          "line": 109
        },
        "start": {
          "column": 0,
          "line": 109
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 20,
      "line": 109
    },
    "start": {
      "column": 0,
      "line": 4
    }
  },
  "hashbang": null
}
```
