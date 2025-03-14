__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    409
  ],
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          21,
          109
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
                27,
                31
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
                "name": "onFulfill",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 2
                    },
                    "start": {
                      "column": 22,
                      "line": 2
                    }
                  },
                  "range": [
                    45,
                    62
                  ],
                  "typeAnnotation": {
                    "type": "TSFunctionType",
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
                              "column": 33,
                              "line": 2
                            },
                            "start": {
                              "column": 30,
                              "line": 2
                            }
                          },
                          "range": [
                            53,
                            56
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "range": [
                                55,
                                56
                              ],
                              "loc": {
                                "end": {
                                  "column": 33,
                                  "line": 2
                                },
                                "start": {
                                  "column": 32,
                                  "line": 2
                                }
                              }
                            },
                            "range": [
                              55,
                              56
                            ],
                            "loc": {
                              "end": {
                                "column": 33,
                                "line": 2
                              },
                              "start": {
                                "column": 32,
                                "line": 2
                              }
                            }
                          }
                        },
                        "range": [
                          48,
                          56
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 2
                          },
                          "start": {
                            "column": 25,
                            "line": 2
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 2
                        },
                        "start": {
                          "column": 35,
                          "line": 2
                        }
                      },
                      "range": [
                        58,
                        62
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "range": [
                            61,
                            62
                          ],
                          "loc": {
                            "end": {
                              "column": 39,
                              "line": 2
                            },
                            "start": {
                              "column": 38,
                              "line": 2
                            }
                          }
                        },
                        "range": [
                          61,
                          62
                        ],
                        "loc": {
                          "end": {
                            "column": 39,
                            "line": 2
                          },
                          "start": {
                            "column": 38,
                            "line": 2
                          }
                        }
                      }
                    },
                    "range": [
                      47,
                      62
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 2
                      },
                      "start": {
                        "column": 24,
                        "line": 2
                      }
                    }
                  }
                },
                "range": [
                  35,
                  62
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 2
                  },
                  "start": {
                    "column": 12,
                    "line": 2
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "onReject",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 70,
                      "line": 2
                    },
                    "start": {
                      "column": 50,
                      "line": 2
                    }
                  },
                  "range": [
                    73,
                    93
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
                              "column": 64,
                              "line": 2
                            },
                            "start": {
                              "column": 59,
                              "line": 2
                            }
                          },
                          "range": [
                            82,
                            87
                          ],
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "range": [
                              84,
                              87
                            ],
                            "loc": {
                              "end": {
                                "column": 64,
                                "line": 2
                              },
                              "start": {
                                "column": 61,
                                "line": 2
                              }
                            }
                          }
                        },
                        "range": [
                          76,
                          87
                        ],
                        "loc": {
                          "end": {
                            "column": 64,
                            "line": 2
                          },
                          "start": {
                            "column": 53,
                            "line": 2
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 70,
                          "line": 2
                        },
                        "start": {
                          "column": 66,
                          "line": 2
                        }
                      },
                      "range": [
                        89,
                        93
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "range": [
                            92,
                            93
                          ],
                          "loc": {
                            "end": {
                              "column": 70,
                              "line": 2
                            },
                            "start": {
                              "column": 69,
                              "line": 2
                            }
                          }
                        },
                        "range": [
                          92,
                          93
                        ],
                        "loc": {
                          "end": {
                            "column": 70,
                            "line": 2
                          },
                          "start": {
                            "column": 69,
                            "line": 2
                          }
                        }
                      }
                    },
                    "range": [
                      75,
                      93
                    ],
                    "loc": {
                      "end": {
                        "column": 70,
                        "line": 2
                      },
                      "start": {
                        "column": 52,
                        "line": 2
                      }
                    }
                  }
                },
                "range": [
                  64,
                  93
                ],
                "loc": {
                  "end": {
                    "column": 70,
                    "line": 2
                  },
                  "start": {
                    "column": 41,
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
                  "column": 83,
                  "line": 2
                },
                "start": {
                  "column": 71,
                  "line": 2
                }
              },
              "range": [
                94,
                106
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    103,
                    106
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
                          104,
                          105
                        ],
                        "loc": {
                          "end": {
                            "column": 82,
                            "line": 2
                          },
                          "start": {
                            "column": 81,
                            "line": 2
                          }
                        }
                      },
                      "range": [
                        104,
                        105
                      ],
                      "loc": {
                        "end": {
                          "column": 82,
                          "line": 2
                        },
                        "start": {
                          "column": 81,
                          "line": 2
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 83,
                      "line": 2
                    },
                    "start": {
                      "column": 80,
                      "line": 2
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "range": [
                    96,
                    103
                  ],
                  "loc": {
                    "end": {
                      "column": 80,
                      "line": 2
                    },
                    "start": {
                      "column": 73,
                      "line": 2
                    }
                  }
                },
                "range": [
                  96,
                  106
                ],
                "loc": {
                  "end": {
                    "column": 83,
                    "line": 2
                  },
                  "start": {
                    "column": 73,
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
                  "column": 11,
                  "line": 2
                },
                "start": {
                  "column": 8,
                  "line": 2
                }
              },
              "range": [
                31,
                34
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
                      32,
                      33
                    ],
                    "loc": {
                      "end": {
                        "column": 10,
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
                    32,
                    33
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
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
              27,
              107
            ],
            "loc": {
              "end": {
                "column": 84,
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
            "column": 21,
            "line": 1
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Promise",
        "optional": false,
        "range": [
          10,
          17
        ],
        "loc": {
          "end": {
            "column": 17,
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
            "column": 20,
            "line": 1
          },
          "start": {
            "column": 17,
            "line": 1
          }
        },
        "range": [
          17,
          20
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
                18,
                19
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 1
                },
                "start": {
                  "column": 18,
                  "line": 1
                }
              }
            },
            "out": false,
            "range": [
              18,
              19
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 1
              },
              "start": {
                "column": 18,
                "line": 1
              }
            }
          }
        ]
      },
      "range": [
        0,
        109
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
            "name": "a",
            "optional": false,
            "range": [
              116,
              117
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 5
              },
              "start": {
                "column": 4,
                "line": 5
              }
            }
          },
          "init": {
            "type": "FunctionExpression",
            "async": false,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "raw": "null",
                    "value": null,
                    "range": [
                      223,
                      227
                    ],
                    "loc": {
                      "end": {
                        "column": 115,
                        "line": 5
                      },
                      "start": {
                        "column": 111,
                        "line": 5
                      }
                    }
                  },
                  "range": [
                    216,
                    227
                  ],
                  "loc": {
                    "end": {
                      "column": 115,
                      "line": 5
                    },
                    "start": {
                      "column": 104,
                      "line": 5
                    }
                  }
                }
              ],
              "range": [
                214,
                229
              ],
              "loc": {
                "end": {
                  "column": 117,
                  "line": 5
                },
                "start": {
                  "column": 102,
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
              "name": "then",
              "optional": false,
              "range": [
                129,
                133
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 5
                },
                "start": {
                  "column": 17,
                  "line": 5
                }
              }
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "onFulfill",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 57,
                      "line": 5
                    },
                    "start": {
                      "column": 35,
                      "line": 5
                    }
                  },
                  "range": [
                    147,
                    169
                  ],
                  "typeAnnotation": {
                    "type": "TSFunctionType",
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
                              "column": 51,
                              "line": 5
                            },
                            "start": {
                              "column": 43,
                              "line": 5
                            }
                          },
                          "range": [
                            155,
                            163
                          ],
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "range": [
                              157,
                              163
                            ],
                            "loc": {
                              "end": {
                                "column": 51,
                                "line": 5
                              },
                              "start": {
                                "column": 45,
                                "line": 5
                              }
                            }
                          }
                        },
                        "range": [
                          150,
                          163
                        ],
                        "loc": {
                          "end": {
                            "column": 51,
                            "line": 5
                          },
                          "start": {
                            "column": 38,
                            "line": 5
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 57,
                          "line": 5
                        },
                        "start": {
                          "column": 53,
                          "line": 5
                        }
                      },
                      "range": [
                        165,
                        169
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "range": [
                            168,
                            169
                          ],
                          "loc": {
                            "end": {
                              "column": 57,
                              "line": 5
                            },
                            "start": {
                              "column": 56,
                              "line": 5
                            }
                          }
                        },
                        "range": [
                          168,
                          169
                        ],
                        "loc": {
                          "end": {
                            "column": 57,
                            "line": 5
                          },
                          "start": {
                            "column": 56,
                            "line": 5
                          }
                        }
                      }
                    },
                    "range": [
                      149,
                      169
                    ],
                    "loc": {
                      "end": {
                        "column": 57,
                        "line": 5
                      },
                      "start": {
                        "column": 37,
                        "line": 5
                      }
                    }
                  }
                },
                "range": [
                  137,
                  169
                ],
                "loc": {
                  "end": {
                    "column": 57,
                    "line": 5
                  },
                  "start": {
                    "column": 25,
                    "line": 5
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "onReject",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 88,
                      "line": 5
                    },
                    "start": {
                      "column": 68,
                      "line": 5
                    }
                  },
                  "range": [
                    180,
                    200
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
                              "column": 82,
                              "line": 5
                            },
                            "start": {
                              "column": 77,
                              "line": 5
                            }
                          },
                          "range": [
                            189,
                            194
                          ],
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "range": [
                              191,
                              194
                            ],
                            "loc": {
                              "end": {
                                "column": 82,
                                "line": 5
                              },
                              "start": {
                                "column": 79,
                                "line": 5
                              }
                            }
                          }
                        },
                        "range": [
                          183,
                          194
                        ],
                        "loc": {
                          "end": {
                            "column": 82,
                            "line": 5
                          },
                          "start": {
                            "column": 71,
                            "line": 5
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 88,
                          "line": 5
                        },
                        "start": {
                          "column": 84,
                          "line": 5
                        }
                      },
                      "range": [
                        196,
                        200
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "range": [
                            199,
                            200
                          ],
                          "loc": {
                            "end": {
                              "column": 88,
                              "line": 5
                            },
                            "start": {
                              "column": 87,
                              "line": 5
                            }
                          }
                        },
                        "range": [
                          199,
                          200
                        ],
                        "loc": {
                          "end": {
                            "column": 88,
                            "line": 5
                          },
                          "start": {
                            "column": 87,
                            "line": 5
                          }
                        }
                      }
                    },
                    "range": [
                      182,
                      200
                    ],
                    "loc": {
                      "end": {
                        "column": 88,
                        "line": 5
                      },
                      "start": {
                        "column": 70,
                        "line": 5
                      }
                    }
                  }
                },
                "range": [
                  171,
                  200
                ],
                "loc": {
                  "end": {
                    "column": 88,
                    "line": 5
                  },
                  "start": {
                    "column": 59,
                    "line": 5
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 101,
                  "line": 5
                },
                "start": {
                  "column": 89,
                  "line": 5
                }
              },
              "range": [
                201,
                213
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    210,
                    213
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
                          211,
                          212
                        ],
                        "loc": {
                          "end": {
                            "column": 100,
                            "line": 5
                          },
                          "start": {
                            "column": 99,
                            "line": 5
                          }
                        }
                      },
                      "range": [
                        211,
                        212
                      ],
                      "loc": {
                        "end": {
                          "column": 100,
                          "line": 5
                        },
                        "start": {
                          "column": 99,
                          "line": 5
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 101,
                      "line": 5
                    },
                    "start": {
                      "column": 98,
                      "line": 5
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "range": [
                    203,
                    210
                  ],
                  "loc": {
                    "end": {
                      "column": 98,
                      "line": 5
                    },
                    "start": {
                      "column": 91,
                      "line": 5
                    }
                  }
                },
                "range": [
                  203,
                  213
                ],
                "loc": {
                  "end": {
                    "column": 101,
                    "line": 5
                  },
                  "start": {
                    "column": 91,
                    "line": 5
                  }
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 24,
                  "line": 5
                },
                "start": {
                  "column": 21,
                  "line": 5
                }
              },
              "range": [
                133,
                136
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
                      134,
                      135
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 5
                      },
                      "start": {
                        "column": 22,
                        "line": 5
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    134,
                    135
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 5
                    },
                    "start": {
                      "column": 22,
                      "line": 5
                    }
                  }
                }
              ]
            },
            "range": [
              120,
              229
            ],
            "loc": {
              "end": {
                "column": 117,
                "line": 5
              },
              "start": {
                "column": 8,
                "line": 5
              }
            }
          },
          "range": [
            116,
            229
          ],
          "loc": {
            "end": {
              "column": 117,
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
        112,
        230
      ],
      "loc": {
        "end": {
          "column": 118,
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
            "name": "b",
            "optional": false,
            "range": [
              235,
              236
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 6
              },
              "start": {
                "column": 4,
                "line": 6
              }
            }
          },
          "init": {
            "type": "FunctionExpression",
            "async": false,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "raw": "null",
                    "value": null,
                    "range": [
                      342,
                      346
                    ],
                    "loc": {
                      "end": {
                        "column": 115,
                        "line": 6
                      },
                      "start": {
                        "column": 111,
                        "line": 6
                      }
                    }
                  },
                  "range": [
                    335,
                    346
                  ],
                  "loc": {
                    "end": {
                      "column": 115,
                      "line": 6
                    },
                    "start": {
                      "column": 104,
                      "line": 6
                    }
                  }
                }
              ],
              "range": [
                333,
                348
              ],
              "loc": {
                "end": {
                  "column": 117,
                  "line": 6
                },
                "start": {
                  "column": 102,
                  "line": 6
                }
              }
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "then",
              "optional": false,
              "range": [
                248,
                252
              ],
              "loc": {
                "end": {
                  "column": 21,
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
                "name": "onFulFill",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 57,
                      "line": 6
                    },
                    "start": {
                      "column": 35,
                      "line": 6
                    }
                  },
                  "range": [
                    266,
                    288
                  ],
                  "typeAnnotation": {
                    "type": "TSFunctionType",
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
                              "column": 51,
                              "line": 6
                            },
                            "start": {
                              "column": 43,
                              "line": 6
                            }
                          },
                          "range": [
                            274,
                            282
                          ],
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "range": [
                              276,
                              282
                            ],
                            "loc": {
                              "end": {
                                "column": 51,
                                "line": 6
                              },
                              "start": {
                                "column": 45,
                                "line": 6
                              }
                            }
                          }
                        },
                        "range": [
                          269,
                          282
                        ],
                        "loc": {
                          "end": {
                            "column": 51,
                            "line": 6
                          },
                          "start": {
                            "column": 38,
                            "line": 6
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 57,
                          "line": 6
                        },
                        "start": {
                          "column": 53,
                          "line": 6
                        }
                      },
                      "range": [
                        284,
                        288
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "range": [
                            287,
                            288
                          ],
                          "loc": {
                            "end": {
                              "column": 57,
                              "line": 6
                            },
                            "start": {
                              "column": 56,
                              "line": 6
                            }
                          }
                        },
                        "range": [
                          287,
                          288
                        ],
                        "loc": {
                          "end": {
                            "column": 57,
                            "line": 6
                          },
                          "start": {
                            "column": 56,
                            "line": 6
                          }
                        }
                      }
                    },
                    "range": [
                      268,
                      288
                    ],
                    "loc": {
                      "end": {
                        "column": 57,
                        "line": 6
                      },
                      "start": {
                        "column": 37,
                        "line": 6
                      }
                    }
                  }
                },
                "range": [
                  256,
                  288
                ],
                "loc": {
                  "end": {
                    "column": 57,
                    "line": 6
                  },
                  "start": {
                    "column": 25,
                    "line": 6
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "onReject",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 88,
                      "line": 6
                    },
                    "start": {
                      "column": 68,
                      "line": 6
                    }
                  },
                  "range": [
                    299,
                    319
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
                              "column": 82,
                              "line": 6
                            },
                            "start": {
                              "column": 77,
                              "line": 6
                            }
                          },
                          "range": [
                            308,
                            313
                          ],
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "range": [
                              310,
                              313
                            ],
                            "loc": {
                              "end": {
                                "column": 82,
                                "line": 6
                              },
                              "start": {
                                "column": 79,
                                "line": 6
                              }
                            }
                          }
                        },
                        "range": [
                          302,
                          313
                        ],
                        "loc": {
                          "end": {
                            "column": 82,
                            "line": 6
                          },
                          "start": {
                            "column": 71,
                            "line": 6
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 88,
                          "line": 6
                        },
                        "start": {
                          "column": 84,
                          "line": 6
                        }
                      },
                      "range": [
                        315,
                        319
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "range": [
                            318,
                            319
                          ],
                          "loc": {
                            "end": {
                              "column": 88,
                              "line": 6
                            },
                            "start": {
                              "column": 87,
                              "line": 6
                            }
                          }
                        },
                        "range": [
                          318,
                          319
                        ],
                        "loc": {
                          "end": {
                            "column": 88,
                            "line": 6
                          },
                          "start": {
                            "column": 87,
                            "line": 6
                          }
                        }
                      }
                    },
                    "range": [
                      301,
                      319
                    ],
                    "loc": {
                      "end": {
                        "column": 88,
                        "line": 6
                      },
                      "start": {
                        "column": 70,
                        "line": 6
                      }
                    }
                  }
                },
                "range": [
                  290,
                  319
                ],
                "loc": {
                  "end": {
                    "column": 88,
                    "line": 6
                  },
                  "start": {
                    "column": 59,
                    "line": 6
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 101,
                  "line": 6
                },
                "start": {
                  "column": 89,
                  "line": 6
                }
              },
              "range": [
                320,
                332
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    329,
                    332
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
                          330,
                          331
                        ],
                        "loc": {
                          "end": {
                            "column": 100,
                            "line": 6
                          },
                          "start": {
                            "column": 99,
                            "line": 6
                          }
                        }
                      },
                      "range": [
                        330,
                        331
                      ],
                      "loc": {
                        "end": {
                          "column": 100,
                          "line": 6
                        },
                        "start": {
                          "column": 99,
                          "line": 6
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 101,
                      "line": 6
                    },
                    "start": {
                      "column": 98,
                      "line": 6
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "range": [
                    322,
                    329
                  ],
                  "loc": {
                    "end": {
                      "column": 98,
                      "line": 6
                    },
                    "start": {
                      "column": 91,
                      "line": 6
                    }
                  }
                },
                "range": [
                  322,
                  332
                ],
                "loc": {
                  "end": {
                    "column": 101,
                    "line": 6
                  },
                  "start": {
                    "column": 91,
                    "line": 6
                  }
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 24,
                  "line": 6
                },
                "start": {
                  "column": 21,
                  "line": 6
                }
              },
              "range": [
                252,
                255
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
                      253,
                      254
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 6
                      },
                      "start": {
                        "column": 22,
                        "line": 6
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    253,
                    254
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 6
                    },
                    "start": {
                      "column": 22,
                      "line": 6
                    }
                  }
                }
              ]
            },
            "range": [
              239,
              348
            ],
            "loc": {
              "end": {
                "column": 117,
                "line": 6
              },
              "start": {
                "column": 8,
                "line": 6
              }
            }
          },
          "range": [
            235,
            348
          ],
          "loc": {
            "end": {
              "column": 117,
              "line": 6
            },
            "start": {
              "column": 4,
              "line": 6
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        231,
        349
      ],
      "loc": {
        "end": {
          "column": 118,
          "line": 6
        },
        "start": {
          "column": 0,
          "line": 6
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
            350,
            351
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 7
            },
            "start": {
              "column": 0,
              "line": 7
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "range": [
            354,
            355
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 7
            },
            "start": {
              "column": 4,
              "line": 7
            }
          }
        },
        "range": [
          350,
          355
        ],
        "loc": {
          "end": {
            "column": 5,
            "line": 7
          },
          "start": {
            "column": 0,
            "line": 7
          }
        }
      },
      "range": [
        350,
        356
      ],
      "loc": {
        "end": {
          "column": 6,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 7
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
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
