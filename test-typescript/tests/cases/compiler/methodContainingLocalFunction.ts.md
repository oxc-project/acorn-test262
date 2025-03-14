__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    103,
    1048
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          126,
          255
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "exhibitBug",
              "optional": false,
              "range": [
                139,
                149
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 3
                },
                "start": {
                  "column": 11,
                  "line": 3
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
                149,
                253
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "FunctionDeclaration",
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "range": [
                        187,
                        190
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 4
                        },
                        "start": {
                          "column": 33,
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
                      "name": "localFunction",
                      "optional": false,
                      "range": [
                        171,
                        184
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 4
                        },
                        "start": {
                          "column": 17,
                          "line": 4
                        }
                      }
                    },
                    "params": [],
                    "range": [
                      162,
                      190
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 4
                      },
                      "start": {
                        "column": 8,
                        "line": 4
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
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 28,
                                "line": 5
                              },
                              "start": {
                                "column": 13,
                                "line": 5
                              }
                            },
                            "range": [
                              204,
                              219
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeLiteral",
                              "members": [
                                {
                                  "type": "TSCallSignatureDeclaration",
                                  "params": [],
                                  "returnType": {
                                    "type": "TSTypeAnnotation",
                                    "loc": {
                                      "end": {
                                        "column": 25,
                                        "line": 5
                                      },
                                      "start": {
                                        "column": 19,
                                        "line": 5
                                      }
                                    },
                                    "range": [
                                      210,
                                      216
                                    ],
                                    "typeAnnotation": {
                                      "type": "TSVoidKeyword",
                                      "range": [
                                        212,
                                        216
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 25,
                                          "line": 5
                                        },
                                        "start": {
                                          "column": 21,
                                          "line": 5
                                        }
                                      }
                                    }
                                  },
                                  "range": [
                                    208,
                                    217
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 26,
                                      "line": 5
                                    },
                                    "start": {
                                      "column": 17,
                                      "line": 5
                                    }
                                  }
                                }
                              ],
                              "range": [
                                206,
                                219
                              ],
                              "loc": {
                                "end": {
                                  "column": 28,
                                  "line": 5
                                },
                                "start": {
                                  "column": 15,
                                  "line": 5
                                }
                              }
                            }
                          },
                          "range": [
                            203,
                            219
                          ],
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 5
                            },
                            "start": {
                              "column": 12,
                              "line": 5
                            }
                          }
                        },
                        "init": null,
                        "range": [
                          203,
                          219
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 5
                          },
                          "start": {
                            "column": 12,
                            "line": 5
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      199,
                      220
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 5
                      },
                      "start": {
                        "column": 8,
                        "line": 5
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
                        "name": "x",
                        "optional": false,
                        "range": [
                          229,
                          230
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 6
                          },
                          "start": {
                            "column": 8,
                            "line": 6
                          }
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "localFunction",
                        "optional": false,
                        "range": [
                          233,
                          246
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 6
                          },
                          "start": {
                            "column": 12,
                            "line": 6
                          }
                        }
                      },
                      "range": [
                        229,
                        246
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 6
                        },
                        "start": {
                          "column": 8,
                          "line": 6
                        }
                      }
                    },
                    "range": [
                      229,
                      247
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 6
                      },
                      "start": {
                        "column": 8,
                        "line": 6
                      }
                    }
                  }
                ],
                "range": [
                  152,
                  253
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 7
                  },
                  "start": {
                    "column": 24,
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
                  "line": 7
                },
                "start": {
                  "column": 21,
                  "line": 3
                }
              }
            },
            "range": [
              132,
              253
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 7
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
            "line": 8
          },
          "start": {
            "column": 23,
            "line": 2
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BugExhibition",
        "optional": false,
        "range": [
          109,
          122
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 2
          },
          "start": {
            "column": 6,
            "line": 2
          }
        }
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 22,
            "line": 2
          },
          "start": {
            "column": 19,
            "line": 2
          }
        },
        "range": [
          122,
          125
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
                123,
                124
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 2
                },
                "start": {
                  "column": 20,
                  "line": 2
                }
              }
            },
            "out": false,
            "range": [
              123,
              124
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 2
              },
              "start": {
                "column": 20,
                "line": 2
              }
            }
          }
        ]
      },
      "range": [
        103,
        255
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          281,
          443
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
              "name": "exhibitBug",
              "optional": false,
              "range": [
                306,
                316
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 11
                },
                "start": {
                  "column": 23,
                  "line": 11
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
                316,
                441
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "FunctionDeclaration",
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "range": [
                        354,
                        357
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 12
                        },
                        "start": {
                          "column": 33,
                          "line": 12
                        }
                      }
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "localFunction",
                      "optional": false,
                      "range": [
                        338,
                        351
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 12
                        },
                        "start": {
                          "column": 17,
                          "line": 12
                        }
                      }
                    },
                    "params": [],
                    "range": [
                      329,
                      357
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 12
                      },
                      "start": {
                        "column": 8,
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
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 28,
                                "line": 13
                              },
                              "start": {
                                "column": 13,
                                "line": 13
                              }
                            },
                            "range": [
                              371,
                              386
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeLiteral",
                              "members": [
                                {
                                  "type": "TSCallSignatureDeclaration",
                                  "params": [],
                                  "returnType": {
                                    "type": "TSTypeAnnotation",
                                    "loc": {
                                      "end": {
                                        "column": 25,
                                        "line": 13
                                      },
                                      "start": {
                                        "column": 19,
                                        "line": 13
                                      }
                                    },
                                    "range": [
                                      377,
                                      383
                                    ],
                                    "typeAnnotation": {
                                      "type": "TSVoidKeyword",
                                      "range": [
                                        379,
                                        383
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 25,
                                          "line": 13
                                        },
                                        "start": {
                                          "column": 21,
                                          "line": 13
                                        }
                                      }
                                    }
                                  },
                                  "range": [
                                    375,
                                    384
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 26,
                                      "line": 13
                                    },
                                    "start": {
                                      "column": 17,
                                      "line": 13
                                    }
                                  }
                                }
                              ],
                              "range": [
                                373,
                                386
                              ],
                              "loc": {
                                "end": {
                                  "column": 28,
                                  "line": 13
                                },
                                "start": {
                                  "column": 15,
                                  "line": 13
                                }
                              }
                            }
                          },
                          "range": [
                            370,
                            386
                          ],
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 13
                            },
                            "start": {
                              "column": 12,
                              "line": 13
                            }
                          }
                        },
                        "init": null,
                        "range": [
                          370,
                          386
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 13
                          },
                          "start": {
                            "column": 12,
                            "line": 13
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      366,
                      387
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 13
                      },
                      "start": {
                        "column": 8,
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
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          396,
                          397
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
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "localFunction",
                        "optional": false,
                        "range": [
                          400,
                          413
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 14
                          },
                          "start": {
                            "column": 12,
                            "line": 14
                          }
                        }
                      },
                      "range": [
                        396,
                        413
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 14
                        },
                        "start": {
                          "column": 8,
                          "line": 14
                        }
                      }
                    },
                    "range": [
                      396,
                      414
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 14
                      },
                      "start": {
                        "column": 8,
                        "line": 14
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
                        430,
                        434
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 15
                        },
                        "start": {
                          "column": 15,
                          "line": 15
                        }
                      }
                    },
                    "range": [
                      423,
                      435
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 15
                      },
                      "start": {
                        "column": 8,
                        "line": 15
                      }
                    }
                  }
                ],
                "range": [
                  319,
                  441
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 16
                  },
                  "start": {
                    "column": 36,
                    "line": 11
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
                  "line": 16
                },
                "start": {
                  "column": 33,
                  "line": 11
                }
              }
            },
            "range": [
              287,
              441
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 16
              },
              "start": {
                "column": 4,
                "line": 11
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 17
          },
          "start": {
            "column": 24,
            "line": 10
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BugExhibition2",
        "optional": false,
        "range": [
          263,
          277
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 10
          },
          "start": {
            "column": 6,
            "line": 10
          }
        }
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 23,
            "line": 10
          },
          "start": {
            "column": 20,
            "line": 10
          }
        },
        "range": [
          277,
          280
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
                278,
                279
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 10
                },
                "start": {
                  "column": 21,
                  "line": 10
                }
              }
            },
            "out": false,
            "range": [
              278,
              279
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 10
              },
              "start": {
                "column": 21,
                "line": 10
              }
            }
          }
        ]
      },
      "range": [
        257,
        443
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 17
        },
        "start": {
          "column": 0,
          "line": 10
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          469,
          620
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "exhibitBug",
              "optional": false,
              "range": [
                482,
                492
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
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                492,
                618
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "FunctionDeclaration",
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "range": [
                        545,
                        548
                      ],
                      "loc": {
                        "end": {
                          "column": 51,
                          "line": 21
                        },
                        "start": {
                          "column": 48,
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
                      "name": "localGenericFunction",
                      "optional": false,
                      "range": [
                        514,
                        534
                      ],
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 21
                        },
                        "start": {
                          "column": 17,
                          "line": 21
                        }
                      }
                    },
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "u",
                        "optional": true,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 46,
                              "line": 21
                            },
                            "start": {
                              "column": 43,
                              "line": 21
                            }
                          },
                          "range": [
                            540,
                            543
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "range": [
                                542,
                                543
                              ],
                              "loc": {
                                "end": {
                                  "column": 46,
                                  "line": 21
                                },
                                "start": {
                                  "column": 45,
                                  "line": 21
                                }
                              }
                            },
                            "range": [
                              542,
                              543
                            ],
                            "loc": {
                              "end": {
                                "column": 46,
                                "line": 21
                              },
                              "start": {
                                "column": 45,
                                "line": 21
                              }
                            }
                          }
                        },
                        "range": [
                          538,
                          543
                        ],
                        "loc": {
                          "end": {
                            "column": 46,
                            "line": 21
                          },
                          "start": {
                            "column": 41,
                            "line": 21
                          }
                        }
                      }
                    ],
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 21
                        },
                        "start": {
                          "column": 37,
                          "line": 21
                        }
                      },
                      "range": [
                        534,
                        537
                      ],
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "const": false,
                          "in": false,
                          "name": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "range": [
                              535,
                              536
                            ],
                            "loc": {
                              "end": {
                                "column": 39,
                                "line": 21
                              },
                              "start": {
                                "column": 38,
                                "line": 21
                              }
                            }
                          },
                          "out": false,
                          "range": [
                            535,
                            536
                          ],
                          "loc": {
                            "end": {
                              "column": 39,
                              "line": 21
                            },
                            "start": {
                              "column": 38,
                              "line": 21
                            }
                          }
                        }
                      ]
                    },
                    "range": [
                      505,
                      548
                    ],
                    "loc": {
                      "end": {
                        "column": 51,
                        "line": 21
                      },
                      "start": {
                        "column": 8,
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
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 28,
                                "line": 22
                              },
                              "start": {
                                "column": 13,
                                "line": 22
                              }
                            },
                            "range": [
                              562,
                              577
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeLiteral",
                              "members": [
                                {
                                  "type": "TSCallSignatureDeclaration",
                                  "params": [],
                                  "returnType": {
                                    "type": "TSTypeAnnotation",
                                    "loc": {
                                      "end": {
                                        "column": 25,
                                        "line": 22
                                      },
                                      "start": {
                                        "column": 19,
                                        "line": 22
                                      }
                                    },
                                    "range": [
                                      568,
                                      574
                                    ],
                                    "typeAnnotation": {
                                      "type": "TSVoidKeyword",
                                      "range": [
                                        570,
                                        574
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 25,
                                          "line": 22
                                        },
                                        "start": {
                                          "column": 21,
                                          "line": 22
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
                                      "column": 26,
                                      "line": 22
                                    },
                                    "start": {
                                      "column": 17,
                                      "line": 22
                                    }
                                  }
                                }
                              ],
                              "range": [
                                564,
                                577
                              ],
                              "loc": {
                                "end": {
                                  "column": 28,
                                  "line": 22
                                },
                                "start": {
                                  "column": 15,
                                  "line": 22
                                }
                              }
                            }
                          },
                          "range": [
                            561,
                            577
                          ],
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 22
                            },
                            "start": {
                              "column": 12,
                              "line": 22
                            }
                          }
                        },
                        "init": null,
                        "range": [
                          561,
                          577
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 22
                          },
                          "start": {
                            "column": 12,
                            "line": 22
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      557,
                      578
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 22
                      },
                      "start": {
                        "column": 8,
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
                        "name": "x",
                        "optional": false,
                        "range": [
                          587,
                          588
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
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "localGenericFunction",
                        "optional": false,
                        "range": [
                          591,
                          611
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 23
                          },
                          "start": {
                            "column": 12,
                            "line": 23
                          }
                        }
                      },
                      "range": [
                        587,
                        611
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 23
                        },
                        "start": {
                          "column": 8,
                          "line": 23
                        }
                      }
                    },
                    "range": [
                      587,
                      612
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
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
                  495,
                  618
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 24
                  },
                  "start": {
                    "column": 24,
                    "line": 20
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
                  "line": 24
                },
                "start": {
                  "column": 21,
                  "line": 20
                }
              }
            },
            "range": [
              475,
              618
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 24
              },
              "start": {
                "column": 4,
                "line": 20
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 25
          },
          "start": {
            "column": 24,
            "line": 19
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BugExhibition3",
        "optional": false,
        "range": [
          451,
          465
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 19
          },
          "start": {
            "column": 6,
            "line": 19
          }
        }
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 23,
            "line": 19
          },
          "start": {
            "column": 20,
            "line": 19
          }
        },
        "range": [
          465,
          468
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
                466,
                467
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 19
                },
                "start": {
                  "column": 21,
                  "line": 19
                }
              }
            },
            "out": false,
            "range": [
              466,
              467
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 19
              },
              "start": {
                "column": 21,
                "line": 19
              }
            }
          }
        ]
      },
      "range": [
        445,
        620
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 25
        },
        "start": {
          "column": 0,
          "line": 19
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          630,
          749
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "exhibit",
              "optional": false,
              "range": [
                636,
                643
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 28
                },
                "start": {
                  "column": 4,
                  "line": 28
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
                643,
                747
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
                          "name": "funcExpr",
                          "optional": false,
                          "range": [
                            660,
                            668
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 29
                            },
                            "start": {
                              "column": 12,
                              "line": 29
                            }
                          }
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "async": false,
                          "body": {
                            "type": "BlockStatement",
                            "body": [],
                            "range": [
                              685,
                              688
                            ],
                            "loc": {
                              "end": {
                                "column": 40,
                                "line": 29
                              },
                              "start": {
                                "column": 37,
                                "line": 29
                              }
                            }
                          },
                          "expression": false,
                          "generator": false,
                          "id": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "u",
                              "optional": true,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "loc": {
                                  "end": {
                                    "column": 32,
                                    "line": 29
                                  },
                                  "start": {
                                    "column": 29,
                                    "line": 29
                                  }
                                },
                                "range": [
                                  677,
                                  680
                                ],
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "U",
                                    "optional": false,
                                    "range": [
                                      679,
                                      680
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 32,
                                        "line": 29
                                      },
                                      "start": {
                                        "column": 31,
                                        "line": 29
                                      }
                                    }
                                  },
                                  "range": [
                                    679,
                                    680
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 32,
                                      "line": 29
                                    },
                                    "start": {
                                      "column": 31,
                                      "line": 29
                                    }
                                  }
                                }
                              },
                              "range": [
                                675,
                                680
                              ],
                              "loc": {
                                "end": {
                                  "column": 32,
                                  "line": 29
                                },
                                "start": {
                                  "column": 27,
                                  "line": 29
                                }
                              }
                            }
                          ],
                          "typeParameters": {
                            "type": "TSTypeParameterDeclaration",
                            "loc": {
                              "end": {
                                "column": 26,
                                "line": 29
                              },
                              "start": {
                                "column": 23,
                                "line": 29
                              }
                            },
                            "range": [
                              671,
                              674
                            ],
                            "params": [
                              {
                                "type": "TSTypeParameter",
                                "const": false,
                                "in": false,
                                "name": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "U",
                                  "optional": false,
                                  "range": [
                                    672,
                                    673
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
                                "out": false,
                                "range": [
                                  672,
                                  673
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
                              }
                            ]
                          },
                          "range": [
                            671,
                            688
                          ],
                          "loc": {
                            "end": {
                              "column": 40,
                              "line": 29
                            },
                            "start": {
                              "column": 23,
                              "line": 29
                            }
                          }
                        },
                        "range": [
                          660,
                          688
                        ],
                        "loc": {
                          "end": {
                            "column": 40,
                            "line": 29
                          },
                          "start": {
                            "column": 12,
                            "line": 29
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      656,
                      689
                    ],
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 29
                      },
                      "start": {
                        "column": 8,
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
                                "column": 13,
                                "line": 30
                              }
                            },
                            "range": [
                              703,
                              718
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeLiteral",
                              "members": [
                                {
                                  "type": "TSCallSignatureDeclaration",
                                  "params": [],
                                  "returnType": {
                                    "type": "TSTypeAnnotation",
                                    "loc": {
                                      "end": {
                                        "column": 25,
                                        "line": 30
                                      },
                                      "start": {
                                        "column": 19,
                                        "line": 30
                                      }
                                    },
                                    "range": [
                                      709,
                                      715
                                    ],
                                    "typeAnnotation": {
                                      "type": "TSVoidKeyword",
                                      "range": [
                                        711,
                                        715
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 25,
                                          "line": 30
                                        },
                                        "start": {
                                          "column": 21,
                                          "line": 30
                                        }
                                      }
                                    }
                                  },
                                  "range": [
                                    707,
                                    716
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 26,
                                      "line": 30
                                    },
                                    "start": {
                                      "column": 17,
                                      "line": 30
                                    }
                                  }
                                }
                              ],
                              "range": [
                                705,
                                718
                              ],
                              "loc": {
                                "end": {
                                  "column": 28,
                                  "line": 30
                                },
                                "start": {
                                  "column": 15,
                                  "line": 30
                                }
                              }
                            }
                          },
                          "range": [
                            702,
                            718
                          ],
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 30
                            },
                            "start": {
                              "column": 12,
                              "line": 30
                            }
                          }
                        },
                        "init": null,
                        "range": [
                          702,
                          718
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 30
                          },
                          "start": {
                            "column": 12,
                            "line": 30
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      698,
                      719
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 30
                      },
                      "start": {
                        "column": 8,
                        "line": 30
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
                        "name": "x",
                        "optional": false,
                        "range": [
                          728,
                          729
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 31
                          },
                          "start": {
                            "column": 8,
                            "line": 31
                          }
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "funcExpr",
                        "optional": false,
                        "range": [
                          732,
                          740
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 31
                          },
                          "start": {
                            "column": 12,
                            "line": 31
                          }
                        }
                      },
                      "range": [
                        728,
                        740
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 31
                        },
                        "start": {
                          "column": 8,
                          "line": 31
                        }
                      }
                    },
                    "range": [
                      728,
                      741
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 31
                      },
                      "start": {
                        "column": 8,
                        "line": 31
                      }
                    }
                  }
                ],
                "range": [
                  646,
                  747
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 32
                  },
                  "start": {
                    "column": 14,
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
                  "column": 5,
                  "line": 32
                },
                "start": {
                  "column": 11,
                  "line": 28
                }
              }
            },
            "range": [
              636,
              747
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 32
              },
              "start": {
                "column": 4,
                "line": 28
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 33
          },
          "start": {
            "column": 8,
            "line": 27
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
          628,
          629
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 27
          },
          "start": {
            "column": 6,
            "line": 27
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        622,
        749
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 33
        },
        "start": {
          "column": 0,
          "line": 27
        }
      }
    },
    {
      "type": "TSModuleDeclaration",
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "range": [
              766,
              896
            ],
            "attributes": [],
            "declaration": {
              "type": "FunctionDeclaration",
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "FunctionDeclaration",
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "range": [
                        830,
                        833
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 37
                        },
                        "start": {
                          "column": 33,
                          "line": 37
                        }
                      }
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "localFunction",
                      "optional": false,
                      "range": [
                        814,
                        827
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 37
                        },
                        "start": {
                          "column": 17,
                          "line": 37
                        }
                      }
                    },
                    "params": [],
                    "range": [
                      805,
                      833
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 37
                      },
                      "start": {
                        "column": 8,
                        "line": 37
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
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 28,
                                "line": 38
                              },
                              "start": {
                                "column": 13,
                                "line": 38
                              }
                            },
                            "range": [
                              847,
                              862
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeLiteral",
                              "members": [
                                {
                                  "type": "TSCallSignatureDeclaration",
                                  "params": [],
                                  "returnType": {
                                    "type": "TSTypeAnnotation",
                                    "loc": {
                                      "end": {
                                        "column": 25,
                                        "line": 38
                                      },
                                      "start": {
                                        "column": 19,
                                        "line": 38
                                      }
                                    },
                                    "range": [
                                      853,
                                      859
                                    ],
                                    "typeAnnotation": {
                                      "type": "TSVoidKeyword",
                                      "range": [
                                        855,
                                        859
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 25,
                                          "line": 38
                                        },
                                        "start": {
                                          "column": 21,
                                          "line": 38
                                        }
                                      }
                                    }
                                  },
                                  "range": [
                                    851,
                                    860
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 26,
                                      "line": 38
                                    },
                                    "start": {
                                      "column": 17,
                                      "line": 38
                                    }
                                  }
                                }
                              ],
                              "range": [
                                849,
                                862
                              ],
                              "loc": {
                                "end": {
                                  "column": 28,
                                  "line": 38
                                },
                                "start": {
                                  "column": 15,
                                  "line": 38
                                }
                              }
                            }
                          },
                          "range": [
                            846,
                            862
                          ],
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 38
                            },
                            "start": {
                              "column": 12,
                              "line": 38
                            }
                          }
                        },
                        "init": null,
                        "range": [
                          846,
                          862
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 38
                          },
                          "start": {
                            "column": 12,
                            "line": 38
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      842,
                      863
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 38
                      },
                      "start": {
                        "column": 8,
                        "line": 38
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
                        "name": "x",
                        "optional": false,
                        "range": [
                          872,
                          873
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 39
                          },
                          "start": {
                            "column": 8,
                            "line": 39
                          }
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "localFunction",
                        "optional": false,
                        "range": [
                          876,
                          889
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 39
                          },
                          "start": {
                            "column": 12,
                            "line": 39
                          }
                        }
                      },
                      "range": [
                        872,
                        889
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 39
                        },
                        "start": {
                          "column": 8,
                          "line": 39
                        }
                      }
                    },
                    "range": [
                      872,
                      890
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 39
                      },
                      "start": {
                        "column": 8,
                        "line": 39
                      }
                    }
                  }
                ],
                "range": [
                  795,
                  896
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 40
                  },
                  "start": {
                    "column": 33,
                    "line": 36
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "exhibitBug",
                "optional": false,
                "range": [
                  782,
                  792
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 36
                  },
                  "start": {
                    "column": 20,
                    "line": 36
                  }
                }
              },
              "params": [],
              "range": [
                773,
                896
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 40
                },
                "start": {
                  "column": 11,
                  "line": 36
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 5,
                "line": 40
              },
              "start": {
                "column": 4,
                "line": 36
              }
            }
          }
        ],
        "range": [
          760,
          898
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 41
          },
          "start": {
            "column": 9,
            "line": 35
          }
        }
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          758,
          759
        ],
        "decorators": [],
        "name": "M",
        "optional": false,
        "loc": {
          "end": {
            "column": 8,
            "line": 35
          },
          "start": {
            "column": 7,
            "line": 35
          }
        }
      },
      "kind": "module",
      "range": [
        751,
        898
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 41
        },
        "start": {
          "column": 0,
          "line": 35
        }
      }
    },
    {
      "type": "TSEnumDeclaration",
      "body": {
        "type": "TSEnumBody",
        "range": [
          907,
          1048
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
                913,
                914
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 44
                },
                "start": {
                  "column": 4,
                  "line": 44
                }
              }
            },
            "initializer": {
              "type": "CallExpression",
              "arguments": [],
              "callee": {
                "type": "ArrowFunctionExpression",
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "FunctionDeclaration",
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "range": [
                          959,
                          962
                        ],
                        "loc": {
                          "end": {
                            "column": 36,
                            "line": 45
                          },
                          "start": {
                            "column": 33,
                            "line": 45
                          }
                        }
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "localFunction",
                        "optional": false,
                        "range": [
                          943,
                          956
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 45
                          },
                          "start": {
                            "column": 17,
                            "line": 45
                          }
                        }
                      },
                      "params": [],
                      "range": [
                        934,
                        962
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 45
                        },
                        "start": {
                          "column": 8,
                          "line": 45
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
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "loc": {
                                "end": {
                                  "column": 28,
                                  "line": 46
                                },
                                "start": {
                                  "column": 13,
                                  "line": 46
                                }
                              },
                              "range": [
                                976,
                                991
                              ],
                              "typeAnnotation": {
                                "type": "TSTypeLiteral",
                                "members": [
                                  {
                                    "type": "TSCallSignatureDeclaration",
                                    "params": [],
                                    "returnType": {
                                      "type": "TSTypeAnnotation",
                                      "loc": {
                                        "end": {
                                          "column": 25,
                                          "line": 46
                                        },
                                        "start": {
                                          "column": 19,
                                          "line": 46
                                        }
                                      },
                                      "range": [
                                        982,
                                        988
                                      ],
                                      "typeAnnotation": {
                                        "type": "TSVoidKeyword",
                                        "range": [
                                          984,
                                          988
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 25,
                                            "line": 46
                                          },
                                          "start": {
                                            "column": 21,
                                            "line": 46
                                          }
                                        }
                                      }
                                    },
                                    "range": [
                                      980,
                                      989
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 26,
                                        "line": 46
                                      },
                                      "start": {
                                        "column": 17,
                                        "line": 46
                                      }
                                    }
                                  }
                                ],
                                "range": [
                                  978,
                                  991
                                ],
                                "loc": {
                                  "end": {
                                    "column": 28,
                                    "line": 46
                                  },
                                  "start": {
                                    "column": 15,
                                    "line": 46
                                  }
                                }
                              }
                            },
                            "range": [
                              975,
                              991
                            ],
                            "loc": {
                              "end": {
                                "column": 28,
                                "line": 46
                              },
                              "start": {
                                "column": 12,
                                "line": 46
                              }
                            }
                          },
                          "init": null,
                          "range": [
                            975,
                            991
                          ],
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 46
                            },
                            "start": {
                              "column": 12,
                              "line": 46
                            }
                          }
                        }
                      ],
                      "declare": false,
                      "kind": "var",
                      "range": [
                        971,
                        992
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 46
                        },
                        "start": {
                          "column": 8,
                          "line": 46
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
                          "name": "x",
                          "optional": false,
                          "range": [
                            1001,
                            1002
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 47
                            },
                            "start": {
                              "column": 8,
                              "line": 47
                            }
                          }
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "localFunction",
                          "optional": false,
                          "range": [
                            1005,
                            1018
                          ],
                          "loc": {
                            "end": {
                              "column": 25,
                              "line": 47
                            },
                            "start": {
                              "column": 12,
                              "line": 47
                            }
                          }
                        },
                        "range": [
                          1001,
                          1018
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 47
                          },
                          "start": {
                            "column": 8,
                            "line": 47
                          }
                        }
                      },
                      "range": [
                        1001,
                        1019
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 47
                        },
                        "start": {
                          "column": 8,
                          "line": 47
                        }
                      }
                    },
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Literal",
                        "raw": "0",
                        "value": 0,
                        "range": [
                          1035,
                          1036
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 48
                          },
                          "start": {
                            "column": 15,
                            "line": 48
                          }
                        }
                      },
                      "range": [
                        1028,
                        1037
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 48
                        },
                        "start": {
                          "column": 8,
                          "line": 48
                        }
                      }
                    }
                  ],
                  "range": [
                    924,
                    1043
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 49
                    },
                    "start": {
                      "column": 15,
                      "line": 44
                    }
                  }
                },
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "range": [
                  918,
                  1043
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 49
                  },
                  "start": {
                    "column": 9,
                    "line": 44
                  }
                }
              },
              "optional": false,
              "range": [
                917,
                1046
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 49
                },
                "start": {
                  "column": 8,
                  "line": 44
                }
              }
            },
            "range": [
              913,
              1046
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 49
              },
              "start": {
                "column": 4,
                "line": 44
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 50
          },
          "start": {
            "column": 7,
            "line": 43
          }
        }
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E",
        "optional": false,
        "range": [
          905,
          906
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 43
          },
          "start": {
            "column": 5,
            "line": 43
          }
        }
      },
      "range": [
        900,
        1048
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 50
        },
        "start": {
          "column": 0,
          "line": 43
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 50
    },
    "start": {
      "column": 0,
      "line": 2
    }
  },
  "hashbang": null
}
```
