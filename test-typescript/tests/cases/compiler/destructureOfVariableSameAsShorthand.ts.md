__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    56,
    700
  ],
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          91,
          107
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "data",
              "optional": false,
              "range": [
                97,
                101
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 3
                },
                "start": {
                  "column": 4,
                  "line": 3
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
                  "column": 11,
                  "line": 3
                },
                "start": {
                  "column": 8,
                  "line": 3
                }
              },
              "range": [
                101,
                104
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    103,
                    104
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 3
                    },
                    "start": {
                      "column": 10,
                      "line": 3
                    }
                  }
                },
                "range": [
                  103,
                  104
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 3
                  },
                  "start": {
                    "column": 10,
                    "line": 3
                  }
                }
              }
            },
            "range": [
              97,
              105
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 3
              },
              "start": {
                "column": 4,
                "line": 3
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 4
          },
          "start": {
            "column": 35,
            "line": 2
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AxiosResponse",
        "optional": false,
        "range": [
          66,
          79
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 2
          },
          "start": {
            "column": 10,
            "line": 2
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 34,
            "line": 2
          },
          "start": {
            "column": 23,
            "line": 2
          }
        },
        "range": [
          79,
          90
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "default": {
              "type": "TSNeverKeyword",
              "range": [
                84,
                89
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 2
                },
                "start": {
                  "column": 28,
                  "line": 2
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                80,
                81
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 2
                },
                "start": {
                  "column": 24,
                  "line": 2
                }
              }
            },
            "out": false,
            "range": [
              80,
              89
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 2
              },
              "start": {
                "column": 24,
                "line": 2
              }
            }
          }
        ]
      },
      "range": [
        56,
        107
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 2
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
        "name": "get",
        "optional": false,
        "range": [
          126,
          129
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 6
          },
          "start": {
            "column": 17,
            "line": 6
          }
        }
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 67,
            "line": 6
          },
          "start": {
            "column": 55,
            "line": 6
          }
        },
        "range": [
          164,
          176
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              173,
              176
            ],
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "R",
                  "optional": false,
                  "range": [
                    174,
                    175
                  ],
                  "loc": {
                    "end": {
                      "column": 66,
                      "line": 6
                    },
                    "start": {
                      "column": 65,
                      "line": 6
                    }
                  }
                },
                "range": [
                  174,
                  175
                ],
                "loc": {
                  "end": {
                    "column": 66,
                    "line": 6
                  },
                  "start": {
                    "column": 65,
                    "line": 6
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 67,
                "line": 6
              },
              "start": {
                "column": 64,
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
              166,
              173
            ],
            "loc": {
              "end": {
                "column": 64,
                "line": 6
              },
              "start": {
                "column": 57,
                "line": 6
              }
            }
          },
          "range": [
            166,
            176
          ],
          "loc": {
            "end": {
              "column": 67,
              "line": 6
            },
            "start": {
              "column": 57,
              "line": 6
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 53,
            "line": 6
          },
          "start": {
            "column": 20,
            "line": 6
          }
        },
        "range": [
          129,
          162
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "default": {
              "type": "TSNeverKeyword",
              "range": [
                134,
                139
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 6
                },
                "start": {
                  "column": 25,
                  "line": 6
                }
              }
            },
            "in": false,
            "name": {
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
                  "column": 22,
                  "line": 6
                },
                "start": {
                  "column": 21,
                  "line": 6
                }
              }
            },
            "out": false,
            "range": [
              130,
              139
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 6
              },
              "start": {
                "column": 21,
                "line": 6
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "default": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  158,
                  161
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
                        159,
                        160
                      ],
                      "loc": {
                        "end": {
                          "column": 51,
                          "line": 6
                        },
                        "start": {
                          "column": 50,
                          "line": 6
                        }
                      }
                    },
                    "range": [
                      159,
                      160
                    ],
                    "loc": {
                      "end": {
                        "column": 51,
                        "line": 6
                      },
                      "start": {
                        "column": 50,
                        "line": 6
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 52,
                    "line": 6
                  },
                  "start": {
                    "column": 49,
                    "line": 6
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "AxiosResponse",
                "optional": false,
                "range": [
                  145,
                  158
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 6
                  },
                  "start": {
                    "column": 36,
                    "line": 6
                  }
                }
              },
              "range": [
                145,
                161
              ],
              "loc": {
                "end": {
                  "column": 52,
                  "line": 6
                },
                "start": {
                  "column": 36,
                  "line": 6
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "R",
              "optional": false,
              "range": [
                141,
                142
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 6
                },
                "start": {
                  "column": 32,
                  "line": 6
                }
              }
            },
            "out": false,
            "range": [
              141,
              161
            ],
            "loc": {
              "end": {
                "column": 52,
                "line": 6
              },
              "start": {
                "column": 32,
                "line": 6
              }
            }
          }
        ]
      },
      "range": [
        109,
        177
      ],
      "loc": {
        "end": {
          "column": 68,
          "line": 6
        },
        "start": {
          "column": 0,
          "line": 6
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "async": true,
      "body": {
        "type": "BlockStatement",
        "body": [
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
                        "type": "VariableDeclaration",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "definite": false,
                            "id": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "body",
                              "optional": false,
                              "range": [
                                312,
                                316
                              ],
                              "loc": {
                                "end": {
                                  "column": 18,
                                  "line": 12
                                },
                                "start": {
                                  "column": 14,
                                  "line": 12
                                }
                              }
                            },
                            "init": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "response",
                                "optional": false,
                                "range": [
                                  319,
                                  327
                                ],
                                "loc": {
                                  "end": {
                                    "column": 29,
                                    "line": 12
                                  },
                                  "start": {
                                    "column": 21,
                                    "line": 12
                                  }
                                }
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "data",
                                "optional": false,
                                "range": [
                                  328,
                                  332
                                ],
                                "loc": {
                                  "end": {
                                    "column": 34,
                                    "line": 12
                                  },
                                  "start": {
                                    "column": 30,
                                    "line": 12
                                  }
                                }
                              },
                              "range": [
                                319,
                                332
                              ],
                              "loc": {
                                "end": {
                                  "column": 34,
                                  "line": 12
                                },
                                "start": {
                                  "column": 21,
                                  "line": 12
                                }
                              }
                            },
                            "range": [
                              312,
                              332
                            ],
                            "loc": {
                              "end": {
                                "column": 34,
                                "line": 12
                              },
                              "start": {
                                "column": 14,
                                "line": 12
                              }
                            }
                          }
                        ],
                        "declare": false,
                        "kind": "const",
                        "range": [
                          306,
                          333
                        ],
                        "loc": {
                          "end": {
                            "column": 35,
                            "line": 12
                          },
                          "start": {
                            "column": 8,
                            "line": 12
                          }
                        }
                      }
                    ],
                    "range": [
                      271,
                      339
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 13
                      },
                      "start": {
                        "column": 29,
                        "line": 10
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
                      "name": "response",
                      "optional": false,
                      "range": [
                        258,
                        266
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 10
                        },
                        "start": {
                          "column": 16,
                          "line": 10
                        }
                      }
                    }
                  ],
                  "range": [
                    257,
                    339
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 13
                    },
                    "start": {
                      "column": 15,
                      "line": 10
                    }
                  }
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "CallExpression",
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "get",
                    "optional": false,
                    "range": [
                      246,
                      249
                    ],
                    "loc": {
                      "end": {
                        "column": 7,
                        "line": 10
                      },
                      "start": {
                        "column": 4,
                        "line": 10
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    246,
                    251
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 10
                    },
                    "start": {
                      "column": 4,
                      "line": 10
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
                    252,
                    256
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 10
                    },
                    "start": {
                      "column": 10,
                      "line": 10
                    }
                  }
                },
                "range": [
                  246,
                  256
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
              "optional": false,
              "range": [
                246,
                340
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 13
                },
                "start": {
                  "column": 4,
                  "line": 10
                }
              }
            },
            "range": [
              246,
              340
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 13
              },
              "start": {
                "column": 4,
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
                    "body": [],
                    "range": [
                      370,
                      402
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 16
                      },
                      "start": {
                        "column": 29,
                        "line": 14
                      }
                    }
                  },
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "ObjectPattern",
                      "decorators": [],
                      "optional": false,
                      "properties": [
                        {
                          "type": "Property",
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "data",
                            "optional": false,
                            "range": [
                              359,
                              363
                            ],
                            "loc": {
                              "end": {
                                "column": 22,
                                "line": 14
                              },
                              "start": {
                                "column": 18,
                                "line": 14
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
                            "name": "data",
                            "optional": false,
                            "range": [
                              359,
                              363
                            ],
                            "loc": {
                              "end": {
                                "column": 22,
                                "line": 14
                              },
                              "start": {
                                "column": 18,
                                "line": 14
                              }
                            }
                          },
                          "range": [
                            359,
                            363
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 14
                            },
                            "start": {
                              "column": 18,
                              "line": 14
                            }
                          }
                        }
                      ],
                      "range": [
                        357,
                        365
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 14
                        },
                        "start": {
                          "column": 16,
                          "line": 14
                        }
                      }
                    }
                  ],
                  "range": [
                    356,
                    402
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 16
                    },
                    "start": {
                      "column": 15,
                      "line": 14
                    }
                  }
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "CallExpression",
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "get",
                    "optional": false,
                    "range": [
                      345,
                      348
                    ],
                    "loc": {
                      "end": {
                        "column": 7,
                        "line": 14
                      },
                      "start": {
                        "column": 4,
                        "line": 14
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    345,
                    350
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 14
                    },
                    "start": {
                      "column": 4,
                      "line": 14
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
                    351,
                    355
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 14
                    },
                    "start": {
                      "column": 10,
                      "line": 14
                    }
                  }
                },
                "range": [
                  345,
                  355
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 14
                  },
                  "start": {
                    "column": 4,
                    "line": 14
                  }
                }
              },
              "optional": false,
              "range": [
                345,
                403
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 16
                },
                "start": {
                  "column": 4,
                  "line": 14
                }
              }
            },
            "range": [
              345,
              403
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 16
              },
              "start": {
                "column": 4,
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
                  "name": "response",
                  "optional": false,
                  "range": [
                    414,
                    422
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 17
                    },
                    "start": {
                      "column": 10,
                      "line": 17
                    }
                  }
                },
                "init": {
                  "type": "AwaitExpression",
                  "argument": {
                    "type": "CallExpression",
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "get",
                      "optional": false,
                      "range": [
                        431,
                        434
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 17
                        },
                        "start": {
                          "column": 27,
                          "line": 17
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      431,
                      436
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 17
                      },
                      "start": {
                        "column": 27,
                        "line": 17
                      }
                    }
                  },
                  "range": [
                    425,
                    436
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 17
                    },
                    "start": {
                      "column": 21,
                      "line": 17
                    }
                  }
                },
                "range": [
                  414,
                  436
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 17
                  },
                  "start": {
                    "column": 10,
                    "line": 17
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              408,
              436
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 17
              },
              "start": {
                "column": 4,
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
                  "name": "body",
                  "optional": false,
                  "range": [
                    468,
                    472
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 19
                    },
                    "start": {
                      "column": 10,
                      "line": 19
                    }
                  }
                },
                "init": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "response",
                    "optional": false,
                    "range": [
                      475,
                      483
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 19
                      },
                      "start": {
                        "column": 17,
                        "line": 19
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "data",
                    "optional": false,
                    "range": [
                      484,
                      488
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 19
                      },
                      "start": {
                        "column": 26,
                        "line": 19
                      }
                    }
                  },
                  "range": [
                    475,
                    488
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 19
                    },
                    "start": {
                      "column": 17,
                      "line": 19
                    }
                  }
                },
                "range": [
                  468,
                  488
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 19
                  },
                  "start": {
                    "column": 10,
                    "line": 19
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              462,
              489
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 19
              },
              "start": {
                "column": 4,
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
                  "type": "ObjectPattern",
                  "decorators": [],
                  "optional": false,
                  "properties": [
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "data",
                        "optional": false,
                        "range": [
                          523,
                          527
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 21
                          },
                          "start": {
                            "column": 12,
                            "line": 21
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
                        "name": "data",
                        "optional": false,
                        "range": [
                          523,
                          527
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 21
                          },
                          "start": {
                            "column": 12,
                            "line": 21
                          }
                        }
                      },
                      "range": [
                        523,
                        527
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 21
                        },
                        "start": {
                          "column": 12,
                          "line": 21
                        }
                      }
                    }
                  ],
                  "range": [
                    521,
                    529
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 21
                    },
                    "start": {
                      "column": 10,
                      "line": 21
                    }
                  }
                },
                "init": {
                  "type": "AwaitExpression",
                  "argument": {
                    "type": "CallExpression",
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "get",
                      "optional": false,
                      "range": [
                        538,
                        541
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 21
                        },
                        "start": {
                          "column": 27,
                          "line": 21
                        }
                      }
                    },
                    "optional": false,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        541,
                        548
                      ],
                      "params": [
                        {
                          "type": "TSNeverKeyword",
                          "range": [
                            542,
                            547
                          ],
                          "loc": {
                            "end": {
                              "column": 36,
                              "line": 21
                            },
                            "start": {
                              "column": 31,
                              "line": 21
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 21
                        },
                        "start": {
                          "column": 30,
                          "line": 21
                        }
                      }
                    },
                    "range": [
                      538,
                      550
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 21
                      },
                      "start": {
                        "column": 27,
                        "line": 21
                      }
                    }
                  },
                  "range": [
                    532,
                    550
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 21
                    },
                    "start": {
                      "column": 21,
                      "line": 21
                    }
                  }
                },
                "range": [
                  521,
                  550
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 21
                  },
                  "start": {
                    "column": 10,
                    "line": 21
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              515,
              551
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 21
              },
              "start": {
                "column": 4,
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
                  "type": "ObjectPattern",
                  "decorators": [],
                  "optional": false,
                  "properties": [
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "data",
                        "optional": false,
                        "range": [
                          662,
                          666
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 25
                          },
                          "start": {
                            "column": 12,
                            "line": 25
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
                        "name": "shouldBeNever",
                        "optional": false,
                        "range": [
                          668,
                          681
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 25
                          },
                          "start": {
                            "column": 18,
                            "line": 25
                          }
                        }
                      },
                      "range": [
                        662,
                        681
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 25
                        },
                        "start": {
                          "column": 12,
                          "line": 25
                        }
                      }
                    }
                  ],
                  "range": [
                    660,
                    683
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 25
                    },
                    "start": {
                      "column": 10,
                      "line": 25
                    }
                  }
                },
                "init": {
                  "type": "AwaitExpression",
                  "argument": {
                    "type": "CallExpression",
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "get",
                      "optional": false,
                      "range": [
                        692,
                        695
                      ],
                      "loc": {
                        "end": {
                          "column": 45,
                          "line": 25
                        },
                        "start": {
                          "column": 42,
                          "line": 25
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      692,
                      697
                    ],
                    "loc": {
                      "end": {
                        "column": 47,
                        "line": 25
                      },
                      "start": {
                        "column": 42,
                        "line": 25
                      }
                    }
                  },
                  "range": [
                    686,
                    697
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 25
                    },
                    "start": {
                      "column": 36,
                      "line": 25
                    }
                  }
                },
                "range": [
                  660,
                  697
                ],
                "loc": {
                  "end": {
                    "column": 47,
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
              654,
              698
            ],
            "loc": {
              "end": {
                "column": 48,
                "line": 25
              },
              "start": {
                "column": 4,
                "line": 25
              }
            }
          }
        ],
        "range": [
          201,
          700
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 26
          },
          "start": {
            "column": 22,
            "line": 8
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "main",
        "optional": false,
        "range": [
          194,
          198
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 8
          },
          "start": {
            "column": 15,
            "line": 8
          }
        }
      },
      "params": [],
      "range": [
        179,
        700
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 26
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
      "column": 1,
      "line": 26
    },
    "start": {
      "column": 0,
      "line": 2
    }
  },
  "hashbang": null
}
```
