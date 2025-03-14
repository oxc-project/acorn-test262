__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    14,
    916
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          22,
          916
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
                393,
                396
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 15
                },
                "start": {
                  "column": 12,
                  "line": 15
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
                396,
                914
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ClassDeclaration",
                    "abstract": false,
                    "body": {
                      "type": "ClassBody",
                      "range": [
                        418,
                        908
                      ],
                      "body": [
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
                              440,
                              443
                            ],
                            "loc": {
                              "end": {
                                "column": 23,
                                "line": 17
                              },
                              "start": {
                                "column": 20,
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
                              443,
                              898
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
                                        "name": "x",
                                        "optional": false,
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "loc": {
                                            "end": {
                                              "column": 24,
                                              "line": 18
                                            },
                                            "start": {
                                              "column": 21,
                                              "line": 18
                                            }
                                          },
                                          "range": [
                                            469,
                                            472
                                          ],
                                          "typeAnnotation": {
                                            "type": "TSTypeReference",
                                            "typeName": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "C",
                                              "optional": false,
                                              "range": [
                                                471,
                                                472
                                              ],
                                              "loc": {
                                                "end": {
                                                  "column": 24,
                                                  "line": 18
                                                },
                                                "start": {
                                                  "column": 23,
                                                  "line": 18
                                                }
                                              }
                                            },
                                            "range": [
                                              471,
                                              472
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 24,
                                                "line": 18
                                              },
                                              "start": {
                                                "column": 23,
                                                "line": 18
                                              }
                                            }
                                          }
                                        },
                                        "range": [
                                          468,
                                          472
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 24,
                                            "line": 18
                                          },
                                          "start": {
                                            "column": 20,
                                            "line": 18
                                          }
                                        }
                                      },
                                      "init": null,
                                      "range": [
                                        468,
                                        472
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 24,
                                          "line": 18
                                        },
                                        "start": {
                                          "column": 20,
                                          "line": 18
                                        }
                                      }
                                    }
                                  ],
                                  "declare": false,
                                  "kind": "let",
                                  "range": [
                                    464,
                                    473
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 25,
                                      "line": 18
                                    },
                                    "start": {
                                      "column": 16,
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
                                        "name": "x1",
                                        "optional": false,
                                        "range": [
                                          494,
                                          496
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 22,
                                            "line": 19
                                          },
                                          "start": {
                                            "column": 20,
                                            "line": 19
                                          }
                                        }
                                      },
                                      "init": {
                                        "type": "MemberExpression",
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "x",
                                          "optional": false,
                                          "range": [
                                            499,
                                            500
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 26,
                                              "line": 19
                                            },
                                            "start": {
                                              "column": 25,
                                              "line": 19
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
                                            501,
                                            504
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 30,
                                              "line": 19
                                            },
                                            "start": {
                                              "column": 27,
                                              "line": 19
                                            }
                                          }
                                        },
                                        "range": [
                                          499,
                                          504
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 30,
                                            "line": 19
                                          },
                                          "start": {
                                            "column": 25,
                                            "line": 19
                                          }
                                        }
                                      },
                                      "range": [
                                        494,
                                        504
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 30,
                                          "line": 19
                                        },
                                        "start": {
                                          "column": 20,
                                          "line": 19
                                        }
                                      }
                                    }
                                  ],
                                  "declare": false,
                                  "kind": "var",
                                  "range": [
                                    490,
                                    505
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 31,
                                      "line": 19
                                    },
                                    "start": {
                                      "column": 16,
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
                                        "name": "x2",
                                        "optional": false,
                                        "range": [
                                          526,
                                          528
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 22,
                                            "line": 20
                                          },
                                          "start": {
                                            "column": 20,
                                            "line": 20
                                          }
                                        }
                                      },
                                      "init": {
                                        "type": "MemberExpression",
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "x",
                                          "optional": false,
                                          "range": [
                                            531,
                                            532
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 26,
                                              "line": 20
                                            },
                                            "start": {
                                              "column": 25,
                                              "line": 20
                                            }
                                          }
                                        },
                                        "optional": false,
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "bar",
                                          "optional": false,
                                          "range": [
                                            533,
                                            536
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 30,
                                              "line": 20
                                            },
                                            "start": {
                                              "column": 27,
                                              "line": 20
                                            }
                                          }
                                        },
                                        "range": [
                                          531,
                                          536
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 30,
                                            "line": 20
                                          },
                                          "start": {
                                            "column": 25,
                                            "line": 20
                                          }
                                        }
                                      },
                                      "range": [
                                        526,
                                        536
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 30,
                                          "line": 20
                                        },
                                        "start": {
                                          "column": 20,
                                          "line": 20
                                        }
                                      }
                                    }
                                  ],
                                  "declare": false,
                                  "kind": "var",
                                  "range": [
                                    522,
                                    537
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 31,
                                      "line": 20
                                    },
                                    "start": {
                                      "column": 16,
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
                                        "name": "x3",
                                        "optional": false,
                                        "range": [
                                          558,
                                          560
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 22,
                                            "line": 21
                                          },
                                          "start": {
                                            "column": 20,
                                            "line": 21
                                          }
                                        }
                                      },
                                      "init": {
                                        "type": "MemberExpression",
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "x",
                                          "optional": false,
                                          "range": [
                                            563,
                                            564
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 26,
                                              "line": 21
                                            },
                                            "start": {
                                              "column": 25,
                                              "line": 21
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
                                            565,
                                            566
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 28,
                                              "line": 21
                                            },
                                            "start": {
                                              "column": 27,
                                              "line": 21
                                            }
                                          }
                                        },
                                        "range": [
                                          563,
                                          566
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 28,
                                            "line": 21
                                          },
                                          "start": {
                                            "column": 25,
                                            "line": 21
                                          }
                                        }
                                      },
                                      "range": [
                                        558,
                                        566
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 28,
                                          "line": 21
                                        },
                                        "start": {
                                          "column": 20,
                                          "line": 21
                                        }
                                      }
                                    }
                                  ],
                                  "declare": false,
                                  "kind": "var",
                                  "range": [
                                    554,
                                    567
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 29,
                                      "line": 21
                                    },
                                    "start": {
                                      "column": 16,
                                      "line": 21
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
                                        "name": "x4",
                                        "optional": false,
                                        "range": [
                                          588,
                                          590
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 22,
                                            "line": 22
                                          },
                                          "start": {
                                            "column": 20,
                                            "line": 22
                                          }
                                        }
                                      },
                                      "init": {
                                        "type": "MemberExpression",
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "x",
                                          "optional": false,
                                          "range": [
                                            593,
                                            594
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 26,
                                              "line": 22
                                            },
                                            "start": {
                                              "column": 25,
                                              "line": 22
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
                                            595,
                                            596
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 28,
                                              "line": 22
                                            },
                                            "start": {
                                              "column": 27,
                                              "line": 22
                                            }
                                          }
                                        },
                                        "range": [
                                          593,
                                          596
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 28,
                                            "line": 22
                                          },
                                          "start": {
                                            "column": 25,
                                            "line": 22
                                          }
                                        }
                                      },
                                      "range": [
                                        588,
                                        596
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 28,
                                          "line": 22
                                        },
                                        "start": {
                                          "column": 20,
                                          "line": 22
                                        }
                                      }
                                    }
                                  ],
                                  "declare": false,
                                  "kind": "var",
                                  "range": [
                                    584,
                                    597
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 29,
                                      "line": 22
                                    },
                                    "start": {
                                      "column": 16,
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
                                        "name": "sx1",
                                        "optional": false,
                                        "range": [
                                          619,
                                          622
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 23,
                                            "line": 24
                                          },
                                          "start": {
                                            "column": 20,
                                            "line": 24
                                          }
                                        }
                                      },
                                      "init": {
                                        "type": "MemberExpression",
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "C",
                                          "optional": false,
                                          "range": [
                                            625,
                                            626
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
                                        "optional": false,
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "x",
                                          "optional": false,
                                          "range": [
                                            627,
                                            628
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 29,
                                              "line": 24
                                            },
                                            "start": {
                                              "column": 28,
                                              "line": 24
                                            }
                                          }
                                        },
                                        "range": [
                                          625,
                                          628
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 29,
                                            "line": 24
                                          },
                                          "start": {
                                            "column": 26,
                                            "line": 24
                                          }
                                        }
                                      },
                                      "range": [
                                        619,
                                        628
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 29,
                                          "line": 24
                                        },
                                        "start": {
                                          "column": 20,
                                          "line": 24
                                        }
                                      }
                                    }
                                  ],
                                  "declare": false,
                                  "kind": "var",
                                  "range": [
                                    615,
                                    629
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 30,
                                      "line": 24
                                    },
                                    "start": {
                                      "column": 16,
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
                                        "name": "sx2",
                                        "optional": false,
                                        "range": [
                                          650,
                                          653
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 23,
                                            "line": 25
                                          },
                                          "start": {
                                            "column": 20,
                                            "line": 25
                                          }
                                        }
                                      },
                                      "init": {
                                        "type": "MemberExpression",
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "C",
                                          "optional": false,
                                          "range": [
                                            656,
                                            657
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 27,
                                              "line": 25
                                            },
                                            "start": {
                                              "column": 26,
                                              "line": 25
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
                                            658,
                                            659
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 29,
                                              "line": 25
                                            },
                                            "start": {
                                              "column": 28,
                                              "line": 25
                                            }
                                          }
                                        },
                                        "range": [
                                          656,
                                          659
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 29,
                                            "line": 25
                                          },
                                          "start": {
                                            "column": 26,
                                            "line": 25
                                          }
                                        }
                                      },
                                      "range": [
                                        650,
                                        659
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 29,
                                          "line": 25
                                        },
                                        "start": {
                                          "column": 20,
                                          "line": 25
                                        }
                                      }
                                    }
                                  ],
                                  "declare": false,
                                  "kind": "var",
                                  "range": [
                                    646,
                                    660
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 30,
                                      "line": 25
                                    },
                                    "start": {
                                      "column": 16,
                                      "line": 25
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
                                        "name": "sx3",
                                        "optional": false,
                                        "range": [
                                          681,
                                          684
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 23,
                                            "line": 26
                                          },
                                          "start": {
                                            "column": 20,
                                            "line": 26
                                          }
                                        }
                                      },
                                      "init": {
                                        "type": "MemberExpression",
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "C",
                                          "optional": false,
                                          "range": [
                                            687,
                                            688
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 27,
                                              "line": 26
                                            },
                                            "start": {
                                              "column": 26,
                                              "line": 26
                                            }
                                          }
                                        },
                                        "optional": false,
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "bar",
                                          "optional": false,
                                          "range": [
                                            689,
                                            692
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 31,
                                              "line": 26
                                            },
                                            "start": {
                                              "column": 28,
                                              "line": 26
                                            }
                                          }
                                        },
                                        "range": [
                                          687,
                                          692
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 31,
                                            "line": 26
                                          },
                                          "start": {
                                            "column": 26,
                                            "line": 26
                                          }
                                        }
                                      },
                                      "range": [
                                        681,
                                        692
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 31,
                                          "line": 26
                                        },
                                        "start": {
                                          "column": 20,
                                          "line": 26
                                        }
                                      }
                                    }
                                  ],
                                  "declare": false,
                                  "kind": "var",
                                  "range": [
                                    677,
                                    693
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
                                        "name": "sx4",
                                        "optional": false,
                                        "range": [
                                          714,
                                          717
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 23,
                                            "line": 27
                                          },
                                          "start": {
                                            "column": 20,
                                            "line": 27
                                          }
                                        }
                                      },
                                      "init": {
                                        "type": "MemberExpression",
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "C",
                                          "optional": false,
                                          "range": [
                                            720,
                                            721
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 27,
                                              "line": 27
                                            },
                                            "start": {
                                              "column": 26,
                                              "line": 27
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
                                            722,
                                            725
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 31,
                                              "line": 27
                                            },
                                            "start": {
                                              "column": 28,
                                              "line": 27
                                            }
                                          }
                                        },
                                        "range": [
                                          720,
                                          725
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 31,
                                            "line": 27
                                          },
                                          "start": {
                                            "column": 26,
                                            "line": 27
                                          }
                                        }
                                      },
                                      "range": [
                                        714,
                                        725
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 31,
                                          "line": 27
                                        },
                                        "start": {
                                          "column": 20,
                                          "line": 27
                                        }
                                      }
                                    }
                                  ],
                                  "declare": false,
                                  "kind": "var",
                                  "range": [
                                    710,
                                    726
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 32,
                                      "line": 27
                                    },
                                    "start": {
                                      "column": 16,
                                      "line": 27
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
                                        "name": "y",
                                        "optional": false,
                                        "range": [
                                          748,
                                          749
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 21,
                                            "line": 29
                                          },
                                          "start": {
                                            "column": 20,
                                            "line": 29
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
                                            756,
                                            757
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 29,
                                              "line": 29
                                            },
                                            "start": {
                                              "column": 28,
                                              "line": 29
                                            }
                                          }
                                        },
                                        "range": [
                                          752,
                                          759
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 31,
                                            "line": 29
                                          },
                                          "start": {
                                            "column": 24,
                                            "line": 29
                                          }
                                        }
                                      },
                                      "range": [
                                        748,
                                        759
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 31,
                                          "line": 29
                                        },
                                        "start": {
                                          "column": 20,
                                          "line": 29
                                        }
                                      }
                                    }
                                  ],
                                  "declare": false,
                                  "kind": "let",
                                  "range": [
                                    744,
                                    760
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 32,
                                      "line": 29
                                    },
                                    "start": {
                                      "column": 16,
                                      "line": 29
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
                                        "name": "y1",
                                        "optional": false,
                                        "range": [
                                          781,
                                          783
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 22,
                                            "line": 30
                                          },
                                          "start": {
                                            "column": 20,
                                            "line": 30
                                          }
                                        }
                                      },
                                      "init": {
                                        "type": "MemberExpression",
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "y",
                                          "optional": false,
                                          "range": [
                                            786,
                                            787
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 26,
                                              "line": 30
                                            },
                                            "start": {
                                              "column": 25,
                                              "line": 30
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
                                            788,
                                            791
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 30,
                                              "line": 30
                                            },
                                            "start": {
                                              "column": 27,
                                              "line": 30
                                            }
                                          }
                                        },
                                        "range": [
                                          786,
                                          791
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 30,
                                            "line": 30
                                          },
                                          "start": {
                                            "column": 25,
                                            "line": 30
                                          }
                                        }
                                      },
                                      "range": [
                                        781,
                                        791
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 30,
                                          "line": 30
                                        },
                                        "start": {
                                          "column": 20,
                                          "line": 30
                                        }
                                      }
                                    }
                                  ],
                                  "declare": false,
                                  "kind": "var",
                                  "range": [
                                    777,
                                    792
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 31,
                                      "line": 30
                                    },
                                    "start": {
                                      "column": 16,
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
                                        "name": "y2",
                                        "optional": false,
                                        "range": [
                                          813,
                                          815
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 22,
                                            "line": 31
                                          },
                                          "start": {
                                            "column": 20,
                                            "line": 31
                                          }
                                        }
                                      },
                                      "init": {
                                        "type": "MemberExpression",
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "y",
                                          "optional": false,
                                          "range": [
                                            818,
                                            819
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 26,
                                              "line": 31
                                            },
                                            "start": {
                                              "column": 25,
                                              "line": 31
                                            }
                                          }
                                        },
                                        "optional": false,
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "bar",
                                          "optional": false,
                                          "range": [
                                            820,
                                            823
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 30,
                                              "line": 31
                                            },
                                            "start": {
                                              "column": 27,
                                              "line": 31
                                            }
                                          }
                                        },
                                        "range": [
                                          818,
                                          823
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 30,
                                            "line": 31
                                          },
                                          "start": {
                                            "column": 25,
                                            "line": 31
                                          }
                                        }
                                      },
                                      "range": [
                                        813,
                                        823
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 30,
                                          "line": 31
                                        },
                                        "start": {
                                          "column": 20,
                                          "line": 31
                                        }
                                      }
                                    }
                                  ],
                                  "declare": false,
                                  "kind": "var",
                                  "range": [
                                    809,
                                    824
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 31,
                                      "line": 31
                                    },
                                    "start": {
                                      "column": 16,
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
                                        "name": "y3",
                                        "optional": false,
                                        "range": [
                                          845,
                                          847
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 22,
                                            "line": 32
                                          },
                                          "start": {
                                            "column": 20,
                                            "line": 32
                                          }
                                        }
                                      },
                                      "init": {
                                        "type": "MemberExpression",
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "y",
                                          "optional": false,
                                          "range": [
                                            850,
                                            851
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 26,
                                              "line": 32
                                            },
                                            "start": {
                                              "column": 25,
                                              "line": 32
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
                                            852,
                                            853
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 28,
                                              "line": 32
                                            },
                                            "start": {
                                              "column": 27,
                                              "line": 32
                                            }
                                          }
                                        },
                                        "range": [
                                          850,
                                          853
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 28,
                                            "line": 32
                                          },
                                          "start": {
                                            "column": 25,
                                            "line": 32
                                          }
                                        }
                                      },
                                      "range": [
                                        845,
                                        853
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 28,
                                          "line": 32
                                        },
                                        "start": {
                                          "column": 20,
                                          "line": 32
                                        }
                                      }
                                    }
                                  ],
                                  "declare": false,
                                  "kind": "var",
                                  "range": [
                                    841,
                                    854
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 29,
                                      "line": 32
                                    },
                                    "start": {
                                      "column": 16,
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
                                        "name": "y4",
                                        "optional": false,
                                        "range": [
                                          875,
                                          877
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 22,
                                            "line": 33
                                          },
                                          "start": {
                                            "column": 20,
                                            "line": 33
                                          }
                                        }
                                      },
                                      "init": {
                                        "type": "MemberExpression",
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "y",
                                          "optional": false,
                                          "range": [
                                            880,
                                            881
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 26,
                                              "line": 33
                                            },
                                            "start": {
                                              "column": 25,
                                              "line": 33
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
                                            882,
                                            883
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 28,
                                              "line": 33
                                            },
                                            "start": {
                                              "column": 27,
                                              "line": 33
                                            }
                                          }
                                        },
                                        "range": [
                                          880,
                                          883
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 28,
                                            "line": 33
                                          },
                                          "start": {
                                            "column": 25,
                                            "line": 33
                                          }
                                        }
                                      },
                                      "range": [
                                        875,
                                        883
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 28,
                                          "line": 33
                                        },
                                        "start": {
                                          "column": 20,
                                          "line": 33
                                        }
                                      }
                                    }
                                  ],
                                  "declare": false,
                                  "kind": "var",
                                  "range": [
                                    871,
                                    884
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 29,
                                      "line": 33
                                    },
                                    "start": {
                                      "column": 16,
                                      "line": 33
                                    }
                                  }
                                }
                              ],
                              "range": [
                                446,
                                898
                              ],
                              "loc": {
                                "end": {
                                  "column": 13,
                                  "line": 34
                                },
                                "start": {
                                  "column": 26,
                                  "line": 17
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
                                "line": 34
                              },
                              "start": {
                                "column": 23,
                                "line": 17
                              }
                            }
                          },
                          "range": [
                            432,
                            898
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 34
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
                          "line": 35
                        },
                        "start": {
                          "column": 17,
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
                        415,
                        417
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 16
                        },
                        "start": {
                          "column": 14,
                          "line": 16
                        }
                      }
                    },
                    "implements": [],
                    "superClass": null,
                    "range": [
                      409,
                      908
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 35
                      },
                      "start": {
                        "column": 8,
                        "line": 16
                      }
                    }
                  }
                ],
                "range": [
                  399,
                  914
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 36
                  },
                  "start": {
                    "column": 18,
                    "line": 15
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
                  "line": 36
                },
                "start": {
                  "column": 15,
                  "line": 15
                }
              }
            },
            "range": [
              385,
              914
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 36
              },
              "start": {
                "column": 4,
                "line": 15
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 37
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
        916
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 37
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 37
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
