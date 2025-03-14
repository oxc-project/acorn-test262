__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    412
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          8,
          180
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
              "name": "x",
              "optional": false,
              "range": [
                11,
                12
              ],
              "loc": {
                "end": {
                  "column": 2,
                  "line": 2
                },
                "start": {
                  "column": 1,
                  "line": 2
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
                  "column": 10,
                  "line": 2
                },
                "start": {
                  "column": 2,
                  "line": 2
                }
              },
              "range": [
                12,
                20
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  14,
                  20
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 2
                  },
                  "start": {
                    "column": 4,
                    "line": 2
                  }
                }
              }
            },
            "value": null,
            "range": [
              11,
              21
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 2
              },
              "start": {
                "column": 1,
                "line": 2
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
                26,
                37
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 15,
                  "line": 3
                },
                "start": {
                  "column": 4,
                  "line": 3
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
                37,
                176
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
                            50,
                            54
                          ],
                          "loc": {
                            "end": {
                              "column": 12,
                              "line": 4
                            },
                            "start": {
                              "column": 8,
                              "line": 4
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
                            55,
                            56
                          ],
                          "loc": {
                            "end": {
                              "column": 14,
                              "line": 4
                            },
                            "start": {
                              "column": 13,
                              "line": 4
                            }
                          }
                        },
                        "range": [
                          50,
                          56
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 4
                          },
                          "start": {
                            "column": 8,
                            "line": 4
                          }
                        }
                      },
                      "right": {
                        "type": "CallExpression",
                        "arguments": [],
                        "callee": {
                          "type": "ArrowFunctionExpression",
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
                                      "range": [
                                        75,
                                        76
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 8,
                                          "line": 5
                                        },
                                        "start": {
                                          "column": 7,
                                          "line": 5
                                        }
                                      }
                                    },
                                    "init": {
                                      "type": "Literal",
                                      "raw": "1",
                                      "value": 1,
                                      "range": [
                                        79,
                                        80
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 12,
                                          "line": 5
                                        },
                                        "start": {
                                          "column": 11,
                                          "line": 5
                                        }
                                      }
                                    },
                                    "range": [
                                      75,
                                      80
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 12,
                                        "line": 5
                                      },
                                      "start": {
                                        "column": 7,
                                        "line": 5
                                      }
                                    }
                                  }
                                ],
                                "declare": false,
                                "kind": "var",
                                "range": [
                                  71,
                                  81
                                ],
                                "loc": {
                                  "end": {
                                    "column": 13,
                                    "line": 5
                                  },
                                  "start": {
                                    "column": 3,
                                    "line": 5
                                  }
                                }
                              },
                              {
                                "type": "ReturnStatement",
                                "argument": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "ThisExpression",
                                    "range": [
                                      92,
                                      96
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 14,
                                        "line": 6
                                      },
                                      "start": {
                                        "column": 10,
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
                                      97,
                                      98
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 16,
                                        "line": 6
                                      },
                                      "start": {
                                        "column": 15,
                                        "line": 6
                                      }
                                    }
                                  },
                                  "range": [
                                    92,
                                    98
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 16,
                                      "line": 6
                                    },
                                    "start": {
                                      "column": 10,
                                      "line": 6
                                    }
                                  }
                                },
                                "range": [
                                  85,
                                  99
                                ],
                                "loc": {
                                  "end": {
                                    "column": 17,
                                    "line": 6
                                  },
                                  "start": {
                                    "column": 3,
                                    "line": 6
                                  }
                                }
                              }
                            ],
                            "range": [
                              66,
                              103
                            ],
                            "loc": {
                              "end": {
                                "column": 3,
                                "line": 7
                              },
                              "start": {
                                "column": 24,
                                "line": 4
                              }
                            }
                          },
                          "expression": false,
                          "generator": false,
                          "id": null,
                          "params": [],
                          "range": [
                            60,
                            103
                          ],
                          "loc": {
                            "end": {
                              "column": 3,
                              "line": 7
                            },
                            "start": {
                              "column": 18,
                              "line": 4
                            }
                          }
                        },
                        "optional": false,
                        "range": [
                          59,
                          106
                        ],
                        "loc": {
                          "end": {
                            "column": 6,
                            "line": 7
                          },
                          "start": {
                            "column": 17,
                            "line": 4
                          }
                        }
                      },
                      "range": [
                        50,
                        106
                      ],
                      "loc": {
                        "end": {
                          "column": 6,
                          "line": 7
                        },
                        "start": {
                          "column": 8,
                          "line": 4
                        }
                      }
                    },
                    "range": [
                      50,
                      107
                    ],
                    "loc": {
                      "end": {
                        "column": 7,
                        "line": 7
                      },
                      "start": {
                        "column": 8,
                        "line": 4
                      }
                    }
                  },
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
                            110,
                            114
                          ],
                          "loc": {
                            "end": {
                              "column": 6,
                              "line": 8
                            },
                            "start": {
                              "column": 2,
                              "line": 8
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
                            115,
                            116
                          ],
                          "loc": {
                            "end": {
                              "column": 8,
                              "line": 8
                            },
                            "start": {
                              "column": 7,
                              "line": 8
                            }
                          }
                        },
                        "range": [
                          110,
                          116
                        ],
                        "loc": {
                          "end": {
                            "column": 8,
                            "line": 8
                          },
                          "start": {
                            "column": 2,
                            "line": 8
                          }
                        }
                      },
                      "right": {
                        "type": "CallExpression",
                        "arguments": [],
                        "callee": {
                          "type": "FunctionExpression",
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
                                      "range": [
                                        139,
                                        140
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 8,
                                          "line": 9
                                        },
                                        "start": {
                                          "column": 7,
                                          "line": 9
                                        }
                                      }
                                    },
                                    "init": {
                                      "type": "Literal",
                                      "raw": "1",
                                      "value": 1,
                                      "range": [
                                        143,
                                        144
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 12,
                                          "line": 9
                                        },
                                        "start": {
                                          "column": 11,
                                          "line": 9
                                        }
                                      }
                                    },
                                    "range": [
                                      139,
                                      144
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 12,
                                        "line": 9
                                      },
                                      "start": {
                                        "column": 7,
                                        "line": 9
                                      }
                                    }
                                  }
                                ],
                                "declare": false,
                                "kind": "var",
                                "range": [
                                  135,
                                  145
                                ],
                                "loc": {
                                  "end": {
                                    "column": 13,
                                    "line": 9
                                  },
                                  "start": {
                                    "column": 3,
                                    "line": 9
                                  }
                                }
                              },
                              {
                                "type": "ReturnStatement",
                                "argument": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "ThisExpression",
                                    "range": [
                                      156,
                                      160
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 14,
                                        "line": 10
                                      },
                                      "start": {
                                        "column": 10,
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
                                      161,
                                      162
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 16,
                                        "line": 10
                                      },
                                      "start": {
                                        "column": 15,
                                        "line": 10
                                      }
                                    }
                                  },
                                  "range": [
                                    156,
                                    162
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 16,
                                      "line": 10
                                    },
                                    "start": {
                                      "column": 10,
                                      "line": 10
                                    }
                                  }
                                },
                                "range": [
                                  149,
                                  163
                                ],
                                "loc": {
                                  "end": {
                                    "column": 17,
                                    "line": 10
                                  },
                                  "start": {
                                    "column": 3,
                                    "line": 10
                                  }
                                }
                              }
                            ],
                            "range": [
                              130,
                              167
                            ],
                            "loc": {
                              "end": {
                                "column": 3,
                                "line": 11
                              },
                              "start": {
                                "column": 22,
                                "line": 8
                              }
                            }
                          },
                          "declare": false,
                          "expression": false,
                          "generator": false,
                          "id": null,
                          "params": [],
                          "range": [
                            119,
                            167
                          ],
                          "loc": {
                            "end": {
                              "column": 3,
                              "line": 11
                            },
                            "start": {
                              "column": 11,
                              "line": 8
                            }
                          }
                        },
                        "optional": false,
                        "range": [
                          119,
                          169
                        ],
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
                        110,
                        169
                      ],
                      "loc": {
                        "end": {
                          "column": 5,
                          "line": 11
                        },
                        "start": {
                          "column": 2,
                          "line": 8
                        }
                      }
                    },
                    "range": [
                      110,
                      170
                    ],
                    "loc": {
                      "end": {
                        "column": 6,
                        "line": 11
                      },
                      "start": {
                        "column": 2,
                        "line": 8
                      }
                    }
                  }
                ],
                "range": [
                  40,
                  176
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 12
                  },
                  "start": {
                    "column": 18,
                    "line": 3
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
                  "line": 12
                },
                "start": {
                  "column": 15,
                  "line": 3
                }
              }
            },
            "range": [
              26,
              176
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 12
              },
              "start": {
                "column": 4,
                "line": 3
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 13
          },
          "start": {
            "column": 8,
            "line": 1
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
          6,
          7
        ],
        "loc": {
          "end": {
            "column": 7,
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
        180
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "setTimeout",
        "optional": false,
        "range": [
          198,
          208
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 14
          },
          "start": {
            "column": 17,
            "line": 14
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "expression",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 43,
                "line": 14
              },
              "start": {
                "column": 38,
                "line": 14
              }
            },
            "range": [
              219,
              224
            ],
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                221,
                224
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 14
                },
                "start": {
                  "column": 40,
                  "line": 14
                }
              }
            }
          },
          "range": [
            209,
            224
          ],
          "loc": {
            "end": {
              "column": 43,
              "line": 14
            },
            "start": {
              "column": 28,
              "line": 14
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "msec",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 58,
                "line": 14
              },
              "start": {
                "column": 50,
                "line": 14
              }
            },
            "range": [
              231,
              239
            ],
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "range": [
                233,
                239
              ],
              "loc": {
                "end": {
                  "column": 58,
                  "line": 14
                },
                "start": {
                  "column": 52,
                  "line": 14
                }
              }
            }
          },
          "range": [
            226,
            239
          ],
          "loc": {
            "end": {
              "column": 58,
              "line": 14
            },
            "start": {
              "column": 45,
              "line": 14
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "language",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 74,
                "line": 14
              },
              "start": {
                "column": 69,
                "line": 14
              }
            },
            "range": [
              250,
              255
            ],
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                252,
                255
              ],
              "loc": {
                "end": {
                  "column": 74,
                  "line": 14
                },
                "start": {
                  "column": 71,
                  "line": 14
                }
              }
            }
          },
          "range": [
            241,
            255
          ],
          "loc": {
            "end": {
              "column": 74,
              "line": 14
            },
            "start": {
              "column": 60,
              "line": 14
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 83,
            "line": 14
          },
          "start": {
            "column": 75,
            "line": 14
          }
        },
        "range": [
          256,
          264
        ],
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "range": [
            258,
            264
          ],
          "loc": {
            "end": {
              "column": 83,
              "line": 14
            },
            "start": {
              "column": 77,
              "line": 14
            }
          }
        }
      },
      "range": [
        181,
        265
      ],
      "loc": {
        "end": {
          "column": 84,
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
            "name": "messenger",
            "optional": false,
            "range": [
              270,
              279
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 15
              },
              "start": {
                "column": 4,
                "line": 15
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
                  "name": "message",
                  "optional": false,
                  "range": [
                    288,
                    295
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 16
                    },
                    "start": {
                      "column": 4,
                      "line": 16
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "\"Hello World\"",
                  "value": "Hello World",
                  "range": [
                    297,
                    310
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 16
                    },
                    "start": {
                      "column": 13,
                      "line": 16
                    }
                  }
                },
                "range": [
                  288,
                  310
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 16
                  },
                  "start": {
                    "column": 4,
                    "line": 16
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "start",
                  "optional": false,
                  "range": [
                    316,
                    321
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 17
                    },
                    "start": {
                      "column": 4,
                      "line": 17
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "CallExpression",
                          "arguments": [
                            {
                              "type": "ArrowFunctionExpression",
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
                                          "range": [
                                            375,
                                            376
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 39,
                                              "line": 18
                                            },
                                            "start": {
                                              "column": 38,
                                              "line": 18
                                            }
                                          }
                                        },
                                        "init": {
                                          "type": "MemberExpression",
                                          "computed": false,
                                          "object": {
                                            "type": "ThisExpression",
                                            "range": [
                                              379,
                                              383
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 46,
                                                "line": 18
                                              },
                                              "start": {
                                                "column": 42,
                                                "line": 18
                                              }
                                            }
                                          },
                                          "optional": false,
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "message",
                                            "optional": false,
                                            "range": [
                                              384,
                                              391
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 54,
                                                "line": 18
                                              },
                                              "start": {
                                                "column": 47,
                                                "line": 18
                                              }
                                            }
                                          },
                                          "range": [
                                            379,
                                            391
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 54,
                                              "line": 18
                                            },
                                            "start": {
                                              "column": 42,
                                              "line": 18
                                            }
                                          }
                                        },
                                        "range": [
                                          375,
                                          391
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 54,
                                            "line": 18
                                          },
                                          "start": {
                                            "column": 38,
                                            "line": 18
                                          }
                                        }
                                      }
                                    ],
                                    "declare": false,
                                    "kind": "var",
                                    "range": [
                                      371,
                                      392
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 55,
                                        "line": 18
                                      },
                                      "start": {
                                        "column": 34,
                                        "line": 18
                                      }
                                    }
                                  }
                                ],
                                "range": [
                                  369,
                                  394
                                ],
                                "loc": {
                                  "end": {
                                    "column": 57,
                                    "line": 18
                                  },
                                  "start": {
                                    "column": 32,
                                    "line": 18
                                  }
                                }
                              },
                              "expression": false,
                              "generator": false,
                              "id": null,
                              "params": [],
                              "range": [
                                363,
                                394
                              ],
                              "loc": {
                                "end": {
                                  "column": 57,
                                  "line": 18
                                },
                                "start": {
                                  "column": 26,
                                  "line": 18
                                }
                              }
                            },
                            {
                              "type": "Literal",
                              "raw": "3000",
                              "value": 3000,
                              "range": [
                                396,
                                400
                              ],
                              "loc": {
                                "end": {
                                  "column": 63,
                                  "line": 18
                                },
                                "start": {
                                  "column": 59,
                                  "line": 18
                                }
                              }
                            }
                          ],
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "setTimeout",
                            "optional": false,
                            "range": [
                              352,
                              362
                            ],
                            "loc": {
                              "end": {
                                "column": 25,
                                "line": 18
                              },
                              "start": {
                                "column": 15,
                                "line": 18
                              }
                            }
                          },
                          "optional": false,
                          "range": [
                            352,
                            401
                          ],
                          "loc": {
                            "end": {
                              "column": 64,
                              "line": 18
                            },
                            "start": {
                              "column": 15,
                              "line": 18
                            }
                          }
                        },
                        "range": [
                          345,
                          402
                        ],
                        "loc": {
                          "end": {
                            "column": 65,
                            "line": 18
                          },
                          "start": {
                            "column": 8,
                            "line": 18
                          }
                        }
                      }
                    ],
                    "range": [
                      335,
                      408
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 19
                      },
                      "start": {
                        "column": 23,
                        "line": 17
                      }
                    }
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "range": [
                    323,
                    408
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 19
                    },
                    "start": {
                      "column": 11,
                      "line": 17
                    }
                  }
                },
                "range": [
                  316,
                  408
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 19
                  },
                  "start": {
                    "column": 4,
                    "line": 17
                  }
                }
              }
            ],
            "range": [
              282,
              410
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 20
              },
              "start": {
                "column": 16,
                "line": 15
              }
            }
          },
          "range": [
            270,
            410
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 20
            },
            "start": {
              "column": 4,
              "line": 15
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        266,
        411
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 20
        },
        "start": {
          "column": 0,
          "line": 15
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 21
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
