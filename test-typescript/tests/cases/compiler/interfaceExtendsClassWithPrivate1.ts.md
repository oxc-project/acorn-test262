__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    341
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          8,
          67
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "range": [
                21,
                24
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 2
                },
                "start": {
                  "column": 11,
                  "line": 2
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
                24,
                46
              ],
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
                        42,
                        43
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 2
                        },
                        "start": {
                          "column": 32,
                          "line": 2
                        }
                      }
                    },
                    "range": [
                      35,
                      44
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 2
                      },
                      "start": {
                        "column": 25,
                        "line": 2
                      }
                    }
                  }
                ],
                "range": [
                  33,
                  46
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 2
                  },
                  "start": {
                    "column": 23,
                    "line": 2
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 2
                      },
                      "start": {
                        "column": 16,
                        "line": 2
                      }
                    },
                    "range": [
                      26,
                      31
                    ],
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "range": [
                        28,
                        31
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 2
                        },
                        "start": {
                          "column": 18,
                          "line": 2
                        }
                      }
                    }
                  },
                  "range": [
                    25,
                    31
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 2
                    },
                    "start": {
                      "column": 15,
                      "line": 2
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 2
                },
                "start": {
                  "column": 14,
                  "line": 2
                }
              }
            },
            "range": [
              14,
              46
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 2
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "accessibility": "private",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                59,
                60
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 3
                },
                "start": {
                  "column": 12,
                  "line": 3
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Literal",
              "raw": "1",
              "value": 1,
              "range": [
                63,
                64
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
            "range": [
              51,
              65
            ],
            "loc": {
              "end": {
                "column": 18,
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
            "column": 8,
            "line": 1
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
          6,
          7
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 1
          },
          "start": {
            "column": 6,
            "line": 1
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        0,
        67
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
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          91,
          118
        ],
        "body": [
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "other",
              "optional": false,
              "range": [
                97,
                102
              ],
              "loc": {
                "end": {
                  "column": 9,
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
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 7
                    },
                    "start": {
                      "column": 11,
                      "line": 7
                    }
                  },
                  "range": [
                    104,
                    109
                  ],
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "range": [
                      106,
                      109
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 7
                      },
                      "start": {
                        "column": 13,
                        "line": 7
                      }
                    }
                  }
                },
                "range": [
                  103,
                  109
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 7
                  },
                  "start": {
                    "column": 10,
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
                  "column": 22,
                  "line": 7
                },
                "start": {
                  "column": 17,
                  "line": 7
                }
              },
              "range": [
                110,
                115
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  112,
                  115
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 7
                  },
                  "start": {
                    "column": 19,
                    "line": 7
                  }
                }
              }
            },
            "static": false,
            "range": [
              97,
              116
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 7
              },
              "start": {
                "column": 4,
                "line": 7
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 8
          },
          "start": {
            "column": 22,
            "line": 6
          }
        }
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "C",
            "optional": false,
            "range": [
              89,
              90
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 6
              },
              "start": {
                "column": 20,
                "line": 6
              }
            }
          },
          "range": [
            89,
            90
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 6
            },
            "start": {
              "column": 20,
              "line": 6
            }
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "range": [
          79,
          80
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 6
          },
          "start": {
            "column": 10,
            "line": 6
          }
        }
      },
      "range": [
        69,
        118
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
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          151,
          237
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
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
                  "column": 14,
                  "line": 11
                },
                "start": {
                  "column": 11,
                  "line": 11
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
                167,
                189
              ],
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
                        185,
                        186
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 11
                        },
                        "start": {
                          "column": 32,
                          "line": 11
                        }
                      }
                    },
                    "range": [
                      178,
                      187
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 11
                      },
                      "start": {
                        "column": 25,
                        "line": 11
                      }
                    }
                  }
                ],
                "range": [
                  176,
                  189
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 11
                  },
                  "start": {
                    "column": 23,
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 11
                      },
                      "start": {
                        "column": 16,
                        "line": 11
                      }
                    },
                    "range": [
                      169,
                      174
                    ],
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "range": [
                        171,
                        174
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 11
                        },
                        "start": {
                          "column": 18,
                          "line": 11
                        }
                      }
                    }
                  },
                  "range": [
                    168,
                    174
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 11
                    },
                    "start": {
                      "column": 15,
                      "line": 11
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 11
                },
                "start": {
                  "column": 14,
                  "line": 11
                }
              }
            },
            "range": [
              157,
              189
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 11
              },
              "start": {
                "column": 4,
                "line": 11
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
              "name": "other",
              "optional": false,
              "range": [
                194,
                199
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 12
                },
                "start": {
                  "column": 4,
                  "line": 12
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
                199,
                221
              ],
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
                        217,
                        218
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 12
                        },
                        "start": {
                          "column": 27,
                          "line": 12
                        }
                      }
                    },
                    "range": [
                      210,
                      219
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 12
                      },
                      "start": {
                        "column": 20,
                        "line": 12
                      }
                    }
                  }
                ],
                "range": [
                  208,
                  221
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 12
                  },
                  "start": {
                    "column": 18,
                    "line": 12
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 12
                      },
                      "start": {
                        "column": 11,
                        "line": 12
                      }
                    },
                    "range": [
                      201,
                      206
                    ],
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "range": [
                        203,
                        206
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 12
                        },
                        "start": {
                          "column": 13,
                          "line": 12
                        }
                      }
                    }
                  },
                  "range": [
                    200,
                    206
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 12
                    },
                    "start": {
                      "column": 10,
                      "line": 12
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 12
                },
                "start": {
                  "column": 9,
                  "line": 12
                }
              }
            },
            "range": [
              194,
              221
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 12
              },
              "start": {
                "column": 4,
                "line": 12
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
              "name": "bar",
              "optional": false,
              "range": [
                226,
                229
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 13
                },
                "start": {
                  "column": 4,
                  "line": 13
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
                229,
                235
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  232,
                  235
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 13
                  },
                  "start": {
                    "column": 10,
                    "line": 13
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
                  "column": 13,
                  "line": 13
                },
                "start": {
                  "column": 7,
                  "line": 13
                }
              }
            },
            "range": [
              226,
              235
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 13
              },
              "start": {
                "column": 4,
                "line": 13
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 14
          },
          "start": {
            "column": 31,
            "line": 10
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "range": [
          126,
          127
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 10
          },
          "start": {
            "column": 6,
            "line": 10
          }
        }
      },
      "implements": [
        {
          "type": "TSClassImplements",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "I",
            "optional": false,
            "range": [
              149,
              150
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 10
              },
              "start": {
                "column": 29,
                "line": 10
              }
            }
          },
          "range": [
            149,
            150
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 10
            },
            "start": {
              "column": 29,
              "line": 10
            }
          }
        }
      ],
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "range": [
          136,
          137
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 10
          },
          "start": {
            "column": 16,
            "line": 10
          }
        }
      },
      "range": [
        120,
        237
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 14
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
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 8,
                  "line": 16
                },
                "start": {
                  "column": 5,
                  "line": 16
                }
              },
              "range": [
                245,
                248
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "range": [
                    247,
                    248
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 16
                    },
                    "start": {
                      "column": 7,
                      "line": 16
                    }
                  }
                },
                "range": [
                  247,
                  248
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 16
                  },
                  "start": {
                    "column": 7,
                    "line": 16
                  }
                }
              }
            },
            "range": [
              244,
              248
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 16
              },
              "start": {
                "column": 4,
                "line": 16
              }
            }
          },
          "init": null,
          "range": [
            244,
            248
          ],
          "loc": {
            "end": {
              "column": 8,
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
        240,
        249
      ],
      "loc": {
        "end": {
          "column": 9,
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
            "name": "i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 8,
                  "line": 17
                },
                "start": {
                  "column": 5,
                  "line": 17
                }
              },
              "range": [
                255,
                258
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "range": [
                    257,
                    258
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 17
                    },
                    "start": {
                      "column": 7,
                      "line": 17
                    }
                  }
                },
                "range": [
                  257,
                  258
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 17
                  },
                  "start": {
                    "column": 7,
                    "line": 17
                  }
                }
              }
            },
            "range": [
              254,
              258
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 17
              },
              "start": {
                "column": 4,
                "line": 17
              }
            }
          },
          "init": null,
          "range": [
            254,
            258
          ],
          "loc": {
            "end": {
              "column": 8,
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
        250,
        259
      ],
      "loc": {
        "end": {
          "column": 9,
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
            "name": "d",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 8,
                  "line": 18
                },
                "start": {
                  "column": 5,
                  "line": 18
                }
              },
              "range": [
                265,
                268
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "D",
                  "optional": false,
                  "range": [
                    267,
                    268
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 18
                    },
                    "start": {
                      "column": 7,
                      "line": 18
                    }
                  }
                },
                "range": [
                  267,
                  268
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 18
                  },
                  "start": {
                    "column": 7,
                    "line": 18
                  }
                }
              }
            },
            "range": [
              264,
              268
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 18
              },
              "start": {
                "column": 4,
                "line": 18
              }
            }
          },
          "init": null,
          "range": [
            264,
            268
          ],
          "loc": {
            "end": {
              "column": 8,
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
        260,
        269
      ],
      "loc": {
        "end": {
          "column": 9,
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
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "range": [
            271,
            272
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 20
            },
            "start": {
              "column": 0,
              "line": 20
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "range": [
            275,
            276
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 20
            },
            "start": {
              "column": 4,
              "line": 20
            }
          }
        },
        "range": [
          271,
          276
        ],
        "loc": {
          "end": {
            "column": 5,
            "line": 20
          },
          "start": {
            "column": 0,
            "line": 20
          }
        }
      },
      "range": [
        271,
        277
      ],
      "loc": {
        "end": {
          "column": 6,
          "line": 20
        },
        "start": {
          "column": 0,
          "line": 20
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
          "name": "i",
          "optional": false,
          "range": [
            278,
            279
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 21
            },
            "start": {
              "column": 0,
              "line": 21
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "range": [
            282,
            283
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 21
            },
            "start": {
              "column": 4,
              "line": 21
            }
          }
        },
        "range": [
          278,
          283
        ],
        "loc": {
          "end": {
            "column": 5,
            "line": 21
          },
          "start": {
            "column": 0,
            "line": 21
          }
        }
      },
      "range": [
        278,
        284
      ],
      "loc": {
        "end": {
          "column": 6,
          "line": 21
        },
        "start": {
          "column": 0,
          "line": 21
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
          "name": "i",
          "optional": false,
          "range": [
            295,
            296
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 23
            },
            "start": {
              "column": 0,
              "line": 23
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "d",
          "optional": false,
          "range": [
            299,
            300
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 23
            },
            "start": {
              "column": 4,
              "line": 23
            }
          }
        },
        "range": [
          295,
          300
        ],
        "loc": {
          "end": {
            "column": 5,
            "line": 23
          },
          "start": {
            "column": 0,
            "line": 23
          }
        }
      },
      "range": [
        295,
        301
      ],
      "loc": {
        "end": {
          "column": 6,
          "line": 23
        },
        "start": {
          "column": 0,
          "line": 23
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
          "name": "d",
          "optional": false,
          "range": [
            302,
            303
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 24
            },
            "start": {
              "column": 0,
              "line": 24
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "range": [
            306,
            307
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 24
            },
            "start": {
              "column": 4,
              "line": 24
            }
          }
        },
        "range": [
          302,
          307
        ],
        "loc": {
          "end": {
            "column": 5,
            "line": 24
          },
          "start": {
            "column": 0,
            "line": 24
          }
        }
      },
      "range": [
        302,
        308
      ],
      "loc": {
        "end": {
          "column": 6,
          "line": 24
        },
        "start": {
          "column": 0,
          "line": 24
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
          "name": "c",
          "optional": false,
          "range": [
            319,
            320
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 26
            },
            "start": {
              "column": 0,
              "line": 26
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "d",
          "optional": false,
          "range": [
            323,
            324
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 26
            },
            "start": {
              "column": 4,
              "line": 26
            }
          }
        },
        "range": [
          319,
          324
        ],
        "loc": {
          "end": {
            "column": 5,
            "line": 26
          },
          "start": {
            "column": 0,
            "line": 26
          }
        }
      },
      "range": [
        319,
        325
      ],
      "loc": {
        "end": {
          "column": 6,
          "line": 26
        },
        "start": {
          "column": 0,
          "line": 26
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
          "name": "d",
          "optional": false,
          "range": [
            326,
            327
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 27
            },
            "start": {
              "column": 0,
              "line": 27
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "range": [
            330,
            331
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 27
            },
            "start": {
              "column": 4,
              "line": 27
            }
          }
        },
        "range": [
          326,
          331
        ],
        "loc": {
          "end": {
            "column": 5,
            "line": 27
          },
          "start": {
            "column": 0,
            "line": 27
          }
        }
      },
      "range": [
        326,
        332
      ],
      "loc": {
        "end": {
          "column": 6,
          "line": 27
        },
        "start": {
          "column": 0,
          "line": 27
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 15,
      "line": 27
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
