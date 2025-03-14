__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    155,
    1792
  ],
  "body": [
    {
      "type": "TSModuleDeclaration",
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ClassDeclaration",
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "range": [
                194,
                272
              ],
              "body": [
                {
                  "type": "MethodDefinition",
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "range": [
                      204,
                      207
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 6
                      },
                      "start": {
                        "column": 8,
                        "line": 6
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
                      207,
                      266
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
                                "type": "Literal",
                                "raw": "null",
                                "value": null,
                                "range": [
                                  250,
                                  254
                                ],
                                "loc": {
                                  "end": {
                                    "column": 25,
                                    "line": 7
                                  },
                                  "start": {
                                    "column": 21,
                                    "line": 7
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
                                248,
                                249
                              ],
                              "loc": {
                                "end": {
                                  "column": 20,
                                  "line": 7
                                },
                                "start": {
                                  "column": 19,
                                  "line": 7
                                }
                              }
                            },
                            "optional": false,
                            "range": [
                              248,
                              255
                            ],
                            "loc": {
                              "end": {
                                "column": 26,
                                "line": 7
                              },
                              "start": {
                                "column": 19,
                                "line": 7
                              }
                            }
                          },
                          "range": [
                            241,
                            256
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
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
                        227,
                        266
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 8
                        },
                        "start": {
                          "column": 31,
                          "line": 6
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
                              "column": 29,
                              "line": 6
                            },
                            "start": {
                              "column": 16,
                              "line": 6
                            }
                          },
                          "range": [
                            212,
                            225
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
                                      "column": 23,
                                      "line": 6
                                    },
                                    "start": {
                                      "column": 20,
                                      "line": 6
                                    }
                                  },
                                  "range": [
                                    216,
                                    219
                                  ],
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "T",
                                      "optional": false,
                                      "range": [
                                        218,
                                        219
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 23,
                                          "line": 6
                                        },
                                        "start": {
                                          "column": 22,
                                          "line": 6
                                        }
                                      }
                                    },
                                    "range": [
                                      218,
                                      219
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 23,
                                        "line": 6
                                      },
                                      "start": {
                                        "column": 22,
                                        "line": 6
                                      }
                                    }
                                  }
                                },
                                "range": [
                                  215,
                                  219
                                ],
                                "loc": {
                                  "end": {
                                    "column": 23,
                                    "line": 6
                                  },
                                  "start": {
                                    "column": 19,
                                    "line": 6
                                  }
                                }
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "loc": {
                                "end": {
                                  "column": 29,
                                  "line": 6
                                },
                                "start": {
                                  "column": 25,
                                  "line": 6
                                }
                              },
                              "range": [
                                221,
                                225
                              ],
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "range": [
                                    224,
                                    225
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 29,
                                      "line": 6
                                    },
                                    "start": {
                                      "column": 28,
                                      "line": 6
                                    }
                                  }
                                },
                                "range": [
                                  224,
                                  225
                                ],
                                "loc": {
                                  "end": {
                                    "column": 29,
                                    "line": 6
                                  },
                                  "start": {
                                    "column": 28,
                                    "line": 6
                                  }
                                }
                              }
                            },
                            "range": [
                              214,
                              225
                            ],
                            "loc": {
                              "end": {
                                "column": 29,
                                "line": 6
                              },
                              "start": {
                                "column": 18,
                                "line": 6
                              }
                            }
                          }
                        },
                        "range": [
                          211,
                          225
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 6
                          },
                          "start": {
                            "column": 15,
                            "line": 6
                          }
                        }
                      }
                    ],
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 6
                        },
                        "start": {
                          "column": 11,
                          "line": 6
                        }
                      },
                      "range": [
                        207,
                        210
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
                              208,
                              209
                            ],
                            "loc": {
                              "end": {
                                "column": 13,
                                "line": 6
                              },
                              "start": {
                                "column": 12,
                                "line": 6
                              }
                            }
                          },
                          "out": false,
                          "range": [
                            208,
                            209
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 6
                            },
                            "start": {
                              "column": 12,
                              "line": 6
                            }
                          }
                        }
                      ]
                    },
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 8
                      },
                      "start": {
                        "column": 11,
                        "line": 6
                      }
                    }
                  },
                  "range": [
                    204,
                    266
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 8
                    },
                    "start": {
                      "column": 8,
                      "line": 6
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 9
                },
                "start": {
                  "column": 15,
                  "line": 5
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
                189,
                190
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 5
                },
                "start": {
                  "column": 10,
                  "line": 5
                }
              }
            },
            "implements": [],
            "superClass": null,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 14,
                  "line": 5
                },
                "start": {
                  "column": 11,
                  "line": 5
                }
              },
              "range": [
                190,
                193
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
                      191,
                      192
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 5
                      },
                      "start": {
                        "column": 12,
                        "line": 5
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    191,
                    192
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 5
                    },
                    "start": {
                      "column": 12,
                      "line": 5
                    }
                  }
                }
              ]
            },
            "range": [
              183,
              272
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 9
              },
              "start": {
                "column": 4,
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
                  "name": "c",
                  "optional": false,
                  "range": [
                    282,
                    283
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 11
                    },
                    "start": {
                      "column": 8,
                      "line": 11
                    }
                  }
                },
                "init": {
                  "type": "NewExpression",
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "range": [
                      290,
                      291
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 11
                      },
                      "start": {
                        "column": 16,
                        "line": 11
                      }
                    }
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      291,
                      299
                    ],
                    "params": [
                      {
                        "type": "TSNumberKeyword",
                        "range": [
                          292,
                          298
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 11
                          },
                          "start": {
                            "column": 18,
                            "line": 11
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 11
                      },
                      "start": {
                        "column": 17,
                        "line": 11
                      }
                    }
                  },
                  "range": [
                    286,
                    301
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 11
                    },
                    "start": {
                      "column": 12,
                      "line": 11
                    }
                  }
                },
                "range": [
                  282,
                  301
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 11
                  },
                  "start": {
                    "column": 8,
                    "line": 11
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              278,
              302
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 11
              },
              "start": {
                "column": 4,
                "line": 11
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
                    311,
                    312
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 12
                    },
                    "start": {
                      "column": 8,
                      "line": 12
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
                          334,
                          336
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 12
                          },
                          "start": {
                            "column": 31,
                            "line": 12
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
                                "column": 26,
                                "line": 12
                              },
                              "start": {
                                "column": 23,
                                "line": 12
                              }
                            },
                            "range": [
                              326,
                              329
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "U",
                                "optional": false,
                                "range": [
                                  328,
                                  329
                                ],
                                "loc": {
                                  "end": {
                                    "column": 26,
                                    "line": 12
                                  },
                                  "start": {
                                    "column": 25,
                                    "line": 12
                                  }
                                }
                              },
                              "range": [
                                328,
                                329
                              ],
                              "loc": {
                                "end": {
                                  "column": 26,
                                  "line": 12
                                },
                                "start": {
                                  "column": 25,
                                  "line": 12
                                }
                              }
                            }
                          },
                          "range": [
                            325,
                            329
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 12
                            },
                            "start": {
                              "column": 22,
                              "line": 12
                            }
                          }
                        }
                      ],
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 12
                          },
                          "start": {
                            "column": 18,
                            "line": 12
                          }
                        },
                        "range": [
                          321,
                          324
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
                                322,
                                323
                              ],
                              "loc": {
                                "end": {
                                  "column": 20,
                                  "line": 12
                                },
                                "start": {
                                  "column": 19,
                                  "line": 12
                                }
                              }
                            },
                            "out": false,
                            "range": [
                              322,
                              323
                            ],
                            "loc": {
                              "end": {
                                "column": 20,
                                "line": 12
                              },
                              "start": {
                                "column": 19,
                                "line": 12
                              }
                            }
                          }
                        ]
                      },
                      "range": [
                        321,
                        336
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 12
                        },
                        "start": {
                          "column": 18,
                          "line": 12
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
                      "name": "c",
                      "optional": false,
                      "range": [
                        315,
                        316
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 12
                        },
                        "start": {
                          "column": 12,
                          "line": 12
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "range": [
                        317,
                        320
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 12
                        },
                        "start": {
                          "column": 14,
                          "line": 12
                        }
                      }
                    },
                    "range": [
                      315,
                      320
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 12
                      },
                      "start": {
                        "column": 12,
                        "line": 12
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    315,
                    337
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 12
                    },
                    "start": {
                      "column": 12,
                      "line": 12
                    }
                  }
                },
                "range": [
                  311,
                  337
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 12
                  },
                  "start": {
                    "column": 8,
                    "line": 12
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              307,
              338
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 12
              },
              "start": {
                "column": 4,
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
                  "name": "r2",
                  "optional": false,
                  "range": [
                    353,
                    355
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 13
                    },
                    "start": {
                      "column": 8,
                      "line": 13
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
                          385,
                          387
                        ],
                        "loc": {
                          "end": {
                            "column": 42,
                            "line": 13
                          },
                          "start": {
                            "column": 40,
                            "line": 13
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
                                "column": 35,
                                "line": 13
                              },
                              "start": {
                                "column": 32,
                                "line": 13
                              }
                            },
                            "range": [
                              377,
                              380
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "U",
                                "optional": false,
                                "range": [
                                  379,
                                  380
                                ],
                                "loc": {
                                  "end": {
                                    "column": 35,
                                    "line": 13
                                  },
                                  "start": {
                                    "column": 34,
                                    "line": 13
                                  }
                                }
                              },
                              "range": [
                                379,
                                380
                              ],
                              "loc": {
                                "end": {
                                  "column": 35,
                                  "line": 13
                                },
                                "start": {
                                  "column": 34,
                                  "line": 13
                                }
                              }
                            }
                          },
                          "range": [
                            376,
                            380
                          ],
                          "loc": {
                            "end": {
                              "column": 35,
                              "line": 13
                            },
                            "start": {
                              "column": 31,
                              "line": 13
                            }
                          }
                        }
                      ],
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 13
                          },
                          "start": {
                            "column": 27,
                            "line": 13
                          }
                        },
                        "range": [
                          372,
                          375
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
                                373,
                                374
                              ],
                              "loc": {
                                "end": {
                                  "column": 29,
                                  "line": 13
                                },
                                "start": {
                                  "column": 28,
                                  "line": 13
                                }
                              }
                            },
                            "out": false,
                            "range": [
                              373,
                              374
                            ],
                            "loc": {
                              "end": {
                                "column": 29,
                                "line": 13
                              },
                              "start": {
                                "column": 28,
                                "line": 13
                              }
                            }
                          }
                        ]
                      },
                      "range": [
                        372,
                        387
                      ],
                      "loc": {
                        "end": {
                          "column": 42,
                          "line": 13
                        },
                        "start": {
                          "column": 27,
                          "line": 13
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
                      "name": "c",
                      "optional": false,
                      "range": [
                        358,
                        359
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 13
                        },
                        "start": {
                          "column": 13,
                          "line": 13
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "range": [
                        360,
                        363
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 13
                        },
                        "start": {
                          "column": 15,
                          "line": 13
                        }
                      }
                    },
                    "range": [
                      358,
                      363
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 13
                      },
                      "start": {
                        "column": 13,
                        "line": 13
                      }
                    }
                  },
                  "optional": false,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      363,
                      371
                    ],
                    "params": [
                      {
                        "type": "TSStringKeyword",
                        "range": [
                          364,
                          370
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 13
                          },
                          "start": {
                            "column": 19,
                            "line": 13
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 13
                      },
                      "start": {
                        "column": 18,
                        "line": 13
                      }
                    }
                  },
                  "range": [
                    358,
                    388
                  ],
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 13
                    },
                    "start": {
                      "column": 13,
                      "line": 13
                    }
                  }
                },
                "range": [
                  353,
                  388
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 13
                  },
                  "start": {
                    "column": 8,
                    "line": 13
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              349,
              389
            ],
            "loc": {
              "end": {
                "column": 44,
                "line": 13
              },
              "start": {
                "column": 4,
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
                  "name": "r3",
                  "optional": false,
                  "range": [
                    409,
                    411
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 14
                    },
                    "start": {
                      "column": 8,
                      "line": 14
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
                          425,
                          427
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 14
                          },
                          "start": {
                            "column": 24,
                            "line": 14
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
                            420,
                            421
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 14
                            },
                            "start": {
                              "column": 19,
                              "line": 14
                            }
                          }
                        }
                      ],
                      "range": [
                        420,
                        427
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 14
                        },
                        "start": {
                          "column": 19,
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
                      "name": "c",
                      "optional": false,
                      "range": [
                        414,
                        415
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 14
                        },
                        "start": {
                          "column": 13,
                          "line": 14
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "range": [
                        416,
                        419
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 14
                        },
                        "start": {
                          "column": 15,
                          "line": 14
                        }
                      }
                    },
                    "range": [
                      414,
                      419
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 14
                      },
                      "start": {
                        "column": 13,
                        "line": 14
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    414,
                    428
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 14
                    },
                    "start": {
                      "column": 13,
                      "line": 14
                    }
                  }
                },
                "range": [
                  409,
                  428
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 14
                  },
                  "start": {
                    "column": 8,
                    "line": 14
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              405,
              429
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 14
              },
              "start": {
                "column": 4,
                "line": 14
              }
            }
          },
          {
            "type": "ClassDeclaration",
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "range": [
                453,
                528
              ],
              "body": [
                {
                  "type": "MethodDefinition",
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "range": [
                      463,
                      466
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 17
                      },
                      "start": {
                        "column": 8,
                        "line": 17
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
                      466,
                      522
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
                                "type": "Literal",
                                "raw": "null",
                                "value": null,
                                "range": [
                                  506,
                                  510
                                ],
                                "loc": {
                                  "end": {
                                    "column": 25,
                                    "line": 18
                                  },
                                  "start": {
                                    "column": 21,
                                    "line": 18
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
                                504,
                                505
                              ],
                              "loc": {
                                "end": {
                                  "column": 20,
                                  "line": 18
                                },
                                "start": {
                                  "column": 19,
                                  "line": 18
                                }
                              }
                            },
                            "optional": false,
                            "range": [
                              504,
                              511
                            ],
                            "loc": {
                              "end": {
                                "column": 26,
                                "line": 18
                              },
                              "start": {
                                "column": 19,
                                "line": 18
                              }
                            }
                          },
                          "range": [
                            497,
                            512
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 18
                            },
                            "start": {
                              "column": 12,
                              "line": 18
                            }
                          }
                        }
                      ],
                      "range": [
                        483,
                        522
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 19
                        },
                        "start": {
                          "column": 28,
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
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 17
                            },
                            "start": {
                              "column": 13,
                              "line": 17
                            }
                          },
                          "range": [
                            468,
                            481
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
                                      "column": 20,
                                      "line": 17
                                    },
                                    "start": {
                                      "column": 17,
                                      "line": 17
                                    }
                                  },
                                  "range": [
                                    472,
                                    475
                                  ],
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "T",
                                      "optional": false,
                                      "range": [
                                        474,
                                        475
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
                                      474,
                                      475
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
                                  }
                                },
                                "range": [
                                  471,
                                  475
                                ],
                                "loc": {
                                  "end": {
                                    "column": 20,
                                    "line": 17
                                  },
                                  "start": {
                                    "column": 16,
                                    "line": 17
                                  }
                                }
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "loc": {
                                "end": {
                                  "column": 26,
                                  "line": 17
                                },
                                "start": {
                                  "column": 22,
                                  "line": 17
                                }
                              },
                              "range": [
                                477,
                                481
                              ],
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "range": [
                                    480,
                                    481
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 26,
                                      "line": 17
                                    },
                                    "start": {
                                      "column": 25,
                                      "line": 17
                                    }
                                  }
                                },
                                "range": [
                                  480,
                                  481
                                ],
                                "loc": {
                                  "end": {
                                    "column": 26,
                                    "line": 17
                                  },
                                  "start": {
                                    "column": 25,
                                    "line": 17
                                  }
                                }
                              }
                            },
                            "range": [
                              470,
                              481
                            ],
                            "loc": {
                              "end": {
                                "column": 26,
                                "line": 17
                              },
                              "start": {
                                "column": 15,
                                "line": 17
                              }
                            }
                          }
                        },
                        "range": [
                          467,
                          481
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 17
                          },
                          "start": {
                            "column": 12,
                            "line": 17
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 19
                      },
                      "start": {
                        "column": 11,
                        "line": 17
                      }
                    }
                  },
                  "range": [
                    463,
                    522
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 19
                    },
                    "start": {
                      "column": 8,
                      "line": 17
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 20
                },
                "start": {
                  "column": 16,
                  "line": 16
                }
              }
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C2",
              "optional": false,
              "range": [
                447,
                449
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 16
                },
                "start": {
                  "column": 10,
                  "line": 16
                }
              }
            },
            "implements": [],
            "superClass": null,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 15,
                  "line": 16
                },
                "start": {
                  "column": 12,
                  "line": 16
                }
              },
              "range": [
                449,
                452
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
                      450,
                      451
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 16
                      },
                      "start": {
                        "column": 13,
                        "line": 16
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    450,
                    451
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 16
                    },
                    "start": {
                      "column": 13,
                      "line": 16
                    }
                  }
                }
              ]
            },
            "range": [
              441,
              528
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 20
              },
              "start": {
                "column": 4,
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
                  "name": "c2",
                  "optional": false,
                  "range": [
                    538,
                    540
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 22
                    },
                    "start": {
                      "column": 8,
                      "line": 22
                    }
                  }
                },
                "init": {
                  "type": "NewExpression",
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C2",
                    "optional": false,
                    "range": [
                      547,
                      549
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 22
                      },
                      "start": {
                        "column": 17,
                        "line": 22
                      }
                    }
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      549,
                      557
                    ],
                    "params": [
                      {
                        "type": "TSNumberKeyword",
                        "range": [
                          550,
                          556
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 22
                          },
                          "start": {
                            "column": 20,
                            "line": 22
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 22
                      },
                      "start": {
                        "column": 19,
                        "line": 22
                      }
                    }
                  },
                  "range": [
                    543,
                    559
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 22
                    },
                    "start": {
                      "column": 13,
                      "line": 22
                    }
                  }
                },
                "range": [
                  538,
                  559
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 22
                  },
                  "start": {
                    "column": 8,
                    "line": 22
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              534,
              560
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 22
              },
              "start": {
                "column": 4,
                "line": 22
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
                  "name": "ra",
                  "optional": false,
                  "range": [
                    569,
                    571
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 23
                    },
                    "start": {
                      "column": 8,
                      "line": 23
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
                        "raw": "1",
                        "value": 1,
                        "range": [
                          594,
                          595
                        ],
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 23
                          },
                          "start": {
                            "column": 33,
                            "line": 23
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
                                "line": 23
                              },
                              "start": {
                                "column": 25,
                                "line": 23
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
                                "name": "U",
                                "optional": false,
                                "range": [
                                  588,
                                  589
                                ],
                                "loc": {
                                  "end": {
                                    "column": 28,
                                    "line": 23
                                  },
                                  "start": {
                                    "column": 27,
                                    "line": 23
                                  }
                                }
                              },
                              "range": [
                                588,
                                589
                              ],
                              "loc": {
                                "end": {
                                  "column": 28,
                                  "line": 23
                                },
                                "start": {
                                  "column": 27,
                                  "line": 23
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
                              "column": 28,
                              "line": 23
                            },
                            "start": {
                              "column": 24,
                              "line": 23
                            }
                          }
                        }
                      ],
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 23
                          },
                          "start": {
                            "column": 20,
                            "line": 23
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
                              "name": "U",
                              "optional": false,
                              "range": [
                                582,
                                583
                              ],
                              "loc": {
                                "end": {
                                  "column": 22,
                                  "line": 23
                                },
                                "start": {
                                  "column": 21,
                                  "line": 23
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
                                "column": 22,
                                "line": 23
                              },
                              "start": {
                                "column": 21,
                                "line": 23
                              }
                            }
                          }
                        ]
                      },
                      "range": [
                        581,
                        595
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 23
                        },
                        "start": {
                          "column": 20,
                          "line": 23
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
                      "name": "c2",
                      "optional": false,
                      "range": [
                        574,
                        576
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 23
                        },
                        "start": {
                          "column": 13,
                          "line": 23
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "range": [
                        577,
                        580
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 23
                        },
                        "start": {
                          "column": 16,
                          "line": 23
                        }
                      }
                    },
                    "range": [
                      574,
                      580
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 23
                      },
                      "start": {
                        "column": 13,
                        "line": 23
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    574,
                    596
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 23
                    },
                    "start": {
                      "column": 13,
                      "line": 23
                    }
                  }
                },
                "range": [
                  569,
                  596
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 23
                  },
                  "start": {
                    "column": 8,
                    "line": 23
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              565,
              597
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 23
              },
              "start": {
                "column": 4,
                "line": 23
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
                  "name": "r3a",
                  "optional": false,
                  "range": [
                    616,
                    619
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 24
                    },
                    "start": {
                      "column": 8,
                      "line": 24
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
                        "raw": "1",
                        "value": 1,
                        "range": [
                          634,
                          635
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 24
                          },
                          "start": {
                            "column": 26,
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
                          "name": "x",
                          "optional": false,
                          "range": [
                            629,
                            630
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 24
                            },
                            "start": {
                              "column": 21,
                              "line": 24
                            }
                          }
                        }
                      ],
                      "range": [
                        629,
                        635
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 24
                        },
                        "start": {
                          "column": 21,
                          "line": 24
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
                      "name": "c2",
                      "optional": false,
                      "range": [
                        622,
                        624
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 24
                        },
                        "start": {
                          "column": 14,
                          "line": 24
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "range": [
                        625,
                        628
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 24
                        },
                        "start": {
                          "column": 17,
                          "line": 24
                        }
                      }
                    },
                    "range": [
                      622,
                      628
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 24
                      },
                      "start": {
                        "column": 14,
                        "line": 24
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    622,
                    636
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 24
                    },
                    "start": {
                      "column": 14,
                      "line": 24
                    }
                  }
                },
                "range": [
                  616,
                  636
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 24
                  },
                  "start": {
                    "column": 8,
                    "line": 24
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              612,
              637
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 24
              },
              "start": {
                "column": 4,
                "line": 24
              }
            }
          }
        ],
        "range": [
          177,
          649
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 25
          },
          "start": {
            "column": 22,
            "line": 4
          }
        }
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          162,
          176
        ],
        "decorators": [],
        "name": "ImmediatelyFix",
        "optional": false,
        "loc": {
          "end": {
            "column": 21,
            "line": 4
          },
          "start": {
            "column": 7,
            "line": 4
          }
        }
      },
      "kind": "module",
      "range": [
        155,
        649
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 25
        },
        "start": {
          "column": 0,
          "line": 4
        }
      }
    },
    {
      "type": "TSModuleDeclaration",
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ClassDeclaration",
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "range": [
                690,
                777
              ],
              "body": [
                {
                  "type": "MethodDefinition",
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo2",
                    "optional": false,
                    "range": [
                      700,
                      704
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 29
                      },
                      "start": {
                        "column": 8,
                        "line": 29
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
                      704,
                      771
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
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "range": [
                                  758,
                                  759
                                ],
                                "loc": {
                                  "end": {
                                    "column": 23,
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
                              "name": "cb",
                              "optional": false,
                              "range": [
                                755,
                                757
                              ],
                              "loc": {
                                "end": {
                                  "column": 21,
                                  "line": 30
                                },
                                "start": {
                                  "column": 19,
                                  "line": 30
                                }
                              }
                            },
                            "optional": false,
                            "range": [
                              755,
                              760
                            ],
                            "loc": {
                              "end": {
                                "column": 24,
                                "line": 30
                              },
                              "start": {
                                "column": 19,
                                "line": 30
                              }
                            }
                          },
                          "range": [
                            748,
                            761
                          ],
                          "loc": {
                            "end": {
                              "column": 25,
                              "line": 30
                            },
                            "start": {
                              "column": 12,
                              "line": 30
                            }
                          }
                        }
                      ],
                      "range": [
                        734,
                        771
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 31
                        },
                        "start": {
                          "column": 42,
                          "line": 29
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
                              "column": 23,
                              "line": 29
                            },
                            "start": {
                              "column": 20,
                              "line": 29
                            }
                          },
                          "range": [
                            712,
                            715
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "range": [
                                714,
                                715
                              ],
                              "loc": {
                                "end": {
                                  "column": 23,
                                  "line": 29
                                },
                                "start": {
                                  "column": 22,
                                  "line": 29
                                }
                              }
                            },
                            "range": [
                              714,
                              715
                            ],
                            "loc": {
                              "end": {
                                "column": 23,
                                "line": 29
                              },
                              "start": {
                                "column": 22,
                                "line": 29
                              }
                            }
                          }
                        },
                        "range": [
                          711,
                          715
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 29
                          },
                          "start": {
                            "column": 19,
                            "line": 29
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
                              "column": 40,
                              "line": 29
                            },
                            "start": {
                              "column": 27,
                              "line": 29
                            }
                          },
                          "range": [
                            719,
                            732
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
                                      "column": 34,
                                      "line": 29
                                    },
                                    "start": {
                                      "column": 31,
                                      "line": 29
                                    }
                                  },
                                  "range": [
                                    723,
                                    726
                                  ],
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "T",
                                      "optional": false,
                                      "range": [
                                        725,
                                        726
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 34,
                                          "line": 29
                                        },
                                        "start": {
                                          "column": 33,
                                          "line": 29
                                        }
                                      }
                                    },
                                    "range": [
                                      725,
                                      726
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 34,
                                        "line": 29
                                      },
                                      "start": {
                                        "column": 33,
                                        "line": 29
                                      }
                                    }
                                  }
                                },
                                "range": [
                                  722,
                                  726
                                ],
                                "loc": {
                                  "end": {
                                    "column": 34,
                                    "line": 29
                                  },
                                  "start": {
                                    "column": 30,
                                    "line": 29
                                  }
                                }
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "loc": {
                                "end": {
                                  "column": 40,
                                  "line": 29
                                },
                                "start": {
                                  "column": 36,
                                  "line": 29
                                }
                              },
                              "range": [
                                728,
                                732
                              ],
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "U",
                                  "optional": false,
                                  "range": [
                                    731,
                                    732
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 40,
                                      "line": 29
                                    },
                                    "start": {
                                      "column": 39,
                                      "line": 29
                                    }
                                  }
                                },
                                "range": [
                                  731,
                                  732
                                ],
                                "loc": {
                                  "end": {
                                    "column": 40,
                                    "line": 29
                                  },
                                  "start": {
                                    "column": 39,
                                    "line": 29
                                  }
                                }
                              }
                            },
                            "range": [
                              721,
                              732
                            ],
                            "loc": {
                              "end": {
                                "column": 40,
                                "line": 29
                              },
                              "start": {
                                "column": 29,
                                "line": 29
                              }
                            }
                          }
                        },
                        "range": [
                          717,
                          732
                        ],
                        "loc": {
                          "end": {
                            "column": 40,
                            "line": 29
                          },
                          "start": {
                            "column": 25,
                            "line": 29
                          }
                        }
                      }
                    ],
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 29
                        },
                        "start": {
                          "column": 12,
                          "line": 29
                        }
                      },
                      "range": [
                        704,
                        710
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
                              705,
                              706
                            ],
                            "loc": {
                              "end": {
                                "column": 14,
                                "line": 29
                              },
                              "start": {
                                "column": 13,
                                "line": 29
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
                              "column": 14,
                              "line": 29
                            },
                            "start": {
                              "column": 13,
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
                              708,
                              709
                            ],
                            "loc": {
                              "end": {
                                "column": 17,
                                "line": 29
                              },
                              "start": {
                                "column": 16,
                                "line": 29
                              }
                            }
                          },
                          "out": false,
                          "range": [
                            708,
                            709
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 29
                            },
                            "start": {
                              "column": 16,
                              "line": 29
                            }
                          }
                        }
                      ]
                    },
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 31
                      },
                      "start": {
                        "column": 12,
                        "line": 29
                      }
                    }
                  },
                  "range": [
                    700,
                    771
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 31
                    },
                    "start": {
                      "column": 8,
                      "line": 29
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 32
                },
                "start": {
                  "column": 15,
                  "line": 28
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
                685,
                686
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 28
                },
                "start": {
                  "column": 10,
                  "line": 28
                }
              }
            },
            "implements": [],
            "superClass": null,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 14,
                  "line": 28
                },
                "start": {
                  "column": 11,
                  "line": 28
                }
              },
              "range": [
                686,
                689
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
                      687,
                      688
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 28
                      },
                      "start": {
                        "column": 12,
                        "line": 28
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    687,
                    688
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 28
                    },
                    "start": {
                      "column": 12,
                      "line": 28
                    }
                  }
                }
              ]
            },
            "range": [
              679,
              777
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 32
              },
              "start": {
                "column": 4,
                "line": 28
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
                        "column": 20,
                        "line": 34
                      },
                      "start": {
                        "column": 9,
                        "line": 34
                      }
                    },
                    "range": [
                      788,
                      799
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          791,
                          799
                        ],
                        "params": [
                          {
                            "type": "TSNumberKeyword",
                            "range": [
                              792,
                              798
                            ],
                            "loc": {
                              "end": {
                                "column": 19,
                                "line": 34
                              },
                              "start": {
                                "column": 13,
                                "line": 34
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 34
                          },
                          "start": {
                            "column": 12,
                            "line": 34
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "range": [
                          790,
                          791
                        ],
                        "loc": {
                          "end": {
                            "column": 12,
                            "line": 34
                          },
                          "start": {
                            "column": 11,
                            "line": 34
                          }
                        }
                      },
                      "range": [
                        790,
                        799
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 34
                        },
                        "start": {
                          "column": 11,
                          "line": 34
                        }
                      }
                    }
                  },
                  "range": [
                    787,
                    799
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
                "init": null,
                "range": [
                  787,
                  799
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
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              783,
              800
            ],
            "loc": {
              "end": {
                "column": 21,
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
                  "name": "r4",
                  "optional": false,
                  "range": [
                    809,
                    811
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
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
                        821,
                        822
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 35
                        },
                        "start": {
                          "column": 20,
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
                                852,
                                854
                              ],
                              "loc": {
                                "end": {
                                  "column": 53,
                                  "line": 35
                                },
                                "start": {
                                  "column": 51,
                                  "line": 35
                                }
                              }
                            },
                            "range": [
                              845,
                              854
                            ],
                            "loc": {
                              "end": {
                                "column": 53,
                                "line": 35
                              },
                              "start": {
                                "column": 44,
                                "line": 35
                              }
                            }
                          }
                        ],
                        "range": [
                          843,
                          856
                        ],
                        "loc": {
                          "end": {
                            "column": 55,
                            "line": 35
                          },
                          "start": {
                            "column": 42,
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
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 40,
                                "line": 35
                              },
                              "start": {
                                "column": 37,
                                "line": 35
                              }
                            },
                            "range": [
                              838,
                              841
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Z",
                                "optional": false,
                                "range": [
                                  840,
                                  841
                                ],
                                "loc": {
                                  "end": {
                                    "column": 40,
                                    "line": 35
                                  },
                                  "start": {
                                    "column": 39,
                                    "line": 35
                                  }
                                }
                              },
                              "range": [
                                840,
                                841
                              ],
                              "loc": {
                                "end": {
                                  "column": 40,
                                  "line": 35
                                },
                                "start": {
                                  "column": 39,
                                  "line": 35
                                }
                              }
                            }
                          },
                          "range": [
                            837,
                            841
                          ],
                          "loc": {
                            "end": {
                              "column": 40,
                              "line": 35
                            },
                            "start": {
                              "column": 36,
                              "line": 35
                            }
                          }
                        }
                      ],
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "loc": {
                          "end": {
                            "column": 35,
                            "line": 35
                          },
                          "start": {
                            "column": 32,
                            "line": 35
                          }
                        },
                        "range": [
                          833,
                          836
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
                                834,
                                835
                              ],
                              "loc": {
                                "end": {
                                  "column": 34,
                                  "line": 35
                                },
                                "start": {
                                  "column": 33,
                                  "line": 35
                                }
                              }
                            },
                            "out": false,
                            "range": [
                              834,
                              835
                            ],
                            "loc": {
                              "end": {
                                "column": 34,
                                "line": 35
                              },
                              "start": {
                                "column": 33,
                                "line": 35
                              }
                            }
                          }
                        ]
                      },
                      "range": [
                        824,
                        856
                      ],
                      "loc": {
                        "end": {
                          "column": 55,
                          "line": 35
                        },
                        "start": {
                          "column": 23,
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
                      "name": "c",
                      "optional": false,
                      "range": [
                        814,
                        815
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 35
                        },
                        "start": {
                          "column": 13,
                          "line": 35
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo2",
                      "optional": false,
                      "range": [
                        816,
                        820
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 35
                        },
                        "start": {
                          "column": 15,
                          "line": 35
                        }
                      }
                    },
                    "range": [
                      814,
                      820
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 35
                      },
                      "start": {
                        "column": 13,
                        "line": 35
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    814,
                    857
                  ],
                  "loc": {
                    "end": {
                      "column": 56,
                      "line": 35
                    },
                    "start": {
                      "column": 13,
                      "line": 35
                    }
                  }
                },
                "range": [
                  809,
                  857
                ],
                "loc": {
                  "end": {
                    "column": 56,
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
              805,
              858
            ],
            "loc": {
              "end": {
                "column": 57,
                "line": 35
              },
              "start": {
                "column": 4,
                "line": 35
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
                    945,
                    947
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 36
                    },
                    "start": {
                      "column": 8,
                      "line": 36
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
                        957,
                        958
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 36
                        },
                        "start": {
                          "column": 20,
                          "line": 36
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
                          967,
                          969
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 36
                          },
                          "start": {
                            "column": 30,
                            "line": 36
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
                            961,
                            962
                          ],
                          "loc": {
                            "end": {
                              "column": 25,
                              "line": 36
                            },
                            "start": {
                              "column": 24,
                              "line": 36
                            }
                          }
                        }
                      ],
                      "range": [
                        960,
                        969
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 36
                        },
                        "start": {
                          "column": 23,
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
                      "name": "c",
                      "optional": false,
                      "range": [
                        950,
                        951
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 36
                        },
                        "start": {
                          "column": 13,
                          "line": 36
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo2",
                      "optional": false,
                      "range": [
                        952,
                        956
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 36
                        },
                        "start": {
                          "column": 15,
                          "line": 36
                        }
                      }
                    },
                    "range": [
                      950,
                      956
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 36
                      },
                      "start": {
                        "column": 13,
                        "line": 36
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    950,
                    970
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 36
                    },
                    "start": {
                      "column": 13,
                      "line": 36
                    }
                  }
                },
                "range": [
                  945,
                  970
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 36
                  },
                  "start": {
                    "column": 8,
                    "line": 36
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              941,
              971
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 36
              },
              "start": {
                "column": 4,
                "line": 36
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
                    990,
                    992
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 37
                    },
                    "start": {
                      "column": 8,
                      "line": 37
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
                        1018,
                        1020
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 37
                        },
                        "start": {
                          "column": 36,
                          "line": 37
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
                          1035,
                          1036
                        ],
                        "loc": {
                          "end": {
                            "column": 54,
                            "line": 37
                          },
                          "start": {
                            "column": 53,
                            "line": 37
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
                                "column": 48,
                                "line": 37
                              },
                              "start": {
                                "column": 45,
                                "line": 37
                              }
                            },
                            "range": [
                              1027,
                              1030
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Z",
                                "optional": false,
                                "range": [
                                  1029,
                                  1030
                                ],
                                "loc": {
                                  "end": {
                                    "column": 48,
                                    "line": 37
                                  },
                                  "start": {
                                    "column": 47,
                                    "line": 37
                                  }
                                }
                              },
                              "range": [
                                1029,
                                1030
                              ],
                              "loc": {
                                "end": {
                                  "column": 48,
                                  "line": 37
                                },
                                "start": {
                                  "column": 47,
                                  "line": 37
                                }
                              }
                            }
                          },
                          "range": [
                            1026,
                            1030
                          ],
                          "loc": {
                            "end": {
                              "column": 48,
                              "line": 37
                            },
                            "start": {
                              "column": 44,
                              "line": 37
                            }
                          }
                        }
                      ],
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "loc": {
                          "end": {
                            "column": 43,
                            "line": 37
                          },
                          "start": {
                            "column": 40,
                            "line": 37
                          }
                        },
                        "range": [
                          1022,
                          1025
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
                                1023,
                                1024
                              ],
                              "loc": {
                                "end": {
                                  "column": 42,
                                  "line": 37
                                },
                                "start": {
                                  "column": 41,
                                  "line": 37
                                }
                              }
                            },
                            "out": false,
                            "range": [
                              1023,
                              1024
                            ],
                            "loc": {
                              "end": {
                                "column": 42,
                                "line": 37
                              },
                              "start": {
                                "column": 41,
                                "line": 37
                              }
                            }
                          }
                        ]
                      },
                      "range": [
                        1022,
                        1036
                      ],
                      "loc": {
                        "end": {
                          "column": 54,
                          "line": 37
                        },
                        "start": {
                          "column": 40,
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
                      "name": "c",
                      "optional": false,
                      "range": [
                        995,
                        996
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 37
                        },
                        "start": {
                          "column": 13,
                          "line": 37
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo2",
                      "optional": false,
                      "range": [
                        997,
                        1001
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 37
                        },
                        "start": {
                          "column": 15,
                          "line": 37
                        }
                      }
                    },
                    "range": [
                      995,
                      1001
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 37
                      },
                      "start": {
                        "column": 13,
                        "line": 37
                      }
                    }
                  },
                  "optional": false,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      1001,
                      1017
                    ],
                    "params": [
                      {
                        "type": "TSStringKeyword",
                        "range": [
                          1002,
                          1008
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 37
                          },
                          "start": {
                            "column": 20,
                            "line": 37
                          }
                        }
                      },
                      {
                        "type": "TSNumberKeyword",
                        "range": [
                          1010,
                          1016
                        ],
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 37
                          },
                          "start": {
                            "column": 28,
                            "line": 37
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 37
                      },
                      "start": {
                        "column": 19,
                        "line": 37
                      }
                    }
                  },
                  "range": [
                    995,
                    1037
                  ],
                  "loc": {
                    "end": {
                      "column": 55,
                      "line": 37
                    },
                    "start": {
                      "column": 13,
                      "line": 37
                    }
                  }
                },
                "range": [
                  990,
                  1037
                ],
                "loc": {
                  "end": {
                    "column": 55,
                    "line": 37
                  },
                  "start": {
                    "column": 8,
                    "line": 37
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              986,
              1038
            ],
            "loc": {
              "end": {
                "column": 56,
                "line": 37
              },
              "start": {
                "column": 4,
                "line": 37
              }
            }
          },
          {
            "type": "ClassDeclaration",
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "range": [
                1069,
                1156
              ],
              "body": [
                {
                  "type": "MethodDefinition",
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo3",
                    "optional": false,
                    "range": [
                      1079,
                      1083
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 40
                      },
                      "start": {
                        "column": 8,
                        "line": 40
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
                      1083,
                      1150
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
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "range": [
                                  1137,
                                  1138
                                ],
                                "loc": {
                                  "end": {
                                    "column": 23,
                                    "line": 41
                                  },
                                  "start": {
                                    "column": 22,
                                    "line": 41
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
                                1134,
                                1136
                              ],
                              "loc": {
                                "end": {
                                  "column": 21,
                                  "line": 41
                                },
                                "start": {
                                  "column": 19,
                                  "line": 41
                                }
                              }
                            },
                            "optional": false,
                            "range": [
                              1134,
                              1139
                            ],
                            "loc": {
                              "end": {
                                "column": 24,
                                "line": 41
                              },
                              "start": {
                                "column": 19,
                                "line": 41
                              }
                            }
                          },
                          "range": [
                            1127,
                            1140
                          ],
                          "loc": {
                            "end": {
                              "column": 25,
                              "line": 41
                            },
                            "start": {
                              "column": 12,
                              "line": 41
                            }
                          }
                        }
                      ],
                      "range": [
                        1113,
                        1150
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 42
                        },
                        "start": {
                          "column": 42,
                          "line": 40
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
                              "column": 17,
                              "line": 40
                            },
                            "start": {
                              "column": 14,
                              "line": 40
                            }
                          },
                          "range": [
                            1085,
                            1088
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "range": [
                                1087,
                                1088
                              ],
                              "loc": {
                                "end": {
                                  "column": 17,
                                  "line": 40
                                },
                                "start": {
                                  "column": 16,
                                  "line": 40
                                }
                              }
                            },
                            "range": [
                              1087,
                              1088
                            ],
                            "loc": {
                              "end": {
                                "column": 17,
                                "line": 40
                              },
                              "start": {
                                "column": 16,
                                "line": 40
                              }
                            }
                          }
                        },
                        "range": [
                          1084,
                          1088
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 40
                          },
                          "start": {
                            "column": 13,
                            "line": 40
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
                              "column": 34,
                              "line": 40
                            },
                            "start": {
                              "column": 21,
                              "line": 40
                            }
                          },
                          "range": [
                            1092,
                            1105
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
                                      "column": 28,
                                      "line": 40
                                    },
                                    "start": {
                                      "column": 25,
                                      "line": 40
                                    }
                                  },
                                  "range": [
                                    1096,
                                    1099
                                  ],
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "T",
                                      "optional": false,
                                      "range": [
                                        1098,
                                        1099
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 28,
                                          "line": 40
                                        },
                                        "start": {
                                          "column": 27,
                                          "line": 40
                                        }
                                      }
                                    },
                                    "range": [
                                      1098,
                                      1099
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 28,
                                        "line": 40
                                      },
                                      "start": {
                                        "column": 27,
                                        "line": 40
                                      }
                                    }
                                  }
                                },
                                "range": [
                                  1095,
                                  1099
                                ],
                                "loc": {
                                  "end": {
                                    "column": 28,
                                    "line": 40
                                  },
                                  "start": {
                                    "column": 24,
                                    "line": 40
                                  }
                                }
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "loc": {
                                "end": {
                                  "column": 34,
                                  "line": 40
                                },
                                "start": {
                                  "column": 30,
                                  "line": 40
                                }
                              },
                              "range": [
                                1101,
                                1105
                              ],
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "U",
                                  "optional": false,
                                  "range": [
                                    1104,
                                    1105
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 34,
                                      "line": 40
                                    },
                                    "start": {
                                      "column": 33,
                                      "line": 40
                                    }
                                  }
                                },
                                "range": [
                                  1104,
                                  1105
                                ],
                                "loc": {
                                  "end": {
                                    "column": 34,
                                    "line": 40
                                  },
                                  "start": {
                                    "column": 33,
                                    "line": 40
                                  }
                                }
                              }
                            },
                            "range": [
                              1094,
                              1105
                            ],
                            "loc": {
                              "end": {
                                "column": 34,
                                "line": 40
                              },
                              "start": {
                                "column": 23,
                                "line": 40
                              }
                            }
                          }
                        },
                        "range": [
                          1090,
                          1105
                        ],
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 40
                          },
                          "start": {
                            "column": 19,
                            "line": 40
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
                              "line": 40
                            },
                            "start": {
                              "column": 37,
                              "line": 40
                            }
                          },
                          "range": [
                            1108,
                            1111
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "range": [
                                1110,
                                1111
                              ],
                              "loc": {
                                "end": {
                                  "column": 40,
                                  "line": 40
                                },
                                "start": {
                                  "column": 39,
                                  "line": 40
                                }
                              }
                            },
                            "range": [
                              1110,
                              1111
                            ],
                            "loc": {
                              "end": {
                                "column": 40,
                                "line": 40
                              },
                              "start": {
                                "column": 39,
                                "line": 40
                              }
                            }
                          }
                        },
                        "range": [
                          1107,
                          1111
                        ],
                        "loc": {
                          "end": {
                            "column": 40,
                            "line": 40
                          },
                          "start": {
                            "column": 36,
                            "line": 40
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 42
                      },
                      "start": {
                        "column": 12,
                        "line": 40
                      }
                    }
                  },
                  "range": [
                    1079,
                    1150
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 42
                    },
                    "start": {
                      "column": 8,
                      "line": 40
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 43
                },
                "start": {
                  "column": 19,
                  "line": 39
                }
              }
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C2",
              "optional": false,
              "range": [
                1060,
                1062
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 39
                },
                "start": {
                  "column": 10,
                  "line": 39
                }
              }
            },
            "implements": [],
            "superClass": null,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 18,
                  "line": 39
                },
                "start": {
                  "column": 12,
                  "line": 39
                }
              },
              "range": [
                1062,
                1068
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
                      1063,
                      1064
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 39
                      },
                      "start": {
                        "column": 13,
                        "line": 39
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    1063,
                    1064
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 39
                    },
                    "start": {
                      "column": 13,
                      "line": 39
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
                      1066,
                      1067
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 39
                      },
                      "start": {
                        "column": 16,
                        "line": 39
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    1066,
                    1067
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 39
                    },
                    "start": {
                      "column": 16,
                      "line": 39
                    }
                  }
                }
              ]
            },
            "range": [
              1054,
              1156
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 43
              },
              "start": {
                "column": 4,
                "line": 39
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
                  "name": "c2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 45
                      },
                      "start": {
                        "column": 10,
                        "line": 45
                      }
                    },
                    "range": [
                      1168,
                      1188
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          1172,
                          1188
                        ],
                        "params": [
                          {
                            "type": "TSNumberKeyword",
                            "range": [
                              1173,
                              1179
                            ],
                            "loc": {
                              "end": {
                                "column": 21,
                                "line": 45
                              },
                              "start": {
                                "column": 15,
                                "line": 45
                              }
                            }
                          },
                          {
                            "type": "TSStringKeyword",
                            "range": [
                              1181,
                              1187
                            ],
                            "loc": {
                              "end": {
                                "column": 29,
                                "line": 45
                              },
                              "start": {
                                "column": 23,
                                "line": 45
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 45
                          },
                          "start": {
                            "column": 14,
                            "line": 45
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C2",
                        "optional": false,
                        "range": [
                          1170,
                          1172
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 45
                          },
                          "start": {
                            "column": 12,
                            "line": 45
                          }
                        }
                      },
                      "range": [
                        1170,
                        1188
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
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
                    1166,
                    1188
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 45
                    },
                    "start": {
                      "column": 8,
                      "line": 45
                    }
                  }
                },
                "init": null,
                "range": [
                  1166,
                  1188
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 45
                  },
                  "start": {
                    "column": 8,
                    "line": 45
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              1162,
              1189
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 45
              },
              "start": {
                "column": 4,
                "line": 45
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
                    1198,
                    1200
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 46
                    },
                    "start": {
                      "column": 8,
                      "line": 46
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
                        1211,
                        1212
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 46
                        },
                        "start": {
                          "column": 21,
                          "line": 46
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
                          1227,
                          1229
                        ],
                        "loc": {
                          "end": {
                            "column": 39,
                            "line": 46
                          },
                          "start": {
                            "column": 37,
                            "line": 46
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
                                "column": 32,
                                "line": 46
                              },
                              "start": {
                                "column": 29,
                                "line": 46
                              }
                            },
                            "range": [
                              1219,
                              1222
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Z",
                                "optional": false,
                                "range": [
                                  1221,
                                  1222
                                ],
                                "loc": {
                                  "end": {
                                    "column": 32,
                                    "line": 46
                                  },
                                  "start": {
                                    "column": 31,
                                    "line": 46
                                  }
                                }
                              },
                              "range": [
                                1221,
                                1222
                              ],
                              "loc": {
                                "end": {
                                  "column": 32,
                                  "line": 46
                                },
                                "start": {
                                  "column": 31,
                                  "line": 46
                                }
                              }
                            }
                          },
                          "range": [
                            1218,
                            1222
                          ],
                          "loc": {
                            "end": {
                              "column": 32,
                              "line": 46
                            },
                            "start": {
                              "column": 28,
                              "line": 46
                            }
                          }
                        }
                      ],
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 46
                          },
                          "start": {
                            "column": 24,
                            "line": 46
                          }
                        },
                        "range": [
                          1214,
                          1217
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
                                1215,
                                1216
                              ],
                              "loc": {
                                "end": {
                                  "column": 26,
                                  "line": 46
                                },
                                "start": {
                                  "column": 25,
                                  "line": 46
                                }
                              }
                            },
                            "out": false,
                            "range": [
                              1215,
                              1216
                            ],
                            "loc": {
                              "end": {
                                "column": 26,
                                "line": 46
                              },
                              "start": {
                                "column": 25,
                                "line": 46
                              }
                            }
                          }
                        ]
                      },
                      "range": [
                        1214,
                        1229
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 46
                        },
                        "start": {
                          "column": 24,
                          "line": 46
                        }
                      }
                    },
                    {
                      "type": "Literal",
                      "raw": "''",
                      "value": "",
                      "range": [
                        1231,
                        1233
                      ],
                      "loc": {
                        "end": {
                          "column": 43,
                          "line": 46
                        },
                        "start": {
                          "column": 41,
                          "line": 46
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
                      "name": "c2",
                      "optional": false,
                      "range": [
                        1203,
                        1205
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 46
                        },
                        "start": {
                          "column": 13,
                          "line": 46
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo3",
                      "optional": false,
                      "range": [
                        1206,
                        1210
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 46
                        },
                        "start": {
                          "column": 16,
                          "line": 46
                        }
                      }
                    },
                    "range": [
                      1203,
                      1210
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 46
                      },
                      "start": {
                        "column": 13,
                        "line": 46
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    1203,
                    1234
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 46
                    },
                    "start": {
                      "column": 13,
                      "line": 46
                    }
                  }
                },
                "range": [
                  1198,
                  1234
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 46
                  },
                  "start": {
                    "column": 8,
                    "line": 46
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              1194,
              1235
            ],
            "loc": {
              "end": {
                "column": 45,
                "line": 46
              },
              "start": {
                "column": 4,
                "line": 46
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
                    1254,
                    1256
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 47
                    },
                    "start": {
                      "column": 8,
                      "line": 47
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
                        1267,
                        1268
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 47
                        },
                        "start": {
                          "column": 21,
                          "line": 47
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
                                1292,
                                1294
                              ],
                              "loc": {
                                "end": {
                                  "column": 48,
                                  "line": 47
                                },
                                "start": {
                                  "column": 46,
                                  "line": 47
                                }
                              }
                            },
                            "range": [
                              1285,
                              1294
                            ],
                            "loc": {
                              "end": {
                                "column": 48,
                                "line": 47
                              },
                              "start": {
                                "column": 39,
                                "line": 47
                              }
                            }
                          }
                        ],
                        "range": [
                          1283,
                          1296
                        ],
                        "loc": {
                          "end": {
                            "column": 50,
                            "line": 47
                          },
                          "start": {
                            "column": 37,
                            "line": 47
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
                            1280,
                            1281
                          ],
                          "loc": {
                            "end": {
                              "column": 35,
                              "line": 47
                            },
                            "start": {
                              "column": 34,
                              "line": 47
                            }
                          }
                        }
                      ],
                      "range": [
                        1270,
                        1296
                      ],
                      "loc": {
                        "end": {
                          "column": 50,
                          "line": 47
                        },
                        "start": {
                          "column": 24,
                          "line": 47
                        }
                      }
                    },
                    {
                      "type": "Literal",
                      "raw": "''",
                      "value": "",
                      "range": [
                        1298,
                        1300
                      ],
                      "loc": {
                        "end": {
                          "column": 54,
                          "line": 47
                        },
                        "start": {
                          "column": 52,
                          "line": 47
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
                      "name": "c2",
                      "optional": false,
                      "range": [
                        1259,
                        1261
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 47
                        },
                        "start": {
                          "column": 13,
                          "line": 47
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo3",
                      "optional": false,
                      "range": [
                        1262,
                        1266
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 47
                        },
                        "start": {
                          "column": 16,
                          "line": 47
                        }
                      }
                    },
                    "range": [
                      1259,
                      1266
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 47
                      },
                      "start": {
                        "column": 13,
                        "line": 47
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    1259,
                    1301
                  ],
                  "loc": {
                    "end": {
                      "column": 55,
                      "line": 47
                    },
                    "start": {
                      "column": 13,
                      "line": 47
                    }
                  }
                },
                "range": [
                  1254,
                  1301
                ],
                "loc": {
                  "end": {
                    "column": 55,
                    "line": 47
                  },
                  "start": {
                    "column": 8,
                    "line": 47
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              1250,
              1302
            ],
            "loc": {
              "end": {
                "column": 56,
                "line": 47
              },
              "start": {
                "column": 4,
                "line": 47
              }
            }
          },
          {
            "type": "ClassDeclaration",
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "range": [
                1333,
                1425
              ],
              "body": [
                {
                  "type": "MethodDefinition",
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo3",
                    "optional": false,
                    "range": [
                      1343,
                      1347
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 50
                      },
                      "start": {
                        "column": 8,
                        "line": 50
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
                      1347,
                      1419
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
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "range": [
                                  1406,
                                  1407
                                ],
                                "loc": {
                                  "end": {
                                    "column": 23,
                                    "line": 51
                                  },
                                  "start": {
                                    "column": 22,
                                    "line": 51
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
                                1403,
                                1405
                              ],
                              "loc": {
                                "end": {
                                  "column": 21,
                                  "line": 51
                                },
                                "start": {
                                  "column": 19,
                                  "line": 51
                                }
                              }
                            },
                            "optional": false,
                            "range": [
                              1403,
                              1408
                            ],
                            "loc": {
                              "end": {
                                "column": 24,
                                "line": 51
                              },
                              "start": {
                                "column": 19,
                                "line": 51
                              }
                            }
                          },
                          "range": [
                            1396,
                            1409
                          ],
                          "loc": {
                            "end": {
                              "column": 25,
                              "line": 51
                            },
                            "start": {
                              "column": 12,
                              "line": 51
                            }
                          }
                        }
                      ],
                      "range": [
                        1382,
                        1419
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 52
                        },
                        "start": {
                          "column": 47,
                          "line": 50
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
                              "column": 22,
                              "line": 50
                            },
                            "start": {
                              "column": 19,
                              "line": 50
                            }
                          },
                          "range": [
                            1354,
                            1357
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "range": [
                                1356,
                                1357
                              ],
                              "loc": {
                                "end": {
                                  "column": 22,
                                  "line": 50
                                },
                                "start": {
                                  "column": 21,
                                  "line": 50
                                }
                              }
                            },
                            "range": [
                              1356,
                              1357
                            ],
                            "loc": {
                              "end": {
                                "column": 22,
                                "line": 50
                              },
                              "start": {
                                "column": 21,
                                "line": 50
                              }
                            }
                          }
                        },
                        "range": [
                          1353,
                          1357
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 50
                          },
                          "start": {
                            "column": 18,
                            "line": 50
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
                              "column": 39,
                              "line": 50
                            },
                            "start": {
                              "column": 26,
                              "line": 50
                            }
                          },
                          "range": [
                            1361,
                            1374
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
                                      "column": 33,
                                      "line": 50
                                    },
                                    "start": {
                                      "column": 30,
                                      "line": 50
                                    }
                                  },
                                  "range": [
                                    1365,
                                    1368
                                  ],
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "T",
                                      "optional": false,
                                      "range": [
                                        1367,
                                        1368
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 33,
                                          "line": 50
                                        },
                                        "start": {
                                          "column": 32,
                                          "line": 50
                                        }
                                      }
                                    },
                                    "range": [
                                      1367,
                                      1368
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 33,
                                        "line": 50
                                      },
                                      "start": {
                                        "column": 32,
                                        "line": 50
                                      }
                                    }
                                  }
                                },
                                "range": [
                                  1364,
                                  1368
                                ],
                                "loc": {
                                  "end": {
                                    "column": 33,
                                    "line": 50
                                  },
                                  "start": {
                                    "column": 29,
                                    "line": 50
                                  }
                                }
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "loc": {
                                "end": {
                                  "column": 39,
                                  "line": 50
                                },
                                "start": {
                                  "column": 35,
                                  "line": 50
                                }
                              },
                              "range": [
                                1370,
                                1374
                              ],
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "U",
                                  "optional": false,
                                  "range": [
                                    1373,
                                    1374
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 39,
                                      "line": 50
                                    },
                                    "start": {
                                      "column": 38,
                                      "line": 50
                                    }
                                  }
                                },
                                "range": [
                                  1373,
                                  1374
                                ],
                                "loc": {
                                  "end": {
                                    "column": 39,
                                    "line": 50
                                  },
                                  "start": {
                                    "column": 38,
                                    "line": 50
                                  }
                                }
                              }
                            },
                            "range": [
                              1363,
                              1374
                            ],
                            "loc": {
                              "end": {
                                "column": 39,
                                "line": 50
                              },
                              "start": {
                                "column": 28,
                                "line": 50
                              }
                            }
                          }
                        },
                        "range": [
                          1359,
                          1374
                        ],
                        "loc": {
                          "end": {
                            "column": 39,
                            "line": 50
                          },
                          "start": {
                            "column": 24,
                            "line": 50
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
                              "column": 45,
                              "line": 50
                            },
                            "start": {
                              "column": 42,
                              "line": 50
                            }
                          },
                          "range": [
                            1377,
                            1380
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "range": [
                                1379,
                                1380
                              ],
                              "loc": {
                                "end": {
                                  "column": 45,
                                  "line": 50
                                },
                                "start": {
                                  "column": 44,
                                  "line": 50
                                }
                              }
                            },
                            "range": [
                              1379,
                              1380
                            ],
                            "loc": {
                              "end": {
                                "column": 45,
                                "line": 50
                              },
                              "start": {
                                "column": 44,
                                "line": 50
                              }
                            }
                          }
                        },
                        "range": [
                          1376,
                          1380
                        ],
                        "loc": {
                          "end": {
                            "column": 45,
                            "line": 50
                          },
                          "start": {
                            "column": 41,
                            "line": 50
                          }
                        }
                      }
                    ],
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 50
                        },
                        "start": {
                          "column": 12,
                          "line": 50
                        }
                      },
                      "range": [
                        1347,
                        1352
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
                              1348,
                              1349
                            ],
                            "loc": {
                              "end": {
                                "column": 14,
                                "line": 50
                              },
                              "start": {
                                "column": 13,
                                "line": 50
                              }
                            }
                          },
                          "out": false,
                          "range": [
                            1348,
                            1349
                          ],
                          "loc": {
                            "end": {
                              "column": 14,
                              "line": 50
                            },
                            "start": {
                              "column": 13,
                              "line": 50
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
                              1350,
                              1351
                            ],
                            "loc": {
                              "end": {
                                "column": 16,
                                "line": 50
                              },
                              "start": {
                                "column": 15,
                                "line": 50
                              }
                            }
                          },
                          "out": false,
                          "range": [
                            1350,
                            1351
                          ],
                          "loc": {
                            "end": {
                              "column": 16,
                              "line": 50
                            },
                            "start": {
                              "column": 15,
                              "line": 50
                            }
                          }
                        }
                      ]
                    },
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 52
                      },
                      "start": {
                        "column": 12,
                        "line": 50
                      }
                    }
                  },
                  "range": [
                    1343,
                    1419
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 52
                    },
                    "start": {
                      "column": 8,
                      "line": 50
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 53
                },
                "start": {
                  "column": 19,
                  "line": 49
                }
              }
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C3",
              "optional": false,
              "range": [
                1324,
                1326
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 49
                },
                "start": {
                  "column": 10,
                  "line": 49
                }
              }
            },
            "implements": [],
            "superClass": null,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 18,
                  "line": 49
                },
                "start": {
                  "column": 12,
                  "line": 49
                }
              },
              "range": [
                1326,
                1332
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
                      1327,
                      1328
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 49
                      },
                      "start": {
                        "column": 13,
                        "line": 49
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    1327,
                    1328
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 49
                    },
                    "start": {
                      "column": 13,
                      "line": 49
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
                      1330,
                      1331
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 49
                      },
                      "start": {
                        "column": 16,
                        "line": 49
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    1330,
                    1331
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 49
                    },
                    "start": {
                      "column": 16,
                      "line": 49
                    }
                  }
                }
              ]
            },
            "range": [
              1318,
              1425
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 53
              },
              "start": {
                "column": 4,
                "line": 49
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
                  "name": "c3",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 54
                      },
                      "start": {
                        "column": 10,
                        "line": 54
                      }
                    },
                    "range": [
                      1436,
                      1456
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          1440,
                          1456
                        ],
                        "params": [
                          {
                            "type": "TSNumberKeyword",
                            "range": [
                              1441,
                              1447
                            ],
                            "loc": {
                              "end": {
                                "column": 21,
                                "line": 54
                              },
                              "start": {
                                "column": 15,
                                "line": 54
                              }
                            }
                          },
                          {
                            "type": "TSStringKeyword",
                            "range": [
                              1449,
                              1455
                            ],
                            "loc": {
                              "end": {
                                "column": 29,
                                "line": 54
                              },
                              "start": {
                                "column": 23,
                                "line": 54
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 54
                          },
                          "start": {
                            "column": 14,
                            "line": 54
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C3",
                        "optional": false,
                        "range": [
                          1438,
                          1440
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 54
                          },
                          "start": {
                            "column": 12,
                            "line": 54
                          }
                        }
                      },
                      "range": [
                        1438,
                        1456
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
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
                    1434,
                    1456
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 54
                    },
                    "start": {
                      "column": 8,
                      "line": 54
                    }
                  }
                },
                "init": null,
                "range": [
                  1434,
                  1456
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 54
                  },
                  "start": {
                    "column": 8,
                    "line": 54
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              1430,
              1457
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 54
              },
              "start": {
                "column": 4,
                "line": 54
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
                          1510,
                          1513
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 57
                          },
                          "start": {
                            "column": 12,
                            "line": 57
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
                              1523,
                              1524
                            ],
                            "loc": {
                              "end": {
                                "column": 26,
                                "line": 57
                              },
                              "start": {
                                "column": 25,
                                "line": 57
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
                                1536,
                                1538
                              ],
                              "loc": {
                                "end": {
                                  "column": 40,
                                  "line": 57
                                },
                                "start": {
                                  "column": 38,
                                  "line": 57
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
                                      "column": 33,
                                      "line": 57
                                    },
                                    "start": {
                                      "column": 30,
                                      "line": 57
                                    }
                                  },
                                  "range": [
                                    1528,
                                    1531
                                  ],
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "T",
                                      "optional": false,
                                      "range": [
                                        1530,
                                        1531
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 33,
                                          "line": 57
                                        },
                                        "start": {
                                          "column": 32,
                                          "line": 57
                                        }
                                      }
                                    },
                                    "range": [
                                      1530,
                                      1531
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 33,
                                        "line": 57
                                      },
                                      "start": {
                                        "column": 32,
                                        "line": 57
                                      }
                                    }
                                  }
                                },
                                "range": [
                                  1527,
                                  1531
                                ],
                                "loc": {
                                  "end": {
                                    "column": 33,
                                    "line": 57
                                  },
                                  "start": {
                                    "column": 29,
                                    "line": 57
                                  }
                                }
                              }
                            ],
                            "range": [
                              1526,
                              1538
                            ],
                            "loc": {
                              "end": {
                                "column": 40,
                                "line": 57
                              },
                              "start": {
                                "column": 28,
                                "line": 57
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
                            "name": "c",
                            "optional": false,
                            "range": [
                              1516,
                              1517
                            ],
                            "loc": {
                              "end": {
                                "column": 19,
                                "line": 57
                              },
                              "start": {
                                "column": 18,
                                "line": 57
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "foo2",
                            "optional": false,
                            "range": [
                              1518,
                              1522
                            ],
                            "loc": {
                              "end": {
                                "column": 24,
                                "line": 57
                              },
                              "start": {
                                "column": 20,
                                "line": 57
                              }
                            }
                          },
                          "range": [
                            1516,
                            1522
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 57
                            },
                            "start": {
                              "column": 18,
                              "line": 57
                            }
                          }
                        },
                        "optional": false,
                        "range": [
                          1516,
                          1539
                        ],
                        "loc": {
                          "end": {
                            "column": 41,
                            "line": 57
                          },
                          "start": {
                            "column": 18,
                            "line": 57
                          }
                        }
                      },
                      "range": [
                        1510,
                        1539
                      ],
                      "loc": {
                        "end": {
                          "column": 41,
                          "line": 57
                        },
                        "start": {
                          "column": 12,
                          "line": 57
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "var",
                  "range": [
                    1506,
                    1540
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 57
                    },
                    "start": {
                      "column": 8,
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
                        "name": "r10",
                        "optional": false,
                        "range": [
                          1562,
                          1565
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 58
                          },
                          "start": {
                            "column": 12,
                            "line": 58
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
                              1575,
                              1576
                            ],
                            "loc": {
                              "end": {
                                "column": 26,
                                "line": 58
                              },
                              "start": {
                                "column": 25,
                                "line": 58
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
                                1585,
                                1587
                              ],
                              "loc": {
                                "end": {
                                  "column": 37,
                                  "line": 58
                                },
                                "start": {
                                  "column": 35,
                                  "line": 58
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
                                  1579,
                                  1580
                                ],
                                "loc": {
                                  "end": {
                                    "column": 30,
                                    "line": 58
                                  },
                                  "start": {
                                    "column": 29,
                                    "line": 58
                                  }
                                }
                              }
                            ],
                            "range": [
                              1578,
                              1587
                            ],
                            "loc": {
                              "end": {
                                "column": 37,
                                "line": 58
                              },
                              "start": {
                                "column": 28,
                                "line": 58
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
                            "name": "c",
                            "optional": false,
                            "range": [
                              1568,
                              1569
                            ],
                            "loc": {
                              "end": {
                                "column": 19,
                                "line": 58
                              },
                              "start": {
                                "column": 18,
                                "line": 58
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "foo2",
                            "optional": false,
                            "range": [
                              1570,
                              1574
                            ],
                            "loc": {
                              "end": {
                                "column": 24,
                                "line": 58
                              },
                              "start": {
                                "column": 20,
                                "line": 58
                              }
                            }
                          },
                          "range": [
                            1568,
                            1574
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 58
                            },
                            "start": {
                              "column": 18,
                              "line": 58
                            }
                          }
                        },
                        "optional": false,
                        "range": [
                          1568,
                          1588
                        ],
                        "loc": {
                          "end": {
                            "column": 38,
                            "line": 58
                          },
                          "start": {
                            "column": 18,
                            "line": 58
                          }
                        }
                      },
                      "range": [
                        1562,
                        1588
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 58
                        },
                        "start": {
                          "column": 12,
                          "line": 58
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "var",
                  "range": [
                    1558,
                    1589
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 58
                    },
                    "start": {
                      "column": 8,
                      "line": 58
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
                          1613,
                          1616
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 60
                          },
                          "start": {
                            "column": 12,
                            "line": 60
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
                              1627,
                              1628
                            ],
                            "loc": {
                              "end": {
                                "column": 27,
                                "line": 60
                              },
                              "start": {
                                "column": 26,
                                "line": 60
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
                                1640,
                                1642
                              ],
                              "loc": {
                                "end": {
                                  "column": 41,
                                  "line": 60
                                },
                                "start": {
                                  "column": 39,
                                  "line": 60
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
                                      "column": 34,
                                      "line": 60
                                    },
                                    "start": {
                                      "column": 31,
                                      "line": 60
                                    }
                                  },
                                  "range": [
                                    1632,
                                    1635
                                  ],
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "T",
                                      "optional": false,
                                      "range": [
                                        1634,
                                        1635
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 34,
                                          "line": 60
                                        },
                                        "start": {
                                          "column": 33,
                                          "line": 60
                                        }
                                      }
                                    },
                                    "range": [
                                      1634,
                                      1635
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 34,
                                        "line": 60
                                      },
                                      "start": {
                                        "column": 33,
                                        "line": 60
                                      }
                                    }
                                  }
                                },
                                "range": [
                                  1631,
                                  1635
                                ],
                                "loc": {
                                  "end": {
                                    "column": 34,
                                    "line": 60
                                  },
                                  "start": {
                                    "column": 30,
                                    "line": 60
                                  }
                                }
                              }
                            ],
                            "range": [
                              1630,
                              1642
                            ],
                            "loc": {
                              "end": {
                                "column": 41,
                                "line": 60
                              },
                              "start": {
                                "column": 29,
                                "line": 60
                              }
                            }
                          },
                          {
                            "type": "Literal",
                            "raw": "''",
                            "value": "",
                            "range": [
                              1644,
                              1646
                            ],
                            "loc": {
                              "end": {
                                "column": 45,
                                "line": 60
                              },
                              "start": {
                                "column": 43,
                                "line": 60
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
                            "name": "c3",
                            "optional": false,
                            "range": [
                              1619,
                              1621
                            ],
                            "loc": {
                              "end": {
                                "column": 20,
                                "line": 60
                              },
                              "start": {
                                "column": 18,
                                "line": 60
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "foo3",
                            "optional": false,
                            "range": [
                              1622,
                              1626
                            ],
                            "loc": {
                              "end": {
                                "column": 25,
                                "line": 60
                              },
                              "start": {
                                "column": 21,
                                "line": 60
                              }
                            }
                          },
                          "range": [
                            1619,
                            1626
                          ],
                          "loc": {
                            "end": {
                              "column": 25,
                              "line": 60
                            },
                            "start": {
                              "column": 18,
                              "line": 60
                            }
                          }
                        },
                        "optional": false,
                        "range": [
                          1619,
                          1647
                        ],
                        "loc": {
                          "end": {
                            "column": 46,
                            "line": 60
                          },
                          "start": {
                            "column": 18,
                            "line": 60
                          }
                        }
                      },
                      "range": [
                        1613,
                        1647
                      ],
                      "loc": {
                        "end": {
                          "column": 46,
                          "line": 60
                        },
                        "start": {
                          "column": 12,
                          "line": 60
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "var",
                  "range": [
                    1609,
                    1648
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 60
                    },
                    "start": {
                      "column": 8,
                      "line": 60
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
                          1670,
                          1674
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 61
                          },
                          "start": {
                            "column": 12,
                            "line": 61
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
                              1685,
                              1686
                            ],
                            "loc": {
                              "end": {
                                "column": 28,
                                "line": 61
                              },
                              "start": {
                                "column": 27,
                                "line": 61
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
                                1698,
                                1700
                              ],
                              "loc": {
                                "end": {
                                  "column": 42,
                                  "line": 61
                                },
                                "start": {
                                  "column": 40,
                                  "line": 61
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
                                      "column": 35,
                                      "line": 61
                                    },
                                    "start": {
                                      "column": 32,
                                      "line": 61
                                    }
                                  },
                                  "range": [
                                    1690,
                                    1693
                                  ],
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "T",
                                      "optional": false,
                                      "range": [
                                        1692,
                                        1693
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 35,
                                          "line": 61
                                        },
                                        "start": {
                                          "column": 34,
                                          "line": 61
                                        }
                                      }
                                    },
                                    "range": [
                                      1692,
                                      1693
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 35,
                                        "line": 61
                                      },
                                      "start": {
                                        "column": 34,
                                        "line": 61
                                      }
                                    }
                                  }
                                },
                                "range": [
                                  1689,
                                  1693
                                ],
                                "loc": {
                                  "end": {
                                    "column": 35,
                                    "line": 61
                                  },
                                  "start": {
                                    "column": 31,
                                    "line": 61
                                  }
                                }
                              }
                            ],
                            "range": [
                              1688,
                              1700
                            ],
                            "loc": {
                              "end": {
                                "column": 42,
                                "line": 61
                              },
                              "start": {
                                "column": 30,
                                "line": 61
                              }
                            }
                          },
                          {
                            "type": "Literal",
                            "raw": "1",
                            "value": 1,
                            "range": [
                              1702,
                              1703
                            ],
                            "loc": {
                              "end": {
                                "column": 45,
                                "line": 61
                              },
                              "start": {
                                "column": 44,
                                "line": 61
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
                            "name": "c3",
                            "optional": false,
                            "range": [
                              1677,
                              1679
                            ],
                            "loc": {
                              "end": {
                                "column": 21,
                                "line": 61
                              },
                              "start": {
                                "column": 19,
                                "line": 61
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "foo3",
                            "optional": false,
                            "range": [
                              1680,
                              1684
                            ],
                            "loc": {
                              "end": {
                                "column": 26,
                                "line": 61
                              },
                              "start": {
                                "column": 22,
                                "line": 61
                              }
                            }
                          },
                          "range": [
                            1677,
                            1684
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 61
                            },
                            "start": {
                              "column": 19,
                              "line": 61
                            }
                          }
                        },
                        "optional": false,
                        "range": [
                          1677,
                          1704
                        ],
                        "loc": {
                          "end": {
                            "column": 46,
                            "line": 61
                          },
                          "start": {
                            "column": 19,
                            "line": 61
                          }
                        }
                      },
                      "range": [
                        1670,
                        1704
                      ],
                      "loc": {
                        "end": {
                          "column": 46,
                          "line": 61
                        },
                        "start": {
                          "column": 12,
                          "line": 61
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "var",
                  "range": [
                    1666,
                    1705
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 61
                    },
                    "start": {
                      "column": 8,
                      "line": 61
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
                          1727,
                          1730
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 62
                          },
                          "start": {
                            "column": 12,
                            "line": 62
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
                              1741,
                              1742
                            ],
                            "loc": {
                              "end": {
                                "column": 27,
                                "line": 62
                              },
                              "start": {
                                "column": 26,
                                "line": 62
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
                                      1766,
                                      1768
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 53,
                                        "line": 62
                                      },
                                      "start": {
                                        "column": 51,
                                        "line": 62
                                      }
                                    }
                                  },
                                  "range": [
                                    1759,
                                    1768
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 53,
                                      "line": 62
                                    },
                                    "start": {
                                      "column": 44,
                                      "line": 62
                                    }
                                  }
                                }
                              ],
                              "range": [
                                1757,
                                1770
                              ],
                              "loc": {
                                "end": {
                                  "column": 55,
                                  "line": 62
                                },
                                "start": {
                                  "column": 42,
                                  "line": 62
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
                                  1754,
                                  1755
                                ],
                                "loc": {
                                  "end": {
                                    "column": 40,
                                    "line": 62
                                  },
                                  "start": {
                                    "column": 39,
                                    "line": 62
                                  }
                                }
                              }
                            ],
                            "range": [
                              1744,
                              1770
                            ],
                            "loc": {
                              "end": {
                                "column": 55,
                                "line": 62
                              },
                              "start": {
                                "column": 29,
                                "line": 62
                              }
                            }
                          },
                          {
                            "type": "Literal",
                            "raw": "1",
                            "value": 1,
                            "range": [
                              1772,
                              1773
                            ],
                            "loc": {
                              "end": {
                                "column": 58,
                                "line": 62
                              },
                              "start": {
                                "column": 57,
                                "line": 62
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
                            "name": "c3",
                            "optional": false,
                            "range": [
                              1733,
                              1735
                            ],
                            "loc": {
                              "end": {
                                "column": 20,
                                "line": 62
                              },
                              "start": {
                                "column": 18,
                                "line": 62
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "foo3",
                            "optional": false,
                            "range": [
                              1736,
                              1740
                            ],
                            "loc": {
                              "end": {
                                "column": 25,
                                "line": 62
                              },
                              "start": {
                                "column": 21,
                                "line": 62
                              }
                            }
                          },
                          "range": [
                            1733,
                            1740
                          ],
                          "loc": {
                            "end": {
                              "column": 25,
                              "line": 62
                            },
                            "start": {
                              "column": 18,
                              "line": 62
                            }
                          }
                        },
                        "optional": false,
                        "range": [
                          1733,
                          1774
                        ],
                        "loc": {
                          "end": {
                            "column": 59,
                            "line": 62
                          },
                          "start": {
                            "column": 18,
                            "line": 62
                          }
                        }
                      },
                      "range": [
                        1727,
                        1774
                      ],
                      "loc": {
                        "end": {
                          "column": 59,
                          "line": 62
                        },
                        "start": {
                          "column": 12,
                          "line": 62
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "var",
                  "range": [
                    1723,
                    1775
                  ],
                  "loc": {
                    "end": {
                      "column": 60,
                      "line": 62
                    },
                    "start": {
                      "column": 8,
                      "line": 62
                    }
                  }
                }
              ],
              "range": [
                1496,
                1790
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 63
                },
                "start": {
                  "column": 37,
                  "line": 56
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
                1472,
                1477
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 56
                },
                "start": {
                  "column": 13,
                  "line": 56
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
                      "column": 29,
                      "line": 56
                    },
                    "start": {
                      "column": 26,
                      "line": 56
                    }
                  },
                  "range": [
                    1485,
                    1488
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "range": [
                        1487,
                        1488
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 56
                        },
                        "start": {
                          "column": 28,
                          "line": 56
                        }
                      }
                    },
                    "range": [
                      1487,
                      1488
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 56
                      },
                      "start": {
                        "column": 28,
                        "line": 56
                      }
                    }
                  }
                },
                "range": [
                  1484,
                  1488
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 56
                  },
                  "start": {
                    "column": 25,
                    "line": 56
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
                      "column": 35,
                      "line": 56
                    },
                    "start": {
                      "column": 32,
                      "line": 56
                    }
                  },
                  "range": [
                    1491,
                    1494
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "range": [
                        1493,
                        1494
                      ],
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 56
                        },
                        "start": {
                          "column": 34,
                          "line": 56
                        }
                      }
                    },
                    "range": [
                      1493,
                      1494
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 56
                      },
                      "start": {
                        "column": 34,
                        "line": 56
                      }
                    }
                  }
                },
                "range": [
                  1490,
                  1494
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 56
                  },
                  "start": {
                    "column": 31,
                    "line": 56
                  }
                }
              }
            ],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 24,
                  "line": 56
                },
                "start": {
                  "column": 18,
                  "line": 56
                }
              },
              "range": [
                1477,
                1483
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
                      1478,
                      1479
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 56
                      },
                      "start": {
                        "column": 19,
                        "line": 56
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    1478,
                    1479
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 56
                    },
                    "start": {
                      "column": 19,
                      "line": 56
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
                      1481,
                      1482
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 56
                      },
                      "start": {
                        "column": 22,
                        "line": 56
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    1481,
                    1482
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 56
                    },
                    "start": {
                      "column": 22,
                      "line": 56
                    }
                  }
                }
              ]
            },
            "range": [
              1463,
              1790
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 63
              },
              "start": {
                "column": 4,
                "line": 56
              }
            }
          }
        ],
        "range": [
          673,
          1792
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 64
          },
          "start": {
            "column": 22,
            "line": 27
          }
        }
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          658,
          672
        ],
        "decorators": [],
        "name": "WithCandidates",
        "optional": false,
        "loc": {
          "end": {
            "column": 21,
            "line": 27
          },
          "start": {
            "column": 7,
            "line": 27
          }
        }
      },
      "kind": "module",
      "range": [
        651,
        1792
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 64
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
      "column": 1,
      "line": 64
    },
    "start": {
      "column": 0,
      "line": 4
    }
  },
  "hashbang": null
}
```
