__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    1,
    1236
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
            "name": "numOrDate",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 29,
                  "line": 1
                },
                "start": {
                  "column": 14,
                  "line": 1
                }
              },
              "range": [
                14,
                29
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "range": [
                      16,
                      22
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 1
                      },
                      "start": {
                        "column": 16,
                        "line": 1
                      }
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Date",
                      "optional": false,
                      "range": [
                        25,
                        29
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 1
                        },
                        "start": {
                          "column": 25,
                          "line": 1
                        }
                      }
                    },
                    "range": [
                      25,
                      29
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 1
                      },
                      "start": {
                        "column": 25,
                        "line": 1
                      }
                    }
                  }
                ],
                "range": [
                  16,
                  29
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 1
                  },
                  "start": {
                    "column": 16,
                    "line": 1
                  }
                }
              }
            },
            "range": [
              5,
              29
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 1
              },
              "start": {
                "column": 5,
                "line": 1
              }
            }
          },
          "init": null,
          "range": [
            5,
            29
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 1
            },
            "start": {
              "column": 5,
              "line": 1
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        1,
        30
      ],
      "loc": {
        "end": {
          "column": 30,
          "line": 1
        },
        "start": {
          "column": 1,
          "line": 1
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
            "name": "anyVar",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 18,
                  "line": 2
                },
                "start": {
                  "column": 10,
                  "line": 2
                }
              },
              "range": [
                41,
                49
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  43,
                  49
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 2
                  },
                  "start": {
                    "column": 12,
                    "line": 2
                  }
                }
              }
            },
            "range": [
              35,
              49
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 2
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          },
          "init": null,
          "range": [
            35,
            49
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 2
            },
            "start": {
              "column": 4,
              "line": 2
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        31,
        50
      ],
      "loc": {
        "end": {
          "column": 19,
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
            "name": "unionOfDifferentReturnType",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 81,
                  "line": 7
                },
                "start": {
                  "column": 30,
                  "line": 7
                }
              },
              "range": [
                250,
                301
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSIndexSignature",
                        "parameters": [
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
                                  "line": 7
                                },
                                "start": {
                                  "column": 36,
                                  "line": 7
                                }
                              },
                              "range": [
                                256,
                                264
                              ],
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "range": [
                                  258,
                                  264
                                ],
                                "loc": {
                                  "end": {
                                    "column": 44,
                                    "line": 7
                                  },
                                  "start": {
                                    "column": 38,
                                    "line": 7
                                  }
                                }
                              }
                            },
                            "range": [
                              255,
                              264
                            ],
                            "loc": {
                              "end": {
                                "column": 44,
                                "line": 7
                              },
                              "start": {
                                "column": 35,
                                "line": 7
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
                              "column": 53,
                              "line": 7
                            },
                            "start": {
                              "column": 45,
                              "line": 7
                            }
                          },
                          "range": [
                            265,
                            273
                          ],
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "range": [
                              267,
                              273
                            ],
                            "loc": {
                              "end": {
                                "column": 53,
                                "line": 7
                              },
                              "start": {
                                "column": 47,
                                "line": 7
                              }
                            }
                          }
                        },
                        "range": [
                          254,
                          274
                        ],
                        "loc": {
                          "end": {
                            "column": 54,
                            "line": 7
                          },
                          "start": {
                            "column": 34,
                            "line": 7
                          }
                        }
                      }
                    ],
                    "range": [
                      252,
                      276
                    ],
                    "loc": {
                      "end": {
                        "column": 56,
                        "line": 7
                      },
                      "start": {
                        "column": 32,
                        "line": 7
                      }
                    }
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSIndexSignature",
                        "parameters": [
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
                                  "line": 7
                                },
                                "start": {
                                  "column": 63,
                                  "line": 7
                                }
                              },
                              "range": [
                                283,
                                291
                              ],
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "range": [
                                  285,
                                  291
                                ],
                                "loc": {
                                  "end": {
                                    "column": 71,
                                    "line": 7
                                  },
                                  "start": {
                                    "column": 65,
                                    "line": 7
                                  }
                                }
                              }
                            },
                            "range": [
                              282,
                              291
                            ],
                            "loc": {
                              "end": {
                                "column": 71,
                                "line": 7
                              },
                              "start": {
                                "column": 62,
                                "line": 7
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
                              "column": 78,
                              "line": 7
                            },
                            "start": {
                              "column": 72,
                              "line": 7
                            }
                          },
                          "range": [
                            292,
                            298
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Date",
                              "optional": false,
                              "range": [
                                294,
                                298
                              ],
                              "loc": {
                                "end": {
                                  "column": 78,
                                  "line": 7
                                },
                                "start": {
                                  "column": 74,
                                  "line": 7
                                }
                              }
                            },
                            "range": [
                              294,
                              298
                            ],
                            "loc": {
                              "end": {
                                "column": 78,
                                "line": 7
                              },
                              "start": {
                                "column": 74,
                                "line": 7
                              }
                            }
                          }
                        },
                        "range": [
                          281,
                          299
                        ],
                        "loc": {
                          "end": {
                            "column": 79,
                            "line": 7
                          },
                          "start": {
                            "column": 61,
                            "line": 7
                          }
                        }
                      }
                    ],
                    "range": [
                      279,
                      301
                    ],
                    "loc": {
                      "end": {
                        "column": 81,
                        "line": 7
                      },
                      "start": {
                        "column": 59,
                        "line": 7
                      }
                    }
                  }
                ],
                "range": [
                  252,
                  301
                ],
                "loc": {
                  "end": {
                    "column": 81,
                    "line": 7
                  },
                  "start": {
                    "column": 32,
                    "line": 7
                  }
                }
              }
            },
            "range": [
              224,
              301
            ],
            "loc": {
              "end": {
                "column": 81,
                "line": 7
              },
              "start": {
                "column": 4,
                "line": 7
              }
            }
          },
          "init": null,
          "range": [
            224,
            301
          ],
          "loc": {
            "end": {
              "column": 81,
              "line": 7
            },
            "start": {
              "column": 4,
              "line": 7
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        220,
        302
      ],
      "loc": {
        "end": {
          "column": 82,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 7
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "numOrDate",
          "optional": false,
          "range": [
            303,
            312
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 8
            },
            "start": {
              "column": 0,
              "line": 8
            }
          }
        },
        "right": {
          "type": "MemberExpression",
          "computed": true,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionOfDifferentReturnType",
            "optional": false,
            "range": [
              315,
              341
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 8
              },
              "start": {
                "column": 12,
                "line": 8
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "raw": "\"hello\"",
            "value": "hello",
            "range": [
              342,
              349
            ],
            "loc": {
              "end": {
                "column": 46,
                "line": 8
              },
              "start": {
                "column": 39,
                "line": 8
              }
            }
          },
          "range": [
            315,
            350
          ],
          "loc": {
            "end": {
              "column": 47,
              "line": 8
            },
            "start": {
              "column": 12,
              "line": 8
            }
          }
        },
        "range": [
          303,
          350
        ],
        "loc": {
          "end": {
            "column": 47,
            "line": 8
          },
          "start": {
            "column": 0,
            "line": 8
          }
        }
      },
      "range": [
        303,
        351
      ],
      "loc": {
        "end": {
          "column": 48,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 8
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "numOrDate",
          "optional": false,
          "range": [
            369,
            378
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 9
            },
            "start": {
              "column": 0,
              "line": 9
            }
          }
        },
        "right": {
          "type": "MemberExpression",
          "computed": true,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionOfDifferentReturnType",
            "optional": false,
            "range": [
              381,
              407
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 9
              },
              "start": {
                "column": 12,
                "line": 9
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "raw": "10",
            "value": 10,
            "range": [
              408,
              410
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 9
              },
              "start": {
                "column": 39,
                "line": 9
              }
            }
          },
          "range": [
            381,
            411
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 9
            },
            "start": {
              "column": 12,
              "line": 9
            }
          }
        },
        "range": [
          369,
          411
        ],
        "loc": {
          "end": {
            "column": 42,
            "line": 9
          },
          "start": {
            "column": 0,
            "line": 9
          }
        }
      },
      "range": [
        369,
        412
      ],
      "loc": {
        "end": {
          "column": 43,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 9
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
            "name": "unionOfTypesWithAndWithoutStringSignature",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 81,
                  "line": 11
                },
                "start": {
                  "column": 45,
                  "line": 11
                }
              },
              "range": [
                476,
                512
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSIndexSignature",
                        "parameters": [
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
                                  "line": 11
                                },
                                "start": {
                                  "column": 51,
                                  "line": 11
                                }
                              },
                              "range": [
                                482,
                                490
                              ],
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "range": [
                                  484,
                                  490
                                ],
                                "loc": {
                                  "end": {
                                    "column": 59,
                                    "line": 11
                                  },
                                  "start": {
                                    "column": 53,
                                    "line": 11
                                  }
                                }
                              }
                            },
                            "range": [
                              481,
                              490
                            ],
                            "loc": {
                              "end": {
                                "column": 59,
                                "line": 11
                              },
                              "start": {
                                "column": 50,
                                "line": 11
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
                              "column": 68,
                              "line": 11
                            },
                            "start": {
                              "column": 60,
                              "line": 11
                            }
                          },
                          "range": [
                            491,
                            499
                          ],
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "range": [
                              493,
                              499
                            ],
                            "loc": {
                              "end": {
                                "column": 68,
                                "line": 11
                              },
                              "start": {
                                "column": 62,
                                "line": 11
                              }
                            }
                          }
                        },
                        "range": [
                          480,
                          500
                        ],
                        "loc": {
                          "end": {
                            "column": 69,
                            "line": 11
                          },
                          "start": {
                            "column": 49,
                            "line": 11
                          }
                        }
                      }
                    ],
                    "range": [
                      478,
                      502
                    ],
                    "loc": {
                      "end": {
                        "column": 71,
                        "line": 11
                      },
                      "start": {
                        "column": 47,
                        "line": 11
                      }
                    }
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "range": [
                      505,
                      512
                    ],
                    "loc": {
                      "end": {
                        "column": 81,
                        "line": 11
                      },
                      "start": {
                        "column": 74,
                        "line": 11
                      }
                    }
                  }
                ],
                "range": [
                  478,
                  512
                ],
                "loc": {
                  "end": {
                    "column": 81,
                    "line": 11
                  },
                  "start": {
                    "column": 47,
                    "line": 11
                  }
                }
              }
            },
            "range": [
              435,
              512
            ],
            "loc": {
              "end": {
                "column": 81,
                "line": 11
              },
              "start": {
                "column": 4,
                "line": 11
              }
            }
          },
          "init": null,
          "range": [
            435,
            512
          ],
          "loc": {
            "end": {
              "column": 81,
              "line": 11
            },
            "start": {
              "column": 4,
              "line": 11
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        431,
        513
      ],
      "loc": {
        "end": {
          "column": 82,
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
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "anyVar",
          "optional": false,
          "range": [
            514,
            520
          ],
          "loc": {
            "end": {
              "column": 6,
              "line": 12
            },
            "start": {
              "column": 0,
              "line": 12
            }
          }
        },
        "right": {
          "type": "MemberExpression",
          "computed": true,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionOfTypesWithAndWithoutStringSignature",
            "optional": false,
            "range": [
              523,
              564
            ],
            "loc": {
              "end": {
                "column": 50,
                "line": 12
              },
              "start": {
                "column": 9,
                "line": 12
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "raw": "\"hello\"",
            "value": "hello",
            "range": [
              565,
              572
            ],
            "loc": {
              "end": {
                "column": 58,
                "line": 12
              },
              "start": {
                "column": 51,
                "line": 12
              }
            }
          },
          "range": [
            523,
            573
          ],
          "loc": {
            "end": {
              "column": 59,
              "line": 12
            },
            "start": {
              "column": 9,
              "line": 12
            }
          }
        },
        "range": [
          514,
          573
        ],
        "loc": {
          "end": {
            "column": 59,
            "line": 12
          },
          "start": {
            "column": 0,
            "line": 12
          }
        }
      },
      "range": [
        514,
        574
      ],
      "loc": {
        "end": {
          "column": 60,
          "line": 12
        },
        "start": {
          "column": 0,
          "line": 12
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "anyVar",
          "optional": false,
          "range": [
            582,
            588
          ],
          "loc": {
            "end": {
              "column": 6,
              "line": 13
            },
            "start": {
              "column": 0,
              "line": 13
            }
          }
        },
        "right": {
          "type": "MemberExpression",
          "computed": true,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionOfTypesWithAndWithoutStringSignature",
            "optional": false,
            "range": [
              591,
              632
            ],
            "loc": {
              "end": {
                "column": 50,
                "line": 13
              },
              "start": {
                "column": 9,
                "line": 13
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "raw": "10",
            "value": 10,
            "range": [
              633,
              635
            ],
            "loc": {
              "end": {
                "column": 53,
                "line": 13
              },
              "start": {
                "column": 51,
                "line": 13
              }
            }
          },
          "range": [
            591,
            636
          ],
          "loc": {
            "end": {
              "column": 54,
              "line": 13
            },
            "start": {
              "column": 9,
              "line": 13
            }
          }
        },
        "range": [
          582,
          636
        ],
        "loc": {
          "end": {
            "column": 54,
            "line": 13
          },
          "start": {
            "column": 0,
            "line": 13
          }
        }
      },
      "range": [
        582,
        637
      ],
      "loc": {
        "end": {
          "column": 55,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 13
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
            "name": "unionOfDifferentReturnType1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 82,
                  "line": 17
                },
                "start": {
                  "column": 31,
                  "line": 17
                }
              },
              "range": [
                847,
                898
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSIndexSignature",
                        "parameters": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "loc": {
                                "end": {
                                  "column": 45,
                                  "line": 17
                                },
                                "start": {
                                  "column": 37,
                                  "line": 17
                                }
                              },
                              "range": [
                                853,
                                861
                              ],
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "range": [
                                  855,
                                  861
                                ],
                                "loc": {
                                  "end": {
                                    "column": 45,
                                    "line": 17
                                  },
                                  "start": {
                                    "column": 39,
                                    "line": 17
                                  }
                                }
                              }
                            },
                            "range": [
                              852,
                              861
                            ],
                            "loc": {
                              "end": {
                                "column": 45,
                                "line": 17
                              },
                              "start": {
                                "column": 36,
                                "line": 17
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
                              "column": 54,
                              "line": 17
                            },
                            "start": {
                              "column": 46,
                              "line": 17
                            }
                          },
                          "range": [
                            862,
                            870
                          ],
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "range": [
                              864,
                              870
                            ],
                            "loc": {
                              "end": {
                                "column": 54,
                                "line": 17
                              },
                              "start": {
                                "column": 48,
                                "line": 17
                              }
                            }
                          }
                        },
                        "range": [
                          851,
                          871
                        ],
                        "loc": {
                          "end": {
                            "column": 55,
                            "line": 17
                          },
                          "start": {
                            "column": 35,
                            "line": 17
                          }
                        }
                      }
                    ],
                    "range": [
                      849,
                      873
                    ],
                    "loc": {
                      "end": {
                        "column": 57,
                        "line": 17
                      },
                      "start": {
                        "column": 33,
                        "line": 17
                      }
                    }
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSIndexSignature",
                        "parameters": [
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
                                  "line": 17
                                },
                                "start": {
                                  "column": 64,
                                  "line": 17
                                }
                              },
                              "range": [
                                880,
                                888
                              ],
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "range": [
                                  882,
                                  888
                                ],
                                "loc": {
                                  "end": {
                                    "column": 72,
                                    "line": 17
                                  },
                                  "start": {
                                    "column": 66,
                                    "line": 17
                                  }
                                }
                              }
                            },
                            "range": [
                              879,
                              888
                            ],
                            "loc": {
                              "end": {
                                "column": 72,
                                "line": 17
                              },
                              "start": {
                                "column": 63,
                                "line": 17
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
                              "column": 79,
                              "line": 17
                            },
                            "start": {
                              "column": 73,
                              "line": 17
                            }
                          },
                          "range": [
                            889,
                            895
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Date",
                              "optional": false,
                              "range": [
                                891,
                                895
                              ],
                              "loc": {
                                "end": {
                                  "column": 79,
                                  "line": 17
                                },
                                "start": {
                                  "column": 75,
                                  "line": 17
                                }
                              }
                            },
                            "range": [
                              891,
                              895
                            ],
                            "loc": {
                              "end": {
                                "column": 79,
                                "line": 17
                              },
                              "start": {
                                "column": 75,
                                "line": 17
                              }
                            }
                          }
                        },
                        "range": [
                          878,
                          896
                        ],
                        "loc": {
                          "end": {
                            "column": 80,
                            "line": 17
                          },
                          "start": {
                            "column": 62,
                            "line": 17
                          }
                        }
                      }
                    ],
                    "range": [
                      876,
                      898
                    ],
                    "loc": {
                      "end": {
                        "column": 82,
                        "line": 17
                      },
                      "start": {
                        "column": 60,
                        "line": 17
                      }
                    }
                  }
                ],
                "range": [
                  849,
                  898
                ],
                "loc": {
                  "end": {
                    "column": 82,
                    "line": 17
                  },
                  "start": {
                    "column": 33,
                    "line": 17
                  }
                }
              }
            },
            "range": [
              820,
              898
            ],
            "loc": {
              "end": {
                "column": 82,
                "line": 17
              },
              "start": {
                "column": 4,
                "line": 17
              }
            }
          },
          "init": null,
          "range": [
            820,
            898
          ],
          "loc": {
            "end": {
              "column": 82,
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
      "kind": "var",
      "range": [
        816,
        899
      ],
      "loc": {
        "end": {
          "column": 83,
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
          "type": "Identifier",
          "decorators": [],
          "name": "numOrDate",
          "optional": false,
          "range": [
            900,
            909
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 18
            },
            "start": {
              "column": 0,
              "line": 18
            }
          }
        },
        "right": {
          "type": "MemberExpression",
          "computed": true,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionOfDifferentReturnType1",
            "optional": false,
            "range": [
              912,
              939
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 18
              },
              "start": {
                "column": 12,
                "line": 18
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "raw": "\"hello\"",
            "value": "hello",
            "range": [
              940,
              947
            ],
            "loc": {
              "end": {
                "column": 47,
                "line": 18
              },
              "start": {
                "column": 40,
                "line": 18
              }
            }
          },
          "range": [
            912,
            948
          ],
          "loc": {
            "end": {
              "column": 48,
              "line": 18
            },
            "start": {
              "column": 12,
              "line": 18
            }
          }
        },
        "range": [
          900,
          948
        ],
        "loc": {
          "end": {
            "column": 48,
            "line": 18
          },
          "start": {
            "column": 0,
            "line": 18
          }
        }
      },
      "range": [
        900,
        949
      ],
      "loc": {
        "end": {
          "column": 49,
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
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "numOrDate",
          "optional": false,
          "range": [
            957,
            966
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 19
            },
            "start": {
              "column": 0,
              "line": 19
            }
          }
        },
        "right": {
          "type": "MemberExpression",
          "computed": true,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionOfDifferentReturnType1",
            "optional": false,
            "range": [
              969,
              996
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 19
              },
              "start": {
                "column": 12,
                "line": 19
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "raw": "10",
            "value": 10,
            "range": [
              997,
              999
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 19
              },
              "start": {
                "column": 40,
                "line": 19
              }
            }
          },
          "range": [
            969,
            1000
          ],
          "loc": {
            "end": {
              "column": 43,
              "line": 19
            },
            "start": {
              "column": 12,
              "line": 19
            }
          }
        },
        "range": [
          957,
          1000
        ],
        "loc": {
          "end": {
            "column": 43,
            "line": 19
          },
          "start": {
            "column": 0,
            "line": 19
          }
        }
      },
      "range": [
        957,
        1001
      ],
      "loc": {
        "end": {
          "column": 44,
          "line": 19
        },
        "start": {
          "column": 0,
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
            "name": "unionOfTypesWithAndWithoutStringSignature1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 82,
                  "line": 21
                },
                "start": {
                  "column": 46,
                  "line": 21
                }
              },
              "range": [
                1066,
                1102
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSIndexSignature",
                        "parameters": [
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
                                  "line": 21
                                },
                                "start": {
                                  "column": 52,
                                  "line": 21
                                }
                              },
                              "range": [
                                1072,
                                1080
                              ],
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "range": [
                                  1074,
                                  1080
                                ],
                                "loc": {
                                  "end": {
                                    "column": 60,
                                    "line": 21
                                  },
                                  "start": {
                                    "column": 54,
                                    "line": 21
                                  }
                                }
                              }
                            },
                            "range": [
                              1071,
                              1080
                            ],
                            "loc": {
                              "end": {
                                "column": 60,
                                "line": 21
                              },
                              "start": {
                                "column": 51,
                                "line": 21
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
                              "column": 69,
                              "line": 21
                            },
                            "start": {
                              "column": 61,
                              "line": 21
                            }
                          },
                          "range": [
                            1081,
                            1089
                          ],
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "range": [
                              1083,
                              1089
                            ],
                            "loc": {
                              "end": {
                                "column": 69,
                                "line": 21
                              },
                              "start": {
                                "column": 63,
                                "line": 21
                              }
                            }
                          }
                        },
                        "range": [
                          1070,
                          1090
                        ],
                        "loc": {
                          "end": {
                            "column": 70,
                            "line": 21
                          },
                          "start": {
                            "column": 50,
                            "line": 21
                          }
                        }
                      }
                    ],
                    "range": [
                      1068,
                      1092
                    ],
                    "loc": {
                      "end": {
                        "column": 72,
                        "line": 21
                      },
                      "start": {
                        "column": 48,
                        "line": 21
                      }
                    }
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "range": [
                      1095,
                      1102
                    ],
                    "loc": {
                      "end": {
                        "column": 82,
                        "line": 21
                      },
                      "start": {
                        "column": 75,
                        "line": 21
                      }
                    }
                  }
                ],
                "range": [
                  1068,
                  1102
                ],
                "loc": {
                  "end": {
                    "column": 82,
                    "line": 21
                  },
                  "start": {
                    "column": 48,
                    "line": 21
                  }
                }
              }
            },
            "range": [
              1024,
              1102
            ],
            "loc": {
              "end": {
                "column": 82,
                "line": 21
              },
              "start": {
                "column": 4,
                "line": 21
              }
            }
          },
          "init": null,
          "range": [
            1024,
            1102
          ],
          "loc": {
            "end": {
              "column": 82,
              "line": 21
            },
            "start": {
              "column": 4,
              "line": 21
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        1020,
        1103
      ],
      "loc": {
        "end": {
          "column": 83,
          "line": 21
        },
        "start": {
          "column": 0,
          "line": 21
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "anyVar",
          "optional": false,
          "range": [
            1104,
            1110
          ],
          "loc": {
            "end": {
              "column": 6,
              "line": 22
            },
            "start": {
              "column": 0,
              "line": 22
            }
          }
        },
        "right": {
          "type": "MemberExpression",
          "computed": true,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionOfTypesWithAndWithoutStringSignature1",
            "optional": false,
            "range": [
              1113,
              1155
            ],
            "loc": {
              "end": {
                "column": 51,
                "line": 22
              },
              "start": {
                "column": 9,
                "line": 22
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "raw": "\"hello\"",
            "value": "hello",
            "range": [
              1156,
              1163
            ],
            "loc": {
              "end": {
                "column": 59,
                "line": 22
              },
              "start": {
                "column": 52,
                "line": 22
              }
            }
          },
          "range": [
            1113,
            1164
          ],
          "loc": {
            "end": {
              "column": 60,
              "line": 22
            },
            "start": {
              "column": 9,
              "line": 22
            }
          }
        },
        "range": [
          1104,
          1164
        ],
        "loc": {
          "end": {
            "column": 60,
            "line": 22
          },
          "start": {
            "column": 0,
            "line": 22
          }
        }
      },
      "range": [
        1104,
        1165
      ],
      "loc": {
        "end": {
          "column": 61,
          "line": 22
        },
        "start": {
          "column": 0,
          "line": 22
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "anyVar",
          "optional": false,
          "range": [
            1173,
            1179
          ],
          "loc": {
            "end": {
              "column": 6,
              "line": 23
            },
            "start": {
              "column": 0,
              "line": 23
            }
          }
        },
        "right": {
          "type": "MemberExpression",
          "computed": true,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionOfTypesWithAndWithoutStringSignature1",
            "optional": false,
            "range": [
              1182,
              1224
            ],
            "loc": {
              "end": {
                "column": 51,
                "line": 23
              },
              "start": {
                "column": 9,
                "line": 23
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "raw": "10",
            "value": 10,
            "range": [
              1225,
              1227
            ],
            "loc": {
              "end": {
                "column": 54,
                "line": 23
              },
              "start": {
                "column": 52,
                "line": 23
              }
            }
          },
          "range": [
            1182,
            1228
          ],
          "loc": {
            "end": {
              "column": 55,
              "line": 23
            },
            "start": {
              "column": 9,
              "line": 23
            }
          }
        },
        "range": [
          1173,
          1228
        ],
        "loc": {
          "end": {
            "column": 55,
            "line": 23
          },
          "start": {
            "column": 0,
            "line": 23
          }
        }
      },
      "range": [
        1173,
        1229
      ],
      "loc": {
        "end": {
          "column": 56,
          "line": 23
        },
        "start": {
          "column": 0,
          "line": 23
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 63,
      "line": 23
    },
    "start": {
      "column": 1,
      "line": 1
    }
  },
  "hashbang": null
}
```
