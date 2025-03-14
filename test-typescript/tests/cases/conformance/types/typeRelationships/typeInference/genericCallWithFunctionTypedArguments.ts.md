__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    155,
    1145
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
                    202,
                    206
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 5
                    },
                    "start": {
                      "column": 13,
                      "line": 5
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  200,
                  201
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 5
                  },
                  "start": {
                    "column": 11,
                    "line": 5
                  }
                }
              },
              "optional": false,
              "range": [
                200,
                207
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 5
                },
                "start": {
                  "column": 11,
                  "line": 5
                }
              }
            },
            "range": [
              193,
              208
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 5
              },
              "start": {
                "column": 4,
                "line": 5
              }
            }
          }
        ],
        "range": [
          187,
          210
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 6
          },
          "start": {
            "column": 32,
            "line": 4
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
          164,
          167
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
                "column": 30,
                "line": 4
              },
              "start": {
                "column": 17,
                "line": 4
              }
            },
            "range": [
              172,
              185
            ],
            "typeAnnotation": {
              "type": "TSFunctionType",
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 4
                      },
                      "start": {
                        "column": 21,
                        "line": 4
                      }
                    },
                    "range": [
                      176,
                      179
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          178,
                          179
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 4
                          },
                          "start": {
                            "column": 23,
                            "line": 4
                          }
                        }
                      },
                      "range": [
                        178,
                        179
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 4
                        },
                        "start": {
                          "column": 23,
                          "line": 4
                        }
                      }
                    }
                  },
                  "range": [
                    175,
                    179
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 4
                    },
                    "start": {
                      "column": 20,
                      "line": 4
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 4
                  },
                  "start": {
                    "column": 26,
                    "line": 4
                  }
                },
                "range": [
                  181,
                  185
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "range": [
                      184,
                      185
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 4
                      },
                      "start": {
                        "column": 29,
                        "line": 4
                      }
                    }
                  },
                  "range": [
                    184,
                    185
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 4
                    },
                    "start": {
                      "column": 29,
                      "line": 4
                    }
                  }
                }
              },
              "range": [
                174,
                185
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 4
                },
                "start": {
                  "column": 19,
                  "line": 4
                }
              }
            }
          },
          "range": [
            171,
            185
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 4
            },
            "start": {
              "column": 16,
              "line": 4
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 15,
            "line": 4
          },
          "start": {
            "column": 12,
            "line": 4
          }
        },
        "range": [
          167,
          170
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
                168,
                169
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 4
                },
                "start": {
                  "column": 13,
                  "line": 4
                }
              }
            },
            "out": false,
            "range": [
              168,
              169
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 4
              },
              "start": {
                "column": 13,
                "line": 4
              }
            }
          }
        ]
      },
      "range": [
        155,
        210
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 6
        },
        "start": {
          "column": 0,
          "line": 4
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
              216,
              217
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
                "type": "ArrowFunctionExpression",
                "async": false,
                "body": {
                  "type": "Literal",
                  "raw": "''",
                  "value": "",
                  "range": [
                    237,
                    239
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 8
                    },
                    "start": {
                      "column": 25,
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 8
                        },
                        "start": {
                          "column": 17,
                          "line": 8
                        }
                      },
                      "range": [
                        229,
                        232
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "range": [
                            231,
                            232
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 8
                            },
                            "start": {
                              "column": 19,
                              "line": 8
                            }
                          }
                        },
                        "range": [
                          231,
                          232
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 8
                          },
                          "start": {
                            "column": 19,
                            "line": 8
                          }
                        }
                      }
                    },
                    "range": [
                      228,
                      232
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 8
                      },
                      "start": {
                        "column": 16,
                        "line": 8
                      }
                    }
                  }
                ],
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 8
                    },
                    "start": {
                      "column": 12,
                      "line": 8
                    }
                  },
                  "range": [
                    224,
                    227
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
                          225,
                          226
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 8
                          },
                          "start": {
                            "column": 13,
                            "line": 8
                          }
                        }
                      },
                      "out": false,
                      "range": [
                        225,
                        226
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 8
                        },
                        "start": {
                          "column": 13,
                          "line": 8
                        }
                      }
                    }
                  ]
                },
                "range": [
                  224,
                  239
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
            "callee": {
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
              220,
              240
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
          },
          "range": [
            216,
            240
          ],
          "loc": {
            "end": {
              "column": 28,
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
        212,
        241
      ],
      "loc": {
        "end": {
          "column": 29,
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
              252,
              254
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 9
              },
              "start": {
                "column": 4,
                "line": 9
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "async": false,
                "body": {
                  "type": "Literal",
                  "raw": "''",
                  "value": "",
                  "range": [
                    282,
                    284
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 9
                    },
                    "start": {
                      "column": 34,
                      "line": 9
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
                          "line": 9
                        },
                        "start": {
                          "column": 26,
                          "line": 9
                        }
                      },
                      "range": [
                        274,
                        277
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "range": [
                            276,
                            277
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 9
                            },
                            "start": {
                              "column": 28,
                              "line": 9
                            }
                          }
                        },
                        "range": [
                          276,
                          277
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 9
                          },
                          "start": {
                            "column": 28,
                            "line": 9
                          }
                        }
                      }
                    },
                    "range": [
                      273,
                      277
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 9
                      },
                      "start": {
                        "column": 25,
                        "line": 9
                      }
                    }
                  }
                ],
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 9
                    },
                    "start": {
                      "column": 21,
                      "line": 9
                    }
                  },
                  "range": [
                    269,
                    272
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
                          270,
                          271
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 9
                          },
                          "start": {
                            "column": 22,
                            "line": 9
                          }
                        }
                      },
                      "out": false,
                      "range": [
                        270,
                        271
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 9
                        },
                        "start": {
                          "column": 22,
                          "line": 9
                        }
                      }
                    }
                  ]
                },
                "range": [
                  269,
                  284
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 9
                  },
                  "start": {
                    "column": 21,
                    "line": 9
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
                257,
                260
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 9
                },
                "start": {
                  "column": 9,
                  "line": 9
                }
              }
            },
            "optional": false,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                260,
                268
              ],
              "params": [
                {
                  "type": "TSStringKeyword",
                  "range": [
                    261,
                    267
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 9
                    },
                    "start": {
                      "column": 13,
                      "line": 9
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 9
                },
                "start": {
                  "column": 12,
                  "line": 9
                }
              }
            },
            "range": [
              257,
              285
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 9
              },
              "start": {
                "column": 9,
                "line": 9
              }
            }
          },
          "range": [
            252,
            285
          ],
          "loc": {
            "end": {
              "column": 37,
              "line": 9
            },
            "start": {
              "column": 4,
              "line": 9
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        248,
        286
      ],
      "loc": {
        "end": {
          "column": 38,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 9
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
              302,
              304
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
                "type": "ArrowFunctionExpression",
                "async": false,
                "body": {
                  "type": "Literal",
                  "raw": "''",
                  "value": "",
                  "range": [
                    316,
                    318
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 10
                    },
                    "start": {
                      "column": 18,
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
                    "range": [
                      311,
                      312
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 10
                      },
                      "start": {
                        "column": 13,
                        "line": 10
                      }
                    }
                  }
                ],
                "range": [
                  311,
                  318
                ],
                "loc": {
                  "end": {
                    "column": 20,
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
                307,
                310
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
              307,
              319
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 10
              },
              "start": {
                "column": 9,
                "line": 10
              }
            }
          },
          "range": [
            302,
            319
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
        298,
        320
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    387,
                    388
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
                }
              ],
              "callee": {
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
                    "column": 13,
                    "line": 13
                  },
                  "start": {
                    "column": 11,
                    "line": 13
                  }
                }
              },
              "optional": false,
              "range": [
                384,
                389
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 13
                },
                "start": {
                  "column": 11,
                  "line": 13
                }
              }
            },
            "range": [
              377,
              390
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 13
              },
              "start": {
                "column": 4,
                "line": 13
              }
            }
          }
        ],
        "range": [
          371,
          392
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 14
          },
          "start": {
            "column": 43,
            "line": 12
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
          337,
          341
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 12
          },
          "start": {
            "column": 9,
            "line": 12
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
                "column": 24,
                "line": 12
              },
              "start": {
                "column": 21,
                "line": 12
              }
            },
            "range": [
              349,
              352
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  351,
                  352
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 12
                  },
                  "start": {
                    "column": 23,
                    "line": 12
                  }
                }
              },
              "range": [
                351,
                352
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 12
                },
                "start": {
                  "column": 23,
                  "line": 12
                }
              }
            }
          },
          "range": [
            348,
            352
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 12
            },
            "start": {
              "column": 20,
              "line": 12
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cb",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 41,
                "line": 12
              },
              "start": {
                "column": 28,
                "line": 12
              }
            },
            "range": [
              356,
              369
            ],
            "typeAnnotation": {
              "type": "TSFunctionType",
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 12
                      },
                      "start": {
                        "column": 32,
                        "line": 12
                      }
                    },
                    "range": [
                      360,
                      363
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          362,
                          363
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
                        362,
                        363
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
                    }
                  },
                  "range": [
                    359,
                    363
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 12
                    },
                    "start": {
                      "column": 31,
                      "line": 12
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 12
                  },
                  "start": {
                    "column": 37,
                    "line": 12
                  }
                },
                "range": [
                  365,
                  369
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "range": [
                      368,
                      369
                    ],
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 12
                      },
                      "start": {
                        "column": 40,
                        "line": 12
                      }
                    }
                  },
                  "range": [
                    368,
                    369
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 12
                    },
                    "start": {
                      "column": 40,
                      "line": 12
                    }
                  }
                }
              },
              "range": [
                358,
                369
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 12
                },
                "start": {
                  "column": 30,
                  "line": 12
                }
              }
            }
          },
          "range": [
            354,
            369
          ],
          "loc": {
            "end": {
              "column": 41,
              "line": 12
            },
            "start": {
              "column": 26,
              "line": 12
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 19,
            "line": 12
          },
          "start": {
            "column": 13,
            "line": 12
          }
        },
        "range": [
          341,
          347
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
                342,
                343
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 12
                },
                "start": {
                  "column": 14,
                  "line": 12
                }
              }
            },
            "out": false,
            "range": [
              342,
              343
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 12
              },
              "start": {
                "column": 14,
                "line": 12
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
                345,
                346
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 12
                },
                "start": {
                  "column": 17,
                  "line": 12
                }
              }
            },
            "out": false,
            "range": [
              345,
              346
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 12
              },
              "start": {
                "column": 17,
                "line": 12
              }
            }
          }
        ]
      },
      "range": [
        328,
        392
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 14
        },
        "start": {
          "column": 0,
          "line": 12
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
              398,
              400
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 16
              },
              "start": {
                "column": 4,
                "line": 16
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  408,
                  409
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 16
                  },
                  "start": {
                    "column": 14,
                    "line": 16
                  }
                }
              },
              {
                "type": "FunctionExpression",
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Literal",
                        "raw": "''",
                        "value": "",
                        "range": [
                          439,
                          441
                        ],
                        "loc": {
                          "end": {
                            "column": 47,
                            "line": 16
                          },
                          "start": {
                            "column": 45,
                            "line": 16
                          }
                        }
                      },
                      "range": [
                        432,
                        441
                      ],
                      "loc": {
                        "end": {
                          "column": 47,
                          "line": 16
                        },
                        "start": {
                          "column": 38,
                          "line": 16
                        }
                      }
                    }
                  ],
                  "range": [
                    430,
                    443
                  ],
                  "loc": {
                    "end": {
                      "column": 49,
                      "line": 16
                    },
                    "start": {
                      "column": 36,
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
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 16
                        },
                        "start": {
                          "column": 31,
                          "line": 16
                        }
                      },
                      "range": [
                        425,
                        428
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Z",
                          "optional": false,
                          "range": [
                            427,
                            428
                          ],
                          "loc": {
                            "end": {
                              "column": 34,
                              "line": 16
                            },
                            "start": {
                              "column": 33,
                              "line": 16
                            }
                          }
                        },
                        "range": [
                          427,
                          428
                        ],
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 16
                          },
                          "start": {
                            "column": 33,
                            "line": 16
                          }
                        }
                      }
                    },
                    "range": [
                      424,
                      428
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
                  }
                ],
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 16
                    },
                    "start": {
                      "column": 26,
                      "line": 16
                    }
                  },
                  "range": [
                    420,
                    423
                  ],
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "const": false,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Z",
                        "optional": false,
                        "range": [
                          421,
                          422
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 16
                          },
                          "start": {
                            "column": 27,
                            "line": 16
                          }
                        }
                      },
                      "out": false,
                      "range": [
                        421,
                        422
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 16
                        },
                        "start": {
                          "column": 27,
                          "line": 16
                        }
                      }
                    }
                  ]
                },
                "range": [
                  411,
                  443
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 16
                  },
                  "start": {
                    "column": 17,
                    "line": 16
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "range": [
                403,
                407
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 16
                },
                "start": {
                  "column": 9,
                  "line": 16
                }
              }
            },
            "optional": false,
            "range": [
              403,
              444
            ],
            "loc": {
              "end": {
                "column": 50,
                "line": 16
              },
              "start": {
                "column": 9,
                "line": 16
              }
            }
          },
          "range": [
            398,
            444
          ],
          "loc": {
            "end": {
              "column": 50,
              "line": 16
            },
            "start": {
              "column": 4,
              "line": 16
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        394,
        445
      ],
      "loc": {
        "end": {
          "column": 51,
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
            "name": "r5",
            "optional": false,
            "range": [
              528,
              530
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 17
              },
              "start": {
                "column": 4,
                "line": 17
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  538,
                  539
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 17
                  },
                  "start": {
                    "column": 14,
                    "line": 17
                  }
                }
              },
              {
                "type": "ArrowFunctionExpression",
                "async": false,
                "body": {
                  "type": "Literal",
                  "raw": "''",
                  "value": "",
                  "range": [
                    548,
                    550
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 17
                    },
                    "start": {
                      "column": 24,
                      "line": 17
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
                    "name": "a",
                    "optional": false,
                    "range": [
                      542,
                      543
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 17
                      },
                      "start": {
                        "column": 18,
                        "line": 17
                      }
                    }
                  }
                ],
                "range": [
                  541,
                  550
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
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "range": [
                533,
                537
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 17
                },
                "start": {
                  "column": 9,
                  "line": 17
                }
              }
            },
            "optional": false,
            "range": [
              533,
              551
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 17
              },
              "start": {
                "column": 9,
                "line": 17
              }
            }
          },
          "range": [
            528,
            551
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 17
            },
            "start": {
              "column": 4,
              "line": 17
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        524,
        552
      ],
      "loc": {
        "end": {
          "column": 28,
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
            "name": "r6",
            "optional": false,
            "range": [
              567,
              569
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
                "type": "Literal",
                "raw": "''",
                "value": "",
                "range": [
                  593,
                  595
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 18
                  },
                  "start": {
                    "column": 30,
                    "line": 18
                  }
                }
              },
              {
                "type": "ArrowFunctionExpression",
                "async": false,
                "body": {
                  "type": "Literal",
                  "raw": "1",
                  "value": 1,
                  "range": [
                    610,
                    611
                  ],
                  "loc": {
                    "end": {
                      "column": 48,
                      "line": 18
                    },
                    "start": {
                      "column": 47,
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
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 42,
                          "line": 18
                        },
                        "start": {
                          "column": 39,
                          "line": 18
                        }
                      },
                      "range": [
                        602,
                        605
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Z",
                          "optional": false,
                          "range": [
                            604,
                            605
                          ],
                          "loc": {
                            "end": {
                              "column": 42,
                              "line": 18
                            },
                            "start": {
                              "column": 41,
                              "line": 18
                            }
                          }
                        },
                        "range": [
                          604,
                          605
                        ],
                        "loc": {
                          "end": {
                            "column": 42,
                            "line": 18
                          },
                          "start": {
                            "column": 41,
                            "line": 18
                          }
                        }
                      }
                    },
                    "range": [
                      601,
                      605
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 18
                      },
                      "start": {
                        "column": 38,
                        "line": 18
                      }
                    }
                  }
                ],
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 18
                    },
                    "start": {
                      "column": 34,
                      "line": 18
                    }
                  },
                  "range": [
                    597,
                    600
                  ],
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "const": false,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Z",
                        "optional": false,
                        "range": [
                          598,
                          599
                        ],
                        "loc": {
                          "end": {
                            "column": 36,
                            "line": 18
                          },
                          "start": {
                            "column": 35,
                            "line": 18
                          }
                        }
                      },
                      "out": false,
                      "range": [
                        598,
                        599
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 18
                        },
                        "start": {
                          "column": 35,
                          "line": 18
                        }
                      }
                    }
                  ]
                },
                "range": [
                  597,
                  611
                ],
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 18
                  },
                  "start": {
                    "column": 34,
                    "line": 18
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "range": [
                572,
                576
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 18
                },
                "start": {
                  "column": 9,
                  "line": 18
                }
              }
            },
            "optional": false,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                576,
                592
              ],
              "params": [
                {
                  "type": "TSStringKeyword",
                  "range": [
                    577,
                    583
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 18
                    },
                    "start": {
                      "column": 14,
                      "line": 18
                    }
                  }
                },
                {
                  "type": "TSNumberKeyword",
                  "range": [
                    585,
                    591
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 18
                    },
                    "start": {
                      "column": 22,
                      "line": 18
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 18
                },
                "start": {
                  "column": 13,
                  "line": 18
                }
              }
            },
            "range": [
              572,
              612
            ],
            "loc": {
              "end": {
                "column": 49,
                "line": 18
              },
              "start": {
                "column": 9,
                "line": 18
              }
            }
          },
          "range": [
            567,
            612
          ],
          "loc": {
            "end": {
              "column": 49,
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
        563,
        613
      ],
      "loc": {
        "end": {
          "column": 50,
          "line": 18
        },
        "start": {
          "column": 0,
          "line": 18
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    680,
                    681
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 21
                    },
                    "start": {
                      "column": 14,
                      "line": 21
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "cb",
                "optional": false,
                "range": [
                  677,
                  679
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 21
                  },
                  "start": {
                    "column": 11,
                    "line": 21
                  }
                }
              },
              "optional": false,
              "range": [
                677,
                682
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 21
                },
                "start": {
                  "column": 11,
                  "line": 21
                }
              }
            },
            "range": [
              670,
              683
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 21
              },
              "start": {
                "column": 4,
                "line": 21
              }
            }
          }
        ],
        "range": [
          664,
          685
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 22
          },
          "start": {
            "column": 49,
            "line": 20
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "range": [
          624,
          628
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 20
          },
          "start": {
            "column": 9,
            "line": 20
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
                "column": 24,
                "line": 20
              },
              "start": {
                "column": 21,
                "line": 20
              }
            },
            "range": [
              636,
              639
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  638,
                  639
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 20
                  },
                  "start": {
                    "column": 23,
                    "line": 20
                  }
                }
              },
              "range": [
                638,
                639
              ],
              "loc": {
                "end": {
                  "column": 24,
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
            635,
            639
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 20
            },
            "start": {
              "column": 20,
              "line": 20
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cb",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 41,
                "line": 20
              },
              "start": {
                "column": 28,
                "line": 20
              }
            },
            "range": [
              643,
              656
            ],
            "typeAnnotation": {
              "type": "TSFunctionType",
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 20
                      },
                      "start": {
                        "column": 32,
                        "line": 20
                      }
                    },
                    "range": [
                      647,
                      650
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          649,
                          650
                        ],
                        "loc": {
                          "end": {
                            "column": 35,
                            "line": 20
                          },
                          "start": {
                            "column": 34,
                            "line": 20
                          }
                        }
                      },
                      "range": [
                        649,
                        650
                      ],
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 20
                        },
                        "start": {
                          "column": 34,
                          "line": 20
                        }
                      }
                    }
                  },
                  "range": [
                    646,
                    650
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 20
                    },
                    "start": {
                      "column": 31,
                      "line": 20
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 20
                  },
                  "start": {
                    "column": 37,
                    "line": 20
                  }
                },
                "range": [
                  652,
                  656
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "range": [
                      655,
                      656
                    ],
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 20
                      },
                      "start": {
                        "column": 40,
                        "line": 20
                      }
                    }
                  },
                  "range": [
                    655,
                    656
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 20
                    },
                    "start": {
                      "column": 40,
                      "line": 20
                    }
                  }
                }
              },
              "range": [
                645,
                656
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 20
                },
                "start": {
                  "column": 30,
                  "line": 20
                }
              }
            }
          },
          "range": [
            641,
            656
          ],
          "loc": {
            "end": {
              "column": 41,
              "line": 20
            },
            "start": {
              "column": 26,
              "line": 20
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
                "column": 47,
                "line": 20
              },
              "start": {
                "column": 44,
                "line": 20
              }
            },
            "range": [
              659,
              662
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "range": [
                  661,
                  662
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 20
                  },
                  "start": {
                    "column": 46,
                    "line": 20
                  }
                }
              },
              "range": [
                661,
                662
              ],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 20
                },
                "start": {
                  "column": 46,
                  "line": 20
                }
              }
            }
          },
          "range": [
            658,
            662
          ],
          "loc": {
            "end": {
              "column": 47,
              "line": 20
            },
            "start": {
              "column": 43,
              "line": 20
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 19,
            "line": 20
          },
          "start": {
            "column": 13,
            "line": 20
          }
        },
        "range": [
          628,
          634
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
                629,
                630
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 20
                },
                "start": {
                  "column": 14,
                  "line": 20
                }
              }
            },
            "out": false,
            "range": [
              629,
              630
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 20
              },
              "start": {
                "column": 14,
                "line": 20
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
                632,
                633
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 20
                },
                "start": {
                  "column": 17,
                  "line": 20
                }
              }
            },
            "out": false,
            "range": [
              632,
              633
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 20
              },
              "start": {
                "column": 17,
                "line": 20
              }
            }
          }
        ]
      },
      "range": [
        615,
        685
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 22
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
              691,
              693
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 24
              },
              "start": {
                "column": 4,
                "line": 24
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  701,
                  702
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 24
                  },
                  "start": {
                    "column": 14,
                    "line": 24
                  }
                }
              },
              {
                "type": "ArrowFunctionExpression",
                "async": false,
                "body": {
                  "type": "Literal",
                  "raw": "''",
                  "value": "",
                  "range": [
                    717,
                    719
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 24
                    },
                    "start": {
                      "column": 30,
                      "line": 24
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
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 24
                        },
                        "start": {
                          "column": 22,
                          "line": 24
                        }
                      },
                      "range": [
                        709,
                        712
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Z",
                          "optional": false,
                          "range": [
                            711,
                            712
                          ],
                          "loc": {
                            "end": {
                              "column": 25,
                              "line": 24
                            },
                            "start": {
                              "column": 24,
                              "line": 24
                            }
                          }
                        },
                        "range": [
                          711,
                          712
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 24
                          },
                          "start": {
                            "column": 24,
                            "line": 24
                          }
                        }
                      }
                    },
                    "range": [
                      708,
                      712
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 24
                      },
                      "start": {
                        "column": 21,
                        "line": 24
                      }
                    }
                  }
                ],
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 24
                    },
                    "start": {
                      "column": 17,
                      "line": 24
                    }
                  },
                  "range": [
                    704,
                    707
                  ],
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "const": false,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Z",
                        "optional": false,
                        "range": [
                          705,
                          706
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 24
                          },
                          "start": {
                            "column": 18,
                            "line": 24
                          }
                        }
                      },
                      "out": false,
                      "range": [
                        705,
                        706
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 24
                        },
                        "start": {
                          "column": 18,
                          "line": 24
                        }
                      }
                    }
                  ]
                },
                "range": [
                  704,
                  719
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 24
                  },
                  "start": {
                    "column": 17,
                    "line": 24
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "''",
                "value": "",
                "range": [
                  721,
                  723
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 24
                  },
                  "start": {
                    "column": 34,
                    "line": 24
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo3",
              "optional": false,
              "range": [
                696,
                700
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 24
                },
                "start": {
                  "column": 9,
                  "line": 24
                }
              }
            },
            "optional": false,
            "range": [
              696,
              724
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 24
              },
              "start": {
                "column": 9,
                "line": 24
              }
            }
          },
          "range": [
            691,
            724
          ],
          "loc": {
            "end": {
              "column": 37,
              "line": 24
            },
            "start": {
              "column": 4,
              "line": 24
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        687,
        725
      ],
      "loc": {
        "end": {
          "column": 38,
          "line": 24
        },
        "start": {
          "column": 0,
          "line": 24
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
            "name": "r8",
            "optional": false,
            "range": [
              741,
              743
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 26
              },
              "start": {
                "column": 4,
                "line": 26
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  751,
                  752
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 26
                  },
                  "start": {
                    "column": 14,
                    "line": 26
                  }
                }
              },
              {
                "type": "FunctionExpression",
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Literal",
                        "raw": "''",
                        "value": "",
                        "range": [
                          776,
                          778
                        ],
                        "loc": {
                          "end": {
                            "column": 41,
                            "line": 26
                          },
                          "start": {
                            "column": 39,
                            "line": 26
                          }
                        }
                      },
                      "range": [
                        769,
                        778
                      ],
                      "loc": {
                        "end": {
                          "column": 41,
                          "line": 26
                        },
                        "start": {
                          "column": 32,
                          "line": 26
                        }
                      }
                    }
                  ],
                  "range": [
                    767,
                    780
                  ],
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 26
                    },
                    "start": {
                      "column": 30,
                      "line": 26
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
                    "name": "a",
                    "optional": false,
                    "range": [
                      764,
                      765
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 26
                      },
                      "start": {
                        "column": 27,
                        "line": 26
                      }
                    }
                  }
                ],
                "range": [
                  754,
                  780
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 26
                  },
                  "start": {
                    "column": 17,
                    "line": 26
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  782,
                  783
                ],
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 26
                  },
                  "start": {
                    "column": 45,
                    "line": 26
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo3",
              "optional": false,
              "range": [
                746,
                750
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 26
                },
                "start": {
                  "column": 9,
                  "line": 26
                }
              }
            },
            "optional": false,
            "range": [
              746,
              784
            ],
            "loc": {
              "end": {
                "column": 47,
                "line": 26
              },
              "start": {
                "column": 9,
                "line": 26
              }
            }
          },
          "range": [
            741,
            784
          ],
          "loc": {
            "end": {
              "column": 47,
              "line": 26
            },
            "start": {
              "column": 4,
              "line": 26
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        737,
        785
      ],
      "loc": {
        "end": {
          "column": 48,
          "line": 26
        },
        "start": {
          "column": 0,
          "line": 26
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
            "name": "r9",
            "optional": false,
            "range": [
              799,
              801
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 27
              },
              "start": {
                "column": 4,
                "line": 27
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  825,
                  826
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 27
                  },
                  "start": {
                    "column": 30,
                    "line": 27
                  }
                }
              },
              {
                "type": "ArrowFunctionExpression",
                "async": false,
                "body": {
                  "type": "Literal",
                  "raw": "''",
                  "value": "",
                  "range": [
                    835,
                    837
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 27
                    },
                    "start": {
                      "column": 40,
                      "line": 27
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
                    "name": "a",
                    "optional": false,
                    "range": [
                      829,
                      830
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 27
                      },
                      "start": {
                        "column": 34,
                        "line": 27
                      }
                    }
                  }
                ],
                "range": [
                  828,
                  837
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 27
                  },
                  "start": {
                    "column": 33,
                    "line": 27
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "''",
                "value": "",
                "range": [
                  839,
                  841
                ],
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 27
                  },
                  "start": {
                    "column": 44,
                    "line": 27
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo3",
              "optional": false,
              "range": [
                804,
                808
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 27
                },
                "start": {
                  "column": 9,
                  "line": 27
                }
              }
            },
            "optional": false,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                808,
                824
              ],
              "params": [
                {
                  "type": "TSNumberKeyword",
                  "range": [
                    809,
                    815
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 27
                    },
                    "start": {
                      "column": 14,
                      "line": 27
                    }
                  }
                },
                {
                  "type": "TSStringKeyword",
                  "range": [
                    817,
                    823
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 27
                    },
                    "start": {
                      "column": 22,
                      "line": 27
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 27
                },
                "start": {
                  "column": 13,
                  "line": 27
                }
              }
            },
            "range": [
              804,
              842
            ],
            "loc": {
              "end": {
                "column": 47,
                "line": 27
              },
              "start": {
                "column": 9,
                "line": 27
              }
            }
          },
          "range": [
            799,
            842
          ],
          "loc": {
            "end": {
              "column": 47,
              "line": 27
            },
            "start": {
              "column": 4,
              "line": 27
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        795,
        843
      ],
      "loc": {
        "end": {
          "column": 48,
          "line": 27
        },
        "start": {
          "column": 0,
          "line": 27
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
                  "name": "r10",
                  "optional": false,
                  "range": [
                    898,
                    901
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 30
                    },
                    "start": {
                      "column": 8,
                      "line": 30
                    }
                  }
                },
                "init": {
                  "type": "CallExpression",
                  "arguments": [
                    {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        909,
                        910
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 30
                        },
                        "start": {
                          "column": 19,
                          "line": 30
                        }
                      }
                    },
                    {
                      "type": "ArrowFunctionExpression",
                      "async": false,
                      "body": {
                        "type": "Literal",
                        "raw": "''",
                        "value": "",
                        "range": [
                          922,
                          924
                        ],
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 30
                          },
                          "start": {
                            "column": 32,
                            "line": 30
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
                                "line": 30
                              },
                              "start": {
                                "column": 24,
                                "line": 30
                              }
                            },
                            "range": [
                              914,
                              917
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "range": [
                                  916,
                                  917
                                ],
                                "loc": {
                                  "end": {
                                    "column": 27,
                                    "line": 30
                                  },
                                  "start": {
                                    "column": 26,
                                    "line": 30
                                  }
                                }
                              },
                              "range": [
                                916,
                                917
                              ],
                              "loc": {
                                "end": {
                                  "column": 27,
                                  "line": 30
                                },
                                "start": {
                                  "column": 26,
                                  "line": 30
                                }
                              }
                            }
                          },
                          "range": [
                            913,
                            917
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 30
                            },
                            "start": {
                              "column": 23,
                              "line": 30
                            }
                          }
                        }
                      ],
                      "range": [
                        912,
                        924
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 30
                        },
                        "start": {
                          "column": 22,
                          "line": 30
                        }
                      }
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo2",
                    "optional": false,
                    "range": [
                      904,
                      908
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 30
                      },
                      "start": {
                        "column": 14,
                        "line": 30
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    904,
                    925
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 30
                    },
                    "start": {
                      "column": 14,
                      "line": 30
                    }
                  }
                },
                "range": [
                  898,
                  925
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 30
                  },
                  "start": {
                    "column": 8,
                    "line": 30
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              894,
              926
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 30
              },
              "start": {
                "column": 4,
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
                  "name": "r10",
                  "optional": false,
                  "range": [
                    944,
                    947
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 31
                    },
                    "start": {
                      "column": 8,
                      "line": 31
                    }
                  }
                },
                "init": {
                  "type": "CallExpression",
                  "arguments": [
                    {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        955,
                        956
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 31
                        },
                        "start": {
                          "column": 19,
                          "line": 31
                        }
                      }
                    },
                    {
                      "type": "ArrowFunctionExpression",
                      "async": false,
                      "body": {
                        "type": "Literal",
                        "raw": "''",
                        "value": "",
                        "range": [
                          965,
                          967
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 31
                          },
                          "start": {
                            "column": 29,
                            "line": 31
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
                          "range": [
                            959,
                            960
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 31
                            },
                            "start": {
                              "column": 23,
                              "line": 31
                            }
                          }
                        }
                      ],
                      "range": [
                        958,
                        967
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 31
                        },
                        "start": {
                          "column": 22,
                          "line": 31
                        }
                      }
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo2",
                    "optional": false,
                    "range": [
                      950,
                      954
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 31
                      },
                      "start": {
                        "column": 14,
                        "line": 31
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    950,
                    968
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 31
                    },
                    "start": {
                      "column": 14,
                      "line": 31
                    }
                  }
                },
                "range": [
                  944,
                  968
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 31
                  },
                  "start": {
                    "column": 8,
                    "line": 31
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              940,
              969
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 31
              },
              "start": {
                "column": 4,
                "line": 31
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
                  "name": "r11",
                  "optional": false,
                  "range": [
                    989,
                    992
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 33
                    },
                    "start": {
                      "column": 8,
                      "line": 33
                    }
                  }
                },
                "init": {
                  "type": "CallExpression",
                  "arguments": [
                    {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        1000,
                        1001
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 33
                        },
                        "start": {
                          "column": 19,
                          "line": 33
                        }
                      }
                    },
                    {
                      "type": "ArrowFunctionExpression",
                      "async": false,
                      "body": {
                        "type": "Literal",
                        "raw": "''",
                        "value": "",
                        "range": [
                          1013,
                          1015
                        ],
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 33
                          },
                          "start": {
                            "column": 32,
                            "line": 33
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
                                "line": 33
                              },
                              "start": {
                                "column": 24,
                                "line": 33
                              }
                            },
                            "range": [
                              1005,
                              1008
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "range": [
                                  1007,
                                  1008
                                ],
                                "loc": {
                                  "end": {
                                    "column": 27,
                                    "line": 33
                                  },
                                  "start": {
                                    "column": 26,
                                    "line": 33
                                  }
                                }
                              },
                              "range": [
                                1007,
                                1008
                              ],
                              "loc": {
                                "end": {
                                  "column": 27,
                                  "line": 33
                                },
                                "start": {
                                  "column": 26,
                                  "line": 33
                                }
                              }
                            }
                          },
                          "range": [
                            1004,
                            1008
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 33
                            },
                            "start": {
                              "column": 23,
                              "line": 33
                            }
                          }
                        }
                      ],
                      "range": [
                        1003,
                        1015
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 33
                        },
                        "start": {
                          "column": 22,
                          "line": 33
                        }
                      }
                    },
                    {
                      "type": "Literal",
                      "raw": "''",
                      "value": "",
                      "range": [
                        1017,
                        1019
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 33
                        },
                        "start": {
                          "column": 36,
                          "line": 33
                        }
                      }
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo3",
                    "optional": false,
                    "range": [
                      995,
                      999
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 33
                      },
                      "start": {
                        "column": 14,
                        "line": 33
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    995,
                    1020
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 33
                    },
                    "start": {
                      "column": 14,
                      "line": 33
                    }
                  }
                },
                "range": [
                  989,
                  1020
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 33
                  },
                  "start": {
                    "column": 8,
                    "line": 33
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              985,
              1021
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 33
              },
              "start": {
                "column": 4,
                "line": 33
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
                  "name": "r11b",
                  "optional": false,
                  "range": [
                    1039,
                    1043
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
                "init": {
                  "type": "CallExpression",
                  "arguments": [
                    {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        1051,
                        1052
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 34
                        },
                        "start": {
                          "column": 20,
                          "line": 34
                        }
                      }
                    },
                    {
                      "type": "ArrowFunctionExpression",
                      "async": false,
                      "body": {
                        "type": "Literal",
                        "raw": "''",
                        "value": "",
                        "range": [
                          1064,
                          1066
                        ],
                        "loc": {
                          "end": {
                            "column": 35,
                            "line": 34
                          },
                          "start": {
                            "column": 33,
                            "line": 34
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
                                "column": 28,
                                "line": 34
                              },
                              "start": {
                                "column": 25,
                                "line": 34
                              }
                            },
                            "range": [
                              1056,
                              1059
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "range": [
                                  1058,
                                  1059
                                ],
                                "loc": {
                                  "end": {
                                    "column": 28,
                                    "line": 34
                                  },
                                  "start": {
                                    "column": 27,
                                    "line": 34
                                  }
                                }
                              },
                              "range": [
                                1058,
                                1059
                              ],
                              "loc": {
                                "end": {
                                  "column": 28,
                                  "line": 34
                                },
                                "start": {
                                  "column": 27,
                                  "line": 34
                                }
                              }
                            }
                          },
                          "range": [
                            1055,
                            1059
                          ],
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 34
                            },
                            "start": {
                              "column": 24,
                              "line": 34
                            }
                          }
                        }
                      ],
                      "range": [
                        1054,
                        1066
                      ],
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 34
                        },
                        "start": {
                          "column": 23,
                          "line": 34
                        }
                      }
                    },
                    {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        1068,
                        1069
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 34
                        },
                        "start": {
                          "column": 37,
                          "line": 34
                        }
                      }
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo3",
                    "optional": false,
                    "range": [
                      1046,
                      1050
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 34
                      },
                      "start": {
                        "column": 15,
                        "line": 34
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    1046,
                    1070
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 34
                    },
                    "start": {
                      "column": 15,
                      "line": 34
                    }
                  }
                },
                "range": [
                  1039,
                  1070
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 34
                  },
                  "start": {
                    "column": 8,
                    "line": 34
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              1035,
              1071
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 34
              },
              "start": {
                "column": 4,
                "line": 34
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
                  "name": "r12",
                  "optional": false,
                  "range": [
                    1089,
                    1092
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 35
                    },
                    "start": {
                      "column": 8,
                      "line": 35
                    }
                  }
                },
                "init": {
                  "type": "CallExpression",
                  "arguments": [
                    {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        1100,
                        1101
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 35
                        },
                        "start": {
                          "column": 19,
                          "line": 35
                        }
                      }
                    },
                    {
                      "type": "FunctionExpression",
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Literal",
                              "raw": "''",
                              "value": "",
                              "range": [
                                1125,
                                1127
                              ],
                              "loc": {
                                "end": {
                                  "column": 46,
                                  "line": 35
                                },
                                "start": {
                                  "column": 44,
                                  "line": 35
                                }
                              }
                            },
                            "range": [
                              1118,
                              1127
                            ],
                            "loc": {
                              "end": {
                                "column": 46,
                                "line": 35
                              },
                              "start": {
                                "column": 37,
                                "line": 35
                              }
                            }
                          }
                        ],
                        "range": [
                          1116,
                          1129
                        ],
                        "loc": {
                          "end": {
                            "column": 48,
                            "line": 35
                          },
                          "start": {
                            "column": 35,
                            "line": 35
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
                          "name": "a",
                          "optional": false,
                          "range": [
                            1113,
                            1114
                          ],
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 35
                            },
                            "start": {
                              "column": 32,
                              "line": 35
                            }
                          }
                        }
                      ],
                      "range": [
                        1103,
                        1129
                      ],
                      "loc": {
                        "end": {
                          "column": 48,
                          "line": 35
                        },
                        "start": {
                          "column": 22,
                          "line": 35
                        }
                      }
                    },
                    {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        1131,
                        1132
                      ],
                      "loc": {
                        "end": {
                          "column": 51,
                          "line": 35
                        },
                        "start": {
                          "column": 50,
                          "line": 35
                        }
                      }
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo3",
                    "optional": false,
                    "range": [
                      1095,
                      1099
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 35
                      },
                      "start": {
                        "column": 14,
                        "line": 35
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    1095,
                    1133
                  ],
                  "loc": {
                    "end": {
                      "column": 52,
                      "line": 35
                    },
                    "start": {
                      "column": 14,
                      "line": 35
                    }
                  }
                },
                "range": [
                  1089,
                  1133
                ],
                "loc": {
                  "end": {
                    "column": 52,
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
            "kind": "var",
            "range": [
              1085,
              1134
            ],
            "loc": {
              "end": {
                "column": 53,
                "line": 35
              },
              "start": {
                "column": 4,
                "line": 35
              }
            }
          }
        ],
        "range": [
          888,
          1145
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 36
          },
          "start": {
            "column": 33,
            "line": 29
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "other",
        "optional": false,
        "range": [
          864,
          869
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 29
          },
          "start": {
            "column": 9,
            "line": 29
          }
        }
      },
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
                "column": 25,
                "line": 29
              },
              "start": {
                "column": 22,
                "line": 29
              }
            },
            "range": [
              877,
              880
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  879,
                  880
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 29
                  },
                  "start": {
                    "column": 24,
                    "line": 29
                  }
                }
              },
              "range": [
                879,
                880
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 29
                },
                "start": {
                  "column": 24,
                  "line": 29
                }
              }
            }
          },
          "range": [
            876,
            880
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 29
            },
            "start": {
              "column": 21,
              "line": 29
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "u",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 31,
                "line": 29
              },
              "start": {
                "column": 28,
                "line": 29
              }
            },
            "range": [
              883,
              886
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "range": [
                  885,
                  886
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 29
                  },
                  "start": {
                    "column": 30,
                    "line": 29
                  }
                }
              },
              "range": [
                885,
                886
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 29
                },
                "start": {
                  "column": 30,
                  "line": 29
                }
              }
            }
          },
          "range": [
            882,
            886
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 29
            },
            "start": {
              "column": 27,
              "line": 29
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 20,
            "line": 29
          },
          "start": {
            "column": 14,
            "line": 29
          }
        },
        "range": [
          869,
          875
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
                870,
                871
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 29
                },
                "start": {
                  "column": 15,
                  "line": 29
                }
              }
            },
            "out": false,
            "range": [
              870,
              871
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 29
              },
              "start": {
                "column": 15,
                "line": 29
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
                873,
                874
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 29
                },
                "start": {
                  "column": 18,
                  "line": 29
                }
              }
            },
            "out": false,
            "range": [
              873,
              874
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 29
              },
              "start": {
                "column": 18,
                "line": 29
              }
            }
          }
        ]
      },
      "range": [
        855,
        1145
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 36
        },
        "start": {
          "column": 0,
          "line": 29
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 36
    },
    "start": {
      "column": 0,
      "line": 4
    }
  },
  "hashbang": null
}
```
