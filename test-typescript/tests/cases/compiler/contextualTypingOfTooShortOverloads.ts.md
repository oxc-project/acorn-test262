__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    27,
    1149
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
            "name": "use",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 17,
                  "line": 2
                },
                "start": {
                  "column": 7,
                  "line": 2
                }
              },
              "range": [
                34,
                44
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Overload",
                  "optional": false,
                  "range": [
                    36,
                    44
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 2
                    },
                    "start": {
                      "column": 9,
                      "line": 2
                    }
                  }
                },
                "range": [
                  36,
                  44
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 2
                  },
                  "start": {
                    "column": 9,
                    "line": 2
                  }
                }
              }
            },
            "range": [
              31,
              44
            ],
            "loc": {
              "end": {
                "column": 17,
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
            31,
            44
          ],
          "loc": {
            "end": {
              "column": 17,
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
        27,
        45
      ],
      "loc": {
        "end": {
          "column": 18,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "range": [
                64,
                66
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 3
                },
                "start": {
                  "column": 18,
                  "line": 3
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
                "name": "req",
                "optional": false,
                "range": [
                  51,
                  54
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 3
                  },
                  "start": {
                    "column": 5,
                    "line": 3
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "res",
                "optional": false,
                "range": [
                  56,
                  59
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 3
                  },
                  "start": {
                    "column": 10,
                    "line": 3
                  }
                }
              }
            ],
            "range": [
              50,
              66
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 3
              },
              "start": {
                "column": 4,
                "line": 3
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "use",
          "optional": false,
          "range": [
            46,
            49
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 3
            },
            "start": {
              "column": 0,
              "line": 3
            }
          }
        },
        "optional": false,
        "range": [
          46,
          67
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 3
          },
          "start": {
            "column": 0,
            "line": 3
          }
        }
      },
      "range": [
        46,
        68
      ],
      "loc": {
        "end": {
          "column": 22,
          "line": 3
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
          89,
          198
        ],
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "handler1",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 6
                    },
                    "start": {
                      "column": 13,
                      "line": 6
                    }
                  },
                  "range": [
                    104,
                    128
                  ],
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "req1",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 6
                            },
                            "start": {
                              "column": 20,
                              "line": 6
                            }
                          },
                          "range": [
                            111,
                            119
                          ],
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "range": [
                              113,
                              119
                            ],
                            "loc": {
                              "end": {
                                "column": 28,
                                "line": 6
                              },
                              "start": {
                                "column": 22,
                                "line": 6
                              }
                            }
                          }
                        },
                        "range": [
                          107,
                          119
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 6
                          },
                          "start": {
                            "column": 16,
                            "line": 6
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 6
                        },
                        "start": {
                          "column": 30,
                          "line": 6
                        }
                      },
                      "range": [
                        121,
                        128
                      ],
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "range": [
                          124,
                          128
                        ],
                        "loc": {
                          "end": {
                            "column": 37,
                            "line": 6
                          },
                          "start": {
                            "column": 33,
                            "line": 6
                          }
                        }
                      }
                    },
                    "range": [
                      106,
                      128
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 6
                      },
                      "start": {
                        "column": 15,
                        "line": 6
                      }
                    }
                  }
                },
                "range": [
                  96,
                  128
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 6
                  },
                  "start": {
                    "column": 5,
                    "line": 6
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 44,
                  "line": 6
                },
                "start": {
                  "column": 38,
                  "line": 6
                }
              },
              "range": [
                129,
                135
              ],
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "range": [
                  131,
                  135
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 6
                  },
                  "start": {
                    "column": 40,
                    "line": 6
                  }
                }
              }
            },
            "range": [
              95,
              136
            ],
            "loc": {
              "end": {
                "column": 45,
                "line": 6
              },
              "start": {
                "column": 4,
                "line": 6
              }
            }
          },
          {
            "type": "TSCallSignatureDeclaration",
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "handler2",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 51,
                      "line": 7
                    },
                    "start": {
                      "column": 13,
                      "line": 7
                    }
                  },
                  "range": [
                    150,
                    188
                  ],
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "req2",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 7
                            },
                            "start": {
                              "column": 20,
                              "line": 7
                            }
                          },
                          "range": [
                            157,
                            165
                          ],
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "range": [
                              159,
                              165
                            ],
                            "loc": {
                              "end": {
                                "column": 28,
                                "line": 7
                              },
                              "start": {
                                "column": 22,
                                "line": 7
                              }
                            }
                          }
                        },
                        "range": [
                          153,
                          165
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 7
                          },
                          "start": {
                            "column": 16,
                            "line": 7
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "res2",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 42,
                              "line": 7
                            },
                            "start": {
                              "column": 34,
                              "line": 7
                            }
                          },
                          "range": [
                            171,
                            179
                          ],
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "range": [
                              173,
                              179
                            ],
                            "loc": {
                              "end": {
                                "column": 42,
                                "line": 7
                              },
                              "start": {
                                "column": 36,
                                "line": 7
                              }
                            }
                          }
                        },
                        "range": [
                          167,
                          179
                        ],
                        "loc": {
                          "end": {
                            "column": 42,
                            "line": 7
                          },
                          "start": {
                            "column": 30,
                            "line": 7
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 51,
                          "line": 7
                        },
                        "start": {
                          "column": 44,
                          "line": 7
                        }
                      },
                      "range": [
                        181,
                        188
                      ],
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "range": [
                          184,
                          188
                        ],
                        "loc": {
                          "end": {
                            "column": 51,
                            "line": 7
                          },
                          "start": {
                            "column": 47,
                            "line": 7
                          }
                        }
                      }
                    },
                    "range": [
                      152,
                      188
                    ],
                    "loc": {
                      "end": {
                        "column": 51,
                        "line": 7
                      },
                      "start": {
                        "column": 15,
                        "line": 7
                      }
                    }
                  }
                },
                "range": [
                  142,
                  188
                ],
                "loc": {
                  "end": {
                    "column": 51,
                    "line": 7
                  },
                  "start": {
                    "column": 5,
                    "line": 7
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 58,
                  "line": 7
                },
                "start": {
                  "column": 52,
                  "line": 7
                }
              },
              "range": [
                189,
                195
              ],
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "range": [
                  191,
                  195
                ],
                "loc": {
                  "end": {
                    "column": 58,
                    "line": 7
                  },
                  "start": {
                    "column": 54,
                    "line": 7
                  }
                }
              }
            },
            "range": [
              141,
              196
            ],
            "loc": {
              "end": {
                "column": 59,
                "line": 7
              },
              "start": {
                "column": 4,
                "line": 7
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 8
          },
          "start": {
            "column": 19,
            "line": 5
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Overload",
        "optional": false,
        "range": [
          80,
          88
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 5
          },
          "start": {
            "column": 10,
            "line": 5
          }
        }
      },
      "range": [
        70,
        198
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 8
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
            "name": "app",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 14,
                  "line": 10
                },
                "start": {
                  "column": 7,
                  "line": 10
                }
              },
              "range": [
                234,
                241
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MyApp",
                  "optional": false,
                  "range": [
                    236,
                    241
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 10
                    },
                    "start": {
                      "column": 9,
                      "line": 10
                    }
                  }
                },
                "range": [
                  236,
                  241
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 10
                  },
                  "start": {
                    "column": 9,
                    "line": 10
                  }
                }
              }
            },
            "range": [
              231,
              241
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 10
              },
              "start": {
                "column": 4,
                "line": 10
              }
            }
          },
          "init": null,
          "range": [
            231,
            241
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 10
            },
            "start": {
              "column": 4,
              "line": 10
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        227,
        242
      ],
      "loc": {
        "end": {
          "column": 15,
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
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": null,
                  "range": [
                    283,
                    290
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 11
                    },
                    "start": {
                      "column": 40,
                      "line": 11
                    }
                  }
                }
              ],
              "range": [
                281,
                292
              ],
              "loc": {
                "end": {
                  "column": 49,
                  "line": 11
                },
                "start": {
                  "column": 38,
                  "line": 11
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
                "name": "err",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 11
                    },
                    "start": {
                      "column": 12,
                      "line": 11
                    }
                  },
                  "range": [
                    255,
                    260
                  ],
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "range": [
                      257,
                      260
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 11
                      },
                      "start": {
                        "column": 14,
                        "line": 11
                      }
                    }
                  }
                },
                "range": [
                  252,
                  260
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 11
                  },
                  "start": {
                    "column": 9,
                    "line": 11
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "req",
                "optional": false,
                "range": [
                  262,
                  265
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 11
                  },
                  "start": {
                    "column": 19,
                    "line": 11
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "res",
                "optional": false,
                "range": [
                  267,
                  270
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 11
                  },
                  "start": {
                    "column": 24,
                    "line": 11
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "next",
                "optional": false,
                "range": [
                  272,
                  276
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 11
                  },
                  "start": {
                    "column": 29,
                    "line": 11
                  }
                }
              }
            ],
            "range": [
              251,
              292
            ],
            "loc": {
              "end": {
                "column": 49,
                "line": 11
              },
              "start": {
                "column": 8,
                "line": 11
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
            "name": "app",
            "optional": false,
            "range": [
              243,
              246
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 11
              },
              "start": {
                "column": 0,
                "line": 11
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "use",
            "optional": false,
            "range": [
              247,
              250
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 11
              },
              "start": {
                "column": 4,
                "line": 11
              }
            }
          },
          "range": [
            243,
            250
          ],
          "loc": {
            "end": {
              "column": 7,
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
          243,
          293
        ],
        "loc": {
          "end": {
            "column": 50,
            "line": 11
          },
          "start": {
            "column": 0,
            "line": 11
          }
        }
      },
      "range": [
        243,
        294
      ],
      "loc": {
        "end": {
          "column": 51,
          "line": 11
        },
        "start": {
          "column": 0,
          "line": 11
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          313,
          370
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "use",
              "optional": false,
              "range": [
                319,
                322
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 15
                },
                "start": {
                  "column": 4,
                  "line": 15
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
                  "column": 52,
                  "line": 15
                },
                "start": {
                  "column": 7,
                  "line": 15
                }
              },
              "range": [
                322,
                367
              ],
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        338,
                        344
                      ],
                      "params": [
                        {
                          "type": "TSThisType",
                          "range": [
                            339,
                            343
                          ],
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 15
                            },
                            "start": {
                              "column": 24,
                              "line": 15
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 15
                        },
                        "start": {
                          "column": 23,
                          "line": 15
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IRouterHandler",
                      "optional": false,
                      "range": [
                        324,
                        338
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 15
                        },
                        "start": {
                          "column": 9,
                          "line": 15
                        }
                      }
                    },
                    "range": [
                      324,
                      344
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
                  {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        361,
                        367
                      ],
                      "params": [
                        {
                          "type": "TSThisType",
                          "range": [
                            362,
                            366
                          ],
                          "loc": {
                            "end": {
                              "column": 51,
                              "line": 15
                            },
                            "start": {
                              "column": 47,
                              "line": 15
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 52,
                          "line": 15
                        },
                        "start": {
                          "column": 46,
                          "line": 15
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IRouterMatcher",
                      "optional": false,
                      "range": [
                        347,
                        361
                      ],
                      "loc": {
                        "end": {
                          "column": 46,
                          "line": 15
                        },
                        "start": {
                          "column": 32,
                          "line": 15
                        }
                      }
                    },
                    "range": [
                      347,
                      367
                    ],
                    "loc": {
                      "end": {
                        "column": 52,
                        "line": 15
                      },
                      "start": {
                        "column": 32,
                        "line": 15
                      }
                    }
                  }
                ],
                "range": [
                  324,
                  367
                ],
                "loc": {
                  "end": {
                    "column": 52,
                    "line": 15
                  },
                  "start": {
                    "column": 9,
                    "line": 15
                  }
                }
              }
            },
            "range": [
              319,
              368
            ],
            "loc": {
              "end": {
                "column": 53,
                "line": 15
              },
              "start": {
                "column": 4,
                "line": 15
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 16
          },
          "start": {
            "column": 16,
            "line": 14
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyApp",
        "optional": false,
        "range": [
          307,
          312
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 14
          },
          "start": {
            "column": 10,
            "line": 14
          }
        }
      },
      "range": [
        297,
        370
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 16
        },
        "start": {
          "column": 0,
          "line": 14
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          400,
          489
        ],
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "params": [
              {
                "type": "RestElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "handlers",
                  "optional": false,
                  "range": [
                    410,
                    418
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 19
                    },
                    "start": {
                      "column": 8,
                      "line": 19
                    }
                  }
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 19
                    },
                    "start": {
                      "column": 16,
                      "line": 19
                    }
                  },
                  "range": [
                    418,
                    436
                  ],
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "RequestHandler",
                        "optional": false,
                        "range": [
                          420,
                          434
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 19
                          },
                          "start": {
                            "column": 18,
                            "line": 19
                          }
                        }
                      },
                      "range": [
                        420,
                        434
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 19
                        },
                        "start": {
                          "column": 18,
                          "line": 19
                        }
                      }
                    },
                    "range": [
                      420,
                      436
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 19
                      },
                      "start": {
                        "column": 18,
                        "line": 19
                      }
                    }
                  }
                },
                "range": [
                  407,
                  436
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 19
                  },
                  "start": {
                    "column": 5,
                    "line": 19
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 38,
                  "line": 19
                },
                "start": {
                  "column": 35,
                  "line": 19
                }
              },
              "range": [
                437,
                440
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    439,
                    440
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 19
                    },
                    "start": {
                      "column": 37,
                      "line": 19
                    }
                  }
                },
                "range": [
                  439,
                  440
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 19
                  },
                  "start": {
                    "column": 37,
                    "line": 19
                  }
                }
              }
            },
            "range": [
              406,
              441
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 19
              },
              "start": {
                "column": 4,
                "line": 19
              }
            }
          },
          {
            "type": "TSCallSignatureDeclaration",
            "params": [
              {
                "type": "RestElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "handlers",
                  "optional": false,
                  "range": [
                    450,
                    458
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 20
                    },
                    "start": {
                      "column": 8,
                      "line": 20
                    }
                  }
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 20
                    },
                    "start": {
                      "column": 16,
                      "line": 20
                    }
                  },
                  "range": [
                    458,
                    482
                  ],
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "RequestHandlerParams",
                        "optional": false,
                        "range": [
                          460,
                          480
                        ],
                        "loc": {
                          "end": {
                            "column": 38,
                            "line": 20
                          },
                          "start": {
                            "column": 18,
                            "line": 20
                          }
                        }
                      },
                      "range": [
                        460,
                        480
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 20
                        },
                        "start": {
                          "column": 18,
                          "line": 20
                        }
                      }
                    },
                    "range": [
                      460,
                      482
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 20
                      },
                      "start": {
                        "column": 18,
                        "line": 20
                      }
                    }
                  }
                },
                "range": [
                  447,
                  482
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 20
                  },
                  "start": {
                    "column": 5,
                    "line": 20
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 44,
                  "line": 20
                },
                "start": {
                  "column": 41,
                  "line": 20
                }
              },
              "range": [
                483,
                486
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    485,
                    486
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 20
                    },
                    "start": {
                      "column": 43,
                      "line": 20
                    }
                  }
                },
                "range": [
                  485,
                  486
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 20
                  },
                  "start": {
                    "column": 43,
                    "line": 20
                  }
                }
              }
            },
            "range": [
              446,
              487
            ],
            "loc": {
              "end": {
                "column": 45,
                "line": 20
              },
              "start": {
                "column": 4,
                "line": 20
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 21
          },
          "start": {
            "column": 28,
            "line": 18
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IRouterHandler",
        "optional": false,
        "range": [
          382,
          396
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 18
          },
          "start": {
            "column": 10,
            "line": 18
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 27,
            "line": 18
          },
          "start": {
            "column": 24,
            "line": 18
          }
        },
        "range": [
          396,
          399
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
                397,
                398
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 18
                },
                "start": {
                  "column": 25,
                  "line": 18
                }
              }
            },
            "out": false,
            "range": [
              397,
              398
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 18
              },
              "start": {
                "column": 25,
                "line": 18
              }
            }
          }
        ]
      },
      "range": [
        372,
        489
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 21
        },
        "start": {
          "column": 0,
          "line": 18
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          519,
          644
        ],
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "path",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 24
                    },
                    "start": {
                      "column": 9,
                      "line": 24
                    }
                  },
                  "range": [
                    530,
                    542
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "PathParams",
                      "optional": false,
                      "range": [
                        532,
                        542
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 24
                        },
                        "start": {
                          "column": 11,
                          "line": 24
                        }
                      }
                    },
                    "range": [
                      532,
                      542
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 24
                      },
                      "start": {
                        "column": 11,
                        "line": 24
                      }
                    }
                  }
                },
                "range": [
                  526,
                  542
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 24
                  },
                  "start": {
                    "column": 5,
                    "line": 24
                  }
                }
              },
              {
                "type": "RestElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "handlers",
                  "optional": false,
                  "range": [
                    547,
                    555
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 24
                    },
                    "start": {
                      "column": 26,
                      "line": 24
                    }
                  }
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 52,
                      "line": 24
                    },
                    "start": {
                      "column": 34,
                      "line": 24
                    }
                  },
                  "range": [
                    555,
                    573
                  ],
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "RequestHandler",
                        "optional": false,
                        "range": [
                          557,
                          571
                        ],
                        "loc": {
                          "end": {
                            "column": 50,
                            "line": 24
                          },
                          "start": {
                            "column": 36,
                            "line": 24
                          }
                        }
                      },
                      "range": [
                        557,
                        571
                      ],
                      "loc": {
                        "end": {
                          "column": 50,
                          "line": 24
                        },
                        "start": {
                          "column": 36,
                          "line": 24
                        }
                      }
                    },
                    "range": [
                      557,
                      573
                    ],
                    "loc": {
                      "end": {
                        "column": 52,
                        "line": 24
                      },
                      "start": {
                        "column": 36,
                        "line": 24
                      }
                    }
                  }
                },
                "range": [
                  544,
                  573
                ],
                "loc": {
                  "end": {
                    "column": 52,
                    "line": 24
                  },
                  "start": {
                    "column": 23,
                    "line": 24
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 56,
                  "line": 24
                },
                "start": {
                  "column": 53,
                  "line": 24
                }
              },
              "range": [
                574,
                577
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    576,
                    577
                  ],
                  "loc": {
                    "end": {
                      "column": 56,
                      "line": 24
                    },
                    "start": {
                      "column": 55,
                      "line": 24
                    }
                  }
                },
                "range": [
                  576,
                  577
                ],
                "loc": {
                  "end": {
                    "column": 56,
                    "line": 24
                  },
                  "start": {
                    "column": 55,
                    "line": 24
                  }
                }
              }
            },
            "range": [
              525,
              578
            ],
            "loc": {
              "end": {
                "column": 57,
                "line": 24
              },
              "start": {
                "column": 4,
                "line": 24
              }
            }
          },
          {
            "type": "TSCallSignatureDeclaration",
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "path",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 25
                    },
                    "start": {
                      "column": 9,
                      "line": 25
                    }
                  },
                  "range": [
                    588,
                    600
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "PathParams",
                      "optional": false,
                      "range": [
                        590,
                        600
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 25
                        },
                        "start": {
                          "column": 11,
                          "line": 25
                        }
                      }
                    },
                    "range": [
                      590,
                      600
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 25
                      },
                      "start": {
                        "column": 11,
                        "line": 25
                      }
                    }
                  }
                },
                "range": [
                  584,
                  600
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 25
                  },
                  "start": {
                    "column": 5,
                    "line": 25
                  }
                }
              },
              {
                "type": "RestElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "handlers",
                  "optional": false,
                  "range": [
                    605,
                    613
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 25
                    },
                    "start": {
                      "column": 26,
                      "line": 25
                    }
                  }
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 58,
                      "line": 25
                    },
                    "start": {
                      "column": 34,
                      "line": 25
                    }
                  },
                  "range": [
                    613,
                    637
                  ],
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "RequestHandlerParams",
                        "optional": false,
                        "range": [
                          615,
                          635
                        ],
                        "loc": {
                          "end": {
                            "column": 56,
                            "line": 25
                          },
                          "start": {
                            "column": 36,
                            "line": 25
                          }
                        }
                      },
                      "range": [
                        615,
                        635
                      ],
                      "loc": {
                        "end": {
                          "column": 56,
                          "line": 25
                        },
                        "start": {
                          "column": 36,
                          "line": 25
                        }
                      }
                    },
                    "range": [
                      615,
                      637
                    ],
                    "loc": {
                      "end": {
                        "column": 58,
                        "line": 25
                      },
                      "start": {
                        "column": 36,
                        "line": 25
                      }
                    }
                  }
                },
                "range": [
                  602,
                  637
                ],
                "loc": {
                  "end": {
                    "column": 58,
                    "line": 25
                  },
                  "start": {
                    "column": 23,
                    "line": 25
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 62,
                  "line": 25
                },
                "start": {
                  "column": 59,
                  "line": 25
                }
              },
              "range": [
                638,
                641
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    640,
                    641
                  ],
                  "loc": {
                    "end": {
                      "column": 62,
                      "line": 25
                    },
                    "start": {
                      "column": 61,
                      "line": 25
                    }
                  }
                },
                "range": [
                  640,
                  641
                ],
                "loc": {
                  "end": {
                    "column": 62,
                    "line": 25
                  },
                  "start": {
                    "column": 61,
                    "line": 25
                  }
                }
              }
            },
            "range": [
              583,
              642
            ],
            "loc": {
              "end": {
                "column": 63,
                "line": 25
              },
              "start": {
                "column": 4,
                "line": 25
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 26
          },
          "start": {
            "column": 28,
            "line": 23
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IRouterMatcher",
        "optional": false,
        "range": [
          501,
          515
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 23
          },
          "start": {
            "column": 10,
            "line": 23
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 27,
            "line": 23
          },
          "start": {
            "column": 24,
            "line": 23
          }
        },
        "range": [
          515,
          518
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
                516,
                517
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
            "out": false,
            "range": [
              516,
              517
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
          }
        ]
      },
      "range": [
        491,
        644
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 26
        },
        "start": {
          "column": 0,
          "line": 23
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PathParams",
        "optional": false,
        "range": [
          651,
          661
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 28
          },
          "start": {
            "column": 5,
            "line": 28
          }
        }
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSStringKeyword",
            "range": [
              664,
              670
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 28
              },
              "start": {
                "column": 18,
                "line": 28
              }
            }
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "RegExp",
              "optional": false,
              "range": [
                673,
                679
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 28
                },
                "start": {
                  "column": 27,
                  "line": 28
                }
              }
            },
            "range": [
              673,
              679
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 28
              },
              "start": {
                "column": 27,
                "line": 28
              }
            }
          },
          {
            "type": "TSArrayType",
            "elementType": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "range": [
                    683,
                    689
                  ],
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 28
                    },
                    "start": {
                      "column": 37,
                      "line": 28
                    }
                  }
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "RegExp",
                    "optional": false,
                    "range": [
                      692,
                      698
                    ],
                    "loc": {
                      "end": {
                        "column": 52,
                        "line": 28
                      },
                      "start": {
                        "column": 46,
                        "line": 28
                      }
                    }
                  },
                  "range": [
                    692,
                    698
                  ],
                  "loc": {
                    "end": {
                      "column": 52,
                      "line": 28
                    },
                    "start": {
                      "column": 46,
                      "line": 28
                    }
                  }
                }
              ],
              "range": [
                683,
                698
              ],
              "loc": {
                "end": {
                  "column": 52,
                  "line": 28
                },
                "start": {
                  "column": 37,
                  "line": 28
                }
              }
            },
            "range": [
              682,
              701
            ],
            "loc": {
              "end": {
                "column": 55,
                "line": 28
              },
              "start": {
                "column": 36,
                "line": 28
              }
            }
          }
        ],
        "range": [
          664,
          701
        ],
        "loc": {
          "end": {
            "column": 55,
            "line": 28
          },
          "start": {
            "column": 18,
            "line": 28
          }
        }
      },
      "range": [
        646,
        702
      ],
      "loc": {
        "end": {
          "column": 56,
          "line": 28
        },
        "start": {
          "column": 0,
          "line": 28
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "RequestHandlerParams",
        "optional": false,
        "range": [
          708,
          728
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 29
          },
          "start": {
            "column": 5,
            "line": 29
          }
        }
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "RequestHandler",
              "optional": false,
              "range": [
                731,
                745
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 29
                },
                "start": {
                  "column": 28,
                  "line": 29
                }
              }
            },
            "range": [
              731,
              745
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 29
              },
              "start": {
                "column": 28,
                "line": 29
              }
            }
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "ErrorRequestHandler",
              "optional": false,
              "range": [
                748,
                767
              ],
              "loc": {
                "end": {
                  "column": 64,
                  "line": 29
                },
                "start": {
                  "column": 45,
                  "line": 29
                }
              }
            },
            "range": [
              748,
              767
            ],
            "loc": {
              "end": {
                "column": 64,
                "line": 29
              },
              "start": {
                "column": 45,
                "line": 29
              }
            }
          },
          {
            "type": "TSArrayType",
            "elementType": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "RequestHandler",
                    "optional": false,
                    "range": [
                      771,
                      785
                    ],
                    "loc": {
                      "end": {
                        "column": 82,
                        "line": 29
                      },
                      "start": {
                        "column": 68,
                        "line": 29
                      }
                    }
                  },
                  "range": [
                    771,
                    785
                  ],
                  "loc": {
                    "end": {
                      "column": 82,
                      "line": 29
                    },
                    "start": {
                      "column": 68,
                      "line": 29
                    }
                  }
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ErrorRequestHandler",
                    "optional": false,
                    "range": [
                      788,
                      807
                    ],
                    "loc": {
                      "end": {
                        "column": 104,
                        "line": 29
                      },
                      "start": {
                        "column": 85,
                        "line": 29
                      }
                    }
                  },
                  "range": [
                    788,
                    807
                  ],
                  "loc": {
                    "end": {
                      "column": 104,
                      "line": 29
                    },
                    "start": {
                      "column": 85,
                      "line": 29
                    }
                  }
                }
              ],
              "range": [
                771,
                807
              ],
              "loc": {
                "end": {
                  "column": 104,
                  "line": 29
                },
                "start": {
                  "column": 68,
                  "line": 29
                }
              }
            },
            "range": [
              770,
              810
            ],
            "loc": {
              "end": {
                "column": 107,
                "line": 29
              },
              "start": {
                "column": 67,
                "line": 29
              }
            }
          }
        ],
        "range": [
          731,
          810
        ],
        "loc": {
          "end": {
            "column": 107,
            "line": 29
          },
          "start": {
            "column": 28,
            "line": 29
          }
        }
      },
      "range": [
        703,
        811
      ],
      "loc": {
        "end": {
          "column": 108,
          "line": 29
        },
        "start": {
          "column": 0,
          "line": 29
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          838,
          901
        ],
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "req",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 32
                    },
                    "start": {
                      "column": 8,
                      "line": 32
                    }
                  },
                  "range": [
                    848,
                    857
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Request",
                      "optional": false,
                      "range": [
                        850,
                        857
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 32
                        },
                        "start": {
                          "column": 10,
                          "line": 32
                        }
                      }
                    },
                    "range": [
                      850,
                      857
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 32
                      },
                      "start": {
                        "column": 10,
                        "line": 32
                      }
                    }
                  }
                },
                "range": [
                  845,
                  857
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 32
                  },
                  "start": {
                    "column": 5,
                    "line": 32
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "res",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 32
                    },
                    "start": {
                      "column": 22,
                      "line": 32
                    }
                  },
                  "range": [
                    862,
                    872
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Response",
                      "optional": false,
                      "range": [
                        864,
                        872
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 32
                        },
                        "start": {
                          "column": 24,
                          "line": 32
                        }
                      }
                    },
                    "range": [
                      864,
                      872
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 32
                      },
                      "start": {
                        "column": 24,
                        "line": 32
                      }
                    }
                  }
                },
                "range": [
                  859,
                  872
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 32
                  },
                  "start": {
                    "column": 19,
                    "line": 32
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "next",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 52,
                      "line": 32
                    },
                    "start": {
                      "column": 38,
                      "line": 32
                    }
                  },
                  "range": [
                    878,
                    892
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "NextFunction",
                      "optional": false,
                      "range": [
                        880,
                        892
                      ],
                      "loc": {
                        "end": {
                          "column": 52,
                          "line": 32
                        },
                        "start": {
                          "column": 40,
                          "line": 32
                        }
                      }
                    },
                    "range": [
                      880,
                      892
                    ],
                    "loc": {
                      "end": {
                        "column": 52,
                        "line": 32
                      },
                      "start": {
                        "column": 40,
                        "line": 32
                      }
                    }
                  }
                },
                "range": [
                  874,
                  892
                ],
                "loc": {
                  "end": {
                    "column": 52,
                    "line": 32
                  },
                  "start": {
                    "column": 34,
                    "line": 32
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 58,
                  "line": 32
                },
                "start": {
                  "column": 53,
                  "line": 32
                }
              },
              "range": [
                893,
                898
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  895,
                  898
                ],
                "loc": {
                  "end": {
                    "column": 58,
                    "line": 32
                  },
                  "start": {
                    "column": 55,
                    "line": 32
                  }
                }
              }
            },
            "range": [
              844,
              899
            ],
            "loc": {
              "end": {
                "column": 59,
                "line": 32
              },
              "start": {
                "column": 4,
                "line": 32
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 33
          },
          "start": {
            "column": 25,
            "line": 31
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "RequestHandler",
        "optional": false,
        "range": [
          823,
          837
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 31
          },
          "start": {
            "column": 10,
            "line": 31
          }
        }
      },
      "range": [
        813,
        901
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 33
        },
        "start": {
          "column": 0,
          "line": 31
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          933,
          1006
        ],
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "err",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 36
                    },
                    "start": {
                      "column": 8,
                      "line": 36
                    }
                  },
                  "range": [
                    943,
                    948
                  ],
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "range": [
                      945,
                      948
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 36
                      },
                      "start": {
                        "column": 10,
                        "line": 36
                      }
                    }
                  }
                },
                "range": [
                  940,
                  948
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 36
                  },
                  "start": {
                    "column": 5,
                    "line": 36
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "req",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 36
                    },
                    "start": {
                      "column": 18,
                      "line": 36
                    }
                  },
                  "range": [
                    953,
                    962
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Request",
                      "optional": false,
                      "range": [
                        955,
                        962
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 36
                        },
                        "start": {
                          "column": 20,
                          "line": 36
                        }
                      }
                    },
                    "range": [
                      955,
                      962
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 36
                      },
                      "start": {
                        "column": 20,
                        "line": 36
                      }
                    }
                  }
                },
                "range": [
                  950,
                  962
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 36
                  },
                  "start": {
                    "column": 15,
                    "line": 36
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "res",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 36
                    },
                    "start": {
                      "column": 32,
                      "line": 36
                    }
                  },
                  "range": [
                    967,
                    977
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Response",
                      "optional": false,
                      "range": [
                        969,
                        977
                      ],
                      "loc": {
                        "end": {
                          "column": 42,
                          "line": 36
                        },
                        "start": {
                          "column": 34,
                          "line": 36
                        }
                      }
                    },
                    "range": [
                      969,
                      977
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 36
                      },
                      "start": {
                        "column": 34,
                        "line": 36
                      }
                    }
                  }
                },
                "range": [
                  964,
                  977
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 36
                  },
                  "start": {
                    "column": 29,
                    "line": 36
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "next",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 62,
                      "line": 36
                    },
                    "start": {
                      "column": 48,
                      "line": 36
                    }
                  },
                  "range": [
                    983,
                    997
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "NextFunction",
                      "optional": false,
                      "range": [
                        985,
                        997
                      ],
                      "loc": {
                        "end": {
                          "column": 62,
                          "line": 36
                        },
                        "start": {
                          "column": 50,
                          "line": 36
                        }
                      }
                    },
                    "range": [
                      985,
                      997
                    ],
                    "loc": {
                      "end": {
                        "column": 62,
                        "line": 36
                      },
                      "start": {
                        "column": 50,
                        "line": 36
                      }
                    }
                  }
                },
                "range": [
                  979,
                  997
                ],
                "loc": {
                  "end": {
                    "column": 62,
                    "line": 36
                  },
                  "start": {
                    "column": 44,
                    "line": 36
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 68,
                  "line": 36
                },
                "start": {
                  "column": 63,
                  "line": 36
                }
              },
              "range": [
                998,
                1003
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  1000,
                  1003
                ],
                "loc": {
                  "end": {
                    "column": 68,
                    "line": 36
                  },
                  "start": {
                    "column": 65,
                    "line": 36
                  }
                }
              }
            },
            "range": [
              939,
              1004
            ],
            "loc": {
              "end": {
                "column": 69,
                "line": 36
              },
              "start": {
                "column": 4,
                "line": 36
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 37
          },
          "start": {
            "column": 30,
            "line": 35
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ErrorRequestHandler",
        "optional": false,
        "range": [
          913,
          932
        ],
        "loc": {
          "end": {
            "column": 29,
            "line": 35
          },
          "start": {
            "column": 10,
            "line": 35
          }
        }
      },
      "range": [
        903,
        1006
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 37
        },
        "start": {
          "column": 0,
          "line": 35
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          1026,
          1049
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method",
              "optional": false,
              "range": [
                1032,
                1038
              ],
              "loc": {
                "end": {
                  "column": 10,
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
                  "column": 18,
                  "line": 40
                },
                "start": {
                  "column": 10,
                  "line": 40
                }
              },
              "range": [
                1038,
                1046
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  1040,
                  1046
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 40
                  },
                  "start": {
                    "column": 12,
                    "line": 40
                  }
                }
              }
            },
            "range": [
              1032,
              1047
            ],
            "loc": {
              "end": {
                "column": 19,
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
            "column": 18,
            "line": 39
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Request",
        "optional": false,
        "range": [
          1018,
          1025
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 39
          },
          "start": {
            "column": 10,
            "line": 39
          }
        }
      },
      "range": [
        1008,
        1049
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
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          1070,
          1097
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "statusCode",
              "optional": false,
              "range": [
                1076,
                1086
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 44
                },
                "start": {
                  "column": 4,
                  "line": 44
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
                  "column": 22,
                  "line": 44
                },
                "start": {
                  "column": 14,
                  "line": 44
                }
              },
              "range": [
                1086,
                1094
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  1088,
                  1094
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 44
                  },
                  "start": {
                    "column": 16,
                    "line": 44
                  }
                }
              }
            },
            "range": [
              1076,
              1095
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
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 45
          },
          "start": {
            "column": 19,
            "line": 43
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Response",
        "optional": false,
        "range": [
          1061,
          1069
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 43
          },
          "start": {
            "column": 10,
            "line": 43
          }
        }
      },
      "range": [
        1051,
        1097
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 45
        },
        "start": {
          "column": 0,
          "line": 43
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          1122,
          1148
        ],
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "err",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 48
                    },
                    "start": {
                      "column": 9,
                      "line": 48
                    }
                  },
                  "range": [
                    1133,
                    1138
                  ],
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "range": [
                      1135,
                      1138
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 48
                      },
                      "start": {
                        "column": 11,
                        "line": 48
                      }
                    }
                  }
                },
                "range": [
                  1129,
                  1138
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 48
                  },
                  "start": {
                    "column": 5,
                    "line": 48
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 21,
                  "line": 48
                },
                "start": {
                  "column": 15,
                  "line": 48
                }
              },
              "range": [
                1139,
                1145
              ],
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "range": [
                  1141,
                  1145
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 48
                  },
                  "start": {
                    "column": 17,
                    "line": 48
                  }
                }
              }
            },
            "range": [
              1128,
              1146
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 48
              },
              "start": {
                "column": 4,
                "line": 48
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 49
          },
          "start": {
            "column": 23,
            "line": 47
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NextFunction",
        "optional": false,
        "range": [
          1109,
          1121
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 47
          },
          "start": {
            "column": 10,
            "line": 47
          }
        }
      },
      "range": [
        1099,
        1148
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 49
        },
        "start": {
          "column": 0,
          "line": 47
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 50
    },
    "start": {
      "column": 0,
      "line": 2
    }
  },
  "hashbang": null
}
```
