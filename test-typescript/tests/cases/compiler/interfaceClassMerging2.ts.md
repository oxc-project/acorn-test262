__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    517
  ],
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          14,
          81
        ],
        "body": [
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "interfaceFooMethod",
              "optional": false,
              "range": [
                20,
                38
              ],
              "loc": {
                "end": {
                  "column": 22,
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
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 30,
                  "line": 2
                },
                "start": {
                  "column": 24,
                  "line": 2
                }
              },
              "range": [
                40,
                46
              ],
              "typeAnnotation": {
                "type": "TSThisType",
                "range": [
                  42,
                  46
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 2
                  },
                  "start": {
                    "column": 26,
                    "line": 2
                  }
                }
              }
            },
            "static": false,
            "range": [
              20,
              47
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 2
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "interfaceFooProperty",
              "optional": false,
              "range": [
                52,
                72
              ],
              "loc": {
                "end": {
                  "column": 24,
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
                  "column": 30,
                  "line": 3
                },
                "start": {
                  "column": 24,
                  "line": 3
                }
              },
              "range": [
                72,
                78
              ],
              "typeAnnotation": {
                "type": "TSThisType",
                "range": [
                  74,
                  78
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 3
                  },
                  "start": {
                    "column": 26,
                    "line": 3
                  }
                }
              }
            },
            "range": [
              52,
              79
            ],
            "loc": {
              "end": {
                "column": 31,
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
            "column": 14,
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
      "range": [
        0,
        81
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
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          93,
          181
        ],
        "body": [
          {
            "type": "PropertyDefinition",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "classFooProperty",
              "optional": false,
              "range": [
                99,
                115
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 7
                },
                "start": {
                  "column": 4,
                  "line": 7
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
                  "column": 26,
                  "line": 7
                },
                "start": {
                  "column": 20,
                  "line": 7
                }
              },
              "range": [
                115,
                121
              ],
              "typeAnnotation": {
                "type": "TSThisType",
                "range": [
                  117,
                  121
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
              }
            },
            "value": null,
            "range": [
              99,
              122
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 7
              },
              "start": {
                "column": 4,
                "line": 7
              }
            }
          },
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "classFooMethod",
              "optional": false,
              "range": [
                128,
                142
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 9
                },
                "start": {
                  "column": 4,
                  "line": 9
                }
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                142,
                179
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "ThisExpression",
                      "range": [
                        168,
                        172
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 10
                        },
                        "start": {
                          "column": 15,
                          "line": 10
                        }
                      }
                    },
                    "range": [
                      161,
                      173
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 10
                      },
                      "start": {
                        "column": 8,
                        "line": 10
                      }
                    }
                  }
                ],
                "range": [
                  151,
                  179
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 11
                  },
                  "start": {
                    "column": 27,
                    "line": 9
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 9
                  },
                  "start": {
                    "column": 20,
                    "line": 9
                  }
                },
                "range": [
                  144,
                  150
                ],
                "typeAnnotation": {
                  "type": "TSThisType",
                  "range": [
                    146,
                    150
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 9
                    },
                    "start": {
                      "column": 22,
                      "line": 9
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 5,
                  "line": 11
                },
                "start": {
                  "column": 18,
                  "line": 9
                }
              }
            },
            "range": [
              128,
              179
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 11
              },
              "start": {
                "column": 4,
                "line": 9
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 12
          },
          "start": {
            "column": 10,
            "line": 6
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "range": [
          89,
          92
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 6
          },
          "start": {
            "column": 6,
            "line": 6
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        83,
        181
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 12
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
          198,
          265
        ],
        "body": [
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "interfaceBarMethod",
              "optional": false,
              "range": [
                204,
                222
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 16
                },
                "start": {
                  "column": 4,
                  "line": 16
                }
              }
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 30,
                  "line": 16
                },
                "start": {
                  "column": 24,
                  "line": 16
                }
              },
              "range": [
                224,
                230
              ],
              "typeAnnotation": {
                "type": "TSThisType",
                "range": [
                  226,
                  230
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 16
                  },
                  "start": {
                    "column": 26,
                    "line": 16
                  }
                }
              }
            },
            "static": false,
            "range": [
              204,
              231
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 16
              },
              "start": {
                "column": 4,
                "line": 16
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "interfaceBarProperty",
              "optional": false,
              "range": [
                236,
                256
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 17
                },
                "start": {
                  "column": 4,
                  "line": 17
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
                  "column": 30,
                  "line": 17
                },
                "start": {
                  "column": 24,
                  "line": 17
                }
              },
              "range": [
                256,
                262
              ],
              "typeAnnotation": {
                "type": "TSThisType",
                "range": [
                  258,
                  262
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 17
                  },
                  "start": {
                    "column": 26,
                    "line": 17
                  }
                }
              }
            },
            "range": [
              236,
              263
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 17
              },
              "start": {
                "column": 4,
                "line": 17
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 18
          },
          "start": {
            "column": 14,
            "line": 15
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "range": [
          194,
          197
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 15
          },
          "start": {
            "column": 10,
            "line": 15
          }
        }
      },
      "range": [
        184,
        265
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 18
        },
        "start": {
          "column": 0,
          "line": 15
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          289,
          377
        ],
        "body": [
          {
            "type": "PropertyDefinition",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "classBarProperty",
              "optional": false,
              "range": [
                295,
                311
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 21
                },
                "start": {
                  "column": 4,
                  "line": 21
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
                  "column": 26,
                  "line": 21
                },
                "start": {
                  "column": 20,
                  "line": 21
                }
              },
              "range": [
                311,
                317
              ],
              "typeAnnotation": {
                "type": "TSThisType",
                "range": [
                  313,
                  317
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 21
                  },
                  "start": {
                    "column": 22,
                    "line": 21
                  }
                }
              }
            },
            "value": null,
            "range": [
              295,
              318
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 21
              },
              "start": {
                "column": 4,
                "line": 21
              }
            }
          },
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "classBarMethod",
              "optional": false,
              "range": [
                324,
                338
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 23
                },
                "start": {
                  "column": 4,
                  "line": 23
                }
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                338,
                375
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "ThisExpression",
                      "range": [
                        364,
                        368
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 24
                        },
                        "start": {
                          "column": 15,
                          "line": 24
                        }
                      }
                    },
                    "range": [
                      357,
                      369
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 24
                      },
                      "start": {
                        "column": 8,
                        "line": 24
                      }
                    }
                  }
                ],
                "range": [
                  347,
                  375
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 25
                  },
                  "start": {
                    "column": 27,
                    "line": 23
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 23
                  },
                  "start": {
                    "column": 20,
                    "line": 23
                  }
                },
                "range": [
                  340,
                  346
                ],
                "typeAnnotation": {
                  "type": "TSThisType",
                  "range": [
                    342,
                    346
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 23
                    },
                    "start": {
                      "column": 22,
                      "line": 23
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 5,
                  "line": 25
                },
                "start": {
                  "column": 18,
                  "line": 23
                }
              }
            },
            "range": [
              324,
              375
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 25
              },
              "start": {
                "column": 4,
                "line": 23
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
            "column": 22,
            "line": 20
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "range": [
          273,
          276
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 20
          },
          "start": {
            "column": 6,
            "line": 20
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "range": [
          285,
          288
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 20
          },
          "start": {
            "column": 18,
            "line": 20
          }
        }
      },
      "range": [
        267,
        377
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 26
        },
        "start": {
          "column": 0,
          "line": 20
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
            "name": "bar",
            "optional": false,
            "range": [
              384,
              387
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 29
              },
              "start": {
                "column": 4,
                "line": 29
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Bar",
              "optional": false,
              "range": [
                394,
                397
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 29
                },
                "start": {
                  "column": 14,
                  "line": 29
                }
              }
            },
            "range": [
              390,
              399
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 29
              },
              "start": {
                "column": 10,
                "line": 29
              }
            }
          },
          "range": [
            384,
            399
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
      "declare": false,
      "kind": "var",
      "range": [
        380,
        400
      ],
      "loc": {
        "end": {
          "column": 20,
          "line": 29
        },
        "start": {
          "column": 0,
          "line": 29
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "CallExpression",
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "CallExpression",
                "arguments": [],
                "callee": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "CallExpression",
                    "arguments": [],
                    "callee": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "bar",
                        "optional": false,
                        "range": [
                          401,
                          404
                        ],
                        "loc": {
                          "end": {
                            "column": 3,
                            "line": 30
                          },
                          "start": {
                            "column": 0,
                            "line": 30
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "interfaceBarMethod",
                        "optional": false,
                        "range": [
                          405,
                          423
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 30
                          },
                          "start": {
                            "column": 4,
                            "line": 30
                          }
                        }
                      },
                      "range": [
                        401,
                        423
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 30
                        },
                        "start": {
                          "column": 0,
                          "line": 30
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      401,
                      425
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 30
                      },
                      "start": {
                        "column": 0,
                        "line": 30
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "interfaceFooMethod",
                    "optional": false,
                    "range": [
                      426,
                      444
                    ],
                    "loc": {
                      "end": {
                        "column": 43,
                        "line": 30
                      },
                      "start": {
                        "column": 25,
                        "line": 30
                      }
                    }
                  },
                  "range": [
                    401,
                    444
                  ],
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 30
                    },
                    "start": {
                      "column": 0,
                      "line": 30
                    }
                  }
                },
                "optional": false,
                "range": [
                  401,
                  446
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 30
                  },
                  "start": {
                    "column": 0,
                    "line": 30
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "classBarMethod",
                "optional": false,
                "range": [
                  447,
                  461
                ],
                "loc": {
                  "end": {
                    "column": 60,
                    "line": 30
                  },
                  "start": {
                    "column": 46,
                    "line": 30
                  }
                }
              },
              "range": [
                401,
                461
              ],
              "loc": {
                "end": {
                  "column": 60,
                  "line": 30
                },
                "start": {
                  "column": 0,
                  "line": 30
                }
              }
            },
            "optional": false,
            "range": [
              401,
              463
            ],
            "loc": {
              "end": {
                "column": 62,
                "line": 30
              },
              "start": {
                "column": 0,
                "line": 30
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "classFooMethod",
            "optional": false,
            "range": [
              464,
              478
            ],
            "loc": {
              "end": {
                "column": 77,
                "line": 30
              },
              "start": {
                "column": 63,
                "line": 30
              }
            }
          },
          "range": [
            401,
            478
          ],
          "loc": {
            "end": {
              "column": 77,
              "line": 30
            },
            "start": {
              "column": 0,
              "line": 30
            }
          }
        },
        "optional": false,
        "range": [
          401,
          480
        ],
        "loc": {
          "end": {
            "column": 79,
            "line": 30
          },
          "start": {
            "column": 0,
            "line": 30
          }
        }
      },
      "range": [
        401,
        481
      ],
      "loc": {
        "end": {
          "column": 80,
          "line": 30
        },
        "start": {
          "column": 0,
          "line": 30
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
            "range": [
              488,
              491
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 33
              },
              "start": {
                "column": 4,
                "line": 33
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "range": [
                498,
                501
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 33
                },
                "start": {
                  "column": 14,
                  "line": 33
                }
              }
            },
            "range": [
              494,
              503
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 33
              },
              "start": {
                "column": 10,
                "line": 33
              }
            }
          },
          "range": [
            488,
            503
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 33
            },
            "start": {
              "column": 4,
              "line": 33
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        484,
        504
      ],
      "loc": {
        "end": {
          "column": 20,
          "line": 33
        },
        "start": {
          "column": 0,
          "line": 33
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
          "name": "foo",
          "optional": false,
          "range": [
            506,
            509
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 35
            },
            "start": {
              "column": 0,
              "line": 35
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "bar",
          "optional": false,
          "range": [
            512,
            515
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 35
            },
            "start": {
              "column": 6,
              "line": 35
            }
          }
        },
        "range": [
          506,
          515
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 35
          },
          "start": {
            "column": 0,
            "line": 35
          }
        }
      },
      "range": [
        506,
        516
      ],
      "loc": {
        "end": {
          "column": 10,
          "line": 35
        },
        "start": {
          "column": 0,
          "line": 35
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 36
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
