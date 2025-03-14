__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    223
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          8,
          11
        ],
        "body": [],
        "loc": {
          "end": {
            "column": 11,
            "line": 1
          },
          "start": {
            "column": 8,
            "line": 1
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "range": [
          6,
          7
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 1
          },
          "start": {
            "column": 6,
            "line": 1
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        0,
        11
      ],
      "loc": {
        "end": {
          "column": 11,
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
          24,
          58
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": true,
            "key": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "range": [
                  31,
                  37
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 3
                  },
                  "start": {
                    "column": 5,
                    "line": 3
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "iterator",
                "optional": false,
                "range": [
                  38,
                  46
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 3
                  },
                  "start": {
                    "column": 12,
                    "line": 3
                  }
                }
              },
              "range": [
                31,
                46
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 3
                },
                "start": {
                  "column": 5,
                  "line": 3
                }
              }
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 29,
                  "line": 3
                },
                "start": {
                  "column": 22,
                  "line": 3
                }
              },
              "range": [
                48,
                55
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
                      "name": "x",
                      "optional": false,
                      "range": [
                        52,
                        53
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 3
                        },
                        "start": {
                          "column": 26,
                          "line": 3
                        }
                      }
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "range": [
                      52,
                      53
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 3
                      },
                      "start": {
                        "column": 26,
                        "line": 3
                      }
                    }
                  }
                ],
                "range": [
                  50,
                  55
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 3
                  },
                  "start": {
                    "column": 24,
                    "line": 3
                  }
                }
              }
            },
            "range": [
              30,
              56
            ],
            "loc": {
              "end": {
                "column": 30,
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
            "column": 12,
            "line": 2
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "range": [
          22,
          23
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 2
          },
          "start": {
            "column": 10,
            "line": 2
          }
        }
      },
      "range": [
        12,
        58
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
          77,
          80
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 6
          },
          "start": {
            "column": 17,
            "line": 6
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 25,
                "line": 6
              },
              "start": {
                "column": 22,
                "line": 6
              }
            },
            "range": [
              82,
              85
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "I",
                "optional": false,
                "range": [
                  84,
                  85
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 6
                  },
                  "start": {
                    "column": 24,
                    "line": 6
                  }
                }
              },
              "range": [
                84,
                85
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 6
                },
                "start": {
                  "column": 24,
                  "line": 6
                }
              }
            }
          },
          "range": [
            81,
            85
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 6
            },
            "start": {
              "column": 21,
              "line": 6
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 29,
            "line": 6
          },
          "start": {
            "column": 26,
            "line": 6
          }
        },
        "range": [
          86,
          89
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "I",
            "optional": false,
            "range": [
              88,
              89
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 6
              },
              "start": {
                "column": 28,
                "line": 6
              }
            }
          },
          "range": [
            88,
            89
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 6
            },
            "start": {
              "column": 28,
              "line": 6
            }
          }
        }
      },
      "range": [
        60,
        90
      ],
      "loc": {
        "end": {
          "column": 30,
          "line": 6
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
          108,
          111
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 7
          },
          "start": {
            "column": 17,
            "line": 7
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 27,
                "line": 7
              },
              "start": {
                "column": 22,
                "line": 7
              }
            },
            "range": [
              113,
              118
            ],
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                115,
                118
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 7
                },
                "start": {
                  "column": 24,
                  "line": 7
                }
              }
            }
          },
          "range": [
            112,
            118
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 7
            },
            "start": {
              "column": 21,
              "line": 7
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 33,
            "line": 7
          },
          "start": {
            "column": 28,
            "line": 7
          }
        },
        "range": [
          119,
          124
        ],
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "range": [
            121,
            124
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 7
            },
            "start": {
              "column": 30,
              "line": 7
            }
          }
        }
      },
      "range": [
        91,
        125
      ],
      "loc": {
        "end": {
          "column": 34,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 7
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
        "name": "bar",
        "optional": false,
        "range": [
          144,
          147
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 9
          },
          "start": {
            "column": 17,
            "line": 9
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 25,
                "line": 9
              },
              "start": {
                "column": 22,
                "line": 9
              }
            },
            "range": [
              149,
              152
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "range": [
                  151,
                  152
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 9
                  },
                  "start": {
                    "column": 24,
                    "line": 9
                  }
                }
              },
              "range": [
                151,
                152
              ],
              "loc": {
                "end": {
                  "column": 25,
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
            148,
            152
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 9
            },
            "start": {
              "column": 21,
              "line": 9
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 29,
            "line": 9
          },
          "start": {
            "column": 26,
            "line": 9
          }
        },
        "range": [
          153,
          156
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "C",
            "optional": false,
            "range": [
              155,
              156
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 9
              },
              "start": {
                "column": 28,
                "line": 9
              }
            }
          },
          "range": [
            155,
            156
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 9
            },
            "start": {
              "column": 28,
              "line": 9
            }
          }
        }
      },
      "range": [
        127,
        157
      ],
      "loc": {
        "end": {
          "column": 30,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 9
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
        "name": "bar",
        "optional": false,
        "range": [
          175,
          178
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 10
          },
          "start": {
            "column": 17,
            "line": 10
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 27,
                "line": 10
              },
              "start": {
                "column": 22,
                "line": 10
              }
            },
            "range": [
              180,
              185
            ],
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                182,
                185
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 10
                },
                "start": {
                  "column": 24,
                  "line": 10
                }
              }
            }
          },
          "range": [
            179,
            185
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 10
            },
            "start": {
              "column": 21,
              "line": 10
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 33,
            "line": 10
          },
          "start": {
            "column": 28,
            "line": 10
          }
        },
        "range": [
          186,
          191
        ],
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "range": [
            188,
            191
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 10
            },
            "start": {
              "column": 30,
              "line": 10
            }
          }
        }
      },
      "range": [
        158,
        192
      ],
      "loc": {
        "end": {
          "column": 34,
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
        "type": "CallExpression",
        "arguments": [
          {
            "type": "NewExpression",
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "range": [
                202,
                203
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 12
                },
                "start": {
                  "column": 8,
                  "line": 12
                }
              }
            },
            "range": [
              198,
              203
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 12
              },
              "start": {
                "column": 4,
                "line": 12
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
            194,
            197
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 12
            },
            "start": {
              "column": 0,
              "line": 12
            }
          }
        },
        "optional": false,
        "range": [
          194,
          204
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 12
          },
          "start": {
            "column": 0,
            "line": 12
          }
        }
      },
      "range": [
        194,
        205
      ],
      "loc": {
        "end": {
          "column": 11,
          "line": 12
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
            "name": "i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 8,
                  "line": 13
                },
                "start": {
                  "column": 5,
                  "line": 13
                }
              },
              "range": [
                211,
                214
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "range": [
                    213,
                    214
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 13
                    },
                    "start": {
                      "column": 7,
                      "line": 13
                    }
                  }
                },
                "range": [
                  213,
                  214
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 13
                  },
                  "start": {
                    "column": 7,
                    "line": 13
                  }
                }
              }
            },
            "range": [
              210,
              214
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 13
              },
              "start": {
                "column": 4,
                "line": 13
              }
            }
          },
          "init": null,
          "range": [
            210,
            214
          ],
          "loc": {
            "end": {
              "column": 8,
              "line": 13
            },
            "start": {
              "column": 4,
              "line": 13
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        206,
        215
      ],
      "loc": {
        "end": {
          "column": 9,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 13
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
            "name": "i",
            "optional": false,
            "range": [
              220,
              221
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 14
              },
              "start": {
                "column": 4,
                "line": 14
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bar",
          "optional": false,
          "range": [
            216,
            219
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 14
            },
            "start": {
              "column": 0,
              "line": 14
            }
          }
        },
        "optional": false,
        "range": [
          216,
          222
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 14
          },
          "start": {
            "column": 0,
            "line": 14
          }
        }
      },
      "range": [
        216,
        223
      ],
      "loc": {
        "end": {
          "column": 7,
          "line": 14
        },
        "start": {
          "column": 0,
          "line": 14
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 7,
      "line": 14
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
