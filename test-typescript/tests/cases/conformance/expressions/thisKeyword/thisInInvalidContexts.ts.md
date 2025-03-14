__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    816
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          19,
          50
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                25,
                36
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 15,
                  "line": 2
                },
                "start": {
                  "column": 4,
                  "line": 2
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
                36,
                48
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  45,
                  48
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 2
                  },
                  "start": {
                    "column": 24,
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
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 2
                      },
                      "start": {
                        "column": 17,
                        "line": 2
                      }
                    },
                    "range": [
                      38,
                      43
                    ],
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "range": [
                        40,
                        43
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 2
                        },
                        "start": {
                          "column": 19,
                          "line": 2
                        }
                      }
                    }
                  },
                  "range": [
                    37,
                    43
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 2
                    },
                    "start": {
                      "column": 16,
                      "line": 2
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 2
                },
                "start": {
                  "column": 15,
                  "line": 2
                }
              }
            },
            "range": [
              25,
              48
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 2
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 3
          },
          "start": {
            "column": 19,
            "line": 1
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BaseErrClass",
        "optional": false,
        "range": [
          6,
          18
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 1
          },
          "start": {
            "column": 6,
            "line": 1
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        0,
        50
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          102,
          204
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
              "name": "t",
              "optional": false,
              "range": [
                108,
                109
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 6
                },
                "start": {
                  "column": 4,
                  "line": 6
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": null,
            "range": [
              108,
              110
            ],
            "loc": {
              "end": {
                "column": 6,
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
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                151,
                162
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
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
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                162,
                202
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
                          "type": "ThisExpression",
                          "range": [
                            181,
                            185
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 9
                            },
                            "start": {
                              "column": 14,
                              "line": 9
                            }
                          }
                        }
                      ],
                      "callee": {
                        "type": "Super",
                        "range": [
                          175,
                          180
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 9
                          },
                          "start": {
                            "column": 8,
                            "line": 9
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        175,
                        186
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 9
                        },
                        "start": {
                          "column": 8,
                          "line": 9
                        }
                      }
                    },
                    "range": [
                      175,
                      187
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 9
                      },
                      "start": {
                        "column": 8,
                        "line": 9
                      }
                    }
                  }
                ],
                "range": [
                  165,
                  202
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 10
                  },
                  "start": {
                    "column": 18,
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
                  "line": 10
                },
                "start": {
                  "column": 15,
                  "line": 8
                }
              }
            },
            "range": [
              151,
              202
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 10
              },
              "start": {
                "column": 4,
                "line": 8
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 11
          },
          "start": {
            "column": 50,
            "line": 5
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ClassWithNoInitializer",
        "optional": false,
        "range": [
          58,
          80
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 5
          },
          "start": {
            "column": 6,
            "line": 5
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "BaseErrClass",
        "optional": false,
        "range": [
          89,
          101
        ],
        "loc": {
          "end": {
            "column": 49,
            "line": 5
          },
          "start": {
            "column": 37,
            "line": 5
          }
        }
      },
      "range": [
        52,
        204
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 11
        },
        "start": {
          "column": 0,
          "line": 5
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          254,
          360
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
              "name": "t",
              "optional": false,
              "range": [
                260,
                261
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 14
                },
                "start": {
                  "column": 4,
                  "line": 14
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Literal",
              "raw": "4",
              "value": 4,
              "range": [
                264,
                265
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 14
                },
                "start": {
                  "column": 8,
                  "line": 14
                }
              }
            },
            "range": [
              260,
              266
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 14
              },
              "start": {
                "column": 4,
                "line": 14
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
                307,
                318
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 15,
                  "line": 16
                },
                "start": {
                  "column": 4,
                  "line": 16
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
                318,
                358
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
                          "type": "ThisExpression",
                          "range": [
                            337,
                            341
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 17
                            },
                            "start": {
                              "column": 14,
                              "line": 17
                            }
                          }
                        }
                      ],
                      "callee": {
                        "type": "Super",
                        "range": [
                          331,
                          336
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 17
                          },
                          "start": {
                            "column": 8,
                            "line": 17
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        331,
                        342
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 17
                        },
                        "start": {
                          "column": 8,
                          "line": 17
                        }
                      }
                    },
                    "range": [
                      331,
                      343
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 17
                      },
                      "start": {
                        "column": 8,
                        "line": 17
                      }
                    }
                  }
                ],
                "range": [
                  321,
                  358
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 18
                  },
                  "start": {
                    "column": 18,
                    "line": 16
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
                  "line": 18
                },
                "start": {
                  "column": 15,
                  "line": 16
                }
              }
            },
            "range": [
              307,
              358
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 18
              },
              "start": {
                "column": 4,
                "line": 16
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 19
          },
          "start": {
            "column": 48,
            "line": 13
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ClassWithInitializer",
        "optional": false,
        "range": [
          212,
          232
        ],
        "loc": {
          "end": {
            "column": 26,
            "line": 13
          },
          "start": {
            "column": 6,
            "line": 13
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "BaseErrClass",
        "optional": false,
        "range": [
          241,
          253
        ],
        "loc": {
          "end": {
            "column": 47,
            "line": 13
          },
          "start": {
            "column": 35,
            "line": 13
          }
        }
      },
      "range": [
        206,
        360
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 19
        },
        "start": {
          "column": 0,
          "line": 13
        }
      }
    },
    {
      "type": "TSModuleDeclaration",
      "body": {
        "type": "TSModuleBlock",
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
                  "range": [
                    413,
                    414
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 23
                    },
                    "start": {
                      "column": 8,
                      "line": 23
                    }
                  }
                },
                "init": {
                  "type": "ThisExpression",
                  "range": [
                    417,
                    421
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
                "range": [
                  413,
                  421
                ],
                "loc": {
                  "end": {
                    "column": 16,
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
              409,
              422
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 23
              },
              "start": {
                "column": 4,
                "line": 23
              }
            }
          }
        ],
        "range": [
          371,
          433
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 24
          },
          "start": {
            "column": 9,
            "line": 21
          }
        }
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          369,
          370
        ],
        "decorators": [],
        "name": "M",
        "optional": false,
        "loc": {
          "end": {
            "column": 8,
            "line": 21
          },
          "start": {
            "column": 7,
            "line": 21
          }
        }
      },
      "kind": "module",
      "range": [
        362,
        433
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 24
        },
        "start": {
          "column": 0,
          "line": 21
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
          579,
          582
        ],
        "loc": {
          "end": {
            "column": 33,
            "line": 30
          },
          "start": {
            "column": 30,
            "line": 30
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "genericFunc",
        "optional": false,
        "range": [
          558,
          569
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 30
          },
          "start": {
            "column": 9,
            "line": 30
          }
        }
      },
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
                "line": 30
              },
              "start": {
                "column": 25,
                "line": 30
              }
            },
            "range": [
              574,
              577
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  576,
                  577
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 30
                  },
                  "start": {
                    "column": 27,
                    "line": 30
                  }
                }
              },
              "range": [
                576,
                577
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 30
                },
                "start": {
                  "column": 27,
                  "line": 30
                }
              }
            }
          },
          "range": [
            573,
            577
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 30
            },
            "start": {
              "column": 24,
              "line": 30
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 23,
            "line": 30
          },
          "start": {
            "column": 20,
            "line": 30
          }
        },
        "range": [
          569,
          572
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
                570,
                571
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 30
                },
                "start": {
                  "column": 21,
                  "line": 30
                }
              }
            },
            "out": false,
            "range": [
              570,
              571
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 30
              },
              "start": {
                "column": 21,
                "line": 30
              }
            }
          }
        ]
      },
      "range": [
        549,
        582
      ],
      "loc": {
        "end": {
          "column": 33,
          "line": 30
        },
        "start": {
          "column": 0,
          "line": 30
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "undefined",
            "optional": false,
            "range": [
              601,
              610
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 31
              },
              "start": {
                "column": 18,
                "line": 31
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "genericFunc",
          "optional": false,
          "range": [
            583,
            594
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 31
            },
            "start": {
              "column": 0,
              "line": 31
            }
          }
        },
        "optional": false,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            594,
            600
          ],
          "params": [
            {
              "type": "TSThisType",
              "range": [
                595,
                599
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 31
                },
                "start": {
                  "column": 12,
                  "line": 31
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 31
            },
            "start": {
              "column": 11,
              "line": 31
            }
          }
        },
        "range": [
          583,
          611
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 31
          },
          "start": {
            "column": 0,
            "line": 31
          }
        }
      },
      "range": [
        583,
        612
      ],
      "loc": {
        "end": {
          "column": 29,
          "line": 31
        },
        "start": {
          "column": 0,
          "line": 31
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          666,
          670
        ],
        "body": [],
        "loc": {
          "end": {
            "column": 1,
            "line": 35
          },
          "start": {
            "column": 29,
            "line": 33
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ErrClass3",
        "optional": false,
        "range": [
          643,
          652
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 33
          },
          "start": {
            "column": 6,
            "line": 33
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "ThisExpression",
        "range": [
          661,
          665
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 33
          },
          "start": {
            "column": 24,
            "line": 33
          }
        }
      },
      "range": [
        637,
        670
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 35
        },
        "start": {
          "column": 0,
          "line": 33
        }
      }
    },
    {
      "type": "TSEnumDeclaration",
      "body": {
        "type": "TSEnumBody",
        "range": [
          720,
          814
        ],
        "members": [
          {
            "type": "TSEnumMember",
            "computed": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "range": [
                726,
                727
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 39
                },
                "start": {
                  "column": 4,
                  "line": 39
                }
              }
            },
            "initializer": {
              "type": "ThisExpression",
              "range": [
                730,
                734
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 39
                },
                "start": {
                  "column": 8,
                  "line": 39
                }
              }
            },
            "range": [
              726,
              734
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 39
              },
              "start": {
                "column": 4,
                "line": 39
              }
            }
          },
          {
            "type": "TSEnumMember",
            "computed": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "range": [
                765,
                766
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 40
                },
                "start": {
                  "column": 4,
                  "line": 40
                }
              }
            },
            "initializer": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "ThisExpression",
                "range": [
                  769,
                  773
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
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "spaaaace",
                "optional": false,
                "range": [
                  774,
                  782
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 40
                  },
                  "start": {
                    "column": 13,
                    "line": 40
                  }
                }
              },
              "range": [
                769,
                782
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 40
                },
                "start": {
                  "column": 8,
                  "line": 40
                }
              }
            },
            "range": [
              765,
              782
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 40
              },
              "start": {
                "column": 4,
                "line": 40
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 41
          },
          "start": {
            "column": 14,
            "line": 38
          }
        }
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SomeEnum",
        "optional": false,
        "range": [
          711,
          719
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 38
          },
          "start": {
            "column": 5,
            "line": 38
          }
        }
      },
      "range": [
        706,
        814
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 41
        },
        "start": {
          "column": 0,
          "line": 38
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 43
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
