__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    1447
  ],
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          19,
          66
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "timeout",
              "optional": false,
              "range": [
                25,
                32
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 2
                },
                "start": {
                  "column": 4,
                  "line": 2
                }
              }
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 20,
                  "line": 2
                },
                "start": {
                  "column": 12,
                  "line": 2
                }
              },
              "range": [
                33,
                41
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  35,
                  41
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 2
                  },
                  "start": {
                    "column": 14,
                    "line": 2
                  }
                }
              }
            },
            "range": [
              25,
              42
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 2
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          },
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "onError",
              "optional": false,
              "range": [
                47,
                54
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 3
                },
                "start": {
                  "column": 4,
                  "line": 3
                }
              }
            },
            "kind": "method",
            "optional": true,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 20,
                  "line": 3
                },
                "start": {
                  "column": 14,
                  "line": 3
                }
              },
              "range": [
                57,
                63
              ],
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "range": [
                  59,
                  63
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 3
                  },
                  "start": {
                    "column": 16,
                    "line": 3
                  }
                }
              }
            },
            "static": false,
            "range": [
              47,
              64
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
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 4
          },
          "start": {
            "column": 19,
            "line": 1
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Settings",
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
      "range": [
        0,
        66
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 1
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
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "timeout",
                    "optional": false,
                    "range": [
                      113,
                      120
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 7
                      },
                      "start": {
                        "column": 13,
                        "line": 7
                      }
                    }
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "raw": "1000",
                    "value": 1000,
                    "range": [
                      122,
                      126
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 7
                      },
                      "start": {
                        "column": 22,
                        "line": 7
                      }
                    }
                  },
                  "range": [
                    113,
                    126
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 7
                    },
                    "start": {
                      "column": 13,
                      "line": 7
                    }
                  }
                }
              ],
              "range": [
                111,
                128
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 7
                },
                "start": {
                  "column": 11,
                  "line": 7
                }
              }
            },
            "range": [
              104,
              129
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 7
              },
              "start": {
                "column": 4,
                "line": 7
              }
            }
          }
        ],
        "range": [
          98,
          131
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 8
          },
          "start": {
            "column": 30,
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
        "name": "getDefaultSettings",
        "optional": false,
        "range": [
          77,
          95
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 6
          },
          "start": {
            "column": 9,
            "line": 6
          }
        }
      },
      "params": [],
      "range": [
        68,
        131
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 6
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          151,
          192
        ],
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 10
                    },
                    "start": {
                      "column": 9,
                      "line": 10
                    }
                  },
                  "range": [
                    162,
                    170
                  ],
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "range": [
                      164,
                      170
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 10
                      },
                      "start": {
                        "column": 11,
                        "line": 10
                      }
                    }
                  }
                },
                "range": [
                  161,
                  170
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 10
                  },
                  "start": {
                    "column": 8,
                    "line": 10
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 37,
                  "line": 10
                },
                "start": {
                  "column": 18,
                  "line": 10
                }
              },
              "range": [
                171,
                190
              ],
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "timeout",
                      "optional": false,
                      "range": [
                        175,
                        182
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 10
                        },
                        "start": {
                          "column": 22,
                          "line": 10
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
                          "column": 35,
                          "line": 10
                        },
                        "start": {
                          "column": 29,
                          "line": 10
                        }
                      },
                      "range": [
                        182,
                        188
                      ],
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "raw": "1000",
                          "value": 1000,
                          "range": [
                            184,
                            188
                          ],
                          "loc": {
                            "end": {
                              "column": 35,
                              "line": 10
                            },
                            "start": {
                              "column": 31,
                              "line": 10
                            }
                          }
                        },
                        "range": [
                          184,
                          188
                        ],
                        "loc": {
                          "end": {
                            "column": 35,
                            "line": 10
                          },
                          "start": {
                            "column": 31,
                            "line": 10
                          }
                        }
                      }
                    },
                    "range": [
                      175,
                      188
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 10
                      },
                      "start": {
                        "column": 22,
                        "line": 10
                      }
                    }
                  }
                ],
                "range": [
                  173,
                  190
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 10
                  },
                  "start": {
                    "column": 20,
                    "line": 10
                  }
                }
              }
            },
            "range": [
              157,
              190
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 10
              },
              "start": {
                "column": 4,
                "line": 10
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 11
          },
          "start": {
            "column": 19,
            "line": 9
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "CtorOnly",
        "optional": false,
        "range": [
          142,
          150
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 9
          },
          "start": {
            "column": 10,
            "line": 9
          }
        }
      },
      "range": [
        132,
        192
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 11
        },
        "start": {
          "column": 0,
          "line": 9
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          235,
          248
        ],
        "loc": {
          "end": {
            "column": 54,
            "line": 13
          },
          "start": {
            "column": 41,
            "line": 13
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "doSomething",
        "optional": false,
        "range": [
          203,
          214
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 13
          },
          "start": {
            "column": 9,
            "line": 13
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "settings",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 39,
                "line": 13
              },
              "start": {
                "column": 29,
                "line": 13
              }
            },
            "range": [
              223,
              233
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Settings",
                "optional": false,
                "range": [
                  225,
                  233
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 13
                  },
                  "start": {
                    "column": 31,
                    "line": 13
                  }
                }
              },
              "range": [
                225,
                233
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 13
                },
                "start": {
                  "column": 31,
                  "line": 13
                }
              }
            }
          },
          "range": [
            215,
            233
          ],
          "loc": {
            "end": {
              "column": 39,
              "line": 13
            },
            "start": {
              "column": 21,
              "line": 13
            }
          }
        }
      ],
      "range": [
        194,
        248
      ],
      "loc": {
        "end": {
          "column": 54,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 13
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "getDefaultSettings",
            "optional": false,
            "range": [
              300,
              318
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 15
              },
              "start": {
                "column": 12,
                "line": 15
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "doSomething",
          "optional": false,
          "range": [
            288,
            299
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 15
            },
            "start": {
              "column": 0,
              "line": 15
            }
          }
        },
        "optional": false,
        "range": [
          288,
          319
        ],
        "loc": {
          "end": {
            "column": 31,
            "line": 15
          },
          "start": {
            "column": 0,
            "line": 15
          }
        }
      },
      "range": [
        288,
        320
      ],
      "loc": {
        "end": {
          "column": 32,
          "line": 15
        },
        "start": {
          "column": 0,
          "line": 15
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
                    "name": "timeout",
                    "optional": false,
                    "range": [
                      342,
                      349
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 16
                      },
                      "start": {
                        "column": 21,
                        "line": 16
                      }
                    }
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "raw": "1000",
                    "value": 1000,
                    "range": [
                      351,
                      355
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 16
                      },
                      "start": {
                        "column": 30,
                        "line": 16
                      }
                    }
                  },
                  "range": [
                    342,
                    355
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 16
                    },
                    "start": {
                      "column": 21,
                      "line": 16
                    }
                  }
                }
              ],
              "range": [
                340,
                357
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 16
                },
                "start": {
                  "column": 19,
                  "line": 16
                }
              }
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [],
            "range": [
              333,
              358
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 16
              },
              "start": {
                "column": 12,
                "line": 16
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "doSomething",
          "optional": false,
          "range": [
            321,
            332
          ],
          "loc": {
            "end": {
              "column": 11,
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
          321,
          359
        ],
        "loc": {
          "end": {
            "column": 38,
            "line": 16
          },
          "start": {
            "column": 0,
            "line": 16
          }
        }
      },
      "range": [
        321,
        360
      ],
      "loc": {
        "end": {
          "column": 39,
          "line": 16
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
            "type": "TSAsExpression",
            "expression": {
              "type": "Literal",
              "raw": "null",
              "value": null,
              "range": [
                373,
                377
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 17
                },
                "start": {
                  "column": 12,
                  "line": 17
                }
              }
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "CtorOnly",
                "optional": false,
                "range": [
                  381,
                  389
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 17
                  },
                  "start": {
                    "column": 20,
                    "line": 17
                  }
                }
              },
              "range": [
                381,
                389
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 17
                },
                "start": {
                  "column": 20,
                  "line": 17
                }
              }
            },
            "range": [
              373,
              389
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 17
              },
              "start": {
                "column": 12,
                "line": 17
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "doSomething",
          "optional": false,
          "range": [
            361,
            372
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 17
            },
            "start": {
              "column": 0,
              "line": 17
            }
          }
        },
        "optional": false,
        "range": [
          361,
          390
        ],
        "loc": {
          "end": {
            "column": 29,
            "line": 17
          },
          "start": {
            "column": 0,
            "line": 17
          }
        }
      },
      "range": [
        361,
        391
      ],
      "loc": {
        "end": {
          "column": 30,
          "line": 17
        },
        "start": {
          "column": 0,
          "line": 17
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "12",
            "value": 12,
            "range": [
              404,
              406
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 18
              },
              "start": {
                "column": 12,
                "line": 18
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "doSomething",
          "optional": false,
          "range": [
            392,
            403
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 18
            },
            "start": {
              "column": 0,
              "line": 18
            }
          }
        },
        "optional": false,
        "range": [
          392,
          407
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 18
          },
          "start": {
            "column": 0,
            "line": 18
          }
        }
      },
      "range": [
        392,
        408
      ],
      "loc": {
        "end": {
          "column": 16,
          "line": 18
        },
        "start": {
          "column": 0,
          "line": 18
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "'completely wrong'",
            "value": "completely wrong",
            "range": [
              421,
              439
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 19
              },
              "start": {
                "column": 12,
                "line": 19
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "doSomething",
          "optional": false,
          "range": [
            409,
            420
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 19
            },
            "start": {
              "column": 0,
              "line": 19
            }
          }
        },
        "optional": false,
        "range": [
          409,
          440
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
      "range": [
        409,
        441
      ],
      "loc": {
        "end": {
          "column": 32,
          "line": 19
        },
        "start": {
          "column": 0,
          "line": 19
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "false",
            "value": false,
            "range": [
              454,
              459
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 20
              },
              "start": {
                "column": 12,
                "line": 20
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "doSomething",
          "optional": false,
          "range": [
            442,
            453
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 20
            },
            "start": {
              "column": 0,
              "line": 20
            }
          }
        },
        "optional": false,
        "range": [
          442,
          460
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 20
          },
          "start": {
            "column": 0,
            "line": 20
          }
        }
      },
      "range": [
        442,
        461
      ],
      "loc": {
        "end": {
          "column": 19,
          "line": 20
        },
        "start": {
          "column": 0,
          "line": 20
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ConfigurableStart",
        "optional": false,
        "range": [
          569,
          586
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 24
          },
          "start": {
            "column": 5,
            "line": 24
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "useStart",
              "optional": false,
              "range": [
                591,
                599
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 24
                },
                "start": {
                  "column": 27,
                  "line": 24
                }
              }
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 45,
                  "line": 24
                },
                "start": {
                  "column": 36,
                  "line": 24
                }
              },
              "range": [
                600,
                609
              ],
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "range": [
                  602,
                  609
                ],
                "loc": {
                  "end": {
                    "column": 45,
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
              591,
              609
            ],
            "loc": {
              "end": {
                "column": 45,
                "line": 24
              },
              "start": {
                "column": 27,
                "line": 24
              }
            }
          }
        ],
        "range": [
          589,
          611
        ],
        "loc": {
          "end": {
            "column": 47,
            "line": 24
          },
          "start": {
            "column": 25,
            "line": 24
          }
        }
      },
      "range": [
        564,
        611
      ],
      "loc": {
        "end": {
          "column": 47,
          "line": 24
        },
        "start": {
          "column": 0,
          "line": 24
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ConfigurableEnd",
        "optional": false,
        "range": [
          617,
          632
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 25
          },
          "start": {
            "column": 5,
            "line": 25
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "useEnd",
              "optional": false,
              "range": [
                637,
                643
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 25
                },
                "start": {
                  "column": 25,
                  "line": 25
                }
              }
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 41,
                  "line": 25
                },
                "start": {
                  "column": 32,
                  "line": 25
                }
              },
              "range": [
                644,
                653
              ],
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "range": [
                  646,
                  653
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 25
                  },
                  "start": {
                    "column": 34,
                    "line": 25
                  }
                }
              }
            },
            "range": [
              637,
              653
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 25
              },
              "start": {
                "column": 25,
                "line": 25
              }
            }
          }
        ],
        "range": [
          635,
          655
        ],
        "loc": {
          "end": {
            "column": 43,
            "line": 25
          },
          "start": {
            "column": 23,
            "line": 25
          }
        }
      },
      "range": [
        612,
        655
      ],
      "loc": {
        "end": {
          "column": 43,
          "line": 25
        },
        "start": {
          "column": 0,
          "line": 25
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ConfigurableStartEnd",
        "optional": false,
        "range": [
          661,
          681
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 26
          },
          "start": {
            "column": 5,
            "line": 26
          }
        }
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "ConfigurableStart",
              "optional": false,
              "range": [
                684,
                701
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 26
                },
                "start": {
                  "column": 28,
                  "line": 26
                }
              }
            },
            "range": [
              684,
              701
            ],
            "loc": {
              "end": {
                "column": 45,
                "line": 26
              },
              "start": {
                "column": 28,
                "line": 26
              }
            }
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "ConfigurableEnd",
              "optional": false,
              "range": [
                704,
                719
              ],
              "loc": {
                "end": {
                  "column": 63,
                  "line": 26
                },
                "start": {
                  "column": 48,
                  "line": 26
                }
              }
            },
            "range": [
              704,
              719
            ],
            "loc": {
              "end": {
                "column": 63,
                "line": 26
              },
              "start": {
                "column": 48,
                "line": 26
              }
            }
          }
        ],
        "range": [
          684,
          719
        ],
        "loc": {
          "end": {
            "column": 63,
            "line": 26
          },
          "start": {
            "column": 28,
            "line": 26
          }
        }
      },
      "range": [
        656,
        719
      ],
      "loc": {
        "end": {
          "column": 63,
          "line": 26
        },
        "start": {
          "column": 0,
          "line": 26
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          744,
          787
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prefix",
              "optional": false,
              "range": [
                750,
                756
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 28
                },
                "start": {
                  "column": 4,
                  "line": 28
                }
              }
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 19,
                  "line": 28
                },
                "start": {
                  "column": 11,
                  "line": 28
                }
              },
              "range": [
                757,
                765
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  759,
                  765
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 28
                  },
                  "start": {
                    "column": 13,
                    "line": 28
                  }
                }
              }
            },
            "range": [
              750,
              765
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
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "suffix",
              "optional": false,
              "range": [
                770,
                776
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 29
                },
                "start": {
                  "column": 4,
                  "line": 29
                }
              }
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 19,
                  "line": 29
                },
                "start": {
                  "column": 11,
                  "line": 29
                }
              },
              "range": [
                777,
                785
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  779,
                  785
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 29
                  },
                  "start": {
                    "column": 13,
                    "line": 29
                  }
                }
              }
            },
            "range": [
              770,
              785
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
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 30
          },
          "start": {
            "column": 24,
            "line": 27
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "InsertOptions",
        "optional": false,
        "range": [
          730,
          743
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 27
          },
          "start": {
            "column": 10,
            "line": 27
          }
        }
      },
      "range": [
        720,
        787
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 30
        },
        "start": {
          "column": 0,
          "line": 27
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ChangeOptions",
        "optional": false,
        "range": [
          793,
          806
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 31
          },
          "start": {
            "column": 5,
            "line": 31
          }
        }
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "ConfigurableStartEnd",
              "optional": false,
              "range": [
                809,
                829
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 31
                },
                "start": {
                  "column": 21,
                  "line": 31
                }
              }
            },
            "range": [
              809,
              829
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 31
              },
              "start": {
                "column": 21,
                "line": 31
              }
            }
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "InsertOptions",
              "optional": false,
              "range": [
                832,
                845
              ],
              "loc": {
                "end": {
                  "column": 57,
                  "line": 31
                },
                "start": {
                  "column": 44,
                  "line": 31
                }
              }
            },
            "range": [
              832,
              845
            ],
            "loc": {
              "end": {
                "column": 57,
                "line": 31
              },
              "start": {
                "column": 44,
                "line": 31
              }
            }
          }
        ],
        "range": [
          809,
          845
        ],
        "loc": {
          "end": {
            "column": 57,
            "line": 31
          },
          "start": {
            "column": 21,
            "line": 31
          }
        }
      },
      "range": [
        788,
        846
      ],
      "loc": {
        "end": {
          "column": 58,
          "line": 31
        },
        "start": {
          "column": 0,
          "line": 31
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
            "type": "VariableDeclaration",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "changes",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 35
                      },
                      "start": {
                        "column": 15,
                        "line": 35
                      }
                    },
                    "range": [
                      959,
                      976
                    ],
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ChangeOptions",
                          "optional": false,
                          "range": [
                            961,
                            974
                          ],
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 35
                            },
                            "start": {
                              "column": 17,
                              "line": 35
                            }
                          }
                        },
                        "range": [
                          961,
                          974
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 35
                          },
                          "start": {
                            "column": 17,
                            "line": 35
                          }
                        }
                      },
                      "range": [
                        961,
                        976
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 35
                        },
                        "start": {
                          "column": 17,
                          "line": 35
                        }
                      }
                    }
                  },
                  "range": [
                    952,
                    976
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 35
                    },
                    "start": {
                      "column": 8,
                      "line": 35
                    }
                  }
                },
                "init": null,
                "range": [
                  952,
                  976
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 35
                  },
                  "start": {
                    "column": 8,
                    "line": 35
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              948,
              977
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 35
              },
              "start": {
                "column": 4,
                "line": 35
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "options",
                  "optional": false,
                  "range": [
                    995,
                    1002
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 36
                    },
                    "start": {
                      "column": 17,
                      "line": 36
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
                  "name": "changes",
                  "optional": false,
                  "range": [
                    982,
                    989
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 36
                    },
                    "start": {
                      "column": 4,
                      "line": 36
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "range": [
                    990,
                    994
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 36
                    },
                    "start": {
                      "column": 12,
                      "line": 36
                    }
                  }
                },
                "range": [
                  982,
                  994
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 36
                  },
                  "start": {
                    "column": 4,
                    "line": 36
                  }
                }
              },
              "optional": false,
              "range": [
                982,
                1003
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 36
                },
                "start": {
                  "column": 4,
                  "line": 36
                }
              }
            },
            "range": [
              982,
              1004
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 36
              },
              "start": {
                "column": 4,
                "line": 36
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "error",
                  "optional": false,
                  "range": [
                    1022,
                    1027
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 37
                    },
                    "start": {
                      "column": 17,
                      "line": 37
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
                  "name": "changes",
                  "optional": false,
                  "range": [
                    1009,
                    1016
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 37
                    },
                    "start": {
                      "column": 4,
                      "line": 37
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "range": [
                    1017,
                    1021
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 37
                    },
                    "start": {
                      "column": 12,
                      "line": 37
                    }
                  }
                },
                "range": [
                  1009,
                  1021
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 37
                  },
                  "start": {
                    "column": 4,
                    "line": 37
                  }
                }
              },
              "optional": false,
              "range": [
                1009,
                1028
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 37
                },
                "start": {
                  "column": 4,
                  "line": 37
                }
              }
            },
            "range": [
              1009,
              1029
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 37
              },
              "start": {
                "column": 4,
                "line": 37
              }
            }
          }
        ],
        "range": [
          942,
          1031
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 38
          },
          "start": {
            "column": 45,
            "line": 34
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "del",
        "optional": false,
        "range": [
          857,
          860
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 33
          },
          "start": {
            "column": 9,
            "line": 33
          }
        }
      },
      "params": [
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "options",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 42,
                  "line": 33
                },
                "start": {
                  "column": 20,
                  "line": 33
                }
              },
              "range": [
                868,
                890
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ConfigurableStartEnd",
                  "optional": false,
                  "range": [
                    870,
                    890
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 33
                    },
                    "start": {
                      "column": 22,
                      "line": 33
                    }
                  }
                },
                "range": [
                  870,
                  890
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 33
                  },
                  "start": {
                    "column": 22,
                    "line": 33
                  }
                }
              }
            },
            "range": [
              861,
              890
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 33
              },
              "start": {
                "column": 13,
                "line": 33
              }
            }
          },
          "optional": false,
          "right": {
            "type": "ObjectExpression",
            "properties": [],
            "range": [
              893,
              895
            ],
            "loc": {
              "end": {
                "column": 47,
                "line": 33
              },
              "start": {
                "column": 45,
                "line": 33
              }
            }
          },
          "range": [
            861,
            895
          ],
          "loc": {
            "end": {
              "column": 47,
              "line": 33
            },
            "start": {
              "column": 13,
              "line": 33
            }
          }
        },
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "error",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 38,
                  "line": 34
                },
                "start": {
                  "column": 18,
                  "line": 34
                }
              },
              "range": [
                915,
                935
              ],
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "error",
                      "optional": false,
                      "range": [
                        919,
                        924
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 34
                        },
                        "start": {
                          "column": 22,
                          "line": 34
                        }
                      }
                    },
                    "optional": true,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 34
                        },
                        "start": {
                          "column": 28,
                          "line": 34
                        }
                      },
                      "range": [
                        925,
                        933
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          927,
                          933
                        ],
                        "loc": {
                          "end": {
                            "column": 36,
                            "line": 34
                          },
                          "start": {
                            "column": 30,
                            "line": 34
                          }
                        }
                      }
                    },
                    "range": [
                      919,
                      933
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 34
                      },
                      "start": {
                        "column": 22,
                        "line": 34
                      }
                    }
                  }
                ],
                "range": [
                  917,
                  935
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 34
                  },
                  "start": {
                    "column": 20,
                    "line": 34
                  }
                }
              }
            },
            "range": [
              910,
              935
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 34
              },
              "start": {
                "column": 13,
                "line": 34
              }
            }
          },
          "optional": false,
          "right": {
            "type": "ObjectExpression",
            "properties": [],
            "range": [
              938,
              940
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 34
              },
              "start": {
                "column": 41,
                "line": 34
              }
            }
          },
          "range": [
            910,
            940
          ],
          "loc": {
            "end": {
              "column": 43,
              "line": 34
            },
            "start": {
              "column": 13,
              "line": 34
            }
          }
        }
      ],
      "range": [
        848,
        1031
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 38
        },
        "start": {
          "column": 0,
          "line": 33
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          1041,
          1075
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                1047,
                1058
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 15,
                  "line": 41
                },
                "start": {
                  "column": 4,
                  "line": 41
                }
              }
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                1058,
                1073
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  1070,
                  1073
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 41
                  },
                  "start": {
                    "column": 27,
                    "line": 41
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
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 41
                      },
                      "start": {
                        "column": 17,
                        "line": 41
                      }
                    },
                    "range": [
                      1060,
                      1068
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        1062,
                        1068
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 41
                        },
                        "start": {
                          "column": 19,
                          "line": 41
                        }
                      }
                    }
                  },
                  "range": [
                    1059,
                    1068
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 41
                    },
                    "start": {
                      "column": 16,
                      "line": 41
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 41
                },
                "start": {
                  "column": 15,
                  "line": 41
                }
              }
            },
            "range": [
              1047,
              1073
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 41
              },
              "start": {
                "column": 4,
                "line": 41
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 42
          },
          "start": {
            "column": 8,
            "line": 40
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "K",
        "optional": false,
        "range": [
          1039,
          1040
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 40
          },
          "start": {
            "column": 6,
            "line": 40
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        1033,
        1075
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 42
        },
        "start": {
          "column": 0,
          "line": 40
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          1154,
          1195
        ],
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 45
                    },
                    "start": {
                      "column": 10,
                      "line": 45
                    }
                  },
                  "range": [
                    1166,
                    1174
                  ],
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "range": [
                      1168,
                      1174
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 45
                      },
                      "start": {
                        "column": 12,
                        "line": 45
                      }
                    }
                  }
                },
                "range": [
                  1165,
                  1174
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 45
                  },
                  "start": {
                    "column": 9,
                    "line": 45
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 22,
                  "line": 45
                },
                "start": {
                  "column": 19,
                  "line": 45
                }
              },
              "range": [
                1175,
                1178
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "range": [
                    1177,
                    1178
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 45
                    },
                    "start": {
                      "column": 21,
                      "line": 45
                    }
                  }
                },
                "range": [
                  1177,
                  1178
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 45
                  },
                  "start": {
                    "column": 21,
                    "line": 45
                  }
                }
              }
            },
            "range": [
              1160,
              1178
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 45
              },
              "start": {
                "column": 4,
                "line": 45
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "n",
              "optional": false,
              "range": [
                1183,
                1184
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 46
                },
                "start": {
                  "column": 4,
                  "line": 46
                }
              }
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 14,
                  "line": 46
                },
                "start": {
                  "column": 6,
                  "line": 46
                }
              },
              "range": [
                1185,
                1193
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  1187,
                  1193
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 46
                  },
                  "start": {
                    "column": 8,
                    "line": 46
                  }
                }
              }
            },
            "range": [
              1183,
              1193
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 46
              },
              "start": {
                "column": 4,
                "line": 46
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 47
          },
          "start": {
            "column": 15,
            "line": 44
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Ctor",
        "optional": false,
        "range": [
          1149,
          1153
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 44
          },
          "start": {
            "column": 10,
            "line": 44
          }
        }
      },
      "range": [
        1139,
        1195
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 47
        },
        "start": {
          "column": 0,
          "line": 44
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
            "name": "ctor",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 14,
                  "line": 48
                },
                "start": {
                  "column": 8,
                  "line": 48
                }
              },
              "range": [
                1204,
                1210
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Ctor",
                  "optional": false,
                  "range": [
                    1206,
                    1210
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 48
                    },
                    "start": {
                      "column": 10,
                      "line": 48
                    }
                  }
                },
                "range": [
                  1206,
                  1210
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 48
                  },
                  "start": {
                    "column": 10,
                    "line": 48
                  }
                }
              }
            },
            "range": [
              1200,
              1210
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 48
              },
              "start": {
                "column": 4,
                "line": 48
              }
            }
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "K",
            "optional": false,
            "range": [
              1213,
              1214
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 48
              },
              "start": {
                "column": 17,
                "line": 48
              }
            }
          },
          "range": [
            1200,
            1214
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 48
            },
            "start": {
              "column": 4,
              "line": 48
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        1196,
        1214
      ],
      "loc": {
        "end": {
          "column": 18,
          "line": 48
        },
        "start": {
          "column": 0,
          "line": 48
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Spoiler",
        "optional": false,
        "range": [
          1221,
          1228
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 50
          },
          "start": {
            "column": 5,
            "line": 50
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "nope",
              "optional": false,
              "range": [
                1233,
                1237
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 50
                },
                "start": {
                  "column": 17,
                  "line": 50
                }
              }
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 30,
                  "line": 50
                },
                "start": {
                  "column": 22,
                  "line": 50
                }
              },
              "range": [
                1238,
                1246
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  1240,
                  1246
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 50
                  },
                  "start": {
                    "column": 24,
                    "line": 50
                  }
                }
              }
            },
            "range": [
              1233,
              1246
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 50
              },
              "start": {
                "column": 17,
                "line": 50
              }
            }
          }
        ],
        "range": [
          1231,
          1248
        ],
        "loc": {
          "end": {
            "column": 32,
            "line": 50
          },
          "start": {
            "column": 15,
            "line": 50
          }
        }
      },
      "range": [
        1216,
        1248
      ],
      "loc": {
        "end": {
          "column": 32,
          "line": 50
        },
        "start": {
          "column": 0,
          "line": 50
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Weak",
        "optional": false,
        "range": [
          1254,
          1258
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 51
          },
          "start": {
            "column": 5,
            "line": 51
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "range": [
                1267,
                1268
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 52
                },
                "start": {
                  "column": 4,
                  "line": 52
                }
              }
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 14,
                  "line": 52
                },
                "start": {
                  "column": 6,
                  "line": 52
                }
              },
              "range": [
                1269,
                1277
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  1271,
                  1277
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 52
                  },
                  "start": {
                    "column": 8,
                    "line": 52
                  }
                }
              }
            },
            "range": [
              1267,
              1277
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 52
              },
              "start": {
                "column": 4,
                "line": 52
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "properties",
              "optional": false,
              "range": [
                1282,
                1292
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 53
                },
                "start": {
                  "column": 4,
                  "line": 53
                }
              }
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 5,
                  "line": 55
                },
                "start": {
                  "column": 15,
                  "line": 53
                }
              },
              "range": [
                1293,
                1321
              ],
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "range": [
                        1305,
                        1306
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 54
                        },
                        "start": {
                          "column": 8,
                          "line": 54
                        }
                      }
                    },
                    "optional": true,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 54
                        },
                        "start": {
                          "column": 10,
                          "line": 54
                        }
                      },
                      "range": [
                        1307,
                        1315
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          1309,
                          1315
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 54
                          },
                          "start": {
                            "column": 12,
                            "line": 54
                          }
                        }
                      }
                    },
                    "range": [
                      1305,
                      1315
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 54
                      },
                      "start": {
                        "column": 8,
                        "line": 54
                      }
                    }
                  }
                ],
                "range": [
                  1295,
                  1321
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 55
                  },
                  "start": {
                    "column": 17,
                    "line": 53
                  }
                }
              }
            },
            "range": [
              1282,
              1321
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 55
              },
              "start": {
                "column": 4,
                "line": 53
              }
            }
          }
        ],
        "range": [
          1261,
          1323
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 56
          },
          "start": {
            "column": 12,
            "line": 51
          }
        }
      },
      "range": [
        1249,
        1323
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 56
        },
        "start": {
          "column": 0,
          "line": 51
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
            "name": "propertiesWrong",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 1,
                  "line": 61
                },
                "start": {
                  "column": 27,
                  "line": 57
                }
              },
              "range": [
                1351,
                1402
              ],
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "properties",
                      "optional": false,
                      "range": [
                        1359,
                        1369
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 58
                        },
                        "start": {
                          "column": 4,
                          "line": 58
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
                          "column": 5,
                          "line": 60
                        },
                        "start": {
                          "column": 14,
                          "line": 58
                        }
                      },
                      "range": [
                        1369,
                        1400
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "wrong",
                              "optional": false,
                              "range": [
                                1381,
                                1386
                              ],
                              "loc": {
                                "end": {
                                  "column": 13,
                                  "line": 59
                                },
                                "start": {
                                  "column": 8,
                                  "line": 59
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
                                  "column": 21,
                                  "line": 59
                                },
                                "start": {
                                  "column": 13,
                                  "line": 59
                                }
                              },
                              "range": [
                                1386,
                                1394
                              ],
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "range": [
                                  1388,
                                  1394
                                ],
                                "loc": {
                                  "end": {
                                    "column": 21,
                                    "line": 59
                                  },
                                  "start": {
                                    "column": 15,
                                    "line": 59
                                  }
                                }
                              }
                            },
                            "range": [
                              1381,
                              1394
                            ],
                            "loc": {
                              "end": {
                                "column": 21,
                                "line": 59
                              },
                              "start": {
                                "column": 8,
                                "line": 59
                              }
                            }
                          }
                        ],
                        "range": [
                          1371,
                          1400
                        ],
                        "loc": {
                          "end": {
                            "column": 5,
                            "line": 60
                          },
                          "start": {
                            "column": 16,
                            "line": 58
                          }
                        }
                      }
                    },
                    "range": [
                      1359,
                      1400
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 60
                      },
                      "start": {
                        "column": 4,
                        "line": 58
                      }
                    }
                  }
                ],
                "range": [
                  1353,
                  1402
                ],
                "loc": {
                  "end": {
                    "column": 1,
                    "line": 61
                  },
                  "start": {
                    "column": 29,
                    "line": 57
                  }
                }
              }
            },
            "range": [
              1336,
              1402
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 61
              },
              "start": {
                "column": 12,
                "line": 57
              }
            }
          },
          "init": null,
          "range": [
            1336,
            1402
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 61
            },
            "start": {
              "column": 12,
              "line": 57
            }
          }
        }
      ],
      "declare": true,
      "kind": "let",
      "range": [
        1324,
        1402
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 61
        },
        "start": {
          "column": 0,
          "line": 57
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
            "name": "weak",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 24,
                  "line": 62
                },
                "start": {
                  "column": 8,
                  "line": 62
                }
              },
              "range": [
                1411,
                1427
              ],
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Weak",
                      "optional": false,
                      "range": [
                        1413,
                        1417
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 62
                        },
                        "start": {
                          "column": 10,
                          "line": 62
                        }
                      }
                    },
                    "range": [
                      1413,
                      1417
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 62
                      },
                      "start": {
                        "column": 10,
                        "line": 62
                      }
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Spoiler",
                      "optional": false,
                      "range": [
                        1420,
                        1427
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 62
                        },
                        "start": {
                          "column": 17,
                          "line": 62
                        }
                      }
                    },
                    "range": [
                      1420,
                      1427
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 62
                      },
                      "start": {
                        "column": 17,
                        "line": 62
                      }
                    }
                  }
                ],
                "range": [
                  1413,
                  1427
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 62
                  },
                  "start": {
                    "column": 10,
                    "line": 62
                  }
                }
              }
            },
            "range": [
              1407,
              1427
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 62
              },
              "start": {
                "column": 4,
                "line": 62
              }
            }
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "propertiesWrong",
            "optional": false,
            "range": [
              1430,
              1445
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 62
              },
              "start": {
                "column": 27,
                "line": 62
              }
            }
          },
          "range": [
            1407,
            1445
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 62
            },
            "start": {
              "column": 4,
              "line": 62
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        1403,
        1445
      ],
      "loc": {
        "end": {
          "column": 42,
          "line": 62
        },
        "start": {
          "column": 0,
          "line": 62
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 64
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
