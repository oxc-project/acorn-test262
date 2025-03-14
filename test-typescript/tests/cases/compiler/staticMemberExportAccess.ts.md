__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    422
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          12,
          78
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "range": [
                17,
                20
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 2
                },
                "start": {
                  "column": 3,
                  "line": 2
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
                20,
                39
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "raw": "\"hi\"",
                      "value": "hi",
                      "range": [
                        32,
                        36
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 2
                        },
                        "start": {
                          "column": 18,
                          "line": 2
                        }
                      }
                    },
                    "range": [
                      25,
                      37
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 2
                      },
                      "start": {
                        "column": 11,
                        "line": 2
                      }
                    }
                  }
                ],
                "range": [
                  23,
                  39
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 2
                  },
                  "start": {
                    "column": 9,
                    "line": 2
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 2
                },
                "start": {
                  "column": 6,
                  "line": 2
                }
              }
            },
            "range": [
              17,
              39
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 2
              },
              "start": {
                "column": 3,
                "line": 2
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
              "name": "bar",
              "optional": false,
              "range": [
                49,
                52
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 3
                },
                "start": {
                  "column": 9,
                  "line": 3
                }
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "range": [
                52,
                76
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "UnaryExpression",
                      "argument": {
                        "type": "Literal",
                        "raw": "1",
                        "value": 1,
                        "range": [
                          69,
                          70
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 4
                          },
                          "start": {
                            "column": 12,
                            "line": 4
                          }
                        }
                      },
                      "operator": "-",
                      "prefix": true,
                      "range": [
                        68,
                        70
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 4
                        },
                        "start": {
                          "column": 11,
                          "line": 4
                        }
                      }
                    },
                    "range": [
                      61,
                      71
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
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
                  55,
                  76
                ],
                "loc": {
                  "end": {
                    "column": 4,
                    "line": 5
                  },
                  "start": {
                    "column": 15,
                    "line": 3
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "loc": {
                "end": {
                  "column": 4,
                  "line": 5
                },
                "start": {
                  "column": 12,
                  "line": 3
                }
              }
            },
            "range": [
              42,
              76
            ],
            "loc": {
              "end": {
                "column": 4,
                "line": 5
              },
              "start": {
                "column": 2,
                "line": 3
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 6
          },
          "start": {
            "column": 12,
            "line": 1
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Sammy",
        "optional": false,
        "range": [
          6,
          11
        ],
        "loc": {
          "end": {
            "column": 11,
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
        78
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 6
        },
        "start": {
          "column": 0,
          "line": 1
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
              98,
              115
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
                    "name": "x",
                    "optional": false,
                    "range": [
                      109,
                      110
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 8
                      },
                      "start": {
                        "column": 15,
                        "line": 8
                      }
                    }
                  },
                  "init": {
                    "type": "Literal",
                    "raw": "1",
                    "value": 1,
                    "range": [
                      113,
                      114
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 8
                      },
                      "start": {
                        "column": 19,
                        "line": 8
                      }
                    }
                  },
                  "range": [
                    109,
                    114
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 8
                    },
                    "start": {
                      "column": 15,
                      "line": 8
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "var",
              "range": [
                105,
                115
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 8
                },
                "start": {
                  "column": 11,
                  "line": 8
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 21,
                "line": 8
              },
              "start": {
                "column": 4,
                "line": 8
              }
            }
          }
        ],
        "range": [
          92,
          117
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 9
          },
          "start": {
            "column": 13,
            "line": 7
          }
        }
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          86,
          91
        ],
        "decorators": [],
        "name": "Sammy",
        "optional": false,
        "loc": {
          "end": {
            "column": 12,
            "line": 7
          },
          "start": {
            "column": 7,
            "line": 7
          }
        }
      },
      "kind": "module",
      "range": [
        79,
        117
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
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          141,
          180
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "sammy",
              "optional": false,
              "range": [
                147,
                152
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 11
                },
                "start": {
                  "column": 4,
                  "line": 11
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
                  "line": 11
                },
                "start": {
                  "column": 9,
                  "line": 11
                }
              },
              "range": [
                152,
                159
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Sammy",
                  "optional": false,
                  "range": [
                    154,
                    159
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 11
                    },
                    "start": {
                      "column": 11,
                      "line": 11
                    }
                  }
                },
                "range": [
                  154,
                  159
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 11
                  },
                  "start": {
                    "column": 11,
                    "line": 11
                  }
                }
              }
            },
            "range": [
              147,
              160
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 11
              },
              "start": {
                "column": 4,
                "line": 11
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 12
          },
          "start": {
            "column": 23,
            "line": 10
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "JQueryStatic",
        "optional": false,
        "range": [
          128,
          140
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 10
          },
          "start": {
            "column": 10,
            "line": 10
          }
        }
      },
      "range": [
        118,
        180
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 12
        },
        "start": {
          "column": 0,
          "line": 10
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
            "name": "$",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 19,
                  "line": 13
                },
                "start": {
                  "column": 5,
                  "line": 13
                }
              },
              "range": [
                186,
                200
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "JQueryStatic",
                  "optional": false,
                  "range": [
                    188,
                    200
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 13
                    },
                    "start": {
                      "column": 7,
                      "line": 13
                    }
                  }
                },
                "range": [
                  188,
                  200
                ],
                "loc": {
                  "end": {
                    "column": 19,
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
              185,
              200
            ],
            "loc": {
              "end": {
                "column": 19,
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
            185,
            200
          ],
          "loc": {
            "end": {
              "column": 19,
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
        181,
        201
      ],
      "loc": {
        "end": {
          "column": 20,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 13
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
            "name": "instanceOfClassSammy",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 31,
                  "line": 14
                },
                "start": {
                  "column": 24,
                  "line": 14
                }
              },
              "range": [
                226,
                233
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Sammy",
                  "optional": false,
                  "range": [
                    228,
                    233
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 14
                    },
                    "start": {
                      "column": 26,
                      "line": 14
                    }
                  }
                },
                "range": [
                  228,
                  233
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 14
                  },
                  "start": {
                    "column": 26,
                    "line": 14
                  }
                }
              }
            },
            "range": [
              206,
              233
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 14
              },
              "start": {
                "column": 4,
                "line": 14
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "$",
                "optional": false,
                "range": [
                  240,
                  241
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 14
                  },
                  "start": {
                    "column": 38,
                    "line": 14
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "sammy",
                "optional": false,
                "range": [
                  242,
                  247
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 14
                  },
                  "start": {
                    "column": 40,
                    "line": 14
                  }
                }
              },
              "range": [
                240,
                247
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 14
                },
                "start": {
                  "column": 38,
                  "line": 14
                }
              }
            },
            "range": [
              236,
              249
            ],
            "loc": {
              "end": {
                "column": 47,
                "line": 14
              },
              "start": {
                "column": 34,
                "line": 14
              }
            }
          },
          "range": [
            206,
            249
          ],
          "loc": {
            "end": {
              "column": 47,
              "line": 14
            },
            "start": {
              "column": 4,
              "line": 14
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        202,
        250
      ],
      "loc": {
        "end": {
          "column": 48,
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
            "name": "r1",
            "optional": false,
            "range": [
              274,
              276
            ],
            "loc": {
              "end": {
                "column": 6,
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
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "instanceOfClassSammy",
                "optional": false,
                "range": [
                  279,
                  299
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 15
                  },
                  "start": {
                    "column": 9,
                    "line": 15
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "range": [
                  300,
                  303
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 15
                  },
                  "start": {
                    "column": 30,
                    "line": 15
                  }
                }
              },
              "range": [
                279,
                303
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 15
                },
                "start": {
                  "column": 9,
                  "line": 15
                }
              }
            },
            "optional": false,
            "range": [
              279,
              305
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 15
              },
              "start": {
                "column": 9,
                "line": 15
              }
            }
          },
          "range": [
            274,
            305
          ],
          "loc": {
            "end": {
              "column": 35,
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
        270,
        306
      ],
      "loc": {
        "end": {
          "column": 36,
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
              327,
              329
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
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "$",
                  "optional": false,
                  "range": [
                    332,
                    333
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 16
                    },
                    "start": {
                      "column": 9,
                      "line": 16
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "sammy",
                  "optional": false,
                  "range": [
                    334,
                    339
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 16
                    },
                    "start": {
                      "column": 11,
                      "line": 16
                    }
                  }
                },
                "range": [
                  332,
                  339
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 16
                  },
                  "start": {
                    "column": 9,
                    "line": 16
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "range": [
                  340,
                  343
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 16
                  },
                  "start": {
                    "column": 17,
                    "line": 16
                  }
                }
              },
              "range": [
                332,
                343
              ],
              "loc": {
                "end": {
                  "column": 20,
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
              332,
              345
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 16
              },
              "start": {
                "column": 9,
                "line": 16
              }
            }
          },
          "range": [
            327,
            345
          ],
          "loc": {
            "end": {
              "column": 22,
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
        323,
        346
      ],
      "loc": {
        "end": {
          "column": 23,
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
              351,
              353
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
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "$",
                  "optional": false,
                  "range": [
                    356,
                    357
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 17
                    },
                    "start": {
                      "column": 9,
                      "line": 17
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "sammy",
                  "optional": false,
                  "range": [
                    358,
                    363
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 17
                    },
                    "start": {
                      "column": 11,
                      "line": 17
                    }
                  }
                },
                "range": [
                  356,
                  363
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 17
                  },
                  "start": {
                    "column": 9,
                    "line": 17
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "bar",
                "optional": false,
                "range": [
                  364,
                  367
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 17
                  },
                  "start": {
                    "column": 17,
                    "line": 17
                  }
                }
              },
              "range": [
                356,
                367
              ],
              "loc": {
                "end": {
                  "column": 20,
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
              356,
              369
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 17
              },
              "start": {
                "column": 9,
                "line": 17
              }
            }
          },
          "range": [
            351,
            369
          ],
          "loc": {
            "end": {
              "column": 22,
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
        347,
        370
      ],
      "loc": {
        "end": {
          "column": 23,
          "line": 17
        },
        "start": {
          "column": 0,
          "line": 17
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
              384,
              386
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 18
              },
              "start": {
                "column": 4,
                "line": 18
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "$",
                "optional": false,
                "range": [
                  389,
                  390
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 18
                  },
                  "start": {
                    "column": 9,
                    "line": 18
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "sammy",
                "optional": false,
                "range": [
                  391,
                  396
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 18
                  },
                  "start": {
                    "column": 11,
                    "line": 18
                  }
                }
              },
              "range": [
                389,
                396
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 18
                },
                "start": {
                  "column": 9,
                  "line": 18
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                397,
                398
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 18
                },
                "start": {
                  "column": 17,
                  "line": 18
                }
              }
            },
            "range": [
              389,
              398
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 18
              },
              "start": {
                "column": 9,
                "line": 18
              }
            }
          },
          "range": [
            384,
            398
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 18
            },
            "start": {
              "column": 4,
              "line": 18
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        380,
        399
      ],
      "loc": {
        "end": {
          "column": 19,
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
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Sammy",
            "optional": false,
            "range": [
              410,
              415
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 20
              },
              "start": {
                "column": 0,
                "line": 20
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "bar",
            "optional": false,
            "range": [
              416,
              419
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 20
              },
              "start": {
                "column": 6,
                "line": 20
              }
            }
          },
          "range": [
            410,
            419
          ],
          "loc": {
            "end": {
              "column": 9,
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
          410,
          421
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 20
          },
          "start": {
            "column": 0,
            "line": 20
          }
        }
      },
      "range": [
        410,
        422
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
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 12,
      "line": 20
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
