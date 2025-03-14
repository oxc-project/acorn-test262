__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    294
  ],
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
            "name": "obj",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 57,
                  "line": 1
                },
                "start": {
                  "column": 7,
                  "line": 1
                }
              },
              "range": [
                7,
                57
              ],
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSMethodSignature",
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "f",
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
                        "kind": "method",
                        "optional": false,
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
                                  "column": 22,
                                  "line": 1
                                },
                                "start": {
                                  "column": 14,
                                  "line": 1
                                }
                              },
                              "range": [
                                14,
                                22
                              ],
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "range": [
                                  16,
                                  22
                                ],
                                "loc": {
                                  "end": {
                                    "column": 22,
                                    "line": 1
                                  },
                                  "start": {
                                    "column": 16,
                                    "line": 1
                                  }
                                }
                              }
                            },
                            "range": [
                              13,
                              22
                            ],
                            "loc": {
                              "end": {
                                "column": 22,
                                "line": 1
                              },
                              "start": {
                                "column": 13,
                                "line": 1
                              }
                            }
                          }
                        ],
                        "readonly": false,
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 1
                            },
                            "start": {
                              "column": 23,
                              "line": 1
                            }
                          },
                          "range": [
                            23,
                            29
                          ],
                          "typeAnnotation": {
                            "type": "TSVoidKeyword",
                            "range": [
                              25,
                              29
                            ],
                            "loc": {
                              "end": {
                                "column": 29,
                                "line": 1
                              },
                              "start": {
                                "column": 25,
                                "line": 1
                              }
                            }
                          }
                        },
                        "static": false,
                        "range": [
                          11,
                          29
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 1
                          },
                          "start": {
                            "column": 11,
                            "line": 1
                          }
                        }
                      }
                    ],
                    "range": [
                      9,
                      31
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 1
                      },
                      "start": {
                        "column": 9,
                        "line": 1
                      }
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        40,
                        57
                      ],
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            41,
                            47
                          ],
                          "loc": {
                            "end": {
                              "column": 47,
                              "line": 1
                            },
                            "start": {
                              "column": 41,
                              "line": 1
                            }
                          }
                        },
                        {
                          "type": "TSUnknownKeyword",
                          "range": [
                            49,
                            56
                          ],
                          "loc": {
                            "end": {
                              "column": 56,
                              "line": 1
                            },
                            "start": {
                              "column": 49,
                              "line": 1
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 57,
                          "line": 1
                        },
                        "start": {
                          "column": 40,
                          "line": 1
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Record",
                      "optional": false,
                      "range": [
                        34,
                        40
                      ],
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 1
                        },
                        "start": {
                          "column": 34,
                          "line": 1
                        }
                      }
                    },
                    "range": [
                      34,
                      57
                    ],
                    "loc": {
                      "end": {
                        "column": 57,
                        "line": 1
                      },
                      "start": {
                        "column": 34,
                        "line": 1
                      }
                    }
                  }
                ],
                "range": [
                  9,
                  57
                ],
                "loc": {
                  "end": {
                    "column": 57,
                    "line": 1
                  },
                  "start": {
                    "column": 9,
                    "line": 1
                  }
                }
              }
            },
            "range": [
              4,
              57
            ],
            "loc": {
              "end": {
                "column": 57,
                "line": 1
              },
              "start": {
                "column": 4,
                "line": 1
              }
            }
          },
          "init": {
            "type": "TSSatisfiesExpression",
            "expression": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f",
                    "optional": false,
                    "range": [
                      66,
                      67
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 2
                      },
                      "start": {
                        "column": 4,
                        "line": 2
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
                      67,
                      74
                    ],
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "range": [
                        71,
                        74
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 2
                        },
                        "start": {
                          "column": 9,
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
                        "name": "s",
                        "optional": false,
                        "range": [
                          68,
                          69
                        ],
                        "loc": {
                          "end": {
                            "column": 7,
                            "line": 2
                          },
                          "start": {
                            "column": 6,
                            "line": 2
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 2
                      },
                      "start": {
                        "column": 5,
                        "line": 2
                      }
                    }
                  },
                  "range": [
                    66,
                    74
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 2
                    },
                    "start": {
                      "column": 4,
                      "line": 2
                    }
                  }
                },
                {
                  "type": "Property",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "g",
                    "optional": false,
                    "range": [
                      115,
                      116
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 3
                      },
                      "start": {
                        "column": 4,
                        "line": 3
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
                      116,
                      123
                    ],
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "range": [
                        120,
                        123
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
                        "range": [
                          117,
                          118
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
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 3
                      },
                      "start": {
                        "column": 5,
                        "line": 3
                      }
                    }
                  },
                  "range": [
                    115,
                    123
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 3
                    },
                    "start": {
                      "column": 4,
                      "line": 3
                    }
                  }
                }
              ],
              "range": [
                60,
                125
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 4
                },
                "start": {
                  "column": 60,
                  "line": 1
                }
              }
            },
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSMethodSignature",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "g",
                        "optional": false,
                        "range": [
                          138,
                          139
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 4
                          },
                          "start": {
                            "column": 14,
                            "line": 4
                          }
                        }
                      },
                      "kind": "method",
                      "optional": false,
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
                                "line": 4
                              },
                              "start": {
                                "column": 17,
                                "line": 4
                              }
                            },
                            "range": [
                              141,
                              149
                            ],
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "range": [
                                143,
                                149
                              ],
                              "loc": {
                                "end": {
                                  "column": 25,
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
                            140,
                            149
                          ],
                          "loc": {
                            "end": {
                              "column": 25,
                              "line": 4
                            },
                            "start": {
                              "column": 16,
                              "line": 4
                            }
                          }
                        }
                      ],
                      "readonly": false,
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 4
                          },
                          "start": {
                            "column": 26,
                            "line": 4
                          }
                        },
                        "range": [
                          150,
                          156
                        ],
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "range": [
                            152,
                            156
                          ],
                          "loc": {
                            "end": {
                              "column": 32,
                              "line": 4
                            },
                            "start": {
                              "column": 28,
                              "line": 4
                            }
                          }
                        }
                      },
                      "static": false,
                      "range": [
                        138,
                        156
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 4
                        },
                        "start": {
                          "column": 14,
                          "line": 4
                        }
                      }
                    }
                  ],
                  "range": [
                    136,
                    158
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 4
                    },
                    "start": {
                      "column": 12,
                      "line": 4
                    }
                  }
                },
                {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      167,
                      184
                    ],
                    "params": [
                      {
                        "type": "TSStringKeyword",
                        "range": [
                          168,
                          174
                        ],
                        "loc": {
                          "end": {
                            "column": 50,
                            "line": 4
                          },
                          "start": {
                            "column": 44,
                            "line": 4
                          }
                        }
                      },
                      {
                        "type": "TSUnknownKeyword",
                        "range": [
                          176,
                          183
                        ],
                        "loc": {
                          "end": {
                            "column": 59,
                            "line": 4
                          },
                          "start": {
                            "column": 52,
                            "line": 4
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 60,
                        "line": 4
                      },
                      "start": {
                        "column": 43,
                        "line": 4
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Record",
                    "optional": false,
                    "range": [
                      161,
                      167
                    ],
                    "loc": {
                      "end": {
                        "column": 43,
                        "line": 4
                      },
                      "start": {
                        "column": 37,
                        "line": 4
                      }
                    }
                  },
                  "range": [
                    161,
                    184
                  ],
                  "loc": {
                    "end": {
                      "column": 60,
                      "line": 4
                    },
                    "start": {
                      "column": 37,
                      "line": 4
                    }
                  }
                }
              ],
              "range": [
                136,
                184
              ],
              "loc": {
                "end": {
                  "column": 60,
                  "line": 4
                },
                "start": {
                  "column": 12,
                  "line": 4
                }
              }
            },
            "range": [
              60,
              184
            ],
            "loc": {
              "end": {
                "column": 60,
                "line": 4
              },
              "start": {
                "column": 60,
                "line": 1
              }
            }
          },
          "range": [
            4,
            184
          ],
          "loc": {
            "end": {
              "column": 60,
              "line": 4
            },
            "start": {
              "column": 4,
              "line": 1
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        0,
        185
      ],
      "loc": {
        "end": {
          "column": 61,
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
        "type": "TSSatisfiesExpression",
        "expression": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "range": [
                  248,
                  249
                ],
                "loc": {
                  "end": {
                    "column": 4,
                    "line": 7
                  },
                  "start": {
                    "column": 3,
                    "line": 7
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
                  249,
                  256
                ],
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "range": [
                    253,
                    256
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 7
                    },
                    "start": {
                      "column": 8,
                      "line": 7
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
                    "range": [
                      250,
                      251
                    ],
                    "loc": {
                      "end": {
                        "column": 6,
                        "line": 7
                      },
                      "start": {
                        "column": 5,
                        "line": 7
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 7
                  },
                  "start": {
                    "column": 4,
                    "line": 7
                  }
                }
              },
              "range": [
                248,
                256
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 7
                },
                "start": {
                  "column": 3,
                  "line": 7
                }
              }
            }
          ],
          "range": [
            246,
            258
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 7
            },
            "start": {
              "column": 1,
              "line": 7
            }
          }
        },
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "members": [
            {
              "type": "TSMethodSignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "range": [
                  272,
                  273
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 7
                  },
                  "start": {
                    "column": 27,
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
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 7
                      },
                      "start": {
                        "column": 30,
                        "line": 7
                      }
                    },
                    "range": [
                      275,
                      283
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        277,
                        283
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 7
                        },
                        "start": {
                          "column": 32,
                          "line": 7
                        }
                      }
                    }
                  },
                  "range": [
                    274,
                    283
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 7
                    },
                    "start": {
                      "column": 29,
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
                    "column": 45,
                    "line": 7
                  },
                  "start": {
                    "column": 39,
                    "line": 7
                  }
                },
                "range": [
                  284,
                  290
                ],
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "range": [
                    286,
                    290
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 7
                    },
                    "start": {
                      "column": 41,
                      "line": 7
                    }
                  }
                }
              },
              "static": false,
              "range": [
                272,
                290
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 7
                },
                "start": {
                  "column": 27,
                  "line": 7
                }
              }
            }
          ],
          "range": [
            270,
            292
          ],
          "loc": {
            "end": {
              "column": 47,
              "line": 7
            },
            "start": {
              "column": 25,
              "line": 7
            }
          }
        },
        "range": [
          245,
          292
        ],
        "loc": {
          "end": {
            "column": 47,
            "line": 7
          },
          "start": {
            "column": 0,
            "line": 7
          }
        }
      },
      "range": [
        245,
        293
      ],
      "loc": {
        "end": {
          "column": 48,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 7
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 8
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
