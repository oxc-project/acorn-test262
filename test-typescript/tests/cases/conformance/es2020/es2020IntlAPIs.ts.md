__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    127,
    2305
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
            "name": "count",
            "optional": false,
            "range": [
              133,
              138
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 2
              },
              "start": {
                "column": 6,
                "line": 2
              }
            }
          },
          "init": {
            "type": "Literal",
            "raw": "26254.39",
            "value": 26254.39,
            "range": [
              141,
              149
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 2
              },
              "start": {
                "column": 14,
                "line": 2
              }
            }
          },
          "range": [
            133,
            149
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 2
            },
            "start": {
              "column": 6,
              "line": 2
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        127,
        150
      ],
      "loc": {
        "end": {
          "column": 23,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
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
            "name": "date",
            "optional": false,
            "range": [
              157,
              161
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 3
              },
              "start": {
                "column": 6,
                "line": 3
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "\"2012-05-24\"",
                "value": "2012-05-24",
                "range": [
                  173,
                  185
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 3
                  },
                  "start": {
                    "column": 22,
                    "line": 3
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Date",
              "optional": false,
              "range": [
                168,
                172
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 3
                },
                "start": {
                  "column": 17,
                  "line": 3
                }
              }
            },
            "range": [
              164,
              186
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 3
              },
              "start": {
                "column": 13,
                "line": 3
              }
            }
          },
          "range": [
            157,
            186
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 3
            },
            "start": {
              "column": 6,
              "line": 3
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        151,
        187
      ],
      "loc": {
        "end": {
          "column": 36,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 3
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
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "TemplateLiteral",
                  "expressions": [
                    {
                      "type": "CallExpression",
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "date",
                          "optional": false,
                          "range": [
                            281,
                            285
                          ],
                          "loc": {
                            "end": {
                              "column": 50,
                              "line": 7
                            },
                            "start": {
                              "column": 46,
                              "line": 7
                            }
                          }
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "NewExpression",
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "locale",
                              "optional": false,
                              "range": [
                                266,
                                272
                              ],
                              "loc": {
                                "end": {
                                  "column": 37,
                                  "line": 7
                                },
                                "start": {
                                  "column": 31,
                                  "line": 7
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
                              "name": "Intl",
                              "optional": false,
                              "range": [
                                246,
                                250
                              ],
                              "loc": {
                                "end": {
                                  "column": 15,
                                  "line": 7
                                },
                                "start": {
                                  "column": 11,
                                  "line": 7
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "DateTimeFormat",
                              "optional": false,
                              "range": [
                                251,
                                265
                              ],
                              "loc": {
                                "end": {
                                  "column": 30,
                                  "line": 7
                                },
                                "start": {
                                  "column": 16,
                                  "line": 7
                                }
                              }
                            },
                            "range": [
                              246,
                              265
                            ],
                            "loc": {
                              "end": {
                                "column": 30,
                                "line": 7
                              },
                              "start": {
                                "column": 11,
                                "line": 7
                              }
                            }
                          },
                          "range": [
                            242,
                            273
                          ],
                          "loc": {
                            "end": {
                              "column": 38,
                              "line": 7
                            },
                            "start": {
                              "column": 7,
                              "line": 7
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "format",
                          "optional": false,
                          "range": [
                            274,
                            280
                          ],
                          "loc": {
                            "end": {
                              "column": 45,
                              "line": 7
                            },
                            "start": {
                              "column": 39,
                              "line": 7
                            }
                          }
                        },
                        "range": [
                          242,
                          280
                        ],
                        "loc": {
                          "end": {
                            "column": 45,
                            "line": 7
                          },
                          "start": {
                            "column": 7,
                            "line": 7
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        242,
                        286
                      ],
                      "loc": {
                        "end": {
                          "column": 51,
                          "line": 7
                        },
                        "start": {
                          "column": 7,
                          "line": 7
                        }
                      }
                    },
                    {
                      "type": "CallExpression",
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "count",
                          "optional": false,
                          "range": [
                            327,
                            332
                          ],
                          "loc": {
                            "end": {
                              "column": 97,
                              "line": 7
                            },
                            "start": {
                              "column": 92,
                              "line": 7
                            }
                          }
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "NewExpression",
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "locale",
                              "optional": false,
                              "range": [
                                312,
                                318
                              ],
                              "loc": {
                                "end": {
                                  "column": 83,
                                  "line": 7
                                },
                                "start": {
                                  "column": 77,
                                  "line": 7
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
                              "name": "Intl",
                              "optional": false,
                              "range": [
                                294,
                                298
                              ],
                              "loc": {
                                "end": {
                                  "column": 63,
                                  "line": 7
                                },
                                "start": {
                                  "column": 59,
                                  "line": 7
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "NumberFormat",
                              "optional": false,
                              "range": [
                                299,
                                311
                              ],
                              "loc": {
                                "end": {
                                  "column": 76,
                                  "line": 7
                                },
                                "start": {
                                  "column": 64,
                                  "line": 7
                                }
                              }
                            },
                            "range": [
                              294,
                              311
                            ],
                            "loc": {
                              "end": {
                                "column": 76,
                                "line": 7
                              },
                              "start": {
                                "column": 59,
                                "line": 7
                              }
                            }
                          },
                          "range": [
                            290,
                            319
                          ],
                          "loc": {
                            "end": {
                              "column": 84,
                              "line": 7
                            },
                            "start": {
                              "column": 55,
                              "line": 7
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "format",
                          "optional": false,
                          "range": [
                            320,
                            326
                          ],
                          "loc": {
                            "end": {
                              "column": 91,
                              "line": 7
                            },
                            "start": {
                              "column": 85,
                              "line": 7
                            }
                          }
                        },
                        "range": [
                          290,
                          326
                        ],
                        "loc": {
                          "end": {
                            "column": 91,
                            "line": 7
                          },
                          "start": {
                            "column": 55,
                            "line": 7
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        290,
                        333
                      ],
                      "loc": {
                        "end": {
                          "column": 98,
                          "line": 7
                        },
                        "start": {
                          "column": 55,
                          "line": 7
                        }
                      }
                    }
                  ],
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "tail": false,
                      "value": {
                        "cooked": "",
                        "raw": ""
                      },
                      "range": [
                        239,
                        242
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
                    {
                      "type": "TemplateElement",
                      "tail": false,
                      "value": {
                        "cooked": " ",
                        "raw": " "
                      },
                      "range": [
                        286,
                        290
                      ],
                      "loc": {
                        "end": {
                          "column": 55,
                          "line": 7
                        },
                        "start": {
                          "column": 51,
                          "line": 7
                        }
                      }
                    },
                    {
                      "type": "TemplateElement",
                      "tail": true,
                      "value": {
                        "cooked": "",
                        "raw": ""
                      },
                      "range": [
                        333,
                        335
                      ],
                      "loc": {
                        "end": {
                          "column": 100,
                          "line": 7
                        },
                        "start": {
                          "column": 98,
                          "line": 7
                        }
                      }
                    }
                  ],
                  "range": [
                    239,
                    335
                  ],
                  "loc": {
                    "end": {
                      "column": 100,
                      "line": 7
                    },
                    "start": {
                      "column": 4,
                      "line": 7
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
                  "name": "console",
                  "optional": false,
                  "range": [
                    222,
                    229
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 6
                    },
                    "start": {
                      "column": 2,
                      "line": 6
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "range": [
                    230,
                    233
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 6
                    },
                    "start": {
                      "column": 10,
                      "line": 6
                    }
                  }
                },
                "range": [
                  222,
                  233
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 6
                  },
                  "start": {
                    "column": 2,
                    "line": 6
                  }
                }
              },
              "optional": false,
              "range": [
                222,
                339
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 8
                },
                "start": {
                  "column": 2,
                  "line": 6
                }
              }
            },
            "range": [
              222,
              340
            ],
            "loc": {
              "end": {
                "column": 4,
                "line": 8
              },
              "start": {
                "column": 2,
                "line": 6
              }
            }
          }
        ],
        "range": [
          218,
          342
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 9
          },
          "start": {
            "column": 29,
            "line": 5
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "log",
        "optional": false,
        "range": [
          198,
          201
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 5
          },
          "start": {
            "column": 9,
            "line": 5
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "locale",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 27,
                "line": 5
              },
              "start": {
                "column": 19,
                "line": 5
              }
            },
            "range": [
              208,
              216
            ],
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "range": [
                210,
                216
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 5
                },
                "start": {
                  "column": 21,
                  "line": 5
                }
              }
            }
          },
          "range": [
            202,
            216
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 5
            },
            "start": {
              "column": 13,
              "line": 5
            }
          }
        }
      ],
      "range": [
        189,
        342
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 9
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
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "\"en-US\"",
            "value": "en-US",
            "range": [
              348,
              355
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 11
              },
              "start": {
                "column": 4,
                "line": 11
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "log",
          "optional": false,
          "range": [
            344,
            347
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 11
            },
            "start": {
              "column": 0,
              "line": 11
            }
          }
        },
        "optional": false,
        "range": [
          344,
          356
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 11
          },
          "start": {
            "column": 0,
            "line": 11
          }
        }
      },
      "range": [
        344,
        357
      ],
      "loc": {
        "end": {
          "column": 13,
          "line": 11
        },
        "start": {
          "column": 0,
          "line": 11
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
            "raw": "\"de-DE\"",
            "value": "de-DE",
            "range": [
              403,
              410
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 14
              },
              "start": {
                "column": 4,
                "line": 14
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "log",
          "optional": false,
          "range": [
            399,
            402
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 14
            },
            "start": {
              "column": 0,
              "line": 14
            }
          }
        },
        "optional": false,
        "range": [
          399,
          411
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 14
          },
          "start": {
            "column": 0,
            "line": 14
          }
        }
      },
      "range": [
        399,
        412
      ],
      "loc": {
        "end": {
          "column": 13,
          "line": 14
        },
        "start": {
          "column": 0,
          "line": 14
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
            "name": "rtf1",
            "optional": false,
            "range": [
              568,
              572
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 18
              },
              "start": {
                "column": 6,
                "line": 18
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "'en'",
                "value": "en",
                "range": [
                  603,
                  607
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 18
                  },
                  "start": {
                    "column": 41,
                    "line": 18
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
                      "name": "style",
                      "optional": false,
                      "range": [
                        611,
                        616
                      ],
                      "loc": {
                        "end": {
                          "column": 54,
                          "line": 18
                        },
                        "start": {
                          "column": 49,
                          "line": 18
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "raw": "'narrow'",
                      "value": "narrow",
                      "range": [
                        618,
                        626
                      ],
                      "loc": {
                        "end": {
                          "column": 64,
                          "line": 18
                        },
                        "start": {
                          "column": 56,
                          "line": 18
                        }
                      }
                    },
                    "range": [
                      611,
                      626
                    ],
                    "loc": {
                      "end": {
                        "column": 64,
                        "line": 18
                      },
                      "start": {
                        "column": 49,
                        "line": 18
                      }
                    }
                  }
                ],
                "range": [
                  609,
                  628
                ],
                "loc": {
                  "end": {
                    "column": 66,
                    "line": 18
                  },
                  "start": {
                    "column": 47,
                    "line": 18
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
                "name": "Intl",
                "optional": false,
                "range": [
                  579,
                  583
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 18
                  },
                  "start": {
                    "column": 17,
                    "line": 18
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "RelativeTimeFormat",
                "optional": false,
                "range": [
                  584,
                  602
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 18
                  },
                  "start": {
                    "column": 22,
                    "line": 18
                  }
                }
              },
              "range": [
                579,
                602
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 18
                },
                "start": {
                  "column": 17,
                  "line": 18
                }
              }
            },
            "range": [
              575,
              629
            ],
            "loc": {
              "end": {
                "column": 67,
                "line": 18
              },
              "start": {
                "column": 13,
                "line": 18
              }
            }
          },
          "range": [
            568,
            629
          ],
          "loc": {
            "end": {
              "column": 67,
              "line": 18
            },
            "start": {
              "column": 6,
              "line": 18
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        562,
        630
      ],
      "loc": {
        "end": {
          "column": 68,
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
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "3",
                "value": 3,
                "range": [
                  656,
                  657
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 20
                  },
                  "start": {
                    "column": 24,
                    "line": 20
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "'quarter'",
                "value": "quarter",
                "range": [
                  659,
                  668
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 20
                  },
                  "start": {
                    "column": 27,
                    "line": 20
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
                "name": "rtf1",
                "optional": false,
                "range": [
                  644,
                  648
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 20
                  },
                  "start": {
                    "column": 12,
                    "line": 20
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "format",
                "optional": false,
                "range": [
                  649,
                  655
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 20
                  },
                  "start": {
                    "column": 17,
                    "line": 20
                  }
                }
              },
              "range": [
                644,
                655
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 20
                },
                "start": {
                  "column": 12,
                  "line": 20
                }
              }
            },
            "optional": false,
            "range": [
              644,
              669
            ],
            "loc": {
              "end": {
                "column": 37,
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
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "console",
            "optional": false,
            "range": [
              632,
              639
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 20
              },
              "start": {
                "column": 0,
                "line": 20
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "log",
            "optional": false,
            "range": [
              640,
              643
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 20
              },
              "start": {
                "column": 8,
                "line": 20
              }
            }
          },
          "range": [
            632,
            643
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
          632,
          670
        ],
        "loc": {
          "end": {
            "column": 38,
            "line": 20
          },
          "start": {
            "column": 0,
            "line": 20
          }
        }
      },
      "range": [
        632,
        671
      ],
      "loc": {
        "end": {
          "column": 39,
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
        "type": "CallExpression",
        "arguments": [
          {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "UnaryExpression",
                "argument": {
                  "type": "Literal",
                  "raw": "1",
                  "value": 1,
                  "range": [
                    730,
                    731
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 23
                    },
                    "start": {
                      "column": 25,
                      "line": 23
                    }
                  }
                },
                "operator": "-",
                "prefix": true,
                "range": [
                  729,
                  731
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 23
                  },
                  "start": {
                    "column": 24,
                    "line": 23
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "'day'",
                "value": "day",
                "range": [
                  733,
                  738
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 23
                  },
                  "start": {
                    "column": 28,
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
                "name": "rtf1",
                "optional": false,
                "range": [
                  717,
                  721
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 23
                  },
                  "start": {
                    "column": 12,
                    "line": 23
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "format",
                "optional": false,
                "range": [
                  722,
                  728
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 23
                  },
                  "start": {
                    "column": 17,
                    "line": 23
                  }
                }
              },
              "range": [
                717,
                728
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 23
                },
                "start": {
                  "column": 12,
                  "line": 23
                }
              }
            },
            "optional": false,
            "range": [
              717,
              739
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 23
              },
              "start": {
                "column": 12,
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
            "name": "console",
            "optional": false,
            "range": [
              705,
              712
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 23
              },
              "start": {
                "column": 0,
                "line": 23
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "log",
            "optional": false,
            "range": [
              713,
              716
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 23
              },
              "start": {
                "column": 8,
                "line": 23
              }
            }
          },
          "range": [
            705,
            716
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 23
            },
            "start": {
              "column": 0,
              "line": 23
            }
          }
        },
        "optional": false,
        "range": [
          705,
          740
        ],
        "loc": {
          "end": {
            "column": 35,
            "line": 23
          },
          "start": {
            "column": 0,
            "line": 23
          }
        }
      },
      "range": [
        705,
        741
      ],
      "loc": {
        "end": {
          "column": 36,
          "line": 23
        },
        "start": {
          "column": 0,
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
            "name": "rtf2",
            "optional": false,
            "range": [
              780,
              784
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 26
              },
              "start": {
                "column": 6,
                "line": 26
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "'es'",
                "value": "es",
                "range": [
                  815,
                  819
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 26
                  },
                  "start": {
                    "column": 41,
                    "line": 26
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
                      "name": "numeric",
                      "optional": false,
                      "range": [
                        823,
                        830
                      ],
                      "loc": {
                        "end": {
                          "column": 56,
                          "line": 26
                        },
                        "start": {
                          "column": 49,
                          "line": 26
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "raw": "'auto'",
                      "value": "auto",
                      "range": [
                        832,
                        838
                      ],
                      "loc": {
                        "end": {
                          "column": 64,
                          "line": 26
                        },
                        "start": {
                          "column": 58,
                          "line": 26
                        }
                      }
                    },
                    "range": [
                      823,
                      838
                    ],
                    "loc": {
                      "end": {
                        "column": 64,
                        "line": 26
                      },
                      "start": {
                        "column": 49,
                        "line": 26
                      }
                    }
                  }
                ],
                "range": [
                  821,
                  840
                ],
                "loc": {
                  "end": {
                    "column": 66,
                    "line": 26
                  },
                  "start": {
                    "column": 47,
                    "line": 26
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
                "name": "Intl",
                "optional": false,
                "range": [
                  791,
                  795
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 26
                  },
                  "start": {
                    "column": 17,
                    "line": 26
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "RelativeTimeFormat",
                "optional": false,
                "range": [
                  796,
                  814
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 26
                  },
                  "start": {
                    "column": 22,
                    "line": 26
                  }
                }
              },
              "range": [
                791,
                814
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 26
                },
                "start": {
                  "column": 17,
                  "line": 26
                }
              }
            },
            "range": [
              787,
              841
            ],
            "loc": {
              "end": {
                "column": 67,
                "line": 26
              },
              "start": {
                "column": 13,
                "line": 26
              }
            }
          },
          "range": [
            780,
            841
          ],
          "loc": {
            "end": {
              "column": 67,
              "line": 26
            },
            "start": {
              "column": 6,
              "line": 26
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        774,
        842
      ],
      "loc": {
        "end": {
          "column": 68,
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
        "type": "CallExpression",
        "arguments": [
          {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "2",
                "value": 2,
                "range": [
                  868,
                  869
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 28
                  },
                  "start": {
                    "column": 24,
                    "line": 28
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "'day'",
                "value": "day",
                "range": [
                  871,
                  876
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 28
                  },
                  "start": {
                    "column": 27,
                    "line": 28
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
                "name": "rtf2",
                "optional": false,
                "range": [
                  856,
                  860
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 28
                  },
                  "start": {
                    "column": 12,
                    "line": 28
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "format",
                "optional": false,
                "range": [
                  861,
                  867
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 28
                  },
                  "start": {
                    "column": 17,
                    "line": 28
                  }
                }
              },
              "range": [
                856,
                867
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 28
                },
                "start": {
                  "column": 12,
                  "line": 28
                }
              }
            },
            "optional": false,
            "range": [
              856,
              877
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 28
              },
              "start": {
                "column": 12,
                "line": 28
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
            "name": "console",
            "optional": false,
            "range": [
              844,
              851
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 28
              },
              "start": {
                "column": 0,
                "line": 28
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "log",
            "optional": false,
            "range": [
              852,
              855
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 28
              },
              "start": {
                "column": 8,
                "line": 28
              }
            }
          },
          "range": [
            844,
            855
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 28
            },
            "start": {
              "column": 0,
              "line": 28
            }
          }
        },
        "optional": false,
        "range": [
          844,
          878
        ],
        "loc": {
          "end": {
            "column": 34,
            "line": 28
          },
          "start": {
            "column": 0,
            "line": 28
          }
        }
      },
      "range": [
        844,
        879
      ],
      "loc": {
        "end": {
          "column": 35,
          "line": 28
        },
        "start": {
          "column": 0,
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
            "name": "regionNamesInEnglish",
            "optional": false,
            "range": [
              1024,
              1044
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 32
              },
              "start": {
                "column": 6,
                "line": 32
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "raw": "'en'",
                    "value": "en",
                    "range": [
                      1070,
                      1074
                    ],
                    "loc": {
                      "end": {
                        "column": 56,
                        "line": 32
                      },
                      "start": {
                        "column": 52,
                        "line": 32
                      }
                    }
                  }
                ],
                "range": [
                  1069,
                  1075
                ],
                "loc": {
                  "end": {
                    "column": 57,
                    "line": 32
                  },
                  "start": {
                    "column": 51,
                    "line": 32
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
                      "name": "type",
                      "optional": false,
                      "range": [
                        1079,
                        1083
                      ],
                      "loc": {
                        "end": {
                          "column": 65,
                          "line": 32
                        },
                        "start": {
                          "column": 61,
                          "line": 32
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "raw": "'region'",
                      "value": "region",
                      "range": [
                        1085,
                        1093
                      ],
                      "loc": {
                        "end": {
                          "column": 75,
                          "line": 32
                        },
                        "start": {
                          "column": 67,
                          "line": 32
                        }
                      }
                    },
                    "range": [
                      1079,
                      1093
                    ],
                    "loc": {
                      "end": {
                        "column": 75,
                        "line": 32
                      },
                      "start": {
                        "column": 61,
                        "line": 32
                      }
                    }
                  }
                ],
                "range": [
                  1077,
                  1095
                ],
                "loc": {
                  "end": {
                    "column": 77,
                    "line": 32
                  },
                  "start": {
                    "column": 59,
                    "line": 32
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
                "name": "Intl",
                "optional": false,
                "range": [
                  1051,
                  1055
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 32
                  },
                  "start": {
                    "column": 33,
                    "line": 32
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "DisplayNames",
                "optional": false,
                "range": [
                  1056,
                  1068
                ],
                "loc": {
                  "end": {
                    "column": 50,
                    "line": 32
                  },
                  "start": {
                    "column": 38,
                    "line": 32
                  }
                }
              },
              "range": [
                1051,
                1068
              ],
              "loc": {
                "end": {
                  "column": 50,
                  "line": 32
                },
                "start": {
                  "column": 33,
                  "line": 32
                }
              }
            },
            "range": [
              1047,
              1096
            ],
            "loc": {
              "end": {
                "column": 78,
                "line": 32
              },
              "start": {
                "column": 29,
                "line": 32
              }
            }
          },
          "range": [
            1024,
            1096
          ],
          "loc": {
            "end": {
              "column": 78,
              "line": 32
            },
            "start": {
              "column": 6,
              "line": 32
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        1018,
        1097
      ],
      "loc": {
        "end": {
          "column": 79,
          "line": 32
        },
        "start": {
          "column": 0,
          "line": 32
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
            "name": "regionNamesInTraditionalChinese",
            "optional": false,
            "range": [
              1104,
              1135
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 33
              },
              "start": {
                "column": 6,
                "line": 33
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "raw": "'zh-Hant'",
                    "value": "zh-Hant",
                    "range": [
                      1161,
                      1170
                    ],
                    "loc": {
                      "end": {
                        "column": 72,
                        "line": 33
                      },
                      "start": {
                        "column": 63,
                        "line": 33
                      }
                    }
                  }
                ],
                "range": [
                  1160,
                  1171
                ],
                "loc": {
                  "end": {
                    "column": 73,
                    "line": 33
                  },
                  "start": {
                    "column": 62,
                    "line": 33
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
                      "name": "type",
                      "optional": false,
                      "range": [
                        1175,
                        1179
                      ],
                      "loc": {
                        "end": {
                          "column": 81,
                          "line": 33
                        },
                        "start": {
                          "column": 77,
                          "line": 33
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "raw": "'region'",
                      "value": "region",
                      "range": [
                        1181,
                        1189
                      ],
                      "loc": {
                        "end": {
                          "column": 91,
                          "line": 33
                        },
                        "start": {
                          "column": 83,
                          "line": 33
                        }
                      }
                    },
                    "range": [
                      1175,
                      1189
                    ],
                    "loc": {
                      "end": {
                        "column": 91,
                        "line": 33
                      },
                      "start": {
                        "column": 77,
                        "line": 33
                      }
                    }
                  }
                ],
                "range": [
                  1173,
                  1191
                ],
                "loc": {
                  "end": {
                    "column": 93,
                    "line": 33
                  },
                  "start": {
                    "column": 75,
                    "line": 33
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
                "name": "Intl",
                "optional": false,
                "range": [
                  1142,
                  1146
                ],
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 33
                  },
                  "start": {
                    "column": 44,
                    "line": 33
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "DisplayNames",
                "optional": false,
                "range": [
                  1147,
                  1159
                ],
                "loc": {
                  "end": {
                    "column": 61,
                    "line": 33
                  },
                  "start": {
                    "column": 49,
                    "line": 33
                  }
                }
              },
              "range": [
                1142,
                1159
              ],
              "loc": {
                "end": {
                  "column": 61,
                  "line": 33
                },
                "start": {
                  "column": 44,
                  "line": 33
                }
              }
            },
            "range": [
              1138,
              1192
            ],
            "loc": {
              "end": {
                "column": 94,
                "line": 33
              },
              "start": {
                "column": 40,
                "line": 33
              }
            }
          },
          "range": [
            1104,
            1192
          ],
          "loc": {
            "end": {
              "column": 94,
              "line": 33
            },
            "start": {
              "column": 6,
              "line": 33
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        1098,
        1193
      ],
      "loc": {
        "end": {
          "column": 95,
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
        "type": "CallExpression",
        "arguments": [
          {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "'US'",
                "value": "US",
                "range": [
                  1231,
                  1235
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
            "callee": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "regionNamesInEnglish",
                "optional": false,
                "range": [
                  1207,
                  1227
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 35
                  },
                  "start": {
                    "column": 12,
                    "line": 35
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "of",
                "optional": false,
                "range": [
                  1228,
                  1230
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 35
                  },
                  "start": {
                    "column": 33,
                    "line": 35
                  }
                }
              },
              "range": [
                1207,
                1230
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 35
                },
                "start": {
                  "column": 12,
                  "line": 35
                }
              }
            },
            "optional": false,
            "range": [
              1207,
              1236
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 35
              },
              "start": {
                "column": 12,
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
            "name": "console",
            "optional": false,
            "range": [
              1195,
              1202
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 35
              },
              "start": {
                "column": 0,
                "line": 35
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "log",
            "optional": false,
            "range": [
              1203,
              1206
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
          "range": [
            1195,
            1206
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 35
            },
            "start": {
              "column": 0,
              "line": 35
            }
          }
        },
        "optional": false,
        "range": [
          1195,
          1237
        ],
        "loc": {
          "end": {
            "column": 42,
            "line": 35
          },
          "start": {
            "column": 0,
            "line": 35
          }
        }
      },
      "range": [
        1195,
        1238
      ],
      "loc": {
        "end": {
          "column": 43,
          "line": 35
        },
        "start": {
          "column": 0,
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
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "'US'",
                "value": "US",
                "range": [
                  1323,
                  1327
                ],
                "loc": {
                  "end": {
                    "column": 51,
                    "line": 38
                  },
                  "start": {
                    "column": 47,
                    "line": 38
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
                "name": "regionNamesInTraditionalChinese",
                "optional": false,
                "range": [
                  1288,
                  1319
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 38
                  },
                  "start": {
                    "column": 12,
                    "line": 38
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "of",
                "optional": false,
                "range": [
                  1320,
                  1322
                ],
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 38
                  },
                  "start": {
                    "column": 44,
                    "line": 38
                  }
                }
              },
              "range": [
                1288,
                1322
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 38
                },
                "start": {
                  "column": 12,
                  "line": 38
                }
              }
            },
            "optional": false,
            "range": [
              1288,
              1328
            ],
            "loc": {
              "end": {
                "column": 52,
                "line": 38
              },
              "start": {
                "column": 12,
                "line": 38
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
            "name": "console",
            "optional": false,
            "range": [
              1276,
              1283
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 38
              },
              "start": {
                "column": 0,
                "line": 38
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "log",
            "optional": false,
            "range": [
              1284,
              1287
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 38
              },
              "start": {
                "column": 8,
                "line": 38
              }
            }
          },
          "range": [
            1276,
            1287
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 38
            },
            "start": {
              "column": 0,
              "line": 38
            }
          }
        },
        "optional": false,
        "range": [
          1276,
          1329
        ],
        "loc": {
          "end": {
            "column": 53,
            "line": 38
          },
          "start": {
            "column": 0,
            "line": 38
          }
        }
      },
      "range": [
        1276,
        1330
      ],
      "loc": {
        "end": {
          "column": 54,
          "line": 38
        },
        "start": {
          "column": 0,
          "line": 38
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
            "name": "locales1",
            "optional": false,
            "range": [
              1363,
              1371
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 41
              },
              "start": {
                "column": 6,
                "line": 41
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "raw": "'ban'",
                "value": "ban",
                "range": [
                  1375,
                  1380
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 41
                  },
                  "start": {
                    "column": 18,
                    "line": 41
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "'id-u-co-pinyin'",
                "value": "id-u-co-pinyin",
                "range": [
                  1382,
                  1398
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 41
                  },
                  "start": {
                    "column": 25,
                    "line": 41
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "'de-ID'",
                "value": "de-ID",
                "range": [
                  1400,
                  1407
                ],
                "loc": {
                  "end": {
                    "column": 50,
                    "line": 41
                  },
                  "start": {
                    "column": 43,
                    "line": 41
                  }
                }
              }
            ],
            "range": [
              1374,
              1408
            ],
            "loc": {
              "end": {
                "column": 51,
                "line": 41
              },
              "start": {
                "column": 17,
                "line": 41
              }
            }
          },
          "range": [
            1363,
            1408
          ],
          "loc": {
            "end": {
              "column": 51,
              "line": 41
            },
            "start": {
              "column": 6,
              "line": 41
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        1357,
        1409
      ],
      "loc": {
        "end": {
          "column": 52,
          "line": 41
        },
        "start": {
          "column": 0,
          "line": 41
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
            "name": "options1",
            "optional": false,
            "range": [
              1416,
              1424
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 42
              },
              "start": {
                "column": 6,
                "line": 42
              }
            }
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "localeMatcher",
                    "optional": false,
                    "range": [
                      1429,
                      1442
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 42
                      },
                      "start": {
                        "column": 19,
                        "line": 42
                      }
                    }
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "raw": "'lookup'",
                    "value": "lookup",
                    "range": [
                      1444,
                      1452
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 42
                      },
                      "start": {
                        "column": 34,
                        "line": 42
                      }
                    }
                  },
                  "range": [
                    1429,
                    1452
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 42
                    },
                    "start": {
                      "column": 19,
                      "line": 42
                    }
                  }
                }
              ],
              "range": [
                1427,
                1454
              ],
              "loc": {
                "end": {
                  "column": 44,
                  "line": 42
                },
                "start": {
                  "column": 17,
                  "line": 42
                }
              }
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "range": [
                  1458,
                  1463
                ],
                "loc": {
                  "end": {
                    "column": 53,
                    "line": 42
                  },
                  "start": {
                    "column": 48,
                    "line": 42
                  }
                }
              },
              "range": [
                1458,
                1463
              ],
              "loc": {
                "end": {
                  "column": 53,
                  "line": 42
                },
                "start": {
                  "column": 48,
                  "line": 42
                }
              }
            },
            "range": [
              1427,
              1463
            ],
            "loc": {
              "end": {
                "column": 53,
                "line": 42
              },
              "start": {
                "column": 17,
                "line": 42
              }
            }
          },
          "range": [
            1416,
            1463
          ],
          "loc": {
            "end": {
              "column": 53,
              "line": 42
            },
            "start": {
              "column": 6,
              "line": 42
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        1410,
        1464
      ],
      "loc": {
        "end": {
          "column": 54,
          "line": 42
        },
        "start": {
          "column": 0,
          "line": 42
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "', '",
                "value": ", ",
                "range": [
                  1539,
                  1543
                ],
                "loc": {
                  "end": {
                    "column": 78,
                    "line": 43
                  },
                  "start": {
                    "column": 74,
                    "line": 43
                  }
                }
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "CallExpression",
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "locales1",
                    "optional": false,
                    "range": [
                      1514,
                      1522
                    ],
                    "loc": {
                      "end": {
                        "column": 57,
                        "line": 43
                      },
                      "start": {
                        "column": 49,
                        "line": 43
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "options1",
                    "optional": false,
                    "range": [
                      1524,
                      1532
                    ],
                    "loc": {
                      "end": {
                        "column": 67,
                        "line": 43
                      },
                      "start": {
                        "column": 59,
                        "line": 43
                      }
                    }
                  }
                ],
                "callee": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Intl",
                      "optional": false,
                      "range": [
                        1477,
                        1481
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 43
                        },
                        "start": {
                          "column": 12,
                          "line": 43
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "DisplayNames",
                      "optional": false,
                      "range": [
                        1482,
                        1494
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 43
                        },
                        "start": {
                          "column": 17,
                          "line": 43
                        }
                      }
                    },
                    "range": [
                      1477,
                      1494
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 43
                      },
                      "start": {
                        "column": 12,
                        "line": 43
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "supportedLocalesOf",
                    "optional": false,
                    "range": [
                      1495,
                      1513
                    ],
                    "loc": {
                      "end": {
                        "column": 48,
                        "line": 43
                      },
                      "start": {
                        "column": 30,
                        "line": 43
                      }
                    }
                  },
                  "range": [
                    1477,
                    1513
                  ],
                  "loc": {
                    "end": {
                      "column": 48,
                      "line": 43
                    },
                    "start": {
                      "column": 12,
                      "line": 43
                    }
                  }
                },
                "optional": false,
                "range": [
                  1477,
                  1533
                ],
                "loc": {
                  "end": {
                    "column": 68,
                    "line": 43
                  },
                  "start": {
                    "column": 12,
                    "line": 43
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "join",
                "optional": false,
                "range": [
                  1534,
                  1538
                ],
                "loc": {
                  "end": {
                    "column": 73,
                    "line": 43
                  },
                  "start": {
                    "column": 69,
                    "line": 43
                  }
                }
              },
              "range": [
                1477,
                1538
              ],
              "loc": {
                "end": {
                  "column": 73,
                  "line": 43
                },
                "start": {
                  "column": 12,
                  "line": 43
                }
              }
            },
            "optional": false,
            "range": [
              1477,
              1544
            ],
            "loc": {
              "end": {
                "column": 79,
                "line": 43
              },
              "start": {
                "column": 12,
                "line": 43
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
            "name": "console",
            "optional": false,
            "range": [
              1465,
              1472
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 43
              },
              "start": {
                "column": 0,
                "line": 43
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "log",
            "optional": false,
            "range": [
              1473,
              1476
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 43
              },
              "start": {
                "column": 8,
                "line": 43
              }
            }
          },
          "range": [
            1465,
            1476
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 43
            },
            "start": {
              "column": 0,
              "line": 43
            }
          }
        },
        "optional": false,
        "range": [
          1465,
          1545
        ],
        "loc": {
          "end": {
            "column": 80,
            "line": 43
          },
          "start": {
            "column": 0,
            "line": 43
          }
        }
      },
      "range": [
        1465,
        1546
      ],
      "loc": {
        "end": {
          "column": 81,
          "line": 43
        },
        "start": {
          "column": 0,
          "line": 43
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Intl",
            "optional": false,
            "range": [
              1552,
              1556
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 45
              },
              "start": {
                "column": 4,
                "line": 45
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "Locale",
            "optional": false,
            "range": [
              1557,
              1563
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 45
              },
              "start": {
                "column": 9,
                "line": 45
              }
            }
          },
          "range": [
            1552,
            1563
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 45
            },
            "start": {
              "column": 4,
              "line": 45
            }
          }
        },
        "range": [
          1548,
          1565
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 45
          },
          "start": {
            "column": 0,
            "line": 45
          }
        }
      },
      "range": [
        1548,
        1566
      ],
      "loc": {
        "end": {
          "column": 18,
          "line": 45
        },
        "start": {
          "column": 0,
          "line": 45
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "arguments": [
          {
            "type": "NewExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "'en-US'",
                "value": "en-US",
                "range": [
                  1615,
                  1622
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 46
                  },
                  "start": {
                    "column": 32,
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
                "name": "Intl",
                "optional": false,
                "range": [
                  1603,
                  1607
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 46
                  },
                  "start": {
                    "column": 20,
                    "line": 46
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "Locale",
                "optional": false,
                "range": [
                  1608,
                  1614
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 46
                  },
                  "start": {
                    "column": 25,
                    "line": 46
                  }
                }
              },
              "range": [
                1603,
                1614
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 46
                },
                "start": {
                  "column": 20,
                  "line": 46
                }
              }
            },
            "range": [
              1599,
              1623
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 46
              },
              "start": {
                "column": 16,
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
            "name": "Intl",
            "optional": false,
            "range": [
              1587,
              1591
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 46
              },
              "start": {
                "column": 4,
                "line": 46
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "Locale",
            "optional": false,
            "range": [
              1592,
              1598
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 46
              },
              "start": {
                "column": 9,
                "line": 46
              }
            }
          },
          "range": [
            1587,
            1598
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 46
            },
            "start": {
              "column": 4,
              "line": 46
            }
          }
        },
        "range": [
          1583,
          1624
        ],
        "loc": {
          "end": {
            "column": 41,
            "line": 46
          },
          "start": {
            "column": 0,
            "line": 46
          }
        }
      },
      "range": [
        1583,
        1625
      ],
      "loc": {
        "end": {
          "column": 42,
          "line": 46
        },
        "start": {
          "column": 0,
          "line": 46
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Intl",
            "optional": false,
            "range": [
              1631,
              1635
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 48
              },
              "start": {
                "column": 4,
                "line": 48
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "DisplayNames",
            "optional": false,
            "range": [
              1636,
              1648
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 48
              },
              "start": {
                "column": 9,
                "line": 48
              }
            }
          },
          "range": [
            1631,
            1648
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 48
            },
            "start": {
              "column": 4,
              "line": 48
            }
          }
        },
        "range": [
          1627,
          1650
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 48
          },
          "start": {
            "column": 0,
            "line": 48
          }
        }
      },
      "range": [
        1627,
        1651
      ],
      "loc": {
        "end": {
          "column": 24,
          "line": 48
        },
        "start": {
          "column": 0,
          "line": 48
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "'en'",
            "value": "en",
            "range": [
              1705,
              1709
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 49
              },
              "start": {
                "column": 22,
                "line": 49
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
            "name": "Intl",
            "optional": false,
            "range": [
              1687,
              1691
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 49
              },
              "start": {
                "column": 4,
                "line": 49
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "DisplayNames",
            "optional": false,
            "range": [
              1692,
              1704
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 49
              },
              "start": {
                "column": 9,
                "line": 49
              }
            }
          },
          "range": [
            1687,
            1704
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 49
            },
            "start": {
              "column": 4,
              "line": 49
            }
          }
        },
        "range": [
          1683,
          1710
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 49
          },
          "start": {
            "column": 0,
            "line": 49
          }
        }
      },
      "range": [
        1683,
        1711
      ],
      "loc": {
        "end": {
          "column": 28,
          "line": 49
        },
        "start": {
          "column": 0,
          "line": 49
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "'en'",
            "value": "en",
            "range": [
              1765,
              1769
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 50
              },
              "start": {
                "column": 22,
                "line": 50
              }
            }
          },
          {
            "type": "ObjectExpression",
            "properties": [],
            "range": [
              1771,
              1773
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 50
              },
              "start": {
                "column": 28,
                "line": 50
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
            "name": "Intl",
            "optional": false,
            "range": [
              1747,
              1751
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 50
              },
              "start": {
                "column": 4,
                "line": 50
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "DisplayNames",
            "optional": false,
            "range": [
              1752,
              1764
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 50
              },
              "start": {
                "column": 9,
                "line": 50
              }
            }
          },
          "range": [
            1747,
            1764
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 50
            },
            "start": {
              "column": 4,
              "line": 50
            }
          }
        },
        "range": [
          1743,
          1774
        ],
        "loc": {
          "end": {
            "column": 31,
            "line": 50
          },
          "start": {
            "column": 0,
            "line": 50
          }
        }
      },
      "range": [
        1743,
        1775
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
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "'en-GB'",
                "value": "en-GB",
                "range": [
                  1877,
                  1884
                ],
                "loc": {
                  "end": {
                    "column": 77,
                    "line": 51
                  },
                  "start": {
                    "column": 70,
                    "line": 51
                  }
                }
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "NewExpression",
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "undefined",
                    "optional": false,
                    "range": [
                      1842,
                      1851
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 51
                      },
                      "start": {
                        "column": 35,
                        "line": 51
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
                          "name": "type",
                          "optional": false,
                          "range": [
                            1854,
                            1858
                          ],
                          "loc": {
                            "end": {
                              "column": 51,
                              "line": 51
                            },
                            "start": {
                              "column": 47,
                              "line": 51
                            }
                          }
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Literal",
                          "raw": "'language'",
                          "value": "language",
                          "range": [
                            1860,
                            1870
                          ],
                          "loc": {
                            "end": {
                              "column": 63,
                              "line": 51
                            },
                            "start": {
                              "column": 53,
                              "line": 51
                            }
                          }
                        },
                        "range": [
                          1854,
                          1870
                        ],
                        "loc": {
                          "end": {
                            "column": 63,
                            "line": 51
                          },
                          "start": {
                            "column": 47,
                            "line": 51
                          }
                        }
                      }
                    ],
                    "range": [
                      1853,
                      1871
                    ],
                    "loc": {
                      "end": {
                        "column": 64,
                        "line": 51
                      },
                      "start": {
                        "column": 46,
                        "line": 51
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
                    "name": "Intl",
                    "optional": false,
                    "range": [
                      1824,
                      1828
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 51
                      },
                      "start": {
                        "column": 17,
                        "line": 51
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "DisplayNames",
                    "optional": false,
                    "range": [
                      1829,
                      1841
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 51
                      },
                      "start": {
                        "column": 22,
                        "line": 51
                      }
                    }
                  },
                  "range": [
                    1824,
                    1841
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 51
                    },
                    "start": {
                      "column": 17,
                      "line": 51
                    }
                  }
                },
                "range": [
                  1820,
                  1872
                ],
                "loc": {
                  "end": {
                    "column": 65,
                    "line": 51
                  },
                  "start": {
                    "column": 13,
                    "line": 51
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "of",
                "optional": false,
                "range": [
                  1874,
                  1876
                ],
                "loc": {
                  "end": {
                    "column": 69,
                    "line": 51
                  },
                  "start": {
                    "column": 67,
                    "line": 51
                  }
                }
              },
              "range": [
                1819,
                1876
              ],
              "loc": {
                "end": {
                  "column": 69,
                  "line": 51
                },
                "start": {
                  "column": 12,
                  "line": 51
                }
              }
            },
            "optional": false,
            "range": [
              1819,
              1885
            ],
            "loc": {
              "end": {
                "column": 78,
                "line": 51
              },
              "start": {
                "column": 12,
                "line": 51
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
            "name": "console",
            "optional": false,
            "range": [
              1807,
              1814
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 51
              },
              "start": {
                "column": 0,
                "line": 51
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "log",
            "optional": false,
            "range": [
              1815,
              1818
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 51
              },
              "start": {
                "column": 8,
                "line": 51
              }
            }
          },
          "range": [
            1807,
            1818
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 51
            },
            "start": {
              "column": 0,
              "line": 51
            }
          }
        },
        "optional": false,
        "range": [
          1807,
          1886
        ],
        "loc": {
          "end": {
            "column": 79,
            "line": 51
          },
          "start": {
            "column": 0,
            "line": 51
          }
        }
      },
      "range": [
        1807,
        1887
      ],
      "loc": {
        "end": {
          "column": 80,
          "line": 51
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
            "name": "localesArg",
            "optional": false,
            "range": [
              1916,
              1926
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 53
              },
              "start": {
                "column": 6,
                "line": 53
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "raw": "\"es-ES\"",
                "value": "es-ES",
                "range": [
                  1930,
                  1937
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 53
                  },
                  "start": {
                    "column": 20,
                    "line": 53
                  }
                }
              },
              {
                "type": "NewExpression",
                "arguments": [
                  {
                    "type": "Literal",
                    "raw": "\"en-US\"",
                    "value": "en-US",
                    "range": [
                      1955,
                      1962
                    ],
                    "loc": {
                      "end": {
                        "column": 52,
                        "line": 53
                      },
                      "start": {
                        "column": 45,
                        "line": 53
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
                    "name": "Intl",
                    "optional": false,
                    "range": [
                      1943,
                      1947
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 53
                      },
                      "start": {
                        "column": 33,
                        "line": 53
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Locale",
                    "optional": false,
                    "range": [
                      1948,
                      1954
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 53
                      },
                      "start": {
                        "column": 38,
                        "line": 53
                      }
                    }
                  },
                  "range": [
                    1943,
                    1954
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 53
                    },
                    "start": {
                      "column": 33,
                      "line": 53
                    }
                  }
                },
                "range": [
                  1939,
                  1963
                ],
                "loc": {
                  "end": {
                    "column": 53,
                    "line": 53
                  },
                  "start": {
                    "column": 29,
                    "line": 53
                  }
                }
              }
            ],
            "range": [
              1929,
              1964
            ],
            "loc": {
              "end": {
                "column": 54,
                "line": 53
              },
              "start": {
                "column": 19,
                "line": 53
              }
            }
          },
          "range": [
            1916,
            1964
          ],
          "loc": {
            "end": {
              "column": 54,
              "line": 53
            },
            "start": {
              "column": 6,
              "line": 53
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        1910,
        1965
      ],
      "loc": {
        "end": {
          "column": 55,
          "line": 53
        },
        "start": {
          "column": 0,
          "line": 53
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "CallExpression",
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "NewExpression",
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "localesArg",
                      "optional": false,
                      "range": [
                        2001,
                        2011
                      ],
                      "loc": {
                        "end": {
                          "column": 45,
                          "line": 54
                        },
                        "start": {
                          "column": 35,
                          "line": 54
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
                            "name": "type",
                            "optional": false,
                            "range": [
                              2014,
                              2018
                            ],
                            "loc": {
                              "end": {
                                "column": 52,
                                "line": 54
                              },
                              "start": {
                                "column": 48,
                                "line": 54
                              }
                            }
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "raw": "'language'",
                            "value": "language",
                            "range": [
                              2020,
                              2030
                            ],
                            "loc": {
                              "end": {
                                "column": 64,
                                "line": 54
                              },
                              "start": {
                                "column": 54,
                                "line": 54
                              }
                            }
                          },
                          "range": [
                            2014,
                            2030
                          ],
                          "loc": {
                            "end": {
                              "column": 64,
                              "line": 54
                            },
                            "start": {
                              "column": 48,
                              "line": 54
                            }
                          }
                        }
                      ],
                      "range": [
                        2013,
                        2031
                      ],
                      "loc": {
                        "end": {
                          "column": 65,
                          "line": 54
                        },
                        "start": {
                          "column": 47,
                          "line": 54
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
                      "name": "Intl",
                      "optional": false,
                      "range": [
                        1983,
                        1987
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 54
                        },
                        "start": {
                          "column": 17,
                          "line": 54
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "DisplayNames",
                      "optional": false,
                      "range": [
                        1988,
                        2000
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 54
                        },
                        "start": {
                          "column": 22,
                          "line": 54
                        }
                      }
                    },
                    "range": [
                      1983,
                      2000
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 54
                      },
                      "start": {
                        "column": 17,
                        "line": 54
                      }
                    }
                  },
                  "range": [
                    1979,
                    2032
                  ],
                  "loc": {
                    "end": {
                      "column": 66,
                      "line": 54
                    },
                    "start": {
                      "column": 13,
                      "line": 54
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "resolvedOptions",
                  "optional": false,
                  "range": [
                    2034,
                    2049
                  ],
                  "loc": {
                    "end": {
                      "column": 83,
                      "line": 54
                    },
                    "start": {
                      "column": 68,
                      "line": 54
                    }
                  }
                },
                "range": [
                  1978,
                  2049
                ],
                "loc": {
                  "end": {
                    "column": 83,
                    "line": 54
                  },
                  "start": {
                    "column": 12,
                    "line": 54
                  }
                }
              },
              "optional": false,
              "range": [
                1978,
                2051
              ],
              "loc": {
                "end": {
                  "column": 85,
                  "line": 54
                },
                "start": {
                  "column": 12,
                  "line": 54
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "locale",
              "optional": false,
              "range": [
                2052,
                2058
              ],
              "loc": {
                "end": {
                  "column": 92,
                  "line": 54
                },
                "start": {
                  "column": 86,
                  "line": 54
                }
              }
            },
            "range": [
              1978,
              2058
            ],
            "loc": {
              "end": {
                "column": 92,
                "line": 54
              },
              "start": {
                "column": 12,
                "line": 54
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
            "name": "console",
            "optional": false,
            "range": [
              1966,
              1973
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 54
              },
              "start": {
                "column": 0,
                "line": 54
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "log",
            "optional": false,
            "range": [
              1974,
              1977
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 54
              },
              "start": {
                "column": 8,
                "line": 54
              }
            }
          },
          "range": [
            1966,
            1977
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 54
            },
            "start": {
              "column": 0,
              "line": 54
            }
          }
        },
        "optional": false,
        "range": [
          1966,
          2059
        ],
        "loc": {
          "end": {
            "column": 93,
            "line": 54
          },
          "start": {
            "column": 0,
            "line": 54
          }
        }
      },
      "range": [
        1966,
        2060
      ],
      "loc": {
        "end": {
          "column": 94,
          "line": 54
        },
        "start": {
          "column": 0,
          "line": 54
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "localesArg",
                "optional": false,
                "range": [
                  2121,
                  2131
                ],
                "loc": {
                  "end": {
                    "column": 59,
                    "line": 55
                  },
                  "start": {
                    "column": 49,
                    "line": 55
                  }
                }
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Intl",
                  "optional": false,
                  "range": [
                    2084,
                    2088
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 55
                    },
                    "start": {
                      "column": 12,
                      "line": 55
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "DisplayNames",
                  "optional": false,
                  "range": [
                    2089,
                    2101
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 55
                    },
                    "start": {
                      "column": 17,
                      "line": 55
                    }
                  }
                },
                "range": [
                  2084,
                  2101
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 55
                  },
                  "start": {
                    "column": 12,
                    "line": 55
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "supportedLocalesOf",
                "optional": false,
                "range": [
                  2102,
                  2120
                ],
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 55
                  },
                  "start": {
                    "column": 30,
                    "line": 55
                  }
                }
              },
              "range": [
                2084,
                2120
              ],
              "loc": {
                "end": {
                  "column": 48,
                  "line": 55
                },
                "start": {
                  "column": 12,
                  "line": 55
                }
              }
            },
            "optional": false,
            "range": [
              2084,
              2132
            ],
            "loc": {
              "end": {
                "column": 60,
                "line": 55
              },
              "start": {
                "column": 12,
                "line": 55
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
            "name": "console",
            "optional": false,
            "range": [
              2072,
              2079
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 55
              },
              "start": {
                "column": 0,
                "line": 55
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "log",
            "optional": false,
            "range": [
              2080,
              2083
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 55
              },
              "start": {
                "column": 8,
                "line": 55
              }
            }
          },
          "range": [
            2072,
            2083
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 55
            },
            "start": {
              "column": 0,
              "line": 55
            }
          }
        },
        "optional": false,
        "range": [
          2072,
          2133
        ],
        "loc": {
          "end": {
            "column": 61,
            "line": 55
          },
          "start": {
            "column": 0,
            "line": 55
          }
        }
      },
      "range": [
        2072,
        2134
      ],
      "loc": {
        "end": {
          "column": 62,
          "line": 55
        },
        "start": {
          "column": 0,
          "line": 55
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "CallExpression",
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Intl",
                  "optional": false,
                  "range": [
                    2169,
                    2173
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 56
                    },
                    "start": {
                      "column": 12,
                      "line": 56
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "DisplayNames",
                  "optional": false,
                  "range": [
                    2174,
                    2186
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 56
                    },
                    "start": {
                      "column": 17,
                      "line": 56
                    }
                  }
                },
                "range": [
                  2169,
                  2186
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 56
                  },
                  "start": {
                    "column": 12,
                    "line": 56
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "supportedLocalesOf",
                "optional": false,
                "range": [
                  2187,
                  2205
                ],
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 56
                  },
                  "start": {
                    "column": 30,
                    "line": 56
                  }
                }
              },
              "range": [
                2169,
                2205
              ],
              "loc": {
                "end": {
                  "column": 48,
                  "line": 56
                },
                "start": {
                  "column": 12,
                  "line": 56
                }
              }
            },
            "optional": false,
            "range": [
              2169,
              2207
            ],
            "loc": {
              "end": {
                "column": 50,
                "line": 56
              },
              "start": {
                "column": 12,
                "line": 56
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
            "name": "console",
            "optional": false,
            "range": [
              2157,
              2164
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 56
              },
              "start": {
                "column": 0,
                "line": 56
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "log",
            "optional": false,
            "range": [
              2165,
              2168
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 56
              },
              "start": {
                "column": 8,
                "line": 56
              }
            }
          },
          "range": [
            2157,
            2168
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 56
            },
            "start": {
              "column": 0,
              "line": 56
            }
          }
        },
        "optional": false,
        "range": [
          2157,
          2208
        ],
        "loc": {
          "end": {
            "column": 51,
            "line": 56
          },
          "start": {
            "column": 0,
            "line": 56
          }
        }
      },
      "range": [
        2157,
        2209
      ],
      "loc": {
        "end": {
          "column": 52,
          "line": 56
        },
        "start": {
          "column": 0,
          "line": 56
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "localesArg",
                "optional": false,
                "range": [
                  2265,
                  2275
                ],
                "loc": {
                  "end": {
                    "column": 59,
                    "line": 57
                  },
                  "start": {
                    "column": 49,
                    "line": 57
                  }
                }
              },
              {
                "type": "ObjectExpression",
                "properties": [],
                "range": [
                  2277,
                  2279
                ],
                "loc": {
                  "end": {
                    "column": 63,
                    "line": 57
                  },
                  "start": {
                    "column": 61,
                    "line": 57
                  }
                }
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Intl",
                  "optional": false,
                  "range": [
                    2228,
                    2232
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 57
                    },
                    "start": {
                      "column": 12,
                      "line": 57
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "DisplayNames",
                  "optional": false,
                  "range": [
                    2233,
                    2245
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 57
                    },
                    "start": {
                      "column": 17,
                      "line": 57
                    }
                  }
                },
                "range": [
                  2228,
                  2245
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 57
                  },
                  "start": {
                    "column": 12,
                    "line": 57
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "supportedLocalesOf",
                "optional": false,
                "range": [
                  2246,
                  2264
                ],
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 57
                  },
                  "start": {
                    "column": 30,
                    "line": 57
                  }
                }
              },
              "range": [
                2228,
                2264
              ],
              "loc": {
                "end": {
                  "column": 48,
                  "line": 57
                },
                "start": {
                  "column": 12,
                  "line": 57
                }
              }
            },
            "optional": false,
            "range": [
              2228,
              2280
            ],
            "loc": {
              "end": {
                "column": 64,
                "line": 57
              },
              "start": {
                "column": 12,
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
            "name": "console",
            "optional": false,
            "range": [
              2216,
              2223
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 57
              },
              "start": {
                "column": 0,
                "line": 57
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "log",
            "optional": false,
            "range": [
              2224,
              2227
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 57
              },
              "start": {
                "column": 8,
                "line": 57
              }
            }
          },
          "range": [
            2216,
            2227
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 57
            },
            "start": {
              "column": 0,
              "line": 57
            }
          }
        },
        "optional": false,
        "range": [
          2216,
          2281
        ],
        "loc": {
          "end": {
            "column": 65,
            "line": 57
          },
          "start": {
            "column": 0,
            "line": 57
          }
        }
      },
      "range": [
        2216,
        2282
      ],
      "loc": {
        "end": {
          "column": 66,
          "line": 57
        },
        "start": {
          "column": 0,
          "line": 57
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 58
    },
    "start": {
      "column": 0,
      "line": 2
    }
  },
  "hashbang": null
}
```
