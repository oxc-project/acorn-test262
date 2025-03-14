__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    586
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        0,
        28
      ],
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "exportedFoo",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 1
                  },
                  "start": {
                    "column": 22,
                    "line": 1
                  }
                },
                "range": [
                  22,
                  27
                ],
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "range": [
                    24,
                    27
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 1
                    },
                    "start": {
                      "column": 24,
                      "line": 1
                    }
                  }
                }
              },
              "range": [
                11,
                27
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 1
                },
                "start": {
                  "column": 11,
                  "line": 1
                }
              }
            },
            "init": null,
            "range": [
              11,
              27
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 1
              },
              "start": {
                "column": 11,
                "line": 1
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          7,
          28
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 1
          },
          "start": {
            "column": 7,
            "line": 1
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 28,
          "line": 1
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
            "name": "nonexportedFoo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 23,
                  "line": 2
                },
                "start": {
                  "column": 18,
                  "line": 2
                }
              },
              "range": [
                47,
                52
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  49,
                  52
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 2
                  },
                  "start": {
                    "column": 20,
                    "line": 2
                  }
                }
              }
            },
            "range": [
              33,
              52
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 2
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          },
          "init": null,
          "range": [
            33,
            52
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 2
            },
            "start": {
              "column": 4,
              "line": 2
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        29,
        53
      ],
      "loc": {
        "end": {
          "column": 24,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
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
          "name": "exportedFoo",
          "optional": false,
          "range": [
            72,
            83
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 5
            },
            "start": {
              "column": 0,
              "line": 5
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "null",
          "value": null,
          "range": [
            86,
            90
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 5
            },
            "start": {
              "column": 14,
              "line": 5
            }
          }
        },
        "range": [
          72,
          90
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 5
          },
          "start": {
            "column": 0,
            "line": 5
          }
        }
      },
      "range": [
        72,
        91
      ],
      "loc": {
        "end": {
          "column": 19,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 5
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
          "name": "nonexportedFoo",
          "optional": false,
          "range": [
            92,
            106
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 6
            },
            "start": {
              "column": 0,
              "line": 6
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "null",
          "value": null,
          "range": [
            109,
            113
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 6
            },
            "start": {
              "column": 17,
              "line": 6
            }
          }
        },
        "range": [
          92,
          113
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 6
          },
          "start": {
            "column": 0,
            "line": 6
          }
        }
      },
      "range": [
        92,
        114
      ],
      "loc": {
        "end": {
          "column": 22,
          "line": 6
        },
        "start": {
          "column": 0,
          "line": 6
        }
      }
    },
    {
      "type": "IfStatement",
      "alternate": {
        "type": "IfStatement",
        "alternate": {
          "type": "IfStatement",
          "alternate": {
            "type": "IfStatement",
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "ArrayPattern",
                      "decorators": [],
                      "elements": [
                        {
                          "type": "ArrayPattern",
                          "decorators": [],
                          "elements": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "exportedFoo",
                              "optional": false,
                              "range": [
                                456,
                                467
                              ],
                              "loc": {
                                "end": {
                                  "column": 15,
                                  "line": 21
                                },
                                "start": {
                                  "column": 4,
                                  "line": 21
                                }
                              }
                            },
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "nonexportedFoo",
                              "optional": false,
                              "range": [
                                469,
                                483
                              ],
                              "loc": {
                                "end": {
                                  "column": 31,
                                  "line": 21
                                },
                                "start": {
                                  "column": 17,
                                  "line": 21
                                }
                              }
                            }
                          ],
                          "optional": false,
                          "range": [
                            455,
                            484
                          ],
                          "loc": {
                            "end": {
                              "column": 32,
                              "line": 21
                            },
                            "start": {
                              "column": 3,
                              "line": 21
                            }
                          }
                        }
                      ],
                      "optional": false,
                      "range": [
                        454,
                        485
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 21
                        },
                        "start": {
                          "column": 2,
                          "line": 21
                        }
                      }
                    },
                    "right": {
                      "type": "TSAsExpression",
                      "expression": {
                        "type": "Literal",
                        "raw": "null",
                        "value": null,
                        "range": [
                          488,
                          492
                        ],
                        "loc": {
                          "end": {
                            "column": 40,
                            "line": 21
                          },
                          "start": {
                            "column": 36,
                            "line": 21
                          }
                        }
                      },
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "range": [
                          496,
                          499
                        ],
                        "loc": {
                          "end": {
                            "column": 47,
                            "line": 21
                          },
                          "start": {
                            "column": 44,
                            "line": 21
                          }
                        }
                      },
                      "range": [
                        488,
                        499
                      ],
                      "loc": {
                        "end": {
                          "column": 47,
                          "line": 21
                        },
                        "start": {
                          "column": 36,
                          "line": 21
                        }
                      }
                    },
                    "range": [
                      454,
                      499
                    ],
                    "loc": {
                      "end": {
                        "column": 47,
                        "line": 21
                      },
                      "start": {
                        "column": 2,
                        "line": 21
                      }
                    }
                  },
                  "range": [
                    453,
                    501
                  ],
                  "loc": {
                    "end": {
                      "column": 49,
                      "line": 21
                    },
                    "start": {
                      "column": 1,
                      "line": 21
                    }
                  }
                }
              ],
              "range": [
                450,
                503
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 22
                },
                "start": {
                  "column": 5,
                  "line": 20
                }
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "ArrayPattern",
                      "decorators": [],
                      "elements": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "exportedFoo",
                          "optional": false,
                          "range": [
                            398,
                            409
                          ],
                          "loc": {
                            "end": {
                              "column": 14,
                              "line": 18
                            },
                            "start": {
                              "column": 3,
                              "line": 18
                            }
                          }
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "nonexportedFoo",
                          "optional": false,
                          "range": [
                            411,
                            425
                          ],
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 18
                            },
                            "start": {
                              "column": 16,
                              "line": 18
                            }
                          }
                        }
                      ],
                      "optional": false,
                      "range": [
                        397,
                        426
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 18
                        },
                        "start": {
                          "column": 2,
                          "line": 18
                        }
                      }
                    },
                    "right": {
                      "type": "TSAsExpression",
                      "expression": {
                        "type": "Literal",
                        "raw": "null",
                        "value": null,
                        "range": [
                          429,
                          433
                        ],
                        "loc": {
                          "end": {
                            "column": 38,
                            "line": 18
                          },
                          "start": {
                            "column": 34,
                            "line": 18
                          }
                        }
                      },
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "range": [
                          437,
                          440
                        ],
                        "loc": {
                          "end": {
                            "column": 45,
                            "line": 18
                          },
                          "start": {
                            "column": 42,
                            "line": 18
                          }
                        }
                      },
                      "range": [
                        429,
                        440
                      ],
                      "loc": {
                        "end": {
                          "column": 45,
                          "line": 18
                        },
                        "start": {
                          "column": 34,
                          "line": 18
                        }
                      }
                    },
                    "range": [
                      397,
                      440
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 18
                      },
                      "start": {
                        "column": 2,
                        "line": 18
                      }
                    }
                  },
                  "range": [
                    396,
                    442
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 18
                    },
                    "start": {
                      "column": 1,
                      "line": 18
                    }
                  }
                }
              ],
              "range": [
                393,
                444
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 19
                },
                "start": {
                  "column": 22,
                  "line": 17
                }
              }
            },
            "test": {
              "type": "TSAsExpression",
              "expression": {
                "type": "Literal",
                "raw": "null",
                "value": null,
                "range": [
                  380,
                  384
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
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  388,
                  391
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 17
                  },
                  "start": {
                    "column": 17,
                    "line": 17
                  }
                }
              },
              "range": [
                380,
                391
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 17
                },
                "start": {
                  "column": 9,
                  "line": 17
                }
              }
            },
            "range": [
              376,
              503
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 22
              },
              "start": {
                "column": 5,
                "line": 17
              }
            }
          },
          "consequent": {
            "type": "BlockStatement",
            "body": [
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "AssignmentExpression",
                  "operator": "=",
                  "left": {
                    "type": "ObjectPattern",
                    "decorators": [],
                    "optional": false,
                    "properties": [
                      {
                        "type": "Property",
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "range": [
                            304,
                            307
                          ],
                          "loc": {
                            "end": {
                              "column": 7,
                              "line": 15
                            },
                            "start": {
                              "column": 4,
                              "line": 15
                            }
                          }
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "ObjectPattern",
                          "decorators": [],
                          "optional": false,
                          "properties": [
                            {
                              "type": "Property",
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "bar",
                                "optional": false,
                                "range": [
                                  311,
                                  314
                                ],
                                "loc": {
                                  "end": {
                                    "column": 14,
                                    "line": 15
                                  },
                                  "start": {
                                    "column": 11,
                                    "line": 15
                                  }
                                }
                              },
                              "kind": "init",
                              "method": false,
                              "optional": false,
                              "shorthand": false,
                              "value": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "exportedFoo",
                                "optional": false,
                                "range": [
                                  316,
                                  327
                                ],
                                "loc": {
                                  "end": {
                                    "column": 27,
                                    "line": 15
                                  },
                                  "start": {
                                    "column": 16,
                                    "line": 15
                                  }
                                }
                              },
                              "range": [
                                311,
                                327
                              ],
                              "loc": {
                                "end": {
                                  "column": 27,
                                  "line": 15
                                },
                                "start": {
                                  "column": 11,
                                  "line": 15
                                }
                              }
                            },
                            {
                              "type": "Property",
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "baz",
                                "optional": false,
                                "range": [
                                  329,
                                  332
                                ],
                                "loc": {
                                  "end": {
                                    "column": 32,
                                    "line": 15
                                  },
                                  "start": {
                                    "column": 29,
                                    "line": 15
                                  }
                                }
                              },
                              "kind": "init",
                              "method": false,
                              "optional": false,
                              "shorthand": false,
                              "value": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "nonexportedFoo",
                                "optional": false,
                                "range": [
                                  334,
                                  348
                                ],
                                "loc": {
                                  "end": {
                                    "column": 48,
                                    "line": 15
                                  },
                                  "start": {
                                    "column": 34,
                                    "line": 15
                                  }
                                }
                              },
                              "range": [
                                329,
                                348
                              ],
                              "loc": {
                                "end": {
                                  "column": 48,
                                  "line": 15
                                },
                                "start": {
                                  "column": 29,
                                  "line": 15
                                }
                              }
                            }
                          ],
                          "range": [
                            309,
                            350
                          ],
                          "loc": {
                            "end": {
                              "column": 50,
                              "line": 15
                            },
                            "start": {
                              "column": 9,
                              "line": 15
                            }
                          }
                        },
                        "range": [
                          304,
                          350
                        ],
                        "loc": {
                          "end": {
                            "column": 50,
                            "line": 15
                          },
                          "start": {
                            "column": 4,
                            "line": 15
                          }
                        }
                      }
                    ],
                    "range": [
                      302,
                      352
                    ],
                    "loc": {
                      "end": {
                        "column": 52,
                        "line": 15
                      },
                      "start": {
                        "column": 2,
                        "line": 15
                      }
                    }
                  },
                  "right": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "Literal",
                      "raw": "null",
                      "value": null,
                      "range": [
                        355,
                        359
                      ],
                      "loc": {
                        "end": {
                          "column": 59,
                          "line": 15
                        },
                        "start": {
                          "column": 55,
                          "line": 15
                        }
                      }
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "range": [
                        363,
                        366
                      ],
                      "loc": {
                        "end": {
                          "column": 66,
                          "line": 15
                        },
                        "start": {
                          "column": 63,
                          "line": 15
                        }
                      }
                    },
                    "range": [
                      355,
                      366
                    ],
                    "loc": {
                      "end": {
                        "column": 66,
                        "line": 15
                      },
                      "start": {
                        "column": 55,
                        "line": 15
                      }
                    }
                  },
                  "range": [
                    302,
                    366
                  ],
                  "loc": {
                    "end": {
                      "column": 66,
                      "line": 15
                    },
                    "start": {
                      "column": 2,
                      "line": 15
                    }
                  }
                },
                "range": [
                  301,
                  368
                ],
                "loc": {
                  "end": {
                    "column": 68,
                    "line": 15
                  },
                  "start": {
                    "column": 1,
                    "line": 15
                  }
                }
              }
            ],
            "range": [
              298,
              370
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 16
              },
              "start": {
                "column": 22,
                "line": 14
              }
            }
          },
          "test": {
            "type": "TSAsExpression",
            "expression": {
              "type": "Literal",
              "raw": "null",
              "value": null,
              "range": [
                285,
                289
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 14
                },
                "start": {
                  "column": 9,
                  "line": 14
                }
              }
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                293,
                296
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 14
                },
                "start": {
                  "column": 17,
                  "line": 14
                }
              }
            },
            "range": [
              285,
              296
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 14
              },
              "start": {
                "column": 9,
                "line": 14
              }
            }
          },
          "range": [
            281,
            503
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 22
            },
            "start": {
              "column": 5,
              "line": 14
            }
          }
        },
        "consequent": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "AssignmentExpression",
                "operator": "=",
                "left": {
                  "type": "ObjectPattern",
                  "decorators": [],
                  "optional": false,
                  "properties": [
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "range": [
                          218,
                          221
                        ],
                        "loc": {
                          "end": {
                            "column": 7,
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
                        "type": "Identifier",
                        "decorators": [],
                        "name": "exportedFoo",
                        "optional": false,
                        "range": [
                          223,
                          234
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 12
                          },
                          "start": {
                            "column": 9,
                            "line": 12
                          }
                        }
                      },
                      "range": [
                        218,
                        234
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 12
                        },
                        "start": {
                          "column": 4,
                          "line": 12
                        }
                      }
                    },
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "bar",
                        "optional": false,
                        "range": [
                          236,
                          239
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 12
                          },
                          "start": {
                            "column": 22,
                            "line": 12
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "nonexportedFoo",
                        "optional": false,
                        "range": [
                          241,
                          255
                        ],
                        "loc": {
                          "end": {
                            "column": 41,
                            "line": 12
                          },
                          "start": {
                            "column": 27,
                            "line": 12
                          }
                        }
                      },
                      "range": [
                        236,
                        255
                      ],
                      "loc": {
                        "end": {
                          "column": 41,
                          "line": 12
                        },
                        "start": {
                          "column": 22,
                          "line": 12
                        }
                      }
                    }
                  ],
                  "range": [
                    216,
                    257
                  ],
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 12
                    },
                    "start": {
                      "column": 2,
                      "line": 12
                    }
                  }
                },
                "right": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "Literal",
                    "raw": "null",
                    "value": null,
                    "range": [
                      260,
                      264
                    ],
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 12
                      },
                      "start": {
                        "column": 46,
                        "line": 12
                      }
                    }
                  },
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "range": [
                      268,
                      271
                    ],
                    "loc": {
                      "end": {
                        "column": 57,
                        "line": 12
                      },
                      "start": {
                        "column": 54,
                        "line": 12
                      }
                    }
                  },
                  "range": [
                    260,
                    271
                  ],
                  "loc": {
                    "end": {
                      "column": 57,
                      "line": 12
                    },
                    "start": {
                      "column": 46,
                      "line": 12
                    }
                  }
                },
                "range": [
                  216,
                  271
                ],
                "loc": {
                  "end": {
                    "column": 57,
                    "line": 12
                  },
                  "start": {
                    "column": 2,
                    "line": 12
                  }
                }
              },
              "range": [
                215,
                273
              ],
              "loc": {
                "end": {
                  "column": 59,
                  "line": 12
                },
                "start": {
                  "column": 1,
                  "line": 12
                }
              }
            }
          ],
          "range": [
            212,
            275
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 13
            },
            "start": {
              "column": 22,
              "line": 11
            }
          }
        },
        "test": {
          "type": "TSAsExpression",
          "expression": {
            "type": "Literal",
            "raw": "null",
            "value": null,
            "range": [
              199,
              203
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 11
              },
              "start": {
                "column": 9,
                "line": 11
              }
            }
          },
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "range": [
              207,
              210
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
          "range": [
            199,
            210
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 11
            },
            "start": {
              "column": 9,
              "line": 11
            }
          }
        },
        "range": [
          195,
          503
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 22
          },
          "start": {
            "column": 5,
            "line": 11
          }
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "ObjectPattern",
                "decorators": [],
                "optional": false,
                "properties": [
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "exportedFoo",
                      "optional": false,
                      "range": [
                        142,
                        153
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 9
                        },
                        "start": {
                          "column": 7,
                          "line": 9
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": true,
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "exportedFoo",
                      "optional": false,
                      "range": [
                        142,
                        153
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 9
                        },
                        "start": {
                          "column": 7,
                          "line": 9
                        }
                      }
                    },
                    "range": [
                      142,
                      153
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 9
                      },
                      "start": {
                        "column": 7,
                        "line": 9
                      }
                    }
                  },
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "nonexportedFoo",
                      "optional": false,
                      "range": [
                        155,
                        169
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 9
                        },
                        "start": {
                          "column": 20,
                          "line": 9
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": true,
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "nonexportedFoo",
                      "optional": false,
                      "range": [
                        155,
                        169
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 9
                        },
                        "start": {
                          "column": 20,
                          "line": 9
                        }
                      }
                    },
                    "range": [
                      155,
                      169
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 9
                      },
                      "start": {
                        "column": 20,
                        "line": 9
                      }
                    }
                  }
                ],
                "range": [
                  140,
                  171
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 9
                  },
                  "start": {
                    "column": 5,
                    "line": 9
                  }
                }
              },
              "right": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "Literal",
                  "raw": "null",
                  "value": null,
                  "range": [
                    174,
                    178
                  ],
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 9
                    },
                    "start": {
                      "column": 39,
                      "line": 9
                    }
                  }
                },
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "range": [
                    182,
                    185
                  ],
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 9
                    },
                    "start": {
                      "column": 47,
                      "line": 9
                    }
                  }
                },
                "range": [
                  174,
                  185
                ],
                "loc": {
                  "end": {
                    "column": 50,
                    "line": 9
                  },
                  "start": {
                    "column": 39,
                    "line": 9
                  }
                }
              },
              "range": [
                140,
                185
              ],
              "loc": {
                "end": {
                  "column": 50,
                  "line": 9
                },
                "start": {
                  "column": 5,
                  "line": 9
                }
              }
            },
            "range": [
              139,
              187
            ],
            "loc": {
              "end": {
                "column": 52,
                "line": 9
              },
              "start": {
                "column": 4,
                "line": 9
              }
            }
          }
        ],
        "range": [
          133,
          189
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 10
          },
          "start": {
            "column": 17,
            "line": 8
          }
        }
      },
      "test": {
        "type": "TSAsExpression",
        "expression": {
          "type": "Literal",
          "raw": "null",
          "value": null,
          "range": [
            120,
            124
          ],
          "loc": {
            "end": {
              "column": 8,
              "line": 8
            },
            "start": {
              "column": 4,
              "line": 8
            }
          }
        },
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "range": [
            128,
            131
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
        },
        "range": [
          120,
          131
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 8
          },
          "start": {
            "column": 4,
            "line": 8
          }
        }
      },
      "range": [
        116,
        503
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 22
        },
        "start": {
          "column": 0,
          "line": 8
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "nonexportedFoo",
            "optional": false,
            "range": [
              514,
              528
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 24
              },
              "start": {
                "column": 9,
                "line": 24
              }
            }
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "nonexportedFoo",
            "optional": false,
            "range": [
              514,
              528
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 24
              },
              "start": {
                "column": 9,
                "line": 24
              }
            }
          },
          "range": [
            514,
            528
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 24
            },
            "start": {
              "column": 9,
              "line": 24
            }
          }
        }
      ],
      "range": [
        505,
        531
      ],
      "loc": {
        "end": {
          "column": 26,
          "line": 24
        },
        "start": {
          "column": 0,
          "line": 24
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "range": [
              556,
              559
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 25
              },
              "start": {
                "column": 24,
                "line": 25
              }
            }
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "exportedFoo",
            "optional": false,
            "range": [
              541,
              552
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 25
              },
              "start": {
                "column": 9,
                "line": 25
              }
            }
          },
          "range": [
            541,
            559
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 25
            },
            "start": {
              "column": 9,
              "line": 25
            }
          }
        },
        {
          "type": "ExportSpecifier",
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "nfoo",
            "optional": false,
            "range": [
              579,
              583
            ],
            "loc": {
              "end": {
                "column": 51,
                "line": 25
              },
              "start": {
                "column": 47,
                "line": 25
              }
            }
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "nonexportedFoo",
            "optional": false,
            "range": [
              561,
              575
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 25
              },
              "start": {
                "column": 29,
                "line": 25
              }
            }
          },
          "range": [
            561,
            583
          ],
          "loc": {
            "end": {
              "column": 51,
              "line": 25
            },
            "start": {
              "column": 29,
              "line": 25
            }
          }
        }
      ],
      "range": [
        532,
        586
      ],
      "loc": {
        "end": {
          "column": 54,
          "line": 25
        },
        "start": {
          "column": 0,
          "line": 25
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 54,
      "line": 25
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
