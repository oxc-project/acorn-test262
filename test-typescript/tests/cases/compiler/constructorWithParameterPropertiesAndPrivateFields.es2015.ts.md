__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    57,
    568
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          65,
          303
        ],
        "body": [
          {
            "type": "PropertyDefinition",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "PrivateIdentifier",
              "name": "privateField",
              "range": [
                78,
                91
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 4
                },
                "start": {
                  "column": 11,
                  "line": 4
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": true,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 32,
                  "line": 4
                },
                "start": {
                  "column": 24,
                  "line": 4
                }
              },
              "range": [
                91,
                99
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  93,
                  99
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 4
                  },
                  "start": {
                    "column": 26,
                    "line": 4
                  }
                }
              }
            },
            "value": null,
            "range": [
              69,
              100
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 4
              },
              "start": {
                "column": 2,
                "line": 4
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
                104,
                115
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
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
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                115,
                213
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
                              "name": "key",
                              "optional": false,
                              "range": [
                                176,
                                179
                              ],
                              "loc": {
                                "end": {
                                  "column": 10,
                                  "line": 7
                                },
                                "start": {
                                  "column": 7,
                                  "line": 7
                                }
                              }
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "ThisExpression",
                                "range": [
                                  181,
                                  185
                                ],
                                "loc": {
                                  "end": {
                                    "column": 16,
                                    "line": 7
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 7
                                  }
                                }
                              },
                              "optional": false,
                              "property": {
                                "type": "PrivateIdentifier",
                                "name": "privateField",
                                "range": [
                                  186,
                                  199
                                ],
                                "loc": {
                                  "end": {
                                    "column": 30,
                                    "line": 7
                                  },
                                  "start": {
                                    "column": 17,
                                    "line": 7
                                  }
                                }
                              },
                              "range": [
                                181,
                                199
                              ],
                              "loc": {
                                "end": {
                                  "column": 30,
                                  "line": 7
                                },
                                "start": {
                                  "column": 12,
                                  "line": 7
                                }
                              }
                            },
                            "range": [
                              176,
                              199
                            ],
                            "loc": {
                              "end": {
                                "column": 30,
                                "line": 7
                              },
                              "start": {
                                "column": 7,
                                "line": 7
                              }
                            }
                          }
                        ],
                        "range": [
                          174,
                          201
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 7
                          },
                          "start": {
                            "column": 5,
                            "line": 7
                          }
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "arg",
                        "optional": false,
                        "range": [
                          204,
                          207
                        ],
                        "loc": {
                          "end": {
                            "column": 38,
                            "line": 7
                          },
                          "start": {
                            "column": 35,
                            "line": 7
                          }
                        }
                      },
                      "range": [
                        174,
                        207
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 7
                        },
                        "start": {
                          "column": 5,
                          "line": 7
                        }
                      }
                    },
                    "range": [
                      173,
                      209
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
                  }
                ],
                "range": [
                  167,
                  213
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 8
                  },
                  "start": {
                    "column": 65,
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
                  "name": "arg",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 6
                      },
                      "start": {
                        "column": 17,
                        "line": 6
                      }
                    },
                    "range": [
                      119,
                      136
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "key",
                            "optional": false,
                            "range": [
                              123,
                              126
                            ],
                            "loc": {
                              "end": {
                                "column": 24,
                                "line": 6
                              },
                              "start": {
                                "column": 21,
                                "line": 6
                              }
                            }
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 32,
                                "line": 6
                              },
                              "start": {
                                "column": 24,
                                "line": 6
                              }
                            },
                            "range": [
                              126,
                              134
                            ],
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "range": [
                                128,
                                134
                              ],
                              "loc": {
                                "end": {
                                  "column": 32,
                                  "line": 6
                                },
                                "start": {
                                  "column": 26,
                                  "line": 6
                                }
                              }
                            }
                          },
                          "range": [
                            123,
                            134
                          ],
                          "loc": {
                            "end": {
                              "column": 32,
                              "line": 6
                            },
                            "start": {
                              "column": 21,
                              "line": 6
                            }
                          }
                        }
                      ],
                      "range": [
                        121,
                        136
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 6
                        },
                        "start": {
                          "column": 19,
                          "line": 6
                        }
                      }
                    }
                  },
                  "range": [
                    116,
                    136
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 6
                    },
                    "start": {
                      "column": 14,
                      "line": 6
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
                    "name": "exposedField",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 63,
                          "line": 6
                        },
                        "start": {
                          "column": 55,
                          "line": 6
                        }
                      },
                      "range": [
                        157,
                        165
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          159,
                          165
                        ],
                        "loc": {
                          "end": {
                            "column": 63,
                            "line": 6
                          },
                          "start": {
                            "column": 57,
                            "line": 6
                          }
                        }
                      }
                    },
                    "range": [
                      145,
                      165
                    ],
                    "loc": {
                      "end": {
                        "column": 63,
                        "line": 6
                      },
                      "start": {
                        "column": 43,
                        "line": 6
                      }
                    }
                  },
                  "readonly": false,
                  "static": false,
                  "range": [
                    138,
                    165
                  ],
                  "loc": {
                    "end": {
                      "column": 63,
                      "line": 6
                    },
                    "start": {
                      "column": 36,
                      "line": 6
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 8
                },
                "start": {
                  "column": 13,
                  "line": 6
                }
              }
            },
            "range": [
              104,
              213
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
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "log",
              "optional": false,
              "range": [
                217,
                220
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 10
                },
                "start": {
                  "column": 2,
                  "line": 10
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
                220,
                301
              ],
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
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "range": [
                              241,
                              245
                            ],
                            "loc": {
                              "end": {
                                "column": 20,
                                "line": 11
                              },
                              "start": {
                                "column": 16,
                                "line": 11
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "PrivateIdentifier",
                            "name": "privateField",
                            "range": [
                              246,
                              259
                            ],
                            "loc": {
                              "end": {
                                "column": 34,
                                "line": 11
                              },
                              "start": {
                                "column": 21,
                                "line": 11
                              }
                            }
                          },
                          "range": [
                            241,
                            259
                          ],
                          "loc": {
                            "end": {
                              "column": 34,
                              "line": 11
                            },
                            "start": {
                              "column": 16,
                              "line": 11
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
                            229,
                            236
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
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "range": [
                            237,
                            240
                          ],
                          "loc": {
                            "end": {
                              "column": 15,
                              "line": 11
                            },
                            "start": {
                              "column": 12,
                              "line": 11
                            }
                          }
                        },
                        "range": [
                          229,
                          240
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 11
                          },
                          "start": {
                            "column": 4,
                            "line": 11
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        229,
                        260
                      ],
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 11
                        },
                        "start": {
                          "column": 4,
                          "line": 11
                        }
                      }
                    },
                    "range": [
                      229,
                      261
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
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "range": [
                              278,
                              282
                            ],
                            "loc": {
                              "end": {
                                "column": 20,
                                "line": 12
                              },
                              "start": {
                                "column": 16,
                                "line": 12
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "exposedField",
                            "optional": false,
                            "range": [
                              283,
                              295
                            ],
                            "loc": {
                              "end": {
                                "column": 33,
                                "line": 12
                              },
                              "start": {
                                "column": 21,
                                "line": 12
                              }
                            }
                          },
                          "range": [
                            278,
                            295
                          ],
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 12
                            },
                            "start": {
                              "column": 16,
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
                          "name": "console",
                          "optional": false,
                          "range": [
                            266,
                            273
                          ],
                          "loc": {
                            "end": {
                              "column": 11,
                              "line": 12
                            },
                            "start": {
                              "column": 4,
                              "line": 12
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
                            274,
                            277
                          ],
                          "loc": {
                            "end": {
                              "column": 15,
                              "line": 12
                            },
                            "start": {
                              "column": 12,
                              "line": 12
                            }
                          }
                        },
                        "range": [
                          266,
                          277
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 12
                          },
                          "start": {
                            "column": 4,
                            "line": 12
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        266,
                        296
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 12
                        },
                        "start": {
                          "column": 4,
                          "line": 12
                        }
                      }
                    },
                    "range": [
                      266,
                      297
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
                  }
                ],
                "range": [
                  223,
                  301
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 13
                  },
                  "start": {
                    "column": 8,
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
                  "column": 3,
                  "line": 13
                },
                "start": {
                  "column": 5,
                  "line": 10
                }
              }
            },
            "range": [
              217,
              301
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 13
              },
              "start": {
                "column": 2,
                "line": 10
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
        "name": "A",
        "optional": false,
        "range": [
          63,
          64
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
        57,
        303
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
          313,
          567
        ],
        "body": [
          {
            "type": "PropertyDefinition",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "PrivateIdentifier",
              "name": "privateField",
              "range": [
                326,
                339
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 17
                },
                "start": {
                  "column": 11,
                  "line": 17
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": true,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 32,
                  "line": 17
                },
                "start": {
                  "column": 24,
                  "line": 17
                }
              },
              "range": [
                339,
                347
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  341,
                  347
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 17
                  },
                  "start": {
                    "column": 26,
                    "line": 17
                  }
                }
              }
            },
            "value": null,
            "range": [
              317,
              348
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 17
              },
              "start": {
                "column": 2,
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
                352,
                363
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 13,
                  "line": 19
                },
                "start": {
                  "column": 2,
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
                363,
                477
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "directive": "prologue",
                    "expression": {
                      "type": "Literal",
                      "raw": "\"prologue\"",
                      "value": "prologue",
                      "range": [
                        421,
                        431
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 20
                        },
                        "start": {
                          "column": 4,
                          "line": 20
                        }
                      }
                    },
                    "range": [
                      421,
                      432
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 20
                      },
                      "start": {
                        "column": 4,
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
                              "name": "key",
                              "optional": false,
                              "range": [
                                440,
                                443
                              ],
                              "loc": {
                                "end": {
                                  "column": 10,
                                  "line": 21
                                },
                                "start": {
                                  "column": 7,
                                  "line": 21
                                }
                              }
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "ThisExpression",
                                "range": [
                                  445,
                                  449
                                ],
                                "loc": {
                                  "end": {
                                    "column": 16,
                                    "line": 21
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 21
                                  }
                                }
                              },
                              "optional": false,
                              "property": {
                                "type": "PrivateIdentifier",
                                "name": "privateField",
                                "range": [
                                  450,
                                  463
                                ],
                                "loc": {
                                  "end": {
                                    "column": 30,
                                    "line": 21
                                  },
                                  "start": {
                                    "column": 17,
                                    "line": 21
                                  }
                                }
                              },
                              "range": [
                                445,
                                463
                              ],
                              "loc": {
                                "end": {
                                  "column": 30,
                                  "line": 21
                                },
                                "start": {
                                  "column": 12,
                                  "line": 21
                                }
                              }
                            },
                            "range": [
                              440,
                              463
                            ],
                            "loc": {
                              "end": {
                                "column": 30,
                                "line": 21
                              },
                              "start": {
                                "column": 7,
                                "line": 21
                              }
                            }
                          }
                        ],
                        "range": [
                          438,
                          465
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 21
                          },
                          "start": {
                            "column": 5,
                            "line": 21
                          }
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "arg",
                        "optional": false,
                        "range": [
                          468,
                          471
                        ],
                        "loc": {
                          "end": {
                            "column": 38,
                            "line": 21
                          },
                          "start": {
                            "column": 35,
                            "line": 21
                          }
                        }
                      },
                      "range": [
                        438,
                        471
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 21
                        },
                        "start": {
                          "column": 5,
                          "line": 21
                        }
                      }
                    },
                    "range": [
                      437,
                      473
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
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
                  415,
                  477
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 22
                  },
                  "start": {
                    "column": 65,
                    "line": 19
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
                  "name": "arg",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 19
                      },
                      "start": {
                        "column": 17,
                        "line": 19
                      }
                    },
                    "range": [
                      367,
                      384
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "key",
                            "optional": false,
                            "range": [
                              371,
                              374
                            ],
                            "loc": {
                              "end": {
                                "column": 24,
                                "line": 19
                              },
                              "start": {
                                "column": 21,
                                "line": 19
                              }
                            }
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
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
                              374,
                              382
                            ],
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "range": [
                                376,
                                382
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
                            371,
                            382
                          ],
                          "loc": {
                            "end": {
                              "column": 32,
                              "line": 19
                            },
                            "start": {
                              "column": 21,
                              "line": 19
                            }
                          }
                        }
                      ],
                      "range": [
                        369,
                        384
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 19
                        },
                        "start": {
                          "column": 19,
                          "line": 19
                        }
                      }
                    }
                  },
                  "range": [
                    364,
                    384
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 19
                    },
                    "start": {
                      "column": 14,
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
                    "name": "exposedField",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 63,
                          "line": 19
                        },
                        "start": {
                          "column": 55,
                          "line": 19
                        }
                      },
                      "range": [
                        405,
                        413
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          407,
                          413
                        ],
                        "loc": {
                          "end": {
                            "column": 63,
                            "line": 19
                          },
                          "start": {
                            "column": 57,
                            "line": 19
                          }
                        }
                      }
                    },
                    "range": [
                      393,
                      413
                    ],
                    "loc": {
                      "end": {
                        "column": 63,
                        "line": 19
                      },
                      "start": {
                        "column": 43,
                        "line": 19
                      }
                    }
                  },
                  "readonly": false,
                  "static": false,
                  "range": [
                    386,
                    413
                  ],
                  "loc": {
                    "end": {
                      "column": 63,
                      "line": 19
                    },
                    "start": {
                      "column": 36,
                      "line": 19
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 22
                },
                "start": {
                  "column": 13,
                  "line": 19
                }
              }
            },
            "range": [
              352,
              477
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 22
              },
              "start": {
                "column": 2,
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
              "name": "log",
              "optional": false,
              "range": [
                481,
                484
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 24
                },
                "start": {
                  "column": 2,
                  "line": 24
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
                484,
                565
              ],
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
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "range": [
                              505,
                              509
                            ],
                            "loc": {
                              "end": {
                                "column": 20,
                                "line": 25
                              },
                              "start": {
                                "column": 16,
                                "line": 25
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "PrivateIdentifier",
                            "name": "privateField",
                            "range": [
                              510,
                              523
                            ],
                            "loc": {
                              "end": {
                                "column": 34,
                                "line": 25
                              },
                              "start": {
                                "column": 21,
                                "line": 25
                              }
                            }
                          },
                          "range": [
                            505,
                            523
                          ],
                          "loc": {
                            "end": {
                              "column": 34,
                              "line": 25
                            },
                            "start": {
                              "column": 16,
                              "line": 25
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
                            493,
                            500
                          ],
                          "loc": {
                            "end": {
                              "column": 11,
                              "line": 25
                            },
                            "start": {
                              "column": 4,
                              "line": 25
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
                            501,
                            504
                          ],
                          "loc": {
                            "end": {
                              "column": 15,
                              "line": 25
                            },
                            "start": {
                              "column": 12,
                              "line": 25
                            }
                          }
                        },
                        "range": [
                          493,
                          504
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 25
                          },
                          "start": {
                            "column": 4,
                            "line": 25
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        493,
                        524
                      ],
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 25
                        },
                        "start": {
                          "column": 4,
                          "line": 25
                        }
                      }
                    },
                    "range": [
                      493,
                      525
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 25
                      },
                      "start": {
                        "column": 4,
                        "line": 25
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
                            "type": "ThisExpression",
                            "range": [
                              542,
                              546
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
                            "name": "exposedField",
                            "optional": false,
                            "range": [
                              547,
                              559
                            ],
                            "loc": {
                              "end": {
                                "column": 33,
                                "line": 26
                              },
                              "start": {
                                "column": 21,
                                "line": 26
                              }
                            }
                          },
                          "range": [
                            542,
                            559
                          ],
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 26
                            },
                            "start": {
                              "column": 16,
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
                          "name": "console",
                          "optional": false,
                          "range": [
                            530,
                            537
                          ],
                          "loc": {
                            "end": {
                              "column": 11,
                              "line": 26
                            },
                            "start": {
                              "column": 4,
                              "line": 26
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
                            538,
                            541
                          ],
                          "loc": {
                            "end": {
                              "column": 15,
                              "line": 26
                            },
                            "start": {
                              "column": 12,
                              "line": 26
                            }
                          }
                        },
                        "range": [
                          530,
                          541
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 26
                          },
                          "start": {
                            "column": 4,
                            "line": 26
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        530,
                        560
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 26
                        },
                        "start": {
                          "column": 4,
                          "line": 26
                        }
                      }
                    },
                    "range": [
                      530,
                      561
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 26
                      },
                      "start": {
                        "column": 4,
                        "line": 26
                      }
                    }
                  }
                ],
                "range": [
                  487,
                  565
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 27
                  },
                  "start": {
                    "column": 8,
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
                  "column": 3,
                  "line": 27
                },
                "start": {
                  "column": 5,
                  "line": 24
                }
              }
            },
            "range": [
              481,
              565
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 27
              },
              "start": {
                "column": 2,
                "line": 24
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 28
          },
          "start": {
            "column": 8,
            "line": 16
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "range": [
          311,
          312
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 16
          },
          "start": {
            "column": 6,
            "line": 16
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        305,
        567
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 28
        },
        "start": {
          "column": 0,
          "line": 16
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 29
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
