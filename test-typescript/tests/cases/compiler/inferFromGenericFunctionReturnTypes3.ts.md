__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    22,
    3901
  ],
  "body": [
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
                  "type": "Literal",
                  "raw": "true",
                  "value": true,
                  "range": [
                    89,
                    93
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 4
                    },
                    "start": {
                      "column": 27,
                      "line": 4
                    }
                  }
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "range": [
                    73,
                    80
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 4
                    },
                    "start": {
                      "column": 11,
                      "line": 4
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "resolve",
                  "optional": false,
                  "range": [
                    81,
                    88
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 4
                    },
                    "start": {
                      "column": 19,
                      "line": 4
                    }
                  }
                },
                "range": [
                  73,
                  88
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 4
                  },
                  "start": {
                    "column": 11,
                    "line": 4
                  }
                }
              },
              "optional": false,
              "range": [
                73,
                94
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 4
                },
                "start": {
                  "column": 11,
                  "line": 4
                }
              }
            },
            "range": [
              66,
              95
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 4
              },
              "start": {
                "column": 4,
                "line": 4
              }
            }
          }
        ],
        "range": [
          60,
          97
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 5
          },
          "start": {
            "column": 38,
            "line": 3
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "truePromise",
        "optional": false,
        "range": [
          31,
          42
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 3
          },
          "start": {
            "column": 9,
            "line": 3
          }
        }
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 37,
            "line": 3
          },
          "start": {
            "column": 22,
            "line": 3
          }
        },
        "range": [
          44,
          59
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              53,
              59
            ],
            "params": [
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "true",
                  "value": true,
                  "range": [
                    54,
                    58
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 3
                    },
                    "start": {
                      "column": 32,
                      "line": 3
                    }
                  }
                },
                "range": [
                  54,
                  58
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 3
                  },
                  "start": {
                    "column": 32,
                    "line": 3
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 3
              },
              "start": {
                "column": 31,
                "line": 3
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "range": [
              46,
              53
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 3
              },
              "start": {
                "column": 24,
                "line": 3
              }
            }
          },
          "range": [
            46,
            59
          ],
          "loc": {
            "end": {
              "column": 37,
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
        22,
        97
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          117,
          134
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "range": [
                123,
                128
              ],
              "loc": {
                "end": {
                  "column": 9,
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
                  "column": 12,
                  "line": 8
                },
                "start": {
                  "column": 9,
                  "line": 8
                }
              },
              "range": [
                128,
                131
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    130,
                    131
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 8
                    },
                    "start": {
                      "column": 11,
                      "line": 8
                    }
                  }
                },
                "range": [
                  130,
                  131
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 8
                  },
                  "start": {
                    "column": 11,
                    "line": 8
                  }
                }
              }
            },
            "range": [
              123,
              132
            ],
            "loc": {
              "end": {
                "column": 13,
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
            "column": 18,
            "line": 7
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Wrap",
        "optional": false,
        "range": [
          109,
          113
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 7
          },
          "start": {
            "column": 10,
            "line": 7
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 17,
            "line": 7
          },
          "start": {
            "column": 14,
            "line": 7
          }
        },
        "range": [
          113,
          116
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
                114,
                115
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 7
                },
                "start": {
                  "column": 15,
                  "line": 7
                }
              }
            },
            "out": false,
            "range": [
              114,
              115
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 7
              },
              "start": {
                "column": 15,
                "line": 7
              }
            }
          }
        ]
      },
      "range": [
        99,
        134
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 7
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
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "range": [
                      187,
                      192
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 12
                      },
                      "start": {
                        "column": 13,
                        "line": 12
                      }
                    }
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": true,
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "range": [
                      187,
                      192
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 12
                      },
                      "start": {
                        "column": 13,
                        "line": 12
                      }
                    }
                  },
                  "range": [
                    187,
                    192
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 12
                    },
                    "start": {
                      "column": 13,
                      "line": 12
                    }
                  }
                }
              ],
              "range": [
                185,
                194
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 12
                },
                "start": {
                  "column": 11,
                  "line": 12
                }
              }
            },
            "range": [
              178,
              195
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 12
              },
              "start": {
                "column": 4,
                "line": 12
              }
            }
          }
        ],
        "range": [
          172,
          197
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 13
          },
          "start": {
            "column": 36,
            "line": 11
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "wrap",
        "optional": false,
        "range": [
          145,
          149
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 11
          },
          "start": {
            "column": 9,
            "line": 11
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 25,
                "line": 11
              },
              "start": {
                "column": 22,
                "line": 11
              }
            },
            "range": [
              158,
              161
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  160,
                  161
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 11
                  },
                  "start": {
                    "column": 24,
                    "line": 11
                  }
                }
              },
              "range": [
                160,
                161
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 11
                },
                "start": {
                  "column": 24,
                  "line": 11
                }
              }
            }
          },
          "range": [
            153,
            161
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 11
            },
            "start": {
              "column": 17,
              "line": 11
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 35,
            "line": 11
          },
          "start": {
            "column": 26,
            "line": 11
          }
        },
        "range": [
          162,
          171
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              168,
              171
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
                    169,
                    170
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 11
                    },
                    "start": {
                      "column": 33,
                      "line": 11
                    }
                  }
                },
                "range": [
                  169,
                  170
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 11
                  },
                  "start": {
                    "column": 33,
                    "line": 11
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 11
              },
              "start": {
                "column": 32,
                "line": 11
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Wrap",
            "optional": false,
            "range": [
              164,
              168
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 11
              },
              "start": {
                "column": 28,
                "line": 11
              }
            }
          },
          "range": [
            164,
            171
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 11
            },
            "start": {
              "column": 28,
              "line": 11
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 16,
            "line": 11
          },
          "start": {
            "column": 13,
            "line": 11
          }
        },
        "range": [
          149,
          152
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
                150,
                151
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 11
                },
                "start": {
                  "column": 14,
                  "line": 11
                }
              }
            },
            "out": false,
            "range": [
              150,
              151
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 11
              },
              "start": {
                "column": 14,
                "line": 11
              }
            }
          }
        ]
      },
      "range": [
        136,
        197
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 11
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
                  "type": "Literal",
                  "raw": "'foo'",
                  "value": "foo",
                  "range": [
                    252,
                    257
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 16
                    },
                    "start": {
                      "column": 16,
                      "line": 16
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "wrap",
                "optional": false,
                "range": [
                  247,
                  251
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 16
                  },
                  "start": {
                    "column": 11,
                    "line": 16
                  }
                }
              },
              "optional": false,
              "range": [
                247,
                258
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 16
                },
                "start": {
                  "column": 11,
                  "line": 16
                }
              }
            },
            "range": [
              240,
              259
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 16
              },
              "start": {
                "column": 4,
                "line": 16
              }
            }
          }
        ],
        "range": [
          234,
          261
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 17
          },
          "start": {
            "column": 35,
            "line": 15
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "wrappedFoo",
        "optional": false,
        "range": [
          208,
          218
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 15
          },
          "start": {
            "column": 9,
            "line": 15
          }
        }
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 34,
            "line": 15
          },
          "start": {
            "column": 21,
            "line": 15
          }
        },
        "range": [
          220,
          233
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              226,
              233
            ],
            "params": [
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "'foo'",
                  "value": "foo",
                  "range": [
                    227,
                    232
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
                "range": [
                  227,
                  232
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
              }
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 15
              },
              "start": {
                "column": 27,
                "line": 15
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Wrap",
            "optional": false,
            "range": [
              222,
              226
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 15
              },
              "start": {
                "column": 23,
                "line": 15
              }
            }
          },
          "range": [
            222,
            233
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 15
            },
            "start": {
              "column": 23,
              "line": 15
            }
          }
        }
      },
      "range": [
        199,
        261
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 17
        },
        "start": {
          "column": 0,
          "line": 15
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
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "range": [
                      322,
                      327
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 20
                      },
                      "start": {
                        "column": 13,
                        "line": 20
                      }
                    }
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": true,
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "range": [
                      322,
                      327
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 20
                      },
                      "start": {
                        "column": 13,
                        "line": 20
                      }
                    }
                  },
                  "range": [
                    322,
                    327
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 20
                    },
                    "start": {
                      "column": 13,
                      "line": 20
                    }
                  }
                }
              ],
              "range": [
                320,
                329
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 20
                },
                "start": {
                  "column": 11,
                  "line": 20
                }
              }
            },
            "range": [
              313,
              330
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 20
              },
              "start": {
                "column": 4,
                "line": 20
              }
            }
          }
        ],
        "range": [
          307,
          332
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 21
          },
          "start": {
            "column": 44,
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
        "name": "wrapBar",
        "optional": false,
        "range": [
          272,
          279
        ],
        "loc": {
          "end": {
            "column": 16,
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
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 29,
                "line": 19
              },
              "start": {
                "column": 22,
                "line": 19
              }
            },
            "range": [
              285,
              292
            ],
            "typeAnnotation": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "raw": "'bar'",
                "value": "bar",
                "range": [
                  287,
                  292
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 19
                  },
                  "start": {
                    "column": 24,
                    "line": 19
                  }
                }
              },
              "range": [
                287,
                292
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 19
                },
                "start": {
                  "column": 24,
                  "line": 19
                }
              }
            }
          },
          "range": [
            280,
            292
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 19
            },
            "start": {
              "column": 17,
              "line": 19
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 43,
            "line": 19
          },
          "start": {
            "column": 30,
            "line": 19
          }
        },
        "range": [
          293,
          306
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              299,
              306
            ],
            "params": [
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "'bar'",
                  "value": "bar",
                  "range": [
                    300,
                    305
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 19
                    },
                    "start": {
                      "column": 37,
                      "line": 19
                    }
                  }
                },
                "range": [
                  300,
                  305
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 19
                  },
                  "start": {
                    "column": 37,
                    "line": 19
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 19
              },
              "start": {
                "column": 36,
                "line": 19
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Wrap",
            "optional": false,
            "range": [
              295,
              299
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 19
              },
              "start": {
                "column": 32,
                "line": 19
              }
            }
          },
          "range": [
            295,
            306
          ],
          "loc": {
            "end": {
              "column": 43,
              "line": 19
            },
            "start": {
              "column": 32,
              "line": 19
            }
          }
        }
      },
      "range": [
        263,
        332
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 21
        },
        "start": {
          "column": 0,
          "line": 19
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
                  "name": "value",
                  "optional": false,
                  "range": [
                    381,
                    386
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 24
                    },
                    "start": {
                      "column": 10,
                      "line": 24
                    }
                  }
                },
                "init": {
                  "type": "Literal",
                  "raw": "'bar'",
                  "value": "bar",
                  "range": [
                    389,
                    394
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 24
                    },
                    "start": {
                      "column": 18,
                      "line": 24
                    }
                  }
                },
                "range": [
                  381,
                  394
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 24
                  },
                  "start": {
                    "column": 10,
                    "line": 24
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              375,
              395
            ],
            "loc": {
              "end": {
                "column": 24,
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
                  "name": "inferred",
                  "optional": false,
                  "range": [
                    406,
                    414
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 25
                    },
                    "start": {
                      "column": 10,
                      "line": 25
                    }
                  }
                },
                "init": {
                  "type": "CallExpression",
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "range": [
                        425,
                        430
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 25
                        },
                        "start": {
                          "column": 29,
                          "line": 25
                        }
                      }
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "wrapBar",
                    "optional": false,
                    "range": [
                      417,
                      424
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 25
                      },
                      "start": {
                        "column": 21,
                        "line": 25
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    417,
                    431
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 25
                    },
                    "start": {
                      "column": 21,
                      "line": 25
                    }
                  }
                },
                "range": [
                  406,
                  431
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 25
                  },
                  "start": {
                    "column": 10,
                    "line": 25
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              400,
              432
            ],
            "loc": {
              "end": {
                "column": 36,
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
                  "name": "literal",
                  "optional": false,
                  "range": [
                    443,
                    450
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 26
                    },
                    "start": {
                      "column": 10,
                      "line": 26
                    }
                  }
                },
                "init": {
                  "type": "CallExpression",
                  "arguments": [
                    {
                      "type": "Literal",
                      "raw": "'bar'",
                      "value": "bar",
                      "range": [
                        461,
                        466
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 26
                        },
                        "start": {
                          "column": 28,
                          "line": 26
                        }
                      }
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "wrapBar",
                    "optional": false,
                    "range": [
                      453,
                      460
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 26
                      },
                      "start": {
                        "column": 20,
                        "line": 26
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    453,
                    467
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 26
                    },
                    "start": {
                      "column": 20,
                      "line": 26
                    }
                  }
                },
                "range": [
                  443,
                  467
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 26
                  },
                  "start": {
                    "column": 10,
                    "line": 26
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              437,
              468
            ],
            "loc": {
              "end": {
                "column": 35,
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
                  "name": "value2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 27
                      },
                      "start": {
                        "column": 16,
                        "line": 27
                      }
                    },
                    "range": [
                      485,
                      493
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        487,
                        493
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 27
                        },
                        "start": {
                          "column": 18,
                          "line": 27
                        }
                      }
                    }
                  },
                  "range": [
                    479,
                    493
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 27
                    },
                    "start": {
                      "column": 10,
                      "line": 27
                    }
                  }
                },
                "init": {
                  "type": "Literal",
                  "raw": "'bar'",
                  "value": "bar",
                  "range": [
                    496,
                    501
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 27
                    },
                    "start": {
                      "column": 27,
                      "line": 27
                    }
                  }
                },
                "range": [
                  479,
                  501
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 27
                  },
                  "start": {
                    "column": 10,
                    "line": 27
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              473,
              502
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 27
              },
              "start": {
                "column": 4,
                "line": 27
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
                  "name": "literal2",
                  "optional": false,
                  "range": [
                    513,
                    521
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 28
                    },
                    "start": {
                      "column": 10,
                      "line": 28
                    }
                  }
                },
                "init": {
                  "type": "CallExpression",
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "value2",
                      "optional": false,
                      "range": [
                        532,
                        538
                      ],
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 28
                        },
                        "start": {
                          "column": 29,
                          "line": 28
                        }
                      }
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "wrapBar",
                    "optional": false,
                    "range": [
                      524,
                      531
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 28
                      },
                      "start": {
                        "column": 21,
                        "line": 28
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    524,
                    539
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 28
                    },
                    "start": {
                      "column": 21,
                      "line": 28
                    }
                  }
                },
                "range": [
                  513,
                  539
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 28
                  },
                  "start": {
                    "column": 10,
                    "line": 28
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              507,
              540
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 28
              },
              "start": {
                "column": 4,
                "line": 28
              }
            }
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "range": [
                    567,
                    572
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 29
                    },
                    "start": {
                      "column": 16,
                      "line": 29
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "wrap",
                "optional": false,
                "range": [
                  562,
                  566
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 29
                  },
                  "start": {
                    "column": 11,
                    "line": 29
                  }
                }
              },
              "optional": false,
              "range": [
                562,
                573
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 29
                },
                "start": {
                  "column": 11,
                  "line": 29
                }
              }
            },
            "range": [
              555,
              574
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 29
              },
              "start": {
                "column": 4,
                "line": 29
              }
            }
          }
        ],
        "range": [
          369,
          576
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 30
          },
          "start": {
            "column": 35,
            "line": 23
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "wrappedBar",
        "optional": false,
        "range": [
          343,
          353
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 23
          },
          "start": {
            "column": 9,
            "line": 23
          }
        }
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 34,
            "line": 23
          },
          "start": {
            "column": 21,
            "line": 23
          }
        },
        "range": [
          355,
          368
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              361,
              368
            ],
            "params": [
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "'bar'",
                  "value": "bar",
                  "range": [
                    362,
                    367
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 23
                    },
                    "start": {
                      "column": 28,
                      "line": 23
                    }
                  }
                },
                "range": [
                  362,
                  367
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 23
                  },
                  "start": {
                    "column": 28,
                    "line": 23
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 23
              },
              "start": {
                "column": 27,
                "line": 23
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Wrap",
            "optional": false,
            "range": [
              357,
              361
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 23
              },
              "start": {
                "column": 23,
                "line": 23
              }
            }
          },
          "range": [
            357,
            368
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 23
            },
            "start": {
              "column": 23,
              "line": 23
            }
          }
        }
      },
      "range": [
        334,
        576
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 30
        },
        "start": {
          "column": 0,
          "line": 23
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
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 33
                      },
                      "start": {
                        "column": 15,
                        "line": 33
                      }
                    },
                    "range": [
                      630,
                      637
                    ],
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "raw": "'baz'",
                        "value": "baz",
                        "range": [
                          632,
                          637
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 33
                          },
                          "start": {
                            "column": 17,
                            "line": 33
                          }
                        }
                      },
                      "range": [
                        632,
                        637
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 33
                        },
                        "start": {
                          "column": 17,
                          "line": 33
                        }
                      }
                    }
                  },
                  "range": [
                    625,
                    637
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 33
                    },
                    "start": {
                      "column": 10,
                      "line": 33
                    }
                  }
                },
                "init": {
                  "type": "Literal",
                  "raw": "'baz'",
                  "value": "baz",
                  "range": [
                    640,
                    645
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 33
                    },
                    "start": {
                      "column": 25,
                      "line": 33
                    }
                  }
                },
                "range": [
                  625,
                  645
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 33
                  },
                  "start": {
                    "column": 10,
                    "line": 33
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              619,
              646
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 33
              },
              "start": {
                "column": 4,
                "line": 33
              }
            }
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "range": [
                    663,
                    668
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 34
                    },
                    "start": {
                      "column": 16,
                      "line": 34
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "wrap",
                "optional": false,
                "range": [
                  658,
                  662
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 34
                  },
                  "start": {
                    "column": 11,
                    "line": 34
                  }
                }
              },
              "optional": false,
              "range": [
                658,
                669
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 34
                },
                "start": {
                  "column": 11,
                  "line": 34
                }
              }
            },
            "range": [
              651,
              670
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 34
              },
              "start": {
                "column": 4,
                "line": 34
              }
            }
          }
        ],
        "range": [
          613,
          672
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 35
          },
          "start": {
            "column": 35,
            "line": 32
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "wrappedBaz",
        "optional": false,
        "range": [
          587,
          597
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 32
          },
          "start": {
            "column": 9,
            "line": 32
          }
        }
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 34,
            "line": 32
          },
          "start": {
            "column": 21,
            "line": 32
          }
        },
        "range": [
          599,
          612
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              605,
              612
            ],
            "params": [
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "'baz'",
                  "value": "baz",
                  "range": [
                    606,
                    611
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 32
                    },
                    "start": {
                      "column": 28,
                      "line": 32
                    }
                  }
                },
                "range": [
                  606,
                  611
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 32
                  },
                  "start": {
                    "column": 28,
                    "line": 32
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 32
              },
              "start": {
                "column": 27,
                "line": 32
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Wrap",
            "optional": false,
            "range": [
              601,
              605
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 32
              },
              "start": {
                "column": 23,
                "line": 32
              }
            }
          },
          "range": [
            601,
            612
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 32
            },
            "start": {
              "column": 23,
              "line": 32
            }
          }
        }
      },
      "range": [
        578,
        672
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 35
        },
        "start": {
          "column": 0,
          "line": 32
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          724,
          756
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "type",
              "optional": false,
              "range": [
                730,
                734
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 40
                },
                "start": {
                  "column": 4,
                  "line": 40
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
                  "column": 27,
                  "line": 40
                },
                "start": {
                  "column": 8,
                  "line": 40
                }
              },
              "range": [
                734,
                753
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "'folder'",
                      "value": "folder",
                      "range": [
                        736,
                        744
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 40
                        },
                        "start": {
                          "column": 10,
                          "line": 40
                        }
                      }
                    },
                    "range": [
                      736,
                      744
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 40
                      },
                      "start": {
                        "column": 10,
                        "line": 40
                      }
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "'file'",
                      "value": "file",
                      "range": [
                        747,
                        753
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
                    },
                    "range": [
                      747,
                      753
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
                  736,
                  753
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 40
                  },
                  "start": {
                    "column": 10,
                    "line": 40
                  }
                }
              }
            },
            "range": [
              730,
              754
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 40
              },
              "start": {
                "column": 4,
                "line": 40
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 41
          },
          "start": {
            "column": 28,
            "line": 39
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "FolderContentItem",
        "optional": false,
        "range": [
          706,
          723
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 39
          },
          "start": {
            "column": 10,
            "line": 39
          }
        }
      },
      "range": [
        696,
        756
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 41
        },
        "start": {
          "column": 0,
          "line": 39
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
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 26,
                  "line": 43
                },
                "start": {
                  "column": 5,
                  "line": 43
                }
              },
              "range": [
                763,
                784
              ],
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "FolderContentItem",
                    "optional": false,
                    "range": [
                      765,
                      782
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 43
                      },
                      "start": {
                        "column": 7,
                        "line": 43
                      }
                    }
                  },
                  "range": [
                    765,
                    782
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 43
                    },
                    "start": {
                      "column": 7,
                      "line": 43
                    }
                  }
                },
                "range": [
                  765,
                  784
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 43
                  },
                  "start": {
                    "column": 7,
                    "line": 43
                  }
                }
              }
            },
            "range": [
              762,
              784
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 43
              },
              "start": {
                "column": 4,
                "line": 43
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [],
            "range": [
              787,
              789
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 43
              },
              "start": {
                "column": 29,
                "line": 43
              }
            }
          },
          "range": [
            762,
            789
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 43
            },
            "start": {
              "column": 4,
              "line": 43
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        758,
        790
      ],
      "loc": {
        "end": {
          "column": 32,
          "line": 43
        },
        "start": {
          "column": 0,
          "line": 43
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
          "name": "a",
          "optional": false,
          "range": [
            791,
            792
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 44
            },
            "start": {
              "column": 0,
              "line": 44
            }
          }
        },
        "right": {
          "type": "CallExpression",
          "arguments": [
            {
              "type": "ArrowFunctionExpression",
              "async": false,
              "body": {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "type",
                      "optional": false,
                      "range": [
                        823,
                        827
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 44
                        },
                        "start": {
                          "column": 32,
                          "line": 44
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "raw": "'folder'",
                      "value": "folder",
                      "range": [
                        829,
                        837
                      ],
                      "loc": {
                        "end": {
                          "column": 46,
                          "line": 44
                        },
                        "start": {
                          "column": 38,
                          "line": 44
                        }
                      }
                    },
                    "range": [
                      823,
                      837
                    ],
                    "loc": {
                      "end": {
                        "column": 46,
                        "line": 44
                      },
                      "start": {
                        "column": 32,
                        "line": 44
                      }
                    }
                  }
                ],
                "range": [
                  821,
                  839
                ],
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 44
                  },
                  "start": {
                    "column": 30,
                    "line": 44
                  }
                }
              },
              "expression": true,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "range": [
                    815,
                    816
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 44
                    },
                    "start": {
                      "column": 24,
                      "line": 44
                    }
                  }
                }
              ],
              "range": [
                815,
                840
              ],
              "loc": {
                "end": {
                  "column": 49,
                  "line": 44
                },
                "start": {
                  "column": 24,
                  "line": 44
                }
              }
            }
          ],
          "callee": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "raw": "1",
                  "value": 1,
                  "range": [
                    796,
                    797
                  ],
                  "loc": {
                    "end": {
                      "column": 6,
                      "line": 44
                    },
                    "start": {
                      "column": 5,
                      "line": 44
                    }
                  }
                },
                {
                  "type": "Literal",
                  "raw": "2",
                  "value": 2,
                  "range": [
                    799,
                    800
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 44
                    },
                    "start": {
                      "column": 8,
                      "line": 44
                    }
                  }
                },
                {
                  "type": "Literal",
                  "raw": "3",
                  "value": 3,
                  "range": [
                    802,
                    803
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 44
                    },
                    "start": {
                      "column": 11,
                      "line": 44
                    }
                  }
                },
                {
                  "type": "Literal",
                  "raw": "4",
                  "value": 4,
                  "range": [
                    805,
                    806
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 44
                    },
                    "start": {
                      "column": 14,
                      "line": 44
                    }
                  }
                },
                {
                  "type": "Literal",
                  "raw": "5",
                  "value": 5,
                  "range": [
                    808,
                    809
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 44
                    },
                    "start": {
                      "column": 17,
                      "line": 44
                    }
                  }
                }
              ],
              "range": [
                795,
                810
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 44
                },
                "start": {
                  "column": 4,
                  "line": 44
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "map",
              "optional": false,
              "range": [
                811,
                814
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 44
                },
                "start": {
                  "column": 20,
                  "line": 44
                }
              }
            },
            "range": [
              795,
              814
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 44
              },
              "start": {
                "column": 4,
                "line": 44
              }
            }
          },
          "optional": false,
          "range": [
            795,
            841
          ],
          "loc": {
            "end": {
              "column": 50,
              "line": 44
            },
            "start": {
              "column": 4,
              "line": 44
            }
          }
        },
        "range": [
          791,
          841
        ],
        "loc": {
          "end": {
            "column": 50,
            "line": 44
          },
          "start": {
            "column": 0,
            "line": 44
          }
        }
      },
      "range": [
        791,
        842
      ],
      "loc": {
        "end": {
          "column": 51,
          "line": 44
        },
        "start": {
          "column": 0,
          "line": 44
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
            "name": "arr",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 32,
                  "line": 48
                },
                "start": {
                  "column": 7,
                  "line": 48
                }
              },
              "range": [
                873,
                898
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    880,
                    898
                  ],
                  "params": [
                    {
                      "type": "TSTupleType",
                      "elementTypes": [
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            882,
                            888
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 48
                            },
                            "start": {
                              "column": 16,
                              "line": 48
                            }
                          }
                        },
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            890,
                            896
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
                        }
                      ],
                      "range": [
                        881,
                        897
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 48
                        },
                        "start": {
                          "column": 15,
                          "line": 48
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 48
                    },
                    "start": {
                      "column": 14,
                      "line": 48
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Array",
                  "optional": false,
                  "range": [
                    875,
                    880
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 48
                    },
                    "start": {
                      "column": 9,
                      "line": 48
                    }
                  }
                },
                "range": [
                  875,
                  898
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 48
                  },
                  "start": {
                    "column": 9,
                    "line": 48
                  }
                }
              }
            },
            "range": [
              870,
              898
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 48
              },
              "start": {
                "column": 4,
                "line": 48
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "raw": "1",
                    "value": 1,
                    "range": [
                      903,
                      904
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 48
                      },
                      "start": {
                        "column": 37,
                        "line": 48
                      }
                    }
                  },
                  {
                    "type": "Literal",
                    "raw": "2",
                    "value": 2,
                    "range": [
                      906,
                      907
                    ],
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 48
                      },
                      "start": {
                        "column": 40,
                        "line": 48
                      }
                    }
                  }
                ],
                "range": [
                  902,
                  908
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 48
                  },
                  "start": {
                    "column": 36,
                    "line": 48
                  }
                }
              }
            ],
            "range": [
              901,
              909
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 48
              },
              "start": {
                "column": 35,
                "line": 48
              }
            }
          },
          "range": [
            870,
            909
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
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        866,
        909
      ],
      "loc": {
        "end": {
          "column": 43,
          "line": 48
        },
        "start": {
          "column": 0,
          "line": 48
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
            "name": "mappedArr",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 38,
                  "line": 50
                },
                "start": {
                  "column": 13,
                  "line": 50
                }
              },
              "range": [
                924,
                949
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    931,
                    949
                  ],
                  "params": [
                    {
                      "type": "TSTupleType",
                      "elementTypes": [
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            933,
                            939
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
                            941,
                            947
                          ],
                          "loc": {
                            "end": {
                              "column": 36,
                              "line": 50
                            },
                            "start": {
                              "column": 30,
                              "line": 50
                            }
                          }
                        }
                      ],
                      "range": [
                        932,
                        948
                      ],
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 50
                        },
                        "start": {
                          "column": 21,
                          "line": 50
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 50
                    },
                    "start": {
                      "column": 20,
                      "line": 50
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Array",
                  "optional": false,
                  "range": [
                    926,
                    931
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 50
                    },
                    "start": {
                      "column": 15,
                      "line": 50
                    }
                  }
                },
                "range": [
                  926,
                  949
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 50
                  },
                  "start": {
                    "column": 15,
                    "line": 50
                  }
                }
              }
            },
            "range": [
              915,
              949
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 50
              },
              "start": {
                "column": 4,
                "line": 50
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "ArrayExpression",
                        "elements": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "range": [
                              986,
                              987
                            ],
                            "loc": {
                              "end": {
                                "column": 13,
                                "line": 51
                              },
                              "start": {
                                "column": 12,
                                "line": 51
                              }
                            }
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "y",
                            "optional": false,
                            "range": [
                              989,
                              990
                            ],
                            "loc": {
                              "end": {
                                "column": 16,
                                "line": 51
                              },
                              "start": {
                                "column": 15,
                                "line": 51
                              }
                            }
                          }
                        ],
                        "range": [
                          985,
                          991
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 51
                          },
                          "start": {
                            "column": 11,
                            "line": 51
                          }
                        }
                      },
                      "range": [
                        978,
                        992
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 51
                        },
                        "start": {
                          "column": 4,
                          "line": 51
                        }
                      }
                    }
                  ],
                  "range": [
                    972,
                    994
                  ],
                  "loc": {
                    "end": {
                      "column": 1,
                      "line": 52
                    },
                    "start": {
                      "column": 61,
                      "line": 50
                    }
                  }
                },
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "ArrayPattern",
                    "decorators": [],
                    "elements": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          962,
                          963
                        ],
                        "loc": {
                          "end": {
                            "column": 52,
                            "line": 50
                          },
                          "start": {
                            "column": 51,
                            "line": 50
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "range": [
                          965,
                          966
                        ],
                        "loc": {
                          "end": {
                            "column": 55,
                            "line": 50
                          },
                          "start": {
                            "column": 54,
                            "line": 50
                          }
                        }
                      }
                    ],
                    "optional": false,
                    "range": [
                      961,
                      967
                    ],
                    "loc": {
                      "end": {
                        "column": 56,
                        "line": 50
                      },
                      "start": {
                        "column": 50,
                        "line": 50
                      }
                    }
                  }
                ],
                "range": [
                  960,
                  994
                ],
                "loc": {
                  "end": {
                    "column": 1,
                    "line": 52
                  },
                  "start": {
                    "column": 49,
                    "line": 50
                  }
                }
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "arr",
                "optional": false,
                "range": [
                  952,
                  955
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 50
                  },
                  "start": {
                    "column": 41,
                    "line": 50
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "map",
                "optional": false,
                "range": [
                  956,
                  959
                ],
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 50
                  },
                  "start": {
                    "column": 45,
                    "line": 50
                  }
                }
              },
              "range": [
                952,
                959
              ],
              "loc": {
                "end": {
                  "column": 48,
                  "line": 50
                },
                "start": {
                  "column": 41,
                  "line": 50
                }
              }
            },
            "optional": false,
            "range": [
              952,
              995
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 52
              },
              "start": {
                "column": 41,
                "line": 50
              }
            }
          },
          "range": [
            915,
            995
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 52
            },
            "start": {
              "column": 4,
              "line": 50
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        911,
        995
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 52
        },
        "start": {
          "column": 0,
          "line": 50
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        1019,
        1165
      ],
      "attributes": [],
      "declaration": {
        "type": "TSModuleDeclaration",
        "body": {
          "type": "TSModuleBlock",
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "range": [
                1058,
                1081
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
                      "name": "Error",
                      "optional": false,
                      "range": [
                        1071,
                        1076
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 57
                        },
                        "start": {
                          "column": 14,
                          "line": 57
                        }
                      }
                    },
                    "init": {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        1079,
                        1080
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 57
                        },
                        "start": {
                          "column": 22,
                          "line": 57
                        }
                      }
                    },
                    "range": [
                      1071,
                      1080
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 57
                      },
                      "start": {
                        "column": 14,
                        "line": 57
                      }
                    }
                  }
                ],
                "declare": false,
                "kind": "const",
                "range": [
                  1065,
                  1081
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 57
                  },
                  "start": {
                    "column": 8,
                    "line": 57
                  }
                }
              },
              "exportKind": "value",
              "source": null,
              "specifiers": [],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 57
                },
                "start": {
                  "column": 1,
                  "line": 57
                }
              }
            },
            {
              "type": "ExportNamedDeclaration",
              "range": [
                1083,
                1108
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
                      "name": "Warning",
                      "optional": false,
                      "range": [
                        1096,
                        1103
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 58
                        },
                        "start": {
                          "column": 14,
                          "line": 58
                        }
                      }
                    },
                    "init": {
                      "type": "Literal",
                      "raw": "2",
                      "value": 2,
                      "range": [
                        1106,
                        1107
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 58
                        },
                        "start": {
                          "column": 24,
                          "line": 58
                        }
                      }
                    },
                    "range": [
                      1096,
                      1107
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 58
                      },
                      "start": {
                        "column": 14,
                        "line": 58
                      }
                    }
                  }
                ],
                "declare": false,
                "kind": "const",
                "range": [
                  1090,
                  1108
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 58
                  },
                  "start": {
                    "column": 8,
                    "line": 58
                  }
                }
              },
              "exportKind": "value",
              "source": null,
              "specifiers": [],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 58
                },
                "start": {
                  "column": 1,
                  "line": 58
                }
              }
            },
            {
              "type": "ExportNamedDeclaration",
              "range": [
                1110,
                1139
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
                      "name": "Information",
                      "optional": false,
                      "range": [
                        1123,
                        1134
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 59
                        },
                        "start": {
                          "column": 14,
                          "line": 59
                        }
                      }
                    },
                    "init": {
                      "type": "Literal",
                      "raw": "3",
                      "value": 3,
                      "range": [
                        1137,
                        1138
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 59
                        },
                        "start": {
                          "column": 28,
                          "line": 59
                        }
                      }
                    },
                    "range": [
                      1123,
                      1138
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 59
                      },
                      "start": {
                        "column": 14,
                        "line": 59
                      }
                    }
                  }
                ],
                "declare": false,
                "kind": "const",
                "range": [
                  1117,
                  1139
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 59
                  },
                  "start": {
                    "column": 8,
                    "line": 59
                  }
                }
              },
              "exportKind": "value",
              "source": null,
              "specifiers": [],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 59
                },
                "start": {
                  "column": 1,
                  "line": 59
                }
              }
            },
            {
              "type": "ExportNamedDeclaration",
              "range": [
                1141,
                1163
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
                      "name": "Hint",
                      "optional": false,
                      "range": [
                        1154,
                        1158
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 60
                        },
                        "start": {
                          "column": 14,
                          "line": 60
                        }
                      }
                    },
                    "init": {
                      "type": "Literal",
                      "raw": "4",
                      "value": 4,
                      "range": [
                        1161,
                        1162
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 60
                        },
                        "start": {
                          "column": 21,
                          "line": 60
                        }
                      }
                    },
                    "range": [
                      1154,
                      1162
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 60
                      },
                      "start": {
                        "column": 14,
                        "line": 60
                      }
                    }
                  }
                ],
                "declare": false,
                "kind": "const",
                "range": [
                  1148,
                  1163
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 60
                  },
                  "start": {
                    "column": 8,
                    "line": 60
                  }
                }
              },
              "exportKind": "value",
              "source": null,
              "specifiers": [],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 60
                },
                "start": {
                  "column": 1,
                  "line": 60
                }
              }
            }
          ],
          "range": [
            1055,
            1165
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 61
            },
            "start": {
              "column": 36,
              "line": 56
            }
          }
        },
        "declare": false,
        "global": false,
        "id": {
          "type": "Identifier",
          "range": [
            1036,
            1054
          ],
          "decorators": [],
          "name": "DiagnosticSeverity",
          "optional": false,
          "loc": {
            "end": {
              "column": 35,
              "line": 56
            },
            "start": {
              "column": 17,
              "line": 56
            }
          }
        },
        "kind": "namespace",
        "range": [
          1026,
          1165
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 61
          },
          "start": {
            "column": 7,
            "line": 56
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 61
        },
        "start": {
          "column": 0,
          "line": 56
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        1167,
        1214
      ],
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "declare": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "DiagnosticSeverity",
          "optional": false,
          "range": [
            1179,
            1197
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 63
            },
            "start": {
              "column": 12,
              "line": 63
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
                "raw": "1",
                "value": 1,
                "range": [
                  1200,
                  1201
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 63
                  },
                  "start": {
                    "column": 33,
                    "line": 63
                  }
                }
              },
              "range": [
                1200,
                1201
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 63
                },
                "start": {
                  "column": 33,
                  "line": 63
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
                  1204,
                  1205
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 63
                  },
                  "start": {
                    "column": 37,
                    "line": 63
                  }
                }
              },
              "range": [
                1204,
                1205
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 63
                },
                "start": {
                  "column": 37,
                  "line": 63
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
                  1208,
                  1209
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 63
                  },
                  "start": {
                    "column": 41,
                    "line": 63
                  }
                }
              },
              "range": [
                1208,
                1209
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 63
                },
                "start": {
                  "column": 41,
                  "line": 63
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
                  1212,
                  1213
                ],
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 63
                  },
                  "start": {
                    "column": 45,
                    "line": 63
                  }
                }
              },
              "range": [
                1212,
                1213
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 63
                },
                "start": {
                  "column": 45,
                  "line": 63
                }
              }
            }
          ],
          "range": [
            1200,
            1213
          ],
          "loc": {
            "end": {
              "column": 46,
              "line": 63
            },
            "start": {
              "column": 33,
              "line": 63
            }
          }
        },
        "range": [
          1174,
          1214
        ],
        "loc": {
          "end": {
            "column": 47,
            "line": 63
          },
          "start": {
            "column": 7,
            "line": 63
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 47,
          "line": 63
        },
        "start": {
          "column": 0,
          "line": 63
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        1216,
        1340
      ],
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "body": {
          "type": "TSInterfaceBody",
          "range": [
            1244,
            1340
          ],
          "body": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "severity",
                "optional": false,
                "range": [
                  1247,
                  1255
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 66
                  },
                  "start": {
                    "column": 1,
                    "line": 66
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
                    "column": 30,
                    "line": 66
                  },
                  "start": {
                    "column": 10,
                    "line": 66
                  }
                },
                "range": [
                  1256,
                  1276
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "DiagnosticSeverity",
                    "optional": false,
                    "range": [
                      1258,
                      1276
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 66
                      },
                      "start": {
                        "column": 12,
                        "line": 66
                      }
                    }
                  },
                  "range": [
                    1258,
                    1276
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 66
                    },
                    "start": {
                      "column": 12,
                      "line": 66
                    }
                  }
                }
              },
              "range": [
                1247,
                1277
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 66
                },
                "start": {
                  "column": 1,
                  "line": 66
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "code",
                "optional": false,
                "range": [
                  1279,
                  1283
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 67
                  },
                  "start": {
                    "column": 1,
                    "line": 67
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
                    "column": 23,
                    "line": 67
                  },
                  "start": {
                    "column": 6,
                    "line": 67
                  }
                },
                "range": [
                  1284,
                  1301
                ],
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSNumberKeyword",
                      "range": [
                        1286,
                        1292
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 67
                        },
                        "start": {
                          "column": 8,
                          "line": 67
                        }
                      }
                    },
                    {
                      "type": "TSStringKeyword",
                      "range": [
                        1295,
                        1301
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 67
                        },
                        "start": {
                          "column": 17,
                          "line": 67
                        }
                      }
                    }
                  ],
                  "range": [
                    1286,
                    1301
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 67
                    },
                    "start": {
                      "column": 8,
                      "line": 67
                    }
                  }
                }
              },
              "range": [
                1279,
                1302
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 67
                },
                "start": {
                  "column": 1,
                  "line": 67
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "source",
                "optional": false,
                "range": [
                  1304,
                  1310
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 68
                  },
                  "start": {
                    "column": 1,
                    "line": 68
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
                    "column": 16,
                    "line": 68
                  },
                  "start": {
                    "column": 8,
                    "line": 68
                  }
                },
                "range": [
                  1311,
                  1319
                ],
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "range": [
                    1313,
                    1319
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 68
                    },
                    "start": {
                      "column": 10,
                      "line": 68
                    }
                  }
                }
              },
              "range": [
                1304,
                1320
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 68
                },
                "start": {
                  "column": 1,
                  "line": 68
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "message",
                "optional": false,
                "range": [
                  1322,
                  1329
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 69
                  },
                  "start": {
                    "column": 1,
                    "line": 69
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
                    "line": 69
                  },
                  "start": {
                    "column": 8,
                    "line": 69
                  }
                },
                "range": [
                  1329,
                  1337
                ],
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "range": [
                    1331,
                    1337
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 69
                    },
                    "start": {
                      "column": 10,
                      "line": 69
                    }
                  }
                }
              },
              "range": [
                1322,
                1338
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 69
                },
                "start": {
                  "column": 1,
                  "line": 69
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 70
            },
            "start": {
              "column": 28,
              "line": 65
            }
          }
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Diagnostic",
          "optional": false,
          "range": [
            1233,
            1243
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 65
            },
            "start": {
              "column": 17,
              "line": 65
            }
          }
        },
        "range": [
          1223,
          1340
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 70
          },
          "start": {
            "column": 7,
            "line": 65
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 70
        },
        "start": {
          "column": 0,
          "line": 65
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
                  "name": "values",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 73
                      },
                      "start": {
                        "column": 11,
                        "line": 73
                      }
                    },
                    "range": [
                      1384,
                      1391
                    ],
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "range": [
                          1386,
                          1389
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
                      },
                      "range": [
                        1386,
                        1391
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 73
                        },
                        "start": {
                          "column": 13,
                          "line": 73
                        }
                      }
                    }
                  },
                  "range": [
                    1378,
                    1391
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 73
                    },
                    "start": {
                      "column": 5,
                      "line": 73
                    }
                  }
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [],
                  "range": [
                    1394,
                    1396
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 73
                    },
                    "start": {
                      "column": 21,
                      "line": 73
                    }
                  }
                },
                "range": [
                  1378,
                  1396
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 73
                  },
                  "start": {
                    "column": 5,
                    "line": 73
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              1374,
              1397
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 73
              },
              "start": {
                "column": 1,
                "line": 73
              }
            }
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "ObjectExpression",
                          "properties": [
                            {
                              "type": "Property",
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "severity",
                                "optional": false,
                                "range": [
                                  1444,
                                  1452
                                ],
                                "loc": {
                                  "end": {
                                    "column": 11,
                                    "line": 76
                                  },
                                  "start": {
                                    "column": 3,
                                    "line": 76
                                  }
                                }
                              },
                              "kind": "init",
                              "method": false,
                              "optional": false,
                              "shorthand": false,
                              "value": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "DiagnosticSeverity",
                                  "optional": false,
                                  "range": [
                                    1454,
                                    1472
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 31,
                                      "line": 76
                                    },
                                    "start": {
                                      "column": 13,
                                      "line": 76
                                    }
                                  }
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Error",
                                  "optional": false,
                                  "range": [
                                    1473,
                                    1478
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 37,
                                      "line": 76
                                    },
                                    "start": {
                                      "column": 32,
                                      "line": 76
                                    }
                                  }
                                },
                                "range": [
                                  1454,
                                  1478
                                ],
                                "loc": {
                                  "end": {
                                    "column": 37,
                                    "line": 76
                                  },
                                  "start": {
                                    "column": 13,
                                    "line": 76
                                  }
                                }
                              },
                              "range": [
                                1444,
                                1478
                              ],
                              "loc": {
                                "end": {
                                  "column": 37,
                                  "line": 76
                                },
                                "start": {
                                  "column": 3,
                                  "line": 76
                                }
                              }
                            },
                            {
                              "type": "Property",
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "message",
                                "optional": false,
                                "range": [
                                  1483,
                                  1490
                                ],
                                "loc": {
                                  "end": {
                                    "column": 10,
                                    "line": 77
                                  },
                                  "start": {
                                    "column": 3,
                                    "line": 77
                                  }
                                }
                              },
                              "kind": "init",
                              "method": false,
                              "optional": false,
                              "shorthand": false,
                              "value": {
                                "type": "Literal",
                                "raw": "'message'",
                                "value": "message",
                                "range": [
                                  1492,
                                  1501
                                ],
                                "loc": {
                                  "end": {
                                    "column": 21,
                                    "line": 77
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 77
                                  }
                                }
                              },
                              "range": [
                                1483,
                                1501
                              ],
                              "loc": {
                                "end": {
                                  "column": 21,
                                  "line": 77
                                },
                                "start": {
                                  "column": 3,
                                  "line": 77
                                }
                              }
                            }
                          ],
                          "range": [
                            1439,
                            1505
                          ],
                          "loc": {
                            "end": {
                              "column": 3,
                              "line": 78
                            },
                            "start": {
                              "column": 9,
                              "line": 75
                            }
                          }
                        },
                        "range": [
                          1432,
                          1505
                        ],
                        "loc": {
                          "end": {
                            "column": 3,
                            "line": 78
                          },
                          "start": {
                            "column": 2,
                            "line": 75
                          }
                        }
                      }
                    ],
                    "range": [
                      1428,
                      1508
                    ],
                    "loc": {
                      "end": {
                        "column": 2,
                        "line": 79
                      },
                      "start": {
                        "column": 30,
                        "line": 74
                      }
                    }
                  },
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "range": [
                        1418,
                        1423
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
                    }
                  ],
                  "range": [
                    1417,
                    1508
                  ],
                  "loc": {
                    "end": {
                      "column": 2,
                      "line": 79
                    },
                    "start": {
                      "column": 19,
                      "line": 74
                    }
                  }
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "values",
                  "optional": false,
                  "range": [
                    1406,
                    1412
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 74
                    },
                    "start": {
                      "column": 8,
                      "line": 74
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "map",
                  "optional": false,
                  "range": [
                    1413,
                    1416
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 74
                    },
                    "start": {
                      "column": 15,
                      "line": 74
                    }
                  }
                },
                "range": [
                  1406,
                  1416
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 74
                  },
                  "start": {
                    "column": 8,
                    "line": 74
                  }
                }
              },
              "optional": false,
              "range": [
                1406,
                1509
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 79
                },
                "start": {
                  "column": 8,
                  "line": 74
                }
              }
            },
            "range": [
              1399,
              1510
            ],
            "loc": {
              "end": {
                "column": 4,
                "line": 79
              },
              "start": {
                "column": 1,
                "line": 74
              }
            }
          }
        ],
        "range": [
          1371,
          1512
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 80
          },
          "start": {
            "column": 29,
            "line": 72
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "bug",
        "optional": false,
        "range": [
          1351,
          1354
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 72
          },
          "start": {
            "column": 9,
            "line": 72
          }
        }
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 28,
            "line": 72
          },
          "start": {
            "column": 14,
            "line": 72
          }
        },
        "range": [
          1356,
          1370
        ],
        "typeAnnotation": {
          "type": "TSArrayType",
          "elementType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Diagnostic",
              "optional": false,
              "range": [
                1358,
                1368
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 72
                },
                "start": {
                  "column": 16,
                  "line": 72
                }
              }
            },
            "range": [
              1358,
              1368
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 72
              },
              "start": {
                "column": 16,
                "line": 72
              }
            }
          },
          "range": [
            1358,
            1370
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 72
            },
            "start": {
              "column": 16,
              "line": 72
            }
          }
        }
      },
      "range": [
        1342,
        1512
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 80
        },
        "start": {
          "column": 0,
          "line": 72
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
              "type": "NewExpression",
              "arguments": [
                {
                  "type": "CallExpression",
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "async": false,
                      "body": {
                        "type": "ArrayExpression",
                        "elements": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "key",
                            "optional": false,
                            "range": [
                              1614,
                              1617
                            ],
                            "loc": {
                              "end": {
                                "column": 48,
                                "line": 85
                              },
                              "start": {
                                "column": 45,
                                "line": 85
                              }
                            }
                          },
                          {
                            "type": "MemberExpression",
                            "computed": true,
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "obj",
                              "optional": false,
                              "range": [
                                1619,
                                1622
                              ],
                              "loc": {
                                "end": {
                                  "column": 53,
                                  "line": 85
                                },
                                "start": {
                                  "column": 50,
                                  "line": 85
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "key",
                              "optional": false,
                              "range": [
                                1623,
                                1626
                              ],
                              "loc": {
                                "end": {
                                  "column": 57,
                                  "line": 85
                                },
                                "start": {
                                  "column": 54,
                                  "line": 85
                                }
                              }
                            },
                            "range": [
                              1619,
                              1627
                            ],
                            "loc": {
                              "end": {
                                "column": 58,
                                "line": 85
                              },
                              "start": {
                                "column": 50,
                                "line": 85
                              }
                            }
                          }
                        ],
                        "range": [
                          1613,
                          1628
                        ],
                        "loc": {
                          "end": {
                            "column": 59,
                            "line": 85
                          },
                          "start": {
                            "column": 44,
                            "line": 85
                          }
                        }
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "key",
                          "optional": false,
                          "range": [
                            1606,
                            1609
                          ],
                          "loc": {
                            "end": {
                              "column": 40,
                              "line": 85
                            },
                            "start": {
                              "column": 37,
                              "line": 85
                            }
                          }
                        }
                      ],
                      "range": [
                        1606,
                        1628
                      ],
                      "loc": {
                        "end": {
                          "column": 59,
                          "line": 85
                        },
                        "start": {
                          "column": 37,
                          "line": 85
                        }
                      }
                    }
                  ],
                  "callee": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "CallExpression",
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "obj",
                          "optional": false,
                          "range": [
                            1597,
                            1600
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 85
                            },
                            "start": {
                              "column": 28,
                              "line": 85
                            }
                          }
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Object",
                          "optional": false,
                          "range": [
                            1585,
                            1591
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 85
                            },
                            "start": {
                              "column": 16,
                              "line": 85
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "keys",
                          "optional": false,
                          "range": [
                            1592,
                            1596
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 85
                            },
                            "start": {
                              "column": 23,
                              "line": 85
                            }
                          }
                        },
                        "range": [
                          1585,
                          1596
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 85
                          },
                          "start": {
                            "column": 16,
                            "line": 85
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        1585,
                        1601
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 85
                        },
                        "start": {
                          "column": 16,
                          "line": 85
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "map",
                      "optional": false,
                      "range": [
                        1602,
                        1605
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 85
                        },
                        "start": {
                          "column": 33,
                          "line": 85
                        }
                      }
                    },
                    "range": [
                      1585,
                      1605
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 85
                      },
                      "start": {
                        "column": 16,
                        "line": 85
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    1585,
                    1629
                  ],
                  "loc": {
                    "end": {
                      "column": 60,
                      "line": 85
                    },
                    "start": {
                      "column": 16,
                      "line": 85
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "Map",
                "optional": false,
                "range": [
                  1581,
                  1584
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 85
                  },
                  "start": {
                    "column": 12,
                    "line": 85
                  }
                }
              },
              "range": [
                1577,
                1630
              ],
              "loc": {
                "end": {
                  "column": 61,
                  "line": 85
                },
                "start": {
                  "column": 8,
                  "line": 85
                }
              }
            },
            "range": [
              1570,
              1631
            ],
            "loc": {
              "end": {
                "column": 62,
                "line": 85
              },
              "start": {
                "column": 1,
                "line": 85
              }
            }
          }
        ],
        "range": [
          1567,
          1633
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 86
          },
          "start": {
            "column": 31,
            "line": 84
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "objectToMap",
        "optional": false,
        "range": [
          1545,
          1556
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 84
          },
          "start": {
            "column": 9,
            "line": 84
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 29,
                "line": 84
              },
              "start": {
                "column": 24,
                "line": 84
              }
            },
            "range": [
              1560,
              1565
            ],
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                1562,
                1565
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 84
                },
                "start": {
                  "column": 26,
                  "line": 84
                }
              }
            }
          },
          "range": [
            1557,
            1565
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 84
            },
            "start": {
              "column": 21,
              "line": 84
            }
          }
        }
      ],
      "range": [
        1536,
        1633
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
      "type": "EmptyStatement",
      "range": [
        1633,
        1634
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 86
        },
        "start": {
          "column": 1,
          "line": 86
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          1675,
          1734
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "phoneNumbers",
              "optional": false,
              "range": [
                1679,
                1691
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 91
                },
                "start": {
                  "column": 2,
                  "line": 91
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
                  "column": 5,
                  "line": 93
                },
                "start": {
                  "column": 14,
                  "line": 91
                }
              },
              "range": [
                1691,
                1731
              ],
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "__typename",
                        "optional": false,
                        "range": [
                          1699,
                          1709
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 92
                          },
                          "start": {
                            "column": 4,
                            "line": 92
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
                            "column": 29,
                            "line": 92
                          },
                          "start": {
                            "column": 14,
                            "line": 92
                          }
                        },
                        "range": [
                          1709,
                          1724
                        ],
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "raw": "'PhoneNumber'",
                            "value": "PhoneNumber",
                            "range": [
                              1711,
                              1724
                            ],
                            "loc": {
                              "end": {
                                "column": 29,
                                "line": 92
                              },
                              "start": {
                                "column": 16,
                                "line": 92
                              }
                            }
                          },
                          "range": [
                            1711,
                            1724
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 92
                            },
                            "start": {
                              "column": 16,
                              "line": 92
                            }
                          }
                        }
                      },
                      "range": [
                        1699,
                        1725
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 92
                        },
                        "start": {
                          "column": 4,
                          "line": 92
                        }
                      }
                    }
                  ],
                  "range": [
                    1693,
                    1729
                  ],
                  "loc": {
                    "end": {
                      "column": 3,
                      "line": 93
                    },
                    "start": {
                      "column": 16,
                      "line": 91
                    }
                  }
                },
                "range": [
                  1693,
                  1731
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 93
                  },
                  "start": {
                    "column": 16,
                    "line": 91
                  }
                }
              }
            },
            "range": [
              1679,
              1732
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 93
              },
              "start": {
                "column": 2,
                "line": 91
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 94
          },
          "start": {
            "column": 17,
            "line": 90
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Person",
        "optional": false,
        "range": [
          1668,
          1674
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 90
          },
          "start": {
            "column": 10,
            "line": 90
          }
        }
      },
      "range": [
        1658,
        1734
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 94
        },
        "start": {
          "column": 0,
          "line": 90
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
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "phoneNumbers",
                    "optional": false,
                    "range": [
                      1785,
                      1797
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 98
                      },
                      "start": {
                        "column": 4,
                        "line": 98
                      }
                    }
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "CallExpression",
                    "arguments": [
                      {
                        "type": "ArrowFunctionExpression",
                        "async": false,
                        "body": {
                          "type": "ObjectExpression",
                          "properties": [
                            {
                              "type": "Property",
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "__typename",
                                "optional": false,
                                "range": [
                                  1822,
                                  1832
                                ],
                                "loc": {
                                  "end": {
                                    "column": 16,
                                    "line": 99
                                  },
                                  "start": {
                                    "column": 6,
                                    "line": 99
                                  }
                                }
                              },
                              "kind": "init",
                              "method": false,
                              "optional": false,
                              "shorthand": false,
                              "value": {
                                "type": "Literal",
                                "raw": "'PhoneNumber'",
                                "value": "PhoneNumber",
                                "range": [
                                  1834,
                                  1847
                                ],
                                "loc": {
                                  "end": {
                                    "column": 31,
                                    "line": 99
                                  },
                                  "start": {
                                    "column": 18,
                                    "line": 99
                                  }
                                }
                              },
                              "range": [
                                1822,
                                1847
                              ],
                              "loc": {
                                "end": {
                                  "column": 31,
                                  "line": 99
                                },
                                "start": {
                                  "column": 6,
                                  "line": 99
                                }
                              }
                            }
                          ],
                          "range": [
                            1814,
                            1853
                          ],
                          "loc": {
                            "end": {
                              "column": 5,
                              "line": 100
                            },
                            "start": {
                              "column": 33,
                              "line": 98
                            }
                          }
                        },
                        "expression": true,
                        "generator": false,
                        "id": null,
                        "params": [],
                        "range": [
                          1807,
                          1854
                        ],
                        "loc": {
                          "end": {
                            "column": 6,
                            "line": 100
                          },
                          "start": {
                            "column": 26,
                            "line": 98
                          }
                        }
                      }
                    ],
                    "callee": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "ArrayExpression",
                        "elements": [
                          {
                            "type": "Literal",
                            "raw": "1",
                            "value": 1,
                            "range": [
                              1800,
                              1801
                            ],
                            "loc": {
                              "end": {
                                "column": 20,
                                "line": 98
                              },
                              "start": {
                                "column": 19,
                                "line": 98
                              }
                            }
                          }
                        ],
                        "range": [
                          1799,
                          1802
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 98
                          },
                          "start": {
                            "column": 18,
                            "line": 98
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "map",
                        "optional": false,
                        "range": [
                          1803,
                          1806
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 98
                          },
                          "start": {
                            "column": 22,
                            "line": 98
                          }
                        }
                      },
                      "range": [
                        1799,
                        1806
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 98
                        },
                        "start": {
                          "column": 18,
                          "line": 98
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      1799,
                      1855
                    ],
                    "loc": {
                      "end": {
                        "column": 7,
                        "line": 100
                      },
                      "start": {
                        "column": 18,
                        "line": 98
                      }
                    }
                  },
                  "range": [
                    1785,
                    1855
                  ],
                  "loc": {
                    "end": {
                      "column": 7,
                      "line": 100
                    },
                    "start": {
                      "column": 4,
                      "line": 98
                    }
                  }
                }
              ],
              "range": [
                1779,
                1859
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 101
                },
                "start": {
                  "column": 9,
                  "line": 97
                }
              }
            },
            "range": [
              1772,
              1860
            ],
            "loc": {
              "end": {
                "column": 4,
                "line": 101
              },
              "start": {
                "column": 2,
                "line": 97
              }
            }
          }
        ],
        "range": [
          1768,
          1862
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 102
          },
          "start": {
            "column": 32,
            "line": 96
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "createPerson",
        "optional": false,
        "range": [
          1745,
          1757
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 96
          },
          "start": {
            "column": 9,
            "line": 96
          }
        }
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 31,
            "line": 96
          },
          "start": {
            "column": 23,
            "line": 96
          }
        },
        "range": [
          1759,
          1767
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Person",
            "optional": false,
            "range": [
              1761,
              1767
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 96
              },
              "start": {
                "column": 25,
                "line": 96
              }
            }
          },
          "range": [
            1761,
            1767
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 96
            },
            "start": {
              "column": 25,
              "line": 96
            }
          }
        }
      },
      "range": [
        1736,
        1862
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 102
        },
        "start": {
          "column": 0,
          "line": 96
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Box",
        "optional": false,
        "range": [
          1891,
          1894
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 106
          },
          "start": {
            "column": 5,
            "line": 106
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
              "name": "value",
              "optional": false,
              "range": [
                1902,
                1907
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 106
                },
                "start": {
                  "column": 16,
                  "line": 106
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
                  "column": 24,
                  "line": 106
                },
                "start": {
                  "column": 21,
                  "line": 106
                }
              },
              "range": [
                1907,
                1910
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    1909,
                    1910
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 106
                    },
                    "start": {
                      "column": 23,
                      "line": 106
                    }
                  }
                },
                "range": [
                  1909,
                  1910
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 106
                  },
                  "start": {
                    "column": 23,
                    "line": 106
                  }
                }
              }
            },
            "range": [
              1902,
              1910
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 106
              },
              "start": {
                "column": 16,
                "line": 106
              }
            }
          }
        ],
        "range": [
          1900,
          1912
        ],
        "loc": {
          "end": {
            "column": 26,
            "line": 106
          },
          "start": {
            "column": 14,
            "line": 106
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 11,
            "line": 106
          },
          "start": {
            "column": 8,
            "line": 106
          }
        },
        "range": [
          1894,
          1897
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
                1895,
                1896
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 106
                },
                "start": {
                  "column": 9,
                  "line": 106
                }
              }
            },
            "out": false,
            "range": [
              1895,
              1896
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 106
              },
              "start": {
                "column": 9,
                "line": 106
              }
            }
          }
        ]
      },
      "range": [
        1886,
        1913
      ],
      "loc": {
        "end": {
          "column": 27,
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
        "name": "box",
        "optional": false,
        "range": [
          1931,
          1934
        ],
        "loc": {
          "end": {
            "column": 20,
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
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 32,
                "line": 107
              },
              "start": {
                "column": 29,
                "line": 107
              }
            },
            "range": [
              1943,
              1946
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  1945,
                  1946
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 107
                  },
                  "start": {
                    "column": 31,
                    "line": 107
                  }
                }
              },
              "range": [
                1945,
                1946
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 107
                },
                "start": {
                  "column": 31,
                  "line": 107
                }
              }
            }
          },
          "range": [
            1938,
            1946
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 107
            },
            "start": {
              "column": 24,
              "line": 107
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 41,
            "line": 107
          },
          "start": {
            "column": 33,
            "line": 107
          }
        },
        "range": [
          1947,
          1955
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              1952,
              1955
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
                    1953,
                    1954
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 107
                    },
                    "start": {
                      "column": 39,
                      "line": 107
                    }
                  }
                },
                "range": [
                  1953,
                  1954
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 107
                  },
                  "start": {
                    "column": 39,
                    "line": 107
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 107
              },
              "start": {
                "column": 38,
                "line": 107
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Box",
            "optional": false,
            "range": [
              1949,
              1952
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 107
              },
              "start": {
                "column": 35,
                "line": 107
              }
            }
          },
          "range": [
            1949,
            1955
          ],
          "loc": {
            "end": {
              "column": 41,
              "line": 107
            },
            "start": {
              "column": 35,
              "line": 107
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 23,
            "line": 107
          },
          "start": {
            "column": 20,
            "line": 107
          }
        },
        "range": [
          1934,
          1937
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
                1935,
                1936
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 107
                },
                "start": {
                  "column": 21,
                  "line": 107
                }
              }
            },
            "out": false,
            "range": [
              1935,
              1936
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 107
              },
              "start": {
                "column": 21,
                "line": 107
              }
            }
          }
        ]
      },
      "range": [
        1914,
        1956
      ],
      "loc": {
        "end": {
          "column": 42,
          "line": 107
        },
        "start": {
          "column": 0,
          "line": 107
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "WinCondition",
        "optional": false,
        "range": [
          1963,
          1975
        ],
        "loc": {
          "end": {
            "column": 17,
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
                    1986,
                    1990
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 110
                    },
                    "start": {
                      "column": 8,
                      "line": 110
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
                      "column": 19,
                      "line": 110
                    },
                    "start": {
                      "column": 12,
                      "line": 110
                    }
                  },
                  "range": [
                    1990,
                    1997
                  ],
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "'win'",
                      "value": "win",
                      "range": [
                        1992,
                        1997
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 110
                        },
                        "start": {
                          "column": 14,
                          "line": 110
                        }
                      }
                    },
                    "range": [
                      1992,
                      1997
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 110
                      },
                      "start": {
                        "column": 14,
                        "line": 110
                      }
                    }
                  }
                },
                "range": [
                  1986,
                  1998
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 110
                  },
                  "start": {
                    "column": 8,
                    "line": 110
                  }
                }
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "player",
                  "optional": false,
                  "range": [
                    1999,
                    2005
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 110
                    },
                    "start": {
                      "column": 21,
                      "line": 110
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
                      "line": 110
                    },
                    "start": {
                      "column": 27,
                      "line": 110
                    }
                  },
                  "range": [
                    2005,
                    2013
                  ],
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "range": [
                      2007,
                      2013
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 110
                      },
                      "start": {
                        "column": 29,
                        "line": 110
                      }
                    }
                  }
                },
                "range": [
                  1999,
                  2013
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 110
                  },
                  "start": {
                    "column": 21,
                    "line": 110
                  }
                }
              }
            ],
            "range": [
              1984,
              2015
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 110
              },
              "start": {
                "column": 6,
                "line": 110
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
                    2024,
                    2028
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 111
                    },
                    "start": {
                      "column": 8,
                      "line": 111
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
                      "column": 20,
                      "line": 111
                    },
                    "start": {
                      "column": 12,
                      "line": 111
                    }
                  },
                  "range": [
                    2028,
                    2036
                  ],
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "'draw'",
                      "value": "draw",
                      "range": [
                        2030,
                        2036
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 111
                        },
                        "start": {
                          "column": 14,
                          "line": 111
                        }
                      }
                    },
                    "range": [
                      2030,
                      2036
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 111
                      },
                      "start": {
                        "column": 14,
                        "line": 111
                      }
                    }
                  }
                },
                "range": [
                  2024,
                  2036
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 111
                  },
                  "start": {
                    "column": 8,
                    "line": 111
                  }
                }
              }
            ],
            "range": [
              2022,
              2038
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 111
              },
              "start": {
                "column": 6,
                "line": 111
              }
            }
          }
        ],
        "range": [
          1982,
          2038
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 111
          },
          "start": {
            "column": 4,
            "line": 110
          }
        }
      },
      "range": [
        1958,
        2039
      ],
      "loc": {
        "end": {
          "column": 23,
          "line": 111
        },
        "start": {
          "column": 0,
          "line": 109
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
            "name": "zz",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 25,
                  "line": 113
                },
                "start": {
                  "column": 6,
                  "line": 113
                }
              },
              "range": [
                2047,
                2066
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    2052,
                    2066
                  ],
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "WinCondition",
                        "optional": false,
                        "range": [
                          2053,
                          2065
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 113
                          },
                          "start": {
                            "column": 12,
                            "line": 113
                          }
                        }
                      },
                      "range": [
                        2053,
                        2065
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 113
                        },
                        "start": {
                          "column": 12,
                          "line": 113
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 113
                    },
                    "start": {
                      "column": 11,
                      "line": 113
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Box",
                  "optional": false,
                  "range": [
                    2049,
                    2052
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 113
                    },
                    "start": {
                      "column": 8,
                      "line": 113
                    }
                  }
                },
                "range": [
                  2049,
                  2066
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 113
                  },
                  "start": {
                    "column": 8,
                    "line": 113
                  }
                }
              }
            },
            "range": [
              2045,
              2066
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 113
              },
              "start": {
                "column": 4,
                "line": 113
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "type",
                      "optional": false,
                      "range": [
                        2075,
                        2079
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 113
                        },
                        "start": {
                          "column": 34,
                          "line": 113
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "raw": "'draw'",
                      "value": "draw",
                      "range": [
                        2081,
                        2087
                      ],
                      "loc": {
                        "end": {
                          "column": 46,
                          "line": 113
                        },
                        "start": {
                          "column": 40,
                          "line": 113
                        }
                      }
                    },
                    "range": [
                      2075,
                      2087
                    ],
                    "loc": {
                      "end": {
                        "column": 46,
                        "line": 113
                      },
                      "start": {
                        "column": 34,
                        "line": 113
                      }
                    }
                  }
                ],
                "range": [
                  2073,
                  2089
                ],
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 113
                  },
                  "start": {
                    "column": 32,
                    "line": 113
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "box",
              "optional": false,
              "range": [
                2069,
                2072
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 113
                },
                "start": {
                  "column": 28,
                  "line": 113
                }
              }
            },
            "optional": false,
            "range": [
              2069,
              2090
            ],
            "loc": {
              "end": {
                "column": 49,
                "line": 113
              },
              "start": {
                "column": 28,
                "line": 113
              }
            }
          },
          "range": [
            2045,
            2090
          ],
          "loc": {
            "end": {
              "column": 49,
              "line": 113
            },
            "start": {
              "column": 4,
              "line": 113
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        2041,
        2091
      ],
      "loc": {
        "end": {
          "column": 50,
          "line": 113
        },
        "start": {
          "column": 0,
          "line": 113
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "WinType",
        "optional": false,
        "range": [
          2098,
          2105
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 115
          },
          "start": {
            "column": 5,
            "line": 115
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
              "raw": "'win'",
              "value": "win",
              "range": [
                2108,
                2113
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 115
                },
                "start": {
                  "column": 15,
                  "line": 115
                }
              }
            },
            "range": [
              2108,
              2113
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 115
              },
              "start": {
                "column": 15,
                "line": 115
              }
            }
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "raw": "'draw'",
              "value": "draw",
              "range": [
                2116,
                2122
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 115
                },
                "start": {
                  "column": 23,
                  "line": 115
                }
              }
            },
            "range": [
              2116,
              2122
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 115
              },
              "start": {
                "column": 23,
                "line": 115
              }
            }
          }
        ],
        "range": [
          2108,
          2122
        ],
        "loc": {
          "end": {
            "column": 29,
            "line": 115
          },
          "start": {
            "column": 15,
            "line": 115
          }
        }
      },
      "range": [
        2093,
        2123
      ],
      "loc": {
        "end": {
          "column": 30,
          "line": 115
        },
        "start": {
          "column": 0,
          "line": 115
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
            "name": "yy",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 20,
                  "line": 117
                },
                "start": {
                  "column": 6,
                  "line": 117
                }
              },
              "range": [
                2131,
                2145
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    2136,
                    2145
                  ],
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "WinType",
                        "optional": false,
                        "range": [
                          2137,
                          2144
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 117
                          },
                          "start": {
                            "column": 12,
                            "line": 117
                          }
                        }
                      },
                      "range": [
                        2137,
                        2144
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 117
                        },
                        "start": {
                          "column": 12,
                          "line": 117
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 117
                    },
                    "start": {
                      "column": 11,
                      "line": 117
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Box",
                  "optional": false,
                  "range": [
                    2133,
                    2136
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 117
                    },
                    "start": {
                      "column": 8,
                      "line": 117
                    }
                  }
                },
                "range": [
                  2133,
                  2145
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 117
                  },
                  "start": {
                    "column": 8,
                    "line": 117
                  }
                }
              }
            },
            "range": [
              2129,
              2145
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 117
              },
              "start": {
                "column": 4,
                "line": 117
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "'draw'",
                "value": "draw",
                "range": [
                  2152,
                  2158
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 117
                  },
                  "start": {
                    "column": 27,
                    "line": 117
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "box",
              "optional": false,
              "range": [
                2148,
                2151
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 117
                },
                "start": {
                  "column": 23,
                  "line": 117
                }
              }
            },
            "optional": false,
            "range": [
              2148,
              2159
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 117
              },
              "start": {
                "column": 23,
                "line": 117
              }
            }
          },
          "range": [
            2129,
            2159
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 117
            },
            "start": {
              "column": 4,
              "line": 117
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        2125,
        2160
      ],
      "loc": {
        "end": {
          "column": 35,
          "line": 117
        },
        "start": {
          "column": 0,
          "line": 117
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          2200,
          2233
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "kind",
              "optional": false,
              "range": [
                2206,
                2210
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 122
                },
                "start": {
                  "column": 4,
                  "line": 122
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
                  "column": 14,
                  "line": 122
                },
                "start": {
                  "column": 8,
                  "line": 122
                }
              },
              "range": [
                2210,
                2216
              ],
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "\"OK\"",
                  "value": "OK",
                  "range": [
                    2212,
                    2216
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 122
                    },
                    "start": {
                      "column": 10,
                      "line": 122
                    }
                  }
                },
                "range": [
                  2212,
                  2216
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 122
                  },
                  "start": {
                    "column": 10,
                    "line": 122
                  }
                }
              }
            },
            "range": [
              2206,
              2217
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 122
              },
              "start": {
                "column": 4,
                "line": 122
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "range": [
                2222,
                2227
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 123
                },
                "start": {
                  "column": 4,
                  "line": 123
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
                  "column": 12,
                  "line": 123
                },
                "start": {
                  "column": 9,
                  "line": 123
                }
              },
              "range": [
                2227,
                2230
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    2229,
                    2230
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 123
                    },
                    "start": {
                      "column": 11,
                      "line": 123
                    }
                  }
                },
                "range": [
                  2229,
                  2230
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 123
                  },
                  "start": {
                    "column": 11,
                    "line": 123
                  }
                }
              }
            },
            "range": [
              2222,
              2231
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 123
              },
              "start": {
                "column": 4,
                "line": 123
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 124
          },
          "start": {
            "column": 16,
            "line": 121
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "OK",
        "optional": false,
        "range": [
          2194,
          2196
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 121
          },
          "start": {
            "column": 10,
            "line": 121
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 15,
            "line": 121
          },
          "start": {
            "column": 12,
            "line": 121
          }
        },
        "range": [
          2196,
          2199
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
                2197,
                2198
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 121
                },
                "start": {
                  "column": 13,
                  "line": 121
                }
              }
            },
            "out": false,
            "range": [
              2197,
              2198
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 121
              },
              "start": {
                "column": 13,
                "line": 121
              }
            }
          }
        ]
      },
      "range": [
        2184,
        2233
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 124
        },
        "start": {
          "column": 0,
          "line": 121
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        2234,
        2337
      ],
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "async": false,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "kind",
                      "optional": false,
                      "range": [
                        2296,
                        2300
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 127
                        },
                        "start": {
                          "column": 8,
                          "line": 127
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "raw": "\"OK\"",
                      "value": "OK",
                      "range": [
                        2302,
                        2306
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 127
                        },
                        "start": {
                          "column": 14,
                          "line": 127
                        }
                      }
                    },
                    "range": [
                      2296,
                      2306
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 127
                      },
                      "start": {
                        "column": 8,
                        "line": 127
                      }
                    }
                  },
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "range": [
                        2316,
                        2321
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 128
                        },
                        "start": {
                          "column": 8,
                          "line": 128
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "range": [
                        2323,
                        2328
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 128
                        },
                        "start": {
                          "column": 15,
                          "line": 128
                        }
                      }
                    },
                    "range": [
                      2316,
                      2328
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 128
                      },
                      "start": {
                        "column": 8,
                        "line": 128
                      }
                    }
                  }
                ],
                "range": [
                  2286,
                  2334
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 129
                  },
                  "start": {
                    "column": 11,
                    "line": 126
                  }
                }
              },
              "range": [
                2279,
                2335
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 129
                },
                "start": {
                  "column": 4,
                  "line": 126
                }
              }
            }
          ],
          "range": [
            2273,
            2337
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 130
            },
            "start": {
              "column": 39,
              "line": 125
            }
          }
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ok",
          "optional": false,
          "range": [
            2250,
            2252
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 125
            },
            "start": {
              "column": 16,
              "line": 125
            }
          }
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 30,
                  "line": 125
                },
                "start": {
                  "column": 27,
                  "line": 125
                }
              },
              "range": [
                2261,
                2264
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    2263,
                    2264
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 125
                    },
                    "start": {
                      "column": 29,
                      "line": 125
                    }
                  }
                },
                "range": [
                  2263,
                  2264
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 125
                  },
                  "start": {
                    "column": 29,
                    "line": 125
                  }
                }
              }
            },
            "range": [
              2256,
              2264
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 125
              },
              "start": {
                "column": 22,
                "line": 125
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 38,
              "line": 125
            },
            "start": {
              "column": 31,
              "line": 125
            }
          },
          "range": [
            2265,
            2272
          ],
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                2269,
                2272
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
                      2270,
                      2271
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 125
                      },
                      "start": {
                        "column": 36,
                        "line": 125
                      }
                    }
                  },
                  "range": [
                    2270,
                    2271
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 125
                    },
                    "start": {
                      "column": 36,
                      "line": 125
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 125
                },
                "start": {
                  "column": 35,
                  "line": 125
                }
              }
            },
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "OK",
              "optional": false,
              "range": [
                2267,
                2269
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 125
                },
                "start": {
                  "column": 33,
                  "line": 125
                }
              }
            },
            "range": [
              2267,
              2272
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 125
              },
              "start": {
                "column": 33,
                "line": 125
              }
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 21,
              "line": 125
            },
            "start": {
              "column": 18,
              "line": 125
            }
          },
          "range": [
            2252,
            2255
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
                  2253,
                  2254
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 125
                  },
                  "start": {
                    "column": 19,
                    "line": 125
                  }
                }
              },
              "out": false,
              "range": [
                2253,
                2254
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 125
                },
                "start": {
                  "column": 19,
                  "line": 125
                }
              }
            }
          ]
        },
        "range": [
          2241,
          2337
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 130
          },
          "start": {
            "column": 7,
            "line": 125
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 130
        },
        "start": {
          "column": 0,
          "line": 125
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
            "name": "result",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 32,
                  "line": 132
                },
                "start": {
                  "column": 10,
                  "line": 132
                }
              },
              "range": [
                2349,
                2371
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    2353,
                    2371
                  ],
                  "params": [
                    {
                      "type": "TSTupleType",
                      "elementTypes": [
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            2355,
                            2361
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 132
                            },
                            "start": {
                              "column": 16,
                              "line": 132
                            }
                          }
                        },
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            2363,
                            2369
                          ],
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 132
                            },
                            "start": {
                              "column": 24,
                              "line": 132
                            }
                          }
                        }
                      ],
                      "range": [
                        2354,
                        2370
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 132
                        },
                        "start": {
                          "column": 15,
                          "line": 132
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 132
                    },
                    "start": {
                      "column": 14,
                      "line": 132
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "OK",
                  "optional": false,
                  "range": [
                    2351,
                    2353
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 132
                    },
                    "start": {
                      "column": 12,
                      "line": 132
                    }
                  }
                },
                "range": [
                  2351,
                  2371
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 132
                  },
                  "start": {
                    "column": 12,
                    "line": 132
                  }
                }
              }
            },
            "range": [
              2343,
              2371
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 132
              },
              "start": {
                "column": 4,
                "line": 132
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "raw": "\"hello\"",
                    "value": "hello",
                    "range": [
                      2378,
                      2385
                    ],
                    "loc": {
                      "end": {
                        "column": 46,
                        "line": 132
                      },
                      "start": {
                        "column": 39,
                        "line": 132
                      }
                    }
                  },
                  {
                    "type": "Literal",
                    "raw": "12",
                    "value": 12,
                    "range": [
                      2387,
                      2389
                    ],
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 132
                      },
                      "start": {
                        "column": 48,
                        "line": 132
                      }
                    }
                  }
                ],
                "range": [
                  2377,
                  2390
                ],
                "loc": {
                  "end": {
                    "column": 51,
                    "line": 132
                  },
                  "start": {
                    "column": 38,
                    "line": 132
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "ok",
              "optional": false,
              "range": [
                2374,
                2376
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 132
                },
                "start": {
                  "column": 35,
                  "line": 132
                }
              }
            },
            "optional": false,
            "range": [
              2374,
              2391
            ],
            "loc": {
              "end": {
                "column": 52,
                "line": 132
              },
              "start": {
                "column": 35,
                "line": 132
              }
            }
          },
          "range": [
            2343,
            2391
          ],
          "loc": {
            "end": {
              "column": 52,
              "line": 132
            },
            "start": {
              "column": 4,
              "line": 132
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        2339,
        2392
      ],
      "loc": {
        "end": {
          "column": 53,
          "line": 132
        },
        "start": {
          "column": 0,
          "line": 132
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          2428,
          2469
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "code",
              "optional": false,
              "range": [
                2434,
                2438
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 137
                },
                "start": {
                  "column": 4,
                  "line": 137
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
                  "column": 18,
                  "line": 137
                },
                "start": {
                  "column": 8,
                  "line": 137
                }
              },
              "range": [
                2438,
                2448
              ],
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "'mapped'",
                  "value": "mapped",
                  "range": [
                    2440,
                    2448
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 137
                    },
                    "start": {
                      "column": 10,
                      "line": 137
                    }
                  }
                },
                "range": [
                  2440,
                  2448
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 137
                  },
                  "start": {
                    "column": 10,
                    "line": 137
                  }
                }
              }
            },
            "range": [
              2434,
              2449
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 137
              },
              "start": {
                "column": 4,
                "line": 137
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "name",
              "optional": false,
              "range": [
                2454,
                2458
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 138
                },
                "start": {
                  "column": 4,
                  "line": 138
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
                  "line": 138
                },
                "start": {
                  "column": 8,
                  "line": 138
                }
              },
              "range": [
                2458,
                2466
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  2460,
                  2466
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 138
                  },
                  "start": {
                    "column": 10,
                    "line": 138
                  }
                }
              }
            },
            "range": [
              2454,
              2467
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 138
              },
              "start": {
                "column": 4,
                "line": 138
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 139
          },
          "start": {
            "column": 12,
            "line": 136
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
          2426,
          2427
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 136
          },
          "start": {
            "column": 10,
            "line": 136
          }
        }
      },
      "range": [
        2416,
        2469
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 139
        },
        "start": {
          "column": 0,
          "line": 136
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
            "name": "a3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 13,
                  "line": 141
                },
                "start": {
                  "column": 8,
                  "line": 141
                }
              },
              "range": [
                2479,
                2484
              ],
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I",
                    "optional": false,
                    "range": [
                      2481,
                      2482
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 141
                      },
                      "start": {
                        "column": 10,
                        "line": 141
                      }
                    }
                  },
                  "range": [
                    2481,
                    2482
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 141
                    },
                    "start": {
                      "column": 10,
                      "line": 141
                    }
                  }
                },
                "range": [
                  2481,
                  2484
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 141
                  },
                  "start": {
                    "column": 10,
                    "line": 141
                  }
                }
              }
            },
            "range": [
              2477,
              2484
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 141
              },
              "start": {
                "column": 6,
                "line": 141
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "ObjectExpression",
                        "properties": [
                          {
                            "type": "Property",
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "code",
                              "optional": false,
                              "range": [
                                2533,
                                2537
                              ],
                              "loc": {
                                "end": {
                                  "column": 12,
                                  "line": 143
                                },
                                "start": {
                                  "column": 8,
                                  "line": 143
                                }
                              }
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "Literal",
                              "raw": "'mapped'",
                              "value": "mapped",
                              "range": [
                                2539,
                                2547
                              ],
                              "loc": {
                                "end": {
                                  "column": 22,
                                  "line": 143
                                },
                                "start": {
                                  "column": 14,
                                  "line": 143
                                }
                              }
                            },
                            "range": [
                              2533,
                              2547
                            ],
                            "loc": {
                              "end": {
                                "column": 22,
                                "line": 143
                              },
                              "start": {
                                "column": 8,
                                "line": 143
                              }
                            }
                          },
                          {
                            "type": "Property",
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "name",
                              "optional": false,
                              "range": [
                                2557,
                                2561
                              ],
                              "loc": {
                                "end": {
                                  "column": 12,
                                  "line": 144
                                },
                                "start": {
                                  "column": 8,
                                  "line": 144
                                }
                              }
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": true,
                            "value": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "name",
                              "optional": false,
                              "range": [
                                2557,
                                2561
                              ],
                              "loc": {
                                "end": {
                                  "column": 12,
                                  "line": 144
                                },
                                "start": {
                                  "column": 8,
                                  "line": 144
                                }
                              }
                            },
                            "range": [
                              2557,
                              2561
                            ],
                            "loc": {
                              "end": {
                                "column": 12,
                                "line": 144
                              },
                              "start": {
                                "column": 8,
                                "line": 144
                              }
                            }
                          }
                        ],
                        "range": [
                          2523,
                          2568
                        ],
                        "loc": {
                          "end": {
                            "column": 5,
                            "line": 145
                          },
                          "start": {
                            "column": 11,
                            "line": 142
                          }
                        }
                      },
                      "range": [
                        2516,
                        2568
                      ],
                      "loc": {
                        "end": {
                          "column": 5,
                          "line": 145
                        },
                        "start": {
                          "column": 4,
                          "line": 142
                        }
                      }
                    }
                  ],
                  "range": [
                    2510,
                    2570
                  ],
                  "loc": {
                    "end": {
                      "column": 1,
                      "line": 146
                    },
                    "start": {
                      "column": 39,
                      "line": 141
                    }
                  }
                },
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "range": [
                      2502,
                      2506
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 141
                      },
                      "start": {
                        "column": 31,
                        "line": 141
                      }
                    }
                  }
                ],
                "range": [
                  2502,
                  2570
                ],
                "loc": {
                  "end": {
                    "column": 1,
                    "line": 146
                  },
                  "start": {
                    "column": 31,
                    "line": 141
                  }
                }
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "raw": "'a'",
                    "value": "a",
                    "range": [
                      2488,
                      2491
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 141
                      },
                      "start": {
                        "column": 17,
                        "line": 141
                      }
                    }
                  },
                  {
                    "type": "Literal",
                    "raw": "'b'",
                    "value": "b",
                    "range": [
                      2493,
                      2496
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 141
                      },
                      "start": {
                        "column": 22,
                        "line": 141
                      }
                    }
                  }
                ],
                "range": [
                  2487,
                  2497
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 141
                  },
                  "start": {
                    "column": 16,
                    "line": 141
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "map",
                "optional": false,
                "range": [
                  2498,
                  2501
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 141
                  },
                  "start": {
                    "column": 27,
                    "line": 141
                  }
                }
              },
              "range": [
                2487,
                2501
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 141
                },
                "start": {
                  "column": 16,
                  "line": 141
                }
              }
            },
            "optional": false,
            "range": [
              2487,
              2571
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 146
              },
              "start": {
                "column": 16,
                "line": 141
              }
            }
          },
          "range": [
            2477,
            2571
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 146
            },
            "start": {
              "column": 6,
              "line": 141
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        2471,
        2572
      ],
      "loc": {
        "end": {
          "column": 3,
          "line": 146
        },
        "start": {
          "column": 0,
          "line": 141
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Player",
        "optional": false,
        "range": [
          2674,
          2680
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 150
          },
          "start": {
            "column": 5,
            "line": 150
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
              "name": "name",
              "optional": false,
              "range": [
                2689,
                2693
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 151
                },
                "start": {
                  "column": 4,
                  "line": 151
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
                  "line": 151
                },
                "start": {
                  "column": 8,
                  "line": 151
                }
              },
              "range": [
                2693,
                2701
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  2695,
                  2701
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 151
                  },
                  "start": {
                    "column": 10,
                    "line": 151
                  }
                }
              }
            },
            "range": [
              2689,
              2702
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 151
              },
              "start": {
                "column": 4,
                "line": 151
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "age",
              "optional": false,
              "range": [
                2707,
                2710
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 152
                },
                "start": {
                  "column": 4,
                  "line": 152
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
                  "line": 152
                },
                "start": {
                  "column": 7,
                  "line": 152
                }
              },
              "range": [
                2710,
                2718
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  2712,
                  2718
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 152
                  },
                  "start": {
                    "column": 9,
                    "line": 152
                  }
                }
              }
            },
            "range": [
              2707,
              2719
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 152
              },
              "start": {
                "column": 4,
                "line": 152
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "position",
              "optional": false,
              "range": [
                2724,
                2732
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 153
                },
                "start": {
                  "column": 4,
                  "line": 153
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
                  "line": 153
                },
                "start": {
                  "column": 12,
                  "line": 153
                }
              },
              "range": [
                2732,
                2758
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "\"STRIKER\"",
                      "value": "STRIKER",
                      "range": [
                        2734,
                        2743
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 153
                        },
                        "start": {
                          "column": 14,
                          "line": 153
                        }
                      }
                    },
                    "range": [
                      2734,
                      2743
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 153
                      },
                      "start": {
                        "column": 14,
                        "line": 153
                      }
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "\"GOALKEEPER\"",
                      "value": "GOALKEEPER",
                      "range": [
                        2746,
                        2758
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 153
                        },
                        "start": {
                          "column": 26,
                          "line": 153
                        }
                      }
                    },
                    "range": [
                      2746,
                      2758
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 153
                      },
                      "start": {
                        "column": 26,
                        "line": 153
                      }
                    }
                  }
                ],
                "range": [
                  2734,
                  2758
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 153
                  },
                  "start": {
                    "column": 14,
                    "line": 153
                  }
                }
              }
            },
            "range": [
              2724,
              2759
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 153
              },
              "start": {
                "column": 4,
                "line": 153
              }
            }
          }
        ],
        "range": [
          2683,
          2761
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 154
          },
          "start": {
            "column": 14,
            "line": 150
          }
        }
      },
      "range": [
        2669,
        2762
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 154
        },
        "start": {
          "column": 0,
          "line": 150
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
          2770,
          2771
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 156
          },
          "start": {
            "column": 5,
            "line": 156
          }
        }
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 37,
              "line": 156
            },
            "start": {
              "column": 12,
              "line": 156
            }
          },
          "range": [
            2777,
            2802
          ],
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                2787,
                2802
              ],
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      2793,
                      2801
                    ],
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Player",
                          "optional": false,
                          "range": [
                            2794,
                            2800
                          ],
                          "loc": {
                            "end": {
                              "column": 35,
                              "line": 156
                            },
                            "start": {
                              "column": 29,
                              "line": 156
                            }
                          }
                        },
                        "range": [
                          2794,
                          2800
                        ],
                        "loc": {
                          "end": {
                            "column": 35,
                            "line": 156
                          },
                          "start": {
                            "column": 29,
                            "line": 156
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 156
                      },
                      "start": {
                        "column": 28,
                        "line": 156
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Array",
                    "optional": false,
                    "range": [
                      2788,
                      2793
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 156
                      },
                      "start": {
                        "column": 23,
                        "line": 156
                      }
                    }
                  },
                  "range": [
                    2788,
                    2801
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 156
                    },
                    "start": {
                      "column": 23,
                      "line": 156
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 156
                },
                "start": {
                  "column": 22,
                  "line": 156
                }
              }
            },
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Promise",
              "optional": false,
              "range": [
                2780,
                2787
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 156
                },
                "start": {
                  "column": 15,
                  "line": 156
                }
              }
            },
            "range": [
              2780,
              2802
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 156
              },
              "start": {
                "column": 15,
                "line": 156
              }
            }
          }
        },
        "range": [
          2774,
          2802
        ],
        "loc": {
          "end": {
            "column": 37,
            "line": 156
          },
          "start": {
            "column": 9,
            "line": 156
          }
        }
      },
      "range": [
        2765,
        2803
      ],
      "loc": {
        "end": {
          "column": 38,
          "line": 156
        },
        "start": {
          "column": 0,
          "line": 156
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
            "name": "f1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 11,
                  "line": 158
                },
                "start": {
                  "column": 8,
                  "line": 158
                }
              },
              "range": [
                2814,
                2817
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "F",
                  "optional": false,
                  "range": [
                    2816,
                    2817
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 158
                    },
                    "start": {
                      "column": 10,
                      "line": 158
                    }
                  }
                },
                "range": [
                  2816,
                  2817
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 158
                  },
                  "start": {
                    "column": 10,
                    "line": 158
                  }
                }
              }
            },
            "range": [
              2812,
              2817
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 158
              },
              "start": {
                "column": 6,
                "line": 158
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
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
                        "type": "ArrayExpression",
                        "elements": [
                          {
                            "type": "ObjectExpression",
                            "properties": [
                              {
                                "type": "Property",
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "name",
                                  "optional": false,
                                  "range": [
                                    2875,
                                    2879
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 16,
                                      "line": 161
                                    },
                                    "start": {
                                      "column": 12,
                                      "line": 161
                                    }
                                  }
                                },
                                "kind": "init",
                                "method": false,
                                "optional": false,
                                "shorthand": false,
                                "value": {
                                  "type": "Literal",
                                  "raw": "\"David Gomes\"",
                                  "value": "David Gomes",
                                  "range": [
                                    2881,
                                    2894
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 31,
                                      "line": 161
                                    },
                                    "start": {
                                      "column": 18,
                                      "line": 161
                                    }
                                  }
                                },
                                "range": [
                                  2875,
                                  2894
                                ],
                                "loc": {
                                  "end": {
                                    "column": 31,
                                    "line": 161
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 161
                                  }
                                }
                              },
                              {
                                "type": "Property",
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "age",
                                  "optional": false,
                                  "range": [
                                    2908,
                                    2911
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 15,
                                      "line": 162
                                    },
                                    "start": {
                                      "column": 12,
                                      "line": 162
                                    }
                                  }
                                },
                                "kind": "init",
                                "method": false,
                                "optional": false,
                                "shorthand": false,
                                "value": {
                                  "type": "Literal",
                                  "raw": "23",
                                  "value": 23,
                                  "range": [
                                    2913,
                                    2915
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 19,
                                      "line": 162
                                    },
                                    "start": {
                                      "column": 17,
                                      "line": 162
                                    }
                                  }
                                },
                                "range": [
                                  2908,
                                  2915
                                ],
                                "loc": {
                                  "end": {
                                    "column": 19,
                                    "line": 162
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 162
                                  }
                                }
                              },
                              {
                                "type": "Property",
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "position",
                                  "optional": false,
                                  "range": [
                                    2929,
                                    2937
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 20,
                                      "line": 163
                                    },
                                    "start": {
                                      "column": 12,
                                      "line": 163
                                    }
                                  }
                                },
                                "kind": "init",
                                "method": false,
                                "optional": false,
                                "shorthand": false,
                                "value": {
                                  "type": "Literal",
                                  "raw": "\"GOALKEEPER\"",
                                  "value": "GOALKEEPER",
                                  "range": [
                                    2939,
                                    2951
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 34,
                                      "line": 163
                                    },
                                    "start": {
                                      "column": 22,
                                      "line": 163
                                    }
                                  }
                                },
                                "range": [
                                  2929,
                                  2951
                                ],
                                "loc": {
                                  "end": {
                                    "column": 34,
                                    "line": 163
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 163
                                  }
                                }
                              }
                            ],
                            "range": [
                              2861,
                              2962
                            ],
                            "loc": {
                              "end": {
                                "column": 9,
                                "line": 164
                              },
                              "start": {
                                "column": 8,
                                "line": 160
                              }
                            }
                          },
                          {
                            "type": "ObjectExpression",
                            "properties": [
                              {
                                "type": "Property",
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "name",
                                  "optional": false,
                                  "range": [
                                    2978,
                                    2982
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 16,
                                      "line": 165
                                    },
                                    "start": {
                                      "column": 12,
                                      "line": 165
                                    }
                                  }
                                },
                                "kind": "init",
                                "method": false,
                                "optional": false,
                                "shorthand": false,
                                "value": {
                                  "type": "Literal",
                                  "raw": "\"Cristiano Ronaldo\"",
                                  "value": "Cristiano Ronaldo",
                                  "range": [
                                    2984,
                                    3003
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 37,
                                      "line": 165
                                    },
                                    "start": {
                                      "column": 18,
                                      "line": 165
                                    }
                                  }
                                },
                                "range": [
                                  2978,
                                  3003
                                ],
                                "loc": {
                                  "end": {
                                    "column": 37,
                                    "line": 165
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 165
                                  }
                                }
                              },
                              {
                                "type": "Property",
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "age",
                                  "optional": false,
                                  "range": [
                                    3017,
                                    3020
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 15,
                                      "line": 166
                                    },
                                    "start": {
                                      "column": 12,
                                      "line": 166
                                    }
                                  }
                                },
                                "kind": "init",
                                "method": false,
                                "optional": false,
                                "shorthand": false,
                                "value": {
                                  "type": "Literal",
                                  "raw": "33",
                                  "value": 33,
                                  "range": [
                                    3022,
                                    3024
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 19,
                                      "line": 166
                                    },
                                    "start": {
                                      "column": 17,
                                      "line": 166
                                    }
                                  }
                                },
                                "range": [
                                  3017,
                                  3024
                                ],
                                "loc": {
                                  "end": {
                                    "column": 19,
                                    "line": 166
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 166
                                  }
                                }
                              },
                              {
                                "type": "Property",
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "position",
                                  "optional": false,
                                  "range": [
                                    3038,
                                    3046
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 20,
                                      "line": 167
                                    },
                                    "start": {
                                      "column": 12,
                                      "line": 167
                                    }
                                  }
                                },
                                "kind": "init",
                                "method": false,
                                "optional": false,
                                "shorthand": false,
                                "value": {
                                  "type": "Literal",
                                  "raw": "\"STRIKER\"",
                                  "value": "STRIKER",
                                  "range": [
                                    3048,
                                    3057
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 31,
                                      "line": 167
                                    },
                                    "start": {
                                      "column": 22,
                                      "line": 167
                                    }
                                  }
                                },
                                "range": [
                                  3038,
                                  3057
                                ],
                                "loc": {
                                  "end": {
                                    "column": 31,
                                    "line": 167
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 167
                                  }
                                }
                              }
                            ],
                            "range": [
                              2964,
                              3068
                            ],
                            "loc": {
                              "end": {
                                "column": 9,
                                "line": 168
                              },
                              "start": {
                                "column": 11,
                                "line": 164
                              }
                            }
                          }
                        ],
                        "range": [
                          2851,
                          3074
                        ],
                        "loc": {
                          "end": {
                            "column": 5,
                            "line": 169
                          },
                          "start": {
                            "column": 23,
                            "line": 159
                          }
                        }
                      }
                    ],
                    "callee": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Promise",
                        "optional": false,
                        "range": [
                          2839,
                          2846
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 159
                          },
                          "start": {
                            "column": 11,
                            "line": 159
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "all",
                        "optional": false,
                        "range": [
                          2847,
                          2850
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 159
                          },
                          "start": {
                            "column": 19,
                            "line": 159
                          }
                        }
                      },
                      "range": [
                        2839,
                        2850
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 159
                        },
                        "start": {
                          "column": 11,
                          "line": 159
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      2839,
                      3075
                    ],
                    "loc": {
                      "end": {
                        "column": 6,
                        "line": 169
                      },
                      "start": {
                        "column": 11,
                        "line": 159
                      }
                    }
                  },
                  "range": [
                    2832,
                    3076
                  ],
                  "loc": {
                    "end": {
                      "column": 7,
                      "line": 169
                    },
                    "start": {
                      "column": 4,
                      "line": 159
                    }
                  }
                }
              ],
              "range": [
                2826,
                3078
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 170
                },
                "start": {
                  "column": 20,
                  "line": 158
                }
              }
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [],
            "range": [
              2820,
              3078
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 170
              },
              "start": {
                "column": 14,
                "line": 158
              }
            }
          },
          "range": [
            2812,
            3078
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 170
            },
            "start": {
              "column": 6,
              "line": 158
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        2806,
        3079
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 170
        },
        "start": {
          "column": 0,
          "line": 158
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
        "name": "foldLeft",
        "optional": false,
        "range": [
          3137,
          3145
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 174
          },
          "start": {
            "column": 17,
            "line": 174
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "z",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 33,
                "line": 174
              },
              "start": {
                "column": 30,
                "line": 174
              }
            },
            "range": [
              3150,
              3153
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "range": [
                  3152,
                  3153
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 174
                  },
                  "start": {
                    "column": 32,
                    "line": 174
                  }
                }
              },
              "range": [
                3152,
                3153
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 174
                },
                "start": {
                  "column": 32,
                  "line": 174
                }
              }
            }
          },
          "range": [
            3149,
            3153
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 174
            },
            "start": {
              "column": 29,
              "line": 174
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 63,
                "line": 174
              },
              "start": {
                "column": 36,
                "line": 174
              }
            },
            "range": [
              3156,
              3183
            ],
            "typeAnnotation": {
              "type": "TSFunctionType",
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "acc",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 174
                      },
                      "start": {
                        "column": 42,
                        "line": 174
                      }
                    },
                    "range": [
                      3162,
                      3165
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "range": [
                          3164,
                          3165
                        ],
                        "loc": {
                          "end": {
                            "column": 45,
                            "line": 174
                          },
                          "start": {
                            "column": 44,
                            "line": 174
                          }
                        }
                      },
                      "range": [
                        3164,
                        3165
                      ],
                      "loc": {
                        "end": {
                          "column": 45,
                          "line": 174
                        },
                        "start": {
                          "column": 44,
                          "line": 174
                        }
                      }
                    }
                  },
                  "range": [
                    3159,
                    3165
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 174
                    },
                    "start": {
                      "column": 39,
                      "line": 174
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
                        "column": 57,
                        "line": 174
                      },
                      "start": {
                        "column": 48,
                        "line": 174
                      }
                    },
                    "range": [
                      3168,
                      3177
                    ],
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "range": [
                        3170,
                        3177
                      ],
                      "loc": {
                        "end": {
                          "column": 57,
                          "line": 174
                        },
                        "start": {
                          "column": 50,
                          "line": 174
                        }
                      }
                    }
                  },
                  "range": [
                    3167,
                    3177
                  ],
                  "loc": {
                    "end": {
                      "column": 57,
                      "line": 174
                    },
                    "start": {
                      "column": 47,
                      "line": 174
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 63,
                    "line": 174
                  },
                  "start": {
                    "column": 59,
                    "line": 174
                  }
                },
                "range": [
                  3179,
                  3183
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "range": [
                      3182,
                      3183
                    ],
                    "loc": {
                      "end": {
                        "column": 63,
                        "line": 174
                      },
                      "start": {
                        "column": 62,
                        "line": 174
                      }
                    }
                  },
                  "range": [
                    3182,
                    3183
                  ],
                  "loc": {
                    "end": {
                      "column": 63,
                      "line": 174
                    },
                    "start": {
                      "column": 62,
                      "line": 174
                    }
                  }
                }
              },
              "range": [
                3158,
                3183
              ],
              "loc": {
                "end": {
                  "column": 63,
                  "line": 174
                },
                "start": {
                  "column": 38,
                  "line": 174
                }
              }
            }
          },
          "range": [
            3155,
            3183
          ],
          "loc": {
            "end": {
              "column": 63,
              "line": 174
            },
            "start": {
              "column": 35,
              "line": 174
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 67,
            "line": 174
          },
          "start": {
            "column": 64,
            "line": 174
          }
        },
        "range": [
          3184,
          3187
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "U",
            "optional": false,
            "range": [
              3186,
              3187
            ],
            "loc": {
              "end": {
                "column": 67,
                "line": 174
              },
              "start": {
                "column": 66,
                "line": 174
              }
            }
          },
          "range": [
            3186,
            3187
          ],
          "loc": {
            "end": {
              "column": 67,
              "line": 174
            },
            "start": {
              "column": 66,
              "line": 174
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 28,
            "line": 174
          },
          "start": {
            "column": 25,
            "line": 174
          }
        },
        "range": [
          3145,
          3148
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "range": [
                3146,
                3147
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 174
                },
                "start": {
                  "column": 26,
                  "line": 174
                }
              }
            },
            "out": false,
            "range": [
              3146,
              3147
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 174
              },
              "start": {
                "column": 26,
                "line": 174
              }
            }
          }
        ]
      },
      "range": [
        3120,
        3188
      ],
      "loc": {
        "end": {
          "column": 68,
          "line": 174
        },
        "start": {
          "column": 0,
          "line": 174
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
            "name": "res",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 16,
                  "line": 175
                },
                "start": {
                  "column": 7,
                  "line": 175
                }
              },
              "range": [
                3196,
                3205
              ],
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "range": [
                  3198,
                  3205
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 175
                  },
                  "start": {
                    "column": 9,
                    "line": 175
                  }
                }
              }
            },
            "range": [
              3193,
              3205
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 175
              },
              "start": {
                "column": 4,
                "line": 175
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "true",
                "value": true,
                "range": [
                  3217,
                  3221
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 175
                  },
                  "start": {
                    "column": 28,
                    "line": 175
                  }
                }
              },
              {
                "type": "ArrowFunctionExpression",
                "async": false,
                "body": {
                  "type": "LogicalExpression",
                  "operator": "&&",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "acc",
                    "optional": false,
                    "range": [
                      3235,
                      3238
                    ],
                    "loc": {
                      "end": {
                        "column": 49,
                        "line": 175
                      },
                      "start": {
                        "column": 46,
                        "line": 175
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "range": [
                      3242,
                      3243
                    ],
                    "loc": {
                      "end": {
                        "column": 54,
                        "line": 175
                      },
                      "start": {
                        "column": 53,
                        "line": 175
                      }
                    }
                  },
                  "range": [
                    3235,
                    3243
                  ],
                  "loc": {
                    "end": {
                      "column": 54,
                      "line": 175
                    },
                    "start": {
                      "column": 46,
                      "line": 175
                    }
                  }
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "acc",
                    "optional": false,
                    "range": [
                      3224,
                      3227
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 175
                      },
                      "start": {
                        "column": 35,
                        "line": 175
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "range": [
                      3229,
                      3230
                    ],
                    "loc": {
                      "end": {
                        "column": 41,
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
                  3223,
                  3243
                ],
                "loc": {
                  "end": {
                    "column": 54,
                    "line": 175
                  },
                  "start": {
                    "column": 34,
                    "line": 175
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foldLeft",
              "optional": false,
              "range": [
                3208,
                3216
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 175
                },
                "start": {
                  "column": 19,
                  "line": 175
                }
              }
            },
            "optional": false,
            "range": [
              3208,
              3244
            ],
            "loc": {
              "end": {
                "column": 55,
                "line": 175
              },
              "start": {
                "column": 19,
                "line": 175
              }
            }
          },
          "range": [
            3193,
            3244
          ],
          "loc": {
            "end": {
              "column": 55,
              "line": 175
            },
            "start": {
              "column": 4,
              "line": 175
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        3189,
        3245
      ],
      "loc": {
        "end": {
          "column": 56,
          "line": 175
        },
        "start": {
          "column": 0,
          "line": 175
        }
      }
    },
    {
      "type": "TSEnumDeclaration",
      "body": {
        "type": "TSEnumBody",
        "range": [
          3268,
          3276
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
                3270,
                3271
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 177
                },
                "start": {
                  "column": 13,
                  "line": 177
                }
              }
            },
            "range": [
              3270,
              3271
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 177
              },
              "start": {
                "column": 13,
                "line": 177
              }
            }
          },
          {
            "type": "TSEnumMember",
            "computed": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "range": [
                3273,
                3274
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 177
                },
                "start": {
                  "column": 16,
                  "line": 177
                }
              }
            },
            "range": [
              3273,
              3274
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 177
              },
              "start": {
                "column": 16,
                "line": 177
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 177
          },
          "start": {
            "column": 11,
            "line": 177
          }
        }
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "State",
        "optional": false,
        "range": [
          3262,
          3267
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 177
          },
          "start": {
            "column": 5,
            "line": 177
          }
        }
      },
      "range": [
        3257,
        3276
      ],
      "loc": {
        "end": {
          "column": 19,
          "line": 177
        },
        "start": {
          "column": 0,
          "line": 177
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "range": [
          3282,
          3285
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 178
          },
          "start": {
            "column": 5,
            "line": 178
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
              "name": "state",
              "optional": false,
              "range": [
                3290,
                3295
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 178
                },
                "start": {
                  "column": 13,
                  "line": 178
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
                  "column": 25,
                  "line": 178
                },
                "start": {
                  "column": 18,
                  "line": 178
                }
              },
              "range": [
                3295,
                3302
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "State",
                  "optional": false,
                  "range": [
                    3297,
                    3302
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 178
                    },
                    "start": {
                      "column": 20,
                      "line": 178
                    }
                  }
                },
                "range": [
                  3297,
                  3302
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 178
                  },
                  "start": {
                    "column": 20,
                    "line": 178
                  }
                }
              }
            },
            "range": [
              3290,
              3302
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 178
              },
              "start": {
                "column": 13,
                "line": 178
              }
            }
          }
        ],
        "range": [
          3288,
          3304
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 178
          },
          "start": {
            "column": 11,
            "line": 178
          }
        }
      },
      "range": [
        3277,
        3304
      ],
      "loc": {
        "end": {
          "column": 27,
          "line": 178
        },
        "start": {
          "column": 0,
          "line": 178
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
          3322,
          3325
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 179
          },
          "start": {
            "column": 17,
            "line": 179
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 36,
                "line": 179
              },
              "start": {
                "column": 25,
                "line": 179
              }
            },
            "range": [
              3330,
              3341
            ],
            "typeAnnotation": {
              "type": "TSFunctionType",
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 179
                  },
                  "start": {
                    "column": 30,
                    "line": 179
                  }
                },
                "range": [
                  3335,
                  3341
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
                        3338,
                        3339
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 179
                        },
                        "start": {
                          "column": 33,
                          "line": 179
                        }
                      }
                    },
                    "range": [
                      3338,
                      3339
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 179
                      },
                      "start": {
                        "column": 33,
                        "line": 179
                      }
                    }
                  },
                  "range": [
                    3338,
                    3341
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 179
                    },
                    "start": {
                      "column": 33,
                      "line": 179
                    }
                  }
                }
              },
              "range": [
                3332,
                3341
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 179
                },
                "start": {
                  "column": 27,
                  "line": 179
                }
              }
            }
          },
          "range": [
            3329,
            3341
          ],
          "loc": {
            "end": {
              "column": 36,
              "line": 179
            },
            "start": {
              "column": 24,
              "line": 179
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 42,
            "line": 179
          },
          "start": {
            "column": 37,
            "line": 179
          }
        },
        "range": [
          3342,
          3347
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
                3344,
                3345
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 179
                },
                "start": {
                  "column": 39,
                  "line": 179
                }
              }
            },
            "range": [
              3344,
              3345
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 179
              },
              "start": {
                "column": 39,
                "line": 179
              }
            }
          },
          "range": [
            3344,
            3347
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 179
            },
            "start": {
              "column": 39,
              "line": 179
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 23,
            "line": 179
          },
          "start": {
            "column": 20,
            "line": 179
          }
        },
        "range": [
          3325,
          3328
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
                3326,
                3327
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 179
                },
                "start": {
                  "column": 21,
                  "line": 179
                }
              }
            },
            "out": false,
            "range": [
              3326,
              3327
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 179
              },
              "start": {
                "column": 21,
                "line": 179
              }
            }
          }
        ]
      },
      "range": [
        3305,
        3348
      ],
      "loc": {
        "end": {
          "column": 43,
          "line": 179
        },
        "start": {
          "column": 0,
          "line": 179
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
                  "column": 12,
                  "line": 180
                },
                "start": {
                  "column": 5,
                  "line": 180
                }
              },
              "range": [
                3354,
                3361
              ],
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Foo",
                    "optional": false,
                    "range": [
                      3356,
                      3359
                    ],
                    "loc": {
                      "end": {
                        "column": 10,
                        "line": 180
                      },
                      "start": {
                        "column": 7,
                        "line": 180
                      }
                    }
                  },
                  "range": [
                    3356,
                    3359
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 180
                    },
                    "start": {
                      "column": 7,
                      "line": 180
                    }
                  }
                },
                "range": [
                  3356,
                  3361
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 180
                  },
                  "start": {
                    "column": 7,
                    "line": 180
                  }
                }
              }
            },
            "range": [
              3353,
              3361
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 180
              },
              "start": {
                "column": 4,
                "line": 180
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "async": false,
                "body": {
                  "type": "ConditionalExpression",
                  "alternate": {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "ObjectExpression",
                        "properties": [
                          {
                            "type": "Property",
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "state",
                              "optional": false,
                              "range": [
                                3409,
                                3414
                              ],
                              "loc": {
                                "end": {
                                  "column": 65,
                                  "line": 180
                                },
                                "start": {
                                  "column": 60,
                                  "line": 180
                                }
                              }
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "State",
                                "optional": false,
                                "range": [
                                  3416,
                                  3421
                                ],
                                "loc": {
                                  "end": {
                                    "column": 72,
                                    "line": 180
                                  },
                                  "start": {
                                    "column": 67,
                                    "line": 180
                                  }
                                }
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "B",
                                "optional": false,
                                "range": [
                                  3422,
                                  3423
                                ],
                                "loc": {
                                  "end": {
                                    "column": 74,
                                    "line": 180
                                  },
                                  "start": {
                                    "column": 73,
                                    "line": 180
                                  }
                                }
                              },
                              "range": [
                                3416,
                                3423
                              ],
                              "loc": {
                                "end": {
                                  "column": 74,
                                  "line": 180
                                },
                                "start": {
                                  "column": 67,
                                  "line": 180
                                }
                              }
                            },
                            "range": [
                              3409,
                              3423
                            ],
                            "loc": {
                              "end": {
                                "column": 74,
                                "line": 180
                              },
                              "start": {
                                "column": 60,
                                "line": 180
                              }
                            }
                          }
                        ],
                        "range": [
                          3407,
                          3425
                        ],
                        "loc": {
                          "end": {
                            "column": 76,
                            "line": 180
                          },
                          "start": {
                            "column": 58,
                            "line": 180
                          }
                        }
                      }
                    ],
                    "range": [
                      3406,
                      3426
                    ],
                    "loc": {
                      "end": {
                        "column": 77,
                        "line": 180
                      },
                      "start": {
                        "column": 57,
                        "line": 180
                      }
                    }
                  },
                  "consequent": {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "ObjectExpression",
                        "properties": [
                          {
                            "type": "Property",
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "state",
                              "optional": false,
                              "range": [
                                3386,
                                3391
                              ],
                              "loc": {
                                "end": {
                                  "column": 42,
                                  "line": 180
                                },
                                "start": {
                                  "column": 37,
                                  "line": 180
                                }
                              }
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "State",
                                "optional": false,
                                "range": [
                                  3393,
                                  3398
                                ],
                                "loc": {
                                  "end": {
                                    "column": 49,
                                    "line": 180
                                  },
                                  "start": {
                                    "column": 44,
                                    "line": 180
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
                                  3399,
                                  3400
                                ],
                                "loc": {
                                  "end": {
                                    "column": 51,
                                    "line": 180
                                  },
                                  "start": {
                                    "column": 50,
                                    "line": 180
                                  }
                                }
                              },
                              "range": [
                                3393,
                                3400
                              ],
                              "loc": {
                                "end": {
                                  "column": 51,
                                  "line": 180
                                },
                                "start": {
                                  "column": 44,
                                  "line": 180
                                }
                              }
                            },
                            "range": [
                              3386,
                              3400
                            ],
                            "loc": {
                              "end": {
                                "column": 51,
                                "line": 180
                              },
                              "start": {
                                "column": 37,
                                "line": 180
                              }
                            }
                          }
                        ],
                        "range": [
                          3384,
                          3402
                        ],
                        "loc": {
                          "end": {
                            "column": 53,
                            "line": 180
                          },
                          "start": {
                            "column": 35,
                            "line": 180
                          }
                        }
                      }
                    ],
                    "range": [
                      3383,
                      3403
                    ],
                    "loc": {
                      "end": {
                        "column": 54,
                        "line": 180
                      },
                      "start": {
                        "column": 34,
                        "line": 180
                      }
                    }
                  },
                  "test": {
                    "type": "UnaryExpression",
                    "argument": {
                      "type": "UnaryExpression",
                      "argument": {
                        "type": "Literal",
                        "raw": "true",
                        "value": true,
                        "range": [
                          3376,
                          3380
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 180
                          },
                          "start": {
                            "column": 27,
                            "line": 180
                          }
                        }
                      },
                      "operator": "!",
                      "prefix": true,
                      "range": [
                        3375,
                        3380
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 180
                        },
                        "start": {
                          "column": 26,
                          "line": 180
                        }
                      }
                    },
                    "operator": "!",
                    "prefix": true,
                    "range": [
                      3374,
                      3380
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 180
                      },
                      "start": {
                        "column": 25,
                        "line": 180
                      }
                    }
                  },
                  "range": [
                    3374,
                    3426
                  ],
                  "loc": {
                    "end": {
                      "column": 77,
                      "line": 180
                    },
                    "start": {
                      "column": 25,
                      "line": 180
                    }
                  }
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "range": [
                  3368,
                  3426
                ],
                "loc": {
                  "end": {
                    "column": 77,
                    "line": 180
                  },
                  "start": {
                    "column": 19,
                    "line": 180
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
                3364,
                3367
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
            },
            "optional": false,
            "range": [
              3364,
              3427
            ],
            "loc": {
              "end": {
                "column": 78,
                "line": 180
              },
              "start": {
                "column": 15,
                "line": 180
              }
            }
          },
          "range": [
            3353,
            3427
          ],
          "loc": {
            "end": {
              "column": 78,
              "line": 180
            },
            "start": {
              "column": 4,
              "line": 180
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        3349,
        3428
      ],
      "loc": {
        "end": {
          "column": 79,
          "line": 180
        },
        "start": {
          "column": 0,
          "line": 180
        }
      }
    },
    {
      "type": "TSEnumDeclaration",
      "body": {
        "type": "TSEnumBody",
        "range": [
          3473,
          3481
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
                3475,
                3476
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 184
                },
                "start": {
                  "column": 12,
                  "line": 184
                }
              }
            },
            "range": [
              3475,
              3476
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 184
              },
              "start": {
                "column": 12,
                "line": 184
              }
            }
          },
          {
            "type": "TSEnumMember",
            "computed": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "range": [
                3478,
                3479
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 184
                },
                "start": {
                  "column": 15,
                  "line": 184
                }
              }
            },
            "range": [
              3478,
              3479
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 184
              },
              "start": {
                "column": 15,
                "line": 184
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 184
          },
          "start": {
            "column": 10,
            "line": 184
          }
        }
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Enum",
        "optional": false,
        "range": [
          3468,
          3472
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 184
          },
          "start": {
            "column": 5,
            "line": 184
          }
        }
      },
      "range": [
        3463,
        3481
      ],
      "loc": {
        "end": {
          "column": 18,
          "line": 184
        },
        "start": {
          "column": 0,
          "line": 184
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          3509,
          3585
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                3513,
                3524
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 13,
                  "line": 187
                },
                "start": {
                  "column": 2,
                  "line": 187
                }
              }
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                3524,
                3536
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  3533,
                  3536
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 187
                  },
                  "start": {
                    "column": 22,
                    "line": 187
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "val",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 187
                      },
                      "start": {
                        "column": 17,
                        "line": 187
                      }
                    },
                    "range": [
                      3528,
                      3531
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          3530,
                          3531
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 187
                          },
                          "start": {
                            "column": 19,
                            "line": 187
                          }
                        }
                      },
                      "range": [
                        3530,
                        3531
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 187
                        },
                        "start": {
                          "column": 19,
                          "line": 187
                        }
                      }
                    }
                  },
                  "range": [
                    3525,
                    3531
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 187
                    },
                    "start": {
                      "column": 14,
                      "line": 187
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 187
                },
                "start": {
                  "column": 13,
                  "line": 187
                }
              }
            },
            "range": [
              3513,
              3536
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 187
              },
              "start": {
                "column": 2,
                "line": 187
              }
            }
          },
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "convert",
              "optional": false,
              "range": [
                3539,
                3546
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 188
                },
                "start": {
                  "column": 2,
                  "line": 188
                }
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                3546,
                3583
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  3580,
                  3583
                ],
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 188
                  },
                  "start": {
                    "column": 43,
                    "line": 188
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "converter",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 188
                      },
                      "start": {
                        "column": 19,
                        "line": 188
                      }
                    },
                    "range": [
                      3556,
                      3578
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
                            "name": "to",
                            "optional": false,
                            "range": [
                              3560,
                              3562
                            ],
                            "loc": {
                              "end": {
                                "column": 25,
                                "line": 188
                              },
                              "start": {
                                "column": 23,
                                "line": 188
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
                                "line": 188
                              },
                              "start": {
                                "column": 25,
                                "line": 188
                              }
                            },
                            "range": [
                              3562,
                              3575
                            ],
                            "typeAnnotation": {
                              "type": "TSFunctionType",
                              "params": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "v",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "loc": {
                                      "end": {
                                        "column": 32,
                                        "line": 188
                                      },
                                      "start": {
                                        "column": 29,
                                        "line": 188
                                      }
                                    },
                                    "range": [
                                      3566,
                                      3569
                                    ],
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "T",
                                        "optional": false,
                                        "range": [
                                          3568,
                                          3569
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 32,
                                            "line": 188
                                          },
                                          "start": {
                                            "column": 31,
                                            "line": 188
                                          }
                                        }
                                      },
                                      "range": [
                                        3568,
                                        3569
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 32,
                                          "line": 188
                                        },
                                        "start": {
                                          "column": 31,
                                          "line": 188
                                        }
                                      }
                                    }
                                  },
                                  "range": [
                                    3565,
                                    3569
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 32,
                                      "line": 188
                                    },
                                    "start": {
                                      "column": 28,
                                      "line": 188
                                    }
                                  }
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "loc": {
                                  "end": {
                                    "column": 38,
                                    "line": 188
                                  },
                                  "start": {
                                    "column": 34,
                                    "line": 188
                                  }
                                },
                                "range": [
                                  3571,
                                  3575
                                ],
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false,
                                    "range": [
                                      3574,
                                      3575
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 38,
                                        "line": 188
                                      },
                                      "start": {
                                        "column": 37,
                                        "line": 188
                                      }
                                    }
                                  },
                                  "range": [
                                    3574,
                                    3575
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 38,
                                      "line": 188
                                    },
                                    "start": {
                                      "column": 37,
                                      "line": 188
                                    }
                                  }
                                }
                              },
                              "range": [
                                3564,
                                3575
                              ],
                              "loc": {
                                "end": {
                                  "column": 38,
                                  "line": 188
                                },
                                "start": {
                                  "column": 27,
                                  "line": 188
                                }
                              }
                            }
                          },
                          "range": [
                            3560,
                            3576
                          ],
                          "loc": {
                            "end": {
                              "column": 39,
                              "line": 188
                            },
                            "start": {
                              "column": 23,
                              "line": 188
                            }
                          }
                        }
                      ],
                      "range": [
                        3558,
                        3578
                      ],
                      "loc": {
                        "end": {
                          "column": 41,
                          "line": 188
                        },
                        "start": {
                          "column": 21,
                          "line": 188
                        }
                      }
                    }
                  },
                  "range": [
                    3547,
                    3578
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 188
                    },
                    "start": {
                      "column": 10,
                      "line": 188
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 188
                },
                "start": {
                  "column": 9,
                  "line": 188
                }
              }
            },
            "range": [
              3539,
              3583
            ],
            "loc": {
              "end": {
                "column": 46,
                "line": 188
              },
              "start": {
                "column": 2,
                "line": 188
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 189
          },
          "start": {
            "column": 26,
            "line": 186
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ClassWithConvert",
        "optional": false,
        "range": [
          3489,
          3505
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 186
          },
          "start": {
            "column": 6,
            "line": 186
          }
        }
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 25,
            "line": 186
          },
          "start": {
            "column": 22,
            "line": 186
          }
        },
        "range": [
          3505,
          3508
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
                3506,
                3507
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 186
                },
                "start": {
                  "column": 23,
                  "line": 186
                }
              }
            },
            "out": false,
            "range": [
              3506,
              3507
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 186
              },
              "start": {
                "column": 23,
                "line": 186
              }
            }
          }
        ]
      },
      "range": [
        3483,
        3585
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 189
        },
        "start": {
          "column": 0,
          "line": 186
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
          3658,
          3661
        ],
        "loc": {
          "end": {
            "column": 74,
            "line": 191
          },
          "start": {
            "column": 71,
            "line": 191
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn",
        "optional": false,
        "range": [
          3596,
          3598
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 191
          },
          "start": {
            "column": 9,
            "line": 191
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
                "column": 39,
                "line": 191
              },
              "start": {
                "column": 18,
                "line": 191
              }
            },
            "range": [
              3605,
              3626
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  3623,
                  3626
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
                        3624,
                        3625
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 191
                        },
                        "start": {
                          "column": 37,
                          "line": 191
                        }
                      }
                    },
                    "range": [
                      3624,
                      3625
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 191
                      },
                      "start": {
                        "column": 37,
                        "line": 191
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 191
                  },
                  "start": {
                    "column": 36,
                    "line": 191
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ClassWithConvert",
                "optional": false,
                "range": [
                  3607,
                  3623
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 191
                  },
                  "start": {
                    "column": 20,
                    "line": 191
                  }
                }
              },
              "range": [
                3607,
                3626
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 191
                },
                "start": {
                  "column": 20,
                  "line": 191
                }
              }
            }
          },
          "range": [
            3602,
            3626
          ],
          "loc": {
            "end": {
              "column": 39,
              "line": 191
            },
            "start": {
              "column": 15,
              "line": 191
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 69,
                "line": 191
              },
              "start": {
                "column": 42,
                "line": 191
              }
            },
            "range": [
              3629,
              3656
            ],
            "typeAnnotation": {
              "type": "TSFunctionType",
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 69,
                    "line": 191
                  },
                  "start": {
                    "column": 47,
                    "line": 191
                  }
                },
                "range": [
                  3634,
                  3656
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      3653,
                      3656
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
                            3654,
                            3655
                          ],
                          "loc": {
                            "end": {
                              "column": 68,
                              "line": 191
                            },
                            "start": {
                              "column": 67,
                              "line": 191
                            }
                          }
                        },
                        "range": [
                          3654,
                          3655
                        ],
                        "loc": {
                          "end": {
                            "column": 68,
                            "line": 191
                          },
                          "start": {
                            "column": 67,
                            "line": 191
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 69,
                        "line": 191
                      },
                      "start": {
                        "column": 66,
                        "line": 191
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ClassWithConvert",
                    "optional": false,
                    "range": [
                      3637,
                      3653
                    ],
                    "loc": {
                      "end": {
                        "column": 66,
                        "line": 191
                      },
                      "start": {
                        "column": 50,
                        "line": 191
                      }
                    }
                  },
                  "range": [
                    3637,
                    3656
                  ],
                  "loc": {
                    "end": {
                      "column": 69,
                      "line": 191
                    },
                    "start": {
                      "column": 50,
                      "line": 191
                    }
                  }
                }
              },
              "range": [
                3631,
                3656
              ],
              "loc": {
                "end": {
                  "column": 69,
                  "line": 191
                },
                "start": {
                  "column": 44,
                  "line": 191
                }
              }
            }
          },
          "range": [
            3628,
            3656
          ],
          "loc": {
            "end": {
              "column": 69,
              "line": 191
            },
            "start": {
              "column": 41,
              "line": 191
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 14,
            "line": 191
          },
          "start": {
            "column": 11,
            "line": 191
          }
        },
        "range": [
          3598,
          3601
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
                3599,
                3600
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 191
                },
                "start": {
                  "column": 12,
                  "line": 191
                }
              }
            },
            "out": false,
            "range": [
              3599,
              3600
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 191
              },
              "start": {
                "column": 12,
                "line": 191
              }
            }
          }
        ]
      },
      "range": [
        3587,
        3661
      ],
      "loc": {
        "end": {
          "column": 74,
          "line": 191
        },
        "start": {
          "column": 0,
          "line": 191
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
            "arguments": [
              {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Enum",
                  "optional": false,
                  "range": [
                    3686,
                    3690
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 192
                    },
                    "start": {
                      "column": 24,
                      "line": 192
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
                    3691,
                    3692
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 192
                    },
                    "start": {
                      "column": 29,
                      "line": 192
                    }
                  }
                },
                "range": [
                  3686,
                  3692
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 192
                  },
                  "start": {
                    "column": 24,
                    "line": 192
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "ClassWithConvert",
              "optional": false,
              "range": [
                3669,
                3685
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 192
                },
                "start": {
                  "column": 7,
                  "line": 192
                }
              }
            },
            "range": [
              3665,
              3693
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 192
              },
              "start": {
                "column": 3,
                "line": 192
              }
            }
          },
          {
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
              "type": "NewExpression",
              "arguments": [
                {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Enum",
                    "optional": false,
                    "range": [
                      3722,
                      3726
                    ],
                    "loc": {
                      "end": {
                        "column": 64,
                        "line": 192
                      },
                      "start": {
                        "column": 60,
                        "line": 192
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
                      3727,
                      3728
                    ],
                    "loc": {
                      "end": {
                        "column": 66,
                        "line": 192
                      },
                      "start": {
                        "column": 65,
                        "line": 192
                      }
                    }
                  },
                  "range": [
                    3722,
                    3728
                  ],
                  "loc": {
                    "end": {
                      "column": 66,
                      "line": 192
                    },
                    "start": {
                      "column": 60,
                      "line": 192
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "ClassWithConvert",
                "optional": false,
                "range": [
                  3705,
                  3721
                ],
                "loc": {
                  "end": {
                    "column": 59,
                    "line": 192
                  },
                  "start": {
                    "column": 43,
                    "line": 192
                  }
                }
              },
              "range": [
                3701,
                3729
              ],
              "loc": {
                "end": {
                  "column": 67,
                  "line": 192
                },
                "start": {
                  "column": 39,
                  "line": 192
                }
              }
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [],
            "range": [
              3695,
              3729
            ],
            "loc": {
              "end": {
                "column": 67,
                "line": 192
              },
              "start": {
                "column": 33,
                "line": 192
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn",
          "optional": false,
          "range": [
            3662,
            3664
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 192
            },
            "start": {
              "column": 0,
              "line": 192
            }
          }
        },
        "optional": false,
        "range": [
          3662,
          3730
        ],
        "loc": {
          "end": {
            "column": 68,
            "line": 192
          },
          "start": {
            "column": 0,
            "line": 192
          }
        }
      },
      "range": [
        3662,
        3731
      ],
      "loc": {
        "end": {
          "column": 69,
          "line": 192
        },
        "start": {
          "column": 0,
          "line": 192
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Func",
        "optional": false,
        "range": [
          3738,
          3742
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
                  "column": 20,
                  "line": 194
                },
                "start": {
                  "column": 17,
                  "line": 194
                }
              },
              "range": [
                3750,
                3753
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    3752,
                    3753
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 194
                    },
                    "start": {
                      "column": 19,
                      "line": 194
                    }
                  }
                },
                "range": [
                  3752,
                  3753
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 194
                  },
                  "start": {
                    "column": 19,
                    "line": 194
                  }
                }
              }
            },
            "range": [
              3749,
              3753
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 194
              },
              "start": {
                "column": 16,
                "line": 194
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 26,
              "line": 194
            },
            "start": {
              "column": 22,
              "line": 194
            }
          },
          "range": [
            3755,
            3759
          ],
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                3758,
                3759
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 194
                },
                "start": {
                  "column": 25,
                  "line": 194
                }
              }
            },
            "range": [
              3758,
              3759
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 194
              },
              "start": {
                "column": 25,
                "line": 194
              }
            }
          }
        },
        "range": [
          3748,
          3759
        ],
        "loc": {
          "end": {
            "column": 26,
            "line": 194
          },
          "start": {
            "column": 15,
            "line": 194
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 12,
            "line": 194
          },
          "start": {
            "column": 9,
            "line": 194
          }
        },
        "range": [
          3742,
          3745
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
                3743,
                3744
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 194
                },
                "start": {
                  "column": 10,
                  "line": 194
                }
              }
            },
            "out": false,
            "range": [
              3743,
              3744
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 194
              },
              "start": {
                "column": 10,
                "line": 194
              }
            }
          }
        ]
      },
      "range": [
        3733,
        3760
      ],
      "loc": {
        "end": {
          "column": 27,
          "line": 194
        },
        "start": {
          "column": 0,
          "line": 194
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
        "name": "makeFoo",
        "optional": false,
        "range": [
          3779,
          3786
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 196
          },
          "start": {
            "column": 17,
            "line": 196
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
                "line": 196
              },
              "start": {
                "column": 29,
                "line": 196
              }
            },
            "range": [
              3791,
              3794
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  3793,
                  3794
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 196
                  },
                  "start": {
                    "column": 31,
                    "line": 196
                  }
                }
              },
              "range": [
                3793,
                3794
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 196
                },
                "start": {
                  "column": 31,
                  "line": 196
                }
              }
            }
          },
          "range": [
            3790,
            3794
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 196
            },
            "start": {
              "column": 28,
              "line": 196
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 42,
            "line": 196
          },
          "start": {
            "column": 33,
            "line": 196
          }
        },
        "range": [
          3795,
          3804
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              3801,
              3804
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
                    3802,
                    3803
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 196
                    },
                    "start": {
                      "column": 40,
                      "line": 196
                    }
                  }
                },
                "range": [
                  3802,
                  3803
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 196
                  },
                  "start": {
                    "column": 40,
                    "line": 196
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 196
              },
              "start": {
                "column": 39,
                "line": 196
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Func",
            "optional": false,
            "range": [
              3797,
              3801
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 196
              },
              "start": {
                "column": 35,
                "line": 196
              }
            }
          },
          "range": [
            3797,
            3804
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 196
            },
            "start": {
              "column": 35,
              "line": 196
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 27,
            "line": 196
          },
          "start": {
            "column": 24,
            "line": 196
          }
        },
        "range": [
          3786,
          3789
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
                3787,
                3788
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 196
                },
                "start": {
                  "column": 25,
                  "line": 196
                }
              }
            },
            "out": false,
            "range": [
              3787,
              3788
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 196
              },
              "start": {
                "column": 25,
                "line": 196
              }
            }
          }
        ]
      },
      "range": [
        3762,
        3805
      ],
      "loc": {
        "end": {
          "column": 43,
          "line": 196
        },
        "start": {
          "column": 0,
          "line": 196
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
        "name": "baz",
        "optional": false,
        "range": [
          3823,
          3826
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 197
          },
          "start": {
            "column": 17,
            "line": 197
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
                "line": 197
              },
              "start": {
                "column": 25,
                "line": 197
              }
            },
            "range": [
              3831,
              3840
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  3837,
                  3840
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "range": [
                        3838,
                        3839
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 197
                        },
                        "start": {
                          "column": 32,
                          "line": 197
                        }
                      }
                    },
                    "range": [
                      3838,
                      3839
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 197
                      },
                      "start": {
                        "column": 32,
                        "line": 197
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 197
                  },
                  "start": {
                    "column": 31,
                    "line": 197
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Func",
                "optional": false,
                "range": [
                  3833,
                  3837
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 197
                  },
                  "start": {
                    "column": 27,
                    "line": 197
                  }
                }
              },
              "range": [
                3833,
                3840
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 197
                },
                "start": {
                  "column": 27,
                  "line": 197
                }
              }
            }
          },
          "range": [
            3830,
            3840
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 197
            },
            "start": {
              "column": 24,
              "line": 197
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
                "column": 46,
                "line": 197
              },
              "start": {
                "column": 37,
                "line": 197
              }
            },
            "range": [
              3843,
              3852
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  3849,
                  3852
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "range": [
                        3850,
                        3851
                      ],
                      "loc": {
                        "end": {
                          "column": 45,
                          "line": 197
                        },
                        "start": {
                          "column": 44,
                          "line": 197
                        }
                      }
                    },
                    "range": [
                      3850,
                      3851
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 197
                      },
                      "start": {
                        "column": 44,
                        "line": 197
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 197
                  },
                  "start": {
                    "column": 43,
                    "line": 197
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Func",
                "optional": false,
                "range": [
                  3845,
                  3849
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 197
                  },
                  "start": {
                    "column": 39,
                    "line": 197
                  }
                }
              },
              "range": [
                3845,
                3852
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 197
                },
                "start": {
                  "column": 39,
                  "line": 197
                }
              }
            }
          },
          "range": [
            3842,
            3852
          ],
          "loc": {
            "end": {
              "column": 46,
              "line": 197
            },
            "start": {
              "column": 36,
              "line": 197
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 53,
            "line": 197
          },
          "start": {
            "column": 47,
            "line": 197
          }
        },
        "range": [
          3853,
          3859
        ],
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "range": [
            3855,
            3859
          ],
          "loc": {
            "end": {
              "column": 53,
              "line": 197
            },
            "start": {
              "column": 49,
              "line": 197
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 23,
            "line": 197
          },
          "start": {
            "column": 20,
            "line": 197
          }
        },
        "range": [
          3826,
          3829
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "range": [
                3827,
                3828
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 197
                },
                "start": {
                  "column": 21,
                  "line": 197
                }
              }
            },
            "out": false,
            "range": [
              3827,
              3828
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 197
              },
              "start": {
                "column": 21,
                "line": 197
              }
            }
          }
        ]
      },
      "range": [
        3806,
        3860
      ],
      "loc": {
        "end": {
          "column": 54,
          "line": 197
        },
        "start": {
          "column": 0,
          "line": 197
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Enum",
                  "optional": false,
                  "range": [
                    3874,
                    3878
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 199
                    },
                    "start": {
                      "column": 12,
                      "line": 199
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
                    3879,
                    3880
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
                  3874,
                  3880
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 199
                  },
                  "start": {
                    "column": 12,
                    "line": 199
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "makeFoo",
              "optional": false,
              "range": [
                3866,
                3873
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 199
                },
                "start": {
                  "column": 4,
                  "line": 199
                }
              }
            },
            "optional": false,
            "range": [
              3866,
              3881
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 199
              },
              "start": {
                "column": 4,
                "line": 199
              }
            }
          },
          {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Enum",
                  "optional": false,
                  "range": [
                    3891,
                    3895
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 199
                    },
                    "start": {
                      "column": 29,
                      "line": 199
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
                    3896,
                    3897
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 199
                    },
                    "start": {
                      "column": 34,
                      "line": 199
                    }
                  }
                },
                "range": [
                  3891,
                  3897
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 199
                  },
                  "start": {
                    "column": 29,
                    "line": 199
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "makeFoo",
              "optional": false,
              "range": [
                3883,
                3890
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 199
                },
                "start": {
                  "column": 21,
                  "line": 199
                }
              }
            },
            "optional": false,
            "range": [
              3883,
              3898
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 199
              },
              "start": {
                "column": 21,
                "line": 199
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "baz",
          "optional": false,
          "range": [
            3862,
            3865
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 199
            },
            "start": {
              "column": 0,
              "line": 199
            }
          }
        },
        "optional": false,
        "range": [
          3862,
          3899
        ],
        "loc": {
          "end": {
            "column": 37,
            "line": 199
          },
          "start": {
            "column": 0,
            "line": 199
          }
        }
      },
      "range": [
        3862,
        3900
      ],
      "loc": {
        "end": {
          "column": 38,
          "line": 199
        },
        "start": {
          "column": 0,
          "line": 199
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 200
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
