__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    156,
    700
  ],
  "body": [
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
                  "type": "Literal",
                  "raw": "null",
                  "value": null,
                  "range": [
                    221,
                    225
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 4
                    },
                    "start": {
                      "column": 18,
                      "line": 4
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
                  "name": "arg",
                  "optional": false,
                  "range": [
                    214,
                    217
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 4
                    },
                    "start": {
                      "column": 11,
                      "line": 4
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "cb",
                  "optional": false,
                  "range": [
                    218,
                    220
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 4
                    },
                    "start": {
                      "column": 15,
                      "line": 4
                    }
                  }
                },
                "range": [
                  214,
                  220
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 4
                  },
                  "start": {
                    "column": 11,
                    "line": 4
                  }
                }
              },
              "optional": false,
              "range": [
                214,
                226
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 4
                },
                "start": {
                  "column": 11,
                  "line": 4
                }
              }
            },
            "range": [
              207,
              227
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 4
              },
              "start": {
                "column": 4,
                "line": 4
              }
            }
          }
        ],
        "range": [
          201,
          229
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 5
          },
          "start": {
            "column": 45,
            "line": 3
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "range": [
          165,
          168
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 3
          },
          "start": {
            "column": 9,
            "line": 3
          }
        }
      },
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
                "column": 43,
                "line": 3
              },
              "start": {
                "column": 22,
                "line": 3
              }
            },
            "range": [
              178,
              199
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
                    "name": "cb",
                    "optional": false,
                    "range": [
                      182,
                      184
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 3
                      },
                      "start": {
                        "column": 26,
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
                        "column": 41,
                        "line": 3
                      },
                      "start": {
                        "column": 28,
                        "line": 3
                      }
                    },
                    "range": [
                      184,
                      197
                    ],
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "t",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 35,
                                "line": 3
                              },
                              "start": {
                                "column": 32,
                                "line": 3
                              }
                            },
                            "range": [
                              188,
                              191
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "range": [
                                  190,
                                  191
                                ],
                                "loc": {
                                  "end": {
                                    "column": 35,
                                    "line": 3
                                  },
                                  "start": {
                                    "column": 34,
                                    "line": 3
                                  }
                                }
                              },
                              "range": [
                                190,
                                191
                              ],
                              "loc": {
                                "end": {
                                  "column": 35,
                                  "line": 3
                                },
                                "start": {
                                  "column": 34,
                                  "line": 3
                                }
                              }
                            }
                          },
                          "range": [
                            187,
                            191
                          ],
                          "loc": {
                            "end": {
                              "column": 35,
                              "line": 3
                            },
                            "start": {
                              "column": 31,
                              "line": 3
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 41,
                            "line": 3
                          },
                          "start": {
                            "column": 37,
                            "line": 3
                          }
                        },
                        "range": [
                          193,
                          197
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "range": [
                              196,
                              197
                            ],
                            "loc": {
                              "end": {
                                "column": 41,
                                "line": 3
                              },
                              "start": {
                                "column": 40,
                                "line": 3
                              }
                            }
                          },
                          "range": [
                            196,
                            197
                          ],
                          "loc": {
                            "end": {
                              "column": 41,
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
                        186,
                        197
                      ],
                      "loc": {
                        "end": {
                          "column": 41,
                          "line": 3
                        },
                        "start": {
                          "column": 30,
                          "line": 3
                        }
                      }
                    }
                  },
                  "range": [
                    182,
                    197
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 3
                    },
                    "start": {
                      "column": 26,
                      "line": 3
                    }
                  }
                }
              ],
              "range": [
                180,
                199
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 3
                },
                "start": {
                  "column": 24,
                  "line": 3
                }
              }
            }
          },
          "range": [
            175,
            199
          ],
          "loc": {
            "end": {
              "column": 43,
              "line": 3
            },
            "start": {
              "column": 19,
              "line": 3
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 18,
            "line": 3
          },
          "start": {
            "column": 12,
            "line": 3
          }
        },
        "range": [
          168,
          174
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
                169,
                170
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 3
                },
                "start": {
                  "column": 13,
                  "line": 3
                }
              }
            },
            "out": false,
            "range": [
              169,
              170
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 3
              },
              "start": {
                "column": 13,
                "line": 3
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
              "name": "U",
              "optional": false,
              "range": [
                172,
                173
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 3
                },
                "start": {
                  "column": 16,
                  "line": 3
                }
              }
            },
            "out": false,
            "range": [
              172,
              173
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 3
              },
              "start": {
                "column": 16,
                "line": 3
              }
            }
          }
        ]
      },
      "range": [
        156,
        229
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
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "definite": false,
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "arg",
            "optional": false,
            "range": [
              235,
              238
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 7
              },
              "start": {
                "column": 4,
                "line": 7
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
                  "name": "cb",
                  "optional": false,
                  "range": [
                    243,
                    245
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 7
                    },
                    "start": {
                      "column": 12,
                      "line": 7
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
                    "type": "Literal",
                    "raw": "''",
                    "value": "",
                    "range": [
                      260,
                      262
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 7
                      },
                      "start": {
                        "column": 29,
                        "line": 7
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
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 7
                          },
                          "start": {
                            "column": 21,
                            "line": 7
                          }
                        },
                        "range": [
                          252,
                          255
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "range": [
                              254,
                              255
                            ],
                            "loc": {
                              "end": {
                                "column": 24,
                                "line": 7
                              },
                              "start": {
                                "column": 23,
                                "line": 7
                              }
                            }
                          },
                          "range": [
                            254,
                            255
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 7
                            },
                            "start": {
                              "column": 23,
                              "line": 7
                            }
                          }
                        }
                      },
                      "range": [
                        251,
                        255
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 7
                        },
                        "start": {
                          "column": 20,
                          "line": 7
                        }
                      }
                    }
                  ],
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 7
                      },
                      "start": {
                        "column": 16,
                        "line": 7
                      }
                    },
                    "range": [
                      247,
                      250
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
                            248,
                            249
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 7
                            },
                            "start": {
                              "column": 17,
                              "line": 7
                            }
                          }
                        },
                        "out": false,
                        "range": [
                          248,
                          249
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 7
                          },
                          "start": {
                            "column": 17,
                            "line": 7
                          }
                        }
                      }
                    ]
                  },
                  "range": [
                    247,
                    262
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 7
                    },
                    "start": {
                      "column": 16,
                      "line": 7
                    }
                  }
                },
                "range": [
                  243,
                  262
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 7
                  },
                  "start": {
                    "column": 12,
                    "line": 7
                  }
                }
              }
            ],
            "range": [
              241,
              264
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 7
              },
              "start": {
                "column": 10,
                "line": 7
              }
            }
          },
          "range": [
            235,
            264
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 7
            },
            "start": {
              "column": 4,
              "line": 7
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        231,
        265
      ],
      "loc": {
        "end": {
          "column": 34,
          "line": 7
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
            "name": "r",
            "optional": false,
            "range": [
              270,
              271
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 8
              },
              "start": {
                "column": 4,
                "line": 8
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "arg",
                "optional": false,
                "range": [
                  278,
                  281
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 8
                  },
                  "start": {
                    "column": 12,
                    "line": 8
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "range": [
                274,
                277
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 8
                },
                "start": {
                  "column": 8,
                  "line": 8
                }
              }
            },
            "optional": false,
            "range": [
              274,
              282
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 8
              },
              "start": {
                "column": 8,
                "line": 8
              }
            }
          },
          "range": [
            270,
            282
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 8
            },
            "start": {
              "column": 4,
              "line": 8
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        266,
        283
      ],
      "loc": {
        "end": {
          "column": 17,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 8
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
            "name": "r2",
            "optional": false,
            "range": [
              319,
              321
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 10
              },
              "start": {
                "column": 4,
                "line": 10
              }
            }
          },
          "init": {
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
                      "name": "cb",
                      "optional": false,
                      "range": [
                        330,
                        332
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 10
                        },
                        "start": {
                          "column": 15,
                          "line": 10
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
                        "type": "Literal",
                        "raw": "''",
                        "value": "",
                        "range": [
                          353,
                          355
                        ],
                        "loc": {
                          "end": {
                            "column": 40,
                            "line": 10
                          },
                          "start": {
                            "column": 38,
                            "line": 10
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
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 27,
                                "line": 10
                              },
                              "start": {
                                "column": 24,
                                "line": 10
                              }
                            },
                            "range": [
                              339,
                              342
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "range": [
                                  341,
                                  342
                                ],
                                "loc": {
                                  "end": {
                                    "column": 27,
                                    "line": 10
                                  },
                                  "start": {
                                    "column": 26,
                                    "line": 10
                                  }
                                }
                              },
                              "range": [
                                341,
                                342
                              ],
                              "loc": {
                                "end": {
                                  "column": 27,
                                  "line": 10
                                },
                                "start": {
                                  "column": 26,
                                  "line": 10
                                }
                              }
                            }
                          },
                          "range": [
                            338,
                            342
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 10
                            },
                            "start": {
                              "column": 23,
                              "line": 10
                            }
                          }
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 33,
                                "line": 10
                              },
                              "start": {
                                "column": 30,
                                "line": 10
                              }
                            },
                            "range": [
                              345,
                              348
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "range": [
                                  347,
                                  348
                                ],
                                "loc": {
                                  "end": {
                                    "column": 33,
                                    "line": 10
                                  },
                                  "start": {
                                    "column": 32,
                                    "line": 10
                                  }
                                }
                              },
                              "range": [
                                347,
                                348
                              ],
                              "loc": {
                                "end": {
                                  "column": 33,
                                  "line": 10
                                },
                                "start": {
                                  "column": 32,
                                  "line": 10
                                }
                              }
                            }
                          },
                          "range": [
                            344,
                            348
                          ],
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 10
                            },
                            "start": {
                              "column": 29,
                              "line": 10
                            }
                          }
                        }
                      ],
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 10
                          },
                          "start": {
                            "column": 19,
                            "line": 10
                          }
                        },
                        "range": [
                          334,
                          337
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
                                335,
                                336
                              ],
                              "loc": {
                                "end": {
                                  "column": 21,
                                  "line": 10
                                },
                                "start": {
                                  "column": 20,
                                  "line": 10
                                }
                              }
                            },
                            "out": false,
                            "range": [
                              335,
                              336
                            ],
                            "loc": {
                              "end": {
                                "column": 21,
                                "line": 10
                              },
                              "start": {
                                "column": 20,
                                "line": 10
                              }
                            }
                          }
                        ]
                      },
                      "range": [
                        334,
                        355
                      ],
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 10
                        },
                        "start": {
                          "column": 19,
                          "line": 10
                        }
                      }
                    },
                    "range": [
                      330,
                      355
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 10
                      },
                      "start": {
                        "column": 15,
                        "line": 10
                      }
                    }
                  }
                ],
                "range": [
                  328,
                  357
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 10
                  },
                  "start": {
                    "column": 13,
                    "line": 10
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "range": [
                324,
                327
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 10
                },
                "start": {
                  "column": 9,
                  "line": 10
                }
              }
            },
            "optional": false,
            "range": [
              324,
              358
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 10
              },
              "start": {
                "column": 9,
                "line": 10
              }
            }
          },
          "range": [
            319,
            358
          ],
          "loc": {
            "end": {
              "column": 43,
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
        315,
        359
      ],
      "loc": {
        "end": {
          "column": 44,
          "line": 10
        },
        "start": {
          "column": 0,
          "line": 10
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
            "name": "r3",
            "optional": false,
            "range": [
              373,
              375
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 11
              },
              "start": {
                "column": 4,
                "line": 11
              }
            }
          },
          "init": {
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
                      "name": "cb",
                      "optional": false,
                      "range": [
                        384,
                        386
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 11
                        },
                        "start": {
                          "column": 15,
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
                        "type": "Literal",
                        "raw": "''",
                        "value": "",
                        "range": [
                          414,
                          416
                        ],
                        "loc": {
                          "end": {
                            "column": 47,
                            "line": 11
                          },
                          "start": {
                            "column": 45,
                            "line": 11
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
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 29,
                                "line": 11
                              },
                              "start": {
                                "column": 21,
                                "line": 11
                              }
                            },
                            "range": [
                              390,
                              398
                            ],
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "range": [
                                392,
                                398
                              ],
                              "loc": {
                                "end": {
                                  "column": 29,
                                  "line": 11
                                },
                                "start": {
                                  "column": 23,
                                  "line": 11
                                }
                              }
                            }
                          },
                          "range": [
                            389,
                            398
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 11
                            },
                            "start": {
                              "column": 20,
                              "line": 11
                            }
                          }
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 40,
                                "line": 11
                              },
                              "start": {
                                "column": 32,
                                "line": 11
                              }
                            },
                            "range": [
                              401,
                              409
                            ],
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "range": [
                                403,
                                409
                              ],
                              "loc": {
                                "end": {
                                  "column": 40,
                                  "line": 11
                                },
                                "start": {
                                  "column": 34,
                                  "line": 11
                                }
                              }
                            }
                          },
                          "range": [
                            400,
                            409
                          ],
                          "loc": {
                            "end": {
                              "column": 40,
                              "line": 11
                            },
                            "start": {
                              "column": 31,
                              "line": 11
                            }
                          }
                        }
                      ],
                      "range": [
                        388,
                        416
                      ],
                      "loc": {
                        "end": {
                          "column": 47,
                          "line": 11
                        },
                        "start": {
                          "column": 19,
                          "line": 11
                        }
                      }
                    },
                    "range": [
                      384,
                      416
                    ],
                    "loc": {
                      "end": {
                        "column": 47,
                        "line": 11
                      },
                      "start": {
                        "column": 15,
                        "line": 11
                      }
                    }
                  }
                ],
                "range": [
                  382,
                  418
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 11
                  },
                  "start": {
                    "column": 13,
                    "line": 11
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "range": [
                378,
                381
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 11
                },
                "start": {
                  "column": 9,
                  "line": 11
                }
              }
            },
            "optional": false,
            "range": [
              378,
              419
            ],
            "loc": {
              "end": {
                "column": 50,
                "line": 11
              },
              "start": {
                "column": 9,
                "line": 11
              }
            }
          },
          "range": [
            373,
            419
          ],
          "loc": {
            "end": {
              "column": 50,
              "line": 11
            },
            "start": {
              "column": 4,
              "line": 11
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        369,
        420
      ],
      "loc": {
        "end": {
          "column": 51,
          "line": 11
        },
        "start": {
          "column": 0,
          "line": 11
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
                  "type": "Literal",
                  "raw": "null",
                  "value": null,
                  "range": [
                    504,
                    508
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
                {
                  "type": "Literal",
                  "raw": "null",
                  "value": null,
                  "range": [
                    510,
                    514
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 14
                    },
                    "start": {
                      "column": 24,
                      "line": 14
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
                  "name": "arg",
                  "optional": false,
                  "range": [
                    497,
                    500
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 14
                    },
                    "start": {
                      "column": 11,
                      "line": 14
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "cb",
                  "optional": false,
                  "range": [
                    501,
                    503
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 14
                    },
                    "start": {
                      "column": 15,
                      "line": 14
                    }
                  }
                },
                "range": [
                  497,
                  503
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 14
                  },
                  "start": {
                    "column": 11,
                    "line": 14
                  }
                }
              },
              "optional": false,
              "range": [
                497,
                515
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 14
                },
                "start": {
                  "column": 11,
                  "line": 14
                }
              }
            },
            "range": [
              490,
              516
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 14
              },
              "start": {
                "column": 4,
                "line": 14
              }
            }
          }
        ],
        "range": [
          484,
          518
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 15
          },
          "start": {
            "column": 53,
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
        "name": "foo2",
        "optional": false,
        "range": [
          440,
          444
        ],
        "loc": {
          "end": {
            "column": 13,
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
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 51,
                "line": 13
              },
              "start": {
                "column": 23,
                "line": 13
              }
            },
            "range": [
              454,
              482
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
                    "name": "cb",
                    "optional": false,
                    "range": [
                      458,
                      460
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 13
                      },
                      "start": {
                        "column": 27,
                        "line": 13
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
                        "column": 49,
                        "line": 13
                      },
                      "start": {
                        "column": 29,
                        "line": 13
                      }
                    },
                    "range": [
                      460,
                      480
                    ],
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "t",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 36,
                                "line": 13
                              },
                              "start": {
                                "column": 33,
                                "line": 13
                              }
                            },
                            "range": [
                              464,
                              467
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "range": [
                                  466,
                                  467
                                ],
                                "loc": {
                                  "end": {
                                    "column": 36,
                                    "line": 13
                                  },
                                  "start": {
                                    "column": 35,
                                    "line": 13
                                  }
                                }
                              },
                              "range": [
                                466,
                                467
                              ],
                              "loc": {
                                "end": {
                                  "column": 36,
                                  "line": 13
                                },
                                "start": {
                                  "column": 35,
                                  "line": 13
                                }
                              }
                            }
                          },
                          "range": [
                            463,
                            467
                          ],
                          "loc": {
                            "end": {
                              "column": 36,
                              "line": 13
                            },
                            "start": {
                              "column": 32,
                              "line": 13
                            }
                          }
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "t2",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 43,
                                "line": 13
                              },
                              "start": {
                                "column": 40,
                                "line": 13
                              }
                            },
                            "range": [
                              471,
                              474
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "range": [
                                  473,
                                  474
                                ],
                                "loc": {
                                  "end": {
                                    "column": 43,
                                    "line": 13
                                  },
                                  "start": {
                                    "column": 42,
                                    "line": 13
                                  }
                                }
                              },
                              "range": [
                                473,
                                474
                              ],
                              "loc": {
                                "end": {
                                  "column": 43,
                                  "line": 13
                                },
                                "start": {
                                  "column": 42,
                                  "line": 13
                                }
                              }
                            }
                          },
                          "range": [
                            469,
                            474
                          ],
                          "loc": {
                            "end": {
                              "column": 43,
                              "line": 13
                            },
                            "start": {
                              "column": 38,
                              "line": 13
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 49,
                            "line": 13
                          },
                          "start": {
                            "column": 45,
                            "line": 13
                          }
                        },
                        "range": [
                          476,
                          480
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "range": [
                              479,
                              480
                            ],
                            "loc": {
                              "end": {
                                "column": 49,
                                "line": 13
                              },
                              "start": {
                                "column": 48,
                                "line": 13
                              }
                            }
                          },
                          "range": [
                            479,
                            480
                          ],
                          "loc": {
                            "end": {
                              "column": 49,
                              "line": 13
                            },
                            "start": {
                              "column": 48,
                              "line": 13
                            }
                          }
                        }
                      },
                      "range": [
                        462,
                        480
                      ],
                      "loc": {
                        "end": {
                          "column": 49,
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
                    458,
                    480
                  ],
                  "loc": {
                    "end": {
                      "column": 49,
                      "line": 13
                    },
                    "start": {
                      "column": 27,
                      "line": 13
                    }
                  }
                }
              ],
              "range": [
                456,
                482
              ],
              "loc": {
                "end": {
                  "column": 51,
                  "line": 13
                },
                "start": {
                  "column": 25,
                  "line": 13
                }
              }
            }
          },
          "range": [
            451,
            482
          ],
          "loc": {
            "end": {
              "column": 51,
              "line": 13
            },
            "start": {
              "column": 20,
              "line": 13
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 19,
            "line": 13
          },
          "start": {
            "column": 13,
            "line": 13
          }
        },
        "range": [
          444,
          450
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
                445,
                446
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 13
                },
                "start": {
                  "column": 14,
                  "line": 13
                }
              }
            },
            "out": false,
            "range": [
              445,
              446
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 13
              },
              "start": {
                "column": 14,
                "line": 13
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
              "name": "U",
              "optional": false,
              "range": [
                448,
                449
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 13
                },
                "start": {
                  "column": 17,
                  "line": 13
                }
              }
            },
            "out": false,
            "range": [
              448,
              449
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 13
              },
              "start": {
                "column": 17,
                "line": 13
              }
            }
          }
        ]
      },
      "range": [
        431,
        518
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 15
        },
        "start": {
          "column": 0,
          "line": 13
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
            "name": "r4",
            "optional": false,
            "range": [
              541,
              543
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 18
              },
              "start": {
                "column": 4,
                "line": 18
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "arg",
                "optional": false,
                "range": [
                  550,
                  553
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 18
                  },
                  "start": {
                    "column": 13,
                    "line": 18
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "range": [
                546,
                549
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 18
                },
                "start": {
                  "column": 9,
                  "line": 18
                }
              }
            },
            "optional": false,
            "range": [
              546,
              554
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 18
              },
              "start": {
                "column": 9,
                "line": 18
              }
            }
          },
          "range": [
            541,
            554
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 18
            },
            "start": {
              "column": 4,
              "line": 18
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        537,
        555
      ],
      "loc": {
        "end": {
          "column": 18,
          "line": 18
        },
        "start": {
          "column": 0,
          "line": 18
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
            "name": "r5",
            "optional": false,
            "range": [
              566,
              568
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 19
              },
              "start": {
                "column": 4,
                "line": 19
              }
            }
          },
          "init": {
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
                      "name": "cb",
                      "optional": false,
                      "range": [
                        577,
                        579
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 19
                        },
                        "start": {
                          "column": 15,
                          "line": 19
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
                        "type": "Literal",
                        "raw": "''",
                        "value": "",
                        "range": [
                          594,
                          596
                        ],
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 19
                          },
                          "start": {
                            "column": 32,
                            "line": 19
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
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 27,
                                "line": 19
                              },
                              "start": {
                                "column": 24,
                                "line": 19
                              }
                            },
                            "range": [
                              586,
                              589
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "range": [
                                  588,
                                  589
                                ],
                                "loc": {
                                  "end": {
                                    "column": 27,
                                    "line": 19
                                  },
                                  "start": {
                                    "column": 26,
                                    "line": 19
                                  }
                                }
                              },
                              "range": [
                                588,
                                589
                              ],
                              "loc": {
                                "end": {
                                  "column": 27,
                                  "line": 19
                                },
                                "start": {
                                  "column": 26,
                                  "line": 19
                                }
                              }
                            }
                          },
                          "range": [
                            585,
                            589
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 19
                            },
                            "start": {
                              "column": 23,
                              "line": 19
                            }
                          }
                        }
                      ],
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 19
                          },
                          "start": {
                            "column": 19,
                            "line": 19
                          }
                        },
                        "range": [
                          581,
                          584
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
                                582,
                                583
                              ],
                              "loc": {
                                "end": {
                                  "column": 21,
                                  "line": 19
                                },
                                "start": {
                                  "column": 20,
                                  "line": 19
                                }
                              }
                            },
                            "out": false,
                            "range": [
                              582,
                              583
                            ],
                            "loc": {
                              "end": {
                                "column": 21,
                                "line": 19
                              },
                              "start": {
                                "column": 20,
                                "line": 19
                              }
                            }
                          }
                        ]
                      },
                      "range": [
                        581,
                        596
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 19
                        },
                        "start": {
                          "column": 19,
                          "line": 19
                        }
                      }
                    },
                    "range": [
                      577,
                      596
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 19
                      },
                      "start": {
                        "column": 15,
                        "line": 19
                      }
                    }
                  }
                ],
                "range": [
                  575,
                  598
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 19
                  },
                  "start": {
                    "column": 13,
                    "line": 19
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "range": [
                571,
                574
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 19
                },
                "start": {
                  "column": 9,
                  "line": 19
                }
              }
            },
            "optional": false,
            "range": [
              571,
              599
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 19
              },
              "start": {
                "column": 9,
                "line": 19
              }
            }
          },
          "range": [
            566,
            599
          ],
          "loc": {
            "end": {
              "column": 37,
              "line": 19
            },
            "start": {
              "column": 4,
              "line": 19
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        562,
        600
      ],
      "loc": {
        "end": {
          "column": 38,
          "line": 19
        },
        "start": {
          "column": 0,
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
            "type": "Identifier",
            "decorators": [],
            "name": "r6",
            "optional": false,
            "range": [
              611,
              613
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 20
              },
              "start": {
                "column": 4,
                "line": 20
              }
            }
          },
          "init": {
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
                      "name": "cb",
                      "optional": false,
                      "range": [
                        622,
                        624
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 20
                        },
                        "start": {
                          "column": 15,
                          "line": 20
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
                        "type": "Literal",
                        "raw": "''",
                        "value": "",
                        "range": [
                          641,
                          643
                        ],
                        "loc": {
                          "end": {
                            "column": 36,
                            "line": 20
                          },
                          "start": {
                            "column": 34,
                            "line": 20
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
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 29,
                                "line": 20
                              },
                              "start": {
                                "column": 21,
                                "line": 20
                              }
                            },
                            "range": [
                              628,
                              636
                            ],
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "range": [
                                630,
                                636
                              ],
                              "loc": {
                                "end": {
                                  "column": 29,
                                  "line": 20
                                },
                                "start": {
                                  "column": 23,
                                  "line": 20
                                }
                              }
                            }
                          },
                          "range": [
                            627,
                            636
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 20
                            },
                            "start": {
                              "column": 20,
                              "line": 20
                            }
                          }
                        }
                      ],
                      "range": [
                        626,
                        643
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 20
                        },
                        "start": {
                          "column": 19,
                          "line": 20
                        }
                      }
                    },
                    "range": [
                      622,
                      643
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 20
                      },
                      "start": {
                        "column": 15,
                        "line": 20
                      }
                    }
                  }
                ],
                "range": [
                  620,
                  645
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 20
                  },
                  "start": {
                    "column": 13,
                    "line": 20
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "range": [
                616,
                619
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 20
                },
                "start": {
                  "column": 9,
                  "line": 20
                }
              }
            },
            "optional": false,
            "range": [
              616,
              646
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 20
              },
              "start": {
                "column": 9,
                "line": 20
              }
            }
          },
          "range": [
            611,
            646
          ],
          "loc": {
            "end": {
              "column": 39,
              "line": 20
            },
            "start": {
              "column": 4,
              "line": 20
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        607,
        647
      ],
      "loc": {
        "end": {
          "column": 40,
          "line": 20
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
            "name": "r7",
            "optional": false,
            "range": [
              662,
              664
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 21
              },
              "start": {
                "column": 4,
                "line": 21
              }
            }
          },
          "init": {
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
                      "name": "cb",
                      "optional": false,
                      "range": [
                        673,
                        675
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 21
                        },
                        "start": {
                          "column": 15,
                          "line": 21
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
                        "type": "Literal",
                        "raw": "''",
                        "value": "",
                        "range": [
                          683,
                          685
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 21
                          },
                          "start": {
                            "column": 25,
                            "line": 21
                          }
                        }
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": [],
                      "range": [
                        677,
                        685
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 21
                        },
                        "start": {
                          "column": 19,
                          "line": 21
                        }
                      }
                    },
                    "range": [
                      673,
                      685
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 21
                      },
                      "start": {
                        "column": 15,
                        "line": 21
                      }
                    }
                  }
                ],
                "range": [
                  671,
                  687
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 21
                  },
                  "start": {
                    "column": 13,
                    "line": 21
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "range": [
                667,
                670
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 21
                },
                "start": {
                  "column": 9,
                  "line": 21
                }
              }
            },
            "optional": false,
            "range": [
              667,
              688
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 21
              },
              "start": {
                "column": 9,
                "line": 21
              }
            }
          },
          "range": [
            662,
            688
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 21
            },
            "start": {
              "column": 4,
              "line": 21
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        658,
        689
      ],
      "loc": {
        "end": {
          "column": 31,
          "line": 21
        },
        "start": {
          "column": 0,
          "line": 21
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 22
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
