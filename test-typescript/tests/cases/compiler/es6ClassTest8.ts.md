__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    1098
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
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                27,
                28
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 1
                },
                "start": {
                  "column": 27,
                  "line": 1
                }
              }
            },
            "range": [
              20,
              29
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 1
              },
              "start": {
                "column": 20,
                "line": 1
              }
            }
          }
        ],
        "range": [
          19,
          30
        ],
        "loc": {
          "end": {
            "column": 30,
            "line": 1
          },
          "start": {
            "column": 19,
            "line": 1
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "range": [
          9,
          11
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 1
          },
          "start": {
            "column": 9,
            "line": 1
          }
        }
      },
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
                "column": 17,
                "line": 1
              },
              "start": {
                "column": 13,
                "line": 1
              }
            },
            "range": [
              13,
              17
            ],
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                14,
                17
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 1
                },
                "start": {
                  "column": 14,
                  "line": 1
                }
              }
            }
          },
          "range": [
            12,
            17
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 1
            },
            "start": {
              "column": 12,
              "line": 1
            }
          }
        }
      ],
      "range": [
        0,
        30
      ],
      "loc": {
        "end": {
          "column": 30,
          "line": 1
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
          40,
          203
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                46,
                57
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 15,
                  "line": 4
                },
                "start": {
                  "column": 4,
                  "line": 4
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
                57,
                198
              ],
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
                          "name": "bar",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 19,
                                "line": 5
                              },
                              "start": {
                                "column": 15,
                                "line": 5
                              }
                            },
                            "range": [
                              77,
                              81
                            ],
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "range": [
                                78,
                                81
                              ],
                              "loc": {
                                "end": {
                                  "column": 19,
                                  "line": 5
                                },
                                "start": {
                                  "column": 16,
                                  "line": 5
                                }
                              }
                            }
                          },
                          "range": [
                            74,
                            81
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 5
                            },
                            "start": {
                              "column": 12,
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
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "bar",
                                  "optional": false,
                                  "range": [
                                    117,
                                    120
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 22,
                                      "line": 6
                                    },
                                    "start": {
                                      "column": 19,
                                      "line": 6
                                    }
                                  }
                                },
                                "range": [
                                  110,
                                  121
                                ],
                                "loc": {
                                  "end": {
                                    "column": 23,
                                    "line": 6
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 6
                                  }
                                }
                              }
                            ],
                            "range": [
                              96,
                              161
                            ],
                            "loc": {
                              "end": {
                                "column": 9,
                                "line": 7
                              },
                              "start": {
                                "column": 34,
                                "line": 5
                              }
                            }
                          },
                          "declare": false,
                          "expression": false,
                          "generator": false,
                          "id": null,
                          "params": [],
                          "range": [
                            85,
                            161
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 7
                            },
                            "start": {
                              "column": 23,
                              "line": 5
                            }
                          }
                        },
                        "range": [
                          74,
                          162
                        ],
                        "loc": {
                          "end": {
                            "column": 10,
                            "line": 7
                          },
                          "start": {
                            "column": 12,
                            "line": 5
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      70,
                      163
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 7
                      },
                      "start": {
                        "column": 8,
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
                            176,
                            177
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 8
                            },
                            "start": {
                              "column": 12,
                              "line": 8
                            }
                          }
                        },
                        "init": {
                          "type": "CallExpression",
                          "arguments": [
                            {
                              "type": "CallExpression",
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "bar",
                                  "optional": false,
                                  "range": [
                                    186,
                                    189
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 25,
                                      "line": 8
                                    },
                                    "start": {
                                      "column": 22,
                                      "line": 8
                                    }
                                  }
                                }
                              ],
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "f1",
                                "optional": false,
                                "range": [
                                  183,
                                  185
                                ],
                                "loc": {
                                  "end": {
                                    "column": 21,
                                    "line": 8
                                  },
                                  "start": {
                                    "column": 19,
                                    "line": 8
                                  }
                                }
                              },
                              "optional": false,
                              "range": [
                                183,
                                190
                              ],
                              "loc": {
                                "end": {
                                  "column": 26,
                                  "line": 8
                                },
                                "start": {
                                  "column": 19,
                                  "line": 8
                                }
                              }
                            }
                          ],
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "f1",
                            "optional": false,
                            "range": [
                              180,
                              182
                            ],
                            "loc": {
                              "end": {
                                "column": 18,
                                "line": 8
                              },
                              "start": {
                                "column": 16,
                                "line": 8
                              }
                            }
                          },
                          "optional": false,
                          "range": [
                            180,
                            191
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 8
                            },
                            "start": {
                              "column": 16,
                              "line": 8
                            }
                          }
                        },
                        "range": [
                          176,
                          191
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 8
                          },
                          "start": {
                            "column": 12,
                            "line": 8
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      172,
                      192
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 8
                      },
                      "start": {
                        "column": 8,
                        "line": 8
                      }
                    }
                  }
                ],
                "range": [
                  60,
                  198
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 9
                  },
                  "start": {
                    "column": 18,
                    "line": 4
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 9
                },
                "start": {
                  "column": 15,
                  "line": 4
                }
              }
            },
            "range": [
              46,
              198
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 9
              },
              "start": {
                "column": 4,
                "line": 4
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
            "column": 8,
            "line": 3
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "range": [
          38,
          39
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 3
          },
          "start": {
            "column": 6,
            "line": 3
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        32,
        203
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 11
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          218,
          629
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "norm",
              "optional": false,
              "range": [
                231,
                235
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 14
                },
                "start": {
                  "column": 11,
                  "line": 14
                }
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "range": [
                235,
                267
              ],
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
                        261,
                        265
                      ],
                      "loc": {
                        "end": {
                          "column": 45,
                          "line": 14
                        },
                        "start": {
                          "column": 41,
                          "line": 14
                        }
                      }
                    },
                    "range": [
                      254,
                      266
                    ],
                    "loc": {
                      "end": {
                        "column": 46,
                        "line": 14
                      },
                      "start": {
                        "column": 34,
                        "line": 14
                      }
                    }
                  }
                ],
                "range": [
                  253,
                  267
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 14
                  },
                  "start": {
                    "column": 33,
                    "line": 14
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
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 14
                      },
                      "start": {
                        "column": 17,
                        "line": 14
                      }
                    },
                    "range": [
                      237,
                      244
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Vector",
                        "optional": false,
                        "range": [
                          238,
                          244
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 14
                          },
                          "start": {
                            "column": 18,
                            "line": 14
                          }
                        }
                      },
                      "range": [
                        238,
                        244
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 14
                        },
                        "start": {
                          "column": 18,
                          "line": 14
                        }
                      }
                    }
                  },
                  "range": [
                    236,
                    244
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
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 14
                  },
                  "start": {
                    "column": 25,
                    "line": 14
                  }
                },
                "range": [
                  245,
                  252
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Vector",
                    "optional": false,
                    "range": [
                      246,
                      252
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 14
                      },
                      "start": {
                        "column": 26,
                        "line": 14
                      }
                    }
                  },
                  "range": [
                    246,
                    252
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 14
                    },
                    "start": {
                      "column": 26,
                      "line": 14
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 47,
                  "line": 14
                },
                "start": {
                  "column": 15,
                  "line": 14
                }
              }
            },
            "range": [
              224,
              267
            ],
            "loc": {
              "end": {
                "column": 47,
                "line": 14
              },
              "start": {
                "column": 4,
                "line": 14
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
              "name": "minus",
              "optional": false,
              "range": [
                279,
                284
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 15
                },
                "start": {
                  "column": 11,
                  "line": 15
                }
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "range": [
                284,
                328
              ],
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
                        322,
                        326
                      ],
                      "loc": {
                        "end": {
                          "column": 58,
                          "line": 15
                        },
                        "start": {
                          "column": 54,
                          "line": 15
                        }
                      }
                    },
                    "range": [
                      315,
                      327
                    ],
                    "loc": {
                      "end": {
                        "column": 59,
                        "line": 15
                      },
                      "start": {
                        "column": 47,
                        "line": 15
                      }
                    }
                  }
                ],
                "range": [
                  314,
                  328
                ],
                "loc": {
                  "end": {
                    "column": 60,
                    "line": 15
                  },
                  "start": {
                    "column": 46,
                    "line": 15
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
                  "name": "v1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 15
                      },
                      "start": {
                        "column": 19,
                        "line": 15
                      }
                    },
                    "range": [
                      287,
                      294
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Vector",
                        "optional": false,
                        "range": [
                          288,
                          294
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 15
                          },
                          "start": {
                            "column": 20,
                            "line": 15
                          }
                        }
                      },
                      "range": [
                        288,
                        294
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 15
                        },
                        "start": {
                          "column": 20,
                          "line": 15
                        }
                      }
                    }
                  },
                  "range": [
                    285,
                    294
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 15
                    },
                    "start": {
                      "column": 17,
                      "line": 15
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 15
                      },
                      "start": {
                        "column": 30,
                        "line": 15
                      }
                    },
                    "range": [
                      298,
                      305
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Vector",
                        "optional": false,
                        "range": [
                          299,
                          305
                        ],
                        "loc": {
                          "end": {
                            "column": 37,
                            "line": 15
                          },
                          "start": {
                            "column": 31,
                            "line": 15
                          }
                        }
                      },
                      "range": [
                        299,
                        305
                      ],
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 15
                        },
                        "start": {
                          "column": 31,
                          "line": 15
                        }
                      }
                    }
                  },
                  "range": [
                    296,
                    305
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 15
                    },
                    "start": {
                      "column": 28,
                      "line": 15
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 15
                  },
                  "start": {
                    "column": 38,
                    "line": 15
                  }
                },
                "range": [
                  306,
                  313
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Vector",
                    "optional": false,
                    "range": [
                      307,
                      313
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 15
                      },
                      "start": {
                        "column": 39,
                        "line": 15
                      }
                    }
                  },
                  "range": [
                    307,
                    313
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 15
                    },
                    "start": {
                      "column": 39,
                      "line": 15
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 60,
                  "line": 15
                },
                "start": {
                  "column": 16,
                  "line": 15
                }
              }
            },
            "range": [
              272,
              328
            ],
            "loc": {
              "end": {
                "column": 60,
                "line": 15
              },
              "start": {
                "column": 4,
                "line": 15
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
              "name": "times",
              "optional": false,
              "range": [
                340,
                345
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 16
                },
                "start": {
                  "column": 11,
                  "line": 16
                }
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "range": [
                345,
                389
              ],
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
                        383,
                        387
                      ],
                      "loc": {
                        "end": {
                          "column": 58,
                          "line": 16
                        },
                        "start": {
                          "column": 54,
                          "line": 16
                        }
                      }
                    },
                    "range": [
                      376,
                      388
                    ],
                    "loc": {
                      "end": {
                        "column": 59,
                        "line": 16
                      },
                      "start": {
                        "column": 47,
                        "line": 16
                      }
                    }
                  }
                ],
                "range": [
                  375,
                  389
                ],
                "loc": {
                  "end": {
                    "column": 60,
                    "line": 16
                  },
                  "start": {
                    "column": 46,
                    "line": 16
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
                  "name": "v1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 16
                      },
                      "start": {
                        "column": 19,
                        "line": 16
                      }
                    },
                    "range": [
                      348,
                      355
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Vector",
                        "optional": false,
                        "range": [
                          349,
                          355
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 16
                          },
                          "start": {
                            "column": 20,
                            "line": 16
                          }
                        }
                      },
                      "range": [
                        349,
                        355
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 16
                        },
                        "start": {
                          "column": 20,
                          "line": 16
                        }
                      }
                    }
                  },
                  "range": [
                    346,
                    355
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 16
                    },
                    "start": {
                      "column": 17,
                      "line": 16
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 16
                      },
                      "start": {
                        "column": 30,
                        "line": 16
                      }
                    },
                    "range": [
                      359,
                      366
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Vector",
                        "optional": false,
                        "range": [
                          360,
                          366
                        ],
                        "loc": {
                          "end": {
                            "column": 37,
                            "line": 16
                          },
                          "start": {
                            "column": 31,
                            "line": 16
                          }
                        }
                      },
                      "range": [
                        360,
                        366
                      ],
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 16
                        },
                        "start": {
                          "column": 31,
                          "line": 16
                        }
                      }
                    }
                  },
                  "range": [
                    357,
                    366
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 16
                    },
                    "start": {
                      "column": 28,
                      "line": 16
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 16
                  },
                  "start": {
                    "column": 38,
                    "line": 16
                  }
                },
                "range": [
                  367,
                  374
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Vector",
                    "optional": false,
                    "range": [
                      368,
                      374
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 16
                      },
                      "start": {
                        "column": 39,
                        "line": 16
                      }
                    }
                  },
                  "range": [
                    368,
                    374
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 16
                    },
                    "start": {
                      "column": 39,
                      "line": 16
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 60,
                  "line": 16
                },
                "start": {
                  "column": 16,
                  "line": 16
                }
              }
            },
            "range": [
              333,
              389
            ],
            "loc": {
              "end": {
                "column": 60,
                "line": 16
              },
              "start": {
                "column": 4,
                "line": 16
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
              "name": "cross",
              "optional": false,
              "range": [
                401,
                406
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 17
                },
                "start": {
                  "column": 11,
                  "line": 17
                }
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "range": [
                406,
                450
              ],
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
                        444,
                        448
                      ],
                      "loc": {
                        "end": {
                          "column": 58,
                          "line": 17
                        },
                        "start": {
                          "column": 54,
                          "line": 17
                        }
                      }
                    },
                    "range": [
                      437,
                      449
                    ],
                    "loc": {
                      "end": {
                        "column": 59,
                        "line": 17
                      },
                      "start": {
                        "column": 47,
                        "line": 17
                      }
                    }
                  }
                ],
                "range": [
                  436,
                  450
                ],
                "loc": {
                  "end": {
                    "column": 60,
                    "line": 17
                  },
                  "start": {
                    "column": 46,
                    "line": 17
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
                  "name": "v1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 17
                      },
                      "start": {
                        "column": 19,
                        "line": 17
                      }
                    },
                    "range": [
                      409,
                      416
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Vector",
                        "optional": false,
                        "range": [
                          410,
                          416
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 17
                          },
                          "start": {
                            "column": 20,
                            "line": 17
                          }
                        }
                      },
                      "range": [
                        410,
                        416
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 17
                        },
                        "start": {
                          "column": 20,
                          "line": 17
                        }
                      }
                    }
                  },
                  "range": [
                    407,
                    416
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 17
                    },
                    "start": {
                      "column": 17,
                      "line": 17
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 17
                      },
                      "start": {
                        "column": 30,
                        "line": 17
                      }
                    },
                    "range": [
                      420,
                      427
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Vector",
                        "optional": false,
                        "range": [
                          421,
                          427
                        ],
                        "loc": {
                          "end": {
                            "column": 37,
                            "line": 17
                          },
                          "start": {
                            "column": 31,
                            "line": 17
                          }
                        }
                      },
                      "range": [
                        421,
                        427
                      ],
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 17
                        },
                        "start": {
                          "column": 31,
                          "line": 17
                        }
                      }
                    }
                  },
                  "range": [
                    418,
                    427
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 17
                    },
                    "start": {
                      "column": 28,
                      "line": 17
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 17
                  },
                  "start": {
                    "column": 38,
                    "line": 17
                  }
                },
                "range": [
                  428,
                  435
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Vector",
                    "optional": false,
                    "range": [
                      429,
                      435
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 17
                      },
                      "start": {
                        "column": 39,
                        "line": 17
                      }
                    }
                  },
                  "range": [
                    429,
                    435
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 17
                    },
                    "start": {
                      "column": 39,
                      "line": 17
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 60,
                  "line": 17
                },
                "start": {
                  "column": 16,
                  "line": 17
                }
              }
            },
            "range": [
              394,
              450
            ],
            "loc": {
              "end": {
                "column": 60,
                "line": 17
              },
              "start": {
                "column": 4,
                "line": 17
              }
            }
          },
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                456,
                467
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 15,
                  "line": 19
                },
                "start": {
                  "column": 4,
                  "line": 19
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
                467,
                562
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  554,
                  562
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 22
                  },
                  "start": {
                    "column": 34,
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
                  "type": "TSParameterProperty",
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 19
                        },
                        "start": {
                          "column": 24,
                          "line": 19
                        }
                      },
                      "range": [
                        476,
                        484
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          478,
                          484
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
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
                      475,
                      484
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
                  "readonly": false,
                  "static": false,
                  "range": [
                    468,
                    484
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 19
                    },
                    "start": {
                      "column": 16,
                      "line": 19
                    }
                  }
                },
                {
                  "type": "TSParameterProperty",
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 20
                        },
                        "start": {
                          "column": 24,
                          "line": 20
                        }
                      },
                      "range": [
                        510,
                        518
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          512,
                          518
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 20
                          },
                          "start": {
                            "column": 26,
                            "line": 20
                          }
                        }
                      }
                    },
                    "range": [
                      509,
                      518
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 20
                      },
                      "start": {
                        "column": 23,
                        "line": 20
                      }
                    }
                  },
                  "readonly": false,
                  "static": false,
                  "range": [
                    502,
                    518
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 20
                    },
                    "start": {
                      "column": 16,
                      "line": 20
                    }
                  }
                },
                {
                  "type": "TSParameterProperty",
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 21
                        },
                        "start": {
                          "column": 24,
                          "line": 21
                        }
                      },
                      "range": [
                        544,
                        552
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          546,
                          552
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 21
                          },
                          "start": {
                            "column": 26,
                            "line": 21
                          }
                        }
                      }
                    },
                    "range": [
                      543,
                      552
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 21
                      },
                      "start": {
                        "column": 23,
                        "line": 21
                      }
                    }
                  },
                  "readonly": false,
                  "static": false,
                  "range": [
                    536,
                    552
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 21
                    },
                    "start": {
                      "column": 16,
                      "line": 21
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 22
                },
                "start": {
                  "column": 15,
                  "line": 19
                }
              }
            },
            "range": [
              456,
              562
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 22
              },
              "start": {
                "column": 4,
                "line": 19
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
              "name": "dot",
              "optional": false,
              "range": [
                575,
                578
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 24
                },
                "start": {
                  "column": 11,
                  "line": 24
                }
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "range": [
                578,
                622
              ],
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
                        616,
                        620
                      ],
                      "loc": {
                        "end": {
                          "column": 56,
                          "line": 24
                        },
                        "start": {
                          "column": 52,
                          "line": 24
                        }
                      }
                    },
                    "range": [
                      609,
                      621
                    ],
                    "loc": {
                      "end": {
                        "column": 57,
                        "line": 24
                      },
                      "start": {
                        "column": 45,
                        "line": 24
                      }
                    }
                  }
                ],
                "range": [
                  608,
                  622
                ],
                "loc": {
                  "end": {
                    "column": 58,
                    "line": 24
                  },
                  "start": {
                    "column": 44,
                    "line": 24
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
                  "name": "v1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 24
                      },
                      "start": {
                        "column": 17,
                        "line": 24
                      }
                    },
                    "range": [
                      581,
                      588
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Vector",
                        "optional": false,
                        "range": [
                          582,
                          588
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 24
                          },
                          "start": {
                            "column": 18,
                            "line": 24
                          }
                        }
                      },
                      "range": [
                        582,
                        588
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 24
                        },
                        "start": {
                          "column": 18,
                          "line": 24
                        }
                      }
                    }
                  },
                  "range": [
                    579,
                    588
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 24
                    },
                    "start": {
                      "column": 15,
                      "line": 24
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 24
                      },
                      "start": {
                        "column": 28,
                        "line": 24
                      }
                    },
                    "range": [
                      592,
                      599
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Vector",
                        "optional": false,
                        "range": [
                          593,
                          599
                        ],
                        "loc": {
                          "end": {
                            "column": 35,
                            "line": 24
                          },
                          "start": {
                            "column": 29,
                            "line": 24
                          }
                        }
                      },
                      "range": [
                        593,
                        599
                      ],
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 24
                        },
                        "start": {
                          "column": 29,
                          "line": 24
                        }
                      }
                    }
                  },
                  "range": [
                    590,
                    599
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 24
                    },
                    "start": {
                      "column": 26,
                      "line": 24
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 24
                  },
                  "start": {
                    "column": 36,
                    "line": 24
                  }
                },
                "range": [
                  600,
                  607
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Vector",
                    "optional": false,
                    "range": [
                      601,
                      607
                    ],
                    "loc": {
                      "end": {
                        "column": 43,
                        "line": 24
                      },
                      "start": {
                        "column": 37,
                        "line": 24
                      }
                    }
                  },
                  "range": [
                    601,
                    607
                  ],
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 24
                    },
                    "start": {
                      "column": 37,
                      "line": 24
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 58,
                  "line": 24
                },
                "start": {
                  "column": 14,
                  "line": 24
                }
              }
            },
            "range": [
              568,
              622
            ],
            "loc": {
              "end": {
                "column": 58,
                "line": 24
              },
              "start": {
                "column": 4,
                "line": 24
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
            "column": 13,
            "line": 13
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Vector",
        "optional": false,
        "range": [
          211,
          217
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 13
          },
          "start": {
            "column": 6,
            "line": 13
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        205,
        629
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 26
        },
        "start": {
          "column": 0,
          "line": 13
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          658,
          1096
        ],
        "body": [
          {
            "type": "PropertyDefinition",
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "forward",
              "optional": false,
              "range": [
                671,
                678
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 29
                },
                "start": {
                  "column": 11,
                  "line": 29
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
                  "line": 29
                },
                "start": {
                  "column": 18,
                  "line": 29
                }
              },
              "range": [
                678,
                686
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Vector",
                  "optional": false,
                  "range": [
                    680,
                    686
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 29
                    },
                    "start": {
                      "column": 20,
                      "line": 29
                    }
                  }
                },
                "range": [
                  680,
                  686
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 29
                  },
                  "start": {
                    "column": 20,
                    "line": 29
                  }
                }
              }
            },
            "value": null,
            "range": [
              664,
              687
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 29
              },
              "start": {
                "column": 4,
                "line": 29
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "right",
              "optional": false,
              "range": [
                699,
                704
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 30
                },
                "start": {
                  "column": 11,
                  "line": 30
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
                  "column": 24,
                  "line": 30
                },
                "start": {
                  "column": 16,
                  "line": 30
                }
              },
              "range": [
                704,
                712
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Vector",
                  "optional": false,
                  "range": [
                    706,
                    712
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 30
                    },
                    "start": {
                      "column": 18,
                      "line": 30
                    }
                  }
                },
                "range": [
                  706,
                  712
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 30
                  },
                  "start": {
                    "column": 18,
                    "line": 30
                  }
                }
              }
            },
            "value": null,
            "range": [
              692,
              713
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 30
              },
              "start": {
                "column": 4,
                "line": 30
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "up",
              "optional": false,
              "range": [
                725,
                727
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 31
                },
                "start": {
                  "column": 11,
                  "line": 31
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
                  "column": 21,
                  "line": 31
                },
                "start": {
                  "column": 13,
                  "line": 31
                }
              },
              "range": [
                727,
                735
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Vector",
                  "optional": false,
                  "range": [
                    729,
                    735
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 31
                    },
                    "start": {
                      "column": 15,
                      "line": 31
                    }
                  }
                },
                "range": [
                  729,
                  735
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 31
                  },
                  "start": {
                    "column": 15,
                    "line": 31
                  }
                }
              }
            },
            "value": null,
            "range": [
              718,
              736
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 31
              },
              "start": {
                "column": 4,
                "line": 31
              }
            }
          },
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                741,
                752
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 15,
                  "line": 32
                },
                "start": {
                  "column": 4,
                  "line": 32
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
                752,
                1094
              ],
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
                          "name": "down",
                          "optional": false,
                          "range": [
                            804,
                            808
                          ],
                          "loc": {
                            "end": {
                              "column": 16,
                              "line": 33
                            },
                            "start": {
                              "column": 12,
                              "line": 33
                            }
                          }
                        },
                        "init": {
                          "type": "NewExpression",
                          "arguments": [
                            {
                              "type": "Literal",
                              "raw": "0.0",
                              "value": 0,
                              "range": [
                                822,
                                825
                              ],
                              "loc": {
                                "end": {
                                  "column": 33,
                                  "line": 33
                                },
                                "start": {
                                  "column": 30,
                                  "line": 33
                                }
                              }
                            },
                            {
                              "type": "UnaryExpression",
                              "argument": {
                                "type": "Literal",
                                "raw": "1.0",
                                "value": 1,
                                "range": [
                                  828,
                                  831
                                ],
                                "loc": {
                                  "end": {
                                    "column": 39,
                                    "line": 33
                                  },
                                  "start": {
                                    "column": 36,
                                    "line": 33
                                  }
                                }
                              },
                              "operator": "-",
                              "prefix": true,
                              "range": [
                                827,
                                831
                              ],
                              "loc": {
                                "end": {
                                  "column": 39,
                                  "line": 33
                                },
                                "start": {
                                  "column": 35,
                                  "line": 33
                                }
                              }
                            },
                            {
                              "type": "Literal",
                              "raw": "0.0",
                              "value": 0,
                              "range": [
                                833,
                                836
                              ],
                              "loc": {
                                "end": {
                                  "column": 44,
                                  "line": 33
                                },
                                "start": {
                                  "column": 41,
                                  "line": 33
                                }
                              }
                            }
                          ],
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Vector",
                            "optional": false,
                            "range": [
                              815,
                              821
                            ],
                            "loc": {
                              "end": {
                                "column": 29,
                                "line": 33
                              },
                              "start": {
                                "column": 23,
                                "line": 33
                              }
                            }
                          },
                          "range": [
                            811,
                            837
                          ],
                          "loc": {
                            "end": {
                              "column": 45,
                              "line": 33
                            },
                            "start": {
                              "column": 19,
                              "line": 33
                            }
                          }
                        },
                        "range": [
                          804,
                          837
                        ],
                        "loc": {
                          "end": {
                            "column": 45,
                            "line": 33
                          },
                          "start": {
                            "column": 12,
                            "line": 33
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      800,
                      838
                    ],
                    "loc": {
                      "end": {
                        "column": 46,
                        "line": 33
                      },
                      "start": {
                        "column": 8,
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
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "range": [
                            847,
                            851
                          ],
                          "loc": {
                            "end": {
                              "column": 12,
                              "line": 34
                            },
                            "start": {
                              "column": 8,
                              "line": 34
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "forward",
                          "optional": false,
                          "range": [
                            852,
                            859
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 34
                            },
                            "start": {
                              "column": 13,
                              "line": 34
                            }
                          }
                        },
                        "range": [
                          847,
                          859
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 34
                          },
                          "start": {
                            "column": 8,
                            "line": 34
                          }
                        }
                      },
                      "right": {
                        "type": "CallExpression",
                        "arguments": [
                          {
                            "type": "CallExpression",
                            "arguments": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "lookAt",
                                "optional": false,
                                "range": [
                                  887,
                                  893
                                ],
                                "loc": {
                                  "end": {
                                    "column": 54,
                                    "line": 34
                                  },
                                  "start": {
                                    "column": 48,
                                    "line": 34
                                  }
                                }
                              },
                              {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "ThisExpression",
                                  "range": [
                                    894,
                                    898
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 59,
                                      "line": 34
                                    },
                                    "start": {
                                      "column": 55,
                                      "line": 34
                                    }
                                  }
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "pos",
                                  "optional": false,
                                  "range": [
                                    899,
                                    902
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 63,
                                      "line": 34
                                    },
                                    "start": {
                                      "column": 60,
                                      "line": 34
                                    }
                                  }
                                },
                                "range": [
                                  894,
                                  902
                                ],
                                "loc": {
                                  "end": {
                                    "column": 63,
                                    "line": 34
                                  },
                                  "start": {
                                    "column": 55,
                                    "line": 34
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
                                "name": "Vector",
                                "optional": false,
                                "range": [
                                  874,
                                  880
                                ],
                                "loc": {
                                  "end": {
                                    "column": 41,
                                    "line": 34
                                  },
                                  "start": {
                                    "column": 35,
                                    "line": 34
                                  }
                                }
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "minus",
                                "optional": false,
                                "range": [
                                  881,
                                  886
                                ],
                                "loc": {
                                  "end": {
                                    "column": 47,
                                    "line": 34
                                  },
                                  "start": {
                                    "column": 42,
                                    "line": 34
                                  }
                                }
                              },
                              "range": [
                                874,
                                886
                              ],
                              "loc": {
                                "end": {
                                  "column": 47,
                                  "line": 34
                                },
                                "start": {
                                  "column": 35,
                                  "line": 34
                                }
                              }
                            },
                            "optional": false,
                            "range": [
                              874,
                              903
                            ],
                            "loc": {
                              "end": {
                                "column": 64,
                                "line": 34
                              },
                              "start": {
                                "column": 35,
                                "line": 34
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
                            "name": "Vector",
                            "optional": false,
                            "range": [
                              862,
                              868
                            ],
                            "loc": {
                              "end": {
                                "column": 29,
                                "line": 34
                              },
                              "start": {
                                "column": 23,
                                "line": 34
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "norm",
                            "optional": false,
                            "range": [
                              869,
                              873
                            ],
                            "loc": {
                              "end": {
                                "column": 34,
                                "line": 34
                              },
                              "start": {
                                "column": 30,
                                "line": 34
                              }
                            }
                          },
                          "range": [
                            862,
                            873
                          ],
                          "loc": {
                            "end": {
                              "column": 34,
                              "line": 34
                            },
                            "start": {
                              "column": 23,
                              "line": 34
                            }
                          }
                        },
                        "optional": false,
                        "range": [
                          862,
                          904
                        ],
                        "loc": {
                          "end": {
                            "column": 65,
                            "line": 34
                          },
                          "start": {
                            "column": 23,
                            "line": 34
                          }
                        }
                      },
                      "range": [
                        847,
                        904
                      ],
                      "loc": {
                        "end": {
                          "column": 65,
                          "line": 34
                        },
                        "start": {
                          "column": 8,
                          "line": 34
                        }
                      }
                    },
                    "range": [
                      847,
                      905
                    ],
                    "loc": {
                      "end": {
                        "column": 66,
                        "line": 34
                      },
                      "start": {
                        "column": 8,
                        "line": 34
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "range": [
                            914,
                            918
                          ],
                          "loc": {
                            "end": {
                              "column": 12,
                              "line": 35
                            },
                            "start": {
                              "column": 8,
                              "line": 35
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "right",
                          "optional": false,
                          "range": [
                            919,
                            924
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 35
                            },
                            "start": {
                              "column": 13,
                              "line": 35
                            }
                          }
                        },
                        "range": [
                          914,
                          924
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 35
                          },
                          "start": {
                            "column": 8,
                            "line": 35
                          }
                        }
                      },
                      "right": {
                        "type": "CallExpression",
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "down",
                            "optional": false,
                            "range": [
                              940,
                              944
                            ],
                            "loc": {
                              "end": {
                                "column": 38,
                                "line": 35
                              },
                              "start": {
                                "column": 34,
                                "line": 35
                              }
                            }
                          },
                          {
                            "type": "CallExpression",
                            "arguments": [
                              {
                                "type": "CallExpression",
                                "arguments": [
                                  {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "ThisExpression",
                                      "range": [
                                        971,
                                        975
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 69,
                                          "line": 35
                                        },
                                        "start": {
                                          "column": 65,
                                          "line": 35
                                        }
                                      }
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "forward",
                                      "optional": false,
                                      "range": [
                                        976,
                                        983
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 77,
                                          "line": 35
                                        },
                                        "start": {
                                          "column": 70,
                                          "line": 35
                                        }
                                      }
                                    },
                                    "range": [
                                      971,
                                      983
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 77,
                                        "line": 35
                                      },
                                      "start": {
                                        "column": 65,
                                        "line": 35
                                      }
                                    }
                                  },
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "down",
                                    "optional": false,
                                    "range": [
                                      985,
                                      989
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 83,
                                        "line": 35
                                      },
                                      "start": {
                                        "column": 79,
                                        "line": 35
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
                                    "name": "Vector",
                                    "optional": false,
                                    "range": [
                                      958,
                                      964
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 58,
                                        "line": 35
                                      },
                                      "start": {
                                        "column": 52,
                                        "line": 35
                                      }
                                    }
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "cross",
                                    "optional": false,
                                    "range": [
                                      965,
                                      970
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 64,
                                        "line": 35
                                      },
                                      "start": {
                                        "column": 59,
                                        "line": 35
                                      }
                                    }
                                  },
                                  "range": [
                                    958,
                                    970
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 64,
                                      "line": 35
                                    },
                                    "start": {
                                      "column": 52,
                                      "line": 35
                                    }
                                  }
                                },
                                "optional": false,
                                "range": [
                                  958,
                                  990
                                ],
                                "loc": {
                                  "end": {
                                    "column": 84,
                                    "line": 35
                                  },
                                  "start": {
                                    "column": 52,
                                    "line": 35
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
                                "name": "Vector",
                                "optional": false,
                                "range": [
                                  946,
                                  952
                                ],
                                "loc": {
                                  "end": {
                                    "column": 46,
                                    "line": 35
                                  },
                                  "start": {
                                    "column": 40,
                                    "line": 35
                                  }
                                }
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "norm",
                                "optional": false,
                                "range": [
                                  953,
                                  957
                                ],
                                "loc": {
                                  "end": {
                                    "column": 51,
                                    "line": 35
                                  },
                                  "start": {
                                    "column": 47,
                                    "line": 35
                                  }
                                }
                              },
                              "range": [
                                946,
                                957
                              ],
                              "loc": {
                                "end": {
                                  "column": 51,
                                  "line": 35
                                },
                                "start": {
                                  "column": 40,
                                  "line": 35
                                }
                              }
                            },
                            "optional": false,
                            "range": [
                              946,
                              991
                            ],
                            "loc": {
                              "end": {
                                "column": 85,
                                "line": 35
                              },
                              "start": {
                                "column": 40,
                                "line": 35
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
                            "name": "Vector",
                            "optional": false,
                            "range": [
                              927,
                              933
                            ],
                            "loc": {
                              "end": {
                                "column": 27,
                                "line": 35
                              },
                              "start": {
                                "column": 21,
                                "line": 35
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "times",
                            "optional": false,
                            "range": [
                              934,
                              939
                            ],
                            "loc": {
                              "end": {
                                "column": 33,
                                "line": 35
                              },
                              "start": {
                                "column": 28,
                                "line": 35
                              }
                            }
                          },
                          "range": [
                            927,
                            939
                          ],
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 35
                            },
                            "start": {
                              "column": 21,
                              "line": 35
                            }
                          }
                        },
                        "optional": false,
                        "range": [
                          927,
                          992
                        ],
                        "loc": {
                          "end": {
                            "column": 86,
                            "line": 35
                          },
                          "start": {
                            "column": 21,
                            "line": 35
                          }
                        }
                      },
                      "range": [
                        914,
                        992
                      ],
                      "loc": {
                        "end": {
                          "column": 86,
                          "line": 35
                        },
                        "start": {
                          "column": 8,
                          "line": 35
                        }
                      }
                    },
                    "range": [
                      914,
                      993
                    ],
                    "loc": {
                      "end": {
                        "column": 87,
                        "line": 35
                      },
                      "start": {
                        "column": 8,
                        "line": 35
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "range": [
                            1002,
                            1006
                          ],
                          "loc": {
                            "end": {
                              "column": 12,
                              "line": 36
                            },
                            "start": {
                              "column": 8,
                              "line": 36
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "up",
                          "optional": false,
                          "range": [
                            1007,
                            1009
                          ],
                          "loc": {
                            "end": {
                              "column": 15,
                              "line": 36
                            },
                            "start": {
                              "column": 13,
                              "line": 36
                            }
                          }
                        },
                        "range": [
                          1002,
                          1009
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 36
                          },
                          "start": {
                            "column": 8,
                            "line": 36
                          }
                        }
                      },
                      "right": {
                        "type": "CallExpression",
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "down",
                            "optional": false,
                            "range": [
                              1025,
                              1029
                            ],
                            "loc": {
                              "end": {
                                "column": 35,
                                "line": 36
                              },
                              "start": {
                                "column": 31,
                                "line": 36
                              }
                            }
                          },
                          {
                            "type": "CallExpression",
                            "arguments": [
                              {
                                "type": "CallExpression",
                                "arguments": [
                                  {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "ThisExpression",
                                      "range": [
                                        1056,
                                        1060
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 66,
                                          "line": 36
                                        },
                                        "start": {
                                          "column": 62,
                                          "line": 36
                                        }
                                      }
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "forward",
                                      "optional": false,
                                      "range": [
                                        1061,
                                        1068
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 74,
                                          "line": 36
                                        },
                                        "start": {
                                          "column": 67,
                                          "line": 36
                                        }
                                      }
                                    },
                                    "range": [
                                      1056,
                                      1068
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 74,
                                        "line": 36
                                      },
                                      "start": {
                                        "column": 62,
                                        "line": 36
                                      }
                                    }
                                  },
                                  {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "ThisExpression",
                                      "range": [
                                        1070,
                                        1074
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 80,
                                          "line": 36
                                        },
                                        "start": {
                                          "column": 76,
                                          "line": 36
                                        }
                                      }
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "right",
                                      "optional": false,
                                      "range": [
                                        1075,
                                        1080
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 86,
                                          "line": 36
                                        },
                                        "start": {
                                          "column": 81,
                                          "line": 36
                                        }
                                      }
                                    },
                                    "range": [
                                      1070,
                                      1080
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 86,
                                        "line": 36
                                      },
                                      "start": {
                                        "column": 76,
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
                                    "name": "Vector",
                                    "optional": false,
                                    "range": [
                                      1043,
                                      1049
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 55,
                                        "line": 36
                                      },
                                      "start": {
                                        "column": 49,
                                        "line": 36
                                      }
                                    }
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "cross",
                                    "optional": false,
                                    "range": [
                                      1050,
                                      1055
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 61,
                                        "line": 36
                                      },
                                      "start": {
                                        "column": 56,
                                        "line": 36
                                      }
                                    }
                                  },
                                  "range": [
                                    1043,
                                    1055
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 61,
                                      "line": 36
                                    },
                                    "start": {
                                      "column": 49,
                                      "line": 36
                                    }
                                  }
                                },
                                "optional": false,
                                "range": [
                                  1043,
                                  1081
                                ],
                                "loc": {
                                  "end": {
                                    "column": 87,
                                    "line": 36
                                  },
                                  "start": {
                                    "column": 49,
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
                                "name": "Vector",
                                "optional": false,
                                "range": [
                                  1031,
                                  1037
                                ],
                                "loc": {
                                  "end": {
                                    "column": 43,
                                    "line": 36
                                  },
                                  "start": {
                                    "column": 37,
                                    "line": 36
                                  }
                                }
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "norm",
                                "optional": false,
                                "range": [
                                  1038,
                                  1042
                                ],
                                "loc": {
                                  "end": {
                                    "column": 48,
                                    "line": 36
                                  },
                                  "start": {
                                    "column": 44,
                                    "line": 36
                                  }
                                }
                              },
                              "range": [
                                1031,
                                1042
                              ],
                              "loc": {
                                "end": {
                                  "column": 48,
                                  "line": 36
                                },
                                "start": {
                                  "column": 37,
                                  "line": 36
                                }
                              }
                            },
                            "optional": false,
                            "range": [
                              1031,
                              1082
                            ],
                            "loc": {
                              "end": {
                                "column": 88,
                                "line": 36
                              },
                              "start": {
                                "column": 37,
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
                            "name": "Vector",
                            "optional": false,
                            "range": [
                              1012,
                              1018
                            ],
                            "loc": {
                              "end": {
                                "column": 24,
                                "line": 36
                              },
                              "start": {
                                "column": 18,
                                "line": 36
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "times",
                            "optional": false,
                            "range": [
                              1019,
                              1024
                            ],
                            "loc": {
                              "end": {
                                "column": 30,
                                "line": 36
                              },
                              "start": {
                                "column": 25,
                                "line": 36
                              }
                            }
                          },
                          "range": [
                            1012,
                            1024
                          ],
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 36
                            },
                            "start": {
                              "column": 18,
                              "line": 36
                            }
                          }
                        },
                        "optional": false,
                        "range": [
                          1012,
                          1083
                        ],
                        "loc": {
                          "end": {
                            "column": 89,
                            "line": 36
                          },
                          "start": {
                            "column": 18,
                            "line": 36
                          }
                        }
                      },
                      "range": [
                        1002,
                        1083
                      ],
                      "loc": {
                        "end": {
                          "column": 89,
                          "line": 36
                        },
                        "start": {
                          "column": 8,
                          "line": 36
                        }
                      }
                    },
                    "range": [
                      1002,
                      1084
                    ],
                    "loc": {
                      "end": {
                        "column": 90,
                        "line": 36
                      },
                      "start": {
                        "column": 8,
                        "line": 36
                      }
                    }
                  }
                ],
                "range": [
                  789,
                  1094
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 37
                  },
                  "start": {
                    "column": 52,
                    "line": 32
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "pos",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 32
                        },
                        "start": {
                          "column": 26,
                          "line": 32
                        }
                      },
                      "range": [
                        763,
                        771
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Vector",
                          "optional": false,
                          "range": [
                            765,
                            771
                          ],
                          "loc": {
                            "end": {
                              "column": 34,
                              "line": 32
                            },
                            "start": {
                              "column": 28,
                              "line": 32
                            }
                          }
                        },
                        "range": [
                          765,
                          771
                        ],
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 32
                          },
                          "start": {
                            "column": 28,
                            "line": 32
                          }
                        }
                      }
                    },
                    "range": [
                      760,
                      771
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 32
                      },
                      "start": {
                        "column": 23,
                        "line": 32
                      }
                    }
                  },
                  "readonly": false,
                  "static": false,
                  "range": [
                    753,
                    771
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 32
                    },
                    "start": {
                      "column": 16,
                      "line": 32
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "lookAt",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 32
                      },
                      "start": {
                        "column": 42,
                        "line": 32
                      }
                    },
                    "range": [
                      779,
                      787
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Vector",
                        "optional": false,
                        "range": [
                          781,
                          787
                        ],
                        "loc": {
                          "end": {
                            "column": 50,
                            "line": 32
                          },
                          "start": {
                            "column": 44,
                            "line": 32
                          }
                        }
                      },
                      "range": [
                        781,
                        787
                      ],
                      "loc": {
                        "end": {
                          "column": 50,
                          "line": 32
                        },
                        "start": {
                          "column": 44,
                          "line": 32
                        }
                      }
                    }
                  },
                  "range": [
                    773,
                    787
                  ],
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 32
                    },
                    "start": {
                      "column": 36,
                      "line": 32
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 37
                },
                "start": {
                  "column": 15,
                  "line": 32
                }
              }
            },
            "range": [
              741,
              1094
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 37
              },
              "start": {
                "column": 4,
                "line": 32
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 38
          },
          "start": {
            "column": 13,
            "line": 28
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Camera",
        "optional": false,
        "range": [
          651,
          657
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 28
          },
          "start": {
            "column": 6,
            "line": 28
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        645,
        1096
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 38
        },
        "start": {
          "column": 0,
          "line": 28
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 40
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
