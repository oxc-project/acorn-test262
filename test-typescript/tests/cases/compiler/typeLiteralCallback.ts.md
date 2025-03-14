__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    367
  ],
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          17,
          47
        ],
        "body": [
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "reject",
              "optional": false,
              "range": [
                23,
                29
              ],
              "loc": {
                "end": {
                  "column": 10,
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
                "name": "arg",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 2
                    },
                    "start": {
                      "column": 14,
                      "line": 2
                    }
                  },
                  "range": [
                    33,
                    36
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "range": [
                        35,
                        36
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 2
                        },
                        "start": {
                          "column": 16,
                          "line": 2
                        }
                      }
                    },
                    "range": [
                      35,
                      36
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 2
                      },
                      "start": {
                        "column": 16,
                        "line": 2
                      }
                    }
                  }
                },
                "range": [
                  30,
                  36
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 2
                  },
                  "start": {
                    "column": 11,
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
                  "column": 24,
                  "line": 2
                },
                "start": {
                  "column": 18,
                  "line": 2
                }
              },
              "range": [
                37,
                43
              ],
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "range": [
                  39,
                  43
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 2
                  },
                  "start": {
                    "column": 20,
                    "line": 2
                  }
                }
              }
            },
            "static": false,
            "range": [
              23,
              45
            ],
            "loc": {
              "end": {
                "column": 26,
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
            "column": 17,
            "line": 1
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "range": [
          10,
          13
        ],
        "loc": {
          "end": {
            "column": 13,
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
            "column": 16,
            "line": 1
          },
          "start": {
            "column": 13,
            "line": 1
          }
        },
        "range": [
          13,
          16
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
                14,
                15
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 1
                },
                "start": {
                  "column": 14,
                  "line": 1
                }
              }
            },
            "out": false,
            "range": [
              14,
              15
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 1
              },
              "start": {
                "column": 14,
                "line": 1
              }
            }
          }
        ]
      },
      "range": [
        0,
        47
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
                  "column": 20,
                  "line": 4
                },
                "start": {
                  "column": 7,
                  "line": 4
                }
              },
              "range": [
                55,
                68
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    60,
                    68
                  ],
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "range": [
                        61,
                        67
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 4
                        },
                        "start": {
                          "column": 13,
                          "line": 4
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 4
                    },
                    "start": {
                      "column": 12,
                      "line": 4
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "range": [
                    57,
                    60
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
                "range": [
                  57,
                  68
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 4
                  },
                  "start": {
                    "column": 9,
                    "line": 4
                  }
                }
              }
            },
            "range": [
              52,
              68
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 4
              },
              "start": {
                "column": 4,
                "line": 4
              }
            }
          },
          "init": null,
          "range": [
            52,
            68
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 4
            },
            "start": {
              "column": 4,
              "line": 4
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        48,
        68
      ],
      "loc": {
        "end": {
          "column": 20,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 4
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          87,
          178
        ],
        "body": [
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fail",
              "optional": false,
              "range": [
                93,
                97
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 7
                },
                "start": {
                  "column": 4,
                  "line": 7
                }
              }
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "func",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 7
                    },
                    "start": {
                      "column": 13,
                      "line": 7
                    }
                  },
                  "range": [
                    102,
                    120
                  ],
                  "typeAnnotation": {
                    "type": "TSFunctionType",
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
                              "column": 22,
                              "line": 7
                            },
                            "start": {
                              "column": 19,
                              "line": 7
                            }
                          },
                          "range": [
                            108,
                            111
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "range": [
                                110,
                                111
                              ],
                              "loc": {
                                "end": {
                                  "column": 22,
                                  "line": 7
                                },
                                "start": {
                                  "column": 21,
                                  "line": 7
                                }
                              }
                            },
                            "range": [
                              110,
                              111
                            ],
                            "loc": {
                              "end": {
                                "column": 22,
                                "line": 7
                              },
                              "start": {
                                "column": 21,
                                "line": 7
                              }
                            }
                          }
                        },
                        "range": [
                          105,
                          111
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 7
                          },
                          "start": {
                            "column": 16,
                            "line": 7
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 7
                        },
                        "start": {
                          "column": 24,
                          "line": 7
                        }
                      },
                      "range": [
                        113,
                        120
                      ],
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "range": [
                          116,
                          120
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 7
                          },
                          "start": {
                            "column": 27,
                            "line": 7
                          }
                        }
                      }
                    },
                    "range": [
                      104,
                      120
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
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
                  98,
                  120
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 7
                  },
                  "start": {
                    "column": 9,
                    "line": 7
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 39,
                  "line": 7
                },
                "start": {
                  "column": 33,
                  "line": 7
                }
              },
              "range": [
                122,
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
                    "column": 39,
                    "line": 7
                  },
                  "start": {
                    "column": 35,
                    "line": 7
                  }
                }
              }
            },
            "static": false,
            "range": [
              93,
              130
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 7
              },
              "start": {
                "column": 4,
                "line": 7
              }
            }
          },
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fail2",
              "optional": false,
              "range": [
                135,
                140
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
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "func",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 8
                    },
                    "start": {
                      "column": 14,
                      "line": 8
                    }
                  },
                  "range": [
                    145,
                    167
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSCallSignatureDeclaration",
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
                                  "column": 25,
                                  "line": 8
                                },
                                "start": {
                                  "column": 22,
                                  "line": 8
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
                                  "name": "T",
                                  "optional": false,
                                  "range": [
                                    155,
                                    156
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 25,
                                      "line": 8
                                    },
                                    "start": {
                                      "column": 24,
                                      "line": 8
                                    }
                                  }
                                },
                                "range": [
                                  155,
                                  156
                                ],
                                "loc": {
                                  "end": {
                                    "column": 25,
                                    "line": 8
                                  },
                                  "start": {
                                    "column": 24,
                                    "line": 8
                                  }
                                }
                              }
                            },
                            "range": [
                              150,
                              156
                            ],
                            "loc": {
                              "end": {
                                "column": 25,
                                "line": 8
                              },
                              "start": {
                                "column": 19,
                                "line": 8
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 32,
                              "line": 8
                            },
                            "start": {
                              "column": 26,
                              "line": 8
                            }
                          },
                          "range": [
                            157,
                            163
                          ],
                          "typeAnnotation": {
                            "type": "TSVoidKeyword",
                            "range": [
                              159,
                              163
                            ],
                            "loc": {
                              "end": {
                                "column": 32,
                                "line": 8
                              },
                              "start": {
                                "column": 28,
                                "line": 8
                              }
                            }
                          }
                        },
                        "range": [
                          149,
                          165
                        ],
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 8
                          },
                          "start": {
                            "column": 18,
                            "line": 8
                          }
                        }
                      }
                    ],
                    "range": [
                      147,
                      167
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 8
                      },
                      "start": {
                        "column": 16,
                        "line": 8
                      }
                    }
                  }
                },
                "range": [
                  141,
                  167
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 8
                  },
                  "start": {
                    "column": 10,
                    "line": 8
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 43,
                  "line": 8
                },
                "start": {
                  "column": 37,
                  "line": 8
                }
              },
              "range": [
                168,
                174
              ],
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "range": [
                  170,
                  174
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 8
                  },
                  "start": {
                    "column": 39,
                    "line": 8
                  }
                }
              }
            },
            "static": false,
            "range": [
              135,
              176
            ],
            "loc": {
              "end": {
                "column": 45,
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
            "column": 17,
            "line": 6
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "bar",
        "optional": false,
        "range": [
          80,
          83
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 6
          },
          "start": {
            "column": 10,
            "line": 6
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 16,
            "line": 6
          },
          "start": {
            "column": 13,
            "line": 6
          }
        },
        "range": [
          83,
          86
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
                84,
                85
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 6
                },
                "start": {
                  "column": 14,
                  "line": 6
                }
              }
            },
            "out": false,
            "range": [
              84,
              85
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 6
              },
              "start": {
                "column": 14,
                "line": 6
              }
            }
          }
        ]
      },
      "range": [
        70,
        178
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
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "definite": false,
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "test",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 21,
                  "line": 10
                },
                "start": {
                  "column": 8,
                  "line": 10
                }
              },
              "range": [
                187,
                200
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    192,
                    200
                  ],
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "range": [
                        193,
                        199
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 10
                        },
                        "start": {
                          "column": 14,
                          "line": 10
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 10
                    },
                    "start": {
                      "column": 13,
                      "line": 10
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "range": [
                    189,
                    192
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 10
                    },
                    "start": {
                      "column": 10,
                      "line": 10
                    }
                  }
                },
                "range": [
                  189,
                  200
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 10
                  },
                  "start": {
                    "column": 10,
                    "line": 10
                  }
                }
              }
            },
            "range": [
              183,
              200
            ],
            "loc": {
              "end": {
                "column": 21,
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
            183,
            200
          ],
          "loc": {
            "end": {
              "column": 21,
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
      "kind": "var",
      "range": [
        179,
        201
      ],
      "loc": {
        "end": {
          "column": 22,
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
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arg",
                  "optional": false,
                  "range": [
                    231,
                    234
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 12
                    },
                    "start": {
                      "column": 28,
                      "line": 12
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
                    220,
                    223
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 12
                    },
                    "start": {
                      "column": 17,
                      "line": 12
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "reject",
                  "optional": false,
                  "range": [
                    224,
                    230
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 12
                    },
                    "start": {
                      "column": 21,
                      "line": 12
                    }
                  }
                },
                "range": [
                  220,
                  230
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 12
                  },
                  "start": {
                    "column": 17,
                    "line": 12
                  }
                }
              },
              "optional": false,
              "range": [
                220,
                235
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 12
                },
                "start": {
                  "column": 17,
                  "line": 12
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
                "name": "arg",
                "optional": false,
                "range": [
                  213,
                  216
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 12
                  },
                  "start": {
                    "column": 10,
                    "line": 12
                  }
                }
              }
            ],
            "range": [
              213,
              235
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 12
              },
              "start": {
                "column": 10,
                "line": 12
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
            "name": "test",
            "optional": false,
            "range": [
              203,
              207
            ],
            "loc": {
              "end": {
                "column": 4,
                "line": 12
              },
              "start": {
                "column": 0,
                "line": 12
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "fail",
            "optional": false,
            "range": [
              208,
              212
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 12
              },
              "start": {
                "column": 5,
                "line": 12
              }
            }
          },
          "range": [
            203,
            212
          ],
          "loc": {
            "end": {
              "column": 9,
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
          203,
          236
        ],
        "loc": {
          "end": {
            "column": 33,
            "line": 12
          },
          "start": {
            "column": 0,
            "line": 12
          }
        }
      },
      "range": [
        203,
        237
      ],
      "loc": {
        "end": {
          "column": 34,
          "line": 12
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
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arg",
                  "optional": false,
                  "range": [
                    267,
                    270
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 13
                    },
                    "start": {
                      "column": 29,
                      "line": 13
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
                    256,
                    259
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 13
                    },
                    "start": {
                      "column": 18,
                      "line": 13
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "reject",
                  "optional": false,
                  "range": [
                    260,
                    266
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 13
                    },
                    "start": {
                      "column": 22,
                      "line": 13
                    }
                  }
                },
                "range": [
                  256,
                  266
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 13
                  },
                  "start": {
                    "column": 18,
                    "line": 13
                  }
                }
              },
              "optional": false,
              "range": [
                256,
                271
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 13
                },
                "start": {
                  "column": 18,
                  "line": 13
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
                "name": "arg",
                "optional": false,
                "range": [
                  249,
                  252
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 13
                  },
                  "start": {
                    "column": 11,
                    "line": 13
                  }
                }
              }
            ],
            "range": [
              249,
              271
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 13
              },
              "start": {
                "column": 11,
                "line": 13
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
            "name": "test",
            "optional": false,
            "range": [
              238,
              242
            ],
            "loc": {
              "end": {
                "column": 4,
                "line": 13
              },
              "start": {
                "column": 0,
                "line": 13
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "fail2",
            "optional": false,
            "range": [
              243,
              248
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 13
              },
              "start": {
                "column": 5,
                "line": 13
              }
            }
          },
          "range": [
            238,
            248
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 13
            },
            "start": {
              "column": 0,
              "line": 13
            }
          }
        },
        "optional": false,
        "range": [
          238,
          272
        ],
        "loc": {
          "end": {
            "column": 34,
            "line": 13
          },
          "start": {
            "column": 0,
            "line": 13
          }
        }
      },
      "range": [
        238,
        273
      ],
      "loc": {
        "end": {
          "column": 35,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 13
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
