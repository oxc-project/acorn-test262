__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    339
  ],
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          22,
          152
        ],
        "body": [
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "then",
              "optional": false,
              "range": [
                28,
                32
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 2
                },
                "start": {
                  "column": 4,
                  "line": 2
                }
              }
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "successCallback",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 63,
                      "line": 2
                    },
                    "start": {
                      "column": 33,
                      "line": 2
                    }
                  },
                  "range": [
                    57,
                    87
                  ],
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "promiseValue",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 51,
                              "line": 2
                            },
                            "start": {
                              "column": 48,
                              "line": 2
                            }
                          },
                          "range": [
                            72,
                            75
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "range": [
                                74,
                                75
                              ],
                              "loc": {
                                "end": {
                                  "column": 51,
                                  "line": 2
                                },
                                "start": {
                                  "column": 50,
                                  "line": 2
                                }
                              }
                            },
                            "range": [
                              74,
                              75
                            ],
                            "loc": {
                              "end": {
                                "column": 51,
                                "line": 2
                              },
                              "start": {
                                "column": 50,
                                "line": 2
                              }
                            }
                          }
                        },
                        "range": [
                          60,
                          75
                        ],
                        "loc": {
                          "end": {
                            "column": 51,
                            "line": 2
                          },
                          "start": {
                            "column": 36,
                            "line": 2
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 63,
                          "line": 2
                        },
                        "start": {
                          "column": 53,
                          "line": 2
                        }
                      },
                      "range": [
                        77,
                        87
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TResult",
                          "optional": false,
                          "range": [
                            80,
                            87
                          ],
                          "loc": {
                            "end": {
                              "column": 63,
                              "line": 2
                            },
                            "start": {
                              "column": 56,
                              "line": 2
                            }
                          }
                        },
                        "range": [
                          80,
                          87
                        ],
                        "loc": {
                          "end": {
                            "column": 63,
                            "line": 2
                          },
                          "start": {
                            "column": 56,
                            "line": 2
                          }
                        }
                      }
                    },
                    "range": [
                      59,
                      87
                    ],
                    "loc": {
                      "end": {
                        "column": 63,
                        "line": 2
                      },
                      "start": {
                        "column": 35,
                        "line": 2
                      }
                    }
                  }
                },
                "range": [
                  42,
                  87
                ],
                "loc": {
                  "end": {
                    "column": 63,
                    "line": 2
                  },
                  "start": {
                    "column": 18,
                    "line": 2
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "errorCallback",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 105,
                      "line": 2
                    },
                    "start": {
                      "column": 79,
                      "line": 2
                    }
                  },
                  "range": [
                    103,
                    129
                  ],
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "reason",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 93,
                              "line": 2
                            },
                            "start": {
                              "column": 88,
                              "line": 2
                            }
                          },
                          "range": [
                            112,
                            117
                          ],
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "range": [
                              114,
                              117
                            ],
                            "loc": {
                              "end": {
                                "column": 93,
                                "line": 2
                              },
                              "start": {
                                "column": 90,
                                "line": 2
                              }
                            }
                          }
                        },
                        "range": [
                          106,
                          117
                        ],
                        "loc": {
                          "end": {
                            "column": 93,
                            "line": 2
                          },
                          "start": {
                            "column": 82,
                            "line": 2
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 105,
                          "line": 2
                        },
                        "start": {
                          "column": 95,
                          "line": 2
                        }
                      },
                      "range": [
                        119,
                        129
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TResult",
                          "optional": false,
                          "range": [
                            122,
                            129
                          ],
                          "loc": {
                            "end": {
                              "column": 105,
                              "line": 2
                            },
                            "start": {
                              "column": 98,
                              "line": 2
                            }
                          }
                        },
                        "range": [
                          122,
                          129
                        ],
                        "loc": {
                          "end": {
                            "column": 105,
                            "line": 2
                          },
                          "start": {
                            "column": 98,
                            "line": 2
                          }
                        }
                      }
                    },
                    "range": [
                      105,
                      129
                    ],
                    "loc": {
                      "end": {
                        "column": 105,
                        "line": 2
                      },
                      "start": {
                        "column": 81,
                        "line": 2
                      }
                    }
                  }
                },
                "range": [
                  89,
                  129
                ],
                "loc": {
                  "end": {
                    "column": 105,
                    "line": 2
                  },
                  "start": {
                    "column": 65,
                    "line": 2
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 125,
                  "line": 2
                },
                "start": {
                  "column": 106,
                  "line": 2
                }
              },
              "range": [
                130,
                149
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    140,
                    149
                  ],
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TResult",
                        "optional": false,
                        "range": [
                          141,
                          148
                        ],
                        "loc": {
                          "end": {
                            "column": 124,
                            "line": 2
                          },
                          "start": {
                            "column": 117,
                            "line": 2
                          }
                        }
                      },
                      "range": [
                        141,
                        148
                      ],
                      "loc": {
                        "end": {
                          "column": 124,
                          "line": 2
                        },
                        "start": {
                          "column": 117,
                          "line": 2
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 125,
                      "line": 2
                    },
                    "start": {
                      "column": 116,
                      "line": 2
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IPromise",
                  "optional": false,
                  "range": [
                    132,
                    140
                  ],
                  "loc": {
                    "end": {
                      "column": 116,
                      "line": 2
                    },
                    "start": {
                      "column": 108,
                      "line": 2
                    }
                  }
                },
                "range": [
                  132,
                  149
                ],
                "loc": {
                  "end": {
                    "column": 125,
                    "line": 2
                  },
                  "start": {
                    "column": 108,
                    "line": 2
                  }
                }
              }
            },
            "static": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 17,
                  "line": 2
                },
                "start": {
                  "column": 8,
                  "line": 2
                }
              },
              "range": [
                32,
                41
              ],
              "params": [
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TResult",
                    "optional": false,
                    "range": [
                      33,
                      40
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 2
                      },
                      "start": {
                        "column": 9,
                        "line": 2
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    33,
                    40
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 2
                    },
                    "start": {
                      "column": 9,
                      "line": 2
                    }
                  }
                }
              ]
            },
            "range": [
              28,
              150
            ],
            "loc": {
              "end": {
                "column": 126,
                "line": 2
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 3
          },
          "start": {
            "column": 22,
            "line": 1
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IPromise",
        "optional": false,
        "range": [
          10,
          18
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 1
          },
          "start": {
            "column": 10,
            "line": 1
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 21,
            "line": 1
          },
          "start": {
            "column": 18,
            "line": 1
          }
        },
        "range": [
          18,
          21
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
                19,
                20
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 1
                },
                "start": {
                  "column": 19,
                  "line": 1
                }
              }
            },
            "out": false,
            "range": [
              19,
              20
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 1
              },
              "start": {
                "column": 19,
                "line": 1
              }
            }
          }
        ]
      },
      "range": [
        0,
        152
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 3
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
            "name": "foo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 25,
                  "line": 5
                },
                "start": {
                  "column": 7,
                  "line": 5
                }
              },
              "range": [
                161,
                179
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    171,
                    179
                  ],
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "range": [
                        172,
                        178
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 5
                        },
                        "start": {
                          "column": 18,
                          "line": 5
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 5
                    },
                    "start": {
                      "column": 17,
                      "line": 5
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IPromise",
                  "optional": false,
                  "range": [
                    163,
                    171
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 5
                    },
                    "start": {
                      "column": 9,
                      "line": 5
                    }
                  }
                },
                "range": [
                  163,
                  179
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 5
                  },
                  "start": {
                    "column": 9,
                    "line": 5
                  }
                }
              }
            },
            "range": [
              158,
              179
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 5
              },
              "start": {
                "column": 4,
                "line": 5
              }
            }
          },
          "init": null,
          "range": [
            158,
            179
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 5
            },
            "start": {
              "column": 4,
              "line": 5
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        154,
        180
      ],
      "loc": {
        "end": {
          "column": 26,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 5
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
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        309,
                        310
                      ],
                      "loc": {
                        "end": {
                          "column": 5,
                          "line": 11
                        },
                        "start": {
                          "column": 4,
                          "line": 11
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "length",
                      "optional": false,
                      "range": [
                        311,
                        317
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 11
                        },
                        "start": {
                          "column": 6,
                          "line": 11
                        }
                      }
                    },
                    "range": [
                      309,
                      317
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 11
                      },
                      "start": {
                        "column": 4,
                        "line": 11
                      }
                    }
                  },
                  "range": [
                    309,
                    318
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 11
                    },
                    "start": {
                      "column": 4,
                      "line": 11
                    }
                  }
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "raw": "123",
                    "value": 123,
                    "range": [
                      330,
                      333
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 12
                      },
                      "start": {
                        "column": 11,
                        "line": 12
                      }
                    }
                  },
                  "range": [
                    323,
                    334
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
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
                269,
                336
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 13
                },
                "start": {
                  "column": 15,
                  "line": 9
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
                "name": "x",
                "optional": false,
                "range": [
                  263,
                  264
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 9
                  },
                  "start": {
                    "column": 9,
                    "line": 9
                  }
                }
              }
            ],
            "range": [
              262,
              336
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 13
              },
              "start": {
                "column": 8,
                "line": 9
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
                "type": "ArrowFunctionExpression",
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Literal",
                        "raw": "\"asdf\"",
                        "value": "asdf",
                        "range": [
                          246,
                          252
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 8
                          },
                          "start": {
                            "column": 11,
                            "line": 8
                          }
                        }
                      },
                      "range": [
                        239,
                        253
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
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
                    197,
                    255
                  ],
                  "loc": {
                    "end": {
                      "column": 1,
                      "line": 9
                    },
                    "start": {
                      "column": 16,
                      "line": 6
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
                    "name": "x",
                    "optional": false,
                    "range": [
                      191,
                      192
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 6
                      },
                      "start": {
                        "column": 10,
                        "line": 6
                      }
                    }
                  }
                ],
                "range": [
                  190,
                  255
                ],
                "loc": {
                  "end": {
                    "column": 1,
                    "line": 9
                  },
                  "start": {
                    "column": 9,
                    "line": 6
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
                "name": "foo",
                "optional": false,
                "range": [
                  181,
                  184
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 6
                  },
                  "start": {
                    "column": 0,
                    "line": 6
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "range": [
                  185,
                  189
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 6
                  },
                  "start": {
                    "column": 4,
                    "line": 6
                  }
                }
              },
              "range": [
                181,
                189
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 6
                },
                "start": {
                  "column": 0,
                  "line": 6
                }
              }
            },
            "optional": false,
            "range": [
              181,
              256
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 9
              },
              "start": {
                "column": 0,
                "line": 6
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "then",
            "optional": false,
            "range": [
              257,
              261
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 9
              },
              "start": {
                "column": 3,
                "line": 9
              }
            }
          },
          "range": [
            181,
            261
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 9
            },
            "start": {
              "column": 0,
              "line": 6
            }
          }
        },
        "optional": false,
        "range": [
          181,
          337
        ],
        "loc": {
          "end": {
            "column": 2,
            "line": 13
          },
          "start": {
            "column": 0,
            "line": 6
          }
        }
      },
      "range": [
        181,
        338
      ],
      "loc": {
        "end": {
          "column": 3,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 6
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
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
