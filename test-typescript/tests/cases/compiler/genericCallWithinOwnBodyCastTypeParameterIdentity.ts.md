__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    801
  ],
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          26,
          118
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
                32,
                36
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
                "name": "onFulfilled",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 54,
                      "line": 3
                    },
                    "start": {
                      "column": 19,
                      "line": 3
                    }
                  },
                  "range": [
                    60,
                    95
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
                              "column": 34,
                              "line": 3
                            },
                            "start": {
                              "column": 27,
                              "line": 3
                            }
                          },
                          "range": [
                            68,
                            75
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Value",
                              "optional": false,
                              "range": [
                                70,
                                75
                              ],
                              "loc": {
                                "end": {
                                  "column": 34,
                                  "line": 3
                                },
                                "start": {
                                  "column": 29,
                                  "line": 3
                                }
                              }
                            },
                            "range": [
                              70,
                              75
                            ],
                            "loc": {
                              "end": {
                                "column": 34,
                                "line": 3
                              },
                              "start": {
                                "column": 29,
                                "line": 3
                              }
                            }
                          }
                        },
                        "range": [
                          63,
                          75
                        ],
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 3
                          },
                          "start": {
                            "column": 22,
                            "line": 3
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 54,
                          "line": 3
                        },
                        "start": {
                          "column": 36,
                          "line": 3
                        }
                      },
                      "range": [
                        77,
                        95
                      ],
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "V",
                              "optional": false,
                              "range": [
                                80,
                                81
                              ],
                              "loc": {
                                "end": {
                                  "column": 40,
                                  "line": 3
                                },
                                "start": {
                                  "column": 39,
                                  "line": 3
                                }
                              }
                            },
                            "range": [
                              80,
                              81
                            ],
                            "loc": {
                              "end": {
                                "column": 40,
                                "line": 3
                              },
                              "start": {
                                "column": 39,
                                "line": 3
                              }
                            }
                          },
                          {
                            "type": "TSTypeReference",
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "range": [
                                92,
                                95
                              ],
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "V",
                                    "optional": false,
                                    "range": [
                                      93,
                                      94
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 53,
                                        "line": 3
                                      },
                                      "start": {
                                        "column": 52,
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
                                      "column": 53,
                                      "line": 3
                                    },
                                    "start": {
                                      "column": 52,
                                      "line": 3
                                    }
                                  }
                                }
                              ],
                              "loc": {
                                "end": {
                                  "column": 54,
                                  "line": 3
                                },
                                "start": {
                                  "column": 51,
                                  "line": 3
                                }
                              }
                            },
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Thenable",
                              "optional": false,
                              "range": [
                                84,
                                92
                              ],
                              "loc": {
                                "end": {
                                  "column": 51,
                                  "line": 3
                                },
                                "start": {
                                  "column": 43,
                                  "line": 3
                                }
                              }
                            },
                            "range": [
                              84,
                              95
                            ],
                            "loc": {
                              "end": {
                                "column": 54,
                                "line": 3
                              },
                              "start": {
                                "column": 43,
                                "line": 3
                              }
                            }
                          }
                        ],
                        "range": [
                          80,
                          95
                        ],
                        "loc": {
                          "end": {
                            "column": 54,
                            "line": 3
                          },
                          "start": {
                            "column": 39,
                            "line": 3
                          }
                        }
                      }
                    },
                    "range": [
                      62,
                      95
                    ],
                    "loc": {
                      "end": {
                        "column": 54,
                        "line": 3
                      },
                      "start": {
                        "column": 21,
                        "line": 3
                      }
                    }
                  }
                },
                "range": [
                  49,
                  95
                ],
                "loc": {
                  "end": {
                    "column": 54,
                    "line": 3
                  },
                  "start": {
                    "column": 8,
                    "line": 3
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 18,
                  "line": 4
                },
                "start": {
                  "column": 5,
                  "line": 4
                }
              },
              "range": [
                102,
                115
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    112,
                    115
                  ],
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "V",
                        "optional": false,
                        "range": [
                          113,
                          114
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 4
                          },
                          "start": {
                            "column": 16,
                            "line": 4
                          }
                        }
                      },
                      "range": [
                        113,
                        114
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 4
                        },
                        "start": {
                          "column": 16,
                          "line": 4
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 4
                    },
                    "start": {
                      "column": 15,
                      "line": 4
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Thenable",
                  "optional": false,
                  "range": [
                    104,
                    112
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 4
                    },
                    "start": {
                      "column": 7,
                      "line": 4
                    }
                  }
                },
                "range": [
                  104,
                  115
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 4
                  },
                  "start": {
                    "column": 7,
                    "line": 4
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
                36,
                39
              ],
              "params": [
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "V",
                    "optional": false,
                    "range": [
                      37,
                      38
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
                    37,
                    38
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
              32,
              116
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 4
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
            "line": 5
          },
          "start": {
            "column": 26,
            "line": 1
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Thenable",
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
            "column": 25,
            "line": 1
          },
          "start": {
            "column": 18,
            "line": 1
          }
        },
        "range": [
          18,
          25
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Value",
              "optional": false,
              "range": [
                19,
                24
              ],
              "loc": {
                "end": {
                  "column": 24,
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
              24
            ],
            "loc": {
              "end": {
                "column": 24,
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
        118
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 5
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
            "name": "toThenable",
            "optional": false,
            "range": [
              126,
              136
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 7
              },
              "start": {
                "column": 6,
                "line": 7
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
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
                          "name": "result",
                          "optional": false,
                          "range": [
                            263,
                            269
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 9
                            },
                            "start": {
                              "column": 14,
                              "line": 9
                            }
                          }
                        },
                        "init": {
                          "type": "CallExpression",
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "input",
                              "optional": false,
                              "range": [
                                275,
                                280
                              ],
                              "loc": {
                                "end": {
                                  "column": 31,
                                  "line": 9
                                },
                                "start": {
                                  "column": 26,
                                  "line": 9
                                }
                              }
                            }
                          ],
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "fn",
                            "optional": false,
                            "range": [
                              272,
                              274
                            ],
                            "loc": {
                              "end": {
                                "column": 25,
                                "line": 9
                              },
                              "start": {
                                "column": 23,
                                "line": 9
                              }
                            }
                          },
                          "optional": false,
                          "range": [
                            272,
                            281
                          ],
                          "loc": {
                            "end": {
                              "column": 32,
                              "line": 9
                            },
                            "start": {
                              "column": 23,
                              "line": 9
                            }
                          }
                        },
                        "range": [
                          263,
                          281
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 9
                          },
                          "start": {
                            "column": 14,
                            "line": 9
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const",
                    "range": [
                      257,
                      281
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 9
                      },
                      "start": {
                        "column": 8,
                        "line": 9
                      }
                    }
                  },
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
                            "name": "then",
                            "optional": false,
                            "range": [
                              311,
                              315
                            ],
                            "loc": {
                              "end": {
                                "column": 16,
                                "line": 11
                              },
                              "start": {
                                "column": 12,
                                "line": 11
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
                              315,
                              459
                            ],
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
                                        "type": "TSAsExpression",
                                        "expression": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "result",
                                          "optional": false,
                                          "range": [
                                            428,
                                            434
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 64,
                                              "line": 12
                                            },
                                            "start": {
                                              "column": 58,
                                              "line": 12
                                            }
                                          }
                                        },
                                        "typeAnnotation": {
                                          "type": "TSTypeReference",
                                          "typeName": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "Result",
                                            "optional": false,
                                            "range": [
                                              438,
                                              444
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 74,
                                                "line": 12
                                              },
                                              "start": {
                                                "column": 68,
                                                "line": 12
                                              }
                                            }
                                          },
                                          "range": [
                                            438,
                                            444
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 74,
                                              "line": 12
                                            },
                                            "start": {
                                              "column": 68,
                                              "line": 12
                                            }
                                          }
                                        },
                                        "range": [
                                          428,
                                          444
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 74,
                                            "line": 12
                                          },
                                          "start": {
                                            "column": 58,
                                            "line": 12
                                          }
                                        }
                                      }
                                    ],
                                    "callee": {
                                      "type": "CallExpression",
                                      "arguments": [
                                        {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "onFulfilled",
                                          "optional": false,
                                          "range": [
                                            415,
                                            426
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 56,
                                              "line": 12
                                            },
                                            "start": {
                                              "column": 45,
                                              "line": 12
                                            }
                                          }
                                        }
                                      ],
                                      "callee": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "toThenable",
                                        "optional": false,
                                        "range": [
                                          393,
                                          403
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 33,
                                            "line": 12
                                          },
                                          "start": {
                                            "column": 23,
                                            "line": 12
                                          }
                                        }
                                      },
                                      "optional": false,
                                      "typeArguments": {
                                        "type": "TSTypeParameterInstantiation",
                                        "range": [
                                          403,
                                          414
                                        ],
                                        "params": [
                                          {
                                            "type": "TSTypeReference",
                                            "typeName": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "V",
                                              "optional": false,
                                              "range": [
                                                404,
                                                405
                                              ],
                                              "loc": {
                                                "end": {
                                                  "column": 35,
                                                  "line": 12
                                                },
                                                "start": {
                                                  "column": 34,
                                                  "line": 12
                                                }
                                              }
                                            },
                                            "range": [
                                              404,
                                              405
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 35,
                                                "line": 12
                                              },
                                              "start": {
                                                "column": 34,
                                                "line": 12
                                              }
                                            }
                                          },
                                          {
                                            "type": "TSTypeReference",
                                            "typeName": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "Result",
                                              "optional": false,
                                              "range": [
                                                407,
                                                413
                                              ],
                                              "loc": {
                                                "end": {
                                                  "column": 43,
                                                  "line": 12
                                                },
                                                "start": {
                                                  "column": 37,
                                                  "line": 12
                                                }
                                              }
                                            },
                                            "range": [
                                              407,
                                              413
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 43,
                                                "line": 12
                                              },
                                              "start": {
                                                "column": 37,
                                                "line": 12
                                              }
                                            }
                                          }
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 44,
                                            "line": 12
                                          },
                                          "start": {
                                            "column": 33,
                                            "line": 12
                                          }
                                        }
                                      },
                                      "range": [
                                        393,
                                        427
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 57,
                                          "line": 12
                                        },
                                        "start": {
                                          "column": 23,
                                          "line": 12
                                        }
                                      }
                                    },
                                    "optional": false,
                                    "range": [
                                      393,
                                      445
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 75,
                                        "line": 12
                                      },
                                      "start": {
                                        "column": 23,
                                        "line": 12
                                      }
                                    }
                                  },
                                  "range": [
                                    386,
                                    445
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 75,
                                      "line": 12
                                    },
                                    "start": {
                                      "column": 16,
                                      "line": 12
                                    }
                                  }
                                }
                              ],
                              "range": [
                                368,
                                459
                              ],
                              "loc": {
                                "end": {
                                  "column": 13,
                                  "line": 13
                                },
                                "start": {
                                  "column": 69,
                                  "line": 11
                                }
                              }
                            },
                            "declare": false,
                            "expression": false,
                            "generator": false,
                            "id": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "onFulfilled",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "loc": {
                                    "end": {
                                      "column": 67,
                                      "line": 11
                                    },
                                    "start": {
                                      "column": 31,
                                      "line": 11
                                    }
                                  },
                                  "range": [
                                    330,
                                    366
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
                                              "column": 47,
                                              "line": 11
                                            },
                                            "start": {
                                              "column": 39,
                                              "line": 11
                                            }
                                          },
                                          "range": [
                                            338,
                                            346
                                          ],
                                          "typeAnnotation": {
                                            "type": "TSTypeReference",
                                            "typeName": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "Result",
                                              "optional": false,
                                              "range": [
                                                340,
                                                346
                                              ],
                                              "loc": {
                                                "end": {
                                                  "column": 47,
                                                  "line": 11
                                                },
                                                "start": {
                                                  "column": 41,
                                                  "line": 11
                                                }
                                              }
                                            },
                                            "range": [
                                              340,
                                              346
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 47,
                                                "line": 11
                                              },
                                              "start": {
                                                "column": 41,
                                                "line": 11
                                              }
                                            }
                                          }
                                        },
                                        "range": [
                                          333,
                                          346
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 47,
                                            "line": 11
                                          },
                                          "start": {
                                            "column": 34,
                                            "line": 11
                                          }
                                        }
                                      }
                                    ],
                                    "returnType": {
                                      "type": "TSTypeAnnotation",
                                      "loc": {
                                        "end": {
                                          "column": 67,
                                          "line": 11
                                        },
                                        "start": {
                                          "column": 49,
                                          "line": 11
                                        }
                                      },
                                      "range": [
                                        348,
                                        366
                                      ],
                                      "typeAnnotation": {
                                        "type": "TSUnionType",
                                        "types": [
                                          {
                                            "type": "TSTypeReference",
                                            "typeName": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "V",
                                              "optional": false,
                                              "range": [
                                                351,
                                                352
                                              ],
                                              "loc": {
                                                "end": {
                                                  "column": 53,
                                                  "line": 11
                                                },
                                                "start": {
                                                  "column": 52,
                                                  "line": 11
                                                }
                                              }
                                            },
                                            "range": [
                                              351,
                                              352
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 53,
                                                "line": 11
                                              },
                                              "start": {
                                                "column": 52,
                                                "line": 11
                                              }
                                            }
                                          },
                                          {
                                            "type": "TSTypeReference",
                                            "typeArguments": {
                                              "type": "TSTypeParameterInstantiation",
                                              "range": [
                                                363,
                                                366
                                              ],
                                              "params": [
                                                {
                                                  "type": "TSTypeReference",
                                                  "typeName": {
                                                    "type": "Identifier",
                                                    "decorators": [],
                                                    "name": "V",
                                                    "optional": false,
                                                    "range": [
                                                      364,
                                                      365
                                                    ],
                                                    "loc": {
                                                      "end": {
                                                        "column": 66,
                                                        "line": 11
                                                      },
                                                      "start": {
                                                        "column": 65,
                                                        "line": 11
                                                      }
                                                    }
                                                  },
                                                  "range": [
                                                    364,
                                                    365
                                                  ],
                                                  "loc": {
                                                    "end": {
                                                      "column": 66,
                                                      "line": 11
                                                    },
                                                    "start": {
                                                      "column": 65,
                                                      "line": 11
                                                    }
                                                  }
                                                }
                                              ],
                                              "loc": {
                                                "end": {
                                                  "column": 67,
                                                  "line": 11
                                                },
                                                "start": {
                                                  "column": 64,
                                                  "line": 11
                                                }
                                              }
                                            },
                                            "typeName": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "Thenable",
                                              "optional": false,
                                              "range": [
                                                355,
                                                363
                                              ],
                                              "loc": {
                                                "end": {
                                                  "column": 64,
                                                  "line": 11
                                                },
                                                "start": {
                                                  "column": 56,
                                                  "line": 11
                                                }
                                              }
                                            },
                                            "range": [
                                              355,
                                              366
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 67,
                                                "line": 11
                                              },
                                              "start": {
                                                "column": 56,
                                                "line": 11
                                              }
                                            }
                                          }
                                        ],
                                        "range": [
                                          351,
                                          366
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 67,
                                            "line": 11
                                          },
                                          "start": {
                                            "column": 52,
                                            "line": 11
                                          }
                                        }
                                      }
                                    },
                                    "range": [
                                      332,
                                      366
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 67,
                                        "line": 11
                                      },
                                      "start": {
                                        "column": 33,
                                        "line": 11
                                      }
                                    }
                                  }
                                },
                                "range": [
                                  319,
                                  366
                                ],
                                "loc": {
                                  "end": {
                                    "column": 67,
                                    "line": 11
                                  },
                                  "start": {
                                    "column": 20,
                                    "line": 11
                                  }
                                }
                              }
                            ],
                            "typeParameters": {
                              "type": "TSTypeParameterDeclaration",
                              "loc": {
                                "end": {
                                  "column": 19,
                                  "line": 11
                                },
                                "start": {
                                  "column": 16,
                                  "line": 11
                                }
                              },
                              "range": [
                                315,
                                318
                              ],
                              "params": [
                                {
                                  "type": "TSTypeParameter",
                                  "const": false,
                                  "in": false,
                                  "name": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "V",
                                    "optional": false,
                                    "range": [
                                      316,
                                      317
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 18,
                                        "line": 11
                                      },
                                      "start": {
                                        "column": 17,
                                        "line": 11
                                      }
                                    }
                                  },
                                  "out": false,
                                  "range": [
                                    316,
                                    317
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 18,
                                      "line": 11
                                    },
                                    "start": {
                                      "column": 17,
                                      "line": 11
                                    }
                                  }
                                }
                              ]
                            },
                            "loc": {
                              "end": {
                                "column": 13,
                                "line": 13
                              },
                              "start": {
                                "column": 16,
                                "line": 11
                              }
                            }
                          },
                          "range": [
                            311,
                            459
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 13
                            },
                            "start": {
                              "column": 12,
                              "line": 11
                            }
                          }
                        }
                      ],
                      "range": [
                        297,
                        469
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 14
                        },
                        "start": {
                          "column": 15,
                          "line": 10
                        }
                      }
                    },
                    "range": [
                      290,
                      470
                    ],
                    "loc": {
                      "end": {
                        "column": 10,
                        "line": 14
                      },
                      "start": {
                        "column": 8,
                        "line": 10
                      }
                    }
                  }
                ],
                "range": [
                  247,
                  476
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 15
                  },
                  "start": {
                    "column": 40,
                    "line": 8
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
                  "name": "input",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 8
                      },
                      "start": {
                        "column": 10,
                        "line": 8
                      }
                    },
                    "range": [
                      217,
                      224
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Input",
                        "optional": false,
                        "range": [
                          219,
                          224
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 8
                          },
                          "start": {
                            "column": 12,
                            "line": 8
                          }
                        }
                      },
                      "range": [
                        219,
                        224
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 8
                        },
                        "start": {
                          "column": 12,
                          "line": 8
                        }
                      }
                    }
                  },
                  "range": [
                    212,
                    224
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 8
                    },
                    "start": {
                      "column": 5,
                      "line": 8
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 8
                  },
                  "start": {
                    "column": 18,
                    "line": 8
                  }
                },
                "range": [
                  225,
                  243
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      235,
                      243
                    ],
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Result",
                          "optional": false,
                          "range": [
                            236,
                            242
                          ],
                          "loc": {
                            "end": {
                              "column": 35,
                              "line": 8
                            },
                            "start": {
                              "column": 29,
                              "line": 8
                            }
                          }
                        },
                        "range": [
                          236,
                          242
                        ],
                        "loc": {
                          "end": {
                            "column": 35,
                            "line": 8
                          },
                          "start": {
                            "column": 29,
                            "line": 8
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 8
                      },
                      "start": {
                        "column": 28,
                        "line": 8
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Thenable",
                    "optional": false,
                    "range": [
                      227,
                      235
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 8
                      },
                      "start": {
                        "column": 20,
                        "line": 8
                      }
                    }
                  },
                  "range": [
                    227,
                    243
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 8
                    },
                    "start": {
                      "column": 20,
                      "line": 8
                    }
                  }
                }
              },
              "range": [
                211,
                476
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 15
                },
                "start": {
                  "column": 4,
                  "line": 8
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
                "name": "fn",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 82,
                      "line": 7
                    },
                    "start": {
                      "column": 37,
                      "line": 7
                    }
                  },
                  "range": [
                    157,
                    202
                  ],
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "input",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 52,
                              "line": 7
                            },
                            "start": {
                              "column": 45,
                              "line": 7
                            }
                          },
                          "range": [
                            165,
                            172
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Input",
                              "optional": false,
                              "range": [
                                167,
                                172
                              ],
                              "loc": {
                                "end": {
                                  "column": 52,
                                  "line": 7
                                },
                                "start": {
                                  "column": 47,
                                  "line": 7
                                }
                              }
                            },
                            "range": [
                              167,
                              172
                            ],
                            "loc": {
                              "end": {
                                "column": 52,
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
                          160,
                          172
                        ],
                        "loc": {
                          "end": {
                            "column": 52,
                            "line": 7
                          },
                          "start": {
                            "column": 40,
                            "line": 7
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 82,
                          "line": 7
                        },
                        "start": {
                          "column": 54,
                          "line": 7
                        }
                      },
                      "range": [
                        174,
                        202
                      ],
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Result",
                              "optional": false,
                              "range": [
                                177,
                                183
                              ],
                              "loc": {
                                "end": {
                                  "column": 63,
                                  "line": 7
                                },
                                "start": {
                                  "column": 57,
                                  "line": 7
                                }
                              }
                            },
                            "range": [
                              177,
                              183
                            ],
                            "loc": {
                              "end": {
                                "column": 63,
                                "line": 7
                              },
                              "start": {
                                "column": 57,
                                "line": 7
                              }
                            }
                          },
                          {
                            "type": "TSTypeReference",
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "range": [
                                194,
                                202
                              ],
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Result",
                                    "optional": false,
                                    "range": [
                                      195,
                                      201
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 81,
                                        "line": 7
                                      },
                                      "start": {
                                        "column": 75,
                                        "line": 7
                                      }
                                    }
                                  },
                                  "range": [
                                    195,
                                    201
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 81,
                                      "line": 7
                                    },
                                    "start": {
                                      "column": 75,
                                      "line": 7
                                    }
                                  }
                                }
                              ],
                              "loc": {
                                "end": {
                                  "column": 82,
                                  "line": 7
                                },
                                "start": {
                                  "column": 74,
                                  "line": 7
                                }
                              }
                            },
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Thenable",
                              "optional": false,
                              "range": [
                                186,
                                194
                              ],
                              "loc": {
                                "end": {
                                  "column": 74,
                                  "line": 7
                                },
                                "start": {
                                  "column": 66,
                                  "line": 7
                                }
                              }
                            },
                            "range": [
                              186,
                              202
                            ],
                            "loc": {
                              "end": {
                                "column": 82,
                                "line": 7
                              },
                              "start": {
                                "column": 66,
                                "line": 7
                              }
                            }
                          }
                        ],
                        "range": [
                          177,
                          202
                        ],
                        "loc": {
                          "end": {
                            "column": 82,
                            "line": 7
                          },
                          "start": {
                            "column": 57,
                            "line": 7
                          }
                        }
                      }
                    },
                    "range": [
                      159,
                      202
                    ],
                    "loc": {
                      "end": {
                        "column": 82,
                        "line": 7
                      },
                      "start": {
                        "column": 39,
                        "line": 7
                      }
                    }
                  }
                },
                "range": [
                  155,
                  202
                ],
                "loc": {
                  "end": {
                    "column": 82,
                    "line": 7
                  },
                  "start": {
                    "column": 35,
                    "line": 7
                  }
                }
              }
            ],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 34,
                  "line": 7
                },
                "start": {
                  "column": 19,
                  "line": 7
                }
              },
              "range": [
                139,
                154
              ],
              "params": [
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Result",
                    "optional": false,
                    "range": [
                      140,
                      146
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 7
                      },
                      "start": {
                        "column": 20,
                        "line": 7
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    140,
                    146
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 7
                    },
                    "start": {
                      "column": 20,
                      "line": 7
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Input",
                    "optional": false,
                    "range": [
                      148,
                      153
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 7
                      },
                      "start": {
                        "column": 28,
                        "line": 7
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    148,
                    153
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 7
                    },
                    "start": {
                      "column": 28,
                      "line": 7
                    }
                  }
                }
              ]
            },
            "range": [
              139,
              476
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 15
              },
              "start": {
                "column": 19,
                "line": 7
              }
            }
          },
          "range": [
            126,
            476
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 15
            },
            "start": {
              "column": 6,
              "line": 7
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        120,
        476
      ],
      "loc": {
        "end": {
          "column": 5,
          "line": 15
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
            "name": "toThenableInferred",
            "optional": false,
            "range": [
              484,
              502
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 17
              },
              "start": {
                "column": 6,
                "line": 17
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
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
                          "name": "result",
                          "optional": false,
                          "range": [
                            629,
                            635
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 19
                            },
                            "start": {
                              "column": 14,
                              "line": 19
                            }
                          }
                        },
                        "init": {
                          "type": "CallExpression",
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "input",
                              "optional": false,
                              "range": [
                                641,
                                646
                              ],
                              "loc": {
                                "end": {
                                  "column": 31,
                                  "line": 19
                                },
                                "start": {
                                  "column": 26,
                                  "line": 19
                                }
                              }
                            }
                          ],
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "fn",
                            "optional": false,
                            "range": [
                              638,
                              640
                            ],
                            "loc": {
                              "end": {
                                "column": 25,
                                "line": 19
                              },
                              "start": {
                                "column": 23,
                                "line": 19
                              }
                            }
                          },
                          "optional": false,
                          "range": [
                            638,
                            647
                          ],
                          "loc": {
                            "end": {
                              "column": 32,
                              "line": 19
                            },
                            "start": {
                              "column": 23,
                              "line": 19
                            }
                          }
                        },
                        "range": [
                          629,
                          647
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 19
                          },
                          "start": {
                            "column": 14,
                            "line": 19
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const",
                    "range": [
                      623,
                      647
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 19
                      },
                      "start": {
                        "column": 8,
                        "line": 19
                      }
                    }
                  },
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
                            "name": "then",
                            "optional": false,
                            "range": [
                              677,
                              681
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
                          "method": true,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "FunctionExpression",
                            "range": [
                              681,
                              783
                            ],
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
                                        "type": "TSAsExpression",
                                        "expression": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "result",
                                          "optional": false,
                                          "range": [
                                            752,
                                            758
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 61,
                                              "line": 22
                                            },
                                            "start": {
                                              "column": 55,
                                              "line": 22
                                            }
                                          }
                                        },
                                        "typeAnnotation": {
                                          "type": "TSTypeReference",
                                          "typeName": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "Result",
                                            "optional": false,
                                            "range": [
                                              762,
                                              768
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 71,
                                                "line": 22
                                              },
                                              "start": {
                                                "column": 65,
                                                "line": 22
                                              }
                                            }
                                          },
                                          "range": [
                                            762,
                                            768
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 71,
                                              "line": 22
                                            },
                                            "start": {
                                              "column": 65,
                                              "line": 22
                                            }
                                          }
                                        },
                                        "range": [
                                          752,
                                          768
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 71,
                                            "line": 22
                                          },
                                          "start": {
                                            "column": 55,
                                            "line": 22
                                          }
                                        }
                                      }
                                    ],
                                    "callee": {
                                      "type": "CallExpression",
                                      "arguments": [
                                        {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "onFulfilled",
                                          "optional": false,
                                          "range": [
                                            739,
                                            750
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 53,
                                              "line": 22
                                            },
                                            "start": {
                                              "column": 42,
                                              "line": 22
                                            }
                                          }
                                        }
                                      ],
                                      "callee": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "toThenableInferred",
                                        "optional": false,
                                        "range": [
                                          720,
                                          738
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 41,
                                            "line": 22
                                          },
                                          "start": {
                                            "column": 23,
                                            "line": 22
                                          }
                                        }
                                      },
                                      "optional": false,
                                      "range": [
                                        720,
                                        751
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 54,
                                          "line": 22
                                        },
                                        "start": {
                                          "column": 23,
                                          "line": 22
                                        }
                                      }
                                    },
                                    "optional": false,
                                    "range": [
                                      720,
                                      769
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 72,
                                        "line": 22
                                      },
                                      "start": {
                                        "column": 23,
                                        "line": 22
                                      }
                                    }
                                  },
                                  "range": [
                                    713,
                                    769
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 72,
                                      "line": 22
                                    },
                                    "start": {
                                      "column": 16,
                                      "line": 22
                                    }
                                  }
                                }
                              ],
                              "range": [
                                695,
                                783
                              ],
                              "loc": {
                                "end": {
                                  "column": 13,
                                  "line": 23
                                },
                                "start": {
                                  "column": 30,
                                  "line": 21
                                }
                              }
                            },
                            "declare": false,
                            "expression": false,
                            "generator": false,
                            "id": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "onFulfilled",
                                "optional": false,
                                "range": [
                                  682,
                                  693
                                ],
                                "loc": {
                                  "end": {
                                    "column": 28,
                                    "line": 21
                                  },
                                  "start": {
                                    "column": 17,
                                    "line": 21
                                  }
                                }
                              }
                            ],
                            "loc": {
                              "end": {
                                "column": 13,
                                "line": 23
                              },
                              "start": {
                                "column": 16,
                                "line": 21
                              }
                            }
                          },
                          "range": [
                            677,
                            783
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 23
                            },
                            "start": {
                              "column": 12,
                              "line": 21
                            }
                          }
                        }
                      ],
                      "range": [
                        663,
                        793
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 24
                        },
                        "start": {
                          "column": 15,
                          "line": 20
                        }
                      }
                    },
                    "range": [
                      656,
                      794
                    ],
                    "loc": {
                      "end": {
                        "column": 10,
                        "line": 24
                      },
                      "start": {
                        "column": 8,
                        "line": 20
                      }
                    }
                  }
                ],
                "range": [
                  613,
                  800
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 25
                  },
                  "start": {
                    "column": 40,
                    "line": 18
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
                  "name": "input",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 18
                      },
                      "start": {
                        "column": 10,
                        "line": 18
                      }
                    },
                    "range": [
                      583,
                      590
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Input",
                        "optional": false,
                        "range": [
                          585,
                          590
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 18
                          },
                          "start": {
                            "column": 12,
                            "line": 18
                          }
                        }
                      },
                      "range": [
                        585,
                        590
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 18
                        },
                        "start": {
                          "column": 12,
                          "line": 18
                        }
                      }
                    }
                  },
                  "range": [
                    578,
                    590
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 18
                    },
                    "start": {
                      "column": 5,
                      "line": 18
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 18
                  },
                  "start": {
                    "column": 18,
                    "line": 18
                  }
                },
                "range": [
                  591,
                  609
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      601,
                      609
                    ],
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Result",
                          "optional": false,
                          "range": [
                            602,
                            608
                          ],
                          "loc": {
                            "end": {
                              "column": 35,
                              "line": 18
                            },
                            "start": {
                              "column": 29,
                              "line": 18
                            }
                          }
                        },
                        "range": [
                          602,
                          608
                        ],
                        "loc": {
                          "end": {
                            "column": 35,
                            "line": 18
                          },
                          "start": {
                            "column": 29,
                            "line": 18
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 18
                      },
                      "start": {
                        "column": 28,
                        "line": 18
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Thenable",
                    "optional": false,
                    "range": [
                      593,
                      601
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 18
                      },
                      "start": {
                        "column": 20,
                        "line": 18
                      }
                    }
                  },
                  "range": [
                    593,
                    609
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 18
                    },
                    "start": {
                      "column": 20,
                      "line": 18
                    }
                  }
                }
              },
              "range": [
                577,
                800
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 25
                },
                "start": {
                  "column": 4,
                  "line": 18
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
                "name": "fn",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 90,
                      "line": 17
                    },
                    "start": {
                      "column": 45,
                      "line": 17
                    }
                  },
                  "range": [
                    523,
                    568
                  ],
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "input",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 60,
                              "line": 17
                            },
                            "start": {
                              "column": 53,
                              "line": 17
                            }
                          },
                          "range": [
                            531,
                            538
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Input",
                              "optional": false,
                              "range": [
                                533,
                                538
                              ],
                              "loc": {
                                "end": {
                                  "column": 60,
                                  "line": 17
                                },
                                "start": {
                                  "column": 55,
                                  "line": 17
                                }
                              }
                            },
                            "range": [
                              533,
                              538
                            ],
                            "loc": {
                              "end": {
                                "column": 60,
                                "line": 17
                              },
                              "start": {
                                "column": 55,
                                "line": 17
                              }
                            }
                          }
                        },
                        "range": [
                          526,
                          538
                        ],
                        "loc": {
                          "end": {
                            "column": 60,
                            "line": 17
                          },
                          "start": {
                            "column": 48,
                            "line": 17
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 90,
                          "line": 17
                        },
                        "start": {
                          "column": 62,
                          "line": 17
                        }
                      },
                      "range": [
                        540,
                        568
                      ],
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Result",
                              "optional": false,
                              "range": [
                                543,
                                549
                              ],
                              "loc": {
                                "end": {
                                  "column": 71,
                                  "line": 17
                                },
                                "start": {
                                  "column": 65,
                                  "line": 17
                                }
                              }
                            },
                            "range": [
                              543,
                              549
                            ],
                            "loc": {
                              "end": {
                                "column": 71,
                                "line": 17
                              },
                              "start": {
                                "column": 65,
                                "line": 17
                              }
                            }
                          },
                          {
                            "type": "TSTypeReference",
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "range": [
                                560,
                                568
                              ],
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Result",
                                    "optional": false,
                                    "range": [
                                      561,
                                      567
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 89,
                                        "line": 17
                                      },
                                      "start": {
                                        "column": 83,
                                        "line": 17
                                      }
                                    }
                                  },
                                  "range": [
                                    561,
                                    567
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 89,
                                      "line": 17
                                    },
                                    "start": {
                                      "column": 83,
                                      "line": 17
                                    }
                                  }
                                }
                              ],
                              "loc": {
                                "end": {
                                  "column": 90,
                                  "line": 17
                                },
                                "start": {
                                  "column": 82,
                                  "line": 17
                                }
                              }
                            },
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Thenable",
                              "optional": false,
                              "range": [
                                552,
                                560
                              ],
                              "loc": {
                                "end": {
                                  "column": 82,
                                  "line": 17
                                },
                                "start": {
                                  "column": 74,
                                  "line": 17
                                }
                              }
                            },
                            "range": [
                              552,
                              568
                            ],
                            "loc": {
                              "end": {
                                "column": 90,
                                "line": 17
                              },
                              "start": {
                                "column": 74,
                                "line": 17
                              }
                            }
                          }
                        ],
                        "range": [
                          543,
                          568
                        ],
                        "loc": {
                          "end": {
                            "column": 90,
                            "line": 17
                          },
                          "start": {
                            "column": 65,
                            "line": 17
                          }
                        }
                      }
                    },
                    "range": [
                      525,
                      568
                    ],
                    "loc": {
                      "end": {
                        "column": 90,
                        "line": 17
                      },
                      "start": {
                        "column": 47,
                        "line": 17
                      }
                    }
                  }
                },
                "range": [
                  521,
                  568
                ],
                "loc": {
                  "end": {
                    "column": 90,
                    "line": 17
                  },
                  "start": {
                    "column": 43,
                    "line": 17
                  }
                }
              }
            ],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 42,
                  "line": 17
                },
                "start": {
                  "column": 27,
                  "line": 17
                }
              },
              "range": [
                505,
                520
              ],
              "params": [
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Result",
                    "optional": false,
                    "range": [
                      506,
                      512
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 17
                      },
                      "start": {
                        "column": 28,
                        "line": 17
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    506,
                    512
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 17
                    },
                    "start": {
                      "column": 28,
                      "line": 17
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Input",
                    "optional": false,
                    "range": [
                      514,
                      519
                    ],
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 17
                      },
                      "start": {
                        "column": 36,
                        "line": 17
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    514,
                    519
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 17
                    },
                    "start": {
                      "column": 36,
                      "line": 17
                    }
                  }
                }
              ]
            },
            "range": [
              505,
              800
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 25
              },
              "start": {
                "column": 27,
                "line": 17
              }
            }
          },
          "range": [
            484,
            800
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 25
            },
            "start": {
              "column": 6,
              "line": 17
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        478,
        800
      ],
      "loc": {
        "end": {
          "column": 5,
          "line": 25
        },
        "start": {
          "column": 0,
          "line": 17
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 26
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
