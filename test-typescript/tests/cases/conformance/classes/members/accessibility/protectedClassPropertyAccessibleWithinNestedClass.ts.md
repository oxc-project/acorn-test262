__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    14,
    938
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          22,
          938
        ],
        "body": [
          {
            "type": "PropertyDefinition",
            "accessibility": "protected",
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
                38,
                39
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
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 23,
                  "line": 4
                },
                "start": {
                  "column": 15,
                  "line": 4
                }
              },
              "range": [
                39,
                47
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  41,
                  47
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 4
                  },
                  "start": {
                    "column": 17,
                    "line": 4
                  }
                }
              }
            },
            "value": null,
            "range": [
              28,
              48
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
          },
          {
            "type": "MethodDefinition",
            "accessibility": "protected",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "range": [
                67,
                68
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 5
                },
                "start": {
                  "column": 18,
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
                68,
                89
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
                          80,
                          84
                        ],
                        "loc": {
                          "end": {
                            "column": 35,
                            "line": 5
                          },
                          "start": {
                            "column": 31,
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
                          85,
                          86
                        ],
                        "loc": {
                          "end": {
                            "column": 37,
                            "line": 5
                          },
                          "start": {
                            "column": 36,
                            "line": 5
                          }
                        }
                      },
                      "range": [
                        80,
                        86
                      ],
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 5
                        },
                        "start": {
                          "column": 31,
                          "line": 5
                        }
                      }
                    },
                    "range": [
                      73,
                      87
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 5
                      },
                      "start": {
                        "column": 24,
                        "line": 5
                      }
                    }
                  }
                ],
                "range": [
                  71,
                  89
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 5
                  },
                  "start": {
                    "column": 22,
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
                  "column": 40,
                  "line": 5
                },
                "start": {
                  "column": 19,
                  "line": 5
                }
              }
            },
            "range": [
              53,
              89
            ],
            "loc": {
              "end": {
                "column": 40,
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
            "accessibility": "protected",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "range": [
                108,
                109
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
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                109,
                133
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
                            115,
                            119
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 6
                            },
                            "start": {
                              "column": 25,
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
                            120,
                            121
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 6
                            },
                            "start": {
                              "column": 30,
                              "line": 6
                            }
                          }
                        },
                        "range": [
                          115,
                          121
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 6
                          },
                          "start": {
                            "column": 25,
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
                            124,
                            128
                          ],
                          "loc": {
                            "end": {
                              "column": 38,
                              "line": 6
                            },
                            "start": {
                              "column": 34,
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
                            129,
                            130
                          ],
                          "loc": {
                            "end": {
                              "column": 40,
                              "line": 6
                            },
                            "start": {
                              "column": 39,
                              "line": 6
                            }
                          }
                        },
                        "range": [
                          124,
                          130
                        ],
                        "loc": {
                          "end": {
                            "column": 40,
                            "line": 6
                          },
                          "start": {
                            "column": 34,
                            "line": 6
                          }
                        }
                      },
                      "range": [
                        115,
                        130
                      ],
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 6
                        },
                        "start": {
                          "column": 25,
                          "line": 6
                        }
                      }
                    },
                    "range": [
                      115,
                      131
                    ],
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 6
                      },
                      "start": {
                        "column": 25,
                        "line": 6
                      }
                    }
                  }
                ],
                "range": [
                  113,
                  133
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 6
                  },
                  "start": {
                    "column": 23,
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
                    110,
                    111
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
              "loc": {
                "end": {
                  "column": 43,
                  "line": 6
                },
                "start": {
                  "column": 19,
                  "line": 6
                }
              }
            },
            "range": [
              94,
              133
            ],
            "loc": {
              "end": {
                "column": 43,
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
            "accessibility": "protected",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "range": [
                148,
                151
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 7
                },
                "start": {
                  "column": 14,
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
                151,
                174
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
                          163,
                          167
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 7
                          },
                          "start": {
                            "column": 29,
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
                          168,
                          171
                        ],
                        "loc": {
                          "end": {
                            "column": 37,
                            "line": 7
                          },
                          "start": {
                            "column": 34,
                            "line": 7
                          }
                        }
                      },
                      "range": [
                        163,
                        171
                      ],
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 7
                        },
                        "start": {
                          "column": 29,
                          "line": 7
                        }
                      }
                    },
                    "range": [
                      156,
                      172
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 7
                      },
                      "start": {
                        "column": 22,
                        "line": 7
                      }
                    }
                  }
                ],
                "range": [
                  154,
                  174
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 7
                  },
                  "start": {
                    "column": 20,
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
                  "column": 40,
                  "line": 7
                },
                "start": {
                  "column": 17,
                  "line": 7
                }
              }
            },
            "range": [
              138,
              174
            ],
            "loc": {
              "end": {
                "column": 40,
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
            "accessibility": "protected",
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
                197,
                198
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 9
                },
                "start": {
                  "column": 21,
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
                  "column": 30,
                  "line": 9
                },
                "start": {
                  "column": 22,
                  "line": 9
                }
              },
              "range": [
                198,
                206
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  200,
                  206
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 9
                  },
                  "start": {
                    "column": 24,
                    "line": 9
                  }
                }
              }
            },
            "value": null,
            "range": [
              180,
              207
            ],
            "loc": {
              "end": {
                "column": 31,
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
            "accessibility": "protected",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "range": [
                233,
                234
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 10
                },
                "start": {
                  "column": 25,
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
                234,
                255
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
                          246,
                          250
                        ],
                        "loc": {
                          "end": {
                            "column": 42,
                            "line": 10
                          },
                          "start": {
                            "column": 38,
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
                          251,
                          252
                        ],
                        "loc": {
                          "end": {
                            "column": 44,
                            "line": 10
                          },
                          "start": {
                            "column": 43,
                            "line": 10
                          }
                        }
                      },
                      "range": [
                        246,
                        252
                      ],
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 10
                        },
                        "start": {
                          "column": 38,
                          "line": 10
                        }
                      }
                    },
                    "range": [
                      239,
                      253
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 10
                      },
                      "start": {
                        "column": 31,
                        "line": 10
                      }
                    }
                  }
                ],
                "range": [
                  237,
                  255
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 10
                  },
                  "start": {
                    "column": 29,
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
                  "column": 47,
                  "line": 10
                },
                "start": {
                  "column": 26,
                  "line": 10
                }
              }
            },
            "range": [
              212,
              255
            ],
            "loc": {
              "end": {
                "column": 47,
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
            "accessibility": "protected",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "range": [
                281,
                282
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
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "range": [
                282,
                306
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
                            288,
                            292
                          ],
                          "loc": {
                            "end": {
                              "column": 36,
                              "line": 11
                            },
                            "start": {
                              "column": 32,
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
                            293,
                            294
                          ],
                          "loc": {
                            "end": {
                              "column": 38,
                              "line": 11
                            },
                            "start": {
                              "column": 37,
                              "line": 11
                            }
                          }
                        },
                        "range": [
                          288,
                          294
                        ],
                        "loc": {
                          "end": {
                            "column": 38,
                            "line": 11
                          },
                          "start": {
                            "column": 32,
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
                            297,
                            301
                          ],
                          "loc": {
                            "end": {
                              "column": 45,
                              "line": 11
                            },
                            "start": {
                              "column": 41,
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
                            302,
                            303
                          ],
                          "loc": {
                            "end": {
                              "column": 47,
                              "line": 11
                            },
                            "start": {
                              "column": 46,
                              "line": 11
                            }
                          }
                        },
                        "range": [
                          297,
                          303
                        ],
                        "loc": {
                          "end": {
                            "column": 47,
                            "line": 11
                          },
                          "start": {
                            "column": 41,
                            "line": 11
                          }
                        }
                      },
                      "range": [
                        288,
                        303
                      ],
                      "loc": {
                        "end": {
                          "column": 47,
                          "line": 11
                        },
                        "start": {
                          "column": 32,
                          "line": 11
                        }
                      }
                    },
                    "range": [
                      288,
                      304
                    ],
                    "loc": {
                      "end": {
                        "column": 48,
                        "line": 11
                      },
                      "start": {
                        "column": 32,
                        "line": 11
                      }
                    }
                  }
                ],
                "range": [
                  286,
                  306
                ],
                "loc": {
                  "end": {
                    "column": 50,
                    "line": 11
                  },
                  "start": {
                    "column": 30,
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
                    283,
                    284
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 11
                    },
                    "start": {
                      "column": 27,
                      "line": 11
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 50,
                  "line": 11
                },
                "start": {
                  "column": 26,
                  "line": 11
                }
              }
            },
            "range": [
              260,
              306
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
          },
          {
            "type": "MethodDefinition",
            "accessibility": "protected",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "range": [
                328,
                331
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 12
                },
                "start": {
                  "column": 21,
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
                331,
                354
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
                          343,
                          347
                        ],
                        "loc": {
                          "end": {
                            "column": 40,
                            "line": 12
                          },
                          "start": {
                            "column": 36,
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
                          348,
                          351
                        ],
                        "loc": {
                          "end": {
                            "column": 44,
                            "line": 12
                          },
                          "start": {
                            "column": 41,
                            "line": 12
                          }
                        }
                      },
                      "range": [
                        343,
                        351
                      ],
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 12
                        },
                        "start": {
                          "column": 36,
                          "line": 12
                        }
                      }
                    },
                    "range": [
                      336,
                      352
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 12
                      },
                      "start": {
                        "column": 29,
                        "line": 12
                      }
                    }
                  }
                ],
                "range": [
                  334,
                  354
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 12
                  },
                  "start": {
                    "column": 27,
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
                  "column": 47,
                  "line": 12
                },
                "start": {
                  "column": 24,
                  "line": 12
                }
              }
            },
            "range": [
              311,
              354
            ],
            "loc": {
              "end": {
                "column": 47,
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
            "accessibility": "protected",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "range": [
                376,
                379
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 13
                },
                "start": {
                  "column": 21,
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
                379,
                397
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
                            384,
                            388
                          ],
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 13
                            },
                            "start": {
                              "column": 29,
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
                            389,
                            392
                          ],
                          "loc": {
                            "end": {
                              "column": 37,
                              "line": 13
                            },
                            "start": {
                              "column": 34,
                              "line": 13
                            }
                          }
                        },
                        "range": [
                          384,
                          392
                        ],
                        "loc": {
                          "end": {
                            "column": 37,
                            "line": 13
                          },
                          "start": {
                            "column": 29,
                            "line": 13
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        384,
                        394
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 13
                        },
                        "start": {
                          "column": 29,
                          "line": 13
                        }
                      }
                    },
                    "range": [
                      384,
                      395
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 13
                      },
                      "start": {
                        "column": 29,
                        "line": 13
                      }
                    }
                  }
                ],
                "range": [
                  382,
                  397
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
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 13
                },
                "start": {
                  "column": 24,
                  "line": 13
                }
              }
            },
            "range": [
              359,
              397
            ],
            "loc": {
              "end": {
                "column": 42,
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
            "accessibility": "protected",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "range": [
                413,
                416
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 15
                },
                "start": {
                  "column": 14,
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
                416,
                936
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
                        438,
                        930
                      ],
                      "body": [
                        {
                          "type": "MethodDefinition",
                          "accessibility": "protected",
                          "computed": false,
                          "decorators": [],
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "foo",
                            "optional": false,
                            "range": [
                              462,
                              465
                            ],
                            "loc": {
                              "end": {
                                "column": 25,
                                "line": 17
                              },
                              "start": {
                                "column": 22,
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
                              465,
                              920
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
                                            491,
                                            494
                                          ],
                                          "typeAnnotation": {
                                            "type": "TSTypeReference",
                                            "typeName": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "C",
                                              "optional": false,
                                              "range": [
                                                493,
                                                494
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
                                              493,
                                              494
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
                                          490,
                                          494
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
                                        490,
                                        494
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
                                    486,
                                    495
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
                                          516,
                                          518
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
                                            521,
                                            522
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
                                            523,
                                            526
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
                                          521,
                                          526
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
                                        516,
                                        526
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
                                    512,
                                    527
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
                                          548,
                                          550
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
                                            553,
                                            554
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
                                            555,
                                            558
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
                                          553,
                                          558
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
                                        548,
                                        558
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
                                    544,
                                    559
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
                                          580,
                                          582
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
                                            585,
                                            586
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
                                            587,
                                            588
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
                                          585,
                                          588
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
                                        580,
                                        588
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
                                    576,
                                    589
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
                                          610,
                                          612
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
                                            615,
                                            616
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
                                            617,
                                            618
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
                                          615,
                                          618
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
                                        610,
                                        618
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
                                    606,
                                    619
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
                                          641,
                                          644
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
                                            647,
                                            648
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
                                            649,
                                            650
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
                                          647,
                                          650
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
                                        641,
                                        650
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
                                    637,
                                    651
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
                                          672,
                                          675
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
                                            678,
                                            679
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
                                            680,
                                            681
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
                                          678,
                                          681
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
                                        672,
                                        681
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
                                    668,
                                    682
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
                                          703,
                                          706
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
                                            709,
                                            710
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
                                            711,
                                            714
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
                                          709,
                                          714
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
                                        703,
                                        714
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
                                    699,
                                    715
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
                                          736,
                                          739
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
                                            742,
                                            743
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
                                            744,
                                            747
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
                                          742,
                                          747
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
                                        736,
                                        747
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
                                    732,
                                    748
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
                                          770,
                                          771
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
                                            778,
                                            779
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
                                          774,
                                          781
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
                                        770,
                                        781
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
                                    766,
                                    782
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
                                          803,
                                          805
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
                                            808,
                                            809
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
                                            810,
                                            813
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
                                          808,
                                          813
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
                                        803,
                                        813
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
                                    799,
                                    814
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
                                          835,
                                          837
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
                                            840,
                                            841
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
                                            842,
                                            845
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
                                          840,
                                          845
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
                                        835,
                                        845
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
                                    831,
                                    846
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
                                          867,
                                          869
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
                                            872,
                                            873
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
                                            874,
                                            875
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
                                          872,
                                          875
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
                                        867,
                                        875
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
                                    863,
                                    876
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
                                          897,
                                          899
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
                                            902,
                                            903
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
                                            904,
                                            905
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
                                          902,
                                          905
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
                                        897,
                                        905
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
                                    893,
                                    906
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
                                468,
                                920
                              ],
                              "loc": {
                                "end": {
                                  "column": 13,
                                  "line": 34
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
                            "params": [],
                            "loc": {
                              "end": {
                                "column": 13,
                                "line": 34
                              },
                              "start": {
                                "column": 25,
                                "line": 17
                              }
                            }
                          },
                          "range": [
                            452,
                            920
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
                        435,
                        437
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
                      429,
                      930
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
                  419,
                  936
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 36
                  },
                  "start": {
                    "column": 20,
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
                  "column": 17,
                  "line": 15
                }
              }
            },
            "range": [
              403,
              936
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
        938
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
