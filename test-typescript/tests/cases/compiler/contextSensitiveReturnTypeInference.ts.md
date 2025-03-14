__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    22,
    707
  ],
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          38,
          56
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "range": [
                42,
                45
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 4
                },
                "start": {
                  "column": 2,
                  "line": 4
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
                  "line": 4
                },
                "start": {
                  "column": 5,
                  "line": 4
                }
              },
              "range": [
                45,
                54
              ],
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "range": [
                  47,
                  54
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 4
                  },
                  "start": {
                    "column": 7,
                    "line": 4
                  }
                }
              }
            },
            "range": [
              42,
              54
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 4
              },
              "start": {
                "column": 2,
                "line": 4
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 5
          },
          "start": {
            "column": 16,
            "line": 3
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IData",
        "optional": false,
        "range": [
          32,
          37
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 3
          },
          "start": {
            "column": 10,
            "line": 3
          }
        }
      },
      "range": [
        22,
        56
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
      "type": "TSDeclareFunction",
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test",
        "optional": false,
        "range": [
          75,
          79
        ],
        "loc": {
          "end": {
            "column": 21,
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
          "name": "getter",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 51,
                "line": 8
              },
              "start": {
                "column": 8,
                "line": 8
              }
            },
            "range": [
              104,
              147
            ],
            "typeAnnotation": {
              "type": "TSFunctionType",
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "deps",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 8
                      },
                      "start": {
                        "column": 15,
                        "line": 8
                      }
                    },
                    "range": [
                      111,
                      126
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TDependencies",
                        "optional": false,
                        "range": [
                          113,
                          126
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 8
                          },
                          "start": {
                            "column": 17,
                            "line": 8
                          }
                        }
                      },
                      "range": [
                        113,
                        126
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 8
                        },
                        "start": {
                          "column": 17,
                          "line": 8
                        }
                      }
                    }
                  },
                  "range": [
                    107,
                    126
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 8
                    },
                    "start": {
                      "column": 11,
                      "line": 8
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "data",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 43,
                        "line": 8
                      },
                      "start": {
                        "column": 36,
                        "line": 8
                      }
                    },
                    "range": [
                      132,
                      139
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "IData",
                        "optional": false,
                        "range": [
                          134,
                          139
                        ],
                        "loc": {
                          "end": {
                            "column": 43,
                            "line": 8
                          },
                          "start": {
                            "column": 38,
                            "line": 8
                          }
                        }
                      },
                      "range": [
                        134,
                        139
                      ],
                      "loc": {
                        "end": {
                          "column": 43,
                          "line": 8
                        },
                        "start": {
                          "column": 38,
                          "line": 8
                        }
                      }
                    }
                  },
                  "range": [
                    128,
                    139
                  ],
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 8
                    },
                    "start": {
                      "column": 32,
                      "line": 8
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 51,
                    "line": 8
                  },
                  "start": {
                    "column": 45,
                    "line": 8
                  }
                },
                "range": [
                  141,
                  147
                ],
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "range": [
                    144,
                    147
                  ],
                  "loc": {
                    "end": {
                      "column": 51,
                      "line": 8
                    },
                    "start": {
                      "column": 48,
                      "line": 8
                    }
                  }
                }
              },
              "range": [
                106,
                147
              ],
              "loc": {
                "end": {
                  "column": 51,
                  "line": 8
                },
                "start": {
                  "column": 10,
                  "line": 8
                }
              }
            }
          },
          "range": [
            98,
            147
          ],
          "loc": {
            "end": {
              "column": 51,
              "line": 8
            },
            "start": {
              "column": 2,
              "line": 8
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "deps",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 21,
                "line": 9
              },
              "start": {
                "column": 6,
                "line": 9
              }
            },
            "range": [
              155,
              170
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TDependencies",
                "optional": false,
                "range": [
                  157,
                  170
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 9
                  },
                  "start": {
                    "column": 8,
                    "line": 9
                  }
                }
              },
              "range": [
                157,
                170
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 9
                },
                "start": {
                  "column": 8,
                  "line": 9
                }
              }
            }
          },
          "range": [
            151,
            170
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 9
            },
            "start": {
              "column": 2,
              "line": 9
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 6,
            "line": 10
          },
          "start": {
            "column": 1,
            "line": 10
          }
        },
        "range": [
          173,
          178
        ],
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "range": [
            175,
            178
          ],
          "loc": {
            "end": {
              "column": 6,
              "line": 10
            },
            "start": {
              "column": 3,
              "line": 10
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 36,
            "line": 7
          },
          "start": {
            "column": 21,
            "line": 7
          }
        },
        "range": [
          79,
          94
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TDependencies",
              "optional": false,
              "range": [
                80,
                93
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 7
                },
                "start": {
                  "column": 22,
                  "line": 7
                }
              }
            },
            "out": false,
            "range": [
              80,
              93
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 7
              },
              "start": {
                "column": 22,
                "line": 7
              }
            }
          }
        ]
      },
      "range": [
        58,
        178
      ],
      "loc": {
        "end": {
          "column": 6,
          "line": 10
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
            "name": "DEPS",
            "optional": false,
            "range": [
              187,
              191
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 12
              },
              "start": {
                "column": 6,
                "line": 12
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "range": [
                    198,
                    201
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 13
                    },
                    "start": {
                      "column": 2,
                      "line": 13
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
                    203,
                    204
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
                  198,
                  204
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 13
                  },
                  "start": {
                    "column": 2,
                    "line": 13
                  }
                }
              }
            ],
            "range": [
              194,
              206
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 14
              },
              "start": {
                "column": 13,
                "line": 12
              }
            }
          },
          "range": [
            187,
            206
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 14
            },
            "start": {
              "column": 6,
              "line": 12
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        181,
        206
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
      "type": "ExpressionStatement",
      "expression": {
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
                    "name": "fn1",
                    "optional": false,
                    "range": [
                      239,
                      242
                    ],
                    "loc": {
                      "end": {
                        "column": 7,
                        "line": 18
                      },
                      "start": {
                        "column": 4,
                        "line": 18
                      }
                    }
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "FunctionExpression",
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "deps",
                              "optional": false,
                              "range": [
                                264,
                                268
                              ],
                              "loc": {
                                "end": {
                                  "column": 33,
                                  "line": 18
                                },
                                "start": {
                                  "column": 29,
                                  "line": 18
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
                                269,
                                272
                              ],
                              "loc": {
                                "end": {
                                  "column": 37,
                                  "line": 18
                                },
                                "start": {
                                  "column": 34,
                                  "line": 18
                                }
                              }
                            },
                            "range": [
                              264,
                              272
                            ],
                            "loc": {
                              "end": {
                                "column": 37,
                                "line": 18
                              },
                              "start": {
                                "column": 29,
                                "line": 18
                              }
                            }
                          },
                          "range": [
                            257,
                            272
                          ],
                          "loc": {
                            "end": {
                              "column": 37,
                              "line": 18
                            },
                            "start": {
                              "column": 22,
                              "line": 18
                            }
                          }
                        }
                      ],
                      "range": [
                        255,
                        274
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 18
                        },
                        "start": {
                          "column": 20,
                          "line": 18
                        }
                      }
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "range": [
                      244,
                      274
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 18
                      },
                      "start": {
                        "column": 9,
                        "line": 18
                      }
                    }
                  },
                  "range": [
                    239,
                    274
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 18
                    },
                    "start": {
                      "column": 4,
                      "line": 18
                    }
                  }
                },
                {
                  "type": "Property",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "fn2",
                    "optional": false,
                    "range": [
                      280,
                      283
                    ],
                    "loc": {
                      "end": {
                        "column": 7,
                        "line": 19
                      },
                      "start": {
                        "column": 4,
                        "line": 19
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
                      "name": "data",
                      "optional": false,
                      "range": [
                        285,
                        289
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 19
                        },
                        "start": {
                          "column": 9,
                          "line": 19
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
                        290,
                        293
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 19
                        },
                        "start": {
                          "column": 14,
                          "line": 19
                        }
                      }
                    },
                    "range": [
                      285,
                      293
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 19
                      },
                      "start": {
                        "column": 9,
                        "line": 19
                      }
                    }
                  },
                  "range": [
                    280,
                    293
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 19
                    },
                    "start": {
                      "column": 4,
                      "line": 19
                    }
                  }
                }
              ],
              "range": [
                233,
                297
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 20
                },
                "start": {
                  "column": 19,
                  "line": 17
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
                "name": "deps",
                "optional": false,
                "range": [
                  217,
                  221
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 17
                  },
                  "start": {
                    "column": 3,
                    "line": 17
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "data",
                "optional": false,
                "range": [
                  223,
                  227
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 17
                  },
                  "start": {
                    "column": 9,
                    "line": 17
                  }
                }
              }
            ],
            "range": [
              216,
              298
            ],
            "loc": {
              "end": {
                "column": 4,
                "line": 20
              },
              "start": {
                "column": 2,
                "line": 17
              }
            }
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "DEPS",
            "optional": false,
            "range": [
              302,
              306
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 21
              },
              "start": {
                "column": 2,
                "line": 21
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "test",
          "optional": false,
          "range": [
            208,
            212
          ],
          "loc": {
            "end": {
              "column": 4,
              "line": 16
            },
            "start": {
              "column": 0,
              "line": 16
            }
          }
        },
        "optional": false,
        "range": [
          208,
          308
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 22
          },
          "start": {
            "column": 0,
            "line": 16
          }
        }
      },
      "range": [
        208,
        309
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 22
        },
        "start": {
          "column": 0,
          "line": 16
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
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "fn1",
                    "optional": false,
                    "range": [
                      355,
                      358
                    ],
                    "loc": {
                      "end": {
                        "column": 7,
                        "line": 26
                      },
                      "start": {
                        "column": 4,
                        "line": 26
                      }
                    }
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "FunctionExpression",
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "deps",
                              "optional": false,
                              "range": [
                                380,
                                384
                              ],
                              "loc": {
                                "end": {
                                  "column": 33,
                                  "line": 26
                                },
                                "start": {
                                  "column": 29,
                                  "line": 26
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
                                385,
                                388
                              ],
                              "loc": {
                                "end": {
                                  "column": 37,
                                  "line": 26
                                },
                                "start": {
                                  "column": 34,
                                  "line": 26
                                }
                              }
                            },
                            "range": [
                              380,
                              388
                            ],
                            "loc": {
                              "end": {
                                "column": 37,
                                "line": 26
                              },
                              "start": {
                                "column": 29,
                                "line": 26
                              }
                            }
                          },
                          "range": [
                            373,
                            388
                          ],
                          "loc": {
                            "end": {
                              "column": 37,
                              "line": 26
                            },
                            "start": {
                              "column": 22,
                              "line": 26
                            }
                          }
                        }
                      ],
                      "range": [
                        371,
                        390
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 26
                        },
                        "start": {
                          "column": 20,
                          "line": 26
                        }
                      }
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "range": [
                      360,
                      390
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 26
                      },
                      "start": {
                        "column": 9,
                        "line": 26
                      }
                    }
                  },
                  "range": [
                    355,
                    390
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 26
                    },
                    "start": {
                      "column": 4,
                      "line": 26
                    }
                  }
                },
                {
                  "type": "Property",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "fn2",
                    "optional": false,
                    "range": [
                      396,
                      399
                    ],
                    "loc": {
                      "end": {
                        "column": 7,
                        "line": 27
                      },
                      "start": {
                        "column": 4,
                        "line": 27
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
                      "name": "data",
                      "optional": false,
                      "range": [
                        401,
                        405
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
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "range": [
                        406,
                        409
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
                    },
                    "range": [
                      401,
                      409
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 27
                      },
                      "start": {
                        "column": 9,
                        "line": 27
                      }
                    }
                  },
                  "range": [
                    396,
                    409
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 27
                    },
                    "start": {
                      "column": 4,
                      "line": 27
                    }
                  }
                }
              ],
              "range": [
                349,
                413
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 28
                },
                "start": {
                  "column": 32,
                  "line": 25
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
                "name": "deps",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 25
                    },
                    "start": {
                      "column": 7,
                      "line": 25
                    }
                  },
                  "range": [
                    324,
                    337
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeQuery",
                    "exprName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "DEPS",
                      "optional": false,
                      "range": [
                        333,
                        337
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 25
                        },
                        "start": {
                          "column": 16,
                          "line": 25
                        }
                      }
                    },
                    "range": [
                      326,
                      337
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 25
                      },
                      "start": {
                        "column": 9,
                        "line": 25
                      }
                    }
                  }
                },
                "range": [
                  320,
                  337
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 25
                  },
                  "start": {
                    "column": 3,
                    "line": 25
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "data",
                "optional": false,
                "range": [
                  339,
                  343
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
            "range": [
              319,
              414
            ],
            "loc": {
              "end": {
                "column": 4,
                "line": 28
              },
              "start": {
                "column": 2,
                "line": 25
              }
            }
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "DEPS",
            "optional": false,
            "range": [
              418,
              422
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 29
              },
              "start": {
                "column": 2,
                "line": 29
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "test",
          "optional": false,
          "range": [
            311,
            315
          ],
          "loc": {
            "end": {
              "column": 4,
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
          311,
          424
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 30
          },
          "start": {
            "column": 0,
            "line": 24
          }
        }
      },
      "range": [
        311,
        425
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 30
        },
        "start": {
          "column": 0,
          "line": 24
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
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "fn1",
                    "optional": false,
                    "range": [
                      458,
                      461
                    ],
                    "loc": {
                      "end": {
                        "column": 7,
                        "line": 34
                      },
                      "start": {
                        "column": 4,
                        "line": 34
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
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "deps",
                        "optional": false,
                        "range": [
                          469,
                          473
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 34
                          },
                          "start": {
                            "column": 15,
                            "line": 34
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
                          474,
                          477
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 34
                          },
                          "start": {
                            "column": 20,
                            "line": 34
                          }
                        }
                      },
                      "range": [
                        469,
                        477
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 34
                        },
                        "start": {
                          "column": 15,
                          "line": 34
                        }
                      }
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "range": [
                      463,
                      477
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 34
                      },
                      "start": {
                        "column": 9,
                        "line": 34
                      }
                    }
                  },
                  "range": [
                    458,
                    477
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
                },
                {
                  "type": "Property",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "fn2",
                    "optional": false,
                    "range": [
                      483,
                      486
                    ],
                    "loc": {
                      "end": {
                        "column": 7,
                        "line": 35
                      },
                      "start": {
                        "column": 4,
                        "line": 35
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
                      "name": "data",
                      "optional": false,
                      "range": [
                        488,
                        492
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 35
                        },
                        "start": {
                          "column": 9,
                          "line": 35
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
                        493,
                        496
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 35
                        },
                        "start": {
                          "column": 14,
                          "line": 35
                        }
                      }
                    },
                    "range": [
                      488,
                      496
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 35
                      },
                      "start": {
                        "column": 9,
                        "line": 35
                      }
                    }
                  },
                  "range": [
                    483,
                    496
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 35
                    },
                    "start": {
                      "column": 4,
                      "line": 35
                    }
                  }
                }
              ],
              "range": [
                452,
                500
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 36
                },
                "start": {
                  "column": 19,
                  "line": 33
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
                "name": "deps",
                "optional": false,
                "range": [
                  436,
                  440
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 33
                  },
                  "start": {
                    "column": 3,
                    "line": 33
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "data",
                "optional": false,
                "range": [
                  442,
                  446
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 33
                  },
                  "start": {
                    "column": 9,
                    "line": 33
                  }
                }
              }
            ],
            "range": [
              435,
              501
            ],
            "loc": {
              "end": {
                "column": 4,
                "line": 36
              },
              "start": {
                "column": 2,
                "line": 33
              }
            }
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "DEPS",
            "optional": false,
            "range": [
              505,
              509
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 37
              },
              "start": {
                "column": 2,
                "line": 37
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "test",
          "optional": false,
          "range": [
            427,
            431
          ],
          "loc": {
            "end": {
              "column": 4,
              "line": 32
            },
            "start": {
              "column": 0,
              "line": 32
            }
          }
        },
        "optional": false,
        "range": [
          427,
          511
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 38
          },
          "start": {
            "column": 0,
            "line": 32
          }
        }
      },
      "range": [
        427,
        512
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 38
        },
        "start": {
          "column": 0,
          "line": 32
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
                  "argument": {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "fn1",
                          "optional": false,
                          "range": [
                            559,
                            562
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 43
                            },
                            "start": {
                              "column": 6,
                              "line": 43
                            }
                          }
                        },
                        "kind": "init",
                        "method": true,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "FunctionExpression",
                          "range": [
                            562,
                            584
                          ],
                          "async": false,
                          "body": {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "ReturnStatement",
                                "argument": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "deps",
                                    "optional": false,
                                    "range": [
                                      574,
                                      578
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 25,
                                        "line": 43
                                      },
                                      "start": {
                                        "column": 21,
                                        "line": 43
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
                                      579,
                                      582
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 29,
                                        "line": 43
                                      },
                                      "start": {
                                        "column": 26,
                                        "line": 43
                                      }
                                    }
                                  },
                                  "range": [
                                    574,
                                    582
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 29,
                                      "line": 43
                                    },
                                    "start": {
                                      "column": 21,
                                      "line": 43
                                    }
                                  }
                                },
                                "range": [
                                  567,
                                  582
                                ],
                                "loc": {
                                  "end": {
                                    "column": 29,
                                    "line": 43
                                  },
                                  "start": {
                                    "column": 14,
                                    "line": 43
                                  }
                                }
                              }
                            ],
                            "range": [
                              565,
                              584
                            ],
                            "loc": {
                              "end": {
                                "column": 31,
                                "line": 43
                              },
                              "start": {
                                "column": 12,
                                "line": 43
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
                              "column": 31,
                              "line": 43
                            },
                            "start": {
                              "column": 9,
                              "line": 43
                            }
                          }
                        },
                        "range": [
                          559,
                          584
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 43
                          },
                          "start": {
                            "column": 6,
                            "line": 43
                          }
                        }
                      },
                      {
                        "type": "Property",
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "fn2",
                          "optional": false,
                          "range": [
                            592,
                            595
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 44
                            },
                            "start": {
                              "column": 6,
                              "line": 44
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
                            "name": "data",
                            "optional": false,
                            "range": [
                              597,
                              601
                            ],
                            "loc": {
                              "end": {
                                "column": 15,
                                "line": 44
                              },
                              "start": {
                                "column": 11,
                                "line": 44
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
                              602,
                              605
                            ],
                            "loc": {
                              "end": {
                                "column": 19,
                                "line": 44
                              },
                              "start": {
                                "column": 16,
                                "line": 44
                              }
                            }
                          },
                          "range": [
                            597,
                            605
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 44
                            },
                            "start": {
                              "column": 11,
                              "line": 44
                            }
                          }
                        },
                        "range": [
                          592,
                          605
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 44
                          },
                          "start": {
                            "column": 6,
                            "line": 44
                          }
                        }
                      }
                    ],
                    "range": [
                      551,
                      611
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 45
                      },
                      "start": {
                        "column": 11,
                        "line": 42
                      }
                    }
                  },
                  "range": [
                    544,
                    611
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 45
                    },
                    "start": {
                      "column": 4,
                      "line": 42
                    }
                  }
                }
              ],
              "range": [
                538,
                615
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 46
                },
                "start": {
                  "column": 18,
                  "line": 41
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
                "name": "deps",
                "optional": false,
                "range": [
                  523,
                  527
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 41
                  },
                  "start": {
                    "column": 3,
                    "line": 41
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "data",
                "optional": false,
                "range": [
                  529,
                  533
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 41
                  },
                  "start": {
                    "column": 9,
                    "line": 41
                  }
                }
              }
            ],
            "range": [
              522,
              615
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 46
              },
              "start": {
                "column": 2,
                "line": 41
              }
            }
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "DEPS",
            "optional": false,
            "range": [
              619,
              623
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 47
              },
              "start": {
                "column": 2,
                "line": 47
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "test",
          "optional": false,
          "range": [
            514,
            518
          ],
          "loc": {
            "end": {
              "column": 4,
              "line": 40
            },
            "start": {
              "column": 0,
              "line": 40
            }
          }
        },
        "optional": false,
        "range": [
          514,
          625
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 48
          },
          "start": {
            "column": 0,
            "line": 40
          }
        }
      },
      "range": [
        514,
        626
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 48
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
                    "name": "fn1",
                    "optional": false,
                    "range": [
                      653,
                      656
                    ],
                    "loc": {
                      "end": {
                        "column": 7,
                        "line": 52
                      },
                      "start": {
                        "column": 4,
                        "line": 52
                      }
                    }
                  },
                  "kind": "init",
                  "method": true,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "FunctionExpression",
                    "range": [
                      656,
                      678
                    ],
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "deps",
                              "optional": false,
                              "range": [
                                668,
                                672
                              ],
                              "loc": {
                                "end": {
                                  "column": 23,
                                  "line": 52
                                },
                                "start": {
                                  "column": 19,
                                  "line": 52
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
                                673,
                                676
                              ],
                              "loc": {
                                "end": {
                                  "column": 27,
                                  "line": 52
                                },
                                "start": {
                                  "column": 24,
                                  "line": 52
                                }
                              }
                            },
                            "range": [
                              668,
                              676
                            ],
                            "loc": {
                              "end": {
                                "column": 27,
                                "line": 52
                              },
                              "start": {
                                "column": 19,
                                "line": 52
                              }
                            }
                          },
                          "range": [
                            661,
                            676
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 52
                            },
                            "start": {
                              "column": 12,
                              "line": 52
                            }
                          }
                        }
                      ],
                      "range": [
                        659,
                        678
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 52
                        },
                        "start": {
                          "column": 10,
                          "line": 52
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
                        "column": 29,
                        "line": 52
                      },
                      "start": {
                        "column": 7,
                        "line": 52
                      }
                    }
                  },
                  "range": [
                    653,
                    678
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 52
                    },
                    "start": {
                      "column": 4,
                      "line": 52
                    }
                  }
                },
                {
                  "type": "Property",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "fn2",
                    "optional": false,
                    "range": [
                      684,
                      687
                    ],
                    "loc": {
                      "end": {
                        "column": 7,
                        "line": 53
                      },
                      "start": {
                        "column": 4,
                        "line": 53
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
                      689,
                      690
                    ],
                    "loc": {
                      "end": {
                        "column": 10,
                        "line": 53
                      },
                      "start": {
                        "column": 9,
                        "line": 53
                      }
                    }
                  },
                  "range": [
                    684,
                    690
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 53
                    },
                    "start": {
                      "column": 4,
                      "line": 53
                    }
                  }
                }
              ],
              "range": [
                647,
                694
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 54
                },
                "start": {
                  "column": 13,
                  "line": 51
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
                "name": "deps",
                "optional": false,
                "range": [
                  637,
                  641
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 51
                  },
                  "start": {
                    "column": 3,
                    "line": 51
                  }
                }
              }
            ],
            "range": [
              636,
              695
            ],
            "loc": {
              "end": {
                "column": 4,
                "line": 54
              },
              "start": {
                "column": 2,
                "line": 51
              }
            }
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "DEPS",
            "optional": false,
            "range": [
              699,
              703
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 55
              },
              "start": {
                "column": 2,
                "line": 55
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "test",
          "optional": false,
          "range": [
            628,
            632
          ],
          "loc": {
            "end": {
              "column": 4,
              "line": 50
            },
            "start": {
              "column": 0,
              "line": 50
            }
          }
        },
        "optional": false,
        "range": [
          628,
          705
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 56
          },
          "start": {
            "column": 0,
            "line": 50
          }
        }
      },
      "range": [
        628,
        706
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 56
        },
        "start": {
          "column": 0,
          "line": 50
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 57
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
