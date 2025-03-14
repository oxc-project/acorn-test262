__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    324
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        0,
        17
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
                11,
                12
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 1
                },
                "start": {
                  "column": 11,
                  "line": 1
                }
              }
            },
            "init": {
              "type": "Literal",
              "raw": "1",
              "value": 1,
              "range": [
                15,
                16
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 1
                },
                "start": {
                  "column": 15,
                  "line": 1
                }
              }
            },
            "range": [
              11,
              16
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 1
              },
              "start": {
                "column": 11,
                "line": 1
              }
            }
          }
        ],
        "declare": false,
        "kind": "var",
        "range": [
          7,
          17
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 1
          },
          "start": {
            "column": 7,
            "line": 1
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 17,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          74,
          77
        ],
        "body": [],
        "loc": {
          "end": {
            "column": 1,
            "line": 3
          },
          "start": {
            "column": 22,
            "line": 2
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Iterator",
        "optional": false,
        "range": [
          62,
          70
        ],
        "loc": {
          "end": {
            "column": 18,
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
            "column": 21,
            "line": 2
          },
          "start": {
            "column": 18,
            "line": 2
          }
        },
        "range": [
          70,
          73
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
                71,
                72
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 2
                },
                "start": {
                  "column": 19,
                  "line": 2
                }
              }
            },
            "out": false,
            "range": [
              71,
              72
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 2
              },
              "start": {
                "column": 19,
                "line": 2
              }
            }
          }
        ]
      },
      "range": [
        52,
        77
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 2
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
              211
            ],
            "attributes": [],
            "declaration": {
              "type": "FunctionDeclaration",
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
                        200,
                        204
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 7
                        },
                        "start": {
                          "column": 15,
                          "line": 7
                        }
                      }
                    },
                    "range": [
                      193,
                      205
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 7
                      },
                      "start": {
                        "column": 8,
                        "line": 7
                      }
                    }
                  }
                ],
                "range": [
                  183,
                  211
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 8
                  },
                  "start": {
                    "column": 89,
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
                "name": "fromDoWhile",
                "optional": false,
                "range": [
                  114,
                  125
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 6
                  },
                  "start": {
                    "column": 20,
                    "line": 6
                  }
                }
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "doWhile",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 74,
                        "line": 6
                      },
                      "start": {
                        "column": 42,
                        "line": 6
                      }
                    },
                    "range": [
                      136,
                      168
                    ],
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "test",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 62,
                                "line": 6
                              },
                              "start": {
                                "column": 49,
                                "line": 6
                              }
                            },
                            "range": [
                              143,
                              156
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "range": [
                                  153,
                                  156
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
                                        154,
                                        155
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 61,
                                          "line": 6
                                        },
                                        "start": {
                                          "column": 60,
                                          "line": 6
                                        }
                                      }
                                    },
                                    "range": [
                                      154,
                                      155
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 61,
                                        "line": 6
                                      },
                                      "start": {
                                        "column": 60,
                                        "line": 6
                                      }
                                    }
                                  }
                                ],
                                "loc": {
                                  "end": {
                                    "column": 62,
                                    "line": 6
                                  },
                                  "start": {
                                    "column": 59,
                                    "line": 6
                                  }
                                }
                              },
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Iterator",
                                "optional": false,
                                "range": [
                                  145,
                                  153
                                ],
                                "loc": {
                                  "end": {
                                    "column": 59,
                                    "line": 6
                                  },
                                  "start": {
                                    "column": 51,
                                    "line": 6
                                  }
                                }
                              },
                              "range": [
                                145,
                                156
                              ],
                              "loc": {
                                "end": {
                                  "column": 62,
                                  "line": 6
                                },
                                "start": {
                                  "column": 51,
                                  "line": 6
                                }
                              }
                            }
                          },
                          "range": [
                            139,
                            156
                          ],
                          "loc": {
                            "end": {
                              "column": 62,
                              "line": 6
                            },
                            "start": {
                              "column": 45,
                              "line": 6
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 74,
                            "line": 6
                          },
                          "start": {
                            "column": 64,
                            "line": 6
                          }
                        },
                        "range": [
                          158,
                          168
                        ],
                        "typeAnnotation": {
                          "type": "TSBooleanKeyword",
                          "range": [
                            161,
                            168
                          ],
                          "loc": {
                            "end": {
                              "column": 74,
                              "line": 6
                            },
                            "start": {
                              "column": 67,
                              "line": 6
                            }
                          }
                        }
                      },
                      "range": [
                        138,
                        168
                      ],
                      "loc": {
                        "end": {
                          "column": 74,
                          "line": 6
                        },
                        "start": {
                          "column": 44,
                          "line": 6
                        }
                      }
                    }
                  },
                  "range": [
                    129,
                    168
                  ],
                  "loc": {
                    "end": {
                      "column": 74,
                      "line": 6
                    },
                    "start": {
                      "column": 35,
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
                    "column": 75,
                    "line": 6
                  }
                },
                "range": [
                  169,
                  182
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      179,
                      182
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
                            180,
                            181
                          ],
                          "loc": {
                            "end": {
                              "column": 87,
                              "line": 6
                            },
                            "start": {
                              "column": 86,
                              "line": 6
                            }
                          }
                        },
                        "range": [
                          180,
                          181
                        ],
                        "loc": {
                          "end": {
                            "column": 87,
                            "line": 6
                          },
                          "start": {
                            "column": 86,
                            "line": 6
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 88,
                        "line": 6
                      },
                      "start": {
                        "column": 85,
                        "line": 6
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Iterator",
                    "optional": false,
                    "range": [
                      171,
                      179
                    ],
                    "loc": {
                      "end": {
                        "column": 85,
                        "line": 6
                      },
                      "start": {
                        "column": 77,
                        "line": 6
                      }
                    }
                  },
                  "range": [
                    171,
                    182
                  ],
                  "loc": {
                    "end": {
                      "column": 88,
                      "line": 6
                    },
                    "start": {
                      "column": 77,
                      "line": 6
                    }
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 6
                  },
                  "start": {
                    "column": 31,
                    "line": 6
                  }
                },
                "range": [
                  125,
                  128
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
                        126,
                        127
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
                      126,
                      127
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
                  }
                ]
              },
              "range": [
                105,
                211
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 8
                },
                "start": {
                  "column": 11,
                  "line": 6
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 5,
                "line": 8
              },
              "start": {
                "column": 4,
                "line": 6
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
                                "raw": "true",
                                "value": true,
                                "range": [
                                  298,
                                  302
                                ],
                                "loc": {
                                  "end": {
                                    "column": 23,
                                    "line": 12
                                  },
                                  "start": {
                                    "column": 19,
                                    "line": 12
                                  }
                                }
                              },
                              "range": [
                                291,
                                303
                              ],
                              "loc": {
                                "end": {
                                  "column": 24,
                                  "line": 12
                                },
                                "start": {
                                  "column": 12,
                                  "line": 12
                                }
                              }
                            }
                          ],
                          "range": [
                            277,
                            313
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 13
                            },
                            "start": {
                              "column": 35,
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
                            "name": "test",
                            "optional": false,
                            "range": [
                              269,
                              273
                            ],
                            "loc": {
                              "end": {
                                "column": 31,
                                "line": 11
                              },
                              "start": {
                                "column": 27,
                                "line": 11
                              }
                            }
                          }
                        ],
                        "range": [
                          269,
                          313
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 13
                          },
                          "start": {
                            "column": 27,
                            "line": 11
                          }
                        }
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fromDoWhile",
                      "optional": false,
                      "range": [
                        257,
                        268
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 11
                        },
                        "start": {
                          "column": 15,
                          "line": 11
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      257,
                      314
                    ],
                    "loc": {
                      "end": {
                        "column": 10,
                        "line": 13
                      },
                      "start": {
                        "column": 15,
                        "line": 11
                      }
                    }
                  },
                  "range": [
                    250,
                    315
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 13
                    },
                    "start": {
                      "column": 8,
                      "line": 11
                    }
                  }
                }
              ],
              "range": [
                240,
                321
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 14
                },
                "start": {
                  "column": 27,
                  "line": 10
                }
              }
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "fromOrderBy",
              "optional": false,
              "range": [
                226,
                237
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 10
                },
                "start": {
                  "column": 13,
                  "line": 10
                }
              }
            },
            "params": [],
            "range": [
              217,
              321
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 14
              },
              "start": {
                "column": 4,
                "line": 10
              }
            }
          }
        ],
        "range": [
          92,
          323
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 15
          },
          "start": {
            "column": 13,
            "line": 5
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
        "name": "Query",
        "optional": false,
        "loc": {
          "end": {
            "column": 12,
            "line": 5
          },
          "start": {
            "column": 7,
            "line": 5
          }
        }
      },
      "kind": "module",
      "range": [
        79,
        323
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 15
        },
        "start": {
          "column": 0,
          "line": 5
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 16
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
