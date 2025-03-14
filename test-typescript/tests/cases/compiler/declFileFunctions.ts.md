__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    41,
    1600
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        41,
        66
      ],
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "async": false,
        "body": {
          "type": "BlockStatement",
          "body": [],
          "range": [
            63,
            66
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 3
            },
            "start": {
              "column": 22,
              "line": 2
            }
          }
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "range": [
            57,
            60
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 2
            },
            "start": {
              "column": 16,
              "line": 2
            }
          }
        },
        "params": [],
        "range": [
          48,
          66
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 3
          },
          "start": {
            "column": 7,
            "line": 2
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        112,
        251
      ],
      "attributes": [],
      "declaration": {
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
                    "name": "d",
                    "optional": false,
                    "range": [
                      243,
                      244
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 8
                      },
                      "start": {
                        "column": 8,
                        "line": 8
                      }
                    }
                  },
                  "init": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "range": [
                      247,
                      248
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 8
                      },
                      "start": {
                        "column": 12,
                        "line": 8
                      }
                    }
                  },
                  "range": [
                    243,
                    248
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 8
                    },
                    "start": {
                      "column": 8,
                      "line": 8
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "var",
              "range": [
                239,
                249
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 8
                },
                "start": {
                  "column": 4,
                  "line": 8
                }
              }
            }
          ],
          "range": [
            233,
            251
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 9
            },
            "start": {
              "column": 15,
              "line": 7
            }
          }
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "fooWithParameters",
          "optional": false,
          "range": [
            128,
            145
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 5
            },
            "start": {
              "column": 16,
              "line": 5
            }
          }
        },
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
                  "column": 72,
                  "line": 5
                },
                "start": {
                  "column": 64,
                  "line": 5
                }
              },
              "range": [
                176,
                184
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  178,
                  184
                ],
                "loc": {
                  "end": {
                    "column": 72,
                    "line": 5
                  },
                  "start": {
                    "column": 66,
                    "line": 5
                  }
                }
              }
            },
            "range": [
              175,
              184
            ],
            "loc": {
              "end": {
                "column": 72,
                "line": 5
              },
              "start": {
                "column": 63,
                "line": 5
              }
            }
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 13,
                  "line": 7
                },
                "start": {
                  "column": 5,
                  "line": 7
                }
              },
              "range": [
                223,
                231
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  225,
                  231
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 7
                  },
                  "start": {
                    "column": 7,
                    "line": 7
                  }
                }
              }
            },
            "range": [
              222,
              231
            ],
            "loc": {
              "end": {
                "column": 13,
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
          119,
          251
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 9
          },
          "start": {
            "column": 7,
            "line": 5
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
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
      "type": "ExportNamedDeclaration",
      "range": [
        252,
        355
      ],
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "async": false,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "BinaryExpression",
                "operator": "+",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "range": [
                    334,
                    335
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 11
                    },
                    "start": {
                      "column": 11,
                      "line": 11
                    }
                  }
                },
                "right": {
                  "type": "CallExpression",
                  "arguments": [
                    {
                      "type": "Literal",
                      "raw": "\"\"",
                      "value": "",
                      "range": [
                        349,
                        351
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 11
                        },
                        "start": {
                          "column": 26,
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
                      "name": "rests",
                      "optional": false,
                      "range": [
                        338,
                        343
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 11
                        },
                        "start": {
                          "column": 15,
                          "line": 11
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
                        344,
                        348
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 11
                        },
                        "start": {
                          "column": 21,
                          "line": 11
                        }
                      }
                    },
                    "range": [
                      338,
                      348
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 11
                      },
                      "start": {
                        "column": 15,
                        "line": 11
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    338,
                    352
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 11
                    },
                    "start": {
                      "column": 15,
                      "line": 11
                    }
                  }
                },
                "range": [
                  334,
                  352
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 11
                  },
                  "start": {
                    "column": 11,
                    "line": 11
                  }
                }
              },
              "range": [
                327,
                353
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 11
                },
                "start": {
                  "column": 4,
                  "line": 11
                }
              }
            }
          ],
          "range": [
            321,
            355
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 12
            },
            "start": {
              "column": 69,
              "line": 10
            }
          }
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "fooWithRestParameters",
          "optional": false,
          "range": [
            268,
            289
          ],
          "loc": {
            "end": {
              "column": 37,
              "line": 10
            },
            "start": {
              "column": 16,
              "line": 10
            }
          }
        },
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
                  "column": 47,
                  "line": 10
                },
                "start": {
                  "column": 39,
                  "line": 10
                }
              },
              "range": [
                291,
                299
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  293,
                  299
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 10
                  },
                  "start": {
                    "column": 41,
                    "line": 10
                  }
                }
              }
            },
            "range": [
              290,
              299
            ],
            "loc": {
              "end": {
                "column": 47,
                "line": 10
              },
              "start": {
                "column": 38,
                "line": 10
              }
            }
          },
          {
            "type": "RestElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "rests",
              "optional": false,
              "range": [
                304,
                309
              ],
              "loc": {
                "end": {
                  "column": 57,
                  "line": 10
                },
                "start": {
                  "column": 52,
                  "line": 10
                }
              }
            },
            "decorators": [],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 67,
                  "line": 10
                },
                "start": {
                  "column": 57,
                  "line": 10
                }
              },
              "range": [
                309,
                319
              ],
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSStringKeyword",
                  "range": [
                    311,
                    317
                  ],
                  "loc": {
                    "end": {
                      "column": 65,
                      "line": 10
                    },
                    "start": {
                      "column": 59,
                      "line": 10
                    }
                  }
                },
                "range": [
                  311,
                  319
                ],
                "loc": {
                  "end": {
                    "column": 67,
                    "line": 10
                  },
                  "start": {
                    "column": 59,
                    "line": 10
                  }
                }
              }
            },
            "range": [
              301,
              319
            ],
            "loc": {
              "end": {
                "column": 67,
                "line": 10
              },
              "start": {
                "column": 49,
                "line": 10
              }
            }
          }
        ],
        "range": [
          259,
          355
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 12
          },
          "start": {
            "column": 7,
            "line": 10
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 12
        },
        "start": {
          "column": 0,
          "line": 10
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        357,
        409
      ],
      "attributes": [],
      "declaration": {
        "type": "TSDeclareFunction",
        "async": false,
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "fooWithOverloads",
          "optional": false,
          "range": [
            373,
            389
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 14
            },
            "start": {
              "column": 16,
              "line": 14
            }
          }
        },
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
                  "column": 42,
                  "line": 14
                },
                "start": {
                  "column": 34,
                  "line": 14
                }
              },
              "range": [
                391,
                399
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  393,
                  399
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 14
                  },
                  "start": {
                    "column": 36,
                    "line": 14
                  }
                }
              }
            },
            "range": [
              390,
              399
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 14
              },
              "start": {
                "column": 33,
                "line": 14
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 51,
              "line": 14
            },
            "start": {
              "column": 43,
              "line": 14
            }
          },
          "range": [
            400,
            408
          ],
          "typeAnnotation": {
            "type": "TSStringKeyword",
            "range": [
              402,
              408
            ],
            "loc": {
              "end": {
                "column": 51,
                "line": 14
              },
              "start": {
                "column": 45,
                "line": 14
              }
            }
          }
        },
        "range": [
          364,
          409
        ],
        "loc": {
          "end": {
            "column": 52,
            "line": 14
          },
          "start": {
            "column": 7,
            "line": 14
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 52,
          "line": 14
        },
        "start": {
          "column": 0,
          "line": 14
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        410,
        462
      ],
      "attributes": [],
      "declaration": {
        "type": "TSDeclareFunction",
        "async": false,
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "fooWithOverloads",
          "optional": false,
          "range": [
            426,
            442
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 15
            },
            "start": {
              "column": 16,
              "line": 15
            }
          }
        },
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
                  "column": 42,
                  "line": 15
                },
                "start": {
                  "column": 34,
                  "line": 15
                }
              },
              "range": [
                444,
                452
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  446,
                  452
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 15
                  },
                  "start": {
                    "column": 36,
                    "line": 15
                  }
                }
              }
            },
            "range": [
              443,
              452
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 15
              },
              "start": {
                "column": 33,
                "line": 15
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 51,
              "line": 15
            },
            "start": {
              "column": 43,
              "line": 15
            }
          },
          "range": [
            453,
            461
          ],
          "typeAnnotation": {
            "type": "TSNumberKeyword",
            "range": [
              455,
              461
            ],
            "loc": {
              "end": {
                "column": 51,
                "line": 15
              },
              "start": {
                "column": 45,
                "line": 15
              }
            }
          }
        },
        "range": [
          417,
          462
        ],
        "loc": {
          "end": {
            "column": 52,
            "line": 15
          },
          "start": {
            "column": 7,
            "line": 15
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 52,
          "line": 15
        },
        "start": {
          "column": 0,
          "line": 15
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        463,
        526
      ],
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "async": false,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "range": [
                  522,
                  523
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 17
                  },
                  "start": {
                    "column": 11,
                    "line": 17
                  }
                }
              },
              "range": [
                515,
                524
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 17
                },
                "start": {
                  "column": 4,
                  "line": 17
                }
              }
            }
          ],
          "range": [
            509,
            526
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 18
            },
            "start": {
              "column": 46,
              "line": 16
            }
          }
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "fooWithOverloads",
          "optional": false,
          "range": [
            479,
            495
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 16
            },
            "start": {
              "column": 16,
              "line": 16
            }
          }
        },
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
                  "column": 39,
                  "line": 16
                },
                "start": {
                  "column": 34,
                  "line": 16
                }
              },
              "range": [
                497,
                502
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  499,
                  502
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 16
                  },
                  "start": {
                    "column": 36,
                    "line": 16
                  }
                }
              }
            },
            "range": [
              496,
              502
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 16
              },
              "start": {
                "column": 33,
                "line": 16
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 45,
              "line": 16
            },
            "start": {
              "column": 40,
              "line": 16
            }
          },
          "range": [
            503,
            508
          ],
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "range": [
              505,
              508
            ],
            "loc": {
              "end": {
                "column": 45,
                "line": 16
              },
              "start": {
                "column": 42,
                "line": 16
              }
            }
          }
        },
        "range": [
          470,
          526
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 18
          },
          "start": {
            "column": 7,
            "line": 16
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 18
        },
        "start": {
          "column": 0,
          "line": 16
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        528,
        585
      ],
      "attributes": [],
      "declaration": {
        "type": "TSDeclareFunction",
        "async": false,
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "fooWithSingleOverload",
          "optional": false,
          "range": [
            544,
            565
          ],
          "loc": {
            "end": {
              "column": 37,
              "line": 20
            },
            "start": {
              "column": 16,
              "line": 20
            }
          }
        },
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
                  "column": 47,
                  "line": 20
                },
                "start": {
                  "column": 39,
                  "line": 20
                }
              },
              "range": [
                567,
                575
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  569,
                  575
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 20
                  },
                  "start": {
                    "column": 41,
                    "line": 20
                  }
                }
              }
            },
            "range": [
              566,
              575
            ],
            "loc": {
              "end": {
                "column": 47,
                "line": 20
              },
              "start": {
                "column": 38,
                "line": 20
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 56,
              "line": 20
            },
            "start": {
              "column": 48,
              "line": 20
            }
          },
          "range": [
            576,
            584
          ],
          "typeAnnotation": {
            "type": "TSStringKeyword",
            "range": [
              578,
              584
            ],
            "loc": {
              "end": {
                "column": 56,
                "line": 20
              },
              "start": {
                "column": 50,
                "line": 20
              }
            }
          }
        },
        "range": [
          535,
          585
        ],
        "loc": {
          "end": {
            "column": 57,
            "line": 20
          },
          "start": {
            "column": 7,
            "line": 20
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 57,
          "line": 20
        },
        "start": {
          "column": 0,
          "line": 20
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        586,
        649
      ],
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "async": false,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "range": [
                  645,
                  646
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 22
                  },
                  "start": {
                    "column": 11,
                    "line": 22
                  }
                }
              },
              "range": [
                638,
                647
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 22
                },
                "start": {
                  "column": 4,
                  "line": 22
                }
              }
            }
          ],
          "range": [
            632,
            649
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 23
            },
            "start": {
              "column": 46,
              "line": 21
            }
          }
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "fooWithSingleOverload",
          "optional": false,
          "range": [
            602,
            623
          ],
          "loc": {
            "end": {
              "column": 37,
              "line": 21
            },
            "start": {
              "column": 16,
              "line": 21
            }
          }
        },
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
                  "column": 44,
                  "line": 21
                },
                "start": {
                  "column": 39,
                  "line": 21
                }
              },
              "range": [
                625,
                630
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  627,
                  630
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 21
                  },
                  "start": {
                    "column": 41,
                    "line": 21
                  }
                }
              }
            },
            "range": [
              624,
              630
            ],
            "loc": {
              "end": {
                "column": 44,
                "line": 21
              },
              "start": {
                "column": 38,
                "line": 21
              }
            }
          }
        ],
        "range": [
          593,
          649
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 23
          },
          "start": {
            "column": 7,
            "line": 21
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 23
        },
        "start": {
          "column": 0,
          "line": 21
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        651,
        729
      ],
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "async": false,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "Literal",
                "raw": "true",
                "value": true,
                "range": [
                  722,
                  726
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 26
                  },
                  "start": {
                    "column": 11,
                    "line": 26
                  }
                }
              },
              "range": [
                715,
                727
              ],
              "loc": {
                "end": {
                  "column": 16,
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
            709,
            729
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 27
            },
            "start": {
              "column": 58,
              "line": 25
            }
          }
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "fooWithTypePredicate",
          "optional": false,
          "range": [
            667,
            687
          ],
          "loc": {
            "end": {
              "column": 36,
              "line": 25
            },
            "start": {
              "column": 16,
              "line": 25
            }
          }
        },
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
                  "column": 43,
                  "line": 25
                },
                "start": {
                  "column": 38,
                  "line": 25
                }
              },
              "range": [
                689,
                694
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  691,
                  694
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 25
                  },
                  "start": {
                    "column": 40,
                    "line": 25
                  }
                }
              }
            },
            "range": [
              688,
              694
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 25
              },
              "start": {
                "column": 37,
                "line": 25
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 57,
              "line": 25
            },
            "start": {
              "column": 44,
              "line": 25
            }
          },
          "range": [
            695,
            708
          ],
          "typeAnnotation": {
            "type": "TSTypePredicate",
            "asserts": false,
            "parameterName": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "range": [
                697,
                698
              ],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 25
                },
                "start": {
                  "column": 46,
                  "line": 25
                }
              }
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 57,
                  "line": 25
                },
                "start": {
                  "column": 51,
                  "line": 25
                }
              },
              "range": [
                702,
                708
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  702,
                  708
                ],
                "loc": {
                  "end": {
                    "column": 57,
                    "line": 25
                  },
                  "start": {
                    "column": 51,
                    "line": 25
                  }
                }
              }
            },
            "range": [
              697,
              708
            ],
            "loc": {
              "end": {
                "column": 57,
                "line": 25
              },
              "start": {
                "column": 46,
                "line": 25
              }
            }
          }
        },
        "range": [
          658,
          729
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 27
          },
          "start": {
            "column": 7,
            "line": 25
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 27
        },
        "start": {
          "column": 0,
          "line": 25
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        730,
        841
      ],
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "async": false,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "Literal",
                "raw": "true",
                "value": true,
                "range": [
                  834,
                  838
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 29
                  },
                  "start": {
                    "column": 11,
                    "line": 29
                  }
                }
              },
              "range": [
                827,
                839
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 29
                },
                "start": {
                  "column": 4,
                  "line": 29
                }
              }
            }
          ],
          "range": [
            821,
            841
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 30
            },
            "start": {
              "column": 91,
              "line": 28
            }
          }
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "fooWithTypePredicateAndMulitpleParams",
          "optional": false,
          "range": [
            746,
            783
          ],
          "loc": {
            "end": {
              "column": 53,
              "line": 28
            },
            "start": {
              "column": 16,
              "line": 28
            }
          }
        },
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
                  "column": 60,
                  "line": 28
                },
                "start": {
                  "column": 55,
                  "line": 28
                }
              },
              "range": [
                785,
                790
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  787,
                  790
                ],
                "loc": {
                  "end": {
                    "column": 60,
                    "line": 28
                  },
                  "start": {
                    "column": 57,
                    "line": 28
                  }
                }
              }
            },
            "range": [
              784,
              790
            ],
            "loc": {
              "end": {
                "column": 60,
                "line": 28
              },
              "start": {
                "column": 54,
                "line": 28
              }
            }
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 68,
                  "line": 28
                },
                "start": {
                  "column": 63,
                  "line": 28
                }
              },
              "range": [
                793,
                798
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  795,
                  798
                ],
                "loc": {
                  "end": {
                    "column": 68,
                    "line": 28
                  },
                  "start": {
                    "column": 65,
                    "line": 28
                  }
                }
              }
            },
            "range": [
              792,
              798
            ],
            "loc": {
              "end": {
                "column": 68,
                "line": 28
              },
              "start": {
                "column": 62,
                "line": 28
              }
            }
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 76,
                  "line": 28
                },
                "start": {
                  "column": 71,
                  "line": 28
                }
              },
              "range": [
                801,
                806
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  803,
                  806
                ],
                "loc": {
                  "end": {
                    "column": 76,
                    "line": 28
                  },
                  "start": {
                    "column": 73,
                    "line": 28
                  }
                }
              }
            },
            "range": [
              800,
              806
            ],
            "loc": {
              "end": {
                "column": 76,
                "line": 28
              },
              "start": {
                "column": 70,
                "line": 28
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 90,
              "line": 28
            },
            "start": {
              "column": 77,
              "line": 28
            }
          },
          "range": [
            807,
            820
          ],
          "typeAnnotation": {
            "type": "TSTypePredicate",
            "asserts": false,
            "parameterName": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "range": [
                809,
                810
              ],
              "loc": {
                "end": {
                  "column": 80,
                  "line": 28
                },
                "start": {
                  "column": 79,
                  "line": 28
                }
              }
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 90,
                  "line": 28
                },
                "start": {
                  "column": 84,
                  "line": 28
                }
              },
              "range": [
                814,
                820
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  814,
                  820
                ],
                "loc": {
                  "end": {
                    "column": 90,
                    "line": 28
                  },
                  "start": {
                    "column": 84,
                    "line": 28
                  }
                }
              }
            },
            "range": [
              809,
              820
            ],
            "loc": {
              "end": {
                "column": 90,
                "line": 28
              },
              "start": {
                "column": 79,
                "line": 28
              }
            }
          }
        },
        "range": [
          737,
          841
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 30
          },
          "start": {
            "column": 7,
            "line": 28
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 30
        },
        "start": {
          "column": 0,
          "line": 28
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        842,
        932
      ],
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "async": false,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "Literal",
                "raw": "true",
                "value": true,
                "range": [
                  925,
                  929
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 32
                  },
                  "start": {
                    "column": 11,
                    "line": 32
                  }
                }
              },
              "range": [
                918,
                930
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 32
                },
                "start": {
                  "column": 4,
                  "line": 32
                }
              }
            }
          ],
          "range": [
            912,
            932
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 33
            },
            "start": {
              "column": 70,
              "line": 31
            }
          }
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "fooWithTypeTypePredicateAndGeneric",
          "optional": false,
          "range": [
            858,
            892
          ],
          "loc": {
            "end": {
              "column": 50,
              "line": 31
            },
            "start": {
              "column": 16,
              "line": 31
            }
          }
        },
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
                  "column": 60,
                  "line": 31
                },
                "start": {
                  "column": 55,
                  "line": 31
                }
              },
              "range": [
                897,
                902
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  899,
                  902
                ],
                "loc": {
                  "end": {
                    "column": 60,
                    "line": 31
                  },
                  "start": {
                    "column": 57,
                    "line": 31
                  }
                }
              }
            },
            "range": [
              896,
              902
            ],
            "loc": {
              "end": {
                "column": 60,
                "line": 31
              },
              "start": {
                "column": 54,
                "line": 31
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 69,
              "line": 31
            },
            "start": {
              "column": 61,
              "line": 31
            }
          },
          "range": [
            903,
            911
          ],
          "typeAnnotation": {
            "type": "TSTypePredicate",
            "asserts": false,
            "parameterName": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "range": [
                905,
                906
              ],
              "loc": {
                "end": {
                  "column": 64,
                  "line": 31
                },
                "start": {
                  "column": 63,
                  "line": 31
                }
              }
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 69,
                  "line": 31
                },
                "start": {
                  "column": 68,
                  "line": 31
                }
              },
              "range": [
                910,
                911
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    910,
                    911
                  ],
                  "loc": {
                    "end": {
                      "column": 69,
                      "line": 31
                    },
                    "start": {
                      "column": 68,
                      "line": 31
                    }
                  }
                },
                "range": [
                  910,
                  911
                ],
                "loc": {
                  "end": {
                    "column": 69,
                    "line": 31
                  },
                  "start": {
                    "column": 68,
                    "line": 31
                  }
                }
              }
            },
            "range": [
              905,
              911
            ],
            "loc": {
              "end": {
                "column": 69,
                "line": 31
              },
              "start": {
                "column": 63,
                "line": 31
              }
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 53,
              "line": 31
            },
            "start": {
              "column": 50,
              "line": 31
            }
          },
          "range": [
            892,
            895
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
                  893,
                  894
                ],
                "loc": {
                  "end": {
                    "column": 52,
                    "line": 31
                  },
                  "start": {
                    "column": 51,
                    "line": 31
                  }
                }
              },
              "out": false,
              "range": [
                893,
                894
              ],
              "loc": {
                "end": {
                  "column": 52,
                  "line": 31
                },
                "start": {
                  "column": 51,
                  "line": 31
                }
              }
            }
          ]
        },
        "range": [
          849,
          932
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 33
          },
          "start": {
            "column": 7,
            "line": 31
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 33
        },
        "start": {
          "column": 0,
          "line": 31
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        933,
        1036
      ],
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "async": false,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "Literal",
                "raw": "true",
                "value": true,
                "range": [
                  1029,
                  1033
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 35
                  },
                  "start": {
                    "column": 11,
                    "line": 35
                  }
                }
              },
              "range": [
                1022,
                1034
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 35
                },
                "start": {
                  "column": 4,
                  "line": 35
                }
              }
            }
          ],
          "range": [
            1016,
            1036
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 36
            },
            "start": {
              "column": 83,
              "line": 34
            }
          }
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "fooWithTypeTypePredicateAndRestParam",
          "optional": false,
          "range": [
            949,
            985
          ],
          "loc": {
            "end": {
              "column": 52,
              "line": 34
            },
            "start": {
              "column": 16,
              "line": 34
            }
          }
        },
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
                  "column": 59,
                  "line": 34
                },
                "start": {
                  "column": 54,
                  "line": 34
                }
              },
              "range": [
                987,
                992
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  989,
                  992
                ],
                "loc": {
                  "end": {
                    "column": 59,
                    "line": 34
                  },
                  "start": {
                    "column": 56,
                    "line": 34
                  }
                }
              }
            },
            "range": [
              986,
              992
            ],
            "loc": {
              "end": {
                "column": 59,
                "line": 34
              },
              "start": {
                "column": 53,
                "line": 34
              }
            }
          },
          {
            "type": "RestElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "rest",
              "optional": false,
              "range": [
                997,
                1001
              ],
              "loc": {
                "end": {
                  "column": 68,
                  "line": 34
                },
                "start": {
                  "column": 64,
                  "line": 34
                }
              }
            },
            "decorators": [],
            "optional": false,
            "range": [
              994,
              1001
            ],
            "loc": {
              "end": {
                "column": 68,
                "line": 34
              },
              "start": {
                "column": 61,
                "line": 34
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 82,
              "line": 34
            },
            "start": {
              "column": 69,
              "line": 34
            }
          },
          "range": [
            1002,
            1015
          ],
          "typeAnnotation": {
            "type": "TSTypePredicate",
            "asserts": false,
            "parameterName": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "range": [
                1004,
                1005
              ],
              "loc": {
                "end": {
                  "column": 72,
                  "line": 34
                },
                "start": {
                  "column": 71,
                  "line": 34
                }
              }
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 82,
                  "line": 34
                },
                "start": {
                  "column": 76,
                  "line": 34
                }
              },
              "range": [
                1009,
                1015
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  1009,
                  1015
                ],
                "loc": {
                  "end": {
                    "column": 82,
                    "line": 34
                  },
                  "start": {
                    "column": 76,
                    "line": 34
                  }
                }
              }
            },
            "range": [
              1004,
              1015
            ],
            "loc": {
              "end": {
                "column": 82,
                "line": 34
              },
              "start": {
                "column": 71,
                "line": 34
              }
            }
          }
        },
        "range": [
          940,
          1036
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 36
          },
          "start": {
            "column": 7,
            "line": 34
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 36
        },
        "start": {
          "column": 0,
          "line": 34
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          1116,
          1119
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 40
          },
          "start": {
            "column": 26,
            "line": 39
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "nonExportedFoo",
        "optional": false,
        "range": [
          1099,
          1113
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 39
          },
          "start": {
            "column": 9,
            "line": 39
          }
        }
      },
      "params": [],
      "range": [
        1090,
        1119
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 40
        },
        "start": {
          "column": 0,
          "line": 39
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
                  "name": "d",
                  "optional": false,
                  "range": [
                    1300,
                    1301
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 45
                    },
                    "start": {
                      "column": 8,
                      "line": 45
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "range": [
                    1304,
                    1305
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 45
                    },
                    "start": {
                      "column": 12,
                      "line": 45
                    }
                  }
                },
                "range": [
                  1300,
                  1305
                ],
                "loc": {
                  "end": {
                    "column": 13,
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
              1296,
              1306
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 45
              },
              "start": {
                "column": 4,
                "line": 45
              }
            }
          }
        ],
        "range": [
          1290,
          1308
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 46
          },
          "start": {
            "column": 15,
            "line": 44
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "nonExportedFooWithParameters",
        "optional": false,
        "range": [
          1174,
          1202
        ],
        "loc": {
          "end": {
            "column": 37,
            "line": 42
          },
          "start": {
            "column": 9,
            "line": 42
          }
        }
      },
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
                "column": 76,
                "line": 42
              },
              "start": {
                "column": 68,
                "line": 42
              }
            },
            "range": [
              1233,
              1241
            ],
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "range": [
                1235,
                1241
              ],
              "loc": {
                "end": {
                  "column": 76,
                  "line": 42
                },
                "start": {
                  "column": 70,
                  "line": 42
                }
              }
            }
          },
          "range": [
            1232,
            1241
          ],
          "loc": {
            "end": {
              "column": 76,
              "line": 42
            },
            "start": {
              "column": 67,
              "line": 42
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 13,
                "line": 44
              },
              "start": {
                "column": 5,
                "line": 44
              }
            },
            "range": [
              1280,
              1288
            ],
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "range": [
                1282,
                1288
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 44
                },
                "start": {
                  "column": 7,
                  "line": 44
                }
              }
            }
          },
          "range": [
            1279,
            1288
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 44
            },
            "start": {
              "column": 4,
              "line": 44
            }
          }
        }
      ],
      "range": [
        1165,
        1308
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 46
        },
        "start": {
          "column": 0,
          "line": 42
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
            "type": "ReturnStatement",
            "argument": {
              "type": "BinaryExpression",
              "operator": "+",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "range": [
                  1395,
                  1396
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 48
                  },
                  "start": {
                    "column": 11,
                    "line": 48
                  }
                }
              },
              "right": {
                "type": "CallExpression",
                "arguments": [
                  {
                    "type": "Literal",
                    "raw": "\"\"",
                    "value": "",
                    "range": [
                      1410,
                      1412
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 48
                      },
                      "start": {
                        "column": 26,
                        "line": 48
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
                    "name": "rests",
                    "optional": false,
                    "range": [
                      1399,
                      1404
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 48
                      },
                      "start": {
                        "column": 15,
                        "line": 48
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
                      1405,
                      1409
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 48
                      },
                      "start": {
                        "column": 21,
                        "line": 48
                      }
                    }
                  },
                  "range": [
                    1399,
                    1409
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 48
                    },
                    "start": {
                      "column": 15,
                      "line": 48
                    }
                  }
                },
                "optional": false,
                "range": [
                  1399,
                  1413
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 48
                  },
                  "start": {
                    "column": 15,
                    "line": 48
                  }
                }
              },
              "range": [
                1395,
                1413
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 48
                },
                "start": {
                  "column": 11,
                  "line": 48
                }
              }
            },
            "range": [
              1388,
              1414
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 48
              },
              "start": {
                "column": 4,
                "line": 48
              }
            }
          }
        ],
        "range": [
          1382,
          1416
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 49
          },
          "start": {
            "column": 73,
            "line": 47
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "nonExportedFooWithRestParameters",
        "optional": false,
        "range": [
          1318,
          1350
        ],
        "loc": {
          "end": {
            "column": 41,
            "line": 47
          },
          "start": {
            "column": 9,
            "line": 47
          }
        }
      },
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
                "column": 51,
                "line": 47
              },
              "start": {
                "column": 43,
                "line": 47
              }
            },
            "range": [
              1352,
              1360
            ],
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "range": [
                1354,
                1360
              ],
              "loc": {
                "end": {
                  "column": 51,
                  "line": 47
                },
                "start": {
                  "column": 45,
                  "line": 47
                }
              }
            }
          },
          "range": [
            1351,
            1360
          ],
          "loc": {
            "end": {
              "column": 51,
              "line": 47
            },
            "start": {
              "column": 42,
              "line": 47
            }
          }
        },
        {
          "type": "RestElement",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "rests",
            "optional": false,
            "range": [
              1365,
              1370
            ],
            "loc": {
              "end": {
                "column": 61,
                "line": 47
              },
              "start": {
                "column": 56,
                "line": 47
              }
            }
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 71,
                "line": 47
              },
              "start": {
                "column": 61,
                "line": 47
              }
            },
            "range": [
              1370,
              1380
            ],
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSStringKeyword",
                "range": [
                  1372,
                  1378
                ],
                "loc": {
                  "end": {
                    "column": 69,
                    "line": 47
                  },
                  "start": {
                    "column": 63,
                    "line": 47
                  }
                }
              },
              "range": [
                1372,
                1380
              ],
              "loc": {
                "end": {
                  "column": 71,
                  "line": 47
                },
                "start": {
                  "column": 63,
                  "line": 47
                }
              }
            }
          },
          "range": [
            1362,
            1380
          ],
          "loc": {
            "end": {
              "column": 71,
              "line": 47
            },
            "start": {
              "column": 53,
              "line": 47
            }
          }
        }
      ],
      "range": [
        1309,
        1416
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 49
        },
        "start": {
          "column": 0,
          "line": 47
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "nonExportedFooWithOverloads",
        "optional": false,
        "range": [
          1427,
          1454
        ],
        "loc": {
          "end": {
            "column": 36,
            "line": 51
          },
          "start": {
            "column": 9,
            "line": 51
          }
        }
      },
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
                "column": 46,
                "line": 51
              },
              "start": {
                "column": 38,
                "line": 51
              }
            },
            "range": [
              1456,
              1464
            ],
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "range": [
                1458,
                1464
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 51
                },
                "start": {
                  "column": 40,
                  "line": 51
                }
              }
            }
          },
          "range": [
            1455,
            1464
          ],
          "loc": {
            "end": {
              "column": 46,
              "line": 51
            },
            "start": {
              "column": 37,
              "line": 51
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 55,
            "line": 51
          },
          "start": {
            "column": 47,
            "line": 51
          }
        },
        "range": [
          1465,
          1473
        ],
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "range": [
            1467,
            1473
          ],
          "loc": {
            "end": {
              "column": 55,
              "line": 51
            },
            "start": {
              "column": 49,
              "line": 51
            }
          }
        }
      },
      "range": [
        1418,
        1474
      ],
      "loc": {
        "end": {
          "column": 56,
          "line": 51
        },
        "start": {
          "column": 0,
          "line": 51
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "nonExportedFooWithOverloads",
        "optional": false,
        "range": [
          1484,
          1511
        ],
        "loc": {
          "end": {
            "column": 36,
            "line": 52
          },
          "start": {
            "column": 9,
            "line": 52
          }
        }
      },
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
                "column": 46,
                "line": 52
              },
              "start": {
                "column": 38,
                "line": 52
              }
            },
            "range": [
              1513,
              1521
            ],
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "range": [
                1515,
                1521
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 52
                },
                "start": {
                  "column": 40,
                  "line": 52
                }
              }
            }
          },
          "range": [
            1512,
            1521
          ],
          "loc": {
            "end": {
              "column": 46,
              "line": 52
            },
            "start": {
              "column": 37,
              "line": 52
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 55,
            "line": 52
          },
          "start": {
            "column": 47,
            "line": 52
          }
        },
        "range": [
          1522,
          1530
        ],
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "range": [
            1524,
            1530
          ],
          "loc": {
            "end": {
              "column": 55,
              "line": 52
            },
            "start": {
              "column": 49,
              "line": 52
            }
          }
        }
      },
      "range": [
        1475,
        1531
      ],
      "loc": {
        "end": {
          "column": 56,
          "line": 52
        },
        "start": {
          "column": 0,
          "line": 52
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
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "range": [
                1595,
                1596
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 54
                },
                "start": {
                  "column": 11,
                  "line": 54
                }
              }
            },
            "range": [
              1588,
              1597
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 54
              },
              "start": {
                "column": 4,
                "line": 54
              }
            }
          }
        ],
        "range": [
          1582,
          1599
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 55
          },
          "start": {
            "column": 50,
            "line": 53
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "nonExportedFooWithOverloads",
        "optional": false,
        "range": [
          1541,
          1568
        ],
        "loc": {
          "end": {
            "column": 36,
            "line": 53
          },
          "start": {
            "column": 9,
            "line": 53
          }
        }
      },
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
                "column": 43,
                "line": 53
              },
              "start": {
                "column": 38,
                "line": 53
              }
            },
            "range": [
              1570,
              1575
            ],
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                1572,
                1575
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 53
                },
                "start": {
                  "column": 40,
                  "line": 53
                }
              }
            }
          },
          "range": [
            1569,
            1575
          ],
          "loc": {
            "end": {
              "column": 43,
              "line": 53
            },
            "start": {
              "column": 37,
              "line": 53
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 49,
            "line": 53
          },
          "start": {
            "column": 44,
            "line": 53
          }
        },
        "range": [
          1576,
          1581
        ],
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "range": [
            1578,
            1581
          ],
          "loc": {
            "end": {
              "column": 49,
              "line": 53
            },
            "start": {
              "column": 46,
              "line": 53
            }
          }
        }
      },
      "range": [
        1532,
        1599
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 55
        },
        "start": {
          "column": 0,
          "line": 53
        }
      }
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 0,
      "line": 56
    },
    "start": {
      "column": 0,
      "line": 2
    }
  },
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    41,
    519
  ],
  "body": [
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          62,
          65
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 3
          },
          "start": {
            "column": 21,
            "line": 2
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "globalfoo",
        "optional": false,
        "range": [
          50,
          59
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 2
          },
          "start": {
            "column": 9,
            "line": 2
          }
        }
      },
      "params": [],
      "range": [
        41,
        65
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 2
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
                  "name": "d",
                  "optional": false,
                  "range": [
                    241,
                    242
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 8
                    },
                    "start": {
                      "column": 8,
                      "line": 8
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "range": [
                    245,
                    246
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 8
                    },
                    "start": {
                      "column": 12,
                      "line": 8
                    }
                  }
                },
                "range": [
                  241,
                  246
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 8
                  },
                  "start": {
                    "column": 8,
                    "line": 8
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              237,
              247
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 8
              },
              "start": {
                "column": 4,
                "line": 8
              }
            }
          }
        ],
        "range": [
          231,
          249
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 9
          },
          "start": {
            "column": 15,
            "line": 7
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "globalfooWithParameters",
        "optional": false,
        "range": [
          120,
          143
        ],
        "loc": {
          "end": {
            "column": 32,
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
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 71,
                "line": 5
              },
              "start": {
                "column": 63,
                "line": 5
              }
            },
            "range": [
              174,
              182
            ],
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "range": [
                176,
                182
              ],
              "loc": {
                "end": {
                  "column": 71,
                  "line": 5
                },
                "start": {
                  "column": 65,
                  "line": 5
                }
              }
            }
          },
          "range": [
            173,
            182
          ],
          "loc": {
            "end": {
              "column": 71,
              "line": 5
            },
            "start": {
              "column": 62,
              "line": 5
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 13,
                "line": 7
              },
              "start": {
                "column": 5,
                "line": 7
              }
            },
            "range": [
              221,
              229
            ],
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "range": [
                223,
                229
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 7
                },
                "start": {
                  "column": 7,
                  "line": 7
                }
              }
            }
          },
          "range": [
            220,
            229
          ],
          "loc": {
            "end": {
              "column": 13,
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
        111,
        249
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
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "BinaryExpression",
              "operator": "+",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "range": [
                  331,
                  332
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 11
                  },
                  "start": {
                    "column": 11,
                    "line": 11
                  }
                }
              },
              "right": {
                "type": "CallExpression",
                "arguments": [
                  {
                    "type": "Literal",
                    "raw": "\"\"",
                    "value": "",
                    "range": [
                      346,
                      348
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 11
                      },
                      "start": {
                        "column": 26,
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
                    "name": "rests",
                    "optional": false,
                    "range": [
                      335,
                      340
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 11
                      },
                      "start": {
                        "column": 15,
                        "line": 11
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
                      341,
                      345
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 11
                      },
                      "start": {
                        "column": 21,
                        "line": 11
                      }
                    }
                  },
                  "range": [
                    335,
                    345
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 11
                    },
                    "start": {
                      "column": 15,
                      "line": 11
                    }
                  }
                },
                "optional": false,
                "range": [
                  335,
                  349
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 11
                  },
                  "start": {
                    "column": 15,
                    "line": 11
                  }
                }
              },
              "range": [
                331,
                349
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 11
                },
                "start": {
                  "column": 11,
                  "line": 11
                }
              }
            },
            "range": [
              324,
              350
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 11
              },
              "start": {
                "column": 4,
                "line": 11
              }
            }
          }
        ],
        "range": [
          318,
          352
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 12
          },
          "start": {
            "column": 68,
            "line": 10
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "globalfooWithRestParameters",
        "optional": false,
        "range": [
          259,
          286
        ],
        "loc": {
          "end": {
            "column": 36,
            "line": 10
          },
          "start": {
            "column": 9,
            "line": 10
          }
        }
      },
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
                "column": 46,
                "line": 10
              },
              "start": {
                "column": 38,
                "line": 10
              }
            },
            "range": [
              288,
              296
            ],
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "range": [
                290,
                296
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 10
                },
                "start": {
                  "column": 40,
                  "line": 10
                }
              }
            }
          },
          "range": [
            287,
            296
          ],
          "loc": {
            "end": {
              "column": 46,
              "line": 10
            },
            "start": {
              "column": 37,
              "line": 10
            }
          }
        },
        {
          "type": "RestElement",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "rests",
            "optional": false,
            "range": [
              301,
              306
            ],
            "loc": {
              "end": {
                "column": 56,
                "line": 10
              },
              "start": {
                "column": 51,
                "line": 10
              }
            }
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 66,
                "line": 10
              },
              "start": {
                "column": 56,
                "line": 10
              }
            },
            "range": [
              306,
              316
            ],
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSStringKeyword",
                "range": [
                  308,
                  314
                ],
                "loc": {
                  "end": {
                    "column": 64,
                    "line": 10
                  },
                  "start": {
                    "column": 58,
                    "line": 10
                  }
                }
              },
              "range": [
                308,
                316
              ],
              "loc": {
                "end": {
                  "column": 66,
                  "line": 10
                },
                "start": {
                  "column": 58,
                  "line": 10
                }
              }
            }
          },
          "range": [
            298,
            316
          ],
          "loc": {
            "end": {
              "column": 66,
              "line": 10
            },
            "start": {
              "column": 48,
              "line": 10
            }
          }
        }
      ],
      "range": [
        250,
        352
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 12
        },
        "start": {
          "column": 0,
          "line": 10
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "globalfooWithOverloads",
        "optional": false,
        "range": [
          362,
          384
        ],
        "loc": {
          "end": {
            "column": 31,
            "line": 13
          },
          "start": {
            "column": 9,
            "line": 13
          }
        }
      },
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
                "column": 41,
                "line": 13
              },
              "start": {
                "column": 33,
                "line": 13
              }
            },
            "range": [
              386,
              394
            ],
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "range": [
                388,
                394
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 13
                },
                "start": {
                  "column": 35,
                  "line": 13
                }
              }
            }
          },
          "range": [
            385,
            394
          ],
          "loc": {
            "end": {
              "column": 41,
              "line": 13
            },
            "start": {
              "column": 32,
              "line": 13
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 50,
            "line": 13
          },
          "start": {
            "column": 42,
            "line": 13
          }
        },
        "range": [
          395,
          403
        ],
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "range": [
            397,
            403
          ],
          "loc": {
            "end": {
              "column": 50,
              "line": 13
            },
            "start": {
              "column": 44,
              "line": 13
            }
          }
        }
      },
      "range": [
        353,
        404
      ],
      "loc": {
        "end": {
          "column": 51,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 13
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "globalfooWithOverloads",
        "optional": false,
        "range": [
          414,
          436
        ],
        "loc": {
          "end": {
            "column": 31,
            "line": 14
          },
          "start": {
            "column": 9,
            "line": 14
          }
        }
      },
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
                "column": 41,
                "line": 14
              },
              "start": {
                "column": 33,
                "line": 14
              }
            },
            "range": [
              438,
              446
            ],
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "range": [
                440,
                446
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 14
                },
                "start": {
                  "column": 35,
                  "line": 14
                }
              }
            }
          },
          "range": [
            437,
            446
          ],
          "loc": {
            "end": {
              "column": 41,
              "line": 14
            },
            "start": {
              "column": 32,
              "line": 14
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 50,
            "line": 14
          },
          "start": {
            "column": 42,
            "line": 14
          }
        },
        "range": [
          447,
          455
        ],
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "range": [
            449,
            455
          ],
          "loc": {
            "end": {
              "column": 50,
              "line": 14
            },
            "start": {
              "column": 44,
              "line": 14
            }
          }
        }
      },
      "range": [
        405,
        456
      ],
      "loc": {
        "end": {
          "column": 51,
          "line": 14
        },
        "start": {
          "column": 0,
          "line": 14
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
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "range": [
                515,
                516
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 16
                },
                "start": {
                  "column": 11,
                  "line": 16
                }
              }
            },
            "range": [
              508,
              517
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 16
              },
              "start": {
                "column": 4,
                "line": 16
              }
            }
          }
        ],
        "range": [
          502,
          519
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 17
          },
          "start": {
            "column": 45,
            "line": 15
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "globalfooWithOverloads",
        "optional": false,
        "range": [
          466,
          488
        ],
        "loc": {
          "end": {
            "column": 31,
            "line": 15
          },
          "start": {
            "column": 9,
            "line": 15
          }
        }
      },
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
                "column": 38,
                "line": 15
              },
              "start": {
                "column": 33,
                "line": 15
              }
            },
            "range": [
              490,
              495
            ],
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                492,
                495
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 15
                },
                "start": {
                  "column": 35,
                  "line": 15
                }
              }
            }
          },
          "range": [
            489,
            495
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 15
            },
            "start": {
              "column": 32,
              "line": 15
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 44,
            "line": 15
          },
          "start": {
            "column": 39,
            "line": 15
          }
        },
        "range": [
          496,
          501
        ],
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "range": [
            498,
            501
          ],
          "loc": {
            "end": {
              "column": 44,
              "line": 15
            },
            "start": {
              "column": 41,
              "line": 15
            }
          }
        }
      },
      "range": [
        457,
        519
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 17
        },
        "start": {
          "column": 0,
          "line": 15
        }
      }
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 1,
      "line": 17
    },
    "start": {
      "column": 0,
      "line": 2
    }
  },
  "hashbang": null
}
```
