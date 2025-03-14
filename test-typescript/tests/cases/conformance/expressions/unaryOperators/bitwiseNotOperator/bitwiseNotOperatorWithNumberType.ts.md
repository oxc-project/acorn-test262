__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    29,
    898
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
            "name": "NUMBER",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 18,
                  "line": 2
                },
                "start": {
                  "column": 10,
                  "line": 2
                }
              },
              "range": [
                39,
                47
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  41,
                  47
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 2
                  },
                  "start": {
                    "column": 12,
                    "line": 2
                  }
                }
              }
            },
            "range": [
              33,
              47
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
            33,
            47
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
        29,
        48
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
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "definite": false,
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "NUMBER1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 21,
                  "line": 3
                },
                "start": {
                  "column": 11,
                  "line": 3
                }
              },
              "range": [
                60,
                70
              ],
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSNumberKeyword",
                  "range": [
                    62,
                    68
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 3
                    },
                    "start": {
                      "column": 13,
                      "line": 3
                    }
                  }
                },
                "range": [
                  62,
                  70
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 3
                  },
                  "start": {
                    "column": 13,
                    "line": 3
                  }
                }
              }
            },
            "range": [
              53,
              70
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 3
              },
              "start": {
                "column": 4,
                "line": 3
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  74,
                  75
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 3
                  },
                  "start": {
                    "column": 25,
                    "line": 3
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "2",
                "value": 2,
                "range": [
                  77,
                  78
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 3
                  },
                  "start": {
                    "column": 28,
                    "line": 3
                  }
                }
              }
            ],
            "range": [
              73,
              79
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 3
              },
              "start": {
                "column": 24,
                "line": 3
              }
            }
          },
          "range": [
            53,
            79
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
      "declare": false,
      "kind": "var",
      "range": [
        49,
        80
      ],
      "loc": {
        "end": {
          "column": 31,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 3
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
              "raw": "1",
              "value": 1,
              "range": [
                114,
                115
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 5
                },
                "start": {
                  "column": 32,
                  "line": 5
                }
              }
            },
            "range": [
              107,
              116
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 5
              },
              "start": {
                "column": 25,
                "line": 5
              }
            }
          }
        ],
        "range": [
          105,
          118
        ],
        "loc": {
          "end": {
            "column": 36,
            "line": 5
          },
          "start": {
            "column": 23,
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
        "name": "foo",
        "optional": false,
        "range": [
          91,
          94
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 5
          },
          "start": {
            "column": 9,
            "line": 5
          }
        }
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 22,
            "line": 5
          },
          "start": {
            "column": 14,
            "line": 5
          }
        },
        "range": [
          96,
          104
        ],
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "range": [
            98,
            104
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 5
            },
            "start": {
              "column": 16,
              "line": 5
            }
          }
        }
      },
      "range": [
        82,
        118
      ],
      "loc": {
        "end": {
          "column": 36,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 5
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          128,
          184
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
                141,
                142
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
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 20,
                  "line": 8
                },
                "start": {
                  "column": 12,
                  "line": 8
                }
              },
              "range": [
                142,
                150
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  144,
                  150
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 8
                  },
                  "start": {
                    "column": 14,
                    "line": 8
                  }
                }
              }
            },
            "value": null,
            "range": [
              134,
              151
            ],
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
                163,
                166
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 9
                },
                "start": {
                  "column": 11,
                  "line": 9
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
                166,
                182
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        178,
                        179
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 9
                        },
                        "start": {
                          "column": 26,
                          "line": 9
                        }
                      }
                    },
                    "range": [
                      171,
                      180
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 9
                      },
                      "start": {
                        "column": 19,
                        "line": 9
                      }
                    }
                  }
                ],
                "range": [
                  169,
                  182
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 9
                  },
                  "start": {
                    "column": 17,
                    "line": 9
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
                  "column": 30,
                  "line": 9
                },
                "start": {
                  "column": 14,
                  "line": 9
                }
              }
            },
            "range": [
              156,
              182
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 9
              },
              "start": {
                "column": 4,
                "line": 9
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 10
          },
          "start": {
            "column": 8,
            "line": 7
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
          126,
          127
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 7
          },
          "start": {
            "column": 6,
            "line": 7
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        120,
        184
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 10
        },
        "start": {
          "column": 0,
          "line": 7
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
              200,
              221
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
                          "column": 24,
                          "line": 12
                        },
                        "start": {
                          "column": 16,
                          "line": 12
                        }
                      },
                      "range": [
                        212,
                        220
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          214,
                          220
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 12
                          },
                          "start": {
                            "column": 18,
                            "line": 12
                          }
                        }
                      }
                    },
                    "range": [
                      211,
                      220
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 12
                      },
                      "start": {
                        "column": 15,
                        "line": 12
                      }
                    }
                  },
                  "init": null,
                  "range": [
                    211,
                    220
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 12
                    },
                    "start": {
                      "column": 15,
                      "line": 12
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "var",
              "range": [
                207,
                221
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 12
                },
                "start": {
                  "column": 11,
                  "line": 12
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 25,
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
          194,
          223
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 13
          },
          "start": {
            "column": 9,
            "line": 11
          }
        }
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          192,
          193
        ],
        "decorators": [],
        "name": "M",
        "optional": false,
        "loc": {
          "end": {
            "column": 8,
            "line": 11
          },
          "start": {
            "column": 7,
            "line": 11
          }
        }
      },
      "kind": "module",
      "range": [
        185,
        223
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
              229,
              233
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 15
              },
              "start": {
                "column": 4,
                "line": 15
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
                240,
                241
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 15
                },
                "start": {
                  "column": 15,
                  "line": 15
                }
              }
            },
            "range": [
              236,
              243
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 15
              },
              "start": {
                "column": 11,
                "line": 15
              }
            }
          },
          "range": [
            229,
            243
          ],
          "loc": {
            "end": {
              "column": 18,
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
        225,
        244
      ],
      "loc": {
        "end": {
          "column": 19,
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
            "name": "ResultIsNumber1",
            "optional": false,
            "range": [
              269,
              284
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 18
              },
              "start": {
                "column": 4,
                "line": 18
              }
            }
          },
          "init": {
            "type": "UnaryExpression",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "NUMBER",
              "optional": false,
              "range": [
                288,
                294
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 18
                },
                "start": {
                  "column": 23,
                  "line": 18
                }
              }
            },
            "operator": "~",
            "prefix": true,
            "range": [
              287,
              294
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 18
              },
              "start": {
                "column": 22,
                "line": 18
              }
            }
          },
          "range": [
            269,
            294
          ],
          "loc": {
            "end": {
              "column": 29,
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
        265,
        295
      ],
      "loc": {
        "end": {
          "column": 30,
          "line": 18
        },
        "start": {
          "column": 0,
          "line": 18
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
            "name": "ResultIsNumber2",
            "optional": false,
            "range": [
              300,
              315
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 19
              },
              "start": {
                "column": 4,
                "line": 19
              }
            }
          },
          "init": {
            "type": "UnaryExpression",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "NUMBER1",
              "optional": false,
              "range": [
                319,
                326
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 19
                },
                "start": {
                  "column": 23,
                  "line": 19
                }
              }
            },
            "operator": "~",
            "prefix": true,
            "range": [
              318,
              326
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 19
              },
              "start": {
                "column": 22,
                "line": 19
              }
            }
          },
          "range": [
            300,
            326
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 19
            },
            "start": {
              "column": 4,
              "line": 19
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        296,
        327
      ],
      "loc": {
        "end": {
          "column": 31,
          "line": 19
        },
        "start": {
          "column": 0,
          "line": 19
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
            "name": "ResultIsNumber3",
            "optional": false,
            "range": [
              356,
              371
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 22
              },
              "start": {
                "column": 4,
                "line": 22
              }
            }
          },
          "init": {
            "type": "UnaryExpression",
            "argument": {
              "type": "Literal",
              "raw": "1",
              "value": 1,
              "range": [
                375,
                376
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 22
                },
                "start": {
                  "column": 23,
                  "line": 22
                }
              }
            },
            "operator": "~",
            "prefix": true,
            "range": [
              374,
              376
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 22
              },
              "start": {
                "column": 22,
                "line": 22
              }
            }
          },
          "range": [
            356,
            376
          ],
          "loc": {
            "end": {
              "column": 24,
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
        352,
        377
      ],
      "loc": {
        "end": {
          "column": 25,
          "line": 22
        },
        "start": {
          "column": 0,
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
            "name": "ResultIsNumber4",
            "optional": false,
            "range": [
              382,
              397
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 23
              },
              "start": {
                "column": 4,
                "line": 23
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
                      403,
                      404
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 23
                      },
                      "start": {
                        "column": 25,
                        "line": 23
                      }
                    }
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "raw": "1",
                    "value": 1,
                    "range": [
                      406,
                      407
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 23
                      },
                      "start": {
                        "column": 28,
                        "line": 23
                      }
                    }
                  },
                  "range": [
                    403,
                    407
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 23
                    },
                    "start": {
                      "column": 25,
                      "line": 23
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
                      409,
                      410
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 23
                      },
                      "start": {
                        "column": 31,
                        "line": 23
                      }
                    }
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "raw": "2",
                    "value": 2,
                    "range": [
                      412,
                      413
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 23
                      },
                      "start": {
                        "column": 34,
                        "line": 23
                      }
                    }
                  },
                  "range": [
                    409,
                    413
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 23
                    },
                    "start": {
                      "column": 31,
                      "line": 23
                    }
                  }
                }
              ],
              "range": [
                401,
                414
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 23
                },
                "start": {
                  "column": 23,
                  "line": 23
                }
              }
            },
            "operator": "~",
            "prefix": true,
            "range": [
              400,
              414
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 23
              },
              "start": {
                "column": 22,
                "line": 23
              }
            }
          },
          "range": [
            382,
            414
          ],
          "loc": {
            "end": {
              "column": 36,
              "line": 23
            },
            "start": {
              "column": 4,
              "line": 23
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        378,
        415
      ],
      "loc": {
        "end": {
          "column": 37,
          "line": 23
        },
        "start": {
          "column": 0,
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
            "name": "ResultIsNumber5",
            "optional": false,
            "range": [
              420,
              435
            ],
            "loc": {
              "end": {
                "column": 19,
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
                      441,
                      442
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 24
                      },
                      "start": {
                        "column": 25,
                        "line": 24
                      }
                    }
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "raw": "1",
                    "value": 1,
                    "range": [
                      444,
                      445
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 24
                      },
                      "start": {
                        "column": 28,
                        "line": 24
                      }
                    }
                  },
                  "range": [
                    441,
                    445
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 24
                    },
                    "start": {
                      "column": 25,
                      "line": 24
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
                      447,
                      448
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 24
                      },
                      "start": {
                        "column": 31,
                        "line": 24
                      }
                    }
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "n",
                            "optional": false,
                            "range": [
                              474,
                              475
                            ],
                            "loc": {
                              "end": {
                                "column": 59,
                                "line": 24
                              },
                              "start": {
                                "column": 58,
                                "line": 24
                              }
                            }
                          },
                          "range": [
                            467,
                            476
                          ],
                          "loc": {
                            "end": {
                              "column": 60,
                              "line": 24
                            },
                            "start": {
                              "column": 51,
                              "line": 24
                            }
                          }
                        }
                      ],
                      "range": [
                        465,
                        478
                      ],
                      "loc": {
                        "end": {
                          "column": 62,
                          "line": 24
                        },
                        "start": {
                          "column": 49,
                          "line": 24
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
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 44,
                              "line": 24
                            },
                            "start": {
                              "column": 36,
                              "line": 24
                            }
                          },
                          "range": [
                            452,
                            460
                          ],
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "range": [
                              454,
                              460
                            ],
                            "loc": {
                              "end": {
                                "column": 44,
                                "line": 24
                              },
                              "start": {
                                "column": 38,
                                "line": 24
                              }
                            }
                          }
                        },
                        "range": [
                          451,
                          460
                        ],
                        "loc": {
                          "end": {
                            "column": 44,
                            "line": 24
                          },
                          "start": {
                            "column": 35,
                            "line": 24
                          }
                        }
                      }
                    ],
                    "range": [
                      450,
                      478
                    ],
                    "loc": {
                      "end": {
                        "column": 62,
                        "line": 24
                      },
                      "start": {
                        "column": 34,
                        "line": 24
                      }
                    }
                  },
                  "range": [
                    447,
                    478
                  ],
                  "loc": {
                    "end": {
                      "column": 62,
                      "line": 24
                    },
                    "start": {
                      "column": 31,
                      "line": 24
                    }
                  }
                }
              ],
              "range": [
                439,
                480
              ],
              "loc": {
                "end": {
                  "column": 64,
                  "line": 24
                },
                "start": {
                  "column": 23,
                  "line": 24
                }
              }
            },
            "operator": "~",
            "prefix": true,
            "range": [
              438,
              480
            ],
            "loc": {
              "end": {
                "column": 64,
                "line": 24
              },
              "start": {
                "column": 22,
                "line": 24
              }
            }
          },
          "range": [
            420,
            480
          ],
          "loc": {
            "end": {
              "column": 64,
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
        416,
        481
      ],
      "loc": {
        "end": {
          "column": 65,
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
            "name": "ResultIsNumber6",
            "optional": false,
            "range": [
              514,
              529
            ],
            "loc": {
              "end": {
                "column": 19,
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
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "objA",
                "optional": false,
                "range": [
                  533,
                  537
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 27
                  },
                  "start": {
                    "column": 23,
                    "line": 27
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
                  538,
                  539
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 27
                  },
                  "start": {
                    "column": 28,
                    "line": 27
                  }
                }
              },
              "range": [
                533,
                539
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 27
                },
                "start": {
                  "column": 23,
                  "line": 27
                }
              }
            },
            "operator": "~",
            "prefix": true,
            "range": [
              532,
              539
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 27
              },
              "start": {
                "column": 22,
                "line": 27
              }
            }
          },
          "range": [
            514,
            539
          ],
          "loc": {
            "end": {
              "column": 29,
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
        510,
        540
      ],
      "loc": {
        "end": {
          "column": 30,
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
            "name": "ResultIsNumber7",
            "optional": false,
            "range": [
              545,
              560
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 28
              },
              "start": {
                "column": 4,
                "line": 28
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
                  564,
                  565
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 28
                  },
                  "start": {
                    "column": 23,
                    "line": 28
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
                  566,
                  567
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 28
                  },
                  "start": {
                    "column": 25,
                    "line": 28
                  }
                }
              },
              "range": [
                564,
                567
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 28
                },
                "start": {
                  "column": 23,
                  "line": 28
                }
              }
            },
            "operator": "~",
            "prefix": true,
            "range": [
              563,
              567
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 28
              },
              "start": {
                "column": 22,
                "line": 28
              }
            }
          },
          "range": [
            545,
            567
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 28
            },
            "start": {
              "column": 4,
              "line": 28
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        541,
        568
      ],
      "loc": {
        "end": {
          "column": 27,
          "line": 28
        },
        "start": {
          "column": 0,
          "line": 28
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
            "name": "ResultIsNumber8",
            "optional": false,
            "range": [
              573,
              588
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 29
              },
              "start": {
                "column": 4,
                "line": 29
              }
            }
          },
          "init": {
            "type": "UnaryExpression",
            "argument": {
              "type": "MemberExpression",
              "computed": true,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "NUMBER1",
                "optional": false,
                "range": [
                  592,
                  599
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 29
                  },
                  "start": {
                    "column": 23,
                    "line": 29
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Literal",
                "raw": "0",
                "value": 0,
                "range": [
                  600,
                  601
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 29
                  },
                  "start": {
                    "column": 31,
                    "line": 29
                  }
                }
              },
              "range": [
                592,
                602
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 29
                },
                "start": {
                  "column": 23,
                  "line": 29
                }
              }
            },
            "operator": "~",
            "prefix": true,
            "range": [
              591,
              602
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 29
              },
              "start": {
                "column": 22,
                "line": 29
              }
            }
          },
          "range": [
            573,
            602
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 29
            },
            "start": {
              "column": 4,
              "line": 29
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        569,
        603
      ],
      "loc": {
        "end": {
          "column": 34,
          "line": 29
        },
        "start": {
          "column": 0,
          "line": 29
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
            "name": "ResultIsNumber9",
            "optional": false,
            "range": [
              608,
              623
            ],
            "loc": {
              "end": {
                "column": 19,
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
              "type": "CallExpression",
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "range": [
                  627,
                  630
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 30
                  },
                  "start": {
                    "column": 23,
                    "line": 30
                  }
                }
              },
              "optional": false,
              "range": [
                627,
                632
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 30
                },
                "start": {
                  "column": 23,
                  "line": 30
                }
              }
            },
            "operator": "~",
            "prefix": true,
            "range": [
              626,
              632
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 30
              },
              "start": {
                "column": 22,
                "line": 30
              }
            }
          },
          "range": [
            608,
            632
          ],
          "loc": {
            "end": {
              "column": 28,
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
        604,
        633
      ],
      "loc": {
        "end": {
          "column": 29,
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
            "name": "ResultIsNumber10",
            "optional": false,
            "range": [
              638,
              654
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 31
              },
              "start": {
                "column": 4,
                "line": 31
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
                    658,
                    659
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 31
                    },
                    "start": {
                      "column": 24,
                      "line": 31
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
                    660,
                    663
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 31
                    },
                    "start": {
                      "column": 26,
                      "line": 31
                    }
                  }
                },
                "range": [
                  658,
                  663
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 31
                  },
                  "start": {
                    "column": 24,
                    "line": 31
                  }
                }
              },
              "optional": false,
              "range": [
                658,
                665
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 31
                },
                "start": {
                  "column": 24,
                  "line": 31
                }
              }
            },
            "operator": "~",
            "prefix": true,
            "range": [
              657,
              665
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 31
              },
              "start": {
                "column": 23,
                "line": 31
              }
            }
          },
          "range": [
            638,
            665
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 31
            },
            "start": {
              "column": 4,
              "line": 31
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        634,
        666
      ],
      "loc": {
        "end": {
          "column": 32,
          "line": 31
        },
        "start": {
          "column": 0,
          "line": 31
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
            "name": "ResultIsNumber11",
            "optional": false,
            "range": [
              671,
              687
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 32
              },
              "start": {
                "column": 4,
                "line": 32
              }
            }
          },
          "init": {
            "type": "UnaryExpression",
            "argument": {
              "type": "BinaryExpression",
              "operator": "+",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "NUMBER",
                "optional": false,
                "range": [
                  692,
                  698
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 32
                  },
                  "start": {
                    "column": 25,
                    "line": 32
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "NUMBER",
                "optional": false,
                "range": [
                  701,
                  707
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 32
                  },
                  "start": {
                    "column": 34,
                    "line": 32
                  }
                }
              },
              "range": [
                692,
                707
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 32
                },
                "start": {
                  "column": 25,
                  "line": 32
                }
              }
            },
            "operator": "~",
            "prefix": true,
            "range": [
              690,
              708
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 32
              },
              "start": {
                "column": 23,
                "line": 32
              }
            }
          },
          "range": [
            671,
            708
          ],
          "loc": {
            "end": {
              "column": 41,
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
        667,
        709
      ],
      "loc": {
        "end": {
          "column": 42,
          "line": 32
        },
        "start": {
          "column": 0,
          "line": 32
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
            "name": "ResultIsNumber12",
            "optional": false,
            "range": [
              739,
              755
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 35
              },
              "start": {
                "column": 4,
                "line": 35
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
                "name": "NUMBER",
                "optional": false,
                "range": [
                  760,
                  766
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 35
                  },
                  "start": {
                    "column": 25,
                    "line": 35
                  }
                }
              },
              "operator": "~",
              "prefix": true,
              "range": [
                759,
                766
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 35
                },
                "start": {
                  "column": 24,
                  "line": 35
                }
              }
            },
            "operator": "~",
            "prefix": true,
            "range": [
              758,
              766
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 35
              },
              "start": {
                "column": 23,
                "line": 35
              }
            }
          },
          "range": [
            739,
            766
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 35
            },
            "start": {
              "column": 4,
              "line": 35
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        735,
        767
      ],
      "loc": {
        "end": {
          "column": 32,
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
            "name": "ResultIsNumber13",
            "optional": false,
            "range": [
              772,
              788
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 36
              },
              "start": {
                "column": 4,
                "line": 36
              }
            }
          },
          "init": {
            "type": "UnaryExpression",
            "argument": {
              "type": "UnaryExpression",
              "argument": {
                "type": "UnaryExpression",
                "argument": {
                  "type": "BinaryExpression",
                  "operator": "+",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "NUMBER",
                    "optional": false,
                    "range": [
                      795,
                      801
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 36
                      },
                      "start": {
                        "column": 27,
                        "line": 36
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "NUMBER",
                    "optional": false,
                    "range": [
                      804,
                      810
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 36
                      },
                      "start": {
                        "column": 36,
                        "line": 36
                      }
                    }
                  },
                  "range": [
                    795,
                    810
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 36
                    },
                    "start": {
                      "column": 27,
                      "line": 36
                    }
                  }
                },
                "operator": "~",
                "prefix": true,
                "range": [
                  793,
                  811
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 36
                  },
                  "start": {
                    "column": 25,
                    "line": 36
                  }
                }
              },
              "operator": "~",
              "prefix": true,
              "range": [
                792,
                811
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 36
                },
                "start": {
                  "column": 24,
                  "line": 36
                }
              }
            },
            "operator": "~",
            "prefix": true,
            "range": [
              791,
              811
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 36
              },
              "start": {
                "column": 23,
                "line": 36
              }
            }
          },
          "range": [
            772,
            811
          ],
          "loc": {
            "end": {
              "column": 43,
              "line": 36
            },
            "start": {
              "column": 4,
              "line": 36
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        768,
        812
      ],
      "loc": {
        "end": {
          "column": 44,
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
          "type": "Identifier",
          "decorators": [],
          "name": "NUMBER",
          "optional": false,
          "range": [
            844,
            850
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 39
            },
            "start": {
              "column": 1,
              "line": 39
            }
          }
        },
        "operator": "~",
        "prefix": true,
        "range": [
          843,
          850
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 39
          },
          "start": {
            "column": 0,
            "line": 39
          }
        }
      },
      "range": [
        843,
        851
      ],
      "loc": {
        "end": {
          "column": 8,
          "line": 39
        },
        "start": {
          "column": 0,
          "line": 39
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
          "name": "NUMBER1",
          "optional": false,
          "range": [
            853,
            860
          ],
          "loc": {
            "end": {
              "column": 8,
              "line": 40
            },
            "start": {
              "column": 1,
              "line": 40
            }
          }
        },
        "operator": "~",
        "prefix": true,
        "range": [
          852,
          860
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
      "range": [
        852,
        861
      ],
      "loc": {
        "end": {
          "column": 9,
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
              863,
              866
            ],
            "loc": {
              "end": {
                "column": 4,
                "line": 41
              },
              "start": {
                "column": 1,
                "line": 41
              }
            }
          },
          "optional": false,
          "range": [
            863,
            868
          ],
          "loc": {
            "end": {
              "column": 6,
              "line": 41
            },
            "start": {
              "column": 1,
              "line": 41
            }
          }
        },
        "operator": "~",
        "prefix": true,
        "range": [
          862,
          868
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 41
          },
          "start": {
            "column": 0,
            "line": 41
          }
        }
      },
      "range": [
        862,
        869
      ],
      "loc": {
        "end": {
          "column": 7,
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
              871,
              875
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 42
              },
              "start": {
                "column": 1,
                "line": 42
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
              876,
              877
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 42
              },
              "start": {
                "column": 6,
                "line": 42
              }
            }
          },
          "range": [
            871,
            877
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 42
            },
            "start": {
              "column": 1,
              "line": 42
            }
          }
        },
        "operator": "~",
        "prefix": true,
        "range": [
          870,
          877
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 42
          },
          "start": {
            "column": 0,
            "line": 42
          }
        }
      },
      "range": [
        870,
        878
      ],
      "loc": {
        "end": {
          "column": 8,
          "line": 42
        },
        "start": {
          "column": 0,
          "line": 42
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
              880,
              881
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 43
              },
              "start": {
                "column": 1,
                "line": 43
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
              882,
              883
            ],
            "loc": {
              "end": {
                "column": 4,
                "line": 43
              },
              "start": {
                "column": 3,
                "line": 43
              }
            }
          },
          "range": [
            880,
            883
          ],
          "loc": {
            "end": {
              "column": 4,
              "line": 43
            },
            "start": {
              "column": 1,
              "line": 43
            }
          }
        },
        "operator": "~",
        "prefix": true,
        "range": [
          879,
          883
        ],
        "loc": {
          "end": {
            "column": 4,
            "line": 43
          },
          "start": {
            "column": 0,
            "line": 43
          }
        }
      },
      "range": [
        879,
        884
      ],
      "loc": {
        "end": {
          "column": 5,
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
        "type": "SequenceExpression",
        "expressions": [
          {
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
                  886,
                  890
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 44
                  },
                  "start": {
                    "column": 1,
                    "line": 44
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
                  891,
                  892
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 44
                  },
                  "start": {
                    "column": 6,
                    "line": 44
                  }
                }
              },
              "range": [
                886,
                892
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 44
                },
                "start": {
                  "column": 1,
                  "line": 44
                }
              }
            },
            "operator": "~",
            "prefix": true,
            "range": [
              885,
              892
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 44
              },
              "start": {
                "column": 0,
                "line": 44
              }
            }
          },
          {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "M",
              "optional": false,
              "range": [
                894,
                895
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 44
                },
                "start": {
                  "column": 9,
                  "line": 44
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
                896,
                897
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
            "range": [
              894,
              897
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 44
              },
              "start": {
                "column": 9,
                "line": 44
              }
            }
          }
        ],
        "range": [
          885,
          897
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 44
          },
          "start": {
            "column": 0,
            "line": 44
          }
        }
      },
      "range": [
        885,
        898
      ],
      "loc": {
        "end": {
          "column": 13,
          "line": 44
        },
        "start": {
          "column": 0,
          "line": 44
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 13,
      "line": 44
    },
    "start": {
      "column": 0,
      "line": 2
    }
  },
  "hashbang": null
}
```
