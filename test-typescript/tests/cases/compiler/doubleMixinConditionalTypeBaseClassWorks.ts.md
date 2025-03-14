__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    356
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Constructor",
        "optional": false,
        "range": [
          5,
          16
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 1
          },
          "start": {
            "column": 5,
            "line": 1
          }
        }
      },
      "typeAnnotation": {
        "type": "TSConstructorType",
        "abstract": false,
        "params": [
          {
            "type": "RestElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "args",
              "optional": false,
              "range": [
                27,
                31
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 1
                },
                "start": {
                  "column": 27,
                  "line": 1
                }
              }
            },
            "decorators": [],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 38,
                  "line": 1
                },
                "start": {
                  "column": 31,
                  "line": 1
                }
              },
              "range": [
                31,
                38
              ],
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSAnyKeyword",
                  "range": [
                    33,
                    36
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 1
                    },
                    "start": {
                      "column": 33,
                      "line": 1
                    }
                  }
                },
                "range": [
                  33,
                  38
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 1
                  },
                  "start": {
                    "column": 33,
                    "line": 1
                  }
                }
              }
            },
            "range": [
              24,
              38
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 1
              },
              "start": {
                "column": 24,
                "line": 1
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 45,
              "line": 1
            },
            "start": {
              "column": 40,
              "line": 1
            }
          },
          "range": [
            40,
            45
          ],
          "typeAnnotation": {
            "type": "TSTypeLiteral",
            "members": [],
            "range": [
              43,
              45
            ],
            "loc": {
              "end": {
                "column": 45,
                "line": 1
              },
              "start": {
                "column": 43,
                "line": 1
              }
            }
          }
        },
        "range": [
          19,
          45
        ],
        "loc": {
          "end": {
            "column": 45,
            "line": 1
          },
          "start": {
            "column": 19,
            "line": 1
          }
        }
      },
      "range": [
        0,
        46
      ],
      "loc": {
        "end": {
          "column": 46,
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
            "name": "Mixin1",
            "optional": false,
            "range": [
              54,
              60
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 3
              },
              "start": {
                "column": 6,
                "line": 3
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
              "type": "ClassExpression",
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "range": [
                  118,
                  146
                ],
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "accessibility": "private",
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "_fooPrivate",
                      "optional": false,
                      "range": [
                        128,
                        139
                      ],
                      "loc": {
                        "end": {
                          "column": 91,
                          "line": 3
                        },
                        "start": {
                          "column": 80,
                          "line": 3
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
                          "column": 95,
                          "line": 3
                        },
                        "start": {
                          "column": 91,
                          "line": 3
                        }
                      },
                      "range": [
                        139,
                        143
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "members": [],
                        "range": [
                          141,
                          143
                        ],
                        "loc": {
                          "end": {
                            "column": 95,
                            "line": 3
                          },
                          "start": {
                            "column": 93,
                            "line": 3
                          }
                        }
                      }
                    },
                    "value": null,
                    "range": [
                      120,
                      144
                    ],
                    "loc": {
                      "end": {
                        "column": 96,
                        "line": 3
                      },
                      "start": {
                        "column": 72,
                        "line": 3
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 98,
                    "line": 3
                  },
                  "start": {
                    "column": 70,
                    "line": 3
                  }
                }
              },
              "declare": false,
              "decorators": [],
              "id": null,
              "implements": [],
              "superClass": {
                "type": "Identifier",
                "decorators": [],
                "name": "Base",
                "optional": false,
                "range": [
                  113,
                  117
                ],
                "loc": {
                  "end": {
                    "column": 69,
                    "line": 3
                  },
                  "start": {
                    "column": 65,
                    "line": 3
                  }
                }
              },
              "range": [
                99,
                146
              ],
              "loc": {
                "end": {
                  "column": 98,
                  "line": 3
                },
                "start": {
                  "column": 51,
                  "line": 3
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
                "name": "Base",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 3
                    },
                    "start": {
                      "column": 43,
                      "line": 3
                    }
                  },
                  "range": [
                    91,
                    94
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "range": [
                        93,
                        94
                      ],
                      "loc": {
                        "end": {
                          "column": 46,
                          "line": 3
                        },
                        "start": {
                          "column": 45,
                          "line": 3
                        }
                      }
                    },
                    "range": [
                      93,
                      94
                    ],
                    "loc": {
                      "end": {
                        "column": 46,
                        "line": 3
                      },
                      "start": {
                        "column": 45,
                        "line": 3
                      }
                    }
                  }
                },
                "range": [
                  87,
                  94
                ],
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 3
                  },
                  "start": {
                    "column": 39,
                    "line": 3
                  }
                }
              }
            ],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 38,
                  "line": 3
                },
                "start": {
                  "column": 15,
                  "line": 3
                }
              },
              "range": [
                63,
                86
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
                      "name": "Constructor",
                      "optional": false,
                      "range": [
                        74,
                        85
                      ],
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 3
                        },
                        "start": {
                          "column": 26,
                          "line": 3
                        }
                      }
                    },
                    "range": [
                      74,
                      85
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 3
                      },
                      "start": {
                        "column": 26,
                        "line": 3
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "range": [
                      64,
                      65
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 3
                      },
                      "start": {
                        "column": 16,
                        "line": 3
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    64,
                    85
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 3
                    },
                    "start": {
                      "column": 16,
                      "line": 3
                    }
                  }
                }
              ]
            },
            "range": [
              63,
              146
            ],
            "loc": {
              "end": {
                "column": 98,
                "line": 3
              },
              "start": {
                "column": 15,
                "line": 3
              }
            }
          },
          "range": [
            54,
            146
          ],
          "loc": {
            "end": {
              "column": 98,
              "line": 3
            },
            "start": {
              "column": 6,
              "line": 3
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        48,
        146
      ],
      "loc": {
        "end": {
          "column": 98,
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
        "name": "FooConstructor",
        "optional": false,
        "range": [
          153,
          167
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 5
          },
          "start": {
            "column": 5,
            "line": 5
          }
        }
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeQuery",
          "exprName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Mixin1",
            "optional": false,
            "range": [
              177,
              183
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
          },
          "range": [
            170,
            183
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 5
            },
            "start": {
              "column": 22,
              "line": 5
            }
          }
        },
        "extendsType": {
          "type": "TSFunctionType",
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
                    "column": 59,
                    "line": 5
                  },
                  "start": {
                    "column": 46,
                    "line": 5
                  }
                },
                "range": [
                  194,
                  207
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Constructor",
                    "optional": false,
                    "range": [
                      196,
                      207
                    ],
                    "loc": {
                      "end": {
                        "column": 59,
                        "line": 5
                      },
                      "start": {
                        "column": 48,
                        "line": 5
                      }
                    }
                  },
                  "range": [
                    196,
                    207
                  ],
                  "loc": {
                    "end": {
                      "column": 59,
                      "line": 5
                    },
                    "start": {
                      "column": 48,
                      "line": 5
                    }
                  }
                }
              },
              "range": [
                193,
                207
              ],
              "loc": {
                "end": {
                  "column": 59,
                  "line": 5
                },
                "start": {
                  "column": 45,
                  "line": 5
                }
              }
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 73,
                "line": 5
              },
              "start": {
                "column": 61,
                "line": 5
              }
            },
            "range": [
              209,
              221
            ],
            "typeAnnotation": {
              "type": "TSInferType",
              "typeParameter": {
                "type": "TSTypeParameter",
                "const": false,
                "in": false,
                "name": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Cls",
                  "optional": false,
                  "range": [
                    218,
                    221
                  ],
                  "loc": {
                    "end": {
                      "column": 73,
                      "line": 5
                    },
                    "start": {
                      "column": 70,
                      "line": 5
                    }
                  }
                },
                "out": false,
                "range": [
                  218,
                  221
                ],
                "loc": {
                  "end": {
                    "column": 73,
                    "line": 5
                  },
                  "start": {
                    "column": 70,
                    "line": 5
                  }
                }
              },
              "range": [
                212,
                221
              ],
              "loc": {
                "end": {
                  "column": 73,
                  "line": 5
                },
                "start": {
                  "column": 64,
                  "line": 5
                }
              }
            }
          },
          "range": [
            192,
            221
          ],
          "loc": {
            "end": {
              "column": 73,
              "line": 5
            },
            "start": {
              "column": 44,
              "line": 5
            }
          }
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "range": [
            230,
            235
          ],
          "loc": {
            "end": {
              "column": 87,
              "line": 5
            },
            "start": {
              "column": 82,
              "line": 5
            }
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Cls",
            "optional": false,
            "range": [
              224,
              227
            ],
            "loc": {
              "end": {
                "column": 79,
                "line": 5
              },
              "start": {
                "column": 76,
                "line": 5
              }
            }
          },
          "range": [
            224,
            227
          ],
          "loc": {
            "end": {
              "column": 79,
              "line": 5
            },
            "start": {
              "column": 76,
              "line": 5
            }
          }
        },
        "range": [
          170,
          235
        ],
        "loc": {
          "end": {
            "column": 87,
            "line": 5
          },
          "start": {
            "column": 22,
            "line": 5
          }
        }
      },
      "range": [
        148,
        236
      ],
      "loc": {
        "end": {
          "column": 88,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 5
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
            "name": "Mixin2",
            "optional": false,
            "range": [
              243,
              249
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 6
              },
              "start": {
                "column": 6,
                "line": 6
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
              "type": "ClassExpression",
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "range": [
                  310,
                  312
                ],
                "body": [],
                "loc": {
                  "end": {
                    "column": 75,
                    "line": 6
                  },
                  "start": {
                    "column": 73,
                    "line": 6
                  }
                }
              },
              "declare": false,
              "decorators": [],
              "id": null,
              "implements": [],
              "superClass": {
                "type": "Identifier",
                "decorators": [],
                "name": "Base",
                "optional": false,
                "range": [
                  305,
                  309
                ],
                "loc": {
                  "end": {
                    "column": 72,
                    "line": 6
                  },
                  "start": {
                    "column": 68,
                    "line": 6
                  }
                }
              },
              "range": [
                291,
                312
              ],
              "loc": {
                "end": {
                  "column": 75,
                  "line": 6
                },
                "start": {
                  "column": 54,
                  "line": 6
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
                "name": "Base",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 49,
                      "line": 6
                    },
                    "start": {
                      "column": 46,
                      "line": 6
                    }
                  },
                  "range": [
                    283,
                    286
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "range": [
                        285,
                        286
                      ],
                      "loc": {
                        "end": {
                          "column": 49,
                          "line": 6
                        },
                        "start": {
                          "column": 48,
                          "line": 6
                        }
                      }
                    },
                    "range": [
                      285,
                      286
                    ],
                    "loc": {
                      "end": {
                        "column": 49,
                        "line": 6
                      },
                      "start": {
                        "column": 48,
                        "line": 6
                      }
                    }
                  }
                },
                "range": [
                  279,
                  286
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 6
                  },
                  "start": {
                    "column": 42,
                    "line": 6
                  }
                }
              }
            ],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 41,
                  "line": 6
                },
                "start": {
                  "column": 15,
                  "line": 6
                }
              },
              "range": [
                252,
                278
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
                      "name": "FooConstructor",
                      "optional": false,
                      "range": [
                        263,
                        277
                      ],
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 6
                        },
                        "start": {
                          "column": 26,
                          "line": 6
                        }
                      }
                    },
                    "range": [
                      263,
                      277
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 6
                      },
                      "start": {
                        "column": 26,
                        "line": 6
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "range": [
                      253,
                      254
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 6
                      },
                      "start": {
                        "column": 16,
                        "line": 6
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    253,
                    277
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 6
                    },
                    "start": {
                      "column": 16,
                      "line": 6
                    }
                  }
                }
              ]
            },
            "range": [
              252,
              312
            ],
            "loc": {
              "end": {
                "column": 75,
                "line": 6
              },
              "start": {
                "column": 15,
                "line": 6
              }
            }
          },
          "range": [
            243,
            312
          ],
          "loc": {
            "end": {
              "column": 75,
              "line": 6
            },
            "start": {
              "column": 6,
              "line": 6
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        237,
        313
      ],
      "loc": {
        "end": {
          "column": 76,
          "line": 6
        },
        "start": {
          "column": 0,
          "line": 6
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          354,
          356
        ],
        "body": [],
        "loc": {
          "end": {
            "column": 41,
            "line": 8
          },
          "start": {
            "column": 39,
            "line": 8
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
          321,
          322
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 8
          },
          "start": {
            "column": 6,
            "line": 8
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "Object",
                "optional": false,
                "range": [
                  345,
                  351
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 8
                  },
                  "start": {
                    "column": 30,
                    "line": 8
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Mixin1",
              "optional": false,
              "range": [
                338,
                344
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 8
                },
                "start": {
                  "column": 23,
                  "line": 8
                }
              }
            },
            "optional": false,
            "range": [
              338,
              352
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 8
              },
              "start": {
                "column": 23,
                "line": 8
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "Mixin2",
          "optional": false,
          "range": [
            331,
            337
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 8
            },
            "start": {
              "column": 16,
              "line": 8
            }
          }
        },
        "optional": false,
        "range": [
          331,
          353
        ],
        "loc": {
          "end": {
            "column": 38,
            "line": 8
          },
          "start": {
            "column": 16,
            "line": 8
          }
        }
      },
      "range": [
        315,
        356
      ],
      "loc": {
        "end": {
          "column": 41,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 8
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 41,
      "line": 8
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
