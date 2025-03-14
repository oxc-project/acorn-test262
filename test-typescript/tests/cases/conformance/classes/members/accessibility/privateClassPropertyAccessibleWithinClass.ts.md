__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    14,
    848
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          22,
          381
        ],
        "body": [
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
                36,
                37
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 4
                },
                "start": {
                  "column": 12,
                  "line": 4
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
                  "line": 4
                },
                "start": {
                  "column": 13,
                  "line": 4
                }
              },
              "range": [
                37,
                45
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  39,
                  45
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 4
                  },
                  "start": {
                    "column": 15,
                    "line": 4
                  }
                }
              }
            },
            "value": null,
            "range": [
              28,
              46
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 4
              },
              "start": {
                "column": 4,
                "line": 4
              }
            }
          },
          {
            "type": "MethodDefinition",
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "range": [
                63,
                64
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 5
                },
                "start": {
                  "column": 16,
                  "line": 5
                }
              }
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                64,
                85
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "range": [
                          76,
                          80
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 5
                          },
                          "start": {
                            "column": 29,
                            "line": 5
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          81,
                          82
                        ],
                        "loc": {
                          "end": {
                            "column": 35,
                            "line": 5
                          },
                          "start": {
                            "column": 34,
                            "line": 5
                          }
                        }
                      },
                      "range": [
                        76,
                        82
                      ],
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 5
                        },
                        "start": {
                          "column": 29,
                          "line": 5
                        }
                      }
                    },
                    "range": [
                      69,
                      83
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 5
                      },
                      "start": {
                        "column": 22,
                        "line": 5
                      }
                    }
                  }
                ],
                "range": [
                  67,
                  85
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 5
                  },
                  "start": {
                    "column": 20,
                    "line": 5
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
                  "column": 38,
                  "line": 5
                },
                "start": {
                  "column": 17,
                  "line": 5
                }
              }
            },
            "range": [
              51,
              85
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 5
              },
              "start": {
                "column": 4,
                "line": 5
              }
            }
          },
          {
            "type": "MethodDefinition",
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "range": [
                102,
                103
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 6
                },
                "start": {
                  "column": 16,
                  "line": 6
                }
              }
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                103,
                127
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
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
                            109,
                            113
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 6
                            },
                            "start": {
                              "column": 23,
                              "line": 6
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "range": [
                            114,
                            115
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
                          109,
                          115
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 6
                          },
                          "start": {
                            "column": 23,
                            "line": 6
                          }
                        }
                      },
                      "right": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "range": [
                            118,
                            122
                          ],
                          "loc": {
                            "end": {
                              "column": 36,
                              "line": 6
                            },
                            "start": {
                              "column": 32,
                              "line": 6
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "range": [
                            123,
                            124
                          ],
                          "loc": {
                            "end": {
                              "column": 38,
                              "line": 6
                            },
                            "start": {
                              "column": 37,
                              "line": 6
                            }
                          }
                        },
                        "range": [
                          118,
                          124
                        ],
                        "loc": {
                          "end": {
                            "column": 38,
                            "line": 6
                          },
                          "start": {
                            "column": 32,
                            "line": 6
                          }
                        }
                      },
                      "range": [
                        109,
                        124
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 6
                        },
                        "start": {
                          "column": 23,
                          "line": 6
                        }
                      }
                    },
                    "range": [
                      109,
                      125
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 6
                      },
                      "start": {
                        "column": 23,
                        "line": 6
                      }
                    }
                  }
                ],
                "range": [
                  107,
                  127
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 6
                  },
                  "start": {
                    "column": 21,
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
                  "range": [
                    104,
                    105
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 6
                    },
                    "start": {
                      "column": 18,
                      "line": 6
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 6
                },
                "start": {
                  "column": 17,
                  "line": 6
                }
              }
            },
            "range": [
              90,
              127
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 6
              },
              "start": {
                "column": 4,
                "line": 6
              }
            }
          },
          {
            "type": "MethodDefinition",
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "range": [
                140,
                143
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 7
                },
                "start": {
                  "column": 12,
                  "line": 7
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
                143,
                166
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "range": [
                          155,
                          159
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 7
                          },
                          "start": {
                            "column": 27,
                            "line": 7
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
                          160,
                          163
                        ],
                        "loc": {
                          "end": {
                            "column": 35,
                            "line": 7
                          },
                          "start": {
                            "column": 32,
                            "line": 7
                          }
                        }
                      },
                      "range": [
                        155,
                        163
                      ],
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 7
                        },
                        "start": {
                          "column": 27,
                          "line": 7
                        }
                      }
                    },
                    "range": [
                      148,
                      164
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 7
                      },
                      "start": {
                        "column": 20,
                        "line": 7
                      }
                    }
                  }
                ],
                "range": [
                  146,
                  166
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 7
                  },
                  "start": {
                    "column": 18,
                    "line": 7
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
                  "column": 38,
                  "line": 7
                },
                "start": {
                  "column": 15,
                  "line": 7
                }
              }
            },
            "range": [
              132,
              166
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 7
              },
              "start": {
                "column": 4,
                "line": 7
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
                187,
                188
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 9
                },
                "start": {
                  "column": 19,
                  "line": 9
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 28,
                  "line": 9
                },
                "start": {
                  "column": 20,
                  "line": 9
                }
              },
              "range": [
                188,
                196
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  190,
                  196
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 9
                  },
                  "start": {
                    "column": 22,
                    "line": 9
                  }
                }
              }
            },
            "value": null,
            "range": [
              172,
              197
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 9
              },
              "start": {
                "column": 4,
                "line": 9
              }
            }
          },
          {
            "type": "MethodDefinition",
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "range": [
                221,
                222
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 10
                },
                "start": {
                  "column": 23,
                  "line": 10
                }
              }
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "range": [
                222,
                243
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "range": [
                          234,
                          238
                        ],
                        "loc": {
                          "end": {
                            "column": 40,
                            "line": 10
                          },
                          "start": {
                            "column": 36,
                            "line": 10
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          239,
                          240
                        ],
                        "loc": {
                          "end": {
                            "column": 42,
                            "line": 10
                          },
                          "start": {
                            "column": 41,
                            "line": 10
                          }
                        }
                      },
                      "range": [
                        234,
                        240
                      ],
                      "loc": {
                        "end": {
                          "column": 42,
                          "line": 10
                        },
                        "start": {
                          "column": 36,
                          "line": 10
                        }
                      }
                    },
                    "range": [
                      227,
                      241
                    ],
                    "loc": {
                      "end": {
                        "column": 43,
                        "line": 10
                      },
                      "start": {
                        "column": 29,
                        "line": 10
                      }
                    }
                  }
                ],
                "range": [
                  225,
                  243
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 10
                  },
                  "start": {
                    "column": 27,
                    "line": 10
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
                  "column": 45,
                  "line": 10
                },
                "start": {
                  "column": 24,
                  "line": 10
                }
              }
            },
            "range": [
              202,
              243
            ],
            "loc": {
              "end": {
                "column": 45,
                "line": 10
              },
              "start": {
                "column": 4,
                "line": 10
              }
            }
          },
          {
            "type": "MethodDefinition",
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "range": [
                267,
                268
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 11
                },
                "start": {
                  "column": 23,
                  "line": 11
                }
              }
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "range": [
                268,
                292
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
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
                            274,
                            278
                          ],
                          "loc": {
                            "end": {
                              "column": 34,
                              "line": 11
                            },
                            "start": {
                              "column": 30,
                              "line": 11
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "range": [
                            279,
                            280
                          ],
                          "loc": {
                            "end": {
                              "column": 36,
                              "line": 11
                            },
                            "start": {
                              "column": 35,
                              "line": 11
                            }
                          }
                        },
                        "range": [
                          274,
                          280
                        ],
                        "loc": {
                          "end": {
                            "column": 36,
                            "line": 11
                          },
                          "start": {
                            "column": 30,
                            "line": 11
                          }
                        }
                      },
                      "right": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "range": [
                            283,
                            287
                          ],
                          "loc": {
                            "end": {
                              "column": 43,
                              "line": 11
                            },
                            "start": {
                              "column": 39,
                              "line": 11
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "range": [
                            288,
                            289
                          ],
                          "loc": {
                            "end": {
                              "column": 45,
                              "line": 11
                            },
                            "start": {
                              "column": 44,
                              "line": 11
                            }
                          }
                        },
                        "range": [
                          283,
                          289
                        ],
                        "loc": {
                          "end": {
                            "column": 45,
                            "line": 11
                          },
                          "start": {
                            "column": 39,
                            "line": 11
                          }
                        }
                      },
                      "range": [
                        274,
                        289
                      ],
                      "loc": {
                        "end": {
                          "column": 45,
                          "line": 11
                        },
                        "start": {
                          "column": 30,
                          "line": 11
                        }
                      }
                    },
                    "range": [
                      274,
                      290
                    ],
                    "loc": {
                      "end": {
                        "column": 46,
                        "line": 11
                      },
                      "start": {
                        "column": 30,
                        "line": 11
                      }
                    }
                  }
                ],
                "range": [
                  272,
                  292
                ],
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 11
                  },
                  "start": {
                    "column": 28,
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
                  "range": [
                    269,
                    270
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 11
                    },
                    "start": {
                      "column": 25,
                      "line": 11
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 48,
                  "line": 11
                },
                "start": {
                  "column": 24,
                  "line": 11
                }
              }
            },
            "range": [
              248,
              292
            ],
            "loc": {
              "end": {
                "column": 48,
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
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "range": [
                312,
                315
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 12
                },
                "start": {
                  "column": 19,
                  "line": 12
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
                315,
                338
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "range": [
                          327,
                          331
                        ],
                        "loc": {
                          "end": {
                            "column": 38,
                            "line": 12
                          },
                          "start": {
                            "column": 34,
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
                          332,
                          335
                        ],
                        "loc": {
                          "end": {
                            "column": 42,
                            "line": 12
                          },
                          "start": {
                            "column": 39,
                            "line": 12
                          }
                        }
                      },
                      "range": [
                        327,
                        335
                      ],
                      "loc": {
                        "end": {
                          "column": 42,
                          "line": 12
                        },
                        "start": {
                          "column": 34,
                          "line": 12
                        }
                      }
                    },
                    "range": [
                      320,
                      336
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
                ],
                "range": [
                  318,
                  338
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 12
                  },
                  "start": {
                    "column": 25,
                    "line": 12
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
                  "column": 45,
                  "line": 12
                },
                "start": {
                  "column": 22,
                  "line": 12
                }
              }
            },
            "range": [
              297,
              338
            ],
            "loc": {
              "end": {
                "column": 45,
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
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "range": [
                358,
                361
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 13
                },
                "start": {
                  "column": 19,
                  "line": 13
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
                361,
                379
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "range": [
                            366,
                            370
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 13
                            },
                            "start": {
                              "column": 27,
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
                            371,
                            374
                          ],
                          "loc": {
                            "end": {
                              "column": 35,
                              "line": 13
                            },
                            "start": {
                              "column": 32,
                              "line": 13
                            }
                          }
                        },
                        "range": [
                          366,
                          374
                        ],
                        "loc": {
                          "end": {
                            "column": 35,
                            "line": 13
                          },
                          "start": {
                            "column": 27,
                            "line": 13
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        366,
                        376
                      ],
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 13
                        },
                        "start": {
                          "column": 27,
                          "line": 13
                        }
                      }
                    },
                    "range": [
                      366,
                      377
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
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
                  364,
                  379
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 13
                  },
                  "start": {
                    "column": 25,
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
                  "column": 40,
                  "line": 13
                },
                "start": {
                  "column": 22,
                  "line": 13
                }
              }
            },
            "range": [
              343,
              379
            ],
            "loc": {
              "end": {
                "column": 40,
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
          20,
          21
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
        14,
        381
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 14
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
          427,
          847
        ],
        "body": [
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
                441,
                442
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 18
                },
                "start": {
                  "column": 12,
                  "line": 18
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
                  "line": 18
                },
                "start": {
                  "column": 13,
                  "line": 18
                }
              },
              "range": [
                442,
                450
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  444,
                  450
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 18
                  },
                  "start": {
                    "column": 15,
                    "line": 18
                  }
                }
              }
            },
            "value": null,
            "range": [
              433,
              451
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 18
              },
              "start": {
                "column": 4,
                "line": 18
              }
            }
          },
          {
            "type": "MethodDefinition",
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "range": [
                468,
                469
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 19
                },
                "start": {
                  "column": 16,
                  "line": 19
                }
              }
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                469,
                502
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "async": false,
                      "body": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "range": [
                            480,
                            484
                          ],
                          "loc": {
                            "end": {
                              "column": 32,
                              "line": 19
                            },
                            "start": {
                              "column": 28,
                              "line": 19
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "range": [
                            485,
                            486
                          ],
                          "loc": {
                            "end": {
                              "column": 34,
                              "line": 19
                            },
                            "start": {
                              "column": 33,
                              "line": 19
                            }
                          }
                        },
                        "range": [
                          480,
                          486
                        ],
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 19
                          },
                          "start": {
                            "column": 28,
                            "line": 19
                          }
                        }
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": [],
                      "range": [
                        474,
                        486
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 19
                        },
                        "start": {
                          "column": 22,
                          "line": 19
                        }
                      }
                    },
                    "range": [
                      474,
                      487
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 19
                      },
                      "start": {
                        "column": 22,
                        "line": 19
                      }
                    }
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "raw": "null",
                      "value": null,
                      "range": [
                        495,
                        499
                      ],
                      "loc": {
                        "end": {
                          "column": 47,
                          "line": 19
                        },
                        "start": {
                          "column": 43,
                          "line": 19
                        }
                      }
                    },
                    "range": [
                      488,
                      500
                    ],
                    "loc": {
                      "end": {
                        "column": 48,
                        "line": 19
                      },
                      "start": {
                        "column": 36,
                        "line": 19
                      }
                    }
                  }
                ],
                "range": [
                  472,
                  502
                ],
                "loc": {
                  "end": {
                    "column": 50,
                    "line": 19
                  },
                  "start": {
                    "column": 20,
                    "line": 19
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
                  "column": 50,
                  "line": 19
                },
                "start": {
                  "column": 17,
                  "line": 19
                }
              }
            },
            "range": [
              456,
              502
            ],
            "loc": {
              "end": {
                "column": 50,
                "line": 19
              },
              "start": {
                "column": 4,
                "line": 19
              }
            }
          },
          {
            "type": "MethodDefinition",
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "range": [
                519,
                520
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 20
                },
                "start": {
                  "column": 16,
                  "line": 20
                }
              }
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                520,
                554
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
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
                                    534,
                                    538
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
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "y",
                                  "optional": false,
                                  "range": [
                                    539,
                                    540
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 37,
                                      "line": 20
                                    },
                                    "start": {
                                      "column": 36,
                                      "line": 20
                                    }
                                  }
                                },
                                "range": [
                                  534,
                                  540
                                ],
                                "loc": {
                                  "end": {
                                    "column": 37,
                                    "line": 20
                                  },
                                  "start": {
                                    "column": 31,
                                    "line": 20
                                  }
                                }
                              },
                              "right": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "ThisExpression",
                                  "range": [
                                    543,
                                    547
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 44,
                                      "line": 20
                                    },
                                    "start": {
                                      "column": 40,
                                      "line": 20
                                    }
                                  }
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "range": [
                                    548,
                                    549
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 46,
                                      "line": 20
                                    },
                                    "start": {
                                      "column": 45,
                                      "line": 20
                                    }
                                  }
                                },
                                "range": [
                                  543,
                                  549
                                ],
                                "loc": {
                                  "end": {
                                    "column": 46,
                                    "line": 20
                                  },
                                  "start": {
                                    "column": 40,
                                    "line": 20
                                  }
                                }
                              },
                              "range": [
                                534,
                                549
                              ],
                              "loc": {
                                "end": {
                                  "column": 46,
                                  "line": 20
                                },
                                "start": {
                                  "column": 31,
                                  "line": 20
                                }
                              }
                            },
                            "range": [
                              534,
                              550
                            ],
                            "loc": {
                              "end": {
                                "column": 47,
                                "line": 20
                              },
                              "start": {
                                "column": 31,
                                "line": 20
                              }
                            }
                          }
                        ],
                        "range": [
                          532,
                          552
                        ],
                        "loc": {
                          "end": {
                            "column": 49,
                            "line": 20
                          },
                          "start": {
                            "column": 29,
                            "line": 20
                          }
                        }
                      },
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [],
                      "range": [
                        526,
                        552
                      ],
                      "loc": {
                        "end": {
                          "column": 49,
                          "line": 20
                        },
                        "start": {
                          "column": 23,
                          "line": 20
                        }
                      }
                    },
                    "range": [
                      526,
                      552
                    ],
                    "loc": {
                      "end": {
                        "column": 49,
                        "line": 20
                      },
                      "start": {
                        "column": 23,
                        "line": 20
                      }
                    }
                  }
                ],
                "range": [
                  524,
                  554
                ],
                "loc": {
                  "end": {
                    "column": 51,
                    "line": 20
                  },
                  "start": {
                    "column": 21,
                    "line": 20
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
                    521,
                    522
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 20
                    },
                    "start": {
                      "column": 18,
                      "line": 20
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 51,
                  "line": 20
                },
                "start": {
                  "column": 17,
                  "line": 20
                }
              }
            },
            "range": [
              507,
              554
            ],
            "loc": {
              "end": {
                "column": 51,
                "line": 20
              },
              "start": {
                "column": 4,
                "line": 20
              }
            }
          },
          {
            "type": "MethodDefinition",
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "range": [
                567,
                570
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 21
                },
                "start": {
                  "column": 12,
                  "line": 21
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
                570,
                592
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "async": false,
                      "body": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "range": [
                            581,
                            585
                          ],
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 21
                            },
                            "start": {
                              "column": 26,
                              "line": 21
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
                            586,
                            589
                          ],
                          "loc": {
                            "end": {
                              "column": 34,
                              "line": 21
                            },
                            "start": {
                              "column": 31,
                              "line": 21
                            }
                          }
                        },
                        "range": [
                          581,
                          589
                        ],
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 21
                          },
                          "start": {
                            "column": 26,
                            "line": 21
                          }
                        }
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": [],
                      "range": [
                        575,
                        589
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 21
                        },
                        "start": {
                          "column": 20,
                          "line": 21
                        }
                      }
                    },
                    "range": [
                      575,
                      590
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 21
                      },
                      "start": {
                        "column": 20,
                        "line": 21
                      }
                    }
                  }
                ],
                "range": [
                  573,
                  592
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 21
                  },
                  "start": {
                    "column": 18,
                    "line": 21
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
                  "column": 37,
                  "line": 21
                },
                "start": {
                  "column": 15,
                  "line": 21
                }
              }
            },
            "range": [
              559,
              592
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 21
              },
              "start": {
                "column": 4,
                "line": 21
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
                613,
                614
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 23
                },
                "start": {
                  "column": 19,
                  "line": 23
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 28,
                  "line": 23
                },
                "start": {
                  "column": 20,
                  "line": 23
                }
              },
              "range": [
                614,
                622
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  616,
                  622
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 23
                  },
                  "start": {
                    "column": 22,
                    "line": 23
                  }
                }
              }
            },
            "value": null,
            "range": [
              598,
              623
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 23
              },
              "start": {
                "column": 4,
                "line": 23
              }
            }
          },
          {
            "type": "MethodDefinition",
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "range": [
                647,
                648
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 24
                },
                "start": {
                  "column": 23,
                  "line": 24
                }
              }
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "range": [
                648,
                681
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "async": false,
                      "body": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "range": [
                            659,
                            663
                          ],
                          "loc": {
                            "end": {
                              "column": 39,
                              "line": 24
                            },
                            "start": {
                              "column": 35,
                              "line": 24
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "range": [
                            664,
                            665
                          ],
                          "loc": {
                            "end": {
                              "column": 41,
                              "line": 24
                            },
                            "start": {
                              "column": 40,
                              "line": 24
                            }
                          }
                        },
                        "range": [
                          659,
                          665
                        ],
                        "loc": {
                          "end": {
                            "column": 41,
                            "line": 24
                          },
                          "start": {
                            "column": 35,
                            "line": 24
                          }
                        }
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": [],
                      "range": [
                        653,
                        665
                      ],
                      "loc": {
                        "end": {
                          "column": 41,
                          "line": 24
                        },
                        "start": {
                          "column": 29,
                          "line": 24
                        }
                      }
                    },
                    "range": [
                      653,
                      666
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 24
                      },
                      "start": {
                        "column": 29,
                        "line": 24
                      }
                    }
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "raw": "null",
                      "value": null,
                      "range": [
                        674,
                        678
                      ],
                      "loc": {
                        "end": {
                          "column": 54,
                          "line": 24
                        },
                        "start": {
                          "column": 50,
                          "line": 24
                        }
                      }
                    },
                    "range": [
                      667,
                      679
                    ],
                    "loc": {
                      "end": {
                        "column": 55,
                        "line": 24
                      },
                      "start": {
                        "column": 43,
                        "line": 24
                      }
                    }
                  }
                ],
                "range": [
                  651,
                  681
                ],
                "loc": {
                  "end": {
                    "column": 57,
                    "line": 24
                  },
                  "start": {
                    "column": 27,
                    "line": 24
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
                  "column": 57,
                  "line": 24
                },
                "start": {
                  "column": 24,
                  "line": 24
                }
              }
            },
            "range": [
              628,
              681
            ],
            "loc": {
              "end": {
                "column": 57,
                "line": 24
              },
              "start": {
                "column": 4,
                "line": 24
              }
            }
          },
          {
            "type": "MethodDefinition",
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "range": [
                705,
                706
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 25
                },
                "start": {
                  "column": 23,
                  "line": 25
                }
              }
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "range": [
                706,
                753
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
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
                                    728,
                                    732
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 20,
                                      "line": 26
                                    },
                                    "start": {
                                      "column": 16,
                                      "line": 26
                                    }
                                  }
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "y",
                                  "optional": false,
                                  "range": [
                                    733,
                                    734
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 22,
                                      "line": 26
                                    },
                                    "start": {
                                      "column": 21,
                                      "line": 26
                                    }
                                  }
                                },
                                "range": [
                                  728,
                                  734
                                ],
                                "loc": {
                                  "end": {
                                    "column": 22,
                                    "line": 26
                                  },
                                  "start": {
                                    "column": 16,
                                    "line": 26
                                  }
                                }
                              },
                              "right": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "ThisExpression",
                                  "range": [
                                    737,
                                    741
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 29,
                                      "line": 26
                                    },
                                    "start": {
                                      "column": 25,
                                      "line": 26
                                    }
                                  }
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "range": [
                                    742,
                                    743
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 31,
                                      "line": 26
                                    },
                                    "start": {
                                      "column": 30,
                                      "line": 26
                                    }
                                  }
                                },
                                "range": [
                                  737,
                                  743
                                ],
                                "loc": {
                                  "end": {
                                    "column": 31,
                                    "line": 26
                                  },
                                  "start": {
                                    "column": 25,
                                    "line": 26
                                  }
                                }
                              },
                              "range": [
                                728,
                                743
                              ],
                              "loc": {
                                "end": {
                                  "column": 31,
                                  "line": 26
                                },
                                "start": {
                                  "column": 16,
                                  "line": 26
                                }
                              }
                            },
                            "range": [
                              728,
                              744
                            ],
                            "loc": {
                              "end": {
                                "column": 32,
                                "line": 26
                              },
                              "start": {
                                "column": 16,
                                "line": 26
                              }
                            }
                          }
                        ],
                        "range": [
                          726,
                          746
                        ],
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 26
                          },
                          "start": {
                            "column": 14,
                            "line": 26
                          }
                        }
                      },
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [],
                      "range": [
                        720,
                        746
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 26
                        },
                        "start": {
                          "column": 8,
                          "line": 26
                        }
                      }
                    },
                    "range": [
                      720,
                      746
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 26
                      },
                      "start": {
                        "column": 8,
                        "line": 26
                      }
                    }
                  }
                ],
                "range": [
                  710,
                  753
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 27
                  },
                  "start": {
                    "column": 28,
                    "line": 25
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
                    707,
                    708
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 25
                    },
                    "start": {
                      "column": 25,
                      "line": 25
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 27
                },
                "start": {
                  "column": 24,
                  "line": 25
                }
              }
            },
            "range": [
              686,
              753
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 27
              },
              "start": {
                "column": 4,
                "line": 25
              }
            }
          },
          {
            "type": "MethodDefinition",
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "range": [
                773,
                776
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 28
                },
                "start": {
                  "column": 19,
                  "line": 28
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
                776,
                798
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "async": false,
                      "body": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "range": [
                            787,
                            791
                          ],
                          "loc": {
                            "end": {
                              "column": 37,
                              "line": 28
                            },
                            "start": {
                              "column": 33,
                              "line": 28
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
                            792,
                            795
                          ],
                          "loc": {
                            "end": {
                              "column": 41,
                              "line": 28
                            },
                            "start": {
                              "column": 38,
                              "line": 28
                            }
                          }
                        },
                        "range": [
                          787,
                          795
                        ],
                        "loc": {
                          "end": {
                            "column": 41,
                            "line": 28
                          },
                          "start": {
                            "column": 33,
                            "line": 28
                          }
                        }
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": [],
                      "range": [
                        781,
                        795
                      ],
                      "loc": {
                        "end": {
                          "column": 41,
                          "line": 28
                        },
                        "start": {
                          "column": 27,
                          "line": 28
                        }
                      }
                    },
                    "range": [
                      781,
                      796
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 28
                      },
                      "start": {
                        "column": 27,
                        "line": 28
                      }
                    }
                  }
                ],
                "range": [
                  779,
                  798
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 28
                  },
                  "start": {
                    "column": 25,
                    "line": 28
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
                  "column": 44,
                  "line": 28
                },
                "start": {
                  "column": 22,
                  "line": 28
                }
              }
            },
            "range": [
              758,
              798
            ],
            "loc": {
              "end": {
                "column": 44,
                "line": 28
              },
              "start": {
                "column": 4,
                "line": 28
              }
            }
          },
          {
            "type": "MethodDefinition",
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "range": [
                818,
                821
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 29
                },
                "start": {
                  "column": 19,
                  "line": 29
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
                821,
                845
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "async": false,
                      "body": {
                        "type": "CallExpression",
                        "arguments": [],
                        "callee": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "range": [
                              832,
                              836
                            ],
                            "loc": {
                              "end": {
                                "column": 37,
                                "line": 29
                              },
                              "start": {
                                "column": 33,
                                "line": 29
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
                              837,
                              840
                            ],
                            "loc": {
                              "end": {
                                "column": 41,
                                "line": 29
                              },
                              "start": {
                                "column": 38,
                                "line": 29
                              }
                            }
                          },
                          "range": [
                            832,
                            840
                          ],
                          "loc": {
                            "end": {
                              "column": 41,
                              "line": 29
                            },
                            "start": {
                              "column": 33,
                              "line": 29
                            }
                          }
                        },
                        "optional": false,
                        "range": [
                          832,
                          842
                        ],
                        "loc": {
                          "end": {
                            "column": 43,
                            "line": 29
                          },
                          "start": {
                            "column": 33,
                            "line": 29
                          }
                        }
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": [],
                      "range": [
                        826,
                        842
                      ],
                      "loc": {
                        "end": {
                          "column": 43,
                          "line": 29
                        },
                        "start": {
                          "column": 27,
                          "line": 29
                        }
                      }
                    },
                    "range": [
                      826,
                      843
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 29
                      },
                      "start": {
                        "column": 27,
                        "line": 29
                      }
                    }
                  }
                ],
                "range": [
                  824,
                  845
                ],
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 29
                  },
                  "start": {
                    "column": 25,
                    "line": 29
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
                  "column": 46,
                  "line": 29
                },
                "start": {
                  "column": 22,
                  "line": 29
                }
              }
            },
            "range": [
              803,
              845
            ],
            "loc": {
              "end": {
                "column": 46,
                "line": 29
              },
              "start": {
                "column": 4,
                "line": 29
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 30
          },
          "start": {
            "column": 9,
            "line": 17
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
          424,
          426
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 17
          },
          "start": {
            "column": 6,
            "line": 17
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        418,
        847
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 30
        },
        "start": {
          "column": 0,
          "line": 17
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 31
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
