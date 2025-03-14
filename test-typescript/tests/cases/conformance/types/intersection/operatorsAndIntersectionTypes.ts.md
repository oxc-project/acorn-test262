__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    834
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Guid",
        "optional": false,
        "range": [
          5,
          9
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 1
          },
          "start": {
            "column": 5,
            "line": 1
          }
        }
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSStringKeyword",
            "range": [
              12,
              18
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 1
              },
              "start": {
                "column": 12,
                "line": 1
              }
            }
          },
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "$Guid",
                  "optional": false,
                  "range": [
                    23,
                    28
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 1
                    },
                    "start": {
                      "column": 23,
                      "line": 1
                    }
                  }
                },
                "optional": false,
                "readonly": false,
                "static": false,
                "range": [
                  23,
                  28
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 1
                  },
                  "start": {
                    "column": 23,
                    "line": 1
                  }
                }
              }
            ],
            "range": [
              21,
              30
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 1
              },
              "start": {
                "column": 21,
                "line": 1
              }
            }
          }
        ],
        "range": [
          12,
          30
        ],
        "loc": {
          "end": {
            "column": 30,
            "line": 1
          },
          "start": {
            "column": 12,
            "line": 1
          }
        }
      },
      "range": [
        0,
        31
      ],
      "loc": {
        "end": {
          "column": 31,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SerialNo",
        "optional": false,
        "range": [
          68,
          76
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 2
          },
          "start": {
            "column": 5,
            "line": 2
          }
        }
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSNumberKeyword",
            "range": [
              79,
              85
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
          },
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "$SerialNo",
                  "optional": false,
                  "range": [
                    90,
                    99
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 2
                    },
                    "start": {
                      "column": 27,
                      "line": 2
                    }
                  }
                },
                "optional": false,
                "readonly": false,
                "static": false,
                "range": [
                  90,
                  99
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 2
                  },
                  "start": {
                    "column": 27,
                    "line": 2
                  }
                }
              }
            ],
            "range": [
              88,
              101
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 2
              },
              "start": {
                "column": 25,
                "line": 2
              }
            }
          }
        ],
        "range": [
          79,
          101
        ],
        "loc": {
          "end": {
            "column": 38,
            "line": 2
          },
          "start": {
            "column": 16,
            "line": 2
          }
        }
      },
      "range": [
        63,
        102
      ],
      "loc": {
        "end": {
          "column": 39,
          "line": 2
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
            "type": "ReturnStatement",
            "argument": {
              "type": "TSAsExpression",
              "expression": {
                "type": "Literal",
                "raw": "\"21EC2020-3AEA-4069-A2DD-08002B30309D\"",
                "value": "21EC2020-3AEA-4069-A2DD-08002B30309D",
                "range": [
                  162,
                  200
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 5
                  },
                  "start": {
                    "column": 11,
                    "line": 5
                  }
                }
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Guid",
                  "optional": false,
                  "range": [
                    204,
                    208
                  ],
                  "loc": {
                    "end": {
                      "column": 57,
                      "line": 5
                    },
                    "start": {
                      "column": 53,
                      "line": 5
                    }
                  }
                },
                "range": [
                  204,
                  208
                ],
                "loc": {
                  "end": {
                    "column": 57,
                    "line": 5
                  },
                  "start": {
                    "column": 53,
                    "line": 5
                  }
                }
              },
              "range": [
                162,
                208
              ],
              "loc": {
                "end": {
                  "column": 57,
                  "line": 5
                },
                "start": {
                  "column": 11,
                  "line": 5
                }
              }
            },
            "range": [
              155,
              209
            ],
            "loc": {
              "end": {
                "column": 58,
                "line": 5
              },
              "start": {
                "column": 4,
                "line": 5
              }
            }
          }
        ],
        "range": [
          149,
          211
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 6
          },
          "start": {
            "column": 22,
            "line": 4
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "createGuid",
        "optional": false,
        "range": [
          136,
          146
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 4
          },
          "start": {
            "column": 9,
            "line": 4
          }
        }
      },
      "params": [],
      "range": [
        127,
        211
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 6
        },
        "start": {
          "column": 0,
          "line": 4
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
              "type": "TSAsExpression",
              "expression": {
                "type": "Literal",
                "raw": "12345",
                "value": 12345,
                "range": [
                  252,
                  257
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 9
                  },
                  "start": {
                    "column": 11,
                    "line": 9
                  }
                }
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "SerialNo",
                  "optional": false,
                  "range": [
                    261,
                    269
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 9
                    },
                    "start": {
                      "column": 20,
                      "line": 9
                    }
                  }
                },
                "range": [
                  261,
                  269
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 9
                  },
                  "start": {
                    "column": 20,
                    "line": 9
                  }
                }
              },
              "range": [
                252,
                269
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 9
                },
                "start": {
                  "column": 11,
                  "line": 9
                }
              }
            },
            "range": [
              245,
              270
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
          }
        ],
        "range": [
          239,
          272
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 10
          },
          "start": {
            "column": 26,
            "line": 8
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "createSerialNo",
        "optional": false,
        "range": [
          222,
          236
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 8
          },
          "start": {
            "column": 9,
            "line": 8
          }
        }
      },
      "params": [],
      "range": [
        213,
        272
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 10
        },
        "start": {
          "column": 0,
          "line": 8
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
            "name": "map1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 33,
                  "line": 12
                },
                "start": {
                  "column": 8,
                  "line": 12
                }
              },
              "range": [
                282,
                307
              ],
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 12
                            },
                            "start": {
                              "column": 14,
                              "line": 12
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
                                "column": 22,
                                "line": 12
                              },
                              "start": {
                                "column": 16,
                                "line": 12
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
                            "column": 22,
                            "line": 12
                          },
                          "start": {
                            "column": 13,
                            "line": 12
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 12
                        },
                        "start": {
                          "column": 23,
                          "line": 12
                        }
                      },
                      "range": [
                        297,
                        305
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          299,
                          305
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 12
                          },
                          "start": {
                            "column": 25,
                            "line": 12
                          }
                        }
                      }
                    },
                    "range": [
                      286,
                      305
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 12
                      },
                      "start": {
                        "column": 12,
                        "line": 12
                      }
                    }
                  }
                ],
                "range": [
                  284,
                  307
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 12
                  },
                  "start": {
                    "column": 10,
                    "line": 12
                  }
                }
              }
            },
            "range": [
              278,
              307
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 12
              },
              "start": {
                "column": 4,
                "line": 12
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "range": [
              310,
              312
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 12
              },
              "start": {
                "column": 36,
                "line": 12
              }
            }
          },
          "range": [
            278,
            312
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 12
            },
            "start": {
              "column": 4,
              "line": 12
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        274,
        313
      ],
      "loc": {
        "end": {
          "column": 39,
          "line": 12
        },
        "start": {
          "column": 0,
          "line": 12
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
            "name": "guid",
            "optional": false,
            "range": [
              318,
              322
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 13
              },
              "start": {
                "column": 4,
                "line": 13
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "createGuid",
              "optional": false,
              "range": [
                325,
                335
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 13
                },
                "start": {
                  "column": 11,
                  "line": 13
                }
              }
            },
            "optional": false,
            "range": [
              325,
              337
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 13
              },
              "start": {
                "column": 11,
                "line": 13
              }
            }
          },
          "range": [
            318,
            337
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 13
            },
            "start": {
              "column": 4,
              "line": 13
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        314,
        338
      ],
      "loc": {
        "end": {
          "column": 24,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 13
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
          "computed": true,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "map1",
            "optional": false,
            "range": [
              339,
              343
            ],
            "loc": {
              "end": {
                "column": 4,
                "line": 14
              },
              "start": {
                "column": 0,
                "line": 14
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "guid",
            "optional": false,
            "range": [
              344,
              348
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 14
              },
              "start": {
                "column": 5,
                "line": 14
              }
            }
          },
          "range": [
            339,
            349
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 14
            },
            "start": {
              "column": 0,
              "line": 14
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "123",
          "value": 123,
          "range": [
            352,
            355
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 14
            },
            "start": {
              "column": 13,
              "line": 14
            }
          }
        },
        "range": [
          339,
          355
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 14
          },
          "start": {
            "column": 0,
            "line": 14
          }
        }
      },
      "range": [
        339,
        356
      ],
      "loc": {
        "end": {
          "column": 17,
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
            "name": "map2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 33,
                  "line": 16
                },
                "start": {
                  "column": 8,
                  "line": 16
                }
              },
              "range": [
                393,
                418
              ],
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 16
                            },
                            "start": {
                              "column": 14,
                              "line": 16
                            }
                          },
                          "range": [
                            399,
                            407
                          ],
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "range": [
                              401,
                              407
                            ],
                            "loc": {
                              "end": {
                                "column": 22,
                                "line": 16
                              },
                              "start": {
                                "column": 16,
                                "line": 16
                              }
                            }
                          }
                        },
                        "range": [
                          398,
                          407
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 16
                          },
                          "start": {
                            "column": 13,
                            "line": 16
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 16
                        },
                        "start": {
                          "column": 23,
                          "line": 16
                        }
                      },
                      "range": [
                        408,
                        416
                      ],
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "range": [
                          410,
                          416
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 16
                          },
                          "start": {
                            "column": 25,
                            "line": 16
                          }
                        }
                      }
                    },
                    "range": [
                      397,
                      416
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 16
                      },
                      "start": {
                        "column": 12,
                        "line": 16
                      }
                    }
                  }
                ],
                "range": [
                  395,
                  418
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 16
                  },
                  "start": {
                    "column": 10,
                    "line": 16
                  }
                }
              }
            },
            "range": [
              389,
              418
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 16
              },
              "start": {
                "column": 4,
                "line": 16
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "range": [
              421,
              423
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 16
              },
              "start": {
                "column": 36,
                "line": 16
              }
            }
          },
          "range": [
            389,
            423
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 16
            },
            "start": {
              "column": 4,
              "line": 16
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        385,
        424
      ],
      "loc": {
        "end": {
          "column": 39,
          "line": 16
        },
        "start": {
          "column": 0,
          "line": 16
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
            "name": "serialNo",
            "optional": false,
            "range": [
              429,
              437
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 17
              },
              "start": {
                "column": 4,
                "line": 17
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "createSerialNo",
              "optional": false,
              "range": [
                440,
                454
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 17
                },
                "start": {
                  "column": 15,
                  "line": 17
                }
              }
            },
            "optional": false,
            "range": [
              440,
              456
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 17
              },
              "start": {
                "column": 15,
                "line": 17
              }
            }
          },
          "range": [
            429,
            456
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 17
            },
            "start": {
              "column": 4,
              "line": 17
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        425,
        457
      ],
      "loc": {
        "end": {
          "column": 32,
          "line": 17
        },
        "start": {
          "column": 0,
          "line": 17
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
          "computed": true,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "map2",
            "optional": false,
            "range": [
              458,
              462
            ],
            "loc": {
              "end": {
                "column": 4,
                "line": 18
              },
              "start": {
                "column": 0,
                "line": 18
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "serialNo",
            "optional": false,
            "range": [
              463,
              471
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 18
              },
              "start": {
                "column": 5,
                "line": 18
              }
            }
          },
          "range": [
            458,
            472
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 18
            },
            "start": {
              "column": 0,
              "line": 18
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "\"hello\"",
          "value": "hello",
          "range": [
            475,
            482
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 18
            },
            "start": {
              "column": 17,
              "line": 18
            }
          }
        },
        "range": [
          458,
          482
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 18
          },
          "start": {
            "column": 0,
            "line": 18
          }
        }
      },
      "range": [
        458,
        483
      ],
      "loc": {
        "end": {
          "column": 25,
          "line": 18
        },
        "start": {
          "column": 0,
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
            "name": "s1",
            "optional": false,
            "range": [
              524,
              526
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 20
              },
              "start": {
                "column": 6,
                "line": 20
              }
            }
          },
          "init": {
            "type": "BinaryExpression",
            "operator": "+",
            "left": {
              "type": "BinaryExpression",
              "operator": "+",
              "left": {
                "type": "Literal",
                "raw": "\"{\"",
                "value": "{",
                "range": [
                  529,
                  532
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 20
                  },
                  "start": {
                    "column": 11,
                    "line": 20
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "guid",
                "optional": false,
                "range": [
                  535,
                  539
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 20
                  },
                  "start": {
                    "column": 17,
                    "line": 20
                  }
                }
              },
              "range": [
                529,
                539
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 20
                },
                "start": {
                  "column": 11,
                  "line": 20
                }
              }
            },
            "right": {
              "type": "Literal",
              "raw": "\"}\"",
              "value": "}",
              "range": [
                542,
                545
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 20
                },
                "start": {
                  "column": 24,
                  "line": 20
                }
              }
            },
            "range": [
              529,
              545
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 20
              },
              "start": {
                "column": 11,
                "line": 20
              }
            }
          },
          "range": [
            524,
            545
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 20
            },
            "start": {
              "column": 6,
              "line": 20
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        518,
        546
      ],
      "loc": {
        "end": {
          "column": 28,
          "line": 20
        },
        "start": {
          "column": 0,
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
            "name": "s2",
            "optional": false,
            "range": [
              553,
              555
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 21
              },
              "start": {
                "column": 6,
                "line": 21
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "guid",
                "optional": false,
                "range": [
                  558,
                  562
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 21
                  },
                  "start": {
                    "column": 11,
                    "line": 21
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
                  563,
                  574
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 21
                  },
                  "start": {
                    "column": 16,
                    "line": 21
                  }
                }
              },
              "range": [
                558,
                574
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 21
                },
                "start": {
                  "column": 11,
                  "line": 21
                }
              }
            },
            "optional": false,
            "range": [
              558,
              576
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 21
              },
              "start": {
                "column": 11,
                "line": 21
              }
            }
          },
          "range": [
            553,
            576
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 21
            },
            "start": {
              "column": 6,
              "line": 21
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        547,
        577
      ],
      "loc": {
        "end": {
          "column": 30,
          "line": 21
        },
        "start": {
          "column": 0,
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
            "name": "s3",
            "optional": false,
            "range": [
              584,
              586
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 22
              },
              "start": {
                "column": 6,
                "line": 22
              }
            }
          },
          "init": {
            "type": "BinaryExpression",
            "operator": "+",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "guid",
              "optional": false,
              "range": [
                589,
                593
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 22
                },
                "start": {
                  "column": 11,
                  "line": 22
                }
              }
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "guid",
              "optional": false,
              "range": [
                596,
                600
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 22
                },
                "start": {
                  "column": 18,
                  "line": 22
                }
              }
            },
            "range": [
              589,
              600
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 22
              },
              "start": {
                "column": 11,
                "line": 22
              }
            }
          },
          "range": [
            584,
            600
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 22
            },
            "start": {
              "column": 6,
              "line": 22
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        578,
        601
      ],
      "loc": {
        "end": {
          "column": 23,
          "line": 22
        },
        "start": {
          "column": 0,
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
            "name": "s4",
            "optional": false,
            "range": [
              608,
              610
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 23
              },
              "start": {
                "column": 6,
                "line": 23
              }
            }
          },
          "init": {
            "type": "BinaryExpression",
            "operator": "+",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "guid",
              "optional": false,
              "range": [
                613,
                617
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 23
                },
                "start": {
                  "column": 11,
                  "line": 23
                }
              }
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "serialNo",
              "optional": false,
              "range": [
                620,
                628
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 23
                },
                "start": {
                  "column": 18,
                  "line": 23
                }
              }
            },
            "range": [
              613,
              628
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 23
              },
              "start": {
                "column": 11,
                "line": 23
              }
            }
          },
          "range": [
            608,
            628
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 23
            },
            "start": {
              "column": 6,
              "line": 23
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        602,
        629
      ],
      "loc": {
        "end": {
          "column": 27,
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
            "name": "s5",
            "optional": false,
            "range": [
              636,
              638
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 24
              },
              "start": {
                "column": 6,
                "line": 24
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "0",
                "value": 0,
                "range": [
                  662,
                  663
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 24
                  },
                  "start": {
                    "column": 32,
                    "line": 24
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
                "name": "serialNo",
                "optional": false,
                "range": [
                  641,
                  649
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 24
                  },
                  "start": {
                    "column": 11,
                    "line": 24
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "toPrecision",
                "optional": false,
                "range": [
                  650,
                  661
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 24
                  },
                  "start": {
                    "column": 20,
                    "line": 24
                  }
                }
              },
              "range": [
                641,
                661
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 24
                },
                "start": {
                  "column": 11,
                  "line": 24
                }
              }
            },
            "optional": false,
            "range": [
              641,
              664
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 24
              },
              "start": {
                "column": 11,
                "line": 24
              }
            }
          },
          "range": [
            636,
            664
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 24
            },
            "start": {
              "column": 6,
              "line": 24
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        630,
        665
      ],
      "loc": {
        "end": {
          "column": 35,
          "line": 24
        },
        "start": {
          "column": 0,
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
            "name": "n1",
            "optional": false,
            "range": [
              672,
              674
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 25
              },
              "start": {
                "column": 6,
                "line": 25
              }
            }
          },
          "init": {
            "type": "BinaryExpression",
            "operator": "*",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "serialNo",
              "optional": false,
              "range": [
                677,
                685
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 25
                },
                "start": {
                  "column": 11,
                  "line": 25
                }
              }
            },
            "right": {
              "type": "Literal",
              "raw": "3",
              "value": 3,
              "range": [
                688,
                689
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 25
                },
                "start": {
                  "column": 22,
                  "line": 25
                }
              }
            },
            "range": [
              677,
              689
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 25
              },
              "start": {
                "column": 11,
                "line": 25
              }
            }
          },
          "range": [
            672,
            689
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 25
            },
            "start": {
              "column": 6,
              "line": 25
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        666,
        690
      ],
      "loc": {
        "end": {
          "column": 24,
          "line": 25
        },
        "start": {
          "column": 0,
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
            "name": "n2",
            "optional": false,
            "range": [
              697,
              699
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 26
              },
              "start": {
                "column": 6,
                "line": 26
              }
            }
          },
          "init": {
            "type": "BinaryExpression",
            "operator": "+",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "serialNo",
              "optional": false,
              "range": [
                702,
                710
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 26
                },
                "start": {
                  "column": 11,
                  "line": 26
                }
              }
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "serialNo",
              "optional": false,
              "range": [
                713,
                721
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 26
                },
                "start": {
                  "column": 22,
                  "line": 26
                }
              }
            },
            "range": [
              702,
              721
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 26
              },
              "start": {
                "column": 11,
                "line": 26
              }
            }
          },
          "range": [
            697,
            721
          ],
          "loc": {
            "end": {
              "column": 30,
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
        691,
        722
      ],
      "loc": {
        "end": {
          "column": 31,
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
            "name": "b1",
            "optional": false,
            "range": [
              729,
              731
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 27
              },
              "start": {
                "column": 6,
                "line": 27
              }
            }
          },
          "init": {
            "type": "BinaryExpression",
            "operator": "===",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "guid",
              "optional": false,
              "range": [
                734,
                738
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 27
                },
                "start": {
                  "column": 11,
                  "line": 27
                }
              }
            },
            "right": {
              "type": "Literal",
              "raw": "\"\"",
              "value": "",
              "range": [
                743,
                745
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 27
                },
                "start": {
                  "column": 20,
                  "line": 27
                }
              }
            },
            "range": [
              734,
              745
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 27
              },
              "start": {
                "column": 11,
                "line": 27
              }
            }
          },
          "range": [
            729,
            745
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 27
            },
            "start": {
              "column": 6,
              "line": 27
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        723,
        746
      ],
      "loc": {
        "end": {
          "column": 23,
          "line": 27
        },
        "start": {
          "column": 0,
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
            "name": "b2",
            "optional": false,
            "range": [
              753,
              755
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 28
              },
              "start": {
                "column": 6,
                "line": 28
              }
            }
          },
          "init": {
            "type": "BinaryExpression",
            "operator": "===",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "guid",
              "optional": false,
              "range": [
                758,
                762
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 28
                },
                "start": {
                  "column": 11,
                  "line": 28
                }
              }
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "guid",
              "optional": false,
              "range": [
                767,
                771
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 28
                },
                "start": {
                  "column": 20,
                  "line": 28
                }
              }
            },
            "range": [
              758,
              771
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 28
              },
              "start": {
                "column": 11,
                "line": 28
              }
            }
          },
          "range": [
            753,
            771
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 28
            },
            "start": {
              "column": 6,
              "line": 28
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        747,
        772
      ],
      "loc": {
        "end": {
          "column": 25,
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
            "name": "b3",
            "optional": false,
            "range": [
              779,
              781
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 29
              },
              "start": {
                "column": 6,
                "line": 29
              }
            }
          },
          "init": {
            "type": "BinaryExpression",
            "operator": "===",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "serialNo",
              "optional": false,
              "range": [
                784,
                792
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 29
                },
                "start": {
                  "column": 11,
                  "line": 29
                }
              }
            },
            "right": {
              "type": "Literal",
              "raw": "0",
              "value": 0,
              "range": [
                797,
                798
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 29
                },
                "start": {
                  "column": 24,
                  "line": 29
                }
              }
            },
            "range": [
              784,
              798
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 29
              },
              "start": {
                "column": 11,
                "line": 29
              }
            }
          },
          "range": [
            779,
            798
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 29
            },
            "start": {
              "column": 6,
              "line": 29
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        773,
        799
      ],
      "loc": {
        "end": {
          "column": 26,
          "line": 29
        },
        "start": {
          "column": 0,
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
            "name": "b4",
            "optional": false,
            "range": [
              806,
              808
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 30
              },
              "start": {
                "column": 6,
                "line": 30
              }
            }
          },
          "init": {
            "type": "BinaryExpression",
            "operator": "===",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "serialNo",
              "optional": false,
              "range": [
                811,
                819
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 30
                },
                "start": {
                  "column": 11,
                  "line": 30
                }
              }
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "serialNo",
              "optional": false,
              "range": [
                824,
                832
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 30
                },
                "start": {
                  "column": 24,
                  "line": 30
                }
              }
            },
            "range": [
              811,
              832
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 30
              },
              "start": {
                "column": 11,
                "line": 30
              }
            }
          },
          "range": [
            806,
            832
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 30
            },
            "start": {
              "column": 6,
              "line": 30
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        800,
        833
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
      "line": 1
    }
  },
  "hashbang": null
}
```
