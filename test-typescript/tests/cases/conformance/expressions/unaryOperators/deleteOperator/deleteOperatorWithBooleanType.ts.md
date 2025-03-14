__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    36,
    779
  ],
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
            "name": "BOOLEAN",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 20,
                  "line": 2
                },
                "start": {
                  "column": 11,
                  "line": 2
                }
              },
              "range": [
                47,
                56
              ],
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "range": [
                  49,
                  56
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 2
                  },
                  "start": {
                    "column": 13,
                    "line": 2
                  }
                }
              }
            },
            "range": [
              40,
              56
            ],
            "loc": {
              "end": {
                "column": 20,
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
            40,
            56
          ],
          "loc": {
            "end": {
              "column": 20,
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
        36,
        57
      ],
      "loc": {
        "end": {
          "column": 21,
          "line": 2
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
              "type": "Literal",
              "raw": "true",
              "value": true,
              "range": [
                92,
                96
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 4
                },
                "start": {
                  "column": 33,
                  "line": 4
                }
              }
            },
            "range": [
              85,
              97
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 4
              },
              "start": {
                "column": 26,
                "line": 4
              }
            }
          }
        ],
        "range": [
          83,
          99
        ],
        "loc": {
          "end": {
            "column": 40,
            "line": 4
          },
          "start": {
            "column": 24,
            "line": 4
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
          68,
          71
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 4
          },
          "start": {
            "column": 9,
            "line": 4
          }
        }
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 23,
            "line": 4
          },
          "start": {
            "column": 14,
            "line": 4
          }
        },
        "range": [
          73,
          82
        ],
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "range": [
            75,
            82
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 4
            },
            "start": {
              "column": 16,
              "line": 4
            }
          }
        }
      },
      "range": [
        59,
        99
      ],
      "loc": {
        "end": {
          "column": 40,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 4
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          109,
          170
        ],
        "body": [
          {
            "type": "PropertyDefinition",
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "range": [
                122,
                123
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 7
                },
                "start": {
                  "column": 11,
                  "line": 7
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
                  "line": 7
                },
                "start": {
                  "column": 12,
                  "line": 7
                }
              },
              "range": [
                123,
                132
              ],
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "range": [
                  125,
                  132
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 7
                  },
                  "start": {
                    "column": 14,
                    "line": 7
                  }
                }
              }
            },
            "value": null,
            "range": [
              115,
              133
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 7
              },
              "start": {
                "column": 4,
                "line": 7
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
              "name": "foo",
              "optional": false,
              "range": [
                145,
                148
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 8
                },
                "start": {
                  "column": 11,
                  "line": 8
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
                148,
                168
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "raw": "false",
                      "value": false,
                      "range": [
                        160,
                        165
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 8
                        },
                        "start": {
                          "column": 26,
                          "line": 8
                        }
                      }
                    },
                    "range": [
                      153,
                      166
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 8
                      },
                      "start": {
                        "column": 19,
                        "line": 8
                      }
                    }
                  }
                ],
                "range": [
                  151,
                  168
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 8
                  },
                  "start": {
                    "column": 17,
                    "line": 8
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
                  "column": 34,
                  "line": 8
                },
                "start": {
                  "column": 14,
                  "line": 8
                }
              }
            },
            "range": [
              138,
              168
            ],
            "loc": {
              "end": {
                "column": 34,
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
            "column": 8,
            "line": 6
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
          107,
          108
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 6
          },
          "start": {
            "column": 6,
            "line": 6
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        101,
        170
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
      "type": "TSModuleDeclaration",
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "range": [
              186,
              208
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
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 11
                        },
                        "start": {
                          "column": 16,
                          "line": 11
                        }
                      },
                      "range": [
                        198,
                        207
                      ],
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "range": [
                          200,
                          207
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 11
                          },
                          "start": {
                            "column": 18,
                            "line": 11
                          }
                        }
                      }
                    },
                    "range": [
                      197,
                      207
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 11
                      },
                      "start": {
                        "column": 15,
                        "line": 11
                      }
                    }
                  },
                  "init": null,
                  "range": [
                    197,
                    207
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 11
                    },
                    "start": {
                      "column": 15,
                      "line": 11
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "var",
              "range": [
                193,
                208
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 11
                },
                "start": {
                  "column": 11,
                  "line": 11
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 26,
                "line": 11
              },
              "start": {
                "column": 4,
                "line": 11
              }
            }
          }
        ],
        "range": [
          180,
          210
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 12
          },
          "start": {
            "column": 9,
            "line": 10
          }
        }
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          178,
          179
        ],
        "decorators": [],
        "name": "M",
        "optional": false,
        "loc": {
          "end": {
            "column": 8,
            "line": 10
          },
          "start": {
            "column": 7,
            "line": 10
          }
        }
      },
      "kind": "module",
      "range": [
        171,
        210
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
            "name": "objA",
            "optional": false,
            "range": [
              216,
              220
            ],
            "loc": {
              "end": {
                "column": 8,
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
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "range": [
                227,
                228
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 14
                },
                "start": {
                  "column": 15,
                  "line": 14
                }
              }
            },
            "range": [
              223,
              230
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 14
              },
              "start": {
                "column": 11,
                "line": 14
              }
            }
          },
          "range": [
            216,
            230
          ],
          "loc": {
            "end": {
              "column": 18,
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
        212,
        231
      ],
      "loc": {
        "end": {
          "column": 19,
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
            "name": "ResultIsBoolean1",
            "optional": false,
            "range": [
              257,
              273
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 17
              },
              "start": {
                "column": 4,
                "line": 17
              }
            }
          },
          "init": {
            "type": "UnaryExpression",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "BOOLEAN",
              "optional": false,
              "range": [
                283,
                290
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 17
                },
                "start": {
                  "column": 30,
                  "line": 17
                }
              }
            },
            "operator": "delete",
            "prefix": true,
            "range": [
              276,
              290
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 17
              },
              "start": {
                "column": 23,
                "line": 17
              }
            }
          },
          "range": [
            257,
            290
          ],
          "loc": {
            "end": {
              "column": 37,
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
        253,
        291
      ],
      "loc": {
        "end": {
          "column": 38,
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
            "name": "ResultIsBoolean2",
            "optional": false,
            "range": [
              321,
              337
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 20
              },
              "start": {
                "column": 4,
                "line": 20
              }
            }
          },
          "init": {
            "type": "UnaryExpression",
            "argument": {
              "type": "Literal",
              "raw": "true",
              "value": true,
              "range": [
                347,
                351
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 20
                },
                "start": {
                  "column": 30,
                  "line": 20
                }
              }
            },
            "operator": "delete",
            "prefix": true,
            "range": [
              340,
              351
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 20
              },
              "start": {
                "column": 23,
                "line": 20
              }
            }
          },
          "range": [
            321,
            351
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 20
            },
            "start": {
              "column": 4,
              "line": 20
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        317,
        352
      ],
      "loc": {
        "end": {
          "column": 35,
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
            "name": "ResultIsBoolean3",
            "optional": false,
            "range": [
              357,
              373
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 21
              },
              "start": {
                "column": 4,
                "line": 21
              }
            }
          },
          "init": {
            "type": "UnaryExpression",
            "argument": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      385,
                      386
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 21
                      },
                      "start": {
                        "column": 32,
                        "line": 21
                      }
                    }
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "raw": "true",
                    "value": true,
                    "range": [
                      388,
                      392
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 21
                      },
                      "start": {
                        "column": 35,
                        "line": 21
                      }
                    }
                  },
                  "range": [
                    385,
                    392
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 21
                    },
                    "start": {
                      "column": 32,
                      "line": 21
                    }
                  }
                },
                {
                  "type": "Property",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "range": [
                      394,
                      395
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 21
                      },
                      "start": {
                        "column": 41,
                        "line": 21
                      }
                    }
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "raw": "false",
                    "value": false,
                    "range": [
                      397,
                      402
                    ],
                    "loc": {
                      "end": {
                        "column": 49,
                        "line": 21
                      },
                      "start": {
                        "column": 44,
                        "line": 21
                      }
                    }
                  },
                  "range": [
                    394,
                    402
                  ],
                  "loc": {
                    "end": {
                      "column": 49,
                      "line": 21
                    },
                    "start": {
                      "column": 41,
                      "line": 21
                    }
                  }
                }
              ],
              "range": [
                383,
                404
              ],
              "loc": {
                "end": {
                  "column": 51,
                  "line": 21
                },
                "start": {
                  "column": 30,
                  "line": 21
                }
              }
            },
            "operator": "delete",
            "prefix": true,
            "range": [
              376,
              404
            ],
            "loc": {
              "end": {
                "column": 51,
                "line": 21
              },
              "start": {
                "column": 23,
                "line": 21
              }
            }
          },
          "range": [
            357,
            404
          ],
          "loc": {
            "end": {
              "column": 51,
              "line": 21
            },
            "start": {
              "column": 4,
              "line": 21
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        353,
        405
      ],
      "loc": {
        "end": {
          "column": 52,
          "line": 21
        },
        "start": {
          "column": 0,
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
            "name": "ResultIsBoolean4",
            "optional": false,
            "range": [
              439,
              455
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 24
              },
              "start": {
                "column": 4,
                "line": 24
              }
            }
          },
          "init": {
            "type": "UnaryExpression",
            "argument": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "objA",
                "optional": false,
                "range": [
                  465,
                  469
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 24
                  },
                  "start": {
                    "column": 30,
                    "line": 24
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "range": [
                  470,
                  471
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 24
                  },
                  "start": {
                    "column": 35,
                    "line": 24
                  }
                }
              },
              "range": [
                465,
                471
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 24
                },
                "start": {
                  "column": 30,
                  "line": 24
                }
              }
            },
            "operator": "delete",
            "prefix": true,
            "range": [
              458,
              471
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 24
              },
              "start": {
                "column": 23,
                "line": 24
              }
            }
          },
          "range": [
            439,
            471
          ],
          "loc": {
            "end": {
              "column": 36,
              "line": 24
            },
            "start": {
              "column": 4,
              "line": 24
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        435,
        472
      ],
      "loc": {
        "end": {
          "column": 37,
          "line": 24
        },
        "start": {
          "column": 0,
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
            "name": "ResultIsBoolean5",
            "optional": false,
            "range": [
              477,
              493
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 25
              },
              "start": {
                "column": 4,
                "line": 25
              }
            }
          },
          "init": {
            "type": "UnaryExpression",
            "argument": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "M",
                "optional": false,
                "range": [
                  503,
                  504
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 25
                  },
                  "start": {
                    "column": 30,
                    "line": 25
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "range": [
                  505,
                  506
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 25
                  },
                  "start": {
                    "column": 32,
                    "line": 25
                  }
                }
              },
              "range": [
                503,
                506
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 25
                },
                "start": {
                  "column": 30,
                  "line": 25
                }
              }
            },
            "operator": "delete",
            "prefix": true,
            "range": [
              496,
              506
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 25
              },
              "start": {
                "column": 23,
                "line": 25
              }
            }
          },
          "range": [
            477,
            506
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 25
            },
            "start": {
              "column": 4,
              "line": 25
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        473,
        507
      ],
      "loc": {
        "end": {
          "column": 34,
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
            "name": "ResultIsBoolean6",
            "optional": false,
            "range": [
              512,
              528
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 26
              },
              "start": {
                "column": 4,
                "line": 26
              }
            }
          },
          "init": {
            "type": "UnaryExpression",
            "argument": {
              "type": "CallExpression",
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "range": [
                  538,
                  541
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 26
                  },
                  "start": {
                    "column": 30,
                    "line": 26
                  }
                }
              },
              "optional": false,
              "range": [
                538,
                543
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
            "operator": "delete",
            "prefix": true,
            "range": [
              531,
              543
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 26
              },
              "start": {
                "column": 23,
                "line": 26
              }
            }
          },
          "range": [
            512,
            543
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
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        508,
        544
      ],
      "loc": {
        "end": {
          "column": 36,
          "line": 26
        },
        "start": {
          "column": 0,
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
            "name": "ResultIsBoolean7",
            "optional": false,
            "range": [
              549,
              565
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 27
              },
              "start": {
                "column": 4,
                "line": 27
              }
            }
          },
          "init": {
            "type": "UnaryExpression",
            "argument": {
              "type": "CallExpression",
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "range": [
                    575,
                    576
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 27
                    },
                    "start": {
                      "column": 30,
                      "line": 27
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
                    577,
                    580
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 27
                    },
                    "start": {
                      "column": 32,
                      "line": 27
                    }
                  }
                },
                "range": [
                  575,
                  580
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 27
                  },
                  "start": {
                    "column": 30,
                    "line": 27
                  }
                }
              },
              "optional": false,
              "range": [
                575,
                582
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 27
                },
                "start": {
                  "column": 30,
                  "line": 27
                }
              }
            },
            "operator": "delete",
            "prefix": true,
            "range": [
              568,
              582
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 27
              },
              "start": {
                "column": 23,
                "line": 27
              }
            }
          },
          "range": [
            549,
            582
          ],
          "loc": {
            "end": {
              "column": 37,
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
        545,
        583
      ],
      "loc": {
        "end": {
          "column": 38,
          "line": 27
        },
        "start": {
          "column": 0,
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
            "name": "ResultIsBoolean8",
            "optional": false,
            "range": [
              618,
              634
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 30
              },
              "start": {
                "column": 4,
                "line": 30
              }
            }
          },
          "init": {
            "type": "UnaryExpression",
            "argument": {
              "type": "UnaryExpression",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "BOOLEAN",
                "optional": false,
                "range": [
                  651,
                  658
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 30
                  },
                  "start": {
                    "column": 37,
                    "line": 30
                  }
                }
              },
              "operator": "delete",
              "prefix": true,
              "range": [
                644,
                658
              ],
              "loc": {
                "end": {
                  "column": 44,
                  "line": 30
                },
                "start": {
                  "column": 30,
                  "line": 30
                }
              }
            },
            "operator": "delete",
            "prefix": true,
            "range": [
              637,
              658
            ],
            "loc": {
              "end": {
                "column": 44,
                "line": 30
              },
              "start": {
                "column": 23,
                "line": 30
              }
            }
          },
          "range": [
            618,
            658
          ],
          "loc": {
            "end": {
              "column": 44,
              "line": 30
            },
            "start": {
              "column": 4,
              "line": 30
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        614,
        659
      ],
      "loc": {
        "end": {
          "column": 45,
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
        "type": "UnaryExpression",
        "argument": {
          "type": "Literal",
          "raw": "true",
          "value": true,
          "range": [
            697,
            701
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 33
            },
            "start": {
              "column": 7,
              "line": 33
            }
          }
        },
        "operator": "delete",
        "prefix": true,
        "range": [
          690,
          701
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 33
          },
          "start": {
            "column": 0,
            "line": 33
          }
        }
      },
      "range": [
        690,
        702
      ],
      "loc": {
        "end": {
          "column": 12,
          "line": 33
        },
        "start": {
          "column": 0,
          "line": 33
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "BOOLEAN",
          "optional": false,
          "range": [
            710,
            717
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 34
            },
            "start": {
              "column": 7,
              "line": 34
            }
          }
        },
        "operator": "delete",
        "prefix": true,
        "range": [
          703,
          717
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 34
          },
          "start": {
            "column": 0,
            "line": 34
          }
        }
      },
      "range": [
        703,
        718
      ],
      "loc": {
        "end": {
          "column": 15,
          "line": 34
        },
        "start": {
          "column": 0,
          "line": 34
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "argument": {
          "type": "CallExpression",
          "arguments": [],
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "range": [
              726,
              729
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 35
              },
              "start": {
                "column": 7,
                "line": 35
              }
            }
          },
          "optional": false,
          "range": [
            726,
            731
          ],
          "loc": {
            "end": {
              "column": 12,
              "line": 35
            },
            "start": {
              "column": 7,
              "line": 35
            }
          }
        },
        "operator": "delete",
        "prefix": true,
        "range": [
          719,
          731
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 35
          },
          "start": {
            "column": 0,
            "line": 35
          }
        }
      },
      "range": [
        719,
        732
      ],
      "loc": {
        "end": {
          "column": 13,
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
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "UnaryExpression",
            "argument": {
              "type": "Literal",
              "raw": "true",
              "value": true,
              "range": [
                740,
                744
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 36
                },
                "start": {
                  "column": 7,
                  "line": 36
                }
              }
            },
            "operator": "delete",
            "prefix": true,
            "range": [
              733,
              744
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 36
              },
              "start": {
                "column": 0,
                "line": 36
              }
            }
          },
          {
            "type": "Literal",
            "raw": "false",
            "value": false,
            "range": [
              746,
              751
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 36
              },
              "start": {
                "column": 13,
                "line": 36
              }
            }
          }
        ],
        "range": [
          733,
          751
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 36
          },
          "start": {
            "column": 0,
            "line": 36
          }
        }
      },
      "range": [
        733,
        752
      ],
      "loc": {
        "end": {
          "column": 19,
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
        "type": "UnaryExpression",
        "argument": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "objA",
            "optional": false,
            "range": [
              760,
              764
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 37
              },
              "start": {
                "column": 7,
                "line": 37
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "range": [
              765,
              766
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 37
              },
              "start": {
                "column": 12,
                "line": 37
              }
            }
          },
          "range": [
            760,
            766
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 37
            },
            "start": {
              "column": 7,
              "line": 37
            }
          }
        },
        "operator": "delete",
        "prefix": true,
        "range": [
          753,
          766
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 37
          },
          "start": {
            "column": 0,
            "line": 37
          }
        }
      },
      "range": [
        753,
        767
      ],
      "loc": {
        "end": {
          "column": 14,
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
        "type": "UnaryExpression",
        "argument": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "M",
            "optional": false,
            "range": [
              775,
              776
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 38
              },
              "start": {
                "column": 7,
                "line": 38
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "n",
            "optional": false,
            "range": [
              777,
              778
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 38
              },
              "start": {
                "column": 9,
                "line": 38
              }
            }
          },
          "range": [
            775,
            778
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 38
            },
            "start": {
              "column": 7,
              "line": 38
            }
          }
        },
        "operator": "delete",
        "prefix": true,
        "range": [
          768,
          778
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 38
          },
          "start": {
            "column": 0,
            "line": 38
          }
        }
      },
      "range": [
        768,
        779
      ],
      "loc": {
        "end": {
          "column": 11,
          "line": 38
        },
        "start": {
          "column": 0,
          "line": 38
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 11,
      "line": 38
    },
    "start": {
      "column": 0,
      "line": 2
    }
  },
  "hashbang": null
}
```
