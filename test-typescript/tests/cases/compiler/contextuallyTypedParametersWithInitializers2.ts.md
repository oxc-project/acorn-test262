__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    437
  ],
  "body": [
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test1",
        "optional": false,
        "range": [
          17,
          22
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 1
          },
          "start": {
            "column": 17,
            "line": 1
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "context",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 19,
                "line": 4
              },
              "start": {
                "column": 9,
                "line": 4
              }
            },
            "range": [
              126,
              136
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TContext",
                "optional": false,
                "range": [
                  128,
                  136
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 4
                  },
                  "start": {
                    "column": 11,
                    "line": 4
                  }
                }
              },
              "range": [
                128,
                136
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 4
                },
                "start": {
                  "column": 11,
                  "line": 4
                }
              }
            }
          },
          "range": [
            119,
            136
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 4
            },
            "start": {
              "column": 2,
              "line": 4
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "methods",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 38,
                "line": 4
              },
              "start": {
                "column": 28,
                "line": 4
              }
            },
            "range": [
              145,
              155
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TMethods",
                "optional": false,
                "range": [
                  147,
                  155
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 4
                  },
                  "start": {
                    "column": 30,
                    "line": 4
                  }
                }
              },
              "range": [
                147,
                155
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 4
                },
                "start": {
                  "column": 30,
                  "line": 4
                }
              }
            }
          },
          "range": [
            138,
            155
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 4
            },
            "start": {
              "column": 21,
              "line": 4
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 45,
            "line": 4
          },
          "start": {
            "column": 39,
            "line": 4
          }
        },
        "range": [
          156,
          162
        ],
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "range": [
            158,
            162
          ],
          "loc": {
            "end": {
              "column": 45,
              "line": 4
            },
            "start": {
              "column": 41,
              "line": 4
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 1,
            "line": 4
          },
          "start": {
            "column": 22,
            "line": 1
          }
        },
        "range": [
          22,
          118
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TContext",
              "optional": false,
              "range": [
                26,
                34
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 2
                },
                "start": {
                  "column": 2,
                  "line": 2
                }
              }
            },
            "out": false,
            "range": [
              26,
              34
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 2
              },
              "start": {
                "column": 2,
                "line": 2
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  61,
                  115
                ],
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "range": [
                      62,
                      68
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 3
                      },
                      "start": {
                        "column": 26,
                        "line": 3
                      }
                    }
                  },
                  {
                    "type": "TSFunctionType",
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ctx",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 48,
                              "line": 3
                            },
                            "start": {
                              "column": 38,
                              "line": 3
                            }
                          },
                          "range": [
                            74,
                            84
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TContext",
                              "optional": false,
                              "range": [
                                76,
                                84
                              ],
                              "loc": {
                                "end": {
                                  "column": 48,
                                  "line": 3
                                },
                                "start": {
                                  "column": 40,
                                  "line": 3
                                }
                              }
                            },
                            "range": [
                              76,
                              84
                            ],
                            "loc": {
                              "end": {
                                "column": 48,
                                "line": 3
                              },
                              "start": {
                                "column": 40,
                                "line": 3
                              }
                            }
                          }
                        },
                        "range": [
                          71,
                          84
                        ],
                        "loc": {
                          "end": {
                            "column": 48,
                            "line": 3
                          },
                          "start": {
                            "column": 35,
                            "line": 3
                          }
                        }
                      },
                      {
                        "type": "RestElement",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "args",
                          "optional": false,
                          "range": [
                            89,
                            93
                          ],
                          "loc": {
                            "end": {
                              "column": 57,
                              "line": 3
                            },
                            "start": {
                              "column": 53,
                              "line": 3
                            }
                          }
                        },
                        "decorators": [],
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 66,
                              "line": 3
                            },
                            "start": {
                              "column": 57,
                              "line": 3
                            }
                          },
                          "range": [
                            93,
                            102
                          ],
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "elementType": {
                              "type": "TSNeverKeyword",
                              "range": [
                                95,
                                100
                              ],
                              "loc": {
                                "end": {
                                  "column": 64,
                                  "line": 3
                                },
                                "start": {
                                  "column": 59,
                                  "line": 3
                                }
                              }
                            },
                            "range": [
                              95,
                              102
                            ],
                            "loc": {
                              "end": {
                                "column": 66,
                                "line": 3
                              },
                              "start": {
                                "column": 59,
                                "line": 3
                              }
                            }
                          }
                        },
                        "range": [
                          86,
                          102
                        ],
                        "loc": {
                          "end": {
                            "column": 66,
                            "line": 3
                          },
                          "start": {
                            "column": 50,
                            "line": 3
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 78,
                          "line": 3
                        },
                        "start": {
                          "column": 68,
                          "line": 3
                        }
                      },
                      "range": [
                        104,
                        114
                      ],
                      "typeAnnotation": {
                        "type": "TSUnknownKeyword",
                        "range": [
                          107,
                          114
                        ],
                        "loc": {
                          "end": {
                            "column": 78,
                            "line": 3
                          },
                          "start": {
                            "column": 71,
                            "line": 3
                          }
                        }
                      }
                    },
                    "range": [
                      70,
                      114
                    ],
                    "loc": {
                      "end": {
                        "column": 78,
                        "line": 3
                      },
                      "start": {
                        "column": 34,
                        "line": 3
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 79,
                    "line": 3
                  },
                  "start": {
                    "column": 25,
                    "line": 3
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Record",
                "optional": false,
                "range": [
                  55,
                  61
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 3
                  },
                  "start": {
                    "column": 19,
                    "line": 3
                  }
                }
              },
              "range": [
                55,
                115
              ],
              "loc": {
                "end": {
                  "column": 79,
                  "line": 3
                },
                "start": {
                  "column": 19,
                  "line": 3
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TMethods",
              "optional": false,
              "range": [
                38,
                46
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 3
                },
                "start": {
                  "column": 2,
                  "line": 3
                }
              }
            },
            "out": false,
            "range": [
              38,
              115
            ],
            "loc": {
              "end": {
                "column": 79,
                "line": 3
              },
              "start": {
                "column": 2,
                "line": 3
              }
            }
          }
        ]
      },
      "range": [
        0,
        163
      ],
      "loc": {
        "end": {
          "column": 46,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "count",
                  "optional": false,
                  "range": [
                    180,
                    185
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
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "0",
                  "value": 0,
                  "range": [
                    187,
                    188
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 8
                    },
                    "start": {
                      "column": 11,
                      "line": 8
                    }
                  }
                },
                "range": [
                  180,
                  188
                ],
                "loc": {
                  "end": {
                    "column": 12,
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
              174,
              193
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 9
              },
              "start": {
                "column": 2,
                "line": 7
              }
            }
          },
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "checkLimit",
                  "optional": false,
                  "range": [
                    203,
                    213
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 11
                    },
                    "start": {
                      "column": 4,
                      "line": 11
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
                    "type": "BlockStatement",
                    "body": [],
                    "range": [
                      235,
                      237
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 11
                      },
                      "start": {
                        "column": 36,
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
                      "name": "ctx",
                      "optional": false,
                      "range": [
                        216,
                        219
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 11
                        },
                        "start": {
                          "column": 17,
                          "line": 11
                        }
                      }
                    },
                    {
                      "type": "AssignmentPattern",
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "max",
                        "optional": false,
                        "range": [
                          221,
                          224
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 11
                          },
                          "start": {
                            "column": 22,
                            "line": 11
                          }
                        }
                      },
                      "optional": false,
                      "right": {
                        "type": "Literal",
                        "raw": "500",
                        "value": 500,
                        "range": [
                          227,
                          230
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 11
                          },
                          "start": {
                            "column": 28,
                            "line": 11
                          }
                        }
                      },
                      "range": [
                        221,
                        230
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 11
                        },
                        "start": {
                          "column": 22,
                          "line": 11
                        }
                      }
                    }
                  ],
                  "range": [
                    215,
                    237
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 11
                    },
                    "start": {
                      "column": 16,
                      "line": 11
                    }
                  }
                },
                "range": [
                  203,
                  237
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 11
                  },
                  "start": {
                    "column": 4,
                    "line": 11
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "hasAccess",
                  "optional": false,
                  "range": [
                    243,
                    252
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 12
                    },
                    "start": {
                      "column": 4,
                      "line": 12
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
                    "type": "BlockStatement",
                    "body": [],
                    "range": [
                      287,
                      289
                    ],
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 12
                      },
                      "start": {
                        "column": 48,
                        "line": 12
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
                      "name": "ctx",
                      "optional": false,
                      "range": [
                        255,
                        258
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 12
                        },
                        "start": {
                          "column": 16,
                          "line": 12
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "user",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 43,
                            "line": 12
                          },
                          "start": {
                            "column": 25,
                            "line": 12
                          }
                        },
                        "range": [
                          264,
                          282
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
                                "name": "name",
                                "optional": false,
                                "range": [
                                  268,
                                  272
                                ],
                                "loc": {
                                  "end": {
                                    "column": 33,
                                    "line": 12
                                  },
                                  "start": {
                                    "column": 29,
                                    "line": 12
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
                                    "column": 41,
                                    "line": 12
                                  },
                                  "start": {
                                    "column": 33,
                                    "line": 12
                                  }
                                },
                                "range": [
                                  272,
                                  280
                                ],
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "range": [
                                    274,
                                    280
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 41,
                                      "line": 12
                                    },
                                    "start": {
                                      "column": 35,
                                      "line": 12
                                    }
                                  }
                                }
                              },
                              "range": [
                                268,
                                280
                              ],
                              "loc": {
                                "end": {
                                  "column": 41,
                                  "line": 12
                                },
                                "start": {
                                  "column": 29,
                                  "line": 12
                                }
                              }
                            }
                          ],
                          "range": [
                            266,
                            282
                          ],
                          "loc": {
                            "end": {
                              "column": 43,
                              "line": 12
                            },
                            "start": {
                              "column": 27,
                              "line": 12
                            }
                          }
                        }
                      },
                      "range": [
                        260,
                        282
                      ],
                      "loc": {
                        "end": {
                          "column": 43,
                          "line": 12
                        },
                        "start": {
                          "column": 21,
                          "line": 12
                        }
                      }
                    }
                  ],
                  "range": [
                    254,
                    289
                  ],
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 12
                    },
                    "start": {
                      "column": 15,
                      "line": 12
                    }
                  }
                },
                "range": [
                  243,
                  289
                ],
                "loc": {
                  "end": {
                    "column": 50,
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
              197,
              294
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 13
              },
              "start": {
                "column": 2,
                "line": 10
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "test1",
          "optional": false,
          "range": [
            165,
            170
          ],
          "loc": {
            "end": {
              "column": 5,
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
          165,
          297
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 14
          },
          "start": {
            "column": 0,
            "line": 6
          }
        }
      },
      "range": [
        165,
        298
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 14
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
            "name": "num",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 25,
                  "line": 16
                },
                "start": {
                  "column": 17,
                  "line": 16
                }
              },
              "range": [
                317,
                325
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  319,
                  325
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 16
                  },
                  "start": {
                    "column": 19,
                    "line": 16
                  }
                }
              }
            },
            "range": [
              314,
              325
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 16
              },
              "start": {
                "column": 14,
                "line": 16
              }
            }
          },
          "init": null,
          "range": [
            314,
            325
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 16
            },
            "start": {
              "column": 14,
              "line": 16
            }
          }
        }
      ],
      "declare": true,
      "kind": "const",
      "range": [
        300,
        326
      ],
      "loc": {
        "end": {
          "column": 26,
          "line": 16
        },
        "start": {
          "column": 0,
          "line": 16
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
            "name": "test2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 33,
                  "line": 17
                },
                "start": {
                  "column": 11,
                  "line": 17
                }
              },
              "range": [
                338,
                360
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
                          "column": 24,
                          "line": 17
                        },
                        "start": {
                          "column": 17,
                          "line": 17
                        }
                      },
                      "range": [
                        344,
                        351
                      ],
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "raw": "1",
                              "value": 1,
                              "range": [
                                346,
                                347
                              ],
                              "loc": {
                                "end": {
                                  "column": 20,
                                  "line": 17
                                },
                                "start": {
                                  "column": 19,
                                  "line": 17
                                }
                              }
                            },
                            "range": [
                              346,
                              347
                            ],
                            "loc": {
                              "end": {
                                "column": 20,
                                "line": 17
                              },
                              "start": {
                                "column": 19,
                                "line": 17
                              }
                            }
                          },
                          {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "raw": "2",
                              "value": 2,
                              "range": [
                                350,
                                351
                              ],
                              "loc": {
                                "end": {
                                  "column": 24,
                                  "line": 17
                                },
                                "start": {
                                  "column": 23,
                                  "line": 17
                                }
                              }
                            },
                            "range": [
                              350,
                              351
                            ],
                            "loc": {
                              "end": {
                                "column": 24,
                                "line": 17
                              },
                              "start": {
                                "column": 23,
                                "line": 17
                              }
                            }
                          }
                        ],
                        "range": [
                          346,
                          351
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 17
                          },
                          "start": {
                            "column": 19,
                            "line": 17
                          }
                        }
                      }
                    },
                    "range": [
                      341,
                      351
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 17
                      },
                      "start": {
                        "column": 14,
                        "line": 17
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 17
                    },
                    "start": {
                      "column": 26,
                      "line": 17
                    }
                  },
                  "range": [
                    353,
                    360
                  ],
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "range": [
                      356,
                      360
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 17
                      },
                      "start": {
                        "column": 29,
                        "line": 17
                      }
                    }
                  }
                },
                "range": [
                  340,
                  360
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 17
                  },
                  "start": {
                    "column": 13,
                    "line": 17
                  }
                }
              }
            },
            "range": [
              333,
              360
            ],
            "loc": {
              "end": {
                "column": 33,
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
              "type": "BlockStatement",
              "body": [],
              "range": [
                378,
                380
              ],
              "loc": {
                "end": {
                  "column": 53,
                  "line": 17
                },
                "start": {
                  "column": 51,
                  "line": 17
                }
              }
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arg",
                  "optional": false,
                  "range": [
                    364,
                    367
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 17
                    },
                    "start": {
                      "column": 37,
                      "line": 17
                    }
                  }
                },
                "optional": false,
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "num",
                  "optional": false,
                  "range": [
                    370,
                    373
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 17
                    },
                    "start": {
                      "column": 43,
                      "line": 17
                    }
                  }
                },
                "range": [
                  364,
                  373
                ],
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 17
                  },
                  "start": {
                    "column": 37,
                    "line": 17
                  }
                }
              }
            ],
            "range": [
              363,
              380
            ],
            "loc": {
              "end": {
                "column": 53,
                "line": 17
              },
              "start": {
                "column": 36,
                "line": 17
              }
            }
          },
          "range": [
            333,
            380
          ],
          "loc": {
            "end": {
              "column": 53,
              "line": 17
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
        327,
        381
      ],
      "loc": {
        "end": {
          "column": 54,
          "line": 17
        },
        "start": {
          "column": 0,
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
            "name": "test3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 34,
                  "line": 19
                },
                "start": {
                  "column": 11,
                  "line": 19
                }
              },
              "range": [
                394,
                417
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
                          "column": 25,
                          "line": 19
                        },
                        "start": {
                          "column": 17,
                          "line": 19
                        }
                      },
                      "range": [
                        400,
                        408
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          402,
                          408
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 19
                          },
                          "start": {
                            "column": 19,
                            "line": 19
                          }
                        }
                      }
                    },
                    "range": [
                      397,
                      408
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 19
                      },
                      "start": {
                        "column": 14,
                        "line": 19
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 19
                    },
                    "start": {
                      "column": 27,
                      "line": 19
                    }
                  },
                  "range": [
                    410,
                    417
                  ],
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "range": [
                      413,
                      417
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 19
                      },
                      "start": {
                        "column": 30,
                        "line": 19
                      }
                    }
                  }
                },
                "range": [
                  396,
                  417
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 19
                  },
                  "start": {
                    "column": 13,
                    "line": 19
                  }
                }
              }
            },
            "range": [
              389,
              417
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 19
              },
              "start": {
                "column": 6,
                "line": 19
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "range": [
                433,
                435
              ],
              "loc": {
                "end": {
                  "column": 52,
                  "line": 19
                },
                "start": {
                  "column": 50,
                  "line": 19
                }
              }
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arg",
                  "optional": false,
                  "range": [
                    421,
                    424
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 19
                    },
                    "start": {
                      "column": 38,
                      "line": 19
                    }
                  }
                },
                "optional": false,
                "right": {
                  "type": "Literal",
                  "raw": "1",
                  "value": 1,
                  "range": [
                    427,
                    428
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 19
                    },
                    "start": {
                      "column": 44,
                      "line": 19
                    }
                  }
                },
                "range": [
                  421,
                  428
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 19
                  },
                  "start": {
                    "column": 38,
                    "line": 19
                  }
                }
              }
            ],
            "range": [
              420,
              435
            ],
            "loc": {
              "end": {
                "column": 52,
                "line": 19
              },
              "start": {
                "column": 37,
                "line": 19
              }
            }
          },
          "range": [
            389,
            435
          ],
          "loc": {
            "end": {
              "column": 52,
              "line": 19
            },
            "start": {
              "column": 6,
              "line": 19
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        383,
        436
      ],
      "loc": {
        "end": {
          "column": 53,
          "line": 19
        },
        "start": {
          "column": 0,
          "line": 19
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 20
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
