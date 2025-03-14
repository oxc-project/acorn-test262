__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    248,
    777
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          256,
          509
        ],
        "body": [
          {
            "type": "PropertyDefinition",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "data",
              "optional": false,
              "range": [
                262,
                266
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 7
                },
                "start": {
                  "column": 4,
                  "line": 7
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
                  "column": 27,
                  "line": 7
                },
                "start": {
                  "column": 8,
                  "line": 7
                }
              },
              "range": [
                266,
                285
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "range": [
                      268,
                      274
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
                  },
                  {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSStringKeyword",
                      "range": [
                        277,
                        283
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 7
                        },
                        "start": {
                          "column": 19,
                          "line": 7
                        }
                      }
                    },
                    "range": [
                      277,
                      285
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 7
                      },
                      "start": {
                        "column": 19,
                        "line": 7
                      }
                    }
                  }
                ],
                "range": [
                  268,
                  285
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 7
                  },
                  "start": {
                    "column": 10,
                    "line": 7
                  }
                }
              }
            },
            "value": null,
            "range": [
              262,
              286
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 7
              },
              "start": {
                "column": 4,
                "line": 7
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
              "name": "getData",
              "optional": false,
              "range": [
                291,
                298
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 8
                },
                "start": {
                  "column": 4,
                  "line": 8
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
                298,
                403
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
                          "name": "data",
                          "optional": false,
                          "range": [
                            315,
                            319
                          ],
                          "loc": {
                            "end": {
                              "column": 16,
                              "line": 9
                            },
                            "start": {
                              "column": 12,
                              "line": 9
                            }
                          }
                        },
                        "init": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "range": [
                              322,
                              326
                            ],
                            "loc": {
                              "end": {
                                "column": 23,
                                "line": 9
                              },
                              "start": {
                                "column": 19,
                                "line": 9
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "data",
                            "optional": false,
                            "range": [
                              327,
                              331
                            ],
                            "loc": {
                              "end": {
                                "column": 28,
                                "line": 9
                              },
                              "start": {
                                "column": 24,
                                "line": 9
                              }
                            }
                          },
                          "range": [
                            322,
                            331
                          ],
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 9
                            },
                            "start": {
                              "column": 19,
                              "line": 9
                            }
                          }
                        },
                        "range": [
                          315,
                          331
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 9
                          },
                          "start": {
                            "column": 12,
                            "line": 9
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      311,
                      332
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 9
                      },
                      "start": {
                        "column": 8,
                        "line": 9
                      }
                    }
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "ConditionalExpression",
                      "alternate": {
                        "type": "CallExpression",
                        "arguments": [
                          {
                            "type": "Literal",
                            "raw": "\" \"",
                            "value": " ",
                            "range": [
                              392,
                              395
                            ],
                            "loc": {
                              "end": {
                                "column": 62,
                                "line": 10
                              },
                              "start": {
                                "column": 59,
                                "line": 10
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
                            "name": "data",
                            "optional": false,
                            "range": [
                              382,
                              386
                            ],
                            "loc": {
                              "end": {
                                "column": 53,
                                "line": 10
                              },
                              "start": {
                                "column": 49,
                                "line": 10
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
                              387,
                              391
                            ],
                            "loc": {
                              "end": {
                                "column": 58,
                                "line": 10
                              },
                              "start": {
                                "column": 54,
                                "line": 10
                              }
                            }
                          },
                          "range": [
                            382,
                            391
                          ],
                          "loc": {
                            "end": {
                              "column": 58,
                              "line": 10
                            },
                            "start": {
                              "column": 49,
                              "line": 10
                            }
                          }
                        },
                        "optional": false,
                        "range": [
                          382,
                          396
                        ],
                        "loc": {
                          "end": {
                            "column": 63,
                            "line": 10
                          },
                          "start": {
                            "column": 49,
                            "line": 10
                          }
                        }
                      },
                      "consequent": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "data",
                        "optional": false,
                        "range": [
                          375,
                          379
                        ],
                        "loc": {
                          "end": {
                            "column": 46,
                            "line": 10
                          },
                          "start": {
                            "column": 42,
                            "line": 10
                          }
                        }
                      },
                      "test": {
                        "type": "BinaryExpression",
                        "operator": "===",
                        "left": {
                          "type": "UnaryExpression",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "data",
                            "optional": false,
                            "range": [
                              355,
                              359
                            ],
                            "loc": {
                              "end": {
                                "column": 26,
                                "line": 10
                              },
                              "start": {
                                "column": 22,
                                "line": 10
                              }
                            }
                          },
                          "operator": "typeof",
                          "prefix": true,
                          "range": [
                            348,
                            359
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 10
                            },
                            "start": {
                              "column": 15,
                              "line": 10
                            }
                          }
                        },
                        "right": {
                          "type": "Literal",
                          "raw": "\"string\"",
                          "value": "string",
                          "range": [
                            364,
                            372
                          ],
                          "loc": {
                            "end": {
                              "column": 39,
                              "line": 10
                            },
                            "start": {
                              "column": 31,
                              "line": 10
                            }
                          }
                        },
                        "range": [
                          348,
                          372
                        ],
                        "loc": {
                          "end": {
                            "column": 39,
                            "line": 10
                          },
                          "start": {
                            "column": 15,
                            "line": 10
                          }
                        }
                      },
                      "range": [
                        348,
                        396
                      ],
                      "loc": {
                        "end": {
                          "column": 63,
                          "line": 10
                        },
                        "start": {
                          "column": 15,
                          "line": 10
                        }
                      }
                    },
                    "range": [
                      341,
                      397
                    ],
                    "loc": {
                      "end": {
                        "column": 64,
                        "line": 10
                      },
                      "start": {
                        "column": 8,
                        "line": 10
                      }
                    }
                  }
                ],
                "range": [
                  301,
                  403
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 11
                  },
                  "start": {
                    "column": 14,
                    "line": 8
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
                  "line": 11
                },
                "start": {
                  "column": 11,
                  "line": 8
                }
              }
            },
            "range": [
              291,
              403
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 11
              },
              "start": {
                "column": 4,
                "line": 8
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
              "name": "getData1",
              "optional": false,
              "range": [
                409,
                417
              ],
              "loc": {
                "end": {
                  "column": 12,
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
                417,
                507
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "ConditionalExpression",
                      "alternate": {
                        "type": "CallExpression",
                        "arguments": [
                          {
                            "type": "Literal",
                            "raw": "\" \"",
                            "value": " ",
                            "range": [
                              496,
                              499
                            ],
                            "loc": {
                              "end": {
                                "column": 77,
                                "line": 14
                              },
                              "start": {
                                "column": 74,
                                "line": 14
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
                              "type": "ThisExpression",
                              "range": [
                                481,
                                485
                              ],
                              "loc": {
                                "end": {
                                  "column": 63,
                                  "line": 14
                                },
                                "start": {
                                  "column": 59,
                                  "line": 14
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "data",
                              "optional": false,
                              "range": [
                                486,
                                490
                              ],
                              "loc": {
                                "end": {
                                  "column": 68,
                                  "line": 14
                                },
                                "start": {
                                  "column": 64,
                                  "line": 14
                                }
                              }
                            },
                            "range": [
                              481,
                              490
                            ],
                            "loc": {
                              "end": {
                                "column": 68,
                                "line": 14
                              },
                              "start": {
                                "column": 59,
                                "line": 14
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
                              491,
                              495
                            ],
                            "loc": {
                              "end": {
                                "column": 73,
                                "line": 14
                              },
                              "start": {
                                "column": 69,
                                "line": 14
                              }
                            }
                          },
                          "range": [
                            481,
                            495
                          ],
                          "loc": {
                            "end": {
                              "column": 73,
                              "line": 14
                            },
                            "start": {
                              "column": 59,
                              "line": 14
                            }
                          }
                        },
                        "optional": false,
                        "range": [
                          481,
                          500
                        ],
                        "loc": {
                          "end": {
                            "column": 78,
                            "line": 14
                          },
                          "start": {
                            "column": 59,
                            "line": 14
                          }
                        }
                      },
                      "consequent": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "range": [
                            469,
                            473
                          ],
                          "loc": {
                            "end": {
                              "column": 51,
                              "line": 14
                            },
                            "start": {
                              "column": 47,
                              "line": 14
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "data",
                          "optional": false,
                          "range": [
                            474,
                            478
                          ],
                          "loc": {
                            "end": {
                              "column": 56,
                              "line": 14
                            },
                            "start": {
                              "column": 52,
                              "line": 14
                            }
                          }
                        },
                        "range": [
                          469,
                          478
                        ],
                        "loc": {
                          "end": {
                            "column": 56,
                            "line": 14
                          },
                          "start": {
                            "column": 47,
                            "line": 14
                          }
                        }
                      },
                      "test": {
                        "type": "BinaryExpression",
                        "operator": "===",
                        "left": {
                          "type": "UnaryExpression",
                          "argument": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "range": [
                                444,
                                448
                              ],
                              "loc": {
                                "end": {
                                  "column": 26,
                                  "line": 14
                                },
                                "start": {
                                  "column": 22,
                                  "line": 14
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "data",
                              "optional": false,
                              "range": [
                                449,
                                453
                              ],
                              "loc": {
                                "end": {
                                  "column": 31,
                                  "line": 14
                                },
                                "start": {
                                  "column": 27,
                                  "line": 14
                                }
                              }
                            },
                            "range": [
                              444,
                              453
                            ],
                            "loc": {
                              "end": {
                                "column": 31,
                                "line": 14
                              },
                              "start": {
                                "column": 22,
                                "line": 14
                              }
                            }
                          },
                          "operator": "typeof",
                          "prefix": true,
                          "range": [
                            437,
                            453
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 14
                            },
                            "start": {
                              "column": 15,
                              "line": 14
                            }
                          }
                        },
                        "right": {
                          "type": "Literal",
                          "raw": "\"string\"",
                          "value": "string",
                          "range": [
                            458,
                            466
                          ],
                          "loc": {
                            "end": {
                              "column": 44,
                              "line": 14
                            },
                            "start": {
                              "column": 36,
                              "line": 14
                            }
                          }
                        },
                        "range": [
                          437,
                          466
                        ],
                        "loc": {
                          "end": {
                            "column": 44,
                            "line": 14
                          },
                          "start": {
                            "column": 15,
                            "line": 14
                          }
                        }
                      },
                      "range": [
                        437,
                        500
                      ],
                      "loc": {
                        "end": {
                          "column": 78,
                          "line": 14
                        },
                        "start": {
                          "column": 15,
                          "line": 14
                        }
                      }
                    },
                    "range": [
                      430,
                      501
                    ],
                    "loc": {
                      "end": {
                        "column": 79,
                        "line": 14
                      },
                      "start": {
                        "column": 8,
                        "line": 14
                      }
                    }
                  }
                ],
                "range": [
                  420,
                  507
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 15
                  },
                  "start": {
                    "column": 15,
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
                  "column": 5,
                  "line": 15
                },
                "start": {
                  "column": 12,
                  "line": 13
                }
              }
            },
            "range": [
              409,
              507
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 15
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
            "line": 16
          },
          "start": {
            "column": 8,
            "line": 6
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
          254,
          255
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 6
          },
          "start": {
            "column": 6,
            "line": 6
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        248,
        509
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 16
        },
        "start": {
          "column": 0,
          "line": 6
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
            "name": "o",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 1,
                  "line": 21
                },
                "start": {
                  "column": 5,
                  "line": 18
                }
              },
              "range": [
                516,
                574
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
                      "name": "prop1",
                      "optional": false,
                      "range": [
                        524,
                        529
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 19
                        },
                        "start": {
                          "column": 4,
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
                          "column": 24,
                          "line": 19
                        },
                        "start": {
                          "column": 9,
                          "line": 19
                        }
                      },
                      "range": [
                        529,
                        544
                      ],
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSNumberKeyword",
                            "range": [
                              531,
                              537
                            ],
                            "loc": {
                              "end": {
                                "column": 17,
                                "line": 19
                              },
                              "start": {
                                "column": 11,
                                "line": 19
                              }
                            }
                          },
                          {
                            "type": "TSStringKeyword",
                            "range": [
                              538,
                              544
                            ],
                            "loc": {
                              "end": {
                                "column": 24,
                                "line": 19
                              },
                              "start": {
                                "column": 18,
                                "line": 19
                              }
                            }
                          }
                        ],
                        "range": [
                          531,
                          544
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 19
                          },
                          "start": {
                            "column": 11,
                            "line": 19
                          }
                        }
                      }
                    },
                    "range": [
                      524,
                      545
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 19
                      },
                      "start": {
                        "column": 4,
                        "line": 19
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "prop2",
                      "optional": false,
                      "range": [
                        550,
                        555
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 20
                        },
                        "start": {
                          "column": 4,
                          "line": 20
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
                          "column": 25,
                          "line": 20
                        },
                        "start": {
                          "column": 9,
                          "line": 20
                        }
                      },
                      "range": [
                        555,
                        571
                      ],
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSBooleanKeyword",
                            "range": [
                              557,
                              564
                            ],
                            "loc": {
                              "end": {
                                "column": 18,
                                "line": 20
                              },
                              "start": {
                                "column": 11,
                                "line": 20
                              }
                            }
                          },
                          {
                            "type": "TSStringKeyword",
                            "range": [
                              565,
                              571
                            ],
                            "loc": {
                              "end": {
                                "column": 25,
                                "line": 20
                              },
                              "start": {
                                "column": 19,
                                "line": 20
                              }
                            }
                          }
                        ],
                        "range": [
                          557,
                          571
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 20
                          },
                          "start": {
                            "column": 11,
                            "line": 20
                          }
                        }
                      }
                    },
                    "range": [
                      550,
                      572
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 20
                      },
                      "start": {
                        "column": 4,
                        "line": 20
                      }
                    }
                  }
                ],
                "range": [
                  518,
                  574
                ],
                "loc": {
                  "end": {
                    "column": 1,
                    "line": 21
                  },
                  "start": {
                    "column": 7,
                    "line": 18
                  }
                }
              }
            },
            "range": [
              515,
              574
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 21
              },
              "start": {
                "column": 4,
                "line": 18
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "prop1",
                  "optional": false,
                  "range": [
                    587,
                    592
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 22
                    },
                    "start": {
                      "column": 8,
                      "line": 22
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "\"string\"",
                  "value": "string",
                  "range": [
                    594,
                    602
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 22
                    },
                    "start": {
                      "column": 15,
                      "line": 22
                    }
                  }
                },
                "range": [
                  587,
                  602
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 22
                  },
                  "start": {
                    "column": 8,
                    "line": 22
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "prop2",
                  "optional": false,
                  "range": [
                    613,
                    618
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 23
                    },
                    "start": {
                      "column": 8,
                      "line": 23
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "true",
                  "value": true,
                  "range": [
                    620,
                    624
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 23
                    },
                    "start": {
                      "column": 15,
                      "line": 23
                    }
                  }
                },
                "range": [
                  613,
                  624
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 23
                  },
                  "start": {
                    "column": 8,
                    "line": 23
                  }
                }
              }
            ],
            "range": [
              577,
              630
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 24
              },
              "start": {
                "column": 4,
                "line": 21
              }
            }
          },
          "range": [
            515,
            630
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 24
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
        511,
        630
      ],
      "loc": {
        "end": {
          "column": 5,
          "line": 24
        },
        "start": {
          "column": 0,
          "line": 18
        }
      }
    },
    {
      "type": "IfStatement",
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          690,
          692
        ],
        "loc": {
          "end": {
            "column": 60,
            "line": 26
          },
          "start": {
            "column": 58,
            "line": 26
          }
        }
      },
      "test": {
        "type": "LogicalExpression",
        "operator": "&&",
        "left": {
          "type": "BinaryExpression",
          "operator": "===",
          "left": {
            "type": "UnaryExpression",
            "argument": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "o",
                "optional": false,
                "range": [
                  643,
                  644
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 26
                  },
                  "start": {
                    "column": 11,
                    "line": 26
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "prop1",
                "optional": false,
                "range": [
                  645,
                  650
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 26
                  },
                  "start": {
                    "column": 13,
                    "line": 26
                  }
                }
              },
              "range": [
                643,
                650
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 26
                },
                "start": {
                  "column": 11,
                  "line": 26
                }
              }
            },
            "operator": "typeof",
            "prefix": true,
            "range": [
              636,
              650
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 26
              },
              "start": {
                "column": 4,
                "line": 26
              }
            }
          },
          "right": {
            "type": "Literal",
            "raw": "\"string\"",
            "value": "string",
            "range": [
              655,
              663
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 26
              },
              "start": {
                "column": 23,
                "line": 26
              }
            }
          },
          "range": [
            636,
            663
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 26
            },
            "start": {
              "column": 4,
              "line": 26
            }
          }
        },
        "right": {
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
                "name": "o",
                "optional": false,
                "range": [
                  667,
                  668
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 26
                  },
                  "start": {
                    "column": 35,
                    "line": 26
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "prop1",
                "optional": false,
                "range": [
                  669,
                  674
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 26
                  },
                  "start": {
                    "column": 37,
                    "line": 26
                  }
                }
              },
              "range": [
                667,
                674
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 26
                },
                "start": {
                  "column": 35,
                  "line": 26
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLowerCase",
              "optional": false,
              "range": [
                675,
                686
              ],
              "loc": {
                "end": {
                  "column": 54,
                  "line": 26
                },
                "start": {
                  "column": 43,
                  "line": 26
                }
              }
            },
            "range": [
              667,
              686
            ],
            "loc": {
              "end": {
                "column": 54,
                "line": 26
              },
              "start": {
                "column": 35,
                "line": 26
              }
            }
          },
          "optional": false,
          "range": [
            667,
            688
          ],
          "loc": {
            "end": {
              "column": 56,
              "line": 26
            },
            "start": {
              "column": 35,
              "line": 26
            }
          }
        },
        "range": [
          636,
          688
        ],
        "loc": {
          "end": {
            "column": 56,
            "line": 26
          },
          "start": {
            "column": 4,
            "line": 26
          }
        }
      },
      "range": [
        632,
        692
      ],
      "loc": {
        "end": {
          "column": 60,
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
            "name": "prop1",
            "optional": false,
            "range": [
              697,
              702
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 27
              },
              "start": {
                "column": 4,
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
              "name": "o",
              "optional": false,
              "range": [
                705,
                706
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 27
                },
                "start": {
                  "column": 12,
                  "line": 27
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop1",
              "optional": false,
              "range": [
                707,
                712
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 27
                },
                "start": {
                  "column": 14,
                  "line": 27
                }
              }
            },
            "range": [
              705,
              712
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 27
              },
              "start": {
                "column": 12,
                "line": 27
              }
            }
          },
          "range": [
            697,
            712
          ],
          "loc": {
            "end": {
              "column": 19,
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
        693,
        713
      ],
      "loc": {
        "end": {
          "column": 20,
          "line": 27
        },
        "start": {
          "column": 0,
          "line": 27
        }
      }
    },
    {
      "type": "IfStatement",
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          774,
          777
        ],
        "loc": {
          "end": {
            "column": 63,
            "line": 28
          },
          "start": {
            "column": 60,
            "line": 28
          }
        }
      },
      "test": {
        "type": "LogicalExpression",
        "operator": "&&",
        "left": {
          "type": "BinaryExpression",
          "operator": "===",
          "left": {
            "type": "UnaryExpression",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop1",
              "optional": false,
              "range": [
                725,
                730
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 28
                },
                "start": {
                  "column": 11,
                  "line": 28
                }
              }
            },
            "operator": "typeof",
            "prefix": true,
            "range": [
              718,
              730
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 28
              },
              "start": {
                "column": 4,
                "line": 28
              }
            }
          },
          "right": {
            "type": "Literal",
            "raw": "\"string\"",
            "value": "string",
            "range": [
              735,
              743
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 28
              },
              "start": {
                "column": 21,
                "line": 28
              }
            }
          },
          "range": [
            718,
            743
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 28
            },
            "start": {
              "column": 4,
              "line": 28
            }
          }
        },
        "right": {
          "type": "CallExpression",
          "arguments": [],
          "callee": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop1",
              "optional": false,
              "range": [
                747,
                752
              ],
              "loc": {
                "end": {
                  "column": 38,
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
              "name": "toLocaleLowerCase",
              "optional": false,
              "range": [
                753,
                770
              ],
              "loc": {
                "end": {
                  "column": 56,
                  "line": 28
                },
                "start": {
                  "column": 39,
                  "line": 28
                }
              }
            },
            "range": [
              747,
              770
            ],
            "loc": {
              "end": {
                "column": 56,
                "line": 28
              },
              "start": {
                "column": 33,
                "line": 28
              }
            }
          },
          "optional": false,
          "range": [
            747,
            772
          ],
          "loc": {
            "end": {
              "column": 58,
              "line": 28
            },
            "start": {
              "column": 33,
              "line": 28
            }
          }
        },
        "range": [
          718,
          772
        ],
        "loc": {
          "end": {
            "column": 58,
            "line": 28
          },
          "start": {
            "column": 4,
            "line": 28
          }
        }
      },
      "range": [
        714,
        777
      ],
      "loc": {
        "end": {
          "column": 63,
          "line": 28
        },
        "start": {
          "column": 0,
          "line": 28
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 63,
      "line": 28
    },
    "start": {
      "column": 0,
      "line": 6
    }
  },
  "hashbang": null
}
```
